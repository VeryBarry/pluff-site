if(location.search)try{history.replaceState(history.state,"",location.pathname+location.hash)}catch{}var Ad=0,Uh=1,Rd=2;var qo=1,Ul=2,Cr=3,Ri=0,un=1,Le=2,ni=0,Pr=1,vn=2,Nh=3,Fh=4,Cd=5;var Cs=100,Pd=101,Id=102,Ld=103,Dd=104,Ud=200,Nd=201,Fd=202,Bd=203,Bh=204,Oh=205,Od=206,zd=207,Hd=208,Vd=209,kd=210,Gd=211,Wd=212,Xd=213,qd=214,nl=0,il=1,sl=2,cr=3,rl=4,ol=5,al=6,ll=7,zh=0,Yd=1,Zd=2,di=0,Yo=1,Zo=2,Jo=3,Ps=4,$o=5,Ko=6,jo=7,yh="attached",Jd="detached",Hh=300,ls=301,Is=302,Nl=303,Fl=304,Qo=306,ws=1e3,bi=1001,cl=1002,xn=1003,$d=1004;var ta=1005;var hn=1006,Bl=1007;var cs=1008;var Gn=1009,Vh=1010,kh=1011,Ir=1012,Ol=1013,fi=1014,Kn=1015,qe=1016,zl=1017,Hl=1018,Lr=1020,Gh=35902,Wh=35899,Xh=1021,qh=1022,jn=1023,Ei=1026,hs=1027,Vl=1028,kl=1029,us=1030,Gl=1031;var Wl=1033,ea=33776,na=33777,ia=33778,sa=33779,Xl=35840,ql=35841,Yl=35842,Zl=35843,Jl=36196,$l=37492,Kl=37496,jl=37488,Ql=37489,ra=37490,tc=37491,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,xc=36495,vc=36283,_c=36284,oa=36285,yc=36286;var uo=2300,hl=2301,tl=2302,Mh=2303,Sh=2400,bh=2401,Eh=2402;var Kd=3200,Yh=3201;var Mc=0,jd=1,Hi="",Sn="srgb",fo="srgb-linear",po="linear",Re="srgb";var el=7680;var Qd=519,tf=512,ef=513,nf=514,Sc=515,sf=516,rf=517,bc=518,of=519,af=35044;var Zh="300 es",ci=2e3,hr=2001;function Ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=mo("canvas");return i.style.display="block",i}var Ou={},ur=null;function Jh(...i){let t="THREE."+i.shift();ur?ur("log",t,...i):console.log(t,...i)}function cf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=cf(i);let t="THREE."+i.shift();if(ur)ur("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=cf(i);let t="THREE."+i.shift();if(ur)ur("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Es(...i){let t=i.join(" ");t in Ou||(Ou[t]=!0,re(...i))}function hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uf={[nl]:il,[sl]:al,[rl]:ll,[cr]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:cr},wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=1234567,ao=Math.PI/180,dr=180/Math.PI;function ds(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function $h(i,t){return(i%t+t)%t}function Dp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Up(i,t,e){return i!==t?(e-i)/(t-i):0}function lo(i,t,e){return(1-e)*i+e*t}function Np(i,t,e,n){return lo(i,t,1-Math.exp(-e*n))}function Fp(i,t=1){return t-Math.abs($h(i,t*2)-t)}function Bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hp(i,t){return i+Math.random()*(t-i)}function Vp(i){return i*(.5-Math.random())}function kp(i){i!==void 0&&(zu=i);let t=zu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gp(i){return i*ao}function Wp(i){return i*dr}function Xp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*d,a*h,a*c);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _n={DEG2RAD:ao,RAD2DEG:dr,generateUUID:ds,clamp:xe,euclideanModulo:$h,mapLinear:Dp,inverseLerp:Up,lerp:lo,damp:Np,pingpong:Fp,smoothstep:Bp,smootherstep:Op,randInt:zp,randFloat:Hp,randFloatSpread:Vp,seededRandom:kp,degToRad:Gp,radToDeg:Wp,isPowerOfTwo:Xp,ceilPowerOfTwo:qp,floorPowerOfTwo:Yp,setQuaternionFromProperEuler:Zp,normalize:Ln,denormalize:ar},Rt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],x=r[o+2],A=r[o+3];if(f!==A||l!==u||c!==d||h!==x){let v=l*u+c*d+h*x+f*A;v<0&&(u=-u,d=-d,x=-x,A=-A,v=-v);let p=1-a;if(v<.9995){let y=Math.acos(v),C=Math.sin(y);p=Math.sin(p*y)/C,a=Math.sin(a*y)/C,l=l*p+u*a,c=c*p+d*a,h=h*p+x*a,f=f*p+A*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+x*a,f=f*p+A*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*f+l*d-c*u,t[e+1]=l*x+h*u+c*f-a*d,t[e+2]=c*x+h*d+a*u-l*f,t[e+3]=h*x-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new U,Hu=new en,le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],A=s[0],v=s[3],p=s[6],y=s[1],C=s[4],_=s[7],R=s[2],E=s[5],b=s[8];return r[0]=o*A+a*y+l*R,r[3]=o*v+a*C+l*E,r[6]=o*p+a*_+l*b,r[1]=c*A+h*y+f*R,r[4]=c*v+h*C+f*E,r[7]=c*p+h*_+f*b,r[2]=u*A+d*y+x*R,r[5]=u*v+d*C+x*E,r[8]=u*p+d*_+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,x=e*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=f*A,t[1]=(s*c-h*n)*A,t[2]=(a*n-s*o)*A,t[3]=u*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-a*e)*A,t[6]=d*A,t[7]=(n*l-c*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new le,Vu=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let i={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Re&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Re&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fo]:{primaries:t,whitePoint:n,transfer:po,toXYZ:Vu,fromXYZ:ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Vu,fromXYZ:ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var ge=Jp();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ys,ul=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ys===void 0&&(Ys=mo("canvas")),Ys.width=t.width,Ys.height=t.height;let s=Ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$p=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jc(s[o].image)):r.push(Jc(s[o]))}else r=Jc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var Kp=0,$c=new U,Dn=class i extends wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=hn,o=cs,a=jn,l=Gn,c=i.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ds(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Hh;Dn.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],A=l[2],v=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-A)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+A)<.1&&Math.abs(x+v)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,_=(d+1)/2,R=(p+1)/2,E=(h+u)/4,b=(f+A)/4,m=(x+v)/4;return C>_&&C>R?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=b/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=m/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=m/r),this.set(n,s,r,e),this}let y=Math.sqrt((v-x)*(v-x)+(f-A)*(f-A)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(v-x)/y,this.y=(f-A)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Dn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},go=class extends Dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,x,A,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,x,A,v)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,x,A,v){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=A,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,x=a*h,A=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+x*c,e[5]=u-A*c,e[9]=-a*l,e[2]=A-u*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,x=c*h,A=c*f;e[0]=u+A*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=A+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,x=c*h,A=c*f;e[0]=u-A*a,e[4]=-o*f,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=A-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,x=a*h,A=a*f;e[0]=l*h,e[4]=x*c-d,e[8]=u*c+A,e[1]=l*f,e[5]=A*c+u,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,x=a*l,A=a*c;e[0]=l*h,e[4]=A-u*f,e[8]=x*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+x,e[10]=u-A*f}else if(t.order==="XZY"){let u=o*l,d=o*c,x=a*l,A=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+A,e[5]=o*h,e[9]=d*f-x,e[2]=x*f-d,e[6]=a*h,e[10]=A*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,Qp)}lookAt(t,e,n){let s=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Yi.crossVectors(n,qn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Yi.crossVectors(n,qn)),Yi.normalize(),Aa.crossVectors(qn,Yi),s[0]=Yi.x,s[4]=Aa.x,s[8]=qn.x,s[1]=Yi.y,s[5]=Aa.y,s[9]=qn.y,s[2]=Yi.z,s[6]=Aa.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],A=n[6],v=n[10],p=n[14],y=n[3],C=n[7],_=n[11],R=n[15],E=s[0],b=s[4],m=s[8],M=s[12],T=s[1],I=s[5],D=s[9],N=s[13],L=s[2],F=s[6],q=s[10],G=s[14],j=s[3],k=s[7],st=s[11],at=s[15];return r[0]=o*E+a*T+l*L+c*j,r[4]=o*b+a*I+l*F+c*k,r[8]=o*m+a*D+l*q+c*st,r[12]=o*M+a*N+l*G+c*at,r[1]=h*E+f*T+u*L+d*j,r[5]=h*b+f*I+u*F+d*k,r[9]=h*m+f*D+u*q+d*st,r[13]=h*M+f*N+u*G+d*at,r[2]=x*E+A*T+v*L+p*j,r[6]=x*b+A*I+v*F+p*k,r[10]=x*m+A*D+v*q+p*st,r[14]=x*M+A*N+v*G+p*at,r[3]=y*E+C*T+_*L+R*j,r[7]=y*b+C*I+_*F+R*k,r[11]=y*m+C*D+_*q+R*st,r[15]=y*M+C*N+_*G+R*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],x=t[3],A=t[7],v=t[11],p=t[15],y=l*d-c*u,C=a*d-c*f,_=a*u-l*f,R=o*d-c*h,E=o*u-l*h,b=o*f-a*h;return e*(A*y-v*C+p*_)-n*(x*y-v*R+p*E)+s*(x*C-A*R+p*b)-r*(x*_-A*E+v*b)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],x=t[12],A=t[13],v=t[14],p=t[15],y=e*a-n*o,C=e*l-s*o,_=e*c-r*o,R=n*l-s*a,E=n*c-r*a,b=s*c-r*l,m=h*A-f*x,M=h*v-u*x,T=h*p-d*x,I=f*v-u*A,D=f*p-d*A,N=u*p-d*v,L=y*N-C*D+_*I+R*T-E*M+b*m;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(a*N-l*D+c*I)*F,t[1]=(s*D-n*N-r*I)*F,t[2]=(A*b-v*E+p*R)*F,t[3]=(u*E-f*b-d*R)*F,t[4]=(l*T-o*N-c*M)*F,t[5]=(e*N-s*T+r*M)*F,t[6]=(v*_-x*b-p*C)*F,t[7]=(h*b-u*_+d*C)*F,t[8]=(o*D-a*T+c*m)*F,t[9]=(n*T-e*D-r*m)*F,t[10]=(x*E-A*_+p*y)*F,t[11]=(f*_-h*E-d*y)*F,t[12]=(a*M-o*I-l*m)*F,t[13]=(e*I-n*M+s*m)*F,t[14]=(A*C-x*R-v*y)*F,t[15]=(h*R-f*C+u*y)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,x=r*f,A=o*h,v=o*f,p=a*f,y=l*c,C=l*h,_=l*f,R=n.x,E=n.y,b=n.z;return s[0]=(1-(A+p))*R,s[1]=(d+_)*R,s[2]=(x-C)*R,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+p))*E,s[6]=(v+y)*E,s[7]=0,s[8]=(x+C)*b,s[9]=(v-y)*b,s[10]=(1-(u+A))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let c=1/o,h=1/a,f=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ci,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),x,A;if(l)x=r/(o-r),A=o*r/(o-r);else if(a===ci)x=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(a===hr)x=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ci,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),x,A;if(l)x=1/(o-r),A=o/(o-r);else if(a===ci)x=-2/(o-r),A=-(o+r)/(o-r);else if(a===hr)x=-1/(o-r),A=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zs=new U,oi=new ae,jp=new U(0,0,0),Qp=new U(1,1,1),Yi=new U,Aa=new U,qn=new U,Gu=new ae,Wu=new en,hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tm=0,Xu=new U,Js=new en,Di=new ae,Ra=new U,jr=new U,em=new U,nm=new en,qu=new U(1,0,0),Yu=new U(0,1,0),Zu=new U(0,0,1),Ju={type:"added"},im={type:"removed"},$s={type:"childadded",child:null},Kc={type:"childremoved",child:null},Fe=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new hi,n=new en,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new le}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(qu,t)}rotateY(t){return this.rotateOnAxis(Yu,t)}rotateZ(t){return this.rotateOnAxis(Zu,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qu,t)}translateY(t){return this.translateOnAxis(Yu,t)}translateZ(t){return this.translateOnAxis(Zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ra.copy(t):Ra.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(jr,Ra,this.up):Di.lookAt(Ra,jr,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Di),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ju),$s.child=t,this.dispatchEvent($s),$s.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(im),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ju),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,em),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new U(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ie=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let A of t.hand.values()){let v=e.getJointPose(A,n),p=this._getHandJoint(c,A);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=$h(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jc(o,r,t+1/3),this.g=jc(o,r,t),this.b=jc(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){let n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ge.workingToColorSpace(An.copy(this),t),Math.round(xe(An.r*255,0,255))*65536+Math.round(xe(An.g*255,0,255))*256+Math.round(xe(An.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(An.copy(this),e);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=Sn){ge.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,s=An.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Ca);let n=lo(Zi.h,Ca.h,e),s=lo(Zi.s,Ca.s,e),r=lo(Zi.l,Ca.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Ut;Ut.NAMES=df;var xo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new U,Ui=new U,Qc=new U,Ni=new U,Ks=new U,js=new U,$u=new U,th=new U,eh=new U,nh=new U,ih=new Se,sh=new Se,rh=new Se,ji=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),Ui.subVectors(n,e),Qc.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Ui),l=ai.dot(Qc),c=Ui.dot(Ui),h=Ui.dot(Qc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(t,e),sh.fromBufferAttribute(t,n),rh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ih,r.x),o.addScaledVector(sh,r.y),o.addScaledVector(rh,r.z),o}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Ui.subVectors(t,e),ai.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ks.subVectors(s,n),js.subVectors(r,n),th.subVectors(t,n);let l=Ks.dot(th),c=js.dot(th);if(l<=0&&c<=0)return e.copy(n);eh.subVectors(t,s);let h=Ks.dot(eh),f=js.dot(eh);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ks,o);nh.subVectors(t,r);let d=Ks.dot(nh),x=js.dot(nh);if(x>=0&&d<=x)return e.copy(r);let A=d*c-l*x;if(A<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(js,a);let v=h*x-d*f;if(v<=0&&f-h>=0&&d-x>=0)return $u.subVectors(r,s),a=(f-h)/(f-h+(d-x)),e.copy(s).addScaledVector($u,a);let p=1/(v+A+u);return o=A*p,a=u*p,e.copy(n).addScaledVector(Ks,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),Ia.subVectors(this.max,Qr),Qs.subVectors(t.a,Qr),tr.subVectors(t.b,Qr),er.subVectors(t.c,Qr),Ji.subVectors(tr,Qs),$i.subVectors(er,tr),_s.subVectors(Qs,er);let e=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-_s.z,_s.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,_s.z,0,-_s.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-_s.y,_s.x,0];return!oh(e,Qs,tr,er,Ia)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,Qs,tr,er,Ia))?!1:(La.crossVectors(Ji,$i),e=[La.x,La.y,La.z],oh(e,Qs,tr,er,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new U,new U,new U,new U,new U,new U,new U,new U],li=new U,Pa=new Vn,Qs=new U,tr=new U,er=new U,Ji=new U,$i=new U,_s=new U,Qr=new U,Ia=new U,La=new U,ys=new U;function oh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ys.fromArray(i,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=t.dot(ys),c=e.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new U,Da=new Rt,rm=0,cn=class extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),s=Ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),s=Ln(s,this.array),r=Ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vo=class extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},om=new Vn,to=new U,ah=new U,kn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):om.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);let e=to.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(to,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(ah)),this.expandByPoint(to.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},am=0,ti=new ae,lh=new Fe,nr=new U,Yn=new Vn,eo=new Vn,gn=new U,ve=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ip(t)?vo:Ts)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Yn.min,eo.min),Yn.expandByPoint(gn),gn.addVectors(Yn.max,eo.max),Yn.expandByPoint(gn)):(Yn.expandByPoint(eo.min),Yn.expandByPoint(eo.max))}Yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(t,c),gn.add(nr)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let m=0;m<n.count;m++)a[m]=new U,l[m]=new U;let c=new U,h=new U,f=new U,u=new Rt,d=new Rt,x=new Rt,A=new U,v=new U;function p(m,M,T){c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,T),u.fromBufferAttribute(r,m),d.fromBufferAttribute(r,M),x.fromBufferAttribute(r,T),h.sub(c),f.sub(c),d.sub(u),x.sub(u);let I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(A.copy(h).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(I),v.copy(f).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(I),a[m].add(A),a[M].add(A),a[T].add(A),l[m].add(v),l[M].add(v),l[T].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let m=0,M=y.length;m<M;++m){let T=y[m],I=T.start,D=T.count;for(let N=I,L=I+D;N<L;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let C=new U,_=new U,R=new U,E=new U;function b(m){R.fromBufferAttribute(s,m),E.copy(R);let M=a[m];C.copy(M),C.sub(R.multiplyScalar(R.dot(M))).normalize(),_.crossVectors(E,M);let I=_.dot(l[m])<0?-1:1;o.setXYZW(m,C.x,C.y,C.z,I)}for(let m=0,M=y.length;m<M;++m){let T=y[m],I=T.start,D=T.count;for(let N=I,L=I+D;N<L;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){let x=t.getX(u+0),A=t.getX(u+1),v=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,v),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let A=0,v=l.length;A<v;A++){a.isInterleavedBufferAttribute?d=l[A]*a.data.stride+a.offset:d=l[A]*h;for(let p=0;p<h;p++)u[x++]=c[d++]}return new cn(u,h,f)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ch=new U,lm=new U,cm=new le,Zn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ch.subVectors(n,e).cross(lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cm.getNormalMatrix(t),s=this.coplanarPoint(ch).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hm=0,Ti=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Pr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Oh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Bi=new U,hh=new U,Ua=new U,Na=new U,Qi=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hh.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Na.copy(this.origin).sub(hh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ua),a=Na.dot(this.direction),l=-Na.dot(Ua),c=Na.lengthSq(),h=Math.abs(1-o*o),f,u,d,x;if(h>0)if(f=o*l-a,u=o*a-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let A=1/h;f*=A,u*=A,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hh).addScaledVector(Ua,u),d}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,x=e.x-o.x,A=e.y-o.y,v=e.z-o.z,p=n.x-o.x,y=n.y-o.y,C=n.z-o.z,_=Math.abs(l),R=Math.abs(c),E=Math.abs(h),b,m,M,T,I,D,N,L,F,q,G,j;if(_>=R&&_>=E?(M=l,D=f,F=x,j=p,l>=0?(b=c,m=h,T=u,I=d,N=A,L=v,q=y,G=C):(b=h,m=c,T=d,I=u,N=v,L=A,q=C,G=y)):R>=E?(M=c,D=u,F=A,j=y,c>=0?(b=h,m=l,T=d,I=f,N=v,L=x,q=C,G=p):(b=l,m=h,T=f,I=d,N=x,L=v,q=p,G=C)):(M=h,D=d,F=v,j=C,h>=0?(b=l,m=c,T=f,I=u,N=x,L=A,q=p,G=y):(b=c,m=l,T=u,I=f,N=A,L=x,q=y,G=p)),M===0)return null;let k=b/M,st=m/M,at=1/M,Vt=T-k*D,Pt=I-st*D,W=N-k*F,xt=L-st*F,wt=q-k*j,X=G-st*j,O=wt*xt-X*W,ht=Vt*X-Pt*wt,nt=W*Pt-xt*Vt;if(s){if(O<0||ht<0||nt<0)return null}else if((O<0||ht<0||nt<0)&&(O>0||ht>0||nt>0))return null;let it=O+ht+nt;if(it===0)return null;let Tt=at*(O*D+ht*F+nt*j);return(it>0?Tt<0:Tt>0)?null:this.at(Tt/it,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ku=new ae,Ms=new Qi,Fa=new kn,ju=new U,Ba=new U,Oa=new U,za=new U,uh=new U,Ha=new U,Qu=new U,Va=new U,Bt=class extends Fe{constructor(t=new ve,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(uh.fromBufferAttribute(f,t),o?Ha.addScaledVector(uh,h):Ha.addScaledVector(uh.sub(e),h))}e.add(Ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(Fa.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Fa,ju)===null||Ms.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Ku.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,A=u.length;x<A;x++){let v=u[x],p=o[v.materialIndex],y=Math.max(v.start,d.start),C=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let _=y,R=C;_<R;_+=3){let E=a.getX(_),b=a.getX(_+1),m=a.getX(_+2);s=ka(this,p,t,n,c,h,f,E,b,m),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),A=Math.min(a.count,d.start+d.count);for(let v=x,p=A;v<p;v+=3){let y=a.getX(v),C=a.getX(v+1),_=a.getX(v+2);s=ka(this,o,t,n,c,h,f,y,C,_),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,A=u.length;x<A;x++){let v=u[x],p=o[v.materialIndex],y=Math.max(v.start,d.start),C=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let _=y,R=C;_<R;_+=3){let E=_,b=_+1,m=_+2;s=ka(this,p,t,n,c,h,f,E,b,m),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),A=Math.min(l.count,d.start+d.count);for(let v=x,p=A;v<p;v+=3){let y=v,C=v+1,_=v+2;s=ka(this,o,t,n,c,h,f,y,C,_),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}};function um(i,t,e,n,s,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ri,a),l===null)return null;Va.copy(a),Va.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Va);return c<e.near||c>e.far?null:{distance:c,point:Va.clone(),object:i}}function ka(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ba),i.getVertexPosition(l,Oa),i.getVertexPosition(c,za);let h=um(i,t,e,n,Ba,Oa,za,Qu);if(h){let f=new U;ji.getBarycoord(Qu,Ba,Oa,za,f),s&&(h.uv=ji.getInterpolatedAttribute(s,a,l,c,f,new Rt)),r&&(h.uv1=ji.getInterpolatedAttribute(r,a,l,c,f,new Rt)),o&&(h.normal=ji.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};ji.getNormal(Ba,Oa,za,u.normal),h.face=u,h.barycoord=f}return h}var no=new Se,td=new Se,ed=new Se,dm=new Se,nd=new ae,Ga=new U,dh=new kn,id=new ae,fh=new Qi,_o=class extends Bt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yh,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ga),this.boundingSphere.expandByPoint(Ga)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dh.copy(this.boundingSphere),dh.applyMatrix4(s),t.ray.intersectsSphere(dh)!==!1&&(id.copy(s).invert(),fh.copy(t.ray).applyMatrix4(id),!(this.boundingBox!==null&&fh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,fh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jd?this.bindMatrixInverse.copy(this.bindMatrix).invert():re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;td.fromBufferAttribute(s.attributes.skinIndex,t),ed.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(no.copy(e),e.set(0,0,0,0)):(no.set(...e,1),e.set(0,0,0)),no.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=ed.getComponent(r);if(o!==0){let a=td.getComponent(r);nd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(dm.copy(no).applyMatrix4(nd),o)}}return e.isVector4&&(e.w=no.w),e.applyMatrix4(this.bindMatrixInverse)}},xr=class extends Fe{constructor(){super(),this.isBone=!0,this.type="Bone"}},ts=class extends Dn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=xn,h=xn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sd=new ae,fm=new ae,yo=class i{constructor(t=[],e=[]){this.uuid=ds(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ae;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:fm;sd.multiplyMatrices(a,e[r]),sd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ts(e,t,t,jn,Kn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(re("Skeleton: No bone found with UUID:",r),o=new xr),this.bones.push(o),this.boneInverses.push(new ae().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},vr=class extends cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ir=new ae,rd=new ae,Wa=[],od=new Vn,pm=new ae,io=new Bt,so=new kn,nn=class extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),od.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(od)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),so.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),t.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),rd.multiplyMatrices(n,ir),io.matrixWorld=rd,io.raycast(t,Wa);for(let o=0,a=Wa.length;o<a;o++){let l=Wa[o];l.instanceId=r,l.object=this,e.push(l)}Wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,Vl,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new kn,mm=new Rt(.5,.5),Xa=new U,_r=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],x=r[8],A=r[9],v=r[10],p=r[11],y=r[12],C=r[13],_=r[14],R=r[15];if(s[0].setComponents(c-o,d-h,p-x,R-y).normalize(),s[1].setComponents(c+o,d+h,p+x,R+y).normalize(),s[2].setComponents(c+a,d+f,p+A,R+C).normalize(),s[3].setComponents(c-a,d-f,p-A,R-C).normalize(),n)s[4].setComponents(l,u,v,_).normalize(),s[5].setComponents(c-l,d-u,p-v,R-_).normalize();else if(s[4].setComponents(c-l,d-u,p-v,R-_).normalize(),e===ci)s[5].setComponents(c+l,d+u,p+v,R+_).normalize();else if(e===hr)s[5].setComponents(l,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){Ss.center.set(0,0,0);let e=mm.distanceTo(t.center);return Ss.radius=.7071067811865476+e,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xa.x=s.normal.x>0?t.max.x:t.min.x,Xa.y=s.normal.y>0?t.max.y:t.min.y,Xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yr=class extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pl=new U,ml=new U,ad=new ae,ro=new Qi,qa=new kn,ph=new U,ld=new U,gl=class extends Fe{constructor(t=new ve,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)pl.fromBufferAttribute(e,s-1),ml.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=pl.distanceTo(ml);t.setAttribute("lineDistance",new ie(n,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,t.ray.intersectsSphere(qa)===!1)return;ad.copy(s).invert(),ro.copy(t.ray).applyMatrix4(ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let A=d,v=x-1;A<v;A+=c){let p=h.getX(A),y=h.getX(A+1),C=Ya(this,t,ro,l,p,y,A);C&&e.push(C)}if(this.isLineLoop){let A=h.getX(x-1),v=h.getX(d),p=Ya(this,t,ro,l,A,v,x-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let A=d,v=x-1;A<v;A+=c){let p=Ya(this,t,ro,l,A,A+1,A);p&&e.push(p)}if(this.isLineLoop){let A=Ya(this,t,ro,l,x-1,d,x-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ya(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(pl.fromBufferAttribute(a,s),ml.fromBufferAttribute(a,r),e.distanceSqToSegment(pl,ml,ph,ld)>n)return;ph.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ph);if(!(c<t.near||c>t.far))return{distance:c,point:ld.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var cd=new U,hd=new U,Mo=class extends gl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)cd.fromBufferAttribute(e,s),hd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cd.distanceTo(hd);t.setAttribute("lineDistance",new ie(n,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ui=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ud=new ae,wh=new Qi,Za=new kn,Ja=new U,Ai=class extends Fe{constructor(t=new ve,e=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,t.ray.intersectsSphere(Za)===!1)return;ud.copy(s).invert(),wh.copy(t.ray).applyMatrix4(ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=u,A=d;x<A;x++){let v=c.getX(x);Ja.fromBufferAttribute(f,v),dd(Ja,v,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let x=u,A=d;x<A;x++)Ja.fromBufferAttribute(f,x),dd(Ja,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dd(i,t,e,n,s,r,o){let a=wh.distanceSqToPoint(i);if(a<e){let l=new U;wh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var So=class extends Dn{constructor(t=[],e=ls,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mr=class extends Dn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends Dn{constructor(t,e,n=fi,s,r,o,a=xn,l=xn,c,h=Ei,f=1){if(h!==Ei&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xl=class extends es{constructor(t,e=fi,n=ls,s,r,o=xn,a=xn,l,c=Ei){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},bo=class extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pe=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function x(A,v,p,y,C,_,R,E,b,m,M){let T=_/b,I=R/m,D=_/2,N=R/2,L=E/2,F=b+1,q=m+1,G=0,j=0,k=new U;for(let st=0;st<q;st++){let at=st*I-N;for(let Vt=0;Vt<F;Vt++){let Pt=Vt*T-D;k[A]=Pt*y,k[v]=at*C,k[p]=L,c.push(k.x,k.y,k.z),k[A]=0,k[v]=0,k[p]=E>0?1:-1,h.push(k.x,k.y,k.z),f.push(Vt/b),f.push(1-st/m),G+=1}}for(let st=0;st<m;st++)for(let at=0;at<b;at++){let Vt=u+at+F*st,Pt=u+at+F*(st+1),W=u+(at+1)+F*(st+1),xt=u+(at+1)+F*st;l.push(Vt,Pt,xt),l.push(Pt,W,xt),j+=6}a.addGroup(d,j,M),d+=j,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Eo=class i extends ve{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,x=n*2+r,A=s+1,v=new U,p=new U;for(let y=0;y<=x;y++){let C=0,_=0,R=0,E=0;if(y<=n){let M=y/n,T=M*Math.PI/2;_=-h-t*Math.cos(T),R=t*Math.sin(T),E=-t*Math.cos(T),C=M*f}else if(y<=n+r){let M=(y-n)/r;_=-h+M*e,R=t,E=0,C=f+M*u}else{let M=(y-n-r)/n,T=M*Math.PI/2;_=h+t*Math.sin(T),R=t*Math.cos(T),E=t*Math.sin(T),C=f+u+M*f}let b=Math.max(0,Math.min(1,C/d)),m=0;y===0?m=.5/s:y===x&&(m=-.5/s);for(let M=0;M<=s;M++){let T=M/s,I=T*Math.PI*2,D=Math.sin(I),N=Math.cos(I);p.x=-R*N,p.y=_,p.z=R*D,a.push(p.x,p.y,p.z),v.set(-R*N,E,R*D),v.normalize(),l.push(v.x,v.y,v.z),c.push(T+m,b)}if(y>0){let M=(y-1)*A;for(let T=0;T<s;T++){let I=M+T,D=M+T+1,N=y*A+T,L=y*A+T+1;o.push(I,D,N),o.push(D,L,N)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},wo=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new Rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},We=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,A=[],v=n/2,p=0;y(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function y(){let _=new U,R=new U,E=0,b=(e-t)/n;for(let m=0;m<=r;m++){let M=[],T=m/r,I=T*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,L=N*l+a,F=Math.sin(L),q=Math.cos(L);R.x=I*F,R.y=-T*n+v,R.z=I*q,f.push(R.x,R.y,R.z),_.set(F,b,q).normalize(),u.push(_.x,_.y,_.z),d.push(N,1-T),M.push(x++)}A.push(M)}for(let m=0;m<s;m++)for(let M=0;M<r;M++){let T=A[M][m],I=A[M+1][m],D=A[M+1][m+1],N=A[M][m+1];(t>0||M!==0)&&(h.push(T,I,N),E+=3),(e>0||M!==r-1)&&(h.push(I,D,N),E+=3)}c.addGroup(p,E,0),p+=E}function C(_){let R=x,E=new Rt,b=new U,m=0,M=_===!0?t:e,T=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,v*T,0),u.push(0,T,0),d.push(.5,.5),x++;let I=x;for(let D=0;D<=s;D++){let L=D/s*l+a,F=Math.cos(L),q=Math.sin(L);b.x=M*q,b.y=v*T,b.z=M*F,f.push(b.x,b.y,b.z),u.push(0,T,0),E.x=F*.5+.5,E.y=q*.5*T+.5,d.push(E.x,E.y),x++}for(let D=0;D<s;D++){let N=R+D,L=I+D;_===!0?h.push(L,L+1,N):h.push(L+1,L,N),m+=3}c.addGroup(p,m,_===!0?1:2),p+=m}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bn=class i extends We{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},To=class i extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let C=new U,_=new U,R=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],C),d(e[E+1],_),d(e[E+2],R),l(C,_,R,y)}function l(y,C,_,R){let E=R+1,b=[];for(let m=0;m<=E;m++){b[m]=[];let M=y.clone().lerp(_,m/E),T=C.clone().lerp(_,m/E),I=E-m;for(let D=0;D<=I;D++)D===0&&m===E?b[m][D]=M:b[m][D]=M.clone().lerp(T,D/I)}for(let m=0;m<E;m++)for(let M=0;M<2*(E-m)-1;M++){let T=Math.floor(M/2);M%2===0?(u(b[m][T+1]),u(b[m+1][T]),u(b[m][T])):(u(b[m][T+1]),u(b[m+1][T+1]),u(b[m+1][T]))}}function c(y){let C=new U;for(let _=0;_<r.length;_+=3)C.x=r[_+0],C.y=r[_+1],C.z=r[_+2],C.normalize().multiplyScalar(y),r[_+0]=C.x,r[_+1]=C.y,r[_+2]=C.z}function h(){let y=new U;for(let C=0;C<r.length;C+=3){y.x=r[C+0],y.y=r[C+1],y.z=r[C+2];let _=v(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(_,1-R)}x(),f()}function f(){for(let y=0;y<o.length;y+=6){let C=o[y+0],_=o[y+2],R=o[y+4],E=Math.max(C,_,R),b=Math.min(C,_,R);E>.9&&b<.1&&(C<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,C){let _=y*3;C.x=t[_+0],C.y=t[_+1],C.z=t[_+2]}function x(){let y=new U,C=new U,_=new U,R=new U,E=new Rt,b=new Rt,m=new Rt;for(let M=0,T=0;M<r.length;M+=9,T+=6){y.set(r[M+0],r[M+1],r[M+2]),C.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),E.set(o[T+0],o[T+1]),b.set(o[T+2],o[T+3]),m.set(o[T+4],o[T+5]),R.copy(y).add(C).add(_).divideScalar(3);let I=v(R);A(E,T+0,y,I),A(b,T+2,C,I),A(m,T+4,_,I)}}function A(y,C,_,R){R<0&&y.x===1&&(o[C]=y.x-1),_.x===0&&_.z===0&&(o[C]=R/2/Math.PI+.5)}function v(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ao=class i extends To{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Rt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new ae;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vl=class extends Sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var fd=new U,pd=new U,mh=new Kh,gh=new Kh,xh=new Kh,zi=class extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pd.subVectors(s[0],s[1]).add(s[0]),c=pd);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),A=Math.pow(f.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);A<1e-4&&(A=1),x<1e-4&&(x=A),v<1e-4&&(v=A),mh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,A,v),gh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,A,v),xh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,A,v)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),gh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),xh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(mh.calc(l),gh.calc(l),xh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function md(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function gm(i,t){let e=1-i;return e*e*t}function xm(i,t){return 2*(1-i)*i*t}function vm(i,t){return i*i*t}function co(i,t,e,n){return gm(i,t)+xm(i,e)+vm(i,n)}function _m(i,t){let e=1-i;return e*e*e*t}function ym(i,t){let e=1-i;return 3*e*e*i*t}function Mm(i,t){return 3*(1-i)*i*i*t}function Sm(i,t){return i*i*i*t}function ho(i,t,e,n,s){return _m(i,t)+ym(i,e)+Mm(i,n)+Sm(i,s)}var Ro=class extends Jn{constructor(t=new Rt,e=new Rt,n=new Rt,s=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends Jn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y),ho(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends Jn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},As=class extends Jn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends Jn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(co(t,s.x,r.x,o.x),co(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ei=class extends Jn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(co(t,s.x,r.x,o.x),co(t,s.y,r.y,o.y),co(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(md(a,l.x,c.x,h.x,f.x),md(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}},_l=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:zi,CubicBezierCurve:Ro,CubicBezierCurve3:br,EllipseCurve:Sr,LineCurve:Co,LineCurve3:As,QuadraticBezierCurve:Po,QuadraticBezierCurve3:ei,SplineCurve:Io}),yl=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new _l[s.type]().fromJSON(s))}return this}},Lo=class extends yl{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Co(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Po(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ro(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s),new Rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Sr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Er=class extends Lo{constructor(t){super(t),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Lo().fromJSON(s))}return this}};function bm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ff(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Rm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){let d=i[u],x=i[u+1];d<a&&(a=d),x<l&&(l=x),d>h&&(h=d),x>f&&(f=x)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Do(r,o,e,a,l,c,0),o}function ff(i,t,e,n,s){let r;if(s===zm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=gd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=gd(o/n|0,i[o],i[o+1],r);return r&&wr(r,r.next)&&(No(r),r=r.next),r}function Rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wr(e,e.next)||Xe(e.prev,e,e.next)===0)){if(No(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Do(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Dm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?wm(i,n,s,r):Em(i)){t.push(l.i,i.i,c.i),No(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Tm(Rs(i),t),Do(i,t,e,n,s,r,2)):o===2&&Am(i,t,e,n,s,r):Do(Rs(i),t,e,n,s,r,1);break}}}function Em(i){let t=i.prev,e=i,n=i.next;if(Xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&oo(s,a,r,l,o,c,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function wm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),x=Math.min(h,f,u),A=Math.max(a,l,c),v=Math.max(h,f,u),p=Th(d,x,t,e,n),y=Th(A,v,t,e,n),C=i.prevZ,_=i.nextZ;for(;C&&C.z>=p&&_&&_.z<=y;){if(C.x>=d&&C.x<=A&&C.y>=x&&C.y<=v&&C!==s&&C!==o&&oo(a,h,l,f,c,u,C.x,C.y)&&Xe(C.prev,C,C.next)>=0||(C=C.prevZ,_.x>=d&&_.x<=A&&_.y>=x&&_.y<=v&&_!==s&&_!==o&&oo(a,h,l,f,c,u,_.x,_.y)&&Xe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;C&&C.z>=p;){if(C.x>=d&&C.x<=A&&C.y>=x&&C.y<=v&&C!==s&&C!==o&&oo(a,h,l,f,c,u,C.x,C.y)&&Xe(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=A&&_.y>=x&&_.y<=v&&_!==s&&_!==o&&oo(a,h,l,f,c,u,_.x,_.y)&&Xe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Tm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!wr(n,s)&&mf(n,e,e.next,s)&&Uo(n,s)&&Uo(s,n)&&(t.push(n.i,e.i,s.i),No(e),No(e.next),e=i=s),e=e.next}while(e!==i);return Rs(e)}function Am(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fm(o,a)){let l=gf(o,a);o=Rs(o,o.next),l=Rs(l,l.next),Do(o,t,e,n,s,r,0),Do(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ff(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Nm(c))}s.sort(Cm);for(let r=0;r<s.length;r++)e=Pm(s[r],e);return e}function Cm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Pm(i,t){let e=Im(i,t);if(!e)return t;let n=gf(e,i);return Rs(n,n.next),Rs(e,e.next)}function Im(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(wr(i,e))return e;do{if(wr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Uo(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Lm(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Lm(i,t){return Xe(i.prev,i,t.prev)<0&&Xe(t.next,i,i.next)<0}function Dm(i,t,e,n){let s=i;do s.z===0&&(s.z=Th(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Um(s)}function Um(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Th(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Nm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function oo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&pf(i,t,e,n,s,r,o,a)}function Fm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bm(i,t)&&(Uo(i,t)&&Uo(t,i)&&Om(i,t)&&(Xe(i.prev,i,t.prev)||Xe(i,t.prev,t))||wr(i,t)&&Xe(i.prev,i,i.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wr(i,t){return i.x===t.x&&i.y===t.y}function mf(i,t,e,n){let s=Ka(Xe(i,t,e)),r=Ka(Xe(i,t,n)),o=Ka(Xe(e,n,i)),a=Ka(Xe(e,n,t));return!!(s!==r&&o!==a||s===0&&$a(i,e,t)||r===0&&$a(i,n,t)||o===0&&$a(e,i,n)||a===0&&$a(e,t,n))}function $a(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ka(i){return i>0?1:i<0?-1:0}function Bm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Uo(i,t){return Xe(i.prev,i,i.next)<0?Xe(i,t,i.next)>=0&&Xe(i,i.prev,t)>=0:Xe(i,t,i.prev)<0||Xe(i,i.next,t)<0}function Om(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gf(i,t){let e=Ah(i.i,i.x,i.y),n=Ah(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gd(i,t,e,n){let s=Ah(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function No(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ah(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Rh=class{static triangulate(t,e,n=2){return bm(t,e,n)}},bs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];xd(t),vd(n,t);let o=t.length;e.forEach(xd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vd(n,e[l]);let a=Rh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Fo=class i extends ve{constructor(t=new Er([new Rt(.5,.5),new Rt(-.5,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Hm,C,_=!1,R,E,b,m;if(p){C=p.getSpacedPoints(h),_=!0,u=!1;let dt=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(h,dt),E=new U,b=new U,m=new U}u||(v=0,d=0,x=0,A=0);let M=a.extractPoints(c),T=M.shape,I=M.holes;if(!bs.isClockWise(T)){T=T.reverse();for(let dt=0,ut=I.length;dt<ut;dt++){let mt=I[dt];bs.isClockWise(mt)&&(I[dt]=mt.reverse())}}function N(dt){let mt=10000000000000001e-36,gt=dt[0];for(let _t=1;_t<=dt.length;_t++){let At=_t%dt.length,Dt=dt[At],H=Dt.x-gt.x,Z=Dt.y-gt.y,P=H*H+Z*Z,K=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(gt.x),Math.abs(gt.y)),J=mt*K*K;if(P<=J){dt.splice(At,1),_t--;continue}gt=Dt}}N(T),I.forEach(N);let L=I.length,F=T;for(let dt=0;dt<L;dt++){let ut=I[dt];T=T.concat(ut)}function q(dt,ut,mt){return ut||oe("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(ut,mt)}let G=T.length;function j(dt,ut,mt){let gt,_t,At,Dt=dt.x-ut.x,H=dt.y-ut.y,Z=mt.x-dt.x,P=mt.y-dt.y,K=Dt*Dt+H*H,J=Dt*P-H*Z;if(Math.abs(J)>Number.EPSILON){let S=Math.sqrt(K),g=Math.sqrt(Z*Z+P*P),B=ut.x-H/S,V=ut.y+Dt/S,Q=mt.x-P/g,yt=mt.y+Z/g,ft=((Q-B)*P-(yt-V)*Z)/(Dt*P-H*Z);gt=B+Dt*ft-dt.x,_t=V+H*ft-dt.y;let $=gt*gt+_t*_t;if($<=2)return new Rt(gt,_t);At=Math.sqrt($/2)}else{let S=!1;Dt>Number.EPSILON?Z>Number.EPSILON&&(S=!0):Dt<-Number.EPSILON?Z<-Number.EPSILON&&(S=!0):Math.sign(H)===Math.sign(P)&&(S=!0),S?(gt=-H,_t=Dt,At=Math.sqrt(K)):(gt=Dt,_t=H,At=Math.sqrt(K/2))}return new Rt(gt/At,_t/At)}let k=[];for(let dt=0,ut=F.length,mt=ut-1,gt=dt+1;dt<ut;dt++,mt++,gt++)mt===ut&&(mt=0),gt===ut&&(gt=0),k[dt]=j(F[dt],F[mt],F[gt]);let st=[],at,Vt=k.concat();for(let dt=0,ut=L;dt<ut;dt++){let mt=I[dt];at=[];for(let gt=0,_t=mt.length,At=_t-1,Dt=gt+1;gt<_t;gt++,At++,Dt++)At===_t&&(At=0),Dt===_t&&(Dt=0),at[gt]=j(mt[gt],mt[At],mt[Dt]);st.push(at),Vt=Vt.concat(at)}let Pt;if(v===0)Pt=bs.triangulateShape(F,I);else{let dt=[],ut=[];for(let mt=0;mt<v;mt++){let gt=mt/v,_t=d*Math.cos(gt*Math.PI/2),At=x*Math.sin(gt*Math.PI/2)+A;for(let Dt=0,H=F.length;Dt<H;Dt++){let Z=q(F[Dt],k[Dt],At);ht(Z.x,Z.y,-_t),gt===0&&dt.push(Z)}for(let Dt=0,H=L;Dt<H;Dt++){let Z=I[Dt];at=st[Dt];let P=[];for(let K=0,J=Z.length;K<J;K++){let S=q(Z[K],at[K],At);ht(S.x,S.y,-_t),gt===0&&P.push(S)}gt===0&&ut.push(P)}}Pt=bs.triangulateShape(dt,ut)}let W=Pt.length,xt=x+A;for(let dt=0;dt<G;dt++){let ut=u?q(T[dt],Vt[dt],xt):T[dt];_?(b.copy(R.normals[0]).multiplyScalar(ut.x),E.copy(R.binormals[0]).multiplyScalar(ut.y),m.copy(C[0]).add(b).add(E),ht(m.x,m.y,m.z)):ht(ut.x,ut.y,0)}for(let dt=1;dt<=h;dt++)for(let ut=0;ut<G;ut++){let mt=u?q(T[ut],Vt[ut],xt):T[ut];_?(b.copy(R.normals[dt]).multiplyScalar(mt.x),E.copy(R.binormals[dt]).multiplyScalar(mt.y),m.copy(C[dt]).add(b).add(E),ht(m.x,m.y,m.z)):ht(mt.x,mt.y,f/h*dt)}for(let dt=v-1;dt>=0;dt--){let ut=dt/v,mt=d*Math.cos(ut*Math.PI/2),gt=x*Math.sin(ut*Math.PI/2)+A;for(let _t=0,At=F.length;_t<At;_t++){let Dt=q(F[_t],k[_t],gt);ht(Dt.x,Dt.y,f+mt)}for(let _t=0,At=I.length;_t<At;_t++){let Dt=I[_t];at=st[_t];for(let H=0,Z=Dt.length;H<Z;H++){let P=q(Dt[H],at[H],gt);_?ht(P.x,P.y+C[h-1].y,C[h-1].x+mt):ht(P.x,P.y,f+mt)}}}wt(),X();function wt(){let dt=s.length/3;if(u){let ut=0,mt=G*ut;for(let gt=0;gt<W;gt++){let _t=Pt[gt];nt(_t[2]+mt,_t[1]+mt,_t[0]+mt)}ut=h+v*2,mt=G*ut;for(let gt=0;gt<W;gt++){let _t=Pt[gt];nt(_t[0]+mt,_t[1]+mt,_t[2]+mt)}}else{for(let ut=0;ut<W;ut++){let mt=Pt[ut];nt(mt[2],mt[1],mt[0])}for(let ut=0;ut<W;ut++){let mt=Pt[ut];nt(mt[0]+G*h,mt[1]+G*h,mt[2]+G*h)}}n.addGroup(dt,s.length/3-dt,0)}function X(){let dt=s.length/3,ut=0;O(F,ut),ut+=F.length;for(let mt=0,gt=I.length;mt<gt;mt++){let _t=I[mt];O(_t,ut),ut+=_t.length}n.addGroup(dt,s.length/3-dt,1)}function O(dt,ut){let mt=dt.length;for(;--mt>=0;){let gt=mt,_t=mt-1;_t<0&&(_t=dt.length-1);for(let At=0,Dt=h+v*2;At<Dt;At++){let H=G*At,Z=G*(At+1),P=ut+gt+H,K=ut+_t+H,J=ut+_t+Z,S=ut+gt+Z;it(P,K,J,S)}}}function ht(dt,ut,mt){l.push(dt),l.push(ut),l.push(mt)}function nt(dt,ut,mt){Tt(dt),Tt(ut),Tt(mt);let gt=s.length/3,_t=y.generateTopUV(n,s,gt-3,gt-2,gt-1);Ft(_t[0]),Ft(_t[1]),Ft(_t[2])}function it(dt,ut,mt,gt){Tt(dt),Tt(ut),Tt(gt),Tt(ut),Tt(mt),Tt(gt);let _t=s.length/3,At=y.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);Ft(At[0]),Ft(At[1]),Ft(At[3]),Ft(At[1]),Ft(At[2]),Ft(At[3])}function Tt(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function Ft(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _l[s.type]().fromJSON(s)),new i(n,t.options)}},Hm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Rt(r,o),new Rt(a,l),new Rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],x=t[s*3+2],A=t[r*3],v=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Rt(o,1-l),new Rt(c,1-f),new Rt(u,1-x),new Rt(A,1-p)]:[new Rt(a,1-l),new Rt(h,1-f),new Rt(d,1-x),new Rt(v,1-p)]}};function Vm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bo=class i extends To{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ee=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],x=[],A=[],v=[];for(let p=0;p<h;p++){let y=p*u-o;for(let C=0;C<c;C++){let _=C*f-r;x.push(_,-y,0),A.push(0,0,1),v.push(C/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let C=y+c*p,_=y+c*(p+1),R=y+1+c*(p+1),E=y+1+c*p;d.push(C,_,E),d.push(_,R,E)}this.setIndex(d),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(A,3)),this.setAttribute("uv",new ie(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Oo=class i extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new U,x=new Rt;for(let A=0;A<=s;A++){for(let v=0;v<=n;v++){let p=r+v/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}f+=u}for(let A=0;A<s;A++){let v=A*(n+1);for(let p=0;p<n;p++){let y=p+v,C=y,_=y+n+1,R=y+n+2,E=y+1;a.push(C,_,E),a.push(_,R,E)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ye=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,u=new U,d=[],x=[],A=[],v=[];for(let p=0;p<=n;p++){let y=[],C=p/n,_=o+C*a,R=t*Math.cos(_),E=Math.sqrt(t*t-R*R),b=0;p===0&&o===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let m=0;m<=e;m++){let M=m/e,T=s+M*r;f.x=-E*Math.cos(T),f.y=R,f.z=E*Math.sin(T),x.push(f.x,f.y,f.z),u.copy(f).normalize(),A.push(u.x,u.y,u.z),v.push(M+b,1-C),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let C=h[p][y+1],_=h[p][y],R=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&d.push(C,_,E),(p!==n-1||l<Math.PI)&&d.push(_,R,E)}this.setIndex(d),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(A,3)),this.setAttribute("uv",new ie(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ns=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new U,d=new U,x=new U;for(let A=0;A<=n;A++){let v=o+A/n*a;for(let p=0;p<=s;p++){let y=p/s*r;d.x=(t+e*Math.cos(v))*Math.cos(y),d.y=(t+e*Math.cos(v))*Math.sin(y),d.z=e*Math.sin(v),c.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),f.push(p/s),f.push(A/n)}}for(let A=1;A<=n;A++)for(let v=1;v<=s;v++){let p=(s+1)*A+v-1,y=(s+1)*(A-1)+v-1,C=(s+1)*(A-1)+v,_=(s+1)*A+v;l.push(p,y,_),l.push(y,C,_)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Rn=class i extends ve{constructor(t=new ei(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new Rt,h=new U,f=[],u=[],d=[],x=[];A(),this.setIndex(x),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function A(){for(let C=0;C<e;C++)v(C);v(r===!1?e:0),y(),p()}function v(C){h=t.getPointAt(C/e,h);let _=o.normals[C],R=o.binormals[C];for(let E=0;E<=s;E++){let b=E/s*Math.PI*2,m=Math.sin(b),M=-Math.cos(b);l.x=M*_.x+m*R.x,l.y=M*_.y+m*R.y,l.z=M*_.z+m*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let C=1;C<=e;C++)for(let _=1;_<=s;_++){let R=(s+1)*(C-1)+(_-1),E=(s+1)*C+(_-1),b=(s+1)*C+_,m=(s+1)*(C-1)+_;x.push(R,E,m),x.push(E,b,m)}}function y(){for(let C=0;C<=e;C++)for(let _=0;_<=s;_++)c.x=C/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new _l[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(_d(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_d(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Cn(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function _d(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function km(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var En={clone:Ls,merge:Cn},Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tr=class extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ar=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ml=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sl=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=t,a=2*e-n;break;case Eh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:o=t,l=2*n-e;break;case Eh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),A=x*x,v=A*x,p=-u*v+2*u*A-u*x,y=(1+u)*v+(-1.5-2*u)*A+(-.5+u)*x+1,C=(-1-d)*v+(1.5+d)*A+.5*x,_=d*v-d*A;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+C*o[l+R]+_*o[f+R];return r}},bl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},El=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wl=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-e)/(s-e),A=1-x;for(let v=0;v!==a;++v)r[v]=o[c+v]*A+o[l+v]*x;return r}let u=a*2,d=t-1;for(let x=0;x!==a;++x){let A=o[c+x],v=o[l+x],p=d*u+x*2,y=f[p],C=f[p+1],_=t*u+x*2,R=h[_],E=h[_+1],b=qm(n,e,y,R,s);r[x]=xf(b,A,C,E,v)}return r}};function xf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Xm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=xf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Xm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var $n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sr(e,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sr(t.times,Array),values:sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),vh(t.settings)&&(n.settings={inTangents:sr(t.settings.inTangents,Array),outTangents:sr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case uo:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;vh(this.settings)&&(yd(this.settings.inTangents,t),yd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){oe("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){oe("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Lp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){oe("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let A=e[f+x];if(A!==e[u+x]||A!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,vh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=hl;var ss=class extends $n{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=uo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Tl.prototype.ValueTypeName="color";var Al=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Al.prototype.ValueTypeName="number";var Rl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},zo=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends $n{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=uo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Cl.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vf=new Pl,Il=class{constructor(t){this.manager=t!==void 0?t:vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ho=class extends Rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_h=new ae,Md=new U,Sd=new U,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_h,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===hr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ja=new U,Qa=new en,Si=new U,ko=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ja,Qa,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Qa,Si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ja,Qa,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Qa,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new U,bd=new Rt,Ed=new Rt,ln=class extends ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,bd,Ed),e.subVectors(Ed,bd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ch=class extends Vo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Go=class extends Rr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},os=class extends ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ph=class extends Vo{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var rr=-90,or=1,Ll=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(rr,or,t,e);s.layers=this.layers,this.add(s);let r=new ln(rr,or,t,e);r.layers=this.layers,this.add(r);let o=new ln(rr,or,t,e);o.layers=this.layers,this.add(o);let a=new ln(rr,or,t,e);a.layers=this.layers,this.add(a);let l=new ln(rr,or,t,e);l.layers=this.layers,this.add(l);let c=new ln(rr,or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Dl=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Wo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ym.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ym(){this._document.hidden===!1&&this.reset()}var Qh="\\[\\]\\.:\\/",Zm=new RegExp("["+Qh+"]","g"),tu="[^"+Qh+"]",Jm="[^"+Qh.replace("\\.","")+"]",$m=/((?:WC+[\/:])*)/.source.replace("WC",tu),Km=/(WCOD+)?/.source.replace("WCOD",Jm),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),Qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),t0=new RegExp("^"+$m+Km+jm+Qm+"$"),e0=["material","materials","bones","map"],Ih=class{constructor(t,e,n){let s=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zm,"")}static parseTrackName(t){let e=t0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);e0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Ih;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wy=new Float32Array(1);var wd=new ae,Xo=class{constructor(t,e,n=0,s=1/0){this.ray=new Qi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(t,e=!0,n=[]){return Lh(t,this,n,e),n.sort(Td),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Lh(t[s],this,n,e);return n.sort(Td),n}};function Td(i,t){return i.distance-t.distance}function Lh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],t,e,!0)}}var Dh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function eu(i,t,e,n){let s=n0(n);switch(e){case Xh:return i*t;case Vl:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case us:return i*t*2/s.components*s.byteLength;case Gl:return i*t*2/s.components*s.byteLength;case qh:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Wl:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:case Zl:return Math.max(i,16)*Math.max(t,8)/4;case Xl:case Yl:return Math.max(i,8)*Math.max(t,8)/2;case Jl:case $l:case jl:case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kl:case ra:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mc:case gc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oa:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n0(i){switch(i){case Gn:case Vh:return{byteLength:1,components:1};case Ir:case kh:case qe:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case fi:case Ol:case Kn:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function c0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],A=f[d];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++u,f[u]=A)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let A=f[d];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:d0,alphamap_pars_fragment:f0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:x0,batching_pars_vertex:v0,batching_vertex:_0,begin_vertex:y0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:b0,bumpmap_pars_fragment:E0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:I0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:N0,displacementmap_pars_vertex:F0,displacementmap_vertex:B0,emissivemap_fragment:O0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:V0,envmap_fragment:k0,envmap_common_pars_fragment:G0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:ng,envmap_vertex:q0,fog_vertex:Y0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:$0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:j0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ig,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:hg,lights_fragment_end:ug,lightprobes_pars_fragment:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:xg,map_pars_fragment:vg,map_particle_fragment:_g,map_particle_pars_fragment:yg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:bg,morphcolor_vertex:Eg,morphnormal_vertex:wg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Ig,normal_vertex:Lg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Bg,opaque_fragment:Og,packing:zg,premultiplied_alpha_fragment:Hg,project_vertex:Vg,dithering_fragment:kg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:$g,skinning_pars_vertex:Kg,skinning_vertex:jg,skinnormal_vertex:Qg,specularmap_fragment:tx,specularmap_pars_fragment:ex,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:rx,uv_pars_fragment:ox,uv_pars_vertex:ax,uv_vertex:lx,worldpos_vertex:cx,background_vert:hx,background_frag:ux,backgroundCube_vert:dx,backgroundCube_frag:fx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:xx,distance_vert:vx,distance_frag:_x,equirect_vert:yx,equirect_frag:Mx,linedashed_vert:Sx,linedashed_frag:bx,meshbasic_vert:Ex,meshbasic_frag:wx,meshlambert_vert:Tx,meshlambert_frag:Ax,meshmatcap_vert:Rx,meshmatcap_frag:Cx,meshnormal_vert:Px,meshnormal_frag:Ix,meshphong_vert:Lx,meshphong_frag:Dx,meshphysical_vert:Ux,meshphysical_frag:Nx,meshtoon_vert:Fx,meshtoon_frag:Bx,points_vert:Ox,points_frag:zx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:kx,sprite_frag:Gx},Gt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Pi={basic:{uniforms:Cn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Cn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Cn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Cn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Cn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Cn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Cn([Gt.points,Gt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Cn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Cn([Gt.common,Gt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Cn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Cn([Gt.sprite,Gt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Cn([Gt.common,Gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Cn([Gt.lights,Gt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Pi.physical={uniforms:Cn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Ec={r:0,b:0,g:0},Wx=new ae,Vf=new le;Vf.set(-1,0,0,0,1,0,0,0,1);function Xx(i,t,e,n,s,r){let o=new Ut(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){let _=y.backgroundBlurriness>0;C=t.get(C,_)}return C}function x(y){let C=!1,_=d(y);_===null?v(o,a):_&&_.isColor&&(v(_,1),C=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(y,C){let _=d(C);_&&(_.isCubeTexture||_.mapping===Qo)?(c===void 0&&(c=new Bt(new pe(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Ls(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(C.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vf),c.material.toneMapped=ge.getTransfer(_.colorSpace)!==Re,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Bt(new Ee(2,2),new Ae({name:"BackgroundMaterial",uniforms:Ls(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ge.getTransfer(_.colorSpace)!==Re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function v(y,C){y.getRGB(Ec,jh(i)),e.buffers.color.setClear(Ec.r,Ec.g,Ec.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,C=1){o.set(y),a=C,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,v(o,a)},render:x,addToRenderList:A,dispose:p}}function qx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,D,N,L,F){let q=!1,G=f(I,L,N,D);r!==G&&(r=G,c(r.object)),q=d(I,L,N,F),q&&x(I,L,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(I,D,N,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,D,N,L){let F=L.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let G=I.isInstancedMesh===!0?I.id:0,j=q[G];j===void 0&&(j={},q[G]=j);let k=j[N.id];k===void 0&&(k={},j[N.id]=k);let st=k[F];return st===void 0&&(st=u(l()),k[F]=st),st}function u(I){let D=[],N=[],L=[];for(let F=0;F<e;F++)D[F]=0,N[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,D,N,L){let F=r.attributes,q=D.attributes,G=0,j=N.getAttributes();for(let k in j)if(j[k].location>=0){let at=F[k],Vt=q[k];if(Vt===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(Vt=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(Vt=I.instanceColor)),at===void 0||at.attribute!==Vt||Vt&&at.data!==Vt.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function x(I,D,N,L){let F={},q=D.attributes,G=0,j=N.getAttributes();for(let k in j)if(j[k].location>=0){let at=q[k];at===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));let Vt={};Vt.attribute=at,at&&at.data&&(Vt.data=at.data),F[k]=Vt,G++}r.attributes=F,r.attributesNum=G,r.index=L}function A(){let I=r.newAttributes;for(let D=0,N=I.length;D<N;D++)I[D]=0}function v(I){p(I,0)}function p(I,D){let N=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;N[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),F[I]!==D&&(i.vertexAttribDivisor(I,D),F[I]=D)}function y(){let I=r.newAttributes,D=r.enabledAttributes;for(let N=0,L=D.length;N<L;N++)D[N]!==I[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function C(I,D,N,L,F,q,G){G===!0?i.vertexAttribIPointer(I,D,N,F,q):i.vertexAttribPointer(I,D,N,L,F,q)}function _(I,D,N,L){A();let F=L.attributes,q=N.getAttributes(),G=D.defaultAttributeValues;for(let j in q){let k=q[j];if(k.location>=0){let st=F[j];if(st===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),st!==void 0){let at=st.normalized,Vt=st.itemSize,Pt=t.get(st);if(Pt===void 0)continue;let W=Pt.buffer,xt=Pt.type,wt=Pt.bytesPerElement,X=xt===i.INT||xt===i.UNSIGNED_INT||st.gpuType===Ol;if(st.isInterleavedBufferAttribute){let O=st.data,ht=O.stride,nt=st.offset;if(O.isInstancedInterleavedBuffer){for(let it=0;it<k.locationSize;it++)p(k.location+it,O.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let it=0;it<k.locationSize;it++)v(k.location+it);i.bindBuffer(i.ARRAY_BUFFER,W);for(let it=0;it<k.locationSize;it++)C(k.location+it,Vt/k.locationSize,xt,at,ht*wt,(nt+Vt/k.locationSize*it)*wt,X)}else{if(st.isInstancedBufferAttribute){for(let O=0;O<k.locationSize;O++)p(k.location+O,st.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let O=0;O<k.locationSize;O++)v(k.location+O);i.bindBuffer(i.ARRAY_BUFFER,W);for(let O=0;O<k.locationSize;O++)C(k.location+O,Vt/k.locationSize,xt,at,Vt*wt,Vt/k.locationSize*O*wt,X)}}else if(G!==void 0){let at=G[j];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(k.location,at);break;case 3:i.vertexAttrib3fv(k.location,at);break;case 4:i.vertexAttrib4fv(k.location,at);break;default:i.vertexAttrib1fv(k.location,at)}}}}y()}function R(){M();for(let I in n){let D=n[I];for(let N in D){let L=D[N];for(let F in L){let q=L[F];for(let G in q)h(q[G].object),delete q[G];delete L[F]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let N in D){let L=D[N];for(let F in L){let q=L[F];for(let G in q)h(q[G].object),delete q[G];delete L[F]}}delete n[I.id]}function b(I){for(let D in n){let N=n[D];for(let L in N){let F=N[L];if(F[I.id]===void 0)continue;let q=F[I.id];for(let G in q)h(q[G].object),delete q[G];delete F[I.id]}}}function m(I){for(let D in n){let N=n[D],L=I.isInstancedMesh===!0?I.id:0,F=N[L];if(F!==void 0){for(let q in F){let G=F[q];for(let j in G)h(G[j].object),delete G[j];delete F[q]}delete N[L],Object.keys(N).length===0&&delete n[D]}}}function M(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:m,releaseStatesOfProgram:b,initAttributes:A,enableAttribute:v,disableUnusedAttributes:y}}function Yx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Zx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==jn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let m=b===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Gn&&b!==Kn&&!m&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:_,maxSamples:R,samples:E}}function Jx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Zn,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,A=f.clipIntersection,v=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!v)r?h(null):c();else{let y=r?0:n,C=y*4,_=p.clippingState||null;l.value=_,_=h(x,u,C,d);for(let R=0;R!==C;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,x){let A=f!==null?f.length:0,v=null;if(A!==0){if(v=l.value,x!==!0||v===null){let p=d+A*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(v===null||v.length<p)&&(v=new Float32Array(p));for(let C=0,_=d;C!==A;++C,_+=4)o.copy(f[C]).applyMatrix4(y,a),o.normal.toArray(v,_),v[_+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,v}}var Ur=4,$x=6,Kx=20,jx=256,aa=new os,_f=new Ut,nu=null,iu=0,su=0,ru=!1,Qx=new U,Ds=new U,Fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Qx}=r;nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:qe,format:jn,colorSpace:fo,depthBuffer:!1},s=yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tv(r)),this._blurMaterial=nv(r,t,e),this._ggxMaterial=ev(r,t,e)}return s}_compileMaterial(t){let e=new Bt(new ve,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s,r){let l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(_f),f.toneMapping=di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new pe,new Be({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,v=A.material,p=!1,y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,p=!0):(v.color.copy(_f),p=!0);for(let C=0;C<6;C++){let _=C%3;_===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):_===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let R=this._cubeSize;Dr(s,_*R,C>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(A,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:x}=this,A=this._sizeLods[n],v=3*A*(n>x-Ur?n-x+Ur:0),p=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-e,Dr(r,v,p,3*A,2*A),s.setRenderTarget(r),s.render(a,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Dr(t,v,p,3*A,2*A),s.setRenderTarget(t),s.render(a,aa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ur?s-this._lodMax+Ur:0),u=4*(this._cubeSize-h);Dr(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,aa)}};function tv(i){let t=[],e=[],n=i,s=i-Ur+1+$x;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,x=new Float32Array(d*u*f),A=new Float32Array(d*u*f);for(let p=0;p<f;p++){let y=p%3*2/3-1,C=p>2?0:-1,_=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(_,d*u*p);for(let R=0;R<u;R++){let E=h[R*2]*2-1,b=h[R*2+1]*2-1;p===0?Ds.set(1,b,E):p===1?Ds.set(-E,1,-b):p===2?Ds.set(-E,b,1):p===3?Ds.set(-1,b,-E):p===4?Ds.set(-E,-1,b):Ds.set(E,b,-1),Ds.toArray(A,(p*u+R)*d)}}let v=new ve;v.setAttribute("position",new cn(x,d)),v.setAttribute("outputDirection",new cn(A,d)),e.push(new Bt(v,null)),n>Ur&&n--}return{lodMeshes:e,sizeLods:t}}function yf(i,t,e){let n=new Ve(i,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ev(i,t,e){return new Ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nv(i,t,e){return new Ae({name:"SphericalGaussianBlur",defines:{SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Mf(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Sf(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tc=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pe(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ni});r.uniforms.tEquirect.value=e;let o=new Bt(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=hn),new Ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function iv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Nl||d===Fl)if(t.has(u)){let x=t.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let A=new Tc(x.height);return A.fromEquirectangularTexture(i,u),t.set(u,A),u.addEventListener("dispose",c),a(A.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,x=d===Nl||d===Fl,A=d===ls||d===Is;if(x||A){let v=e.get(u),p=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Fr(i)),v=x?n.fromEquirectangular(u,v):n.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,e.set(u,v),v.texture;if(v!==void 0)return v.texture;{let y=u.image;return x&&y&&y.height>0||A&&y&&l(y)?(n===null&&(n=new Fr(i)),v=x?n.fromEquirectangular(u):n.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,e.set(u,v),u.addEventListener("dispose",h),v.texture):null}}}return u}function a(u,d){return d===Nl?u.mapping=ls:d===Fl&&(u.mapping=Is),u}function l(u){let d=0,x=6;for(let A=0;A<x;A++)u[A]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function sv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function rv(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,x=f.attributes.position,A=0;if(x===void 0)return;if(d!==null){let y=d.array;A=d.version;for(let C=0,_=y.length;C<_;C+=3){let R=y[C+0],E=y[C+1],b=y[C+2];u.push(R,E,E,b,b,R)}}else{let y=x.array;A=x.version;for(let C=0,_=y.length/3-1;C<_;C+=3){let R=C+0,E=C+1,b=C+2;u.push(R,E,E,b,b,R)}}let v=new(x.count>=65535?vo:Ts)(u,1);v.version=A;let p=r.get(f);p&&t.remove(p),r.set(f,v)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function ov(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let A=0;for(let v=0;v<d;v++)A+=u[v];e.update(A,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function av(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lv(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],C=0;d===!0&&(C=1),x===!0&&(C=2),A===!0&&(C=3);let _=a.attributes.position.count*C,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*R*4*f),b=new go(E,_,R,f);b.type=Kn,b.needsUpdate=!0;let m=C*4;for(let T=0;T<f;T++){let I=v[T],D=p[T],N=y[T],L=_*R*4*T;for(let F=0;F<I.count;F++){let q=F*m;d===!0&&(s.fromBufferAttribute(I,F),E[L+q+0]=s.x,E[L+q+1]=s.y,E[L+q+2]=s.z,E[L+q+3]=0),x===!0&&(s.fromBufferAttribute(D,F),E[L+q+4]=s.x,E[L+q+5]=s.y,E[L+q+6]=s.z,E[L+q+7]=0),A===!0&&(s.fromBufferAttribute(N,F),E[L+q+8]=s.x,E[L+q+9]=s.y,E[L+q+10]=s.z,E[L+q+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:b,size:new Rt(_,R)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let A=0;A<c.length;A++)d+=c[A];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cv(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var hv={[Yo]:"LINEAR_TONE_MAPPING",[Zo]:"REINHARD_TONE_MAPPING",[Jo]:"CINEON_TONE_MAPPING",[Ps]:"ACES_FILMIC_TONE_MAPPING",[Ko]:"AGX_TONE_MAPPING",[jo]:"NEUTRAL_TONE_MAPPING",[$o]:"CUSTOM_TONE_MAPPING"};function uv(i,t,e,n,s,r){let o=new Ve(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ve;c.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ie([0,2,0,0,2,0],2));let h=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(c,h),u=new os(-1,1,1,-1,0,1),d=null,x=null,A=!1,v,p=null,y=[],C=!1;this.setSize=function(_,R){o.setSize(_,R),a!==null&&a.setSize(_,R),l!==null&&l.setSize(_,R);for(let E=0;E<y.length;E++){let b=y[E];b.setSize&&b.setSize(_,R)}},this.setEffects=function(_){y=_,C=y.length>0&&y[0].isRenderPass===!0;let R=o.width,E=o.height;y.length>0&&a===null&&(a=new Ve(R,E,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Ve(R,E,{type:qe,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<y.length;b++){let m=y[b];m.setSize&&m.setSize(R,E)}},this.begin=function(_,R){if(A||_.toneMapping===di&&y.length===0)return!1;if(p=R,R!==null){let E=R.width,b=R.height;(o.width!==E||o.height!==b)&&this.setSize(E,b)}return C===!1&&_.setRenderTarget(o),v=_.toneMapping,_.toneMapping=di,!0},this.hasRenderPass=function(){return C},this.end=function(_,R){_.toneMapping=v,A=!0;let E=o,b=a;for(let m=0;m<y.length;m++){let M=y[m];M.enabled!==!1&&(M.render(_,b,E,R),M.needsSwap!==!1&&(E=b,b=b===a?l:a))}if(d!==_.outputColorSpace||x!==_.toneMapping){d=_.outputColorSpace,x=_.toneMapping,h.defines={},ge.getTransfer(d)===Re&&(h.defines.SRGB_TRANSFER="");let m=hv[x];m&&(h.defines[m]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(f,u),p=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var kf=new Dn,lu=new es(1,1),Gf=new go,Wf=new fl,Xf=new So,bf=[],Ef=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cc(i,t){let e=Ef[t];e===void 0&&(e=new Int32Array(t),Ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function gv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),fn(e,n)}}function xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),fn(e,n)}}function vv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;wf.set(n),i.uniformMatrix4fv(this.addr,!1,wf),fn(e,n)}}function _v(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function bv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function Av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=e.isReversedDepthBuffer()?bc:Sc,r=lu):r=kf,e.setTexture2D(t||r,s)}function Rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wf,s)}function Cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xf,s)}function Pv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gf,s)}function Iv(i){switch(i){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return vv;case 5124:case 35670:return _v;case 35667:case 35671:return yv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return bv;case 36294:return Ev;case 36295:return wv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Lv(i,t){i.uniform1fv(this.addr,t)}function Dv(i,t){let e=Br(t,this.size,2);i.uniform2fv(this.addr,e)}function Uv(i,t){let e=Br(t,this.size,3);i.uniform3fv(this.addr,e)}function Nv(i,t){let e=Br(t,this.size,4);i.uniform4fv(this.addr,e)}function Fv(i,t){let e=Br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bv(i,t){let e=Br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ov(i,t){let e=Br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zv(i,t){i.uniform1iv(this.addr,t)}function Hv(i,t){i.uniform2iv(this.addr,t)}function Vv(i,t){i.uniform3iv(this.addr,t)}function kv(i,t){i.uniform4iv(this.addr,t)}function Gv(i,t){i.uniform1uiv(this.addr,t)}function Wv(i,t){i.uniform2uiv(this.addr,t)}function Xv(i,t){i.uniform3uiv(this.addr,t)}function qv(i,t){i.uniform4uiv(this.addr,t)}function Yv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lu:o=kf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Zv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wf,r[o])}function Jv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xf,r[o])}function $v(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gf,r[o])}function Kv(i){switch(i){case 5126:return Lv;case 35664:return Dv;case 35665:return Uv;case 35666:return Nv;case 35674:return Fv;case 35675:return Bv;case 35676:return Ov;case 5124:case 35670:return zv;case 35667:case 35671:return Hv;case 35668:case 35672:return Vv;case 35669:case 35673:return kv;case 5125:return Gv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return $v}}var cu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Iv(e.type)}},hu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kv(e.type)}},uu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function Rf(i,t){i.seq.push(t),i.map[t.id]=t}function jv(i,t,e){let n=i.name,s=n.length;for(ou.lastIndex=0;;){let r=ou.exec(n),o=ou.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rf(e,c===void 0?new cu(a,i,t):new hu(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new uu(a),Rf(e,f)),e=f}}}var Nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Cf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qv=37297,t_=0;function e_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Pf=new le;function n_(i){ge._getMatrix(Pf,ge.workingColorSpace,i);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case po:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function If(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+e_(i.getShaderSource(t),a)}else return r}function i_(i,t){let e=n_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var s_={[Yo]:"Linear",[Zo]:"Reinhard",[Jo]:"Cineon",[Ps]:"ACESFilmic",[Ko]:"AgX",[jo]:"Neutral",[$o]:"Custom"};function r_(i,t){let e=s_[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wc=new U;function o_(){ge.getLuminanceCoefficients(wc);let i=wc.x.toFixed(4),t=wc.y.toFixed(4),e=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function l_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ca(i){return i!==""}function Lf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Df(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(i){return i.replace(h_,d_)}var u_=new Map;function d_(i,t){let e=fe[t];if(e===void 0){let n=u_.get(t);if(n!==void 0)e=fe[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return du(e)}var f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(f_,p_)}function p_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var m_={[qo]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function g_(i){return m_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x_={[ls]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function v_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":x_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var __={[Is]:"ENVMAP_MODE_REFRACTION"};function y_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":__[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var M_={[zh]:"ENVMAP_BLENDING_MULTIPLY",[Yd]:"ENVMAP_BLENDING_MIX",[Zd]:"ENVMAP_BLENDING_ADD"};function S_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":M_[i.combine]||"ENVMAP_BLENDING_NONE"}function b_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=g_(e),c=v_(e),h=y_(e),f=S_(e),u=b_(e),d=a_(e),x=l_(r),A=s.createProgram(),v,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ca).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(v=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?fe.tonemapping_pars_fragment:"",e.toneMapping!==di?r_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,i_("linearToOutputTexel",e.outputColorSpace),o_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),o=du(o),o=Lf(o,e),o=Df(o,e),a=du(a),a=Lf(a,e),a=Df(a,e),o=Uf(o),a=Uf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=y+v+o,_=y+p+a,R=Cf(s,s.VERTEX_SHADER,C),E=Cf(s,s.FRAGMENT_SHADER,_);s.attachShader(A,R),s.attachShader(A,E),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function b(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(A)||"",N=s.getShaderInfoLog(R)||"",L=s.getShaderInfoLog(E)||"",F=D.trim(),q=N.trim(),G=L.trim(),j=!0,k=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,R,E);else{let st=If(s,R,"vertex"),at=If(s,E,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+st+`
`+at)}else F!==""?re("WebGLProgram: Program Info Log:",F):(q===""||G==="")&&(k=!1);k&&(I.diagnostics={runnable:j,programLog:F,vertexShader:{log:q,prefix:v},fragmentShader:{log:G,prefix:p}})}s.deleteShader(R),s.deleteShader(E),m=new Nr(s,A),M=c_(s,A)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(A,Qv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=R,this.fragmentShader=E,this}var w_=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pu(t),e.set(t,n)),n}},pu=class{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}};function T_(i){return i===us||i===ra||i===oa}function A_(i,t,e,n,s,r){let o=new pr,a=new fu,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return l.add(m),m===0?"uv":`uv${m}`}function A(m,M,T,I,D,N){let L=I.fog,F=D.geometry,q=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,j=t.get(m.envMap||q,G),k=j&&j.mapping===Qo?j.image.height:null,st=d[m.type];m.precision!==null&&(u=n.getMaxPrecision(m.precision),u!==m.precision&&re("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));let at=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Vt=at!==void 0?at.length:0,Pt=0;F.morphAttributes.position!==void 0&&(Pt=1),F.morphAttributes.normal!==void 0&&(Pt=2),F.morphAttributes.color!==void 0&&(Pt=3);let W,xt,wt,X;if(st){let ce=Pi[st];W=ce.vertexShader,xt=ce.fragmentShader}else{W=m.vertexShader,xt=m.fragmentShader;let ce=a.getVertexShaderStage(m),he=a.getFragmentShaderStage(m);a.update(m,ce,he),wt=ce.id,X=he.id}let O=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),nt=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,Tt=!!m.map,Ft=!!m.matcap,dt=!!j,ut=!!m.aoMap,mt=!!m.lightMap,gt=!!m.bumpMap&&m.wireframe===!1,_t=!!m.normalMap,At=!!m.displacementMap,Dt=!!m.emissiveMap,H=!!m.metalnessMap,Z=!!m.roughnessMap,P=m.anisotropy>0,K=m.clearcoat>0,J=m.dispersion>0,S=m.retroreflectivity>0,g=m.iridescence>0,B=m.sheen>0,V=m.transmission>0,Q=P&&!!m.anisotropyMap,yt=K&&!!m.clearcoatMap,ft=K&&!!m.clearcoatNormalMap,$=K&&!!m.clearcoatRoughnessMap,tt=g&&!!m.iridescenceMap,Mt=g&&!!m.iridescenceThicknessMap,kt=B&&!!m.sheenColorMap,Ct=B&&!!m.sheenRoughnessMap,It=!!m.specularMap,Ot=!!m.specularColorMap,et=!!m.specularIntensityMap,bt=V&&!!m.transmissionMap,z=V&&!!m.thicknessMap,Et=!!m.gradientMap,lt=!!m.alphaMap,St=m.alphaTest>0,Lt=!!m.alphaHash,vt=!!m.extensions,Ht=di;m.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Yt={shaderID:st,shaderType:m.type,shaderName:m.name,vertexShader:W,fragmentShader:xt,defines:m.defines,customVertexShaderID:wt,customFragmentShaderID:X,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:nt,instancingColor:nt&&D.instanceColor!==null,instancingMorph:nt&&D.morphTexture!==null,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Tt,matcap:Ft,envMap:dt,envMapMode:dt&&j.mapping,envMapCubeUVHeight:k,aoMap:ut,lightMap:mt,bumpMap:gt,normalMap:_t,displacementMap:At,emissiveMap:Dt,normalMapObjectSpace:_t&&m.normalMapType===jd,normalMapTangentSpace:_t&&m.normalMapType===Mc,packedNormalMap:_t&&m.normalMapType===Mc&&T_(m.normalMap.format),metalnessMap:H,roughnessMap:Z,anisotropy:P,anisotropyMap:Q,clearcoat:K,clearcoatMap:yt,clearcoatNormalMap:ft,clearcoatRoughnessMap:$,dispersion:J,retroreflection:S,iridescence:g,iridescenceMap:tt,iridescenceThicknessMap:Mt,sheen:B,sheenColorMap:kt,sheenRoughnessMap:Ct,specularMap:It,specularColorMap:Ot,specularIntensityMap:et,transmission:V,transmissionMap:bt,thicknessMap:z,gradientMap:Et,opaque:m.transparent===!1&&m.blending===Pr&&m.alphaToCoverage===!1,alphaMap:lt,alphaTest:St,alphaHash:Lt,combine:m.combine,mapUv:Tt&&x(m.map.channel),aoMapUv:ut&&x(m.aoMap.channel),lightMapUv:mt&&x(m.lightMap.channel),bumpMapUv:gt&&x(m.bumpMap.channel),normalMapUv:_t&&x(m.normalMap.channel),displacementMapUv:At&&x(m.displacementMap.channel),emissiveMapUv:Dt&&x(m.emissiveMap.channel),metalnessMapUv:H&&x(m.metalnessMap.channel),roughnessMapUv:Z&&x(m.roughnessMap.channel),anisotropyMapUv:Q&&x(m.anisotropyMap.channel),clearcoatMapUv:yt&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(m.sheenRoughnessMap.channel),specularMapUv:It&&x(m.specularMap.channel),specularColorMapUv:Ot&&x(m.specularColorMap.channel),specularIntensityMapUv:et&&x(m.specularIntensityMap.channel),transmissionMapUv:bt&&x(m.transmissionMap.channel),thicknessMapUv:z&&x(m.thicknessMap.channel),alphaMapUv:lt&&x(m.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_t||P),vertexNormals:!!F.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Tt||lt),fog:!!L,useFog:m.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||F.attributes.normal===void 0&&_t===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Pt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Tt&&m.map.isVideoTexture===!0&&ge.getTransfer(m.map.colorSpace)===Re,decodeVideoTextureEmissive:Dt&&m.emissiveMap.isVideoTexture===!0&&ge.getTransfer(m.emissiveMap.colorSpace)===Re,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Le,flipSided:m.side===un,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:vt&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&m.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function v(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let T in m.defines)M.push(T),M.push(m.defines[T]);return m.isRawShaderMaterial===!1&&(p(M,m),y(M,m),M.push(i.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function p(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapCubeUVHeight),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.morphAttributeCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function y(m,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function C(m){let M=d[m.type],T;if(M){let I=Pi[M];T=En.clone(I.uniforms)}else T=m.uniforms;return T}function _(m,M){let T=h.get(M);return T!==void 0?++T.usedTimes:(T=new E_(i,M,m,s),c.push(T),h.set(M,T)),T}function R(m){if(--m.usedTimes===0){let M=c.indexOf(m);c[M]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function E(m){a.remove(m)}function b(){a.dispose()}return{getParameters:A,getProgramCacheKey:v,getUniforms:C,acquireProgram:_,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:b}}function R_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,x,A,v,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:x,materialVariant:o(u),groupOrder:A,renderOrder:u.renderOrder,z:v,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=x,y.materialVariant=o(u),y.groupOrder=A,y.renderOrder=u.renderOrder,y.z=v,y.group=p),t++,y}function l(u,d,x,A,v,p,y){y.reversedDepth===!0&&(v=-v);let C=a(u,d,x,A,v,p);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):e.push(C)}function c(u,d,x,A,v,p){let y=a(u,d,x,A,v,p);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||C_),n.length>1&&n.sort(d||Ff),s.length>1&&s.sort(d||Ff)}function f(){for(let u=t,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function P_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bf,i.set(n,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function I_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ut};break;case"SpotLight":e={position:new U,direction:new U,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function L_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var D_=0;function U_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i){let t=new I_,e=L_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ae,o=new ae;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,x=0,A=0,v=0,p=0,y=0,C=0,_=0,R=0,E=0,b=0,m=0,M=0,T=0;c.sort(U_);for(let D=0,N=c.length;D<N;D++){let L=c[D],F=L.color,q=L.intensity,G=L.distance,j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===us?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*q,f+=F.g*q,u+=F.b*q;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],q);T++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[x]=at,n.sunShadowMap[x]=j;let Vt=st.getViewportCount();for(let Pt=0;Pt<Vt;Pt++)n.sunShadowMatrix[A+Pt]=st.getMatrix(Pt),n.sunShadowCascade[A+Pt]=st._cascadeData[Pt];A+=Vt,x++}n.sun[d]=k,d++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.directionalShadow[v]=at,n.directionalShadowMap[v]=j,n.directionalShadowMatrix[v]=L.shadow.matrix,R++}n.directional[v]=k,v++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(F).multiplyScalar(q),k.distance=G,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[y]=k;let st=L.shadow;if(L.map&&(n.spotLightMap[m]=L.map,m++,st.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[y]=st.matrix,L.castShadow){let at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.spotShadow[y]=at,n.spotShadowMap[y]=j,b++}y++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(F).multiplyScalar(q),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=k,C++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let st=L.shadow,at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=L.shadow.matrix,E++}n.point[p]=k,p++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(q),k.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[_]=k,_++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==v||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==C||I.hemiLength!==_||I.numSunShadows!==x||I.numDirectionalShadows!==R||I.numPointShadows!==E||I.numSpotShadows!==b||I.numSpotMaps!==m||I.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=v,n.spot.length=y,n.rectArea.length=C,n.point.length=p,n.hemi.length=_,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+m-M,n.spotLightMap.length=m,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,I.sunLength=d,I.directionalLength=v,I.pointLength=p,I.spotLength=y,I.rectAreaLength=C,I.hemiLength=_,I.numSunShadows=x,I.numDirectionalShadows=R,I.numPointShadows=E,I.numSpotShadows=b,I.numSpotMaps=m,I.numLightProbes=T,n.version=D_++)}function l(c,h){let f=0,u=0,d=0,x=0,A=0,v=0,p=h.matrixWorldInverse;for(let y=0,C=c.length;y<C;y++){let _=c[y];if(_.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(_.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(_.isRectAreaLight){let R=n.rectArea[A];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),A++}else if(_.isPointLight){let R=n.point[d];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let R=n.hemi[v];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Of(i){let t=new N_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function F_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Of(i),t.set(s,[a])):r>=o.length?(a=new Of(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,z_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],H_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],zf=new ae,la=new U,au=new U;function V_(i,t,e){let n=new _r,s=new Rt,r=new Rt,o=new Se,a=new Ar,l=new Ml,c={},h=e.maxTextureSize,f={[Ri]:un,[un]:Ri,[Le]:Le},u=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:B_,fragmentShader:O_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new ve;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Bt(x,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let p=this.type;this.render=function(E,b,m){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;this.type===Ul&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qo);let M=i.getRenderTarget(),T=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&b.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=E.length;L<F;L++){let q=E[L],G=q.shadow;if(G===void 0){re("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=k,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Cr){if(q.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ve(s.x,s.y,{format:us,type:qe,minFilter:hn,magFilter:hn,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new es(s.x,s.y,Kn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Ei,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn}else q.isPointLight?(G.map=new Tc(s.x),G.map.depthTexture=new xl(s.x,fi)):(G.map=new Ve(s.x,s.y),G.map.depthTexture=new es(s.x,s.y,fi)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Ei,this.type===qo?(G.map.depthTexture.compareFunction=k?bc:Sc,G.map.depthTexture.minFilter=hn,G.map.depthTexture.magFilter=hn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let st=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,m);for(let at=0;at<st;at++){let Vt=G.getCamera(at);if(q.isPointLight){let Pt=G.camera,W=G.matrix,xt=q.distance||Pt.far;xt!==Pt.far&&(Pt.far=xt,Pt.updateProjectionMatrix()),la.setFromMatrixPosition(q.matrixWorld),Pt.position.copy(la),au.copy(Pt.position),au.add(z_[at]),Pt.up.copy(H_[at]),Pt.lookAt(au),Pt.updateMatrixWorld(),W.makeTranslation(-la.x,-la.y,-la.z),zf.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(zf,Pt.coordinateSystem,Pt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,at),i.clear();else{at===0&&(i.setRenderTarget(G.map),i.clear());let Pt=G.getViewport(at);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),D.viewport(o)}n=G.getFrustum(at),_(b,m,Vt,q,this.type)}G.isPointLightShadow!==!0&&this.type===Cr&&y(G,m),G.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(M,T,I)};function y(E,b){let m=t.update(A);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ve(s.x,s.y,{format:us,type:qe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,m,u,A,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,m,d,A,null)}function C(E,b,m,M){let T=null,I=m.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)T=I;else if(T=m.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let D=T.uuid,N=b.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let F=L[N];F===void 0&&(F=T.clone(),L[N]=F,b.addEventListener("dispose",R)),T=F}if(T.visible=b.visible,T.wireframe=b.wireframe,M===Cr?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:f[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,m.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=i.properties.get(T);D.light=m}return T}function _(E,b,m,M,T){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Cr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,E.matrixWorld);let N=t.update(E),L=E.material;if(Array.isArray(L)){let F=N.groups;for(let q=0,G=F.length;q<G;q++){let j=F[q],k=L[j.materialIndex];if(k&&k.visible){let st=C(E,k,M,T);E.onBeforeShadow(i,E,b,m,N,st,j),i.renderBufferDirect(m,null,N,st,E,j),E.onAfterShadow(i,E,b,m,N,st,j)}}}else if(L.visible){let F=C(E,L,M,T);E.onBeforeShadow(i,E,b,m,N,F,null),i.renderBufferDirect(m,null,N,F,E,null),E.onAfterShadow(i,E,b,m,N,F,null)}}let D=E.children;for(let N=0,L=D.length;N<L;N++)_(D[N],b,m,M,T)}function R(E){E.target.removeEventListener("dispose",R);for(let m in c){let M=c[m],T=E.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function k_(i,t){function e(){let z=!1,Et=new Se,lt=null,St=new Se(0,0,0,0);return{setMask:function(Lt){lt!==Lt&&!z&&(i.colorMask(Lt,Lt,Lt,Lt),lt=Lt)},setLocked:function(Lt){z=Lt},setClear:function(Lt,vt,Ht,Yt,ce){ce===!0&&(Lt*=Yt,vt*=Yt,Ht*=Yt),Et.set(Lt,vt,Ht,Yt),St.equals(Et)===!1&&(i.clearColor(Lt,vt,Ht,Yt),St.copy(Et))},reset:function(){z=!1,lt=null,St.set(-1,0,0,0)}}}function n(){let z=!1,Et=!1,lt=null,St=null,Lt=null;return{setReversed:function(vt){if(Et!==vt){let Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Et=vt;let Yt=Lt;Lt=null,this.setClear(Yt)}},getReversed:function(){return Et},setTest:function(vt){vt?O(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(vt){lt!==vt&&!z&&(i.depthMask(vt),lt=vt)},setFunc:function(vt){if(Et&&(vt=uf[vt]),St!==vt){switch(vt){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=vt}},setLocked:function(vt){z=vt},setClear:function(vt){Lt!==vt&&(Lt=vt,Et&&(vt=1-vt),i.clearDepth(vt))},reset:function(){z=!1,lt=null,St=null,Lt=null,Et=!1}}}function s(){let z=!1,Et=null,lt=null,St=null,Lt=null,vt=null,Ht=null,Yt=null,ce=null;return{setTest:function(he){z||(he?O(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(he){Et!==he&&!z&&(i.stencilMask(he),Et=he)},setFunc:function(he,$e,mn){(lt!==he||St!==$e||Lt!==mn)&&(i.stencilFunc(he,$e,mn),lt=he,St=$e,Lt=mn)},setOp:function(he,$e,mn){(vt!==he||Ht!==$e||Yt!==mn)&&(i.stencilOp(he,$e,mn),vt=he,Ht=$e,Yt=mn)},setLocked:function(he){z=he},setClear:function(he){ce!==he&&(i.clearStencil(he),ce=he)},reset:function(){z=!1,Et=null,lt=null,St=null,Lt=null,vt=null,Ht=null,Yt=null,ce=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,x=[],A=null,v=!1,p=null,y=null,C=null,_=null,R=null,E=null,b=null,m=new Ut(0,0,0),M=0,T=!1,I=null,D=null,N=null,L=null,F=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=j>=2);let st=null,at={},Vt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),W=new Se().fromArray(Vt),xt=new Se().fromArray(Pt);function wt(z,Et,lt,St){let Lt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(z,vt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<lt;Ht++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Et+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return vt}let X={};X[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(i.DEPTH_TEST),o.setFunc(cr),gt(!1),_t(Uh),O(i.CULL_FACE),ut(ni);function O(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ht(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function nt(z,Et){return u[z]!==Et?(i.bindFramebuffer(z,Et),u[z]=Et,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Et),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function it(z,Et){let lt=x,St=!1;if(z){lt=d.get(Et),lt===void 0&&(lt=[],d.set(Et,lt));let Lt=z.textures;if(lt.length!==Lt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Ht=Lt.length;vt<Ht;vt++)lt[vt]=i.COLOR_ATTACHMENT0+vt;lt.length=Lt.length,St=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,St=!0);St&&i.drawBuffers(lt)}function Tt(z){return A!==z?(i.useProgram(z),A=z,!0):!1}let Ft={[Cs]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};Ft[Ld]=i.MIN,Ft[Dd]=i.MAX;let dt={[Ud]:i.ZERO,[Nd]:i.ONE,[Fd]:i.SRC_COLOR,[Bh]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Bd]:i.ONE_MINUS_SRC_COLOR,[Oh]:i.ONE_MINUS_SRC_ALPHA,[Vd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(z,Et,lt,St,Lt,vt,Ht,Yt,ce,he){if(z===ni){v===!0&&(ht(i.BLEND),v=!1);return}if(v===!1&&(O(i.BLEND),v=!0),z!==Cd){if(z!==p||he!==T){if((y!==Cs||R!==Cs)&&(i.blendEquation(i.FUNC_ADD),y=Cs,R=Cs),he)switch(z){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",z);break}else switch(z){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",z);break}C=null,_=null,E=null,b=null,m.set(0,0,0),M=0,p=z,T=he}return}Lt=Lt||Et,vt=vt||lt,Ht=Ht||St,(Et!==y||Lt!==R)&&(i.blendEquationSeparate(Ft[Et],Ft[Lt]),y=Et,R=Lt),(lt!==C||St!==_||vt!==E||Ht!==b)&&(i.blendFuncSeparate(dt[lt],dt[St],dt[vt],dt[Ht]),C=lt,_=St,E=vt,b=Ht),(Yt.equals(m)===!1||ce!==M)&&(i.blendColor(Yt.r,Yt.g,Yt.b,ce),m.copy(Yt),M=ce),p=z,T=!1}function mt(z,Et){z.side===Le?ht(i.CULL_FACE):O(i.CULL_FACE);let lt=z.side===un;Et&&(lt=!lt),gt(lt),z.blending===Pr&&z.transparent===!1?ut(ni):ut(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let St=z.stencilWrite;a.setTest(St),St&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Dt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(z){I!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),I=z)}function _t(z){z!==Ad?(O(i.CULL_FACE),z!==D&&(z===Uh?i.cullFace(i.BACK):z===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),D=z}function At(z){z!==N&&(G&&i.lineWidth(z),N=z)}function Dt(z,Et,lt){z?(O(i.POLYGON_OFFSET_FILL),(L!==Et||F!==lt)&&(L=Et,F=lt,o.getReversed()&&(Et=-Et),i.polygonOffset(Et,lt))):ht(i.POLYGON_OFFSET_FILL)}function H(z){z?O(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function Z(z){z===void 0&&(z=i.TEXTURE0+q-1),st!==z&&(i.activeTexture(z),st=z)}function P(z,Et,lt){lt===void 0&&(st===null?lt=i.TEXTURE0+q-1:lt=st);let St=at[lt];St===void 0&&(St={type:void 0,texture:void 0},at[lt]=St),(St.type!==z||St.texture!==Et)&&(st!==lt&&(i.activeTexture(lt),st=lt),i.bindTexture(z,Et||X[z]),St.type=z,St.texture=Et)}function K(){let z=at[st];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(z){oe("WebGLState:",z)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(z){oe("WebGLState:",z)}}function g(){try{i.texSubImage2D(...arguments)}catch(z){oe("WebGLState:",z)}}function B(){try{i.texSubImage3D(...arguments)}catch(z){oe("WebGLState:",z)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(z){oe("WebGLState:",z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){oe("WebGLState:",z)}}function yt(){try{i.texStorage2D(...arguments)}catch(z){oe("WebGLState:",z)}}function ft(){try{i.texStorage3D(...arguments)}catch(z){oe("WebGLState:",z)}}function $(){try{i.texImage2D(...arguments)}catch(z){oe("WebGLState:",z)}}function tt(){try{i.texImage3D(...arguments)}catch(z){oe("WebGLState:",z)}}function Mt(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function kt(z,Et){f[z]!==Et&&(i.pixelStorei(z,Et),f[z]=Et)}function Ct(z){W.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),W.copy(z))}function It(z){xt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),xt.copy(z))}function Ot(z,Et){let lt=c.get(Et);lt===void 0&&(lt=new WeakMap,c.set(Et,lt));let St=lt.get(z);St===void 0&&(St=i.getUniformBlockIndex(Et,z.name),lt.set(z,St))}function et(z,Et){let St=c.get(Et).get(z);l.get(Et)!==St&&(i.uniformBlockBinding(Et,St,z.__bindingPointIndex),l.set(Et,St))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},st=null,at={},u={},d=new WeakMap,x=[],A=null,v=!1,p=null,y=null,C=null,_=null,R=null,E=null,b=null,m=new Ut(0,0,0),M=0,T=!1,I=null,D=null,N=null,L=null,F=null,W.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:ht,bindFramebuffer:nt,drawBuffers:it,useProgram:Tt,setBlending:ut,setMaterial:mt,setFlipSided:gt,setCullFace:_t,setLineWidth:At,setPolygonOffset:Dt,setScissorTest:H,activeTexture:Z,bindTexture:P,unbindTexture:K,compressedTexImage2D:J,compressedTexImage3D:S,texImage2D:$,texImage3D:tt,pixelStorei:kt,getParameter:Mt,updateUBOMapping:Ot,uniformBlockBinding:et,texStorage2D:yt,texStorage3D:ft,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:Q,scissor:Ct,viewport:It,reset:bt}}function G_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap,f=new Set,u,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,g){return x?new OffscreenCanvas(S,g):mo("canvas")}function v(S,g,B){let V=1,Q=J(S);if((Q.width>B||Q.height>B)&&(V=B/Math.max(Q.width,Q.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let yt=Math.floor(V*Q.width),ft=Math.floor(V*Q.height);u===void 0&&(u=A(yt,ft));let $=g?A(yt,ft):u;return $.width=yt,$.height=ft,$.getContext("2d").drawImage(S,0,0,yt,ft),re("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+yt+"x"+ft+")."),$}else return"data"in S&&re("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function p(S){return S.generateMipmaps}function y(S){i.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(S,g,B,V,Q,yt=!1){if(S!==null){if(i[S]!==void 0)return i[S];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ft;V&&(ft=t.get("EXT_texture_norm16"),ft||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ft&&($=ft.R16_EXT),B===i.SHORT&&ft&&($=ft.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),g===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ft&&($=ft.RG16_EXT),B===i.SHORT&&ft&&($=ft.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&ft&&($=ft.RGB16_EXT),B===i.SHORT&&ft&&($=ft.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let tt=yt?po:ge.getTransfer(Q);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=tt===Re?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ft&&($=ft.RGBA16_EXT),B===i.SHORT&&ft&&($=ft.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function R(S,g){let B;return S?g===null||g===fi||g===Lr?B=i.DEPTH24_STENCIL8:g===Kn?B=i.DEPTH32F_STENCIL8:g===Ir&&(B=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fi||g===Lr?B=i.DEPTH_COMPONENT24:g===Kn?B=i.DEPTH_COMPONENT32F:g===Ir&&(B=i.DEPTH_COMPONENT16),B}function E(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==xn&&S.minFilter!==hn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function b(S){let g=S.target;g.removeEventListener("dispose",b),M(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function m(S){let g=S.target;g.removeEventListener("dispose",m),I(g)}function M(S){let g=n.get(S);if(g.__webglInit===void 0)return;let B=S.source,V=d.get(B);if(V){let Q=V[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(S),Object.keys(V).length===0&&d.delete(B)}n.remove(S)}function T(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let B=S.source,V=d.get(B);delete V[g.__cacheKey],o.memory.textures--}function I(S){let g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let Q=0;Q<g.__webglFramebuffer[V].length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[V][Q]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=S.textures;for(let V=0,Q=B.length;V<Q;V++){let yt=n.get(B[V]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(B[V])}n.remove(S)}let D=0;function N(){D=0}function L(){return D}function F(S){D=S}function q(){let S=D;return S>=s.maxTextures&&re("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,S}function G(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function j(S,g){let B=n.get(S);if(S.isVideoTexture&&P(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let V=S.image;if(V===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(B,S,g);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function k(S,g){let B=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){ht(B,S,g);return}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function st(S,g){let B=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){ht(B,S,g);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function at(S,g){let B=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version){nt(B,S,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let Vt={[ws]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},Pt={[xn]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},W={[tf]:i.NEVER,[of]:i.ALWAYS,[ef]:i.LESS,[Sc]:i.LEQUAL,[nf]:i.EQUAL,[bc]:i.GEQUAL,[sf]:i.GREATER,[rf]:i.NOTEQUAL};function xt(S,g){if(g.type===Kn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===hn||g.magFilter===Bl||g.magFilter===ta||g.magFilter===cs||g.minFilter===hn||g.minFilter===Bl||g.minFilter===ta||g.minFilter===cs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,Vt[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Vt[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Vt[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Pt[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Pt[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,W[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===xn||g.minFilter!==ta&&g.minFilter!==cs||g.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function wt(S,g){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",b));let V=g.source,Q=d.get(V);Q===void 0&&(Q={},d.set(V,Q));let yt=G(g);if(yt!==S.__cacheKey){Q[yt]===void 0&&(Q[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[yt].usedTimes++;let ft=Q[S.__cacheKey];ft!==void 0&&(Q[S.__cacheKey].usedTimes--,ft.usedTimes===0&&T(g)),S.__cacheKey=yt,S.__webglTexture=Q[yt].texture}return B}function X(S,g,B){return Math.floor(Math.floor(S/B)/g)}function O(S,g,B,V){let yt=S.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,V,g.data);else{yt.sort((kt,Ct)=>kt.start-Ct.start);let ft=0;for(let kt=1;kt<yt.length;kt++){let Ct=yt[ft],It=yt[kt],Ot=Ct.start+Ct.count,et=X(It.start,g.width,4),bt=X(Ct.start,g.width,4);It.start<=Ot+1&&et===bt&&X(It.start+It.count-1,g.width,4)===et?Ct.count=Math.max(Ct.count,It.start+It.count-Ct.start):(++ft,yt[ft]=It)}yt.length=ft+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let kt=0,Ct=yt.length;kt<Ct;kt++){let It=yt[kt],Ot=Math.floor(It.start/4),et=Math.ceil(It.count/4),bt=Ot%g.width,z=Math.floor(Ot/g.width),Et=et,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,bt,z,Et,lt,B,V,g.data)}S.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function ht(S,g,B){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);let Q=wt(S,g),yt=g.source;e.bindTexture(V,S.__webglTexture,i.TEXTURE0+B);let ft=n.get(yt);if(yt.version!==ft.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let lt=ge.getPrimaries(ge.workingColorSpace),St=g.colorSpace===Hi?null:ge.getPrimaries(g.colorSpace),Lt=g.colorSpace===Hi||lt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let tt=v(g.image,!1,s.maxTextureSize);tt=K(g,tt);let Mt=r.convert(g.format,g.colorSpace),kt=r.convert(g.type),Ct=_(g.internalFormat,Mt,kt,g.normalized,g.colorSpace,g.isVideoTexture);xt(V,g);let It,Ot=g.mipmaps,et=g.isVideoTexture!==!0,bt=ft.__version===void 0||Q===!0,z=yt.dataReady,Et=E(g,tt);if(g.isDepthTexture)Ct=R(g.format===hs,g.type),bt&&(et?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,Mt,kt,null));else if(g.isDataTexture)if(Ot.length>0){et&&bt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,Ot[0].width,Ot[0].height);for(let lt=0,St=Ot.length;lt<St;lt++)It=Ot[lt],et?z&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,It.width,It.height,Mt,kt,It.data):e.texImage2D(i.TEXTURE_2D,lt,Ct,It.width,It.height,0,Mt,kt,It.data);g.generateMipmaps=!1}else et?(bt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,tt.width,tt.height),z&&O(g,tt,Mt,kt)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,Mt,kt,tt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){et&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,Ot[0].width,Ot[0].height,tt.depth);for(let lt=0,St=Ot.length;lt<St;lt++)if(It=Ot[lt],g.format!==jn)if(Mt!==null)if(et){if(z)if(g.layerUpdates.size>0){let Lt=eu(It.width,It.height,g.format,g.type);for(let vt of g.layerUpdates){let Ht=It.data.subarray(vt*Lt/It.data.BYTES_PER_ELEMENT,(vt+1)*Lt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,vt,It.width,It.height,1,Mt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,It.width,It.height,tt.depth,Mt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Ct,It.width,It.height,tt.depth,0,It.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,It.width,It.height,tt.depth,Mt,kt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Ct,It.width,It.height,tt.depth,0,Mt,kt,It.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{et&&bt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,Ot[0].width,Ot[0].height);for(let lt=0,St=Ot.length;lt<St;lt++)It=Ot[lt],g.format!==jn?Mt!==null?et?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,It.width,It.height,Mt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Ct,It.width,It.height,0,It.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?z&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,It.width,It.height,Mt,kt,It.data):e.texImage2D(i.TEXTURE_2D,lt,Ct,It.width,It.height,0,Mt,kt,It.data)}else if(g.isDataArrayTexture)if(et){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,tt.width,tt.height,tt.depth),z)if(g.layerUpdates.size>0){let lt=eu(tt.width,tt.height,g.format,g.type);for(let St of g.layerUpdates){let Lt=tt.data.subarray(St*lt/tt.data.BYTES_PER_ELEMENT,(St+1)*lt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,tt.width,tt.height,1,Mt,kt,Lt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Mt,kt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,Mt,kt,tt.data);else if(g.isData3DTexture)et?(bt&&e.texStorage3D(i.TEXTURE_3D,Et,Ct,tt.width,tt.height,tt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Mt,kt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,Mt,kt,tt.data);else if(g.isFramebufferTexture){if(bt)if(et)e.texStorage2D(i.TEXTURE_2D,Et,Ct,tt.width,tt.height);else{let lt=tt.width,St=tt.height;for(let Lt=0;Lt<Et;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Ct,lt,St,0,Mt,kt,null),lt>>=1,St>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),tt.parentNode!==lt){lt.appendChild(tt),f.add(g),lt.onpaint=St=>{let Lt=St.changedElements;for(let vt of f)Lt.includes(vt.image)&&(vt.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let Lt=i.RGBA,vt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,vt,Ht,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(et&&bt){let lt=J(Ot[0]);e.texStorage2D(i.TEXTURE_2D,Et,Ct,lt.width,lt.height)}for(let lt=0,St=Ot.length;lt<St;lt++)It=Ot[lt],et?z&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Mt,kt,It):e.texImage2D(i.TEXTURE_2D,lt,Ct,Mt,kt,It);g.generateMipmaps=!1}else if(et){if(bt){let lt=J(tt);e.texStorage2D(i.TEXTURE_2D,Et,Ct,lt.width,lt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,kt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,Mt,kt,tt);p(g)&&y(V),ft.__version=yt.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function nt(S,g,B){if(g.image.length!==6)return;let V=wt(S,g),Q=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+B);let yt=n.get(Q);if(Q.version!==yt.__version||V===!0){e.activeTexture(i.TEXTURE0+B);let ft=ge.getPrimaries(ge.workingColorSpace),$=g.colorSpace===Hi?null:ge.getPrimaries(g.colorSpace),tt=g.colorSpace===Hi||ft===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Mt=g.isCompressedTexture||g.image[0].isCompressedTexture,kt=g.image[0]&&g.image[0].isDataTexture,Ct=[];for(let vt=0;vt<6;vt++)!Mt&&!kt?Ct[vt]=v(g.image[vt],!0,s.maxCubemapSize):Ct[vt]=kt?g.image[vt].image:g.image[vt],Ct[vt]=K(g,Ct[vt]);let It=Ct[0],Ot=r.convert(g.format,g.colorSpace),et=r.convert(g.type),bt=_(g.internalFormat,Ot,et,g.normalized,g.colorSpace),z=g.isVideoTexture!==!0,Et=yt.__version===void 0||V===!0,lt=Q.dataReady,St=E(g,It);xt(i.TEXTURE_CUBE_MAP,g);let Lt;if(Mt){z&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,bt,It.width,It.height);for(let vt=0;vt<6;vt++){Lt=Ct[vt].mipmaps;for(let Ht=0;Ht<Lt.length;Ht++){let Yt=Lt[Ht];g.format!==jn?Ot!==null?z?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,Yt.width,Yt.height,Ot,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,bt,Yt.width,Yt.height,0,Yt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,Yt.width,Yt.height,Ot,et,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,bt,Yt.width,Yt.height,0,Ot,et,Yt.data)}}}else{if(Lt=g.mipmaps,z&&Et){Lt.length>0&&St++;let vt=J(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,bt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(kt){z?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ct[vt].width,Ct[vt].height,Ot,et,Ct[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,bt,Ct[vt].width,Ct[vt].height,0,Ot,et,Ct[vt].data);for(let Ht=0;Ht<Lt.length;Ht++){let ce=Lt[Ht].image[vt].image;z?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,ce.width,ce.height,Ot,et,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,bt,ce.width,ce.height,0,Ot,et,ce.data)}}else{z?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot,et,Ct[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,bt,Ot,et,Ct[vt]);for(let Ht=0;Ht<Lt.length;Ht++){let Yt=Lt[Ht];z?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Ot,et,Yt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,bt,Ot,et,Yt.image[vt])}}}p(g)&&y(i.TEXTURE_CUBE_MAP),yt.__version=Q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function it(S,g,B,V,Q,yt){let ft=r.convert(B.format,B.colorSpace),$=r.convert(B.type),tt=_(B.internalFormat,ft,$,B.normalized,B.colorSpace),Mt=n.get(g),kt=n.get(B);if(kt.__renderTarget=g,!Mt.__hasExternalTextures){let Ct=Math.max(1,g.width>>yt),It=Math.max(1,g.height>>yt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,yt,tt,Ct,It,g.depth,0,ft,$,null):e.texImage2D(Q,yt,tt,Ct,It,0,ft,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Z(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Q,kt.__webglTexture,0,H(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Q,kt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(S,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let V=g.depthTexture,Q=V&&V.isDepthTexture?V.type:null,yt=R(g.stencilBuffer,Q),ft=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Z(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H(g),yt,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,H(g),yt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,yt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,S)}else{let V=g.textures;for(let Q=0;Q<V.length;Q++){let yt=V[Q],ft=r.convert(yt.format,yt.colorSpace),$=r.convert(yt.type),tt=_(yt.internalFormat,ft,$,yt.normalized,yt.colorSpace);Z(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H(g),tt,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,H(g),tt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,tt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(S,g,B){let V=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),xt(i.TEXTURE_CUBE_MAP,g.depthTexture);let Mt=r.convert(g.depthTexture.format),kt=r.convert(g.depthTexture.type),Ct;g.depthTexture.format===Ei?Ct=i.DEPTH_COMPONENT24:g.depthTexture.format===hs&&(Ct=i.DEPTH24_STENCIL8);for(let It=0;It<6;It++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Ct,g.width,g.height,0,Mt,kt,null)}}else j(g.depthTexture,0);let yt=Q.__webglTexture,ft=H(g),$=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,tt=g.depthTexture.format===hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ei)Z(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,yt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,yt,0);else if(g.depthTexture.format===hs)Z(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,yt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(S){let g=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let V=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){let Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",Q)};V.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=V}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)Ft(g.__webglFramebuffer[V],S,V);else{let V=S.texture.mipmaps;V&&V.length>0?Ft(g.__webglFramebuffer[0],S,0):Ft(g.__webglFramebuffer,S,0)}else if(B){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),Tt(g.__webglDepthbuffer[V],S,!1);else{let Q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,yt)}}else{let V=S.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Tt(g.__webglDepthbuffer,S,!1);else{let Q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(S,g,B){let V=n.get(S);g!==void 0&&it(V.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&dt(S)}function mt(S){let g=S.texture,B=n.get(S),V=n.get(g);S.addEventListener("dispose",m);let Q=S.textures,yt=S.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,o.memory.textures++),yt){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let tt=0;tt<g.mipmaps.length;tt++)B.__webglFramebuffer[$][tt]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ft)for(let $=0,tt=Q.length;$<tt;$++){let Mt=n.get(Q[$]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&Z(S)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let tt=Q[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let Mt=r.convert(tt.format,tt.colorSpace),kt=r.convert(tt.type),Ct=_(tt.internalFormat,Mt,kt,tt.normalized,tt.colorSpace,S.isXRRenderTarget===!0),It=H(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Ct,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),xt(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let tt=0;tt<g.mipmaps.length;tt++)it(B.__webglFramebuffer[$][tt],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,tt);else it(B.__webglFramebuffer[$],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(g)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let $=0,tt=Q.length;$<tt;$++){let Mt=Q[$],kt=n.get(Mt),Ct=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Ct=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,kt.__webglTexture),xt(Ct,Mt),it(B.__webglFramebuffer,S,Mt,i.COLOR_ATTACHMENT0+$,Ct,0),p(Mt)&&y(Ct)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&($=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,V.__webglTexture),xt($,g),g.mipmaps&&g.mipmaps.length>0)for(let tt=0;tt<g.mipmaps.length;tt++)it(B.__webglFramebuffer[tt],S,g,i.COLOR_ATTACHMENT0,$,tt);else it(B.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,$,0);p(g)&&y($),e.unbindTexture()}S.depthBuffer&&dt(S)}function gt(S){let g=S.textures;for(let B=0,V=g.length;B<V;B++){let Q=g[B];if(p(Q)){let yt=C(S),ft=n.get(Q).__webglTexture;e.bindTexture(yt,ft),y(yt),e.unbindTexture()}}}let _t=[],At=[];function Dt(S){if(S.samples>0){if(Z(S)===!1){let g=S.textures,B=S.width,V=S.height,Q=i.COLOR_BUFFER_BIT,yt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(S),$=g.length>1;if($)for(let Mt=0;Mt<g.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let tt=S.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Mt=0;Mt<g.length;Mt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Mt]);let kt=n.get(g[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,Q,i.NEAREST),l===!0&&(_t.length=0,At.length=0,_t.push(i.COLOR_ATTACHMENT0+Mt),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(_t.push(yt),At.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let Mt=0;Mt<g.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Mt]);let kt=n.get(g[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function H(S){return Math.min(s.maxSamples,S.samples)}function Z(S){let g=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(S){let g=o.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function K(S,g){let B=S.colorSpace,V=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==fo&&B!==Hi&&(ge.getTransfer(B)===Re?(V!==jn||Q!==Gn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",B)),g}function J(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=st,this.setTextureCube=at,this.rebindTextures=ut,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Z,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function W_(i,t){function e(n,s=Hi){let r,o=ge.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===kh)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===jn)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Vl)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===us)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===Zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===$l||n===Kl||n===jl||n===Ql||n===ra||n===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===$l)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===_c||n===oa||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:X_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,A=typeof XRWebGLBinding<"u",v=new mu,p={},y=e.getContextAttributes(),C=null,_=null,R=[],E=[],b=new Rt,m=null,M=null,T=new ln;T.viewport=new Se;let I=new ln;I.viewport=new Se;let D=[T,I],N=new Dl,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let O=R[X];return O===void 0&&(O=new mr,R[X]=O),O.getTargetRaySpace()},this.getControllerGrip=function(X){let O=R[X];return O===void 0&&(O=new mr,R[X]=O),O.getGripSpace()},this.getHand=function(X){let O=R[X];return O===void 0&&(O=new mr,R[X]=O),O.getHandSpace()};function q(X){let O=E.indexOf(X.inputSource);if(O===-1)return;let ht=R[O];ht!==void 0&&(ht.update(X.inputSource,X.frame,c||o),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let X=0;X<R.length;X++){let O=E[X];O!==null&&(E[X]=null,R[X].disconnect(O))}L=null,F=null,v.reset();for(let X in p)delete p[X];if(t.setRenderTarget(C),d=null,u=null,f=null,s=null,_=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(m),t.setSize(b.width,b.height,!1),M!==null){let X=M.camera;X.fov=M.fov,X.zoom=M.zoom,X.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await e.makeXRCompatible(),m=t.getPixelRatio(),t.getSize(b),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,nt=null,it=null;y.depth&&(it=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=y.stencil?hs:Ei,nt=y.stencil?Lr:fi);let Tt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Tt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Ve(u.textureWidth,u.textureHeight,{format:jn,type:Gn,depthTexture:new es(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ht={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ve(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(X){for(let O=0;O<X.removed.length;O++){let ht=X.removed[O],nt=E.indexOf(ht);nt>=0&&(E[nt]=null,R[nt].disconnect(ht))}for(let O=0;O<X.added.length;O++){let ht=X.added[O],nt=E.indexOf(ht);if(nt===-1){for(let Tt=0;Tt<R.length;Tt++)if(Tt>=E.length){E.push(ht),nt=Tt;break}else if(E[Tt]===null){E[Tt]=ht,nt=Tt;break}if(nt===-1)break}let it=R[nt];it&&it.connect(ht)}}let k=new U,st=new U;function at(X,O,ht){k.setFromMatrixPosition(O.matrixWorld),st.setFromMatrixPosition(ht.matrixWorld);let nt=k.distanceTo(st),it=O.projectionMatrix.elements,Tt=ht.projectionMatrix.elements,Ft=it[14]/(it[10]-1),dt=it[14]/(it[10]+1),ut=(it[9]+1)/it[5],mt=(it[9]-1)/it[5],gt=(it[8]-1)/it[0],_t=(Tt[8]+1)/Tt[0],At=Ft*gt,Dt=Ft*_t,H=nt/(-gt+_t),Z=H*-gt;if(O.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Z),X.translateZ(H),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),it[10]===-1)X.projectionMatrix.copy(O.projectionMatrix),X.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let P=Ft+H,K=dt+H,J=At-Z,S=Dt+(nt-Z),g=ut*dt/K*P,B=mt*dt/K*P;X.projectionMatrix.makePerspective(J,S,g,B,P,K),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Vt(X,O){O===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(O.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let O=X.near,ht=X.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),N.near=I.near=T.near=O,N.far=I.far=T.far=ht,(L!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,F=N.far),N.layers.mask=X.layers.mask|6,T.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let nt=X.parent,it=N.cameras;Vt(N,nt);for(let Tt=0;Tt<it.length;Tt++)Vt(it[Tt],nt);it.length===2?at(N,T,I):N.projectionMatrix.copy(T.projectionMatrix),M===null&&X.isPerspectiveCamera&&(M={camera:X,fov:X.fov,zoom:X.zoom}),Pt(X,N,nt)};function Pt(X,O,ht){ht===null?X.matrix.copy(O.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply(O.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(O.projectionMatrix),X.projectionMatrixInverse.copy(O.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(N)},this.getCameraTexture=function(X){return p[X]};let W=null;function xt(X,O){if(h=O.getViewerPose(c||o),x=O,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let nt=!1;ht.length!==N.cameras.length&&(N.cameras.length=0,nt=!0);for(let dt=0;dt<ht.length;dt++){let ut=ht[dt],mt=null;if(d!==null)mt=d.getViewport(ut);else{let _t=f.getViewSubImage(u,ut);mt=_t.viewport,dt===0&&(t.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(_))}let gt=D[dt];gt===void 0&&(gt=new ln,gt.layers.enable(dt),gt.viewport=new Se,D[dt]=gt),gt.matrix.fromArray(ut.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ut.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(mt.x,mt.y,mt.width,mt.height),dt===0&&(N.matrix.copy(gt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),nt===!0&&N.cameras.push(gt)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){f=n.getBinding();let dt=f.getDepthInformation(ht[0]);dt&&dt.isValid&&dt.texture&&v.init(dt,s.renderState)}if(it&&it.includes("camera-access")&&A){t.state.unbindTexture(),f=n.getBinding();for(let dt=0;dt<ht.length;dt++){let ut=ht[dt].camera;if(ut){let mt=p[ut];mt||(mt=new bo,p[ut]=mt);let gt=f.getCameraImage(ut);mt.sourceTexture=gt}}}}for(let ht=0;ht<R.length;ht++){let nt=E[ht],it=R[ht];nt!==null&&it!==void 0&&it.update(nt,O,c||o)}W&&W(X,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),x=null}let wt=new Hf;wt.setAnimationLoop(xt),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}},Y_=new ae,qf=new le;qf.set(-1,0,0,0,1,0,0,0,1);function Z_(i,t){function e(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,jh(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,y,C,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(v,p):p.isMeshLambertMaterial?(r(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(v,p),f(v,p)):p.isMeshPhongMaterial?(r(v,p),h(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(v,p),u(v,p),p.isMeshPhysicalMaterial&&d(v,p,_)):p.isMeshMatcapMaterial?(r(v,p),x(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),A(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?l(v,p,y,C):p.isSpriteMaterial?c(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,e(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===un&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,e(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===un&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,e(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,e(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let y=t.get(p),C=y.envMap,_=y.envMapRotation;C&&(v.envMap.value=C,v.envMapRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(_)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(qf),v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,y,C){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*y,v.scale.value=C*.5,p.map&&(v.map.value=p.map,e(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function f(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function u(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function d(v,p,y){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.retroreflectivity>0&&(v.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,p){p.matcap&&(v.matcap.value=p.matcap)}function A(v,p){let y=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,R){let E=R.program;n.uniformBlockBinding(_,E)}function c(_,R){let E=s[_.id];E===void 0&&(v(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",y));let b=R.program;n.updateUBOMapping(_,b);let m=t.render.frame;r[_.id]!==m&&(u(_),r[_.id]=m)}function h(_){let R=f();_.__bindingPointIndex=R;let E=i.createBuffer(),b=_.__size,m=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,E),E}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let R=s[_.id],E=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let m=0,M=E.length;m<M;m++){let T=E[m];if(Array.isArray(T))for(let I=0,D=T.length;I<D;I++)d(T[I],m,I,b);else d(T,m,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,R,E,b){if(A(_,R,E,b)===!0){let m=_.__offset,M=_.value;if(Array.isArray(M)){let T=0;for(let I=0;I<M.length;I++){let D=M[I],N=p(D);x(D,_.__data,T),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(T+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,_.__data)}}function x(_,R,E){typeof _=="number"||typeof _=="boolean"?R[0]=_:_.isMatrix3?(R[0]=_.elements[0],R[1]=_.elements[1],R[2]=_.elements[2],R[3]=0,R[4]=_.elements[3],R[5]=_.elements[4],R[6]=_.elements[5],R[7]=0,R[8]=_.elements[6],R[9]=_.elements[7],R[10]=_.elements[8],R[11]=0):ArrayBuffer.isView(_)?R.set(new _.constructor(_.buffer,_.byteOffset,R.length)):_.toArray(R,E)}function A(_,R,E,b){let m=_.value,M=R+"_"+E;if(b[M]===void 0)return typeof m=="number"||typeof m=="boolean"?b[M]=m:ArrayBuffer.isView(m)?b[M]=m.slice():b[M]=m.clone(),!0;{let T=b[M];if(typeof m=="number"||typeof m=="boolean"){if(T!==m)return b[M]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(T.equals(m)===!1)return T.copy(m),!0}}return!1}function v(_){let R=_.uniforms,E=0,b=16;for(let M=0,T=R.length;M<T;M++){let I=Array.isArray(R[M])?R[M]:[R[M]];for(let D=0,N=I.length;D<N;D++){let L=I[D],F=Array.isArray(L.value)?L.value:[L.value];for(let q=0,G=F.length;q<G;q++){let j=F[q],k=p(j),st=E%b,at=st%k.boundary,Vt=st+at;E+=at,Vt!==0&&b-Vt<k.storage&&(E+=b-Vt),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=k.storage}}}let m=E%b;return m>0&&(E+=b-m),_.__size=E,_.__cache={},this}function p(_){let R={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(R.boundary=4,R.storage=4):_.isVector2?(R.boundary=8,R.storage=8):_.isVector3||_.isColor?(R.boundary=16,R.storage=12):_.isVector4?(R.boundary=16,R.storage=16):_.isMatrix3?(R.boundary=48,R.storage=48):_.isMatrix4?(R.boundary=64,R.storage=64):_.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(R.boundary=16,R.storage=_.byteLength):re("WebGLRenderer: Unsupported uniform value type.",_),R}function y(_){let R=_.target;R.removeEventListener("dispose",y);let E=o.indexOf(R.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function C(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var $_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function K_(){return Ci===null&&(Ci=new ts($_,16,16,us,qe),Ci.name="DFG_LUT",Ci.minFilter=hn,Ci.magFilter=hn,Ci.wrapS=bi,Ci.wrapT=bi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Ac=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Gn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let A=d,v=new Set([Wl,Gl,kl]),p=new Set([Gn,fi,Ir,Lr,zl,Hl]),y=new Uint32Array(4),C=new Int32Array(4),_=new U,R=null,E=null,b=[],m=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1,D=null,N=null,L=null,F=null;this._outputColorSpace=Sn;let q=0,G=0,j=null,k=-1,st=null,at=new Se,Vt=new Se,Pt=null,W=new Ut(0),xt=0,wt=e.width,X=e.height,O=1,ht=null,nt=null,it=new Se(0,0,wt,X),Tt=new Se(0,0,wt,X),Ft=!1,dt=new _r,ut=!1,mt=!1,gt=new ae,_t=new U,At=new Se,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},H=!1;function Z(){return j===null?O:1}let P=n;function K(w,Y){return e.getContext(w,Y)}let J,S,g,B,V,Q,yt,ft,$,tt,Mt,kt,Ct,It,Ot,et,bt,z,Et,lt,St,Lt,vt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",$e,!1),P===null){let Y="webgl2";if(P=K(Y,w),P===null)throw K(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(w){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),oe("WebGLRenderer: "+w.message),w}function Ht(){J=new sv(P),J.init(),St=new W_(P,J),S=new Zx(P,J,t,St),g=new k_(P,J),S.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),N=P.createFramebuffer(),L=P.createFramebuffer(),F=P.createFramebuffer(),B=new av(P),V=new R_,Q=new G_(P,J,g,V,S,St,B),yt=new iv(T),ft=new c0(P),Lt=new qx(P,ft),$=new rv(P,ft,B,Lt),tt=new cv(P,$,ft,Lt,B),z=new lv(P,S,Q),Ot=new Jx(V),Mt=new A_(T,yt,J,S,Lt,Ot),kt=new Z_(T,V),Ct=new P_,It=new F_(J),bt=new Xx(T,yt,g,tt,x,l),et=new V_(T,tt,S),vt=new J_(P,B,S,g),Et=new Yx(P,J,B),lt=new ov(P,J,B),B.programs=Mt.programs,T.capabilities=S,T.extensions=J,T.properties=V,T.renderLists=Ct,T.shadowMap=et,T.state=g,T.info=B}A!==Gn&&(M=new uv(A,e.width,e.height,a,s,r));let Yt=new gu(T,P);this.xr=Yt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(wt,X,!1))},this.getSize=function(w){return w.set(wt,X)},this.setSize=function(w,Y,ct=!0){if(Yt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=w,X=Y,e.width=Math.floor(w*O),e.height=Math.floor(Y*O),ct===!0&&(e.style.width=w+"px",e.style.height=Y+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(wt*O,X*O).floor()},this.setDrawingBufferSize=function(w,Y,ct){wt=w,X=Y,O=ct,e.width=Math.floor(w*ct),e.height=Math.floor(Y*ct),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(A===Gn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(at)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,Y,ct,rt){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,Y,ct,rt),g.viewport(at.copy(it).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(Tt)},this.setScissor=function(w,Y,ct,rt){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,Y,ct,rt),g.scissor(Vt.copy(Tt).multiplyScalar(O).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(w){g.setScissorTest(Ft=w)},this.setOpaqueSort=function(w){ht=w},this.setTransparentSort=function(w){nt=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ct=!0){let rt=0;if(w){let ot=!1;if(j!==null){let Wt=j.texture.format;ot=v.has(Wt)}if(ot){let Wt=j.texture.type,jt=p.has(Wt),Xt=bt.getClearColor(),ee=bt.getClearAlpha(),se=Xt.r,de=Xt.g,_e=Xt.b;jt?(y[0]=se,y[1]=de,y[2]=_e,y[3]=ee,P.clearBufferuiv(P.COLOR,0,y)):(C[0]=se,C[1]=de,C[2]=_e,C[3]=ee,P.clearBufferiv(P.COLOR,0,C))}else rt|=P.COLOR_BUFFER_BIT}Y&&(rt|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(rt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&P.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),bt.dispose(),Ct.dispose(),It.dispose(),V.dispose(),yt.dispose(),tt.dispose(),Lt.dispose(),vt.dispose(),Mt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Zt),Yt.removeEventListener("sessionend",$t),Qt.stop()};function ce(w){w.preventDefault(),Jh("WebGLRenderer: Context Lost."),I=!0}function he(){Jh("WebGLRenderer: Context Restored."),I=!1;let w=B.autoReset,Y=et.enabled,ct=et.autoUpdate,rt=et.needsUpdate,ot=et.type;Ht(),B.autoReset=w,et.enabled=Y,et.autoUpdate=ct,et.needsUpdate=rt,et.type=ot}function $e(w){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mn(w){let Y=w.target;Y.removeEventListener("dispose",mn),ue(Y)}function ue(w){zn(w),V.remove(w)}function zn(w){let Y=V.get(w).programs;Y!==void 0&&(Y.forEach(function(ct){Mt.releaseProgram(ct)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ct,rt,ot,Wt){Y===null&&(Y=Dt);let jt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Xt=yi(w,Y,ct,rt,ot);g.setMaterial(rt,jt);let ee=ct.index,se=1;if(rt.wireframe===!0){if(ee=$.getWireframeAttribute(ct),ee===void 0)return;se=2}let de=ct.drawRange,_e=ct.attributes.position,ne=de.start*se,Ce=(de.start+de.count)*se;Wt!==null&&(ne=Math.max(ne,Wt.start*se),Ce=Math.min(Ce,(Wt.start+Wt.count)*se)),ee!==null?(ne=Math.max(ne,0),Ce=Math.min(Ce,ee.count)):_e!=null&&(ne=Math.max(ne,0),Ce=Math.min(Ce,_e.count));let rn=Ce-ne;if(rn<0||rn===1/0)return;Lt.setup(ot,rt,Xt,ct,ee);let ke,Oe=Et;if(ee!==null&&(ke=ft.get(ee),Oe=lt,Oe.setIndex(ke)),ot.isMesh)rt.wireframe===!0?(g.setLineWidth(rt.wireframeLinewidth*Z()),Oe.setMode(P.LINES)):Oe.setMode(P.TRIANGLES);else if(ot.isLine){let wn=rt.linewidth;wn===void 0&&(wn=1),g.setLineWidth(wn*Z()),ot.isLineSegments?Oe.setMode(P.LINES):ot.isLineLoop?Oe.setMode(P.LINE_LOOP):Oe.setMode(P.LINE_STRIP)}else ot.isPoints?Oe.setMode(P.POINTS):ot.isSprite&&Oe.setMode(P.TRIANGLES);if(ot.isBatchedMesh)if(J.get("WEBGL_multi_draw"))Oe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let wn=ot._multiDrawStarts,Kt=ot._multiDrawCounts,In=ot._multiDrawCount,Te=ee?ft.get(ee).bytesPerElement:1,Qn=V.get(rt).currentProgram.getUniforms();for(let Mi=0;Mi<In;Mi++)Qn.setValue(P,"_gl_DrawID",Mi),Oe.render(wn[Mi]/Te,Kt[Mi])}else if(ot.isInstancedMesh)Oe.renderInstances(ne,rn,ot.count);else if(ct.isInstancedBufferGeometry){let wn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Kt=Math.min(ct.instanceCount,wn);Oe.renderInstances(ne,rn,Kt)}else Oe.render(ne,rn)};function Ke(w,Y,ct,rt){D!==null&&w.isNodeMaterial&&D.setObject(rt,w),ut===!0&&Ot.setState(w,ct,!1),w.transparent===!0&&w.side===Le&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Mn(w,Y,rt),w.side=Ri,w.needsUpdate=!0,Mn(w,Y,rt),w.side=Le):Mn(w,Y,rt)}this.compile=function(w,Y,ct=null){ct===null&&(ct=w),D!==null&&D.renderStart(w,Y,ct),E=It.get(ct),E.init(Y),m.push(E),ct.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Y.layers)&&(E.pushLight(ot),ot.castShadow&&E.pushShadow(ot))}),w!==ct&&w.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Y.layers)&&(E.pushLight(ot),ot.castShadow&&E.pushShadow(ot))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),mt=this.localClippingEnabled,ut=Ot.init(this.clippingPlanes,mt),ut===!0&&Ot.setGlobalState(this.clippingPlanes,Y),D!==null&&et.render(E.state.shadowsArray,ct,Y);let rt=new Set;return w.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Wt=ot.material;if(Wt)if(Array.isArray(Wt))for(let jt=0;jt<Wt.length;jt++){let Xt=Wt[jt];Ke(Xt,ct,Y,ot),rt.add(Xt)}else Ke(Wt,ct,Y,ot),rt.add(Wt)}),E=m.pop(),D!==null&&D.renderEnd(),rt},this.compileAsync=function(w,Y,ct=null){let rt=this.compile(w,Y,ct);return new Promise(ot=>{function Wt(){if(rt.forEach(function(jt){let ee=V.get(jt).currentProgram;(ee===void 0||ee.isReady())&&rt.delete(jt)}),rt.size===0){ot(w);return}setTimeout(Wt,10)}J.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let pt=null;function Nt(w){pt&&pt(w)}function Zt(){Qt.stop()}function $t(){Qt.start()}let Qt=new Hf;Qt.setAnimationLoop(Nt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(w){pt=w,Yt.setAnimationLoop(w),w===null?Qt.stop():Qt.start()},Yt.addEventListener("sessionstart",Zt),Yt.addEventListener("sessionend",$t),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(w,Y);let ct=Yt.enabled===!0&&Yt.isPresenting===!0,rt=M!==null&&(j===null||ct)&&M.begin(T,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(Y),Y=Yt.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,Y,j),E=It.get(w,m.length),E.init(Y),E.state.textureUnits=Q.getTextureUnits(),m.push(E),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),dt.setFromProjectionMatrix(gt,ci,Y.reversedDepth),mt=this.localClippingEnabled,ut=Ot.init(this.clippingPlanes,mt),R=Ct.get(w,b.length),R.init(),b.push(R),Yt.enabled===!0&&Yt.isPresenting===!0){let jt=T.xr.getDepthSensingMesh();jt!==null&&me(jt,Y,-1/0,T.sortObjects)}me(w,Y,0,T.sortObjects),R.finish(),D!==null&&D.updateLights(E.state.lightsArray),T.sortObjects===!0&&R.sort(ht,nt),H=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,H&&bt.addToRenderList(R,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Ot.beginShadows();let ot=E.state.shadowsArray;if(et.render(ot,w,Y),ut===!0&&Ot.endShadows(),(rt&&M.hasRenderPass())===!1){let jt=R.opaque,Xt=R.transmissive;if(E.setupLights(),Y.isArrayCamera){let ee=Y.cameras;if(Xt.length>0)for(let se=0,de=ee.length;se<de;se++){let _e=ee[se];we(jt,Xt,w,_e)}H&&bt.render(w);for(let se=0,de=ee.length;se<de;se++){let _e=ee[se];Me(R,w,_e,_e.viewport)}}else Xt.length>0&&we(jt,Xt,w,Y),H&&bt.render(w),Me(R,w,Y)}j!==null&&G===0&&(Q.updateMultisampleRenderTarget(j),Q.updateRenderTargetMipmap(j)),rt&&M.end(T),w.isScene===!0&&w.onAfterRender(T,w,Y),Lt.resetDefaultState(),k=-1,st=null,m.pop(),m.length>0?(E=m[m.length-1],Q.setTextureUnits(E.state.textureUnits),ut===!0&&Ot.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?R=b[b.length-1]:R=null,D!==null&&D.renderEnd()};function me(w,Y,ct,rt){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ct=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(dt)){rt&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);let jt=tt.update(w),Xt=w.material;Xt.visible&&R.push(w,jt,Xt,ct,At.z,null,Y)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(dt))){let jt=tt.update(w),Xt=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),At.copy(jt.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(Xt)){let ee=jt.groups;for(let se=0,de=ee.length;se<de;se++){let _e=ee[se],ne=Xt[_e.materialIndex];ne&&ne.visible&&R.push(w,jt,ne,ct,At.z,_e,Y)}}else Xt.visible&&R.push(w,jt,Xt,ct,At.z,null,Y)}}let Wt=w.children;for(let jt=0,Xt=Wt.length;jt<Xt;jt++)me(Wt[jt],Y,ct,rt)}function Me(w,Y,ct,rt){let{opaque:ot,transmissive:Wt,transparent:jt}=w;E.setupLightsView(ct),ut===!0&&Ot.setGlobalState(T.clippingPlanes,ct),rt&&g.viewport(at.copy(rt)),ot.length>0&&je(ot,Y,ct),Wt.length>0&&je(Wt,Y,ct),jt.length>0&&je(jt,Y,ct),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function we(w,Y,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[rt.id]===void 0){let ne=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[rt.id]=new Ve(1,1,{generateMipmaps:!0,type:ne?qe:Gn,minFilter:cs,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Wt=E.state.transmissionRenderTarget[rt.id],jt=rt.viewport||at;Wt.setSize(jt.z*T.transmissionResolutionScale,jt.w*T.transmissionResolutionScale);let Xt=T.getRenderTarget(),ee=T.getActiveCubeFace(),se=T.getActiveMipmapLevel();T.setRenderTarget(Wt),T.getClearColor(W),xt=T.getClearAlpha(),xt<1&&T.setClearColor(16777215,.5),T.clear(),H&&bt.render(ct);let de=T.toneMapping;T.toneMapping=di;let _e=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),E.setupLightsView(rt),ut===!0&&Ot.setGlobalState(T.clippingPlanes,rt),je(w,ct,rt),Q.updateMultisampleRenderTarget(Wt),Q.updateRenderTargetMipmap(Wt),J.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Ce=0,rn=Y.length;Ce<rn;Ce++){let ke=Y[Ce],{object:Oe,geometry:wn,material:Kt,group:In}=ke;if(Kt.side===Le&&Oe.layers.test(rt.layers)){let Te=Kt.side;Kt.side=un,Kt.needsUpdate=!0,Xn(Oe,ct,rt,wn,Kt,In),Kt.side=Te,Kt.needsUpdate=!0,ne=!0}}ne===!0&&(Q.updateMultisampleRenderTarget(Wt),Q.updateRenderTargetMipmap(Wt))}T.setRenderTarget(Xt,ee,se),T.setClearColor(W,xt),_e!==void 0&&(rt.viewport=_e),T.toneMapping=de}function je(w,Y,ct){let rt=Y.isScene===!0?Y.overrideMaterial:null;for(let ot=0,Wt=w.length;ot<Wt;ot++){let jt=w[ot],{object:Xt,geometry:ee,group:se}=jt,de=jt.material;de.allowOverride===!0&&rt!==null&&(de=rt),Xt.layers.test(ct.layers)&&Xn(Xt,Y,ct,ee,de,se)}}function Xn(w,Y,ct,rt,ot,Wt){D!==null&&ot.isNodeMaterial&&D.setObject(w,ot),w.onBeforeRender(T,Y,ct,rt,ot,Wt),w.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ot.onBeforeRender(T,Y,ct,rt,w,Wt),ot.transparent===!0&&ot.side===Le&&ot.forceSinglePass===!1?(ot.side=un,ot.needsUpdate=!0,T.renderBufferDirect(ct,Y,rt,ot,w,Wt),ot.side=Ri,ot.needsUpdate=!0,T.renderBufferDirect(ct,Y,rt,ot,w,Wt),ot.side=Le):T.renderBufferDirect(ct,Y,rt,ot,w,Wt),w.onAfterRender(T,Y,ct,rt,ot,Wt)}function Mn(w,Y,ct){Y.isScene!==!0&&(Y=Dt);let rt=V.get(w),ot=E.state.lights,Wt=E.state.shadowsArray,jt=ot.state.version,Xt=Mt.getParameters(w,ot.state,Wt,Y,ct,E.state.lightProbeGridArray),ee=Mt.getProgramCacheKey(Xt),se=rt.programs;rt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,rt.fog=Y.fog;let de=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;rt.envMap=yt.get(w.envMap||rt.environment,de),rt.envMapRotation=rt.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,se===void 0&&(w.addEventListener("dispose",mn),se=new Map,rt.programs=se);let _e=se.get(ee);if(_e!==void 0){if(rt.currentProgram===_e&&rt.lightsStateVersion===jt)return ri(w,Xt),_e}else Xt.uniforms=Mt.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,ct,Xt),w.onBeforeCompile(Xt,T),_e=Mt.acquireProgram(Xt,ee),se.set(ee,_e),rt.uniforms=Xt.uniforms;let ne=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ne.clippingPlanes=Ot.uniform),ri(w,Xt),rt.needsLights=te(w),rt.lightsStateVersion=jt,rt.needsLights&&(ne.ambientLightColor.value=ot.state.ambient,ne.lightProbe.value=ot.state.probe,ne.sunLights.value=ot.state.sun,ne.sunLightShadows.value=ot.state.sunShadow,ne.directionalLights.value=ot.state.directional,ne.directionalLightShadows.value=ot.state.directionalShadow,ne.spotLights.value=ot.state.spot,ne.spotLightShadows.value=ot.state.spotShadow,ne.rectAreaLights.value=ot.state.rectArea,ne.ltc_1.value=ot.state.rectAreaLTC1,ne.ltc_2.value=ot.state.rectAreaLTC2,ne.pointLights.value=ot.state.point,ne.pointLightShadows.value=ot.state.pointShadow,ne.hemisphereLights.value=ot.state.hemi,ne.sunShadowMatrix.value=ot.state.sunShadowMatrix,ne.sunShadowCascade.value=ot.state.sunShadowCascade,ne.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,ne.spotLightMatrix.value=ot.state.spotLightMatrix,ne.spotLightMap.value=ot.state.spotLightMap,ne.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=E.state.lightProbeGridArray.length>0,rt.currentProgram=_e,rt.uniformsList=null,_e}function Hn(w){if(w.uniformsList===null){let Y=w.currentProgram.getUniforms();w.uniformsList=Nr.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function ri(w,Y){let ct=V.get(w);ct.outputColorSpace=Y.outputColorSpace,ct.batching=Y.batching,ct.batchingColor=Y.batchingColor,ct.instancing=Y.instancing,ct.instancingColor=Y.instancingColor,ct.instancingMorph=Y.instancingMorph,ct.skinning=Y.skinning,ct.morphTargets=Y.morphTargets,ct.morphNormals=Y.morphNormals,ct.morphColors=Y.morphColors,ct.morphTargetsCount=Y.morphTargetsCount,ct.numClippingPlanes=Y.numClippingPlanes,ct.numIntersection=Y.numClipIntersection,ct.vertexAlphas=Y.vertexAlphas,ct.vertexTangents=Y.vertexTangents,ct.toneMapping=Y.toneMapping}function _i(w,Y){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(Y.matrixWorld);for(let ct=0,rt=w.length;ct<rt;ct++){let ot=w[ct];if(ot.texture!==null&&ot.boundingBox.containsPoint(_))return ot}return null}function yi(w,Y,ct,rt,ot){Y.isScene!==!0&&(Y=Dt),Q.resetTextureUnits();let Wt=Y.fog,jt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Y.environment:null,Xt=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ge.workingColorSpace,ee=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,se=yt.get(rt.envMap||jt,ee),de=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,_e=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),ne=!!ct.morphAttributes.position,Ce=!!ct.morphAttributes.normal,rn=!!ct.morphAttributes.color,ke=di;rt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=T.toneMapping);let Oe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,wn=Oe!==void 0?Oe.length:0,Kt=V.get(rt),In=E.state.lights;if(ut===!0&&(mt===!0||w!==st)){let He=w===st&&rt.id===k;Ot.setState(rt,w,He)}let Te=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==In.state.version||Kt.outputColorSpace!==Xt||ot.isBatchedMesh&&Kt.batching===!1||!ot.isBatchedMesh&&Kt.batching===!0||ot.isBatchedMesh&&Kt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Kt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Kt.instancing===!1||!ot.isInstancedMesh&&Kt.instancing===!0||ot.isSkinnedMesh&&Kt.skinning===!1||!ot.isSkinnedMesh&&Kt.skinning===!0||ot.isInstancedMesh&&Kt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Kt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Kt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Kt.instancingMorph===!1&&ot.morphTexture!==null||Kt.envMap!==se||rt.fog===!0&&Kt.fog!==Wt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ot.numPlanes||Kt.numIntersection!==Ot.numIntersection)||Kt.vertexAlphas!==de||Kt.vertexTangents!==_e||Kt.morphTargets!==ne||Kt.morphNormals!==Ce||Kt.morphColors!==rn||Kt.toneMapping!==ke||Kt.morphTargetsCount!==wn||!!Kt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Te=!0):(Te=!0,Kt.__version=rt.version);let Qn=Kt.currentProgram;Te===!0&&(Qn=Mn(rt,Y,ot),D&&rt.isNodeMaterial&&D.onUpdateProgram(rt,Qn,Kt));let Mi=!1,Wi=!1,Xs=!1,Ne=Qn.getUniforms(),tn=Kt.uniforms;if(g.useProgram(Qn.program)&&(Mi=!0,Wi=!0,Xs=!0),rt.id!==k&&(k=rt.id,Wi=!0),Kt.needsLights){let He=_i(E.state.lightProbeGridArray,ot);Kt.lightProbeGrid!==He&&(Kt.lightProbeGrid=He,Wi=!0)}if(Mi||st!==w){g.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ne.setValue(P,"projectionMatrix",w.projectionMatrix),Ne.setValue(P,"viewMatrix",w.matrixWorldInverse);let qi=Ne.map.cameraPosition;qi!==void 0&&qi.setValue(P,_t.setFromMatrixPosition(w.matrixWorld)),S.logarithmicDepthBuffer&&Ne.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ne.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),st!==w&&(st=w,Wi=!0,Xs=!0)}if(Kt.needsLights&&(In.state.sunShadowMap.length>0&&Ne.setValue(P,"sunShadowMap",In.state.sunShadowMap,Q),In.state.directionalShadowMap.length>0&&Ne.setValue(P,"directionalShadowMap",In.state.directionalShadowMap,Q),In.state.spotShadowMap.length>0&&Ne.setValue(P,"spotShadowMap",In.state.spotShadowMap,Q),In.state.pointShadowMap.length>0&&Ne.setValue(P,"pointShadowMap",In.state.pointShadowMap,Q)),ot.isSkinnedMesh){Ne.setOptional(P,ot,"bindMatrix"),Ne.setOptional(P,ot,"bindMatrixInverse");let He=ot.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ne.setValue(P,"boneTexture",He.boneTexture,Q))}ot.isBatchedMesh&&(Ne.setOptional(P,ot,"batchingTexture"),Ne.setValue(P,"batchingTexture",ot._matricesTexture,Q),Ne.setOptional(P,ot,"batchingIdTexture"),Ne.setValue(P,"batchingIdTexture",ot._indirectTexture,Q),Ne.setOptional(P,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Ne.setValue(P,"batchingColorTexture",ot._colorsTexture,Q));let Xi=ct.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&z.update(ot,ct,Qn),(Wi||Kt.receiveShadow!==ot.receiveShadow)&&(Kt.receiveShadow=ot.receiveShadow,Ne.setValue(P,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Y.environment!==null&&(tn.envMapIntensity.value=Y.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=K_()),Wi){if(Ne.setValue(P,"toneMappingExposure",T.toneMappingExposure),Kt.needsLights&&zt(tn,Xs),Wt&&rt.fog===!0&&kt.refreshFogUniforms(tn,Wt),kt.refreshMaterialUniforms(tn,rt,O,X,E.state.transmissionRenderTarget[w.id]),Kt.needsLights&&Kt.lightProbeGrid){let He=Kt.lightProbeGrid;tn.probesSH.value=He.texture,tn.probesMin.value.copy(He.boundingBox.min),tn.probesMax.value.copy(He.boundingBox.max),tn.probesResolution.value.copy(He.resolution)}Nr.upload(P,Hn(Kt),tn,Q)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Nr.upload(P,Hn(Kt),tn,Q),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ne.setValue(P,"center",ot.center),Ne.setValue(P,"modelViewMatrix",ot.modelViewMatrix),Ne.setValue(P,"normalMatrix",ot.normalMatrix),Ne.setValue(P,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){let He=rt.uniformsGroups;for(let qi=0,qs=He.length;qi<qs;qi++){let Bu=He[qi];vt.update(Bu,Qn),vt.bind(Bu,Qn)}}return Qn}function zt(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.sunLights.needsUpdate=Y,w.sunLightShadows.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function te(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,Y,ct){let rt=V.get(w);rt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=Y,V.get(w.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){let ct=V.get(w);ct.__webglFramebuffer=Y,ct.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,ct=0){j=w,q=Y,G=ct;let rt=null,ot=!1,Wt=!1;if(w){let Xt=V.get(w);if(Xt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,Xt.__webglFramebuffer),at.copy(w.viewport),Vt.copy(w.scissor),Pt=w.scissorTest,g.viewport(at),g.scissor(Vt),g.setScissorTest(Pt),k=-1;return}else if(Xt.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(Xt.__hasExternalTextures)Q.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let de=w.depthTexture;if(Xt.__boundDepthTexture!==de){if(de!==null&&V.has(de)&&(w.width!==de.image.width||w.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}let ee=w.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Wt=!0);let se=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(se[Y])?rt=se[Y][ct]:rt=se[Y],ot=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?rt=V.get(w).__webglMultisampledFramebuffer:Array.isArray(se)?rt=se[ct]:rt=se,at.copy(w.viewport),Vt.copy(w.scissor),Pt=w.scissorTest}else at.copy(it).multiplyScalar(O).floor(),Vt.copy(Tt).multiplyScalar(O).floor(),Pt=Ft;if(ct!==0&&(rt=N),g.bindFramebuffer(P.FRAMEBUFFER,rt)&&g.drawBuffers(w,rt),g.viewport(at),g.scissor(Vt),g.setScissorTest(Pt),ot){let Xt=V.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xt.__webglTexture,ct)}else if(Wt){let Xt=Y;for(let ee=0;ee<w.textures.length;ee++){let se=V.get(w.textures[ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ee,se.__webglTexture,ct,Xt)}}else if(w!==null&&ct!==0){let Xt=V.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,ct)}k=-1};function Qe(w){let Y=V.get(w);return(Y.__readFormat!==w.format||Y.__readType!==w.type)&&(Y.__readFormat=w.format,Y.__readType=w.type,Y.__formatReadable=S.textureFormatReadable(w.format),Y.__typeReadable=S.textureTypeReadable(w.type)),Y}this.readRenderTargetPixels=function(w,Y,ct,rt,ot,Wt,jt,Xt=0){if(!(w&&w.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(ee=ee[jt]),ee){g.bindFramebuffer(P.FRAMEBUFFER,ee);try{let se=w.textures[Xt],de=se.format,_e=se.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Xt);let ne=Qe(se);if(ne.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ne.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-rt&&ct>=0&&ct<=w.height-ot&&P.readPixels(Y,ct,rt,ot,St.convert(de),St.convert(_e),Wt)}finally{let se=j!==null?V.get(j).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ct,rt,ot,Wt,jt,Xt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(ee=ee[jt]),ee)if(Y>=0&&Y<=w.width-rt&&ct>=0&&ct<=w.height-ot){g.bindFramebuffer(P.FRAMEBUFFER,ee);let se=w.textures[Xt],de=se.format,_e=se.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Xt);let ne=Qe(se);if(ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.bufferData(P.PIXEL_PACK_BUFFER,Wt.byteLength,P.STREAM_READ),P.readPixels(Y,ct,rt,ot,St.convert(de),St.convert(_e),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let rn=j!==null?V.get(j).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,rn);let ke=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await hf(P,ke,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Wt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Ce),P.deleteSync(ke),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ct=0){let rt=Math.pow(2,-ct),ot=Math.floor(w.image.width*rt),Wt=Math.floor(w.image.height*rt),jt=Y!==null?Y.x:0,Xt=Y!==null?Y.y:0;Q.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,ct,0,0,jt,Xt,ot,Wt),g.unbindTexture()},this.copyTextureToTexture=function(w,Y,ct=null,rt=null,ot=0,Wt=0){let jt,Xt,ee,se,de,_e,ne,Ce,rn,ke=w.isCompressedTexture?w.mipmaps[Wt]:w.image;if(ct!==null)jt=ct.max.x-ct.min.x,Xt=ct.max.y-ct.min.y,ee=ct.isBox3?ct.max.z-ct.min.z:1,se=ct.min.x,de=ct.min.y,_e=ct.isBox3?ct.min.z:0;else{let tn=Math.pow(2,-ot);jt=Math.floor(ke.width*tn),Xt=Math.floor(ke.height*tn),w.isDataArrayTexture?ee=ke.depth:w.isData3DTexture?ee=Math.floor(ke.depth*tn):ee=1,se=0,de=0,_e=0}rt!==null?(ne=rt.x,Ce=rt.y,rn=rt.z):(ne=0,Ce=0,rn=0);let Oe=St.convert(Y.format),wn=St.convert(Y.type),Kt;Y.isData3DTexture?(Q.setTexture3D(Y,0),Kt=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Q.setTexture2DArray(Y,0),Kt=P.TEXTURE_2D_ARRAY):(Q.setTexture2D(Y,0),Kt=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);let In=g.getParameter(P.UNPACK_ROW_LENGTH),Te=g.getParameter(P.UNPACK_IMAGE_HEIGHT),Qn=g.getParameter(P.UNPACK_SKIP_PIXELS),Mi=g.getParameter(P.UNPACK_SKIP_ROWS),Wi=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,ke.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ke.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,se),g.pixelStorei(P.UNPACK_SKIP_ROWS,de),g.pixelStorei(P.UNPACK_SKIP_IMAGES,_e);let Xs=w.isDataArrayTexture||w.isData3DTexture,Ne=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){let tn=V.get(w),Xi=V.get(Y),He=V.get(tn.__renderTarget),qi=V.get(Xi.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,He.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let qs=0;qs<ee;qs++)Xs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V.get(w).__webglTexture,ot,_e+qs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V.get(Y).__webglTexture,Wt,rn+qs)),P.blitFramebuffer(se,de,jt,Xt,ne,Ce,jt,Xt,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(ot!==0||w.isRenderTargetTexture||V.has(w)){let tn=V.get(w),Xi=V.get(Y);g.bindFramebuffer(P.READ_FRAMEBUFFER,L),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,F);for(let He=0;He<ee;He++)Xs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,ot,_e+He):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,ot),Ne?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xi.__webglTexture,Wt,rn+He):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xi.__webglTexture,Wt),ot!==0?P.blitFramebuffer(se,de,jt,Xt,ne,Ce,jt,Xt,P.COLOR_BUFFER_BIT,P.NEAREST):Ne?P.copyTexSubImage3D(Kt,Wt,ne,Ce,rn+He,se,de,jt,Xt):P.copyTexSubImage2D(Kt,Wt,ne,Ce,se,de,jt,Xt);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ne?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Kt,Wt,ne,Ce,rn,jt,Xt,ee,Oe,wn,ke.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(Kt,Wt,ne,Ce,rn,jt,Xt,ee,Oe,ke.data):P.texSubImage3D(Kt,Wt,ne,Ce,rn,jt,Xt,ee,Oe,wn,ke):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Wt,ne,Ce,jt,Xt,Oe,wn,ke.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Wt,ne,Ce,ke.width,ke.height,Oe,ke.data):P.texSubImage2D(P.TEXTURE_2D,Wt,ne,Ce,jt,Xt,Oe,wn,ke);g.pixelStorei(P.UNPACK_ROW_LENGTH,In),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Qn),g.pixelStorei(P.UNPACK_SKIP_ROWS,Mi),g.pixelStorei(P.UNPACK_SKIP_IMAGES,Wi),Wt===0&&Y.generateMipmaps&&P.generateMipmap(Kt),g.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),g.unbindTexture()},this.resetState=function(){q=0,G=0,j=null,g.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var Or=class i extends Bt{constructor(){let t=i.SkyShader,e=new Ae({name:t.name,uniforms:En.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:un,depthWrite:!1});super(new pe(1,1,1),e),this.isSky=!0}};Or.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Pc=class extends Bt{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new U(.70707,.70707,0),f=new Ut(e.sunColor!==void 0?e.sunColor:16777215),u=new Ut(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new U(0,0,0),x=e.distortionScale!==void 0?e.distortionScale:20,A=e.side!==void 0?e.side:Ri,v=e.fog!==void 0?e.fog:!1,p=new Zn,y=new U,C=new U,_=new U,R=new ae,E=new U(0,0,-1),b=new Se,m=new U,M=new U,T=new Se,I=new ae,D=new ln,N=new Ve(s,r,{type:qe}),L={name:"MirrorShader",uniforms:En.merge([Gt.fog,Gt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ae},sunColor:{value:new Ut(8355711)},sunDirection:{value:new U(.70707,.70707,0)},eye:{value:new U},waterColor:{value:new Ut(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},F=new Ae({name:L.name,uniforms:En.clone(L.uniforms),vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,lights:!0,side:A,fog:v});F.uniforms.mirrorSampler.value=N.texture,F.uniforms.textureMatrix.value=I,F.uniforms.alpha.value=a,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=f,F.uniforms.waterColor.value=u,F.uniforms.sunDirection.value=h,F.uniforms.distortionScale.value=x,F.uniforms.eye.value=d,n.material=F,n.onBeforeRender=function(q,G,j){if(C.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(j.matrixWorld),R.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(R),m.subVectors(C,_),m.dot(y)>0)return;m.reflect(y).negate(),m.add(C),R.extractRotation(j.matrixWorld),E.set(0,0,-1),E.applyMatrix4(R),E.add(_),M.subVectors(C,E),M.reflect(y).negate(),M.add(C),D.position.copy(m),D.up.set(0,1,0),D.up.applyMatrix4(R),D.up.reflect(y),D.lookAt(M),D.far=j.far,D.updateMatrixWorld(),D.projectionMatrix.copy(j.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(D.projectionMatrix),I.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,C),p.applyMatrix4(D.matrixWorldInverse),b.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let k=D.projectionMatrix;T.x=(Math.sign(b.x)+k.elements[8])/k.elements[0],T.y=(Math.sign(b.y)+k.elements[9])/k.elements[5],T.z=-1,T.w=(1+k.elements[10])/k.elements[14],b.multiplyScalar(2/b.dot(T)),k.elements[2]=b.x,k.elements[6]=b.y,k.elements[10]=b.z+1-o,k.elements[14]=b.w,d.setFromMatrixPosition(j.matrixWorld);let st=q.getRenderTarget(),at=q.xr.enabled,Vt=q.shadowMap.autoUpdate;n.visible=!1,q.xr.enabled=!1,q.shadowMap.autoUpdate=!1,q.setRenderTarget(N),q.state.buffers.depth.setMask(!0),q.autoClear===!1&&q.clear(),q.render(G,D),n.visible=!0,q.xr.enabled=at,q.shadowMap.autoUpdate=Vt,q.setRenderTarget(st);let Pt=j.viewport;Pt!==void 0&&q.state.viewport(Pt)}}};var zr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},j_=new os(-1,1,1,-1,0,1),xu=class extends ve{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},Q_=new xu,pi=class{constructor(t){this._mesh=new Bt(Q_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,j_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Us=class extends Pn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=En.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new pi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ua=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ic=class extends Pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var da=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Rt);this._width=n.width,this._height=n.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Us(zr),this.copyPass.material.blending=ni,this.timer=new Wo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ua!==void 0&&(o instanceof ua?n=!0:o instanceof Ic&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fa=class extends Pn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ut}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Yf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Hr=class i extends Pn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Rt(t.x,t.y):new Rt(256,256),this.clearColor=new Ut(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,o,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ve(r,o,{type:qe,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ve(r,o,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Yf;this.highPassUniforms=En.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Rt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=En.clone(zr.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,premultipliedAlpha:!0,blending:vn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ut,this._oldClearAlpha=1,this._basic=new Be,this._fsQuad=new pi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Ae({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Rt(.5,.5)},direction:{value:new Rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Hr.BlurDirectionX=new Rt(1,0);Hr.BlurDirectionY=new Rt(0,1);var pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ma=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=En.clone(pa.uniforms),this.material=new Tr({name:pa.name,uniforms:this.uniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader}),this._fsQuad=new pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ge.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$o&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xa=_n.degToRad,Vr=new U(0,2.8,-9.5);function ga(i,t){let e=xa(i),n=xa(t);return new U(Math.sin(e)*Math.cos(n),Math.sin(n),-Math.cos(e)*Math.cos(n))}var Zf=`float h3(vec3 p){p=fract(p*vec3(443.897,441.423,437.195));p+=dot(p,p.yzx+19.19);return fract((p.x+p.y)*p.z);}
float n3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<6;i++){s+=a*n3(p);p=p*2.03+vec3(1.7,9.2,3.1);a*=.5;}return s;}`;function Jf({S:i,HQ:t,mobile:e,canvasTex:n,T:s}){let r={targets:[],moonDir:new U},o=0,a=n(128,128,pt=>{let Nt=pt.createRadialGradient(64,64,0,64,64,64);Nt.addColorStop(0,"rgba(255,255,255,1)"),Nt.addColorStop(.15,"rgba(255,255,255,.55)"),Nt.addColorStop(.45,"rgba(255,255,255,.12)"),Nt.addColorStop(1,"rgba(255,255,255,0)"),pt.fillStyle=Nt,pt.fillRect(0,0,128,128)}),l=pt=>(i.add(pt),pt),c=(pt,Nt)=>new Be({map:a,color:new Ut(pt).multiplyScalar(Nt),transparent:!0,depthWrite:!1,blending:vn,fog:!1}),h=new Ae({side:un,depthWrite:!1,transparent:!0,blending:vn,fog:!1,uniforms:{n:{value:0},t:s,tw:{value:0}},vertexShader:"varying vec3 v;void main(){v=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float n,t,tw;varying vec3 v;${Zf}
 vec3 stars(vec3 d,float sc,float th,float sz){vec3 p=d*sc;vec3 c=floor(p);float r=h3(c);if(r<th)return vec3(0.);vec3 o=vec3(h3(c+1.3),h3(c+2.7),h3(c+5.1))*.6+.2;float dd=length(fract(p)-o);
  float k=(r-th)/(1.-th);float rad=sz*(.35+.65*k*k);float b=smoothstep(rad,0.,dd)+exp(-dd*dd/(rad*rad*.15))*.6;float tw=.75+.25*sin(t*(1.5+h3(c+9.)*5.)+r*60.);
  float tmp=h3(c+4.);vec3 col=tmp<.3?vec3(.7,.8,1.15):tmp<.75?vec3(1.,.97,.92):tmp<.92?vec3(1.1,.85,.6):vec3(1.2,.6,.45);return col*b*tw*(.25+k*1.6);}
 void main(){if(v.y<-.03)discard;vec3 bn=normalize(vec3(.62,.55,.56));float lat=dot(v,bn);vec3 gc=normalize(vec3(-.55,.18,-.82));float cg=max(dot(v,gc),0.);float core=pow(cg,4.);
  float width=.085+.11*core;float band=exp(-pow(lat/width,2.));float bandW=exp(-pow(lat/(width*2.2),2.));
  float f=fbm(v*6.),f2=fbm(v*19.+5.),f3=fbm(v*48.+2.);float mw=band*(.25+1.1*f*f)*(.55+.7*f2)*(.8+.4*f3)+core*band*1.2+bandW*.08*f;
  float rr=1.-abs(fbm(v*8.+vec3(3.))*2.-1.);rr=pow(rr,5.);float rr2=1.-abs(fbm(v*23.+vec3(7.))*2.-1.);rr2=pow(rr2,7.);
  float lane=(rr*.9+rr2*.6)*exp(-pow((lat+.02*sin(cg*14.))/(width*.55),2.));mw*=1.-clamp(lane*1.25,0.,.93);
  vec3 col=mix(vec3(.42,.52,1.),vec3(1.,.8,.58),clamp(core*1.4+f*.35,0.,1.));vec3 c=col*mw*.42;
  c+=vec3(1.,.28,.42)*smoothstep(.58,.82,fbm(v*5.+11.))*band*.32+vec3(.25,.55,1.)*smoothstep(.6,.85,fbm(v*4.+21.))*bandW*.2+vec3(1.,.55,.3)*smoothstep(.62,.85,fbm(v*7.+31.))*band*core*.6;
  float dens=band*.035;c+=stars(v,260.,.962-dens,.18)+stars(v,520.,.972-dens*.6,.16)*.8+stars(v,130.,.986,.2)*1.3+stars(v,60.,.993,.22)*2.2+stars(v,1000.,.95-dens*2.,.14)*band*.9;
  float hz=1.-smoothstep(0.,.3,v.y);c+=vec3(.05,.13,.08)*hz*.45+vec3(.3,.13,.07)*pow(1.-smoothstep(0.,.07,v.y),2.)*.35;
  c*=smoothstep(-.03,.03,v.y);float hh=max(v.y,0.);vec3 sd=normalize(vec3(-.438,0.,-.899));float ss=max(dot(normalize(vec3(v.x,0.,v.z)),sd),0.);
  vec3 twl=mix(vec3(.16,.24,.46),vec3(.03,.05,.13),smoothstep(0.,.55,hh))+vec3(1.,.45,.2)*pow(ss,4.)*exp(-hh*10.)*.9+vec3(.7,.35,.5)*exp(-hh*6.)*.22;twl*=smoothstep(-.02,.02,v.y);
  gl_FragColor=vec4(c*n+twl*tw,1.);}`}),f=l(new Bt(new ye(4e3,64,32),h));f.renderOrder=-1;let u=new ve;u.setAttribute("position",new ie(new Float32Array(36),3)),u.setAttribute("color",new ie(new Float32Array(36),3));let d=l(new Mo(u,new yr({vertexColors:!0,transparent:!0,blending:vn,depthWrite:!1,fog:!1})));d.frustumCulled=!1;let x=[0,1].map(()=>({life:0,next:2+Math.random()*4})),A=n(512,512,(pt,Nt)=>{let Zt=pt.createRadialGradient(220,220,20,256,256,256);Zt.addColorStop(0,"#fffdf6"),Zt.addColorStop(.85,"#e9e5dc"),Zt.addColorStop(1,"#c9c3b8"),pt.fillStyle=Zt,pt.beginPath(),pt.arc(256,256,254,0,7),pt.fill(),pt.save(),pt.clip(),[[180,190,90],[300,170,70],[250,300,110],[330,330,60],[150,320,55]].forEach(([Qt,me,Me])=>{let we=pt.createRadialGradient(Qt,me,0,Qt,me,Me);we.addColorStop(0,"rgba(120,118,125,.45)"),we.addColorStop(1,"rgba(120,118,125,0)"),pt.fillStyle=we,pt.fillRect(0,0,Nt,Nt)});for(let Qt=0;Qt<160;Qt++){let me=Math.random()*Nt,Me=Math.random()*Nt,we=Math.pow(Math.random(),3)*28+2;pt.fillStyle="rgba(90,88,95,.28)",pt.beginPath(),pt.arc(me,Me,we,0,7),pt.fill(),pt.strokeStyle="rgba(255,255,250,.35)",pt.lineWidth=1.2,pt.beginPath(),pt.arc(me-we*.15,Me-we*.15,we,2.4,5.5),pt.stroke()}pt.restore();let $t=pt.createLinearGradient(0,0,Nt,Nt);$t.addColorStop(0,"rgba(0,0,0,0)"),$t.addColorStop(.7,"rgba(0,0,0,0)"),$t.addColorStop(1,"rgba(0,0,10,.35)"),pt.fillStyle=$t,pt.fillRect(0,0,Nt,Nt)}),v=()=>ga(e?-6:-12,e?14:8.5).multiplyScalar(2600),p=l(new Bt(new wo(38,64),new Be({map:A,transparent:!0,fog:!1,color:new Ut(1,1,1).multiplyScalar(5)}))),y=l(new Bt(new Ee(1,1),c(12570879,.9))),C=l(new Bt(new Ee(1,1),c(9085183,.35))),_=new Ie,R=new Ie;_.add(R);let E=480,b=300,m=e?28:t?56:40,M=e?16:t?32:24,T=1,I=n(512,256,(pt,Nt,Zt)=>{pt.fillStyle="#141c33",pt.fillRect(0,0,Nt,Zt);for(let $t=6;$t<Nt;$t+=42){pt.fillStyle="#070b17",pt.fillRect($t,14,36,Zt-28),pt.fillStyle="#243050";for(let Qt=20;Qt<Zt-18;Qt+=9)pt.fillRect($t+3,Qt,30,6)}pt.fillStyle="#3a4870",pt.fillRect(0,0,Nt,8),pt.fillRect(0,Zt-8,Nt,8)},!0),D=n(256,128,(pt,Nt,Zt)=>{pt.fillStyle="#000",pt.fillRect(0,0,Nt,Zt);let $t=["#36f0d0","#5aa8ff","#36f0d0","#ff5ac8","#9dff6a"];for(let Qt=3;Qt<Nt;Qt+=21){pt.fillStyle=$t[(Qt/21|0)%$t.length],pt.globalAlpha=.85,pt.fillRect(Qt+2,16,2,Zt-32),pt.fillRect(Qt+15,16,2,Zt-32),pt.globalAlpha=1;for(let me=18;me<Zt-18;me+=6)Math.random()<.35&&(pt.fillStyle="#fff",pt.fillRect(Qt+6+(Math.random()*3|0)*3,me,2,2))}pt.fillStyle="#ffc98a",pt.fillRect(0,5,Nt,3),pt.fillRect(0,Zt-8,Nt,3)},!0),N={value:0},L={value:new U(0,-1,0)},F=(pt,Nt)=>(pt.onBeforeCompile=Zt=>{Zt.uniforms.rimK=N,Zt.uniforms.rimD=L,Zt.uniforms.t=s,Zt.fragmentShader=Zt.fragmentShader.replace("#include <common>",`#include <common>
uniform float rimK,t;uniform vec3 rimD;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
  {vec2 cq=floor(vEmissiveMapUv*vec2(12.,4.));float ph=fract(sin(dot(cq,vec2(12.9898,78.233)))*43758.5);totalEmissiveRadiance*=.45+.9*smoothstep(.2,.9,sin(t*(.6+ph*1.4)+ph*40.)*.5+.5);}
  #endif
  {float fr=pow(1.-abs(dot(normal,normalize(vViewPosition))),2.2);float lit=max(0.,dot(normal,rimD));totalEmissiveRadiance+=vec3(${Nt})*pow(fr,3.)*smoothstep(.0,.35,lit)*rimK*2.;}`)},pt),q=F(new qt({color:3291733,map:I,metalness:.55,roughness:.42,emissive:16777215,emissiveMap:D,emissiveIntensity:1.6,fog:!1}),"2.4,1.1,.5"),G=F(new qt({color:2896712,metalness:.8,roughness:.35,emissive:726064,fog:!1}),"1.6,.75,.38"),j=G,k=n(256,256,(pt,Nt,Zt)=>{pt.fillStyle="#0a1638",pt.fillRect(0,0,Nt,Zt);for(let $t=0;$t<Zt;$t+=16)for(let Qt=0;Qt<Nt;Qt+=16)pt.fillStyle=`hsl(${222+Math.random()*10},70%,${18+Math.random()*12}%)`,pt.fillRect(Qt+1,$t+1,14,14);pt.strokeStyle="#8fb0ff",pt.lineWidth=3,pt.strokeRect(0,0,Nt,Zt)},!0),st=F(new qt({map:k,metalness:.6,roughness:.25,emissive:2113696,emissiveMap:k,emissiveIntensity:.7,side:Le,fog:!1}),"1.2,.6,.35"),at=n(64,256,(pt,Nt,Zt)=>{let $t=pt.createLinearGradient(0,0,0,Zt);$t.addColorStop(0,"#fff2d0"),$t.addColorStop(.25,"#ffb060"),$t.addColorStop(1,"#ff4a10"),pt.fillStyle=$t,pt.fillRect(0,0,Nt,Zt),pt.fillStyle="rgba(40,20,10,.55)";for(let Qt=6;Qt<Zt;Qt+=9)pt.fillRect(0,Qt,Nt,2)}),Vt=new Be({map:at,color:new Ut(1,1,1).multiplyScalar(1.6),side:Le,fog:!1,transparent:!0,depthWrite:!1,blending:vn}),Pt=new Fe,W=new pe(1,1,1),xt=new nn(W,q,m*2+M),wt=0;for(let[pt,Nt,Zt,$t,Qt]of[[E,m,2*Math.PI*E/m*.86,30,62],[b,M,2*Math.PI*b/M*.82,22,44]])for(let me=0;me<Nt;me++){let Me=me/Nt*Math.PI*2,we=pt===E?[[0,1]]:[[0,1]];for(let[je]of we)Pt.position.set(Math.cos(Me)*pt,Math.sin(Me)*pt,je),Pt.rotation.set(0,0,Me+Math.PI/2),Pt.scale.set(Zt,$t*(1+me*7%3*.12),Qt),Pt.updateMatrix(),xt.setMatrixAt(wt++,Pt.matrix)}for(let pt=0;pt<m;pt++){let Nt=(pt+.5)/m*Math.PI*2;Pt.position.set(Math.cos(Nt)*(E+26),Math.sin(Nt)*(E+26),0),Pt.rotation.set(0,0,Nt+Math.PI/2),Pt.scale.set(2*Math.PI*E/m*.6,18,40),Pt.updateMatrix(),xt.setMatrixAt(wt++,Pt.matrix)}xt.count=wt,R.add(xt);let X=t?14:e?5:8,O=(m+M)*X,ht=new Ee(4,1.4),nt=new Be({color:16777215,fog:!1,side:Le});nt.onBeforeCompile=pt=>{pt.uniforms.t=s,pt.uniforms.boost={value:1},nt.userData.sh=pt,pt.vertexShader=pt.vertexShader.replace("#include <common>",`#include <common>
varying float vPh;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPh=float(gl_InstanceID);`),pt.fragmentShader=pt.fragmentShader.replace("#include <common>",`#include <common>
uniform float t,boost;varying float vPh;`).replace("#include <color_fragment>",`#include <color_fragment>
float ph=fract(sin(vPh*12.9898)*43758.5);float on=step(.3,fract(t*(.3+ph*1.7)+ph*7.));diffuseColor.rgb*=(.15+on*4.)*boost;`)};let it=new nn(ht,nt,O),Tt=[3600592,5941503,16734920,3600592,10354538],Ft=new Ut;wt=0;for(let[pt,Nt,Zt]of[[E,m,62],[b,M,44]])for(let $t=0;$t<Nt;$t++){let Qt=$t/Nt*Math.PI*2,me=2*Math.PI*pt/Nt*.8;for(let Me=0;Me<X;Me++){let we=(Me/(X-1)-.5)*me,je=pt+(Me*5%7-3)*3;Pt.position.set(Math.cos(Qt)*je-Math.sin(Qt)*we,Math.sin(Qt)*je+Math.cos(Qt)*we,Zt/2+.6),Pt.rotation.set(0,0,Qt),Pt.updateMatrix(),it.setMatrixAt(wt,Pt.matrix),Ft.set(Tt[($t+Me)%5]),it.setColorAt(wt++,Ft)}}R.add(it),it.visible=!1;let dt=new Ee(34,150);dt.translate(0,75,0);let ut=e?8:16,mt=new nn(dt,Vt,ut);for(let pt=0;pt<ut;pt++){let Nt=(pt+.25)/ut*Math.PI*2;Pt.position.set(Math.cos(Nt)*(E+30),Math.sin(Nt)*(E+30),0),Pt.rotation.set(0,0,Nt-Math.PI/2),Pt.scale.set(1,1,1),Pt.updateMatrix(),mt.setMatrixAt(pt,Pt.matrix)}R.add(mt);let gt=new Be({color:new Ut(1,.82,.55).multiplyScalar(2.6),fog:!1}),_t=e?4:8;for(let pt=0;pt<_t;pt++){let Nt=pt/_t*Math.PI*2,Zt=E-70,$t=new Bt(new We(7,7,Zt,10),G);$t.position.set(Math.cos(Nt)*(70+Zt/2),Math.sin(Nt)*(70+Zt/2),0),$t.rotation.z=Nt-Math.PI/2,R.add($t);let Qt=new Bt(new pe(2.2,Zt*.96,1),gt);if(Qt.position.copy($t.position),Qt.position.z=7.2,Qt.rotation.z=Nt-Math.PI/2,R.add(Qt),pt%2===0&&!e)for(let me of[-1,1]){let Me=new Bt(new Ee(Zt*.42,58),st),we=70+Zt*.62,je=Nt+me*.16;Me.position.set(Math.cos(je)*we,Math.sin(je)*we,-6),Me.rotation.z=je,R.add(Me)}}let At=new Be({color:new Ut(3600592).multiplyScalar(2.4),fog:!1});for(let[pt,Nt]of[[E-16,32],[E+16,32],[b-12,23],[b+12,23]]){let Zt=new Bt(new ns(pt,1.1,4,180),At);Zt.position.z=Nt,R.add(Zt)}let Dt=new Ie;_.add(Dt);let H=new Bt(new We(62,62,120,32),q);H.rotation.x=Math.PI/2,_.add(H);for(let pt of[-62,62]){let Nt=new Bt(new ns(64,2.4,6,64),new Be({color:new Ut(16765562).multiplyScalar(4),fog:!1}));Nt.position.z=pt,_.add(Nt)}let Z=new ve,P=[];for(let pt=0;pt<72;pt++){let Nt=pt/72*Math.PI*2;P.push(Math.cos(Nt)*(E+48),Math.sin(Nt)*(E+48),20)}Z.setAttribute("position",new ie(P,3));let K=new ui({map:a,size:t?16:20,color:new Ut(1,.35,.3).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:vn,fog:!1}),J=new Ai(Z,K);R.add(J);let S=e?10:24,g=new ve;g.setAttribute("position",new ie(new Float32Array(S*3),3));let B=new ui({map:a,size:14,color:new Ut(1,.95,.8).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:vn,fog:!1}),V=new Ai(g,B);V.frustumCulled=!1,_.add(V);let Q=new Bt(new Ee(1,1),c(4881663,.16));_.add(Q),Q.scale.setScalar(E*3),Q.position.z=-60;let yt=new Bt(new ye(E*1.15,12,8),new Be({visible:!1}));_.add(yt),_.userData={game:1,hit:yt,hover:0,label:"Rackstar"},l(_),r.targets.push(_);let ft=new as(16751194,0);i.add(ft),i.add(ft.target);let $=new as(6982911,0);i.add($),i.add($.target);let tt=new Ie,Mt=36,kt=new Ae({transparent:!0,depthWrite:!1,blending:vn,fog:!1,uniforms:{t:s,o:{value:0},hov:{value:0}},vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float t,o,hov;varying vec2 p;${Zf}
 float st(vec2 q,float sc,float th){vec2 c=floor(q*sc);float r=h3(vec3(c,7.));if(r<th)return 0.;vec2 off=vec2(h3(vec3(c,1.)),h3(vec3(c,2.)))*.6+.2;float d=length(fract(q*sc)-off);return smoothstep(.14,0.,d)*(r-th)/(1.-th)*3.;}
 void main(){float r=length(p);float R=${Mt}.;if(r>R)discard;float rn=r/R;
  // gravitational lensing: warp background starfield toward einstein ring
  float re=5.5;vec2 q=p*(1.-re*re/max(r*r,.5));float lens=st(q*.02+.3,40.,.9)+st(q*.02+.7,90.,.94)*.6;
  float ring=exp(-pow((r-re)/.9,2.))*1.6;
  // accretion swirl
  float ang=atan(p.y,p.x);float sw=fbm(vec3(cos(ang*2.+t*.35-rn*6.)*2.,sin(ang*2.+t*.35-rn*6.)*2.,rn*6.-t*.2));float disk=smoothstep(.5,.12,rn)*smoothstep(.04,.12,rn)*pow(sw,2.)*1.4;
  vec3 c=vec3(.85,.9,1.)*lens*smoothstep(1.,.6,rn)+vec3(1.,.85,.6)*ring+mix(vec3(1.,.55,.25),vec3(.75,1.,.45),rn*1.6)*disk;
  // field rings like the game UI
  float fr=0.;for(int i=1;i<4;i++){float rr=float(i)*8.5;fr+=smoothstep(.22,0.,abs(r-rr))*step(.5,fract(ang*float(i)*5./6.2832+t*.05*float(i)));}c+=vec3(.6,1.,.45)*fr*.25;
  c+=vec3(1.,.95,.8)*exp(-r*r/6.)*3.;c*=(1.+hov*.8);gl_FragColor=vec4(c*o*smoothstep(1.,.85,rn),1.);}`}),Ct=new Bt(new Ee(Mt*2,Mt*2),kt);tt.add(Ct);let It=new Bt(new Ee(1,1),c(16773312,1.6));It.scale.setScalar(14),It.position.z=.2,tt.add(It);let Ot=new Bt(new Ee(1,1),c(14286698,.6));Ot.scale.setScalar(60),Ot.position.z=-.2,tt.add(Ot);function et(pt,Nt){let Zt=[];for(let Qt=0;Qt<pt.length;Qt++){let me=pt[Qt],Me=pt[(Qt+1)%pt.length],we=Me[0]-me[0],je=Me[1]-me[1],Xn=Math.hypot(we,je),Mn=-je/Xn*Nt,Hn=we/Xn*Nt,ri=me[0]-we/Xn*Nt*.5,_i=me[1]-je/Xn*Nt*.5,yi=Me[0]+we/Xn*Nt*.5,zt=Me[1]+je/Xn*Nt*.5;Zt.push(ri+Mn,_i+Hn,0,ri-Mn,_i-Hn,0,yi+Mn,zt+Hn,0,ri-Mn,_i-Hn,0,yi-Mn,zt-Hn,0,yi+Mn,zt+Hn,0)}let $t=new ve;return $t.setAttribute("position",new ie(Zt,3)),$t}let bt=[[1,0],[.35,.075],[-.55,.075],[-.78,.2],[-.68,0],[-.78,-.2],[-.55,-.075],[.35,-.075]],z=[[.55,0],[-.45,.42],[-.2,0],[-.45,-.42]],Et=new Ut(14286698),lt=[bt,z].map((pt,Nt)=>{let Zt=new Ie,$t=new Be({color:Et.clone().multiplyScalar(6),side:2,transparent:!0,depthWrite:!1,fog:!1}),Qt=new Be({color:Et.clone().multiplyScalar(1.3),side:2,transparent:!0,depthWrite:!1,blending:vn,fog:!1});Zt.add(new Bt(et(pt,.05),Qt),new Bt(et(pt,.018),$t));let me=new Bt(new Ee(1,1),c(16752704,3));return me.position.x=Nt?-.4:-.85,Zt.add(me),Zt.scale.setScalar(Nt?3.2:4.4),Zt.position.z=.5,tt.add(Zt),{g:Zt,m:$t,gm:Qt,fl:me,p:new Rt,v:new Rt,hd:0,trail:[],thr:0,dead:0}}),St=110,Lt=new ve;Lt.setAttribute("position",new ie(new Float32Array(2*St*3),3)),Lt.setAttribute("color",new ie(new Float32Array(2*St*3),3));let vt=new Ai(Lt,new ui({map:a,size:.9,vertexColors:!0,transparent:!0,depthWrite:!1,blending:vn,fog:!1}));vt.frustumCulled=!1,tt.add(vt);let Ht=new ve;Ht.setAttribute("position",new ie(new Float32Array(48),3));let Yt=new Ai(Ht,new ui({map:a,size:1.6,color:new Ut(1,.8,.5).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:vn,fog:!1}));Yt.frustumCulled=!1,tt.add(Yt);let ce=new Bt(new Ee(1,1),c(16769184,6));ce.position.z=.6,ce.visible=!1,tt.add(ce);let he=0,$e=[],mn=1400;function ue(pt,Nt){let Zt=Math.random()*6.283,$t=24+Math.random()*7;pt.p.set(Math.cos(Zt)*$t,Math.sin(Zt)*$t);let Qt=Math.sqrt(mn/$t)*(.75+Math.random()*.3);pt.v.set(-Math.sin(Zt),Math.cos(Zt)).multiplyScalar(Qt*(Nt?-1:1)*(Math.random()<.5?1:-1)),pt.trail.length=0}lt.forEach(ue);let zn=new Bt(new ye(Mt,12,8),new Be({visible:!1}));tt.add(zn),tt.userData={game:0,hit:zn,hover:0,label:"Needle vs Wedge"},l(tt),r.targets.push(tt);let Ke={};return r.layout=pt=>{Ke=pt<1?{well:[-12,52,190],st:[4,30,3e3],sts:1.05}:{well:[-36,24,190],st:[16,27,3e3],sts:1.5},tt.position.copy(Vr).addScaledVector(ga(Ke.well[0],Ke.well[1]),Ke.well[2]),tt.lookAt(Vr),_.position.copy(Vr).addScaledVector(ga(Ke.st[0],Ke.st[1]),Ke.st[2]),_.scale.setScalar(Ke.sts),_.lookAt(Vr),_.rotateX(xa(58)),_.rotateY(xa(-38)),_.rotateZ(xa(12));let Zt=v();p.position.copy(Zt),p.lookAt(0,0,0),y.position.copy(Zt).multiplyScalar(.999),y.lookAt(0,0,0),y.scale.setScalar(380),C.position.copy(Zt).multiplyScalar(.998),C.lookAt(0,0,0),C.scale.setScalar(1100),r.moonDir.copy(Zt).normalize()},r.focus=pt=>pt==="station"?_.position:tt.position,r.setNight=(pt,Nt)=>{o=pt;let Zt=_n.smoothstep(pt,.35,1);h.uniforms.n.value=Zt,h.uniforms.tw.value=_n.smoothstep(pt,.12,.42)*(1-.8*_n.smoothstep(pt,.55,1));let $t=_n.smoothstep(pt,.3,.75);[p,y,C].forEach(Me=>{Me.visible=$t>.01,Me.material.opacity=$t});let Qt=_n.smoothstep(pt,.45,.85),me=_n.smoothstep(pt,.58,.95);_.visible=Qt>.01,tt.visible=me>.01,r.vis=Qt;{let Me=1-Math.pow(1-Qt,3),we=1-Math.pow(1-me,3);_.scale.setScalar((Ke.sts||1)*(.88+.12*Me)),tt.scale.setScalar(.55+.45*we),tt.rotation.z=(1-we)*.6}ft.intensity=Qt*.5,ft.position.copy(_.position).addScaledVector(Nt,-900).add(new U(0,-1400,0)),ft.target.position.copy(_.position),$.intensity=Qt*.6,$.position.copy(_.position).add(r.moonDir.clone().multiplyScalar(800)),$.target.position.copy(_.position)},r.update=(pt,Nt,Zt)=>{let $t=r.vis||0,Qt=u.attributes.position.array,me=u.attributes.color.array;if(x.forEach((zt,te)=>{if(h.uniforms.n.value<.5){me.fill(0,te*6,te*6+6);return}if(zt.next-=Nt,zt.life<=0&&zt.next<=0&&(zt.life=.9,zt.next=4+Math.random()*7,zt.a=ga(Math.random()*70-35,25+Math.random()*30),zt.b=ga(Math.random()*70-35,10+Math.random()*12)),zt.life>0){zt.life-=Nt;let Qe=1-zt.life/.9,w=zt.a.clone().lerp(zt.b,Qe).normalize().multiplyScalar(3e3),Y=zt.a.clone().lerp(zt.b,Math.max(0,Qe-.18)).normalize().multiplyScalar(3e3);w.add(Vr),Y.add(Vr),Qt.set([w.x,w.y,w.z,Y.x,Y.y,Y.z],te*6);let ct=Math.sin(Math.min(1,Qe)*Math.PI)*6;me.set([ct,ct,ct*.9,0,0,0],te*6)}else me.fill(0,te*6,te*6+6)}),u.attributes.position.needsUpdate=u.attributes.color.needsUpdate=!0,!$t)return;R.rotation.z+=Nt*.012,_.userData.hover+=((Zt===_?1:0)-_.userData.hover)*.12,nt.userData.sh&&(nt.userData.sh.uniforms.boost.value=(1+_.userData.hover*1.5)*$t),q.emissiveIntensity=1.6+_.userData.hover*2.5,N.value=$t*(3+_.userData.hover);{let zt=new U(0,-1,.25).normalize(),te=r._cam;te&&zt.transformDirection(te.matrixWorldInverse),L.value.copy(zt)}[q,G,st].forEach(zt=>{zt.transparent=$t<1,zt.opacity=$t}),K.opacity=$t*(pt%1.6<.25?1:.25),Q.material.opacity=$t*(.7+_.userData.hover*.6);let Me=g.attributes.position.array;for(let zt=0;zt<S;zt++){let te=(pt*(.02+zt%5*.006)+zt/S)%1,Qe=zt*2.399,w,Y,ct;if(zt%3===0){let rt=E*2.4*(1-te)+70*te;w=Math.cos(Qe)*rt*.3,Y=Math.sin(Qe)*rt*.3,ct=(zt%2?1:-1)*(80+rt*.9)}else{let rt=b+(E-b)*(.5+.5*Math.sin(te*6.283)),ot=Qe+te*(zt%2?1:-1)*1.2;w=Math.cos(ot)*rt,Y=Math.sin(ot)*rt,ct=40+zt%4*8}Me[zt*3]=w,Me[zt*3+1]=Y,Me[zt*3+2]=ct}g.attributes.position.needsUpdate=!0,B.opacity=$t;let we=tt.userData;we.hover+=((Zt===tt?1:0)-we.hover)*.12,kt.uniforms.o.value=$t,kt.uniforms.hov.value=we.hover,It.material.opacity=$t,Ot.material.opacity=$t*(.6+we.hover*.6);let je=4,Xn=Math.min(Nt,.05)/je,Mn=lt[0],Hn=lt[1];for(let zt=0;zt<je;zt++)lt.forEach((te,Qe)=>{if(te.dead>0)return;let w=te.p.lengthSq(),Y=Math.sqrt(w),ct=te.p.clone().multiplyScalar(-mn/(w*Y)),ot=(Qe?Mn:Hn).p.clone().sub(te.p);te.thr=Math.max(0,te.thr-Xn),Math.random()<.004&&(te.thr=.6+Math.random()*.8,te.td=Qe?new Rt(-te.v.y,te.v.x).normalize().multiplyScalar(Math.random()<.5?1:-1):ot.normalize()),Y>32&&ct.addScaledVector(te.p,-.6/Y*10),te.thr>0&&te.td&&ct.addScaledVector(te.td,22),te.v.addScaledVector(ct,Xn),te.v.length()>60&&te.v.setLength(60),te.p.addScaledVector(te.v,Xn);{let Wt=te.p.length();Wt<9&&!te.near?(te.near=1,r.onSling&&r.onSling(te.p.x/30)):Wt>13&&(te.near=0)}te.p.length()<3.4&&(te.dead=1.4,ce.visible=!0,he=0,ce.position.set(te.p.x,te.p.y,.6))});lt.forEach((zt,te)=>{if(zt.dead>0){zt.dead-=Nt,zt.g.visible=!1,zt.dead<=0&&(ue(zt,te),zt.g.visible=!0);return}let w=Math.atan2((zt.thr>0&&zt.td?zt.td:zt.v).y,(zt.thr>0&&zt.td?zt.td:zt.v).x)-zt.hd;w=Math.atan2(Math.sin(w),Math.cos(w)),zt.hd+=w*Math.min(1,Nt*6),zt.g.position.set(zt.p.x,zt.p.y,.5),zt.g.rotation.z=zt.hd,zt.m.opacity=$t,zt.gm.opacity=$t*(.5+we.hover*.5),zt.fl.material.opacity=$t*(zt.thr>0?1:.25),zt.fl.scale.set(zt.thr>0?1.1+Math.random()*.5:.4,.35,1),zt.trail.unshift(zt.p.clone()),zt.trail.length>St&&zt.trail.pop()});let ri=Lt.attributes.position.array,_i=Lt.attributes.color.array;if(ri.fill(0),_i.fill(0),lt.forEach((zt,te)=>zt.trail.forEach((Qe,w)=>{let Y=(te*St+w)*3;ri[Y]=Qe.x,ri[Y+1]=Qe.y,ri[Y+2]=.3;let ct=(1-w/St)*$t*(w%2?.45:1);_i[Y]=.85*ct,_i[Y+1]=1*ct,_i[Y+2]=.42*ct})),Lt.attributes.position.needsUpdate=Lt.attributes.color.needsUpdate=!0,Math.random()<Nt*.7&&Mn.dead<=0&&Hn.dead<=0){let zt=Math.random()<.6?Mn:Hn,te=zt===Mn?Hn:Mn;$e.push({p:zt.p.clone(),v:te.p.clone().sub(zt.p).normalize().multiplyScalar(40).add(zt.v.clone().multiplyScalar(.5)),l:1.8})}let yi=Ht.attributes.position.array;yi.fill(9999);for(let zt=$e.length-1;zt>=0;zt--){let te=$e[zt];te.l-=Nt;let Qe=te.p.lengthSq();te.v.addScaledVector(te.p,-mn/(Qe*Math.sqrt(Qe))*Nt),te.p.addScaledVector(te.v,Nt),(te.l<=0||Qe<9)&&$e.splice(zt,1)}$e.slice(0,16).forEach((zt,te)=>{yi[te*3]=zt.p.x,yi[te*3+1]=zt.p.y,yi[te*3+2]=.4}),Ht.attributes.position.needsUpdate=!0,Yt.material.opacity=$t,ce.visible&&(he+=Nt,ce.scale.setScalar(4+he*30),ce.material.opacity=Math.max(0,1-he/.7)*$t,he>.7&&(ce.visible=!1))},r}var Ns=(i,t,e)=>new U(i,t,e),ps=(i,t,e)=>(e=Math.min(1,Math.max(0,(e-i)/(t-i))),e*e*(3-2*e)),vu={};function $f(i){return vu[i]?vu[i]:vu[i]=fetch(i).then(t=>t.arrayBuffer()).then(t=>{let n=new DataView(t).getUint32(12,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,20,n))),r=20+n+8,o=k=>{let st=s.accessors[k],at=s.bufferViews[st.bufferView],Vt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4}[st.type],Pt={5126:Float32Array,5123:Uint16Array,5121:Uint8Array,5125:Uint32Array}[st.componentType],W=r+(at.byteOffset||0)+(st.byteOffset||0),xt=new Pt(t.slice(W,W+st.count*Vt*Pt.BYTES_PER_ELEMENT)),wt=st.normalized?{5123:65535,5121:255}[st.componentType]:1;return{arr:xt,n:Vt,f:wt}},a=s.nodes,l=new Array(a.length).fill(-1);a.forEach((k,st)=>(k.children||[]).forEach(at=>l[at]=st));let c=[],h=k=>{if(c[k])return c[k];let st=a[k],at=new ae;return at.compose(Ns(...st.translation||[0,0,0]),new en(...st.rotation||[0,0,0,1]),Ns(...st.scale||[1,1,1])),l[k]>=0&&at.premultiply(h(l[k])),c[k]=at},f=s.skins[0],u=f.joints,d=u.map(k=>a[k].name),x=new Map(u.map((k,st)=>[k,st])),A=u.map(k=>{let st=l[k];for(;st>=0&&!x.has(st);)st=l[st];return st>=0?x.get(st):-1}),v=u.map(k=>Ns(0,0,0).setFromMatrixPosition(h(k))),p=a.findIndex(k=>k.mesh!==void 0),y=h(p),C=s.meshes[a[p].mesh].primitives[0],_=C.attributes,R=o(_.POSITION),E=o(_.NORMAL),b=o(_.COLOR_0),m=o(_.JOINTS_0),M=o(_.WEIGHTS_0),T=o(C.indices),I=R.arr.length/3,D=new Float32Array(I*3),N=new Float32Array(I*3),L=new Float32Array(I*3),F=new Uint16Array(I*4),q=new Float32Array(I*4),G=new le().getNormalMatrix(y),j=Ns(0,0,0);for(let k=0;k<I;k++){j.set(R.arr[k*3],R.arr[k*3+1],R.arr[k*3+2]).applyMatrix4(y),D.set([j.x,j.y,j.z],k*3),j.set(E.arr[k*3],E.arr[k*3+1],E.arr[k*3+2]).applyMatrix3(G).normalize(),N.set([j.x,j.y,j.z],k*3);for(let at=0;at<3;at++)L[k*3+at]=b.arr[k*b.n+at]/b.f;let st=0;for(let at=0;at<4;at++)F[k*4+at]=m.arr[k*4+at],q[k*4+at]=M.arr[k*4+at]/M.f,st+=q[k*4+at];if(st>0)for(let at=0;at<4;at++)q[k*4+at]/=st}return{pos:D,nor:N,col:L,si:F,sw:q,idx:Array.from(T.arr),names:d,parents:A,world:v,BI:Object.fromEntries(d.map((k,st)=>[k,st]))}})}function sn(i,t,e,n=0){return{g:i.index?i.toNonIndexed():i,bone:t,color:e,fx:n}}function Vi(i,t=[]){let e=[...i.pos],n=[...i.nor],s=[...i.col],r=[...i.si],o=[...i.sw],a=new Array(i.pos.length/3).fill(0),l=[...i.idx],c=new Ut;for(let f of t){let u=f.g;u.attributes.normal||u.computeVertexNormals();let d=u.attributes.position,x=u.attributes.normal,A=e.length/3;c.set(f.color).convertSRGBToLinear();let v=Array.isArray(f.bone)?f.bone:[[f.bone,1]];for(let p=0;p<d.count;p++){e.push(d.getX(p),d.getY(p),d.getZ(p)),n.push(x.getX(p),x.getY(p),x.getZ(p)),s.push(c.r,c.g,c.b),a.push(f.fx);for(let y=0;y<4;y++){let C=v[y];r.push(C?i.BI[C[0]]:0),o.push(C?C[1]:0)}l.push(A+p)}}let h=new ve;return h.setAttribute("position",new ie(e,3)),h.setAttribute("normal",new ie(n,3)),h.setAttribute("color",new ie(s,3)),h.setAttribute("skinIndex",new Ts(r,4)),h.setAttribute("skinWeight",new ie(o,4)),h.setAttribute("fx",new ie(a,1)),h.setIndex(l),h.computeBoundingSphere(),h}var fs=i=>i.toFixed(2);function va(i,{nz:t=300,grade:e=.25,tint:n=[.97,1,1.04],extra:s}={}){return i(16777215,{vertexColors:!0,obc:r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float fx;varying float vFx;varying vec3 vBP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFx=fx;vBP=position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vFx;varying vec3 vBP;float hs(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}float vn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hs(i),hs(i+vec3(1,0,0)),f.x),mix(hs(i+vec3(0,1,0)),hs(i+vec3(1,1,0)),f.x),f.y),mix(mix(hs(i+vec3(0,0,1)),hs(i+vec3(1,0,1)),f.x),mix(hs(i+vec3(0,1,1)),hs(i+vec3(1,1,1)),f.x),f.y),f.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
if(vFx<.5){float st=vn(vBP*vec3(${fs(t)},${fs(t*.7)},${fs(t*.25)}))*.6+vn(vBP*vec3(${fs(t*2.2)},${fs(t*1.7)},${fs(t*.5)}))*.4;diffuseColor.rgb*=.86+.28*st;}`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
{float l=dot(gl_FragColor.rgb,vec3(.299,.587,.114));if(vFx<.5)gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(l)*vec3(${n.map(fs).join(",")}),${fs(e)});}if(vFx>1.5)gl_FragColor.rgb+=vec3(.06);if(vFx>.5&&vFx<1.5)gl_FragColor.rgb=vec3(1.);`),s&&s(r)}})}function ms(i,t,e,n=1){let s=i.names.map((f,u)=>{let d=new xr;return d.name=f,d});i.names.forEach((f,u)=>{let d=i.parents[u],x=i.world[u];d>=0?(s[u].position.copy(x).sub(i.world[d]),s[d].add(s[u])):s[u].position.copy(x)});let r=new _o(t,e),o=s.filter((f,u)=>i.parents[u]<0);for(let f of o)r.add(f);r.updateMatrixWorld(!0),r.bind(new yo(s)),r.frustumCulled=!1;let a=new Ie;a.add(r),a.scale.setScalar(n);let l={};s.forEach(f=>l[f.name]=f);let c={};return s.forEach(f=>c[f.name]=f.position.clone()),{grp:a,mesh:r,B:l,rest:c,reset:()=>{for(let f of s)f.position.copy(c[f.name]),f.rotation.set(0,0,0),f.scale.set(1,1,1)},bones:s}}var Y1=Ns(0,0,0),Z1=Ns(0,0,0),J1=Ns(0,0,0),$1=new en;function Ii(i,t,e,n=0,s=0,r=-1.3,o=1.6){let a=t>0?"L":"R",l=i.B["w"+a+"s"],c=i.B["w"+a+"e"],h=i.B["w"+a+"h"];l.rotation.order="YXZ",l.rotation.set(r*e,t*(o*e+s),t*n),c.rotation.set(0,t*3*e,0),h.rotation.set(0,-t*2.95*e,0)}var _a=(new URLSearchParams(location.search).get("owf")||"0,-1.6,1.9,.8").split(",").map(Number),ii=(i,t,e)=>new U(i,t,e),Lc=(i,t={})=>{let e=t.obc;delete t.obc;let n=new qt(Object.assign({color:i,roughness:.86,metalness:0},t));return e&&(n.onBeforeCompile=e),n},kr=(i,t,e,n,s,r,o)=>{let a=[];for(let l of[1,-1])o&&a.push(sn(new ye(r*1.5,8,6).translate(t.x+l*e*.97,t.y+n,t.z+s),"head",o,2)),a.push(sn(new ye(r,8,6).translate(t.x+l*e,t.y+n,t.z+s),"head",789e3,2)),a.push(sn(new ye(r*.32,4,3).translate(t.x+l*(e+r*.5),t.y+n+r*.4,t.z+s+r*.6),"head",16777215,1));return a},ya=(i,t,e,n)=>{let s=o=>i.BI[o]===void 0?null:i.world[i.BI[o]].clone(),r=[];for(let o of["L","R"]){let a=s("l"+o+"t"),l=s("l"+o+"s"),c=s("l"+o+"f");if(!a||!c)continue;let h=(f,u,d,x)=>{let A=f.distanceTo(u),v=new We(d*.85,d,A,6).translate(0,-A/2,0);v.applyQuaternion(new en().setFromUnitVectors(ii(0,-1,0),u.clone().sub(f).normalize())).translate(f.x,f.y,f.z),r.push(sn(v,x,t))};l?(h(a.clone().lerp(l,.4),l,e*1.2,"l"+o+"t"),h(l,c,e,"l"+o+"s")):h(a.clone().lerp(c,.3),c,e*1.3,"l"+o+"t");for(let[f,u]of[[0,n],[.5,n*.85],[-.5,n*.85],[Math.PI,n*.5]]){let d=new We(e*.45,e*.6,u,4).rotateX(Math.PI/2).translate(0,0,u/2).rotateY(f).translate(c.x,c.y,c.z);r.push(sn(d,"l"+o+"f",t))}}return r},Ma=i=>{for(let t of i.children)t.visible=!1},ty=i=>i.world[i.BI.head].y+.04;function Kf(i,{S:t,HQ:e,mobile:n,H:s}){let r=new U,o=va(Lc,{nz:60,grade:.06,tint:[1.02,1,.97]}),a=va(Lc,{nz:300,grade:.05,tint:[1.02,1,.97]}),l={value:.35},c=va(Lc,{nz:60,grade:.06,tint:[1.02,1,.97],extra:W=>{W.uniforms.uRim=l,W.fragmentShader=W.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRim;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
{float fr=pow(1.-abs(dot(normalize(vNormal),normalize(vViewPosition))),2.5);gl_FragColor.rgb+=vec3(1.,.62,.34)*fr*uRim;}`)}});i.rim=l;let h=[],f=W=>(W.castShadow=!1,W),u={heron:{bill:[.016,.15,14200896],leg:5918784,toe:.1,H:1.2},egret:{bill:[.013,.13,15777840],leg:1446932,toe:.09,H:1},ibis:{bill:[.009,.12,14704698],leg:14704698,toe:.06,H:.62,curve:1}},d={},x=W=>d[W]??=$f("a/"+W+".glb"),A={},v=W=>A[W]??=x(W==="ibis"?"snowy":W).then(xt=>{let wt=u[W],X=xt.world[xt.BI.head],O=new bn(wt.bill[0],wt.bill[1],7).rotateX(Math.PI/2);if(wt.curve){let nt=O.attributes.position;for(let it=0;it<nt.count;it++){let Tt=nt.getZ(it)+wt.bill[1]/2;nt.setY(it,nt.getY(it)-Tt*Tt*1.6)}}O.translate(0,X.y-.002,X.z+.07+wt.bill[1]*.5);let ht=[sn(O,"head",wt.bill[2],2),...kr(xt,X,.026,.012,.045,.0055,W==="heron"?14205008:15257664),...ya(xt,wt.leg,.009,wt.toe)];return W==="ibis"&&ht.push(sn(new ye(.03,8,6).translate(0,X.y,X.z+.035),"head",14708816)),[xt,Vi(xt,ht)]});for(let W of i.waders||[]){let xt=W.userData,wt=xt.heron?"heron":xt.ibis?"ibis":"egret";v(wt).then(([X,O])=>{let ht=ms(X,O,c,1);f(ht.mesh);let nt=u[wt].H/ty(X)/W.scale.x;ht.grp.scale.setScalar(nt);{let it=X.world[X.BI.lLf]||X.world[X.BI.lRf];it&&(ht.grp.position.y=-it.y*nt+.02/W.scale.x)}ht.grp.rotation.y=Math.PI,Ma(W),xt.legs=null,W.add(ht.grp),xt.r=ht,xt.k=wt})}let p=(W,xt)=>{let wt=W.userData,X=wt.r;if(!X)return;let O=X.B;X.reset();let ht=wt.ph||0,nt=.35,it=0,Tt=0,Ft=-.12,dt=.15,ut=0;if(wt.k==="ibis"){let At=.5+.5*Math.sin(xt*2.2+ht);nt=.1,it=.5,Tt=.9,Ft=.25,dt=.7+At*.6}else{let At=(xt*.11+ht*.37)%1;if(At<.3)nt=.35;else if(At<.55)nt=.15,it=.35,Tt=.35,Ft=.05;else if(At<.7)nt=.95,it=.3,Tt=.4,Ft=.15;else if(At<.74)nt=.95,it=.3,Tt=.4,Ft=.15,ut=Math.sin((At-.7)/.04*Math.PI);else if(At>.88){let Dt=ps(.88,.91,At)*(1-ps(.97,1,At));O.n2.rotation.y=1.4*Dt,O.n3.rotation.y=.9*Dt,dt=.6}}if(O.n1.rotation.x=.5*nt-.6*it+.35*Tt,O.n2.rotation.x=-1.25*nt+.35*it+.1*Tt,O.n3.rotation.x=1.15*nt+.2*it+.25*Tt,O.n4.rotation.x=-.35*nt+.1*it+.3*Tt,O.head.rotation.x=dt-.05*nt+.1*Tt-Ft,O.body.rotation.x=Ft,ut>0){let At=(Dt,H)=>Dt+(H-Dt)*ut;O.n1.rotation.x=At(O.n1.rotation.x,1.25),O.n2.rotation.x=At(O.n2.rotation.x,.05),O.n3.rotation.x=At(O.n3.rotation.x,.05),O.n4.rotation.x=At(O.n4.rotation.x,.1),O.head.rotation.x=At(O.head.rotation.x,.15)}for(let At of[1,-1])Ii(X,At,1);let mt=Math.cos(xt*(wt.ibis?.12:.09)+ht),gt=Math.min(1,Math.abs(mt)*3)*(wt.ibis?.6:1),_t=xt*1.6+ht;for(let[At,Dt]of[[0,"L"],[1,"R"]]){let H=Math.sin(_t+At*Math.PI);O["l"+Dt+"t"]&&(O["l"+Dt+"t"].rotation.x=.12+H*.32*gt),O["l"+Dt+"s"]&&(O["l"+Dt+"s"].rotation.x=-.1-Math.max(0,H)*.5*gt),O["l"+Dt+"f"]&&(O["l"+Dt+"f"].rotation.x=Math.max(0,H)*.6*gt)}if(s){X.grp.updateMatrixWorld(!0);let At=1e9,Dt=0,H=0;for(let Z of["L","R"]){let P=O["l"+Z+"f"];P&&(P.getWorldPosition(r),r.y<At&&(At=r.y,Dt=r.x,H=r.z))}if(At<1e8){let Z=s(Dt,H)+.015-At;X.grp.position.y+=Math.max(-.5,Math.min(.5,Z))/W.scale.x*(wt.planted?.25:1),wt.planted=1}}},y=[],C=(W,xt,wt,X)=>x(xt).then(O=>{let ht=O.world[O.BI.head],nt=[...kr(O,ht,xt==="pelican"?.035:.026,.012,.04,.006)];if(xt==="pelican"){let Tt=new pe(.05,.03,.36).translate(0,ht.y-.01,ht.z+.24);nt.push(sn(Tt,"head",13148272),sn(new ye(.05,8,6).scale(.7,.9,3.4).translate(0,ht.y-.045,ht.z+.2),"head",5917248))}else nt.push(sn(new bn(.013,.13,7).rotateX(Math.PI/2).translate(0,ht.y,ht.z+.135),"head",15777840,2),...ya(O,1446932,.009,.09));let it=ms(O,Vi(O,nt),o,wt);it.grp.rotation.y=Math.PI,Ma(W),W.add(it.grp),y.push({b:W,r:it,k:xt})});(i.fly||[]).forEach(W=>C(W,"egret",1.4)),(i.pel||[]).forEach(W=>C(W,"pelican",1.6));let _=(W,xt)=>{let wt=W.r,X=wt.B,O=W.b.userData;wt.reset();let ht=(W.k==="pelican",O.l.rotation.z);for(let nt of[1,-1]){Ii(wt,nt,0,ht*1.3+.06);let it=nt>0?"L":"R";X["w"+it+"h"].rotation.z=nt*.3*ht}W.k==="pelican"?(X.n1.rotation.x=1.1,X.n2.rotation.x=-1.6,X.head.rotation.x=.55):(X.n1.rotation.x=1.25*.5,X.n2.rotation.x=-1.56,X.n3.rotation.x=1.44,X.n4.rotation.x=-.44,X.head.rotation.x=.1);for(let nt of["L","R"])X["l"+nt+"t"]&&(X["l"+nt+"t"].rotation.x=1.35),X["l"+nt+"f"]&&(X["l"+nt+"f"].rotation.x=1.2)},R=[];(i.dol||[]).forEach(W=>x("dolphin").then(xt=>{let wt=ms(xt,Vi(xt,kr(xt,xt.world[xt.BI.head],.105,.02,.12,.012)),o,1.15);wt.grp.rotation.y=Math.PI,Ma(W.g),W.g.add(wt.grp),R.push({r:wt,d:W,k:"dol"})})),i.mul&&x("mullet").then(W=>{let xt=ms(W,Vi(W,kr(W,W.world[W.BI.head],.016,.006,.02,.004)),a,1.5);xt.grp.rotation.y=Math.PI,i.mul.material.visible=!1,i.mul.add(xt.grp),R.push({r:xt,k:"mul"})}),i.crabs&&x("crab").then(W=>{let xt=nt=>W.world[W.BI[nt]],wt=[],X=xt("body");for(let nt of[1,-1])for(let it=0;it<4;it++){let Tt=ii(X.x+nt*.016,X.y-.002,X.z+.006-it*.007),Ft=Tt.clone().add(ii(nt*.016,-.004,-.003*it)),dt=ii(Ft.x+nt*.006,0,Ft.z-.002);for(let[ut,mt]of[[Tt,Ft],[Ft,dt]]){let gt=ut.distanceTo(mt),_t=new We(.0013,.0016,gt,4).translate(0,-gt/2,0);_t.applyQuaternion(new en().setFromUnitVectors(ii(0,-1,0),mt.clone().sub(ut).normalize())).translate(ut.x,ut.y,ut.z),wt.push(sn(_t,"body",9071184))}}for(let nt of[1,-1]){let it=xt(nt>0?"eL":"eR");wt.push(sn(new We(9e-4,9e-4,.01,4).translate(it.x,it.y+.004,it.z),"body",5917248),sn(new ye(.0022,5,4).translate(it.x,it.y+.01,it.z),"body",1052688,2))}let O=Vi(W,wt);O.deleteAttribute("skinIndex"),O.deleteAttribute("skinWeight"),O.scale(2.4,2.4,2.4),O.rotateY(Math.PI/2),O.translate(0,-.012,0);let ht=i.crabs;ht.geometry=O,ht.material=va(Lc,{nz:300,grade:.05,tint:[1.02,1,.97]}),ht.instanceColor=null,ht.material.needsUpdate=!0});let E=null;i.osp&&x("osprey").then(W=>{let xt=W.world[W.BI.head],wt=[...kr(W,xt,.03,.012,.035,.006,15255616)],X=new bn(.012,.05,6).rotateX(Math.PI/2);{let ht=X.attributes.position;for(let nt=0;nt<ht.count;nt++){let it=ht.getZ(nt)+.025;ht.setY(nt,ht.getY(nt)-it*it*14)}}X.translate(0,xt.y-.004,xt.z+.08),wt.push(sn(X,"head",2761760,2)),wt.push(...ya(W,12103840,.008,.04));let O=ms(W,Vi(W,wt),o,.9);Ma(i.osp),i.osp.rotation.set(0,0,0),i.osp.add(O.grp),i.ospRig=1,E={r:O,st:"circle",at:0,P:i.osp.position.clone(),V:ii(1,0,0),yaw:0,bank:0,fish:!1,T:ii(0,0,0)}});let b=(W,xt,wt)=>{let X=i.osp,O=E.r,ht=O.B;E.at+=xt;let nt=E.P,it=0,Tt=W*4.2,Ft=0,dt=1.35,ut=0,mt;if(E.st==="circle"){let _t=W*.08;if(mt=ii(-10+Math.cos(_t)*35,26+Math.sin(_t*2)*2,-60+Math.sin(_t)*22),nt.lerp(mt,Math.min(1,xt*1.5)),it=Math.sin(W*.7)>.6?Math.sin(Tt)*.55:.05,E.at>16){E.st="hover",E.at=0;let At=nt.x*.5;Math.abs(At)<10&&(At=At<0?-14:14);let Dt=i.creekZ?i.creekZ(At):-30;E.T.set(At,0,Dt),E.H=nt.clone()}}else if(E.st==="hover")nt.lerp(ii(E.T.x,13,E.T.z),Math.min(1,xt*.7)),Tt=W*11,it=Math.sin(Tt)*.9,ut=-.9,dt=.3,E.at>4&&(E.st="dive",E.at=0,E.A=nt.clone());else if(E.st==="dive"){let _t=Math.min(1,E.at/1.4),At=_t*_t;if(nt.lerpVectors(E.A,ii(E.T.x,.2,E.T.z),At),Ft=.75*Math.min(1,_t*2.5),ut=1.2*(1-Math.max(0,_t-.85)/.15*1.6),dt=_t>.8?-.6:1.2,_t>=1){E.st="climb",E.at=0,E.fish=!0;try{i.splashAt(E.T.x,E.T.z,1.2)}catch{}}}else E.st==="climb"&&(nt.y+=xt*(E.at<.6?1.2:3.2),nt.x+=xt*4,Tt=W*7,it=Math.sin(Tt)*.95,ut=-.35,dt=.5,E.at>6&&(E.st="circle",E.at=0,E.fish=!1));let gt=nt.clone().sub(X.position);if(gt.lengthSq()>1e-6){let At=Math.atan2(gt.x,gt.z)-E.yaw;for(;At>Math.PI;)At-=6.283;for(;At<-Math.PI;)At+=6.283;E.yaw+=At*Math.min(1,xt*3),E.bank+=(-At*1.5-E.bank)*Math.min(1,xt*2)}X.position.copy(nt),X.rotation.set(0,E.yaw,0),O.grp.rotation.set(ut,Math.PI*0,E.st==="hover"?0:E.bank*.6),O.grp.rotation.y=0,O.reset();for(let _t of[1,-1]){Ii(O,_t,Ft,it+.08,-.2*Ft);let At=_t>0?"L":"R";ht["w"+At+"e"].rotation.z=_t*.25*Math.sin(Tt-.8)*Math.abs(it),ht["w"+At+"h"].rotation.z=_t*(.3*Math.sin(Tt-1.4)*Math.abs(it)-.15)}ht.head.rotation.x=-ut*.8;for(let _t of["L","R"])ht["l"+_t+"t"].rotation.x=dt,ht["l"+_t+"f"].rotation.x=E.fish?.3:dt>1?1:0},m=null;i.owl&&x("owl").then(W=>{let xt=W.world[W.BI.head],wt=[];for(let O of[1,-1])wt.push(sn(new ye(.019,10,8).translate(xt.x+O*.033,xt.y+.002,xt.z+.074),"head",16765498,2),sn(new ye(.008,6,4).translate(xt.x+O*.034,xt.y+.002,xt.z+.091),"head",328450,2),sn(new bn(.013,.06,5).rotateZ(-O*.32).translate(xt.x+O*.047,xt.y+.088,xt.z+.01),"head",3351578,2));wt.push(sn(new bn(.008,.022,5).rotateX(Math.PI*.6).translate(0,xt.y-.022,xt.z+.07),"head",3813414,2),...ya(W,2761760,.006,.03));let X=ms(W,Vi(W,wt),o,1);X.grp.scale.setScalar(1.25/i.owl.scale.x),Ma(i.owl),i.owl.add(X.grp),i.owlRig=1,m={r:X,base:i.owl.position.clone(),ry:i.owl.rotation.y,st:"perch",at:0,next:M(18,30),look:0}});let M=(W,xt)=>W+Math.random()*(xt-W),T=(W,xt,wt)=>{let X=i.owl,O=m.r,ht=O.B;if(!X.visible){m.st="perch",m.at=0,X.position.copy(m.base);return}if(m.at+=xt,O.reset(),m.st==="perch"){for(let Ft of[1,-1])Ii(O,Ft,1,0,Ft<0?_a[3]??_a[0]:_a[0],_a[1],_a[2]);let nt=Math.floor(W/3.2),it=W/3.2-nt,Tt=[0,1.4,-.9,2.2,.4,-1.8,1.1,0][nt%8];m.look+=(Tt-m.look)*Math.min(1,xt*(it<.25?6:.5)),ht.n1.rotation.y=m.look*.45,ht.head.rotation.y=m.look*.55,ht.head.rotation.z=Math.sin(W*.9)*.08*(Math.abs(Tt)>1?1:0),ht.head.rotation.x=-.05+Math.sin(W*.3)*.04,X.position.copy(m.base),X.rotation.y=m.ry,m.at>m.next&&(m.st="fly",m.at=0)}else{let it=Math.min(1,m.at/9),Tt=it*6.283,Ft=7,dt=m.base.clone().add(ii(-Ft,0,0)),ut=Math.sin(it*Math.PI),mt=ii(dt.x+Math.cos(Tt)*Ft,m.base.y+ut*2.5-(it>.1&&it<.9,0),dt.z+Math.sin(Tt)*Ft*.7),gt=X.position.clone();X.position.copy(mt);let _t=mt.clone().sub(gt);_t.lengthSq()>1e-7&&(X.rotation.y=Math.atan2(_t.x,_t.z)+Math.PI);let At=W*5.5,Dt=it>.3&&it<.7&&Math.sin(W*1.3)>0,H=Dt?.06:Math.sin(At)*.85,Z=Math.max(0,(it-.88)/.12);for(let P of[1,-1]){Ii(O,P,0,H+.1,-.3*Z);let K=P>0?"L":"R";ht["w"+K+"h"].rotation.z=P*.3*Math.sin(At-1.2)*(Dt?0:1)}ht.body.rotation.x=.9-.6*Z,ht.head.rotation.x=-.8+.5*Z;for(let P of["L","R"])ht["l"+P+"t"].rotation.x=it<.12||it>.85?-.4:1.2;it>=1&&(m.st="perch",m.at=0,m.next=M(20,40))}},I=[];new URLSearchParams(location.search).has("ppdbg")&&(globalThis.__PP=I),i.perches&&x("pelican").then(W=>{let xt=W.world[W.BI.head],wt=new pe(.05,.03,.36).translate(0,xt.y-.01,xt.z+.24);{let nt=wt.attributes.position;for(let it=0;it<nt.count;it++){let Tt=nt.getZ(it)-xt.z;nt.setX(it,nt.getX(it)*(1-Tt*1.1))}}let X=[sn(wt,"head",13148272),sn(new ye(.05,8,6).scale(.7,.9,3.4).translate(0,xt.y-.045,xt.z+.2),"head",5917248),...kr(W,xt,.035,.02,.035,.006,14211264),...ya(W,3814452,.012,.07)],O=Vi(W,X),ht=W.world[W.BI.lLf]||{y:0};i.perches.forEach(([nt,it,Tt,Ft],dt)=>{let ut=ms(W,O,c,1.15);ut.grp.position.set(nt,it-ht.y*1.15+.01,Tt),ut.grp.rotation.y=Ft,t.add(ut.grp);let mt={p:ut.grp.position.clone(),yaw:Ft,occ:null};if(D.push(mt),dt===1)for(let _t of[-12,9.6])D.push({p:ut.grp.position.clone().add(new U(0,0,_t)),yaw:Ft,occ:null});let gt={r:ut,yaw:Ft,ph:dt*3.7,st:"perch",at:0,al:0,hop:0,slot:mt,P:new U,V:new U,C:new U,A:new U,cw:1,id:"pp"+dt};mt.occ=gt,I.push(gt)})});let D=[],N=new U,L=new U,F=new U,q=new U,G=new U,j=0,k=0,st=!1,at=(W,xt,wt,X,O)=>{let ht=1-O;return W.set(0,0,0).addScaledVector(xt,ht*ht).addScaledVector(wt,2*ht*O).addScaledVector(X,O*O)},Vt=(W,xt,wt)=>{let X=W.r,O=X.grp,ht=X.B,nt=globalThis.__dockCam;if(W.at+=wt,W.st==="perch"||W.st==="alert"){let it=nt?q.subVectors(nt.position,O.position).setY(0).length():99;if((it<3.6||it<5.5&&j>2.2||it<6.5&&j>4.5)&&nt){W.st="flush",W.at=0,W.slot.occ=null;let Ft=G.subVectors(O.position,nt.position).setY(0).normalize(),ut=new U(Math.sign(O.position.x)||1,0,0).clone().addScaledVector(Ft,.3).normalize();W.P.copy(O.position),W.A.copy(O.position).add(new U(0,.9,0)).addScaledVector(ut,1.2),W.C.copy(O.position).addScaledVector(ut,24).add(new U(0,7,0)),W.cw=Math.random()<.5?1:-1,W.dir=ut;try{globalThis.__dockAlarm&&globalThis.__dockAlarm(W.id,O.position.x,O.position.y+.4,O.position.z)}catch{}return"fly"}return it<7.5?(W.st!=="alert"&&(W.st="alert",W.at=0,W.hop=1),"alert"):(W.st==="alert"&&W.at>2&&(W.st="perch"),W.st)}if(W.st==="flush"){if(W.at<.4)return"crouch";let it=Math.min(1,(W.at-.4)/3.4);return at(G,W.P,W.A,W.C,it*it*(3-2*it)*.5+it*.5),F.copy(O.position),O.position.copy(G),W.V.subVectors(G,F),it>=1&&(W.st="circle",W.at=0,W.ang=Math.atan2(W.C.z-W.C.z,0)),"fly"}if(W.st==="circle"){let Tt=W.at*.45*W.cw,Ft=W.circ||(W.circ=W.C.clone().addScaledVector(W.dir,7));F.copy(O.position);let dt=Math.atan2(W.C.x-Ft.x,W.C.z-Ft.z);if(O.position.set(Ft.x+Math.sin(dt+Tt)*7,Ft.y+Math.sin(W.at*.3)*.8,Ft.z+Math.cos(dt+Tt)*7),W.V.subVectors(O.position,F),W.at>9){let ut=null,mt=0;for(let gt of D){if(gt.occ)continue;let _t=nt?q.subVectors(nt.position,gt.p).setY(0).length():99,At=_t>9||k>8&&_t>4.5,Dt=-Math.abs(_t-14);nt&&(nt.getWorldDirection(N),G.subVectors(gt.p,nt.position).setY(0).normalize(),N.setY(0).normalize().dot(G)>.5&&(Dt+=30)),At&&(ut===null||Dt>mt)&&(mt=Dt,ut=gt)}if(ut){ut.occ=W,W.slot=ut,W.st="land",W.at=0,W.P.copy(O.position);let gt=new U(Math.sign(ut.p.x)||1,0,0);W.A.copy(ut.p).addScaledVector(gt,6).add(new U(0,3.2,0)),W.C.copy(ut.p),W.circ=null}}return"fly"}if(W.st==="land"){let it=Math.min(1,W.at/4.2),Tt=1-(1-it)*(1-it),Ft=G.copy(W.C).add(L.set(0,.7*(1-ps(.8,1,it)),0));return at(F,W.P,W.A,Ft,Tt),W.V.subVectors(F,O.position),O.position.copy(F),it>=1&&(O.position.copy(W.slot.p),W.yaw=W.slot.yaw,W.st="perch",W.at=0,W.hop=1),it>.85?"land":"fly"}return"perch"},Pt=(W,xt,wt)=>{let X=globalThis.__dockCam;if(X){st||(L.copy(X.position),st=!0);let O=L.distanceTo(X.position)/Math.max(wt,.001);j+=(O-j)*Math.min(1,wt*4),k=O<.3?k+wt:0,L.copy(X.position)}for(let O of I){let ht=O.r,nt=ht.B;ht.reset();let it=Vt(O,W,wt),Tt=ht.grp;if(it==="fly"||it==="land"){if(Math.hypot(O.V.x,O.V.z)>1e-4){let P=Math.atan2(O.V.x,O.V.z)-Tt.rotation.y;P=Math.atan2(Math.sin(P),Math.cos(P)),Tt.rotation.y+=P*Math.min(1,wt*6)}let gt=O.st==="flush"&&O.at<1.6,_t=gt?(O.at-.4)*10:W*6.5,Dt=O.st==="circle"&&Math.sin(W*.7+O.ph)>.2?.08:gt?.2+.5*Math.cos(_t):.15+.45*Math.sin(_t),H=it==="land"?1:0;nt.n1.rotation.x=1.25,nt.n2.rotation.x=-1.9,nt.head.rotation.x=.75,nt.body.rotation.x=-.25*H-.05,Tt.rotation.z=O.st==="circle"?-.25*O.cw:0;for(let Z of[1,-1])Ii(ht,Z,0,Dt+.1,-.3*H);for(let Z of["L","R"])nt["l"+Z+"t"]&&(nt["l"+Z+"t"].rotation.x=H?.2:1.3);Tt.visible=xt<.85;continue}if(Tt.rotation.z=0,Tt.rotation.y+=(O.yaw-Tt.rotation.y)*Math.min(1,wt*3),O.hop>0&&(O.hop=Math.max(0,O.hop-wt*3.5),Tt.position.y=O.slot.p.y+Math.sin(O.hop*Math.PI)*.06),it==="crouch"){let mt=Math.sin(Math.min(1,O.at/.4)*Math.PI*.5);nt.n1.rotation.x=1.4,nt.n2.rotation.x=-2,nt.head.rotation.x=.6,nt.body.rotation.x=-.25-.3*mt,Tt.position.y=O.slot.p.y-.07*mt;for(let gt of[1,-1])Ii(ht,gt,1-.75*mt,.35*mt);for(let gt of["L","R"])nt["l"+gt+"t"]&&(nt["l"+gt+"t"].rotation.x=.1+.5*mt);Tt.visible=xt<.85;continue}if(it==="alert"&&X){nt.n1.rotation.x=.75,nt.n2.rotation.x=-1.3,nt.head.rotation.x=.45,nt.body.rotation.x=-.15,G.copy(X.position),Tt.worldToLocal(G);let mt=Math.max(-1.3,Math.min(1.3,Math.atan2(G.x,G.z)));O.al+=(mt-O.al)*Math.min(1,wt*5),nt.n2.rotation.y=O.al*.55,nt.head.rotation.y=O.al*.45;for(let gt of[1,-1])Ii(ht,gt,.92,.06*Math.max(0,Math.sin(O.at*7))*(O.at<1?1:0));for(let gt of["L","R"])nt["l"+gt+"t"]&&(nt["l"+gt+"t"].rotation.x=.1);Tt.visible=xt<.85;continue}O.al*=.95;let Ft=(W+O.ph)%24,dt=1,ut=0;if(nt.n1.rotation.x=1.25,nt.n2.rotation.x=-1.9,nt.head.rotation.x=.75,nt.body.rotation.x=-.25,Ft<6)nt.n2.rotation.y=Math.sin(W*.5+O.ph)*.5,nt.head.rotation.y=Math.sin(W*.8+O.ph)*.4;else if(Ft<9){let mt=ps(6,6.6,Ft)*(1-ps(8.4,9,Ft));nt.n1.rotation.y=1.3*mt,nt.n2.rotation.y=1.1*mt,nt.head.rotation.x=.75+.5*mt,nt.head.rotation.z=Math.sin(W*9)*.15*mt}else if(Ft<11){let mt=ps(9,9.8,Ft)*(1-ps(10.2,11,Ft));dt=1-mt,ut=.25*mt,nt.n1.rotation.x=1.25-.4*mt}else Ft<15&&(nt.n1.rotation.x=1.45,nt.n2.rotation.x=-2.1,nt.head.rotation.x=1.1);for(let mt of[1,-1])Ii(ht,mt,dt,ut);for(let mt of["L","R"])nt["l"+mt+"t"]&&(nt["l"+mt+"t"].rotation.x=.1);ht.grp.visible=xt<.85}};return(W,xt,wt)=>{l.value=.38*(1-Math.min(1,wt*1.6))+.06,Pt(W,wt,xt),E&&i.osp.visible&&b(W,xt,wt),m&&T(W,xt,wt);for(let X of i.waders||[])X.visible&&p(X,W);for(let X of y)X.b.visible&&_(X,W);for(let X of R){let O=X.r;O.reset();let ht=O.B;if(X.k==="dol"){if(!X.d.g.visible)continue;let nt=W*4;for(let[it,Tt,Ft]of[["b1",.08,0],["b2",.14,.6],["b3",.22,1.2],["fl",.3,1.8]])ht[it]&&(ht[it].rotation.x=Math.sin(nt-Ft)*Tt);ht.pL&&(ht.pL.rotation.z=-.2,ht.pR.rotation.z=.2)}else for(let[nt,it,Tt]of[["b1",.25,0],["b2",.4,.7],["fl",.5,1.4]])ht[nt]&&(ht[nt].rotation.y=Math.sin(W*28-Tt)*it)}}}function Je(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ve,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=jf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let A=0;A<o[h].length;++A)d.push(o[h][A][u]);let x=jf(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function jf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new cn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let x=0;x<e;x++){let A=h.getComponent(u,x);a.setComponent(u+f,x,A)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ey=new URLSearchParams(location.search).has("owlday");function Qf({S:i,HQ:t,H:e,T:n,rr:s,fbm:r,woodTex:o,PZ0:a,PZ1:l,PY:c,HAM:h,windMat:f,canvasTex:u}){let d=(H,Z,P)=>new U(H,Z,P),x=new Fe,A=new Ut,v=(H,Z,P=!0)=>{let K=new Bt(H,Z);return K.castShadow=P&&t,K.receiveShadow=t,i.add(K),K},p=(H,Z,P,K,J,S,g=0,B=0,V=0)=>{let Q=new pe(H,Z,P);return Q.rotateZ(V),Q.rotateX(B),Q.rotateY(g),Q.translate(K,J,S),Q},y={lampPos:[],glass:null,update:null},C=y.aud=[],_=H=>(H.updateMatrixWorld(!0),new Vn().setFromObject(H)),R=new qt({map:o,bumpMap:o,bumpScale:2.2,roughness:.88,color:13351074}),E=new qt({map:o,roughness:.92,color:10259580}),b=1.6;{let H=Math.floor((a-l)/.16),Z=new nn(new pe(b,.04,.14),R,H+400),P=0;for(let K=0;K<H;K++){x.position.set(s(-.01,.01),c+s(-.006,.006),a-K*.16),x.rotation.set(0,s(-.008,.008),s(-.006,.006)),x.scale.set(1,1,1),x.updateMatrix(),Z.setMatrixAt(P,x.matrix);let J=s(.7,1.05);A.setRGB(J,J*s(.94,1),J*s(.86,.97)),Z.setColorAt(P++,A)}for(let K=0;K<40;K++){x.position.set(1,c,l-.08-K*.16),x.rotation.set(0,s(-.005,.005),0),x.scale.set(6.4/b,1,1),x.updateMatrix(),Z.setMatrixAt(P,x.matrix);let J=s(.7,1.02);A.setRGB(J,J*.96,J*.9),Z.setColorAt(P++,A)}Z.count=P,Z.castShadow=Z.receiveShadow=t,i.add(Z)}let m=[];for(let H of[-b/2+.05,b/2-.05])m.push(p(.06,.25,a-l,H,c-.15,(a+l)/2));for(let H=a;H>=l;H-=2.4)m.push(p(b+.3,.22,.1,0,c-.36,H));for(let H of[-b/2-.04,b/2+.04]){for(let Z=a;Z>=l;Z-=2.4)m.push(p(.09,1.05,.09,H,c+.5,Z));m.push(p(.06,.05,a-l,H,c+1.02,(a+l)/2),p(.14,.04,a-l,H,c+1.06,(a+l)/2),p(.04,.09,a-l,H,c+.5,(a+l)/2))}let M=l,T=l-6.4;for(let[H,Z,P,K]of[[4.2,(M+T)/2,.06,6.4],[1.8,T,4.8,.06],[-2.2,M-1.2,.06,2.4]])m.push(p(P,.05,K,H,c+1.02,Z),p(Math.max(P,.14),.04,Math.max(K,.14),H,c+1.06,Z));for(let[H,Z]of[[4.2,M],[4.2,M-2.1],[4.2,M-4.3],[4.2,T],[2.1,T],[-.6,T],[-2.2,M],[-2.2,M-2.4],[3,M],[-.8,M]])m.push(p(.1,1.05,.1,H,c+.5,Z));m.push(p(.42,.05,4.6,3.9,c+.45,M-3.2),p(.06,.4,4.6,4.12,c+.75,M-3.2));for(let H of[M-1.1,M-3.2,M-5.3])m.push(p(.4,.45,.06,3.9,c+.22,H));let I=1.4,D=4.3,N=M-.6,L=T+.1,F=c+2.55;for(let H of[I,D])for(let Z of[N,L])m.push(p(.14,F-c,.14,H,(F+c)/2,Z));m.push(p(D-I+.2,.18,.12,(I+D)/2,F,N),p(D-I+.2,.18,.12,(I+D)/2,F,L),p(.12,.18,N-L,I,F,(N+L)/2),p(.12,.18,N-L,D,F,(N+L)/2)),v(Je(m.map(H=>H.toNonIndexed())),R);{let H=new qt({color:8226434,metalness:.75,roughness:.38}),Z=(I+D)/2,P=(N+L)/2,K=(D-I)/2+.45,J=(N-L)/2+.45,S=new bn(1,1,4,1,!0);S.rotateY(Math.PI/4),S.scale(K*1.414,1.1,J*1.414),S.translate(Z,F+.1+.55,P);let g=v(S,H);g.material.side=Le;let B=[];for(let V=-6;V<=6;V++){let Q=d(Z+V/6*K,F+.1,P+J),yt=d(Z+V/6*K*.02,F+1.2,P);B.push(new Rn(new As(Q,yt),1,.012,3));let ft=d(Z+V/6*K,F+.1,P-J);B.push(new Rn(new As(ft,yt),1,.012,3))}v(Je(B),H,!1),y.roofTop=d(Z,F+1.2,P)}{let H=new qt({map:o,color:11048320,roughness:.9});H.onBeforeCompile=J=>{J.vertexShader=J.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vW=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;`),J.fragmentShader=J.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vW;float hs(vec2 p){return fract(sin(dot(p,vec2(12.9,78.2)))*43758.5);}`).replace("#include <color_fragment>",`#include <color_fragment>
  float wet=1.-smoothstep(.35,.95,vW.y);diffuseColor.rgb*=mix(1.,.3,wet);float bar=step(.74,hs(floor(vW.xz*40.)+floor(vec2(vW.y*40.,atan(vW.x,vW.z)*20.))))*smoothstep(.9,.4,vW.y)*smoothstep(-.8,-.1,vW.y);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.72,.7,.63),bar*.85);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.28,wet);`)};let Z=[];for(let J=a;J>=l;J-=2.4)for(let S of[-b/2-.04,b/2+.04])Z.push([S,J,.11,c+1.05]);for(let J of[-2.2,-.6,1,2.6,4.2])for(let S of[M,M-2.1,M-4.3,T])Z.push([J,S,.13,c-.05]);Z.push([-4.6,T-1.4,.14,2.6],[-4.6,T-6.4,.14,2.6],[-1.4,T-6.4,.14,2.6]);let P=new We(1,1.08,1,9);P.translate(0,.5,0);let K=new nn(P,H,Z.length);Z.forEach(([J,S,g,B],V)=>{let Q=Math.min(e(J,S),0)-2;x.position.set(J,Q,S),x.rotation.set(s(-.012,.012),s(0,6),s(-.012,.012)),x.scale.set(g,B-Q,g),x.updateMatrix(),K.setMatrixAt(V,x.matrix)}),K.castShadow=K.receiveShadow=t,i.add(K)}{let H=[],Z=d(-1.4,c,M-1.2-0),P=M-.4,K=T-1.6,J=.32,S=d(-2.2,c,M-1.2),g=d(-4.4,J+.12,M-1.2),B=S.distanceTo(g),V=Math.atan2(S.y-g.y,S.x-g.x),Q=new Ie;Q.position.copy(S).lerp(g,.5),Q.rotation.z=V,i.add(Q);let yt=[p(B,.05,1,0,0,0)];for(let ue=0;ue<14;ue++)yt.push(p(.04,.03,.95,-B/2+ue*B/13,.04,0));for(let ue of[-.5,.5])yt.push(p(B,.05,.04,0,.95,ue),p(B,.2,.05,0,.05,ue));for(let ue=0;ue<4;ue++)for(let zn of[-.5,.5])yt.push(p(.05,.95,.05,-B/2+.2+ue*(B-.4)/3,.48,zn));let ft=new Bt(Je(yt.map(ue=>ue.toNonIndexed())),new qt({color:10133664,metalness:.7,roughness:.45}));ft.castShadow=t,Q.add(ft);let $=-3,tt=T-3.9,Mt=[];for(let ue=0;ue<36;ue++)Mt.push(p(3,.04,.15,$,J,tt+3-ue*.168));Mt.push(p(3.1,.18,.12,$,J-.1,tt+3.05),p(3.1,.18,.12,$,J-.1,tt-3.05),p(.12,.18,6.1,$-1.55,J-.1,tt),p(.12,.18,6.1,$+1.55,J-.1,tt));let kt=v(Je(Mt.map(ue=>ue.toNonIndexed())),R),Ct=v(p(2.9,.35,5.9,$,J-.36,tt),new qt({color:2763304,roughness:.6}),!1),It=new qt({color:12106940,metalness:.9,roughness:.3}),Ot=[];for(let[ue,zn]of[[$-1.45,tt+2.2],[$-1.45,tt-2.2],[$+1.45,tt-2.6],[1.8,T+.15]]){let Ke=ue>0?c+.04:J+.04;Ot.push(p(.28,.04,.06,ue,Ke+.06,zn,Math.PI/2),p(.06,.06,.06,ue,Ke+.02,zn))}v(Je(Ot.map(ue=>ue.toNonIndexed())),It);let et=new Er;et.moveTo(-.75,0),et.lineTo(.75,0),et.lineTo(.9,.5),et.lineTo(-.9,.5),et.lineTo(-.75,0);let bt=new Fo(et,{depth:4.2,bevelEnabled:!1});bt.translate(0,0,-2.1);let z=bt.attributes.position;for(let ue=0;ue<z.count;ue++){let zn=z.getZ(ue);if(zn<-1.6){let Ke=(-1.6-zn)/.5;z.setY(ue,z.getY(ue)+Ke*.25*(1-z.getY(ue)/.5)+(z.getY(ue)<.01?Ke*.18:0))}}bt.computeVertexNormals();let Et=new qt({color:5004874,metalness:.55,roughness:.5,side:Le}),lt=new Ie,St=new Bt(bt,Et);St.castShadow=t,lt.add(St);let Lt=new qt({color:9075298,roughness:.8});for(let ue of[-1,.3,1.5])lt.add(new Bt(new pe(1.6,.05,.3),Lt).translateY(.38).translateZ(ue));let vt=new Bt(new pe(.3,.5,.35),new qt({color:1710618,roughness:.4,metalness:.3}));vt.position.set(0,.7,2.25),lt.add(vt),lt.position.set($-2.6,-.12,tt),lt.rotation.y=.04,i.add(lt),y.boat=lt;let Ht=new qt({color:14207400,roughness:1}),Yt=[];for(let[ue,zn]of[[tt+2.2,tt+1.6],[tt-2.2,tt-1.7]]){let Ke=d($-1.45,J+.08,ue),pt=d($-2.6+.85,.38,zn);Yt.push(new Rn(new ei(Ke,Ke.clone().lerp(pt,.5).add(d(0,-.12,0)),pt),6,.015,4))}v(Je(Yt),Ht,!1);let ce=new Be({color:1911322,wireframe:!0}),he=new Bt(new pe(.6,.6,.6,6,6,6),ce);he.position.set(-1.4,c+.32,T+.6),he.rotation.y=.3,i.add(he);let $e=new Bt(new pe(.58,.04,.58),new qt({color:13215290,roughness:.7}));$e.position.set(-1.4,c+.03,T+.6),$e.rotation.y=.3,i.add($e);let mn=new Bt(new ns(.18,.03,5,16),Ht);mn.rotation.x=Math.PI/2,mn.position.set(-.8,c+.04,T+.4),i.add(mn)}{let H=new qt({color:15525594,roughness:.7}),Z=[],P=(K,J,S)=>{let g=[p(.5,.05,.48,0,.45,0),p(.5,.6,.04,0,.82,.24,0,-.18),p(.04,.04,.5,-.26,.65,0),p(.04,.04,.5,.26,.65,0)];for(let V of[-.24,.24]){g.push(p(.04,.45,.04,V,.23,-.2),p(.04,.45,.04,V,.23,.2));let Q=new Rn(new ei(d(V,.02,-.38),d(V,-.06,0),d(V,.05,.42)),6,.02,4);g.push(Q)}let B=Je(g.map(V=>V.index?V.toNonIndexed():V));B.rotateY(S),B.translate(K,c+.02,J),Z.push(B)};P(2.3,M-2.2,-.5),P(2.6,M-4,-1.1),v(Je(Z),H)}y.glass=new qt({color:16760944,emissive:16752704,emissiveIntensity:1.6});let q=new qt({color:1906193,roughness:.6,metalness:.6});[[I+.12,c+2.1,N],[I+.12,c+2.1,L],[-b/2-.04,c+1.3,a-14.4],[b/2+.04,c+1.3,a-38]].forEach(([H,Z,P])=>{let K=new Ie,J=new Bt(new pe(.14,.2,.14),y.glass),S=new Bt(new bn(.13,.1,4),q);S.position.y=.15,S.rotation.y=Math.PI/4,K.add(J,S),K.position.set(H+(H>0?.12:-.12),Z,P),i.add(K),y.lampPos.push(d(H+(H>0?.12:-.12),Z,P))});{let H=[],P=[[I+.05,N-.05,D-.05,N-.05],[D-.05,N-.05,D-.05,L+.05],[D-.05,L+.05,I+.05,L+.05],[I+.05,L+.05,I+.05,N-.05]],K=[];for(let[ft,$,tt,Mt]of P.map(([kt,Ct,It,Ot])=>{let et=(I+D)/2,bt=(N+L)/2,z=.94;return[et+(kt-et)*z,bt+(Ct-bt)*z,et+(It-et)*z,bt+(Ot-bt)*z]})){let kt=Math.hypot(tt-ft,Mt-$),Ct=Math.max(3,Math.round(kt/.38)),It=[];for(let Ot=0;Ot<=Ct;Ot++){let et=Ot/Ct,bt=F-.34-.13*4*et*(1-et);It.push(d(ft+(tt-ft)*et,bt,$+(Mt-$)*et)),Ot>0&&Ot<Ct&&H.push(d(ft+(tt-ft)*et,bt-.06,$+(Mt-$)*et))}K.push(new Rn(new zi(It),Ct*2,.006,3).toNonIndexed())}v(Je(K),new qt({color:1710100,roughness:.8}),!1).name="wire(attach)";let J=new Be({color:16767392,toneMapped:!1}),S=new ye(.035,6,4),g=new nn(S,J,H.length);H.forEach((ft,$)=>{x.position.copy(ft),x.rotation.set(0,0,0),x.scale.setScalar(1),x.updateMatrix(),g.setMatrixAt($,x.matrix)}),g.onBeforeRender=()=>{let ft=y.win?y.win.emissiveIntensity:0,$=Math.min(1,ft/1.2);J.color.setRGB(.55+2.6*$,.42+1.7*$,.25+.75*$)},i.add(g),y.bulbs=H,H.forEach((ft,$)=>C.push(["bulb"+$,new Vn().setFromCenterAndSize(ft,d(.07,.07,.07)),J]));let B=[],V=[];for(let[ft,$]of[[T+.45,.5],[T+.25,.62]]){let tt=new We(.006,.014,2.3,5);tt.translate(0,1.15,0),tt.rotateZ(-$),tt.translate(4.14,c+.55,ft),B.push(tt.toNonIndexed());let Mt=new We(.025,.025,.3,6).translate(4.14,c+.62,ft);B.push(Mt.toNonIndexed())}v(Je(B),new qt({color:2762274,roughness:.5}));let Q=p(.62,.38,.4,.55,c+.21,T+.75,.2),yt=p(.64,.06,.42,.55,c+.43,T+.75,.2);{let ft=v(Q,new qt({color:4157338,roughness:.55}));C.push(["cooler",_(ft),ft.material])}{let ft=v(yt,new qt({color:15921126,roughness:.5}));C.push(["cooler-lid",_(ft),ft.material])}v(new We(.17,.13,.3,10).translate(-1.85,c+.17,T+1.7),new qt({color:10902074,roughness:.85}));{let ft=[];for(let tt=0;tt<9;tt++){let Mt=new ye(s(.07,.11),6,4);Mt.translate(-1.85+s(-.1,.1),c+.4+s(0,.14),T+1.7+s(-.1,.1)),ft.push(Mt.toNonIndexed())}v(Je(ft),new qt({color:4155956,roughness:.8}));let $=[];for(let tt=0;tt<5;tt++)$.push(new ye(.045,5,4).translate(-1.85+s(-.12,.12),c+.55+s(0,.06),T+1.7+s(-.12,.12)).toNonIndexed());v(Je($),new qt({color:14173242,roughness:.6}))}{let ft=new Ee(.6,1.1,6,10),$=ft.attributes.position;for(let Mt=0;Mt<$.count;Mt++)$.setZ(Mt,Math.sin($.getX(Mt)*9)*.03+Math.sin($.getY(Mt)*7)*.03);ft.rotateX(-Math.PI/2),ft.translate(3.9,c+.49,M-4.6);let tt=new qt({color:9077880,roughness:.95,side:Le,transparent:!0,opacity:.85});tt.forceSinglePass=!0,v(ft,tt,!1)}}let G=(H,Z)=>e(H,Z)>.75;{let B=function(et,bt,z,Et,lt){let St=et.clone().addScaledVector(bt,z),Lt=et.clone().lerp(St,.33).add(d(s(-.25,.25),s(-.15,.25),s(-.25,.25)).multiplyScalar(z)),vt=et.clone().lerp(St,.66).add(d(s(-.25,.25),s(-.2,.15),s(-.25,.25)).multiplyScalar(z));if(J.push(new Rn(new br(et,Lt,vt,St),8,Et,6)),lt<2&&St.y>et.y-1&&g.push(et.clone().lerp(St,.5)),lt>0)for(let Ht=0;Ht<3;Ht++){let Yt=bt.clone().add(d(s(-1,1),s(-.25,.3),s(-1,1))).setY(Math.max(-.12,bt.y*.35+s(-.2,.22))).normalize();B(St,Yt,z*s(.62,.85),Et*.62,lt-1)}else S.push(St)},H=new qt({color:5917762,roughness:.95}),Z=new qt({color:3424298,roughness:.95}),P=u(64,256,(et,bt,z)=>{et.clearRect(0,0,bt,z);for(let Et=0;Et<70;Et++){let lt=Math.random()*bt,St=z*(.3+Math.random()*.7);et.strokeStyle=`rgba(200,205,185,${.4+Math.random()*.5})`,et.lineWidth=1+Math.random()*1.5,et.beginPath(),et.moveTo(lt,0),et.bezierCurveTo(lt+(Math.random()-.5)*14,St*.4,lt+(Math.random()-.5)*14,St*.7,lt+(Math.random()-.5)*6,St),et.stroke()}}),K=new qt({map:P,color:12896690,alphaTest:.3,emissive:2764326,side:Le,roughness:1,transparent:!1});K.alphaToCoverage=!0,K.onBeforeCompile=et=>{et.uniforms.t=n,et.vertexShader=et.vertexShader.replace("#include <common>",`#include <common>
uniform float t;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{vec3 ip=instanceMatrix[3].xyz;float k=clamp(-position.y/1.8,0.,1.);k*=k;float sw=sin(t*1.1+ip.x*.3+ip.z*.2)*.5+sin(t*2.3+float(gl_InstanceID))*.2;transformed.x+=sw*k*.35;transformed.z+=cos(t*.9+ip.x*.2)*k*.15;}`)};let J=[],S=[],g=[],V=[];for(let[et,bt,z]of h)for(let Et=0;Et<Math.round(z/3.5);Et++){let lt=s(0,6.28),St=s(0,z*.45),Lt=et+Math.cos(lt)*St,vt=bt+Math.sin(lt)*St;G(Lt,vt)&&Math.hypot(Lt-h[4][0]+1,vt-h[4][1]-5)>10&&V.push([Lt,vt,s(.8,1.25)])}for(let et=0;et<26;et++){let bt=s(-260,-60),z=s(-260,-120);V.push([bt,z,s(1.4,2)])}for(let[et,bt,z]of V){let Et=d(et,e(et,bt)-.2,bt),lt=d(et+s(-.4,.4),Et.y+2*z,bt+s(-.4,.4));J.push(new Rn(new ei(Et,d(et+s(-.3,.3),Et.y+z,bt+s(-.3,.3)),lt),4,.5*z,8));for(let St=0;St<5;St++){let Lt=St*1.26+s(-.35,.35);B(lt,d(Math.cos(Lt),s(.08,.3),Math.sin(Lt)).normalize(),4.2*z,.34*z,t?3:2)}}v(Je(J),H);let Q=u(256,256,(et,bt,z)=>{et.clearRect(0,0,bt,z);for(let Et=0;Et<420;Et++){let lt=bt/2+(Math.random()-.5)*bt*.9*Math.sqrt(Math.random()),St=z/2+(Math.random()-.5)*z*.9*Math.sqrt(Math.random());if(Math.hypot(lt-bt/2,St-z/2)>bt*.46)continue;let Lt=Math.random()*6.28,vt=5+Math.random()*5,Ht=Math.random();et.fillStyle=`rgb(${60+Ht*70|0},${80+Ht*75|0},${35+Ht*35|0})`,et.save(),et.translate(lt,St),et.rotate(Lt),et.beginPath(),et.ellipse(0,0,vt,vt*.42,0,0,6.28),et.fill(),et.restore()}});Q.generateMipmaps=!0,y.leafSun={value:d(0,.1,-1)},y.leafI={value:1};let yt=new qt({map:Q,color:10464892,roughness:.8,alphaTest:.45,side:Le});yt.alphaToCoverage=!0,yt.onBeforeCompile=et=>{et.uniforms.sunW=y.leafSun,et.uniforms.lI=y.leafI,et.uniforms.t=n,et.vertexShader=et.vertexShader.replace("#include <common>",`#include <common>
uniform float t;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{vec3 ip=instanceMatrix[3].xyz;transformed.xz+=vec2(sin(t*1.3+ip.x*.4),cos(t*1.1+ip.z*.4))*.06;}`),et.fragmentShader=et.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 sunW;uniform float lI;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{vec3 sv=normalize((viewMatrix*vec4(sunW,0.)).xyz);float bl=pow(max(dot(-normalize(vViewPosition),sv),0.),5.);totalEmissiveRadiance+=diffuseColor.rgb*(vec3(1.,.62,.3)*bl*1.6*lI+vec3(.5,.55,.7)*.05);}`)};let ft=[];for(let et=0;et<3;et++){let bt=new Ee(2.6,2.6);bt.rotateX(-Math.PI/2+(et?1.15:0)),bt.rotateY(et*2.1),ft.push(bt)}let $=Je(ft);{let et=$.attributes.position,bt=$.attributes.normal;for(let z=0;z<et.count;z++){let Et=d(et.getX(z),et.getY(z)+.9,et.getZ(z)).normalize();bt.setXYZ(z,Et.x,Et.y,Et.z)}}let tt=t?9:6,Mt=new nn($,yt,S.length*tt),kt=0;for(let et of S)for(let bt=0;bt<tt;bt++){let z=s(0,6.28),Et=s(0,2.2);x.position.copy(et).add(d(Math.cos(z)*Et,s(-.3,1.1)-Et*.18,Math.sin(z)*Et)),x.rotation.set(s(-.3,.3),s(0,6.28),s(-.3,.3)),x.scale.setScalar(s(.8,1.35)),x.updateMatrix(),Mt.setMatrixAt(kt,x.matrix),A.setHSL(s(.17,.26),s(.25,.45),s(.36,.56)),Mt.setColorAt(kt++,A),bt===0&&et.y>2&&g.push(et.clone())}Mt.castShadow=t,Mt.receiveShadow=!1,i.add(Mt);let Ct=new Ee(.7,1.8);Ct.translate(0,-.9,0);let It=t?6:4,Ot=new nn(Ct,K,g.length*It);kt=0;for(let et of g)for(let bt=0;bt<It;bt++)x.position.copy(et).add(d(s(-1.2,1.2),s(-.5,-.1),s(-1.2,1.2))),x.rotation.set(0,s(0,6),0),x.scale.set(s(.8,1.4),s(.7,1.6),1),x.updateMatrix(),Ot.setMatrixAt(kt++,x.matrix);i.add(Ot)}{let H=new Bo(1,1),Z=H.attributes.position;for(let g=0;g<Z.count;g++){let B=.8+Math.sin(Z.getX(g)*5+Z.getZ(g)*3)*.12;Z.setXYZ(g,Z.getX(g)*B,Z.getY(g)*B*.7,Z.getZ(g)*B)}H.computeVertexNormals();let P=t?420:180,K=new nn(H,new qt({color:6123070,roughness:.9}),P),J=0,S=0;for(;J<P&&S<P*40;){S++;let g=s(-90,120),B=s(-140,40),V=e(g,B);V<.55||V>2.6||h.some(([Q,yt,ft])=>Math.hypot(g-Q,B-yt)<ft*1.05)&&(x.position.set(g,V+.3,B),x.rotation.y=s(0,6),x.scale.setScalar(s(.7,1.6)),x.updateMatrix(),K.setMatrixAt(J,x.matrix),A.setHSL(s(.2,.26),s(.25,.4),s(.22,.32)),K.setColorAt(J++,A))}K.count=J,K.castShadow=t,i.add(K)}{let[H,Z]=[h[4][0]-1,h[4][1]+5],P=e(H,Z)+2.4,K=new Ie;K.position.set(H,0,Z),K.rotation.y=-.44,K.scale.setScalar(.8),i.add(K);let J=new qt({color:15328470,roughness:.85}),S=new qt({color:16184298,roughness:.7}),g=new qt({color:7305848,metalness:.6,roughness:.45,side:Le}),B=y.win=new qt({color:2240568,emissive:16756832,emissiveIntensity:0,roughness:.2}),V=(et,bt,z,Et,lt)=>{let St=new Bt(et,bt);return St.position.set(z,Et,lt),St.castShadow=t,St.receiveShadow=t,K.add(St),St};V(new pe(11,4.2,8),J,0,P+2.1,0);for(let et=-4;et<=4;et+=2)for(let bt of[-3.5,0,3.5])V(new pe(.35,P,.35),S,et*1.2,P/2,bt);V(new pe(13,.25,3),S,0,P,5.4);for(let et=-6;et<=6;et+=2)V(new pe(.18,3.6,.18),S,et,P+1.8,6.7);V(new pe(13,.1,.1),S,0,P+1,6.7);let Q=new bn(1,1,4,1,!0);Q.rotateY(Math.PI/4),Q.scale(8.4,3,6.5),V(Q,g,0,P+4.2+1.5,0);let yt=new pe(13.4,.12,3.2);yt.rotateX(-.22),V(yt,g,0,P+3.7,5.6);for(let et=-4;et<=4;et+=2.6)V(new pe(1,1.7,.05),B,et,P+2.1,4.03);let ft=new pe(1.6,.12,.4);for(let et=0;et<10;et++)V(ft,S,0,P*(et/10),7+(10-et)*.35);let $=K.children.length;y.housePos=d(H,P*.8,Z),V(new pe(.95,2.05,.06),new qt({color:3951172,roughness:.8}),2.5,P+1.15,4.04),V(new pe(.75,1.7,.02),new qt({color:1712158,roughness:.6,transparent:!0,opacity:.7}),2.5,P+1.2,4.08),V(new pe(.18,.24,.12),B,3.4,P+2.55,4.1);let tt=new qt({color:3099194,roughness:.7});for(let[et,bt]of[[-2.6,.25],[-1.3,-.2],[5.2,.5]]){let z=V(new pe(.6,.06,.55),tt,et,P+.55,5.3);z.rotation.y=bt,V(new pe(.6,.75,.06),tt,et,P+.95,5).rotation.set(-.15,bt,0);for(let lt of[-.27,.27]){let St=V(new pe(.05,.45,.05),tt,et+lt,P+.35,5.3);St.rotation.y=bt}}let Mt=new qt({color:5208634,roughness:.85}),kt=new qt({color:7230008,roughness:.9});for(let et of[-5,-1,3])V(new We(.006,.006,.5,3),kt,et,P+2.6,6.1),V(new We(.2,.14,.2,8),kt,et,P+2.25,6.1),V(new ye(.34,8,6),Mt,et,P+2.12,6.1).scale.set(1,.7,1);let Ct=(et,bt)=>{let z=Math.cos(-.44),Et=Math.sin(-.44);return e(H+.8*(et*z+bt*Et),Z+.8*(-et*Et+bt*z))/.8},It=new qt({color:2898476,roughness:.9,wireframe:!0});for(let[et,bt,z]of[[2.2,.3,9.3],[2.2,.9,9.3],[2.9,.3,9.6]]){let Et=V(new pe(.6,.6,.6,4,4,4),It,et,Ct(et,z)+bt+.02,z);Et.rotation.y=.2}let Ot=V(new ye(.3,12,6),new qt({color:15245882,roughness:.5}),-7,Ct(-7,8.5)+.17,8.5);Ot.scale.set(.75,.5,6.5),Ot.rotation.y=.4,K.updateMatrixWorld(!0);for(let et of K.children.slice($))C.push(["house-prop:"+et.geometry.type,_(et),et.material]);{K.updateMatrix();let et=new Map;for(let bt of[...K.children])bt.isMesh&&!bt.isInstancedMesh&&(bt.updateMatrix(),et.has(bt.material)||et.set(bt.material,[]),et.get(bt.material).push(bt));for(let[bt,z]of et)if(!(z.length<2))try{let Et=z.map(Lt=>{let vt=Lt.geometry.clone();vt=vt.index?vt.toNonIndexed():vt;for(let Ht of Object.keys(vt.attributes))Ht!=="position"&&Ht!=="normal"&&Ht!=="uv"&&vt.deleteAttribute(Ht);return vt.attributes.uv||vt.setAttribute("uv",new ie(new Float32Array(vt.attributes.position.count*2),2)),vt.applyMatrix4(Lt.matrix)}),lt=Je(Et);if(!lt)continue;let St=new Bt(lt,bt);St.castShadow=t&&!bt.transparent,St.receiveShadow=t;for(let Lt of z)K.remove(Lt);K.add(St)}catch{}}}let j=new qt({color:16052714,roughness:.75}),k=new qt({color:1381653,roughness:.7}),st=new qt({color:14725168,roughness:.5}),at=new qt({color:14704698,roughness:.5}),Vt=(H,Z,P)=>new Bt(new Rn(new zi(H),10,Z,5),P);function Pt({body:H,leg:Z,bill:P,billCurve:K,neckS:J,s:S}){let g=new Ie,B=new Bt(new ye(.2,10,8),H);B.scale.set(.75,.8,1.8),B.position.y=1,B.rotation.x=-.35,g.add(B),g.userData.legs=[];for(let $ of[-.05,.05]){let tt=new Bt(new We(.012,.012,.95).translate(0,-.47,0),Z);tt.position.set($,.95,0),g.add(tt),g.userData.legs.push(tt)}let V=new Ie;V.position.set(0,1.1,-.25),g.add(V),V.add(Vt(J?[d(0,0,0),d(0,.25,.05),d(0,.42,-.08),d(0,.6,-.1)]:[d(0,0,0),d(0,.15,-.05),d(0,.28,-.12)],.035,H));let Q=new Bt(new ye(.055,8,6),H),yt=J?d(0,.6,-.12):d(0,.3,-.14);Q.position.copy(yt),V.add(Q);let ft=K?Vt([yt.clone().add(d(0,0,-.04)),yt.clone().add(d(0,-.06,-.18)),yt.clone().add(d(0,-.16,-.27))],.012,P):new Bt(new bn(.022,.28,5),P);return K||(ft.position.copy(yt).add(d(0,-.01,-.17)),ft.rotation.x=-Math.PI/2-.1),V.add(ft),g.scale.setScalar(S),g.userData.head=V,g.traverse($=>$.castShadow=t),g}let W=[],xt=(H,Z,P,K,J=0,S=.1)=>{for(let g=0;g<200;g++){let B=s(H,Z),V=s(P,K),Q=e(B,V);if(Q>J&&Q<S)return[B,Q,V]}return null},wt=(H,Z,P)=>{if(Z){if(y.housePos){let K=Z[0]-y.housePos.x,J=Z[2]-y.housePos.z,S=Math.hypot(K,J);S<9&&(Z=[y.housePos.x+K/S*9.5,0,y.housePos.z+J/S*9.5],Z[1]=e(Z[0],Z[2]))}H.position.set(Z[0],Z[1]-.02,Z[2]),H.rotation.y=P,i.add(H),H.userData.ph=s(0,6),H.userData.p0=H.position.clone(),W.push(H)}};for(let H=0;H<5;H++)wt(Pt({body:j,leg:k,bill:st,neckS:!0,s:s(.95,1.05)}),H<2?xt(16,26,-36,-14,.05,.14):xt(-40,30,-40,-12),s(0,6));let X=xt(12,20,-34,-16,.05,.14)||[14,0,-22];for(let H=0;H<7;H++){let Z=Pt({body:j,leg:at,bill:at,billCurve:!0,s:.62});Z.userData.ibis=!0,wt(Z,[X[0]+s(-2.5,2.5),e(X[0],X[2]),X[2]+s(-1.5,1.5)],s(0,6))}{let H=new qt({color:8227740,roughness:.8}),Z=Pt({body:H,leg:new qt({color:4866102}),bill:st,neckS:!0,s:1.35});Z.userData.heron=!0,wt(Z,xt(3,7,-34,-16,.05,.14)||[9,0,-20],2.2)}let O=[];{let H=Je([new ye(.025,6,4).scale(1.3,.5,1),new pe(.04,.018,.02).translate(.045,0,-.02)]),Z=new qt({color:9067066,roughness:.6}),P=t?120:50,K=new nn(H,Z,P);for(let J=0;J<P;J++){let S=null;for(let g=0;g<40&&!S;g++){let B=xt(-5.5,5.5,1,15,-.12,.15);B&&Math.abs(B[0])>1.5&&(S=B)}S=S||xt(-20,20,-30,10,-.2,.12)||[0,0,0],O.push({p:d(S[0],S[1]+.012,S[2]),ph:s(0,100),d:s(0,6.28)}),A.setHSL(s(.04,.08),s(.4,.6),s(.25,.4)),K.setColorAt(J,A)}i.add(K),y.crabs=K}let ht=[];for(let H=0;H<5;H++){let Z=new Ie,P=new Bt(new ye(.12,8,6),j);P.scale.set(1,1,3);let K=new Bt(new We(.03,.03,.35),j);K.position.set(0,.02,-.4),K.rotation.x=1.4;let J=new Bt(new We(.01,.01,.6),k);J.rotation.x=1.5,J.position.z=.55;let S=new Ee(.85,.32);S.translate(.42,0,0);let g=new Bt(S,j),B=new Bt(S,j);B.scale.x=-1,g.rotation.x=B.rotation.x=-Math.PI/2,g.material=B.material=new qt({color:16052714,side:Le}),Z.add(P,K,J,g,B),Z.userData={l:g,r:B,ph:s(0,6),rad:s(40,70),h:s(6,14),sp:s(.025,.04),cz:-45+s(-10,10)},i.add(Z),ht.push(Z)}let nt=[];{let H=new qt({color:6049860,roughness:.85,side:Le}),Z=new qt({color:14273974,roughness:.8});for(let P=0;P<6;P++){let K=new Ie,J=new Bt(new ye(.2,8,6),H);J.scale.set(1,.9,3.2);let S=new Bt(new ye(.09,6,5),Z);S.position.set(0,.12,-.62);let g=new Bt(new bn(.05,.55,5),new qt({color:9072725}));g.rotation.x=-Math.PI/2-.35,g.position.set(0,.02,-.92);let B=new Ee(1.15,.42,4,1),V=B.attributes.position;for(let ft=0;ft<V.count;ft++){let $=V.getX(ft);V.setY(ft,V.getY(ft)+($>0,0)),V.setZ(ft,-Math.sin($*2.4)*.06)}B.translate(.58,0,0);let Q=new Bt(B,H),yt=new Bt(B,H);yt.scale.x=-1,Q.rotation.x=yt.rotation.x=-Math.PI/2,K.add(J,S,g,Q,yt),K.userData={l:Q,r:yt,i:P},i.add(K),nt.push(K)}}let it=new Ie;{let H=new qt({color:4865072,side:Le}),Z=new qt({color:15262422,side:Le}),P=new Bt(new ye(.15,8,6),Z);P.scale.set(1,1,3.2),it.add(P);for(let K of[1,-1]){let J=new Ie,S=new Bt(new Ee(.8,.4).translate(.4,0,0),Z),g=new Bt(new Ee(.75,.32).translate(.37,0,0),H);g.position.x=.78,g.rotation.y=-.35,S.add(g),J.add(S),J.rotation.x=-Math.PI/2,J.scale.x=K,J.rotation.z=K*.18,it.add(J)}i.add(it)}let Tt=[];{let H=new qt({color:5989227,roughness:.35,metalness:.05});for(let Z=0;Z<2;Z++){let P=new Ie,K=new Bt(new ye(.3,14,10),H);K.scale.set(.85,.8,4.6),P.add(K);let J=new Bt(new bn(.18,.42,3),H);J.scale.set(.25,1,1),J.position.set(0,.36,.1),J.rotation.x=.45,P.add(J);let S=new Bt(new pe(.7,.03,.22),H);S.position.z=1.45,P.add(S),i.add(P),Tt.push({g:P,ph:Z*2.3,off:Z*1.3})}}let Ft=new Bt(new ye(.08,8,6).scale(1,.9,3.2),new qt({color:13159632,metalness:.8,roughness:.25}));i.add(Ft);let dt=new Be({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),ut=[];for(let H=0;H<4;H++){let Z=new Bt(new Oo(.9,1,40),dt.clone());Z.rotation.x=-Math.PI/2,Z.position.y=.03,i.add(Z),ut.push({m:Z,t:9})}let mt=(H,Z,P=1)=>{let K=ut.find(J=>J.t>2.5)||ut[0];K.t=0,K.s=P,K.m.position.x=H,K.m.position.z=Z},gt=new Ie;{let H=new qt({color:2761501,roughness:1}),Z=new Bt(new ye(.14,8,6),H);Z.scale.set(1,1.5,.9);let P=new Bt(new ye(.1,8,6),H);P.position.y=.24,gt.add(Z,P);for(let K of[-1,1]){let J=new Bt(new bn(.03,.09,4),H);J.position.set(K*.06,.34,0),gt.add(J);let S=new Bt(new ye(.018,6,4),new Be({color:16760896}));S.position.set(K*.04,.25,-.085),gt.add(S)}gt.scale.setScalar(.75),gt.position.copy(y.roofTop).add(d(0,.03,0)),gt.rotation.y=Math.PI*.15,gt.visible=!1,i.add(gt)}let _t=H=>-30+Math.sin(H*.035)*7+Math.sin(H*.011+1)*10,At=3,Dt=null;if(y.update=(H,Z,P)=>{for(let K of W){let J=K.userData,S=J.head;if(J.ibis)S.rotation.x=.9+Math.sin(H*2.2+J.ph)*.5,K.position.x=J.p0.x+Math.sin(H*.12+J.ph)*.6,K.rotation.y=J.ph+Math.sin(H*.12+J.ph)*.8;else{let g=Math.max(0,Math.sin(H*.4+J.ph)-.92)*12;S.rotation.x=g*.9+Math.sin(H*.7+J.ph)*.05;let B=Math.sin(H*.09+J.ph)>.2?1:0,V=H*1.6+J.ph;K.position.x=J.p0.x+Math.sin(H*.09+J.ph)*1.2,K.position.y=J.p0.y+Math.abs(Math.sin(V))*.02*B,S.position.z=-.25+Math.sin(V*2)*.03*B,J.legs&&(J.legs[0].rotation.x=Math.sin(V)*.35*B,J.legs[1].rotation.x=-Math.sin(V)*.35*B)}}if(y.crabs){let K=y.crabs;O.forEach((J,S)=>{let g=Math.sin(H*.6+J.ph)>.3?1:0;J.d+=Math.sin(H*.3+J.ph)*.01;let B=g*Z*.15;J.p.x+=Math.cos(J.d)*B,J.p.z+=Math.sin(J.d)*B,x.position.copy(J.p),x.rotation.set(0,-J.d+Math.PI/2,0),x.scale.setScalar(1),x.updateMatrix(),K.setMatrixAt(S,x.matrix)}),K.instanceMatrix.needsUpdate=!0,K.visible=P<.8}ht.forEach(K=>{let J=K.userData,S=H*J.sp+J.ph;K.visible=P<.75,K.position.set(Math.cos(S)*J.rad,J.h+Math.sin(S*3)*.8,J.cz+Math.sin(S)*J.rad*.4),K.rotation.y=-S;let g=Math.sin(H*.3+J.ph)>.5,B=H*3.4+J.ph,V=g?.08:Math.sin(B)>0?Math.sin(B)*.75:Math.sin(B)*.45;J.l.rotation.z=V,J.r.rotation.z=-V,K.position.y+=g?0:Math.sin(B)*.06});{let K=H*.035%1;nt.forEach(J=>{let S=J.userData,B=-160+(K-S.i*.012)*320;J.position.set(B,2.4+Math.sin(H*.6+S.i)*.15,_t(B)-3+S.i*.9),J.rotation.y=-Math.PI/2,J.rotation.z=Math.sin(H*.5+S.i)*.05;let V=Math.sin(H*.9+S.i*.7)>.85?Math.sin(H*6)*.4:.06;S.l.rotation.z=V,S.r.rotation.z=-V,J.visible=P<.75})}if(!y.ospRig){let K=H*.08;it.position.set(-10+Math.cos(K)*35,26+Math.sin(K*2)*2,-60+Math.sin(K)*22),it.rotation.set(0,-K+Math.PI,Math.sin(K)*0+.3),it.visible=P<.7}if(Tt.forEach(K=>{let S=(H+K.ph)%9/9,B=-30+(Math.floor((H+K.ph)/9)*23+K.off*11)%50,V=_t(B)+(K.off-.6)*2,Q=Math.min(1,S/.22),yt=S<.22?-1.1+Math.sin(Q*Math.PI)*1.25:-3;K.g.position.set(B+Q*3.2,yt,V),K.g.rotation.set(-Math.cos(Q*Math.PI)*.55,-Math.PI/2,0),S<.22&&Math.abs(S-.03)<Z/9&&mt(B+.3,V,.8),Math.abs(S-.2)<Z/9&&mt(B+3,V,.7),K.g.visible=S<.22}),At-=Z,At<0){let K=s(-25,25);Dt={x:K,z:_t(K)+s(-3,3),t:0,d:s(0,6)},mt(Dt.x,Dt.z,.35),At=s(4,9)}if(Dt){Dt.t+=Z;let K=Dt.t/.7;Ft.visible=K<1,K<1?(Ft.position.set(Dt.x+Math.cos(Dt.d)*K*.9,Math.sin(K*Math.PI)*.75,Dt.z+Math.sin(Dt.d)*K*.9),Ft.rotation.set(-Math.cos(K*Math.PI)*.9,-Dt.d+Math.PI/2,0)):(mt(Ft.position.x,Ft.position.z,.3),Dt=null)}else Ft.visible=!1;ut.forEach(K=>{K.t+=Z;let J=K.t/2.2;K.m.visible=J<1;let S=(.15+J*1.4)*(K.s||1);K.m.scale.setScalar(S),K.m.material.opacity=(1-J)*.35*(1-P*.5)}),gt.visible=P>.5||ey,y.owlRig||(gt.rotation.y=Math.PI*.15+Math.sin(H*.3)*.6*(Math.sin(H*.13)>.6?1:0)),y.win&&(y.win.emissiveIntensity=P*2.2)},y.perches=[[-4.6,2.6,T-1.4,.9],[b/2+.04,c+1.05,a-2.4*7,-1.2]],y.osp=it,y.owl=gt,y.splashAt=mt,y.creekZ=_t,y.waders=W,y.fly=ht,y.pel=nt,y.dol=Tt,y.mul=Ft,new URLSearchParams(location.search).get("fauna")!=="0"){let H=Kf(y,{S:i,HQ:t,mobile:!t,H:e}),Z=y.update;y.update=(P,K,J)=>{Z(P,K,J);try{H(P,K,J)}catch(S){y._fe||(y._fe=1,console.error("fauna",S))}}}y.wakes=()=>{let H=[];if(Tt.forEach(Z=>{Z.g.visible&&Z.g.position.y>-1.2&&H.push([Z.g.position.x,Z.g.position.z,0,.9])}),y.boat){let Z=y.boat.position;H.push([Z.x,Z.z,Math.PI/2,.25])}return H},y.wildFocus=()=>{let H=W.find(Z=>Z.userData.ibis)||W[0];return H?H.position.clone().add(d(0,.4,0)):d(0,0,-15)},y.waders=W;{let H=new U,Z=W.filter(S=>!S.userData.ibis&&!S.userData.heron).slice(0,2),P=W.find(S=>S.userData.heron),K=W.find(S=>S.userData.ibis),J=[0,Math.floor(O.length/2)].map(S=>O[S]).filter(Boolean);y.src=()=>{let S=[];return P&&(P.getWorldPosition(H),S.push(["hr","heron",H.x,H.y+1.2,H.z,1])),Z.forEach((g,B)=>{g.getWorldPosition(H),S.push(["eg"+B,"egret",H.x,H.y+1,H.z,1])}),K&&(K.getWorldPosition(H),S.push(["ib","ibis",H.x,H.y+.5,H.z,1])),J.forEach((g,B)=>{S.push(["cb"+B,"crab",g.p.x,g.p.y,g.p.z,1]),S.push(["md"+B,"mud",g.p.x+1.5,g.p.y,g.p.z-1,1])}),it.getWorldPosition(H),S.push(["os","osprey",H.x,H.y,H.z,1]),gt.getWorldPosition(H),S.push(["ow","owl",H.x,H.y,H.z,gt.visible?1:0]),Ft.getWorldPosition(H),S.push(["sp","splash",H.x,0,H.z,1]),S}}{let H=new ve;H.setAttribute("position",new ie([-.6,.12,-.1,0,0,.18,0,0,-.12,.6,.12,-.1,0,0,-.12,0,0,.18],3)),H.computeVertexNormals();let Z=new Be({color:2826023,side:Le,fog:!0,transparent:!0,opacity:.92}),P=[[9,-150,34,-120,6.5,14],[7,-150,40,-150,5.6,4]],K=P.reduce((Mt,kt)=>Mt+kt[0],0),J=new nn(H,Z,K);J.frustumCulled=!1,J.name="skein",i.add(J);let S=new ae,g=new en,B=new U,V=new U,Q=new hi,yt=[],ft=new qt({color:15261904,roughness:.6}),$=new qt({color:14182444,roughness:.6});for(let[Mt,kt]of[[-19,$],[-12.5,ft],[9,$],[16,ft],[23,$]]){let Ct=new Ie,It=new Bt(new Eo(.11,.12,3,8),kt);It.rotation.z=1.2,Ct.add(It);let Ot=new Bt(new We(.015,.015,.3,5),ft);Ot.position.y=.12,Ct.add(Ot),Ct.position.set(Mt,.02,_t(Mt)+Mt%3),Ct.name="buoy",i.add(Ct),yt.push({b:Ct,ph:Mt})}let tt=y.update;y.update=(Mt,kt,Ct)=>{tt(Mt,kt,Ct);let It=Math.max(0,Math.min(1,(Ct-.08)/.12))*(1-Math.max(0,Math.min(1,(Ct-.62)/.15)));if(J.visible=It>.01,Z.opacity=.92*It,J.visible){let Ot=0;for(let[et,bt,z,Et,lt,St]of P){let vt=(Mt*lt+St*6)%300+bt;for(let Ht=0;Ht<et;Ht++){let Yt=Ht%2?1:-1,ce=Math.ceil(Ht/2);B.set(vt-ce*2.2,z-ce*.35+Math.sin(Mt*.4+Ht)*.3,Et+Yt*ce*2);let he=Math.sin(Mt*5.2+Ht*.7+St);Q.set(0,Math.PI/2,0),g.setFromEuler(Q),V.set(1.6,1.6*(.25+he*.95),1.6),S.compose(B,g,V),J.setMatrixAt(Ot++,S)}}J.instanceMatrix.needsUpdate=!0}for(let Ot of yt)Ot.b.position.y=.02+Math.sin(Mt*1.3+Ot.ph)*.03,Ot.b.rotation.z=Math.sin(Mt*1.1+Ot.ph)*.12}}return y}var vi=i=>document.querySelector(i),tp=matchMedia("(prefers-reduced-motion: reduce)").matches,Ue=new URLSearchParams(location.search),mp=vi("#load"),ny=vi("#bar"),si=i=>(ny.style.transform=`scaleX(${i})`,new Promise(t=>requestAnimationFrame(()=>t())));function gp(){document.body.classList.add("nogl"),mp.classList.add("done")}var Ze;try{let i=vi("#gl");Ze=new Ac({canvas:i,antialias:!0,powerPreference:"high-performance"})}catch(i){throw gp(),i}var xp=matchMedia("(pointer:coarse)").matches||innerWidth<760,De=Ue.get("q")?Ue.get("q")==="high":!xp,iy=(()=>{try{let i=Ze.getContext(),t=i.getExtension("WEBGL_debug_renderer_info");return t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER)}catch{return""}})(),Uu=Ue.get("tier")||(De?"high":/Apple GPU|Apple M|Adreno \(TM\) (7[3-9]\d|8\d\d)|Mali-G7[1-9]|Immortalis/i.test(iy)||/iPhone|iPad/.test(navigator.userAgent)&&screen.width*devicePixelRatio>=1100?"pro":"low"),Jr=Uu==="pro",Vc=matchMedia("(pointer:coarse)").matches,Tu=Math.min(devicePixelRatio,Uu==="high"?1.5:Jr&&!Vc?1.75:Vc?1.35:1.5),_u=Uu==="high"?1:Jr?1.25:1,Nn=Ue.get("dpr")?+Ue.get("dpr"):Tu;Ze.setPixelRatio(Nn);Ze.toneMapping=Ps;Ze.toneMappingExposure=De?.32:.4;Ze.outputColorSpace=Sn;Ze.shadowMap.enabled=De;Ze.shadowMap.autoUpdate=!1;Ze.shadowMap.needsUpdate=!0;Ze.shadowMap.type=Ul;var be=new gr,Pe=new ln(52,1,.1,2e4),gi={value:0},ep=11,vp=()=>(ep=ep*16807%2147483647)/2147483647,Jt=(i,t)=>i+vp()*(t-i);function Dc(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function wa(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Dc(e,n),c=Dc(e+1,n),h=Dc(e,n+1),f=Dc(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+f)*o*a}var Li=(i,t)=>wa(i,t)*.5+wa(i*2.1,t*2.1)*.25+wa(i*4.3,t*4.3)*.125+wa(i*8.7,t*8.7)*.0625,ze=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Fn=(i,t,e)=>i+(t-i)*e;function Fs(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Mr(s);return r.colorSpace=Sn,r.anisotropy=8,n&&(r.wrapS=r.wrapT=ws),r}var Ws=new Rt(14,-46),xi=new Rt(1,-.32).normalize(),Yr=new Rt(-xi.y,xi.x).multiplyScalar(-1),Xr=(i,t)=>{let e=i-Ws.x,n=t-Ws.y,s=e*xi.x+n*xi.y;return e*Yr.x+n*Yr.y-ze(-5,-35,s)*80},Au=[[-62,-22,15],[34,12,9],[-30,-62,17],[56,-10,8],[26,-38,11]],yu=i=>-30+Math.sin(i*.035)*7+Math.sin(i*.011+1)*10;function ki(i,t){let e=Xr(i,t),n=.22+(Li(i*.08,t*.08)-.5)*.1;n=Fn(n,.02,(1-ze(1.5,3.5,Math.hypot((i-1)*.8,t-10)))*.9);let s=Math.abs(t-yu(i));n=Fn(n,.1,1-ze(8,13,s)),n=Fn(n,-1.9,1-ze(4.5,9,s));let r=Math.abs(i+16-Math.sin(t*.09)*4);n=Fn(n,-.5,(1-ze(1,2.4,r))*ze(yu(i)-2,yu(i)+4,t)*(1-ze(8,30,t))),n=Fn(n,-3.2,ze(-62,-98,t-i*.35));for(let[c,h,f]of Au){let u=Math.hypot(i-c,t-h)/f;n=Fn(n,.9+Li(i*.2,t*.2)*.7,1-ze(.25,1,u))}let o=e<0?e*.12:Math.min(.9,e*.06);e>10&&(o+=ze(10,20,e)*(2.4+Li(i*.07,t*.07)*4.2)),o+=(Li(i*.5,t*.5)-.5)*.08;let a=(i-Ws.x)*xi.x+(t-Ws.y)*xi.y,l=ze(-14,-2,e)*ze(-25,10,a);return n=Fn(n,o,l),n}var qc=new Or;qc.scale.setScalar(1e4);be.add(qc);var Kr=qc.material.uniforms;Kr.turbidity.value=4.5;Kr.rayleigh.value=3.6;Kr.mieCoefficient.value=.005;Kr.mieDirectionalG.value=.86;var Nu=new U().setFromSphericalCoords(1,_n.degToRad(90-3.2),_n.degToRad(206));Kr.sunPosition.value.copy(Nu);var sy=new Ut(15310970);be.fog=new xo(sy,De?.0042:.0048);var ry=new Fr(Ze),Hc=new Ho(16762784,5914680,1.7);be.add(Hc);var Bn=new as(16754784,3.2);Bn.position.copy(Nu).multiplyScalar(80);Bn.target.position.set(0,0,-6);be.add(Bn,Bn.target);if(De){Bn.castShadow=!0,Bn.shadow.mapSize.set(4096,4096);let i=Bn.shadow.camera;i.left=-30,i.right=30,i.top=30,i.bottom=-30,i.near=1,i.far=200,Bn.shadow.bias=-4e-4,Bn.shadow.normalBias=.03}var oy=24,ay=-14,kc=2.4,Un,Vs,_p,yp;var Mp=[],Sp=[];var Wn,Ye;async function ly(){await si(.08);let i=420,t=De?300:Jr?240:180,e=new Ee(i,i,t,t);e.rotateX(-Math.PI/2),e.translate(40,0,-60);let n=e.attributes.position,s=new Float32Array(n.count*3),r=new Ut,o=new Ut(2303786),a=new Ut(4014142),l=new Ut(5921328),c=new Ut(15916208),h=new Ut(11045482),f=new Ut(14270612);for(let b=0;b<n.count;b++){let m=n.getX(b),M=n.getZ(b),T=ki(m,M);n.setY(b,T);let I=Xr(m,M),D=ze(-6,1,I);r.copy(o).lerp(a,ze(-.05,.14,T)*.6).lerp(l,ze(.12,.2,T)*.8).lerp(new Ut(3815972),ze(.6,1.1,T));let N=r.clone().copy(h).lerp(c,ze(.08,.5,T)).lerp(f,ze(1.2,2.5,T));r.lerp(N,D);let L=.9+Li(m*1.3,M*1.3)*.2;s[b*3]=r.r*L,s[b*3+1]=r.g*L,s[b*3+2]=r.b*L}e.setAttribute("color",new cn(s,3)),e.computeVertexNormals();let u=new qt({vertexColors:!0,roughness:.9});u.onBeforeCompile=b=>{b.uniforms.t=gi,b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
varying float vY;varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vY=position.y;vXZ=(modelMatrix*vec4(position,1.)).xz;`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
varying float vY;varying vec2 vXZ;float mh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}float mn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mh(i),mh(i+vec2(1,0)),f.x),mix(mh(i+vec2(0,1)),mh(i+vec2(1,1)),f.x),f.y);}`).replace("#include <roughnessmap_fragment>","float wetm=1.-smoothstep(-.02,.16,vY);float roughnessFactor=mix(.92,.06,wetm)+mn(vXZ*3.)*.12*wetm;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{float mud=(1.-smoothstep(.02,.2,vY))*smoothstep(-.4,-.05,vY);float ph=dot(vXZ,vec2(.8,.6))*7.+mn(vXZ*.7)*6.;float rp=cos(ph)*(.6+.4*mn(vXZ*2.));vec3 pw=vec3(.8,0.,.6)*rp*.22*mud+vec3(mn(vXZ*9.)-.5,0.,mn(vXZ*9.+3.)-.5)*.18*mud;normal=normalize(normal+(viewMatrix*vec4(pw,0.)).xyz);}`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(.55,1.,smoothstep(-.1,.25,vY));{float mk=smoothstep(.14,.2,vY)*(1.-smoothstep(.55,.75,vY));float st=mn(vXZ*vec2(9.,1.6)+mn(vXZ*.5)*3.)*.6+mn(vXZ*vec2(23.,4.))*.4;vec3 gc=mix(vec3(.23,.2,.09),vec3(.55,.46,.22),st);diffuseColor.rgb=mix(diffuseColor.rgb,gc,mk*.85);}`)};let d=new Bt(e,u);d.receiveShadow=!0,be.add(d),await si(.2);let x=(()=>{let m=document.createElement("canvas");m.width=m.height=256;let M=m.getContext("2d"),T=M.createImageData(256,256),I=new Float32Array(256*256),D=[];for(let L=0;L<26;L++)D.push([1+(Math.random()*9|0),(Math.random()*9|0)-4,Math.random()*6.28,1/(1+L*.35)]);for(let L=0;L<256;L++)for(let F=0;F<256;F++){let q=0;for(let[G,j,k,st]of D)q+=Math.sin((G*F+j*L)/256*6.283+k)*st;I[L*256+F]=q}for(let L=0;L<256;L++)for(let F=0;F<256;F++){let q=I[L*256+(F+1)%256]-I[L*256+(F-1+256)%256],G=I[(L+1)%256*256+F]-I[(L-1+256)%256*256+F],j=new U(-q*.6,-G*.6,1).normalize(),k=(L*256+F)*4;T.data[k]=(j.x*.5+.5)*255,T.data[k+1]=(j.y*.5+.5)*255,T.data[k+2]=(j.z*.5+.5)*255,T.data[k+3]=255}M.putImageData(T,0,0);let N=new Mr(m);return N.wrapS=N.wrapT=ws,N})();Un=new Pc(new Ee(1e4,1e4,1,1),{textureWidth:De?768:384,textureHeight:De?768:384,waterNormals:x,sunDirection:Nu.clone(),sunColor:16765600,waterColor:3814436,distortionScale:.7,fog:!0});{let b=Un.onBeforeRender;Un.onBeforeRender=()=>{},Un.__mirror=(m,M,T)=>b.call(Un,m,M,T)}Un.rotation.x=-Math.PI/2,Un.position.y=0,Un.material.uniforms.size.value=24,be.add(Un),await si(.3);{let I=new Uint8Array(262144);for(let L=0;L<256;L++)for(let F=0;F<256;F++){let q=ki(-170+F/255*420,-270+L/255*420),G=Math.max(0,Math.min(255,Math.round((q+3)/5*255))),j=(L*256+F)*4;I[j]=G,I[j+1]=G,I[j+2]=G,I[j+3]=255}let D=new ts(I,256,256);D.magFilter=D.minFilter=hn,D.needsUpdate=!0;let N=Un.material;Object.assign(N.uniforms,{hMap:{value:D},hB:{value:new Se(-170,-270,420,420)},wk:{value:[0,1,2,3].map(()=>new Se(0,0,0,0))},nite:{value:0}}),N.fragmentShader=N.fragmentShader.replace("uniform vec3 waterColor;","uniform vec3 waterColor;uniform sampler2D hMap;uniform vec4 hB;uniform vec4 wk[4];uniform float nite;").replace("vec3 outgoingLight = albedo;",`
  vec2 huv=(worldPosition.xz-hB.xy)/hB.zw;float hh=(huv.x<0.||huv.y<0.||huv.x>1.||huv.y>1.)?-3.:texture2D(hMap,huv).r*5.-3.;float dep=max(0.,-hh);
  float lvl=clamp(dot(waterColor,vec3(.33))*7.,.08,1.4);
  vec3 silt=mix(vec3(.36,.27,.13),vec3(.075,.07,.04),smoothstep(.05,1.6,dep));
  float dfar=smoothstep(30.,220.,distance);
  albedo=mix(albedo,silt*lvl*(.55+diffuseLight.r*.4)+specularLight*.6,(1.-reflectance)*.62*(1.-dfar*.6));
  float fn=noise.w*.5+.5;float sh=smoothstep(1.1,.05,dep)*(1.-smoothstep(.1,.2,hh));sh*=sh;
  float foam=sh*(.35+.65*smoothstep(.3,.7,fn+sin(time*.9+dep*30.)*.2))*.85;
  for(int i=0;i<4;i++){vec4 w=wk[i];if(w.w<=0.)continue;vec2 d=vec2(cos(w.z),sin(w.z));vec2 q=worldPosition.xz-w.xy;float u=-dot(q,d),v=dot(q,vec2(-d.y,d.x));
   float arm=abs(abs(v)-u*.36);float trail=step(0.,u)*smoothstep(9.,0.,u);foam+=w.w*trail*(smoothstep(.22,0.,arm)*.9+smoothstep(.5,0.,abs(v))*smoothstep(3.,0.,u)*.6)*(.6+.4*fn);
   float rr=length(q);foam+=w.w*.5*smoothstep(.12,0.,abs(rr-1.2-fract(time*.6)*1.5))*smoothstep(3.,1.,rr);}
  albedo=mix(albedo,vec3(.86,.84,.78)*lvl*1.3,clamp(foam,0.,1.)*.75);
  vec3 outgoingLight = albedo;`)}{let m=new Ee(360,26,200,1);m.rotateX(-Math.PI/2);let M=new Ae({transparent:!0,depthWrite:!1,fog:!0,uniforms:Object.assign(En.merge([Gt.fog]),{t:gi,uA:{value:Ws},uN:{value:Yr},uD:{value:xi}}),vertexShader:`varying vec2 vUv;varying vec3 wp;#include <fog_pars_vertex>
 void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);wp=w.xyz;vec4 mvPosition=viewMatrix*w;gl_Position=projectionMatrix*mvPosition;
 #include <fog_vertex>
 }`.replace("#include <fog_pars_vertex>",`
#include <fog_pars_vertex>
`),fragmentShader:`uniform float t;uniform float glow;uniform vec2 uA,uN,uD;varying vec2 vUv;varying vec3 wp;#include <fog_pars_fragment>
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
 void main(){vec2 q=wp.xz-uA;float d=-dot(q,uN)/26.;float al=dot(q,uD);vec2 vUv=vec2(al/360.+.3,d);if(d<0.)discard;float a=0.;for(int k=0;k<3;k++){float ph=fract(t*.07+float(k)/3.);float line=1.-ph;float pos=line*.9;float w=.03+.06*ph;
 float nn=n(vec2(vUv.x*180.,float(k)*7.+t*.3));float band=smoothstep(w,0.,abs(d-pos-(nn-.5)*.04))*(.35+.65*ph)*smoothstep(.0,.15,ph);a+=band*(.6+.4*n(vec2(vUv.x*60.,t)));}
 float shore=smoothstep(.06,0.,d)*(.5+.5*n(vec2(vUv.x*90.,t*.5)));a+=shore;a*=smoothstep(25.,70.,al)*smoothstep(1.,.97,vUv.x);
 gl_FragColor=vec4(mix(vec3(1.,.93,.86)*2.2,vec3(.35,1.,.95)*1.6,glow),clamp(a,0.,1.)*mix(1.,.75,glow));
 #include <fog_fragment>
 }`.replace("#include <fog_pars_fragment>",`
#include <fog_pars_fragment>
`)});yp=M,M.uniforms.glow={value:0};let T=new Bt(m,M),I=Math.atan2(xi.y,xi.x);T.rotation.y=-I;let D=Ws.clone().addScaledVector(xi,360*.35);T.position.set(D.x-Yr.x*13,.04,D.y-Yr.y*13),T.rotation.y=-I+Math.PI,be.add(T)}await si(.36);let A=window.__wt=Fs(512,128,(b,m,M)=>{b.fillStyle="#8f6a4a",b.fillRect(0,0,m,M);for(let T=0;T<220;T++){let I=Math.random()*M;b.strokeStyle=`rgba(${40+Math.random()*40|0},${25+Math.random()*25|0},15,${.08+Math.random()*.25})`,b.lineWidth=Math.random()*2.5,b.beginPath(),b.moveTo(0,I);for(let D=0;D<=m;D+=32)b.lineTo(D,I+Math.sin(D*.02+T)*2);b.stroke()}for(let T=0;T<5;T++)b.fillStyle="rgba(50,30,20,.35)",b.beginPath(),b.ellipse(Math.random()*m,Math.random()*M,8,4,0,0,7),b.fill();b.fillStyle="rgba(200,190,175,.15)",b.fillRect(0,0,m,M)},!0),v=Fs(256,256,(b,m,M)=>{b.fillStyle="#4f3b2b",b.fillRect(0,0,m,M);for(let T=0;T<8;T++)for(let I=0;I<8;I++){let D=I*32+T%2*16,N=T*32;b.fillStyle=`rgb(${100+Math.random()*30|0},${78+Math.random()*20|0},${55+Math.random()*15|0})`,b.beginPath(),b.moveTo(D,N+30),b.lineTo(D+16,N-2),b.lineTo(D+32,N+30),b.lineTo(D+16,N+22),b.fill(),b.strokeStyle="#2a1d14",b.lineWidth=2,b.stroke()}},!0),p=Fs(256,256,(b,m,M)=>{b.clearRect(0,0,m,M);let T=m/2,I=M-6;b.lineCap="round";for(let D=0;D<34;D++){let N=-Math.PI*.92+D*(Math.PI*.84/33),L=M*.92*(.8+.2*Math.sin(D*1.3)),F=T+Math.cos(N)*L*.5,q=I+Math.sin(N)*L,G=b.createLinearGradient(T,I,F,q);G.addColorStop(0,"#4d6a34"),G.addColorStop(1,D%5?"#7c8a46":"#8f8a4a"),b.strokeStyle=G,b.lineWidth=7,b.beginPath(),b.moveTo(T,I-M*.12),b.quadraticCurveTo(T+(F-T)*.5,I-M*.12+(q-I)*.5,F,q),b.stroke(),b.strokeStyle="rgba(30,40,20,.5)",b.lineWidth=1,b.beginPath(),b.moveTo(T,I-M*.12),b.lineTo(F,q),b.stroke()}b.globalCompositeOperation="destination-out";for(let D=0;D<34;D++){if(D%2)continue;let N=-Math.PI*.92+(D+.5)*(Math.PI*.84/33),L=M*.9;b.lineWidth=2.2,b.beginPath(),b.moveTo(T+Math.cos(N)*L*.5*.45,I+Math.sin(N)*L*.45),b.lineTo(T+Math.cos(N)*L*.5*1.05,I+Math.sin(N)*L*1.05),b.stroke(),D%6===0&&(b.lineWidth=4,b.beginPath(),b.moveTo(T+Math.cos(N+.02)*L*.5*.8,I+Math.sin(N+.02)*L*.8),b.lineTo(T+Math.cos(N+.05)*L*.5*1.05,I+Math.sin(N+.05)*L*1.05),b.stroke())}b.globalCompositeOperation="source-over",b.fillStyle="#4a5a2e",b.beginPath(),b.moveTo(T-5,I),b.lineTo(T,I-M*.16),b.lineTo(T+5,I),b.fill()});p.colorSpace=Sn,await si(.42);function y(b,m,{tip:M=0,alpha:T=null,side:I=Le}={}){let D=new qt({color:b,roughness:.75,side:I,map:T,alphaTest:T?.45:0});return D.onBeforeCompile=N=>{N.uniforms.t=gi,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
uniform float t;varying float vH;varying float vG;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vH=clamp(position.y/1.0,0.,1.);vec3 ip=vec3(0.);
 #ifdef USE_INSTANCING
 ip=instanceMatrix[3].xyz;
 #endif
 float wv=sin(t*1.4+ip.x*.25+ip.z*.18)*.6+sin(t*2.9+ip.x*.9-ip.z*.4)*.25+sin(t*.5+ip.z*.05)*.5;
 float gp=dot(ip.xz,vec2(.8,.6))*.06-t*.9;float gust=pow(.5+.5*sin(gp)*sin(gp*.37+1.7),2.);vG=gust;wv=wv*(.55+1.4*gust)+gust*.9;
 float k=${m.toFixed(3)}*pow(max(position.y,0.),1.6);transformed.x+=wv*k;transformed.z+=wv*k*.4;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
varying float vH;varying float vG;`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb*=mix(.35,1.15,smoothstep(0.,.9,vH))*(1.+vG*.22*vH);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance+=vec3(1.,.55,.22)*pow(vH,3.)*${M.toFixed(2)};`)},D}{let b=[];for(let F=0;F<(De?7:9);F++){let q=new Ee(De?.045:.065,1,1,5);q.translate(0,.5,0);let G=q.attributes.position,j=Jt(-.3,.3),k=Jt(.6,1.1),st=Jt(0,6.28);for(let at=0;at<G.count;at++){let Vt=G.getY(at);G.setX(at,G.getX(at)*(1-Vt*.9)),G.setY(at,Vt*k),G.setZ(at,j*Vt*Vt*k)}q.rotateY(st),q.translate(Jt(-.12,.12),0,Jt(-.12,.12)),b.push(q)}let m=Je(b);m.computeVertexNormals();let M=De?36e3:Jr?24e3:12e3,T=new nn(m,y(15129792,.09,{tip:.3}),M),I=new Fe,D=new Ut,N=0,L=0;for(;N<M&&L<M*30;){L++;let F=vp()<.45,q=F?Jt(-30,30):Jt(-110,80),G=F?Jt(-18,34):Jt(-95,40),j=ki(q,G);if(j<.17||j>.6||Xr(q,G)>-5||Math.abs(q)<1.1&&G>-14)continue;I.position.set(q,j-.05,G);let k=ze(.13,.2,j),st=Jt(.75,1.25)*(.6+k*.5);I.scale.set(st,st*Jt(.8,1.3),st),I.rotation.y=Jt(0,6.28),I.updateMatrix(),T.setMatrixAt(N,I.matrix);{let at=Li(q*.07,G*.07),Vt=Math.floor(at*4)/4;D.setHSL(.12+Vt*.1+Jt(-.015,.015)+(1-k)*.03,Jt(.32,.46),Jt(.3,.42)+Vt*.06)}T.setColorAt(N,D),N++}T.count=N,T.receiveShadow=De,T.frustumCulled=!1,be.add(T)}await si(.55);{let b=[];for(let F=0;F<3;F++){let q=new We(.006,.012,1.4,3);q.translate(0,.7,0);let G=Jt(-.15,.15);q.rotateZ(G),b.push(q);for(let j=0;j<6;j++){let k=new ye(.035,4,3);k.scale(.6,1.6,.3),k.translate(Math.sin(G)*-1.3+(j%2?.05:-.05),1.25+j*.03,0),b.push(k)}for(let j=0;j<2;j++){let k=new Ee(.03,.9,1,3);k.translate(0,.45,0),k.rotateZ(Jt(-.6,.6)),k.rotateY(Jt(0,6)),b.push(k)}}let m=Je(b.map(F=>F.index?F.toNonIndexed():F).map(F=>(F.deleteAttribute("uv"),F)));m.computeVertexNormals();let M=De?2600:900,T=new nn(m,y(13480058,.12,{tip:.25}),M),I=new Fe,D=new Ut,N=0,L=0;for(;N<M&&L<M*40;){L++;let F=Jt(0,200),q=Jt(-150,-20),G=Xr(F,q);if(G<13||G>70)continue;let j=ki(F,q);I.position.set(F,j-.05,q),I.rotation.y=Jt(0,6.28);let k=Jt(.9,1.5);I.scale.setScalar(k),I.updateMatrix(),T.setMatrixAt(N,I.matrix),D.setHSL(Jt(.09,.13),Jt(.3,.5),Jt(.5,.65)),T.setColorAt(N,D),N++}T.count=N,T.frustumCulled=!1,be.add(T)}await si(.62);let C=[],_=(b,m,M,T)=>C.push([b,m,M,T]);for(let[b,m,M]of Au)for(let T=0;T<Math.round(M*.7);T++){let I=Jt(0,6.28),D=Jt(0,M*.55),N=b+Math.cos(I)*D,L=m+Math.sin(I)*D;ki(N,L)<.85||Math.hypot(N-25,L+33)<9||_(N,L,Jt(6,11),Jt(-.18,.18))}for(let b=0;b<70;b++){let m=Jt(20,220),M=Jt(-170,-40),T=Xr(m,M);T<26||T>90||_(m,M,Jt(6,12),Jt(-.2,.2))}{let b=[],m=[];for(let[G,j,k,st]of C){let at=ki(G,j)-.2,Vt=st*k,Pt=Jt(-.15,.15)*k,W=new zi([new U(G,at,j),new U(G+Vt*.25,at+k*.4,j+Pt*.2),new U(G+Vt*.7,at+k*.8,j+Pt*.6),new U(G+Vt,at+k,j+Pt)]),xt=new Rn(W,10,.2,7),wt=xt.attributes.uv;for(let O=0;O<wt.count;O++)wt.setXY(O,wt.getX(O)*k*1.2,wt.getY(O)*2);b.push(xt);let X=W.getPoint(1);for(let O=0;O<22;O++){let ht=O>=17;m.push({p:X,yaw:O/17*6.283+Jt(-.2,.2)+(ht?Jt(0,6):0),pitch:ht?Jt(-1.25,-1):Jt(-.45,.75)+(O%3===0?.35:0),s:ht?Jt(.9,1.1):Jt(1.05,1.45),dead:ht})}}let M=new qt({map:v,roughness:1,color:12296330}),T=new Bt(Je(b),M);T.castShadow=De,T.receiveShadow=De,be.add(T);let I=new Ee(2.4,2.4,8,8),D=I.attributes.position;for(let G=0;G<D.count;G++){let j=D.getX(G),k=D.getY(G)+1.2,st=k/2.4;D.setXYZ(G,j*(.15+.85*st),-st*st*.9+Math.abs(j)*.25*st,-k)}I.computeVertexNormals();let N=y(16777215,0,{tip:.05,alpha:p});N.alphaToCoverage=!0,N.onBeforeCompile=(G=>{let j=N.onBeforeCompile;return k=>{k.uniforms.t=gi,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
uniform float t;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vec3 ip=instanceMatrix[3].xyz;float d=clamp(-position.z/2.4,0.,1.);float wv=sin(t*1.7+ip.x*.4+ip.z*.3+float(gl_InstanceID)*.7)*.5+sin(t*3.1+float(gl_InstanceID))*.2;transformed.y+=wv*d*d*.35;transformed.x+=wv*d*.12;`)}})();let L=new nn(I,N,m.length),F=new Fe,q=new Ut;m.forEach((G,j)=>{F.position.copy(G.p),F.rotation.set(0,0,0),F.rotateY(G.yaw),F.rotateX(G.pitch),F.scale.setScalar(G.s),F.updateMatrix(),L.setMatrixAt(j,F.matrix),G.dead?q.setRGB(.55,.38,.22):q.setHSL(Jt(.18,.25),Jt(.25,.45),Jt(.42,.6)),L.setColorAt(j,q)}),L.castShadow=De,L.frustumCulled=!1,be.add(L)}await si(.72);{let b=new Ao(.09,0);b.scale(1.6,.35,.9);let m=De?5e3:1500,M=new nn(b,new qt({color:10130058,roughness:.55}),m),T=new Fe,I=new Ut,D=0,N=0;for(;D<m&&N<m*60;){N++;let L=Jt(-60,60),F=Jt(-55,30),q=ki(L,F);if(q<-.3||q>.05||Xr(L,F)>-8||Li(L*.2,F*.2)<.5)continue;T.position.set(L,q+.02,F),T.rotation.set(Jt(-.5,.5),Jt(0,6),Jt(-.5,.5)),T.scale.setScalar(Jt(.6,1.5)),T.updateMatrix(),M.setMatrixAt(D,T.matrix);let G=Jt(.5,1);I.setRGB(G,G*.97,G*.92),M.setColorAt(D++,I)}M.count=D,be.add(M)}{let m=function(T,I,D,N,L){let F=T.clone().addScaledVector(I,D),q=T.clone().lerp(F,.5).add(new U(Jt(-.2,.2),Jt(-.1,.1),Jt(-.2,.2)).multiplyScalar(D));if(b.push(new Rn(new ei(T,q,F),4,N,5)),L>0)for(let G=0;G<(L>2?2:3);G++){let j=I.clone().add(new U(Jt(-.9,.9),Jt(-.1,.6),Jt(-.9,.9))).normalize();m(F,j,D*Jt(.55,.75),N*.62,L-1)}},b=[];[[0,30,.2],[3,52,-.4],[-1,80,.5]].forEach(([T,I,D])=>{let N=Ws.clone().addScaledVector(xi,I).addScaledVector(Yr,-T),L=N.x,F=N.y,q=new U(L,ki(L,F)-.1,F);m(q,new U(Math.sin(D),1,.2).normalize(),Jt(2.2,3),.22,4);for(let G=0;G<4;G++){let j=Jt(0,6.28);b.push(new Rn(new ei(q.clone().add(new U(0,.3,0)),q.clone().add(new U(Math.cos(j)*.6,.05,Math.sin(j)*.6)),q.clone().add(new U(Math.cos(j)*1.4,-.1,Math.sin(j)*1.4))),4,.09,4))}});let M=new Bt(Je(b),new qt({color:13616052,roughness:.85}));M.castShadow=De,be.add(M)}await si(.84);{let b=new Ee(1400,40,280,1),m=b.attributes.position;for(let D=0;D<m.count;D++)if(m.getY(D)>0){let N=m.getX(D);m.setY(D,7+Li(N*.015,1)*11+Math.pow(Math.abs(Math.sin(N*.21+Li(N*.05,2)*3)),.6)*4.5*wa(N*.04,3)+Math.pow(Math.abs(Math.sin(N*.55)),.8)*1.6)}else m.setY(D,-2);let M=new Be({color:3811894,fog:!0}),T=new Bt(b,M);T.position.set(-350,0,-420),T.rotation.y=.55,be.add(T);let I=T.clone();I.position.set(-620,0,-80),I.rotation.y=1.35,be.add(I)}{let b=7,m=()=>(b=b*16807%2147483647)/2147483647,M=Fs(512,256,(I,D,N)=>{let L=[];for(let q=0;q<140;q++){let G=m();L.push([D*.12+G*D*.76,N*.62-Math.sin(G*Math.PI)*N*(.12+m()*.22)+m()*N*.06,10+m()*34*Math.sin(G*Math.PI+.2)])}L.sort((q,G)=>G[1]-q[1]);for(let[q,G,j]of L){let k=I.createRadialGradient(q-j*.25,G-j*.35,j*.1,q,G,j);k.addColorStop(0,"rgba(255,250,244,.55)"),k.addColorStop(.55,"rgba(225,215,215,.32)"),k.addColorStop(.85,"rgba(150,140,160,.12)"),k.addColorStop(1,"rgba(120,110,140,0)"),I.fillStyle=k,I.beginPath(),I.arc(q,G,j,0,7),I.fill()}let F=I.createLinearGradient(0,N*.35,0,N*.75);F.addColorStop(0,"rgba(0,0,0,0)"),F.addColorStop(1,"rgba(60,40,70,.35)"),I.globalCompositeOperation="source-atop",I.fillStyle=F,I.fillRect(0,0,D,N),I.globalCompositeOperation="source-over"}),T=[16757658,16751242,16762784,15239840,16098170];for(let I=0;I<14;I++){let D=new Be({map:M,transparent:!0,depthWrite:!1,fog:!1,color:T[I%5],opacity:Jt(.5,.9)});Sp.push(D);let N=new Bt(new Ee(1,.5),D),L=_n.degToRad(206+Jt(-70,70)),F=_n.degToRad(Jt(4,18));N.position.setFromSphericalCoords(2500,Math.PI/2-F,L),N.scale.setScalar(Jt(1300,2600)),N.scale.y*=Jt(.4,.7),N.lookAt(0,0,0),be.add(N)}}Vs=(()=>{let b=De?220:80,m=new ve,M=new Float32Array(b*3);for(let N=0;N<b;N++)M[N*3]=Jt(-20,20),M[N*3+1]=Jt(.4,3),M[N*3+2]=Jt(-25,25);m.setAttribute("position",new cn(M,3));let T=Fs(64,64,(N,L)=>{let F=N.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,"rgba(255,250,200,1)"),F.addColorStop(.2,"rgba(255,220,120,.6)"),F.addColorStop(1,"rgba(255,200,80,0)"),N.fillStyle=F,N.fillRect(0,0,64,64)}),I=new ui({map:T,size:.35,transparent:!0,depthWrite:!1,blending:vn,color:16773280});{let N=new Float32Array(b);for(let L=0;L<b;L++)N[L]=Math.random()*40;m.setAttribute("ph",new cn(N,1)),I.onBeforeCompile=L=>{L.uniforms.ft=gi,L.vertexShader=`attribute float ph;uniform float ft;varying float vB;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float c=mod(ft*.55+ph,4.);vB=smoothstep(0.,.25,c)*(1.-smoothstep(.6,1.6,c))*.9+.1;`),L.fragmentShader=`varying float vB;
`+L.fragmentShader.replace("#include <premultiplied_alpha_fragment>",`gl_FragColor.a*=vB;
#include <premultiplied_alpha_fragment>`)}}let D=new Ai(m,I);return be.add(D),{pts:D,p:M,g:m,base:M.slice()}})(),await si(.9),Ye=window.__W=Qf({S:be,HQ:De,H:ki,T:gi,rr:Jt,fbm:Li,woodTex:A,PZ0:oy,PZ1:ay,PY:kc,HAM:Au,windMat:y,canvasTex:Fs}),_p=Ye.glass;for(let b of Ye.lampPos.slice(0,De?4:2)){let m=new Go(16754768,3,8,1.6);m.position.copy(b),be.add(m),Mp.push(m)}Wn=Jf({S:be,HQ:De,mobile:xp,canvasTex:Fs,T:gi}),Wn._cam=Pe,await si(.95);let R=new gr,E=new Or;E.scale.setScalar(1e3),Object.assign(E.material.uniforms,En.clone(qc.material.uniforms)),R.add(E),be.environment=ry.fromScene(R).texture,be.environmentIntensity=.6}var pn=null,Zr=null;function cy(){if(!De&&!Jr){Ue.get("lite")!=="0"&&hy();return}let i=new Ve(innerWidth*Nn,innerHeight*Nn,{type:qe,samples:+(Ue.get("msaa")??(De?2:0))});pn=new da(Ze,i),pn.addPass(new fa(be,Pe)),Zr=new Us({uniforms:{tDiffuse:{value:null},sunUv:{value:new Rt(.5,.5)},amt:{value:.5}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 sunUv;uniform float amt;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);vec2 d=(vUv-sunUv)/48.;vec2 uv=vUv;float decay=1.;vec3 acc=vec3(0.);
 for(int i=0;i<48;i++){uv-=d;vec3 s=texture2D(tDiffuse,uv).rgb;float l=clamp(dot(s,vec3(.3,.5,.2))-6.,0.,20.);acc+=vec3(1.,.72,.45)*l*decay;decay*=.95;}gl_FragColor=vec4(c.rgb+acc*amt/48.,1.);}`});let t=Ue.get("lens")!=="0";De&&t?pn.addPass(Zr):Zr=null,t&&pn.addPass(new Hr(new Rt(innerWidth/2,innerHeight/2),.28,.4,5.5)),pn.addPass(new ma),Ue.get("paint")==="1"&&pn.addPass(new Cu(Jr?1:2)),pn.addPass(bp())}var Gc="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",Ru="float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}";function bp(){return new Us({uniforms:{tDiffuse:{value:null},t:gi,lens:{value:Ue.get("lens")==="0"?0:1}},vertexShader:Gc,fragmentShader:`uniform sampler2D tDiffuse;uniform float t;uniform float lens;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float v=smoothstep(1.15,.35,length((vUv-.5)*vec2(1.25,1.)));c*=mix(mix(1.,.66,lens),1.,v);
 c+=lens*(h(vUv*1000.+fract(t)*91.)-.5)*.016*(1.-smoothstep(.3,.9,dot(c,vec3(.33))));float L=dot(c,vec3(.2126,.7152,.0722));
 c=mix(c,c*vec3(1.09,.98,.86),.7);c+=mix(vec3(-.006,.004,.018),vec3(.05,.018,-.02),smoothstep(.1,.7,L))*(1.-L);
 c+=vec3(1.,.55,.22)*smoothstep(.45,.95,L)*.07;c=mix(vec3(L),c,1.2);c*=1.06;c=c*c*(3.-2.*c)*.25+c*.75;gl_FragColor=vec4(c,1.);}`})}var Cu=class extends Pn{constructor(t){super(),this.half=new Ve(2,2,{type:qe}),this.k=new Ae({uniforms:{tDiffuse:{value:null}},vertexShader:Gc,fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;
#define R ${t}
${Ru}
void main(){vec2 px=1./vec2(textureSize(tDiffuse,0))*2.;vec2 wob=(vec2(vn(vUv*vec2(160.,90.)),vn(vUv*vec2(160.,90.)+7.))-.5)*px*.7;vec2 uv=vUv+wob;
 vec3 m[4];vec3 s2[4];for(int k=0;k<4;k++){m[k]=vec3(0.);s2[k]=vec3(0.);}
 for(int j=0;j<=R;j++)for(int i=0;i<=R;i++){vec2 o=vec2(float(i),float(j))*px*.8;
  vec3 a=texture2D(tDiffuse,uv+vec2(-o.x,-o.y)).rgb;m[0]+=a;s2[0]+=a*a;vec3 b=texture2D(tDiffuse,uv+vec2(o.x,-o.y)).rgb;m[1]+=b;s2[1]+=b*b;
  vec3 c=texture2D(tDiffuse,uv+vec2(-o.x,o.y)).rgb;m[2]+=c;s2[2]+=c*c;vec3 d=texture2D(tDiffuse,uv+vec2(o.x,o.y)).rgb;m[3]+=d;s2[3]+=d*d;}
 float n=float((R+1)*(R+1));vec3 col=m[0]/n;float best=1e9;for(int k=0;k<4;k++){vec3 mu=m[k]/n;vec3 v=abs(s2[k]/n-mu*mu);float sv=v.r+v.g+v.b;if(sv<best){best=sv;col=mu;}}
 vec3 q=floor(col*14.+.5)/14.;gl_FragColor=vec4(mix(col,q,.25),1.);}`}),this.c=new Ae({uniforms:{tDiffuse:{value:null},tP:{value:this.half.texture}},vertexShader:Gc,fragmentShader:`uniform sampler2D tDiffuse,tP;varying vec2 vUv;${Ru}
void main(){vec2 px=1./vec2(textureSize(tDiffuse,0));vec3 col=texture2D(tP,vUv).rgb;vec3 f=texture2D(tDiffuse,vUv).rgb;col=mix(col,f,.18);
 float l0=dot(texture2D(tDiffuse,vUv+vec2(px.x,0.)).rgb-texture2D(tDiffuse,vUv-vec2(px.x,0.)).rgb,vec3(.3,.59,.11));float l1=dot(texture2D(tDiffuse,vUv+vec2(0.,px.y)).rgb-texture2D(tDiffuse,vUv-vec2(0.,px.y)).rgb,vec3(.3,.59,.11));
 col*=1.-smoothstep(.06,.22,length(vec2(l0,l1)))*.16;float cv=vn(vUv*vec2(900.,520.))*.6+vn(vUv*vec2(300.,170.)*vec2(1.,.4))*.4;col*=.965+.07*cv;gl_FragColor=vec4(col,1.);}`}),this.fq=new pi(this.k)}setSize(t,e){this.half.setSize(Math.max(2,t>>1),Math.max(2,e>>1))}render(t,e,n){this.k.uniforms.tDiffuse.value=n.texture,this.fq.material=this.k,t.setRenderTarget(this.half),this.fq.render(t),this.c.uniforms.tDiffuse.value=n.texture,this.fq.material=this.c,t.setRenderTarget(this.renderToScreen?null:e),this.fq.render(t)}},Pu=class extends Pn{constructor(){super(),this.m=new Ae({uniforms:{tDiffuse:{value:null}},vertexShader:Gc,fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;${Ru}
void main(){vec2 px=1./vec2(textureSize(tDiffuse,0));vec2 uv=vUv+(vec2(vn(vUv*vec2(120.,70.)),vn(vUv*vec2(120.,70.)+7.))-.5)*px*1.6;vec3 c=texture2D(tDiffuse,uv).rgb;
 vec3 a=texture2D(tDiffuse,uv+vec2(px.x*1.5,0.)).rgb,b=texture2D(tDiffuse,uv-vec2(px.x*1.5,0.)).rgb,d=texture2D(tDiffuse,uv+vec2(0.,px.y*1.5)).rgb,e=texture2D(tDiffuse,uv-vec2(0.,px.y*1.5)).rgb;
 vec3 avg=(a+b+d+e)*.25;c=mix(c,avg,.45);float g=length(vec2(dot(a-b,vec3(.3,.59,.11)),dot(d-e,vec3(.3,.59,.11))));c*=1.-smoothstep(.06,.22,g)*.16;
 c=mix(c,floor(c*12.+.5)/12.,.3);c*=.965+.07*vn(vUv*vec2(700.,400.));gl_FragColor=vec4(c,1.);}`}),this.fq=new pi(this.m)}render(t,e,n){this.m.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.renderToScreen?null:e),this.fq.render(t)}};function hy(){let i=new Ve(innerWidth*Nn,innerHeight*Nn,{type:qe});pn=new da(Ze,i),pn.addPass(new fa(be,Pe)),pn.addPass(new ma),Ue.get("paint")==="1"?pn.addPass(new Pu):pn.addPass(bp())}var Mu=0,Su=0,$r=Ue.get("yaw")?_n.degToRad(+Ue.get("yaw")):0,Wc=0,ks=null,Fu=!1,Ta=Ze.domElement,xs={},mi=0,Uc=0,np=0,ip=0,sp=performance.now(),rp=!1,uy=-9,Ep={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},dy=i=>{let t=document.activeElement,e=document.getElementById("card");return!(i.metaKey||i.ctrlKey||i.altKey)&&!(t&&(/INPUT|TEXTAREA|SELECT/.test(t.tagName)||t.isContentEditable))&&!(e&&!e.hidden)&&Gi};addEventListener("keydown",i=>{let t=Ep[i.code];!t||!dy(i)||(i.preventDefault(),xs[t]=1,rp||(rp=!0,document.body.classList.add("walked")))},{passive:!1});addEventListener("keyup",i=>{let t=Ep[i.code];t&&(xs[t]=0)});addEventListener("blur",()=>{for(let i in xs)xs[i]=0});function fy(){if(!On||!an||!yn||yn.state!=="running")return;let i=yn,t=i.currentTime,e=i.createOscillator(),n=i.createGain();e.frequency.setValueAtTime(95+Math.random()*20,t),e.frequency.exponentialRampToValueAtTime(48,t+.12),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.16,t+.006),n.gain.exponentialRampToValueAtTime(5e-4,t+.18);let s=i.createBuffer(1,i.sampleRate*.08|0,i.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/r.length,3);let o=i.createBufferSource(),a=i.createBiquadFilter(),l=i.createGain();o.buffer=s,a.type="lowpass",a.frequency.value=900,l.gain.value=.08,o.connect(a).connect(l).connect(an.master),e.connect(n).connect(an.master),e.start(t),e.stop(t+.2),o.start(t)}function py(){let i=performance.now(),t=Math.min(.25,(i-sp)/1e3);sp=i;let e=(xs.f?1:0)-(xs.b?1:0);mi+=(e-mi)*(1-Math.exp(-t*(e?3.2:4.5))),Math.abs(mi)<.002&&!e&&(mi=0);let n=(xs.l?1:0)-(xs.r?1:0);if(Uc+=(n-Uc)*(1-Math.exp(-t*5)),Math.abs(Uc)>.001&&($r=Math.max(-1.75,Math.min(1.75,$r+Uc*t*1.1))),mi){let s=vi(".sheet").offsetTop||innerHeight,r=Math.max(1,s-innerHeight*.95),o=scrollY,a=o+mi*t*r/16;a>=r&&mi>0&&(a=r,o<r-1&&(uy=gi.value),mi=Math.min(mi,0)),a=Math.max(0,a),Math.abs(a-o)>.01&&scrollTo({top:a,behavior:"instant"}),np+=t*Math.abs(mi)*9.5;let l=Math.floor(np/Math.PI);l!==ip&&(ip=l,Math.abs(mi)>.25&&fy())}}Ta.addEventListener("pointerdown",i=>{ks=[i.clientX,i.clientY,$r,Wc],Fu=!1});addEventListener("pointerup",()=>ks=null);var op=new Xo,ap=new Rt,qr=vi("#clabel"),gs=null,Gi=!0,my=0,gy=()=>Gi?Wn?Wn.targets.filter(i=>i.visible&&(Wn.vis||0)>.4):[]:[];function wp(i,t){ap.set(i/innerWidth*2-1,-t/innerHeight*2+1),op.setFromCamera(ap,Pe);for(let e of gy())if(op.intersectObject(e.userData.hit,!1).length)return e;return null}addEventListener("pointermove",i=>{if(ks){let t=i.clientX-ks[0],e=i.clientY-ks[1];Math.abs(t)+Math.abs(e)>6&&(Fu=!0),$r=ks[2]-t*.004,Wc=Math.max(-.35,Math.min(.35,ks[3]-e*.003))}else matchMedia("(pointer:fine)").matches&&($r=-(i.clientX/innerWidth-.5)*.2,Wc=-(i.clientY/innerHeight-.5)*.06);if(i.target!==Ta){gs=null,qr.classList.remove("on");return}gs=wp(i.clientX,i.clientY),Ta.style.cursor=gs?"pointer":"",gs?(qr.textContent=gs.userData.label+"  \xB7  open",qr.style.transform=`translate(${i.clientX+18}px,${i.clientY+14}px)`,qr.classList.add("on")):qr.classList.remove("on")});Ta.addEventListener("click",i=>{if(Fu)return;let t=wp(i.clientX,i.clientY);t&&window.openCard(t.userData.game)});function Xc(){let i=innerWidth,t=innerHeight;Ze.setSize(i,t,!1),Pe.aspect=i/t,Pe.fov=vs==="wild"||vs==="water"?46:vs?vs==="station"?24:16:i<t?70:52,Pe.updateProjectionMatrix(),Wn&&Wn.layout(Pe.aspect),pn&&(pn.setPixelRatio(Nn),pn.setSize(i,t))}var Gr=new U,lp=0,Sa=0,ba=0;var Bs=0,Ea=0;window.__fps=0;var Iu=Ue.has("p")?parseFloat(Ue.get("p")):null;Iu!==null&&document.body.classList.add("endshot");var Lu=new U(0,.4,-1),vs=Ue.get("focus");globalThis.__dockCam=Pe;globalThis.__dockAlarm=(i,t,e,n)=>{try{an&&an.alarm&&an.alarm(i,t,e,n)}catch{}};var Os=Ue.get("follow"),cp=Ue.get("fo")?Ue.get("fo").split(",").map(Number):null,Nc=new U,xy=new U,zs=Ue.get("cam")?Ue.get("cam").split(",").map(Number):null,hp={sky:[new Ut(16762784),new Ut(3820154)],gnd:[new Ut(5914680),new Ut(1053727)],dl:[new Ut(16754784),new Ut(10466559)],fog:[new Ut(15310970),new Ut(1186352)],wsun:[new Ut(16765600),new Ut(13688063)],wcol:[new Ut(3814436),new Ut(725536)]},Wr=(i,t,e)=>i.copy(hp[t][0]).lerp(hp[t][1],e),Hs=new U,Tp=new U(0,Math.sin(.72),-Math.cos(.72)),vy=new U(0,Math.cos(.72),Math.sin(.72)),_y=new U(1,0,0),yb=new U(0,kc+1.55,-9.5).addScaledVector(Tp,95),Mb=new en().setFromRotationMatrix(new ae().makeBasis(_y,vy,Tp.clone().negate())),Sb=new en,bb=new U(0,0,1);var up=-1,an=null,yn=null,On=!1,Du=null,bu=null,Gs=vi("#snd"),Fc=vi("#svol"),Ap=()=>+(localStorage.getItem("pluffVol")??.7);function dp(){try{yn||(yn=new(window.AudioContext||window.webkitAudioContext)),yn.resume().catch(()=>{})}catch{return}On=!0,Rp();let i=()=>{try{if(!On)return;an.setVolume(Ap()*.9),clearInterval(Du),Du=setInterval(()=>{try{On&&yn.state==="running"&&an.schedule(yn.currentTime,yn.currentTime+1.2)}catch{}},400)}catch{}};if(an)return i();bu=bu||import("./audio-F5SZ4C3D.js"),bu.then(({createEngine:t})=>{setTimeout(()=>{try{if(!an){let e=yn.createDynamicsCompressor();e.connect(yn.destination),an=t(yn,e)}i()}catch(e){console.warn("audio init",e)}},0)}).catch(t=>console.warn("audio load",t))}function yy(){On=!1,an&&an.setVolume(0),clearInterval(Du),setTimeout(()=>{!On&&yn&&yn.suspend()},600),Rp()}function Rp(){Gs&&(Gs.setAttribute("aria-pressed",On),Gs.querySelector("span").textContent=On?"Sound on":"Sound off",document.body.classList.toggle("snd-on",On))}if(Gs&&(Gs.addEventListener("click",()=>{let i=!On;localStorage.setItem("pluffSound",i?"1":"0"),Gs.classList.remove("armed"),i?dp():yy()}),Fc.value=Ap(),Fc.addEventListener("input",()=>{localStorage.setItem("pluffVol",Fc.value),an&&On&&an.setVolume(+Fc.value*.9)}),localStorage.getItem("pluffSound")==="1")){let i=()=>{removeEventListener("pointerdown",i,!0),removeEventListener("keydown",i,!0),On||dp()};addEventListener("pointerdown",i,!0),addEventListener("keydown",i,!0),Gs.classList.add("armed")}document.addEventListener("visibilitychange",()=>{yn&&(document.hidden?yn.suspend():On&&yn.resume())});var My=Ue.get("wm")?+Ue.get("wm"):Vc?120:De?66:80,fp=-1e9,Bc=Ue.get("fpscap")?+Ue.get("fpscap"):0,Sy=!1,Oc=[],Eu=0,zc=99,pp=0;function Cp(i){if(requestAnimationFrame(Cp),document.hidden)return;if(Sy&&Oc.length<120&&(Eu&&Oc.push(i-Eu),Eu=i,Oc.length===120&&Oc.slice().sort((C,_)=>C-_)[60]<7.8&&(Bc=Vc?60:120)),Bc){let y=1e3/Bc;if(zc+=i-(pp||i),pp=i,zc<y-1.5)return;zc=Math.max(0,Math.min(zc-y,y))}if(!Bc&&!Gi&&++my%2)return;let t=Math.min(.1,(i-lp)/1e3||.016);lp=i,tp||(gi.value+=t);let e=gi.value;if(Sa++,ba||(ba=i),i-ba>=1e3&&(window.__fps=Sa*1e3/(i-ba),Sa=0,ba=i,!Ue.get("dpr")&&!Ue.get("q"))){let y=window.__fps;y<45?(Bs++,Ea=0):y>57?(Ea++,Bs=0):(Bs=0,Ea=0),Bs>=2&&Nn>_u?(Nn=Math.max(_u,Nn-.25),Ze.setPixelRatio(Nn),Xc(),Bs=0):Bs>=3&&Nn<=_u&&pn&&y<30?(pn=null,Bs=0):Ea>=4&&Nn<Tu&&(Nn=Math.min(Tu,Nn+.25),Ze.setPixelRatio(Nn),Xc(),Ea=0)}Un.material.uniforms.time.value=e*.6,py();let n=vi(".sheet").offsetTop||innerHeight,s=Iu??Math.min(1,scrollY/Math.max(1,n-innerHeight*.95)),r=ze(.12,.9,s),o=ze(.55,1,s);{let y=r.toFixed(3);y!==window.__ns&&(window.__ns=y,document.body.style.setProperty("--n",y))}let a=vi(".sheet").getBoundingClientRect().top,l=innerHeight;Gi=a>l*.5;let h=(vi(".sheet h2")||vi(".sheet")).getBoundingClientRect().top>l*1.02;if(document.body.classList.toggle("lookup",o>.6&&Gi&&h),document.body.classList.toggle("offscene",!Gi),!Gi&&gs&&(gs=null,qr.classList.remove("on"),Ta.style.cursor=""),De&&Sa%12===0&&(Ze.shadowMap.needsUpdate=!0),Math.abs(r-up)>.001){up=r,Ze.shadowMap.needsUpdate=!0,Hs.setFromSphericalCoords(1,_n.degToRad(90-Fn(3.2,-10,Math.pow(r,1.4))),_n.degToRad(206)),Kr.sunPosition.value.copy(Hs);let y=ze(0,.6,r);Ze.toneMappingExposure=Fn(De?.32:.4,De?.85:.95,ze(.35,1,r)),Wr(Hc.color,"sky",r),Wr(Hc.groundColor,"gnd",r),Hc.intensity=Fn(1.7,.5,y),Wr(Bn.color,"dl",r),Bn.intensity=Fn(3.2,.45,y),Bn.position.copy(r<.5?Hs:Lu).multiplyScalar(80),Wr(be.fog.color,"fog",r),be.environmentIntensity=Fn(.6,.12,r);let C=Un.material.uniforms;C.sunDirection.value.copy(Hs).lerp(Lu,ze(.3,.7,r)).normalize(),Wr(C.sunColor.value,"wsun",r),Wr(C.waterColor.value,"wcol",r),_p.emissiveIntensity=Fn(1.5,4.5,r),Mp.forEach(_=>_.intensity=Fn(1.5,2,r)),yp.uniforms.glow.value=r*.35,Sp.forEach(_=>{_.userData.o??=_.opacity,_.opacity=_.userData.o*Math.pow(1-r,2)}),Wn.setNight(r,Hs)}Vs.pts.material.opacity=_n.smoothstep(r,.35,.8),Vs.pts.material.size=.3;let f=Fn(19,-1,ze(0,.8,s)),u=tp?0:Math.sin(e*.37)*.012;{let y=Iu!==null?1:.06;Mu+=($r-.12*(1-o)-.42*ze(.2,.55,s)*(1-o)-Mu)*y,Su+=(Wc+o*(Pe.aspect<1?.46:.345)-Su)*y}if(Pe.position.set(Math.sin(e*.2)*.08,kc+1.55+u,f),Pe.rotation.set(Su-.02,Mu,Math.sin(e*.5)*.004,"YXZ"),vs==="water"&&Ye?(Pe.position.set(-1.5,2.3,-27),Pe.lookAt(-16,-.3,-27)):vs==="wild"&&Ye?(Pe.position.set(2.4,kc+1.9,-21.6),Pe.lookAt(Ye.wildFocus())):vs&&Wn&&Pe.lookAt(Wn.focus(vs)),Os&&Ye){let y=Os==="house"?null:Ye[Os]||(Os==="heron"?Ye.waders.find(C=>C.userData.heron):null);if(y)y.getWorldPosition(Nc),Pe.position.copy(Nc).add(xy.set(...cp||(Os==="owl"?[-1.9,.55,2.3]:Os==="heron"?[-1.6,.5,1.8]:[-2.4,1.3,2.6]))),Os==="owl"&&(Nc.y+=.3),Pe.lookAt(Nc);else if(Ye.housePos){let C=Ye.housePos;Pe.position.set(C.x-Math.sin(.44)*13,C.y+1.2,C.z+Math.cos(.44)*13),Pe.lookAt(C.x,C.y+.4,C.z)}}zs&&(Pe.position.set(zs[0],zs[1],zs[2]),Pe.lookAt(zs[3],zs[4],zs[5]));let d=performance.now();Ye&&Ye.update(e,t,r);let x=performance.now();if(Ye&&Ye.leafSun&&(Ye.leafSun.value.copy(Hs).normalize(),Ye.leafI.value=1-ze(.25,.6,r)),Ye&&Ye.wakes){let y=Un.material.uniforms.wk.value,C=Ye.wakes();for(let _=0;_<4;_++){let R=C[_];R?y[_].set(R[0],R[1],R[2],R[3]):y[_].w=0}}let A=Vs.p;for(let y=0;y<A.length;y+=3)A[y]=Vs.base[y]+Math.sin(e*.4+y)*.8,A[y+1]=Vs.base[y+1]+Math.sin(e*.7+y*.3)*.4;Vs.g.attributes.position.needsUpdate=!0;let v=performance.now();if(Wn.update(e,t,gs),an&&On)try{Wn.onSling||(Wn.onSling=y=>{try{On&&Gi&&an.whoosh(yn.currentTime+.05,-.5+y*.5)}catch{}}),an.setNight(r),an.setLook(Gi?o:0),Ye&&Ye.src&&Sa%6===0&&an.listen(Pe,Ye.src())}catch(y){window.__auErr||(window.__auErr=1,console.warn("audio",y))}if(Zr&&(Gr.copy(Hs).multiplyScalar(1e3).add(Pe.position).project(Pe),Zr.uniforms.sunUv.value.set(Gr.x*.5+.5,Gr.y*.5+.5),Zr.uniforms.amt.value=(Gr.z<1?.25*Math.max(0,1-Math.hypot(Gr.x,Gr.y)/2.2):0)*(1-r)),i-fp>=My){fp=i;try{Un.__mirror(Ze,be,Pe)}catch{}}let p=performance.now();pn?pn.render():Ze.render(be,Pe)}function by(){{let e=new Map;be.traverse(n=>{if(!n.isInstancedMesh||!n.castShadow||n.customDepthMaterial||!n.material||Array.isArray(n.material))return;let s=n.material,r=s.alphaTest>0&&s.map,o=(r?s.map.uuid+s.alphaTest:"p")+s.side+(n.instanceColor?"c":"n"),a=e.get(o);a||(a=new Ar({depthPacking:Yh,side:s.side}),r&&(a.map=s.map,a.alphaTest=s.alphaTest),e.set(o,a)),n.customDepthMaterial=a})}let i=new Map;be.traverse(e=>{if(!e.material||Array.isArray(e.material))return;let n=i.get(e.material)||{i:0,n:0};e.isInstancedMesh?n.i++:n.n++,i.set(e.material,n)});let t=new Map;be.traverse(e=>{if(e.isInstancedMesh&&e.material&&!Array.isArray(e.material)){let n=i.get(e.material);if(n&&n.n>0){let s=t.get(e.material);s||(s=e.material.clone(),s.onBeforeCompile=e.material.onBeforeCompile,s.customProgramCacheKey=e.material.customProgramCacheKey,t.set(e.material,s)),e.material=s}}})}function Pp(){be.traverse(i=>{let t=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(let e of t)e.side===Le&&!e.forceSinglePass&&(e.forceSinglePass=!0)})}setInterval(Pp,2e3);function wu(){Pp(),Pe.layers.enable(1),Bn&&Bn.shadow&&Bn.shadow.camera.layers.enable(1);let i=new kn,t=0;be.traverse(e=>{if(!e.isMesh||e===Un)return;let n=e.material;if(!(!n||Array.isArray(n)||n.emissive&&n.emissiveIntensity>0&&n.emissive.r+n.emissive.g+n.emissive.b>0||n.type==="MeshBasicMaterial"||n.type==="ShaderMaterial"||n.type==="PointsMaterial")){if(e.isSkinnedMesh){e.layers.set(1),t++;return}e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),!(e.isInstancedMesh&&e.count>2e3)&&(e.updateWorldMatrix(!0,!1),i.copy(e.isInstancedMesh?(e.computeBoundingSphere(),e.boundingSphere):e.geometry.boundingSphere).applyMatrix4(e.matrixWorld),i.radius<2.2&&(e.layers.set(1),t++))}})}function Ey(){let i=be.children.filter(n=>(n.isMesh||n.isInstancedMesh||n.isPoints)&&!n.children.length),t=()=>i.map(n=>n.matrix.elements.slice()),e=null;setTimeout(()=>{e=t(),setTimeout(()=>{let n=t(),s=0;i.forEach((r,o)=>{e[o].every((a,l)=>a===n[o][l])&&(r.matrixAutoUpdate=!1,r.updateMatrix(),r.updateMatrixWorld(!0),r.matrixWorldAutoUpdate=!1,s++)})},5e3)},2500)}(async()=>{try{await ly(),Lu=Wn.moonDir,cy(),Xc(),addEventListener("resize",Xc),Ze.compile(be,Pe),await si(1),by(),wu(),setTimeout(wu,3e3),setTimeout(wu,9e3),requestAnimationFrame(Cp),Ey(),setTimeout(()=>{mp.classList.add("done"),document.body.classList.add("ready"),Ue.has("card")&&window.openCard(+Ue.get("card"))},350)}catch(i){console.error(i),gp()}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
