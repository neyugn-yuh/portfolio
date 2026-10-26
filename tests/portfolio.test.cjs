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
  const context = vm.createContext({ THREE, document, window, console, requestAnimationFrame() {} });
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
  } };
  context.window.handlers.DOMContentLoaded();
  assert.equal(document.getElementById('scene-status').hidden, true);
  assert.equal(vm.runInContext('stationMeshes.length', context), 5);
  assert.equal(vm.runInContext('Object.keys(stationMap).length', context), 5);
  for (const mode of ['day', 'sunset', 'night']) context.setAtmosphere(mode);
});
