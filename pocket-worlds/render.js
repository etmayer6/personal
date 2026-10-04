import {SIZE,coordinates,clamp} from './model.js';
const palettes={
    sunny:{sky:'#e8eee1',water:'#438e91',deep:'#2f777d',grass:'#85a864',sand:'#d9cfaa',rock:'#9fa591',tree:'#3d7353',trunk:'#80694d',roof:'#ba6b51'},
    rain:{sky:'#bfcfd0',water:'#578d98',deep:'#467681',grass:'#71945f',sand:'#c6c2a8',rock:'#8f9d94',tree:'#3d6c55',trunk:'#756650',roof:'#a66250'},
    snow:{sky:'#e0e8e9',water:'#6fa4b4',deep:'#527c95',grass:'#e7eee8',sand:'#dce5df',rock:'#bbc9c8',tree:'#719088',trunk:'#817d72',roof:'#dce6df'},
    night:{sky:'#203e4b',water:'#284e63',deep:'#1b3a50',grass:'#547665',sand:'#8c9686',rock:'#76878d',tree:'#365953',trunk:'#5e675b',roof:'#795e59'}
};
function shade(hex,amount){const values=[1,3,5].map(i=>clamp(parseInt(hex.slice(i,i+2),16)+amount,0,255));return '#'+values.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');}
function polygonContains(p,x,y){let inside=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
export class WorldRenderer{
    constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');if(!this.ctx)throw new Error('Canvas unavailable');this.hits=[];this.frame=0;this.projection=null;}
    resize(){const r=this.canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,1.6);const w=Math.max(1,Math.round(r.width*dpr)),h=Math.max(1,Math.round(r.height*dpr));if(this.canvas.width!==w||this.canvas.height!==h){this.canvas.width=w;this.canvas.height=h;}this.ctx.setTransform(dpr,0,0,dpr,0,0);return{w:r.width,h:r.height};}
    draw(world,camera,time,hover=-1,keyboard=-1){
        const{w,h}=this.resize(),ctx=this.ctx,pal=palettes[world.weather],yaw=camera.yaw,c=Math.cos(yaw),s=Math.sin(yaw),scale=Math.min(w/(SIZE*1.58),h/(SIZE*1.0))*camera.zoom;
        const center=[w*.50+camera.panX,h*.57+camera.panY],waterY=.32;
        const project=(x,y,z)=>[center[0]+(x*c-z*s)*scale,center[1]+(x*s+z*c)*scale*.48-y*scale*1.45];
        this.projection={project,scale};
        const poly=(points,fill,stroke=null,width=.7)=>{ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();}};
        const face=(points,color)=>poly(points.map(v=>project(...v)),color,color,.65);
        const background=ctx.createLinearGradient(0,0,0,h);background.addColorStop(0,pal.sky);background.addColorStop(1,shade(pal.water,35));ctx.fillStyle=background;ctx.fillRect(0,0,w,h);
        // The water itself is rendered, not a static image; no external texture loads.
        const water=ctx.createLinearGradient(0,0,w,h);water.addColorStop(0,shade(pal.water,13));water.addColorStop(.55,pal.water);water.addColorStop(1,shade(pal.water,-14));
        face([[-50,waterY,-50],[-50,waterY,50],[50,waterY,50],[50,waterY,-50]],water);
        for(let i=0;i<78;i++){
            const x=(((Math.sin(i*127.1)*43758.5453)%1+1)%1)*42-21,z=(((Math.sin(i*311.7)*96453.1121)%1+1)%1)*36-18,a=project(x,waterY+.002,z),b=project(x+.34+Math.sin(time+i)*.10,waterY+.002,z);
            ctx.strokeStyle=world.weather==='night'?'#8ab9c529':'#d7f3e548';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.stroke();
        }
        const heightAt=(x,z)=>{let sum=0,n=0;for(const dx of [-1,0])for(const dz of [-1,0]){const a=x+dx,b=z+dz;if(a>=0&&a<SIZE&&b>=0&&b<SIZE){sum+=world.heights[b*SIZE+a];n++;}}return (n?sum/n:0)*.28;};
        const treeMap=new Map(world.trees),buildings=new Set(world.buildings),paths=new Set(world.paths),cells=[];
        for(let i=0;i<world.heights.length;i++){const{x,z}=coordinates(i),px=x-SIZE/2,pz=z-SIZE/2;cells.push({i,x:px,z:pz,depth:(px+.5)*s+(pz+.5)*c});}
        cells.sort((a,b)=>a.depth-b.depth);this.hits=[];
        for(const cell of cells){
            const{i,x,z}=cell,gx=x+SIZE/2,gz=z+SIZE/2;
            const raw=[[x,heightAt(gx,gz),z],[x+1,heightAt(gx+1,gz),z],[x+1,heightAt(gx+1,gz+1),z+1],[x,heightAt(gx,gz+1),z+1]];
            const points=raw.map(([a,y,b])=>[a,Math.max(waterY,y),b]),screen=points.map(p=>project(...p));
            this.hits.push({i,screen,center:project(x+.5,Math.max(waterY,raw.reduce((sum,p)=>sum+p[1],0)/4),z+.5)});
            // Clip triangles to sea level to give the coastline a faceted, natural edge.
            const clip=vertices=>{
                const out=[];for(let a=0;a<vertices.length;a++){const p=vertices[a],q=vertices[(a+1)%vertices.length],pin=p[1]>waterY,qin=q[1]>waterY;if(pin)out.push(p);if(pin!==qin){const t=(waterY-p[1])/(q[1]-p[1]);out.push([p[0]+(q[0]-p[0])*t,waterY,p[2]+(q[2]-p[2])*t]);}}return out;
            };
            const average=raw.reduce((sum,p)=>sum+p[1],0)/4;
            const color=average<.72?pal.sand:average>3.5?pal.rock:pal.grass;
            const slope=raw[0][1]-raw[2][1],variation=((i*13)%7)-3;
            for(const [vertices,amount] of [[[raw[0],raw[1],raw[2]],variation+slope*15],[[raw[0],raw[2],raw[3]],variation+slope*15-4]]){
                const clipped=clip(vertices);if(clipped.length>=3){face(clipped,shade(color,amount));const coast=clipped.filter(p=>Math.abs(p[1]-waterY)<.00001);if(coast.length===2){const a=project(...coast[0]),b=project(...coast[1]);ctx.strokeStyle=world.weather==='night'?'#b4d1bd44':'#e9f2da90';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.stroke();}}
            }
            if(world.heights[i]<3)continue;
            const y=raw.reduce((sum,p)=>sum+p[1],0)/4+.018;
            if((treeMap.has(i)||buildings.has(i))){const p=project(x+.54,y,z+.58);ctx.fillStyle='#173f352a';ctx.beginPath();ctx.ellipse(p[0],p[1],scale*(buildings.has(i)?.43:.23),scale*.11,0,0,Math.PI*2);ctx.fill();}
            if(world.weather==='sunny'&&i%17===0&&!paths.has(i)&&world.heights[i]<12){for(let j=0;j<3;j++){const p=project(x+.25+j*.16,y+.04,z+.37+(j%2)*.2);ctx.fillStyle=j===1?'#e4d99e':'#e5e9c4';ctx.beginPath();ctx.arc(p[0],p[1],Math.max(1,scale*.025),0,Math.PI*2);ctx.fill();}}
            if(paths.has(i))face([[x+.20,y,z+.20],[x+.82,y,z+.20],[x+.82,y,z+.82],[x+.20,y,z+.82]],world.weather==='snow'?'#c7d3ce':'#d6c6a1');
            if(treeMap.has(i))this.drawTree(project,poly,pal,x+.5,y,z+.5,treeMap.get(i),time,i,world.weather);
            if(buildings.has(i))this.drawCottage(project,poly,pal,x+.5,y,z+.5,world.weather,time,i);
        }
        for(const i of new Set([hover,keyboard].filter(i=>i>=0))){const hit=this.hits.find(t=>t.i===i);if(hit){poly(hit.screen,'#f9e7ad28','#f9e7ad',1.8);const p=hit.center;ctx.fillStyle='#fff5d5';ctx.beginPath();ctx.arc(p[0],p[1],3,0,Math.PI*2);ctx.fill();}}
        // Light cloud shadows, wildlife and weather give even a paused world life.
        if(world.weather!=='night')for(let i=0;i<3;i++){
            const x=(time*2.0+i*w*.43)%(w+230)-110,y=45+i*28;
            ctx.fillStyle=world.weather==='rain'?'#e7edeb65':'#fffdf09c';ctx.beginPath();ctx.ellipse(x,y,45,8,0,0,Math.PI*2);ctx.ellipse(x-15,y-6,24,10,0,0,Math.PI*2);ctx.ellipse(x+13,y-6,21,12,0,0,Math.PI*2);ctx.fill();
        }
        if(world.weather==='night'){
            for(let i=0;i<55;i++){const x=(i*83.23)%w,y=(i*27.61)%(h*.28);ctx.globalAlpha=.4+Math.sin(time*.5+i)*.25;ctx.fillStyle='#e6eec8';ctx.fillRect(x,y,1.5,1.5);}ctx.globalAlpha=1;
            const moonX=w*.80,moonY=h*.12;ctx.fillStyle='#ebe6c4';ctx.beginPath();ctx.arc(moonX,moonY,12,0,Math.PI*2);ctx.fill();
            for(let i=0;i<Math.min(18,world.trees.length);i++){const[index]=world.trees[i],{x,z}=coordinates(index),p=project(x-SIZE/2+.5,heightAt(x,z)+.6+Math.sin(time+i)*.1,z-SIZE/2+.5);ctx.fillStyle='#d6e995';ctx.globalAlpha=.35+Math.sin(time*1.5+i)*.3;ctx.beginPath();ctx.arc(p[0]+Math.sin(time+i)*8,p[1],1.4,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
        }
        if(world.weather==='rain'||world.weather==='snow'){
            const snow=world.weather==='snow';ctx.strokeStyle='#e6f5f299';ctx.fillStyle='#f5faf0cc';ctx.lineWidth=.8;
            for(let i=0;i<95;i++){const x=((i*137.79+time*(snow?8:-35))%w+w)%w,y=(i*73.71+time*(snow?21:190))%h;
                if(snow){ctx.beginPath();ctx.arc(x+Math.sin(time+i)*4,y,1.6,0,Math.PI*2);ctx.fill();}else{ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-3,y+9);ctx.stroke();}}
        }
        if(world.weather==='sunny'&&world.trees.length>8){
            const bx=w*.52+Math.sin(time*.15)*w*.24,by=h*.18+Math.cos(time*.15)*14;
            for(let j=0;j<3;j++){ctx.strokeStyle='#284d4666';ctx.lineWidth=1.2;const flap=Math.sin(time*5+j)*3;ctx.beginPath();ctx.moveTo(bx+j*12-4,by+j*3);ctx.lineTo(bx+j*12,by+j*3+flap);ctx.lineTo(bx+j*12+4,by+j*3);ctx.stroke();}
        }
    }
    drawTree(project,poly,pal,x,y,z,age,time,i,weather){
        const height=.30+age*1.20,sway=Math.sin(time*1.1+i)*.035*age;
        const face=(points,color)=>poly(points.map(v=>project(...v)),color);
        face([[x-.035,y,z],[x+.035,y,z],[x+.035,y+height*.58,z],[x-.035,y+height*.58,z]],pal.trunk);
        for(let layer=0;layer<3;layer++){
            const base=y+height*(.23+layer*.19),tip=y+height*(.72+layer*.18),r=height*(.29-layer*.052);
            for(let segment=0;segment<6;segment++){const a=segment*Math.PI/3,b=(segment+1)*Math.PI/3;
                face([[x+sway,tip,z],[x+Math.cos(a)*r,base,z+Math.sin(a)*r],[x+Math.cos(b)*r,base,z+Math.sin(b)*r]],weather==='snow'&&segment%3===0?'#eef3e9':shade(pal.tree,segment%3*10+layer*5));}
        }
    }
    drawCottage(project,poly,pal,x,y,z,weather,time,i){
        const face=(p,color)=>poly(p.map(v=>project(...v)),color),a=x-.32,b=x+.32,c=z-.29,d=z+.29,top=y+.47,ridge=y+.79;
        face([[a,y,c],[b,y,c],[b,top,c],[a,top,c]],weather==='night'?'#99a79b':'#ede5ce');
        face([[b,y,c],[b,y,d],[b,top,d],[b,top,c]],weather==='night'?'#80978b':'#d7dbc7');
        face([[b,y,d],[a,y,d],[a,top,d],[b,top,d]],weather==='night'?'#8c9f91':'#e7dfc4');
        face([[a,y,d],[a,y,c],[a,top,c],[a,top,d]],weather==='night'?'#80978b':'#d4d5bd');
        face([[a-.07,top,c-.05],[x,ridge,c-.05],[x,ridge,d+.05],[a-.07,top,d+.05]],pal.roof);
        face([[x,ridge,c-.05],[b+.07,top,c-.05],[b+.07,top,d+.05],[x,ridge,d+.05]],shade(pal.roof,-17));
        face([[a,top,c],[x,ridge,c],[b,top,c]],'#dcd8c1');face([[b,top,d],[x,ridge,d],[a,top,d]],'#dad1b6');
        const window=weather==='night'?'#ffdca0':'#779a98';
        face([[b+.002,y+.18,z-.09],[b+.002,y+.18,z+.09],[b+.002,y+.35,z+.09],[b+.002,y+.35,z-.09]],window);
        face([[x-.18,y+.18,d+.002],[x-.05,y+.18,d+.002],[x-.05,y+.34,d+.002],[x-.18,y+.34,d+.002]],window);
        face([[x+.07,y,d+.004],[x+.23,y,d+.004],[x+.23,y+.3,d+.004],[x+.07,y+.3,d+.004]],'#7f6f59');
        face([[x+.16,top+.1,z-.10],[x+.24,top+.1,z-.1],[x+.24,ridge+.11,z-.10],[x+.16,ridge+.11,z-.10]],'#92998b');
        if(weather!=='rain')for(let j=0;j<3;j++){const phase=(time*.20+j*.29+i*.13)%1,p=project(x+.2+phase*.10,ridge+.14+phase*.5,z-.1);this.ctx.globalAlpha=(1-phase)*.30;this.ctx.fillStyle=weather==='night'?'#b9cbd0':'#e6e9dc';this.ctx.beginPath();this.ctx.ellipse(p[0],p[1],2+phase*4,1+phase*2,0,0,Math.PI*2);this.ctx.fill();}this.ctx.globalAlpha=1;
    }
    hitTest(clientX,clientY){const rect=this.canvas.getBoundingClientRect(),x=clientX-rect.left,y=clientY-rect.top;for(let i=this.hits.length-1;i>=0;i--)if(polygonContains(this.hits[i].screen,x,y))return this.hits[i].i;return -1;}
    cellScreen(i){const hit=this.hits.find(t=>t.i===i);if(!hit)return null;const r=this.canvas.getBoundingClientRect();return{x:hit.center[0]+r.left,y:hit.center[1]+r.top};}
}
