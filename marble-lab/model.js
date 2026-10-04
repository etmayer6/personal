export const W=1120,H=760,MAX_PARTS=60,R=9;
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const clone=v=>JSON.parse(JSON.stringify(v));
export const parts={
    ramp:{name:'Wooden ramp',glyph:'╱',color:'#b48150',length:260,angle:.22,power:1,help:'A solid track. Tilt it to guide a marble.'},
    funnel:{name:'Brass funnel',glyph:'▽',color:'#b49a57',length:110,angle:0,power:1,help:'Two sloping rails guide marbles through the open neck.'},
    bumper:{name:'Spring bumper',glyph:'◉',color:'#c47965',length:56,angle:0,power:1,help:'Bounces a marble away. Strength changes the kick.'},
    belt:{name:'Conveyor',glyph:'⇢',color:'#6b8a7b',length:230,angle:0,power:1,help:'Carries marbles in the arrow direction along its surface.'},
    magnet:{name:'Magnet',glyph:'∩',color:'#a76c62',length:50,angle:0,power:1,help:'Attracts marbles within its dashed field. Negative strength repels.'},
    portal:{name:'Portal',glyph:'◎',color:'#5e9393',length:58,angle:0,power:1,help:'A matching numbered pair transfers a marble and preserves its speed. Rotate the exit to redirect it.'},
    bell:{name:'Bell',glyph:'♧',color:'#b8a058',length:42,angle:0,power:1,help:'A passing marble rings a note. Sound is optional.'},
    switch:{name:'Switch',glyph:'⊙',color:'#6f917b',length:44,angle:0,power:1,help:'A passing marble opens every gate until the run resets.'},
    gate:{name:'Gate',glyph:'⊣',color:'#7d887c',length:150,angle:0,power:1,help:'A solid bar until a marble touches a switch.'},
    domino:{name:'Domino',glyph:'▯',color:'#697f8a',length:58,angle:0,power:1,help:'Stands on its pivot. A hit tips it into its neighbors.'},
    cup:{name:'Catch cup',glyph:'∪',color:'#607e78',length:100,angle:0,power:1,help:'Catch marbles through the open top. Captured marbles stay counted.'}
};
export function part(id,type,x,y,extra={}){const d=parts[type];return {id,type,x,y,length:d.length,angle:d.angle,power:d.power,link:0,locked:false,...extra};}
const fixed=(id,type,x,y,extra={})=>part(id,type,x,y,{...extra,locked:true});
export const challenges={
    five:{name:'Five-piece finish',description:'Catch all 3 marbles. You have 5 pieces to cross the table.',budget:5,allowed:['ramp','funnel','bumper','belt'],source:{x:180,y:80,count:3},fixed:[fixed(1,'cup',800,670,{length:150})]},
    bell:{name:'Ring, then land',description:'Each of the 3 marbles must ring the bell before reaching the cup. Use at most 4 pieces.',budget:4,allowed:['ramp','funnel','bumper','belt'],source:{x:260,y:80,count:3},fixed:[fixed(1,'bell',620,370,{length:54}),fixed(2,'cup',620,670,{length:150})]},
    portal:{name:'Special delivery',description:'Get all 3 marbles through a portal and into the cup. Use at most 6 pieces.',budget:6,allowed:['ramp','funnel','bumper','belt','portal','magnet'],source:{x:170,y:80,count:3},fixed:[fixed(1,'cup',850,670,{length:150}),fixed(2,'gate',560,380,{length:680,angle:Math.PI/2})]}
};
export function createMachine(template='starter'){
    if(challenges[template])return {v:1,name:challenges[template].name,challenge:template,source:clone(challenges[template].source),pieces:clone(challenges[template].fixed)};
    const s={v:1,name:template==='blank'?'Untitled contraption':'The little switchback',challenge:null,source:{x:180,y:80,count:3},pieces:[]};
    if(template==='blank'){s.pieces=[part(1,'cup',920,670)];return s;}
    s.pieces=[part(1,'ramp',330,180,{length:380,angle:.2}),part(2,'ramp',540,340,{length:450,angle:-.2}),part(3,'funnel',250,465,{length:180}),part(4,'cup',250,650,{length:130}),part(5,'bell',250,565),part(6,'bumper',830,250),part(7,'belt',855,390,{length:200}),part(8,'magnet',980,180),part(9,'portal',730,530,{link:1}),part(10,'portal',935,530,{link:1}),part(11,'switch',650,610),part(12,'gate',650,665,{length:130}),part(13,'domino',770,670),part(14,'domino',810,670),part(15,'domino',850,670)];
    return s;
}
export function validateMachine(raw){
    if(!raw||raw.v!==1||!Array.isArray(raw.pieces)||raw.pieces.length>MAX_PARTS||!raw.source)return null;
    const finite=v=>typeof v==='number'&&Number.isFinite(v);
    const src=raw.source;if(!finite(src.x)||!finite(src.y)||src.x<25||src.x>W-25||src.y<30||src.y>H-60||!Number.isInteger(src.count)||src.count<1||src.count>12)return null;
    const ids=new Set(),pieces=[];
    for(const p of raw.pieces){
        if(!p||!Object.hasOwn(parts,p.type)||!Number.isInteger(p.id)||p.id<1||p.id>1e6||ids.has(p.id)||![p.x,p.y,p.length,p.angle,p.power].every(finite)||p.x<20||p.x>W-20||p.y<30||p.y>H-25||p.length<30||p.length>700||Math.abs(p.angle)>Math.PI||Math.abs(p.power)>2||!Number.isInteger(p.link)||p.link<0||p.link>30||typeof p.locked!=='boolean')return null;
        ids.add(p.id);pieces.push({id:p.id,type:p.type,x:p.x,y:p.y,length:p.length,angle:p.angle,power:p.power,link:p.link,locked:p.locked});
    }
    const challenge=raw.challenge??null;
    if(challenge!==null){if(!Object.hasOwn(challenges,challenge))return null;const c=challenges[challenge];if(src.x!==c.source.x||src.y!==c.source.y||src.count!==c.source.count)return null;const locked=pieces.filter(p=>p.locked).sort((a,b)=>a.id-b.id);if(JSON.stringify(locked)!==JSON.stringify(c.fixed)||pieces.filter(p=>!p.locked).length>c.budget||pieces.some(p=>!p.locked&&!c.allowed.includes(p.type)))return null;}
    else if(pieces.some(p=>p.locked))return null;
    const pairs=new Map();for(const p of pieces.filter(p=>p.type==='portal'&&p.link)){pairs.set(p.link,(pairs.get(p.link)||0)+1);}if([...pairs.values()].some(n=>n>2))return null;
    return {v:1,name:String(raw.name||'Untitled contraption').replace(/[\u0000-\u001f]/g,'').trim().slice(0,48)||'Untitled contraption',challenge,source:{x:src.x,y:src.y,count:src.count},pieces};
}
export function encodeMachine(s){return btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(s)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}
export function decodeMachine(code){try{if(!/^[\w-]{1,24000}$/.test(code))return null;return validateMachine(JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(atob(code.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0)))));}catch{return null;}}
export function segments(p,dominoAngle=0){
    if(p.type==='funnel'||p.type==='cup'){const w=p.length/2,h=p.length*.48,rails=p.type==='funnel'?[[-w,-h/2,-16,h/2],[w,-h/2,16,h/2]]:[[-w,-35,-w+8,22],[w,-35,w-8,22],[-w+8,22,w-8,22]],c=Math.cos(p.angle),s=Math.sin(p.angle);return rails.map(([x1,y1,x2,y2])=>[p.x+x1*c-y1*s,p.y+x1*s+y1*c,p.x+x2*c-y2*s,p.y+x2*s+y2*c]);}
    if(p.type==='domino'){const a=p.angle+dominoAngle;return [[p.x,p.y,p.x+Math.sin(a)*p.length,p.y-Math.cos(a)*p.length]];}
    const dx=Math.cos(p.angle)*p.length/2,dy=Math.sin(p.angle)*p.length/2;return [[p.x-dx,p.y-dy,p.x+dx,p.y+dy]];
}
export function closest(x,y,s){const dx=s[2]-s[0],dy=s[3]-s[1],t=clamp(((x-s[0])*dx+(y-s[1])*dy)/(dx*dx+dy*dy||1),0,1);return {x:s[0]+dx*t,y:s[1]+dy*t,t};}
