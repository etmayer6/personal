// Optional synthesized engine note. No autoplay and no audio downloads.
export class EngineSound {
    constructor(){this.enabled=false;this.context=null;}
    async toggle(){
        if(!this.context){
            const Audio=window.AudioContext||window.webkitAudioContext;
            if(!Audio)throw new Error('Audio unavailable');
            this.context=new Audio();this.osc=this.context.createOscillator();this.osc.type='sawtooth';
            this.sub=this.context.createOscillator();this.sub.type='triangle';
            this.filter=this.context.createBiquadFilter();this.filter.type='lowpass';this.filter.frequency.value=260;
            this.gain=this.context.createGain();this.gain.gain.value=0;
            this.osc.connect(this.filter);this.sub.connect(this.filter);this.filter.connect(this.gain);this.gain.connect(this.context.destination);
            this.osc.start();this.sub.start();
        }
        await this.context.resume();this.enabled=!this.enabled;
        if(!this.enabled)this.gain.gain.setTargetAtTime(0,this.context.currentTime,.04);
        return this.enabled;
    }
    update(car,active,throttle){
        if(!this.context)return;const now=this.context.currentTime;
        this.osc.frequency.setTargetAtTime(Math.max(25,car.rpm/60*2),now,.07);
        this.sub.frequency.setTargetAtTime(Math.max(18,car.rpm/60),now,.07);
        this.filter.frequency.setTargetAtTime(260+car.rpm*.08+(throttle?300:0),now,.08);
        this.gain.gain.setTargetAtTime(this.enabled&&active?(throttle?.022:.011):0,now,.06);
    }
}
