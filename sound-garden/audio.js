import {pitch,sounding,stepSeconds} from './model.js';
// Live playback and WAV export use the same voices and clock durations.
const noiseBuffers=new WeakMap();
function noise(ctx){if(noiseBuffers.has(ctx))return noiseBuffers.get(ctx);const buffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*.25),ctx.sampleRate),data=buffer.getChannelData(0);let seed=321;for(let i=0;i<data.length;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;data[i]=(seed/4294967296)*2-1;}noiseBuffers.set(ctx,buffer);return buffer;}
export function voice(ctx,destination,p,scene,at,register=()=>{}){
    const hz=pitch(p,scene).hz,level=p.gain*.2,duration=p.type==='bell'?1.1:p.type==='bass'?.65:p.type==='reed'?.45:.20;
    const envelope=ctx.createGain();envelope.gain.setValueAtTime(0,at);envelope.gain.linearRampToValueAtTime(level,at+.008);envelope.gain.exponentialRampToValueAtTime(.0001,at+duration);envelope.connect(destination);
    const sources=[];let connected=false;
    function osc(type,frequency,amount=1){const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(frequency,at);g.gain.value=amount;o.connect(g);g.connect(envelope);o.start(at);o.stop(at+duration+.04);sources.push(o);o.__envelope=envelope;register(o);o.onended=()=>{o.__ended=true;o.disconnect();g.disconnect();if(sources.every(s=>s.__ended))envelope.disconnect();};return o;}
    if(p.type==='bell'){osc('sine',hz,.8);osc('sine',hz*2.003,.25);osc('sine',hz*3.99,.08);}
    else if(p.type==='reed'){osc('triangle',hz,.65);osc('sine',hz*2,.15);}
    else if(p.type==='bass'){osc('sine',hz,1);osc('triangle',hz*.5,.15);}
    else if(p.type==='drum'){const o=osc('sine',115,1);o.frequency.exponentialRampToValueAtTime(42,at+.14);}
    else{const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter();source.buffer=noise(ctx);filter.type='highpass';filter.frequency.value=5500;source.connect(filter);filter.connect(envelope);source.start(at);source.stop(at+duration);source.__envelope=envelope;register(source);source.onended=()=>{source.disconnect();filter.disconnect();envelope.disconnect();};connected=true;}
    return connected||sources.length>0;
}
function output(ctx,volume){const compressor=ctx.createDynamicsCompressor(),master=ctx.createGain();compressor.threshold.value=-18;compressor.knee.value=20;compressor.ratio.value=4;compressor.attack.value=.003;compressor.release.value=.2;compressor.connect(master);master.gain.value=volume*.45;master.connect(ctx.destination);return{input:compressor,master};}
export class GardenAudio{
    constructor(){this.ctx=null;this.mix=null;this.sources=new Set();this.scheduled=0;this.lastNotes=[];}
    async unlock(){const Context=window.AudioContext||window.webkitAudioContext;if(!Context)return false;try{if(!this.ctx){this.ctx=new Context();this.mix=output(this.ctx,.5);}await this.ctx.resume();return this.ctx.state==='running';}catch{return false;}}
    volume(value,muted){if(this.ctx&&this.mix){this.mix.master.gain.cancelScheduledValues(this.ctx.currentTime);this.mix.master.gain.setTargetAtTime(muted?0:value*.45,this.ctx.currentTime,.02);}}
    play(p,scene,at){if(!this.ctx||this.ctx.state!=='running')return;const when=Math.max(this.ctx.currentTime,at);voice(this.ctx,this.mix.input,p,scene,when,s=>{this.sources.add(s);s.addEventListener('ended',()=>this.sources.delete(s),{once:true});});this.scheduled++;this.lastNotes.push({id:p.id,at:when,hz:pitch(p,scene).hz});this.lastNotes=this.lastNotes.slice(-32);}
    stop(){if(!this.ctx)return;const now=this.ctx.currentTime,envelopes=new Set();for(const s of this.sources){try{if(s.__envelope&&!envelopes.has(s.__envelope)){envelopes.add(s.__envelope);const gain=s.__envelope.gain;if(gain.cancelAndHoldAtTime)gain.cancelAndHoldAtTime(now);else gain.cancelScheduledValues(now);gain.setTargetAtTime(0,now,.008);}}catch{/* Older audio engines may lack envelope holding. */}try{s.stop(now+.04);}catch{/* A voice may already have ended. */}}this.sources.clear();}
    get now(){return this.ctx?.currentTime||0;}
    diagnostics(){return{state:this.ctx?.state||'locked',scheduled:this.scheduled,active:this.sources.size,lastNotes:this.lastNotes.slice(-8)};}
}
export async function renderLoop(scene,volume=.5){
    const Context=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!Context)throw new Error('WAV export is unavailable in this browser.');
    const seconds=32*60/scene.tempo/4,rate=44100,ctx=new Context(2,Math.ceil((seconds+1.25)*rate),rate),mix=output(ctx,volume);let at=.02;
    for(let step=0;step<32;step++){for(const p of scene.plants)if(sounding(p,step%16))voice(ctx,mix.input,p,scene,at);at+=stepSeconds(scene,step);}
    return encodeWav(await ctx.startRendering());
}
export function encodeWav(buffer){const channels=buffer.numberOfChannels,length=buffer.length,bytes=new ArrayBuffer(44+length*channels*2),view=new DataView(bytes);const str=(at,s)=>{for(let i=0;i<s.length;i++)view.setUint8(at+i,s.charCodeAt(i));};str(0,'RIFF');view.setUint32(4,bytes.byteLength-8,true);str(8,'WAVE');str(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,channels,true);view.setUint32(24,buffer.sampleRate,true);view.setUint32(28,buffer.sampleRate*channels*2,true);view.setUint16(32,channels*2,true);view.setUint16(34,16,true);str(36,'data');view.setUint32(40,length*channels*2,true);const data=Array.from({length:channels},(_,i)=>buffer.getChannelData(i));let pos=44;for(let i=0;i<length;i++)for(let c=0;c<channels;c++){const s=Math.max(-1,Math.min(1,data[c][i]));view.setInt16(pos,Math.round(s*(s<0?32768:32767)),true);pos+=2;}return new Blob([bytes],{type:'audio/wav'});}
