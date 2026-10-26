import bpy, math, random, json, os, sys, argparse
from pathlib import Path
from mathutils import Vector

ROOT = str(Path(__file__).resolve().parent.parent)
parser = argparse.ArgumentParser()
parser.add_argument('--output-dir', default=str(Path(ROOT) / 'work'))
args = parser.parse_args(sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else [])
OUT = args.output_dir
os.makedirs(ROOT + '/assets/models', exist_ok=True)
os.makedirs(OUT, exist_ok=True)
random.seed(24)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for c in list(bpy.data.collections):
    if c.name != 'Collection': bpy.data.collections.remove(c)
collection = None
materials = {}
def material(name, color, rough=.8, metal=0, glow=0):
    m = bpy.data.materials.new(name); m.diffuse_color = (*[int(color[i:i+2],16)/255 for i in (0,2,4)],1)
    m.use_nodes=True; bs=m.node_tree.nodes.get('Principled BSDF')
    rgb=tuple(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in m.diffuse_color[:3])
    bs.inputs['Base Color'].default_value=(*rgb,1); bs.inputs['Roughness'].default_value=rough; bs.inputs['Metallic'].default_value=metal
    if glow:
        bs.inputs['Emission Color'].default_value=(*rgb,1); bs.inputs['Emission Strength'].default_value=glow
    m['hex']=int(color,16); m['rough']=rough; m['metal']=metal; m['glow']=glow
    materials[name]=m; return m
for args in [('stone','c4b49b'),('stoneLight','e1d3b8'),('stoneDark','8e8e7c'),('wood','613c2a'),('woodLight','9b6940'),('woodDark','352c25'),('red','973e32'),('tile','a96042'),('tileLight','bf7f56'),('tileDark','735345'),('jade','447366'),('gold','d8ac59'),('plaster','dbad55'),('cream','eddbac'),('teal','376d61'),('leaf','54764a'),('leafLight','819657'),('leafDark','334e3d'),('moss','687e4e'),('pink','d7778c'),('pinkLight','eeb5b1'),('mai','e9bd4a'),('water','589e98'),('lotus','db91a0'),('dark','242d2a'),('karst','7d8377'),('karstLight','a7ac9c')]: material(*args)
material('lantern','d7623e',.65,0,.28); material('lanternGold','f2bc61',.65,0,.22)
material('waterShimmer','9ac7ad',.32,0,.08)

def v(p): return Vector((p[0],-p[2],p[1]))
def add(obj,name,mat):
    obj.name=name
    for c in list(obj.users_collection): c.objects.unlink(obj)
    collection.objects.link(obj)
    if mat: obj.data.materials.append(materials[mat])
    return obj
def cube(name,p,s,mat,bevel=0):
    bpy.ops.mesh.primitive_cube_add(size=1,location=v(p)); o=add(bpy.context.object,name,mat); o.scale=(s[0],s[2],s[1])
    if bevel:
        bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
        mod=o.modifiers.new('Soft worn edges','BEVEL'); mod.width=bevel; mod.segments=1
        bpy.ops.object.modifier_apply(modifier=mod.name)
    return o
def sphere(name,p,s,mat,detail=1):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=detail,radius=1,location=v(p)); o=add(bpy.context.object,name,mat);o.scale=(s[0],s[2],s[1]);return o
def tube(name,points,r,mat,rend=None,sides=7):
    vertices=[]; faces=[]
    for i,p in enumerate(points):
        a=v(points[max(0,i-1)]); b=v(points[min(len(points)-1,i+1)]); tangent=(b-a).normalized()
        axis=Vector((0,0,1)) if abs(tangent.z)<.95 else Vector((1,0,0))
        u=tangent.cross(axis).normalized(); w=tangent.cross(u).normalized(); rad=r if rend is None else r+(rend-r)*i/(len(points)-1)
        vertices += [v(p)+rad*(math.cos(j*math.tau/sides)*u+math.sin(j*math.tau/sides)*w) for j in range(sides)]
    for i in range(len(points)-1):
        for j in range(sides):
            a=i*sides+j;b=i*sides+(j+1)%sides;faces.append((a,b,b+sides,a+sides))
    faces.extend([tuple(reversed(range(sides))),tuple((len(points)-1)*sides+j for j in range(sides))])
    return mesh(name,vertices,faces,mat,converted=True)
def cylinder(name,p,r,h,mat,r2=None,n=16):
    bpy.ops.mesh.primitive_cone_add(vertices=n,radius1=r,radius2=r if r2 is None else r2,depth=h,location=v(p)); return add(bpy.context.object,name,mat)
def mesh(name,verts,faces,mat,converted=False):
    data=bpy.data.meshes.new(name); data.from_pydata(verts if converted else [v(p) for p in verts],[],faces);data.update()
    o=bpy.data.objects.new(name,data);collection.objects.link(o);data.materials.append(materials[mat]);return o
def ring(name,p,r,minor,mat,normal=(0,1,0)):
    bpy.ops.mesh.primitive_torus_add(major_radius=r,minor_radius=minor,major_segments=24,minor_segments=6,location=v(p));o=add(bpy.context.object,name,mat)
    o.rotation_mode='QUATERNION';o.rotation_quaternion=Vector((0,0,1)).rotation_difference(v(normal));return o
def roof(x,y,z,w,d,h,mat='tile',hip=True,ornament=True):
    def point(t,u,side):
        xx=w*(.23+.27*t)*u if hip else w*.5*u
        return (x+xx,y+h*(1-t)**1.65+.10*t**7*abs(u)**6,z+side*d*.5*t)
    for side in (-1,1):
        verts=[point(i/10,-1+j/10,side) for i in range(11) for j in range(21)]
        faces=[]
        for i in range(10):
            for j in range(20):
                a=i*21+j;f=(a,a+1,a+22,a+21);faces.append(f if side==1 else tuple(reversed(f)))
        mesh('Curved tiled roof',verts,faces,mat)
        for j in range(21):
            xx=-w*.48+j*w*.048; t0=max(.01,(abs(xx)/w-.23)/.27) if hip else .01
            points=[]
            for k in range(9):
                t=t0+(1-t0)*k/8; u=xx/(w*(.23+.27*t)) if hip else xx/(w*.5)
                p=point(t,u,side);points.append((p[0],p[1]+.014,p[2]))
            tube('Raised tile seam',points,.012,mat if j%3 else 'tileLight',sides=5)
        for t in (.22,.42,.62,.82,1): tube('Tile course',[point(t,-1+j/12,side) for j in range(25)],.009,'tileDark',sides=5)
        tube('Carved eave',[point(1,-1+j/12,side) for j in range(25)],.035,'woodDark',sides=6)
    if hip:
        for sign in (-1,1):
            verts=[(x+sign*w*.23,y+h,z)]
            for i in range(1,11):
                t=i/10
                for j in range(11):verts.append((x+sign*w*(.23+.27*t),y+h*(1-t)**1.65+.10*t**7*abs(-1+j/5)**6,z+d*.5*t*(-1+j/5)))
            faces=[(0,1+j,2+j) for j in range(10)]
            for i in range(9):
                for j in range(10):
                    a=1+i*11+j;faces.append((a,a+11,a+12,a+1))
            mesh('Hipped roof end',verts,faces if sign==1 else [tuple(reversed(f)) for f in faces],mat)
    else:
        for sign in (-1,1):mesh('Plastered gable',[(x+sign*w*.5,y,z-d/2),(x+sign*w*.5,y+h,z),(x+sign*w*.5,y,z+d/2)],[(0,1,2) if sign==1 else (2,1,0)],'cream')
    ridge=w*.23 if hip else w*.5
    tube('Terracotta ridge',[(x-ridge-.08,y+h+.02,z),(x,y+h+.065,z),(x+ridge+.08,y+h+.02,z)],.045,'tileLight')
    if ornament:
        for sign in (-1,1):
            tube('Cloud ridge finial',[(x+sign*(ridge-.12),y+h+.045,z),(x+sign*(ridge+.06),y+h+.1,z),(x+sign*(ridge+.16),y+h+.25,z),(x+sign*(ridge+.11),y+h+.30,z)],.028,'gold',rend=.008)
        for sx in (-1,1):
            for sz in (-1,1):tube('Upturned corner',[(x+sx*w*.38,y+.06,z+sz*d*.39),(x+sx*w*.49,y+.13,z+sz*d*.49),(x+sx*w*.55,y+.27,z+sz*d*.55)],.026,'tileLight',rend=.009)
def rail(x,y,z,length,axis='x',mat='wood'):
    def p(t,yy):return (x+t if axis=='x' else x,yy,z if axis=='x' else z+t)
    tube('Hand carved railing',[p(-length/2,y+.27),p(length/2,y+.27)],.027,mat)
    tube('Railing sill',[p(-length/2,y+.035),p(length/2,y+.035)],.024,mat)
    n=max(2,round(length/.13))
    for i in range(n+1):tube('Baluster',[p(-length/2+i*length/n,y+.03),p(-length/2+i*length/n,y+.28)],.018,mat,sides=6)
def lantern(x,y,z,mat='lantern',s=1):
    tube('Lantern cord',[(x,y+.24*s,z),(x,y+.1*s,z)],.009,'woodDark')
    sphere('Silk lantern',(x,y,z),(.10*s,.14*s,.10*s),mat,2)
    for dy in (-.13,.13):cylinder('Lantern cap',(x,y+dy*s,z),.055*s,.025*s,'gold',n=10)
    tube('Silk tassel',[(x,y-.14*s,z),(x,y-.27*s,z)],.012*s,mat)
    for i in range(6):
        a=i*math.tau/6;tube('Lantern rib',[(x+math.cos(a)*.05*s,y+.12*s,z+math.sin(a)*.05*s),(x+math.cos(a)*.102*s,y,z+math.sin(a)*.102*s),(x+math.cos(a)*.05*s,y-.12*s,z+math.sin(a)*.05*s)],.004*s,'gold',sides=4)
def planter(x,y,z,s=.18,flower='pink'):
    cylinder('Clay planter',(x,y+s*.5,z),s*.7,s,'tile',s*.9,12)
    for i in range(6):
        a=i*2.4;sphere('Garden plant',(x+math.cos(a)*s*.6,y+s*1.3,z+math.sin(a)*s*.6),(s*.7,s*.5,s*.65),'leaf')
        if i%2==0:sphere('Flowers',(x+math.cos(a)*s*.65,y+s*1.65,z+math.sin(a)*s*.65),(s*.32,s*.25,s*.32),flower)
def tree(x,y,z,s=1,flower=None):
    batches={}
    def polygon(mat,points,faces):
        vertices,polys=batches.setdefault(mat,([],[]));offset=len(vertices)
        vertices.extend(points);polys.extend(tuple(offset+i for i in face) for face in faces)
    def addp(a,b):return tuple(a[i]+b[i] for i in range(3))
    def leaf(center,length,width,angle,tilt,mat):
        u=Vector((math.cos(angle),0,math.sin(angle)))
        long=Vector((-math.sin(angle)*math.cos(tilt),math.sin(tilt),math.cos(angle)*math.cos(tilt)))
        c=Vector(center);ridge=c+Vector((0,.018*s,0))
        points=[tuple(c-long*length*.5),tuple(c-u*width*.5),tuple(c+long*length*.5),tuple(c+u*width*.5),tuple(ridge)]
        polygon(mat,points,[(0,1,4),(1,2,4),(2,3,4),(3,0,4)])
    def blossom(center,radius,angle):
        c=Vector(center);normal=Vector((math.cos(angle)*.35,.9,math.sin(angle)*.35)).normalized()
        u=normal.cross(Vector((0,0,1))).normalized();w=normal.cross(u)
        palette=['mai','gold','cream'] if flower=='mai' else ['pink','pinkLight','lotus']
        for j in range(5):
            a=j*math.tau/5+angle;direction=u*math.cos(a)+w*math.sin(a);side=normal.cross(direction)
            points=[c+direction*radius*.06,c+direction*radius*.58+side*radius*.33,c+direction*radius+normal*radius*.12,c+direction*radius*.58-side*radius*.33]
            polygon(palette[j%3],[tuple(p) for p in points],[(0,1,2),(0,2,3)])
        points=[tuple(c+normal*radius*.035)]+[tuple(c+(u*math.cos(j*math.tau/5)+w*math.sin(j*math.tau/5))*radius*.17+normal*radius*.04) for j in range(5)]
        polygon('gold' if flower!='mai' else 'tileLight',points,[(0,j+1,(j+1)%5+1) for j in range(5)])
    trunk_points=[(x,y,z),(x-.10*s,y+.42*s,z+.03*s),(x-.03*s,y+.94*s,z-.04*s),(x+.08*s,y+1.42*s,z+.01*s),(x+.01*s,y+1.94*s,z-.02*s)]
    trunk=tube('Twisting trunk',trunk_points,.135*s,'wood',rend=.035*s,sides=11)
    for poly in trunk.data.polygons:poly.use_smooth=True
    for j in range(7):
        a=j*math.tau/7
        tube('Bark grain',[(px+math.cos(a)*(.12-.018*i)*s,py,pz+math.sin(a)*(.12-.018*i)*s) for i,(px,py,pz) in enumerate(trunk_points[:-1])],.004*s,'woodDark',sides=4)
    for j in range(6):
        a=j*2.4;tube('Exposed root',[(x,y+.20*s,z),(x+math.cos(a)*.18*s,y+.03*s,z+math.sin(a)*.18*s),(x+math.cos(a)*.36*s,y+.012*s,z+math.sin(a)*.36*s)],.055*s,'wood',rend=.008*s)
    for i in range(9):
        a=i*2.399+random.uniform(-.18,.18);radius=(.60+random.random()*.30)*s
        end=(x+math.cos(a)*radius,y+(1.55+random.random()*.55)*s,z+math.sin(a)*radius*.76)
        if i==8:end=(x+.08*s,y+2.28*s,z-.04*s)
        start=(x,y+(.75+i*.09)*s,z)
        middle=((start[0]+end[0])*.5,y+(1.30+random.random()*.16)*s,(start[2]+end[2])*.5)
        branch=tube('Branch',[start,middle,end],.055*s,'wood',rend=.014*s,sides=8)
        for poly in branch.data.polygons:poly.use_smooth=True
        for k in range(3):
            angle=a+(k-1)*.73;tip=(end[0]+math.cos(angle)*.25*s,end[1]+(.12+random.random()*.15)*s,end[2]+math.sin(angle)*.24*s)
            tube('Fine twig',[middle,end,tip],.018*s,'woodLight',rend=.003*s,sides=5)
            for n in range(52 if flower is None else 32):
                theta=random.random()*math.tau;r=math.sqrt(random.random())*.38*s
                point=(tip[0]+math.cos(theta)*r,tip[1]+random.uniform(-.17,.17)*s,tip[2]+math.sin(theta)*r*.80)
                mat=['leafDark','leaf','leafLight'][n%3]
                leaf(point,random.uniform(.10,.17)*s,random.uniform(.045,.075)*s,theta+a,random.uniform(-.55,.65),mat)
            if flower:
                for n in range(24):
                    theta=random.random()*math.tau;r=math.sqrt(random.random())*.40*s
                    point=(tip[0]+math.cos(theta)*r,tip[1]+random.uniform(-.10,.23)*s,tip[2]+math.sin(theta)*r*.82)
                    blossom(point,random.uniform(.038,.056)*s,theta)
            elif i%2==0 and k==1:
                sphere('Golden citrus',(tip[0],tip[1]-.11*s,tip[2]),(.045*s,.05*s,.045*s),'mai',2)
    for mat,(points,faces) in batches.items():mesh('Botanical canopy '+mat,points,faces,mat)
    # Low foliage breaks up the trunk-to-ground join.
    root_points=[];root_faces=[]
    for i in range(12):
        a=i*2.4;cx=x+math.cos(a)*.2*s;cz=z+math.sin(a)*.2*s;n=len(root_points)
        root_points.extend([(cx,y+.02*s,cz),(cx+math.cos(a+.7)*.045*s,y+.14*s,cz+math.sin(a+.7)*.045*s),(cx+math.cos(a)*.16*s,y+.07*s,cz+math.sin(a)*.16*s)])
        root_faces.append((n,n+1,n+2))
    mesh('Root ferns',root_points,root_faces,'leafDark')

def bamboo(x,y,z,s=1):
    for i in range(5):
        a=i*2.4;bx=x+math.cos(a)*.12*s;bz=z+math.sin(a)*.12*s;h=(1.4+random.random()*.6)*s
        tube('Bamboo culm',[(bx,y,bz),(bx+.08*s,y+h,bz-.04*s)],.022*s,'jade',sides=7)
        for j in range(1,6):
            yy=y+j*h/6;cylinder('Bamboo node',(bx+.08*s*j/6,yy,bz-.04*s*j/6),.028*s,.026*s,'leafLight',n=7)
            if j>2:
                for k in range(3):
                    dx=math.cos(a+k)*.25*s;dz=math.sin(a+k)*.22*s
                    mesh('Bamboo leaf',[(bx,yy,bz),(bx+dx*.5,yy+.16*s,bz+dz*.5),(bx+dx,yy+.08*s,bz+dz),(bx+dx*.4,yy+.05*s,bz+dz*.4)],[(0,1,2,3)],'leaf')
def lotus(x,y,z,s=.16):
    cylinder('Lily pad',(x,y,z),s,.012,'leaf',n=13)
    for j in range(7):
        a=j*math.tau/7;o=sphere('Lotus petal',(x+math.cos(a)*s*.33,y+.045,z+math.sin(a)*s*.33),(.05,.075,.025),'lotus');o.rotation_euler.z=-a
    sphere('Lotus heart',(x,y+.065,z),(.025,.04,.025),'gold')
def paving(x,y,z,w,d):
    cube('Terrace',(x,y-.06,z),(w,.12,d),'stone',.025)
    for i in range(int(w/.22)):
        for j in range(int(d/.25)):
            if random.random()>.17:cube('Courtyard brick',(x-w/2+.12+i*.22,y+.01,z-d/2+.14+j*.25),(.205,.025,.23),'tileDark' if (i+j)%4 else 'stone',.008)
def door(x,y,z,w=.38,h=.85,mat='woodDark'):
    cube('Recessed doorway',(x,y+h/2,z),(w,h,.045),'dark')
    for sign in (-1,1):cube('Door jamb',(x+sign*(w/2+.025),y+h/2,z+.03),(.045,h+.06,.06),'wood')
    cube('Lintel',(x,y+h,z+.04),(w+.13,.07,.08),'woodLight')
    for i in range(5):cube('Door vertical slat',(x-w/2+.045+i*(w-.09)/4,y+h/2,z+.036),(.019,h-.07,.025),mat)
def start(name):
    global collection
    collection=bpy.data.collections.new(name);bpy.context.scene.collection.children.link(collection)

start('uxui')
cylinder('Lotus pond stone rim',(0,-.12,0),1.64,.20,'stoneLight',n=48)
cylinder('water',(0,-.005,0),1.49,.035,'water',n=48)
for r in (.55,1.23):ring('Water ripple',(-.05,.02,.05),r,.009,'waterShimmer')
cylinder('Single stone pillar',(0,.55,0),.18,1.12,'stone',n=16)
cube('Lotus platform',(0,1.10,0),(1.62,.17,1.48),'wood',.02)
for sx in (-1,1):
    for sz in (-1,1):tube('Diagonal lotus bracket',[(0,.55,0),(sx*.62,1.04,sz*.55)],.06,'woodLight')
cube('Sanctuary',(0,1.69,-.13),(1.18,1.04,1.04),'woodDark')
for x in (-.62,.62):
    for z in (-.57,.55):cylinder('Timber pillar',(x,1.71,z),.047,1.14,'woodLight',n=10)
for x in (-.38,0,.38):door(x,1.22,.405,.29,.82,'woodLight')
for x in (-.76,.76):rail(x,1.2,0,1.35,'z')
rail(0,1.2,-.68,1.5)
for x in (-.52,.52):rail(x,1.2,.69,.42)
roof(0,2.24,-.04,2.18,1.96,.64,'tileDark')
cube('Plaque',(0,2.13,.46),(.44,.12,.055),'gold',.015)
for i in range(8):cube('Stone stair',(0,.09+i*.135,1.51-i*.105),(.48,.14,.17),'stoneLight',.012)
for x in (-.28,.28):tube('Stair handrail',[(x,.28,1.58),(x,1.41,.76)],.028,'wood')
for i in range(12):
    a=i*2.4;lotus(math.cos(a)*1.21,.027,math.sin(a)*1.21,.11)
planter(-1.05,.04,.55,.16);planter(1.04,.04,.55,.16)

start('visual')
paving(0,-.1,0,2.4,2.3)
for x in (-.63,.63):
    for z in (-.63,.63):
        cube('White masonry pier',(x,.52,z),(.31,1.12,.31),'stoneLight',.02)
        cube('Pier base',(x,.04,z),(.43,.18,.43),'stone',.018)
        cube('Pier capital',(x,1.03,z),(.39,.13,.39),'cream',.012)
        for yy in (.2,.38,.56,.74,.92):cube('Pier masonry joint',(x,yy,z+.158),(.3,.012,.008),'stone')
cube('Upper timber floor',(0,1.14,0),(1.78,.16,1.78),'red',.015)
cube('Scholar chamber',(0,1.75,0),(1.4,1.03,1.4),'red')
for side in range(4):
    angle=side*math.pi/2;normal=(math.sin(angle),0,math.cos(angle));px=normal[0]*.71;pz=normal[2]*.71
    o=cylinder('Dark round window',(px,1.79,pz),.29,.015,'dark',n=32);o.rotation_mode='QUATERNION';o.rotation_quaternion=Vector((0,0,1)).rotation_difference(v(normal))
    ring('Circular scholar window',(px+normal[0]*.014,1.79,pz+normal[2]*.014),.30,.026,'gold',normal)
    for j in range(8):
        a=j*math.tau/8;u=math.cos(a);yy=math.sin(a)
        tube('Radiating window lattice',[(px+math.cos(angle)*u*.07,1.79+yy*.07,pz-math.sin(angle)*u*.07),(px+math.cos(angle)*u*.275,1.79+yy*.275,pz-math.sin(angle)*u*.275)],.014,'gold',sides=5)
for x in (-.83,.83):rail(x,1.23,0,1.65,'z','red')
for z in (-.83,.83):rail(0,1.23,z,1.65,mat='red')
roof(0,2.26,0,2.17,2.17,.49,'tile')
roof(0,2.65,0,1.50,1.50,.38,'tile')
cube('Inscribed plaque',(0,2.16,.742),(.58,.13,.05),'gold',.01)
bamboo(-1.03,0,-.8,.53);planter(1.02,0,.78,.14,'mai')

start('system')
paving(0,-.13,0,3.35,1.95)
cube('Imperial gate wall',(0,.50,-.10),(3.06,1.12,.83),'plaster',.025)
for x in (-.85,0,.85):
    cube('Gate opening',(x,.32,.326),(.46,.73,.035),'dark')
    # Semicircular arch facing the viewer.
    tube('Carved stone arch',[(x+math.cos(a)*.258,.59+math.sin(a)*.258,.355) for a in [i*math.pi/16 for i in range(17)]],.045,'stoneLight')
    for xx in (-.258,.258):cube('Arch jamb',(x+xx,.26,.36),(.08,.58,.075),'stoneLight')
    for j in range(5):cube('Gate wood plank',(x-.18+j*.09,.31,.35),(.025,.57,.015),'wood')
for y in (.05,.98):cube('Wall cornice',(0,y,-.10),(3.15,.12,.98),'cream',.018)
cube('Royal chamber',(0,1.48,-.1),(1.32,.77,.82),'red')
for x in (-.49,-.25,0,.25,.49):door(x,1.14,.325,.16,.57,'gold')
roof(0,1.94,-.1,1.96,1.45,.5,'tile')
roof(0,2.33,-.1,1.35,1.05,.32,'tile')
for x in (-1.14,1.14):
    for xx in (-.28,.28):cylinder('Wing column',(x+xx,1.43,-.1),.035,.70,'red',n=8)
    roof(x,1.77,-.1,.91,1.18,.28,'tile',ornament=False)
for x in (-1.46,1.46):
    cylinder('Stone sentinel pedestal',(x,.07,.65),.14,.17,'stone',n=8)
    sphere('Stone lion',(x,.23,.65),(.1,.16,.15),'stoneLight',2);sphere('Lion head',(x,.38,.72),(.10,.10,.1),'stoneLight',1)
for x in (-1.05,1.05):lantern(x,1.55,.43,s=.64)
for x in (-1.6,1.6):planter(x,-.03,-.57,.14,'mai')

start('graphic')
paving(0,-.15,0,3.1,2.2)
for x,w,h,c in [(-.68,1.30,1.71,'plaster'),(.67,1.22,1.48,'cream')]:
    cube('Hoi An ochre facade',(x,h/2,-.15),(w,h,1.05),c,.018)
    cube('Dark stone plinth',(x,.06,-.15),(w+.04,.13,1.1),'stoneDark',.01)
    for xx in (-w*.34,w*.34):door(x+xx,.12,.395,.28,.69,'teal')
    cube('Timber floor band',(x,.91,.40),(w+.03,.075,.07),'wood')
    for xx in (-w*.25,w*.25):
        cube('Upstairs window recess',(x+xx,1.21,.39),(.32,.42,.035),'dark')
        for sx in (-1,1):
            shutter=cube('Wooden shutter',(x+xx+sx*.17,1.21,.46),(.14,.43,.04),'teal',.008);shutter.rotation_euler.z=sx*.24
            for j in range(6):cube('Shutter louver',(x+xx+sx*.17,1.06+j*.058,.49),(.125,.018,.025),'leafDark')
    roof(x,h+.02,-.15,w+.28,1.40,.46,'tileDark',hip=False,ornament=False)
    for xx in (-w*.43,w*.43):cylinder('Porch post',(x+xx,.46,.67),.025,.87,'wood',n=8)
    roof(x,.94,.56,w+.15,.46,.13,'tileDark',hip=False,ornament=False)
    rail(x,.94,.51,w*.95,mat='wood')
    planter(x+w*.4,0,.9,.14)
tube('Hanging lantern cable',[(-1.4,1.38,.9),(-.7,1.19,1.0),(0,1.13,1.03),(.7,1.18,1.0),(1.4,1.36,.9)],.009,'woodDark')
for i in range(7):lantern(-1.17+i*.39,1.13-abs(3-i)*-.04,1.01,'lantern' if i%2 else 'lanternGold',.57)
for i in range(12):sphere('Bougainvillea',(-1.19+random.random()*.60,1.49+random.random()*.32,.58),(.14,.13,.13),'pink' if i%3 else 'pinkLight',1)
# Bicycle, baskets and a conical hat beside the shopfront.
for x in (.74,1.12):ring('Bicycle wheel',(x,.16,1.03),.14,.014,'woodDark',(0,0,1))
tube('Bicycle frame',[(.74,.16,1.03),(.89,.39,1.03),(1.12,.16,1.03),(.91,.17,1.03),(.74,.16,1.03)],.014,'teal')
cylinder('Market basket',(-.67,.16,.91),.14,.25,'woodLight',.18,12)
cylinder('Conical hat',(-.67,.39,.91),.20,.12,'cream',0,20)

start('contact')
paving(0,-.12,0,3.1,2.5)
cube('Garden house',(-.62,.49,-.22),(1.46,.95,1.11),'cream',.02)
for x in (-1.13,-.63,-.13):door(x,.12,.35,.31,.71,'woodLight')
for x in (-1.37,.13):cylinder('Veranda post',(x,.53,.66),.037,1.04,'wood',n=9)
roof(-.62,1.04,-.14,1.98,1.78,.60,'tileDark')
tree(.84,.0,-.50,1.00)
for i in range(9):
    a=i*2.4;sphere('Golden citrus',(.84+math.cos(a)*.62,1.48+random.random()*.30,-.5+math.sin(a)*.62),(.055,.065,.055),'mai',2)
cylinder('Tea table',(.67,.24,.68),.23,.06,'stoneLight',n=16)
cylinder('Tea table foot',(.67,.10,.68),.055,.22,'stone',n=10)
for x,z in [(.33,.68),(1.00,.68),(.67,.99)]:cylinder('Garden stool',(x,.105,z),.11,.21,'stone',n=12)
cylinder('Tea pot',(.65,.30,.68),.055,.07,'jade',.04,12)
for x in (.55,.79):cylinder('Tea cup',(x,.285,.75),.022,.035,'cream',n=10)
planter(-1.28,0,.90,.14);planter(.16,0,.94,.14,'mai')
lantern(-1.25,.84,.69,s=.67);lantern(.06,.84,.69,s=.67)

start('environment')
def karst(x,z,r,h):
    n=36;levels=30;verts=[]
    phase=random.random()*math.tau
    def surface(t,a,extra=0):
        cap=math.sqrt(max(0,1-max(0,(t-.84)/.16)**2))
        shoulder=(.90+.045*math.sin(t*8+phase))*cap
        ridges=.09*math.sin(a*7+phase)+.035*math.sin(a*13+t*3)+.014*math.sin(t*75+a*2)
        radius=r*max(.025,shoulder+ridges*(.25+.75*cap))+extra
        return (x+math.cos(a)*radius+math.sin(t*3.6)*r*.20,h*t-.045,z+math.sin(a)*radius*.78+math.sin(t*4+phase)*r*.08)
    for j in range(levels):
        t=j/(levels-1)
        for i in range(n):verts.append(surface(t,i*math.tau/n))
    faces=[]
    for j in range(levels-1):
        for i in range(n):
            a=j*n+i;b=j*n+(i+1)%n;faces.append((a,b,b+n,a+n))
    faces.extend([tuple(reversed(range(n))),tuple((levels-1)*n+i for i in range(n))])
    obj=mesh('Weathered limestone',verts,faces,'karst')
    for p in obj.data.polygons:p.use_smooth=True
    tint=obj.data.color_attributes.new(name='rock_tint',type='FLOAT_COLOR',domain='POINT')
    for j in range(levels):
        t=j/(levels-1)
        for i in range(n):
            a=i*math.tau/n
            moss=max(0,min(1,(math.sin(a*2+t*7+phase)+math.sin(a*5-t*9)+.4)*.42))*min(1,t*2)
            shade=.89+.09*math.sin(a*6+t*13)
            tint.data[j*n+i].color=(shade*(1-.24*moss),shade*(1-.06*moss),shade*(1-.35*moss),1)
    rock=materials['karst'];rock['vertex_colors']=True
    nodes=rock.node_tree.nodes
    attribute=nodes.get('Cliff tint') or nodes.new('ShaderNodeVertexColor');attribute.name='Cliff tint';attribute.layer_name='rock_tint'
    mix=nodes.get('Cliff tint multiply') or nodes.new('ShaderNodeMixRGB');mix.name='Cliff tint multiply';mix.blend_type='MULTIPLY';mix.inputs[0].default_value=1
    base=rock.diffuse_color[:3];mix.inputs[1].default_value=(*(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in base),1)
    rock.node_tree.links.new(attribute.outputs['Color'],mix.inputs[2]);rock.node_tree.links.new(mix.outputs[0],nodes.get('Principled BSDF').inputs['Base Color'])
    for i in range(6):
        a=phase+i*math.tau/6
        points=[surface(.12+j*.065,a+.025*math.sin(j*.8),.004) for j in range(12)]
        tube('Erosion seam',points,.005*r,'stoneDark',rend=.003*r,sides=4)
    leaf_points=[];leaf_faces=[]
    for i in range(12):
        a=i*2.4+phase;t=.20+random.random()*.72
        center=Vector(surface(t,a,.01))
        for j in range(9):
            angle=a+j*2.4;length=random.uniform(.06,.12);width=length*.35
            c=center+Vector((math.cos(angle)*.09,random.uniform(-.03,.07),math.sin(angle)*.07))
            end=c+Vector((math.cos(angle)*length,length*.32,math.sin(angle)*length))
            side=Vector((-math.sin(angle)*width,0,math.cos(angle)*width));mid=(c+end)*.5
            offset=len(leaf_points);leaf_points.extend([tuple(c),tuple(mid+side),tuple(end),tuple(mid-side)])
            leaf_faces.extend([(offset,offset+1,offset+2),(offset,offset+2,offset+3)])
    mesh('Cliff fern leaves',leaf_points,leaf_faces,'leafDark')
    for i in range(4):
        a=phase+i*1.6
        tube('Cliff vine',[surface(.76-j*.065,a+.035*math.sin(j),.013) for j in range(7)],.007,'moss',rend=.002,sides=4)

for args in [(-6.65,.75,.65,2.5),(-6.2,1.55,.5,1.7),(-7.1,1.7,.48,1.65),(-.6,-2.5,.48,1.8),(5.6,-4.1,.72,2.6),(6.35,1.1,.54,1.9)]:karst(*args)
tree(-6.55,0,-2.25,1.25,'pink')
for x,z,s in [(-1.3,3.4,.63),(-.7,3.7,.49),(-1.62,3.83,.45)]:tree(x,0,z,s,'mai')
for x,z,s in [(-3.15,-3.6,.8),(5.35,3.1,.68),(6.75,1.6,.72),(-5.8,.0,.70)]:bamboo(x,0,z,s)
# Small northern vernacular house in the foreground.
cube('Village house',(-6.1,.45,4.0),(1.5,.9,1.05),'cream',.02)
roof(-6.1,.94,4.0,1.94,1.58,.55,'tile',hip=False,ornament=False)
door(-6.1,.06,4.54,.41,.73,'woodLight')
for x in (-6.69,-5.51):cylinder('Village porch column',(x,.44,4.64),.035,.90,'wood',n=8)
planter(-6.88,0,4.4,.14,'mai')

# Native Three.js ObjectLoader asset, merged by material per model.
# Native format avoids adding a runtime loader or a dependency.
asset={'metadata':{'version':4.5,'type':'Object','generator':'Blender 5.2 / Linh Canh'},'geometries':[],'materials':[],'object':{'uuid':'viet-library','type':'Group','name':'Vietnam miniatures','children':[]}}
for name,m in materials.items():
    asset['materials'].append({'uuid':name,'type':'MeshStandardMaterial','name':name,'color':m['hex'],'roughness':m['rough'],'metalness':m['metal'],'emissive':m['hex'] if m['glow'] else 0,'emissiveIntensity':m['glow'],'side':2,'vertexColors':bool(m.get('vertex_colors',False))})
stats={}
deps=bpy.context.evaluated_depsgraph_get()
for c in bpy.context.scene.collection.children:
    if c.name not in ['uxui','visual','system','graphic','contact','environment']:continue
    batches={}
    for o in c.objects:
        if o.type!='MESH':continue
        obj=o.evaluated_get(deps);data=obj.to_mesh();data.calc_loop_triangles();normals=data.corner_normals
        for tri in data.loop_triangles:
            mat=data.materials[tri.material_index].name;batch=batches.setdefault(mat,{'vertices':{},'positions':[],'normals':[],'colors':[],'hasColor':False,'indices':[]})
            for li in tri.loops:
                co=obj.matrix_world @ data.vertices[data.loops[li].vertex_index].co
                no=(obj.matrix_world.to_3x3().inverted().transposed() @ normals[li].vector).normalized()
                p=tuple(round(q,4) for q in (co.x,co.z,-co.y));n=tuple(round(q,3) for q in (no.x,no.z,-no.y))
                tint=data.color_attributes.get('rock_tint');color=tuple(round(v,4) for v in tint.data[data.loops[li].vertex_index].color[:3]) if tint else (1,1,1);batch['hasColor']=batch['hasColor'] or bool(tint);key=p+n+color
                if key not in batch['vertices']:
                    batch['vertices'][key]=len(batch['vertices']);batch['positions'].extend(p);batch['normals'].extend(n);batch['colors'].extend(color)
                batch['indices'].append(batch['vertices'][key])
        obj.to_mesh_clear()
    group={'uuid':c.name,'type':'Group','name':c.name,'children':[]};count=0
    for mat,b in batches.items():
        uid=c.name+'-'+mat;count+=len(b['indices'])//3
        asset['geometries'].append({'uuid':uid,'type':'BufferGeometry','data':{'attributes':{'position':{'itemSize':3,'type':'Float32Array','array':b['positions']},'normal':{'itemSize':3,'type':'Float32Array','array':b['normals']}},'index':{'type':'Uint32Array','array':b['indices']}}})
        if b['hasColor']:asset['geometries'][-1]['data']['attributes']['color']={'itemSize':3,'type':'Float32Array','array':b['colors']}
        group['children'].append({'uuid':uid+'-mesh','type':'Mesh','name':mat,'geometry':uid,'material':mat,'castShadow':mat not in ['water','waterShimmer'],'receiveShadow':True})
    asset['object']['children'].append(group);stats[c.name]={'drawCalls':len(batches),'triangles':count}
with open(ROOT+'/assets/models/vietnam-models.js','w',encoding='utf8') as f:f.write('/* Original Blender miniatures. Rebuild: scripts/build-vietnam.py. */\nconst VIETNAM_MODEL_DATA = '+json.dumps(asset,separators=(',',':'))+';\n')
with open(OUT+'/model-stats.json','w') as f:json.dump(stats,f,indent=2)
print('MODEL_STATS',json.dumps(stats),flush=True)

# Arrange all collections on the same map for an editable source deliverable.
locations={'uxui':(-4.2,.7,-2.8),'visual':(.4,.3,.2),'system':(4.6,.4,-3.1),'graphic':(-3.8,.15,2.5),'contact':(4.3,.15,2.8),'environment':(0,0,0)}
for c in bpy.context.scene.collection.children:
    if c.name not in locations:continue
    for o in c.objects:o.location+=v(locations[c.name])
scene=bpy.context.scene
scene.render.engine='CYCLES';scene.cycles.samples=24;scene.cycles.use_denoising=True
scene.world.color=(.55,.55,.55)
bpy.ops.object.light_add(type='AREA',location=(2,-6,11));bpy.context.object.data.energy=1600;bpy.context.object.data.shape='DISK';bpy.context.object.data.size=8
bpy.ops.object.light_add(type='AREA',location=(-7,2,6));bpy.context.object.data.energy=1000;bpy.context.object.data.size=8
bpy.ops.object.camera_add(location=(14,-19,16));cam=bpy.context.object;cam.rotation_euler=(v((0,1,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=21;scene.camera=cam
scene.render.resolution_x=1500;scene.render.resolution_y=1100;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX'
bpy.ops.wm.save_as_mainfile(filepath=OUT+'/linh-canh-vietnam.blend')
# Thumbnails use the actual models, with transparent background.
scene.render.film_transparent=True;scene.render.resolution_x=440;scene.render.resolution_y=440;scene.cycles.samples=16
for c in bpy.context.scene.collection.children:
    if c.name in locations:c.hide_render=True
for name in ['uxui','visual','system','graphic','contact']:
    c=bpy.data.collections[name];c.hide_render=False;target=v(locations[name])+Vector((0,0,1.2));cam.location=target+Vector((4,-6,4));cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=4.4
    scene.render.filepath=ROOT+'/assets/models/'+name+'.png';bpy.ops.render.render(write_still=True);c.hide_render=True
print('BLENDER_COMPLETE',flush=True)
