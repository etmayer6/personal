// Adapted from Flight Sim's native WebGL pipeline: column-major transforms,
// vertex-colored meshes, directional/hemi lighting, and a smoothed chase camera.
// Kept independent so changes here cannot affect the aircraft renderer.
import { paints, clamp } from './model.js';
const vec = (x = 0, y = 0, z = 0) => [x, y, z];
const sub = (a, b) => a.map((v, i) => v - b[i]);
const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
const cross = (a, b) => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
const norm = a => { const d = Math.hypot(...a) || 1; return a.map(v => v / d); };
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
const identity = () => [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
function multiply(a, b) {
    const out = new Array(16).fill(0);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) out[c*4+r] += a[k*4+r]*b[c*4+k];
    return out;
}
function transform(x=0,y=0,z=0,yaw=0,pitch=0,roll=0) {
    const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch),cr=Math.cos(roll),sr=Math.sin(roll);
    const t=identity(); t[12]=x;t[13]=y;t[14]=z;
    return multiply(t,multiply([cy,0,-sy,0,0,1,0,0,sy,0,cy,0,0,0,0,1],multiply([1,0,0,0,0,cp,sp,0,0,-sp,cp,0,0,0,0,1],[cr,sr,0,0,-sr,cr,0,0,0,0,1,0,0,0,0,1])));
}
function projection(fov, aspect) {
    const f = 1/Math.tan(fov/2), near=.08, far=1200;
    return [f/aspect,0,0,0,0,f,0,0,0,0,(far+near)/(near-far),-1,0,0,2*far*near/(near-far),0];
}
function lookAt(eye, target) {
    const z=norm(sub(eye,target)), x=norm(cross([0,1,0],z)), y=cross(z,x);
    return [x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot(x,eye),-dot(y,eye),-dot(z,eye),1];
}
class Mesh {
    constructor(){this.data=[];}
    triangle(a,b,c,color){const normal=norm(cross(sub(b,a),sub(c,a)));for(const p of [a,b,c])this.data.push(...p,...normal,...(typeof color==='string'?rgb(color):color));return this;}
    quad(a,b,c,d,color){return this.triangle(a,b,c,color).triangle(a,c,d,color);}
    box(x,y,z,w,h,d,color){
        const x0=x-w/2,x1=x+w/2,y0=y-h/2,y1=y+h/2,z0=z-d/2,z1=z+d/2;
        this.quad([x0,y1,z0],[x0,y1,z1],[x1,y1,z1],[x1,y1,z0],color);
        this.quad([x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],color);
        this.quad([x1,y0,z1],[x0,y0,z1],[x0,y1,z1],[x1,y1,z1],color);
        this.quad([x0,y0,z1],[x0,y0,z0],[x0,y1,z0],[x0,y1,z1],color);
        this.quad([x1,y0,z0],[x1,y0,z1],[x1,y1,z1],[x1,y1,z0],color);
        return this;
    }
    cylinder(x,y,z,r,length,color,segments=28,axis='x'){
        const p=(t,l)=>axis==='x'?[x+l,y+Math.sin(t)*r,z+Math.cos(t)*r]:[x+Math.cos(t)*r,y+l,z+Math.sin(t)*r];
        const center=l=>axis==='x'?[x+l,y,z]:[x,y+l,z];
        for(let i=0;i<segments;i++){
            const a=i*Math.PI*2/segments,b=(i+1)*Math.PI*2/segments;
            this.quad(p(a,-length/2),p(a,length/2),p(b,length/2),p(b,-length/2),color);
            this.triangle(center(length/2),p(a,length/2),p(b,length/2),color);
            this.triangle(center(-length/2),p(b,-length/2),p(a,-length/2),color);
        }return this;
    }
    disk(x,y,z,rx,rz,color,segments=64){for(let i=0;i<segments;i++){const a=i*Math.PI*2/segments,b=(i+1)*Math.PI*2/segments;this.triangle([x,y,z],[x+Math.cos(b)*rx,y,z+Math.sin(b)*rz],[x+Math.cos(a)*rx,y,z+Math.sin(a)*rz],color);}return this;}
}
const vertex=`attribute vec3 aPosition;attribute vec3 aNormal;attribute vec3 aColor;
uniform mat4 uModel;uniform mat4 uViewProjection;uniform vec3 uCamera;uniform vec3 uSun;
varying vec3 vColor;varying vec3 vNormal;varying vec3 vWorld;
void main(){vec4 p=uModel*vec4(aPosition,1.0);vWorld=p.xyz;vNormal=mat3(uModel)*aNormal;vColor=aColor;gl_Position=uViewProjection*p;}`;
const fragment=`precision mediump float;
uniform vec3 uCamera;uniform vec3 uSun;uniform vec3 uSky;uniform float uMetal;uniform float uUnlit;
varying vec3 vColor;varying vec3 vNormal;varying vec3 vWorld;
void main(){vec3 n=normalize(vNormal);vec3 l=normalize(uSun);vec3 eye=normalize(uCamera-vWorld);
float diffuse=max(dot(n,l),0.0);float hemi=n.y*.5+.5;float light=.38+diffuse*.48+hemi*.22;
float spec=pow(max(dot(n,normalize(l+eye)),0.0),54.0)*uMetal;
float fresnel=pow(1.0-abs(dot(n,eye)),3.0)*uMetal*.23;
vec3 color=mix(vColor*light+vec3(spec*.55)+uSky*fresnel,vColor,uUnlit);
float fog=clamp((distance(uCamera,vWorld)-180.0)/650.0,0.0,1.0);
gl_FragColor=vec4(mix(color,uSky,fog),1.0);}`;
export class GarageRenderer {
    constructor(canvas){
        this.canvas=canvas;this.gl=canvas.getContext('webgl',{alpha:false,antialias:true,depth:true,preserveDrawingBuffer:true});
        if(!this.gl)throw new Error('WebGL unavailable');
        const gl=this.gl, shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;};
        this.program=gl.createProgram(); const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,fragment);
        gl.attachShader(this.program,vs);gl.attachShader(this.program,fs);gl.linkProgram(this.program);gl.deleteShader(vs);gl.deleteShader(fs);
        if(!gl.getProgramParameter(this.program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(this.program));
        this.uniform={};for(const name of ['Model','ViewProjection','Camera','Sun','Sky','Metal','Unlit'])this.uniform[name]=gl.getUniformLocation(this.program,'u'+name);
        this.attributes=['aPosition','aNormal','aColor'].map(name=>gl.getAttribLocation(this.program,name));
        this.carParts=[];this.wheelParts=[];this.world=this.createWorld();this.studio=this.createStudio();
        this.camera=null;this.target=null;this.trails=new Float32Array(9*6*180);this.trailCursor=0;this.trailCount=0;
        this.trailMesh=this.upload(new Mesh());this.trailMesh.dynamic=true;
    }
    upload(mesh,metal=0,unlit=0){const gl=this.gl,buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(mesh.data),gl.STATIC_DRAW);return{buffer,count:mesh.data.length/9,metal,unlit};}
    clearCar(){for(const part of [...this.carParts,...this.wheelParts])this.gl.deleteBuffer(part.buffer);this.carParts=[];this.wheelParts=[];}
    buildCar(build){
        this.clearCar();const paint=paints[build.paint].color, body=new Mesh(),trim=new Mesh(),glass=new Mesh(),lamps=new Mesh(),rear=new Mesh();
        // Swept body sections: a real volume, not a camera-facing illustration.
        const sections=[[-2.3,.74,.75],[-1.9,.89,.97],[-1.1,.93,1.01],[.7,.95,1.00],[1.7,.9,.94],[2.25,.8,.78]];
        const ring=([z,w,h])=>[[-w,.44,z],[-w,h-.14,z],[-w*.84,h,z],[w*.84,h,z],[w,h-.14,z],[w,.44,z]];
        for(let i=0;i<sections.length-1;i++){const a=ring(sections[i]),b=ring(sections[i+1]);for(let j=0;j<5;j++)body.quad(a[j],b[j],b[j+1],a[j+1],paint);}
        for(const s of [sections[0],sections.at(-1)]){const r=ring(s);for(let i=1;i<5;i++)body.triangle(r[0],r[i],r[i+1],paint);}
        // Roof, pillars, windshield and rear glass with non-flat highlights.
        body.quad([-.63,1.48,-.35],[.63,1.48,-.35],[.65,1.46,.58],[-.65,1.46,.58],paint);
        glass.quad([-.73,1.04,-1.07],[.73,1.04,-1.07],[.6,1.45,-.36],[-.6,1.45,-.36],'#234049');
        glass.quad([-.63,1.43,.6],[.63,1.43,.6],[.76,1.0,1.22],[-.76,1.0,1.22],'#2c4650');
        for(const side of [-1,1]){
            const p=(x,y,z)=>[x*side,y,z];
            glass.quad(p(.84,1.02,-1.02),p(.64,1.44,-.30),p(.66,1.42,.54),p(.85,1.02,1.13),'#2f4f56');
            body.quad(p(.73,1.04,-1.1),p(.63,1.48,-.38),p(.67,1.48,-.32),p(.8,1.03,-1.02),paint);
            body.quad(p(.64,1.48,.54),p(.82,1.0,1.22),p(.88,1.0,1.17),p(.7,1.44,.54),paint);
            trim.box(side*.87,1.21,.32,.024,.34,.045,'#15282c');
            trim.box(side*.939,.82,.29,.012,.022,.22,'#aab8b0');
            trim.box(side*.934,.47,0,.045,.09,2.7,'#172326');
            body.box(side*1.01,1.0,-.66,.23,.10,.26,paint);trim.box(side*1.02,1.015,-.57,.22,.055,.01,'#a8c0bf');
            // Hood creases, lamp housings, brake lights, twin exhausts.
            body.box(side*.37,.990,-1.5,.022,.012,.54,'#93a49b');
            trim.box(side*.53,.80,-2.29,.37,.1,.035,'#0f2329');
            lamps.box(side*.53,.818,-2.313,.34,.026,.022,build.lights?'#ecf6df':'#7f9996');
            trim.box(side*.5,.78,2.24,.43,.09,.04,'#281c20');
            rear.box(side*.5,.79,2.27,.4,.024,.016,'#f08062');
            trim.box(side*.59,.42,2.24,.16,.08,.14,'#bac3bf');trim.box(side*.59,.43,2.319,.11,.048,.012,'#182327');
        }
        trim.box(0,.56,-2.31,1.26,.15,.045,'#112227');
        for(let i=-5;i<=5;i++)trim.box(i*.10,.57,-2.34,.016,.13,.012,'#455c5d');
        trim.box(0,.42,-2.25,1.62,.055,.24,'#17272c');
        trim.box(0,.45,2.22,1.35,.1,.14,'#17272c');
        trim.box(0,.70,2.289,.3,.085,.015,'#d8decc');
        if(build.engine==='race'){trim.box(-.56,1.12,1.77,.045,.31,.1,'#1c292b');trim.box(.56,1.12,1.77,.045,.31,.1,'#1c292b');body.box(0,1.30,1.8,1.85,.06,.35,paint);}
        this.carParts=[this.upload(body,.85),this.upload(trim,.28),this.upload(glass,1.3),this.upload(lamps,.1,build.lights?1:0),this.upload(rear,.1,1)];
        const tire=new Mesh(),rim=new Mesh(),spokes=new Mesh();
        tire.cylinder(0,0,0,.35,.24,'#162123',32);rim.cylinder(0,0,0,.254,.254,'#354748',32);
        for(const side of [-1,1]){
            const face=side*.134;
            if(build.wheel==='aero'){rim.cylinder(side*.137,0,0,.239,.009,'#a0b1af',32);for(let j=0;j<5;j++){const a=j*Math.PI*2/5;spokes.box(face,Math.sin(a)*.18,Math.cos(a)*.18,.014,.055,.055,'#25383b');}}
            else{const count=build.wheel==='track'?12:5;for(let j=0;j<count;j++){const a=j*Math.PI*2/count;
                const point=(r,t)=>[face,Math.sin(t)*r,Math.cos(t)*r];spokes.quad(point(.054,a-.25),point(.239,a-.06),point(.239,a+.06),point(.054,a+.25),build.wheel==='track'?'#c1bf9b':'#b1c2bc');
            }}
            rim.cylinder(side*.14,0,0,.058,.015,'#b8c5bd',16);
        }
        this.wheelParts=[this.upload(tire),this.upload(rim,.6),this.upload(spokes,.7)];
        this.shadow=this.shadow||this.upload(new Mesh().disk(0,.014,0,1.16,2.6,'#182e2c'),0,1);
    }
    createStudio(){
        const floor=new Mesh(),architecture=new Mesh(),light=new Mesh();
        floor.box(0,-.18,0,70,.3,70,'#253c3d');floor.cylinder(0,-.055,0,4.15,.09,'#3a4e4c',96,'y');
        for(let i=-7;i<=7;i++){architecture.box(i*2,.003,0,.01,.005,30,'#3b514f');architecture.box(0,.003,i*2,30,.005,.01,'#3b514f');}
        architecture.box(0,3.4,10,32,7,.2,'#1a3034');architecture.box(-12,3.4,0,.2,7,22,'#1d3639');
        for(let x=-10;x<=10;x+=4){architecture.box(x,3,9.82,.08,6,.10,'#345254');light.box(x+1.9,4.8,9.7,3.6,.018,.03,'#d3dcc1');}
        light.box(-11.7,4,0,.02,.03,18,'#c5e9a7');
        return [this.upload(floor,.04),this.upload(architecture,.07),this.upload(light,0,1)];
    }
    createWorld(){
        const land=new Mesh(),road=new Mesh(),details=new Mesh(),trees=new Mesh(),buildings=new Mesh();
        land.box(0,-.20,-190,1100,.3,1400,'#768e61');
        // Stadium circuit: two straights and radius-34 hairpins.
        const path=[];
        for(let i=0;i<=32;i++)path.push([34,-65+130*i/32]);
        for(let i=1;i<=40;i++){const t=i*Math.PI/40;path.push([Math.cos(t)*34,65+Math.sin(t)*34]);}
        for(let i=1;i<=32;i++)path.push([-34,65-130*i/32]);
        for(let i=1;i<=40;i++){const t=Math.PI+i*Math.PI/40;path.push([Math.cos(t)*34,-65+Math.sin(t)*34]);}
        for(let i=0;i<path.length;i++){
            const a=path[i],b=path[(i+1)%path.length],dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),nx=-dz/len,nz=dx/len;
            const p=(v,w,y)=>[v[0]+nx*w,y,v[1]+nz*w];
            road.quad(p(a,-5.5,.012),p(a,5.5,.012),p(b,5.5,.012),p(b,-5.5,.012),'#495351');
            for(const side of [-1,1]){
                road.quad(p(a,side*5.2,.025),p(a,side*5.28,.025),p(b,side*5.28,.025),p(b,side*5.2,.025),'#e4e4cb');
                road.quad(p(a,side*5.5,.045),p(a,side*6.2,.045),p(b,side*6.2,.045),p(b,side*5.5,.045),i%2?'#d2d3ba':'#a9644d');
            }
            if(i%3===0)road.quad(p(a,-.055,.025),p(a,.055,.025),p(b,.055,.025),p(b,-.055,.025),'#bfc5ae');
        }
        // Measured quarter-mile strip plus braking runoff; same car, separate start.
        road.box(70,-.015,-239,12,.06,635,'#4b5553');
        road.box(64.3,.025,-239,.10,.006,630,'#dddcc7');road.box(75.7,.025,-239,.10,.006,630,'#dddcc7');
        for(let z=55;z>-550;z-=12)road.box(70,.025,z,.12,.006,5,'#dddcc7');
        for(let x=29;x<39;x++)for(let z=40;z<42;z++)road.box(x+.5,.028,z+.5,1,.01,1,(x+z)%2?'#e4e4cc':'#273833');
        for(let x=64;x<76;x++)road.box(x+.5,.025,40,1,.01,1,x%2?'#e4e4cc':'#273833');
        road.box(70,.029,-362.336,12,.014,.4,'#c5e9a7');
        for(const z of [-535,-542,-549])road.box(70,.03,z,11,.012,.4,'#d4b08a');
        details.box(70,.95,-559,14,.22,.18,'#aab3a0');
        for(const x of [63,77])details.box(x,.5,-559,.14,1,.14,'#788c7a');
        // Track-side landmarks, cones, guardrails and pit building.
        for(let z=-62;z<=62;z+=8){details.box(43,1.1,z,.12,2.1,.12,'#7c8d7e');details.box(43,1.2,z,0.09,.17,8,'#b7bbaa');details.box(43,.85,z,.09,.17,8,'#a9afa0');}
        buildings.box(10,2.2,35,12,4.4,22,'#d3d0b9');buildings.box(10,4.45,35,13,.22,23,'#374e46');
        buildings.box(16.04,2.6,35,.07,1.2,19,'#385556');
        for(let z=27;z<45;z+=5)buildings.box(16.1,1,z,.08,2,3.8,'#a5b2a3');
        for(let i=0;i<12;i++){
            const z=10-i*14;details.cylinder(59,.22,z,.17,.44,'#d59856',8,'y');details.cylinder(59,.3,z,.175,.07,'#f3e6c7',8,'y');
        }
        for(const z of [-362.336,40]){buildings.box(62.5,2,z,.15,4,.15,'#e6ddbd');buildings.box(77.5,2,z,.15,4,.15,'#e6ddbd');buildings.box(70,4,z,15.2,.17,.20,'#344b42');}
        // Deterministic low-poly landscape, without downloading external assets.
        for(let i=0;i<115;i++){
            const angle=i*2.39996,radius=115+(i%11)*11,x=Math.cos(angle)*radius,z=Math.sin(angle)*radius-100;
            if((Math.abs(x-70)<16&&z<90)||(Math.abs(x)<55&&Math.abs(z)<120))continue;
            const h=5+i%5;trees.cylinder(x,h*.4,z,.22,h*.8,'#625d42',7,'y');
            for(let layer=0;layer<3;layer++){const y=h*.45+layer*h*.2,r=2.2-layer*.45;for(let j=0;j<9;j++){const a=j*Math.PI*2/9,b=(j+1)*Math.PI*2/9;trees.triangle([x,y+3,z],[x+Math.cos(a)*r,y,z+Math.sin(a)*r],[x+Math.cos(b)*r,y,z+Math.sin(b)*r],layer%2?'#496b50':'#53785a');}}
        }
        for(let i=0;i<32;i++){
            const a=i*Math.PI*2/32,r=390+(i%4)*80,x=Math.cos(a)*r,z=Math.sin(a)*r-180,h=25+i%7*9;
            if(Math.abs(x-70)<145&&z<170&&z>-760)continue;
            for(let j=0;j<7;j++){const p=j*Math.PI*2/7,q=(j+1)*Math.PI*2/7;land.triangle([x,h,z],[x+Math.cos(p)*95,-.1,z+Math.sin(p)*95],[x+Math.cos(q)*95,-.1,z+Math.sin(q)*95],i%2?'#8c9d7a':'#839a7a');}
        }
        return [this.upload(land),this.upload(road,.06),this.upload(details,.25),this.upload(trees),this.upload(buildings,.12)];
    }
    resetCamera(){this.camera=null;this.target=null;this.trailCount=0;this.trailCursor=0;}
    skid(car){
        if(Math.abs(car.speed)<4||!(Math.abs(car.slip)>.07||car.handbrake)||car.surface==='grass')return;
        const s=Math.sin(car.yaw),c=Math.cos(car.yaw);
        for(const side of [-1,1]){
            const x=car.x+c*side*.82+s*1.3,z=car.z-s*side*.82+c*1.3;
            const mesh=new Mesh().quad([x-.05,.032,z],[x+.05,.032,z],[x+.05+s*.35,.032,z+c*.35],[x-.05+s*.35,.032,z+c*.35],'#2b3530');
            this.trails.set(mesh.data,this.trailCursor*54);this.trailCursor=(this.trailCursor+1)%180;this.trailCount=Math.min(180,this.trailCount+1);
        }
    }
    draw(build, mode, car, orbit, cameraMode, dt=1/60){
        const gl=this.gl,canvas=this.canvas,dpr=Math.min(window.devicePixelRatio||1,1.75),w=Math.round(canvas.clientWidth*dpr),h=Math.round(canvas.clientHeight*dpr);
        if(!w||!h)return;if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}
        const driving=mode==='drive',night=!driving&&build.scene==='night';
        const sky=driving?rgb('#c4d2bf'):rgb(night?'#10262e':build.scene==='studio'?'#314c50':'#687c6e');
        let eye,target,fov;
        if(driving){
            const s=Math.sin(car.yaw),c=Math.cos(car.yaw),hood=cameraMode==='hood';
            eye=[car.x+s*(hood?-1.2:7.5),hood?1.3:3.6,car.z+c*(hood?-1.2:7.5)];
            target=[car.x-s*12,hood?1.1:1.0,car.z-c*12];
            const t=this.camera?1-Math.exp(-dt*(hood?30:7)):1;this.camera=mix(this.camera||eye,eye,t);this.target=mix(this.target||target,target,t);
            eye=this.camera;target=this.target;fov=(hood?65:54)+Math.min(12,Math.abs(car.speed)*.18);
        }else{
            const a=orbit.yaw,el=orbit.elevation,zoom=orbit.distance;eye=[Math.sin(a)*zoom,1+el*zoom,-Math.cos(a)*zoom];target=[0,.68,0];fov=35;
        }
        gl.viewport(0,0,w,h);gl.clearColor(...sky,1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.enable(gl.DEPTH_TEST);gl.useProgram(this.program);
        gl.uniformMatrix4fv(this.uniform.ViewProjection,false,new Float32Array(multiply(projection(fov*Math.PI/180,w/h),lookAt(eye,target))));
        gl.uniform3fv(this.uniform.Camera,eye);gl.uniform3fv(this.uniform.Sky,sky);gl.uniform3fv(this.uniform.Sun,driving?[-.6,1,.4]:night?[-.5,.8,-.8]:[-.6,1,-.4]);
        const draw=(mesh,matrix=identity())=>{
            gl.uniformMatrix4fv(this.uniform.Model,false,new Float32Array(matrix));gl.uniform1f(this.uniform.Metal,mesh.metal);gl.uniform1f(this.uniform.Unlit,mesh.unlit);
            gl.bindBuffer(gl.ARRAY_BUFFER,mesh.buffer);for(let i=0;i<3;i++){gl.enableVertexAttribArray(this.attributes[i]);gl.vertexAttribPointer(this.attributes[i],3,gl.FLOAT,false,36,i*12);}gl.drawArrays(gl.TRIANGLES,0,mesh.count);
        };
        for(const mesh of driving?this.world:this.studio)draw(mesh);
        if(driving&&this.trailCount){gl.bindBuffer(gl.ARRAY_BUFFER,this.trailMesh.buffer);gl.bufferData(gl.ARRAY_BUFFER,this.trails,gl.DYNAMIC_DRAW);this.trailMesh.count=this.trailCount*6;draw(this.trailMesh);}
        const x=driving?car.x:0,z=driving?car.z:0,yaw=driving?car.yaw:0;
        draw(this.shadow,transform(x,0,z,yaw));
        const body=transform(x,(build.lower?-.014:0)+(driving&&car.surface==='curb'?Math.sin(car.spin*2)*.017:0),z,yaw,driving?car.pitch:0,driving?car.roll:0);
        for(const mesh of this.carParts)draw(mesh,body);
        for(const side of [-1,1])for(const axle of [-1.34,1.35]){
            const wheelTransform=multiply(transform(x,0,z,yaw),transform(side*.91,.35,axle,axle<0&&driving?car.steer*-.4:0,driving?car.spin:0));
            for(const mesh of this.wheelParts)draw(mesh,wheelTransform);
        }
    }
}
