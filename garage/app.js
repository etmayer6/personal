import { paints, wheels, engines, defaultBuild, validBuild, specifications, newRun, stepCar, clamp } from './model.js';
import { GarageRenderer } from './render.js';
import { EngineSound } from './sound.js';

const $ = id => document.getElementById(id);
const storageKey = 'garage-bay-builds-v2', legacyKey = 'gremlin-garage-visualizer-v1';
let storageAvailable = true;
function readStorage(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
}
function writeStorage(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch { storageAvailable = false; return false; }
}
const rawGarage = readStorage(storageKey, {});
let saved = Array.isArray(rawGarage?.builds) ? rawGarage.builds.slice(0, 8).filter(b => b && typeof b.id === 'string').map(b => ({ id: b.id.slice(0, 60), build: validBuild(b.build) })) : [];
let build = validBuild(rawGarage?.current || readStorage(legacyKey, defaultBuild));
if (!saved.length && readStorage(legacyKey, null)?.saved) saved.push({ id: 'legacy-build', build: { ...build } });
const rawRecords = readStorage('garage-bay-records-v1', {});
const records = rawRecords && typeof rawRecords === 'object' && !Array.isArray(rawRecords) ? rawRecords : {};
let mode = 'studio', car = newRun(), paused = false, camera = 'chase', autoOrbit = false, renderer;
let orbit = { yaw: .76, elevation: .31, distance: 10.5 }, lastManual = 0, noticeRemaining = 0;
let studioViewLabel = 'Front three-quarter';
const keys = new Set(), touchKeys = new Set();
const sound = new EngineSound();
let toastTimer, drag, focusBeforeShare;
const stage = $('vehicle-stage');
const formatTime = seconds => Math.floor(seconds/60) + ':' + (seconds%60).toFixed(2).padStart(5,'0');
const recordKey = () => [build.wheel,build.engine,build.suspension,build.lower?'low':'std'].join('-');
const activeRecords = () => records[recordKey()] || {};
const finiteRecord = value => Number.isFinite(value) && value > 0;
function toast(text) {
    clearTimeout(toastTimer); $('garage-toast').textContent = text; $('garage-toast').hidden = false;
    toastTimer = setTimeout(() => { $('garage-toast').hidden = true; }, 3500);
}
function notice(text, seconds = 4) {
    $('stage-notice').textContent = text; $('stage-notice').hidden = false; noticeRemaining = seconds;
}
function sharedBuild() {
    if (!location.hash.startsWith('#build=')) return null;
    try {
        const raw = JSON.parse(decodeURIComponent(location.hash.slice(7)));
        if (raw?.v !== 1 || !raw.build || !Object.hasOwn(paints, raw.build.paint) || !Object.hasOwn(wheels, raw.build.wheel) || !Object.hasOwn(engines, raw.build.engine)) throw new Error('Invalid build');
        return validBuild(raw.build);
    } catch { toast('This build link is invalid. Your local build is unchanged.'); return null; }
}
function setSelected(key) {
    document.querySelectorAll('[data-'+key+']').forEach(button => {
        const active = button.dataset[key] === build[key]; button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active));
    });
}
function refreshBuild(rebuild = true) {
    for (const key of ['paint','wheel','engine','scene']) setSelected(key);
    const spec = specifications(build);
    $('paint-label').textContent = $('paint-choice-label').textContent = paints[build.paint].label;
    $('deck-code').textContent = wheels[build.wheel].code;
    $('build-code').textContent = [build.paint,build.wheel,build.engine,build.lower?'LOW':''].filter(Boolean).join(' / ').toUpperCase();
    $('power-spec').textContent = spec.hp+' hp'; $('mass-spec').textContent = spec.mass.toLocaleString()+' kg';
    $('grip-spec').textContent = spec.grip.toFixed(2)+' g'; $('height-spec').textContent = spec.height+' mm';
    $('engine-note').textContent = engines[build.engine].hp+' hp · '+engines[build.engine].note;
    $('lower-toggle').checked = build.lower; $('lights-toggle').checked = build.lights;
    $('suspension-range').value = build.suspension; $('suspension-label').textContent = build.suspension<30?'Comfort':build.suspension>70?'Firm':'Balanced';
    if (rebuild && renderer) renderer.buildCar(build);
    render();
}
function persistGarage() { return writeStorage(storageKey,{current:build,builds:saved}); }
function edit(key,value) {
    build = validBuild({...build,[key]:value}); $('save-state').textContent = 'Unsaved build';
    refreshBuild(); clearSharedHash();
}
function clearSharedHash() {
    if (location.hash.startsWith('#build=')) history.replaceState(null,'',location.pathname+location.search);
}
function renderSaved() {
    const container = $('saved-builds'); container.replaceChildren();
    if (!saved.length) { const p = document.createElement('p'); p.textContent = 'Save a build to park it here. Stored in this browser.'; container.append(p); return; }
    container.className = 'saved-builds-grid';
    saved.forEach(entry => {
        const card = document.createElement('article'); card.className = 'saved-build';
        const header = document.createElement('header'), swatch = document.createElement('i'), title = document.createElement('strong'), info = document.createElement('small'), actions = document.createElement('div');
        swatch.style.background = paints[entry.build.paint].color; swatch.setAttribute('aria-hidden','true');
        title.textContent = paints[entry.build.paint].label+' GT'; header.append(swatch,title);
        info.textContent = engines[entry.build.engine].hp+' hp / '+wheels[entry.build.wheel].label;
        const load = document.createElement('button'); load.textContent = 'Load build';
        load.addEventListener('click',() => { leaveDrive(); build={...entry.build};refreshBuild();$('save-state').textContent='Saved in this browser';clearSharedHash();persistGarage(); });
        const remove = document.createElement('button'); remove.textContent = 'Remove'; remove.setAttribute('aria-label','Remove '+title.textContent);
        remove.addEventListener('click',() => {
            const next=saved.filter(b=>b.id!==entry.id);
            if(writeStorage(storageKey,{current:build,builds:next})){saved=next;renderSaved();toast('Build removed from this browser. The active configuration is unchanged.');}
            else toast('Browser storage is unavailable. Your saved build was not removed.');
        });
        actions.append(load,remove);card.append(header,info,actions);container.append(card);
    });
}
$('save-button').addEventListener('click',() => {
    const identical = saved.find(entry => JSON.stringify(entry.build)===JSON.stringify(build));
    if (!identical && saved.length>=8) { toast('Your garage has 8 builds. Remove one before saving another.'); return; }
    const next = identical?saved:[...saved,{id:typeof crypto.randomUUID==='function'?crypto.randomUUID():String(Date.now()),build:{...build}}];
    if(writeStorage(storageKey,{current:build,builds:next})){saved=next;renderSaved();$('save-state').textContent='Saved in this browser';toast('Build parked in your garage.');}
    else { $('save-state').textContent='Storage unavailable';toast('Could not save in this browser. Use Share build to keep a link.'); }
});
$('reset-button').addEventListener('click',() => {build={...defaultBuild};orbit={yaw:.76,elevation:.31,distance:10.5};autoOrbit=false;studioViewLabel='Front three-quarter';$('viewport-label').textContent=studioViewLabel;document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view==='three-quarter');b.setAttribute('aria-pressed',String(b.dataset.view==='three-quarter'));});$('orbit-button').setAttribute('aria-pressed','false');refreshBuild();clearSharedHash();$('save-state').textContent='Unsaved build';});
for(const key of ['paint','wheel','engine','scene'])document.querySelectorAll('[data-'+key+']').forEach(button=>button.addEventListener('click',()=>edit(key,button.dataset[key])));
$('lower-toggle').addEventListener('change',e=>edit('lower',e.target.checked));
$('lights-toggle').addEventListener('change',e=>edit('lights',e.target.checked));
$('suspension-range').addEventListener('input',e=>edit('suspension',Number(e.target.value)));
const views = {'three-quarter':{yaw:.76,label:'Front three-quarter'},side:{yaw:Math.PI/2,label:'Profile / side'},front:{yaw:0,label:'Front profile'},rear:{yaw:Math.PI,label:'Rear profile'}};
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
    autoOrbit=false;orbit.yaw=views[button.dataset.view].yaw;orbit.elevation=.24;studioViewLabel=views[button.dataset.view].label;$('viewport-label').textContent=studioViewLabel;$('orbit-button').setAttribute('aria-pressed','false');
    document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();
}));
$('orbit-button').addEventListener('click',()=>{autoOrbit=!autoOrbit;$('orbit-button').setAttribute('aria-pressed',String(autoOrbit));if(autoOrbit){studioViewLabel='Free orbit';$('viewport-label').textContent=studioViewLabel;document.querySelectorAll('[data-view]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});}});
stage.addEventListener('pointerdown',e=>{
    if(mode!=='studio'||e.target!==$('garage-canvas'))return;drag={x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);autoOrbit=false;$('orbit-button').setAttribute('aria-pressed','false');
});
stage.addEventListener('pointermove',e=>{
    if(!drag)return;orbit.yaw+=(e.clientX-drag.x)*.007;orbit.elevation=clamp(orbit.elevation+(e.clientY-drag.y)*.003,.06,.8);drag={x:e.clientX,y:e.clientY};studioViewLabel='Free orbit';$('viewport-label').textContent=studioViewLabel;document.querySelectorAll('[data-view]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});render();
});
stage.addEventListener('pointerup',()=>{drag=null;});stage.addEventListener('pointercancel',()=>{drag=null;});
stage.addEventListener('wheel',e=>{if(mode!=='studio')return;e.preventDefault();orbit.distance=clamp(orbit.distance+e.deltaY*.007,7.8,15);render();},{passive:false});
function refreshMode(){
    document.body.classList.toggle('driving',mode==='drive');$('drive-hud').hidden=mode!=='drive';$('driving-controls').hidden=mode!=='drive';$('view-controls').hidden=mode==='drive';
    $('mode-badge').textContent=mode==='drive'?(car.course==='sprint'?'PROVING GROUND / SPRINT':'PROVING GROUND / CIRCUIT'):'DESIGN STUDIO';
    $('viewport-label').textContent=mode==='drive'?'Apex GT / '+camera:studioViewLabel;$('pause-overlay').hidden=!paused;$('pause-button').textContent=paused?'Resume':'Pause';
    document.querySelector('.track-map').toggleAttribute('hidden',car.course==='sprint');
    render();
}
function startDrive(){
    if(!renderer)return;mode='drive';paused=false;autoOrbit=false;keys.clear();touchKeys.clear();camera='chase';car=newRun($('drive-mode').value);renderer.resetCamera();$('camera-button').textContent='Camera: chase';refreshMode();stage.focus({preventScroll:true});stage.scrollIntoView({block:'start',behavior:'instant'});
    notice(car.course==='sprint'?'Hold W / ↑. Stay on the strip for a valid timed run.':'W / ↑ to go. A/D to steer. Brake before the hairpins.',6);
}
function leaveDrive(){mode='studio';paused=false;keys.clear();touchKeys.clear();noticeRemaining=0;$('stage-notice').hidden=true;renderer?.resetCamera();refreshMode();}
function restart(){car=newRun(car.course);paused=false;keys.clear();touchKeys.clear();renderer?.resetCamera();refreshMode();notice('Fresh run. Your configuration is unchanged.',3);stage.focus({preventScroll:true});}
function setPaused(value){paused=value;keys.clear();touchKeys.clear();refreshMode();}
$('sound-button').addEventListener('click',async()=>{try{const enabled=await sound.toggle();$('sound-button').textContent='Sound: '+(enabled?'on':'off');$('sound-button').setAttribute('aria-pressed',String(enabled));render();}catch{toast('Engine audio is unavailable in this browser.');}});
$('drive-button').addEventListener('click',startDrive);$('return-button').addEventListener('click',leaveDrive);$('restart-button').addEventListener('click',restart);
$('pause-button').addEventListener('click',()=>setPaused(!paused));$('resume-button').addEventListener('click',()=>{setPaused(false);stage.focus({preventScroll:true});});
$('camera-button').addEventListener('click',()=>{camera=camera==='chase'?'hood':'chase';renderer?.resetCamera();$('camera-button').textContent='Camera: '+camera;$('viewport-label').textContent='Apex GT / '+camera;render();});
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen();}catch{toast('Fullscreen is unavailable in this browser.');}}
$('fullscreen-button').addEventListener('click',fullscreen);
$('reload-button').addEventListener('click',()=>location.reload());
const recognized=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD','Space','KeyR','KeyP','KeyC','KeyF'];
window.addEventListener('keydown',e=>{
    if(e.target.closest('input,select,textarea')||!$('share-dialog').hidden)return;
    if(e.code==='KeyF'&&(mode==='drive'||stage.contains(document.activeElement))){e.preventDefault();if(!e.repeat)fullscreen();return;}
    if(mode!=='drive'||!recognized.includes(e.code))return;e.preventDefault();
    if(!e.repeat){if(e.code==='KeyR')return restart();if(e.code==='KeyP')return setPaused(!paused);if(e.code==='KeyC')return $('camera-button').click();}
    if(!paused)keys.add(e.code);
});
window.addEventListener('keyup',e=>keys.delete(e.code));
window.addEventListener('blur',()=>{keys.clear();touchKeys.clear();if(mode==='drive')setPaused(true);});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&mode==='drive')setPaused(true);});
document.querySelectorAll('[data-key]').forEach(button=>{
    button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);if(!paused)touchKeys.add(button.dataset.key);});
    for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,()=>touchKeys.delete(button.dataset.key));
});
function driveInput(){const has=(...codes)=>codes.some(c=>keys.has(c)||touchKeys.has(c));return{up:has('ArrowUp','KeyW'),down:has('ArrowDown','KeyS'),left:has('ArrowLeft','KeyA'),right:has('ArrowRight','KeyD'),handbrake:has('Space')};}
function recordResult(type,value){
    const k=recordKey(), previous=records[k]||{};
    if(!finiteRecord(previous[type])||value<previous[type]){records[k]={...previous,[type]:value};writeStorage('garage-bay-records-v1',records);return true;}return false;
}
function update(dt){
    if(mode==='studio'){if(autoOrbit&&!document.hidden)orbit.yaw+=dt*.3;return;}
    if(paused)return;
    const input=driveInput();car.handbrake=input.handbrake;stepCar(car,build,input,dt);renderer?.skid(car);
    if(noticeRemaining>0){noticeRemaining-=dt;if(noticeRemaining<=0)$('stage-notice').hidden=true;}
    if(car.event==='sixty'){const pb=recordResult('sixty',car.zeroSixty);notice('0–60: '+car.zeroSixty.toFixed(2)+' s'+(pb?' · Personal best':''),5);}
    if(car.event==='quarter'){const pb=recordResult('quarter',car.quarter);notice('¼ mile: '+car.quarter.toFixed(2)+' s'+(pb?' · Personal best':'')+' · Brake for the end of the strip',7);}
    if(car.event==='lap'){const pb=recordResult('lap',car.lastLap);notice('Lap '+(car.lap-1)+': '+formatTime(car.lastLap)+(pb?' · Personal best':''),6);}
    if(car.event==='invalid-lap')notice('Lap completed. Grass shortcut — no record saved.',6);
    if(car.event==='boundary')notice('Back on the start line. Stay inside the test ground.',4);
    if(car.event==='end')notice('End of the strip. Results kept — R to run again.',3600);
    if(car.event==='collision')notice('Easy on the bodywork. R puts you back on the start line.',3);
}
function updateHud(){
    if(mode!=='drive')return;const best=activeRecords(),mph=Math.abs(car.speed)*2.23694;
    $('speed-readout').textContent=Math.round(mph);$('gear-readout').textContent=car.gear;$('rpm-readout').textContent=car.rpm+' RPM';$('rpm-bar').style.width=(car.rpm/7000*100)+'%';
    $('surface-readout').textContent=car.surface==='grass'?'GRASS / REDUCED GRIP':car.surface==='curb'?'CURB':Math.abs(car.slip)>.08?'TIRE SLIP':car.handbrake?'HANDBRAKE':'TARMAC';
    $('trial-label').textContent=car.course==='circuit'?'CIRCUIT / LAP '+car.lap+(car.lapInvalid?' · INVALID':''):'0–60 / ¼ MILE'+(car.sprintInvalid?' · INVALID':'');
    $('time-readout').textContent=car.course==='circuit'?formatTime(car.lapTime):car.quarter?car.quarter.toFixed(2)+' s / ¼':car.elapsed.toFixed(2)+' s';
    $('best-readout').textContent=car.course==='circuit'?'Best '+(finiteRecord(best.lap)?formatTime(best.lap):'—'):'Best 0–60 '+(finiteRecord(best.sixty)?best.sixty.toFixed(2)+' s':'—')+' · ¼ '+(finiteRecord(best.quarter)?best.quarter.toFixed(2)+' s':'—');
    $('map-dot').setAttribute('cx',clamp(50+car.x*28/34,3,97));$('map-dot').setAttribute('cy',clamp(85+car.z*43/65,3,167));
}
function render(dt=1/60){renderer?.draw(build,mode,car,orbit,camera,dt);sound.update(car,mode==='drive'&&!paused&&!car.finished,driveInput().up);updateHud();}
$('share-button').addEventListener('click',()=>{
    if(mode==='drive')setPaused(true);
    const url=new URL(location.href);url.hash='build='+encodeURIComponent(JSON.stringify({v:1,build}));
    $('share-url').value=url.href;$('copy-status').textContent='';focusBeforeShare=document.activeElement;$('share-dialog').hidden=false;$('share-url').focus();$('share-url').select();
});
function closeShare(){ $('share-dialog').hidden=true;focusBeforeShare?.focus(); }
$('close-share').addEventListener('click',closeShare);
$('share-dialog').addEventListener('click',e=>{if(e.target===$('share-dialog'))closeShare();});
$('share-dialog').addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.preventDefault();closeShare();}
    if(e.key==='Tab'){const items=[...$('share-dialog').querySelectorAll('button,input')],first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
$('copy-link').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText($('share-url').value);$('copy-status').textContent='Copied. Share it wherever you like.';}
    catch{$('share-url').focus();$('share-url').select();$('copy-status').textContent='Copy the selected link manually (Ctrl/Cmd+C).';}
});
window.addEventListener('hashchange',()=>{const shared=sharedBuild();if(shared){leaveDrive();build=shared;refreshBuild();$('save-state').textContent='Shared build';toast('Shared build loaded. Take it for a drive.');}});
window.render_game_to_text=()=>JSON.stringify({
    mode,paused,sound:sound.enabled,renderer:renderer?'webgl':'unavailable',coordinates:'meters; +x east, +z south; yaw 0 faces north (-z)',
    build,specifications:specifications(build),camera:mode==='drive'?camera:{yaw:orbit.yaw,distance:orbit.distance},
    car:mode==='drive'?{x:+car.x.toFixed(2),z:+car.z.toFixed(2),yaw:+car.yaw.toFixed(3),speedMps:+car.speed.toFixed(2),mph:+(Math.abs(car.speed)*2.23694).toFixed(1),steer:+car.steer.toFixed(2),slip:+car.slip.toFixed(3),gear:car.gear,rpm:car.rpm,surface:car.surface}:null,
    run:{course:car.course,elapsed:+car.elapsed.toFixed(3),started:car.started,finished:car.finished,zeroSixty:car.zeroSixty,quarter:car.quarter,distance:+car.distance.toFixed(1),invalid:car.course==='sprint'?car.sprintInvalid:car.lapInvalid,lap:car.lap,checkpoint:car.checkpoint,lapTime:+car.lapTime.toFixed(3),lastLap:car.lastLap},
    records:activeRecords(),savedBuilds:saved.length,storageAvailable
});
window.render_garage_to_text=window.render_game_to_text;
window.advanceTime=ms=>{if(!Number.isFinite(ms)||ms<0)return;lastManual=performance.now();const duration=Math.min(ms,60000);const steps=Math.ceil(duration/(1000/120));for(let i=0;i<steps;i++)update(duration/1000/steps);render(Math.max(1/60,duration/1000));};
try{renderer=new GarageRenderer($('garage-canvas'));renderer.buildCar(build);}
catch(error){$('render-error').hidden=false;$('drive-button').disabled=true;$('fullscreen-button').disabled=true;}
$('garage-canvas').addEventListener('webglcontextlost',e=>{e.preventDefault();if(mode==='drive')setPaused(true);renderer=null;$('render-error').hidden=false;$('drive-button').disabled=true;document.body.dataset.demoState='error';});
const initialShared=sharedBuild();if(initialShared){build=initialShared;$('save-state').textContent='Shared build';}
else if(saved.length)$('save-state').textContent='Saved in this browser';
refreshBuild();renderSaved();document.body.dataset.demoState=renderer?'ready':'error';
let last=performance.now(),accumulator=0;
function loop(now){
    const delta=Math.min(.1,(now-last)/1000);last=now;
    if(now-lastManual>100&&!document.hidden){accumulator+=delta;while(accumulator>=1/120){update(1/120);accumulator-=1/120;}render(delta);}
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
