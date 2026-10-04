export const COLS=12,ROWS=8,STEPS=16,LIMIT=24;
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const instruments={
    bell:{name:'Bellflower',voice:'Glass bells',glyph:'✿',color:'#c78147',base:60},
    reed:{name:'Wind reed',voice:'Soft plucks',glyph:'♮',color:'#4f8c86',base:60},
    bass:{name:'Bass stone',voice:'Warm bass',glyph:'◆',color:'#ad777b',base:36},
    drum:{name:'Seed drum',voice:'Low percussion',glyph:'◉',color:'#b26d4b',base:36},
    shaker:{name:'Shaker fern',voice:'Airy rhythm',glyph:'♧',color:'#6f9266',base:60}
};
export const keys={C:0,D:2,F:5,G:7,A:9};
const scales={major:[0,2,4,7,9],minor:[0,3,5,7,10]};
export const presets={quarters:[0,4,8,12],offbeat:[2,6,10,14],tresillo:[0,3,6,8,11,14],sparse:[0,7,12],eighths:[0,2,4,6,8,10,12,14]};
export const pattern=name=>Array.from({length:STEPS},(_,i)=>(presets[name]||presets.quarters).includes(i));
export function plant(id,type,x,z){return{id,type,x,z,pattern:pattern(type==='reed'?'tresillo':type==='shaker'?'eighths':type==='bass'?'sparse':'quarters'),gain:.7,muted:false};}
export function createGarden(template='morning'){
    const scene={v:1,name:template==='blank'?'A quiet beginning':template==='dusk'?'After the rain':'Little morning',tempo:template==='dusk'?72:88,key:template==='dusk'?'D':'C',scale:template==='dusk'?'minor':'major',swing:.12,plants:[]};
    if(template!=='blank')scene.plants=[plant(1,'bell',2,1),plant(2,'reed',7,2),plant(3,'bass',4,6),plant(4,'drum',8,5),plant(5,'shaker',10,3),plant(6,'bell',5,3)];
    if(template==='dusk')scene.plants[5].pattern=pattern('sparse');
    return scene;
}
export function validateGarden(raw){
    if(!raw||raw.v!==1||!Array.isArray(raw.plants)||raw.plants.length>LIMIT)throw new Error('Invalid Sound Garden');
    const used=new Set(),ids=new Set(),plants=[];
    for(const p of raw.plants){
        if(!p||!Object.hasOwn(instruments,p.type)||!Number.isInteger(p.id)||p.id<1||p.id>1e6||ids.has(p.id)||!Number.isInteger(p.x)||p.x<0||p.x>=COLS||!Number.isInteger(p.z)||p.z<0||p.z>=ROWS||!Array.isArray(p.pattern)||p.pattern.length!==STEPS||p.pattern.some(v=>typeof v!=='boolean')||!Number.isFinite(p.gain)||p.gain<0||p.gain>1||typeof p.muted!=='boolean'||used.has(`${p.x},${p.z}`))throw new Error('Invalid garden object');
        used.add(`${p.x},${p.z}`);ids.add(p.id);plants.push({...p,pattern:[...p.pattern]});
    }
    return{v:1,name:typeof raw.name==='string'?raw.name.trim().slice(0,40)||'Untitled garden':'Untitled garden',tempo:Number.isFinite(raw.tempo)?clamp(Math.round(raw.tempo),50,160):88,key:Object.hasOwn(keys,raw.key)?raw.key:'C',scale:Object.hasOwn(scales,raw.scale)?raw.scale:'major',swing:Number.isFinite(raw.swing)?clamp(raw.swing,0,.4):.12,plants:plants.map(p=>({id:p.id,type:p.type,x:p.x,z:p.z,pattern:p.pattern,gain:p.gain,muted:p.muted}))};
}
export function pitch(p,scene){const degree=ROWS-1-p.z,scale=scales[scene.scale],midi=instruments[p.type].base+keys[scene.key]+scale[degree%5]+Math.floor(degree/5)*12;return{midi,hz:440*2**((midi-69)/12),name:['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'][midi%12]+(Math.floor(midi/12)-1)};}
export const offset=p=>p.x%STEPS;
export const sounding=(p,step)=>!p.muted&&p.gain>0&&p.pattern[(step-offset(p)+STEPS)%STEPS];
export const stepSeconds=(scene,step)=>(60/scene.tempo/4)*(1+(step%2?-scene.swing:scene.swing));
export function encodeGarden(scene){const bytes=new TextEncoder().encode(JSON.stringify(scene));let s='';for(const b of bytes)s+=String.fromCharCode(b);return btoa(s).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');}
export function decodeGarden(code){if(typeof code!=='string'||code.length>15000||!/^[a-zA-Z0-9_-]+$/.test(code))throw new Error('Invalid garden link');const s=atob(code.replaceAll('-','+').replaceAll('_','/'));return validateGarden(JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(s,c=>c.charCodeAt(0)))));}
