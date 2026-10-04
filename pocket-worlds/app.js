import {SIZE,COUNT,tools,coordinates,indexOf,clamp,createWorld,validateWorld,applyTool,evolve,encodeWorld,decodeWorld} from './model.js';
import {WorldRenderer} from './render.js';
const $=id=>document.getElementById(id),canvas=$('world-canvas'),stage=$('world-stage');
const draftKey='ethan-pocket-world-draft-v1',savesKey='ethan-pocket-worlds-v1';
const clone=value=>JSON.parse(JSON.stringify(value));
let world=createWorld(),saves=[],shared=false,tool='raise',brush=1,running=false,speed=1,time=0,hover=-1,keyboard=-1,history=[],future=[],pointer=null,stroke=null,dirty=false,saveTimer=0,noticeTimer=0,lastFrame=0,lastUi=0;
const camera={yaw:Math.PI/4,zoom:1.3,panX:0,panY:0},reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
function notice(message){$('notice').textContent=message;$('notice').hidden=false;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$('notice').hidden=true,4200);}
function writeDraft(){if(shared)return;try{localStorage.setItem(draftKey,JSON.stringify(world));dirty=false;$('save-state').textContent='Draft saved locally';}catch{$('save-state').textContent='Storage unavailable';} }
function changed(){dirty=true;clearTimeout(saveTimer);if(!shared)saveTimer=setTimeout(writeDraft,450);updateUI();}
function remember(before){history.push(before);if(history.length>50)history.shift();future=[];changed();}
function finishStroke(){if(stroke&&stroke.changed)remember(stroke.before);stroke=null;pointer=null;}
try{const saved=localStorage.getItem(draftKey);if(saved)world=validateWorld(JSON.parse(saved));}catch{notice('Could not restore the draft. Your saved islands are kept separately.');}
try{const saved=JSON.parse(localStorage.getItem(savesKey)||'[]');if(Array.isArray(saved))saves=saved.slice(0,6).flatMap(s=>{try{return [{id:String(s.id).slice(0,60),world:validateWorld(s.world)}];}catch{return [];}});}catch{notice('Saved islands could not be read. Import a backup file to restore one.');}
if(location.hash.startsWith('#world=')){try{world=decodeWorld(location.hash.slice(7));shared=true;}catch{notice('That world link is incomplete or invalid. Your local draft is still here.');}}
let renderer;
try{renderer=new WorldRenderer(canvas);}catch{document.body.dataset.demoState='error';$('tool-hint').textContent='Canvas is unavailable. Try a browser with Canvas support.';throw new Error('Pocket Worlds needs Canvas2D');}
function updateUI(){
    if(document.activeElement!==$('world-name'))$('world-name').value=world.name;$('world-badge').textContent=world.name.toUpperCase();$('shared-banner').hidden=!shared;
    document.querySelectorAll('[data-tool]').forEach(b=>{const active=b.dataset.tool===tool;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    document.querySelectorAll('[data-weather]').forEach(b=>{const active=b.dataset.weather===world.weather;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    $('undo').disabled=!history.length;$('redo').disabled=!future.length;$('grow').textContent=running?'Ⅱ Pause growth':'▶ Let it grow';$('grow').setAttribute('aria-pressed',String(running));
    $('world-stats').textContent=`${world.trees.length} trees · ${world.buildings.length} cottages`;
    const labels={raise:'Raise · drag across tiles',lower:'Lower · drag across tiles',water:'Water · carve a channel',tree:'Forest · plant on land',cottage:'Cottage · place on land',path:'Path · connect your cottages',erase:'Erase · remove placed objects',view:'Look around · drag to orbit'};
    $('tool-hint').textContent=labels[tool];stage.classList.toggle('view-mode',tool==='view');
}
function paint(i){if(i<0||tool==='view'||stroke?.visited.has(i))return;if(!stroke)stroke={before:clone(world),visited:new Set(),changed:false};stroke.visited.add(i);const result=applyTool(world,tool,i,brush);stroke.changed||=result.changed;if(result.message&&!result.changed)notice(result.message);if(result.changed)updateUI();}
function mutate(fn){finishStroke();const before=clone(world);fn();remember(before);draw();}
function draw(){renderer.draw(world,camera,reduceMotion?0:time,hover,keyboard);}
function step(seconds){time+=seconds;if(running){evolve(world,seconds*speed);dirty=true;}}
function frame(now){const dt=lastFrame?Math.min((now-lastFrame)/1000,.05):0;lastFrame=now;if(!document.hidden)step(dt);if(now-lastUi>400){updateUI();lastUi=now;}if(dirty&&!shared&&now%5000<50)writeDraft();draw();requestAnimationFrame(frame);}
document.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>{finishStroke();tool=b.dataset.tool;keyboard=-1;updateUI();}));
$('brush-size').addEventListener('change',e=>brush=Number(e.target.value));
canvas.addEventListener('contextmenu',e=>e.preventDefault());
canvas.addEventListener('pointerdown',e=>{if(e.button!==0&&e.button!==2)return;canvas.focus({preventScroll:true});finishStroke();keyboard=-1;pointer={id:e.pointerId,x:e.clientX,y:e.clientY,orbit:tool==='view'||e.button===2||e.shiftKey,pan:e.altKey};canvas.setPointerCapture(e.pointerId);if(!pointer.orbit)paint(renderer.hitTest(e.clientX,e.clientY));draw();});
canvas.addEventListener('pointermove',e=>{if(pointer&&pointer.id===e.pointerId){if(pointer.orbit){const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;if(pointer.pan){camera.panX+=dx;camera.panY+=dy;}else{camera.yaw+=dx*.012;camera.panY=clamp(camera.panY+dy*.35,-120,120);}pointer.x=e.clientX;pointer.y=e.clientY;}else paint(renderer.hitTest(e.clientX,e.clientY));}hover=renderer.hitTest(e.clientX,e.clientY);draw();});
canvas.addEventListener('pointerup',e=>{if(pointer?.id===e.pointerId){finishStroke();if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);}draw();});
canvas.addEventListener('pointercancel',finishStroke);canvas.addEventListener('lostpointercapture',finishStroke);canvas.addEventListener('pointerleave',()=>{hover=-1;if(!pointer)draw();});
canvas.addEventListener('wheel',e=>{e.preventDefault();camera.zoom=clamp(camera.zoom*Math.exp(-e.deltaY*.001),.65,2.2);draw();},{passive:false});
function undo(){finishStroke();if(!history.length)return;future.push(clone(world));world=history.pop();changed();draw();}
function redo(){finishStroke();if(!future.length)return;history.push(clone(world));world=future.pop();changed();draw();}
$('undo').addEventListener('click',undo);$('redo').addEventListener('click',redo);
document.querySelectorAll('[data-weather]').forEach(b=>b.addEventListener('click',()=>{if(world.weather!==b.dataset.weather)mutate(()=>world.weather=b.dataset.weather);}));
$('world-name').addEventListener('change',e=>{const name=e.target.value.trim().slice(0,40)||'Untitled island';if(name!==world.name)mutate(()=>world.name=name);else updateUI();});
$('grow').addEventListener('click',()=>{running=!running;if(!running)writeDraft();updateUI();});$('growth-speed').addEventListener('change',e=>speed=Number(e.target.value));
$('rotate-left').addEventListener('click',()=>{camera.yaw-=Math.PI/8;draw();});$('rotate-right').addEventListener('click',()=>{camera.yaw+=Math.PI/8;draw();});
$('reset-view').addEventListener('click',()=>{Object.assign(camera,{yaw:Math.PI/4,zoom:1.3,panX:0,panY:0});draw();});
$('zoom-in').addEventListener('click',()=>{camera.zoom=clamp(camera.zoom*1.15,.65,2.2);draw();});$('zoom-out').addEventListener('click',()=>{camera.zoom=clamp(camera.zoom/1.15,.65,2.2);draw();});
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen();}catch{notice('Fullscreen is unavailable in this browser.');}}
$('fullscreen').addEventListener('click',fullscreen);document.addEventListener('fullscreenchange',draw);
canvas.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo();return;}
    if(/^[1-8]$/.test(e.key)){tool=tools[Number(e.key)-1];updateUI();e.preventDefault();return;}
    if(e.key.toLowerCase()==='f'){fullscreen();e.preventDefault();return;}
    if(e.code==='Space'){running=!running;updateUI();e.preventDefault();return;}
    if(e.key.startsWith('Arrow')){e.preventDefault();if(keyboard<0)keyboard=indexOf(11,13);const{x,z}=coordinates(keyboard);keyboard=indexOf(clamp(x+(e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0),0,SIZE-1),clamp(z+(e.key==='ArrowDown'?1:e.key==='ArrowUp'?-1:0),0,SIZE-1));hover=-1;draw();}
    if(e.key==='Enter'){e.preventDefault();if(keyboard<0)keyboard=indexOf(11,13);paint(keyboard);finishStroke();draw();}
});
function renderShelf(){const host=$('saved-worlds');host.replaceChildren();if(!saves.length){const p=document.createElement('p');p.className='empty-shelf';p.textContent='No islands saved yet. Make one worth keeping.';host.append(p);return;}
    saves.forEach(entry=>{const card=document.createElement('article'),h=document.createElement('h3'),small=document.createElement('small'),actions=document.createElement('div'),open=document.createElement('button'),remove=document.createElement('button');h.textContent=entry.world.name;small.textContent=`${entry.world.trees.length} trees · ${entry.world.buildings.length} cottages · ${entry.world.weather}`;open.textContent='Open';open.setAttribute('aria-label',`Open ${entry.world.name}`);remove.textContent='Remove';remove.setAttribute('aria-label',`Remove ${entry.world.name}`);open.onclick=()=>{if(!confirm('Open this island? This replaces your current draft.'))return;loadWorld(entry.world,false);};remove.onclick=()=>{if(!confirm(`Remove ${entry.world.name} from your saved islands?`))return;const next=saves.filter(s=>s.id!==entry.id);if(writeSaves(next)){saves=next;renderShelf();}};actions.append(open,remove);card.append(h,small,actions);host.append(card);});
}
function writeSaves(next){try{localStorage.setItem(savesKey,JSON.stringify(next));return true;}catch{notice('Storage is unavailable or full. Export a file to keep this island.');return false;}}
function saveWorld(){finishStroke();const next=[{id:crypto.randomUUID(),world:clone(world)},...saves].slice(0,6);if(saves.length>=6&&!confirm('Keep this island? Your oldest saved snapshot will be replaced.'))return;if(writeSaves(next)){saves=next;if(shared){shared=false;clearHash();}writeDraft();renderShelf();updateUI();notice('Island saved in this browser.');}}
function clearHash(){try{window.history.replaceState(null,'',location.pathname+location.search);}catch{/* Sandboxed embeds may not permit history updates. */}}
function loadWorld(next,isShared){finishStroke();world=validateWorld(clone(next));running=false;history=[];future=[];shared=isShared;keyboard=-1;hover=-1;if(!shared){clearHash();writeDraft();}updateUI();draw();}
window.addEventListener('hashchange',()=>{
    if(location.hash.startsWith('#world=')){
        try{loadWorld(decodeWorld(location.hash.slice(7)),true);}catch{notice('That world link is incomplete or invalid. Nothing was changed.');}
    }else if(shared){
        try{loadWorld(JSON.parse(localStorage.getItem(draftKey)||'null')||createWorld(),false);}catch{loadWorld(createWorld(),false);}
    }
});
window.addEventListener('hashchange',()=>{
    if(location.hash.startsWith('#world=')){
        try{loadWorld(decodeWorld(location.hash.slice(7)),true);}catch{notice('That world link is incomplete or invalid. Nothing was changed.');}
    }else if(shared){
        try{loadWorld(JSON.parse(localStorage.getItem(draftKey)||'null')||createWorld(),false);}catch{loadWorld(createWorld(),false);}
    }
});
$('save-world').addEventListener('click',saveWorld);$('keep-world').addEventListener('click',saveWorld);
$('share-world').addEventListener('click',()=>{finishStroke();const url=new URL(location.href);url.hash='world='+encodeWorld(world);$('share-url').value=url.href;$('copy-state').textContent='';$('share-dialog').showModal();});
$('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('share-url').value);$('copy-state').textContent='Copied. Anyone with the link can remix this island.';}catch{$('share-url').focus();$('share-url').select();$('copy-state').textContent='Select and copy the link above.';}});
for(const id of ['share-dialog','new-dialog'])$(id).addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const focusable=[...$(id).querySelectorAll('button,input,select')].filter(el=>!el.disabled&&!el.hidden),first=focusable[0],last=focusable.at(-1);
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});
$('new-world').addEventListener('click',()=>$('new-dialog').showModal());$('create-world').addEventListener('click',()=>{loadWorld(createWorld(crypto.getRandomValues(new Uint32Array(1))[0],$('world-template').value),false);$('new-dialog').close();notice('Your new island is ready.');});
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function fileName(){return world.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'pocket-world';}
$('export-world').addEventListener('click',()=>{finishStroke();download(new Blob([JSON.stringify(world,null,2)],{type:'application/json'}),fileName()+'.json');});
$('import-world').addEventListener('click',()=>$('world-file').click());$('world-file').addEventListener('change',async e=>{const file=e.target.files?.[0];e.target.value='';if(!file)return;if(file.size>80000){notice('That file is too large. Choose a Pocket Worlds JSON export.');return;}try{const next=validateWorld(JSON.parse(await file.text()));if(!confirm('Import this island? This replaces your current draft.'))return;loadWorld(next,false);notice('Island imported.');}catch{notice('That file is not a valid Pocket Worlds island. Nothing was changed.');}});
$('postcard').addEventListener('click',()=>{renderer.draw(world,camera,reduceMotion?0:time,-1,-1);canvas.toBlob(blob=>{if(blob)download(blob,fileName()+'.png');else notice('Could not create a postcard.');});draw();});
window.addEventListener('pagehide',()=>{finishStroke();clearTimeout(saveTimer);if(dirty)writeDraft();});document.addEventListener('visibilitychange',()=>{lastFrame=0;if(document.hidden&&dirty)writeDraft();});
window.advanceTime=ms=>{const total=clamp(Number(ms)||0,0,600000)/1000;for(let remaining=total;remaining>0;remaining-=.05)step(Math.min(.05,remaining));updateUI();draw();};
window.render_game_to_text=()=>JSON.stringify({mode:'world-editor',name:world.name,tool,brush,weather:world.weather,running,speed,shared,elapsed:Math.round(world.elapsed*10)/10,coordinates:'24 × 24 tiles; x right, z down; height 0–16; water at height 0',cursor:keyboard>=0?{...coordinates(keyboard),height:world.heights[keyboard]}:null,land:world.heights.filter(h=>h>=3).length,trees:world.trees.map(([i,age])=>({...coordinates(i),age:Math.round(age*100)/100})),cottages:world.buildings.map(coordinates),paths:world.paths.map(coordinates),undo:history.length,redo:future.length,saved:saves.map(s=>s.world.name),camera:{yaw:Math.round(camera.yaw*100)/100,zoom:camera.zoom}});
// Read-only world coordinates support reproducible interaction tests without bypassing controls.
window.pocketWorlds={snapshot:()=>clone(world),cellScreen:i=>renderer.cellScreen(i)};
renderShelf();updateUI();draw();document.body.dataset.demoState='ready';requestAnimationFrame(frame);
