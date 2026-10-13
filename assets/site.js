const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav=document.querySelector('.nav');const on=()=>nav.classList.toggle('s',scrollY>20);on();addEventListener('scroll',on,{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>rm?el.classList.add('in'):io.observe(el));
document.querySelectorAll('.proj').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));
(()=>{const cv=document.getElementById('gl');if(!cv)return;const gl=cv.getContext('webgl',{antialias:false});if(!gl){cv.remove();return}
const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}';
const fs=`precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){vec2 uv=(gl_FragCoord.xy-.5*r)/r.y;vec2 q=uv-(m-.5)*.12;vec3 col=vec3(.043,.051,.078);vec2 o=vec2(r.x>r.y?.45:0.,r.x>r.y?.02:.28);
for(int i=0;i<3;i++){float fi=float(i);float k=1.7+fi*.45;float R=.26+fi*.15;vec2 d2=(q-o)*vec2(1.,k);float ring=abs(length(d2)-R);
vec3 c=i==0?vec3(1.,.82,.23):i==1?vec3(.18,1.,.69):vec3(.25,.94,1.);col+=c*.0006/(ring+.004);
float a=t*(.35-fi*.08)+fi*2.1;vec2 s=o+vec2(cos(a),sin(a)/k)*R;col+=c*.0015/(length(q-s)+.006);}
col+=vec3(1.,.82,.23)*.012/(length(q-o)+.05);
vec2 g=floor(gl_FragCoord.xy/2.);float st=step(.9985,h(g))*(.4+.6*sin(t*1.5+h(g+1.)*40.));col+=vec3(st)*.6;
gl_FragColor=vec4(col,1.);}`;
const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o};const pr=gl.createProgram();
gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);gl.useProgram(pr);
gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
const l=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,2,gl.FLOAT,false,0,0);
const U=n=>gl.getUniformLocation(pr,n),ur=U('r'),ut=U('t'),um=U('m');let mx=.5,my=.5,vis=true,last=0;
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth;my=1-e.clientY/innerHeight},{passive:true});
const sz=()=>{const d=Math.min(devicePixelRatio,1.5)*.75;cv.width=cv.clientWidth*d;cv.height=cv.clientHeight*d;gl.viewport(0,0,cv.width,cv.height)};sz();addEventListener('resize',sz);
new IntersectionObserver(([e])=>vis=e.isIntersecting).observe(cv);
const draw=ts=>{gl.uniform2f(ur,cv.width,cv.height);gl.uniform1f(ut,ts/1000);gl.uniform2f(um,mx,my);gl.drawArrays(gl.TRIANGLES,0,3)};
if(rm){draw(8000);return}
const loop=ts=>{requestAnimationFrame(loop);if(!vis||document.hidden||ts-last<33)return;last=ts;draw(ts)};requestAnimationFrame(loop)})();
