const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav=document.querySelector('.nav'),hero=document.querySelector('.hero');
const on=()=>nav.classList.toggle('s',!hero||scrollY>hero.offsetHeight-80);on();addEventListener('scroll',on,{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>rm?el.classList.add('in'):io.observe(el));
// Marsh sunset (canvas 2D)
(()=>{const cv=document.getElementById('marsh');if(!cv)return;const x=cv.getContext('2d');let W,H,D,blades=[],last=0,vis=true,mx=0,sy=0;
const R=(s=>()=>(s=(s*16807)%2147483647)/2147483647)(7);
function build(){blades=[0,1,2].map(l=>{const a=[],n=Math.round(W/(l==2?5:l==1?8:13));for(let i=0;i<n;i++)a.push({x:R()*W*1.1-W*.05,h:(.03+R()*.06)*H*(1+l*.5),c:(R()-.5)*.5,p:R()*6.28,w:(1.2+R())*(1+l*.5)*D});return a})}
function size(){D=Math.min(devicePixelRatio||1,1.5);W=cv.width=cv.clientWidth*D;H=cv.height=cv.clientHeight*D;build()}
const egrets=[{x:.2,y:.3,s:1,v:.006},{x:.55,y:.24,s:.7,v:.0045}];
const flies=Array.from({length:26},()=>({x:R(),y:.62+R()*.28,p:R()*6.28,v:.3+R()*.7}));
function draw(t){const T=t/1000,hz=H*(W<H?.72:.7),ox=mx*W*.012;
 const sun=(Math.sin(T/40-1.2)*.5+.5);const sx=W*.66+ox*.3,sY=hz-H*(.05+.17*sun),sr=Math.min(W,H)*.085;
 let g=x.createLinearGradient(0,0,0,hz);g.addColorStop(0,'#c86a6f');g.addColorStop(.45,'#f0936a');g.addColorStop(.85,'#f7bb7c');g.addColorStop(1,'#ffd99a');x.fillStyle=g;x.fillRect(0,0,W,hz+1);
 g=x.createRadialGradient(sx,sY,sr*.4,sx,sY,sr*6);g.addColorStop(0,'#fff0b8cc');g.addColorStop(.25,'#ffc77a55');g.addColorStop(1,'#ffc77a00');x.fillStyle=g;x.fillRect(0,0,W,hz);
 x.save();x.beginPath();x.rect(0,0,W,hz);x.clip();x.fillStyle='#fff1c4';x.beginPath();x.arc(sx,sY,sr,0,7);x.fill();x.restore();
 // far treeline
 x.fillStyle='#8a4f55';x.beginPath();x.moveTo(0,hz);for(let i=0;i<=W;i+=W/60){const k=i/W;x.lineTo(i+ox*.5,hz-H*(.006+.008*Math.abs(Math.sin(k*13)+Math.sin(k*31)*.5))-(k>.08&&k<.2?H*.018*Math.sin((k-.08)/.12*3.14):0))}x.lineTo(W,hz);x.fill();
 // water
 g=x.createLinearGradient(0,hz,0,H);g.addColorStop(0,'#f2b07e');g.addColorStop(.5,'#c9727a');g.addColorStop(1,'#5a3b46');x.fillStyle=g;x.fillRect(0,hz,W,H-hz);
 for(let i=0;i<22;i++){const yy=hz+(i/22)**1.4*(H-hz)*.75+3*D,w=sr*(1.6-i/22)*(1+.25*Math.sin(T*.8+i*1.7)),a=.55*(1-i/22);x.fillStyle=`rgba(255,236,180,${a})`;x.fillRect(sx-w/2+Math.sin(T*.6+i)*6*D,yy,w,1.6*D)}
 // egrets
 x.strokeStyle='#fff6ea';x.lineCap='round';egrets.forEach(e=>{const ex=((e.x+T*e.v)%1.3-.15)*W,ey=e.y*H+Math.sin(T*.5+e.x*9)*6*D,s=14*e.s*D,f=Math.sin(T*2.2+e.x*5)*.6;x.lineWidth=2.2*D*e.s;x.beginPath();x.moveTo(ex-s,ey-s*f*.6);x.quadraticCurveTo(ex-s*.4,ey-s*.15,ex,ey);x.quadraticCurveTo(ex+s*.4,ey-s*.15,ex+s,ey-s*f*.6);x.stroke()});
 // grass layers
 const cols=['#7b4a4c','#4b3a2c','#2a2219'];const banks=[hz+H*.01,hz+H*.17,H*.94];
 blades.forEach((L,l)=>{const base=banks[l],par=ox*(l+1)*.9;const bot=l==0?base+H*.025:l==1?base+H*.06:H;x.fillStyle=cols[l];x.beginPath();x.moveTo(0,bot);x.lineTo(0,base);for(let i=0;i<=W;i+=W/40)x.lineTo(i,base-H*.006*(l+1)*(1+Math.sin(i/W*5+l)));x.lineTo(W,base);x.lineTo(W,bot);x.fill();
  x.strokeStyle=cols[l];L.forEach(b=>{const bx=b.x+par,sw=Math.sin(T*.7+b.p+bx/W*3)*b.h*.08+b.c*b.h*.4;x.lineWidth=b.w;x.beginPath();x.moveTo(bx,base+4*D);x.quadraticCurveTo(bx+sw*.3,base-b.h*.5,bx+sw,base-b.h);x.stroke()})});
 // fireflies
 flies.forEach(f=>{const a=Math.max(0,Math.sin(T*f.v+f.p))**3;if(a<.02)return;const fx=(f.x+Math.sin(T*.1+f.p)*.02)*W+ox*2,fy=f.y*H+Math.cos(T*.3+f.p)*8*D;x.fillStyle=`rgba(255,226,140,${a*.9})`;x.beginPath();x.arc(fx,fy,1.8*D,0,7);x.fill();x.fillStyle=`rgba(255,210,120,${a*.18})`;x.beginPath();x.arc(fx,fy,7*D,0,7);x.fill()});
}
size();addEventListener('resize',size);addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5},{passive:true});
new IntersectionObserver(([e])=>vis=e.isIntersecting).observe(cv);
if(rm){draw(30000);addEventListener('resize',()=>draw(30000));return}
const loop=t=>{requestAnimationFrame(loop);if(!vis||document.hidden||t-last<33)return;last=t;draw(t)};requestAnimationFrame(loop)})();
