export const SIZE = 24;
export const COUNT = SIZE * SIZE;
export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const indexOf = (x,z) => z * SIZE + x;
export const coordinates = i => ({x:i%SIZE,z:Math.floor(i/SIZE)});
export const tools = ['raise','lower','water','tree','cottage','path','erase','view'];
export const weatherTypes = ['sunny','rain','snow','night'];
export function random(seed) {
    let value = seed >>> 0;
    return () => { value += 0x6D2B79F5; let t = value; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function createWorld(seed = 12458, template = 'cove') {
    const rng=random(seed),heights=[],trees=[],buildings=[],paths=[];
    for(let z=0;z<SIZE;z++)for(let x=0;x<SIZE;x++){
        const dx=(x-11.5)/9.5,dz=(z-11.5)/8.7,r=Math.hypot(dx,dz);
        const ridge=Math.sin(x*.41+seed*.002)*1.15+Math.cos(z*.43)*1.1;
        let h=Math.round((1-r)*11+ridge+2.8);
        if(template==='atoll')h=Math.round((1-Math.abs(r-.70)*3.0)*7+ridge);
        if(template==='blank')h=0;
        if(template==='cove'&&x>13&&Math.abs(z-11)<1.2+(x-13)*.19)h-=6;
        heights.push(clamp(h,0,16));
    }
    if(template!=='blank'){
        for(let i=0;i<COUNT;i++)if(heights[i]>=5&&heights[i]<=11&&rng()<.16)trees.push([i,.4+rng()*.6]);
        for(const [x,z] of [[8,14],[10,16],[15,15]]){
            const i=indexOf(x,z);if(heights[i]>=4){buildings.push(i);const tree=trees.findIndex(t=>t[0]===i);if(tree>=0)trees.splice(tree,1);}
        }
        for(let x=9;x<=14;x++){const i=indexOf(x,15);if(heights[i]>=3&&!buildings.includes(i)){paths.push(i);const tree=trees.findIndex(t=>t[0]===i);if(tree>=0)trees.splice(tree,1);}}
    }
    return {v:1,name:template==='blank'?'A little beginning':template==='atoll'?'The quiet ring':'Little Haven',seed:seed>>>0,heights,trees,buildings,paths,weather:'sunny',elapsed:0,generation:0};
}
export function validateWorld(raw) {
    if(!raw||raw.v!==1||!Array.isArray(raw.heights)||raw.heights.length!==COUNT||raw.heights.some(h=>!Number.isInteger(h)||h<0||h>16))throw new Error('Invalid world terrain');
    const validIndex=i=>Number.isInteger(i)&&i>=0&&i<COUNT;
    const buildings=Array.isArray(raw.buildings)?[...new Set(raw.buildings.filter(i=>validIndex(i)&&raw.heights[i]>=3))].slice(0,48):[];
    const paths=Array.isArray(raw.paths)?[...new Set(raw.paths.filter(i=>validIndex(i)&&raw.heights[i]>=3&&!buildings.includes(i)))].slice(0,COUNT):[];
    const used=new Set([...buildings,...paths]);
    const trees=[];
    if(Array.isArray(raw.trees))for(const t of raw.trees){if(Array.isArray(t)&&validIndex(t[0])&&raw.heights[t[0]]>=3&&!used.has(t[0])&&Number.isFinite(t[1])&&trees.length<180){trees.push([t[0],clamp(t[1],.05,1)]);used.add(t[0]);}}
    return {v:1,name:typeof raw.name==='string'?raw.name.trim().slice(0,40)||'Untitled island':'Untitled island',seed:Number.isInteger(raw.seed)?raw.seed>>>0:12458,heights:[...raw.heights],trees,buildings,paths,weather:weatherTypes.includes(raw.weather)?raw.weather:'sunny',elapsed:Number.isFinite(raw.elapsed)?clamp(raw.elapsed,0,1e7):0,generation:Number.isInteger(raw.generation)?clamp(raw.generation,0,1e6):0};
}
export function neighbors(i){const{x,z}=coordinates(i);return [[x-1,z],[x+1,z],[x,z-1],[x,z+1]].filter(([a,b])=>a>=0&&a<SIZE&&b>=0&&b<SIZE).map(([a,b])=>indexOf(a,b));}
export function removeObjects(world,i){world.trees=world.trees.filter(t=>t[0]!==i);world.buildings=world.buildings.filter(v=>v!==i);world.paths=world.paths.filter(v=>v!==i);}
export function applyTool(world,tool,i,brush=1){
    if(!Number.isInteger(i)||i<0||i>=COUNT||!tools.includes(tool)||tool==='view')return {changed:false,message:'Choose a tile on the island.'};
    let targets=[i];
    if(brush===3&&['raise','lower','water','erase','tree'].includes(tool)){const{x,z}=coordinates(i);targets=[];for(let a=x-1;a<=x+1;a++)for(let b=z-1;b<=z+1;b++)if(a>=0&&a<SIZE&&b>=0&&b<SIZE)targets.push(indexOf(a,b));}
    let changed=false,message='';
    for(const cell of targets){
        const h=world.heights[cell],occupied=world.buildings.includes(cell)||world.paths.includes(cell)||world.trees.some(t=>t[0]===cell);
        if(tool==='raise'||tool==='lower'||tool==='water'){
            const next=tool==='water'?0:clamp(h+(tool==='raise'?1:-1),0,16);
            if(next!==h){world.heights[cell]=next;changed=true;if(next<3)removeObjects(world,cell);}
        }else if(tool==='erase'){
            if(occupied){removeObjects(world,cell);changed=true;}
        }else if(h<3)message='That tile is water. Raise land before building here.';
        else if(tool==='tree'&&world.trees.length>=180)message='This island has room for 180 trees. Remove a few to plant more.';
        else if(tool==='cottage'&&world.buildings.length>=48)message='This island has room for 48 cottages.';
        else if(tool==='tree'&&!occupied){world.trees.push([cell,.16]);changed=true;}
        else if(tool==='cottage'&&!world.buildings.includes(cell)){removeObjects(world,cell);world.buildings.push(cell);changed=true;}
        else if(tool==='path'&&!world.paths.includes(cell)){removeObjects(world,cell);world.paths.push(cell);changed=true;}
    }
    return {changed,message:changed?'':message||'Nothing to change on that tile.'};
}
export function evolve(world,seconds){
    const before=world.generation;world.elapsed+=seconds;
    const factor={sunny:1,rain:1.6,snow:.25,night:.55}[world.weather];
    for(const tree of world.trees)tree[1]=Math.min(1,tree[1]+seconds*.011*factor);
    const target=Math.floor(world.elapsed/12);
    for(let generation=before;generation<Math.min(target,before+20);generation++){
        const rng=random(world.seed+generation*7919),occupied=new Set([...world.buildings,...world.paths,...world.trees.map(t=>t[0])]);
        const mature=world.trees.filter(t=>t[1]>.65);const candidates=[];
        for(const [i] of mature)for(const n of neighbors(i))if(world.heights[n]>=4&&world.heights[n]<=12&&!occupied.has(n))candidates.push(n);
        if(candidates.length&&world.trees.length<180&&rng()<factor*.78){const i=candidates[Math.floor(rng()*candidates.length)];world.trees.push([i,.08]);}
    }
    world.generation=target;
    return world.trees.length;
}
// Compact, versioned, bounded share format. The URL itself carries the world;
// no server, account, hidden uploads, or mutable public database is required.
export function encodeWorld(world){
    const compact={v:1,n:world.name,s:world.seed,h:world.heights.map(h=>h.toString(17)).join(''),t:world.trees.map(([i,a])=>[i,Math.round(a*100)]),b:world.buildings,p:world.paths,w:world.weather,e:Math.round(world.elapsed),g:world.generation};
    const bytes=new TextEncoder().encode(JSON.stringify(compact));let binary='';for(const byte of bytes)binary+=String.fromCharCode(byte);
    return btoa(binary).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');
}
export function decodeWorld(value){
    if(typeof value!=='string'||value.length>18000||!/^[A-Za-z0-9_-]+$/.test(value))throw new Error('Invalid world link');
    const binary=atob(value.replaceAll('-','+').replaceAll('_','/'));const compact=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(binary,c=>c.charCodeAt(0))));
    if(compact.v!==1||typeof compact.h!=='string'||compact.h.length!==COUNT||!/^[0-9a-g]+$/.test(compact.h))throw new Error('Invalid world version');
    return validateWorld({v:1,name:compact.n,seed:compact.s,heights:[...compact.h].map(h=>parseInt(h,17)),trees:Array.isArray(compact.t)?compact.t.map(t=>[t[0],t[1]/100]):[],buildings:compact.b,paths:compact.p,weather:compact.w,elapsed:compact.e,generation:compact.g});
}
