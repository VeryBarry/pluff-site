if(location.search)try{history.replaceState(history.state,"",location.pathname+location.hash)}catch{}var Rd=0,Uh=1,Cd=2;var qo=1,Ul=2,Pr=3,Ci=0,fn=1,De=2,ii=0,Ir=1,cn=2,Nh=3,Fh=4,Pd=5;var Ps=100,Id=101,Ld=102,Dd=103,Ud=104,Nd=200,Fd=201,Bd=202,Od=203,Bh=204,Oh=205,zd=206,Hd=207,Vd=208,Gd=209,kd=210,Wd=211,Xd=212,qd=213,Yd=214,nl=0,il=1,sl=2,cr=3,rl=4,ol=5,al=6,ll=7,zh=0,Zd=1,Jd=2,fi=0,Yo=1,Zo=2,Jo=3,Is=4,$o=5,Ko=6,jo=7,yh="attached",$d="detached",Hh=300,cs=301,Ls=302,Nl=303,Fl=304,Qo=306,Ts=1e3,Ei=1001,cl=1002,_n=1003,Kd=1004;var ta=1005;var dn=1006,Bl=1007;var hs=1008;var Wn=1009,Vh=1010,Gh=1011,Lr=1012,Ol=1013,pi=1014,Kn=1015,Ye=1016,zl=1017,Hl=1018,Dr=1020,kh=35902,Wh=35899,Xh=1021,qh=1022,jn=1023,wi=1026,us=1027,Vl=1028,Gl=1029,ds=1030,kl=1031;var Wl=1033,ea=33776,na=33777,ia=33778,sa=33779,Xl=35840,ql=35841,Yl=35842,Zl=35843,Jl=36196,$l=37492,Kl=37496,jl=37488,Ql=37489,ra=37490,tc=37491,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,xc=36495,vc=36283,_c=36284,oa=36285,yc=36286;var fo=2300,hl=2301,tl=2302,Mh=2303,Sh=2400,bh=2401,Eh=2402;var jd=3200,Yh=3201;var Mc=0,Qd=1,Vi="",Sn="srgb",po="srgb-linear",mo="linear",Pe="srgb";var el=7680;var tf=519,ef=512,nf=513,sf=514,Sc=515,rf=516,of=517,bc=518,af=519,lf=35044;var Zh="300 es",hi=2e3,hr=2001;function Lp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){let i=go("canvas");return i.style.display="block",i}var zu={},ur=null;function Jh(...i){let t="THREE."+i.shift();ur?ur("log",t,...i):console.log(t,...i)}function hf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=hf(i);let t="THREE."+i.shift();if(ur)ur("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=hf(i);let t="THREE."+i.shift();if(ur)ur("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ws(...i){let t=i.join(" ");t in zu||(zu[t]=!0,re(...i))}function uf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var df={[nl]:il,[sl]:al,[rl]:ll,[cr]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:cr},Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=1234567,lo=Math.PI/180,dr=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function $h(i,t){return(i%t+t)%t}function Up(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Np(i,t,e){return i!==t?(e-i)/(t-i):0}function co(i,t,e){return(1-e)*i+e*t}function Fp(i,t,e,n){return co(i,t,1-Math.exp(-e*n))}function Bp(i,t=1){return t-Math.abs($h(i,t*2)-t)}function Op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vp(i,t){return i+Math.random()*(t-i)}function Gp(i){return i*(.5-Math.random())}function kp(i){i!==void 0&&(Hu=i);let t=Hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wp(i){return i*lo}function Xp(i){return i*dr}function qp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*d,a*h,a*c);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xe={DEG2RAD:lo,RAD2DEG:dr,generateUUID:fs,clamp:_e,euclideanModulo:$h,mapLinear:Up,inverseLerp:Np,lerp:co,damp:Fp,pingpong:Bp,smoothstep:Op,smootherstep:zp,randInt:Hp,randFloat:Vp,randFloatSpread:Gp,seededRandom:kp,degToRad:Wp,radToDeg:Xp,isPowerOfTwo:qp,ceilPowerOfTwo:Yp,floorPowerOfTwo:Zp,setQuaternionFromProperEuler:Jp,normalize:Dn,denormalize:ar},It=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],x=r[o+2],A=r[o+3];if(f!==A||l!==u||c!==d||h!==x){let v=l*u+c*d+h*x+f*A;v<0&&(u=-u,d=-d,x=-x,A=-A,v=-v);let p=1-a;if(v<.9995){let y=Math.acos(v),C=Math.sin(y);p=Math.sin(p*y)/C,a=Math.sin(a*y)/C,l=l*p+u*a,c=c*p+d*a,h=h*p+x*a,f=f*p+A*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+x*a,f=f*p+A*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*f+l*d-c*u,t[e+1]=l*x+h*u+c*f-a*d,t[e+2]=c*x+h*d+a*u-l*f,t[e+3]=h*x-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new U,Vu=new nn,le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],A=s[0],v=s[3],p=s[6],y=s[1],C=s[4],_=s[7],R=s[2],w=s[5],b=s[8];return r[0]=o*A+a*y+l*R,r[3]=o*v+a*C+l*w,r[6]=o*p+a*_+l*b,r[1]=c*A+h*y+f*R,r[4]=c*v+h*C+f*w,r[7]=c*p+h*_+f*b,r[2]=u*A+d*y+x*R,r[5]=u*v+d*C+x*w,r[8]=u*p+d*_+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,x=e*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=f*A,t[1]=(s*c-h*n)*A,t[2]=(a*n-s*o)*A,t[3]=u*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-a*e)*A,t[6]=d*A,t[7]=(n*l-c*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new le,Gu=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){let i={enabled:!0,workingColorSpace:po,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pe&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pe&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[po]:{primaries:t,whitePoint:n,transfer:mo,toXYZ:Gu,fromXYZ:ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:Gu,fromXYZ:ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var ve=$p();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ys,ul=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ys===void 0&&(Ys=go("canvas")),Ys.width=t.width,Ys.height=t.height;let s=Ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kp=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jc(s[o].image)):r.push(Jc(s[o]))}else r=Jc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var jp=0,$c=new U,Un=class i extends Ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=dn,o=hs,a=jn,l=Wn,c=i.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=fs(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Hh;Un.DEFAULT_ANISOTROPY=1;var Ee=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],A=l[2],v=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-A)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+A)<.1&&Math.abs(x+v)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,_=(d+1)/2,R=(p+1)/2,w=(h+u)/4,b=(f+A)/4,m=(x+v)/4;return C>_&&C>R?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=w/n,r=b/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=m/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=m/r),this.set(n,s,r,e),this}let y=Math.sqrt((v-x)*(v-x)+(f-A)*(f-A)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(v-x)/y,this.y=(f-A)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends Ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Un(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends Un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,x,A,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,x,A,v)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,x,A,v){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=A,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,x=a*h,A=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+x*c,e[5]=u-A*c,e[9]=-a*l,e[2]=A-u*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,x=c*h,A=c*f;e[0]=u+A*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=A+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,x=c*h,A=c*f;e[0]=u-A*a,e[4]=-o*f,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=A-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,x=a*h,A=a*f;e[0]=l*h,e[4]=x*c-d,e[8]=u*c+A,e[1]=l*f,e[5]=A*c+u,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,x=a*l,A=a*c;e[0]=l*h,e[4]=A-u*f,e[8]=x*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+x,e[10]=u-A*f}else if(t.order==="XZY"){let u=o*l,d=o*c,x=a*l,A=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+A,e[5]=o*h,e[9]=d*f-x,e[2]=x*f-d,e[6]=a*h,e[10]=A*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qp,t,tm)}lookAt(t,e,n){let s=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ji.crossVectors(n,qn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ji.crossVectors(n,qn)),Ji.normalize(),Aa.crossVectors(qn,Ji),s[0]=Ji.x,s[4]=Aa.x,s[8]=qn.x,s[1]=Ji.y,s[5]=Aa.y,s[9]=qn.y,s[2]=Ji.z,s[6]=Aa.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],A=n[6],v=n[10],p=n[14],y=n[3],C=n[7],_=n[11],R=n[15],w=s[0],b=s[4],m=s[8],M=s[12],E=s[1],I=s[5],D=s[9],N=s[13],L=s[2],F=s[6],X=s[10],k=s[14],et=s[3],H=s[7],st=s[11],rt=s[15];return r[0]=o*w+a*E+l*L+c*et,r[4]=o*b+a*I+l*F+c*H,r[8]=o*m+a*D+l*X+c*st,r[12]=o*M+a*N+l*k+c*rt,r[1]=h*w+f*E+u*L+d*et,r[5]=h*b+f*I+u*F+d*H,r[9]=h*m+f*D+u*X+d*st,r[13]=h*M+f*N+u*k+d*rt,r[2]=x*w+A*E+v*L+p*et,r[6]=x*b+A*I+v*F+p*H,r[10]=x*m+A*D+v*X+p*st,r[14]=x*M+A*N+v*k+p*rt,r[3]=y*w+C*E+_*L+R*et,r[7]=y*b+C*I+_*F+R*H,r[11]=y*m+C*D+_*X+R*st,r[15]=y*M+C*N+_*k+R*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],x=t[3],A=t[7],v=t[11],p=t[15],y=l*d-c*u,C=a*d-c*f,_=a*u-l*f,R=o*d-c*h,w=o*u-l*h,b=o*f-a*h;return e*(A*y-v*C+p*_)-n*(x*y-v*R+p*w)+s*(x*C-A*R+p*b)-r*(x*_-A*w+v*b)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],x=t[12],A=t[13],v=t[14],p=t[15],y=e*a-n*o,C=e*l-s*o,_=e*c-r*o,R=n*l-s*a,w=n*c-r*a,b=s*c-r*l,m=h*A-f*x,M=h*v-u*x,E=h*p-d*x,I=f*v-u*A,D=f*p-d*A,N=u*p-d*v,L=y*N-C*D+_*I+R*E-w*M+b*m;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(a*N-l*D+c*I)*F,t[1]=(s*D-n*N-r*I)*F,t[2]=(A*b-v*w+p*R)*F,t[3]=(u*w-f*b-d*R)*F,t[4]=(l*E-o*N-c*M)*F,t[5]=(e*N-s*E+r*M)*F,t[6]=(v*_-x*b-p*C)*F,t[7]=(h*b-u*_+d*C)*F,t[8]=(o*D-a*E+c*m)*F,t[9]=(n*E-e*D-r*m)*F,t[10]=(x*w-A*_+p*y)*F,t[11]=(f*_-h*w-d*y)*F,t[12]=(a*M-o*I-l*m)*F,t[13]=(e*I-n*M+s*m)*F,t[14]=(A*C-x*R-v*y)*F,t[15]=(h*R-f*C+u*y)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,x=r*f,A=o*h,v=o*f,p=a*f,y=l*c,C=l*h,_=l*f,R=n.x,w=n.y,b=n.z;return s[0]=(1-(A+p))*R,s[1]=(d+_)*R,s[2]=(x-C)*R,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(u+p))*w,s[6]=(v+y)*w,s[7]=0,s[8]=(x+C)*b,s[9]=(v-y)*b,s[10]=(1-(u+A))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ai.copy(this);let c=1/o,h=1/a,f=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,e.setFromRotationMatrix(ai),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=hi,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),x,A;if(l)x=r/(o-r),A=o*r/(o-r);else if(a===hi)x=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(a===hr)x=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hi,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),x,A;if(l)x=1/(o-r),A=o/(o-r);else if(a===hi)x=-2/(o-r),A=-(o+r)/(o-r);else if(a===hr)x=-1/(o-r),A=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zs=new U,ai=new ae,Qp=new U(0,0,0),tm=new U(1,1,1),Ji=new U,Aa=new U,qn=new U,Wu=new ae,Xu=new nn,ui=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},em=0,qu=new U,Js=new nn,Ui=new ae,Ra=new U,Qr=new U,nm=new U,im=new nn,Yu=new U(1,0,0),Zu=new U(0,1,0),Ju=new U(0,0,1),$u={type:"added"},sm={type:"removed"},$s={type:"childadded",child:null},Kc={type:"childremoved",child:null},Be=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new ui,n=new nn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new le}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Yu,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return qu.copy(t).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yu,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ra.copy(t):Ra.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Qr,Ra,this.up):Ui.lookAt(Ra,Qr,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Ui),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($u),$s.child=t,this.dispatchEvent($s),$s.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sm),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($u),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new U(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},rm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let A of t.hand.values()){let v=e.getJointPose(A,n),p=this._getHandJoint(c,A);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=$h(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jc(o,r,t+1/3),this.g=jc(o,r,t),this.b=jc(o,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){let n=ff[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ve.workingToColorSpace(An.copy(this),t),Math.round(_e(An.r*255,0,255))*65536+Math.round(_e(An.g*255,0,255))*256+Math.round(_e(An.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(An.copy(this),e);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=Sn){ve.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,s=An.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Ca);let n=co($i.h,Ca.h,e),s=co($i.s,Ca.s,e),r=co($i.l,Ca.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Ft;Ft.NAMES=ff;var vo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gr=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new U,Ni=new U,Qc=new U,Fi=new U,Ks=new U,js=new U,Ku=new U,th=new U,eh=new U,nh=new U,ih=new Ee,sh=new Ee,rh=new Ee,ts=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){li.subVectors(s,e),Ni.subVectors(n,e),Qc.subVectors(t,e);let o=li.dot(li),a=li.dot(Ni),l=li.dot(Qc),c=Ni.dot(Ni),h=Ni.dot(Qc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(t,e),sh.fromBufferAttribute(t,n),rh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ih,r.x),o.addScaledVector(sh,r.y),o.addScaledVector(rh,r.z),o}static isFrontFacing(t,e,n,s){return li.subVectors(n,e),Ni.subVectors(t,e),li.cross(Ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ks.subVectors(s,n),js.subVectors(r,n),th.subVectors(t,n);let l=Ks.dot(th),c=js.dot(th);if(l<=0&&c<=0)return e.copy(n);eh.subVectors(t,s);let h=Ks.dot(eh),f=js.dot(eh);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ks,o);nh.subVectors(t,r);let d=Ks.dot(nh),x=js.dot(nh);if(x>=0&&d<=x)return e.copy(r);let A=d*c-l*x;if(A<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(js,a);let v=h*x-d*f;if(v<=0&&f-h>=0&&d-x>=0)return Ku.subVectors(r,s),a=(f-h)/(f-h+(d-x)),e.copy(s).addScaledVector(Ku,a);let p=1/(v+A+u);return o=A*p,a=u*p,e.copy(n).addScaledVector(Ks,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),Ia.subVectors(this.max,to),Qs.subVectors(t.a,to),tr.subVectors(t.b,to),er.subVectors(t.c,to),Ki.subVectors(tr,Qs),ji.subVectors(er,tr),ys.subVectors(Qs,er);let e=[0,-Ki.z,Ki.y,0,-ji.z,ji.y,0,-ys.z,ys.y,Ki.z,0,-Ki.x,ji.z,0,-ji.x,ys.z,0,-ys.x,-Ki.y,Ki.x,0,-ji.y,ji.x,0,-ys.y,ys.x,0];return!oh(e,Qs,tr,er,Ia)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,Qs,tr,er,Ia))?!1:(La.crossVectors(Ki,ji),e=[La.x,La.y,La.z],oh(e,Qs,tr,er,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bi=[new U,new U,new U,new U,new U,new U,new U,new U],ci=new U,Pa=new Gn,Qs=new U,tr=new U,er=new U,Ki=new U,ji=new U,ys=new U,to=new U,Ia=new U,La=new U,Ms=new U;function oh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ms.fromArray(i,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=t.dot(Ms),c=e.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var an=new U,Da=new It,om=0,ln=class extends Ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lf,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),s=Dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),s=Dn(s,this.array),r=Dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _o=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},am=new Gn,eo=new U,ah=new U,kn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):am.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);let e=eo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(ah)),this.expandByPoint(eo.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lm=0,ti=new ae,lh=new Be,nr=new U,Yn=new Gn,no=new Gn,vn=new U,me=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lp(t)?_o:As)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Yn.min,no.min),Yn.expandByPoint(vn),vn.addVectors(Yn.max,no.max),Yn.expandByPoint(vn)):(Yn.expandByPoint(no.min),Yn.expandByPoint(no.max))}Yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)vn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(vn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)vn.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(t,c),vn.add(nr)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let m=0;m<n.count;m++)a[m]=new U,l[m]=new U;let c=new U,h=new U,f=new U,u=new It,d=new It,x=new It,A=new U,v=new U;function p(m,M,E){c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,E),u.fromBufferAttribute(r,m),d.fromBufferAttribute(r,M),x.fromBufferAttribute(r,E),h.sub(c),f.sub(c),d.sub(u),x.sub(u);let I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(A.copy(h).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(I),v.copy(f).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(I),a[m].add(A),a[M].add(A),a[E].add(A),l[m].add(v),l[M].add(v),l[E].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let m=0,M=y.length;m<M;++m){let E=y[m],I=E.start,D=E.count;for(let N=I,L=I+D;N<L;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let C=new U,_=new U,R=new U,w=new U;function b(m){R.fromBufferAttribute(s,m),w.copy(R);let M=a[m];C.copy(M),C.sub(R.multiplyScalar(R.dot(M))).normalize(),_.crossVectors(w,M);let I=_.dot(l[m])<0?-1:1;o.setXYZW(m,C.x,C.y,C.z,I)}for(let m=0,M=y.length;m<M;++m){let E=y[m],I=E.start,D=E.count;for(let N=I,L=I+D;N<L;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){let x=t.getX(u+0),A=t.getX(u+1),v=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,v),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let A=0,v=l.length;A<v;A++){a.isInterleavedBufferAttribute?d=l[A]*a.data.stride+a.offset:d=l[A]*h;for(let p=0;p<h;p++)u[x++]=c[d++]}return new ln(u,h,f)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ch=new U,cm=new U,hm=new le,Zn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ch.subVectors(n,e).cross(cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hm.getNormalMatrix(t),s=this.coplanarPoint(ch).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},um=0,Ai=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Ir,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Oh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Oi=new U,hh=new U,Ua=new U,Na=new U,es=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hh.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Na.copy(this.origin).sub(hh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ua),a=Na.dot(this.direction),l=-Na.dot(Ua),c=Na.lengthSq(),h=Math.abs(1-o*o),f,u,d,x;if(h>0)if(f=o*l-a,u=o*a-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let A=1/h;f*=A,u*=A,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hh).addScaledVector(Ua,u),d}intersectSphere(t,e){if(t.radius<0)return null;Oi.subVectors(t.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,x=e.x-o.x,A=e.y-o.y,v=e.z-o.z,p=n.x-o.x,y=n.y-o.y,C=n.z-o.z,_=Math.abs(l),R=Math.abs(c),w=Math.abs(h),b,m,M,E,I,D,N,L,F,X,k,et;if(_>=R&&_>=w?(M=l,D=f,F=x,et=p,l>=0?(b=c,m=h,E=u,I=d,N=A,L=v,X=y,k=C):(b=h,m=c,E=d,I=u,N=v,L=A,X=C,k=y)):R>=w?(M=c,D=u,F=A,et=y,c>=0?(b=h,m=l,E=d,I=f,N=v,L=x,X=C,k=p):(b=l,m=h,E=f,I=d,N=x,L=v,X=p,k=C)):(M=h,D=d,F=v,et=C,h>=0?(b=l,m=c,E=f,I=u,N=x,L=A,X=p,k=y):(b=c,m=l,E=u,I=f,N=A,L=x,X=y,k=p)),M===0)return null;let H=b/M,st=m/M,rt=1/M,zt=E-H*D,Rt=I-st*D,q=N-H*F,pt=L-st*F,yt=X-H*et,W=k-st*et,O=yt*pt-W*q,ot=zt*W-Rt*yt,tt=q*Rt-pt*zt;if(s){if(O<0||ot<0||tt<0)return null}else if((O<0||ot<0||tt<0)&&(O>0||ot>0||tt>0))return null;let it=O+ot+tt;if(it===0)return null;let Et=rt*(O*D+ot*F+tt*et);return(it>0?Et<0:Et>0)?null:this.at(Et/it,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ju=new ae,Ss=new es,Fa=new kn,Qu=new U,Ba=new U,Oa=new U,za=new U,uh=new U,Ha=new U,td=new U,Va=new U,Lt=class extends Be{constructor(t=new me,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(uh.fromBufferAttribute(f,t),o?Ha.addScaledVector(uh,h):Ha.addScaledVector(uh.sub(e),h))}e.add(Ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(Fa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Fa,Qu)===null||Ss.origin.distanceToSquared(Qu)>(t.far-t.near)**2))&&(ju.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(ju),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,A=u.length;x<A;x++){let v=u[x],p=o[v.materialIndex],y=Math.max(v.start,d.start),C=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let _=y,R=C;_<R;_+=3){let w=a.getX(_),b=a.getX(_+1),m=a.getX(_+2);s=Ga(this,p,t,n,c,h,f,w,b,m),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),A=Math.min(a.count,d.start+d.count);for(let v=x,p=A;v<p;v+=3){let y=a.getX(v),C=a.getX(v+1),_=a.getX(v+2);s=Ga(this,o,t,n,c,h,f,y,C,_),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,A=u.length;x<A;x++){let v=u[x],p=o[v.materialIndex],y=Math.max(v.start,d.start),C=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let _=y,R=C;_<R;_+=3){let w=_,b=_+1,m=_+2;s=Ga(this,p,t,n,c,h,f,w,b,m),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),A=Math.min(l.count,d.start+d.count);for(let v=x,p=A;v<p;v+=3){let y=v,C=v+1,_=v+2;s=Ga(this,o,t,n,c,h,f,y,C,_),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}};function dm(i,t,e,n,s,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;Va.copy(a),Va.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Va);return c<e.near||c>e.far?null:{distance:c,point:Va.clone(),object:i}}function Ga(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ba),i.getVertexPosition(l,Oa),i.getVertexPosition(c,za);let h=dm(i,t,e,n,Ba,Oa,za,td);if(h){let f=new U;ts.getBarycoord(td,Ba,Oa,za,f),s&&(h.uv=ts.getInterpolatedAttribute(s,a,l,c,f,new It)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,l,c,f,new It)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};ts.getNormal(Ba,Oa,za,u.normal),h.face=u,h.barycoord=f}return h}var io=new Ee,ed=new Ee,nd=new Ee,fm=new Ee,id=new ae,ka=new U,dh=new kn,sd=new ae,fh=new es,yo=class extends Lt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yh,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dh.copy(this.boundingSphere),dh.applyMatrix4(s),t.ray.intersectsSphere(dh)!==!1&&(sd.copy(s).invert(),fh.copy(t.ray).applyMatrix4(sd),!(this.boundingBox!==null&&fh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,fh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;ed.fromBufferAttribute(s.attributes.skinIndex,t),nd.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(io.copy(e),e.set(0,0,0,0)):(io.set(...e,1),e.set(0,0,0)),io.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=nd.getComponent(r);if(o!==0){let a=ed.getComponent(r);id.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(fm.copy(io).applyMatrix4(id),o)}}return e.isVector4&&(e.w=io.w),e.applyMatrix4(this.bindMatrixInverse)}},xr=class extends Be{constructor(){super(),this.isBone=!0,this.type="Bone"}},ns=class extends Un{constructor(t=null,e=1,n=1,s,r,o,a,l,c=_n,h=_n,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rd=new ae,pm=new ae,Mo=class i{constructor(t=[],e=[]){this.uuid=fs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ae;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:pm;rd.multiplyMatrices(a,e[r]),rd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ns(e,t,t,jn,Kn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(re("Skeleton: No bone found with UUID:",r),o=new xr),this.bones.push(o),this.boneInverses.push(new ae().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},vr=class extends ln{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ir=new ae,od=new ae,Wa=[],ad=new Gn,mm=new ae,so=new Lt,ro=new kn,sn=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),ad.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(ad)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),ro.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),t.ray.intersectsSphere(ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),od.multiplyMatrices(n,ir),so.matrixWorld=od,so.raycast(t,Wa);for(let o=0,a=Wa.length;o<a;o++){let l=Wa[o];l.instanceId=r,l.object=this,e.push(l)}Wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(s*this.count),s,this.count,Vl,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new kn,gm=new It(.5,.5),Xa=new U,_r=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],x=r[8],A=r[9],v=r[10],p=r[11],y=r[12],C=r[13],_=r[14],R=r[15];if(s[0].setComponents(c-o,d-h,p-x,R-y).normalize(),s[1].setComponents(c+o,d+h,p+x,R+y).normalize(),s[2].setComponents(c+a,d+f,p+A,R+C).normalize(),s[3].setComponents(c-a,d-f,p-A,R-C).normalize(),n)s[4].setComponents(l,u,v,_).normalize(),s[5].setComponents(c-l,d-u,p-v,R-_).normalize();else if(s[4].setComponents(c-l,d-u,p-v,R-_).normalize(),e===hi)s[5].setComponents(c+l,d+u,p+v,R+_).normalize();else if(e===hr)s[5].setComponents(l,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=gm.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xa.x=s.normal.x>0?t.max.x:t.min.x,Xa.y=s.normal.y>0?t.max.y:t.min.y,Xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yr=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pl=new U,ml=new U,ld=new ae,oo=new es,qa=new kn,ph=new U,cd=new U,gl=class extends Be{constructor(t=new me,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)pl.fromBufferAttribute(e,s-1),ml.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=pl.distanceTo(ml);t.setAttribute("lineDistance",new ie(n,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,t.ray.intersectsSphere(qa)===!1)return;ld.copy(s).invert(),oo.copy(t.ray).applyMatrix4(ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let A=d,v=x-1;A<v;A+=c){let p=h.getX(A),y=h.getX(A+1),C=Ya(this,t,oo,l,p,y,A);C&&e.push(C)}if(this.isLineLoop){let A=h.getX(x-1),v=h.getX(d),p=Ya(this,t,oo,l,A,v,x-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let A=d,v=x-1;A<v;A+=c){let p=Ya(this,t,oo,l,A,A+1,A);p&&e.push(p)}if(this.isLineLoop){let A=Ya(this,t,oo,l,x-1,d,x-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ya(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(pl.fromBufferAttribute(a,s),ml.fromBufferAttribute(a,r),e.distanceSqToSegment(pl,ml,ph,cd)>n)return;ph.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ph);if(!(c<t.near||c>t.far))return{distance:c,point:cd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var hd=new U,ud=new U,So=class extends gl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)hd.fromBufferAttribute(e,s),ud.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hd.distanceTo(ud);t.setAttribute("lineDistance",new ie(n,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ei=class extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},dd=new ae,wh=new es,Za=new kn,Ja=new U,di=class extends Be{constructor(t=new me,e=new ei){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,t.ray.intersectsSphere(Za)===!1)return;dd.copy(s).invert(),wh.copy(t.ray).applyMatrix4(dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=u,A=d;x<A;x++){let v=c.getX(x);Ja.fromBufferAttribute(f,v),fd(Ja,v,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let x=u,A=d;x<A;x++)Ja.fromBufferAttribute(f,x),fd(Ja,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fd(i,t,e,n,s,r,o){let a=wh.distanceSqToPoint(i);if(a<e){let l=new U;wh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var bo=class extends Un{constructor(t=[],e=cs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mr=class extends Un{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class extends Un{constructor(t,e,n=pi,s,r,o,a=_n,l=_n,c,h=wi,f=1){if(h!==wi&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xl=class extends is{constructor(t,e=pi,n=cs,s,r,o=_n,a=_n,l,c=wi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ce=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function x(A,v,p,y,C,_,R,w,b,m,M){let E=_/b,I=R/m,D=_/2,N=R/2,L=w/2,F=b+1,X=m+1,k=0,et=0,H=new U;for(let st=0;st<X;st++){let rt=st*I-N;for(let zt=0;zt<F;zt++){let Rt=zt*E-D;H[A]=Rt*y,H[v]=rt*C,H[p]=L,c.push(H.x,H.y,H.z),H[A]=0,H[v]=0,H[p]=w>0?1:-1,h.push(H.x,H.y,H.z),f.push(zt/b),f.push(1-st/m),k+=1}}for(let st=0;st<m;st++)for(let rt=0;rt<b;rt++){let zt=u+rt+F*st,Rt=u+rt+F*(st+1),q=u+(rt+1)+F*(st+1),pt=u+(rt+1)+F*st;l.push(zt,Rt,pt),l.push(Rt,q,pt),et+=6}a.addGroup(d,et,M),d+=et,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wo=class i extends me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,x=n*2+r,A=s+1,v=new U,p=new U;for(let y=0;y<=x;y++){let C=0,_=0,R=0,w=0;if(y<=n){let M=y/n,E=M*Math.PI/2;_=-h-t*Math.cos(E),R=t*Math.sin(E),w=-t*Math.cos(E),C=M*f}else if(y<=n+r){let M=(y-n)/r;_=-h+M*e,R=t,w=0,C=f+M*u}else{let M=(y-n-r)/n,E=M*Math.PI/2;_=h+t*Math.sin(E),R=t*Math.cos(E),w=t*Math.sin(E),C=f+u+M*f}let b=Math.max(0,Math.min(1,C/d)),m=0;y===0?m=.5/s:y===x&&(m=-.5/s);for(let M=0;M<=s;M++){let E=M/s,I=E*Math.PI*2,D=Math.sin(I),N=Math.cos(I);p.x=-R*N,p.y=_,p.z=R*D,a.push(p.x,p.y,p.z),v.set(-R*N,w,R*D),v.normalize(),l.push(v.x,v.y,v.z),c.push(E+m,b)}if(y>0){let M=(y-1)*A;for(let E=0;E<s;E++){let I=M+E,D=M+E+1,N=y*A+E,L=y*A+E+1;o.push(I,D,N),o.push(D,L,N)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},To=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ze=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,A=[],v=n/2,p=0;y(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function y(){let _=new U,R=new U,w=0,b=(e-t)/n;for(let m=0;m<=r;m++){let M=[],E=m/r,I=E*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,L=N*l+a,F=Math.sin(L),X=Math.cos(L);R.x=I*F,R.y=-E*n+v,R.z=I*X,f.push(R.x,R.y,R.z),_.set(F,b,X).normalize(),u.push(_.x,_.y,_.z),d.push(N,1-E),M.push(x++)}A.push(M)}for(let m=0;m<s;m++)for(let M=0;M<r;M++){let E=A[M][m],I=A[M+1][m],D=A[M+1][m+1],N=A[M][m+1];(t>0||M!==0)&&(h.push(E,I,N),w+=3),(e>0||M!==r-1)&&(h.push(I,D,N),w+=3)}c.addGroup(p,w,0),p+=w}function C(_){let R=x,w=new It,b=new U,m=0,M=_===!0?t:e,E=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,v*E,0),u.push(0,E,0),d.push(.5,.5),x++;let I=x;for(let D=0;D<=s;D++){let L=D/s*l+a,F=Math.cos(L),X=Math.sin(L);b.x=M*X,b.y=v*E,b.z=M*F,f.push(b.x,b.y,b.z),u.push(0,E,0),w.x=F*.5+.5,w.y=X*.5*E+.5,d.push(w.x,w.y),x++}for(let D=0;D<s;D++){let N=R+D,L=I+D;_===!0?h.push(L,L+1,N):h.push(L+1,L,N),m+=3}c.addGroup(p,m,_===!0?1:2),p+=m}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bn=class i extends ze{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ao=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let C=new U,_=new U,R=new U;for(let w=0;w<e.length;w+=3)d(e[w+0],C),d(e[w+1],_),d(e[w+2],R),l(C,_,R,y)}function l(y,C,_,R){let w=R+1,b=[];for(let m=0;m<=w;m++){b[m]=[];let M=y.clone().lerp(_,m/w),E=C.clone().lerp(_,m/w),I=w-m;for(let D=0;D<=I;D++)D===0&&m===w?b[m][D]=M:b[m][D]=M.clone().lerp(E,D/I)}for(let m=0;m<w;m++)for(let M=0;M<2*(w-m)-1;M++){let E=Math.floor(M/2);M%2===0?(u(b[m][E+1]),u(b[m+1][E]),u(b[m][E])):(u(b[m][E+1]),u(b[m+1][E+1]),u(b[m+1][E]))}}function c(y){let C=new U;for(let _=0;_<r.length;_+=3)C.x=r[_+0],C.y=r[_+1],C.z=r[_+2],C.normalize().multiplyScalar(y),r[_+0]=C.x,r[_+1]=C.y,r[_+2]=C.z}function h(){let y=new U;for(let C=0;C<r.length;C+=3){y.x=r[C+0],y.y=r[C+1],y.z=r[C+2];let _=v(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(_,1-R)}x(),f()}function f(){for(let y=0;y<o.length;y+=6){let C=o[y+0],_=o[y+2],R=o[y+4],w=Math.max(C,_,R),b=Math.min(C,_,R);w>.9&&b<.1&&(C<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,C){let _=y*3;C.x=t[_+0],C.y=t[_+1],C.z=t[_+2]}function x(){let y=new U,C=new U,_=new U,R=new U,w=new It,b=new It,m=new It;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),C.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),w.set(o[E+0],o[E+1]),b.set(o[E+2],o[E+3]),m.set(o[E+4],o[E+5]),R.copy(y).add(C).add(_).divideScalar(3);let I=v(R);A(w,E+0,y,I),A(b,E+2,C,I),A(m,E+4,_,I)}}function A(y,C,_,R){R<0&&y.x===1&&(o[C]=y.x-1),_.x===0&&_.z===0&&(o[C]=R/2/Math.PI+.5)}function v(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ro=class i extends Ao{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new It:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new ae;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(_e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(_e(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vl=class extends Sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var pd=new U,md=new U,mh=new Kh,gh=new Kh,xh=new Kh,Hi=class extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(md.subVectors(s[0],s[1]).add(s[0]),c=md);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),A=Math.pow(f.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);A<1e-4&&(A=1),x<1e-4&&(x=A),v<1e-4&&(v=A),mh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,A,v),gh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,A,v),xh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,A,v)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),gh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),xh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(mh.calc(l),gh.calc(l),xh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function xm(i,t){let e=1-i;return e*e*t}function vm(i,t){return 2*(1-i)*i*t}function _m(i,t){return i*i*t}function ho(i,t,e,n){return xm(i,t)+vm(i,e)+_m(i,n)}function ym(i,t){let e=1-i;return e*e*e*t}function Mm(i,t){let e=1-i;return 3*e*e*i*t}function Sm(i,t){return 3*(1-i)*i*i*t}function bm(i,t){return i*i*i*t}function uo(i,t,e,n,s){return ym(i,t)+Mm(i,e)+Sm(i,n)+bm(i,s)}var Co=class extends Jn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends Jn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y),uo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends Jn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rs=class extends Jn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Jn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ni=class extends Jn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y),ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(gd(a,l.x,c.x,h.x,f.x),gd(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},_l=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:Hi,CubicBezierCurve:Co,CubicBezierCurve3:br,EllipseCurve:Sr,LineCurve:Po,LineCurve3:Rs,QuadraticBezierCurve:Io,QuadraticBezierCurve3:ni,SplineCurve:Lo}),yl=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new _l[s.type]().fromJSON(s))}return this}},Do=class extends yl{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Po(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Io(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Co(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Sr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Er=class extends Do{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Do().fromJSON(s))}return this}};function Em(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=pf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Cm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){let d=i[u],x=i[u+1];d<a&&(a=d),x<l&&(l=x),d>h&&(h=d),x>f&&(f=x)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Uo(r,o,e,a,l,c,0),o}function pf(i,t,e,n,s){let r;if(s===Hm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=xd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=xd(o/n|0,i[o],i[o+1],r);return r&&wr(r,r.next)&&(Fo(r),r=r.next),r}function Cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wr(e,e.next)||qe(e.prev,e,e.next)===0)){if(Fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Uo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Um(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Tm(i,n,s,r):wm(i)){t.push(l.i,i.i,c.i),Fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Am(Cs(i),t),Uo(i,t,e,n,s,r,2)):o===2&&Rm(i,t,e,n,s,r):Uo(Cs(i),t,e,n,s,r,1);break}}}function wm(i){let t=i.prev,e=i,n=i.next;if(qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&ao(s,a,r,l,o,c,x.x,x.y)&&qe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Tm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(qe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),x=Math.min(h,f,u),A=Math.max(a,l,c),v=Math.max(h,f,u),p=Th(d,x,t,e,n),y=Th(A,v,t,e,n),C=i.prevZ,_=i.nextZ;for(;C&&C.z>=p&&_&&_.z<=y;){if(C.x>=d&&C.x<=A&&C.y>=x&&C.y<=v&&C!==s&&C!==o&&ao(a,h,l,f,c,u,C.x,C.y)&&qe(C.prev,C,C.next)>=0||(C=C.prevZ,_.x>=d&&_.x<=A&&_.y>=x&&_.y<=v&&_!==s&&_!==o&&ao(a,h,l,f,c,u,_.x,_.y)&&qe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;C&&C.z>=p;){if(C.x>=d&&C.x<=A&&C.y>=x&&C.y<=v&&C!==s&&C!==o&&ao(a,h,l,f,c,u,C.x,C.y)&&qe(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=A&&_.y>=x&&_.y<=v&&_!==s&&_!==o&&ao(a,h,l,f,c,u,_.x,_.y)&&qe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Am(i,t){let e=i;do{let n=e.prev,s=e.next.next;!wr(n,s)&&gf(n,e,e.next,s)&&No(n,s)&&No(s,n)&&(t.push(n.i,e.i,s.i),Fo(e),Fo(e.next),e=i=s),e=e.next}while(e!==i);return Cs(e)}function Rm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bm(o,a)){let l=xf(o,a);o=Cs(o,o.next),l=Cs(l,l.next),Uo(o,t,e,n,s,r,0),Uo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Cm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=pf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fm(c))}s.sort(Pm);for(let r=0;r<s.length;r++)e=Im(s[r],e);return e}function Pm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Im(i,t){let e=Lm(i,t);if(!e)return t;let n=xf(e,i);return Cs(n,n.next),Cs(e,e.next)}function Lm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(wr(i,e))return e;do{if(wr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&mf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);No(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Dm(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Dm(i,t){return qe(i.prev,i,t.prev)<0&&qe(t.next,i,i.next)<0}function Um(i,t,e,n){let s=i;do s.z===0&&(s.z=Th(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Nm(s)}function Nm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Th(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ao(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&mf(i,t,e,n,s,r,o,a)}function Bm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Om(i,t)&&(No(i,t)&&No(t,i)&&zm(i,t)&&(qe(i.prev,i,t.prev)||qe(i,t.prev,t))||wr(i,t)&&qe(i.prev,i,i.next)>0&&qe(t.prev,t,t.next)>0)}function qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wr(i,t){return i.x===t.x&&i.y===t.y}function gf(i,t,e,n){let s=Ka(qe(i,t,e)),r=Ka(qe(i,t,n)),o=Ka(qe(e,n,i)),a=Ka(qe(e,n,t));return!!(s!==r&&o!==a||s===0&&$a(i,e,t)||r===0&&$a(i,n,t)||o===0&&$a(e,i,n)||a===0&&$a(e,t,n))}function $a(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ka(i){return i>0?1:i<0?-1:0}function Om(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function No(i,t){return qe(i.prev,i,i.next)<0?qe(i,t,i.next)>=0&&qe(i,i.prev,t)>=0:qe(i,t,i.prev)<0||qe(i,i.next,t)<0}function zm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xf(i,t){let e=Ah(i.i,i.x,i.y),n=Ah(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xd(i,t,e,n){let s=Ah(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ah(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Rh=class{static triangulate(t,e,n=2){return Em(t,e,n)}},Es=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vd(t),_d(n,t);let o=t.length;e.forEach(vd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,_d(n,e[l]);let a=Rh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _d(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Bo=class i extends me{constructor(t=new Er([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Vm,C,_=!1,R,w,b,m;if(p){C=p.getSpacedPoints(h),_=!0,u=!1;let ft=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(h,ft),w=new U,b=new U,m=new U}u||(v=0,d=0,x=0,A=0);let M=a.extractPoints(c),E=M.shape,I=M.holes;if(!Es.isClockWise(E)){E=E.reverse();for(let ft=0,dt=I.length;ft<dt;ft++){let gt=I[ft];Es.isClockWise(gt)&&(I[ft]=gt.reverse())}}function N(ft){let gt=10000000000000001e-36,xt=ft[0];for(let St=1;St<=ft.length;St++){let Ct=St%ft.length,Nt=ft[Ct],z=Nt.x-xt.x,Z=Nt.y-xt.y,P=z*z+Z*Z,J=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(xt.x),Math.abs(xt.y)),K=gt*J*J;if(P<=K){ft.splice(Ct,1),St--;continue}xt=Nt}}N(E),I.forEach(N);let L=I.length,F=E;for(let ft=0;ft<L;ft++){let dt=I[ft];E=E.concat(dt)}function X(ft,dt,gt){return dt||oe("ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(dt,gt)}let k=E.length;function et(ft,dt,gt){let xt,St,Ct,Nt=ft.x-dt.x,z=ft.y-dt.y,Z=gt.x-ft.x,P=gt.y-ft.y,J=Nt*Nt+z*z,K=Nt*P-z*Z;if(Math.abs(K)>Number.EPSILON){let S=Math.sqrt(J),g=Math.sqrt(Z*Z+P*P),B=dt.x-z/S,G=dt.y+Nt/S,Q=gt.x-P/g,Mt=gt.y+Z/g,ut=((Q-B)*P-(Mt-G)*Z)/(Nt*P-z*Z);xt=B+Nt*ut-ft.x,St=G+z*ut-ft.y;let $=xt*xt+St*St;if($<=2)return new It(xt,St);Ct=Math.sqrt($/2)}else{let S=!1;Nt>Number.EPSILON?Z>Number.EPSILON&&(S=!0):Nt<-Number.EPSILON?Z<-Number.EPSILON&&(S=!0):Math.sign(z)===Math.sign(P)&&(S=!0),S?(xt=-z,St=Nt,Ct=Math.sqrt(J)):(xt=Nt,St=z,Ct=Math.sqrt(J/2))}return new It(xt/Ct,St/Ct)}let H=[];for(let ft=0,dt=F.length,gt=dt-1,xt=ft+1;ft<dt;ft++,gt++,xt++)gt===dt&&(gt=0),xt===dt&&(xt=0),H[ft]=et(F[ft],F[gt],F[xt]);let st=[],rt,zt=H.concat();for(let ft=0,dt=L;ft<dt;ft++){let gt=I[ft];rt=[];for(let xt=0,St=gt.length,Ct=St-1,Nt=xt+1;xt<St;xt++,Ct++,Nt++)Ct===St&&(Ct=0),Nt===St&&(Nt=0),rt[xt]=et(gt[xt],gt[Ct],gt[Nt]);st.push(rt),zt=zt.concat(rt)}let Rt;if(v===0)Rt=Es.triangulateShape(F,I);else{let ft=[],dt=[];for(let gt=0;gt<v;gt++){let xt=gt/v,St=d*Math.cos(xt*Math.PI/2),Ct=x*Math.sin(xt*Math.PI/2)+A;for(let Nt=0,z=F.length;Nt<z;Nt++){let Z=X(F[Nt],H[Nt],Ct);ot(Z.x,Z.y,-St),xt===0&&ft.push(Z)}for(let Nt=0,z=L;Nt<z;Nt++){let Z=I[Nt];rt=st[Nt];let P=[];for(let J=0,K=Z.length;J<K;J++){let S=X(Z[J],rt[J],Ct);ot(S.x,S.y,-St),xt===0&&P.push(S)}xt===0&&dt.push(P)}}Rt=Es.triangulateShape(ft,dt)}let q=Rt.length,pt=x+A;for(let ft=0;ft<k;ft++){let dt=u?X(E[ft],zt[ft],pt):E[ft];_?(b.copy(R.normals[0]).multiplyScalar(dt.x),w.copy(R.binormals[0]).multiplyScalar(dt.y),m.copy(C[0]).add(b).add(w),ot(m.x,m.y,m.z)):ot(dt.x,dt.y,0)}for(let ft=1;ft<=h;ft++)for(let dt=0;dt<k;dt++){let gt=u?X(E[dt],zt[dt],pt):E[dt];_?(b.copy(R.normals[ft]).multiplyScalar(gt.x),w.copy(R.binormals[ft]).multiplyScalar(gt.y),m.copy(C[ft]).add(b).add(w),ot(m.x,m.y,m.z)):ot(gt.x,gt.y,f/h*ft)}for(let ft=v-1;ft>=0;ft--){let dt=ft/v,gt=d*Math.cos(dt*Math.PI/2),xt=x*Math.sin(dt*Math.PI/2)+A;for(let St=0,Ct=F.length;St<Ct;St++){let Nt=X(F[St],H[St],xt);ot(Nt.x,Nt.y,f+gt)}for(let St=0,Ct=I.length;St<Ct;St++){let Nt=I[St];rt=st[St];for(let z=0,Z=Nt.length;z<Z;z++){let P=X(Nt[z],rt[z],xt);_?ot(P.x,P.y+C[h-1].y,C[h-1].x+gt):ot(P.x,P.y,f+gt)}}}yt(),W();function yt(){let ft=s.length/3;if(u){let dt=0,gt=k*dt;for(let xt=0;xt<q;xt++){let St=Rt[xt];tt(St[2]+gt,St[1]+gt,St[0]+gt)}dt=h+v*2,gt=k*dt;for(let xt=0;xt<q;xt++){let St=Rt[xt];tt(St[0]+gt,St[1]+gt,St[2]+gt)}}else{for(let dt=0;dt<q;dt++){let gt=Rt[dt];tt(gt[2],gt[1],gt[0])}for(let dt=0;dt<q;dt++){let gt=Rt[dt];tt(gt[0]+k*h,gt[1]+k*h,gt[2]+k*h)}}n.addGroup(ft,s.length/3-ft,0)}function W(){let ft=s.length/3,dt=0;O(F,dt),dt+=F.length;for(let gt=0,xt=I.length;gt<xt;gt++){let St=I[gt];O(St,dt),dt+=St.length}n.addGroup(ft,s.length/3-ft,1)}function O(ft,dt){let gt=ft.length;for(;--gt>=0;){let xt=gt,St=gt-1;St<0&&(St=ft.length-1);for(let Ct=0,Nt=h+v*2;Ct<Nt;Ct++){let z=k*Ct,Z=k*(Ct+1),P=dt+xt+z,J=dt+St+z,K=dt+St+Z,S=dt+xt+Z;it(P,J,K,S)}}}function ot(ft,dt,gt){l.push(ft),l.push(dt),l.push(gt)}function tt(ft,dt,gt){Et(ft),Et(dt),Et(gt);let xt=s.length/3,St=y.generateTopUV(n,s,xt-3,xt-2,xt-1);Ut(St[0]),Ut(St[1]),Ut(St[2])}function it(ft,dt,gt,xt){Et(ft),Et(dt),Et(xt),Et(dt),Et(gt),Et(xt);let St=s.length/3,Ct=y.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);Ut(Ct[0]),Ut(Ct[1]),Ut(Ct[3]),Ut(Ct[1]),Ut(Ct[2]),Ut(Ct[3])}function Et(ft){s.push(l[ft*3+0]),s.push(l[ft*3+1]),s.push(l[ft*3+2])}function Ut(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Gm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _l[s.type]().fromJSON(s)),new i(n,t.options)}},Vm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new It(r,o),new It(a,l),new It(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],x=t[s*3+2],A=t[r*3],v=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new It(o,1-l),new It(c,1-f),new It(u,1-x),new It(A,1-p)]:[new It(a,1-l),new It(h,1-f),new It(d,1-x),new It(v,1-p)]}};function Gm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Oo=class i extends Ao{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var we=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],x=[],A=[],v=[];for(let p=0;p<h;p++){let y=p*u-o;for(let C=0;C<c;C++){let _=C*f-r;x.push(_,-y,0),A.push(0,0,1),v.push(C/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let C=y+c*p,_=y+c*(p+1),R=y+1+c*(p+1),w=y+1+c*p;d.push(C,_,w),d.push(_,R,w)}this.setIndex(d),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(A,3)),this.setAttribute("uv",new ie(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Tr=class i extends me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new U,x=new It;for(let A=0;A<=s;A++){for(let v=0;v<=n;v++){let p=r+v/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}f+=u}for(let A=0;A<s;A++){let v=A*(n+1);for(let p=0;p<n;p++){let y=p+v,C=y,_=y+n+1,R=y+n+2,w=y+1;a.push(C,_,w),a.push(_,R,w)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ge=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,u=new U,d=[],x=[],A=[],v=[];for(let p=0;p<=n;p++){let y=[],C=p/n,_=o+C*a,R=t*Math.cos(_),w=Math.sqrt(t*t-R*R),b=0;p===0&&o===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let m=0;m<=e;m++){let M=m/e,E=s+M*r;f.x=-w*Math.cos(E),f.y=R,f.z=w*Math.sin(E),x.push(f.x,f.y,f.z),u.copy(f).normalize(),A.push(u.x,u.y,u.z),v.push(M+b,1-C),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let C=h[p][y+1],_=h[p][y],R=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&d.push(C,_,w),(p!==n-1||l<Math.PI)&&d.push(_,R,w)}this.setIndex(d),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(A,3)),this.setAttribute("uv",new ie(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ri=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new U,d=new U,x=new U;for(let A=0;A<=n;A++){let v=o+A/n*a;for(let p=0;p<=s;p++){let y=p/s*r;d.x=(t+e*Math.cos(v))*Math.cos(y),d.y=(t+e*Math.cos(v))*Math.sin(y),d.z=e*Math.sin(v),c.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),f.push(p/s),f.push(A/n)}}for(let A=1;A<=n;A++)for(let v=1;v<=s;v++){let p=(s+1)*A+v-1,y=(s+1)*(A-1)+v-1,C=(s+1)*(A-1)+v,_=(s+1)*A+v;l.push(p,y,_),l.push(y,C,_)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Rn=class i extends me{constructor(t=new ni(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new It,h=new U,f=[],u=[],d=[],x=[];A(),this.setIndex(x),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function A(){for(let C=0;C<e;C++)v(C);v(r===!1?e:0),y(),p()}function v(C){h=t.getPointAt(C/e,h);let _=o.normals[C],R=o.binormals[C];for(let w=0;w<=s;w++){let b=w/s*Math.PI*2,m=Math.sin(b),M=-Math.cos(b);l.x=M*_.x+m*R.x,l.y=M*_.y+m*R.y,l.z=M*_.z+m*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let C=1;C<=e;C++)for(let _=1;_<=s;_++){let R=(s+1)*(C-1)+(_-1),w=(s+1)*C+(_-1),b=(s+1)*C+_,m=(s+1)*(C-1)+_;x.push(R,w,m),x.push(w,b,m)}}function y(){for(let C=0;C<=e;C++)for(let _=0;_<=s;_++)c.x=C/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new _l[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(yd(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(yd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Cn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function yd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function km(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var En={clone:Ds,merge:Cn},Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new It().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ar=class extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Rr=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ml=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sl=class extends ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=t,a=2*e-n;break;case Eh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:o=t,l=2*n-e;break;case Eh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),A=x*x,v=A*x,p=-u*v+2*u*A-u*x,y=(1+u)*v+(-1.5-2*u)*A+(-.5+u)*x+1,C=(-1-d)*v+(1.5+d)*A+.5*x,_=d*v-d*A;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+C*o[l+R]+_*o[f+R];return r}},bl=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},El=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wl=class extends ss{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-e)/(s-e),A=1-x;for(let v=0;v!==a;++v)r[v]=o[c+v]*A+o[l+v]*x;return r}let u=a*2,d=t-1;for(let x=0;x!==a;++x){let A=o[c+x],v=o[l+x],p=d*u+x*2,y=f[p],C=f[p+1],_=t*u+x*2,R=h[_],w=h[_+1],b=Ym(n,e,y,R,s);r[x]=vf(b,A,C,w,v)}return r}};function vf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function qm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ym(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=vf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=qm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var $n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sr(e,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sr(t.times,Array),values:sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),vh(t.settings)&&(n.settings={inTangents:sr(t.settings.inTangents,Array),outTangents:sr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;vh(this.settings)&&(Md(this.settings.inTangents,t),Md(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){oe("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){oe("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Dp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){oe("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let A=e[f+x];if(A!==e[u+x]||A!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,vh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Md(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=hl;var rs=class extends $n{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=fo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Tl.prototype.ValueTypeName="color";var Al=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Al.prototype.ValueTypeName="number";var Rl=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},zo=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends $n{constructor(t,e,n){super(t,e,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=fo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Cl.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_f=new Pl,Il=class{constructor(t){this.manager=t!==void 0?t:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ho=class extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_h=new ae,Sd=new U,bd=new U,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sd),bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_h,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===hr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ja=new U,Qa=new nn,bi=new U,Go=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ja,Qa,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Qa,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ja,Qa,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Qa,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new U,Ed=new It,wd=new It,un=class extends Go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Ed,wd),e.subVectors(wd,Ed)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ch=class extends Vo{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},ko=class extends Cr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},as=class extends Go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ph=class extends Vo{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var rr=-90,or=1,Ll=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(rr,or,t,e);s.layers=this.layers,this.add(s);let r=new un(rr,or,t,e);r.layers=this.layers,this.add(r);let o=new un(rr,or,t,e);o.layers=this.layers,this.add(o);let a=new un(rr,or,t,e);a.layers=this.layers,this.add(a);let l=new un(rr,or,t,e);l.layers=this.layers,this.add(l);let c=new un(rr,or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Dl=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Wo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Zm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Zm(){this._document.hidden===!1&&this.reset()}var Qh="\\[\\]\\.:\\/",Jm=new RegExp("["+Qh+"]","g"),tu="[^"+Qh+"]",$m="[^"+Qh.replace("\\.","")+"]",Km=/((?:WC+[\/:])*)/.source.replace("WC",tu),jm=/(WCOD+)?/.source.replace("WCOD",$m),Qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),t0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),e0=new RegExp("^"+Km+jm+Qm+t0+"$"),n0=["material","materials","bones","map"],Ih=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jm,"")}static parseTrackName(t){let e=e0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);n0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Ih;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ty=new Float32Array(1);var Td=new ae,Xo=class{constructor(t,e,n=0,s=1/0){this.ray=new es(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(t,e=!0,n=[]){return Lh(t,this,n,e),n.sort(Ad),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Lh(t[s],this,n,e);return n.sort(Ad),n}};function Ad(i,t){return i.distance-t.distance}function Lh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],t,e,!0)}}var Dh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function eu(i,t,e,n){let s=i0(n);switch(e){case Xh:return i*t;case Vl:return i*t/s.components*s.byteLength;case Gl:return i*t/s.components*s.byteLength;case ds:return i*t*2/s.components*s.byteLength;case kl:return i*t*2/s.components*s.byteLength;case qh:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Wl:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:case Zl:return Math.max(i,16)*Math.max(t,8)/4;case Xl:case Yl:return Math.max(i,8)*Math.max(t,8)/2;case Jl:case $l:case jl:case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kl:case ra:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mc:case gc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oa:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i0(i){switch(i){case Wn:case Vh:return{byteLength:1,components:1};case Lr:case Gh:case Ye:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case pi:case Ol:case Kn:return{byteLength:4,components:1};case kh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function h0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],A=f[d];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++u,f[u]=A)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let A=f[d];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,cg=`uniform sampler2D dfgLUT;
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
}`,hg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define LAMBERT
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Dx=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,Bx=`#define TOON
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
}`,Ox=`#define TOON
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
}`,zx=`uniform float size;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:u0,alphahash_pars_fragment:d0,alphamap_fragment:f0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:x0,aomap_pars_fragment:v0,batching_pars_vertex:_0,batching_vertex:y0,begin_vertex:M0,beginnormal_vertex:S0,bsdfs:b0,iridescence_fragment:E0,bumpmap_pars_fragment:w0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:I0,color_pars_vertex:L0,color_vertex:D0,common:U0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:B0,displacementmap_vertex:O0,emissivemap_fragment:z0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:k0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ig,envmap_vertex:Y0,fog_vertex:Z0,fog_pars_vertex:J0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:Q0,lights_lambert_fragment:tg,lights_lambert_pars_fragment:eg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:og,lights_phong_pars_fragment:ag,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:dg,lightprobes_pars_fragment:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:_g,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:bg,morphinstance_vertex:Eg,morphcolor_vertex:wg,morphnormal_vertex:Tg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Rg,normal_fragment_begin:Cg,normal_fragment_maps:Pg,normal_pars_fragment:Ig,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:Og,opaque_fragment:zg,packing:Hg,premultiplied_alpha_fragment:Vg,project_vertex:Gg,dithering_fragment:kg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Jg,shadowmask_pars_fragment:$g,skinbase_vertex:Kg,skinning_pars_vertex:jg,skinning_vertex:Qg,skinnormal_vertex:tx,specularmap_fragment:ex,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ox,uv_pars_fragment:ax,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:hx,background_vert:ux,background_frag:dx,backgroundCube_vert:fx,backgroundCube_frag:px,cube_vert:mx,cube_frag:gx,depth_vert:xx,depth_frag:vx,distance_vert:_x,distance_frag:yx,equirect_vert:Mx,equirect_frag:Sx,linedashed_vert:bx,linedashed_frag:Ex,meshbasic_vert:wx,meshbasic_frag:Tx,meshlambert_vert:Ax,meshlambert_frag:Rx,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Ix,meshnormal_frag:Lx,meshphong_vert:Dx,meshphong_frag:Ux,meshphysical_vert:Nx,meshphysical_frag:Fx,meshtoon_vert:Bx,meshtoon_frag:Ox,points_vert:zx,points_frag:Hx,shadow_vert:Vx,shadow_frag:Gx,sprite_vert:kx,sprite_frag:Wx},kt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ii={basic:{uniforms:Cn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Cn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Cn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Cn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Cn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Cn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Cn([kt.points,kt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Cn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Cn([kt.common,kt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Cn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Cn([kt.sprite,kt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Cn([kt.common,kt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Cn([kt.lights,kt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ii.physical={uniforms:Cn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var Ec={r:0,b:0,g:0},Xx=new ae,Gf=new le;Gf.set(-1,0,0,0,1,0,0,0,1);function qx(i,t,e,n,s,r){let o=new Ft(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){let _=y.backgroundBlurriness>0;C=t.get(C,_)}return C}function x(y){let C=!1,_=d(y);_===null?v(o,a):_&&_.isColor&&(v(_,1),C=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(y,C){let _=d(C);_&&(_.isCubeTexture||_.mapping===Qo)?(c===void 0&&(c=new Lt(new ce(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Ds(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(C.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gf),c.material.toneMapped=ve.getTransfer(_.colorSpace)!==Pe,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Lt(new we(2,2),new Ce({name:"BackgroundMaterial",uniforms:Ds(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ve.getTransfer(_.colorSpace)!==Pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function v(y,C){y.getRGB(Ec,jh(i)),e.buffers.color.setClear(Ec.r,Ec.g,Ec.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,C=1){o.set(y),a=C,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,v(o,a)},render:x,addToRenderList:A,dispose:p}}function Yx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,D,N,L,F){let X=!1,k=f(I,L,N,D);r!==k&&(r=k,c(r.object)),X=d(I,L,N,F),X&&x(I,L,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(I,D,N,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,D,N,L){let F=L.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let k=I.isInstancedMesh===!0?I.id:0,et=X[k];et===void 0&&(et={},X[k]=et);let H=et[N.id];H===void 0&&(H={},et[N.id]=H);let st=H[F];return st===void 0&&(st=u(l()),H[F]=st),st}function u(I){let D=[],N=[],L=[];for(let F=0;F<e;F++)D[F]=0,N[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,D,N,L){let F=r.attributes,X=D.attributes,k=0,et=N.getAttributes();for(let H in et)if(et[H].location>=0){let rt=F[H],zt=X[H];if(zt===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(zt=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(zt=I.instanceColor)),rt===void 0||rt.attribute!==zt||zt&&rt.data!==zt.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function x(I,D,N,L){let F={},X=D.attributes,k=0,et=N.getAttributes();for(let H in et)if(et[H].location>=0){let rt=X[H];rt===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor));let zt={};zt.attribute=rt,rt&&rt.data&&(zt.data=rt.data),F[H]=zt,k++}r.attributes=F,r.attributesNum=k,r.index=L}function A(){let I=r.newAttributes;for(let D=0,N=I.length;D<N;D++)I[D]=0}function v(I){p(I,0)}function p(I,D){let N=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;N[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),F[I]!==D&&(i.vertexAttribDivisor(I,D),F[I]=D)}function y(){let I=r.newAttributes,D=r.enabledAttributes;for(let N=0,L=D.length;N<L;N++)D[N]!==I[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function C(I,D,N,L,F,X,k){k===!0?i.vertexAttribIPointer(I,D,N,F,X):i.vertexAttribPointer(I,D,N,L,F,X)}function _(I,D,N,L){A();let F=L.attributes,X=N.getAttributes(),k=D.defaultAttributeValues;for(let et in X){let H=X[et];if(H.location>=0){let st=F[et];if(st===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),st!==void 0){let rt=st.normalized,zt=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;let q=Rt.buffer,pt=Rt.type,yt=Rt.bytesPerElement,W=pt===i.INT||pt===i.UNSIGNED_INT||st.gpuType===Ol;if(st.isInterleavedBufferAttribute){let O=st.data,ot=O.stride,tt=st.offset;if(O.isInstancedInterleavedBuffer){for(let it=0;it<H.locationSize;it++)p(H.location+it,O.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let it=0;it<H.locationSize;it++)v(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,q);for(let it=0;it<H.locationSize;it++)C(H.location+it,zt/H.locationSize,pt,rt,ot*yt,(tt+zt/H.locationSize*it)*yt,W)}else{if(st.isInstancedBufferAttribute){for(let O=0;O<H.locationSize;O++)p(H.location+O,st.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let O=0;O<H.locationSize;O++)v(H.location+O);i.bindBuffer(i.ARRAY_BUFFER,q);for(let O=0;O<H.locationSize;O++)C(H.location+O,zt/H.locationSize,pt,rt,zt*yt,zt/H.locationSize*O*yt,W)}}else if(k!==void 0){let rt=k[et];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(H.location,rt);break;case 3:i.vertexAttrib3fv(H.location,rt);break;case 4:i.vertexAttrib4fv(H.location,rt);break;default:i.vertexAttrib1fv(H.location,rt)}}}}y()}function R(){M();for(let I in n){let D=n[I];for(let N in D){let L=D[N];for(let F in L){let X=L[F];for(let k in X)h(X[k].object),delete X[k];delete L[F]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let N in D){let L=D[N];for(let F in L){let X=L[F];for(let k in X)h(X[k].object),delete X[k];delete L[F]}}delete n[I.id]}function b(I){for(let D in n){let N=n[D];for(let L in N){let F=N[L];if(F[I.id]===void 0)continue;let X=F[I.id];for(let k in X)h(X[k].object),delete X[k];delete F[I.id]}}}function m(I){for(let D in n){let N=n[D],L=I.isInstancedMesh===!0?I.id:0,F=N[L];if(F!==void 0){for(let X in F){let k=F[X];for(let et in k)h(k[et].object),delete k[et];delete F[X]}delete N[L],Object.keys(N).length===0&&delete n[D]}}}function M(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:m,releaseStatesOfProgram:b,initAttributes:A,enableAttribute:v,disableUnusedAttributes:y}}function Zx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Jx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==jn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let m=b===Ye&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Wn&&b!==Kn&&!m&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:_,maxSamples:R,samples:w}}function $x(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Zn,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,A=f.clipIntersection,v=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!v)r?h(null):c();else{let y=r?0:n,C=y*4,_=p.clippingState||null;l.value=_,_=h(x,u,C,d);for(let R=0;R!==C;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,x){let A=f!==null?f.length:0,v=null;if(A!==0){if(v=l.value,x!==!0||v===null){let p=d+A*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(v===null||v.length<p)&&(v=new Float32Array(p));for(let C=0,_=d;C!==A;++C,_+=4)o.copy(f[C]).applyMatrix4(y,a),o.normal.toArray(v,_),v[_+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,v}}var Nr=4,Kx=6,jx=20,Qx=256,aa=new as,yf=new Ft,nu=null,iu=0,su=0,ru=!1,tv=new U,Us=new U,Br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=tv}=r;nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ye,format:jn,colorSpace:po,depthBuffer:!1},s=Mf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ev(r)),this._blurMaterial=iv(r,t,e),this._ggxMaterial=nv(r,t,e)}return s}_compileMaterial(t){let e=new Lt(new me,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s,r){let l=new un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(yf),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new ce,new Re({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,v=A.material,p=!1,y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,p=!0):(v.color.copy(yf),p=!0);for(let C=0;C<6;C++){let _=C%3;_===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):_===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let R=this._cubeSize;Ur(s,_*R,C>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(A,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cs||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:x}=this,A=this._sizeLods[n],v=3*A*(n>x-Nr?n-x+Nr:0),p=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-e,Ur(r,v,p,3*A,2*A),s.setRenderTarget(r),s.render(a,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Ur(t,v,p,3*A,2*A),s.setRenderTarget(t),s.render(a,aa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Nr?s-this._lodMax+Nr:0),u=4*(this._cubeSize-h);Ur(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,aa)}};function ev(i){let t=[],e=[],n=i,s=i-Nr+1+Kx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,x=new Float32Array(d*u*f),A=new Float32Array(d*u*f);for(let p=0;p<f;p++){let y=p%3*2/3-1,C=p>2?0:-1,_=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(_,d*u*p);for(let R=0;R<u;R++){let w=h[R*2]*2-1,b=h[R*2+1]*2-1;p===0?Us.set(1,b,w):p===1?Us.set(-w,1,-b):p===2?Us.set(-w,b,1):p===3?Us.set(-1,b,-w):p===4?Us.set(-w,-1,b):Us.set(w,b,-1),Us.toArray(A,(p*u+R)*d)}}let v=new me;v.setAttribute("position",new ln(x,d)),v.setAttribute("outputDirection",new ln(A,d)),e.push(new Lt(v,null)),n>Nr&&n--}return{lodMeshes:e,sizeLods:t}}function Mf(i,t,e){let n=new Ge(i,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nv(i,t,e){return new Ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function iv(i,t,e){return new Ce({name:"SphericalGaussianBlur",defines:{SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Sf(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function bf(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tc=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ii});r.uniforms.tEquirect.value=e;let o=new Lt(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=dn),new Ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function sv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Nl||d===Fl)if(t.has(u)){let x=t.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let A=new Tc(x.height);return A.fromEquirectangularTexture(i,u),t.set(u,A),u.addEventListener("dispose",c),a(A.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,x=d===Nl||d===Fl,A=d===cs||d===Ls;if(x||A){let v=e.get(u),p=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Br(i)),v=x?n.fromEquirectangular(u,v):n.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,e.set(u,v),v.texture;if(v!==void 0)return v.texture;{let y=u.image;return x&&y&&y.height>0||A&&y&&l(y)?(n===null&&(n=new Br(i)),v=x?n.fromEquirectangular(u):n.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,e.set(u,v),u.addEventListener("dispose",h),v.texture):null}}}return u}function a(u,d){return d===Nl?u.mapping=cs:d===Fl&&(u.mapping=Ls),u}function l(u){let d=0,x=6;for(let A=0;A<x;A++)u[A]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function rv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ws("WebGLRenderer: "+n+" extension not supported."),s}}}function ov(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,x=f.attributes.position,A=0;if(x===void 0)return;if(d!==null){let y=d.array;A=d.version;for(let C=0,_=y.length;C<_;C+=3){let R=y[C+0],w=y[C+1],b=y[C+2];u.push(R,w,w,b,b,R)}}else{let y=x.array;A=x.version;for(let C=0,_=y.length/3-1;C<_;C+=3){let R=C+0,w=C+1,b=C+2;u.push(R,w,w,b,b,R)}}let v=new(x.count>=65535?_o:As)(u,1);v.version=A;let p=r.get(f);p&&t.remove(p),r.set(f,v)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function av(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let A=0;for(let v=0;v<d;v++)A+=u[v];e.update(A,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cv(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],C=0;d===!0&&(C=1),x===!0&&(C=2),A===!0&&(C=3);let _=a.attributes.position.count*C,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*R*4*f),b=new xo(w,_,R,f);b.type=Kn,b.needsUpdate=!0;let m=C*4;for(let E=0;E<f;E++){let I=v[E],D=p[E],N=y[E],L=_*R*4*E;for(let F=0;F<I.count;F++){let X=F*m;d===!0&&(s.fromBufferAttribute(I,F),w[L+X+0]=s.x,w[L+X+1]=s.y,w[L+X+2]=s.z,w[L+X+3]=0),x===!0&&(s.fromBufferAttribute(D,F),w[L+X+4]=s.x,w[L+X+5]=s.y,w[L+X+6]=s.z,w[L+X+7]=0),A===!0&&(s.fromBufferAttribute(N,F),w[L+X+8]=s.x,w[L+X+9]=s.y,w[L+X+10]=s.z,w[L+X+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:b,size:new It(_,R)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let A=0;A<c.length;A++)d+=c[A];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function hv(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var uv={[Yo]:"LINEAR_TONE_MAPPING",[Zo]:"REINHARD_TONE_MAPPING",[Jo]:"CINEON_TONE_MAPPING",[Is]:"ACES_FILMIC_TONE_MAPPING",[Ko]:"AGX_TONE_MAPPING",[jo]:"NEUTRAL_TONE_MAPPING",[$o]:"CUSTOM_TONE_MAPPING"};function dv(i,t,e,n,s,r){let o=new Ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new me;c.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ie([0,2,0,0,2,0],2));let h=new Ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Lt(c,h),u=new as(-1,1,1,-1,0,1),d=null,x=null,A=!1,v,p=null,y=[],C=!1;this.setSize=function(_,R){o.setSize(_,R),a!==null&&a.setSize(_,R),l!==null&&l.setSize(_,R);for(let w=0;w<y.length;w++){let b=y[w];b.setSize&&b.setSize(_,R)}},this.setEffects=function(_){y=_,C=y.length>0&&y[0].isRenderPass===!0;let R=o.width,w=o.height;y.length>0&&a===null&&(a=new Ge(R,w,{type:Ye,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(R,w,{type:Ye,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<y.length;b++){let m=y[b];m.setSize&&m.setSize(R,w)}},this.begin=function(_,R){if(A||_.toneMapping===fi&&y.length===0)return!1;if(p=R,R!==null){let w=R.width,b=R.height;(o.width!==w||o.height!==b)&&this.setSize(w,b)}return C===!1&&_.setRenderTarget(o),v=_.toneMapping,_.toneMapping=fi,!0},this.hasRenderPass=function(){return C},this.end=function(_,R){_.toneMapping=v,A=!0;let w=o,b=a;for(let m=0;m<y.length;m++){let M=y[m];M.enabled!==!1&&(M.render(_,b,w,R),M.needsSwap!==!1&&(w=b,b=b===a?l:a))}if(d!==_.outputColorSpace||x!==_.toneMapping){d=_.outputColorSpace,x=_.toneMapping,h.defines={},ve.getTransfer(d)===Pe&&(h.defines.SRGB_TRANSFER="");let m=uv[x];m&&(h.defines[m]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(f,u),p=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var kf=new Un,lu=new is(1,1),Wf=new xo,Xf=new fl,qf=new bo,Ef=[],wf=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function Or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ef[s];if(r===void 0&&(r=new Float32Array(s),Ef[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cc(i,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2fv(this.addr,t),mn(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;i.uniform3fv(this.addr,t),mn(e,t)}}function gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4fv(this.addr,t),mn(e,t)}}function xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Rf.set(n),i.uniformMatrix2fv(this.addr,!1,Rf),mn(e,n)}}function vv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Af.set(n),i.uniformMatrix3fv(this.addr,!1,Af),mn(e,n)}}function _v(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),mn(e,n)}}function yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2iv(this.addr,t),mn(e,t)}}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3iv(this.addr,t),mn(e,t)}}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4iv(this.addr,t),mn(e,t)}}function Ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2uiv(this.addr,t),mn(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3uiv(this.addr,t),mn(e,t)}}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4uiv(this.addr,t),mn(e,t)}}function Rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=e.isReversedDepthBuffer()?bc:Sc,r=lu):r=kf,e.setTexture2D(t||r,s)}function Cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xf,s)}function Pv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qf,s)}function Iv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wf,s)}function Lv(i){switch(i){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return Mv;case 35668:case 35672:return Sv;case 35669:case 35673:return bv;case 5125:return Ev;case 36294:return wv;case 36295:return Tv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Dv(i,t){i.uniform1fv(this.addr,t)}function Uv(i,t){let e=Or(t,this.size,2);i.uniform2fv(this.addr,e)}function Nv(i,t){let e=Or(t,this.size,3);i.uniform3fv(this.addr,e)}function Fv(i,t){let e=Or(t,this.size,4);i.uniform4fv(this.addr,e)}function Bv(i,t){let e=Or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ov(i,t){let e=Or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zv(i,t){let e=Or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hv(i,t){i.uniform1iv(this.addr,t)}function Vv(i,t){i.uniform2iv(this.addr,t)}function Gv(i,t){i.uniform3iv(this.addr,t)}function kv(i,t){i.uniform4iv(this.addr,t)}function Wv(i,t){i.uniform1uiv(this.addr,t)}function Xv(i,t){i.uniform2uiv(this.addr,t)}function qv(i,t){i.uniform3uiv(this.addr,t)}function Yv(i,t){i.uniform4uiv(this.addr,t)}function Zv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lu:o=kf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Jv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xf,r[o])}function $v(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qf,r[o])}function Kv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wf,r[o])}function jv(i){switch(i){case 5126:return Dv;case 35664:return Uv;case 35665:return Nv;case 35666:return Fv;case 35674:return Bv;case 35675:return Ov;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return kv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Kv}}var cu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lv(e.type)}},hu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jv(e.type)}},uu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function Cf(i,t){i.seq.push(t),i.map[t.id]=t}function Qv(i,t,e){let n=i.name,s=n.length;for(ou.lastIndex=0;;){let r=ou.exec(n),o=ou.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cf(e,c===void 0?new cu(a,i,t):new hu(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new uu(a),Cf(e,f)),e=f}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Qv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Pf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var t_=37297,e_=0;function n_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var If=new le;function i_(i){ve._getMatrix(If,ve.workingColorSpace,i);let t=`mat3( ${If.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case mo:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+n_(i.getShaderSource(t),a)}else return r}function s_(i,t){let e=i_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var r_={[Yo]:"Linear",[Zo]:"Reinhard",[Jo]:"Cineon",[Is]:"ACESFilmic",[Ko]:"AgX",[jo]:"Neutral",[$o]:"Custom"};function o_(i,t){let e=r_[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wc=new U;function a_(){ve.getLuminanceCoefficients(wc);let i=wc.x.toFixed(4),t=wc.y.toFixed(4),e=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function c_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ca(i){return i!==""}function Df(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(i){return i.replace(u_,f_)}var d_=new Map;function f_(i,t){let e=pe[t];if(e===void 0){let n=d_.get(t);if(n!==void 0)e=pe[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return du(e)}var p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(i){return i.replace(p_,m_)}function m_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var g_={[qo]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function x_(i){return g_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v_={[cs]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function __(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":v_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var y_={[Ls]:"ENVMAP_MODE_REFRACTION"};function M_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":y_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var S_={[zh]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function b_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":S_[i.combine]||"ENVMAP_BLENDING_NONE"}function E_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function w_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=x_(e),c=__(e),h=M_(e),f=b_(e),u=E_(e),d=l_(e),x=c_(r),A=s.createProgram(),v,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ca).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(v=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?pe.tonemapping_pars_fragment:"",e.toneMapping!==fi?o_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,s_("linearToOutputTexel",e.outputColorSpace),a_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),o=du(o),o=Df(o,e),o=Uf(o,e),a=du(a),a=Df(a,e),a=Uf(a,e),o=Nf(o),a=Nf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=y+v+o,_=y+p+a,R=Pf(s,s.VERTEX_SHADER,C),w=Pf(s,s.FRAGMENT_SHADER,_);s.attachShader(A,R),s.attachShader(A,w),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function b(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(A)||"",N=s.getShaderInfoLog(R)||"",L=s.getShaderInfoLog(w)||"",F=D.trim(),X=N.trim(),k=L.trim(),et=!0,H=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,R,w);else{let st=Lf(s,R,"vertex"),rt=Lf(s,w,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+st+`
`+rt)}else F!==""?re("WebGLProgram: Program Info Log:",F):(X===""||k==="")&&(H=!1);H&&(I.diagnostics={runnable:et,programLog:F,vertexShader:{log:X,prefix:v},fragmentShader:{log:k,prefix:p}})}s.deleteShader(R),s.deleteShader(w),m=new Fr(s,A),M=h_(s,A)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(A,t_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e_++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=R,this.fragmentShader=w,this}var T_=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pu(t),e.set(t,n)),n}},pu=class{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}};function A_(i){return i===ds||i===ra||i===oa}function R_(i,t,e,n,s,r){let o=new pr,a=new fu,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return l.add(m),m===0?"uv":`uv${m}`}function A(m,M,E,I,D,N){let L=I.fog,F=D.geometry,X=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,et=t.get(m.envMap||X,k),H=et&&et.mapping===Qo?et.image.height:null,st=d[m.type];m.precision!==null&&(u=n.getMaxPrecision(m.precision),u!==m.precision&&re("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));let rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,zt=rt!==void 0?rt.length:0,Rt=0;F.morphAttributes.position!==void 0&&(Rt=1),F.morphAttributes.normal!==void 0&&(Rt=2),F.morphAttributes.color!==void 0&&(Rt=3);let q,pt,yt,W;if(st){let he=Ii[st];q=he.vertexShader,pt=he.fragmentShader}else{q=m.vertexShader,pt=m.fragmentShader;let he=a.getVertexShaderStage(m),ue=a.getFragmentShaderStage(m);a.update(m,he,ue),yt=he.id,W=ue.id}let O=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),tt=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,Et=!!m.map,Ut=!!m.matcap,ft=!!et,dt=!!m.aoMap,gt=!!m.lightMap,xt=!!m.bumpMap&&m.wireframe===!1,St=!!m.normalMap,Ct=!!m.displacementMap,Nt=!!m.emissiveMap,z=!!m.metalnessMap,Z=!!m.roughnessMap,P=m.anisotropy>0,J=m.clearcoat>0,K=m.dispersion>0,S=m.retroreflectivity>0,g=m.iridescence>0,B=m.sheen>0,G=m.transmission>0,Q=P&&!!m.anisotropyMap,Mt=J&&!!m.clearcoatMap,ut=J&&!!m.clearcoatNormalMap,$=J&&!!m.clearcoatRoughnessMap,j=g&&!!m.iridescenceMap,vt=g&&!!m.iridescenceThicknessMap,Vt=B&&!!m.sheenColorMap,At=B&&!!m.sheenRoughnessMap,Pt=!!m.specularMap,Bt=!!m.specularColorMap,nt=!!m.specularIntensityMap,wt=G&&!!m.transmissionMap,V=G&&!!m.thicknessMap,Tt=!!m.gradientMap,ct=!!m.alphaMap,bt=m.alphaTest>0,Dt=!!m.alphaHash,_t=!!m.extensions,Gt=fi;m.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let Yt={shaderID:st,shaderType:m.type,shaderName:m.name,vertexShader:q,fragmentShader:pt,defines:m.defines,customVertexShaderID:yt,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:tt,instancingColor:tt&&D.instanceColor!==null,instancingMorph:tt&&D.morphTexture!==null,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Et,matcap:Ut,envMap:ft,envMapMode:ft&&et.mapping,envMapCubeUVHeight:H,aoMap:dt,lightMap:gt,bumpMap:xt,normalMap:St,displacementMap:Ct,emissiveMap:Nt,normalMapObjectSpace:St&&m.normalMapType===Qd,normalMapTangentSpace:St&&m.normalMapType===Mc,packedNormalMap:St&&m.normalMapType===Mc&&A_(m.normalMap.format),metalnessMap:z,roughnessMap:Z,anisotropy:P,anisotropyMap:Q,clearcoat:J,clearcoatMap:Mt,clearcoatNormalMap:ut,clearcoatRoughnessMap:$,dispersion:K,retroreflection:S,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:vt,sheen:B,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:Pt,specularColorMap:Bt,specularIntensityMap:nt,transmission:G,transmissionMap:wt,thicknessMap:V,gradientMap:Tt,opaque:m.transparent===!1&&m.blending===Ir&&m.alphaToCoverage===!1,alphaMap:ct,alphaTest:bt,alphaHash:Dt,combine:m.combine,mapUv:Et&&x(m.map.channel),aoMapUv:dt&&x(m.aoMap.channel),lightMapUv:gt&&x(m.lightMap.channel),bumpMapUv:xt&&x(m.bumpMap.channel),normalMapUv:St&&x(m.normalMap.channel),displacementMapUv:Ct&&x(m.displacementMap.channel),emissiveMapUv:Nt&&x(m.emissiveMap.channel),metalnessMapUv:z&&x(m.metalnessMap.channel),roughnessMapUv:Z&&x(m.roughnessMap.channel),anisotropyMapUv:Q&&x(m.anisotropyMap.channel),clearcoatMapUv:Mt&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(m.sheenRoughnessMap.channel),specularMapUv:Pt&&x(m.specularMap.channel),specularColorMapUv:Bt&&x(m.specularColorMap.channel),specularIntensityMapUv:nt&&x(m.specularIntensityMap.channel),transmissionMapUv:wt&&x(m.transmissionMap.channel),thicknessMapUv:V&&x(m.thicknessMap.channel),alphaMapUv:ct&&x(m.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(St||P),vertexNormals:!!F.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Et||ct),fog:!!L,useFog:m.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||F.attributes.normal===void 0&&St===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ot,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Rt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Et&&m.map.isVideoTexture===!0&&ve.getTransfer(m.map.colorSpace)===Pe,decodeVideoTextureEmissive:Nt&&m.emissiveMap.isVideoTexture===!0&&ve.getTransfer(m.emissiveMap.colorSpace)===Pe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===De,flipSided:m.side===fn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:_t&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&m.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function v(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let E in m.defines)M.push(E),M.push(m.defines[E]);return m.isRawShaderMaterial===!1&&(p(M,m),y(M,m),M.push(i.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function p(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapCubeUVHeight),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.morphAttributeCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function y(m,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function C(m){let M=d[m.type],E;if(M){let I=Ii[M];E=En.clone(I.uniforms)}else E=m.uniforms;return E}function _(m,M){let E=h.get(M);return E!==void 0?++E.usedTimes:(E=new w_(i,M,m,s),c.push(E),h.set(M,E)),E}function R(m){if(--m.usedTimes===0){let M=c.indexOf(m);c[M]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function w(m){a.remove(m)}function b(){a.dispose()}return{getParameters:A,getProgramCacheKey:v,getUniforms:C,acquireProgram:_,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:b}}function C_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function P_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Of(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,x,A,v,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:x,materialVariant:o(u),groupOrder:A,renderOrder:u.renderOrder,z:v,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=x,y.materialVariant=o(u),y.groupOrder=A,y.renderOrder=u.renderOrder,y.z=v,y.group=p),t++,y}function l(u,d,x,A,v,p,y){y.reversedDepth===!0&&(v=-v);let C=a(u,d,x,A,v,p);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):e.push(C)}function c(u,d,x,A,v,p){let y=a(u,d,x,A,v,p);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||P_),n.length>1&&n.sort(d||Bf),s.length>1&&s.sort(d||Bf)}function f(){for(let u=t,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function I_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Of,i.set(n,[o])):s>=r.length?(o=new Of,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ft};break;case"SpotLight":e={position:new U,direction:new U,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function D_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var U_=0;function N_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F_(i){let t=new L_,e=D_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ae,o=new ae;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,x=0,A=0,v=0,p=0,y=0,C=0,_=0,R=0,w=0,b=0,m=0,M=0,E=0;c.sort(N_);for(let D=0,N=c.length;D<N;D++){let L=c[D],F=L.color,X=L.intensity,k=L.distance,et=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ds?et=L.shadow.map.texture:et=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*X,f+=F.g*X,u+=F.b*X;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],X);E++}else if(L.isSunLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[x]=rt,n.sunShadowMap[x]=et;let zt=st.getViewportCount();for(let Rt=0;Rt<zt;Rt++)n.sunShadowMatrix[A+Rt]=st.getMatrix(Rt),n.sunShadowCascade[A+Rt]=st._cascadeData[Rt];A+=zt,x++}n.sun[d]=H,d++}else if(L.isDirectionalLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.directionalShadow[v]=rt,n.directionalShadowMap[v]=et,n.directionalShadowMatrix[v]=L.shadow.matrix,R++}n.directional[v]=H,v++}else if(L.isSpotLight){let H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(F).multiplyScalar(X),H.distance=k,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[y]=H;let st=L.shadow;if(L.map&&(n.spotLightMap[m]=L.map,m++,st.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[y]=st.matrix,L.castShadow){let rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.spotShadow[y]=rt,n.spotShadowMap[y]=et,b++}y++}else if(L.isRectAreaLight){let H=t.get(L);H.color.copy(F).multiplyScalar(X),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=H,C++}else if(L.isPointLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let st=L.shadow,rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,rt.shadowCameraNear=st.camera.near,rt.shadowCameraFar=st.camera.far,n.pointShadow[p]=rt,n.pointShadowMap[p]=et,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=H,p++}else if(L.isHemisphereLight){let H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(X),H.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[_]=H,_++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==v||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==C||I.hemiLength!==_||I.numSunShadows!==x||I.numDirectionalShadows!==R||I.numPointShadows!==w||I.numSpotShadows!==b||I.numSpotMaps!==m||I.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=v,n.spot.length=y,n.rectArea.length=C,n.point.length=p,n.hemi.length=_,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+m-M,n.spotLightMap.length=m,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,I.sunLength=d,I.directionalLength=v,I.pointLength=p,I.spotLength=y,I.rectAreaLength=C,I.hemiLength=_,I.numSunShadows=x,I.numDirectionalShadows=R,I.numPointShadows=w,I.numSpotShadows=b,I.numSpotMaps=m,I.numLightProbes=E,n.version=U_++)}function l(c,h){let f=0,u=0,d=0,x=0,A=0,v=0,p=h.matrixWorldInverse;for(let y=0,C=c.length;y<C;y++){let _=c[y];if(_.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(_.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(_.isRectAreaLight){let R=n.rectArea[A];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),A++}else if(_.isPointLight){let R=n.point[d];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let R=n.hemi[v];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function zf(i){let t=new F_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function B_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zf(i),t.set(s,[a])):r>=o.length?(a=new zf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
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
}`,H_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],V_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Hf=new ae,la=new U,au=new U;function G_(i,t,e){let n=new _r,s=new It,r=new It,o=new Ee,a=new Rr,l=new Ml,c={},h=e.maxTextureSize,f={[Ci]:fn,[fn]:Ci,[De]:De},u=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:O_,fragmentShader:z_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new me;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Lt(x,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let p=this.type;this.render=function(w,b,m){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===Ul&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qo);let M=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ii),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&b.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=w.length;L<F;L++){let X=w[L],k=X.shadow;if(k===void 0){re("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let et=k.getFrameExtents();s.multiply(et),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,k.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=H,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Pr){if(X.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ge(s.x,s.y,{format:ds,type:Ye,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new is(s.x,s.y,Kn),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=wi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n}else X.isPointLight?(k.map=new Tc(s.x),k.map.depthTexture=new xl(s.x,pi)):(k.map=new Ge(s.x,s.y),k.map.depthTexture=new is(s.x,s.y,pi)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=wi,this.type===qo?(k.map.depthTexture.compareFunction=H?bc:Sc,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let st=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,m);for(let rt=0;rt<st;rt++){let zt=k.getCamera(rt);if(X.isPointLight){let Rt=k.camera,q=k.matrix,pt=X.distance||Rt.far;pt!==Rt.far&&(Rt.far=pt,Rt.updateProjectionMatrix()),la.setFromMatrixPosition(X.matrixWorld),Rt.position.copy(la),au.copy(Rt.position),au.add(H_[rt]),Rt.up.copy(V_[rt]),Rt.lookAt(au),Rt.updateMatrixWorld(),q.makeTranslation(-la.x,-la.y,-la.z),Hf.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Hf,Rt.coordinateSystem,Rt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(k.map),i.clear());let Rt=k.getViewport(rt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),D.viewport(o)}n=k.getFrustum(rt),_(b,m,zt,X,this.type)}k.isPointLightShadow!==!0&&this.type===Pr&&y(k,m),k.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(M,E,I)};function y(w,b){let m=t.update(A);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ge(s.x,s.y,{format:ds,type:Ye}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,m,u,A,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,m,d,A,null)}function C(w,b,m,M){let E=null,I=m.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)E=I;else if(E=m.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let D=E.uuid,N=b.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let F=L[N];F===void 0&&(F=E.clone(),L[N]=F,b.addEventListener("dispose",R)),E=F}if(E.visible=b.visible,E.wireframe=b.wireframe,M===Pr?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,m.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=i.properties.get(E);D.light=m}return E}function _(w,b,m,M,E){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Pr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,w.matrixWorld);let N=t.update(w),L=w.material;if(Array.isArray(L)){let F=N.groups;for(let X=0,k=F.length;X<k;X++){let et=F[X],H=L[et.materialIndex];if(H&&H.visible){let st=C(w,H,M,E);w.onBeforeShadow(i,w,b,m,N,st,et),i.renderBufferDirect(m,null,N,st,w,et),w.onAfterShadow(i,w,b,m,N,st,et)}}}else if(L.visible){let F=C(w,L,M,E);w.onBeforeShadow(i,w,b,m,N,F,null),i.renderBufferDirect(m,null,N,F,w,null),w.onAfterShadow(i,w,b,m,N,F,null)}}let D=w.children;for(let N=0,L=D.length;N<L;N++)_(D[N],b,m,M,E)}function R(w){w.target.removeEventListener("dispose",R);for(let m in c){let M=c[m],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function k_(i,t){function e(){let V=!1,Tt=new Ee,ct=null,bt=new Ee(0,0,0,0);return{setMask:function(Dt){ct!==Dt&&!V&&(i.colorMask(Dt,Dt,Dt,Dt),ct=Dt)},setLocked:function(Dt){V=Dt},setClear:function(Dt,_t,Gt,Yt,he){he===!0&&(Dt*=Yt,_t*=Yt,Gt*=Yt),Tt.set(Dt,_t,Gt,Yt),bt.equals(Tt)===!1&&(i.clearColor(Dt,_t,Gt,Yt),bt.copy(Tt))},reset:function(){V=!1,ct=null,bt.set(-1,0,0,0)}}}function n(){let V=!1,Tt=!1,ct=null,bt=null,Dt=null;return{setReversed:function(_t){if(Tt!==_t){let Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;let Yt=Dt;Dt=null,this.setClear(Yt)}},getReversed:function(){return Tt},setTest:function(_t){_t?O(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(_t){ct!==_t&&!V&&(i.depthMask(_t),ct=_t)},setFunc:function(_t){if(Tt&&(_t=df[_t]),bt!==_t){switch(_t){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=_t}},setLocked:function(_t){V=_t},setClear:function(_t){Dt!==_t&&(Dt=_t,Tt&&(_t=1-_t),i.clearDepth(_t))},reset:function(){V=!1,ct=null,bt=null,Dt=null,Tt=!1}}}function s(){let V=!1,Tt=null,ct=null,bt=null,Dt=null,_t=null,Gt=null,Yt=null,he=null;return{setTest:function(ue){V||(ue?O(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(ue){Tt!==ue&&!V&&(i.stencilMask(ue),Tt=ue)},setFunc:function(ue,Ke,xn){(ct!==ue||bt!==Ke||Dt!==xn)&&(i.stencilFunc(ue,Ke,xn),ct=ue,bt=Ke,Dt=xn)},setOp:function(ue,Ke,xn){(_t!==ue||Gt!==Ke||Yt!==xn)&&(i.stencilOp(ue,Ke,xn),_t=ue,Gt=Ke,Yt=xn)},setLocked:function(ue){V=ue},setClear:function(ue){he!==ue&&(i.clearStencil(ue),he=ue)},reset:function(){V=!1,Tt=null,ct=null,bt=null,Dt=null,_t=null,Gt=null,Yt=null,he=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,x=[],A=null,v=!1,p=null,y=null,C=null,_=null,R=null,w=null,b=null,m=new Ft(0,0,0),M=0,E=!1,I=null,D=null,N=null,L=null,F=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,et=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=et>=2);let st=null,rt={},zt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),q=new Ee().fromArray(zt),pt=new Ee().fromArray(Rt);function yt(V,Tt,ct,bt){let Dt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(V,_t),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<ct;Gt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Tt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return _t}let W={};W[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(i.DEPTH_TEST),o.setFunc(cr),xt(!1),St(Uh),O(i.CULL_FACE),dt(ii);function O(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function ot(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function tt(V,Tt){return u[V]!==Tt?(i.bindFramebuffer(V,Tt),u[V]=Tt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function it(V,Tt){let ct=x,bt=!1;if(V){ct=d.get(Tt),ct===void 0&&(ct=[],d.set(Tt,ct));let Dt=V.textures;if(ct.length!==Dt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Gt=Dt.length;_t<Gt;_t++)ct[_t]=i.COLOR_ATTACHMENT0+_t;ct.length=Dt.length,bt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,bt=!0);bt&&i.drawBuffers(ct)}function Et(V){return A!==V?(i.useProgram(V),A=V,!0):!1}let Ut={[Ps]:i.FUNC_ADD,[Id]:i.FUNC_SUBTRACT,[Ld]:i.FUNC_REVERSE_SUBTRACT};Ut[Dd]=i.MIN,Ut[Ud]=i.MAX;let ft={[Nd]:i.ZERO,[Fd]:i.ONE,[Bd]:i.SRC_COLOR,[Bh]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[Oh]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(V,Tt,ct,bt,Dt,_t,Gt,Yt,he,ue){if(V===ii){v===!0&&(ot(i.BLEND),v=!1);return}if(v===!1&&(O(i.BLEND),v=!0),V!==Pd){if(V!==p||ue!==E){if((y!==Ps||R!==Ps)&&(i.blendEquation(i.FUNC_ADD),y=Ps,R=Ps),ue)switch(V){case Ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",V);break}else switch(V){case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",V);break}C=null,_=null,w=null,b=null,m.set(0,0,0),M=0,p=V,E=ue}return}Dt=Dt||Tt,_t=_t||ct,Gt=Gt||bt,(Tt!==y||Dt!==R)&&(i.blendEquationSeparate(Ut[Tt],Ut[Dt]),y=Tt,R=Dt),(ct!==C||bt!==_||_t!==w||Gt!==b)&&(i.blendFuncSeparate(ft[ct],ft[bt],ft[_t],ft[Gt]),C=ct,_=bt,w=_t,b=Gt),(Yt.equals(m)===!1||he!==M)&&(i.blendColor(Yt.r,Yt.g,Yt.b,he),m.copy(Yt),M=he),p=V,E=!1}function gt(V,Tt){V.side===De?ot(i.CULL_FACE):O(i.CULL_FACE);let ct=V.side===fn;Tt&&(ct=!ct),xt(ct),V.blending===Ir&&V.transparent===!1?dt(ii):dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let bt=V.stencilWrite;a.setTest(bt),bt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Nt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(V){I!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),I=V)}function St(V){V!==Rd?(O(i.CULL_FACE),V!==D&&(V===Uh?i.cullFace(i.BACK):V===Cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),D=V}function Ct(V){V!==N&&(k&&i.lineWidth(V),N=V)}function Nt(V,Tt,ct){V?(O(i.POLYGON_OFFSET_FILL),(L!==Tt||F!==ct)&&(L=Tt,F=ct,o.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ct))):ot(i.POLYGON_OFFSET_FILL)}function z(V){V?O(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function Z(V){V===void 0&&(V=i.TEXTURE0+X-1),st!==V&&(i.activeTexture(V),st=V)}function P(V,Tt,ct){ct===void 0&&(st===null?ct=i.TEXTURE0+X-1:ct=st);let bt=rt[ct];bt===void 0&&(bt={type:void 0,texture:void 0},rt[ct]=bt),(bt.type!==V||bt.texture!==Tt)&&(st!==ct&&(i.activeTexture(ct),st=ct),i.bindTexture(V,Tt||W[V]),bt.type=V,bt.texture=Tt)}function J(){let V=rt[st];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function g(){try{i.texSubImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function B(){try{i.texSubImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function Mt(){try{i.texStorage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function ut(){try{i.texStorage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function $(){try{i.texImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function j(){try{i.texImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function vt(V){return f[V]!==void 0?f[V]:i.getParameter(V)}function Vt(V,Tt){f[V]!==Tt&&(i.pixelStorei(V,Tt),f[V]=Tt)}function At(V){q.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),q.copy(V))}function Pt(V){pt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),pt.copy(V))}function Bt(V,Tt){let ct=c.get(Tt);ct===void 0&&(ct=new WeakMap,c.set(Tt,ct));let bt=ct.get(V);bt===void 0&&(bt=i.getUniformBlockIndex(Tt,V.name),ct.set(V,bt))}function nt(V,Tt){let bt=c.get(Tt).get(V);l.get(Tt)!==bt&&(i.uniformBlockBinding(Tt,bt,V.__bindingPointIndex),l.set(Tt,bt))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},st=null,rt={},u={},d=new WeakMap,x=[],A=null,v=!1,p=null,y=null,C=null,_=null,R=null,w=null,b=null,m=new Ft(0,0,0),M=0,E=!1,I=null,D=null,N=null,L=null,F=null,q.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:ot,bindFramebuffer:tt,drawBuffers:it,useProgram:Et,setBlending:dt,setMaterial:gt,setFlipSided:xt,setCullFace:St,setLineWidth:Ct,setPolygonOffset:Nt,setScissorTest:z,activeTexture:Z,bindTexture:P,unbindTexture:J,compressedTexImage2D:K,compressedTexImage3D:S,texImage2D:$,texImage3D:j,pixelStorei:Vt,getParameter:vt,updateUBOMapping:Bt,uniformBlockBinding:nt,texStorage2D:Mt,texStorage3D:ut,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Q,scissor:At,viewport:Pt,reset:wt}}function W_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,f=new Set,u,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,g){return x?new OffscreenCanvas(S,g):go("canvas")}function v(S,g,B){let G=1,Q=K(S);if((Q.width>B||Q.height>B)&&(G=B/Math.max(Q.width,Q.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Mt=Math.floor(G*Q.width),ut=Math.floor(G*Q.height);u===void 0&&(u=A(Mt,ut));let $=g?A(Mt,ut):u;return $.width=Mt,$.height=ut,$.getContext("2d").drawImage(S,0,0,Mt,ut),re("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Mt+"x"+ut+")."),$}else return"data"in S&&re("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function p(S){return S.generateMipmaps}function y(S){i.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(S,g,B,G,Q,Mt=!1){if(S!==null){if(i[S]!==void 0)return i[S];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ut;G&&(ut=t.get("EXT_texture_norm16"),ut||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ut&&($=ut.R16_EXT),B===i.SHORT&&ut&&($=ut.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),g===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ut&&($=ut.RG16_EXT),B===i.SHORT&&ut&&($=ut.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&ut&&($=ut.RGB16_EXT),B===i.SHORT&&ut&&($=ut.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let j=Mt?mo:ve.getTransfer(Q);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=j===Pe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ut&&($=ut.RGBA16_EXT),B===i.SHORT&&ut&&($=ut.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function R(S,g){let B;return S?g===null||g===pi||g===Dr?B=i.DEPTH24_STENCIL8:g===Kn?B=i.DEPTH32F_STENCIL8:g===Lr&&(B=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pi||g===Dr?B=i.DEPTH_COMPONENT24:g===Kn?B=i.DEPTH_COMPONENT32F:g===Lr&&(B=i.DEPTH_COMPONENT16),B}function w(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==_n&&S.minFilter!==dn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function b(S){let g=S.target;g.removeEventListener("dispose",b),M(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function m(S){let g=S.target;g.removeEventListener("dispose",m),I(g)}function M(S){let g=n.get(S);if(g.__webglInit===void 0)return;let B=S.source,G=d.get(B);if(G){let Q=G[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(S),Object.keys(G).length===0&&d.delete(B)}n.remove(S)}function E(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let B=S.source,G=d.get(B);delete G[g.__cacheKey],o.memory.textures--}function I(S){let g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let Q=0;Q<g.__webglFramebuffer[G].length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[G][Q]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=S.textures;for(let G=0,Q=B.length;G<Q;G++){let Mt=n.get(B[G]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(B[G])}n.remove(S)}let D=0;function N(){D=0}function L(){return D}function F(S){D=S}function X(){let S=D;return S>=s.maxTextures&&re("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,S}function k(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function et(S,g){let B=n.get(S);if(S.isVideoTexture&&P(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let G=S.image;if(G===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(B,S,g);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function H(S,g){let B=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){ot(B,S,g);return}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function st(S,g){let B=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){ot(B,S,g);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function rt(S,g){let B=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version){tt(B,S,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let zt={[Ts]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},Rt={[_n]:i.NEAREST,[Kd]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},q={[ef]:i.NEVER,[af]:i.ALWAYS,[nf]:i.LESS,[Sc]:i.LEQUAL,[sf]:i.EQUAL,[bc]:i.GEQUAL,[rf]:i.GREATER,[of]:i.NOTEQUAL};function pt(S,g){if(g.type===Kn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===dn||g.magFilter===Bl||g.magFilter===ta||g.magFilter===hs||g.minFilter===dn||g.minFilter===Bl||g.minFilter===ta||g.minFilter===hs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,zt[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,zt[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,zt[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Rt[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Rt[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,q[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===_n||g.minFilter!==ta&&g.minFilter!==hs||g.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function yt(S,g){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",b));let G=g.source,Q=d.get(G);Q===void 0&&(Q={},d.set(G,Q));let Mt=k(g);if(Mt!==S.__cacheKey){Q[Mt]===void 0&&(Q[Mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[Mt].usedTimes++;let ut=Q[S.__cacheKey];ut!==void 0&&(Q[S.__cacheKey].usedTimes--,ut.usedTimes===0&&E(g)),S.__cacheKey=Mt,S.__webglTexture=Q[Mt].texture}return B}function W(S,g,B){return Math.floor(Math.floor(S/B)/g)}function O(S,g,B,G){let Mt=S.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,G,g.data);else{Mt.sort((Vt,At)=>Vt.start-At.start);let ut=0;for(let Vt=1;Vt<Mt.length;Vt++){let At=Mt[ut],Pt=Mt[Vt],Bt=At.start+At.count,nt=W(Pt.start,g.width,4),wt=W(At.start,g.width,4);Pt.start<=Bt+1&&nt===wt&&W(Pt.start+Pt.count-1,g.width,4)===nt?At.count=Math.max(At.count,Pt.start+Pt.count-At.start):(++ut,Mt[ut]=Pt)}Mt.length=ut+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Vt=0,At=Mt.length;Vt<At;Vt++){let Pt=Mt[Vt],Bt=Math.floor(Pt.start/4),nt=Math.ceil(Pt.count/4),wt=Bt%g.width,V=Math.floor(Bt/g.width),Tt=nt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,wt,V,Tt,ct,B,G,g.data)}S.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function ot(S,g,B){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);let Q=yt(S,g),Mt=g.source;e.bindTexture(G,S.__webglTexture,i.TEXTURE0+B);let ut=n.get(Mt);if(Mt.version!==ut.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let ct=ve.getPrimaries(ve.workingColorSpace),bt=g.colorSpace===Vi?null:ve.getPrimaries(g.colorSpace),Dt=g.colorSpace===Vi||ct===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=v(g.image,!1,s.maxTextureSize);j=J(g,j);let vt=r.convert(g.format,g.colorSpace),Vt=r.convert(g.type),At=_(g.internalFormat,vt,Vt,g.normalized,g.colorSpace,g.isVideoTexture);pt(G,g);let Pt,Bt=g.mipmaps,nt=g.isVideoTexture!==!0,wt=ut.__version===void 0||Q===!0,V=Mt.dataReady,Tt=w(g,j);if(g.isDepthTexture)At=R(g.format===us,g.type),wt&&(nt?e.texStorage2D(i.TEXTURE_2D,1,At,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,vt,Vt,null));else if(g.isDataTexture)if(Bt.length>0){nt&&wt&&e.texStorage2D(i.TEXTURE_2D,Tt,At,Bt[0].width,Bt[0].height);for(let ct=0,bt=Bt.length;ct<bt;ct++)Pt=Bt[ct],nt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,vt,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,ct,At,Pt.width,Pt.height,0,vt,Vt,Pt.data);g.generateMipmaps=!1}else nt?(wt&&e.texStorage2D(i.TEXTURE_2D,Tt,At,j.width,j.height),V&&O(g,j,vt,Vt)):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,vt,Vt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){nt&&wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,At,Bt[0].width,Bt[0].height,j.depth);for(let ct=0,bt=Bt.length;ct<bt;ct++)if(Pt=Bt[ct],g.format!==jn)if(vt!==null)if(nt){if(V)if(g.layerUpdates.size>0){let Dt=eu(Pt.width,Pt.height,g.format,g.type);for(let _t of g.layerUpdates){let Gt=Pt.data.subarray(_t*Dt/Pt.data.BYTES_PER_ELEMENT,(_t+1)*Dt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,_t,Pt.width,Pt.height,1,vt,Gt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,j.depth,vt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,At,Pt.width,Pt.height,j.depth,0,Pt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,j.depth,vt,Vt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,At,Pt.width,Pt.height,j.depth,0,vt,Vt,Pt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{nt&&wt&&e.texStorage2D(i.TEXTURE_2D,Tt,At,Bt[0].width,Bt[0].height);for(let ct=0,bt=Bt.length;ct<bt;ct++)Pt=Bt[ct],g.format!==jn?vt!==null?nt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,vt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,At,Pt.width,Pt.height,0,Pt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,vt,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,ct,At,Pt.width,Pt.height,0,vt,Vt,Pt.data)}else if(g.isDataArrayTexture)if(nt){if(wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,At,j.width,j.height,j.depth),V)if(g.layerUpdates.size>0){let ct=eu(j.width,j.height,g.format,g.type);for(let bt of g.layerUpdates){let Dt=j.data.subarray(bt*ct/j.data.BYTES_PER_ELEMENT,(bt+1)*ct/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,j.width,j.height,1,vt,Vt,Dt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,vt,Vt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,j.width,j.height,j.depth,0,vt,Vt,j.data);else if(g.isData3DTexture)nt?(wt&&e.texStorage3D(i.TEXTURE_3D,Tt,At,j.width,j.height,j.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,vt,Vt,j.data)):e.texImage3D(i.TEXTURE_3D,0,At,j.width,j.height,j.depth,0,vt,Vt,j.data);else if(g.isFramebufferTexture){if(wt)if(nt)e.texStorage2D(i.TEXTURE_2D,Tt,At,j.width,j.height);else{let ct=j.width,bt=j.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,At,ct,bt,0,vt,Vt,null),ct>>=1,bt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),j.parentNode!==ct){ct.appendChild(j),f.add(g),ct.onpaint=bt=>{let Dt=bt.changedElements;for(let _t of f)Dt.includes(_t.image)&&(_t.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Dt=i.RGBA,_t=i.RGBA,Gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,_t,Gt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(nt&&wt){let ct=K(Bt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,At,ct.width,ct.height)}for(let ct=0,bt=Bt.length;ct<bt;ct++)Pt=Bt[ct],nt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,vt,Vt,Pt):e.texImage2D(i.TEXTURE_2D,ct,At,vt,Vt,Pt);g.generateMipmaps=!1}else if(nt){if(wt){let ct=K(j);e.texStorage2D(i.TEXTURE_2D,Tt,At,ct.width,ct.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Vt,j)}else e.texImage2D(i.TEXTURE_2D,0,At,vt,Vt,j);p(g)&&y(G),ut.__version=Mt.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function tt(S,g,B){if(g.image.length!==6)return;let G=yt(S,g),Q=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+B);let Mt=n.get(Q);if(Q.version!==Mt.__version||G===!0){e.activeTexture(i.TEXTURE0+B);let ut=ve.getPrimaries(ve.workingColorSpace),$=g.colorSpace===Vi?null:ve.getPrimaries(g.colorSpace),j=g.colorSpace===Vi||ut===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let vt=g.isCompressedTexture||g.image[0].isCompressedTexture,Vt=g.image[0]&&g.image[0].isDataTexture,At=[];for(let _t=0;_t<6;_t++)!vt&&!Vt?At[_t]=v(g.image[_t],!0,s.maxCubemapSize):At[_t]=Vt?g.image[_t].image:g.image[_t],At[_t]=J(g,At[_t]);let Pt=At[0],Bt=r.convert(g.format,g.colorSpace),nt=r.convert(g.type),wt=_(g.internalFormat,Bt,nt,g.normalized,g.colorSpace),V=g.isVideoTexture!==!0,Tt=Mt.__version===void 0||G===!0,ct=Q.dataReady,bt=w(g,Pt);pt(i.TEXTURE_CUBE_MAP,g);let Dt;if(vt){V&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,wt,Pt.width,Pt.height);for(let _t=0;_t<6;_t++){Dt=At[_t].mipmaps;for(let Gt=0;Gt<Dt.length;Gt++){let Yt=Dt[Gt];g.format!==jn?Bt!==null?V?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,Yt.width,Yt.height,Bt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,wt,Yt.width,Yt.height,0,Yt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,Yt.width,Yt.height,Bt,nt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,wt,Yt.width,Yt.height,0,Bt,nt,Yt.data)}}}else{if(Dt=g.mipmaps,V&&Tt){Dt.length>0&&bt++;let _t=K(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,wt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Vt){V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,At[_t].width,At[_t].height,Bt,nt,At[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,wt,At[_t].width,At[_t].height,0,Bt,nt,At[_t].data);for(let Gt=0;Gt<Dt.length;Gt++){let he=Dt[Gt].image[_t].image;V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,he.width,he.height,Bt,nt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,wt,he.width,he.height,0,Bt,nt,he.data)}}else{V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt,nt,At[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,wt,Bt,nt,At[_t]);for(let Gt=0;Gt<Dt.length;Gt++){let Yt=Dt[Gt];V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Bt,nt,Yt.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,wt,Bt,nt,Yt.image[_t])}}}p(g)&&y(i.TEXTURE_CUBE_MAP),Mt.__version=Q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function it(S,g,B,G,Q,Mt){let ut=r.convert(B.format,B.colorSpace),$=r.convert(B.type),j=_(B.internalFormat,ut,$,B.normalized,B.colorSpace),vt=n.get(g),Vt=n.get(B);if(Vt.__renderTarget=g,!vt.__hasExternalTextures){let At=Math.max(1,g.width>>Mt),Pt=Math.max(1,g.height>>Mt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Mt,j,At,Pt,g.depth,0,ut,$,null):e.texImage2D(Q,Mt,j,At,Pt,0,ut,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Z(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Q,Vt.__webglTexture,0,z(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Q,Vt.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(S,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let G=g.depthTexture,Q=G&&G.isDepthTexture?G.type:null,Mt=R(g.stencilBuffer,Q),ut=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Z(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z(g),Mt,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,z(g),Mt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,S)}else{let G=g.textures;for(let Q=0;Q<G.length;Q++){let Mt=G[Q],ut=r.convert(Mt.format,Mt.colorSpace),$=r.convert(Mt.type),j=_(Mt.internalFormat,ut,$,Mt.normalized,Mt.colorSpace);Z(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z(g),j,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,z(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(S,g,B){let G=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),pt(i.TEXTURE_CUBE_MAP,g.depthTexture);let vt=r.convert(g.depthTexture.format),Vt=r.convert(g.depthTexture.type),At;g.depthTexture.format===wi?At=i.DEPTH_COMPONENT24:g.depthTexture.format===us&&(At=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,At,g.width,g.height,0,vt,Vt,null)}}else et(g.depthTexture,0);let Mt=Q.__webglTexture,ut=z(g),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,j=g.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===wi)Z(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,Mt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,Mt,0);else if(g.depthTexture.format===us)Z(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,Mt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(S){let g=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let G=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",Q)};G.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=G}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)Ut(g.__webglFramebuffer[G],S,G);else{let G=S.texture.mipmaps;G&&G.length>0?Ut(g.__webglFramebuffer[0],S,0):Ut(g.__webglFramebuffer,S,0)}else if(B){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),Et(g.__webglDepthbuffer[G],S,!1);else{let Q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Mt)}}else{let G=S.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Et(g.__webglDepthbuffer,S,!1);else{let Q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(S,g,B){let G=n.get(S);g!==void 0&&it(G.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ft(S)}function gt(S){let g=S.texture,B=n.get(S),G=n.get(g);S.addEventListener("dispose",m);let Q=S.textures,Mt=S.isWebGLCubeRenderTarget===!0,ut=Q.length>1;if(ut||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,o.memory.textures++),Mt){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let j=0;j<g.mipmaps.length;j++)B.__webglFramebuffer[$][j]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let $=0,j=Q.length;$<j;$++){let vt=n.get(Q[$]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&Z(S)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let j=Q[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let vt=r.convert(j.format,j.colorSpace),Vt=r.convert(j.type),At=_(j.internalFormat,vt,Vt,j.normalized,j.colorSpace,S.isXRRenderTarget===!0),Pt=z(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,At,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),pt(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)it(B.__webglFramebuffer[$][j],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else it(B.__webglFramebuffer[$],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(g)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let $=0,j=Q.length;$<j;$++){let vt=Q[$],Vt=n.get(vt),At=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(At=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Vt.__webglTexture),pt(At,vt),it(B.__webglFramebuffer,S,vt,i.COLOR_ATTACHMENT0+$,At,0),p(vt)&&y(At)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&($=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),pt($,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)it(B.__webglFramebuffer[j],S,g,i.COLOR_ATTACHMENT0,$,j);else it(B.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,$,0);p(g)&&y($),e.unbindTexture()}S.depthBuffer&&ft(S)}function xt(S){let g=S.textures;for(let B=0,G=g.length;B<G;B++){let Q=g[B];if(p(Q)){let Mt=C(S),ut=n.get(Q).__webglTexture;e.bindTexture(Mt,ut),y(Mt),e.unbindTexture()}}}let St=[],Ct=[];function Nt(S){if(S.samples>0){if(Z(S)===!1){let g=S.textures,B=S.width,G=S.height,Q=i.COLOR_BUFFER_BIT,Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(S),$=g.length>1;if($)for(let vt=0;vt<g.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let j=S.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let vt=0;vt<g.length;vt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let Vt=n.get(g[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,Q,i.NEAREST),l===!0&&(St.length=0,Ct.length=0,St.push(i.COLOR_ATTACHMENT0+vt),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(St.push(Mt),Ct.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let vt=0;vt<g.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let Vt=n.get(g[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function z(S){return Math.min(s.maxSamples,S.samples)}function Z(S){let g=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(S){let g=o.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function J(S,g){let B=S.colorSpace,G=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==po&&B!==Vi&&(ve.getTransfer(B)===Pe?(G!==jn||Q!==Wn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",B)),g}function K(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=et,this.setTexture2DArray=H,this.setTexture3D=st,this.setTextureCube=rt,this.rebindTextures=dt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Z,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function X_(i,t){function e(n,s=Vi){let r,o=ve.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Ye)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===jn)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===Vl)return i.RED;if(n===Gl)return i.RED_INTEGER;if(n===ds)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(o===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===Zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===$l||n===Kl||n===jl||n===Ql||n===ra||n===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===$l)return o===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===_c||n===oa||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Eo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:q_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends Ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,A=typeof XRWebGLBinding<"u",v=new mu,p={},y=e.getContextAttributes(),C=null,_=null,R=[],w=[],b=new It,m=null,M=null,E=new un;E.viewport=new Ee;let I=new un;I.viewport=new Ee;let D=[E,I],N=new Dl,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let O=R[W];return O===void 0&&(O=new mr,R[W]=O),O.getTargetRaySpace()},this.getControllerGrip=function(W){let O=R[W];return O===void 0&&(O=new mr,R[W]=O),O.getGripSpace()},this.getHand=function(W){let O=R[W];return O===void 0&&(O=new mr,R[W]=O),O.getHandSpace()};function X(W){let O=w.indexOf(W.inputSource);if(O===-1)return;let ot=R[O];ot!==void 0&&(ot.update(W.inputSource,W.frame,c||o),ot.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",et);for(let W=0;W<R.length;W++){let O=w[W];O!==null&&(w[W]=null,R[W].disconnect(O))}L=null,F=null,v.reset();for(let W in p)delete p[W];if(t.setRenderTarget(C),d=null,u=null,f=null,s=null,_=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(m),t.setSize(b.width,b.height,!1),M!==null){let W=M.camera;W.fov=M.fov,W.zoom=M.zoom,W.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",k),s.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),m=t.getPixelRatio(),t.getSize(b),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,tt=null,it=null;y.depth&&(it=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?us:wi,tt=y.stencil?Dr:pi);let Et={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Et),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Ge(u.textureWidth,u.textureHeight,{format:jn,type:Wn,depthTexture:new is(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ge(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function et(W){for(let O=0;O<W.removed.length;O++){let ot=W.removed[O],tt=w.indexOf(ot);tt>=0&&(w[tt]=null,R[tt].disconnect(ot))}for(let O=0;O<W.added.length;O++){let ot=W.added[O],tt=w.indexOf(ot);if(tt===-1){for(let Et=0;Et<R.length;Et++)if(Et>=w.length){w.push(ot),tt=Et;break}else if(w[Et]===null){w[Et]=ot,tt=Et;break}if(tt===-1)break}let it=R[tt];it&&it.connect(ot)}}let H=new U,st=new U;function rt(W,O,ot){H.setFromMatrixPosition(O.matrixWorld),st.setFromMatrixPosition(ot.matrixWorld);let tt=H.distanceTo(st),it=O.projectionMatrix.elements,Et=ot.projectionMatrix.elements,Ut=it[14]/(it[10]-1),ft=it[14]/(it[10]+1),dt=(it[9]+1)/it[5],gt=(it[9]-1)/it[5],xt=(it[8]-1)/it[0],St=(Et[8]+1)/Et[0],Ct=Ut*xt,Nt=Ut*St,z=tt/(-xt+St),Z=z*-xt;if(O.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Z),W.translateZ(z),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),it[10]===-1)W.projectionMatrix.copy(O.projectionMatrix),W.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let P=Ut+z,J=ft+z,K=Ct-Z,S=Nt+(tt-Z),g=dt*ft/J*P,B=gt*ft/J*P;W.projectionMatrix.makePerspective(K,S,g,B,P,J),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function zt(W,O){O===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(O.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let O=W.near,ot=W.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(ot=v.depthFar)),N.near=I.near=E.near=O,N.far=I.far=E.far=ot,(L!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,F=N.far),N.layers.mask=W.layers.mask|6,E.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let tt=W.parent,it=N.cameras;zt(N,tt);for(let Et=0;Et<it.length;Et++)zt(it[Et],tt);it.length===2?rt(N,E,I):N.projectionMatrix.copy(E.projectionMatrix),M===null&&W.isPerspectiveCamera&&(M={camera:W,fov:W.fov,zoom:W.zoom}),Rt(W,N,tt)};function Rt(W,O,ot){ot===null?W.matrix.copy(O.matrixWorld):(W.matrix.copy(ot.matrixWorld),W.matrix.invert(),W.matrix.multiply(O.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(O.projectionMatrix),W.projectionMatrixInverse.copy(O.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=dr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(N)},this.getCameraTexture=function(W){return p[W]};let q=null;function pt(W,O){if(h=O.getViewerPose(c||o),x=O,h!==null){let ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let tt=!1;ot.length!==N.cameras.length&&(N.cameras.length=0,tt=!0);for(let ft=0;ft<ot.length;ft++){let dt=ot[ft],gt=null;if(d!==null)gt=d.getViewport(dt);else{let St=f.getViewSubImage(u,dt);gt=St.viewport,ft===0&&(t.setRenderTargetTextures(_,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(_))}let xt=D[ft];xt===void 0&&(xt=new un,xt.layers.enable(ft),xt.viewport=new Ee,D[ft]=xt),xt.matrix.fromArray(dt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(dt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(gt.x,gt.y,gt.width,gt.height),ft===0&&(N.matrix.copy(xt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),tt===!0&&N.cameras.push(xt)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){f=n.getBinding();let ft=f.getDepthInformation(ot[0]);ft&&ft.isValid&&ft.texture&&v.init(ft,s.renderState)}if(it&&it.includes("camera-access")&&A){t.state.unbindTexture(),f=n.getBinding();for(let ft=0;ft<ot.length;ft++){let dt=ot[ft].camera;if(dt){let gt=p[dt];gt||(gt=new Eo,p[dt]=gt);let xt=f.getCameraImage(dt);gt.sourceTexture=xt}}}}for(let ot=0;ot<R.length;ot++){let tt=w[ot],it=R[ot];tt!==null&&it!==void 0&&it.update(tt,O,c||o)}q&&q(W,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),x=null}let yt=new Vf;yt.setAnimationLoop(pt),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}},Z_=new ae,Yf=new le;Yf.set(-1,0,0,0,1,0,0,0,1);function J_(i,t){function e(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,jh(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,y,C,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(v,p):p.isMeshLambertMaterial?(r(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(v,p),f(v,p)):p.isMeshPhongMaterial?(r(v,p),h(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(v,p),u(v,p),p.isMeshPhysicalMaterial&&d(v,p,_)):p.isMeshMatcapMaterial?(r(v,p),x(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),A(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?l(v,p,y,C):p.isSpriteMaterial?c(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,e(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===fn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,e(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===fn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,e(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,e(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let y=t.get(p),C=y.envMap,_=y.envMapRotation;C&&(v.envMap.value=C,v.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(_)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Yf),v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,y,C){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*y,v.scale.value=C*.5,p.map&&(v.map.value=p.map,e(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function f(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function u(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function d(v,p,y){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.retroreflectivity>0&&(v.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,p){p.matcap&&(v.matcap.value=p.matcap)}function A(v,p){let y=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,R){let w=R.program;n.uniformBlockBinding(_,w)}function c(_,R){let w=s[_.id];w===void 0&&(v(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",y));let b=R.program;n.updateUBOMapping(_,b);let m=t.render.frame;r[_.id]!==m&&(u(_),r[_.id]=m)}function h(_){let R=f();_.__bindingPointIndex=R;let w=i.createBuffer(),b=_.__size,m=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,w),w}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let R=s[_.id],w=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let m=0,M=w.length;m<M;m++){let E=w[m];if(Array.isArray(E))for(let I=0,D=E.length;I<D;I++)d(E[I],m,I,b);else d(E,m,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,R,w,b){if(A(_,R,w,b)===!0){let m=_.__offset,M=_.value;if(Array.isArray(M)){let E=0;for(let I=0;I<M.length;I++){let D=M[I],N=p(D);x(D,_.__data,E),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(E+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,_.__data)}}function x(_,R,w){typeof _=="number"||typeof _=="boolean"?R[0]=_:_.isMatrix3?(R[0]=_.elements[0],R[1]=_.elements[1],R[2]=_.elements[2],R[3]=0,R[4]=_.elements[3],R[5]=_.elements[4],R[6]=_.elements[5],R[7]=0,R[8]=_.elements[6],R[9]=_.elements[7],R[10]=_.elements[8],R[11]=0):ArrayBuffer.isView(_)?R.set(new _.constructor(_.buffer,_.byteOffset,R.length)):_.toArray(R,w)}function A(_,R,w,b){let m=_.value,M=R+"_"+w;if(b[M]===void 0)return typeof m=="number"||typeof m=="boolean"?b[M]=m:ArrayBuffer.isView(m)?b[M]=m.slice():b[M]=m.clone(),!0;{let E=b[M];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return b[M]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(_){let R=_.uniforms,w=0,b=16;for(let M=0,E=R.length;M<E;M++){let I=Array.isArray(R[M])?R[M]:[R[M]];for(let D=0,N=I.length;D<N;D++){let L=I[D],F=Array.isArray(L.value)?L.value:[L.value];for(let X=0,k=F.length;X<k;X++){let et=F[X],H=p(et),st=w%b,rt=st%H.boundary,zt=st+rt;w+=rt,zt!==0&&b-zt<H.storage&&(w+=b-zt),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=H.storage}}}let m=w%b;return m>0&&(w+=b-m),_.__size=w,_.__cache={},this}function p(_){let R={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(R.boundary=4,R.storage=4):_.isVector2?(R.boundary=8,R.storage=8):_.isVector3||_.isColor?(R.boundary=16,R.storage=12):_.isVector4?(R.boundary=16,R.storage=16):_.isMatrix3?(R.boundary=48,R.storage=48):_.isMatrix4?(R.boundary=64,R.storage=64):_.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(R.boundary=16,R.storage=_.byteLength):re("WebGLRenderer: Unsupported uniform value type.",_),R}function y(_){let R=_.target;R.removeEventListener("dispose",y);let w=o.indexOf(R.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function C(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function j_(){return Pi===null&&(Pi=new ns(K_,16,16,ds,Ye),Pi.name="DFG_LUT",Pi.minFilter=dn,Pi.magFilter=dn,Pi.wrapS=Ei,Pi.wrapT=Ei,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var Ac=class{constructor(t={}){let{canvas:e=cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Wn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let A=d,v=new Set([Wl,kl,Gl]),p=new Set([Wn,pi,Lr,Dr,zl,Hl]),y=new Uint32Array(4),C=new Int32Array(4),_=new U,R=null,w=null,b=[],m=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,D=null,N=null,L=null,F=null;this._outputColorSpace=Sn;let X=0,k=0,et=null,H=-1,st=null,rt=new Ee,zt=new Ee,Rt=null,q=new Ft(0),pt=0,yt=e.width,W=e.height,O=1,ot=null,tt=null,it=new Ee(0,0,yt,W),Et=new Ee(0,0,yt,W),Ut=!1,ft=new _r,dt=!1,gt=!1,xt=new ae,St=new U,Ct=new Ee,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function Z(){return et===null?O:1}let P=n;function J(T,Y){return e.getContext(T,Y)}let K,S,g,B,G,Q,Mt,ut,$,j,vt,Vt,At,Pt,Bt,nt,wt,V,Tt,ct,bt,Dt,_t;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Ke,!1),P===null){let Y="webgl2";if(P=J(Y,T),P===null)throw J(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(T){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Ke,!1),oe("WebGLRenderer: "+T.message),T}function Gt(){K=new rv(P),K.init(),bt=new X_(P,K),S=new Jx(P,K,t,bt),g=new k_(P,K),S.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),N=P.createFramebuffer(),L=P.createFramebuffer(),F=P.createFramebuffer(),B=new lv(P),G=new C_,Q=new W_(P,K,g,G,S,bt,B),Mt=new sv(E),ut=new h0(P),Dt=new Yx(P,ut),$=new ov(P,ut,B,Dt),j=new hv(P,$,ut,Dt,B),V=new cv(P,S,Q),Bt=new $x(G),vt=new R_(E,Mt,K,S,Dt,Bt),Vt=new J_(E,G),At=new I_,Pt=new B_(K),wt=new qx(E,Mt,g,j,x,l),nt=new G_(E,j,S),_t=new $_(P,B,S,g),Tt=new Zx(P,K,B),ct=new av(P,K,B),B.programs=vt.programs,E.capabilities=S,E.extensions=K,E.properties=G,E.renderLists=At,E.shadowMap=nt,E.state=g,E.info=B}A!==Wn&&(M=new dv(A,e.width,e.height,a,s,r));let Yt=new gu(E,P);this.xr=Yt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(yt,W,!1))},this.getSize=function(T){return T.set(yt,W)},this.setSize=function(T,Y,ht=!0){if(Yt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=T,W=Y,e.width=Math.floor(T*O),e.height=Math.floor(Y*O),ht===!0&&(e.style.width=T+"px",e.style.height=Y+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(yt*O,W*O).floor()},this.setDrawingBufferSize=function(T,Y,ht){yt=T,W=Y,O=ht,e.width=Math.floor(T*ht),e.height=Math.floor(Y*ht),this.setViewport(0,0,T,Y)},this.setEffects=function(T){if(A===Wn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Y=0;Y<T.length;Y++)if(T[Y].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(rt)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,Y,ht,at){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,Y,ht,at),g.viewport(rt.copy(it).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,Y,ht,at){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,Y,ht,at),g.scissor(zt.copy(Et).multiplyScalar(O).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(T){g.setScissorTest(Ut=T)},this.setOpaqueSort=function(T){ot=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,ht=!0){let at=0;if(T){let lt=!1;if(et!==null){let Wt=et.texture.format;lt=v.has(Wt)}if(lt){let Wt=et.texture.type,jt=p.has(Wt),qt=wt.getClearColor(),ee=wt.getClearAlpha(),se=qt.r,fe=qt.g,ye=qt.b;jt?(y[0]=se,y[1]=fe,y[2]=ye,y[3]=ee,P.clearBufferuiv(P.COLOR,0,y)):(C[0]=se,C[1]=fe,C[2]=ye,C[3]=ee,P.clearBufferiv(P.COLOR,0,C))}else at|=P.COLOR_BUFFER_BIT}Y&&(at|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(at|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&P.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Ke,!1),wt.dispose(),At.dispose(),Pt.dispose(),G.dispose(),Mt.dispose(),j.dispose(),Dt.dispose(),_t.dispose(),vt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Zt),Yt.removeEventListener("sessionend",$t),Qt.stop()};function he(T){T.preventDefault(),Jh("WebGLRenderer: Context Lost."),I=!0}function ue(){Jh("WebGLRenderer: Context Restored."),I=!1;let T=B.autoReset,Y=nt.enabled,ht=nt.autoUpdate,at=nt.needsUpdate,lt=nt.type;Gt(),B.autoReset=T,nt.enabled=Y,nt.autoUpdate=ht,nt.needsUpdate=at,nt.type=lt}function Ke(T){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xn(T){let Y=T.target;Y.removeEventListener("dispose",xn),de(Y)}function de(T){Hn(T),G.remove(T)}function Hn(T){let Y=G.get(T).programs;Y!==void 0&&(Y.forEach(function(ht){vt.releaseProgram(ht)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,ht,at,lt,Wt){Y===null&&(Y=Nt);let jt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,qt=Mi(T,Y,ht,at,lt);g.setMaterial(at,jt);let ee=ht.index,se=1;if(at.wireframe===!0){if(ee=$.getWireframeAttribute(ht),ee===void 0)return;se=2}let fe=ht.drawRange,ye=ht.attributes.position,ne=fe.start*se,Le=(fe.start+fe.count)*se;Wt!==null&&(ne=Math.max(ne,Wt.start*se),Le=Math.min(Le,(Wt.start+Wt.count)*se)),ee!==null?(ne=Math.max(ne,0),Le=Math.min(Le,ee.count)):ye!=null&&(ne=Math.max(ne,0),Le=Math.min(Le,ye.count));let on=Le-ne;if(on<0||on===1/0)return;Dt.setup(lt,at,qt,ht,ee);let ke,Oe=Tt;if(ee!==null&&(ke=ut.get(ee),Oe=ct,Oe.setIndex(ke)),lt.isMesh)at.wireframe===!0?(g.setLineWidth(at.wireframeLinewidth*Z()),Oe.setMode(P.LINES)):Oe.setMode(P.TRIANGLES);else if(lt.isLine){let wn=at.linewidth;wn===void 0&&(wn=1),g.setLineWidth(wn*Z()),lt.isLineSegments?Oe.setMode(P.LINES):lt.isLineLoop?Oe.setMode(P.LINE_LOOP):Oe.setMode(P.LINE_STRIP)}else lt.isPoints?Oe.setMode(P.POINTS):lt.isSprite&&Oe.setMode(P.TRIANGLES);if(lt.isBatchedMesh)if(K.get("WEBGL_multi_draw"))Oe.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let wn=lt._multiDrawStarts,Kt=lt._multiDrawCounts,Ln=lt._multiDrawCount,Ae=ee?ut.get(ee).bytesPerElement:1,Qn=G.get(at).currentProgram.getUniforms();for(let Si=0;Si<Ln;Si++)Qn.setValue(P,"_gl_DrawID",Si),Oe.render(wn[Si]/Ae,Kt[Si])}else if(lt.isInstancedMesh)Oe.renderInstances(ne,on,lt.count);else if(ht.isInstancedBufferGeometry){let wn=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Kt=Math.min(ht.instanceCount,wn);Oe.renderInstances(ne,on,Kt)}else Oe.render(ne,on)};function je(T,Y,ht,at){D!==null&&T.isNodeMaterial&&D.setObject(at,T),dt===!0&&Bt.setState(T,ht,!1),T.transparent===!0&&T.side===De&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Mn(T,Y,at),T.side=Ci,T.needsUpdate=!0,Mn(T,Y,at),T.side=De):Mn(T,Y,at)}this.compile=function(T,Y,ht=null){ht===null&&(ht=T),D!==null&&D.renderStart(T,Y,ht),w=Pt.get(ht),w.init(Y),m.push(w),ht.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Y.layers)&&(w.pushLight(lt),lt.castShadow&&w.pushShadow(lt))}),T!==ht&&T.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Y.layers)&&(w.pushLight(lt),lt.castShadow&&w.pushShadow(lt))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),gt=this.localClippingEnabled,dt=Bt.init(this.clippingPlanes,gt),dt===!0&&Bt.setGlobalState(this.clippingPlanes,Y),D!==null&&nt.render(w.state.shadowsArray,ht,Y);let at=new Set;return T.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Wt=lt.material;if(Wt)if(Array.isArray(Wt))for(let jt=0;jt<Wt.length;jt++){let qt=Wt[jt];je(qt,ht,Y,lt),at.add(qt)}else je(Wt,ht,Y,lt),at.add(Wt)}),w=m.pop(),D!==null&&D.renderEnd(),at},this.compileAsync=function(T,Y,ht=null){let at=this.compile(T,Y,ht);return new Promise(lt=>{function Wt(){if(at.forEach(function(jt){let ee=G.get(jt).currentProgram;(ee===void 0||ee.isReady())&&at.delete(jt)}),at.size===0){lt(T);return}setTimeout(Wt,10)}K.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let mt=null;function Ot(T){mt&&mt(T)}function Zt(){Qt.stop()}function $t(){Qt.start()}let Qt=new Vf;Qt.setAnimationLoop(Ot),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(T){mt=T,Yt.setAnimationLoop(T),T===null?Qt.stop():Qt.start()},Yt.addEventListener("sessionstart",Zt),Yt.addEventListener("sessionend",$t),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,Y);let ht=Yt.enabled===!0&&Yt.isPresenting===!0,at=M!==null&&(et===null||ht)&&M.begin(E,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(Y),Y=Yt.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,Y,et),w=Pt.get(T,m.length),w.init(Y),w.state.textureUnits=Q.getTextureUnits(),m.push(w),xt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ft.setFromProjectionMatrix(xt,hi,Y.reversedDepth),gt=this.localClippingEnabled,dt=Bt.init(this.clippingPlanes,gt),R=At.get(T,b.length),R.init(),b.push(R),Yt.enabled===!0&&Yt.isPresenting===!0){let jt=E.xr.getDepthSensingMesh();jt!==null&&xe(jt,Y,-1/0,E.sortObjects)}xe(T,Y,0,E.sortObjects),R.finish(),D!==null&&D.updateLights(w.state.lightsArray),E.sortObjects===!0&&R.sort(ot,tt),z=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,z&&wt.addToRenderList(R,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Bt.beginShadows();let lt=w.state.shadowsArray;if(nt.render(lt,T,Y),dt===!0&&Bt.endShadows(),(at&&M.hasRenderPass())===!1){let jt=R.opaque,qt=R.transmissive;if(w.setupLights(),Y.isArrayCamera){let ee=Y.cameras;if(qt.length>0)for(let se=0,fe=ee.length;se<fe;se++){let ye=ee[se];Te(jt,qt,T,ye)}z&&wt.render(T);for(let se=0,fe=ee.length;se<fe;se++){let ye=ee[se];be(R,T,ye,ye.viewport)}}else qt.length>0&&Te(jt,qt,T,Y),z&&wt.render(T),be(R,T,Y)}et!==null&&k===0&&(Q.updateMultisampleRenderTarget(et),Q.updateRenderTargetMipmap(et)),at&&M.end(E),T.isScene===!0&&T.onAfterRender(E,T,Y),Dt.resetDefaultState(),H=-1,st=null,m.pop(),m.length>0?(w=m[m.length-1],Q.setTextureUnits(w.state.textureUnits),dt===!0&&Bt.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?R=b[b.length-1]:R=null,D!==null&&D.renderEnd()};function xe(T,Y,ht,at){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)ht=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ft)){at&&Ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);let jt=j.update(T),qt=T.material;qt.visible&&R.push(T,jt,qt,ht,Ct.z,null,Y)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ft))){let jt=j.update(T),qt=T.material;if(at&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ct.copy(T.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Ct.copy(jt.boundingSphere.center)),Ct.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(qt)){let ee=jt.groups;for(let se=0,fe=ee.length;se<fe;se++){let ye=ee[se],ne=qt[ye.materialIndex];ne&&ne.visible&&R.push(T,jt,ne,ht,Ct.z,ye,Y)}}else qt.visible&&R.push(T,jt,qt,ht,Ct.z,null,Y)}}let Wt=T.children;for(let jt=0,qt=Wt.length;jt<qt;jt++)xe(Wt[jt],Y,ht,at)}function be(T,Y,ht,at){let{opaque:lt,transmissive:Wt,transparent:jt}=T;w.setupLightsView(ht),dt===!0&&Bt.setGlobalState(E.clippingPlanes,ht),at&&g.viewport(rt.copy(at)),lt.length>0&&Qe(lt,Y,ht),Wt.length>0&&Qe(Wt,Y,ht),jt.length>0&&Qe(jt,Y,ht),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Te(T,Y,ht,at){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[at.id]===void 0){let ne=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[at.id]=new Ge(1,1,{generateMipmaps:!0,type:ne?Ye:Wn,minFilter:hs,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let Wt=w.state.transmissionRenderTarget[at.id],jt=at.viewport||rt;Wt.setSize(jt.z*E.transmissionResolutionScale,jt.w*E.transmissionResolutionScale);let qt=E.getRenderTarget(),ee=E.getActiveCubeFace(),se=E.getActiveMipmapLevel();E.setRenderTarget(Wt),E.getClearColor(q),pt=E.getClearAlpha(),pt<1&&E.setClearColor(16777215,.5),E.clear(),z&&wt.render(ht);let fe=E.toneMapping;E.toneMapping=fi;let ye=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),w.setupLightsView(at),dt===!0&&Bt.setGlobalState(E.clippingPlanes,at),Qe(T,ht,at),Q.updateMultisampleRenderTarget(Wt),Q.updateRenderTargetMipmap(Wt),K.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Le=0,on=Y.length;Le<on;Le++){let ke=Y[Le],{object:Oe,geometry:wn,material:Kt,group:Ln}=ke;if(Kt.side===De&&Oe.layers.test(at.layers)){let Ae=Kt.side;Kt.side=fn,Kt.needsUpdate=!0,Xn(Oe,ht,at,wn,Kt,Ln),Kt.side=Ae,Kt.needsUpdate=!0,ne=!0}}ne===!0&&(Q.updateMultisampleRenderTarget(Wt),Q.updateRenderTargetMipmap(Wt))}E.setRenderTarget(qt,ee,se),E.setClearColor(q,pt),ye!==void 0&&(at.viewport=ye),E.toneMapping=fe}function Qe(T,Y,ht){let at=Y.isScene===!0?Y.overrideMaterial:null;for(let lt=0,Wt=T.length;lt<Wt;lt++){let jt=T[lt],{object:qt,geometry:ee,group:se}=jt,fe=jt.material;fe.allowOverride===!0&&at!==null&&(fe=at),qt.layers.test(ht.layers)&&Xn(qt,Y,ht,ee,fe,se)}}function Xn(T,Y,ht,at,lt,Wt){D!==null&&lt.isNodeMaterial&&D.setObject(T,lt),T.onBeforeRender(E,Y,ht,at,lt,Wt),T.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),lt.onBeforeRender(E,Y,ht,at,T,Wt),lt.transparent===!0&&lt.side===De&&lt.forceSinglePass===!1?(lt.side=fn,lt.needsUpdate=!0,E.renderBufferDirect(ht,Y,at,lt,T,Wt),lt.side=Ci,lt.needsUpdate=!0,E.renderBufferDirect(ht,Y,at,lt,T,Wt),lt.side=De):E.renderBufferDirect(ht,Y,at,lt,T,Wt),T.onAfterRender(E,Y,ht,at,lt,Wt)}function Mn(T,Y,ht){Y.isScene!==!0&&(Y=Nt);let at=G.get(T),lt=w.state.lights,Wt=w.state.shadowsArray,jt=lt.state.version,qt=vt.getParameters(T,lt.state,Wt,Y,ht,w.state.lightProbeGridArray),ee=vt.getProgramCacheKey(qt),se=at.programs;at.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,at.fog=Y.fog;let fe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;at.envMap=Mt.get(T.envMap||at.environment,fe),at.envMapRotation=at.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,se===void 0&&(T.addEventListener("dispose",xn),se=new Map,at.programs=se);let ye=se.get(ee);if(ye!==void 0){if(at.currentProgram===ye&&at.lightsStateVersion===jt)return oi(T,qt),ye}else qt.uniforms=vt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,ht,qt),T.onBeforeCompile(qt,E),ye=vt.acquireProgram(qt,ee),se.set(ee,ye),at.uniforms=qt.uniforms;let ne=at.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ne.clippingPlanes=Bt.uniform),oi(T,qt),at.needsLights=te(T),at.lightsStateVersion=jt,at.needsLights&&(ne.ambientLightColor.value=lt.state.ambient,ne.lightProbe.value=lt.state.probe,ne.sunLights.value=lt.state.sun,ne.sunLightShadows.value=lt.state.sunShadow,ne.directionalLights.value=lt.state.directional,ne.directionalLightShadows.value=lt.state.directionalShadow,ne.spotLights.value=lt.state.spot,ne.spotLightShadows.value=lt.state.spotShadow,ne.rectAreaLights.value=lt.state.rectArea,ne.ltc_1.value=lt.state.rectAreaLTC1,ne.ltc_2.value=lt.state.rectAreaLTC2,ne.pointLights.value=lt.state.point,ne.pointLightShadows.value=lt.state.pointShadow,ne.hemisphereLights.value=lt.state.hemi,ne.sunShadowMatrix.value=lt.state.sunShadowMatrix,ne.sunShadowCascade.value=lt.state.sunShadowCascade,ne.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,ne.spotLightMatrix.value=lt.state.spotLightMatrix,ne.spotLightMap.value=lt.state.spotLightMap,ne.pointShadowMatrix.value=lt.state.pointShadowMatrix),at.lightProbeGrid=w.state.lightProbeGridArray.length>0,at.currentProgram=ye,at.uniformsList=null,ye}function Vn(T){if(T.uniformsList===null){let Y=T.currentProgram.getUniforms();T.uniformsList=Fr.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function oi(T,Y){let ht=G.get(T);ht.outputColorSpace=Y.outputColorSpace,ht.batching=Y.batching,ht.batchingColor=Y.batchingColor,ht.instancing=Y.instancing,ht.instancingColor=Y.instancingColor,ht.instancingMorph=Y.instancingMorph,ht.skinning=Y.skinning,ht.morphTargets=Y.morphTargets,ht.morphNormals=Y.morphNormals,ht.morphColors=Y.morphColors,ht.morphTargetsCount=Y.morphTargetsCount,ht.numClippingPlanes=Y.numClippingPlanes,ht.numIntersection=Y.numClipIntersection,ht.vertexAlphas=Y.vertexAlphas,ht.vertexTangents=Y.vertexTangents,ht.toneMapping=Y.toneMapping}function yi(T,Y){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(Y.matrixWorld);for(let ht=0,at=T.length;ht<at;ht++){let lt=T[ht];if(lt.texture!==null&&lt.boundingBox.containsPoint(_))return lt}return null}function Mi(T,Y,ht,at,lt){Y.isScene!==!0&&(Y=Nt),Q.resetTextureUnits();let Wt=Y.fog,jt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Y.environment:null,qt=et===null?E.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ve.workingColorSpace,ee=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,se=Mt.get(at.envMap||jt,ee),fe=at.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ye=!!ht.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),ne=!!ht.morphAttributes.position,Le=!!ht.morphAttributes.normal,on=!!ht.morphAttributes.color,ke=fi;at.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ke=E.toneMapping);let Oe=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,wn=Oe!==void 0?Oe.length:0,Kt=G.get(at),Ln=w.state.lights;if(dt===!0&&(gt===!0||T!==st)){let Ve=T===st&&at.id===H;Bt.setState(at,T,Ve)}let Ae=!1;at.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ln.state.version||Kt.outputColorSpace!==qt||lt.isBatchedMesh&&Kt.batching===!1||!lt.isBatchedMesh&&Kt.batching===!0||lt.isBatchedMesh&&Kt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Kt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Kt.instancing===!1||!lt.isInstancedMesh&&Kt.instancing===!0||lt.isSkinnedMesh&&Kt.skinning===!1||!lt.isSkinnedMesh&&Kt.skinning===!0||lt.isInstancedMesh&&Kt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Kt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Kt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Kt.instancingMorph===!1&&lt.morphTexture!==null||Kt.envMap!==se||at.fog===!0&&Kt.fog!==Wt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Bt.numPlanes||Kt.numIntersection!==Bt.numIntersection)||Kt.vertexAlphas!==fe||Kt.vertexTangents!==ye||Kt.morphTargets!==ne||Kt.morphNormals!==Le||Kt.morphColors!==on||Kt.toneMapping!==ke||Kt.morphTargetsCount!==wn||!!Kt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ae=!0):(Ae=!0,Kt.__version=at.version);let Qn=Kt.currentProgram;Ae===!0&&(Qn=Mn(at,Y,lt),D&&at.isNodeMaterial&&D.onUpdateProgram(at,Qn,Kt));let Si=!1,qi=!1,Xs=!1,Fe=Qn.getUniforms(),en=Kt.uniforms;if(g.useProgram(Qn.program)&&(Si=!0,qi=!0,Xs=!0),at.id!==H&&(H=at.id,qi=!0),Kt.needsLights){let Ve=yi(w.state.lightProbeGridArray,lt);Kt.lightProbeGrid!==Ve&&(Kt.lightProbeGrid=Ve,qi=!0)}if(Si||st!==T){g.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Fe.setValue(P,"projectionMatrix",T.projectionMatrix),Fe.setValue(P,"viewMatrix",T.matrixWorldInverse);let Zi=Fe.map.cameraPosition;Zi!==void 0&&Zi.setValue(P,St.setFromMatrixPosition(T.matrixWorld)),S.logarithmicDepthBuffer&&Fe.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Fe.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),st!==T&&(st=T,qi=!0,Xs=!0)}if(Kt.needsLights&&(Ln.state.sunShadowMap.length>0&&Fe.setValue(P,"sunShadowMap",Ln.state.sunShadowMap,Q),Ln.state.directionalShadowMap.length>0&&Fe.setValue(P,"directionalShadowMap",Ln.state.directionalShadowMap,Q),Ln.state.spotShadowMap.length>0&&Fe.setValue(P,"spotShadowMap",Ln.state.spotShadowMap,Q),Ln.state.pointShadowMap.length>0&&Fe.setValue(P,"pointShadowMap",Ln.state.pointShadowMap,Q)),lt.isSkinnedMesh){Fe.setOptional(P,lt,"bindMatrix"),Fe.setOptional(P,lt,"bindMatrixInverse");let Ve=lt.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Fe.setValue(P,"boneTexture",Ve.boneTexture,Q))}lt.isBatchedMesh&&(Fe.setOptional(P,lt,"batchingTexture"),Fe.setValue(P,"batchingTexture",lt._matricesTexture,Q),Fe.setOptional(P,lt,"batchingIdTexture"),Fe.setValue(P,"batchingIdTexture",lt._indirectTexture,Q),Fe.setOptional(P,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Fe.setValue(P,"batchingColorTexture",lt._colorsTexture,Q));let Yi=ht.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&V.update(lt,ht,Qn),(qi||Kt.receiveShadow!==lt.receiveShadow)&&(Kt.receiveShadow=lt.receiveShadow,Fe.setValue(P,"receiveShadow",lt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Y.environment!==null&&(en.envMapIntensity.value=Y.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=j_()),qi){if(Fe.setValue(P,"toneMappingExposure",E.toneMappingExposure),Kt.needsLights&&Ht(en,Xs),Wt&&at.fog===!0&&Vt.refreshFogUniforms(en,Wt),Vt.refreshMaterialUniforms(en,at,O,W,w.state.transmissionRenderTarget[T.id]),Kt.needsLights&&Kt.lightProbeGrid){let Ve=Kt.lightProbeGrid;en.probesSH.value=Ve.texture,en.probesMin.value.copy(Ve.boundingBox.min),en.probesMax.value.copy(Ve.boundingBox.max),en.probesResolution.value.copy(Ve.resolution)}Fr.upload(P,Vn(Kt),en,Q)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Fr.upload(P,Vn(Kt),en,Q),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Fe.setValue(P,"center",lt.center),Fe.setValue(P,"modelViewMatrix",lt.modelViewMatrix),Fe.setValue(P,"normalMatrix",lt.normalMatrix),Fe.setValue(P,"modelMatrix",lt.matrixWorld),at.uniformsGroups!==void 0){let Ve=at.uniformsGroups;for(let Zi=0,qs=Ve.length;Zi<qs;Zi++){let Ou=Ve[Zi];_t.update(Ou,Qn),_t.bind(Ou,Qn)}}return Qn}function Ht(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.sunLights.needsUpdate=Y,T.sunLightShadows.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function te(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,Y,ht){let at=G.get(T);at.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),G.get(T.texture).__webglTexture=Y,G.get(T.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ht,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){let ht=G.get(T);ht.__webglFramebuffer=Y,ht.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(T,Y=0,ht=0){et=T,X=Y,k=ht;let at=null,lt=!1,Wt=!1;if(T){let qt=G.get(T);if(qt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,qt.__webglFramebuffer),rt.copy(T.viewport),zt.copy(T.scissor),Rt=T.scissorTest,g.viewport(rt),g.scissor(zt),g.setScissorTest(Rt),H=-1;return}else if(qt.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(qt.__hasExternalTextures)Q.rebindTextures(T,G.get(T.texture).__webglTexture,G.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let fe=T.depthTexture;if(qt.__boundDepthTexture!==fe){if(fe!==null&&G.has(fe)&&(T.width!==fe.image.width||T.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}let ee=T.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Wt=!0);let se=G.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(se[Y])?at=se[Y][ht]:at=se[Y],lt=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?at=G.get(T).__webglMultisampledFramebuffer:Array.isArray(se)?at=se[ht]:at=se,rt.copy(T.viewport),zt.copy(T.scissor),Rt=T.scissorTest}else rt.copy(it).multiplyScalar(O).floor(),zt.copy(Et).multiplyScalar(O).floor(),Rt=Ut;if(ht!==0&&(at=N),g.bindFramebuffer(P.FRAMEBUFFER,at)&&g.drawBuffers(T,at),g.viewport(rt),g.scissor(zt),g.setScissorTest(Rt),lt){let qt=G.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,qt.__webglTexture,ht)}else if(Wt){let qt=Y;for(let ee=0;ee<T.textures.length;ee++){let se=G.get(T.textures[ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ee,se.__webglTexture,ht,qt)}}else if(T!==null&&ht!==0){let qt=G.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,ht)}H=-1};function tn(T){let Y=G.get(T);return(Y.__readFormat!==T.format||Y.__readType!==T.type)&&(Y.__readFormat=T.format,Y.__readType=T.type,Y.__formatReadable=S.textureFormatReadable(T.format),Y.__typeReadable=S.textureTypeReadable(T.type)),Y}this.readRenderTargetPixels=function(T,Y,ht,at,lt,Wt,jt,qt=0){if(!(T&&T.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&jt!==void 0&&(ee=ee[jt]),ee){g.bindFramebuffer(P.FRAMEBUFFER,ee);try{let se=T.textures[qt],fe=se.format,ye=se.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+qt);let ne=tn(se);if(ne.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ne.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-at&&ht>=0&&ht<=T.height-lt&&P.readPixels(Y,ht,at,lt,bt.convert(fe),bt.convert(ye),Wt)}finally{let se=et!==null?G.get(et).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(T,Y,ht,at,lt,Wt,jt,qt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&jt!==void 0&&(ee=ee[jt]),ee)if(Y>=0&&Y<=T.width-at&&ht>=0&&ht<=T.height-lt){g.bindFramebuffer(P.FRAMEBUFFER,ee);let se=T.textures[qt],fe=se.format,ye=se.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+qt);let ne=tn(se);if(ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.bufferData(P.PIXEL_PACK_BUFFER,Wt.byteLength,P.STREAM_READ),P.readPixels(Y,ht,at,lt,bt.convert(fe),bt.convert(ye),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let on=et!==null?G.get(et).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,on);let ke=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await uf(P,ke,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Wt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Le),P.deleteSync(ke),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,ht=0){let at=Math.pow(2,-ht),lt=Math.floor(T.image.width*at),Wt=Math.floor(T.image.height*at),jt=Y!==null?Y.x:0,qt=Y!==null?Y.y:0;Q.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,ht,0,0,jt,qt,lt,Wt),g.unbindTexture()},this.copyTextureToTexture=function(T,Y,ht=null,at=null,lt=0,Wt=0){let jt,qt,ee,se,fe,ye,ne,Le,on,ke=T.isCompressedTexture?T.mipmaps[Wt]:T.image;if(ht!==null)jt=ht.max.x-ht.min.x,qt=ht.max.y-ht.min.y,ee=ht.isBox3?ht.max.z-ht.min.z:1,se=ht.min.x,fe=ht.min.y,ye=ht.isBox3?ht.min.z:0;else{let en=Math.pow(2,-lt);jt=Math.floor(ke.width*en),qt=Math.floor(ke.height*en),T.isDataArrayTexture?ee=ke.depth:T.isData3DTexture?ee=Math.floor(ke.depth*en):ee=1,se=0,fe=0,ye=0}at!==null?(ne=at.x,Le=at.y,on=at.z):(ne=0,Le=0,on=0);let Oe=bt.convert(Y.format),wn=bt.convert(Y.type),Kt;Y.isData3DTexture?(Q.setTexture3D(Y,0),Kt=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Q.setTexture2DArray(Y,0),Kt=P.TEXTURE_2D_ARRAY):(Q.setTexture2D(Y,0),Kt=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ln=g.getParameter(P.UNPACK_ROW_LENGTH),Ae=g.getParameter(P.UNPACK_IMAGE_HEIGHT),Qn=g.getParameter(P.UNPACK_SKIP_PIXELS),Si=g.getParameter(P.UNPACK_SKIP_ROWS),qi=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,ke.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ke.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,se),g.pixelStorei(P.UNPACK_SKIP_ROWS,fe),g.pixelStorei(P.UNPACK_SKIP_IMAGES,ye);let Xs=T.isDataArrayTexture||T.isData3DTexture,Fe=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){let en=G.get(T),Yi=G.get(Y),Ve=G.get(en.__renderTarget),Zi=G.get(Yi.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,Ve.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let qs=0;qs<ee;qs++)Xs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(T).__webglTexture,lt,ye+qs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(Y).__webglTexture,Wt,on+qs)),P.blitFramebuffer(se,fe,jt,qt,ne,Le,jt,qt,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(lt!==0||T.isRenderTargetTexture||G.has(T)){let en=G.get(T),Yi=G.get(Y);g.bindFramebuffer(P.READ_FRAMEBUFFER,L),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,F);for(let Ve=0;Ve<ee;Ve++)Xs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,lt,ye+Ve):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,lt),Fe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yi.__webglTexture,Wt,on+Ve):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yi.__webglTexture,Wt),lt!==0?P.blitFramebuffer(se,fe,jt,qt,ne,Le,jt,qt,P.COLOR_BUFFER_BIT,P.NEAREST):Fe?P.copyTexSubImage3D(Kt,Wt,ne,Le,on+Ve,se,fe,jt,qt):P.copyTexSubImage2D(Kt,Wt,ne,Le,se,fe,jt,qt);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Fe?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Kt,Wt,ne,Le,on,jt,qt,ee,Oe,wn,ke.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(Kt,Wt,ne,Le,on,jt,qt,ee,Oe,ke.data):P.texSubImage3D(Kt,Wt,ne,Le,on,jt,qt,ee,Oe,wn,ke):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Wt,ne,Le,jt,qt,Oe,wn,ke.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Wt,ne,Le,ke.width,ke.height,Oe,ke.data):P.texSubImage2D(P.TEXTURE_2D,Wt,ne,Le,jt,qt,Oe,wn,ke);g.pixelStorei(P.UNPACK_ROW_LENGTH,Ln),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Qn),g.pixelStorei(P.UNPACK_SKIP_ROWS,Si),g.pixelStorei(P.UNPACK_SKIP_IMAGES,qi),Wt===0&&Y.generateMipmaps&&P.generateMipmap(Kt),g.unbindTexture()},this.initRenderTarget=function(T){G.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),g.unbindTexture()},this.resetState=function(){X=0,k=0,et=null,g.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var zr=class i extends Lt{constructor(){let t=i.SkyShader,e=new Ce({name:t.name,uniforms:En.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:fn,depthWrite:!1});super(new ce(1,1,1),e),this.isSky=!0}};zr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Pc=class extends Lt{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new U(.70707,.70707,0),f=new Ft(e.sunColor!==void 0?e.sunColor:16777215),u=new Ft(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new U(0,0,0),x=e.distortionScale!==void 0?e.distortionScale:20,A=e.side!==void 0?e.side:Ci,v=e.fog!==void 0?e.fog:!1,p=new Zn,y=new U,C=new U,_=new U,R=new ae,w=new U(0,0,-1),b=new Ee,m=new U,M=new U,E=new Ee,I=new ae,D=new un,N=new Ge(s,r,{type:Ye}),L={name:"MirrorShader",uniforms:En.merge([kt.fog,kt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ae},sunColor:{value:new Ft(8355711)},sunDirection:{value:new U(.70707,.70707,0)},eye:{value:new U},waterColor:{value:new Ft(5592405)}}]),vertexShader:`
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
				}`},F=new Ce({name:L.name,uniforms:En.clone(L.uniforms),vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,lights:!0,side:A,fog:v});F.uniforms.mirrorSampler.value=N.texture,F.uniforms.textureMatrix.value=I,F.uniforms.alpha.value=a,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=f,F.uniforms.waterColor.value=u,F.uniforms.sunDirection.value=h,F.uniforms.distortionScale.value=x,F.uniforms.eye.value=d,n.material=F,n.onBeforeRender=function(X,k,et){if(C.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(et.matrixWorld),R.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(R),m.subVectors(C,_),m.dot(y)>0)return;m.reflect(y).negate(),m.add(C),R.extractRotation(et.matrixWorld),w.set(0,0,-1),w.applyMatrix4(R),w.add(_),M.subVectors(C,w),M.reflect(y).negate(),M.add(C),D.position.copy(m),D.up.set(0,1,0),D.up.applyMatrix4(R),D.up.reflect(y),D.lookAt(M),D.far=et.far,D.updateMatrixWorld(),D.projectionMatrix.copy(et.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(D.projectionMatrix),I.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,C),p.applyMatrix4(D.matrixWorldInverse),b.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let H=D.projectionMatrix;E.x=(Math.sign(b.x)+H.elements[8])/H.elements[0],E.y=(Math.sign(b.y)+H.elements[9])/H.elements[5],E.z=-1,E.w=(1+H.elements[10])/H.elements[14],b.multiplyScalar(2/b.dot(E)),H.elements[2]=b.x,H.elements[6]=b.y,H.elements[10]=b.z+1-o,H.elements[14]=b.w,d.setFromMatrixPosition(et.matrixWorld);let st=X.getRenderTarget(),rt=X.xr.enabled,zt=X.shadowMap.autoUpdate;n.visible=!1,X.xr.enabled=!1,X.shadowMap.autoUpdate=!1,X.setRenderTarget(N),X.state.buffers.depth.setMask(!0),X.autoClear===!1&&X.clear(),X.render(k,D),n.visible=!0,X.xr.enabled=rt,X.shadowMap.autoUpdate=zt,X.setRenderTarget(st);let Rt=et.viewport;Rt!==void 0&&X.state.viewport(Rt)}}};var Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Q_=new as(-1,1,1,-1,0,1),xu=class extends me{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},ty=new xu,mi=class{constructor(t){this._mesh=new Lt(ty,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Q_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ns=class extends Pn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=En.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ua=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ic=class extends Pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var da=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ye}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ns(Hr),this.copyPass.material.blending=ii,this.timer=new Wo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ua!==void 0&&(o instanceof ua?n=!0:o instanceof Ic&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fa=class extends Pn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ft}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Zf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vr=class i extends Pn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new Ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,o,{type:Ye,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ge(r,o,{type:Ye,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ge(r,o,{type:Ye,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Zf;this.highPassUniforms=En.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new It(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=En.clone(Hr.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,premultipliedAlpha:!0,blending:cn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ft,this._oldClearAlpha=1,this._basic=new Re,this._fsQuad=new mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Ce({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Vr.BlurDirectionX=new It(1,0);Vr.BlurDirectionY=new It(0,1);var pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ma=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=En.clone(pa.uniforms),this.material=new Ar({name:pa.name,uniforms:this.uniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader}),this._fsQuad=new mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===Pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$o&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xa=Xe.degToRad,Gr=new U(0,2.8,-9.5);function ga(i,t){let e=xa(i),n=xa(t);return new U(Math.sin(e)*Math.cos(n),Math.sin(n),-Math.cos(e)*Math.cos(n))}var Jf=`float h3(vec3 p){p=fract(p*vec3(443.897,441.423,437.195));p+=dot(p,p.yzx+19.19);return fract((p.x+p.y)*p.z);}
float n3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<6;i++){s+=a*n3(p);p=p*2.03+vec3(1.7,9.2,3.1);a*=.5;}return s;}`;function $f({S:i,HQ:t,mobile:e,canvasTex:n,T:s}){let r={targets:[],moonDir:new U},o=0,a=n(128,128,mt=>{let Ot=mt.createRadialGradient(64,64,0,64,64,64);Ot.addColorStop(0,"rgba(255,255,255,1)"),Ot.addColorStop(.15,"rgba(255,255,255,.55)"),Ot.addColorStop(.45,"rgba(255,255,255,.12)"),Ot.addColorStop(1,"rgba(255,255,255,0)"),mt.fillStyle=Ot,mt.fillRect(0,0,128,128)}),l=mt=>(i.add(mt),mt),c=(mt,Ot)=>new Re({map:a,color:new Ft(mt).multiplyScalar(Ot),transparent:!0,depthWrite:!1,blending:cn,fog:!1}),h=new Ce({side:fn,depthWrite:!1,transparent:!0,blending:cn,fog:!1,uniforms:{n:{value:0},t:s,tw:{value:0}},vertexShader:"varying vec3 v;void main(){v=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float n,t,tw;varying vec3 v;${Jf}
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
  gl_FragColor=vec4(c*n+twl*tw,1.);}`}),f=l(new Lt(new ge(4e3,64,32),h));f.renderOrder=-1;let u=new me;u.setAttribute("position",new ie(new Float32Array(36),3)),u.setAttribute("color",new ie(new Float32Array(36),3));let d=l(new So(u,new yr({vertexColors:!0,transparent:!0,blending:cn,depthWrite:!1,fog:!1})));d.frustumCulled=!1;let x=[0,1].map(()=>({life:0,next:2+Math.random()*4})),A=n(512,512,(mt,Ot)=>{let Zt=mt.createRadialGradient(220,220,20,256,256,256);Zt.addColorStop(0,"#fffdf6"),Zt.addColorStop(.85,"#e9e5dc"),Zt.addColorStop(1,"#c9c3b8"),mt.fillStyle=Zt,mt.beginPath(),mt.arc(256,256,254,0,7),mt.fill(),mt.save(),mt.clip(),[[180,190,90],[300,170,70],[250,300,110],[330,330,60],[150,320,55]].forEach(([Qt,xe,be])=>{let Te=mt.createRadialGradient(Qt,xe,0,Qt,xe,be);Te.addColorStop(0,"rgba(120,118,125,.45)"),Te.addColorStop(1,"rgba(120,118,125,0)"),mt.fillStyle=Te,mt.fillRect(0,0,Ot,Ot)});for(let Qt=0;Qt<160;Qt++){let xe=Math.random()*Ot,be=Math.random()*Ot,Te=Math.pow(Math.random(),3)*28+2;mt.fillStyle="rgba(90,88,95,.28)",mt.beginPath(),mt.arc(xe,be,Te,0,7),mt.fill(),mt.strokeStyle="rgba(255,255,250,.35)",mt.lineWidth=1.2,mt.beginPath(),mt.arc(xe-Te*.15,be-Te*.15,Te,2.4,5.5),mt.stroke()}mt.restore();let $t=mt.createLinearGradient(0,0,Ot,Ot);$t.addColorStop(0,"rgba(0,0,0,0)"),$t.addColorStop(.7,"rgba(0,0,0,0)"),$t.addColorStop(1,"rgba(0,0,10,.35)"),mt.fillStyle=$t,mt.fillRect(0,0,Ot,Ot)}),v=()=>ga(e?-6:-12,e?14:8.5).multiplyScalar(2600),p=l(new Lt(new To(38,64),new Re({map:A,transparent:!0,fog:!1,color:new Ft(1,1,1).multiplyScalar(5)}))),y=l(new Lt(new we(1,1),c(12570879,.9))),C=l(new Lt(new we(1,1),c(9085183,.35))),_=new Ue,R=new Ue;_.add(R);let w=480,b=300,m=e?28:t?56:40,M=e?16:t?32:24,E=1,I=n(512,256,(mt,Ot,Zt)=>{mt.fillStyle="#141c33",mt.fillRect(0,0,Ot,Zt);for(let $t=6;$t<Ot;$t+=42){mt.fillStyle="#070b17",mt.fillRect($t,14,36,Zt-28),mt.fillStyle="#243050";for(let Qt=20;Qt<Zt-18;Qt+=9)mt.fillRect($t+3,Qt,30,6)}mt.fillStyle="#3a4870",mt.fillRect(0,0,Ot,8),mt.fillRect(0,Zt-8,Ot,8)},!0),D=n(256,128,(mt,Ot,Zt)=>{mt.fillStyle="#000",mt.fillRect(0,0,Ot,Zt);let $t=["#36f0d0","#5aa8ff","#36f0d0","#ff5ac8","#9dff6a"];for(let Qt=3;Qt<Ot;Qt+=21){mt.fillStyle=$t[(Qt/21|0)%$t.length],mt.globalAlpha=.85,mt.fillRect(Qt+2,16,2,Zt-32),mt.fillRect(Qt+15,16,2,Zt-32),mt.globalAlpha=1;for(let xe=18;xe<Zt-18;xe+=6)Math.random()<.35&&(mt.fillStyle="#fff",mt.fillRect(Qt+6+(Math.random()*3|0)*3,xe,2,2))}mt.fillStyle="#ffc98a",mt.fillRect(0,5,Ot,3),mt.fillRect(0,Zt-8,Ot,3)},!0),N={value:0},L={value:new U(0,-1,0)},F=(mt,Ot)=>(mt.onBeforeCompile=Zt=>{Zt.uniforms.rimK=N,Zt.uniforms.rimD=L,Zt.uniforms.t=s,Zt.fragmentShader=Zt.fragmentShader.replace("#include <common>",`#include <common>
uniform float rimK,t;uniform vec3 rimD;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
  {vec2 cq=floor(vEmissiveMapUv*vec2(12.,4.));float ph=fract(sin(dot(cq,vec2(12.9898,78.233)))*43758.5);totalEmissiveRadiance*=.45+.9*smoothstep(.2,.9,sin(t*(.6+ph*1.4)+ph*40.)*.5+.5);}
  #endif
  {float fr=pow(1.-abs(dot(normal,normalize(vViewPosition))),2.2);float lit=max(0.,dot(normal,rimD));totalEmissiveRadiance+=vec3(${Ot})*pow(fr,3.)*smoothstep(.0,.35,lit)*rimK*2.;}`)},mt),X=F(new Xt({color:3291733,map:I,metalness:.55,roughness:.42,emissive:16777215,emissiveMap:D,emissiveIntensity:1.6,fog:!1}),"2.4,1.1,.5"),k=F(new Xt({color:2896712,metalness:.8,roughness:.35,emissive:726064,fog:!1}),"1.6,.75,.38"),et=k,H=n(256,256,(mt,Ot,Zt)=>{mt.fillStyle="#0a1638",mt.fillRect(0,0,Ot,Zt);for(let $t=0;$t<Zt;$t+=16)for(let Qt=0;Qt<Ot;Qt+=16)mt.fillStyle=`hsl(${222+Math.random()*10},70%,${18+Math.random()*12}%)`,mt.fillRect(Qt+1,$t+1,14,14);mt.strokeStyle="#8fb0ff",mt.lineWidth=3,mt.strokeRect(0,0,Ot,Zt)},!0),st=F(new Xt({map:H,metalness:.6,roughness:.25,emissive:2113696,emissiveMap:H,emissiveIntensity:.7,side:De,fog:!1}),"1.2,.6,.35"),rt=n(64,256,(mt,Ot,Zt)=>{let $t=mt.createLinearGradient(0,0,0,Zt);$t.addColorStop(0,"#fff2d0"),$t.addColorStop(.25,"#ffb060"),$t.addColorStop(1,"#ff4a10"),mt.fillStyle=$t,mt.fillRect(0,0,Ot,Zt),mt.fillStyle="rgba(40,20,10,.55)";for(let Qt=6;Qt<Zt;Qt+=9)mt.fillRect(0,Qt,Ot,2)}),zt=new Re({map:rt,color:new Ft(1,1,1).multiplyScalar(1.6),side:De,fog:!1,transparent:!0,depthWrite:!1,blending:cn}),Rt=new Be,q=new ce(1,1,1),pt=new sn(q,X,m*2+M),yt=0;for(let[mt,Ot,Zt,$t,Qt]of[[w,m,2*Math.PI*w/m*.86,30,62],[b,M,2*Math.PI*b/M*.82,22,44]])for(let xe=0;xe<Ot;xe++){let be=xe/Ot*Math.PI*2,Te=mt===w?[[0,1]]:[[0,1]];for(let[Qe]of Te)Rt.position.set(Math.cos(be)*mt,Math.sin(be)*mt,Qe),Rt.rotation.set(0,0,be+Math.PI/2),Rt.scale.set(Zt,$t*(1+xe*7%3*.12),Qt),Rt.updateMatrix(),pt.setMatrixAt(yt++,Rt.matrix)}for(let mt=0;mt<m;mt++){let Ot=(mt+.5)/m*Math.PI*2;Rt.position.set(Math.cos(Ot)*(w+26),Math.sin(Ot)*(w+26),0),Rt.rotation.set(0,0,Ot+Math.PI/2),Rt.scale.set(2*Math.PI*w/m*.6,18,40),Rt.updateMatrix(),pt.setMatrixAt(yt++,Rt.matrix)}pt.count=yt,R.add(pt);let W=t?14:e?5:8,O=(m+M)*W,ot=new we(4,1.4),tt=new Re({color:16777215,fog:!1,side:De});tt.onBeforeCompile=mt=>{mt.uniforms.t=s,mt.uniforms.boost={value:1},tt.userData.sh=mt,mt.vertexShader=mt.vertexShader.replace("#include <common>",`#include <common>
varying float vPh;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPh=float(gl_InstanceID);`),mt.fragmentShader=mt.fragmentShader.replace("#include <common>",`#include <common>
uniform float t,boost;varying float vPh;`).replace("#include <color_fragment>",`#include <color_fragment>
float ph=fract(sin(vPh*12.9898)*43758.5);float on=step(.3,fract(t*(.3+ph*1.7)+ph*7.));diffuseColor.rgb*=(.15+on*4.)*boost;`)};let it=new sn(ot,tt,O),Et=[3600592,5941503,16734920,3600592,10354538],Ut=new Ft;yt=0;for(let[mt,Ot,Zt]of[[w,m,62],[b,M,44]])for(let $t=0;$t<Ot;$t++){let Qt=$t/Ot*Math.PI*2,xe=2*Math.PI*mt/Ot*.8;for(let be=0;be<W;be++){let Te=(be/(W-1)-.5)*xe,Qe=mt+(be*5%7-3)*3;Rt.position.set(Math.cos(Qt)*Qe-Math.sin(Qt)*Te,Math.sin(Qt)*Qe+Math.cos(Qt)*Te,Zt/2+.6),Rt.rotation.set(0,0,Qt),Rt.updateMatrix(),it.setMatrixAt(yt,Rt.matrix),Ut.set(Et[($t+be)%5]),it.setColorAt(yt++,Ut)}}R.add(it),it.visible=!1;let ft=new we(34,150);ft.translate(0,75,0);let dt=e?8:16,gt=new sn(ft,zt,dt);for(let mt=0;mt<dt;mt++){let Ot=(mt+.25)/dt*Math.PI*2;Rt.position.set(Math.cos(Ot)*(w+30),Math.sin(Ot)*(w+30),0),Rt.rotation.set(0,0,Ot-Math.PI/2),Rt.scale.set(1,1,1),Rt.updateMatrix(),gt.setMatrixAt(mt,Rt.matrix)}R.add(gt);let xt=new Re({color:new Ft(1,.82,.55).multiplyScalar(2.6),fog:!1}),St=e?4:8;for(let mt=0;mt<St;mt++){let Ot=mt/St*Math.PI*2,Zt=w-70,$t=new Lt(new ze(7,7,Zt,10),k);$t.position.set(Math.cos(Ot)*(70+Zt/2),Math.sin(Ot)*(70+Zt/2),0),$t.rotation.z=Ot-Math.PI/2,R.add($t);let Qt=new Lt(new ce(2.2,Zt*.96,1),xt);if(Qt.position.copy($t.position),Qt.position.z=7.2,Qt.rotation.z=Ot-Math.PI/2,R.add(Qt),mt%2===0&&!e)for(let xe of[-1,1]){let be=new Lt(new we(Zt*.42,58),st),Te=70+Zt*.62,Qe=Ot+xe*.16;be.position.set(Math.cos(Qe)*Te,Math.sin(Qe)*Te,-6),be.rotation.z=Qe,R.add(be)}}let Ct=new Re({color:new Ft(3600592).multiplyScalar(2.4),fog:!1});for(let[mt,Ot]of[[w-16,32],[w+16,32],[b-12,23],[b+12,23]]){let Zt=new Lt(new Ri(mt,1.1,4,180),Ct);Zt.position.z=Ot,R.add(Zt)}let Nt=new Ue;_.add(Nt);let z=new Lt(new ze(62,62,120,32),X);z.rotation.x=Math.PI/2,_.add(z);for(let mt of[-62,62]){let Ot=new Lt(new Ri(64,2.4,6,64),new Re({color:new Ft(16765562).multiplyScalar(4),fog:!1}));Ot.position.z=mt,_.add(Ot)}let Z=new me,P=[];for(let mt=0;mt<72;mt++){let Ot=mt/72*Math.PI*2;P.push(Math.cos(Ot)*(w+48),Math.sin(Ot)*(w+48),20)}Z.setAttribute("position",new ie(P,3));let J=new ei({map:a,size:t?16:20,color:new Ft(1,.35,.3).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:cn,fog:!1}),K=new di(Z,J);R.add(K);let S=e?10:24,g=new me;g.setAttribute("position",new ie(new Float32Array(S*3),3));let B=new ei({map:a,size:14,color:new Ft(1,.95,.8).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:cn,fog:!1}),G=new di(g,B);G.frustumCulled=!1,_.add(G);let Q=new Lt(new we(1,1),c(4881663,.16));_.add(Q),Q.scale.setScalar(w*3),Q.position.z=-60;let Mt=new Lt(new ge(w*1.15,12,8),new Re({visible:!1}));_.add(Mt),_.userData={game:1,hit:Mt,hover:0,label:"Rackstar"},l(_),r.targets.push(_);let ut=new ls(16751194,0);i.add(ut),i.add(ut.target);let $=new ls(6982911,0);i.add($),i.add($.target);let j=new Ue,vt=36,Vt=new Ce({transparent:!0,depthWrite:!1,blending:cn,fog:!1,uniforms:{t:s,o:{value:0},hov:{value:0}},vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float t,o,hov;varying vec2 p;${Jf}
 float st(vec2 q,float sc,float th){vec2 c=floor(q*sc);float r=h3(vec3(c,7.));if(r<th)return 0.;vec2 off=vec2(h3(vec3(c,1.)),h3(vec3(c,2.)))*.6+.2;float d=length(fract(q*sc)-off);return smoothstep(.14,0.,d)*(r-th)/(1.-th)*3.;}
 void main(){float r=length(p);float R=${vt}.;if(r>R)discard;float rn=r/R;
  // gravitational lensing: warp background starfield toward einstein ring
  float re=5.5;vec2 q=p*(1.-re*re/max(r*r,.5));float lens=st(q*.02+.3,40.,.9)+st(q*.02+.7,90.,.94)*.6;
  float ring=exp(-pow((r-re)/.9,2.))*1.6;
  // accretion swirl
  float ang=atan(p.y,p.x);float sw=fbm(vec3(cos(ang*2.+t*.35-rn*6.)*2.,sin(ang*2.+t*.35-rn*6.)*2.,rn*6.-t*.2));float disk=smoothstep(.5,.12,rn)*smoothstep(.04,.12,rn)*pow(sw,2.)*1.4;
  vec3 c=vec3(.85,.9,1.)*lens*smoothstep(1.,.6,rn)+vec3(1.,.85,.6)*ring+mix(vec3(1.,.55,.25),vec3(.75,1.,.45),rn*1.6)*disk;
  // field rings like the game UI
  float fr=0.;for(int i=1;i<4;i++){float rr=float(i)*8.5;fr+=smoothstep(.22,0.,abs(r-rr))*step(.5,fract(ang*float(i)*5./6.2832+t*.05*float(i)));}c+=vec3(.6,1.,.45)*fr*.25;
  c+=vec3(1.,.95,.8)*exp(-r*r/6.)*3.;c*=(1.+hov*.8);gl_FragColor=vec4(c*o*smoothstep(1.,.85,rn),1.);}`}),At=new Lt(new we(vt*2,vt*2),Vt);j.add(At);let Pt=new Lt(new we(1,1),c(16773312,1.6));Pt.scale.setScalar(14),Pt.position.z=.2,j.add(Pt);let Bt=new Lt(new we(1,1),c(14286698,.6));Bt.scale.setScalar(60),Bt.position.z=-.2,j.add(Bt);function nt(mt,Ot){let Zt=[];for(let Qt=0;Qt<mt.length;Qt++){let xe=mt[Qt],be=mt[(Qt+1)%mt.length],Te=be[0]-xe[0],Qe=be[1]-xe[1],Xn=Math.hypot(Te,Qe),Mn=-Qe/Xn*Ot,Vn=Te/Xn*Ot,oi=xe[0]-Te/Xn*Ot*.5,yi=xe[1]-Qe/Xn*Ot*.5,Mi=be[0]+Te/Xn*Ot*.5,Ht=be[1]+Qe/Xn*Ot*.5;Zt.push(oi+Mn,yi+Vn,0,oi-Mn,yi-Vn,0,Mi+Mn,Ht+Vn,0,oi-Mn,yi-Vn,0,Mi-Mn,Ht-Vn,0,Mi+Mn,Ht+Vn,0)}let $t=new me;return $t.setAttribute("position",new ie(Zt,3)),$t}let wt=[[1,0],[.35,.075],[-.55,.075],[-.78,.2],[-.68,0],[-.78,-.2],[-.55,-.075],[.35,-.075]],V=[[.55,0],[-.45,.42],[-.2,0],[-.45,-.42]],Tt=new Ft(14286698),ct=[wt,V].map((mt,Ot)=>{let Zt=new Ue,$t=new Re({color:Tt.clone().multiplyScalar(6),side:2,transparent:!0,depthWrite:!1,fog:!1}),Qt=new Re({color:Tt.clone().multiplyScalar(1.3),side:2,transparent:!0,depthWrite:!1,blending:cn,fog:!1});Zt.add(new Lt(nt(mt,.05),Qt),new Lt(nt(mt,.018),$t));let xe=new Lt(new we(1,1),c(16752704,3));return xe.position.x=Ot?-.4:-.85,Zt.add(xe),Zt.scale.setScalar(Ot?3.2:4.4),Zt.position.z=.5,j.add(Zt),{g:Zt,m:$t,gm:Qt,fl:xe,p:new It,v:new It,hd:0,trail:[],thr:0,dead:0}}),bt=110,Dt=new me;Dt.setAttribute("position",new ie(new Float32Array(2*bt*3),3)),Dt.setAttribute("color",new ie(new Float32Array(2*bt*3),3));let _t=new di(Dt,new ei({map:a,size:.9,vertexColors:!0,transparent:!0,depthWrite:!1,blending:cn,fog:!1}));_t.frustumCulled=!1,j.add(_t);let Gt=new me;Gt.setAttribute("position",new ie(new Float32Array(48),3));let Yt=new di(Gt,new ei({map:a,size:1.6,color:new Ft(1,.8,.5).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:cn,fog:!1}));Yt.frustumCulled=!1,j.add(Yt);let he=new Lt(new we(1,1),c(16769184,6));he.position.z=.6,he.visible=!1,j.add(he);let ue=0,Ke=[],xn=1400;function de(mt,Ot){let Zt=Math.random()*6.283,$t=24+Math.random()*7;mt.p.set(Math.cos(Zt)*$t,Math.sin(Zt)*$t);let Qt=Math.sqrt(xn/$t)*(.75+Math.random()*.3);mt.v.set(-Math.sin(Zt),Math.cos(Zt)).multiplyScalar(Qt*(Ot?-1:1)*(Math.random()<.5?1:-1)),mt.trail.length=0}ct.forEach(de);let Hn=new Lt(new ge(vt,12,8),new Re({visible:!1}));j.add(Hn),j.userData={game:0,hit:Hn,hover:0,label:"Needle vs Wedge"},l(j),r.targets.push(j);let je={};return r.layout=mt=>{je=mt<1?{well:[-12,52,190],st:[4,30,3e3],sts:1.05}:{well:[-36,24,190],st:[16,27,3e3],sts:1.5},j.position.copy(Gr).addScaledVector(ga(je.well[0],je.well[1]),je.well[2]),j.lookAt(Gr),_.position.copy(Gr).addScaledVector(ga(je.st[0],je.st[1]),je.st[2]),_.scale.setScalar(je.sts),_.lookAt(Gr),_.rotateX(xa(58)),_.rotateY(xa(-38)),_.rotateZ(xa(12));let Zt=v();p.position.copy(Zt),p.lookAt(0,0,0),y.position.copy(Zt).multiplyScalar(.999),y.lookAt(0,0,0),y.scale.setScalar(380),C.position.copy(Zt).multiplyScalar(.998),C.lookAt(0,0,0),C.scale.setScalar(1100),r.moonDir.copy(Zt).normalize()},r.focus=mt=>mt==="station"?_.position:j.position,r.setNight=(mt,Ot)=>{o=mt;let Zt=Xe.smoothstep(mt,.35,1);h.uniforms.n.value=Zt,h.uniforms.tw.value=Xe.smoothstep(mt,.12,.42)*(1-.8*Xe.smoothstep(mt,.55,1));let $t=Xe.smoothstep(mt,.3,.75);[p,y,C].forEach(be=>{be.visible=$t>.01,be.material.opacity=$t});let Qt=Xe.smoothstep(mt,.45,.85),xe=Xe.smoothstep(mt,.58,.95);_.visible=Qt>.01,j.visible=xe>.01,r.vis=Qt;{let be=1-Math.pow(1-Qt,3),Te=1-Math.pow(1-xe,3);_.scale.setScalar((je.sts||1)*(.88+.12*be)),j.scale.setScalar(.55+.45*Te),j.rotation.z=(1-Te)*.6}ut.intensity=Qt*.5,ut.position.copy(_.position).addScaledVector(Ot,-900).add(new U(0,-1400,0)),ut.target.position.copy(_.position),$.intensity=Qt*.6,$.position.copy(_.position).add(r.moonDir.clone().multiplyScalar(800)),$.target.position.copy(_.position)},r.update=(mt,Ot,Zt)=>{let $t=r.vis||0,Qt=u.attributes.position.array,xe=u.attributes.color.array;if(x.forEach((Ht,te)=>{if(h.uniforms.n.value<.5){xe.fill(0,te*6,te*6+6);return}if(Ht.next-=Ot,Ht.life<=0&&Ht.next<=0&&(Ht.life=.9,Ht.next=4+Math.random()*7,Ht.a=ga(Math.random()*70-35,25+Math.random()*30),Ht.b=ga(Math.random()*70-35,10+Math.random()*12)),Ht.life>0){Ht.life-=Ot;let tn=1-Ht.life/.9,T=Ht.a.clone().lerp(Ht.b,tn).normalize().multiplyScalar(3e3),Y=Ht.a.clone().lerp(Ht.b,Math.max(0,tn-.18)).normalize().multiplyScalar(3e3);T.add(Gr),Y.add(Gr),Qt.set([T.x,T.y,T.z,Y.x,Y.y,Y.z],te*6);let ht=Math.sin(Math.min(1,tn)*Math.PI)*6;xe.set([ht,ht,ht*.9,0,0,0],te*6)}else xe.fill(0,te*6,te*6+6)}),u.attributes.position.needsUpdate=u.attributes.color.needsUpdate=!0,!$t)return;R.rotation.z+=Ot*.012,_.userData.hover+=((Zt===_?1:0)-_.userData.hover)*.12,tt.userData.sh&&(tt.userData.sh.uniforms.boost.value=(1+_.userData.hover*1.5)*$t),X.emissiveIntensity=1.6+_.userData.hover*2.5,N.value=$t*(3+_.userData.hover);{let Ht=new U(0,-1,.25).normalize(),te=r._cam;te&&Ht.transformDirection(te.matrixWorldInverse),L.value.copy(Ht)}[X,k,st].forEach(Ht=>{Ht.transparent=$t<1,Ht.opacity=$t}),J.opacity=$t*(mt%1.6<.25?1:.25),Q.material.opacity=$t*(.7+_.userData.hover*.6);let be=g.attributes.position.array;for(let Ht=0;Ht<S;Ht++){let te=(mt*(.02+Ht%5*.006)+Ht/S)%1,tn=Ht*2.399,T,Y,ht;if(Ht%3===0){let at=w*2.4*(1-te)+70*te;T=Math.cos(tn)*at*.3,Y=Math.sin(tn)*at*.3,ht=(Ht%2?1:-1)*(80+at*.9)}else{let at=b+(w-b)*(.5+.5*Math.sin(te*6.283)),lt=tn+te*(Ht%2?1:-1)*1.2;T=Math.cos(lt)*at,Y=Math.sin(lt)*at,ht=40+Ht%4*8}be[Ht*3]=T,be[Ht*3+1]=Y,be[Ht*3+2]=ht}g.attributes.position.needsUpdate=!0,B.opacity=$t;let Te=j.userData;Te.hover+=((Zt===j?1:0)-Te.hover)*.12,Vt.uniforms.o.value=$t,Vt.uniforms.hov.value=Te.hover,Pt.material.opacity=$t,Bt.material.opacity=$t*(.6+Te.hover*.6);let Qe=4,Xn=Math.min(Ot,.05)/Qe,Mn=ct[0],Vn=ct[1];for(let Ht=0;Ht<Qe;Ht++)ct.forEach((te,tn)=>{if(te.dead>0)return;let T=te.p.lengthSq(),Y=Math.sqrt(T),ht=te.p.clone().multiplyScalar(-xn/(T*Y)),lt=(tn?Mn:Vn).p.clone().sub(te.p);te.thr=Math.max(0,te.thr-Xn),Math.random()<.004&&(te.thr=.6+Math.random()*.8,te.td=tn?new It(-te.v.y,te.v.x).normalize().multiplyScalar(Math.random()<.5?1:-1):lt.normalize()),Y>32&&ht.addScaledVector(te.p,-.6/Y*10),te.thr>0&&te.td&&ht.addScaledVector(te.td,22),te.v.addScaledVector(ht,Xn),te.v.length()>60&&te.v.setLength(60),te.p.addScaledVector(te.v,Xn);{let Wt=te.p.length();Wt<9&&!te.near?(te.near=1,r.onSling&&r.onSling(te.p.x/30)):Wt>13&&(te.near=0)}te.p.length()<3.4&&(te.dead=1.4,he.visible=!0,ue=0,he.position.set(te.p.x,te.p.y,.6))});ct.forEach((Ht,te)=>{if(Ht.dead>0){Ht.dead-=Ot,Ht.g.visible=!1,Ht.dead<=0&&(de(Ht,te),Ht.g.visible=!0);return}let T=Math.atan2((Ht.thr>0&&Ht.td?Ht.td:Ht.v).y,(Ht.thr>0&&Ht.td?Ht.td:Ht.v).x)-Ht.hd;T=Math.atan2(Math.sin(T),Math.cos(T)),Ht.hd+=T*Math.min(1,Ot*6),Ht.g.position.set(Ht.p.x,Ht.p.y,.5),Ht.g.rotation.z=Ht.hd,Ht.m.opacity=$t,Ht.gm.opacity=$t*(.5+Te.hover*.5),Ht.fl.material.opacity=$t*(Ht.thr>0?1:.25),Ht.fl.scale.set(Ht.thr>0?1.1+Math.random()*.5:.4,.35,1),Ht.trail.unshift(Ht.p.clone()),Ht.trail.length>bt&&Ht.trail.pop()});let oi=Dt.attributes.position.array,yi=Dt.attributes.color.array;if(oi.fill(0),yi.fill(0),ct.forEach((Ht,te)=>Ht.trail.forEach((tn,T)=>{let Y=(te*bt+T)*3;oi[Y]=tn.x,oi[Y+1]=tn.y,oi[Y+2]=.3;let ht=(1-T/bt)*$t*(T%2?.45:1);yi[Y]=.85*ht,yi[Y+1]=1*ht,yi[Y+2]=.42*ht})),Dt.attributes.position.needsUpdate=Dt.attributes.color.needsUpdate=!0,Math.random()<Ot*.7&&Mn.dead<=0&&Vn.dead<=0){let Ht=Math.random()<.6?Mn:Vn,te=Ht===Mn?Vn:Mn;Ke.push({p:Ht.p.clone(),v:te.p.clone().sub(Ht.p).normalize().multiplyScalar(40).add(Ht.v.clone().multiplyScalar(.5)),l:1.8})}let Mi=Gt.attributes.position.array;Mi.fill(9999);for(let Ht=Ke.length-1;Ht>=0;Ht--){let te=Ke[Ht];te.l-=Ot;let tn=te.p.lengthSq();te.v.addScaledVector(te.p,-xn/(tn*Math.sqrt(tn))*Ot),te.p.addScaledVector(te.v,Ot),(te.l<=0||tn<9)&&Ke.splice(Ht,1)}Ke.slice(0,16).forEach((Ht,te)=>{Mi[te*3]=Ht.p.x,Mi[te*3+1]=Ht.p.y,Mi[te*3+2]=.4}),Gt.attributes.position.needsUpdate=!0,Yt.material.opacity=$t,he.visible&&(ue+=Ot,he.scale.setScalar(4+ue*30),he.material.opacity=Math.max(0,1-ue/.7)*$t,ue>.7&&(he.visible=!1))},r}var Fs=(i,t,e)=>new U(i,t,e),ms=(i,t,e)=>(e=Math.min(1,Math.max(0,(e-i)/(t-i))),e*e*(3-2*e)),vu={};function Kf(i){return vu[i]?vu[i]:vu[i]=fetch(i).then(t=>t.arrayBuffer()).then(t=>{let n=new DataView(t).getUint32(12,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,20,n))),r=20+n+8,o=H=>{let st=s.accessors[H],rt=s.bufferViews[st.bufferView],zt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4}[st.type],Rt={5126:Float32Array,5123:Uint16Array,5121:Uint8Array,5125:Uint32Array}[st.componentType],q=r+(rt.byteOffset||0)+(st.byteOffset||0),pt=new Rt(t.slice(q,q+st.count*zt*Rt.BYTES_PER_ELEMENT)),yt=st.normalized?{5123:65535,5121:255}[st.componentType]:1;return{arr:pt,n:zt,f:yt}},a=s.nodes,l=new Array(a.length).fill(-1);a.forEach((H,st)=>(H.children||[]).forEach(rt=>l[rt]=st));let c=[],h=H=>{if(c[H])return c[H];let st=a[H],rt=new ae;return rt.compose(Fs(...st.translation||[0,0,0]),new nn(...st.rotation||[0,0,0,1]),Fs(...st.scale||[1,1,1])),l[H]>=0&&rt.premultiply(h(l[H])),c[H]=rt},f=s.skins[0],u=f.joints,d=u.map(H=>a[H].name),x=new Map(u.map((H,st)=>[H,st])),A=u.map(H=>{let st=l[H];for(;st>=0&&!x.has(st);)st=l[st];return st>=0?x.get(st):-1}),v=u.map(H=>Fs(0,0,0).setFromMatrixPosition(h(H))),p=a.findIndex(H=>H.mesh!==void 0),y=h(p),C=s.meshes[a[p].mesh].primitives[0],_=C.attributes,R=o(_.POSITION),w=o(_.NORMAL),b=o(_.COLOR_0),m=o(_.JOINTS_0),M=o(_.WEIGHTS_0),E=o(C.indices),I=R.arr.length/3,D=new Float32Array(I*3),N=new Float32Array(I*3),L=new Float32Array(I*3),F=new Uint16Array(I*4),X=new Float32Array(I*4),k=new le().getNormalMatrix(y),et=Fs(0,0,0);for(let H=0;H<I;H++){et.set(R.arr[H*3],R.arr[H*3+1],R.arr[H*3+2]).applyMatrix4(y),D.set([et.x,et.y,et.z],H*3),et.set(w.arr[H*3],w.arr[H*3+1],w.arr[H*3+2]).applyMatrix3(k).normalize(),N.set([et.x,et.y,et.z],H*3);for(let rt=0;rt<3;rt++)L[H*3+rt]=b.arr[H*b.n+rt]/b.f;let st=0;for(let rt=0;rt<4;rt++)F[H*4+rt]=m.arr[H*4+rt],X[H*4+rt]=M.arr[H*4+rt]/M.f,st+=X[H*4+rt];if(st>0)for(let rt=0;rt<4;rt++)X[H*4+rt]/=st}return{pos:D,nor:N,col:L,si:F,sw:X,idx:Array.from(E.arr),names:d,parents:A,world:v,BI:Object.fromEntries(d.map((H,st)=>[H,st]))}})}function rn(i,t,e,n=0){return{g:i.index?i.toNonIndexed():i,bone:t,color:e,fx:n}}function Gi(i,t=[]){let e=[...i.pos],n=[...i.nor],s=[...i.col],r=[...i.si],o=[...i.sw],a=new Array(i.pos.length/3).fill(0),l=[...i.idx],c=new Ft;for(let f of t){let u=f.g;u.attributes.normal||u.computeVertexNormals();let d=u.attributes.position,x=u.attributes.normal,A=e.length/3;c.set(f.color).convertSRGBToLinear();let v=Array.isArray(f.bone)?f.bone:[[f.bone,1]];for(let p=0;p<d.count;p++){e.push(d.getX(p),d.getY(p),d.getZ(p)),n.push(x.getX(p),x.getY(p),x.getZ(p)),s.push(c.r,c.g,c.b),a.push(f.fx);for(let y=0;y<4;y++){let C=v[y];r.push(C?i.BI[C[0]]:0),o.push(C?C[1]:0)}l.push(A+p)}}let h=new me;return h.setAttribute("position",new ie(e,3)),h.setAttribute("normal",new ie(n,3)),h.setAttribute("color",new ie(s,3)),h.setAttribute("skinIndex",new As(r,4)),h.setAttribute("skinWeight",new ie(o,4)),h.setAttribute("fx",new ie(a,1)),h.setIndex(l),h.computeBoundingSphere(),h}var ps=i=>i.toFixed(2);function va(i,{nz:t=300,grade:e=.25,tint:n=[.97,1,1.04],extra:s}={}){return i(16777215,{vertexColors:!0,obc:r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float fx;varying float vFx;varying vec3 vBP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFx=fx;vBP=position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vFx;varying vec3 vBP;float hs(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}float vn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hs(i),hs(i+vec3(1,0,0)),f.x),mix(hs(i+vec3(0,1,0)),hs(i+vec3(1,1,0)),f.x),f.y),mix(mix(hs(i+vec3(0,0,1)),hs(i+vec3(1,0,1)),f.x),mix(hs(i+vec3(0,1,1)),hs(i+vec3(1,1,1)),f.x),f.y),f.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
if(vFx<.5){float st=vn(vBP*vec3(${ps(t)},${ps(t*.7)},${ps(t*.25)}))*.6+vn(vBP*vec3(${ps(t*2.2)},${ps(t*1.7)},${ps(t*.5)}))*.4;diffuseColor.rgb*=.86+.28*st;}`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
{float l=dot(gl_FragColor.rgb,vec3(.299,.587,.114));if(vFx<.5)gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(l)*vec3(${n.map(ps).join(",")}),${ps(e)});}if(vFx>1.5)gl_FragColor.rgb+=vec3(.06);if(vFx>.5&&vFx<1.5)gl_FragColor.rgb=vec3(1.);`),s&&s(r)}})}function gs(i,t,e,n=1){let s=i.names.map((f,u)=>{let d=new xr;return d.name=f,d});i.names.forEach((f,u)=>{let d=i.parents[u],x=i.world[u];d>=0?(s[u].position.copy(x).sub(i.world[d]),s[d].add(s[u])):s[u].position.copy(x)});let r=new yo(t,e),o=s.filter((f,u)=>i.parents[u]<0);for(let f of o)r.add(f);r.updateMatrixWorld(!0),r.bind(new Mo(s)),r.frustumCulled=!1;let a=new Ue;a.add(r),a.scale.setScalar(n);let l={};s.forEach(f=>l[f.name]=f);let c={};return s.forEach(f=>c[f.name]=f.position.clone()),{grp:a,mesh:r,B:l,rest:c,reset:()=>{for(let f of s)f.position.copy(c[f.name]),f.rotation.set(0,0,0),f.scale.set(1,1,1)},bones:s}}var ZS=Fs(0,0,0),JS=Fs(0,0,0),$S=Fs(0,0,0),KS=new nn;function Li(i,t,e,n=0,s=0,r=-1.3,o=1.6){let a=t>0?"L":"R",l=i.B["w"+a+"s"],c=i.B["w"+a+"e"],h=i.B["w"+a+"h"];l.rotation.order="YXZ",l.rotation.set(r*e,t*(o*e+s),t*n),c.rotation.set(0,t*3*e,0),h.rotation.set(0,-t*2.95*e,0)}var _a=(new URLSearchParams(location.search).get("owf")||"0,-1.6,1.9,.8").split(",").map(Number),si=(i,t,e)=>new U(i,t,e),Lc=(i,t={})=>{let e=t.obc;delete t.obc;let n=new Xt(Object.assign({color:i,roughness:.86,metalness:0},t));return e&&(n.onBeforeCompile=e),n},kr=(i,t,e,n,s,r,o)=>{let a=[];for(let l of[1,-1])o&&a.push(rn(new ge(r*1.5,8,6).translate(t.x+l*e*.97,t.y+n,t.z+s),"head",o,2)),a.push(rn(new ge(r,8,6).translate(t.x+l*e,t.y+n,t.z+s),"head",789e3,2)),a.push(rn(new ge(r*.32,4,3).translate(t.x+l*(e+r*.5),t.y+n+r*.4,t.z+s+r*.6),"head",16777215,1));return a},ya=(i,t,e,n)=>{let s=o=>i.BI[o]===void 0?null:i.world[i.BI[o]].clone(),r=[];for(let o of["L","R"]){let a=s("l"+o+"t"),l=s("l"+o+"s"),c=s("l"+o+"f");if(!a||!c)continue;let h=(f,u,d,x)=>{let A=f.distanceTo(u),v=new ze(d*.85,d,A,6).translate(0,-A/2,0);v.applyQuaternion(new nn().setFromUnitVectors(si(0,-1,0),u.clone().sub(f).normalize())).translate(f.x,f.y,f.z),r.push(rn(v,x,t))};l?(h(a.clone().lerp(l,.4),l,e*1.2,"l"+o+"t"),h(l,c,e,"l"+o+"s")):h(a.clone().lerp(c,.3),c,e*1.3,"l"+o+"t");for(let[f,u]of[[0,n],[.5,n*.85],[-.5,n*.85],[Math.PI,n*.5]]){let d=new ze(e*.45,e*.6,u,4).rotateX(Math.PI/2).translate(0,0,u/2).rotateY(f).translate(c.x,c.y,c.z);r.push(rn(d,"l"+o+"f",t))}}return r},Ma=i=>{for(let t of i.children)t.visible=!1},ey=i=>i.world[i.BI.head].y+.04;function jf(i,{S:t,HQ:e,mobile:n,H:s}){let r=new U,o=va(Lc,{nz:60,grade:.06,tint:[1.02,1,.97]}),a=va(Lc,{nz:300,grade:.05,tint:[1.02,1,.97]}),l={value:.35},c=va(Lc,{nz:60,grade:.06,tint:[1.02,1,.97],extra:q=>{q.uniforms.uRim=l,q.fragmentShader=q.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRim;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
{float fr=pow(1.-abs(dot(normalize(vNormal),normalize(vViewPosition))),2.5);gl_FragColor.rgb+=vec3(1.,.62,.34)*fr*uRim;}`)}});i.rim=l;let h=[],f=q=>(q.castShadow=!1,q),u={heron:{bill:[.016,.15,14200896],leg:5918784,toe:.1,H:1.2},egret:{bill:[.013,.13,15777840],leg:1446932,toe:.09,H:1},ibis:{bill:[.009,.12,14704698],leg:14704698,toe:.06,H:.62,curve:1}},d={},x=q=>d[q]??=Kf("a/"+q+".glb"),A={},v=q=>A[q]??=x(q==="ibis"?"snowy":q).then(pt=>{let yt=u[q],W=pt.world[pt.BI.head],O=new bn(yt.bill[0],yt.bill[1],7).rotateX(Math.PI/2);if(yt.curve){let tt=O.attributes.position;for(let it=0;it<tt.count;it++){let Et=tt.getZ(it)+yt.bill[1]/2;tt.setY(it,tt.getY(it)-Et*Et*1.6)}}O.translate(0,W.y-.002,W.z+.07+yt.bill[1]*.5);let ot=[rn(O,"head",yt.bill[2],2),...kr(pt,W,.026,.012,.045,.0055,q==="heron"?14205008:15257664),...ya(pt,yt.leg,.009,yt.toe)];return q==="ibis"&&ot.push(rn(new ge(.03,8,6).translate(0,W.y,W.z+.035),"head",14708816)),[pt,Gi(pt,ot)]});for(let q of i.waders||[]){let pt=q.userData,yt=pt.heron?"heron":pt.ibis?"ibis":"egret";v(yt).then(([W,O])=>{let ot=gs(W,O,c,1);f(ot.mesh);let tt=u[yt].H/ey(W)/q.scale.x;ot.grp.scale.setScalar(tt);{let it=W.world[W.BI.lLf]||W.world[W.BI.lRf];it&&(ot.grp.position.y=-it.y*tt+.02/q.scale.x)}ot.grp.rotation.y=Math.PI,Ma(q),pt.legs=null,q.add(ot.grp),pt.r=ot,pt.k=yt})}let p=(q,pt)=>{let yt=q.userData,W=yt.r;if(!W)return;let O=W.B;W.reset();let ot=yt.ph||0,tt=.35,it=0,Et=0,Ut=-.12,ft=.15,dt=0;if(yt.alert>0&&(tt=.02,it=0,Et=0,Ut=-.25,ft=.02),!(yt.alert>0))if(yt.k==="ibis"){let Ct=.5+.5*Math.sin(pt*2.2+ot);tt=.1,it=.5,Et=.9,Ut=.25,ft=.7+Ct*.6}else{let Ct=(pt*.11+ot*.37)%1;if(Ct<.3)tt=.35;else if(Ct<.55)tt=.15,it=.35,Et=.35,Ut=.05;else if(Ct<.7)tt=.95,it=.3,Et=.4,Ut=.15;else if(Ct<.74)tt=.95,it=.3,Et=.4,Ut=.15,dt=Math.sin((Ct-.7)/.04*Math.PI);else if(Ct>.88){let Nt=ms(.88,.91,Ct)*(1-ms(.97,1,Ct));O.n2.rotation.y=1.4*Nt,O.n3.rotation.y=.9*Nt,ft=.6}}if(O.n1.rotation.x=.5*tt-.6*it+.35*Et,O.n2.rotation.x=-1.25*tt+.35*it+.1*Et,O.n3.rotation.x=1.15*tt+.2*it+.25*Et,O.n4.rotation.x=-.35*tt+.1*it+.3*Et,O.head.rotation.x=ft-.05*tt+.1*Et-Ut,O.body.rotation.x=Ut,dt>0){let Ct=(Nt,z)=>Nt+(z-Nt)*dt;O.n1.rotation.x=Ct(O.n1.rotation.x,1.25),O.n2.rotation.x=Ct(O.n2.rotation.x,.05),O.n3.rotation.x=Ct(O.n3.rotation.x,.05),O.n4.rotation.x=Ct(O.n4.rotation.x,.1),O.head.rotation.x=Ct(O.head.rotation.x,.15)}for(let Ct of[1,-1])Li(W,Ct,1);let gt=Math.cos(pt*(yt.ibis?.12:.09)+ot),xt=Math.min(1,Math.abs(gt)*3)*(yt.ibis?.6:1),St=pt*1.6+ot;for(let[Ct,Nt]of[[0,"L"],[1,"R"]]){let z=Math.sin(St+Ct*Math.PI);O["l"+Nt+"t"]&&(O["l"+Nt+"t"].rotation.x=.12+z*.32*xt),O["l"+Nt+"s"]&&(O["l"+Nt+"s"].rotation.x=-.1-Math.max(0,z)*.5*xt),O["l"+Nt+"f"]&&(O["l"+Nt+"f"].rotation.x=Math.max(0,z)*.6*xt)}if(s){W.grp.updateMatrixWorld(!0);let Ct=1e9,Nt=0,z=0;for(let Z of["L","R"]){let P=O["l"+Z+"f"];P&&(P.getWorldPosition(r),r.y<Ct&&(Ct=r.y,Nt=r.x,z=r.z))}if(Ct<1e8){let Z=s(Nt,z)+.015-Ct;W.grp.position.y+=Math.max(-.5,Math.min(.5,Z))/q.scale.x*(yt.planted?.25:1),yt.planted=1}}},y=[],C=(q,pt,yt,W)=>x(pt).then(O=>{let ot=O.world[O.BI.head],tt=[...kr(O,ot,pt==="pelican"?.035:.026,.012,.04,.006)];if(pt==="pelican"){let Et=new ce(.05,.03,.36).translate(0,ot.y-.01,ot.z+.24);tt.push(rn(Et,"head",13148272),rn(new ge(.05,8,6).scale(.7,.9,3.4).translate(0,ot.y-.045,ot.z+.2),"head",5917248))}else tt.push(rn(new bn(.013,.13,7).rotateX(Math.PI/2).translate(0,ot.y,ot.z+.135),"head",15777840,2),...ya(O,1446932,.009,.09));let it=gs(O,Gi(O,tt),o,yt);it.grp.rotation.y=Math.PI,Ma(q),q.add(it.grp),y.push({b:q,r:it,k:pt})});(i.fly||[]).forEach(q=>C(q,"egret",1.4)),(i.pel||[]).forEach(q=>C(q,"pelican",1.6));let _=(q,pt)=>{let yt=q.r,W=yt.B,O=q.b.userData;yt.reset();let ot=(q.k==="pelican",O.l.rotation.z);for(let tt of[1,-1]){Li(yt,tt,0,ot*1.3+.06);let it=tt>0?"L":"R";W["w"+it+"h"].rotation.z=tt*.3*ot}q.k==="pelican"?(W.n1.rotation.x=1.1,W.n2.rotation.x=-1.6,W.head.rotation.x=.55):(W.n1.rotation.x=1.25*.5,W.n2.rotation.x=-1.56,W.n3.rotation.x=1.44,W.n4.rotation.x=-.44,W.head.rotation.x=.1);for(let tt of["L","R"])W["l"+tt+"t"]&&(W["l"+tt+"t"].rotation.x=1.35),W["l"+tt+"f"]&&(W["l"+tt+"f"].rotation.x=1.2)},R=[];(i.dol||[]).forEach(q=>x("dolphin").then(pt=>{let yt=gs(pt,Gi(pt,kr(pt,pt.world[pt.BI.head],.105,.02,.12,.012)),o,1.15);yt.grp.rotation.y=Math.PI,Ma(q.g),q.g.add(yt.grp),R.push({r:yt,d:q,k:"dol"})})),i.mul&&x("mullet").then(q=>{let pt=gs(q,Gi(q,kr(q,q.world[q.BI.head],.016,.006,.02,.004)),a,1.5);pt.grp.rotation.y=Math.PI,i.mul.material.visible=!1,i.mul.add(pt.grp),R.push({r:pt,k:"mul"})}),i.crabs&&x("crab").then(q=>{let pt=tt=>q.world[q.BI[tt]],yt=[],W=pt("body");for(let tt of[1,-1])for(let it=0;it<4;it++){let Et=si(W.x+tt*.016,W.y-.002,W.z+.006-it*.007),Ut=Et.clone().add(si(tt*.016,-.004,-.003*it)),ft=si(Ut.x+tt*.006,0,Ut.z-.002);for(let[dt,gt]of[[Et,Ut],[Ut,ft]]){let xt=dt.distanceTo(gt),St=new ze(.0013,.0016,xt,4).translate(0,-xt/2,0);St.applyQuaternion(new nn().setFromUnitVectors(si(0,-1,0),gt.clone().sub(dt).normalize())).translate(dt.x,dt.y,dt.z),yt.push(rn(St,"body",9071184))}}for(let tt of[1,-1]){let it=pt(tt>0?"eL":"eR");yt.push(rn(new ze(9e-4,9e-4,.01,4).translate(it.x,it.y+.004,it.z),"body",5917248),rn(new ge(.0022,5,4).translate(it.x,it.y+.01,it.z),"body",1052688,2))}let O=Gi(q,yt);O.deleteAttribute("skinIndex"),O.deleteAttribute("skinWeight"),O.scale(2.4,2.4,2.4),O.rotateY(Math.PI/2),O.translate(0,-.012,0);let ot=i.crabs;ot.geometry=O,ot.material=va(Lc,{nz:300,grade:.05,tint:[1.02,1,.97]}),ot.instanceColor=null,ot.material.needsUpdate=!0});let w=null;i.osp&&x("osprey").then(q=>{let pt=q.world[q.BI.head],yt=[...kr(q,pt,.03,.012,.035,.006,15255616)],W=new bn(.012,.05,6).rotateX(Math.PI/2);{let ot=W.attributes.position;for(let tt=0;tt<ot.count;tt++){let it=ot.getZ(tt)+.025;ot.setY(tt,ot.getY(tt)-it*it*14)}}W.translate(0,pt.y-.004,pt.z+.08),yt.push(rn(W,"head",2761760,2)),yt.push(...ya(q,12103840,.008,.04));let O=gs(q,Gi(q,yt),o,.9);Ma(i.osp),i.osp.rotation.set(0,0,0),i.osp.add(O.grp),i.ospRig=1,w={r:O,st:"circle",at:0,P:i.osp.position.clone(),V:si(1,0,0),yaw:0,bank:0,fish:!1,T:si(0,0,0)}});let b=(q,pt,yt)=>{let W=i.osp,O=w.r,ot=O.B;w.at+=pt;let tt=w.P,it=0,Et=q*4.2,Ut=0,ft=1.35,dt=0,gt;if(w.st==="circle"){let St=q*.08;if(gt=si(-10+Math.cos(St)*35,26+Math.sin(St*2)*2,-60+Math.sin(St)*22),tt.lerp(gt,Math.min(1,pt*1.5)),it=Math.sin(q*.7)>.6?Math.sin(Et)*.55:.05,w.at>16){w.st="hover",w.at=0;let Ct=tt.x*.5;Math.abs(Ct)<10&&(Ct=Ct<0?-14:14);let Nt=i.creekZ?i.creekZ(Ct):-30;w.T.set(Ct,0,Nt),w.H=tt.clone()}}else if(w.st==="hover")tt.lerp(si(w.T.x,13,w.T.z),Math.min(1,pt*.7)),Et=q*11,it=Math.sin(Et)*.9,dt=-.9,ft=.3,w.at>4&&(w.st="dive",w.at=0,w.A=tt.clone());else if(w.st==="dive"){let St=Math.min(1,w.at/1.4),Ct=St*St;if(tt.lerpVectors(w.A,si(w.T.x,.2,w.T.z),Ct),Ut=.75*Math.min(1,St*2.5),dt=1.2*(1-Math.max(0,St-.85)/.15*1.6),ft=St>.8?-.6:1.2,St>=1){w.st="climb",w.at=0,w.fish=!0;try{i.splashAt(w.T.x,w.T.z,1.2)}catch{}}}else w.st==="climb"&&(tt.y+=pt*(w.at<.6?1.2:3.2),tt.x+=pt*4,Et=q*7,it=Math.sin(Et)*.95,dt=-.35,ft=.5,w.at>6&&(w.st="circle",w.at=0,w.fish=!1));let xt=tt.clone().sub(W.position);if(xt.lengthSq()>1e-6){let Ct=Math.atan2(xt.x,xt.z)-w.yaw;for(;Ct>Math.PI;)Ct-=6.283;for(;Ct<-Math.PI;)Ct+=6.283;w.yaw+=Ct*Math.min(1,pt*3),w.bank+=(-Ct*1.5-w.bank)*Math.min(1,pt*2)}W.position.copy(tt),W.rotation.set(0,w.yaw,0),O.grp.rotation.set(dt,Math.PI*0,w.st==="hover"?0:w.bank*.6),O.grp.rotation.y=0,O.reset();for(let St of[1,-1]){Li(O,St,Ut,it+.08,-.2*Ut);let Ct=St>0?"L":"R";ot["w"+Ct+"e"].rotation.z=St*.25*Math.sin(Et-.8)*Math.abs(it),ot["w"+Ct+"h"].rotation.z=St*(.3*Math.sin(Et-1.4)*Math.abs(it)-.15)}ot.head.rotation.x=-dt*.8;for(let St of["L","R"])ot["l"+St+"t"].rotation.x=ft,ot["l"+St+"f"].rotation.x=w.fish?.3:ft>1?1:0},m=null;i.owl&&x("owl").then(q=>{let pt=q.world[q.BI.head],yt=[];for(let O of[1,-1])yt.push(rn(new ge(.019,10,8).translate(pt.x+O*.033,pt.y+.002,pt.z+.074),"head",16773194,2),rn(new ge(.008,6,4).translate(pt.x+O*.034,pt.y+.002,pt.z+.091),"head",328450,2),rn(new bn(.011,.045,5).rotateZ(-O*.28).translate(pt.x+O*.046,pt.y+.082,pt.z+.012),"head",6967864,2));yt.push(rn(new bn(.008,.022,5).rotateX(Math.PI*.6).translate(0,pt.y-.022,pt.z+.07),"head",3813414,2),...ya(q,2761760,.006,.03));let W=gs(q,Gi(q,yt),o,1);W.grp.scale.setScalar(1.25/i.owl.scale.x),Ma(i.owl),i.owl.add(W.grp),i.owlRig=1;{let O=new Re({color:new Ft(1.5,1.2,.18),toneMapped:!1}),ot=W.B.head,tt=q.world[q.BI.head];for(let it of[1,-1]){let Et=new Lt(new ge(.0105,10,8),O);Et.position.set(pt.x+it*.033-tt.x,pt.y+.002-tt.y,pt.z+.089-tt.z),Et.scale.set(1,1,.45),ot.add(Et);let Ut=new Lt(new ge(.0055,8,6),new Re({color:328450}));Ut.position.copy(Et.position).add(new U(it*8e-4,0,.006)),ot.add(Ut)}}m={r:W,base:i.owl.position.clone(),ry:i.owl.rotation.y,st:"perch",at:0,next:M(18,30),look:0}});let M=(q,pt)=>q+Math.random()*(pt-q),E=(q,pt,yt)=>{let W=i.owl,O=m.r,ot=O.B;if(!W.visible){m.st="perch",m.at=0,W.position.copy(m.base);return}if(m.at+=pt,O.reset(),m.st==="perch"){for(let Ut of[1,-1])Li(O,Ut,1,0,Ut<0?_a[3]??_a[0]:_a[0],_a[1],_a[2]);let tt=Math.floor(q/3.2),it=q/3.2-tt,Et=[0,1.4,-.9,2.2,.4,-1.8,1.1,0][tt%8];m.look+=(Et-m.look)*Math.min(1,pt*(it<.25?6:.5)),ot.n1.rotation.y=m.look*.2,ot.head.rotation.y=m.look*.7,ot.head.rotation.z=Math.sin(q*.9)*.04*(Math.abs(Et)>1?1:0),ot.head.rotation.x=-.05+Math.sin(q*.3)*.04,W.position.copy(m.base),W.rotation.y=m.ry,m.at>m.next&&(m.st="fly",m.at=0)}else{let it=Math.min(1,m.at/9),Et=it*6.283,Ut=7,ft=m.base.clone().add(si(-Ut,0,0)),dt=Math.sin(it*Math.PI),gt=si(ft.x+Math.cos(Et)*Ut,m.base.y+dt*2.5-(it>.1&&it<.9,0),ft.z+Math.sin(Et)*Ut*.7),xt=W.position.clone();W.position.copy(gt);let St=gt.clone().sub(xt);St.lengthSq()>1e-7&&(W.rotation.y=Math.atan2(St.x,St.z)+Math.PI);let Ct=q*5.5,Nt=it>.3&&it<.7&&Math.sin(q*1.3)>0,z=Nt?.06:Math.sin(Ct)*.85,Z=Math.max(0,(it-.88)/.12);for(let P of[1,-1]){Li(O,P,0,z+.1,-.3*Z);let J=P>0?"L":"R";ot["w"+J+"h"].rotation.z=P*.3*Math.sin(Ct-1.2)*(Nt?0:1)}ot.body.rotation.x=.9-.6*Z,ot.head.rotation.x=-.8+.5*Z;for(let P of["L","R"])ot["l"+P+"t"].rotation.x=it<.12||it>.85?-.4:1.2;it>=1&&(m.st="perch",m.at=0,m.next=M(20,40))}},I=[];new URLSearchParams(location.search).has("ppdbg")&&(globalThis.__PP=I),i.perches&&x("pelican").then(q=>{let pt=q.world[q.BI.head],yt=new ce(.05,.03,.36).translate(0,pt.y-.01,pt.z+.24);{let tt=yt.attributes.position;for(let it=0;it<tt.count;it++){let Et=tt.getZ(it)-pt.z;tt.setX(it,tt.getX(it)*(1-Et*1.1))}}let W=[rn(yt,"head",13148272),rn(new ge(.05,8,6).scale(.7,.9,3.4).translate(0,pt.y-.045,pt.z+.2),"head",5917248),...kr(q,pt,.035,.02,.035,.006,14211264),...ya(q,3814452,.012,.07)],O=Gi(q,W),ot=q.world[q.BI.lLf]||{y:0};i.perches.forEach(([tt,it,Et,Ut],ft)=>{let dt=gs(q,O,c,1.15);dt.grp.position.set(tt,it-ot.y*1.15+.01,Et),dt.grp.rotation.y=Ut,t.add(dt.grp);let gt={p:dt.grp.position.clone(),yaw:Ut,occ:null};if(D.push(gt),ft===1)for(let St of[-12,9.6])D.push({p:dt.grp.position.clone().add(new U(0,0,St)),yaw:Ut,occ:null});let xt={r:dt,yaw:Ut,ph:ft*3.7,st:"perch",at:0,al:0,hop:0,slot:gt,P:new U,V:new U,C:new U,A:new U,cw:1,id:"pp"+ft};gt.occ=xt,I.push(xt)})});let D=[],N=new U,L=new U,F=new U,X=new U,k=new U,et=0,H=0,st=!1,rt=(q,pt,yt,W,O)=>{let ot=1-O;return q.set(0,0,0).addScaledVector(pt,ot*ot).addScaledVector(yt,2*ot*O).addScaledVector(W,O*O)},zt=(q,pt,yt)=>{let W=q.r,O=W.grp,ot=W.B,tt=globalThis.__dockCam;if(q.at+=yt,q.st==="perch"||q.st==="alert"){let it=tt?X.subVectors(tt.position,O.position).setY(0).length():99;if((it<3.6||it<5.5&&et>2.2||it<6.5&&et>4.5)&&tt){q.st="flush",q.at=0,q.slot.occ=null;let Ut=k.subVectors(O.position,tt.position).setY(0).normalize(),dt=new U(Math.sign(O.position.x)||1,0,0).clone().addScaledVector(Ut,.3).normalize();q.P.copy(O.position),q.A.copy(O.position).add(new U(0,.9,0)).addScaledVector(dt,1.2),q.C.copy(O.position).addScaledVector(dt,24).add(new U(0,7,0)),q.cw=Math.random()<.5?1:-1,q.dir=dt;try{globalThis.__dockAlarm&&globalThis.__dockAlarm(q.id,O.position.x,O.position.y+.4,O.position.z)}catch{}return"fly"}return it<7.5?(q.st!=="alert"&&(q.st="alert",q.at=0,q.hop=1),"alert"):(q.st==="alert"&&q.at>2&&(q.st="perch"),q.st)}if(q.st==="flush"){if(q.at<.4)return"crouch";let it=Math.min(1,(q.at-.4)/3.4);return rt(k,q.P,q.A,q.C,it*it*(3-2*it)*.5+it*.5),F.copy(O.position),O.position.copy(k),q.V.subVectors(k,F),it>=1&&(q.st="circle",q.at=0,q.ang=Math.atan2(q.C.z-q.C.z,0)),"fly"}if(q.st==="circle"){let Et=q.at*.45*q.cw,Ut=q.circ||(q.circ=q.C.clone().addScaledVector(q.dir,7));F.copy(O.position);let ft=Math.atan2(q.C.x-Ut.x,q.C.z-Ut.z);if(O.position.set(Ut.x+Math.sin(ft+Et)*7,Ut.y+Math.sin(q.at*.3)*.8,Ut.z+Math.cos(ft+Et)*7),q.V.subVectors(O.position,F),q.at>9){let dt=null,gt=0;for(let xt of D){if(xt.occ)continue;let St=tt?X.subVectors(tt.position,xt.p).setY(0).length():99,Ct=St>9||H>8&&St>4.5,Nt=-Math.abs(St-14);tt&&(tt.getWorldDirection(N),k.subVectors(xt.p,tt.position).setY(0).normalize(),N.setY(0).normalize().dot(k)>.5&&(Nt+=30)),Ct&&(dt===null||Nt>gt)&&(gt=Nt,dt=xt)}if(dt){dt.occ=q,q.slot=dt,q.st="land",q.at=0,q.P.copy(O.position);let xt=new U(Math.sign(dt.p.x)||1,0,0);q.A.copy(dt.p).addScaledVector(xt,6).add(new U(0,3.2,0)),q.C.copy(dt.p),q.circ=null}}return"fly"}if(q.st==="land"){let it=Math.min(1,q.at/4.2),Et=1-(1-it)*(1-it),Ut=k.copy(q.C).add(L.set(0,.7*(1-ms(.8,1,it)),0));return rt(F,q.P,q.A,Ut,Et),q.V.subVectors(F,O.position),O.position.copy(F),it>=1&&(O.position.copy(q.slot.p),q.yaw=q.slot.yaw,q.st="perch",q.at=0,q.hop=1),it>.85?"land":"fly"}return"perch"},Rt=(q,pt,yt)=>{let W=globalThis.__dockCam;if(W){st||(L.copy(W.position),st=!0);let O=L.distanceTo(W.position)/Math.max(yt,.001);et+=(O-et)*Math.min(1,yt*4),H=O<.3?H+yt:0,L.copy(W.position)}for(let O of I){let ot=O.r,tt=ot.B;ot.reset();let it=zt(O,q,yt),Et=ot.grp;if(it==="fly"||it==="land"){if(Math.hypot(O.V.x,O.V.z)>1e-4){let P=Math.atan2(O.V.x,O.V.z)-Et.rotation.y;P=Math.atan2(Math.sin(P),Math.cos(P)),Et.rotation.y+=P*Math.min(1,yt*6)}let xt=O.st==="flush"&&O.at<1.6,St=xt?(O.at-.4)*10:q*6.5,Nt=O.st==="circle"&&Math.sin(q*.7+O.ph)>.2?.08:xt?.2+.5*Math.cos(St):.15+.45*Math.sin(St),z=it==="land"?1:0;tt.n1.rotation.x=1.25,tt.n2.rotation.x=-1.9,tt.head.rotation.x=.75,tt.body.rotation.x=-.25*z-.05,Et.rotation.z=O.st==="circle"?-.25*O.cw:0;for(let Z of[1,-1])Li(ot,Z,0,Nt+.1,-.3*z);for(let Z of["L","R"])tt["l"+Z+"t"]&&(tt["l"+Z+"t"].rotation.x=z?.2:1.3);Et.visible=pt<.85;continue}if(Et.rotation.z=0,Et.rotation.y+=(O.yaw-Et.rotation.y)*Math.min(1,yt*3),O.hop>0&&(O.hop=Math.max(0,O.hop-yt*3.5),Et.position.y=O.slot.p.y+Math.sin(O.hop*Math.PI)*.06),it==="crouch"){let gt=Math.sin(Math.min(1,O.at/.4)*Math.PI*.5);tt.n1.rotation.x=1.4,tt.n2.rotation.x=-2,tt.head.rotation.x=.6,tt.body.rotation.x=-.25-.3*gt,Et.position.y=O.slot.p.y-.07*gt;for(let xt of[1,-1])Li(ot,xt,1-.75*gt,.35*gt);for(let xt of["L","R"])tt["l"+xt+"t"]&&(tt["l"+xt+"t"].rotation.x=.1+.5*gt);Et.visible=pt<.85;continue}if(it==="alert"&&W){tt.n1.rotation.x=.75,tt.n2.rotation.x=-1.3,tt.head.rotation.x=.45,tt.body.rotation.x=-.15,k.copy(W.position),Et.worldToLocal(k);let gt=Math.max(-1.3,Math.min(1.3,Math.atan2(k.x,k.z)));O.al+=(gt-O.al)*Math.min(1,yt*5),tt.n2.rotation.y=O.al*.55,tt.head.rotation.y=O.al*.45;for(let xt of[1,-1])Li(ot,xt,.92,.06*Math.max(0,Math.sin(O.at*7))*(O.at<1?1:0));for(let xt of["L","R"])tt["l"+xt+"t"]&&(tt["l"+xt+"t"].rotation.x=.1);Et.visible=pt<.85;continue}O.al*=.95;let Ut=(q+O.ph)%24,ft=1,dt=0;if(tt.n1.rotation.x=1.25,tt.n2.rotation.x=-1.9,tt.head.rotation.x=.75,tt.body.rotation.x=-.25,Ut<6)tt.n2.rotation.y=Math.sin(q*.5+O.ph)*.5,tt.head.rotation.y=Math.sin(q*.8+O.ph)*.4;else if(Ut<9){let gt=ms(6,6.6,Ut)*(1-ms(8.4,9,Ut));tt.n1.rotation.y=1.3*gt,tt.n2.rotation.y=1.1*gt,tt.head.rotation.x=.75+.5*gt,tt.head.rotation.z=Math.sin(q*9)*.15*gt}else if(Ut<11){let gt=ms(9,9.8,Ut)*(1-ms(10.2,11,Ut));ft=1-gt,dt=.25*gt,tt.n1.rotation.x=1.25-.4*gt}else Ut<15&&(tt.n1.rotation.x=1.45,tt.n2.rotation.x=-2.1,tt.head.rotation.x=1.1);for(let gt of[1,-1])Li(ot,gt,ft,dt);for(let gt of["L","R"])tt["l"+gt+"t"]&&(tt["l"+gt+"t"].rotation.x=.1);ot.grp.visible=pt<.85}};return(q,pt,yt)=>{l.value=.38*(1-Math.min(1,yt*1.6))+.06,Rt(q,yt,pt),w&&i.osp.visible&&b(q,pt,yt),m&&E(q,pt,yt);for(let W of i.waders||[])W.visible&&p(W,q);for(let W of y)W.b.visible&&_(W,q);for(let W of R){let O=W.r;O.reset();let ot=O.B;if(W.k==="dol"){if(!W.d.g.visible)continue;let tt=q*4;for(let[it,Et,Ut]of[["b1",.08,0],["b2",.14,.6],["b3",.22,1.2],["fl",.3,1.8]])ot[it]&&(ot[it].rotation.x=Math.sin(tt-Ut)*Et);ot.pL&&(ot.pL.rotation.z=-.2,ot.pR.rotation.z=.2)}else for(let[tt,it,Et]of[["b1",.25,0],["b2",.4,.7],["fl",.5,1.4]])ot[tt]&&(ot[tt].rotation.y=Math.sin(q*28-Et)*it)}}}function Ze(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Qf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let A=0;A<o[h].length;++A)d.push(o[h][A][u]);let x=Qf(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function Qf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ln(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let x=0;x<e;x++){let A=h.getComponent(u,x);a.setComponent(u+f,x,A)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ny=new URLSearchParams(location.search).has("owlday");function tp({S:i,HQ:t,H:e,T:n,rr:s,fbm:r,woodTex:o,PZ0:a,PZ1:l,PY:c,HAM:h,windMat:f,canvasTex:u}){let d=(z,Z,P)=>new U(z,Z,P),x=new Be,A=new Ft,v=(z,Z,P=!0)=>{let J=new Lt(z,Z);return J.castShadow=P&&t,J.receiveShadow=t,i.add(J),J},p=(z,Z,P,J,K,S,g=0,B=0,G=0)=>{let Q=new ce(z,Z,P);return Q.rotateZ(G),Q.rotateX(B),Q.rotateY(g),Q.translate(J,K,S),Q},y={lampPos:[],glass:null,update:null},C=y.aud=[],_=z=>(z.updateMatrixWorld(!0),new Gn().setFromObject(z)),R=new Xt({map:o,bumpMap:o,bumpScale:2.2,roughness:.88,color:13351074}),w=new Xt({map:o,roughness:.92,color:10259580}),b=1.6;{let z=Math.floor((a-l)/.16),Z=new sn(new ce(b,.04,.14),R,z+400),P=0;for(let J=0;J<z;J++){x.position.set(s(-.01,.01),c+s(-.006,.006),a-J*.16),x.rotation.set(0,s(-.008,.008),s(-.006,.006)),x.scale.set(1,1,1),x.updateMatrix(),Z.setMatrixAt(P,x.matrix);let K=s(.7,1.05);A.setRGB(K,K*s(.94,1),K*s(.86,.97)),Z.setColorAt(P++,A)}for(let J=0;J<40;J++){x.position.set(1,c,l-.08-J*.16),x.rotation.set(0,s(-.005,.005),0),x.scale.set(6.4/b,1,1),x.updateMatrix(),Z.setMatrixAt(P,x.matrix);let K=s(.7,1.02);A.setRGB(K,K*.96,K*.9),Z.setColorAt(P++,A)}Z.count=P,Z.castShadow=Z.receiveShadow=t,i.add(Z)}let m=[];for(let z of[-b/2+.05,b/2-.05])m.push(p(.06,.25,a-l,z,c-.15,(a+l)/2));for(let z=a;z>=l;z-=2.4)m.push(p(b+.3,.22,.1,0,c-.36,z));for(let z of[-b/2-.04,b/2+.04]){for(let Z=a;Z>=l;Z-=2.4)m.push(p(.09,1.05,.09,z,c+.5,Z));m.push(p(.06,.05,a-l,z,c+1.02,(a+l)/2),p(.14,.04,a-l,z,c+1.06,(a+l)/2),p(.04,.09,a-l,z,c+.5,(a+l)/2))}let M=l,E=l-6.4;for(let[z,Z,P,J]of[[4.2,(M+E)/2,.06,6.4],[1.8,E,4.8,.06],[-2.2,M-1.2,.06,2.4]])m.push(p(P,.05,J,z,c+1.02,Z),p(Math.max(P,.14),.04,Math.max(J,.14),z,c+1.06,Z));for(let[z,Z]of[[4.2,M],[4.2,M-2.1],[4.2,M-4.3],[4.2,E],[2.1,E],[-.6,E],[-2.2,M],[-2.2,M-2.4],[3,M],[-.8,M]])m.push(p(.1,1.05,.1,z,c+.5,Z));m.push(p(.42,.05,4.6,3.9,c+.45,M-3.2),p(.06,.4,4.6,4.12,c+.75,M-3.2));for(let z of[M-1.1,M-3.2,M-5.3])m.push(p(.4,.45,.06,3.9,c+.22,z));let I=1.4,D=4.3,N=M-.6,L=E+.1,F=c+2.55;for(let z of[I,D])for(let Z of[N,L])m.push(p(.14,F-c,.14,z,(F+c)/2,Z));m.push(p(D-I+.2,.18,.12,(I+D)/2,F,N),p(D-I+.2,.18,.12,(I+D)/2,F,L),p(.12,.18,N-L,I,F,(N+L)/2),p(.12,.18,N-L,D,F,(N+L)/2)),v(Ze(m.map(z=>z.toNonIndexed())),R);{let z=new Xt({color:8226434,metalness:.75,roughness:.38}),Z=(I+D)/2,P=(N+L)/2,J=(D-I)/2+.45,K=(N-L)/2+.45,S=new bn(1,1,4,1,!0);S.rotateY(Math.PI/4),S.scale(J*1.414,1.1,K*1.414),S.translate(Z,F+.1+.55,P);let g=v(S,z);g.material.side=De;let B=[];for(let G=-6;G<=6;G++){let Q=d(Z+G/6*J,F+.1,P+K),Mt=d(Z+G/6*J*.02,F+1.2,P);B.push(new Rn(new Rs(Q,Mt),1,.012,3));let ut=d(Z+G/6*J,F+.1,P-K);B.push(new Rn(new Rs(ut,Mt),1,.012,3))}v(Ze(B),z,!1),y.roofTop=d(Z,F+1.2,P)}{let z=new Xt({map:o,color:11048320,roughness:.9});z.onBeforeCompile=K=>{K.vertexShader=K.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vW=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;`),K.fragmentShader=K.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vW;float hs(vec2 p){return fract(sin(dot(p,vec2(12.9,78.2)))*43758.5);}`).replace("#include <color_fragment>",`#include <color_fragment>
  float wet=1.-smoothstep(.35,.95,vW.y);diffuseColor.rgb*=mix(1.,.3,wet);float bar=step(.74,hs(floor(vW.xz*40.)+floor(vec2(vW.y*40.,atan(vW.x,vW.z)*20.))))*smoothstep(.9,.4,vW.y)*smoothstep(-.8,-.1,vW.y);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.72,.7,.63),bar*.85);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.28,wet);`)};let Z=[];for(let K=a;K>=l;K-=2.4)for(let S of[-b/2-.04,b/2+.04])Z.push([S,K,.11,c+1.05]);for(let K of[-2.2,-.6,1,2.6,4.2])for(let S of[M,M-2.1,M-4.3,E])Z.push([K,S,.13,c-.05]);Z.push([-4.6,E-1.4,.14,2.6],[-4.6,E-6.4,.14,2.6],[-1.4,E-6.4,.14,2.6]);let P=new ze(1,1.08,1,9);P.translate(0,.5,0);let J=new sn(P,z,Z.length);Z.forEach(([K,S,g,B],G)=>{let Q=Math.min(e(K,S),0)-2;x.position.set(K,Q,S),x.rotation.set(s(-.012,.012),s(0,6),s(-.012,.012)),x.scale.set(g,B-Q,g),x.updateMatrix(),J.setMatrixAt(G,x.matrix)}),J.castShadow=J.receiveShadow=t,i.add(J)}{let z=[],Z=d(-1.4,c,M-1.2-0),P=M-.4,J=E-1.6,K=.32,S=d(-2.2,c,M-1.2),g=d(-4.4,K+.12,M-1.2),B=S.distanceTo(g),G=Math.atan2(S.y-g.y,S.x-g.x),Q=new Ue;Q.position.copy(S).lerp(g,.5),Q.rotation.z=G,i.add(Q);let Mt=[p(B,.05,1,0,0,0)];for(let de=0;de<14;de++)Mt.push(p(.04,.03,.95,-B/2+de*B/13,.04,0));for(let de of[-.5,.5])Mt.push(p(B,.05,.04,0,.95,de),p(B,.2,.05,0,.05,de));for(let de=0;de<4;de++)for(let Hn of[-.5,.5])Mt.push(p(.05,.95,.05,-B/2+.2+de*(B-.4)/3,.48,Hn));let ut=new Lt(Ze(Mt.map(de=>de.toNonIndexed())),new Xt({color:10133664,metalness:.7,roughness:.45}));ut.castShadow=t,Q.add(ut);let $=-3,j=E-3.9,vt=[];for(let de=0;de<36;de++)vt.push(p(3,.04,.15,$,K,j+3-de*.168));vt.push(p(3.1,.18,.12,$,K-.1,j+3.05),p(3.1,.18,.12,$,K-.1,j-3.05),p(.12,.18,6.1,$-1.55,K-.1,j),p(.12,.18,6.1,$+1.55,K-.1,j));let Vt=v(Ze(vt.map(de=>de.toNonIndexed())),R),At=v(p(2.9,.35,5.9,$,K-.36,j),new Xt({color:2763304,roughness:.6}),!1),Pt=new Xt({color:12106940,metalness:.9,roughness:.3}),Bt=[];for(let[de,Hn]of[[$-1.45,j+2.2],[$-1.45,j-2.2],[$+1.45,j-2.6],[1.8,E+.15]]){let je=de>0?c+.04:K+.04;Bt.push(p(.28,.04,.06,de,je+.06,Hn,Math.PI/2),p(.06,.06,.06,de,je+.02,Hn))}v(Ze(Bt.map(de=>de.toNonIndexed())),Pt);let nt=new Er;nt.moveTo(-.75,0),nt.lineTo(.75,0),nt.lineTo(.9,.5),nt.lineTo(-.9,.5),nt.lineTo(-.75,0);let wt=new Bo(nt,{depth:4.2,bevelEnabled:!1});wt.translate(0,0,-2.1);let V=wt.attributes.position;for(let de=0;de<V.count;de++){let Hn=V.getZ(de);if(Hn<-1.6){let je=(-1.6-Hn)/.5;V.setY(de,V.getY(de)+je*.25*(1-V.getY(de)/.5)+(V.getY(de)<.01?je*.18:0))}}wt.computeVertexNormals();let Tt=new Xt({color:5004874,metalness:.55,roughness:.5,side:De}),ct=new Ue,bt=new Lt(wt,Tt);bt.castShadow=t,ct.add(bt);let Dt=new Xt({color:9075298,roughness:.8});for(let de of[-1,.3,1.5])ct.add(new Lt(new ce(1.6,.05,.3),Dt).translateY(.38).translateZ(de));let _t=new Lt(new ce(.3,.5,.35),new Xt({color:1710618,roughness:.4,metalness:.3}));_t.position.set(0,.7,2.25),ct.add(_t),ct.position.set($-2.6,-.12,j),ct.rotation.y=.04,i.add(ct),y.boat=ct;let Gt=new Xt({color:14207400,roughness:1}),Yt=[];for(let[de,Hn]of[[j+2.2,j+1.6],[j-2.2,j-1.7]]){let je=d($-1.45,K+.08,de),mt=d($-2.6+.85,.38,Hn);Yt.push(new Rn(new ni(je,je.clone().lerp(mt,.5).add(d(0,-.12,0)),mt),6,.015,4))}v(Ze(Yt),Gt,!1);let he=new Re({color:1911322,wireframe:!0}),ue=new Lt(new ce(.6,.6,.6,6,6,6),he);ue.position.set(-1.4,c+.32,E+.6),ue.rotation.y=.3,i.add(ue);let Ke=new Lt(new ce(.58,.04,.58),new Xt({color:13215290,roughness:.7}));Ke.position.set(-1.4,c+.03,E+.6),Ke.rotation.y=.3,i.add(Ke);let xn=new Lt(new Ri(.18,.03,5,16),Gt);xn.rotation.x=Math.PI/2,xn.position.set(-.8,c+.04,E+.4),i.add(xn)}{let z=new Xt({color:15525594,roughness:.7}),Z=[],P=(J,K,S)=>{let g=[p(.5,.05,.48,0,.45,0),p(.5,.6,.04,0,.82,.24,0,-.18),p(.04,.04,.5,-.26,.65,0),p(.04,.04,.5,.26,.65,0)];for(let G of[-.24,.24]){g.push(p(.04,.45,.04,G,.23,-.2),p(.04,.45,.04,G,.23,.2));let Q=new Rn(new ni(d(G,.02,-.38),d(G,-.06,0),d(G,.05,.42)),6,.02,4);g.push(Q)}let B=Ze(g.map(G=>G.index?G.toNonIndexed():G));B.rotateY(S),B.translate(J,c+.02,K),Z.push(B)};P(2.3,M-2.2,-.5),P(2.6,M-4,-1.1),v(Ze(Z),z)}y.glass=new Xt({color:16760944,emissive:16752704,emissiveIntensity:1.6});let X=new Xt({color:1906193,roughness:.6,metalness:.6});[[I+.12,c+2.1,N],[I+.12,c+2.1,L],[-b/2-.04,c+1.3,a-14.4],[b/2+.04,c+1.3,a-38]].forEach(([z,Z,P])=>{let J=new Ue,K=new Lt(new ce(.14,.2,.14),y.glass),S=new Lt(new bn(.13,.1,4),X);if(S.position.y=.15,S.rotation.y=Math.PI/4,J.add(K,S),Z<c+1.6){let g=z>0?1:-1,B=new Lt(new ce(.2,.025,.025),X);B.position.set(-g*.08,.26,0);let G=new Lt(new ce(.012,.07,.012),X);G.position.set(0,.22,0);let Q=new Lt(new ce(.16,.025,.16),X);Q.position.y=-.11;let Mt=new Lt(new ce(.025,.5,.025),X);Mt.position.set(-g*.17,.03,0),J.add(B,G,Q,Mt)}J.position.set(z+(z>0?.12:-.12),Z,P),i.add(J),y.lampPos.push(d(z+(z>0?.12:-.12),Z,P))});{let z=[],P=[[I+.05,N-.05,D-.05,N-.05],[D-.05,N-.05,D-.05,L+.05],[D-.05,L+.05,I+.05,L+.05],[I+.05,L+.05,I+.05,N-.05]],J=[];for(let[ut,$,j,vt]of P.map(([Vt,At,Pt,Bt])=>{let nt=(I+D)/2,wt=(N+L)/2,V=.94;return[nt+(Vt-nt)*V,wt+(At-wt)*V,nt+(Pt-nt)*V,wt+(Bt-wt)*V]})){let Vt=Math.hypot(j-ut,vt-$),At=Math.max(3,Math.round(Vt/.38)),Pt=[];for(let Bt=0;Bt<=At;Bt++){let nt=Bt/At,wt=F-.34-.13*4*nt*(1-nt);Pt.push(d(ut+(j-ut)*nt,wt,$+(vt-$)*nt)),Bt>0&&Bt<At&&z.push(d(ut+(j-ut)*nt,wt-.06,$+(vt-$)*nt))}J.push(new Rn(new Hi(Pt),At*2,.006,3).toNonIndexed())}v(Ze(J),new Xt({color:1710100,roughness:.8}),!1).name="wire(attach)";let K=new Re({color:16767392,toneMapped:!1}),S=new ge(.035,6,4),g=new sn(S,K,z.length);z.forEach((ut,$)=>{x.position.copy(ut),x.rotation.set(0,0,0),x.scale.setScalar(1),x.updateMatrix(),g.setMatrixAt($,x.matrix)}),g.onBeforeRender=()=>{let ut=y.win?y.win.emissiveIntensity:0,$=Math.min(1,ut/1.2);K.color.setRGB(.55+2.6*$,.42+1.7*$,.25+.75*$)},i.add(g),y.bulbs=z,z.forEach((ut,$)=>C.push(["bulb"+$,new Gn().setFromCenterAndSize(ut,d(.07,.07,.07)),K]));let B=[],G=[];for(let[ut,$]of[[E+.45,.5],[E+.25,.62]]){let j=new ze(.006,.014,2.3,5);j.translate(0,1.15,0),j.rotateZ(-$),j.translate(4.14,c+.55,ut),B.push(j.toNonIndexed());let vt=new ze(.025,.025,.3,6).translate(4.14,c+.62,ut);B.push(vt.toNonIndexed())}v(Ze(B),new Xt({color:2762274,roughness:.5}));let Q=p(.62,.38,.4,.55,c+.21,E+.75,.2),Mt=p(.64,.06,.42,.55,c+.43,E+.75,.2);{let ut=v(Q,new Xt({color:4157338,roughness:.55}));C.push(["cooler",_(ut),ut.material])}{let ut=v(Mt,new Xt({color:15921126,roughness:.5}));C.push(["cooler-lid",_(ut),ut.material])}v(new ze(.17,.13,.3,10).translate(-1.85,c+.17,E+1.7),new Xt({color:10902074,roughness:.85}));{let ut=[];for(let j=0;j<9;j++){let vt=new ge(s(.07,.11),6,4);vt.translate(-1.85+s(-.1,.1),c+.4+s(0,.14),E+1.7+s(-.1,.1)),ut.push(vt.toNonIndexed())}v(Ze(ut),new Xt({color:4155956,roughness:.8}));let $=[];for(let j=0;j<5;j++)$.push(new ge(.045,5,4).translate(-1.85+s(-.12,.12),c+.55+s(0,.06),E+1.7+s(-.12,.12)).toNonIndexed());v(Ze($),new Xt({color:14173242,roughness:.6}))}{let ut=new we(.6,1.1,6,10),$=ut.attributes.position;for(let vt=0;vt<$.count;vt++)$.setZ(vt,Math.sin($.getX(vt)*9)*.03+Math.sin($.getY(vt)*7)*.03);ut.rotateX(-Math.PI/2),ut.translate(3.9,c+.49,M-4.6);let j=new Xt({color:9077880,roughness:.95,side:De,transparent:!0,opacity:.85});j.forceSinglePass=!0,v(ut,j,!1)}}let k=(z,Z)=>e(z,Z)>.75;{let B=function(nt,wt,V,Tt,ct){let bt=nt.clone().addScaledVector(wt,V),Dt=nt.clone().lerp(bt,.33).add(d(s(-.25,.25),s(-.15,.25),s(-.25,.25)).multiplyScalar(V)),_t=nt.clone().lerp(bt,.66).add(d(s(-.25,.25),s(-.2,.15),s(-.25,.25)).multiplyScalar(V));if(K.push(new Rn(new br(nt,Dt,_t,bt),8,Tt,6)),ct<2&&bt.y>nt.y-1&&g.push(nt.clone().lerp(bt,.5)),ct>0)for(let Gt=0;Gt<3;Gt++){let Yt=wt.clone().add(d(s(-1,1),s(-.25,.3),s(-1,1))).setY(Math.max(-.12,wt.y*.35+s(-.2,.22))).normalize();B(bt,Yt,V*s(.62,.85),Tt*.62,ct-1)}else S.push(bt)},z=new Xt({color:5917762,roughness:.95}),Z=new Xt({color:3424298,roughness:.95}),P=u(64,256,(nt,wt,V)=>{nt.clearRect(0,0,wt,V);for(let Tt=0;Tt<70;Tt++){let ct=Math.random()*wt,bt=V*(.3+Math.random()*.7);nt.strokeStyle=`rgba(200,205,185,${.4+Math.random()*.5})`,nt.lineWidth=1+Math.random()*1.5,nt.beginPath(),nt.moveTo(ct,0),nt.bezierCurveTo(ct+(Math.random()-.5)*14,bt*.4,ct+(Math.random()-.5)*14,bt*.7,ct+(Math.random()-.5)*6,bt),nt.stroke()}}),J=new Xt({map:P,color:12896690,alphaTest:.3,emissive:2764326,side:De,roughness:1,transparent:!1});J.alphaToCoverage=!0,J.onBeforeCompile=nt=>{nt.uniforms.t=n,nt.vertexShader=nt.vertexShader.replace("#include <common>",`#include <common>
uniform float t;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{vec3 ip=instanceMatrix[3].xyz;float k=clamp(-position.y/1.8,0.,1.);k*=k;float sw=sin(t*1.1+ip.x*.3+ip.z*.2)*.5+sin(t*2.3+float(gl_InstanceID))*.2;transformed.x+=sw*k*.35;transformed.z+=cos(t*.9+ip.x*.2)*k*.15;}`)};let K=[],S=[],g=[],G=[];for(let[nt,wt,V]of h)for(let Tt=0;Tt<Math.round(V/3.5);Tt++){let ct=s(0,6.28),bt=s(0,V*.45),Dt=nt+Math.cos(ct)*bt,_t=wt+Math.sin(ct)*bt;k(Dt,_t)&&Math.hypot(Dt-h[4][0]+1,_t-h[4][1]-5)>10&&G.push([Dt,_t,s(.8,1.25)])}for(let nt=0;nt<26;nt++){let wt=s(-260,-60),V=s(-260,-120);G.push([wt,V,s(1.4,2)])}for(let[nt,wt,V]of G){let Tt=d(nt,e(nt,wt)-.2,wt),ct=d(nt+s(-.4,.4),Tt.y+2*V,wt+s(-.4,.4));K.push(new Rn(new ni(Tt,d(nt+s(-.3,.3),Tt.y+V,wt+s(-.3,.3)),ct),4,.5*V,8));for(let bt=0;bt<5;bt++){let Dt=bt*1.26+s(-.35,.35);B(ct,d(Math.cos(Dt),s(.08,.3),Math.sin(Dt)).normalize(),4.2*V,.34*V,t?3:2)}}v(Ze(K),z);let Q=u(256,256,(nt,wt,V)=>{nt.clearRect(0,0,wt,V);for(let Tt=0;Tt<420;Tt++){let ct=wt/2+(Math.random()-.5)*wt*.9*Math.sqrt(Math.random()),bt=V/2+(Math.random()-.5)*V*.9*Math.sqrt(Math.random());if(Math.hypot(ct-wt/2,bt-V/2)>wt*.46)continue;let Dt=Math.random()*6.28,_t=5+Math.random()*5,Gt=Math.random();nt.fillStyle=`rgb(${60+Gt*70|0},${80+Gt*75|0},${35+Gt*35|0})`,nt.save(),nt.translate(ct,bt),nt.rotate(Dt),nt.beginPath(),nt.ellipse(0,0,_t,_t*.42,0,0,6.28),nt.fill(),nt.restore()}});Q.generateMipmaps=!0,y.leafSun={value:d(0,.1,-1)},y.leafI={value:1};let Mt=new Xt({map:Q,color:10464892,roughness:.8,alphaTest:.45,side:De});Mt.alphaToCoverage=!0,Mt.onBeforeCompile=nt=>{nt.uniforms.sunW=y.leafSun,nt.uniforms.lI=y.leafI,nt.uniforms.t=n,nt.vertexShader=nt.vertexShader.replace("#include <common>",`#include <common>
uniform float t;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{vec3 ip=instanceMatrix[3].xyz;transformed.xz+=vec2(sin(t*1.3+ip.x*.4),cos(t*1.1+ip.z*.4))*.06;}`),nt.fragmentShader=nt.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 sunW;uniform float lI;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{vec3 sv=normalize((viewMatrix*vec4(sunW,0.)).xyz);float bl=pow(max(dot(-normalize(vViewPosition),sv),0.),5.);totalEmissiveRadiance+=diffuseColor.rgb*(vec3(1.,.62,.3)*bl*1.6*lI+vec3(.5,.55,.7)*.05);}`)};let ut=[];for(let nt=0;nt<3;nt++){let wt=new we(2.6,2.6);wt.rotateX(-Math.PI/2+(nt?1.15:0)),wt.rotateY(nt*2.1),ut.push(wt)}let $=Ze(ut);{let nt=$.attributes.position,wt=$.attributes.normal;for(let V=0;V<nt.count;V++){let Tt=d(nt.getX(V),nt.getY(V)+.9,nt.getZ(V)).normalize();wt.setXYZ(V,Tt.x,Tt.y,Tt.z)}}let j=t?9:6,vt=new sn($,Mt,S.length*j),Vt=0;for(let nt of S)for(let wt=0;wt<j;wt++){let V=s(0,6.28),Tt=s(0,2.2);x.position.copy(nt).add(d(Math.cos(V)*Tt,s(-.3,1.1)-Tt*.18,Math.sin(V)*Tt)),x.rotation.set(s(-.3,.3),s(0,6.28),s(-.3,.3)),x.scale.setScalar(s(.8,1.35)),x.updateMatrix(),vt.setMatrixAt(Vt,x.matrix),A.setHSL(s(.17,.26),s(.25,.45),s(.36,.56)),vt.setColorAt(Vt++,A),wt===0&&nt.y>2&&g.push(nt.clone())}vt.castShadow=t,vt.receiveShadow=!1,i.add(vt);let At=new we(.7,1.8);At.translate(0,-.9,0);let Pt=t?6:4,Bt=new sn(At,J,g.length*Pt);Vt=0;for(let nt of g)for(let wt=0;wt<Pt;wt++)x.position.copy(nt).add(d(s(-1.2,1.2),s(-.5,-.1),s(-1.2,1.2))),x.rotation.set(0,s(0,6),0),x.scale.set(s(.8,1.4),s(.7,1.6),1),x.updateMatrix(),Bt.setMatrixAt(Vt++,x.matrix);i.add(Bt)}{let z=new Oo(1,1),Z=z.attributes.position;for(let g=0;g<Z.count;g++){let B=.8+Math.sin(Z.getX(g)*5+Z.getZ(g)*3)*.12;Z.setXYZ(g,Z.getX(g)*B,Z.getY(g)*B*.7,Z.getZ(g)*B)}z.computeVertexNormals();let P=t?420:180,J=new sn(z,new Xt({color:6123070,roughness:.9}),P),K=0,S=0;for(;K<P&&S<P*40;){S++;let g=s(-90,120),B=s(-140,40),G=e(g,B);G<.55||G>2.6||h.some(([Q,Mt,ut])=>Math.hypot(g-Q,B-Mt)<ut*1.05)&&(x.position.set(g,G+.3,B),x.rotation.y=s(0,6),x.scale.setScalar(s(.7,1.6)),x.updateMatrix(),J.setMatrixAt(K,x.matrix),A.setHSL(s(.2,.26),s(.25,.4),s(.22,.32)),J.setColorAt(K++,A))}J.count=K,J.castShadow=t,i.add(J)}{let[z,Z]=[h[4][0]-1,h[4][1]+5],P=e(z,Z)+2.4,J=new Ue;J.position.set(z,0,Z),J.rotation.y=-.44,J.scale.setScalar(.8),i.add(J);let K=new Xt({color:15328470,roughness:.85}),S=new Xt({color:16184298,roughness:.7}),g=new Xt({color:7305848,metalness:.6,roughness:.45,side:De}),B=y.win=new Xt({color:2240568,emissive:16756832,emissiveIntensity:0,roughness:.2}),G=(nt,wt,V,Tt,ct)=>{let bt=new Lt(nt,wt);return bt.position.set(V,Tt,ct),bt.castShadow=t,bt.receiveShadow=t,J.add(bt),bt};G(new ce(11,4.2,8),K,0,P+2.1,0);for(let nt=-4;nt<=4;nt+=2)for(let wt of[-3.5,0,3.5])G(new ce(.35,P,.35),S,nt*1.2,P/2,wt);G(new ce(13,.25,3),S,0,P,5.4);for(let nt=-6;nt<=6;nt+=2)G(new ce(.18,3.6,.18),S,nt,P+1.8,6.7);G(new ce(13,.1,.1),S,0,P+1,6.7);let Q=new bn(1,1,4,1,!0);Q.rotateY(Math.PI/4),Q.scale(8.4,3,6.5),G(Q,g,0,P+4.2+1.5,0);let Mt=new ce(13.4,.12,3.2);Mt.rotateX(-.22),G(Mt,g,0,P+3.7,5.6);for(let nt=-4;nt<=4;nt+=2.6)G(new ce(1,1.7,.05),B,nt,P+2.1,4.03);let ut=new ce(1.6,.12,.4);for(let nt=0;nt<10;nt++)G(ut,S,0,P*(nt/10),7+(10-nt)*.35);let $=J.children.length;y.housePos=d(z,P*.8,Z),G(new ce(.95,2.05,.06),new Xt({color:3951172,roughness:.8}),2.5,P+1.15,4.04),G(new ce(.75,1.7,.02),new Xt({color:1712158,roughness:.6,transparent:!0,opacity:.7}),2.5,P+1.2,4.08),G(new ce(.18,.24,.12),B,3.4,P+2.55,4.1);let j=new Xt({color:3099194,roughness:.7});for(let[nt,wt]of[[-2.6,.25],[-1.3,-.2],[5.2,.5]]){let V=G(new ce(.6,.06,.55),j,nt,P+.55,5.3);V.rotation.y=wt,G(new ce(.6,.75,.06),j,nt,P+.95,5).rotation.set(-.15,wt,0);for(let ct of[-.27,.27]){let bt=G(new ce(.05,.45,.05),j,nt+ct,P+.35,5.3);bt.rotation.y=wt}}let vt=new Xt({color:5208634,roughness:.85}),Vt=new Xt({color:7230008,roughness:.9});for(let nt of[-5,-1,3])G(new ze(.006,.006,.5,3),Vt,nt,P+2.6,6.1),G(new ze(.2,.14,.2,8),Vt,nt,P+2.25,6.1),G(new ge(.34,8,6),vt,nt,P+2.12,6.1).scale.set(1,.7,1);let At=(nt,wt)=>{let V=Math.cos(-.44),Tt=Math.sin(-.44);return e(z+.8*(nt*V+wt*Tt),Z+.8*(-nt*Tt+wt*V))/.8},Pt=new Xt({color:2898476,roughness:.9,wireframe:!0});for(let[nt,wt,V]of[[2.2,.3,9.3],[2.2,.9,9.3],[2.9,.3,9.6]]){let Tt=G(new ce(.6,.6,.6,4,4,4),Pt,nt,At(nt,V)+wt+.02,V);Tt.rotation.y=.2}let Bt=G(new ge(.3,12,6),new Xt({color:15245882,roughness:.5}),-7,At(-7,8.5)+.17,8.5);Bt.scale.set(.75,.5,6.5),Bt.rotation.y=.4,J.updateMatrixWorld(!0);for(let nt of J.children.slice($))C.push(["house-prop:"+nt.geometry.type,_(nt),nt.material]);{J.updateMatrix();let nt=new Map;for(let wt of[...J.children])wt.isMesh&&!wt.isInstancedMesh&&(wt.updateMatrix(),nt.has(wt.material)||nt.set(wt.material,[]),nt.get(wt.material).push(wt));for(let[wt,V]of nt)if(!(V.length<2))try{let Tt=V.map(Dt=>{let _t=Dt.geometry.clone();_t=_t.index?_t.toNonIndexed():_t;for(let Gt of Object.keys(_t.attributes))Gt!=="position"&&Gt!=="normal"&&Gt!=="uv"&&_t.deleteAttribute(Gt);return _t.attributes.uv||_t.setAttribute("uv",new ie(new Float32Array(_t.attributes.position.count*2),2)),_t.applyMatrix4(Dt.matrix)}),ct=Ze(Tt);if(!ct)continue;let bt=new Lt(ct,wt);bt.castShadow=t&&!wt.transparent,bt.receiveShadow=t;for(let Dt of V)J.remove(Dt);J.add(bt)}catch{}}}let et=new Xt({color:16052714,roughness:.75}),H=new Xt({color:1381653,roughness:.7}),st=new Xt({color:14725168,roughness:.5}),rt=new Xt({color:14704698,roughness:.5}),zt=(z,Z,P)=>new Lt(new Rn(new Hi(z),10,Z,5),P);function Rt({body:z,leg:Z,bill:P,billCurve:J,neckS:K,s:S}){let g=new Ue,B=new Lt(new ge(.2,10,8),z);B.scale.set(.75,.8,1.8),B.position.y=1,B.rotation.x=-.35,g.add(B),g.userData.legs=[];for(let $ of[-.05,.05]){let j=new Lt(new ze(.012,.012,.95).translate(0,-.47,0),Z);j.position.set($,.95,0),g.add(j),g.userData.legs.push(j)}let G=new Ue;G.position.set(0,1.1,-.25),g.add(G),G.add(zt(K?[d(0,0,0),d(0,.25,.05),d(0,.42,-.08),d(0,.6,-.1)]:[d(0,0,0),d(0,.15,-.05),d(0,.28,-.12)],.035,z));let Q=new Lt(new ge(.055,8,6),z),Mt=K?d(0,.6,-.12):d(0,.3,-.14);Q.position.copy(Mt),G.add(Q);let ut=J?zt([Mt.clone().add(d(0,0,-.04)),Mt.clone().add(d(0,-.06,-.18)),Mt.clone().add(d(0,-.16,-.27))],.012,P):new Lt(new bn(.022,.28,5),P);return J||(ut.position.copy(Mt).add(d(0,-.01,-.17)),ut.rotation.x=-Math.PI/2-.1),G.add(ut),g.scale.setScalar(S),g.userData.head=G,g.traverse($=>$.castShadow=t),g}let q=[],pt=(z,Z,P,J,K=0,S=.1)=>{for(let g=0;g<200;g++){let B=s(z,Z),G=s(P,J),Q=e(B,G);if(Q>K&&Q<S)return[B,Q,G]}return null},yt=(z,Z,P)=>{if(Z){if(y.housePos){let J=Z[0]-y.housePos.x,K=Z[2]-y.housePos.z,S=Math.hypot(J,K);S<9&&(Z=[y.housePos.x+J/S*9.5,0,y.housePos.z+K/S*9.5],Z[1]=e(Z[0],Z[2]))}z.position.set(Z[0],Z[1]-.02,Z[2]),z.rotation.y=P,i.add(z),z.userData.ph=s(0,6),z.userData.p0=z.position.clone(),q.push(z)}};for(let z=0;z<5;z++)yt(Rt({body:et,leg:H,bill:st,neckS:!0,s:s(.95,1.05)}),z<2?pt(16,26,-36,-14,.05,.14):pt(-40,30,-40,-12),s(0,6));let W=pt(12,20,-34,-16,.05,.14)||[14,0,-22];for(let z=0;z<7;z++){let Z=Rt({body:et,leg:rt,bill:rt,billCurve:!0,s:.62});Z.userData.ibis=!0,yt(Z,[W[0]+s(-2.5,2.5),e(W[0],W[2]),W[2]+s(-1.5,1.5)],s(0,6))}{let z=new Xt({color:8227740,roughness:.8}),Z=Rt({body:z,leg:new Xt({color:4866102}),bill:st,neckS:!0,s:1.35});Z.userData.heron=!0,yt(Z,pt(3,7,-34,-16,.05,.14)||[9,0,-20],2.2)}let O=[];{let z=Ze([new ge(.025,6,4).scale(1.3,.5,1),new ce(.04,.018,.02).translate(.045,0,-.02)]),Z=new Xt({color:9067066,roughness:.6}),P=t?120:50,J=new sn(z,Z,P);for(let K=0;K<P;K++){let S=null;for(let g=0;g<40&&!S;g++){let B=pt(-5.5,5.5,1,15,-.12,.15);B&&Math.abs(B[0])>1.5&&(S=B)}S=S||pt(-20,20,-30,10,-.2,.12)||[0,0,0],O.push({p:d(S[0],S[1]+.012,S[2]),ph:s(0,100),d:s(0,6.28)}),A.setHSL(s(.04,.08),s(.4,.6),s(.25,.4)),J.setColorAt(K,A)}i.add(J),y.crabs=J}let ot=[];for(let z=0;z<5;z++){let Z=new Ue,P=new Lt(new ge(.12,8,6),et);P.scale.set(1,1,3);let J=new Lt(new ze(.03,.03,.35),et);J.position.set(0,.02,-.4),J.rotation.x=1.4;let K=new Lt(new ze(.01,.01,.6),H);K.rotation.x=1.5,K.position.z=.55;let S=new we(.85,.32);S.translate(.42,0,0);let g=new Lt(S,et),B=new Lt(S,et);B.scale.x=-1,g.rotation.x=B.rotation.x=-Math.PI/2,g.material=B.material=new Xt({color:16052714,side:De}),Z.add(P,J,K,g,B),Z.userData={l:g,r:B,ph:s(0,6),rad:s(40,70),h:s(6,14),sp:s(.025,.04),cz:-45+s(-10,10)},i.add(Z),ot.push(Z)}let tt=[];{let z=new Xt({color:6049860,roughness:.85,side:De}),Z=new Xt({color:14273974,roughness:.8});for(let P=0;P<6;P++){let J=new Ue,K=new Lt(new ge(.2,8,6),z);K.scale.set(1,.9,3.2);let S=new Lt(new ge(.09,6,5),Z);S.position.set(0,.12,-.62);let g=new Lt(new bn(.05,.55,5),new Xt({color:9072725}));g.rotation.x=-Math.PI/2-.35,g.position.set(0,.02,-.92);let B=new we(1.15,.42,4,1),G=B.attributes.position;for(let ut=0;ut<G.count;ut++){let $=G.getX(ut);G.setY(ut,G.getY(ut)+($>0,0)),G.setZ(ut,-Math.sin($*2.4)*.06)}B.translate(.58,0,0);let Q=new Lt(B,z),Mt=new Lt(B,z);Mt.scale.x=-1,Q.rotation.x=Mt.rotation.x=-Math.PI/2,J.add(K,S,g,Q,Mt),J.userData={l:Q,r:Mt,i:P},i.add(J),tt.push(J)}}let it=new Ue;{let z=new Xt({color:4865072,side:De}),Z=new Xt({color:15262422,side:De}),P=new Lt(new ge(.15,8,6),Z);P.scale.set(1,1,3.2),it.add(P);for(let J of[1,-1]){let K=new Ue,S=new Lt(new we(.8,.4).translate(.4,0,0),Z),g=new Lt(new we(.75,.32).translate(.37,0,0),z);g.position.x=.78,g.rotation.y=-.35,S.add(g),K.add(S),K.rotation.x=-Math.PI/2,K.scale.x=J,K.rotation.z=J*.18,it.add(K)}i.add(it)}let Et=[];{let z=new Xt({color:5989227,roughness:.35,metalness:.05});for(let Z=0;Z<2;Z++){let P=new Ue,J=new Lt(new ge(.3,14,10),z);J.scale.set(.85,.8,4.6),P.add(J);let K=new Lt(new bn(.18,.42,3),z);K.scale.set(.25,1,1),K.position.set(0,.36,.1),K.rotation.x=.45,P.add(K);let S=new Lt(new ce(.7,.03,.22),z);S.position.z=1.45,P.add(S),i.add(P),Et.push({g:P,ph:Z*2.3,off:Z*1.3})}}let Ut=new Lt(new ge(.08,8,6).scale(1,.9,3.2),new Xt({color:13159632,metalness:.8,roughness:.25}));i.add(Ut);let ft=new Re({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),dt=[];for(let z=0;z<4;z++){let Z=new Lt(new Tr(.9,1,40),ft.clone());Z.rotation.x=-Math.PI/2,Z.position.y=.03,i.add(Z),dt.push({m:Z,t:9})}let gt=(z,Z,P=1)=>{let J=dt.find(K=>K.t>2.5)||dt[0];J.t=0,J.s=P,J.m.position.x=z,J.m.position.z=Z},xt=new Ue;{let z=new Xt({color:2761501,roughness:1}),Z=new Lt(new ge(.14,8,6),z);Z.scale.set(1,1.5,.9);let P=new Lt(new ge(.1,8,6),z);P.position.y=.24,xt.add(Z,P);for(let J of[-1,1]){let K=new Lt(new bn(.03,.09,4),z);K.position.set(J*.06,.34,0),xt.add(K);let S=new Lt(new ge(.018,6,4),new Re({color:16760896}));S.position.set(J*.04,.25,-.085),xt.add(S)}xt.scale.setScalar(.75),xt.position.copy(y.roofTop).add(d(0,.03,0)),xt.rotation.y=Math.PI*.15,xt.visible=!1,i.add(xt)}let St=z=>-30+Math.sin(z*.035)*7+Math.sin(z*.011+1)*10,Ct=3,Nt=null;if(y.update=(z,Z,P)=>{for(let J of q){let K=J.userData,S=K.head;if(K.ibis)S.rotation.x=.9+Math.sin(z*2.2+K.ph)*.5,J.position.x=K.p0.x+Math.sin(z*.12+K.ph)*.6,J.rotation.y=K.ph+Math.sin(z*.12+K.ph)*.8;else{let g=Math.max(0,Math.sin(z*.4+K.ph)-.92)*12;S.rotation.x=g*.9+Math.sin(z*.7+K.ph)*.05;let B=Math.sin(z*.09+K.ph)>.2?1:0,G=z*1.6+K.ph;J.position.x=K.p0.x+Math.sin(z*.09+K.ph)*1.2,J.position.y=K.p0.y+Math.abs(Math.sin(G))*.02*B,S.position.z=-.25+Math.sin(G*2)*.03*B,K.legs&&(K.legs[0].rotation.x=Math.sin(G)*.35*B,K.legs[1].rotation.x=-Math.sin(G)*.35*B)}}if(y.crabs){let J=y.crabs;O.forEach((K,S)=>{let g=Math.sin(z*.6+K.ph)>.3?1:0;K.d+=Math.sin(z*.3+K.ph)*.01;let B=g*Z*.15;K.p.x+=Math.cos(K.d)*B,K.p.z+=Math.sin(K.d)*B,x.position.copy(K.p),x.rotation.set(0,-K.d+Math.PI/2,0),x.scale.setScalar(1),x.updateMatrix(),J.setMatrixAt(S,x.matrix)}),J.instanceMatrix.needsUpdate=!0,J.visible=P<.8}ot.forEach(J=>{let K=J.userData,S=z*K.sp+K.ph;J.visible=P<.75,J.position.set(Math.cos(S)*K.rad,K.h+Math.sin(S*3)*.8,K.cz+Math.sin(S)*K.rad*.4),J.rotation.y=-S;let g=Math.sin(z*.3+K.ph)>.5,B=z*3.4+K.ph,G=g?.08:Math.sin(B)>0?Math.sin(B)*.75:Math.sin(B)*.45;K.l.rotation.z=G,K.r.rotation.z=-G,J.position.y+=g?0:Math.sin(B)*.06});{let J=z*.035%1;tt.forEach(K=>{let S=K.userData,B=-160+(J-S.i*.012)*320;K.position.set(B,2.4+Math.sin(z*.6+S.i)*.15,St(B)-3+S.i*.9),K.rotation.y=-Math.PI/2,K.rotation.z=Math.sin(z*.5+S.i)*.05;let G=Math.sin(z*.9+S.i*.7)>.85?Math.sin(z*6)*.4:.06;S.l.rotation.z=G,S.r.rotation.z=-G,K.visible=P<.75})}if(!y.ospRig){let J=z*.08;it.position.set(-10+Math.cos(J)*35,26+Math.sin(J*2)*2,-60+Math.sin(J)*22),it.rotation.set(0,-J+Math.PI,Math.sin(J)*0+.3),it.visible=P<.7}if(Et.forEach(J=>{let S=(z+J.ph)%9/9,B=-30+(Math.floor((z+J.ph)/9)*23+J.off*11)%50,G=St(B)+(J.off-.6)*2,Q=Math.min(1,S/.22),Mt=S<.22?-1.1+Math.sin(Q*Math.PI)*1.25:-3;J.g.position.set(B+Q*3.2,Mt,G),J.g.rotation.set(-Math.cos(Q*Math.PI)*.55,-Math.PI/2,0),S<.22&&Math.abs(S-.03)<Z/9&&gt(B+.3,G,.8),Math.abs(S-.2)<Z/9&&gt(B+3,G,.7),J.g.visible=S<.22}),Ct-=Z,Ct<0){let J=s(-25,25);Nt={x:J,z:St(J)+s(-3,3),t:0,d:s(0,6)},gt(Nt.x,Nt.z,.35),Ct=s(4,9)}if(Nt){Nt.t+=Z;let J=Nt.t/.7;Ut.visible=J<1,J<1?(Ut.position.set(Nt.x+Math.cos(Nt.d)*J*.9,Math.sin(J*Math.PI)*.75,Nt.z+Math.sin(Nt.d)*J*.9),Ut.rotation.set(-Math.cos(J*Math.PI)*.9,-Nt.d+Math.PI/2,0)):(gt(Ut.position.x,Ut.position.z,.3),Nt=null)}else Ut.visible=!1;dt.forEach(J=>{J.t+=Z;let K=J.t/2.2;J.m.visible=K<1;let S=(.15+K*1.4)*(J.s||1);J.m.scale.setScalar(S),J.m.material.opacity=(1-K)*.35*(1-P*.5)}),xt.visible=P>.5||ny,y.owlRig||(xt.rotation.y=Math.PI*.15+Math.sin(z*.3)*.6*(Math.sin(z*.13)>.6?1:0)),y.win&&(y.win.emissiveIntensity=P*2.2)},y.perches=[[-4.6,2.6,E-1.4,.9],[b/2+.04,c+1.05,a-2.4*7,-1.2]],y.osp=it,y.owl=xt,y.splashAt=gt,y.creekZ=St,y.waders=q,y.fly=ot,y.pel=tt,y.dol=Et,y.mul=Ut,new URLSearchParams(location.search).get("fauna")!=="0"){let z=jf(y,{S:i,HQ:t,mobile:!t,H:e}),Z=y.update;y.update=(P,J,K)=>{Z(P,J,K);try{z(P,J,K)}catch(S){y._fe||(y._fe=1,console.error("fauna",S))}}}y.wakes=()=>{let z=[];if(Et.forEach(Z=>{Z.g.visible&&Z.g.position.y>-1.2&&z.push([Z.g.position.x,Z.g.position.z,0,.9])}),y.boat){let Z=y.boat.position;z.push([Z.x,Z.z,Math.PI/2,.25])}return z},y.wildFocus=()=>{let z=q.find(Z=>Z.userData.ibis)||q[0];return z?z.position.clone().add(d(0,.4,0)):d(0,0,-15)},y.waders=q;{let z=new U,Z=q.filter(S=>!S.userData.ibis&&!S.userData.heron).slice(0,2),P=q.find(S=>S.userData.heron),J=q.find(S=>S.userData.ibis),K=[0,Math.floor(O.length/2)].map(S=>O[S]).filter(Boolean);y.src=()=>{let S=[];return P&&(P.getWorldPosition(z),S.push(["hr","heron",z.x,z.y+1.2,z.z,1])),Z.forEach((g,B)=>{g.getWorldPosition(z),S.push(["eg"+B,"egret",z.x,z.y+1,z.z,1])}),J&&(J.getWorldPosition(z),S.push(["ib","ibis",z.x,z.y+.5,z.z,1])),K.forEach((g,B)=>{S.push(["cb"+B,"crab",g.p.x,g.p.y,g.p.z,1]),S.push(["md"+B,"mud",g.p.x+1.5,g.p.y,g.p.z-1,1])}),it.getWorldPosition(z),S.push(["os","osprey",z.x,z.y,z.z,1]),xt.getWorldPosition(z),S.push(["ow","owl",z.x,z.y,z.z,xt.visible?1:0]),Ut.getWorldPosition(z),S.push(["sp","splash",z.x,0,z.z,1]),S}}{let z=new me;z.setAttribute("position",new ie([-.6,.12,-.1,0,0,.18,0,0,-.12,.6,.12,-.1,0,0,-.12,0,0,.18],3)),z.computeVertexNormals();let Z=new Re({color:2826023,side:De,fog:!0,transparent:!0,opacity:.92}),P=[[9,-150,34,-120,6.5,14],[7,-150,40,-150,5.6,4]],J=P.reduce((vt,Vt)=>vt+Vt[0],0),K=new sn(z,Z,J);K.frustumCulled=!1,K.name="skein",i.add(K);let S=new ae,g=new nn,B=new U,G=new U,Q=new ui,Mt=[],ut=new Xt({color:15261904,roughness:.6}),$=new Xt({color:14182444,roughness:.6});for(let[vt,Vt]of[[-19,$],[-12.5,ut],[9,$],[16,ut],[23,$]]){let At=new Ue,Pt=new Lt(new wo(.11,.12,3,8),Vt);Pt.rotation.z=1.2,At.add(Pt);let Bt=new Lt(new ze(.015,.015,.3,5),ut);Bt.position.y=.12,At.add(Bt),At.position.set(vt,.02,St(vt)+vt%3),At.name="buoy",i.add(At),Mt.push({b:At,ph:vt})}let j=y.update;y.update=(vt,Vt,At)=>{j(vt,Vt,At);let Pt=Math.max(0,Math.min(1,(At-.08)/.12))*(1-Math.max(0,Math.min(1,(At-.62)/.15)));if(K.visible=Pt>.01,Z.opacity=.92*Pt,K.visible){let Bt=0;for(let[nt,wt,V,Tt,ct,bt]of P){let _t=(vt*ct+bt*6)%300+wt;for(let Gt=0;Gt<nt;Gt++){let Yt=Gt%2?1:-1,he=Math.ceil(Gt/2);B.set(_t-he*2.2,V-he*.35+Math.sin(vt*.4+Gt)*.3,Tt+Yt*he*2);let ue=Math.sin(vt*5.2+Gt*.7+bt);Q.set(0,Math.PI/2,0),g.setFromEuler(Q),G.set(2.6,2.6*(.25+ue*.95),2.6),S.compose(B,g,G),K.setMatrixAt(Bt++,S)}}K.instanceMatrix.needsUpdate=!0}for(let Bt of Mt)Bt.b.position.y=.02+Math.sin(vt*1.3+Bt.ph)*.03,Bt.b.rotation.z=Math.sin(vt*1.1+Bt.ph)*.12}}{let z=a-7.199999999999999+1.1,Z=-.5,P=new Xt({color:3095082,roughness:.7}),J=[];for(let ut of[0,.16])J.push(new ze(.055,.06,.3,8).translate(Z+ut,c+.15,z).toNonIndexed()),J.push(new ce(.11,.07,.24).translate(Z+ut,c+.035,z+.06).toNonIndexed());let K=v(Ze(J),P);C.push(["boots",_(K),P]);let S=v(new ze(.14,.11,.3,12,1,!0).translate(Z+.05,c+.15,z-.42),new Xt({color:14209732,roughness:.6,side:De}));C.push(["bucket",_(S),S.material]);let g=v(new Ri(.17,.025,6,20).rotateX(Math.PI/2).translate(.45,c+.03,z-6),new Xt({color:12100218,roughness:.9})),B=v(new Ri(.12,.025,6,18).rotateX(Math.PI/2).translate(.45,c+.075,z-6),g.material);C.push(["rope",_(g),g.material]);let G=new Tr(.7,1,40).rotateX(-Math.PI/2),Q=[];for(let ut=0;ut<5;ut++){let $=new Re({color:16773592,transparent:!0,opacity:0,depthWrite:!1}),j=new Lt(G,$);j.layers.set(1),j.visible=!1,i.add(j),Q.push({r:j,m:$,t0:-9,x:0,z:0})}let Mt=y.update;y.update=(ut,$,j)=>{Mt(ut,$,j);for(let vt of Q){let Vt=ut-vt.t0;if(Vt>3.2&&Math.random()<$*.35){vt.t0=ut,Vt=0;let Pt=!1;for(let Bt=0;Bt<8&&!Pt;Bt++)vt.x=-28+Math.random()*56,vt.z=St(vt.x)+(Math.random()-.5)*5,Pt=e(vt.x,vt.z)<-.12;Pt||(vt.t0=ut-9),vt.r.position.set(vt.x,.025,vt.z)}let At=Vt/3.2;vt.r.visible=At<1,At<1&&(vt.r.scale.setScalar(.15+At*1.6),vt.m.opacity=(1-At)*(1-At)*.85*(1-j*.4))}}}{let z=new U,Z=y.update;y.update=(P,J,K)=>{Z(P,J,K);let S=globalThis.__dockCam;if(S)for(let g of q){let B=g.userData;z.subVectors(g.position,S.position),z.y=0;let G=z.length();if(B.alert=G<16?1:Math.max(0,(B.alert||0)-J*.5),G<14&&G>.01){z.normalize();let Q=1.1*J*(1-G/14+.3);for(let $ of[0,.7,-.7,1.3,-1.3]){let j=Math.cos($),vt=Math.sin($),Vt=z.x*j-z.z*vt,At=z.x*vt+z.z*j,Pt=B.p0.x+Vt*Q,Bt=B.p0.z+At*Q,nt=e(Pt,Bt);if(nt>-.45&&nt<.18){B.p0.x=Pt,B.p0.z=Bt,B.p0.y=nt-.02,g.position.y=nt-.02,z.set(Vt,0,At);break}}let ut=Math.atan2(z.x,z.z)-g.rotation.y;ut=Math.atan2(Math.sin(ut),Math.cos(ut)),g.rotation.y+=ut*Math.min(1,J*3)}}}}{let z=y.update;y.update=(Z,P,J)=>{z(Z,P,J),y.glass.emissiveIntensity=.12+1.5*Xe.smoothstep(J,.3,.65)}}return y}var _i=i=>document.querySelector(i),ep=matchMedia("(prefers-reduced-motion: reduce)").matches,Ne=new URLSearchParams(location.search),gp=_i("#load"),iy=_i("#bar"),ri=i=>(iy.style.transform=`scaleX(${i})`,new Promise(t=>requestAnimationFrame(()=>t())));function xp(){document.body.classList.add("nogl"),gp.classList.add("done")}var $e;try{let i=_i("#gl");$e=new Ac({canvas:i,antialias:!0,powerPreference:"high-performance"})}catch(i){throw xp(),i}var vp=matchMedia("(pointer:coarse)").matches||innerWidth<760,Ie=Ne.get("q")?Ne.get("q")==="high":!vp,sy=(()=>{try{let i=$e.getContext(),t=i.getExtension("WEBGL_debug_renderer_info");return t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER)}catch{return""}})(),Nu=Ne.get("tier")||(Ie?"high":/Apple GPU|Apple M|Adreno \(TM\) (7[3-9]\d|8\d\d)|Mali-G7[1-9]|Immortalis/i.test(sy)||/iPhone|iPad/.test(navigator.userAgent)&&screen.width*devicePixelRatio>=1100?"pro":"low"),$r=Nu==="pro",Vc=matchMedia("(pointer:coarse)").matches,Tu=Math.min(devicePixelRatio,Nu==="high"?1.5:$r&&!Vc?1.75:Vc?1.35:1.5),_u=Nu==="high"?1:$r?1.25:1,Fn=Ne.get("dpr")?+Ne.get("dpr"):Tu;$e.setPixelRatio(Fn);$e.toneMapping=Is;$e.toneMappingExposure=Ie?.32:.4;$e.outputColorSpace=Sn;$e.shadowMap.enabled=Ie;$e.shadowMap.autoUpdate=!1;$e.shadowMap.needsUpdate=!0;$e.shadowMap.type=Ul;var Me=new gr,Se=new un(52,1,.1,2e4),xi={value:0},Au=null,np=11,_p=()=>(np=np*16807%2147483647)/2147483647,Jt=(i,t)=>i+_p()*(t-i);function Dc(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function wa(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Dc(e,n),c=Dc(e+1,n),h=Dc(e,n+1),f=Dc(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+f)*o*a}var Di=(i,t)=>wa(i,t)*.5+wa(i*2.1,t*2.1)*.25+wa(i*4.3,t*4.3)*.125+wa(i*8.7,t*8.7)*.0625,He=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Bn=(i,t,e)=>i+(t-i)*e;function ki(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Mr(s);return r.colorSpace=Sn,r.anisotropy=8,n&&(r.wrapS=r.wrapT=Ts),r}var Ws=new It(14,-46),vi=new It(1,-.32).normalize(),Zr=new It(-vi.y,vi.x).multiplyScalar(-1),qr=(i,t)=>{let e=i-Ws.x,n=t-Ws.y,s=e*vi.x+n*vi.y;return e*Zr.x+n*Zr.y-He(-5,-35,s)*80},Ru=[[-62,-22,15],[34,12,9],[-30,-62,17],[56,-10,8],[26,-38,11]],yu=i=>-30+Math.sin(i*.035)*7+Math.sin(i*.011+1)*10;function Wi(i,t){let e=qr(i,t),n=.22+(Di(i*.08,t*.08)-.5)*.1;n=Bn(n,.02,(1-He(1.5,3.5,Math.hypot((i-1)*.8,t-10)))*.9);let s=Math.abs(t-yu(i));n=Bn(n,.1,1-He(8,13,s)),n=Bn(n,-1.9,1-He(4.5,9,s));let r=Math.abs(i+16-Math.sin(t*.09)*4);n=Bn(n,-.5,(1-He(1,2.4,r))*He(yu(i)-2,yu(i)+4,t)*(1-He(8,30,t))),n=Bn(n,-3.2,He(-62,-98,t-i*.35));for(let[c,h,f]of Ru){let u=Math.hypot(i-c,t-h)/f;n=Bn(n,.9+Di(i*.2,t*.2)*.7,1-He(.25,1,u))}let o=e<0?e*.12:Math.min(.9,e*.06);e>10&&(o+=He(10,20,e)*(2.4+Di(i*.07,t*.07)*4.2)),o+=(Di(i*.5,t*.5)-.5)*.08;let a=(i-Ws.x)*vi.x+(t-Ws.y)*vi.y,l=He(-14,-2,e)*He(-25,10,a);return n=Bn(n,o,l),n}var qc=new zr;qc.scale.setScalar(1e4);Me.add(qc);var jr=qc.material.uniforms;jr.turbidity.value=4.5;jr.rayleigh.value=3.6;jr.mieCoefficient.value=.005;jr.mieDirectionalG.value=.86;var Fu=new U().setFromSphericalCoords(1,Xe.degToRad(90-3.2),Xe.degToRad(206));jr.sunPosition.value.copy(Fu);var ry=new Ft(15310970);Me.fog=new vo(ry,Ie?.0042:.0048);var oy=new Br($e),Hc=new Ho(16762784,5914680,1.7);Me.add(Hc);var On=new ls(16754784,3.2);On.position.copy(Fu).multiplyScalar(80);On.target.position.set(0,0,-6);Me.add(On,On.target);if(Ie){On.castShadow=!0,On.shadow.mapSize.set(4096,4096);let i=On.shadow.camera;i.left=-30,i.right=30,i.top=30,i.bottom=-30,i.near=1,i.far=200,On.shadow.bias=-4e-4,On.shadow.normalBias=.03}var ay=24,ly=-14,Gc=2.4,Nn,Vs,yp,Mp;var Sp=[],bp=[];var In,Je;async function cy(){await ri(.08);let i=420,t=Ie?300:$r?240:180,e=new we(i,i,t,t);e.rotateX(-Math.PI/2),e.translate(40,0,-60);let n=e.attributes.position,s=new Float32Array(n.count*3),r=new Ft,o=new Ft(2303786),a=new Ft(4014142),l=new Ft(5921328),c=new Ft(15916208),h=new Ft(11045482),f=new Ft(14270612);for(let b=0;b<n.count;b++){let m=n.getX(b),M=n.getZ(b),E=Wi(m,M);n.setY(b,E);let I=qr(m,M),D=He(-6,1,I);r.copy(o).lerp(a,He(-.05,.14,E)*.6).lerp(l,He(.12,.2,E)*.8).lerp(new Ft(3815972),He(.6,1.1,E));let N=r.clone().copy(h).lerp(c,He(.08,.5,E)).lerp(f,He(1.2,2.5,E));r.lerp(N,D);let L=.9+Di(m*1.3,M*1.3)*.2;s[b*3]=r.r*L,s[b*3+1]=r.g*L,s[b*3+2]=r.b*L}e.setAttribute("color",new ln(s,3)),e.computeVertexNormals();let u=new Xt({vertexColors:!0,roughness:.9});u.onBeforeCompile=b=>{b.uniforms.t=xi,b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
varying float vY;varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vY=position.y;vXZ=(modelMatrix*vec4(position,1.)).xz;`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
varying float vY;varying vec2 vXZ;float mh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}float mn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mh(i),mh(i+vec2(1,0)),f.x),mix(mh(i+vec2(0,1)),mh(i+vec2(1,1)),f.x),f.y);}`).replace("#include <roughnessmap_fragment>","float wetm=1.-smoothstep(-.02,.16,vY);float roughnessFactor=mix(.92,.06,wetm)+mn(vXZ*3.)*.12*wetm;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{float mud=(1.-smoothstep(.02,.2,vY))*smoothstep(-.4,-.05,vY);float ph=dot(vXZ,vec2(.8,.6))*7.+mn(vXZ*.7)*6.;float rp=cos(ph)*(.6+.4*mn(vXZ*2.));vec3 pw=vec3(.8,0.,.6)*rp*.22*mud+vec3(mn(vXZ*9.)-.5,0.,mn(vXZ*9.+3.)-.5)*.18*mud;normal=normalize(normal+(viewMatrix*vec4(pw,0.)).xyz);}`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(.55,1.,smoothstep(-.1,.25,vY));{float mk=smoothstep(.14,.2,vY)*(1.-smoothstep(.55,.75,vY));float st=mn(vXZ*vec2(9.,1.6)+mn(vXZ*.5)*3.)*.6+mn(vXZ*vec2(23.,4.))*.4;vec3 gc=mix(vec3(.23,.2,.09),vec3(.55,.46,.22),st);diffuseColor.rgb=mix(diffuseColor.rgb,gc,mk*.85);}`)};let d=new Lt(e,u);d.receiveShadow=!0,Me.add(d),await ri(.2);let x=(()=>{let m=document.createElement("canvas");m.width=m.height=256;let M=m.getContext("2d"),E=M.createImageData(256,256),I=new Float32Array(256*256),D=[];for(let L=0;L<26;L++)D.push([1+(Math.random()*9|0),(Math.random()*9|0)-4,Math.random()*6.28,1/(1+L*.35)]);for(let L=0;L<256;L++)for(let F=0;F<256;F++){let X=0;for(let[k,et,H,st]of D)X+=Math.sin((k*F+et*L)/256*6.283+H)*st;I[L*256+F]=X}for(let L=0;L<256;L++)for(let F=0;F<256;F++){let X=I[L*256+(F+1)%256]-I[L*256+(F-1+256)%256],k=I[(L+1)%256*256+F]-I[(L-1+256)%256*256+F],et=new U(-X*.6,-k*.6,1).normalize(),H=(L*256+F)*4;E.data[H]=(et.x*.5+.5)*255,E.data[H+1]=(et.y*.5+.5)*255,E.data[H+2]=(et.z*.5+.5)*255,E.data[H+3]=255}M.putImageData(E,0,0);let N=new Mr(m);return N.wrapS=N.wrapT=Ts,N})();Nn=new Pc(new we(1e4,1e4,1,1),{textureWidth:Ie?768:384,textureHeight:Ie?768:384,waterNormals:x,sunDirection:Fu.clone(),sunColor:16765600,waterColor:3814436,distortionScale:.7,fog:!0});{let b=Nn.onBeforeRender;Nn.onBeforeRender=()=>{},Nn.__mirror=(m,M,E)=>b.call(Nn,m,M,E)}Nn.rotation.x=-Math.PI/2,Nn.position.y=0,Nn.material.uniforms.size.value=24,Me.add(Nn),await ri(.3);{let I=new Uint8Array(262144);for(let L=0;L<256;L++)for(let F=0;F<256;F++){let X=Wi(-170+F/255*420,-270+L/255*420),k=Math.max(0,Math.min(255,Math.round((X+3)/5*255))),et=(L*256+F)*4;I[et]=k,I[et+1]=k,I[et+2]=k,I[et+3]=255}let D=new ns(I,256,256);D.magFilter=D.minFilter=dn,D.needsUpdate=!0;let N=Nn.material;Object.assign(N.uniforms,{hMap:{value:D},hB:{value:new Ee(-170,-270,420,420)},wk:{value:[0,1,2,3].map(()=>new Ee(0,0,0,0))},nite:{value:0}}),N.fragmentShader=N.fragmentShader.replace("uniform vec3 waterColor;","uniform vec3 waterColor;uniform sampler2D hMap;uniform vec4 hB;uniform vec4 wk[4];uniform float nite;").replace("vec3 outgoingLight = albedo;",`
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
  vec3 outgoingLight = albedo;`)}{let m=new we(360,26,200,1);m.rotateX(-Math.PI/2);let M=new Ce({transparent:!0,depthWrite:!1,fog:!0,uniforms:Object.assign(En.merge([kt.fog]),{t:xi,uA:{value:Ws},uN:{value:Zr},uD:{value:vi}}),vertexShader:`varying vec2 vUv;varying vec3 wp;#include <fog_pars_vertex>
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
`)});Mp=M,M.uniforms.glow={value:0};let E=new Lt(m,M),I=Math.atan2(vi.y,vi.x);E.rotation.y=-I;let D=Ws.clone().addScaledVector(vi,360*.35);E.position.set(D.x-Zr.x*13,.04,D.y-Zr.y*13),E.rotation.y=-I+Math.PI,Me.add(E)}await ri(.36);let A=window.__wt=ki(512,128,(b,m,M)=>{b.fillStyle="#8f6a4a",b.fillRect(0,0,m,M);for(let E=0;E<220;E++){let I=Math.random()*M;b.strokeStyle=`rgba(${40+Math.random()*40|0},${25+Math.random()*25|0},15,${.08+Math.random()*.25})`,b.lineWidth=Math.random()*2.5,b.beginPath(),b.moveTo(0,I);for(let D=0;D<=m;D+=32)b.lineTo(D,I+Math.sin(D*.02+E)*2);b.stroke()}for(let E=0;E<5;E++)b.fillStyle="rgba(50,30,20,.35)",b.beginPath(),b.ellipse(Math.random()*m,Math.random()*M,8,4,0,0,7),b.fill();b.fillStyle="rgba(200,190,175,.15)",b.fillRect(0,0,m,M)},!0),v=ki(256,256,(b,m,M)=>{b.fillStyle="#4f3b2b",b.fillRect(0,0,m,M);for(let E=0;E<8;E++)for(let I=0;I<8;I++){let D=I*32+E%2*16,N=E*32;b.fillStyle=`rgb(${100+Math.random()*30|0},${78+Math.random()*20|0},${55+Math.random()*15|0})`,b.beginPath(),b.moveTo(D,N+30),b.lineTo(D+16,N-2),b.lineTo(D+32,N+30),b.lineTo(D+16,N+22),b.fill(),b.strokeStyle="#2a1d14",b.lineWidth=2,b.stroke()}},!0),p=ki(256,256,(b,m,M)=>{b.clearRect(0,0,m,M);let E=m/2,I=M-6;b.lineCap="round";for(let D=0;D<34;D++){let N=-Math.PI*.92+D*(Math.PI*.84/33),L=M*.92*(.8+.2*Math.sin(D*1.3)),F=E+Math.cos(N)*L*.5,X=I+Math.sin(N)*L,k=b.createLinearGradient(E,I,F,X);k.addColorStop(0,"#4d6a34"),k.addColorStop(1,D%5?"#7c8a46":"#8f8a4a"),b.strokeStyle=k,b.lineWidth=7,b.beginPath(),b.moveTo(E,I-M*.12),b.quadraticCurveTo(E+(F-E)*.5,I-M*.12+(X-I)*.5,F,X),b.stroke(),b.strokeStyle="rgba(30,40,20,.5)",b.lineWidth=1,b.beginPath(),b.moveTo(E,I-M*.12),b.lineTo(F,X),b.stroke()}b.globalCompositeOperation="destination-out";for(let D=0;D<34;D++){if(D%2)continue;let N=-Math.PI*.92+(D+.5)*(Math.PI*.84/33),L=M*.9;b.lineWidth=2.2,b.beginPath(),b.moveTo(E+Math.cos(N)*L*.5*.45,I+Math.sin(N)*L*.45),b.lineTo(E+Math.cos(N)*L*.5*1.05,I+Math.sin(N)*L*1.05),b.stroke(),D%6===0&&(b.lineWidth=4,b.beginPath(),b.moveTo(E+Math.cos(N+.02)*L*.5*.8,I+Math.sin(N+.02)*L*.8),b.lineTo(E+Math.cos(N+.05)*L*.5*1.05,I+Math.sin(N+.05)*L*1.05),b.stroke())}b.globalCompositeOperation="source-over",b.fillStyle="#4a5a2e",b.beginPath(),b.moveTo(E-5,I),b.lineTo(E,I-M*.16),b.lineTo(E+5,I),b.fill()});p.colorSpace=Sn,await ri(.42);function y(b,m,{tip:M=0,alpha:E=null,side:I=De}={}){let D=new Xt({color:b,roughness:.75,side:I,map:E,alphaTest:E?.45:0});return D.onBeforeCompile=N=>{N.uniforms.t=xi,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
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
 totalEmissiveRadiance+=vec3(1.,.55,.22)*pow(vH,3.)*${M.toFixed(2)};`)},D}{let b=[];for(let F=0;F<(Ie?7:9);F++){let X=new we(Ie?.045:.065,1,1,5);X.translate(0,.5,0);let k=X.attributes.position,et=Jt(-.3,.3),H=Jt(.6,1.1),st=Jt(0,6.28);for(let rt=0;rt<k.count;rt++){let zt=k.getY(rt);k.setX(rt,k.getX(rt)*(1-zt*.9)),k.setY(rt,zt*H),k.setZ(rt,et*zt*zt*H)}X.rotateY(st),X.translate(Jt(-.12,.12),0,Jt(-.12,.12)),b.push(X)}let m=Ze(b);m.computeVertexNormals();let M=Ie?36e3:$r?24e3:12e3,E=new sn(m,y(15129792,.09,{tip:.3}),M),I=new Be,D=new Ft,N=0,L=0;for(;N<M&&L<M*30;){L++;let F=_p()<.45,X=F?Jt(-30,30):Jt(-110,80),k=F?Jt(-18,34):Jt(-95,40),et=Wi(X,k);if(et<.17||et>.6||qr(X,k)>-5||Math.abs(X)<1.1&&k>-14)continue;I.position.set(X,et-.05,k);let H=He(.13,.2,et),st=Jt(.75,1.25)*(.6+H*.5);I.scale.set(st,st*Jt(.8,1.3),st),I.rotation.y=Jt(0,6.28),I.updateMatrix(),E.setMatrixAt(N,I.matrix);{let rt=Di(X*.07,k*.07),zt=Math.floor(rt*4)/4;D.setHSL(.12+zt*.1+Jt(-.015,.015)+(1-H)*.03,Jt(.32,.46),Jt(.3,.42)+zt*.06)}E.setColorAt(N,D),N++}E.count=N,E.receiveShadow=Ie,E.frustumCulled=!1,Ie||E.layers.set(1),Me.add(E)}await ri(.55);{let b=[];for(let F=0;F<3;F++){let X=new ze(.006,.012,1.4,3);X.translate(0,.7,0);let k=Jt(-.15,.15);X.rotateZ(k),b.push(X);for(let et=0;et<6;et++){let H=new ge(.035,4,3);H.scale(.6,1.6,.3),H.translate(Math.sin(k)*-1.3+(et%2?.05:-.05),1.25+et*.03,0),b.push(H)}for(let et=0;et<2;et++){let H=new we(.03,.9,1,3);H.translate(0,.45,0),H.rotateZ(Jt(-.6,.6)),H.rotateY(Jt(0,6)),b.push(H)}}let m=Ze(b.map(F=>F.index?F.toNonIndexed():F).map(F=>(F.deleteAttribute("uv"),F)));m.computeVertexNormals();let M=Ie?2600:900,E=new sn(m,y(13480058,.12,{tip:.25}),M),I=new Be,D=new Ft,N=0,L=0;for(;N<M&&L<M*40;){L++;let F=Jt(0,200),X=Jt(-150,-20),k=qr(F,X);if(k<13||k>70)continue;let et=Wi(F,X);I.position.set(F,et-.05,X),I.rotation.y=Jt(0,6.28);let H=Jt(.9,1.5);I.scale.setScalar(H),I.updateMatrix(),E.setMatrixAt(N,I.matrix),D.setHSL(Jt(.09,.13),Jt(.3,.5),Jt(.5,.65)),E.setColorAt(N,D),N++}E.count=N,E.frustumCulled=!1,Ie||E.layers.set(1),Me.add(E)}await ri(.62);let C=[],_=(b,m,M,E)=>C.push([b,m,M,E]);for(let[b,m,M]of Ru)for(let E=0;E<Math.round(M*.7);E++){let I=Jt(0,6.28),D=Jt(0,M*.55),N=b+Math.cos(I)*D,L=m+Math.sin(I)*D;Wi(N,L)<.85||Math.hypot(N-25,L+33)<9||_(N,L,Jt(6,11),Jt(-.18,.18))}for(let b=0;b<70;b++){let m=Jt(20,220),M=Jt(-170,-40),E=qr(m,M);E<26||E>90||_(m,M,Jt(6,12),Jt(-.2,.2))}{let b=[],m=[];for(let[k,et,H,st]of C){let rt=Wi(k,et)-.2,zt=st*H,Rt=Jt(-.15,.15)*H,q=new Hi([new U(k,rt,et),new U(k+zt*.25,rt+H*.4,et+Rt*.2),new U(k+zt*.7,rt+H*.8,et+Rt*.6),new U(k+zt,rt+H,et+Rt)]),pt=new Rn(q,10,.2,7),yt=pt.attributes.uv;for(let O=0;O<yt.count;O++)yt.setXY(O,yt.getX(O)*H*1.2,yt.getY(O)*2);b.push(pt);let W=q.getPoint(1);for(let O=0;O<22;O++){let ot=O>=17;m.push({p:W,yaw:O/17*6.283+Jt(-.2,.2)+(ot?Jt(0,6):0),pitch:ot?Jt(-1.25,-1):Jt(-.45,.75)+(O%3===0?.35:0),s:ot?Jt(.9,1.1):Jt(1.05,1.45),dead:ot})}}let M=new Xt({map:v,roughness:1,color:12296330}),E=new Lt(Ze(b),M);E.castShadow=Ie,E.receiveShadow=Ie,Me.add(E);let I=new we(2.4,2.4,8,8),D=I.attributes.position;for(let k=0;k<D.count;k++){let et=D.getX(k),H=D.getY(k)+1.2,st=H/2.4;D.setXYZ(k,et*(.15+.85*st),-st*st*.9+Math.abs(et)*.25*st,-H)}I.computeVertexNormals();let N=y(16777215,0,{tip:.05,alpha:p});N.alphaToCoverage=!0,N.onBeforeCompile=(k=>{let et=N.onBeforeCompile;return H=>{H.uniforms.t=xi,H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
uniform float t;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vec3 ip=instanceMatrix[3].xyz;float d=clamp(-position.z/2.4,0.,1.);float wv=sin(t*1.7+ip.x*.4+ip.z*.3+float(gl_InstanceID)*.7)*.5+sin(t*3.1+float(gl_InstanceID))*.2;transformed.y+=wv*d*d*.35;transformed.x+=wv*d*.12;`)}})();let L=new sn(I,N,m.length),F=new Be,X=new Ft;m.forEach((k,et)=>{F.position.copy(k.p),F.rotation.set(0,0,0),F.rotateY(k.yaw),F.rotateX(k.pitch),F.scale.setScalar(k.s),F.updateMatrix(),L.setMatrixAt(et,F.matrix),k.dead?X.setRGB(.55,.38,.22):X.setHSL(Jt(.18,.25),Jt(.25,.45),Jt(.42,.6)),L.setColorAt(et,X)}),L.castShadow=Ie,L.frustumCulled=!1,Me.add(L)}await ri(.72);{let b=new Ro(.09,0);b.scale(1.6,.35,.9);let m=Ie?5e3:1500,M=new sn(b,new Xt({color:10130058,roughness:.55}),m),E=new Be,I=new Ft,D=0,N=0;for(;D<m&&N<m*60;){N++;let L=Jt(-60,60),F=Jt(-55,30),X=Wi(L,F);if(X<-.3||X>.05||qr(L,F)>-8||Di(L*.2,F*.2)<.5)continue;E.position.set(L,X+.02,F),E.rotation.set(Jt(-.5,.5),Jt(0,6),Jt(-.5,.5)),E.scale.setScalar(Jt(.6,1.5)),E.updateMatrix(),M.setMatrixAt(D,E.matrix);let k=Jt(.5,1);I.setRGB(k,k*.97,k*.92),M.setColorAt(D++,I)}M.count=D,Me.add(M)}{let m=function(E,I,D,N,L){let F=E.clone().addScaledVector(I,D),X=E.clone().lerp(F,.5).add(new U(Jt(-.2,.2),Jt(-.1,.1),Jt(-.2,.2)).multiplyScalar(D));if(b.push(new Rn(new ni(E,X,F),4,N,5)),L>0)for(let k=0;k<(L>2?2:3);k++){let et=I.clone().add(new U(Jt(-.9,.9),Jt(-.1,.6),Jt(-.9,.9))).normalize();m(F,et,D*Jt(.55,.75),N*.62,L-1)}},b=[];[[0,30,.2],[3,52,-.4],[-1,80,.5]].forEach(([E,I,D])=>{let N=Ws.clone().addScaledVector(vi,I).addScaledVector(Zr,-E),L=N.x,F=N.y,X=new U(L,Wi(L,F)-.1,F);m(X,new U(Math.sin(D),1,.2).normalize(),Jt(2.2,3),.22,4);for(let k=0;k<4;k++){let et=Jt(0,6.28);b.push(new Rn(new ni(X.clone().add(new U(0,.3,0)),X.clone().add(new U(Math.cos(et)*.6,.05,Math.sin(et)*.6)),X.clone().add(new U(Math.cos(et)*1.4,-.1,Math.sin(et)*1.4))),4,.09,4))}});let M=new Lt(Ze(b),new Xt({color:13616052,roughness:.85}));M.castShadow=Ie,Me.add(M)}await ri(.84);{let b=new we(1400,40,280,1),m=b.attributes.position;for(let D=0;D<m.count;D++)if(m.getY(D)>0){let N=m.getX(D);m.setY(D,7+Di(N*.015,1)*11+Math.pow(Math.abs(Math.sin(N*.21+Di(N*.05,2)*3)),.6)*4.5*wa(N*.04,3)+Math.pow(Math.abs(Math.sin(N*.55)),.8)*1.6)}else m.setY(D,-2);let M=new Re({color:3811894,fog:!0}),E=new Lt(b,M);E.position.set(-350,0,-420),E.rotation.y=.55,Me.add(E);let I=E.clone();I.position.set(-620,0,-80),I.rotation.y=1.35,Me.add(I)}{let b=7,m=()=>(b=b*16807%2147483647)/2147483647,M=ki(512,256,(I,D,N)=>{let L=[];for(let X=0;X<140;X++){let k=m();L.push([D*.12+k*D*.76,N*.62-Math.sin(k*Math.PI)*N*(.12+m()*.22)+m()*N*.06,10+m()*34*Math.sin(k*Math.PI+.2)])}L.sort((X,k)=>k[1]-X[1]);for(let[X,k,et]of L){let H=I.createRadialGradient(X-et*.25,k-et*.35,et*.1,X,k,et);H.addColorStop(0,"rgba(255,250,244,.55)"),H.addColorStop(.55,"rgba(225,215,215,.32)"),H.addColorStop(.85,"rgba(150,140,160,.12)"),H.addColorStop(1,"rgba(120,110,140,0)"),I.fillStyle=H,I.beginPath(),I.arc(X,k,et,0,7),I.fill()}let F=I.createLinearGradient(0,N*.35,0,N*.75);F.addColorStop(0,"rgba(0,0,0,0)"),F.addColorStop(1,"rgba(60,40,70,.35)"),I.globalCompositeOperation="source-atop",I.fillStyle=F,I.fillRect(0,0,D,N),I.globalCompositeOperation="source-over"}),E=[16757658,16751242,16762784,15239840,16098170];for(let I=0;I<14;I++){let D=new Re({map:M,transparent:!0,depthWrite:!1,fog:!1,color:E[I%5],opacity:Jt(.5,.9)});bp.push(D);let N=new Lt(new we(1,.5),D),L=Xe.degToRad(206+Jt(-70,70)),F=Xe.degToRad(Jt(4,18));N.position.setFromSphericalCoords(2500,Math.PI/2-F,L),N.scale.setScalar(Jt(1300,2600)),N.scale.y*=Jt(.4,.7),N.lookAt(0,0,0),Me.add(N)}}Vs=(()=>{let b=Ie?220:80,m=new me,M=new Float32Array(b*3);for(let N=0;N<b;N++)M[N*3]=Jt(-20,20),M[N*3+1]=Jt(.4,3),M[N*3+2]=Jt(-25,25);m.setAttribute("position",new ln(M,3));let E=ki(64,64,(N,L)=>{let F=N.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,"rgba(255,250,200,1)"),F.addColorStop(.2,"rgba(255,220,120,.6)"),F.addColorStop(1,"rgba(255,200,80,0)"),N.fillStyle=F,N.fillRect(0,0,64,64)}),I=new ei({map:E,size:.35,transparent:!0,depthWrite:!1,blending:cn,color:16773280});{let N=new Float32Array(b);for(let L=0;L<b;L++)N[L]=Math.random()*40;m.setAttribute("ph",new ln(N,1)),I.onBeforeCompile=L=>{L.uniforms.ft=xi,L.vertexShader=`attribute float ph;uniform float ft;varying float vB;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float c=mod(ft*.55+ph,4.);vB=smoothstep(0.,.25,c)*(1.-smoothstep(.6,1.6,c))*.9+.1;`),L.fragmentShader=`varying float vB;
`+L.fragmentShader.replace("#include <premultiplied_alpha_fragment>",`gl_FragColor.a*=vB;
#include <premultiplied_alpha_fragment>`)}}let D=new di(m,I);return Me.add(D),{pts:D,p:M,g:m,base:M.slice()}})(),await ri(.9),Je=window.__W=tp({S:Me,HQ:Ie,H:Wi,T:xi,rr:Jt,fbm:Di,woodTex:A,PZ0:ay,PZ1:ly,PY:Gc,HAM:Ru,windMat:y,canvasTex:ki}),yp=Je.glass;for(let b of Je.lampPos.slice(0,Ie?4:2)){let m=new ko(16754768,3,8,1.6);m.position.copy(b),Me.add(m),Sp.push(m)}In=$f({S:Me,HQ:Ie,mobile:vp,canvasTex:ki,T:xi}),In._cam=Se,Au=(()=>{try{let b=ki(64,256,(H,st,rt)=>{let zt=H.createLinearGradient(0,0,0,256);zt.addColorStop(0,"rgba(255,255,255,0)"),zt.addColorStop(.25,"rgba(255,255,255,.9)"),zt.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=zt,H.fillRect(0,0,64,256);let Rt=H.createLinearGradient(0,0,64,0);Rt.addColorStop(0,"rgba(0,0,0,1)"),Rt.addColorStop(.5,"rgba(0,0,0,0)"),Rt.addColorStop(1,"rgba(0,0,0,1)"),H.globalCompositeOperation="destination-out",H.fillStyle=Rt,H.fillRect(0,0,64,256)}),m=H=>{let st=new Re({map:b,color:new Ft(H).multiplyScalar(2.2),toneMapped:!1,transparent:!0,depthWrite:!1,blending:cn,opacity:0,fog:!1}),rt=new Lt(new we(5,40),st);return rt.rotation.x=-Math.PI/2,rt.rotation.order="YXZ",rt.visible=!1,rt.layers.set(1),rt.renderOrder=2,Me.add(rt),rt},M=[m(16769712),m(12124058)],E=70,I=new me,D=new Float32Array(E*3*2),N=[];for(let H=0;H<E*2;H++){let st=new U().randomDirection().multiplyScalar(H<E?40+Math.random()*80:12+Math.random()*30);N.push(st,Math.random()*6.28)}I.setAttribute("position",new ln(D,3));let L=ki(32,32,H=>{let st=H.createRadialGradient(16,16,0,16,16,16);st.addColorStop(0,"rgba(255,255,255,1)"),st.addColorStop(.3,"rgba(255,240,200,.5)"),st.addColorStop(1,"rgba(255,240,200,0)"),H.fillStyle=st,H.fillRect(0,0,32,32)}),F=new ei({map:L,size:13,sizeAttenuation:!1,transparent:!0,depthWrite:!1,blending:cn,color:16773832,fog:!1,opacity:0}),X=new di(I,F);X.frustumCulled=!1,X.layers.set(1),Me.add(X);let k=new U,et=new U;return(H,st)=>{let rt=Math.sin(Math.PI*Xe.clamp((H-.45)/.32,0,1)),zt=Math.sin(Math.PI*Xe.clamp((H-.58)/.3,0,1));F.opacity=Math.max(rt,zt)*.95,X.visible=F.opacity>.01;let Rt=[In.focus("station"),In.focus("well")];if(X.visible){for(let yt=0;yt<2;yt++){k.copy(Rt[yt]).sub(Se.position).normalize(),et.copy(Se.position).addScaledVector(k,420);let W=yt?zt:rt;for(let O=0;O<E;O++){let ot=yt*E+O,tt=N[ot*2],it=N[ot*2+1],Et=.5+.5*Math.sin(st*3+it),Ut=W*Et;D[ot*3]=et.x+tt.x*(1+.4*(1-W)),D[ot*3+1]=et.y+tt.y*(1+.4*(1-W))+(Ut<.05?9999:0),D[ot*3+2]=et.z+tt.z*(1+.4*(1-W))}}I.attributes.position.needsUpdate=!0}let q=Xe.smoothstep(H,.5,.9),pt=Xe.smoothstep(H,.62,.97);for(let yt=0;yt<2;yt++){let W=M[yt],O=yt?pt:q;k.copy(Rt[yt]).sub(Se.position),k.y=0,k.normalize();let ot=-30;if(O<.01||k.z>-.15){W.visible=!1;continue}let tt=(ot-Se.position.z)/k.z;W.position.set(Se.position.x+k.x*tt,.03,Se.position.z+k.z*tt),W.rotation.y=Math.atan2(k.x,k.z),W.material.opacity=Math.min(1,O*(.75+.12*Math.sin(st*1.7+yt))),W.visible=!0}}}catch{return null}})(),await ri(.95);let R=new gr,w=new zr;w.scale.setScalar(1e3),Object.assign(w.material.uniforms,En.clone(qc.material.uniforms)),R.add(w),Me.environment=oy.fromScene(R).texture,Me.environmentIntensity=.6}var gn=null,Jr=null;function hy(){if(!Ie&&!$r){Ne.get("lite")!=="0"&&uy();return}let i=new Ge(innerWidth*Fn,innerHeight*Fn,{type:Ye,samples:+(Ne.get("msaa")??(Ie?2:0))});gn=new da($e,i),gn.addPass(new fa(Me,Se)),Jr=new Ns({uniforms:{tDiffuse:{value:null},sunUv:{value:new It(.5,.5)},amt:{value:.5}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 sunUv;uniform float amt;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);vec2 d=(vUv-sunUv)/48.;vec2 uv=vUv;float decay=1.;vec3 acc=vec3(0.);
 for(int i=0;i<48;i++){uv-=d;vec3 s=texture2D(tDiffuse,uv).rgb;float l=clamp(dot(s,vec3(.3,.5,.2))-6.,0.,20.);acc+=vec3(1.,.72,.45)*l*decay;decay*=.95;}gl_FragColor=vec4(c.rgb+acc*amt/48.,1.);}`});let t=Ne.get("lens")!=="0";Ie&&t?gn.addPass(Jr):Jr=null,t&&gn.addPass(new Vr(new It(innerWidth/2,innerHeight/2),.28,.4,5.5)),gn.addPass(new ma),Ne.get("paint")==="1"&&gn.addPass(new Pu($r?1:2)),gn.addPass(Ep())}var kc="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",Cu="float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}";function Ep(){return new Ns({uniforms:{tDiffuse:{value:null},t:xi,lens:{value:Ne.get("lens")==="0"?0:1}},vertexShader:kc,fragmentShader:`uniform sampler2D tDiffuse;uniform float t;uniform float lens;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float v=smoothstep(1.15,.35,length((vUv-.5)*vec2(1.25,1.)));c*=mix(mix(1.,.66,lens),1.,v);
 c+=lens*(h(vUv*1000.+fract(t)*91.)-.5)*.016*(1.-smoothstep(.3,.9,dot(c,vec3(.33))));float L=dot(c,vec3(.2126,.7152,.0722));
 c=mix(c,c*vec3(1.09,.98,.86),.7);c+=mix(vec3(-.006,.004,.018),vec3(.05,.018,-.02),smoothstep(.1,.7,L))*(1.-L);
 c+=vec3(1.,.55,.22)*smoothstep(.45,.95,L)*.07;c=mix(vec3(L),c,1.2);c*=1.06;c=c*c*(3.-2.*c)*.25+c*.75;gl_FragColor=vec4(c,1.);}`})}var Pu=class extends Pn{constructor(t){super(),this.half=new Ge(2,2,{type:Ye}),this.k=new Ce({uniforms:{tDiffuse:{value:null}},vertexShader:kc,fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;
#define R ${t}
${Cu}
void main(){vec2 px=1./vec2(textureSize(tDiffuse,0))*2.;vec2 wob=(vec2(vn(vUv*vec2(160.,90.)),vn(vUv*vec2(160.,90.)+7.))-.5)*px*.7;vec2 uv=vUv+wob;
 vec3 m[4];vec3 s2[4];for(int k=0;k<4;k++){m[k]=vec3(0.);s2[k]=vec3(0.);}
 for(int j=0;j<=R;j++)for(int i=0;i<=R;i++){vec2 o=vec2(float(i),float(j))*px*.8;
  vec3 a=texture2D(tDiffuse,uv+vec2(-o.x,-o.y)).rgb;m[0]+=a;s2[0]+=a*a;vec3 b=texture2D(tDiffuse,uv+vec2(o.x,-o.y)).rgb;m[1]+=b;s2[1]+=b*b;
  vec3 c=texture2D(tDiffuse,uv+vec2(-o.x,o.y)).rgb;m[2]+=c;s2[2]+=c*c;vec3 d=texture2D(tDiffuse,uv+vec2(o.x,o.y)).rgb;m[3]+=d;s2[3]+=d*d;}
 float n=float((R+1)*(R+1));vec3 col=m[0]/n;float best=1e9;for(int k=0;k<4;k++){vec3 mu=m[k]/n;vec3 v=abs(s2[k]/n-mu*mu);float sv=v.r+v.g+v.b;if(sv<best){best=sv;col=mu;}}
 vec3 q=floor(col*14.+.5)/14.;gl_FragColor=vec4(mix(col,q,.25),1.);}`}),this.c=new Ce({uniforms:{tDiffuse:{value:null},tP:{value:this.half.texture}},vertexShader:kc,fragmentShader:`uniform sampler2D tDiffuse,tP;varying vec2 vUv;${Cu}
void main(){vec2 px=1./vec2(textureSize(tDiffuse,0));vec3 col=texture2D(tP,vUv).rgb;vec3 f=texture2D(tDiffuse,vUv).rgb;col=mix(col,f,.18);
 float l0=dot(texture2D(tDiffuse,vUv+vec2(px.x,0.)).rgb-texture2D(tDiffuse,vUv-vec2(px.x,0.)).rgb,vec3(.3,.59,.11));float l1=dot(texture2D(tDiffuse,vUv+vec2(0.,px.y)).rgb-texture2D(tDiffuse,vUv-vec2(0.,px.y)).rgb,vec3(.3,.59,.11));
 col*=1.-smoothstep(.06,.22,length(vec2(l0,l1)))*.16;float cv=vn(vUv*vec2(900.,520.))*.6+vn(vUv*vec2(300.,170.)*vec2(1.,.4))*.4;col*=.965+.07*cv;gl_FragColor=vec4(col,1.);}`}),this.fq=new mi(this.k)}setSize(t,e){this.half.setSize(Math.max(2,t>>1),Math.max(2,e>>1))}render(t,e,n){this.k.uniforms.tDiffuse.value=n.texture,this.fq.material=this.k,t.setRenderTarget(this.half),this.fq.render(t),this.c.uniforms.tDiffuse.value=n.texture,this.fq.material=this.c,t.setRenderTarget(this.renderToScreen?null:e),this.fq.render(t)}},Iu=class extends Pn{constructor(){super(),this.m=new Ce({uniforms:{tDiffuse:{value:null}},vertexShader:kc,fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;${Cu}
void main(){vec2 px=1./vec2(textureSize(tDiffuse,0));vec2 uv=vUv+(vec2(vn(vUv*vec2(120.,70.)),vn(vUv*vec2(120.,70.)+7.))-.5)*px*1.6;vec3 c=texture2D(tDiffuse,uv).rgb;
 vec3 a=texture2D(tDiffuse,uv+vec2(px.x*1.5,0.)).rgb,b=texture2D(tDiffuse,uv-vec2(px.x*1.5,0.)).rgb,d=texture2D(tDiffuse,uv+vec2(0.,px.y*1.5)).rgb,e=texture2D(tDiffuse,uv-vec2(0.,px.y*1.5)).rgb;
 vec3 avg=(a+b+d+e)*.25;c=mix(c,avg,.45);float g=length(vec2(dot(a-b,vec3(.3,.59,.11)),dot(d-e,vec3(.3,.59,.11))));c*=1.-smoothstep(.06,.22,g)*.16;
 c=mix(c,floor(c*12.+.5)/12.,.3);c*=.965+.07*vn(vUv*vec2(700.,400.));gl_FragColor=vec4(c,1.);}`}),this.fq=new mi(this.m)}render(t,e,n){this.m.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.renderToScreen?null:e),this.fq.render(t)}};function uy(){let i=new Ge(innerWidth*Fn,innerHeight*Fn,{type:Ye});gn=new da($e,i),gn.addPass(new fa(Me,Se)),gn.addPass(new ma),Ne.get("paint")==="1"?gn.addPass(new Iu):gn.addPass(Ep())}var Mu=0,Su=0,Kr=Ne.get("yaw")?Xe.degToRad(+Ne.get("yaw")):0,Wc=0,Gs=null,Bu=!1,Ta=$e.domElement,vs={},gi=0,Uc=0,ip=0,sp=0,rp=performance.now(),op=!1,dy=-9,wp={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},fy=i=>{let t=document.activeElement,e=document.getElementById("card");return!(i.metaKey||i.ctrlKey||i.altKey)&&!(t&&(/INPUT|TEXTAREA|SELECT/.test(t.tagName)||t.isContentEditable))&&!(e&&!e.hidden)&&Xi};addEventListener("keydown",i=>{let t=wp[i.code];!t||!fy(i)||(i.preventDefault(),vs[t]=1,op||(op=!0,document.body.classList.add("walked")))},{passive:!1});addEventListener("keyup",i=>{let t=wp[i.code];t&&(vs[t]=0)});addEventListener("blur",()=>{for(let i in vs)vs[i]=0});function py(){if(!zn||!hn||!yn||yn.state!=="running")return;let i=yn,t=i.currentTime,e=i.createOscillator(),n=i.createGain();e.frequency.setValueAtTime(95+Math.random()*20,t),e.frequency.exponentialRampToValueAtTime(48,t+.12),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.16,t+.006),n.gain.exponentialRampToValueAtTime(5e-4,t+.18);let s=i.createBuffer(1,i.sampleRate*.08|0,i.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/r.length,3);let o=i.createBufferSource(),a=i.createBiquadFilter(),l=i.createGain();o.buffer=s,a.type="lowpass",a.frequency.value=900,l.gain.value=.08,o.connect(a).connect(l).connect(hn.master),e.connect(n).connect(hn.master),e.start(t),e.stop(t+.2),o.start(t)}function my(){let i=performance.now(),t=Math.min(.25,(i-rp)/1e3);rp=i;let e=(vs.f?1:0)-(vs.b?1:0);gi+=(e-gi)*(1-Math.exp(-t*(e?3.2:4.5))),Math.abs(gi)<.002&&!e&&(gi=0);let n=(vs.l?1:0)-(vs.r?1:0);if(Uc+=(n-Uc)*(1-Math.exp(-t*5)),Math.abs(Uc)>.001&&(Kr=Math.max(-1.75,Math.min(1.75,Kr+Uc*t*1.1))),gi){let s=_i(".sheet").offsetTop||innerHeight,r=Math.max(1,s-innerHeight*.95),o=scrollY,a=o+gi*t*r/16;a>=r&&gi>0&&(a=r,o<r-1&&(dy=xi.value),gi=Math.min(gi,0)),a=Math.max(0,a),Math.abs(a-o)>.01&&scrollTo({top:a,behavior:"instant"}),ip+=t*Math.abs(gi)*9.5;let l=Math.floor(ip/Math.PI);l!==sp&&(sp=l,Math.abs(gi)>.25&&py())}}Ta.addEventListener("pointerdown",i=>{Gs=[i.clientX,i.clientY,Kr,Wc],Bu=!1});addEventListener("pointerup",()=>Gs=null);var ap=new Xo,lp=new It,Yr=_i("#clabel"),xs=null,Xi=!0,gy=0,xy=()=>Xi?In?In.targets.filter(i=>i.visible&&(In.vis||0)>.4):[]:[];function Tp(i,t){lp.set(i/innerWidth*2-1,-t/innerHeight*2+1),ap.setFromCamera(lp,Se);for(let e of xy())if(ap.intersectObject(e.userData.hit,!1).length)return e;return null}addEventListener("pointermove",i=>{if(Gs){let t=i.clientX-Gs[0],e=i.clientY-Gs[1];Math.abs(t)+Math.abs(e)>6&&(Bu=!0),Kr=Gs[2]-t*.004,Wc=Math.max(-.35,Math.min(.35,Gs[3]-e*.003))}else matchMedia("(pointer:fine)").matches&&(Kr=-(i.clientX/innerWidth-.5)*.2,Wc=-(i.clientY/innerHeight-.5)*.06);if(i.target!==Ta){xs=null,Yr.classList.remove("on");return}xs=Tp(i.clientX,i.clientY),Ta.style.cursor=xs?"pointer":"",xs?(Yr.textContent=xs.userData.label+"  \xB7  open",Yr.style.transform=`translate(${i.clientX+18}px,${i.clientY+14}px)`,Yr.classList.add("on")):Yr.classList.remove("on")});Ta.addEventListener("click",i=>{if(Bu)return;let t=Tp(i.clientX,i.clientY);t&&window.openCard(t.userData.game)});function Xc(){let i=innerWidth,t=innerHeight;$e.setSize(i,t,!1),Se.aspect=i/t,Se.fov=_s==="wild"||_s==="water"?46:_s?_s==="station"?24:16:i<t?70:52,Se.updateProjectionMatrix(),In&&In.layout(Se.aspect),gn&&(gn.setPixelRatio(Fn),gn.setSize(i,t))}var Wr=new U,cp=0,Sa=0,ba=0;var Bs=0,Ea=0;window.__fps=0;var Lu=Ne.has("p")?parseFloat(Ne.get("p")):null;Lu!==null&&document.body.classList.add("endshot");var Du=new U(0,.4,-1),_s=Ne.get("focus");globalThis.__dockCam=Se;globalThis.__dockAlarm=(i,t,e,n)=>{try{hn&&hn.alarm&&hn.alarm(i,t,e,n)}catch{}};var Os=Ne.get("follow"),hp=Ne.get("fo")?Ne.get("fo").split(",").map(Number):null,Nc=new U,vy=new U,zs=Ne.get("cam")?Ne.get("cam").split(",").map(Number):null,up={sky:[new Ft(16762784),new Ft(3820154)],gnd:[new Ft(5914680),new Ft(1053727)],dl:[new Ft(16754784),new Ft(10466559)],fog:[new Ft(15310970),new Ft(1186352)],wsun:[new Ft(16765600),new Ft(13688063)],wcol:[new Ft(3814436),new Ft(725536)]},Xr=(i,t,e)=>i.copy(up[t][0]).lerp(up[t][1],e),Hs=new U,Ap=new U(0,Math.sin(.72),-Math.cos(.72)),_y=new U(0,Math.cos(.72),Math.sin(.72)),yy=new U(1,0,0),Mb=new U(0,Gc+1.55,-9.5).addScaledVector(Ap,95),Sb=new nn().setFromRotationMatrix(new ae().makeBasis(yy,_y,Ap.clone().negate())),bb=new nn,Eb=new U(0,0,1);var dp=-1,hn=null,yn=null,zn=!1,Uu=null,bu=null,ks=_i("#snd"),Fc=_i("#svol"),Rp=()=>+(localStorage.getItem("pluffVol")??.7);function fp(){try{yn||(yn=new(window.AudioContext||window.webkitAudioContext)),yn.resume().catch(()=>{})}catch{return}zn=!0,Cp();let i=()=>{try{if(!zn)return;hn.setVolume(Rp()*.9),clearInterval(Uu),Uu=setInterval(()=>{try{zn&&yn.state==="running"&&hn.schedule(yn.currentTime,yn.currentTime+1.2)}catch{}},400)}catch{}};if(hn)return i();bu=bu||import("./audio-F5SZ4C3D.js"),bu.then(({createEngine:t})=>{setTimeout(()=>{try{if(!hn){let e=yn.createDynamicsCompressor();e.connect(yn.destination),hn=t(yn,e)}i()}catch(e){console.warn("audio init",e)}},0)}).catch(t=>console.warn("audio load",t))}function My(){zn=!1,hn&&hn.setVolume(0),clearInterval(Uu),setTimeout(()=>{!zn&&yn&&yn.suspend()},600),Cp()}function Cp(){ks&&(ks.setAttribute("aria-pressed",zn),ks.querySelector("span").textContent=zn?"Sound on":"Sound off",document.body.classList.toggle("snd-on",zn))}if(ks&&(ks.addEventListener("click",()=>{let i=!zn;localStorage.setItem("pluffSound",i?"1":"0"),ks.classList.remove("armed"),i?fp():My()}),Fc.value=Rp(),Fc.addEventListener("input",()=>{localStorage.setItem("pluffVol",Fc.value),hn&&zn&&hn.setVolume(+Fc.value*.9)}),localStorage.getItem("pluffSound")==="1")){let i=()=>{removeEventListener("pointerdown",i,!0),removeEventListener("keydown",i,!0),zn||fp()};addEventListener("pointerdown",i,!0),addEventListener("keydown",i,!0),ks.classList.add("armed")}document.addEventListener("visibilitychange",()=>{yn&&(document.hidden?yn.suspend():zn&&yn.resume())});var Sy=Ne.get("wm")?+Ne.get("wm"):Vc?120:Ie?66:80,pp=-1e9,Bc=Ne.get("fpscap")?+Ne.get("fpscap"):0,by=!1,Oc=[],Eu=0,zc=99,mp=0;function Pp(i){if(requestAnimationFrame(Pp),document.hidden)return;if(by&&Oc.length<120&&(Eu&&Oc.push(i-Eu),Eu=i,Oc.length===120&&Oc.slice().sort((C,_)=>C-_)[60]<7.8&&(Bc=Vc?60:120)),Bc){let y=1e3/Bc;if(zc+=i-(mp||i),mp=i,zc<y-1.5)return;zc=Math.max(0,Math.min(zc-y,y))}if(!Bc&&!Xi&&++gy%2)return;let t=Math.min(.1,(i-cp)/1e3||.016);cp=i,ep||(xi.value+=t);let e=xi.value;if(Sa++,ba||(ba=i),i-ba>=1e3&&(window.__fps=Sa*1e3/(i-ba),Sa=0,ba=i,!Ne.get("dpr")&&!Ne.get("q"))){let y=window.__fps;y<45?(Bs++,Ea=0):y>57?(Ea++,Bs=0):(Bs=0,Ea=0),Bs>=2&&Fn>_u?(Fn=Math.max(_u,Fn-.25),$e.setPixelRatio(Fn),Xc(),Bs=0):Bs>=3&&Fn<=_u&&gn&&y<30?(gn=null,Bs=0):Ea>=4&&Fn<Tu&&(Fn=Math.min(Tu,Fn+.25),$e.setPixelRatio(Fn),Xc(),Ea=0)}Nn.material.uniforms.time.value=e*.6,my();let n=_i(".sheet").offsetTop||innerHeight,s=Lu??Math.min(1,scrollY/Math.max(1,n-innerHeight*.95)),r=He(.12,.9,s),o=He(.55,1,s);{let y=r.toFixed(3);y!==window.__ns&&(window.__ns=y,document.body.style.setProperty("--n",y))}let a=_i(".sheet").getBoundingClientRect().top,l=innerHeight;Xi=a>l*.5;let h=(_i(".sheet h2")||_i(".sheet")).getBoundingClientRect().top>l*1.02;if(document.body.classList.toggle("lookup",o>.6&&Xi&&h),document.body.classList.toggle("offscene",!Xi),!Xi&&xs&&(xs=null,Yr.classList.remove("on"),Ta.style.cursor=""),Ie&&Sa%12===0&&($e.shadowMap.needsUpdate=!0),Math.abs(r-dp)>.001){dp=r,$e.shadowMap.needsUpdate=!0,Hs.setFromSphericalCoords(1,Xe.degToRad(90-Bn(3.2,-10,Math.pow(r,1.4))),Xe.degToRad(206)),jr.sunPosition.value.copy(Hs);let y=He(0,.6,r);$e.toneMappingExposure=Bn(Ie?.32:.4,Ie?.85:.95,He(.35,1,r)),Xr(Hc.color,"sky",r),Xr(Hc.groundColor,"gnd",r),Hc.intensity=Bn(1.7,.5,y),Xr(On.color,"dl",r),On.intensity=Bn(3.2,.45,y),On.position.copy(r<.5?Hs:Du).multiplyScalar(80),Xr(Me.fog.color,"fog",r),Me.environmentIntensity=Bn(.6,.12,r);let C=Nn.material.uniforms;C.sunDirection.value.copy(Hs).lerp(Du,He(.3,.7,r)).normalize(),Xr(C.sunColor.value,"wsun",r),Xr(C.waterColor.value,"wcol",r),yp.emissiveIntensity=Bn(1.5,4.5,r),Sp.forEach(_=>_.intensity=Bn(1.5,2,r)),Mp.uniforms.glow.value=r*.35,bp.forEach(_=>{_.userData.o??=_.opacity,_.opacity=_.userData.o*Math.pow(1-r,2)}),In.setNight(r,Hs)}Vs.pts.material.opacity=Xe.smoothstep(r,.35,.8),Au&&Au(r,e),Vs.pts.material.size=.3;let f=Bn(19,-1,He(0,.8,s)),u=ep?0:Math.sin(e*.37)*.012;{let y=Lu!==null?1:.06;Mu+=(Kr-.12*(1-o)-.42*He(.2,.55,s)*(1-o)-Mu)*y,Su+=(Wc+o*(Se.aspect<1?.46:.345)-Su)*y}if(Se.position.set(Math.sin(e*.2)*.08,Gc+1.55+u,f),Se.rotation.set(Su-.02,Mu,Math.sin(e*.5)*.004,"YXZ"),_s==="water"&&Je?(Se.position.set(-1.5,2.3,-27),Se.lookAt(-16,-.3,-27)):_s==="wild"&&Je?(Se.position.set(2.4,Gc+1.9,-21.6),Se.lookAt(Je.wildFocus())):_s&&In&&Se.lookAt(In.focus(_s)),Os&&Je){let y=Os==="house"?null:Je[Os]||(Os==="heron"?Je.waders.find(C=>C.userData.heron):null);if(y)y.getWorldPosition(Nc),Se.position.copy(Nc).add(vy.set(...hp||(Os==="owl"?[-1.9,.55,2.3]:Os==="heron"?[-1.6,.5,1.8]:[-2.4,1.3,2.6]))),Os==="owl"&&(Nc.y+=.3),Se.lookAt(Nc);else if(Je.housePos){let C=Je.housePos;Se.position.set(C.x-Math.sin(.44)*13,C.y+1.2,C.z+Math.cos(.44)*13),Se.lookAt(C.x,C.y+.4,C.z)}}zs&&(Se.position.set(zs[0],zs[1],zs[2]),Se.lookAt(zs[3],zs[4],zs[5]));let d=performance.now();Je&&Je.update(e,t,r);let x=performance.now();if(Je&&Je.leafSun&&(Je.leafSun.value.copy(Hs).normalize(),Je.leafI.value=1-He(.25,.6,r)),Je&&Je.wakes){let y=Nn.material.uniforms.wk.value,C=Je.wakes();for(let _=0;_<4;_++){let R=C[_];R?y[_].set(R[0],R[1],R[2],R[3]):y[_].w=0}}let A=Vs.p;for(let y=0;y<A.length;y+=3)A[y]=Vs.base[y]+Math.sin(e*.4+y)*.8,A[y+1]=Vs.base[y+1]+Math.sin(e*.7+y*.3)*.4;Vs.g.attributes.position.needsUpdate=!0;let v=performance.now();if(In.update(e,t,xs),hn&&zn)try{In.onSling||(In.onSling=y=>{try{zn&&Xi&&hn.whoosh(yn.currentTime+.05,-.5+y*.5)}catch{}}),hn.setNight(r),hn.setLook(Xi?o:0),Je&&Je.src&&Sa%6===0&&hn.listen(Se,Je.src())}catch(y){window.__auErr||(window.__auErr=1,console.warn("audio",y))}if(Jr&&(Wr.copy(Hs).multiplyScalar(1e3).add(Se.position).project(Se),Jr.uniforms.sunUv.value.set(Wr.x*.5+.5,Wr.y*.5+.5),Jr.uniforms.amt.value=(Wr.z<1?.25*Math.max(0,1-Math.hypot(Wr.x,Wr.y)/2.2):0)*(1-r)),i-pp>=Sy){pp=i;try{Nn.__mirror($e,Me,Se)}catch{}}let p=performance.now();gn?gn.render():$e.render(Me,Se)}function Ey(){{let e=new Map;Me.traverse(n=>{if(!n.isInstancedMesh||!n.castShadow||n.customDepthMaterial||!n.material||Array.isArray(n.material))return;let s=n.material,r=s.alphaTest>0&&s.map,o=(r?s.map.uuid+s.alphaTest:"p")+s.side+(n.instanceColor?"c":"n"),a=e.get(o);a||(a=new Rr({depthPacking:Yh,side:s.side}),r&&(a.map=s.map,a.alphaTest=s.alphaTest),e.set(o,a)),n.customDepthMaterial=a})}let i=new Map;Me.traverse(e=>{if(!e.material||Array.isArray(e.material))return;let n=i.get(e.material)||{i:0,n:0};e.isInstancedMesh?n.i++:n.n++,i.set(e.material,n)});let t=new Map;Me.traverse(e=>{if(e.isInstancedMesh&&e.material&&!Array.isArray(e.material)){let n=i.get(e.material);if(n&&n.n>0){let s=t.get(e.material);s||(s=e.material.clone(),s.onBeforeCompile=e.material.onBeforeCompile,s.customProgramCacheKey=e.material.customProgramCacheKey,t.set(e.material,s)),e.material=s}}})}function Ip(){Me.traverse(i=>{let t=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(let e of t)e.side===De&&!e.forceSinglePass&&(e.forceSinglePass=!0)})}setInterval(Ip,2e3);function wu(){Ip(),Se.layers.enable(1),On&&On.shadow&&On.shadow.camera.layers.enable(1);let i=new kn,t=0;Me.traverse(e=>{if(!e.isMesh||e===Nn)return;let n=e.material;if(!(!n||Array.isArray(n)||n.emissive&&n.emissiveIntensity>0&&n.emissive.r+n.emissive.g+n.emissive.b>0||n.type==="MeshBasicMaterial"||n.type==="ShaderMaterial"||n.type==="PointsMaterial")){if(e.isSkinnedMesh){e.layers.set(1),t++;return}e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),!(e.isInstancedMesh&&e.count>2e3)&&(e.updateWorldMatrix(!0,!1),i.copy(e.isInstancedMesh?(e.computeBoundingSphere(),e.boundingSphere):e.geometry.boundingSphere).applyMatrix4(e.matrixWorld),i.radius<2.2&&(e.layers.set(1),t++))}})}function wy(){let i=Me.children.filter(n=>(n.isMesh||n.isInstancedMesh||n.isPoints)&&!n.children.length),t=()=>i.map(n=>n.matrix.elements.slice()),e=null;setTimeout(()=>{e=t(),setTimeout(()=>{let n=t(),s=0;i.forEach((r,o)=>{e[o].every((a,l)=>a===n[o][l])&&(r.matrixAutoUpdate=!1,r.updateMatrix(),r.updateMatrixWorld(!0),r.matrixWorldAutoUpdate=!1,s++)})},5e3)},2500)}(async()=>{try{await cy(),Du=In.moonDir,hy(),Xc(),addEventListener("resize",Xc),$e.compile(Me,Se),await ri(1),Ey(),wu(),setTimeout(wu,3e3),setTimeout(wu,9e3),requestAnimationFrame(Pp),wy(),setTimeout(()=>{gp.classList.add("done"),document.body.classList.add("ready"),Ne.has("card")&&window.openCard(+Ne.get("card"))},350)}catch(i){console.error(i),xp()}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
