import bpy, math, random, re, ast, json, textwrap, argparse, sys
from pathlib import Path
from mathutils import Vector
ROOT=Path(__file__).resolve().parent.parent
parser=argparse.ArgumentParser()
parser.add_argument('--output-dir',default=str(ROOT/'work'))
args=parser.parse_args(sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else [])
OUT=Path(args.output_dir);OUT.mkdir(parents=True,exist_ok=True)
source=(ROOT/'scripts/build-vietnam.py').read_text(encoding='utf8')
materials={m.name:m for m in bpy.data.materials}
exec(source[source.index('def v('):source.index("start('uxui')")])
exec(source[source.index('def karst('):source.index('for args in [',source.index('def karst('))])
locations=ast.literal_eval(re.search(r'^locations=(.+)$',source,re.M).group(1))
for name,location in locations.items():
    for obj in bpy.data.collections[name].objects:obj.location-=v(location)
collection=bpy.data.collections['environment']
for obj in list(collection.objects):
    if obj.name.split('.')[0] in ['Limestone karst','Cliff vegetation','Weathered limestone','Erosion seam','Cliff fern leaves','Cliff vine']:
        bpy.data.objects.remove(obj,do_unlink=True)
for name,color in [('karst','7d8377'),('karstLight','a7ac9c'),('moss','687e4e')]:
    m=materials[name];m['hex']=int(color,16)
    rgb=tuple(int(color[i:i+2],16)/255 for i in (0,2,4));linear=tuple(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in rgb)
    m.diffuse_color=(*rgb,1);m.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value=(*linear,1)
random.seed(64)
for args in [(-6.65,.75,.65,2.5),(-6.2,1.55,.5,1.7),(-7.1,1.7,.48,1.65),(-.6,-2.5,.48,1.8),(5.6,-4.1,.72,2.6),(6.35,1.1,.54,1.9)]:karst(*args)
# Export only scene collections. Decorative cutouts remain separate authoring assets.
ROOT=str(ROOT);OUT=str(OUT)
exec(source[source.index('# Native Three.js ObjectLoader'):source.index('# Arrange all collections')])
for name,location in locations.items():
    for obj in bpy.data.collections[name].objects:obj.location+=v(location)

# Reuse the exact folded-leaf and five-petal shapes of the scene's trees.
helper_start=source.index('    def polygon(',source.index('def tree('))
helper_end=source.index('    trunk_points=',helper_start)
exec(textwrap.dedent(source[helper_start:helper_end]))
for flower,name in [('pink','frame-pink'),('mai','frame-gold')]:
    previous=bpy.data.collections.get(name)
    if previous:
        for obj in list(previous.objects):bpy.data.objects.remove(obj,do_unlink=True)
        bpy.data.collections.remove(previous)
    collection=bpy.data.collections.new(name);bpy.context.scene.collection.children.link(collection)
    s=1;batches={}
    tube('Botanical frame stem',[(-1.2,-1.25,0),(-.92,-.7,.03),(-.45,-.1,0),(-.1,.48,-.04),(.35,.96,0),(.72,1.3,.02)],.042,'wood',rend=.007,sides=10)
    tips=[(-.7,.35,.05),(.6,-.08,.04),(.92,.43,0),(-.4,.87,-.04),(.29,.67,.08),(.87,1.30,.03),(.22,1.38,-.02)]
    starts=[(-.9,-.6,0),(-.7,-.4,0),(-.4,.0,0),(-.25,.25,0),(-.15,.40,0),(.3,.9,0),(.18,.82,0)]
    for i,(a,b) in enumerate(zip(starts,tips)):
        middle=tuple(a[k]*.45+b[k]*.55 for k in range(3));tube('Botanical frame twig',[a,middle,b],.015,'woodLight',rend=.003,sides=7)
        for j in range(11):
            t=j/11;c=tuple(middle[k]*(1-t)+b[k]*t for k in range(3));angle=i*1.1+j*2.4
            leaf((c[0]+math.cos(angle)*.07,c[1]+random.uniform(-.05,.08),c[2]+math.sin(angle)*.08),random.uniform(.14,.21),random.uniform(.045,.075),angle,random.uniform(-.3,.5),'leaf' if j%3 else 'leafLight')
        for j in range(9):
            angle=j*2.4+i;point=(b[0]+math.cos(angle)*.15,b[1]+math.sin(angle)*.13,b[2]+random.uniform(-.10,.12))
            blossom(point,random.uniform(.06,.085),angle)
    for mat,(points,faces) in batches.items():mesh('Botanical frame '+mat,points,faces,mat)
    collection.hide_render=True;collection.hide_viewport=True
bpy.context.preferences.filepaths.save_version=0
bpy.ops.wm.save_as_mainfile(filepath=OUT+'/linh-canh-vietnam.blend')
scene=bpy.context.scene;cam=scene.camera;scene.cycles.samples=24
scene.render.resolution_x=700;scene.render.resolution_y=900;scene.render.resolution_percentage=100;scene.render.film_transparent=True
for c in scene.collection.children:
    if c.name in locations:c.hide_render=True
for name in ['frame-pink','frame-gold']:
    c=bpy.data.collections[name];c.hide_render=False
    target=v((-.1,.12,0));cam.location=target+Vector((.7,-7,1.5));cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=3.15
    scene.render.filepath=ROOT+'/assets/models/'+name+'.png';bpy.ops.render.render(write_still=True);c.hide_render=True
scene.render.resolution_x=700;scene.render.resolution_y=700
c=bpy.data.collections['environment'];c.hide_render=False
for obj in c.objects:obj.hide_render=obj.name.split('.')[0] not in ['Weathered limestone','Erosion seam','Cliff fern leaves','Cliff vine']
target=v((-6.5,1.2,1.0));cam.location=target+Vector((4,-6,3.5));cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=4.1
scene.render.filepath=OUT+'/mountain-detail.png';bpy.ops.render.render(write_still=True)
print('Landscape and botanical frames complete')
