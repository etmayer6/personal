import {W,H,R,clamp,segments,closest,challenges} from './model.js';
const DT=1/120,COLORS=['#508e98','#c78459','#79916a','#ad727b','#b6a259'];
export class Simulation{
    constructor(machine,onEvent=()=>{}){this.onEvent=onEvent;this.reset(machine);}
    reset(machine){this.machine=machine;this.time=0;this.balls=[];this.effects=[];this.running=false;this.started=false;this.finished=false;this.won=false;this.launched=0;this.caught=0;this.lost=0;this.bells=0;this.portals=0;this.gatesOpen=false;this.followId=null;this.nextLaunch=0;this.queued=0;this.accumulator=0;this.dominos=new Map(machine.pieces.filter(p=>p.type==='domino').map(p=>[p.id,{angle:0,velocity:0}]));}
    start(){if(this.finished)this.reset(this.machine);if(!this.started){this.started=true;this.nextLaunch=this.time;this.queued=this.machine.source.count;}this.running=true;}
    spawn(){if(this.launched>=40||this.machine.challenge&&this.launched>=3)return null;const b={id:++this.launched,x:this.machine.source.x,y:this.machine.source.y,vx:0,vy:0,r:R,color:COLORS[(this.launched-1)%COLORS.length],status:'active',bellHits:new Set(),portalHits:0,cooldowns:new Map(),trail:[],age:0};this.balls.push(b);if(!this.followId)this.followId=b.id;this.finished=false;return b;}
    emit(type,x,y,id){this.effects.push({type,x,y,id,time:this.time});this.onEvent({type,x,y,id,time:this.time});}
    step(seconds){if(!this.running)return;this.accumulator+=clamp(seconds,0,10);while(this.accumulator>=DT-1e-10){this.tick(DT);this.accumulator=Math.max(0,this.accumulator-DT);if(!this.running){this.accumulator=0;break;}}}
    tick(dt){
        this.time+=dt;
        if(this.queued>0&&this.time>=this.nextLaunch){this.spawn();this.queued--;this.nextLaunch+=.65;}
        // Resolve a fast marble in smaller spatial steps so it cannot skip a rail.
        const speed=Math.max(1,...this.balls.filter(b=>b.status==='active').map(b=>Math.hypot(b.vx,b.vy)));
        const steps=Math.max(1,Math.ceil(speed*dt/(R*.65))),h=dt/steps;
        for(let sub=0;sub<steps;sub++){
            this.updateDominos(h);
            for(const b of this.balls){if(b.status!=='active')continue;b.age+=h;b.vy+=640*h;
                for(const p of this.machine.pieces.filter(p=>p.type==='magnet')){const dx=p.x-b.x,dy=p.y-b.y,d=Math.hypot(dx,dy);if(d<170&&d>12){const f=p.power*110000/(d*d+2200);b.vx+=dx/d*f*h;b.vy+=dy/d*f*h;}}
                b.vx*=Math.exp(-.08*h);b.vy*=Math.exp(-.02*h);const vel=Math.hypot(b.vx,b.vy);if(vel>900){b.vx*=900/vel;b.vy*=900/vel;}
                b.x+=b.vx*h;b.y+=b.vy*h;
                for(const p of this.machine.pieces){
                    if(b.status!=='active')break;
                    if(p.type==='cup'){const c=Math.cos(p.angle),s=Math.sin(p.angle),localX=(b.x-p.x)*c+(b.y-p.y)*s,localY=-(b.x-p.x)*s+(b.y-p.y)*c,localV=-b.vx*s+b.vy*c;if(Math.abs(localX)<p.length/2-R-4&&localY>=-19&&localY<=22&&localV>=0){b.status='caught';const slot=((this.caught%5)-2)*15;b.x=p.x+slot*c-8*s;b.y=p.y+slot*s+8*c;b.vx=b.vy=0;this.caught++;this.emit('catch',p.x,p.y,p.id);break;}}
                    if(['magnet','cup'].includes(p.type)){if(p.type==='cup')this.rails(b,p,h);continue;}
                    if(p.type==='bell'||p.type==='switch'){
                        const d=Math.hypot(b.x-p.x,b.y-p.y),radius=p.length/2+R;
                        if(d<radius&&(b.cooldowns.get(p.id)||0)<this.time){b.cooldowns.set(p.id,this.time+1);if(p.type==='bell'){b.bellHits.add(p.id);this.bells++;this.emit('bell',p.x,p.y,p.id);}else if(!this.gatesOpen){this.gatesOpen=true;this.emit('switch',p.x,p.y,p.id);}}continue;
                    }
                    if(p.type==='portal'){
                        if(Math.hypot(b.x-p.x,b.y-p.y)<p.length/2+R*.2&&(b.cooldowns.get('portal')||0)<this.time){const target=this.machine.pieces.find(q=>q.type==='portal'&&q.id!==p.id&&q.link&&q.link===p.link);if(target){const turn=target.angle-p.angle,c=Math.cos(turn),s=Math.sin(turn),vx=b.vx*c-b.vy*s,vy=b.vx*s+b.vy*c,sp=Math.hypot(vx,vy)||1;b.x=target.x+vx/sp*(target.length/2+R+3);b.y=target.y+vy/sp*(target.length/2+R+3);b.vx=vx;b.vy=vy;b.cooldowns.set('portal',this.time+.8);b.portalHits++;this.portals++;b.trail=[];this.emit('portal',p.x,p.y,p.id);this.emit('portal',target.x,target.y,target.id);}}continue;
                    }
                    if(p.type==='bumper'){const dx=b.x-p.x,dy=b.y-p.y,d=Math.hypot(dx,dy),radius=p.length/2+R;if(d<radius){const nx=d?dx/d:0,ny=d?dy/d:-1;b.x=p.x+nx*(radius+.1);b.y=p.y+ny*(radius+.1);const vn=b.vx*nx+b.vy*ny;if(vn<0){const kick=100+140*Math.max(0,p.power);b.vx-=(1.7*vn-kick)*nx;b.vy-=(1.7*vn-kick)*ny;this.emit('bumper',p.x,p.y,p.id);}}continue;}
                    if(p.type==='gate'&&this.gatesOpen)continue;
                    this.rails(b,p,h);
                }
                if(b.status==='active'&&(b.x<10||b.x>W-10)){b.x=clamp(b.x,10,W-10);b.vx*=-.35;}
                if(b.status==='active'&&(b.y>H+40||b.age>30||!Number.isFinite(b.x+b.y+b.vx+b.vy))){b.status='lost';this.lost++;}
            }
            // Equal-mass marble contacts; separate overlap before applying impulse.
            const active=this.balls.filter(b=>b.status==='active');for(let i=0;i<active.length;i++)for(let j=i+1;j<active.length;j++){const a=active[i],b=active[j],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy);if(d<2*R){const nx=d?dx/d:1,ny=d?dy/d:0,over=(2*R-d)/2+.01;a.x-=nx*over;a.y-=ny*over;b.x+=nx*over;b.y+=ny*over;const v=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;if(v<0){const impulse=-.8*v;a.vx-=impulse*nx;a.vy-=impulse*ny;b.vx+=impulse*nx;b.vy+=impulse*ny;}}}
        }
        for(const b of this.balls){if(b.status==='active'){b.trail.push({x:b.x,y:b.y});if(b.trail.length>100)b.trail.shift();}}
        this.effects=this.effects.filter(e=>this.time-e.time<1.1);
        const mechanismMoving=[...this.dominos.values()].some(d=>Math.abs(d.angle)>.005&&Math.abs(d.angle)<1.47||Math.abs(d.velocity)>.05);
        if(this.queued===0&&this.launched>0&&this.balls.every(b=>b.status!=='active')&&!mechanismMoving)this.finish();
    }
    rails(b,p,dt){
        const dom=this.dominos.get(p.id);
        for(const seg of segments(p,dom?.angle||0)){const q=closest(b.x,b.y,seg),dx=b.x-q.x,dy=b.y-q.y,d=Math.hypot(dx,dy),thickness=p.type==='domino'?6:5;if(d>=R+thickness)continue;const sx=seg[2]-seg[0],sy=seg[3]-seg[1],len=Math.hypot(sx,sy),tx=sx/len,ty=sy/len;let nx=d?dx/d:ty,ny=d?dy/d:-tx;if(d<.001&&b.vx*nx+b.vy*ny>0){nx=-nx;ny=-ny;}b.x=q.x+nx*(R+thickness+.02);b.y=q.y+ny*(R+thickness+.02);const vn=b.vx*nx+b.vy*ny;if(vn<0){const e=p.type==='domino'?.12:.08;b.vx-=(1+e)*vn*nx;b.vy-=(1+e)*vn*ny;if(dom&&Math.abs(dom.angle)<1.4){const torque=(q.x-p.x)*-ny-(q.y-p.y)*-nx,side=Math.sign(torque);dom.velocity+=side*Math.min(4,Math.abs(vn)*.015);this.emit('domino',p.x,p.y,p.id);}}
            if(p.type==='belt'){const target=p.power*180,tang=b.vx*tx+b.vy*ty,change=clamp(target-tang,-600*dt,600*dt);b.vx+=tx*change;b.vy+=ty*change;}else{const tang=b.vx*tx+b.vy*ty;b.vx-=tx*tang*.003;b.vy-=ty*tang*.003;}
        }
    }
    updateDominos(dt){for(const p of this.machine.pieces.filter(p=>p.type==='domino')){const d=this.dominos.get(p.id);if(Math.abs(d.angle)>.002||Math.abs(d.velocity)>.002){d.velocity+=(Math.sin(p.angle+d.angle)*17-d.velocity*.6)*dt;d.angle+=d.velocity*dt;if(Math.abs(d.angle)>1.48){d.angle=Math.sign(d.angle)*1.48;d.velocity=0;}}
            if(Math.abs(d.velocity)<.4)continue;const tip=segments(p,d.angle)[0].slice(2);for(const q of this.machine.pieces.filter(q=>q.type==='domino'&&q.id!==p.id)){const other=this.dominos.get(q.id);if(Math.abs(other.angle)>.2)continue;const near=closest(tip[0],tip[1],segments(q,other.angle)[0]);if(Math.hypot(tip[0]-near.x,tip[1]-near.y)<13){other.velocity=Math.sign(d.velocity)*2.4;this.emit('domino',q.x,q.y,q.id);}}}}
    finish(){this.finished=true;this.running=false;const c=this.machine.challenge;this.won=Boolean(c&&this.caught===3&&this.lost===0&&this.balls.every(b=>c==='bell'?b.bellHits.size>0:c==='portal'?b.portalHits>0:true));this.emit(this.won?'win':'finish',0,0,0);}
    state(){return {running:this.running,started:this.started,finished:this.finished,won:this.won,time:Number(this.time.toFixed(3)),launched:this.launched,caught:this.caught,lost:this.lost,bells:this.bells,portals:this.portals,gatesOpen:this.gatesOpen,followId:this.followId,marbles:this.balls.map(({id,x,y,vx,vy,status,bellHits,portalHits})=>({id,x:Math.round(x*10)/10,y:Math.round(y*10)/10,vx:Math.round(vx*10)/10,vy:Math.round(vy*10)/10,status,bells:bellHits.size,portals:portalHits})),dominos:[...this.dominos].map(([id,d])=>({id,angle:d.angle}))};}
}
