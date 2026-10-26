const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const THREE = require('../assets/vendor/three.min.js');
const source = fs.readFileSync(path.join(__dirname, '../assets/portfolio.js'), 'utf8');

function loadPortfolio() {
  const elements = new Map();
  function element() {
    const classes = new Set(['hidden']);
    return {
      style: {}, handlers: {}, innerHTML: '', hidden: false,
      classList: { add: value => classes.add(value), remove: value => classes.delete(value), contains: value => classes.has(value) },
      addEventListener(name, handler) { this.handlers[name] = handler; },
      setPointerCapture() {}, setAttribute() {}, appendChild() {}, focus() {},
      contains(target) { return target === this; },
      querySelector() { return element(); }, querySelectorAll() { return []; }
    };
  }
  const document = {
    body: element(), handlers: {}, hidden: false,
    activeElement: element(), createElement: element,
    getElementById(id) { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); },
    addEventListener(name, handler) { this.handlers[name] = handler; },
    querySelectorAll() { return []; }
  };
  const window = { innerWidth: 1440, innerHeight: 900, devicePixelRatio: 1, handlers: {},
    matchMedia: () => ({ matches: false }),
    addEventListener(name, handler) { this.handlers[name] = handler; }
  };
  const context = vm.createContext({ THREE, document, window, console, atob, setInterval() {}, requestAnimationFrame() {} });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/models/vietnam-models.js'), 'utf8'), context);
  vm.runInContext(source, context);
  const container = document.getElementById('canvas-container');
  vm.runInContext('mouse = new THREE.Vector2(); camera = new THREE.PerspectiveCamera(36, 1.6, .1, 120); raycaster = new THREE.Raycaster();', context);
  const selected = [];
  context.focusStation = id => selected.push(id);
  vm.runInContext("raycaster.intersectObjects = () => [{object: {userData: {stationId: 'uxui'}}}];", context);
  context.setupInteractionEvents(container);
  const pointer = (x, y, pointerId = 1) => ({ clientX: x, clientY: y, pointerId, button: 0, target: container });
  return { context, container, window, document, selected, pointer };
}

test('dragging and returning to the start never opens a station', () => {
  const app = loadPortfolio();
  app.container.handlers.pointerdown(app.pointer(100, 100));
  app.window.handlers.pointermove(app.pointer(180, 140));
  app.window.handlers.pointermove(app.pointer(100, 100));
  app.container.handlers.pointerup(app.pointer(100, 100));
  assert.equal(app.selected.length, 0);
});

test('touch tap opens a station using tap coordinates, without a preceding move', () => {
  const app = loadPortfolio();
  app.container.handlers.pointerdown(app.pointer(360, 450));
  app.container.handlers.pointerup(app.pointer(360, 450));
  assert.deepEqual(app.selected, ['uxui']);
  assert.equal(vm.runInContext('mouse.x', app.context), -0.5);
  assert.equal(vm.runInContext('mouse.y', app.context), 0);
});

test('cancelled gestures and unrelated pointers do not open a station', () => {
  const app = loadPortfolio();
  app.container.handlers.pointerdown(app.pointer(100, 100));
  app.container.handlers.pointerup(app.pointer(100, 100, 2));
  app.container.handlers.pointercancel();
  app.container.handlers.pointerup(app.pointer(100, 100));
  assert.equal(app.selected.length, 0);
  assert.equal(app.window.handlers.pointerup, undefined);
});

test('overview keeps all five station labels inside narrow and wide screens', () => {
  const { context } = loadPortfolio();
  for (const aspect of [390 / 844, 844 / 390, 1440 / 900]) {
    context.aspect = aspect;
    const visible = vm.runInContext(`
      camera.aspect = aspect;
      camera.position.copy(camState.currentPos);
      camera.lookAt(camState.currentLookAt);
      fitCameraToViewport(); camera.updateMatrixWorld();
      STATIONS_DATA.every(station => {
        const point = new THREE.Vector3(station.position.x, station.position.y + (station.id === 'uxui' ? 3.25 : 2.55), station.position.z).project(camera);
        return Math.abs(point.x) < .95 && Math.abs(point.y) < .95;
      });
    `, context);
    assert.equal(visible, true, `Stations must fit aspect ${aspect}`);
  }
});

test('complete scene builds all five stations and supports every lighting mode', () => {
  const { context, document } = loadPortfolio();
  context.THREE = { ...THREE, WebGLRenderer: class {
    constructor() { this.shadowMap = {}; this.domElement = {}; }
    setSize() {} setPixelRatio() {} render() {}
  }, TextureLoader: class { load() { return new THREE.Texture(); } } };
  context.window.handlers.DOMContentLoaded();
  assert.equal(document.getElementById('scene-status').hidden, true);
  assert.equal(vm.runInContext('stationMeshes.length', context), 5);
  assert.equal(vm.runInContext('Object.keys(stationMap).length', context), 5);
  assert.equal(vm.runInContext("stationMap.uxui.group.getObjectByName('visual').name",context),'visual');
  assert.equal(vm.runInContext('stationMap.uxui.group.position.x',context),.4);
  assert.equal(vm.runInContext('stationMap.uxui.group.position.z',context),.2);
  assert.ok(vm.runInContext("scene.getObjectByName('parchment-terrain') !== undefined",context));
  assert.ok(vm.runInContext("scene.getObjectByName('stone-walkways').count > 200 && scene.getObjectByName('stone-walkways').instanceMatrix.array.every(Number.isFinite)",context));
  context.togglePetals();assert.equal(document.body.classList.contains('petals-enabled'),false);
  context.togglePetals();assert.equal(document.body.classList.contains('petals-enabled'),true);
  for (const mode of ['day', 'sunset', 'night']) context.setAtmosphere(mode);
});

test('automatic lighting follows Vietnam time, blends transitions and handles midnight', () => {
  const { context } = loadPortfolio();
  for (const [instant, mode, clock] of [
    ['2026-10-26T17:00:00Z', 'night', '00:00'],
    ['2026-10-26T05:00:00Z', 'day', '12:00'],
    ['2026-10-26T10:30:00Z', 'sunset', '17:30'],
    ['2026-10-26T12:00:00Z', 'night', '19:00'],
  ]) {
    const actual=context.getLiveAtmosphere(new Date(instant));
    assert.equal(actual.from,mode);assert.equal(actual.clock,clock);
    assert.ok(actual.mix>=0&&actual.mix<=1);
  }
  const transition=context.getLiveAtmosphere(new Date('2026-10-26T09:45:00Z'));
  assert.equal(transition.from,'day');assert.equal(transition.to,'sunset');assert.equal(transition.mix,.5);
  context.setAtmosphere('night');assert.equal(vm.runInContext('automaticAtmosphere',context),false);
  context.enableLiveAtmosphere();assert.equal(vm.runInContext('automaticAtmosphere',context),true);
});

test('3D petals land, remain on the surface, fade, and recycle without invalid transforms', () => {
  const { context }=loadPortfolio();
  const result=vm.runInContext(`
    mapRootGroup=new THREE.Group();
    const ground=new THREE.Mesh(new THREE.BoxGeometry(17,.1,12),new THREE.MeshStandardMaterial());
    ground.position.y=-.05;mapRootGroup.add(ground);buildPetalField();
    const petal=petalField.userData.petals[0];
    petal.stage='falling';petal.y=.03;petal.speed=.4;updatePetalField(.1);
    const landed=petal.stage;
    petal.restDuration=3;petal.restAge=0;updatePetalField(2);
    const held={stage:petal.stage,opacity:petalField.geometry.attributes.petalOpacity.getX(0)};
    updatePetalField(1.7);
    const fading=petalField.geometry.attributes.petalOpacity.getX(0);
    updatePetalField(1);
    ({landed,held,fading,recycled:petal.stage,count:petalField.count,finite:petalField.instanceMatrix.array.every(Number.isFinite)});
  `,context);
  assert.equal(result.landed,'resting');assert.equal(result.held.stage,'resting');
  assert.ok(result.held.opacity>.9);assert.ok(result.fading>0&&result.fading<.6);
  assert.equal(result.recycled,'falling');assert.equal(result.count,56);assert.equal(result.finite,true);
});

test('Blender models retain millimeter bounds, valid indices and a bounded render budget', () => {
  const { context } = loadPortfolio();
  const result = vm.runInContext(`
    loadVietnamModels();
    let triangles = 0, calls = 0;
    const models = ['uxui', 'visual', 'system', 'graphic', 'contact', 'environment'].map(id => {
      const group = vietnamModelLibrary.getObjectByName(id);
      group.traverse(mesh => {
        if (!mesh.isMesh) return;
        calls++;
        const { position, normal } = mesh.geometry.attributes;
        const color=mesh.geometry.attributes.color;
        if(color && (!color.normalized || !color.array.every(Number.isFinite))) throw Error(id + ': invalid vertex colors');
        if (!position.array.every(Number.isFinite) || !normal.array.every(Number.isFinite)) throw Error(id + ': invalid vertex');
        if (!mesh.geometry.index.array.every(i => i < position.count)) throw Error(id + ': invalid index');
        if (!normal.normalized) throw Error(id + ': missing normal normalization');
        triangles += mesh.geometry.index.count / 3;
      });
      const size = new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3());
      return { id, x:size.x, y:size.y, z:size.z };
    });
    ({models, triangles, calls});
  `, context);
  assert.ok(result.calls <= 105);
  assert.ok(result.triangles < 235000);
  for (const model of result.models.slice(0,5)) {
    assert.ok(model.x > 1 && model.x < 4, model.id);
    assert.ok(model.y > 1 && model.y < 3.6, model.id);
    assert.ok(model.z > 1 && model.z < 4, model.id);
  }
});
