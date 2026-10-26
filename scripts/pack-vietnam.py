from pathlib import Path
import json, array, base64, sys
from PIL import Image
root=Path(__file__).resolve().parent.parent
def write_asset(asset, target):
    def packed(values,code):
        data=array.array(code,values)
        if sys.byteorder!='little':data.byteswap()
        return base64.b64encode(data.tobytes()).decode('ascii')
    for geometry in asset['geometries']:
        attrs=geometry['data']['attributes']
        if isinstance(attrs['position']['array'],str):continue
        attrs['position']['type']='Int16Array'
        attrs['position']['array']=packed([round(v*1000) for v in attrs['position']['array']],'h')
        attrs['normal']['type']='Int8Array';attrs['normal']['normalized']=True
        attrs['normal']['array']=packed([max(-127,min(127,round(v*127))) for v in attrs['normal']['array']],'b')
        if 'color' in attrs:
            attrs['color']['type']='Uint8Array';attrs['color']['normalized']=True
            attrs['color']['array']=packed([max(0,min(255,round(v*255))) for v in attrs['color']['array']],'B')
        index=geometry['data']['index'];small=max(index['array'])<65536
        index['type']='Uint16Array' if small else 'Uint32Array';index['array']=packed(index['array'],'H' if small else 'I')
    for group in asset['object']['children']:
        for mesh in group['children']:mesh['scale']=[.001,.001,.001]
    decode='''const VIETNAM_MODEL_DATA = (() => {
    const data = DATA;
    const unpack = (text, type) => {
        const bytes = Uint8Array.from(atob(text), c => c.charCodeAt(0));
        return new ({ Int16Array, Int8Array, Uint8Array, Uint16Array, Uint32Array }[type])(bytes.buffer);
    };
    for (const geometry of data.geometries) {
        for (const attribute of Object.values(geometry.data.attributes)) attribute.array = unpack(attribute.array, attribute.type);
        const index = geometry.data.index;
        index.array = unpack(index.array, index.type);
    }
    return data;
})();
'''
    target.write_text('/* Original Blender miniatures; millimeter positions and normalized byte normals. */\n'+decode.replace('const data = DATA;', 'const data = '+json.dumps(asset,separators=(',',':'))+';',1),encoding='utf8')
if __name__=='__main__':
    file=root/'assets/models/vietnam-models.js';text=file.read_text(encoding='utf8');payload=text.split('const data = ',1)[1] if 'const data = ' in text else text.split('const VIETNAM_MODEL_DATA = ',1)[1];asset=json.JSONDecoder().raw_decode(payload)[0]
    write_asset(asset,file)
    for p in (root/'assets/models').glob('*.png'):
        Image.open(p).save(p.with_suffix('.webp'),quality=87,method=6)
        p.unlink()
    print('Packed model bytes:',file.stat().st_size)
