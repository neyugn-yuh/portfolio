from PIL import Image, ImageDraw, ImageFilter
import math, random
from pathlib import Path

root=Path(__file__).resolve().parent.parent
random.seed(47)
W,H=2048,1366
def xy(x,z):return ((x+8.4)/16.8*W,(z+5.6)/11.2*H)
paper=Image.new('RGB',(W,H));pix=paper.load()
for y in range(H):
    for x in range(W):
        edge=max(abs(x/W-.5)*2,abs(y/H-.5)*2)
        n=random.gauss(0,1.8)+2*math.sin(x*.025)*math.sin(y*.018)-14*edge**7
        pix[x,y]=(int(220+n),int(207+n),int(171+n))
paint=Image.new('RGBA',(W,H));d=ImageDraw.Draw(paint)
gardens=[(-6.2,.6,2,2.5),(-4.2,-2.8,2.0,1.9),(.4,.2,1.95,1.7),(4.5,-2.9,2.1,1.7),(-3.8,2.2,2.0,1.7),(4.1,2.5,2.0,2.0),(-1.4,3.6,1.1,.8)]
for cx,cz,rx,rz in gardens:
    for i in range(9):
        x=cx+random.uniform(-rx*.5,rx*.5);z=cz+random.uniform(-rz*.5,rz*.5)
        a=xy(x-rx*.7,z-rz*.6);b=xy(x+rx*.7,z+rz*.6)
        d.ellipse((*a,*b),fill=(104+random.randrange(30),131+random.randrange(20),87+random.randrange(20),145))
paint=paint.filter(ImageFilter.GaussianBlur(26));paper=Image.alpha_composite(paper.convert('RGBA'),paint)
ink=Image.new('RGBA',(W,H));d=ImageDraw.Draw(ink)
# Contour engraving follows the surrounding mountain gardens.
for cx,cz,rx,rz in [(-6.4,1.1,1.5,2.2),(5.7,-3.2,1.6,1.7),(6.0,1.7,1.2,1.7),(-.4,-2.5,1.1,1.0)]:
    for band in range(6):
        pts=[]
        for j in range(161):
            a=j/160*math.tau;r=1+.06*math.sin(a*5)+.025*math.cos(a*9)
            pts.append(xy(cx+math.cos(a)*rx*r*(1+band*.11),cz+math.sin(a)*rz*r*(1+band*.11)))
        d.line(pts,fill=(116,130,91,55),width=2)
# Sparse grain, paper fibers and tiny engraved meadow marks.
for i in range(14000):
    x=random.randrange(W);y=random.randrange(H);d.line((x,y,x+random.randrange(1,4),y+random.randrange(0,2)),fill=(110,91,57,random.randrange(3,15)),width=1)
for i in range(350):
    x=random.uniform(-7.8,7.8);z=random.uniform(-5.1,5.1)
    if min((x-cx)**2+(z-cz)**2 for cx,cz,_,_ in gardens)>3:continue
    a=xy(x,z);d.line((a[0]-3,a[1],a[0]-1,a[1]-5,a[0]+1,a[1],a[0]+4,a[1]-3),fill=(91,115,70,90),width=1)
# A double rule with a repeating rice-grain and lotus border.
for inset,width in [(25,4),(38,2),(68,2),(77,1)]:d.rectangle((inset,inset,W-inset-1,H-inset-1),outline=(129,102,56,150),width=width)
for x in range(83,W-80,25):
    for y in (52,H-52):d.polygon([(x-5,y),(x,y-5),(x+5,y),(x,y+5)],outline=(129,102,56,155))
for y in range(83,H-80,25):
    for x in (52,W-52):d.polygon([(x-5,y),(x,y-5),(x+5,y),(x,y+5)],outline=(129,102,56,155))
for x,z in [(-7.3,4.65),(7.3,-4.65)]:
    cx,cy=xy(x,z)
    for r in (24,29,40):d.ellipse((cx-r,cy-r,cx+r,cy+r),outline=(120,100,62,140),width=2)
    for j in range(8):
        a=j*math.tau/8;d.line((cx,cy,cx+math.cos(a)*40,cy+math.sin(a)*40),fill=(120,100,62,140),width=1)
Image.alpha_composite(paper,ink).convert('RGB').save(root/'assets/models/terrain-albedo.webp',quality=90,method=6)
wood=Image.new('RGB',(1024,256));p=wood.load()
for y in range(256):
    for x in range(1024):
        wave=math.sin(y*.6+math.sin(x*.006)*2)*4+math.sin(y*2.6+math.cos(x*.008))*2+random.gauss(0,1.6)
        p[x,y]=(int(91+wave),int(57+wave*.7),int(39+wave*.4))
wood.save(root/'assets/models/walnut.webp',quality=88)
print('Painted parchment terrain and walnut textures')
