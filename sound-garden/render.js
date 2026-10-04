import {COLS,ROWS,instruments} from './model.js';
export class GardenRenderer{
    constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');if(!this.ctx)throw new Error('Canvas unavailable');this.objects=[];this.project=null;}
    draw(scene,state){
        const rect=this.canvas.getBoundingClientRect(),w=rect.width,h=rect.height,dpr=Math.min(devicePixelRatio||1,1.6),ctx=this.ctx;
        if(this.canvas.width!==Math.round(w*dpr)||this.canvas.height!==Math.round(h*dpr)){this.canvas.width=Math.round(w*dpr);this.canvas.height=Math.round(h*dpr);}ctx.setTransform(dpr,0,0,dpr,0,0);
        const scale=Math.min(w/19.2,h/11.3),cx=w*.5,cy=h*.55;this.project=(x,z,y=0)=>[cx+(x-5.5-z+3.5)*scale*.88,cy+(x-5.5+z-3.5)*scale*.4-y*scale];
        this.unproject=(x,y)=>{const a=(x-cx)/(scale*.88),b=(y-cy)/(scale*.4);return{x:Math.round((a+b)/2+5.5),z:Math.round((b-a)/2+3.5)};};
        const project=this.project,poly=(p,fill,stroke=null)=>{ctx.beginPath();p.forEach((v,i)=>i?ctx.lineTo(...v):ctx.moveTo(...v));ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();}},ellipse=(p,rx,ry,color)=>{ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(...p,rx,ry,0,0,Math.PI*2);ctx.fill();};
        const bg=ctx.createLinearGradient(0,0,w,h);bg.addColorStop(0,'#f3e4d1');bg.addColorStop(1,'#e8cbbd');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
        // An editable instrument bed, not a bitmap or a prerecorded track.
        ellipse([cx,cy+scale*1.3],scale*7.4,scale*2.65,'#77564518');
        const corners=[[-.7,-.7],[11.7,-.7],[11.7,7.7],[-.7,7.7]],top=corners.map(([x,z])=>project(x,z));
        poly([top[1],top[2],[top[2][0],top[2][1]+scale*.33],[top[1][0],top[1][1]+scale*.33]],'#bca489');
        poly([top[2],top[3],[top[3][0],top[3][1]+scale*.33],[top[2][0],top[2][1]+scale*.33]],'#ceb799');poly(top,'#dce0bd','#e9e8ce');
        for(let z=0;z<ROWS;z++)for(let x=0;x<COLS;x++){
            const p=project(x,z),occupied=scene.plants.some(o=>o.x===x&&o.z===z);if(!occupied)ellipse(p,Math.max(1.5,scale*.034),Math.max(1,scale*.017),'#a995704a');
            if((x*13+z*7)%11===0&&!occupied){ellipse([p[0]-3,p[1]+1],scale*.17,scale*.08,'#91a87624');}
        }
        const cursor=state.cursor;if(cursor&&cursor.x>=0&&cursor.x<COLS&&cursor.z>=0&&cursor.z<ROWS){const p=project(cursor.x,cursor.z);ctx.strokeStyle='#7f6746';ctx.lineWidth=1.4;ctx.setLineDash([3,4]);ctx.beginPath();ctx.ellipse(...p,scale*.44,scale*.20,0,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);}
        this.objects=[];
        const plants=[...scene.plants].sort((a,b)=>(a.x+a.z)-(b.x+b.z));
        for(const p of plants){
            const info=instruments[p.type],ground=project(p.x,p.z),pulse=state.pulses.get(p.id)||0,age=state.time-pulse,strength=pulse>0&&age>=0&&age<.7?(1-age/.7):0;
            const sway=state.reduced?0:Math.sin(state.time*1.3+p.id)*.03,bounce=state.reduced?0:Math.sin(Math.max(0,age)*Math.PI/.7)*strength*.12;
            ctx.save();if(p.muted)ctx.globalAlpha=.42;
            ellipse([ground[0]+scale*.08,ground[1]+scale*.06],scale*.42,scale*.16,'#66503d21');ellipse(ground,scale*.31,scale*.13,'#c6c6a5');
            if(p.id===state.selected){ctx.strokeStyle=info.color;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(...ground,scale*.48,scale*.22,0,0,Math.PI*2);ctx.stroke();}
            if(strength>0){const spread=state.reduced?0:1-strength;ctx.strokeStyle=info.color;ctx.globalAlpha=(p.muted?.2:.65)*strength;ctx.lineWidth=1.8;ctx.beginPath();ctx.ellipse(...ground,scale*(.40+spread*1.4),scale*(.19+spread*.6),0,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=p.muted?.42:1;}
            const line=(a,b,width,color)=>{ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.stroke();};
            let height=1.1;
            if(p.type==='bell'){
                height=1.85;const stem=project(p.x+sway,p.z,height+bounce);line(ground,stem,Math.max(2,scale*.055),'#6a8b63');
                const leaf=project(p.x,p.z,.7);ellipse([leaf[0]-scale*.15,leaf[1]],scale*.20,scale*.065,'#7c9e72');ellipse([leaf[0]+scale*.15,leaf[1]-scale*.19],scale*.20,scale*.065,'#7c9e72');
                const q=project(p.x+.30+sway,p.z,1.45+bounce);ctx.strokeStyle='#6a8b63';ctx.lineWidth=Math.max(2,scale*.045);ctx.beginPath();ctx.moveTo(...stem);ctx.quadraticCurveTo(stem[0]+scale*.27,stem[1]-scale*.23,q[0],q[1]-scale*.34);ctx.stroke();
                const flower=ctx.createLinearGradient(q[0]-scale*.3,q[1],q[0]+scale*.35,q[1]);flower.addColorStop(0,'#c88748');flower.addColorStop(.48,'#efbb6d');flower.addColorStop(1,'#d9954c');ctx.fillStyle=flower;ctx.beginPath();ctx.moveTo(q[0]-scale*.12,q[1]-scale*.34);ctx.bezierCurveTo(q[0]-scale*.27,q[1]-scale*.26,q[0]-scale*.20,q[1]+scale*.12,q[0]-scale*.43,q[1]+scale*.19);ctx.quadraticCurveTo(q[0],q[1]+scale*.39,q[0]+scale*.43,q[1]+scale*.19);ctx.bezierCurveTo(q[0]+scale*.2,q[1]+scale*.12,q[0]+scale*.27,q[1]-scale*.26,q[0]+scale*.12,q[1]-scale*.34);ctx.closePath();ctx.fill();ellipse([q[0],q[1]+scale*.2],scale*.34,scale*.085,'#b98142');const clapper=(state.reduced?0:Math.sin(age*14)*strength)*scale*.11;line([q[0],q[1]+scale*.15],[q[0]+clapper,q[1]+scale*.40],scale*.035,'#e7b765');ellipse([q[0]+clapper,q[1]+scale*.40],scale*.075,scale*.07,'#efc979');
            }else if(p.type==='reed'){
                height=1.8;for(let j=0;j<3;j++){const x=p.x+(j-1)*.22,z=p.z+(j-1)*.11,a=project(x,z,.13+bounce),b=project(x+sway,z,1.05+j*.29+bounce);line(a,b,scale*.16,j===1?'#5c9d95':'#76aca0');ellipse(b,scale*.08,scale*.045,'#315e5c');line([b[0]-scale*.04,b[1]+scale*.15],[b[0]-scale*.04,a[1]],scale*.025,'#b6c6a18c');}
            }else if(p.type==='bass'){
                height=.85;for(let j=0;j<3;j++){const q=project(p.x+(j%2)*.12,p.z,.14+j*.23+bounce);ellipse(q,scale*(.49-j*.10),scale*(.23-j*.035),['#a87679','#c18b8a','#dba8a0'][j]);ctx.strokeStyle='#ebc3ae';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(q[0],q[1]-scale*.03,scale*(.29-j*.055),scale*.045,0,0,Math.PI*2);ctx.stroke();}
            }else if(p.type==='drum'){
                height=.9;const q=project(p.x,p.z,.65+bounce);poly([[q[0]-scale*.42,q[1]],[q[0]+scale*.42,q[1]],[ground[0]+scale*.28,ground[1]],[ground[0]-scale*.28,ground[1]]],'#b57652');ellipse(q,scale*.42,scale*.18,'#efcc98');ellipse(q,scale*.32,scale*.13,'#dba66b');for(let j=-1;j<=1;j++)line([q[0]+j*scale*.22,q[1]+scale*.1],[ground[0]+j*scale*.16,ground[1]-scale*.05],scale*.035,'#e8bb83');ellipse(q,scale*.1,scale*.045,'#b97952');
            }else{
                height=1.3;const tip=project(p.x+sway,p.z,height+bounce);line(ground,tip,Math.max(1.5,scale*.05),'#6b8254');for(let j=0;j<5;j++){const q=project(p.x+sway*j*.2,p.z,.27+j*.20+bounce),length=(5-j)*scale*.07;for(const side of [-1,1]){poly([[q[0],q[1]],[q[0]+side*length,q[1]-scale*.18],[q[0]+side*(length*.88),q[1]+scale*.025]],j%2?'#82a16b':'#9dbb7f');}}
            }
            if(strength>.1){const q=project(p.x,p.z,height+.2);ellipse(q,scale*.055,scale*.055,'#fff0b4');}
            if(p.muted){const q=project(p.x,p.z,height+.35);ctx.globalAlpha=1;ctx.font=`${Math.max(10,scale*.22)}px system-ui`;ctx.fillStyle='#82675b';ctx.textAlign='center';ctx.fillText('Ⅱ',...q);}
            ctx.restore();this.objects.push({id:p.id,x:ground[0],y:ground[1],height:height*scale,r:scale*.5});
        }
        ctx.fillStyle='#7b826b';ctx.font='10px system-ui';ctx.textAlign='center';const high=project(5.5,-1.8),low=project(5.5,8.8);ctx.fillText('HIGH NOTES',...high);ctx.fillText('LOW NOTES',...low);
        if(!scene.plants.length){ctx.fillStyle='#7b6c56';ctx.font='italic 18px Georgia';ctx.fillText('Plant the first sound.',cx,cy-30);}
    }
    hit(clientX,clientY){const r=this.canvas.getBoundingClientRect(),x=clientX-r.left,y=clientY-r.top;for(const p of [...this.objects].reverse())if(Math.abs(x-p.x)<p.r&&y>p.y-p.height-p.r*.25&&y<p.y+p.r*.5)return p.id;return null;}
    cell(clientX,clientY){const r=this.canvas.getBoundingClientRect(),p=this.unproject(clientX-r.left,clientY-r.top);return p.x>=0&&p.x<COLS&&p.z>=0&&p.z<ROWS?p:null;}
    cellScreen(x,z){const r=this.canvas.getBoundingClientRect(),p=this.project(x,z);return{x:p[0]+r.left,y:p[1]+r.top};}
}
