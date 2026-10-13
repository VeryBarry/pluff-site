(()=>{
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t;
const nav=$('.nav'),scene=$('.scene');
let lastY=0;
function onScroll(){const y=scrollY;if(nav){nav.classList.toggle('s',y>innerHeight*.6);nav.classList.toggle('hide',y>lastY&&y>innerHeight*1.2);}lastY=y;}
addEventListener('scroll',onScroll,{passive:true});onScroll();

// reveals
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -5% 0px'});
$$('.rv').forEach((el,i)=>{if(rm)el.classList.add('in');else{el.style.transitionDelay=((i%4)*.07)+'s';io.observe(el)}});

// manifesto words
const man=$('#manifesto');let words=[];
if(man){const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(/^\s+$/.test(t)||!t)f.append(t);else{const s=document.createElement('span');s.className='w';s.textContent=t;f.append(s)}});c.replaceWith(f)}else walk(c)})};walk(man);words=$$('.w',man)}

// scroll-driven bits
const pars=$$('[data-par]'),reel=$('.reel-in');
function scrollFx(){
  const vh=innerHeight;
  if(words.length){const r=man.getBoundingClientRect();const p=clamp((vh*.85-r.top)/(r.height+vh*.35),0,1);const n=Math.round(p*words.length);words.forEach((w,i)=>w.classList.toggle('on',rm||i<n));}
  if(rm)return;
  pars.forEach(el=>{const r=el.parentElement.getBoundingClientRect();const c=(r.top+r.height/2-vh/2);el.style.setProperty('--py',(c*parseFloat(el.dataset.par)).toFixed(1)+'px')});
  if(reel){const r=reel.getBoundingClientRect();const p=(vh-r.top)/(vh+r.height);reel.style.transform=`translate3d(${(-p*(reel.scrollWidth-innerWidth)*.9).toFixed(1)}px,0,0)`;}
}
addEventListener('scroll',()=>requestAnimationFrame(scrollFx),{passive:true});addEventListener('resize',scrollFx);scrollFx();

// cursor + magnetic
if(!rm&&matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.body.classList.add('has-cursor');
  const cur=$('.cursor'),dot=$('.dot',cur),ring=$('.ring',cur),lab=$('b',ring);
  let mx=-100,my=-100,rx=-100,ry=-100,ticking=false;
  addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate3d(${mx}px,${my}px,0)`;if(!ticking){ticking=true;requestAnimationFrame(follow)}},{passive:true});
  function follow(){rx=lerp(rx,mx,.2);ry=lerp(ry,my,.2);ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;if(Math.hypot(mx-rx,my-ry)>.5)requestAnimationFrame(follow);else ticking=false}
  document.addEventListener('pointerover',e=>{const a=e.target.closest('a,button');const c=e.target.closest('[data-c]');cur.classList.toggle('link',!!a);cur.classList.toggle('lab',!!(c&&c.classList.contains('stage')));if(c)lab.textContent=c.dataset.c;});
  document.addEventListener('pointerleave',()=>{mx=my=-100});
  $$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
}

// ---------- Marsh at sunset (canvas 2D, 30fps cap) ----------
const cv=$('#marsh');if(!cv)return;const g=cv.getContext('2d');
let palms=[],islands=[],W=0,H=0,DPR=1,HZ=0,blades=[],flies=[],stars=[],birds=[],clouds=[],tree=[];
const heroIn=$('#heroIn');
let px=0,py=0,tpx=0,tpy=0,prog=0,vis=true,time=0;
const rnd=(a,b)=>a+Math.random()*(b-a);
const SKY=[ // golden -> dusk, 4 stops top..horizon
 [[86,74,128],[214,110,118],[243,150,90],[252,212,140]],
 [[16,16,38],[58,36,72],[150,72,88],[230,130,86]]];
const mix=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t));
const rgb=(c,a=1)=>`rgba(${c[0]},${c[1]},${c[2]},${a})`;
function build(){
  DPR=Math.min(devicePixelRatio||1,W<700?2:1.5);
  const r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*DPR|0;cv.height=H*DPR|0;g.setTransform(DPR,0,0,DPR,0,0);
  // horizon below hero content so grass never overlaps buttons
  const cb=heroIn?heroIn.getBoundingClientRect().bottom+(scrollY>0?0:0):0;
  HZ=Math.max(H*(W<700?.71:.62),Math.min(cb+28,H*.86));
  const mob=W<700;
  blades=[];
  const layers=[ // depth, y base frac of below-horizon, height, count, color
   {d:.15,y:.04,h:[6,16],n:mob?90:200,c:[64,72,46]},
   {d:.35,y:.22,h:[16,40],n:mob?70:150,c:[52,62,38]},
   {d:.7,y:.62,h:[40,90],n:mob?50:110,c:[38,44,28]},
   {d:1,y:1.02,h:[70,170],n:mob?40:80,c:[26,28,18]}];
  const below=H-HZ;
  layers.forEach((L,li)=>{
    for(let i=0;i<L.n;i++){
      let x=rnd(-60,W+60);
      // keep a creek channel open in the middle for mid layers
      const cx=W*.55,ch=W*(li===1?.18:li===2?.26:0);
      if(ch&&Math.abs(x-cx)<ch&&Math.random()<.92)continue;
      let hh=rnd(L.h[0],L.h[1])*(mob?.75:1)*(li===3?(Math.abs(x-W/2)/(W/2))*1.2+.25:1);
      blades.push({li,d:L.d,x,y:HZ+below*L.y+rnd(-6,6)*(li+1),h:hh,lean:rnd(-.35,.35),ph:rnd(0,6.28),c:L.c,w:li===3?rnd(2,4):li===2?rnd(1.4,2.4):1.1});
    }
  });
  blades.sort((a,b)=>a.li-b.li);
  flies=Array.from({length:mob?28:55},()=>({x:rnd(0,W),y:rnd(HZ*.75,H),r:rnd(1,2.4),ph:rnd(0,6.28),sp:rnd(.2,.6)}));
  stars=Array.from({length:mob?60:130},()=>({x:rnd(0,W),y:rnd(0,HZ*.7),r:rnd(.3,1.2),ph:rnd(0,6.28)}));
  birds=Array.from({length:4},(_,i)=>({x:rnd(-W*.2,W),y:rnd(H*.18,HZ*.6),s:rnd(.6,1.1),v:rnd(6,14),ph:rnd(0,6.28)}));
  clouds=Array.from({length:6},()=>({x:rnd(0,W),y:rnd(H*.08,HZ*.5),w:rnd(W*.15,W*.4),h:rnd(4,14),v:rnd(2,5)}));
  islands=[];const mk=(x0,x1,yb,hh,c,d,step)=>{const pts=[];const a1=rnd(0,6),a2=rnd(0,6);for(let x=x0;x<=x1;x+=step){const e=Math.min(1,(x-x0)/(W*.12),(x1-x)/(W*.12));const n=.7+.18*Math.sin(x*.013+a1)+.12*Math.sin(x*.041+a2);pts.push([x,-(hh*(n*(.8+.2*Math.random())+(Math.random()<.25?.25:0))*Math.pow(Math.max(0,e),.6))])}islands.push({yb,pts,c,d})};
  const st=mob?3:4;
  mk(-40,W+40,HZ+below*.05,below*.035,[150,120,70],.15,st);
  mk(-40,W*.40,HZ+below*.2,below*.09,[120,112,58],.35,st);mk(W*.72,W+40,HZ+below*.24,below*.11,[120,112,58],.35,st);
  mk(-40,W*.30,HZ+below*.5,below*.16,[86,90,46],.7,st+1);mk(W*.8,W+40,HZ+below*.55,below*.18,[86,90,46],.7,st+1);
  // tree line silhouette (live oaks + palmettos)
  tree=[];palms=[];let x=-20;while(x<W+20){tree.push({x,w:rnd(30,80),h:rnd(6,14)});x+=rnd(25,70)}
  const blk=[...document.querySelectorAll('.hero .btns,.hero .lede,.hero h1')].map(e=>e.getBoundingClientRect());
  const ph=H*(mob?.13:.17);let px0=rnd(0,30);
  while(px0<W+20){const n=Math.random()<.45?(2+(Math.random()*3|0)):1;
    for(let k=0;k<n;k++){const xx=px0+k*rnd(10,22);let h=ph*rnd(.45,1);
      blk.forEach(r=>{if(xx>r.left-30&&xx<r.right+30&&HZ-h<r.bottom+10)h=Math.max(0,HZ-r.bottom-10)});
      if(h>Math.min(ph*.3,40))palms.push({x:xx,h,lean:rnd(-.18,.18),ph:rnd(0,6.28),s:h/ph*(mob?.8:1)})}
    px0+=n>1?rnd(90,170):rnd(45,120)}
  palms.sort((a,b)=>a.h-b.h);
}
function draw(){
  const t=prog,tm=time;
  const top=mix(SKY[0][0],SKY[1][0],t),m1=mix(SKY[0][1],SKY[1][1],t),m2=mix(SKY[0][2],SKY[1][2],t),hz=mix(SKY[0][3],SKY[1][3],t);
  const ox=px*14,oy=py*6;
  let gr=g.createLinearGradient(0,0,0,HZ);gr.addColorStop(0,rgb(top));gr.addColorStop(.45,rgb(m1));gr.addColorStop(.8,rgb(m2));gr.addColorStop(1,rgb(hz));
  g.fillStyle=gr;g.fillRect(0,0,W,HZ+1);
  // stars
  if(t>.35){const a=(t-.35)/.65;g.fillStyle='#fff6e8';stars.forEach(s=>{g.globalAlpha=a*(.5+.5*Math.sin(tm*1.5+s.ph));g.fillRect(s.x,s.y,s.r*1.6,s.r*1.6)});g.globalAlpha=1}
  // sun
  const sx=W*(W<700?.74:.68)+ox*.3,sr=Math.min(W,H)*(W<700?.11:.075),sy=lerp(HZ-sr*(W<700?.55:1.2),HZ+sr*1.2,t)+oy*.3;
  let sg=g.createRadialGradient(sx,sy,0,sx,sy,sr*7);sg.addColorStop(0,rgb(mix([255,226,150],[255,150,90],t),.55));sg.addColorStop(1,'rgba(255,170,110,0)');
  g.fillStyle=sg;g.fillRect(0,0,W,HZ);
  g.save();g.beginPath();g.rect(0,0,W,HZ);g.clip();
  g.fillStyle=rgb(mix([255,236,180],[255,140,80],t));g.beginPath();g.arc(sx,sy,sr,0,7);g.fill();g.restore();
  // clouds (thin streaks lit from below)
  clouds.forEach(c=>{const x=((c.x+tm*c.v)%(W+c.w*2))-c.w;for(let k=0;k<3;k++){g.fillStyle=rgb(mix([255,196,166],[120,60,90],t),.12);g.beginPath();g.ellipse(x+ox*.2+k*c.w*.08,c.y+k*2,c.w/2*(1-k*.2),c.h*(1-k*.25),0,0,7);g.fill()}});
  // birds (egrets)
  g.strokeStyle=rgb(mix([80,40,50],[20,14,24],t),.8);g.lineWidth=1.4;
  birds.forEach(b=>{const x=((b.x+tm*b.v)%(W*1.3))-W*.1+ox*.4,y=b.y+Math.sin(tm*.5+b.ph)*6,f=Math.sin(tm*4+b.ph)*4*b.s,s=8*b.s;g.beginPath();g.moveTo(x-s,y-f);g.quadraticCurveTo(x-s/2,y-2,x,y);g.quadraticCurveTo(x+s/2,y-2,x+s,y-f);g.stroke()});
  // far tree line: low shrub mass + Sabal palmettos
  const sil=rgb(mix([92,58,72],[22,16,28],t));g.fillStyle=sil;g.strokeStyle=sil;g.lineCap='round';
  g.beginPath();tree.forEach(tr=>{const x=tr.x+ox*.12;g.moveTo(x,HZ+1);g.ellipse(x+tr.w/2,HZ+1,tr.w/2,tr.h,0,Math.PI,0)});g.fill();
  palms.forEach(p=>{const bx=p.x+ox*.12,tx=bx+p.lean*p.h,ty=HZ-p.h,sw=Math.sin(tm*.8+p.ph)*2*p.s;
    g.lineWidth=Math.max(1.6,3.2*p.s);g.beginPath();g.moveTo(bx,HZ+1);g.quadraticCurveTo(bx+p.lean*p.h*.15,HZ-p.h*.55,tx+sw*.4,ty);g.stroke();
    const cx=tx+sw*.4,cy=ty,L=(16+10*p.s)*(W<700?.85:1);
    for(let k=0;k<13;k++){const a=-Math.PI*1.08+k*(Math.PI*1.16/12)+Math.sin(tm*1.1+p.ph+k)*.04;const l=L*(.75+.25*Math.sin(k*1.7+p.ph));
      const ex=cx+Math.cos(a)*l,ey=cy+Math.sin(a)*l*.55+l*.42*(1-Math.abs(Math.sin(a)))+sw*.3;
      const mx=cx+Math.cos(a)*l*.55,my=cy+Math.sin(a)*l*.55-2;
      g.lineWidth=Math.max(1,1.6*p.s);g.beginPath();g.moveTo(cx,cy);g.quadraticCurveTo(mx,my,ex,ey);g.stroke();
      const nx=-Math.sin(a)*2.2*(.6+p.s*.6),ny=Math.cos(a)*2.2*(.6+p.s*.6);
      g.beginPath();g.moveTo(cx,cy);g.quadraticCurveTo(mx+nx,my+ny,ex,ey);g.quadraticCurveTo(mx-nx,my-ny,cx,cy);g.fill()}
    g.beginPath();g.arc(cx,cy+1,2.2*(.6+p.s*.5),0,7);g.fill()});
  // water
  gr=g.createLinearGradient(0,HZ,0,H);gr.addColorStop(0,rgb(mix(hz,[200,110,90],.25)));gr.addColorStop(.35,rgb(mix(m2,[40,30,50],.35)));gr.addColorStop(1,rgb(mix(m1,[10,8,16],.6)));
  g.fillStyle=gr;g.fillRect(0,HZ,W,H-HZ);
  // sun glitter path
  const gc=rgb(mix([255,230,170],[255,150,90],t),.75*(1-t*.6));g.fillStyle=gc;
  for(let i=0;i<46;i++){const yy=HZ+3+Math.pow(i/46,1.6)*(H-HZ)*.85;const spread=(8+i*2.6)*(1+sr/80);const ww=(spread*(.3+.7*Math.abs(Math.sin(tm*1.3+i*1.7))))*.6;const xx=sx+Math.sin(tm*.9+i*2.3)*spread*.5+ox*.5*(i/46);g.globalAlpha=.25+.6*Math.abs(Math.sin(tm*2+i));g.fillRect(xx-ww/2,yy,ww,1.4+i*.05)}
  g.globalAlpha=1;
  // ripple lines
  g.strokeStyle='rgba(255,230,200,.10)';g.lineWidth=1;
  for(let i=0;i<14;i++){const yy=HZ+8+Math.pow(i/14,1.5)*(H-HZ);g.beginPath();g.moveTo(0,yy);for(let x=0;x<=W;x+=40)g.lineTo(x,yy+Math.sin(x*.02+tm*.8+i)*1.5);g.stroke()}
  // pluff mud flats (near bank)
  const mudY=HZ+(H-HZ)*.78;g.fillStyle=rgb(mix([74,52,38],[26,18,16],t));g.beginPath();g.moveTo(0,H);g.lineTo(0,mudY);
  for(let x=0;x<=W+40;x+=40)g.lineTo(x+ox*.8,mudY+Math.sin(x*.008+1)*14+Math.sin(x*.03)*4+(Math.abs(x-W*.55)<W*.2?28:0));g.lineTo(W,H);g.fill();
  g.strokeStyle=rgb(mix([255,200,150],[200,110,80],t),.25);g.lineWidth=1.2;g.beginPath();
  for(let x=0;x<=W;x+=40)g.lineTo(x+ox*.8,mudY+Math.sin(x*.008+1)*14+Math.sin(x*.03)*4+(Math.abs(x-W*.55)<W*.2?28:0)+2);g.stroke();
  // spartina islands
  islands.forEach(is=>{const o=ox*is.d*1.6;g.fillStyle=rgb(mix(is.c,[14,12,12],t*.8));g.beginPath();g.moveTo(is.pts[0][0]+o,is.yb+1);is.pts.forEach(([x,y])=>g.lineTo(x+o+Math.sin(time*1.1+x*.02)*1.2,is.yb+y));g.lineTo(is.pts[is.pts.length-1][0]+o,is.yb+1);g.closePath();g.fill();
    if(t<.7){g.strokeStyle=`rgba(255,205,130,${.28*(1-t/.7)})`;g.lineWidth=1;g.beginPath();is.pts.forEach(([x,y],i)=>i?g.lineTo(x+o+Math.sin(time*1.1+x*.02)*1.2,is.yb+y):g.moveTo(x+o,is.yb+y));g.stroke()}
    g.fillStyle=rgb(mix(is.c,[10,8,8],.45+t*.45),.35);g.beginPath();g.moveTo(is.pts[0][0]+o,is.yb+1);is.pts.forEach(([x,y],i)=>{if(i%3===0)g.lineTo(x+o+Math.sin(time*2+i)*2,is.yb+1-y*.45)});g.lineTo(is.pts[is.pts.length-1][0]+o,is.yb+1);g.closePath();g.fill()});
  // grass
  let li=-1;
  for(const b of blades){
    if(b.li!==li){li=b.li;g.strokeStyle=rgb(mix(mix(b.c,[110,80,60],.15*(3-li)/3),[12,10,10],t*.75));g.lineCap='round'}
    const sway=Math.sin(tm*1.2+b.x*.01+b.ph)*(3+b.h*.07)+px*b.d*6;
    const x=b.x+ox*b.d*1.6,y=b.y+oy*b.d;
    g.lineWidth=b.w;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+b.lean*b.h*.3,y-b.h*.6,x+b.lean*b.h+sway,y-b.h);g.stroke();
  }
  // golden rim on near blades
  if(t<.6){g.strokeStyle=`rgba(255,200,120,${.35*(1-t/.6)})`;g.lineWidth=1;for(const b of blades){if(b.li<2)continue;const sway=Math.sin(tm*1.2+b.x*.01+b.ph)*(3+b.h*.07)+px*b.d*6;const x=b.x+ox*b.d*1.6+1,y=b.y+oy*b.d;g.beginPath();g.moveTo(x+b.lean*b.h*.5,y-b.h*.55);g.lineTo(x+b.lean*b.h+sway,y-b.h);g.stroke()}}
  // dusk veil + fireflies
  if(t>0){g.fillStyle=`rgba(14,10,22,${t*.38})`;g.fillRect(0,0,W,H)}
  if(t>.3){const a=Math.min(1,(t-.3)/.4);flies.forEach(f=>{const x=f.x+Math.sin(tm*f.sp+f.ph)*30,y=f.y+Math.cos(tm*f.sp*1.3+f.ph)*18,blink=Math.max(0,Math.sin(tm*1.8+f.ph*3));const al=a*blink;if(al<.02)return;const fg=g.createRadialGradient(x,y,0,x,y,f.r*8);fg.addColorStop(0,`rgba(255,240,150,${al})`);fg.addColorStop(1,'rgba(255,220,100,0)');g.fillStyle=fg;g.fillRect(x-f.r*8,y-f.r*8,f.r*16,f.r*16)})}
  // top vignette for nav legibility
  gr=g.createLinearGradient(0,0,0,120);gr.addColorStop(0,'rgba(30,14,20,.35)');gr.addColorStop(1,'rgba(30,14,20,0)');g.fillStyle=gr;g.fillRect(0,0,W,120);
}
function measure(){const r=scene.getBoundingClientRect();prog=clamp(-r.top/(r.height-innerHeight),0,1);vis=r.bottom>0}
let last=0,raf=0;
function loop(now){raf=requestAnimationFrame(loop);if(!vis||document.hidden)return;if(now-last<33)return;const dt=Math.min(.1,(now-last)/1000);last=now;time+=dt;px=lerp(px,tpx,.06);py=lerp(py,tpy,.06);draw()}
build();measure();draw();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{build();draw()});
let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{build();measure();draw()},150)});
addEventListener('scroll',()=>{measure();if(rm)draw()},{passive:true});
if(!rm){addEventListener('pointermove',e=>{tpx=e.clientX/innerWidth*2-1;tpy=e.clientY/innerHeight*2-1},{passive:true});raf=requestAnimationFrame(loop)}
window.__marsh={get horizon(){return HZ}};
})();
