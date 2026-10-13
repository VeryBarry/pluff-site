var Uu=0,Zc=1,Nu=2;var ya=1,nl=2,cr=3,gi=0,Kt=1,Bt=2,Vn=0,hr=1,rn=2,Jc=3,$c=4,Fu=5;var fs=100,Bu=101,Ou=102,zu=103,Hu=104,Vu=200,Gu=201,ku=202,Wu=203,Kc=204,Qc=205,Xu=206,qu=207,Yu=208,Zu=209,Ju=210,$u=211,Ku=212,Qu=213,ju=214,Mo=0,So=1,bo=2,Xs=3,Eo=4,To=5,wo=6,Ao=7,jc=0,ed=1,td=2,ni=0,Ma=1,Sa=2,ba=3,ps=4,Ea=5,Ta=6,wa=7;var eh=300,qi=301,ms=302,il=303,sl=304,Aa=306,hs=1e3,ci=1001,Ro=1002,sn=1003,nd=1004;var Ra=1005;var ln=1006,rl=1007;var Yi=1008;var Tn=1009,th=1010,nh=1011,ur=1012,al=1013,ii=1014,Gn=1015,Qt=1016,ol=1017,ll=1018,dr=1020,ih=35902,sh=35899,rh=1021,ah=1022,kn=1023,hi=1026,Zi=1027,cl=1028,hl=1029,Ji=1030,ul=1031;var dl=1033,Ca=33776,Ia=33777,Pa=33778,La=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,vl=37496,yl=37488,Ml=37489,Da=37490,Sl=37491,bl=37808,El=37809,Tl=37810,wl=37811,Al=37812,Rl=37813,Cl=37814,Il=37815,Pl=37816,Ll=37817,Dl=37818,Ul=37819,Nl=37820,Fl=37821,Bl=36492,Ol=36494,zl=36495,Hl=36283,Vl=36284,Ua=36285,Gl=36286;var Gr=2300,Co=2301,vo=2302,Nc=2303,Fc=2400,Bc=2401,Oc=2402;var id=3200;var kl=0,sd=1,Ai="",on="srgb",kr="srgb-linear",Wr="linear",yt="srgb";var yo=7680;var rd=519,ad=512,od=513,ld=514,Wl=515,cd=516,hd=517,Xl=518,ud=519,dd=35044;var oh="300 es",jn=2e3,qs=2001;function Tf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){let i=Xr("canvas");return i.style.display="block",i}var $h={},Ys=null;function lh(...i){let e="THREE."+i.shift();Ys?Ys("log",e,...i):console.log(e,...i)}function pd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=pd(i);let e="THREE."+i.shift();if(Ys)Ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=pd(i);let e="THREE."+i.shift();if(Ys)Ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cs(...i){let e=i.join(" ");e in $h||($h[e]=!0,je(...i))}function md(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gd={[Mo]:So,[bo]:wo,[Eo]:Ao,[Xs]:To,[So]:Mo,[wo]:bo,[Ao]:Eo,[To]:Xs},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,Or=Math.PI/180,Zs=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function Af(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rf(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function Cf(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function If(i,e=1){return e-Math.abs(ch(i,e*2)-e)}function Pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Df(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uf(i,e){return i+Math.random()*(e-i)}function Nf(i){return i*(.5-Math.random())}function Ff(i){i!==void 0&&(Kh=i);let e=Kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bf(i){return i*Or}function Of(i){return i*Zs}function zf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),p=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*h,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nn={DEG2RAD:Or,RAD2DEG:Zs,generateUUID:gs,clamp:pt,euclideanModulo:ch,mapLinear:Af,inverseLerp:Rf,lerp:zr,damp:Cf,pingpong:If,smoothstep:Pf,smootherstep:Lf,randInt:Df,randFloat:Uf,randFloatSpread:Nf,seededRandom:Ff,degToRad:Bf,radToDeg:Of,isPowerOfTwo:zf,ceilPowerOfTwo:Hf,floorPowerOfTwo:Vf,setQuaternionFromProperEuler:Gf,normalize:xn,denormalize:ks},mh=class mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mh.prototype.isVector2=!0;var me=mh,Ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],b=r[a+3];if(p!==b||l!==u||c!==d||h!==m){let _=l*u+c*d+h*m+p*b;_<0&&(u=-u,d=-d,m=-m,b=-b,_=-_);let f=1-o;if(_<.9995){let w=Math.acos(_),I=Math.sin(w);f=Math.sin(f*w)/I,o=Math.sin(o*w)/I,l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+b*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+b*o;let w=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=w,c*=w,h*=w,p*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*p+l*d-c*u,e[t+1]=l*m+h*u+c*p-o*d,e[t+2]=c*m+h*d+o*u-l*p,e[t+3]=h*m-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"YXZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"ZXY":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"ZYX":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"YZX":this._x=u*h*p+c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p-u*d*m;break;case"XZY":this._x=u*h*p-c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p+u*d*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gh=class gh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gh.prototype.isVector3=!0;var U=gh,hc=new U,Qh=new Ln,xh=class xh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],d=n[5],m=n[8],b=s[0],_=s[3],f=s[6],w=s[1],I=s[4],v=s[7],C=s[2],T=s[5],M=s[8];return r[0]=a*b+o*w+l*C,r[3]=a*_+o*I+l*T,r[6]=a*f+o*v+l*M,r[1]=c*b+h*w+p*C,r[4]=c*_+h*I+p*T,r[7]=c*f+h*v+p*M,r[2]=u*b+d*w+m*C,r[5]=u*_+d*I+m*T,r[8]=u*f+d*v+m*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*p+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=p*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=u*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=d*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uc.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xh.prototype.isMatrix3=!0;var at=xh,uc=new at,jh=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kf(){let i={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[kr]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:jh,fromXYZ:eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:jh,fromXYZ:eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var ft=kf();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,Io=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=Xr("canvas")),Cs.width=e.width,Cs.height=e.height;let s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wf=0,Js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Xf=0,fc=new U,_n=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,s=ci,r=ln,a=Yi,o=kn,l=Tn,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=gs(),this.name="",this.source=new Js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=eh;_n.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],m=l[9],b=l[2],_=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(m+_)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(c+1)/2,v=(d+1)/2,C=(f+1)/2,T=(h+u)/4,M=(p+b)/4,g=(m+_)/4;return I>v&&I>C?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=T/n,r=M/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=g/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=M/r,s=g/r),this.set(n,s,r,t),this}let w=Math.sqrt((_-m)*(_-m)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(_-m)/w,this.y=(p-b)/w,this.z=(u-h)/w,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var Ct=_h,Po=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new _n(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Po{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qr=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tl=class tl{constructor(e,t,n,s,r,a,o,l,c,h,p,u,d,m,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,u,d,m,b,_)}set(e,t,n,s,r,a,o,l,c,h,p,u,d,m,b,_){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=m,f[11]=b,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*p,m=o*h,b=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+m*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*p,m=c*h,b=c*p;t[0]=u+b*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*p,m=c*h,b=c*p;t[0]=u-b*o,t[4]=-a*p,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*p,m=o*h,b=o*p;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+b,t[1]=l*p,t[5]=b*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-u*p,t[8]=m*p+d,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*p+m,t[10]=u-b*p}else if(e.order==="XZY"){let u=a*l,d=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+b,t[5]=a*h,t[9]=d*p-m,t[2]=m*p-d,t[6]=o*h,t[10]=b*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,Yf)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Pi.crossVectors(n,Cn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Pi.crossVectors(n,Cn)),Pi.normalize(),qa.crossVectors(Cn,Pi),s[0]=Pi.x,s[4]=qa.x,s[8]=Cn.x,s[1]=Pi.y,s[5]=qa.y,s[9]=Cn.y,s[2]=Pi.z,s[6]=qa.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],d=n[13],m=n[2],b=n[6],_=n[10],f=n[14],w=n[3],I=n[7],v=n[11],C=n[15],T=s[0],M=s[4],g=s[8],S=s[12],A=s[1],P=s[5],L=s[9],F=s[13],D=s[2],N=s[6],z=s[10],V=s[14],Q=s[3],k=s[7],ie=s[11],se=s[15];return r[0]=a*T+o*A+l*D+c*Q,r[4]=a*M+o*P+l*N+c*k,r[8]=a*g+o*L+l*z+c*ie,r[12]=a*S+o*F+l*V+c*se,r[1]=h*T+p*A+u*D+d*Q,r[5]=h*M+p*P+u*N+d*k,r[9]=h*g+p*L+u*z+d*ie,r[13]=h*S+p*F+u*V+d*se,r[2]=m*T+b*A+_*D+f*Q,r[6]=m*M+b*P+_*N+f*k,r[10]=m*g+b*L+_*z+f*ie,r[14]=m*S+b*F+_*V+f*se,r[3]=w*T+I*A+v*D+C*Q,r[7]=w*M+I*P+v*N+C*k,r[11]=w*g+I*L+v*z+C*ie,r[15]=w*S+I*F+v*V+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],m=e[3],b=e[7],_=e[11],f=e[15],w=l*d-c*u,I=o*d-c*p,v=o*u-l*p,C=a*d-c*h,T=a*u-l*h,M=a*p-o*h;return t*(b*w-_*I+f*v)-n*(m*w-_*C+f*T)+s*(m*I-b*C+f*M)-r*(m*v-b*T+_*M)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],m=e[12],b=e[13],_=e[14],f=e[15],w=t*o-n*a,I=t*l-s*a,v=t*c-r*a,C=n*l-s*o,T=n*c-r*o,M=s*c-r*l,g=h*b-p*m,S=h*_-u*m,A=h*f-d*m,P=p*_-u*b,L=p*f-d*b,F=u*f-d*_,D=w*F-I*L+v*P+C*A-T*S+M*g;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return e[0]=(o*F-l*L+c*P)*N,e[1]=(s*L-n*F-r*P)*N,e[2]=(b*M-_*T+f*C)*N,e[3]=(u*T-p*M-d*C)*N,e[4]=(l*A-a*F-c*S)*N,e[5]=(t*F-s*A+r*S)*N,e[6]=(_*v-m*M-f*I)*N,e[7]=(h*M-u*v+d*I)*N,e[8]=(a*L-o*A+c*g)*N,e[9]=(n*A-t*L-r*g)*N,e[10]=(m*T-b*v+f*w)*N,e[11]=(p*v-h*T-d*w)*N,e[12]=(o*S-a*P-l*g)*N,e[13]=(t*P-n*S+s*g)*N,e[14]=(b*I-m*C-_*w)*N,e[15]=(h*C-p*I+u*w)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,u=r*c,d=r*h,m=r*p,b=a*h,_=a*p,f=o*p,w=l*c,I=l*h,v=l*p,C=n.x,T=n.y,M=n.z;return s[0]=(1-(b+f))*C,s[1]=(d+v)*C,s[2]=(m-I)*C,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(u+f))*T,s[6]=(_+w)*T,s[7]=0,s[8]=(m+I)*M,s[9]=(_-w)*M,s[10]=(1-(u+b))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$n.copy(this);let c=1/a,h=1/o,p=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=p,$n.elements[9]*=p,$n.elements[10]*=p,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===jn)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===qs)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===jn)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===qs)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};tl.prototype.isMatrix4=!0;var xt=tl,Is=new U,$n=new xt,qf=new U(0,0,0),Yf=new U(1,1,1),Pi=new U,qa=new U,Cn=new U,tu=new xt,nu=new Ln,wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zf=0,iu=new U,Ps=new Ln,yi=new xt,Ya=new U,Ir=new U,Jf=new U,$f=new Ln,su=new U(1,0,0),ru=new U(0,1,0),au=new U(0,0,1),ou={type:"added"},Kf={type:"removed"},Ls={type:"childadded",child:null},pc={type:"childremoved",child:null},It=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new wi,n=new Ln,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new at}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ir,Ya,this.up):yi.lookAt(Ya,Ir,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(yi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qf={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let _=t.getJointPose(b,n),f=this._getHandJoint(c,b);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Za={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=ch(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mc(a,r,e+1/3),this.g=mc(a,r,e),this.b=mc(a,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let n=xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return ft.workingToColorSpace(fn.copy(this),e),Math.round(pt(fn.r*255,0,255))*65536+Math.round(pt(fn.g*255,0,255))*256+Math.round(pt(fn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=on){ft.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Za);let n=zr(Li.h,Za.h,t),s=zr(Li.s,Za.s,t),r=zr(Li.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new be;be.NAMES=xd;var Yr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qs=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new U,Mi=new U,gc=new U,Si=new U,Ds=new U,Us=new U,lu=new U,xc=new U,_c=new U,vc=new U,yc=new Ct,Mc=new Ct,Sc=new Ct,Fi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),Mi.subVectors(n,t),gc.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(Mi),l=Kn.dot(gc),c=Mi.dot(Mi),h=Mi.dot(gc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return yc.setScalar(0),Mc.setScalar(0),Sc.setScalar(0),yc.fromBufferAttribute(e,t),Mc.fromBufferAttribute(e,n),Sc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yc,r.x),a.addScaledVector(Mc,r.y),a.addScaledVector(Sc,r.z),a}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),Mi.subVectors(e,t),Kn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Kn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ds.subVectors(s,n),Us.subVectors(r,n),xc.subVectors(e,n);let l=Ds.dot(xc),c=Us.dot(xc);if(l<=0&&c<=0)return t.copy(n);_c.subVectors(e,s);let h=Ds.dot(_c),p=Us.dot(_c);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ds,a);vc.subVectors(e,r);let d=Ds.dot(vc),m=Us.dot(vc);if(m>=0&&d<=m)return t.copy(r);let b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Us,o);let _=h*m-d*p;if(_<=0&&p-h>=0&&d-m>=0)return lu.subVectors(r,s),o=(p-h)/(p-h+(d-m)),t.copy(s).addScaledVector(lu,o);let f=1/(_+b+u);return a=b*f,o=u*f,t.copy(n).addScaledVector(Ds,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},di=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),$a.subVectors(this.max,Pr),Ns.subVectors(e.a,Pr),Fs.subVectors(e.b,Pr),Bs.subVectors(e.c,Pr),Di.subVectors(Fs,Ns),Ui.subVectors(Bs,Fs),ss.subVectors(Ns,Bs);let t=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-ss.z,ss.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,ss.z,0,-ss.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-ss.y,ss.x,0];return!bc(t,Ns,Fs,Bs,$a)||(t=[1,0,0,0,1,0,0,0,1],!bc(t,Ns,Fs,Bs,$a))?!1:(Ka.crossVectors(Di,Ui),t=[Ka.x,Ka.y,Ka.z],bc(t,Ns,Fs,Bs,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new U,new U,new U,new U,new U,new U,new U,new U],Qn=new U,Ja=new di,Ns=new U,Fs=new U,Bs=new U,Di=new U,Ui=new U,ss=new U,Pr=new U,$a=new U,Ka=new U,rs=new U;function bc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zt=new U,Qa=new me,jf=0,nn=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dd,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Zr=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jr=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ep=new di,Lr=new U,Ec=new U,fi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ep.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ec)),this.expandByPoint(Lr.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tp=0,zn=new xt,Tc=new It,Os=new U,In=new di,Dr=new di,tn=new U,vt=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tf(e)?Jr:Zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Tc.lookAt(e),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(In.min,Dr.min),In.expandByPoint(tn),tn.addVectors(In.max,Dr.max),In.expandByPoint(tn)):(In.expandByPoint(Dr.min),In.expandByPoint(Dr.max))}In.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)tn.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(e,c),tn.add(Os)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new U,l[g]=new U;let c=new U,h=new U,p=new U,u=new me,d=new me,m=new me,b=new U,_=new U;function f(g,S,A){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,A),u.fromBufferAttribute(r,g),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,A),h.sub(c),p.sub(c),d.sub(u),m.sub(u);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(P),_.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),o[g].add(b),o[S].add(b),o[A].add(b),l[g].add(_),l[S].add(_),l[A].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let g=0,S=w.length;g<S;++g){let A=w[g],P=A.start,L=A.count;for(let F=P,D=P+L;F<D;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let I=new U,v=new U,C=new U,T=new U;function M(g){C.fromBufferAttribute(s,g),T.copy(C);let S=o[g];I.copy(S),I.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(T,S);let P=v.dot(l[g])<0?-1:1;a.setXYZW(g,I.x,I.y,I.z,P)}for(let g=0,S=w.length;g<S;++g){let A=w[g],P=A.start,L=A.count;for(let F=P,D=P+L;F<D;F+=3)M(e.getX(F+0)),M(e.getX(F+1)),M(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),b=e.getX(u+1),_=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,_),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,_),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let f=0;f<h;f++)u[m++]=c[d++]}return new nn(u,h,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wc=new U,np=new U,ip=new at,Pn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wc.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ip.getNormalMatrix(e),s=this.coplanarPoint(wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sp=0,pi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=hr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Qc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ei=new U,Ac=new U,ja=new U,eo=new U,us=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ac.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),eo.copy(this.origin).sub(Ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ja),o=eo.dot(this.direction),l=-eo.dot(ja),c=eo.lengthSq(),h=Math.abs(1-a*a),p,u,d,m;if(h>0)if(p=a*l-o,u=a*o-l,m=r*h,p>=0)if(u>=-m)if(u<=m){let b=1/h;p*=b,u*=b,d=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-m?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=m?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ac).addScaledVector(ja,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,b=t.y-a.y,_=t.z-a.z,f=n.x-a.x,w=n.y-a.y,I=n.z-a.z,v=Math.abs(l),C=Math.abs(c),T=Math.abs(h),M,g,S,A,P,L,F,D,N,z,V,Q;if(v>=C&&v>=T?(S=l,L=p,N=m,Q=f,l>=0?(M=c,g=h,A=u,P=d,F=b,D=_,z=w,V=I):(M=h,g=c,A=d,P=u,F=_,D=b,z=I,V=w)):C>=T?(S=c,L=u,N=b,Q=w,c>=0?(M=h,g=l,A=d,P=p,F=_,D=m,z=I,V=f):(M=l,g=h,A=p,P=d,F=m,D=_,z=f,V=I)):(S=h,L=d,N=_,Q=I,h>=0?(M=l,g=c,A=p,P=u,F=m,D=b,z=f,V=w):(M=c,g=l,A=u,P=p,F=b,D=m,z=w,V=f)),S===0)return null;let k=M/S,ie=g/S,se=1/S,Ue=A-k*L,xe=P-ie*L,ot=F-k*N,nt=D-ie*N,rt=z-k*Q,te=V-ie*Q,ae=rt*nt-te*ot,we=Ue*te-xe*rt,$e=ot*xe-nt*Ue;if(s){if(ae<0||we<0||$e<0)return null}else if((ae<0||we<0||$e<0)&&(ae>0||we>0||$e>0))return null;let Le=ae+we+$e;if(Le===0)return null;let tt=se*(ae*L+we*N+$e*Q);return(Le>0?tt<0:tt>0)?null:this.at(tt/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cu=new xt,as=new us,to=new fi,hu=new U,no=new U,io=new U,so=new U,Rc=new U,ro=new U,uu=new U,ao=new U,Ae=class extends It{constructor(e=new vt,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Rc.fromBufferAttribute(p,e),a?ro.addScaledVector(Rc,h):ro.addScaledVector(Rc.sub(t),h))}t.add(ro)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(to.containsPoint(as.origin)===!1&&(as.intersectSphere(to,hu)===null||as.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(cu.copy(r).invert(),as.copy(e.ray).applyMatrix4(cu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let _=u[m],f=a[_.materialIndex],w=Math.max(_.start,d.start),I=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let v=w,C=I;v<C;v+=3){let T=o.getX(v),M=o.getX(v+1),g=o.getX(v+2);s=oo(this,f,e,n,c,h,p,T,M,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let _=m,f=b;_<f;_+=3){let w=o.getX(_),I=o.getX(_+1),v=o.getX(_+2);s=oo(this,a,e,n,c,h,p,w,I,v),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let _=u[m],f=a[_.materialIndex],w=Math.max(_.start,d.start),I=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=w,C=I;v<C;v+=3){let T=v,M=v+1,g=v+2;s=oo(this,f,e,n,c,h,p,T,M,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let _=m,f=b;_<f;_+=3){let w=_,I=_+1,v=_+2;s=oo(this,a,e,n,c,h,p,w,I,v),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};function rp(i,e,t,n,s,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;ao.copy(o),ao.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:i}}function oo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,no),i.getVertexPosition(l,io),i.getVertexPosition(c,so);let h=rp(i,e,t,n,no,io,so,uu);if(h){let p=new U;Fi.getBarycoord(uu,no,io,so,p),s&&(h.uv=Fi.getInterpolatedAttribute(s,o,l,c,p,new me)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,o,l,c,p,new me)),a&&(h.normal=Fi.getInterpolatedAttribute(a,o,l,c,p,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Fi.getNormal(no,io,so,u.normal),h.face=u,h.barycoord=p}return h}var $r=class extends _n{constructor(e=null,t=1,n=1,s,r,a,o,l,c=sn,h=sn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var js=class extends nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new xt,du=new xt,lo=[],fu=new di,ap=new xt,Ur=new Ae,Nr=new fi,$t=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ap)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),fu.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(fu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Nr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),du.multiplyMatrices(n,zs),Ur.matrixWorld=du,Ur.raycast(e,lo);for(let a=0,o=lo.length;a<o;a++){let l=lo[a];l.instanceId=r,l.object=this,t.push(l)}lo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(s*this.count),s,this.count,cl,Gn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new fi,op=new me(.5,.5),co=new U,er=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],m=r[8],b=r[9],_=r[10],f=r[11],w=r[12],I=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-a,d-h,f-m,C-w).normalize(),s[1].setComponents(c+a,d+h,f+m,C+w).normalize(),s[2].setComponents(c+o,d+p,f+b,C+I).normalize(),s[3].setComponents(c-o,d-p,f-b,C-I).normalize(),n)s[4].setComponents(l,u,_,v).normalize(),s[5].setComponents(c-l,d-u,f-_,C-v).normalize();else if(s[4].setComponents(c-l,d-u,f-_,C-v).normalize(),t===jn)s[5].setComponents(c+l,d+u,f+_,C+v).normalize();else if(t===qs)s[5].setComponents(l,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=op.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(co.x=s.normal.x>0?e.max.x:e.min.x,co.y=s.normal.y>0?e.max.y:e.min.y,co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tr=class extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Do=new U,Uo=new U,pu=new xt,Fr=new us,ho=new fi,Cc=new U,mu=new U,No=class extends It{constructor(e=new vt,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Do.fromBufferAttribute(t,s-1),Uo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Do.distanceTo(Uo);e.setAttribute("lineDistance",new st(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;pu.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(pu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=d,_=m-1;b<_;b+=c){let f=h.getX(b),w=h.getX(b+1),I=uo(this,e,Fr,l,f,w,b);I&&t.push(I)}if(this.isLineLoop){let b=h.getX(m-1),_=h.getX(d),f=uo(this,e,Fr,l,b,_,m-1);f&&t.push(f)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=d,_=m-1;b<_;b+=c){let f=uo(this,e,Fr,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){let b=uo(this,e,Fr,l,m-1,d,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Do.fromBufferAttribute(o,s),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(Do,Uo,Cc,mu)>n)return;Cc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Cc);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var gu=new U,xu=new U,Kr=class extends No{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gu.fromBufferAttribute(t,s),xu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(xu);e.setAttribute("lineDistance",new st(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ei=class extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_u=new xt,zc=new us,fo=new fi,po=new U,mi=class extends It{constructor(e=new vt,t=new ei){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;_u.copy(s).invert(),zc.copy(e.ray).applyMatrix4(_u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,b=d;m<b;m++){let _=c.getX(m);po.fromBufferAttribute(p,_),vu(po,_,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let m=u,b=d;m<b;m++)po.fromBufferAttribute(p,m),vu(po,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vu(i,e,t,n,s,r,a){let o=zc.distanceSqToPoint(i);if(o<t){let l=new U;zc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends _n{constructor(e=[],t=qi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nr=class extends _n{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends _n{constructor(e,t,n=ii,s,r,a,o=sn,l=sn,c,h=hi,p=1){if(h!==hi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fo=class extends Bi{constructor(e,t=ii,n=qi,s,r,a=sn,o=sn,l,c=hi){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},jr=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(p,2));function m(b,_,f,w,I,v,C,T,M,g,S){let A=v/M,P=C/g,L=v/2,F=C/2,D=T/2,N=M+1,z=g+1,V=0,Q=0,k=new U;for(let ie=0;ie<z;ie++){let se=ie*P-F;for(let Ue=0;Ue<N;Ue++){let xe=Ue*A-L;k[b]=xe*w,k[_]=se*I,k[f]=D,c.push(k.x,k.y,k.z),k[b]=0,k[_]=0,k[f]=T>0?1:-1,h.push(k.x,k.y,k.z),p.push(Ue/M),p.push(1-ie/g),V+=1}}for(let ie=0;ie<g;ie++)for(let se=0;se<M;se++){let Ue=u+se+N*ie,xe=u+se+N*(ie+1),ot=u+(se+1)+N*(ie+1),nt=u+(se+1)+N*ie;l.push(Ue,xe,nt),l.push(xe,ot,nt),Q+=6}o.addGroup(d,Q,S),d+=Q,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ea=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let d=n+p/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},En=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],d=[],m=0,b=[],_=n/2,f=0;w(),a===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function w(){let v=new U,C=new U,T=0,M=(t-e)/n;for(let g=0;g<=r;g++){let S=[],A=g/r,P=A*(t-e)+e;for(let L=0;L<=s;L++){let F=L/s,D=F*l+o,N=Math.sin(D),z=Math.cos(D);C.x=P*N,C.y=-A*n+_,C.z=P*z,p.push(C.x,C.y,C.z),v.set(N,M,z).normalize(),u.push(v.x,v.y,v.z),d.push(F,1-A),S.push(m++)}b.push(S)}for(let g=0;g<s;g++)for(let S=0;S<r;S++){let A=b[S][g],P=b[S+1][g],L=b[S+1][g+1],F=b[S][g+1];(e>0||S!==0)&&(h.push(A,P,F),T+=3),(t>0||S!==r-1)&&(h.push(P,L,F),T+=3)}c.addGroup(f,T,0),f+=T}function I(v){let C=m,T=new me,M=new U,g=0,S=v===!0?e:t,A=v===!0?1:-1;for(let L=1;L<=s;L++)p.push(0,_*A,0),u.push(0,A,0),d.push(.5,.5),m++;let P=m;for(let L=0;L<=s;L++){let D=L/s*l+o,N=Math.cos(D),z=Math.sin(D);M.x=S*z,M.y=_*A,M.z=S*N,p.push(M.x,M.y,M.z),u.push(0,A,0),T.x=N*.5+.5,T.y=z*.5*A+.5,d.push(T.x,T.y),m++}for(let L=0;L<s;L++){let F=C+L,D=P+L;v===!0?h.push(D,D+1,F):h.push(D+1,D,F),g+=3}c.addGroup(f,g,v===!0?1:2),f+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ti=class i extends En{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let I=new U,v=new U,C=new U;for(let T=0;T<t.length;T+=3)d(t[T+0],I),d(t[T+1],v),d(t[T+2],C),l(I,v,C,w)}function l(w,I,v,C){let T=C+1,M=[];for(let g=0;g<=T;g++){M[g]=[];let S=w.clone().lerp(v,g/T),A=I.clone().lerp(v,g/T),P=T-g;for(let L=0;L<=P;L++)L===0&&g===T?M[g][L]=S:M[g][L]=S.clone().lerp(A,L/P)}for(let g=0;g<T;g++)for(let S=0;S<2*(T-g)-1;S++){let A=Math.floor(S/2);S%2===0?(u(M[g][A+1]),u(M[g+1][A]),u(M[g][A])):(u(M[g][A+1]),u(M[g+1][A+1]),u(M[g+1][A]))}}function c(w){let I=new U;for(let v=0;v<r.length;v+=3)I.x=r[v+0],I.y=r[v+1],I.z=r[v+2],I.normalize().multiplyScalar(w),r[v+0]=I.x,r[v+1]=I.y,r[v+2]=I.z}function h(){let w=new U;for(let I=0;I<r.length;I+=3){w.x=r[I+0],w.y=r[I+1],w.z=r[I+2];let v=_(w)/2/Math.PI+.5,C=f(w)/Math.PI+.5;a.push(v,1-C)}m(),p()}function p(){for(let w=0;w<a.length;w+=6){let I=a[w+0],v=a[w+2],C=a[w+4],T=Math.max(I,v,C),M=Math.min(I,v,C);T>.9&&M<.1&&(I<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function d(w,I){let v=w*3;I.x=e[v+0],I.y=e[v+1],I.z=e[v+2]}function m(){let w=new U,I=new U,v=new U,C=new U,T=new me,M=new me,g=new me;for(let S=0,A=0;S<r.length;S+=9,A+=6){w.set(r[S+0],r[S+1],r[S+2]),I.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(a[A+0],a[A+1]),M.set(a[A+2],a[A+3]),g.set(a[A+4],a[A+5]),C.copy(w).add(I).add(v).divideScalar(3);let P=_(C);b(T,A+0,w,P),b(M,A+2,I,P),b(g,A+4,v,P)}}function b(w,I,v,C){C<0&&w.x===1&&(a[I]=w.x-1),v.x===0&&v.z===0&&(a[I]=C/2/Math.PI+.5)}function _(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},na=class i extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new xt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(pt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ir=class extends Dn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bo=class extends ir{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var yu=new U,Mu=new U,Ic=new hh,Pc=new hh,Lc=new hh,Oi=class extends Dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Mu.subVectors(s[0],s[1]).add(s[0]),c=Mu);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(p),d),b=Math.pow(p.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(h),d);b<1e-4&&(b=1),m<1e-4&&(m=b),_<1e-4&&(_=b),Ic.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,m,b,_),Pc.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,m,b,_),Lc.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,m,b,_)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Pc.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Lc.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(Ic.calc(l),Pc.calc(l),Lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Su(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function lp(i,e){let t=1-i;return t*t*e}function cp(i,e){return 2*(1-i)*i*e}function hp(i,e){return i*i*e}function Hr(i,e,t,n){return lp(i,e)+cp(i,t)+hp(i,n)}function up(i,e){let t=1-i;return t*t*t*e}function dp(i,e){let t=1-i;return 3*t*t*i*e}function fp(i,e){return 3*(1-i)*i*i*e}function pp(i,e){return i*i*i*e}function Vr(i,e,t,n,s){return up(i,e)+dp(i,t)+fp(i,n)+pp(i,s)}var ia=class extends Dn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oo=class extends Dn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y),Vr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends Dn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zi=class extends Dn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Dn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hn=class extends Dn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y),Hr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Su(o,l.x,c.x,h.x,p.x),Su(o,l.y,c.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},zo=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:Oi,CubicBezierCurve:ia,CubicBezierCurve3:Oo,EllipseCurve:ir,LineCurve:sa,LineCurve3:zi,QuadraticBezierCurve:ra,QuadraticBezierCurve3:Hn,SplineCurve:aa}),Ho=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new zo[s.type]().fromJSON(s))}return this}},oa=class extends Ho{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sa(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ra(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ia(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new aa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ir(e,t,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sr=class extends oa{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new oa().fromJSON(s))}return this}};function mp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_d(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=yp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,p=l;for(let u=t;u<s;u+=t){let d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>p&&(p=m)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return la(r,a,t,o,l,c,0),a}function _d(i,e,t,n,s){let r;if(s===Pp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bu(a/n|0,i[a],i[a+1],r);return r&&rr(r,r.next)&&(ha(r),r=r.next),r}function ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function la(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Tp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?xp(i,n,s,r):gp(i)){e.push(l.i,i.i,c.i),ha(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=_p(ds(i),e),la(i,e,t,n,s,r,2)):a===2&&vp(i,e,t,n,s,r):la(ds(i),e,t,n,s,r,1);break}}}function gp(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=p&&m.y<=d&&Br(s,o,r,l,a,c,m.x,m.y)&&Vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,p,u),b=Math.max(o,l,c),_=Math.max(h,p,u),f=Hc(d,m,e,t,n),w=Hc(b,_,e,t,n),I=i.prevZ,v=i.nextZ;for(;I&&I.z>=f&&v&&v.z<=w;){if(I.x>=d&&I.x<=b&&I.y>=m&&I.y<=_&&I!==s&&I!==a&&Br(o,h,l,p,c,u,I.x,I.y)&&Vt(I.prev,I,I.next)>=0||(I=I.prevZ,v.x>=d&&v.x<=b&&v.y>=m&&v.y<=_&&v!==s&&v!==a&&Br(o,h,l,p,c,u,v.x,v.y)&&Vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;I&&I.z>=f;){if(I.x>=d&&I.x<=b&&I.y>=m&&I.y<=_&&I!==s&&I!==a&&Br(o,h,l,p,c,u,I.x,I.y)&&Vt(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;v&&v.z<=w;){if(v.x>=d&&v.x<=b&&v.y>=m&&v.y<=_&&v!==s&&v!==a&&Br(o,h,l,p,c,u,v.x,v.y)&&Vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _p(i,e){let t=i;do{let n=t.prev,s=t.next.next;!rr(n,s)&&yd(n,t,t.next,s)&&ca(n,s)&&ca(s,n)&&(e.push(n.i,t.i,s.i),ha(t),ha(t.next),t=i=s),t=t.next}while(t!==i);return ds(t)}function vp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rp(a,o)){let l=Md(a,o);a=ds(a,a.next),l=ds(l,l.next),la(a,e,t,n,s,r,0),la(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=_d(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ap(c))}s.sort(Mp);for(let r=0;r<s.length;r++)t=Sp(s[r],t);return t}function Mp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Sp(i,e){let t=bp(i,e);if(!t)return e;let n=Md(t,i);return ds(n,n.next),ds(t,t.next)}function bp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(rr(i,t))return t;do{if(rr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);ca(t,i)&&(p<h||p===h&&(t.x>a.x||t.x===a.x&&Ep(a,t)))&&(a=t,h=p)}t=t.next}while(t!==o);return a}function Ep(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function Tp(i,e,t,n){let s=i;do s.z===0&&(s.z=Hc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wp(s)}function wp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Hc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ap(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Br(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&vd(i,e,t,n,s,r,a,o)}function Rp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cp(i,e)&&(ca(i,e)&&ca(e,i)&&Ip(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||rr(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rr(i,e){return i.x===e.x&&i.y===e.y}function yd(i,e,t,n){let s=go(Vt(i,e,t)),r=go(Vt(i,e,n)),a=go(Vt(t,n,i)),o=go(Vt(t,n,e));return!!(s!==r&&a!==o||s===0&&mo(i,t,e)||r===0&&mo(i,n,e)||a===0&&mo(t,i,n)||o===0&&mo(t,e,n))}function mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function go(i){return i>0?1:i<0?-1:0}function Cp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ca(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Ip(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Md(i,e){let t=Vc(i.i,i.x,i.y),n=Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bu(i,e,t,n){let s=Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Gc=class{static triangulate(e,t,n=2){return mp(e,t,n)}},ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Eu(e),Tu(n,e);let a=e.length;t.forEach(Eu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Tu(n,t[l]);let o=Gc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Eu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ua=class i extends vt{constructor(e=new sr([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Lp,I,v=!1,C,T,M,g;if(f){I=f.getSpacedPoints(h),v=!0,u=!1;let le=f.isCatmullRomCurve3?f.closed:!1;C=f.computeFrenetFrames(h,le),T=new U,M=new U,g=new U}u||(_=0,d=0,m=0,b=0);let S=o.extractPoints(c),A=S.shape,P=S.holes;if(!ls.isClockWise(A)){A=A.reverse();for(let le=0,ue=P.length;le<ue;le++){let _e=P[le];ls.isClockWise(_e)&&(P[le]=_e.reverse())}}function F(le){let _e=10000000000000001e-36,ve=le[0];for(let ye=1;ye<=le.length;ye++){let W=ye%le.length,Y=le[W],ee=Y.x-ve.x,X=Y.y-ve.y,R=ee*ee+X*X,ce=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(ve.x),Math.abs(ve.y)),pe=_e*ce*ce;if(R<=pe){le.splice(W,1),ye--;continue}ve=Y}}F(A),P.forEach(F);let D=P.length,N=A;for(let le=0;le<D;le++){let ue=P[le];A=A.concat(ue)}function z(le,ue,_e){return ue||it("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ue,_e)}let V=A.length;function Q(le,ue,_e){let ve,ye,W,Y=le.x-ue.x,ee=le.y-ue.y,X=_e.x-le.x,R=_e.y-le.y,ce=Y*Y+ee*ee,pe=Y*R-ee*X;if(Math.abs(pe)>Number.EPSILON){let E=Math.sqrt(ce),x=Math.sqrt(X*X+R*R),B=ue.x-ee/E,G=ue.y+Y/E,$=_e.x-R/x,re=_e.y+X/x,de=(($-B)*R-(re-G)*X)/(Y*R-ee*X);ve=B+Y*de-le.x,ye=G+ee*de-le.y;let j=ve*ve+ye*ye;if(j<=2)return new me(ve,ye);W=Math.sqrt(j/2)}else{let E=!1;Y>Number.EPSILON?X>Number.EPSILON&&(E=!0):Y<-Number.EPSILON?X<-Number.EPSILON&&(E=!0):Math.sign(ee)===Math.sign(R)&&(E=!0),E?(ve=-ee,ye=Y,W=Math.sqrt(ce)):(ve=Y,ye=ee,W=Math.sqrt(ce/2))}return new me(ve/W,ye/W)}let k=[];for(let le=0,ue=N.length,_e=ue-1,ve=le+1;le<ue;le++,_e++,ve++)_e===ue&&(_e=0),ve===ue&&(ve=0),k[le]=Q(N[le],N[_e],N[ve]);let ie=[],se,Ue=k.concat();for(let le=0,ue=D;le<ue;le++){let _e=P[le];se=[];for(let ve=0,ye=_e.length,W=ye-1,Y=ve+1;ve<ye;ve++,W++,Y++)W===ye&&(W=0),Y===ye&&(Y=0),se[ve]=Q(_e[ve],_e[W],_e[Y]);ie.push(se),Ue=Ue.concat(se)}let xe;if(_===0)xe=ls.triangulateShape(N,P);else{let le=[],ue=[];for(let _e=0;_e<_;_e++){let ve=_e/_,ye=d*Math.cos(ve*Math.PI/2),W=m*Math.sin(ve*Math.PI/2)+b;for(let Y=0,ee=N.length;Y<ee;Y++){let X=z(N[Y],k[Y],W);we(X.x,X.y,-ye),ve===0&&le.push(X)}for(let Y=0,ee=D;Y<ee;Y++){let X=P[Y];se=ie[Y];let R=[];for(let ce=0,pe=X.length;ce<pe;ce++){let E=z(X[ce],se[ce],W);we(E.x,E.y,-ye),ve===0&&R.push(E)}ve===0&&ue.push(R)}}xe=ls.triangulateShape(le,ue)}let ot=xe.length,nt=m+b;for(let le=0;le<V;le++){let ue=u?z(A[le],Ue[le],nt):A[le];v?(M.copy(C.normals[0]).multiplyScalar(ue.x),T.copy(C.binormals[0]).multiplyScalar(ue.y),g.copy(I[0]).add(M).add(T),we(g.x,g.y,g.z)):we(ue.x,ue.y,0)}for(let le=1;le<=h;le++)for(let ue=0;ue<V;ue++){let _e=u?z(A[ue],Ue[ue],nt):A[ue];v?(M.copy(C.normals[le]).multiplyScalar(_e.x),T.copy(C.binormals[le]).multiplyScalar(_e.y),g.copy(I[le]).add(M).add(T),we(g.x,g.y,g.z)):we(_e.x,_e.y,p/h*le)}for(let le=_-1;le>=0;le--){let ue=le/_,_e=d*Math.cos(ue*Math.PI/2),ve=m*Math.sin(ue*Math.PI/2)+b;for(let ye=0,W=N.length;ye<W;ye++){let Y=z(N[ye],k[ye],ve);we(Y.x,Y.y,p+_e)}for(let ye=0,W=P.length;ye<W;ye++){let Y=P[ye];se=ie[ye];for(let ee=0,X=Y.length;ee<X;ee++){let R=z(Y[ee],se[ee],ve);v?we(R.x,R.y+I[h-1].y,I[h-1].x+_e):we(R.x,R.y,p+_e)}}}rt(),te();function rt(){let le=s.length/3;if(u){let ue=0,_e=V*ue;for(let ve=0;ve<ot;ve++){let ye=xe[ve];$e(ye[2]+_e,ye[1]+_e,ye[0]+_e)}ue=h+_*2,_e=V*ue;for(let ve=0;ve<ot;ve++){let ye=xe[ve];$e(ye[0]+_e,ye[1]+_e,ye[2]+_e)}}else{for(let ue=0;ue<ot;ue++){let _e=xe[ue];$e(_e[2],_e[1],_e[0])}for(let ue=0;ue<ot;ue++){let _e=xe[ue];$e(_e[0]+V*h,_e[1]+V*h,_e[2]+V*h)}}n.addGroup(le,s.length/3-le,0)}function te(){let le=s.length/3,ue=0;ae(N,ue),ue+=N.length;for(let _e=0,ve=P.length;_e<ve;_e++){let ye=P[_e];ae(ye,ue),ue+=ye.length}n.addGroup(le,s.length/3-le,1)}function ae(le,ue){let _e=le.length;for(;--_e>=0;){let ve=_e,ye=_e-1;ye<0&&(ye=le.length-1);for(let W=0,Y=h+_*2;W<Y;W++){let ee=V*W,X=V*(W+1),R=ue+ve+ee,ce=ue+ye+ee,pe=ue+ye+X,E=ue+ve+X;Le(R,ce,pe,E)}}}function we(le,ue,_e){l.push(le),l.push(ue),l.push(_e)}function $e(le,ue,_e){tt(le),tt(ue),tt(_e);let ve=s.length/3,ye=w.generateTopUV(n,s,ve-3,ve-2,ve-1);mt(ye[0]),mt(ye[1]),mt(ye[2])}function Le(le,ue,_e,ve){tt(le),tt(ue),tt(ve),tt(ue),tt(_e),tt(ve);let ye=s.length/3,W=w.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);mt(W[0]),mt(W[1]),mt(W[3]),mt(W[1]),mt(W[2]),mt(W[3])}function tt(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function mt(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zo[s.type]().fromJSON(s)),new i(n,e.options)}},Lp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new me(r,a),new me(o,l),new me(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],p=e[n*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],b=e[r*3],_=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-p),new me(u,1-m),new me(b,1-f)]:[new me(o,1-l),new me(h,1-p),new me(d,1-m),new me(_,1-f)]}};function Dp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ar=class i extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Mt=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,d=[],m=[],b=[],_=[];for(let f=0;f<h;f++){let w=f*u-a;for(let I=0;I<c;I++){let v=I*p-r;m.push(v,-w,0),b.push(0,0,1),_.push(I/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let I=w+c*f,v=w+c*(f+1),C=w+1+c*(f+1),T=w+1+c*f;d.push(I,v,T),d.push(v,C,T)}this.setIndex(d),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},da=class i extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],p=e,u=(t-e)/s,d=new U,m=new me;for(let b=0;b<=s;b++){for(let _=0;_<=n;_++){let f=r+_/n*a;d.x=p*Math.cos(f),d.y=p*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}p+=u}for(let b=0;b<s;b++){let _=b*(n+1);for(let f=0;f<n;f++){let w=f+_,I=w,v=w+n+1,C=w+n+2,T=w+1;o.push(I,v,T),o.push(v,C,T)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var kt=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new U,u=new U,d=[],m=[],b=[],_=[];for(let f=0;f<=n;f++){let w=[],I=f/n,v=a+I*o,C=e*Math.cos(v),T=Math.sqrt(e*e-C*C),M=0;f===0&&a===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let g=0;g<=t;g++){let S=g/t,A=s+S*r;p.x=-T*Math.cos(A),p.y=C,p.z=T*Math.sin(A),m.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),_.push(S+M,1-I),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let I=h[f][w+1],v=h[f][w],C=h[f+1][w],T=h[f+1][w+1];(f!==0||a>0)&&d.push(I,v,T),(f!==n-1||l<Math.PI)&&d.push(v,C,T)}this.setIndex(d),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hi=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=new U,d=new U,m=new U;for(let b=0;b<=n;b++){let _=a+b/n*o;for(let f=0;f<=s;f++){let w=f/s*r;d.x=(e+t*Math.cos(_))*Math.cos(w),d.y=(e+t*Math.cos(_))*Math.sin(w),d.z=t*Math.sin(_),c.push(d.x,d.y,d.z),u.x=e*Math.cos(w),u.y=e*Math.sin(w),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),p.push(f/s),p.push(b/n)}}for(let b=1;b<=n;b++)for(let _=1;_<=s;_++){let f=(s+1)*b+_-1,w=(s+1)*(b-1)+_-1,I=(s+1)*(b-1)+_,v=(s+1)*b+_;l.push(f,w,v),l.push(w,I,v)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var vn=class i extends vt{constructor(e=new Hn(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new me,h=new U,p=[],u=[],d=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function b(){for(let I=0;I<t;I++)_(I);_(r===!1?t:0),w(),f()}function _(I){h=e.getPointAt(I/t,h);let v=a.normals[I],C=a.binormals[I];for(let T=0;T<=s;T++){let M=T/s*Math.PI*2,g=Math.sin(M),S=-Math.cos(M);l.x=S*v.x+g*C.x,l.y=S*v.y+g*C.y,l.z=S*v.z+g*C.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,p.push(o.x,o.y,o.z)}}function f(){for(let I=1;I<=t;I++)for(let v=1;v<=s;v++){let C=(s+1)*(I-1)+(v-1),T=(s+1)*I+(v-1),M=(s+1)*I+v,g=(s+1)*(I-1)+v;m.push(C,T,g),m.push(T,M,g)}}function w(){for(let I=0;I<=t;I++)for(let v=0;v<=s;v++)c.x=I/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wu(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=xs(i[t]);for(let s in n)e[s]=n[s]}return e}function wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Up(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var cn={clone:xs,merge:pn},Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},or=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vo=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bc:r=e,o=2*t-n;break;case Oc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:a=e,l=2*n-t;break;case Oc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),b=m*m,_=b*m,f=-u*_+2*u*b-u*m,w=(1+u)*_+(-1.5-2*u)*b+(-.5+u)*m+1,I=(-1-d)*_+(1.5+d)*b+.5*m,v=d*_-d*b;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+w*a[c+C]+I*a[l+C]+v*a[p+C];return r}},Wo=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},Xo=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends Vi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let m=(n-t)/(s-t),b=1-m;for(let _=0;_!==o;++_)r[_]=a[c+_]*b+a[l+_]*m;return r}let u=o*2,d=e-1;for(let m=0;m!==o;++m){let b=a[c+m],_=a[l+m],f=d*u+m*2,w=p[f],I=p[f+1],v=e*u+m*2,C=h[v],T=h[v+1],M=Op(n,t,w,C,s);r[m]=Sd(M,b,I,T,_)}return r}};function Sd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Bp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Op(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Sd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Bp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Dc(e.settings)&&(n.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth;break;case Nc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return vo;case this.InterpolantFactoryMethodBezier:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Dc(this.settings)&&(Au(this.settings.inTangents,e),Au(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){it("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){it("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&wf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){it("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*n,u=p-n,d=p+n;for(let m=0;m!==n;++m){let b=t[p+m];if(b!==t[u+m]||b!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[p+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Dc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Au(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Co;var Gi=class extends Un{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Gr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Yo.prototype.ValueTypeName="color";var Zo=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Zo.prototype.ValueTypeName="number";var Jo=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},fa=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}};fa.prototype.ValueTypeName="quaternion";fa.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Un{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Gr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};$o.prototype.ValueTypeName="vector";var Ko=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],m=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new Ko,Qo=class{constructor(e){this.manager=e!==void 0?e:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pa=class extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uc=new xt,Ru=new U,Cu=new U,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Uc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xo=new U,_o=new Ln,li=new U,ga=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,_o,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,_o,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xo,_o,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,_o,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new U,Iu=new me,Pu=new me,Jt=class extends ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Pu),t.subVectors(Pu,Iu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var kc=class extends ma{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},xa=class extends lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wi=class extends ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wc=class extends ma{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Wc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vs=-90,Gs=1,jo=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new Jt(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new Jt(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new Jt(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let l=new Jt(Vs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Vs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},el=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_a=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function zp(){this._document.hidden===!1&&this.reset()}var dh="\\[\\]\\.:\\/",Hp=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",Vp="[^"+dh.replace("\\.","")+"]",Gp=/((?:WC+[\/:])*)/.source.replace("WC",fh),kp=/(WCOD+)?/.source.replace("WCOD",Vp),Wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),qp=new RegExp("^"+Gp+kp+Wp+Xp+"$"),Yp=["material","materials","bones","map"],Xc=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(e){let t=qp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;it("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Xc;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var Lu=new xt,va=class{constructor(e,t,n=0,s=1/0){this.ray=new us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qc(e[s],this,n,t);return n.sort(Du),n}};function Du(i,e){return i.distance-e.distance}function qc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)qc(r[a],e,t,!0)}}var vh=class vh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};vh.prototype.isMatrix2=!0;var Yc=vh;function ph(i,e,t,n){let s=Zp(n);switch(t){case rh:return i*e;case cl:return i*e/s.components*s.byteLength;case hl:return i*e/s.components*s.byteLength;case Ji:return i*e*2/s.components*s.byteLength;case ul:return i*e*2/s.components*s.byteLength;case ah:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case dl:return i*e*4/s.components*s.byteLength;case Ca:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(e,8)/2;case xl:case _l:case yl:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vl:case Da:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bl:case Ol:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ua:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zp(i){switch(i){case Tn:case th:return{byteLength:1,components:1};case ur:case nh:case Qt:return{byteLength:2,components:1};case ol:case ll:return{byteLength:2,components:4};case ii:case al:case Gn:return{byteLength:4,components:1};case ih:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<p.length;d++){let m=p[u],b=p[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,m=p.length;d<m;d++){let b=p[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,eg=`uniform sampler2D dfgLUT;
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
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
}`,c0=`#if DEPTH_PACKING == 3200
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
}`,h0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,x0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
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
}`,y0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,b0=`#define NORMAL
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
}`,E0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,A0=`#define STANDARD
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
}`,R0=`#define TOON
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
}`,C0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,U0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:bm,color_vertex:Em,common:Tm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Im,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Zm,envmap_vertex:Om,fog_vertex:zm,fog_pars_vertex:Hm,fog_fragment:Vm,fog_pars_fragment:Gm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:$m,lights_phong_fragment:Km,lights_phong_pars_fragment:Qm,lights_physical_fragment:jm,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:_g,morphtarget_vertex:vg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:Eg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Ig,packing:Pg,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ug,dithering_pars_fragment:Ng,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:zg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:kg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Zg,tonemapping_pars_fragment:Jg,transmission_fragment:$g,transmission_pars_fragment:Kg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:e0,worldpos_vertex:t0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:o0,depth_vert:l0,depth_frag:c0,distance_vert:h0,distance_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:x0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:y0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:b0,meshphong_vert:E0,meshphong_frag:T0,meshphysical_vert:w0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:I0,points_frag:P0,shadow_vert:L0,shadow_frag:D0,sprite_vert:U0,sprite_frag:N0},De={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},_i={basic:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:pn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:pn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new be(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:pn([De.points,De.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:pn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:pn([De.common,De.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:pn([De.sprite,De.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:pn([De.common,De.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:pn([De.lights,De.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};_i.physical={uniforms:pn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var ql={r:0,b:0,g:0},F0=new xt,qd=new at;qd.set(-1,0,0,0,1,0,0,0,1);function B0(i,e,t,n,s,r){let a=new be(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(w){let I=w.isScene===!0?w.background:null;if(I&&I.isTexture){let v=w.backgroundBlurriness>0;I=e.get(I,v)}return I}function m(w){let I=!1,v=d(w);v===null?_(a,o):v&&v.isColor&&(_(v,1),I=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(w,I){let v=d(I);v&&(v.isCubeTexture||v.mapping===Aa)?(c===void 0&&(c=new Ae(new wt(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:xs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(I.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qd),c.material.toneMapped=ft.getTransfer(v.colorSpace)!==yt,(h!==v||p!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ae(new Mt(2,2),new Tt({name:"BackgroundMaterial",uniforms:xs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=ft.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function _(w,I){w.getRGB(ql,uh(i)),t.buffers.color.setClear(ql.r,ql.g,ql.b,I,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,I=1){a.set(w),o=I,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,_(a,o)},render:m,addToRenderList:b,dispose:f}}function O0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,L,F,D,N){let z=!1,V=p(P,D,F,L);r!==V&&(r=V,c(r.object)),z=d(P,D,F,N),z&&m(P,D,F,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(P,L,F,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function p(P,L,F,D){let N=D.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let V=P.isInstancedMesh===!0?P.id:0,Q=z[V];Q===void 0&&(Q={},z[V]=Q);let k=Q[F.id];k===void 0&&(k={},Q[F.id]=k);let ie=k[N];return ie===void 0&&(ie=u(l()),k[N]=ie),ie}function u(P){let L=[],F=[],D=[];for(let N=0;N<t;N++)L[N]=0,F[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,L,F,D){let N=r.attributes,z=L.attributes,V=0,Q=F.getAttributes();for(let k in Q)if(Q[k].location>=0){let se=N[k],Ue=z[k];if(Ue===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Ue=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Ue=P.instanceColor)),se===void 0||se.attribute!==Ue||Ue&&se.data!==Ue.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function m(P,L,F,D){let N={},z=L.attributes,V=0,Q=F.getAttributes();for(let k in Q)if(Q[k].location>=0){let se=z[k];se===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));let Ue={};Ue.attribute=se,se&&se.data&&(Ue.data=se.data),N[k]=Ue,V++}r.attributes=N,r.attributesNum=V,r.index=D}function b(){let P=r.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function _(P){f(P,0)}function f(P,L){let F=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;F[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),N[P]!==L&&(i.vertexAttribDivisor(P,L),N[P]=L)}function w(){let P=r.newAttributes,L=r.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function I(P,L,F,D,N,z,V){V===!0?i.vertexAttribIPointer(P,L,F,N,z):i.vertexAttribPointer(P,L,F,D,N,z)}function v(P,L,F,D){b();let N=D.attributes,z=F.getAttributes(),V=L.defaultAttributeValues;for(let Q in z){let k=z[Q];if(k.location>=0){let ie=N[Q];if(ie===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ie!==void 0){let se=ie.normalized,Ue=ie.itemSize,xe=e.get(ie);if(xe===void 0)continue;let ot=xe.buffer,nt=xe.type,rt=xe.bytesPerElement,te=nt===i.INT||nt===i.UNSIGNED_INT||ie.gpuType===al;if(ie.isInterleavedBufferAttribute){let ae=ie.data,we=ae.stride,$e=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Le=0;Le<k.locationSize;Le++)f(k.location+Le,ae.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Le=0;Le<k.locationSize;Le++)_(k.location+Le);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Le=0;Le<k.locationSize;Le++)I(k.location+Le,Ue/k.locationSize,nt,se,we*rt,($e+Ue/k.locationSize*Le)*rt,te)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)f(k.location+ae,ie.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<k.locationSize;ae++)_(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ae=0;ae<k.locationSize;ae++)I(k.location+ae,Ue/k.locationSize,nt,se,Ue*rt,Ue/k.locationSize*ae*rt,te)}}else if(V!==void 0){let se=V[Q];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(k.location,se);break;case 3:i.vertexAttrib3fv(k.location,se);break;case 4:i.vertexAttrib4fv(k.location,se);break;default:i.vertexAttrib1fv(k.location,se)}}}}w()}function C(){S();for(let P in n){let L=n[P];for(let F in L){let D=L[F];for(let N in D){let z=D[N];for(let V in z)h(z[V].object),delete z[V];delete D[N]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let F in L){let D=L[F];for(let N in D){let z=D[N];for(let V in z)h(z[V].object),delete z[V];delete D[N]}}delete n[P.id]}function M(P){for(let L in n){let F=n[L];for(let D in F){let N=F[D];if(N[P.id]===void 0)continue;let z=N[P.id];for(let V in z)h(z[V].object),delete z[V];delete N[P.id]}}}function g(P){for(let L in n){let F=n[L],D=P.isInstancedMesh===!0?P.id:0,N=F[D];if(N!==void 0){for(let z in N){let V=N[z];for(let Q in V)h(V[Q].object),delete V[Q];delete N[z]}delete F[D],Object.keys(F).length===0&&delete n[L]}}}function S(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:M,initAttributes:b,enableAttribute:_,disableUnusedAttributes:w}}function z0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function H0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==kn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let g=M===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Tn&&M!==Gn&&!g&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:w,maxVaryings:I,maxFragmentUniforms:v,maxSamples:C,samples:T}}function V0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pn,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||n!==0||s;return s=u,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let m=p.clippingPlanes,b=p.clipIntersection,_=p.clipShadows,f=i.get(p);if(!s||m===null||m.length===0||r&&!_)r?h(null):c();else{let w=r?0:n,I=w*4,v=f.clippingState||null;l.value=v,v=h(m,u,I,d);for(let C=0;C!==I;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,d,m){let b=p!==null?p.length:0,_=null;if(b!==0){if(_=l.value,m!==!0||_===null){let f=d+b*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(_===null||_.length<f)&&(_=new Float32Array(f));for(let I=0,v=d;I!==b;++I,v+=4)a.copy(p[I]).applyMatrix4(w,o),a.normal.toArray(_,v),_[v+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}var pr=4,G0=6,k0=20,W0=256,Na=new Wi,Ed=new be,yh=null,Mh=0,Sh=0,bh=!1,X0=new U,_s=new U,gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=X0}=r;yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,Sh),this._renderer.xr.enabled=bh,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Qt,format:kn,colorSpace:kr,depthBuffer:!1},s=Td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=q0(r)),this._blurMaterial=Z0(r,e,t),this._ggxMaterial=Y0(r,e,t)}return s}_compileMaterial(e){let t=new Ae(new vt,e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,n,s,r){let l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Ed),p.toneMapping=ni,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new wt,new Ut({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,_=b.material,f=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(Ed),f=!0);for(let I=0;I<6;I++){let v=I%3;v===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[I],r.y,r.z)):v===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[I]));let C=this._cubeSize;fr(s,v*C,I>2?C:0,C,C),p.setRenderTarget(s),f&&p.render(b,l),p.render(e,l)}p.toneMapping=d,p.autoClear=u,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qi||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Na)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:m}=this,b=this._sizeLods[n],_=3*b*(n>m-pr?n-m+pr:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,fr(r,_,f,3*b,2*b),s.setRenderTarget(r),s.render(o,Na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,fr(e,_,f,3*b,2*b),s.setRenderTarget(e),s.render(o,Na)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-pr?s-this._lodMax+pr:0),u=4*(this._cubeSize-h);fr(t,p,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Na)}};function q0(i){let e=[],t=[],n=i,s=i-pr+1+G0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,m=new Float32Array(d*u*p),b=new Float32Array(d*u*p);for(let f=0;f<p;f++){let w=f%3*2/3-1,I=f>2?0:-1,v=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];m.set(v,d*u*f);for(let C=0;C<u;C++){let T=h[C*2]*2-1,M=h[C*2+1]*2-1;f===0?_s.set(1,M,T):f===1?_s.set(-T,1,-M):f===2?_s.set(-T,M,1):f===3?_s.set(-1,M,-T):f===4?_s.set(-T,-1,M):_s.set(T,M,-1),_s.toArray(b,(f*u+C)*d)}}let _=new vt;_.setAttribute("position",new nn(m,d)),_.setAttribute("outputDirection",new nn(b,d)),t.push(new Ae(_,null)),n>pr&&n--}return{lodMeshes:t,sizeLods:e}}function Td(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Y0(i,e,t){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Z0(i,e,t){return new Tt({name:"SphericalGaussianBlur",defines:{SAMPLES:k0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function wd(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ad(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Zl=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wt(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Vn});r.uniforms.tEquirect.value=t;let a=new Ae(s,r),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=ln),new jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function J0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===il||d===sl)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let b=new Zl(m.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,m=d===il||d===sl,b=d===qi||d===ms;if(m||b){let _=t.get(u),f=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new gr(i)),_=m?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{let w=u.image;return m&&w&&w.height>0||b&&w&&l(w)?(n===null&&(n=new gr(i)),_=m?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",h),_.texture):null}}}return u}function o(u,d){return d===il?u.mapping=qi:d===sl&&(u.mapping=ms),u}function l(u){let d=0,m=6;for(let b=0;b<m;b++)u[b]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function $0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function K0(i,e,t,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,m=p.attributes.position,b=0;if(m===void 0)return;if(d!==null){let w=d.array;b=d.version;for(let I=0,v=w.length;I<v;I+=3){let C=w[I+0],T=w[I+1],M=w[I+2];u.push(C,T,T,M,M,C)}}else{let w=m.array;b=m.version;for(let I=0,v=w.length/3-1;I<v;I+=3){let C=I+0,T=I+1,M=I+2;u.push(C,T,T,M,M,C)}}let _=new(m.count>=65535?Jr:Zr)(u,1);_.version=b;let f=r.get(p);f&&e.remove(f),r.set(p,_)}function h(p){let u=r.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Q0(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),t.update(u,n,1)}function c(p,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,p*a,d),t.update(u,n,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,d);let b=0;for(let _=0;_<d;_++)b+=u[_];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function j0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ex(i,e,t){let n=new WeakMap,s=new Ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let S=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],I=0;d===!0&&(I=1),m===!0&&(I=2),b===!0&&(I=3);let v=o.attributes.position.count*I,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*C*4*p),M=new qr(T,v,C,p);M.type=Gn,M.needsUpdate=!0;let g=I*4;for(let A=0;A<p;A++){let P=_[A],L=f[A],F=w[A],D=v*C*4*A;for(let N=0;N<P.count;N++){let z=N*g;d===!0&&(s.fromBufferAttribute(P,N),T[D+z+0]=s.x,T[D+z+1]=s.y,T[D+z+2]=s.z,T[D+z+3]=0),m===!0&&(s.fromBufferAttribute(L,N),T[D+z+4]=s.x,T[D+z+5]=s.y,T[D+z+6]=s.z,T[D+z+7]=0),b===!0&&(s.fromBufferAttribute(F,N),T[D+z+8]=s.x,T[D+z+9]=s.y,T[D+z+10]=s.z,T[D+z+11]=F.itemSize===4?s.w:1)}}u={count:p,texture:M,size:new me(v,C)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function tx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var nx={[Ma]:"LINEAR_TONE_MAPPING",[Sa]:"REINHARD_TONE_MAPPING",[ba]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[Ta]:"AGX_TONE_MAPPING",[wa]:"NEUTRAL_TONE_MAPPING",[Ea]:"CUSTOM_TONE_MAPPING"};function ix(i,e,t,n,s,r){let a=new Gt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new vt;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));let h=new or({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ae(c,h),u=new Wi(-1,1,1,-1,0,1),d=null,m=null,b=!1,_,f=null,w=[],I=!1;this.setSize=function(v,C){a.setSize(v,C),o!==null&&o.setSize(v,C),l!==null&&l.setSize(v,C);for(let T=0;T<w.length;T++){let M=w[T];M.setSize&&M.setSize(v,C)}},this.setEffects=function(v){w=v,I=w.length>0&&w[0].isRenderPass===!0;let C=a.width,T=a.height;w.length>0&&o===null&&(o=new Gt(C,T,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(C,T,{type:Qt,depthBuffer:!1,stencilBuffer:!1}));for(let M=0;M<w.length;M++){let g=w[M];g.setSize&&g.setSize(C,T)}},this.begin=function(v,C){if(b||v.toneMapping===ni&&w.length===0)return!1;if(f=C,C!==null){let T=C.width,M=C.height;(a.width!==T||a.height!==M)&&this.setSize(T,M)}return I===!1&&v.setRenderTarget(a),_=v.toneMapping,v.toneMapping=ni,!0},this.hasRenderPass=function(){return I},this.end=function(v,C){v.toneMapping=_,b=!0;let T=a,M=o;for(let g=0;g<w.length;g++){let S=w[g];S.enabled!==!1&&(S.render(v,M,T,C),S.needsSwap!==!1&&(T=M,M=M===o?l:o))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},ft.getTransfer(d)===yt&&(h.defines.SRGB_TRANSFER="");let g=nx[m];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(p,u),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yd=new _n,wh=new Bi(1,1),Zd=new qr,Jd=new Lo,$d=new Qr,Rd=[],Cd=[],Id=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kl(i,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),en(t,n)}}function cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;Pd.set(n),i.uniformMatrix3fv(this.addr,!1,Pd),en(t,n)}}function hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),en(t,n)}}function ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wh.compareFunction=t.isReversedDepthBuffer()?Xl:Wl,r=wh):r=Yd,t.setTexture2D(e||r,s)}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jd,s)}function Mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$d,s)}function Sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zd,s)}function bx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return xx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Ex(i,e){i.uniform1fv(this.addr,e)}function Tx(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function wx(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ax(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function Rx(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cx(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ix(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Px(i,e){i.uniform1iv(this.addr,e)}function Lx(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Ux(i,e){i.uniform4iv(this.addr,e)}function Nx(i,e){i.uniform1uiv(this.addr,e)}function Fx(i,e){i.uniform2uiv(this.addr,e)}function Bx(i,e){i.uniform3uiv(this.addr,e)}function Ox(i,e){i.uniform4uiv(this.addr,e)}function zx(i,e,t){let n=this.cache,s=e.length,r=Kl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wh:a=Yd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hx(i,e,t){let n=this.cache,s=e.length,r=Kl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jd,r[a])}function Vx(i,e,t){let n=this.cache,s=e.length,r=Kl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$d,r[a])}function Gx(i,e,t){let n=this.cache,s=e.length,r=Kl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zd,r[a])}function kx(i){switch(i){case 5126:return Ex;case 35664:return Tx;case 35665:return wx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return Bx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}var Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}},Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kx(t.type)}},Ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Eh=/(\w+)(\])?(\[|\.)?/g;function Dd(i,e){i.seq.push(e),i.map[e.id]=e}function Wx(i,e,t){let n=i.name,s=n.length;for(Eh.lastIndex=0;;){let r=Eh.exec(n),a=Eh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dd(t,c===void 0?new Ah(o,i,e):new Rh(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Ch(o),Dd(t,p)),t=p}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Wx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Xx=37297,qx=0;function Yx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Nd=new at;function Zx(i){ft._getMatrix(Nd,ft.workingColorSpace,i);let e=`mat3( ${Nd.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Wr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Yx(i.getShaderSource(e),o)}else return r}function Jx(i,e){let t=Zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $x={[Ma]:"Linear",[Sa]:"Reinhard",[ba]:"Cineon",[ps]:"ACESFilmic",[Ta]:"AgX",[wa]:"Neutral",[Ea]:"Custom"};function Kx(i,e){let t=$x[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yl=new U;function Qx(){ft.getLuminanceCoefficients(Yl);let i=Yl.x.toFixed(4),e=Yl.y.toFixed(4),t=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function e_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ba(i){return i!==""}function Bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Od(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(i){return i.replace(n_,s_)}var i_=new Map;function s_(i,e){let t=ut[e];if(t===void 0){let n=i_.get(e);if(n!==void 0)t=ut[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ih(t)}var r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(i){return i.replace(r_,a_)}function a_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var o_={[ya]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function l_(i){return o_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var c_={[qi]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function h_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":c_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var u_={[ms]:"ENVMAP_MODE_REFRACTION"};function d_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":u_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f_={[jc]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[td]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":f_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=l_(t),c=h_(t),h=d_(t),p=p_(t),u=m_(t),d=jx(t),m=e_(r),b=s.createProgram(),_,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ba).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ba).join(`
`),f.length>0&&(f+=`
`)):(_=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),f=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ut.tonemapping_pars_fragment:"",t.toneMapping!==ni?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),Qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),a=Ih(a),a=Bd(a,t),a=Od(a,t),o=Ih(o),o=Bd(o,t),o=Od(o,t),a=zd(a),o=zd(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let I=w+_+a,v=w+f+o,C=Ud(s,s.VERTEX_SHADER,I),T=Ud(s,s.FRAGMENT_SHADER,v);s.attachShader(b,C),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function M(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(b)||"",F=s.getShaderInfoLog(C)||"",D=s.getShaderInfoLog(T)||"",N=L.trim(),z=F.trim(),V=D.trim(),Q=!0,k=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,C,T);else{let ie=Fd(s,C,"vertex"),se=Fd(s,T,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+ie+`
`+se)}else N!==""?je("WebGLProgram: Program Info Log:",N):(z===""||V==="")&&(k=!1);k&&(P.diagnostics={runnable:Q,programLog:N,vertexShader:{log:z,prefix:_},fragmentShader:{log:V,prefix:f}})}s.deleteShader(C),s.deleteShader(T),g=new mr(s,b),S=t_(s,b)}let g;this.getUniforms=function(){return g===void 0&&M(this),g};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(b,Xx)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=T,this}var x_=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lh(e),t.set(e,n)),n}},Lh=class{constructor(e){this.id=x_++,this.code=e,this.usedTimes=0}};function __(i){return i===Ji||i===Da||i===Ua}function v_(i,e,t,n,s,r){let a=new $s,o=new Ph,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function b(g,S,A,P,L,F){let D=P.fog,N=L.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Q=e.get(g.envMap||z,V),k=Q&&Q.mapping===Aa?Q.image.height:null,ie=d[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&je("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let se=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ue=se!==void 0?se.length:0,xe=0;N.morphAttributes.position!==void 0&&(xe=1),N.morphAttributes.normal!==void 0&&(xe=2),N.morphAttributes.color!==void 0&&(xe=3);let ot,nt,rt,te;if(ie){let lt=_i[ie];ot=lt.vertexShader,nt=lt.fragmentShader}else{ot=g.vertexShader,nt=g.fragmentShader;let lt=o.getVertexShaderStage(g),ct=o.getFragmentShaderStage(g);o.update(g,lt,ct),rt=lt.id,te=ct.id}let ae=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),$e=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,tt=!!g.map,mt=!!g.matcap,le=!!Q,ue=!!g.aoMap,_e=!!g.lightMap,ve=!!g.bumpMap&&g.wireframe===!1,ye=!!g.normalMap,W=!!g.displacementMap,Y=!!g.emissiveMap,ee=!!g.metalnessMap,X=!!g.roughnessMap,R=g.anisotropy>0,ce=g.clearcoat>0,pe=g.dispersion>0,E=g.retroreflectivity>0,x=g.iridescence>0,B=g.sheen>0,G=g.transmission>0,$=R&&!!g.anisotropyMap,re=ce&&!!g.clearcoatMap,de=ce&&!!g.clearcoatNormalMap,j=ce&&!!g.clearcoatRoughnessMap,q=x&&!!g.iridescenceMap,he=x&&!!g.iridescenceThicknessMap,Ee=B&&!!g.sheenColorMap,Se=B&&!!g.sheenRoughnessMap,ge=!!g.specularMap,Ce=!!g.specularColorMap,Oe=!!g.specularIntensityMap,Qe=G&&!!g.transmissionMap,H=G&&!!g.thicknessMap,Ie=!!g.gradientMap,oe=!!g.alphaMap,Re=g.alphaTest>0,Pe=!!g.alphaHash,fe=!!g.extensions,We=ni;g.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(We=i.toneMapping);let ze={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:ot,fragmentShader:nt,defines:g.defines,customVertexShaderID:rt,customFragmentShaderID:te,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:$e,instancingColor:$e&&L.instanceColor!==null,instancingMorph:$e&&L.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:tt,matcap:mt,envMap:le,envMapMode:le&&Q.mapping,envMapCubeUVHeight:k,aoMap:ue,lightMap:_e,bumpMap:ve,normalMap:ye,displacementMap:W,emissiveMap:Y,normalMapObjectSpace:ye&&g.normalMapType===sd,normalMapTangentSpace:ye&&g.normalMapType===kl,packedNormalMap:ye&&g.normalMapType===kl&&__(g.normalMap.format),metalnessMap:ee,roughnessMap:X,anisotropy:R,anisotropyMap:$,clearcoat:ce,clearcoatMap:re,clearcoatNormalMap:de,clearcoatRoughnessMap:j,dispersion:pe,retroreflection:E,iridescence:x,iridescenceMap:q,iridescenceThicknessMap:he,sheen:B,sheenColorMap:Ee,sheenRoughnessMap:Se,specularMap:ge,specularColorMap:Ce,specularIntensityMap:Oe,transmission:G,transmissionMap:Qe,thicknessMap:H,gradientMap:Ie,opaque:g.transparent===!1&&g.blending===hr&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:Re,alphaHash:Pe,combine:g.combine,mapUv:tt&&m(g.map.channel),aoMapUv:ue&&m(g.aoMap.channel),lightMapUv:_e&&m(g.lightMap.channel),bumpMapUv:ve&&m(g.bumpMap.channel),normalMapUv:ye&&m(g.normalMap.channel),displacementMapUv:W&&m(g.displacementMap.channel),emissiveMapUv:Y&&m(g.emissiveMap.channel),metalnessMapUv:ee&&m(g.metalnessMap.channel),roughnessMapUv:X&&m(g.roughnessMap.channel),anisotropyMapUv:$&&m(g.anisotropyMap.channel),clearcoatMapUv:re&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(g.sheenRoughnessMap.channel),specularMapUv:ge&&m(g.specularMap.channel),specularColorMapUv:Ce&&m(g.specularColorMap.channel),specularIntensityMapUv:Oe&&m(g.specularIntensityMap.channel),transmissionMapUv:Qe&&m(g.transmissionMap.channel),thicknessMapUv:H&&m(g.thicknessMap.channel),alphaMapUv:oe&&m(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ye||R),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(tt||oe),fog:!!D,useFog:g.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&ye===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:we,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:xe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:tt&&g.map.isVideoTexture===!0&&ft.getTransfer(g.map.colorSpace)===yt,decodeVideoTextureEmissive:Y&&g.emissiveMap.isVideoTexture===!0&&ft.getTransfer(g.emissiveMap.colorSpace)===yt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bt,flipSided:g.side===Kt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:fe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&g.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function _(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let A in g.defines)S.push(A),S.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(f(S,g),w(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function f(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function w(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function I(g){let S=d[g.type],A;if(S){let P=_i[S];A=cn.clone(P.uniforms)}else A=g.uniforms;return A}function v(g,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new g_(i,S,g,s),c.push(A),h.set(S,A)),A}function C(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function M(){o.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:I,acquireProgram:v,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:M}}function y_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function M_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,b,_,f){let w=i[e];return w===void 0?(w={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:_,group:f},i[e]=w):(w.id=u.id,w.object=u,w.geometry=d,w.material=m,w.materialVariant=a(u),w.groupOrder=b,w.renderOrder=u.renderOrder,w.z=_,w.group=f),e++,w}function l(u,d,m,b,_,f,w){w.reversedDepth===!0&&(_=-_);let I=o(u,d,m,b,_,f);m.transmission>0?n.push(I):m.transparent===!0?s.push(I):t.push(I)}function c(u,d,m,b,_,f){let w=o(u,d,m,b,_,f);m.transmission>0?n.unshift(w):m.transparent===!0?s.unshift(w):t.unshift(w)}function h(u,d){t.length>1&&t.sort(u||M_),n.length>1&&n.sort(d||Vd),s.length>1&&s.sort(d||Vd)}function p(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function S_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gd,i.set(n,[a])):s>=r.length?(a=new Gd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function b_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new be};break;case"SpotLight":t={position:new U,direction:new U,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function E_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var T_=0;function w_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function A_(i){let e=new b_,t=E_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new xt,a=new xt;function o(c){let h=0,p=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,b=0,_=0,f=0,w=0,I=0,v=0,C=0,T=0,M=0,g=0,S=0,A=0;c.sort(w_);for(let L=0,F=c.length;L<F;L++){let D=c[L],N=D.color,z=D.intensity,V=D.distance,Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ji?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=N.r*z,p+=N.g*z,u+=N.b*z;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],z);A++}else if(D.isSunLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[m]=se,n.sunShadowMap[m]=Q;let Ue=ie.getViewportCount();for(let xe=0;xe<Ue;xe++)n.sunShadowMatrix[b+xe]=ie.getMatrix(xe),n.sunShadowCascade[b+xe]=ie._cascadeData[xe];b+=Ue,m++}n.sun[d]=k,d++}else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,n.directionalShadow[_]=se,n.directionalShadowMap[_]=Q,n.directionalShadowMatrix[_]=D.shadow.matrix,C++}n.directional[_]=k,_++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(N).multiplyScalar(z),k.distance=V,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[w]=k;let ie=D.shadow;if(D.map&&(n.spotLightMap[g]=D.map,g++,ie.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[w]=ie.matrix,D.castShadow){let se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,n.spotShadow[w]=se,n.spotShadowMap[w]=Q,M++}w++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(N).multiplyScalar(z),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[I]=k,I++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let ie=D.shadow,se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,se.shadowCameraNear=ie.camera.near,se.shadowCameraFar=ie.camera.far,n.pointShadow[f]=se,n.pointShadowMap[f]=Q,n.pointShadowMatrix[f]=D.shadow.matrix,T++}n.point[f]=k,f++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(z),k.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[v]=k,v++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let P=n.hash;(P.sunLength!==d||P.directionalLength!==_||P.pointLength!==f||P.spotLength!==w||P.rectAreaLength!==I||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==C||P.numPointShadows!==T||P.numSpotShadows!==M||P.numSpotMaps!==g||P.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=_,n.spot.length=w,n.rectArea.length=I,n.point.length=f,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+g-S,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,P.sunLength=d,P.directionalLength=_,P.pointLength=f,P.spotLength=w,P.rectAreaLength=I,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=C,P.numPointShadows=T,P.numSpotShadows=M,P.numSpotMaps=g,P.numLightProbes=A,n.version=T_++)}function l(c,h){let p=0,u=0,d=0,m=0,b=0,_=0,f=h.matrixWorldInverse;for(let w=0,I=c.length;w<I;w++){let v=c[w];if(v.isSunLight){let C=n.sun[p];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),u++}else if(v.isSpotLight){let C=n.spot[m];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),m++}else if(v.isRectAreaLight){let C=n.rectArea[b];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){let C=n.hemi[_];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function kd(i){let e=new A_(i),t=[],n=[],s=[];function r(u){p.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function R_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kd(i),e.set(s,[o])):r>=a.length?(o=new kd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`,P_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],L_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Wd=new xt,Fa=new U,Th=new U;function D_(i,e,t){let n=new er,s=new me,r=new me,a=new Ct,o=new Vo,l=new Go,c={},h=t.maxTextureSize,p={[gi]:Kt,[Kt]:gi,[Bt]:Bt},u=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:C_,fragmentShader:I_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ae(m,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let f=this.type;this.render=function(T,M,g){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===nl&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ya);let S=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Vn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=f!==this.type;F&&M.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(N=>N.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,N=T.length;D<N;D++){let z=T[D],V=z.shadow;if(V===void 0){je("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||F===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===cr){if(z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Gt(s.x,s.y,{format:Ji,type:Qt,minFilter:ln,magFilter:ln,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new Bi(s.x,s.y,Gn),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=hi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=sn,V.map.depthTexture.magFilter=sn}else z.isPointLight?(V.map=new Zl(s.x),V.map.depthTexture=new Fo(s.x,ii)):(V.map=new Gt(s.x,s.y),V.map.depthTexture=new Bi(s.x,s.y,ii)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=hi,this.type===ya?(V.map.depthTexture.compareFunction=k?Xl:Wl,V.map.depthTexture.minFilter=ln,V.map.depthTexture.magFilter=ln):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=sn,V.map.depthTexture.magFilter=sn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let ie=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,g);for(let se=0;se<ie;se++){let Ue=V.getCamera(se);if(z.isPointLight){let xe=V.camera,ot=V.matrix,nt=z.distance||xe.far;nt!==xe.far&&(xe.far=nt,xe.updateProjectionMatrix()),Fa.setFromMatrixPosition(z.matrixWorld),xe.position.copy(Fa),Th.copy(xe.position),Th.add(P_[se]),xe.up.copy(L_[se]),xe.lookAt(Th),xe.updateMatrixWorld(),ot.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Wd.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Wd,xe.coordinateSystem,xe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,se),i.clear();else{se===0&&(i.setRenderTarget(V.map),i.clear());let xe=V.getViewport(se);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),L.viewport(a)}n=V.getFrustum(se),v(M,g,Ue,z,this.type)}V.isPointLightShadow!==!0&&this.type===cr&&w(V,g),V.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(S,A,P)};function w(T,M){let g=e.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Gt(s.x,s.y,{format:Ji,type:Qt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(M,null,g,u,b,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(M,null,g,d,b,null)}function I(T,M,g,S){let A=null,P=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)A=P;else if(A=g.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let L=A.uuid,F=M.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let N=D[F];N===void 0&&(N=A.clone(),D[F]=N,M.addEventListener("dispose",C)),A=N}if(A.visible=M.visible,A.wireframe=M.wireframe,S===cr?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:p[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,g.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=g}return A}function v(T,M,g,S,A){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===cr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);let F=e.update(T),D=T.material;if(Array.isArray(D)){let N=F.groups;for(let z=0,V=N.length;z<V;z++){let Q=N[z],k=D[Q.materialIndex];if(k&&k.visible){let ie=I(T,k,S,A);T.onBeforeShadow(i,T,M,g,F,ie,Q),i.renderBufferDirect(g,null,F,ie,T,Q),T.onAfterShadow(i,T,M,g,F,ie,Q)}}}else if(D.visible){let N=I(T,D,S,A);T.onBeforeShadow(i,T,M,g,F,N,null),i.renderBufferDirect(g,null,F,N,T,null),T.onAfterShadow(i,T,M,g,F,N,null)}}let L=T.children;for(let F=0,D=L.length;F<D;F++)v(L[F],M,g,S,A)}function C(T){T.target.removeEventListener("dispose",C);for(let g in c){let S=c[g],A=T.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function U_(i,e){function t(){let H=!1,Ie=new Ct,oe=null,Re=new Ct(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!H&&(i.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,fe,We,ze,lt){lt===!0&&(Pe*=ze,fe*=ze,We*=ze),Ie.set(Pe,fe,We,ze),Re.equals(Ie)===!1&&(i.clearColor(Pe,fe,We,ze),Re.copy(Ie))},reset:function(){H=!1,oe=null,Re.set(-1,0,0,0)}}}function n(){let H=!1,Ie=!1,oe=null,Re=null,Pe=null;return{setReversed:function(fe){if(Ie!==fe){let We=e.get("EXT_clip_control");fe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ie=fe;let ze=Pe;Pe=null,this.setClear(ze)}},getReversed:function(){return Ie},setTest:function(fe){fe?ae(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(fe){oe!==fe&&!H&&(i.depthMask(fe),oe=fe)},setFunc:function(fe){if(Ie&&(fe=gd[fe]),Re!==fe){switch(fe){case Mo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=fe}},setLocked:function(fe){H=fe},setClear:function(fe){Pe!==fe&&(Pe=fe,Ie&&(fe=1-fe),i.clearDepth(fe))},reset:function(){H=!1,oe=null,Re=null,Pe=null,Ie=!1}}}function s(){let H=!1,Ie=null,oe=null,Re=null,Pe=null,fe=null,We=null,ze=null,lt=null;return{setTest:function(ct){H||(ct?ae(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(ct){Ie!==ct&&!H&&(i.stencilMask(ct),Ie=ct)},setFunc:function(ct,Ke,Ot){(oe!==ct||Re!==Ke||Pe!==Ot)&&(i.stencilFunc(ct,Ke,Ot),oe=ct,Re=Ke,Pe=Ot)},setOp:function(ct,Ke,Ot){(fe!==ct||We!==Ke||ze!==Ot)&&(i.stencilOp(ct,Ke,Ot),fe=ct,We=Ke,ze=Ot)},setLocked:function(ct){H=ct},setClear:function(ct){lt!==ct&&(i.clearStencil(ct),lt=ct)},reset:function(){H=!1,Ie=null,oe=null,Re=null,Pe=null,fe=null,We=null,ze=null,lt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,m=[],b=null,_=!1,f=null,w=null,I=null,v=null,C=null,T=null,M=null,g=new be(0,0,0),S=0,A=!1,P=null,L=null,F=null,D=null,N=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Q>=2);let ie=null,se={},Ue=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),ot=new Ct().fromArray(Ue),nt=new Ct().fromArray(xe);function rt(H,Ie,oe,Re){let Pe=new Uint8Array(4),fe=i.createTexture();i.bindTexture(H,fe),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<oe;We++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Ie+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return fe}let te={};te[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Xs),ve(!1),ye(Zc),ae(i.CULL_FACE),ue(Vn);function ae(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function we(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function $e(H,Ie){return u[H]!==Ie?(i.bindFramebuffer(H,Ie),u[H]=Ie,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ie),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Le(H,Ie){let oe=m,Re=!1;if(H){oe=d.get(Ie),oe===void 0&&(oe=[],d.set(Ie,oe));let Pe=H.textures;if(oe.length!==Pe.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,We=Pe.length;fe<We;fe++)oe[fe]=i.COLOR_ATTACHMENT0+fe;oe.length=Pe.length,Re=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Re=!0);Re&&i.drawBuffers(oe)}function tt(H){return b!==H?(i.useProgram(H),b=H,!0):!1}let mt={[fs]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};mt[zu]=i.MIN,mt[Hu]=i.MAX;let le={[Vu]:i.ZERO,[Gu]:i.ONE,[ku]:i.SRC_COLOR,[Kc]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Qc]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(H,Ie,oe,Re,Pe,fe,We,ze,lt,ct){if(H===Vn){_===!0&&(we(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),H!==Fu){if(H!==f||ct!==A){if((w!==fs||C!==fs)&&(i.blendEquation(i.FUNC_ADD),w=fs,C=fs),ct)switch(H){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",H);break}else switch(H){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jc:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",H);break}I=null,v=null,T=null,M=null,g.set(0,0,0),S=0,f=H,A=ct}return}Pe=Pe||Ie,fe=fe||oe,We=We||Re,(Ie!==w||Pe!==C)&&(i.blendEquationSeparate(mt[Ie],mt[Pe]),w=Ie,C=Pe),(oe!==I||Re!==v||fe!==T||We!==M)&&(i.blendFuncSeparate(le[oe],le[Re],le[fe],le[We]),I=oe,v=Re,T=fe,M=We),(ze.equals(g)===!1||lt!==S)&&(i.blendColor(ze.r,ze.g,ze.b,lt),g.copy(ze),S=lt),f=H,A=!1}function _e(H,Ie){H.side===Bt?we(i.CULL_FACE):ae(i.CULL_FACE);let oe=H.side===Kt;Ie&&(oe=!oe),ve(oe),H.blending===hr&&H.transparent===!1?ue(Vn):ue(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Re=H.stencilWrite;o.setTest(Re),Re&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Y(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(H){P!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),P=H)}function ye(H){H!==Uu?(ae(i.CULL_FACE),H!==L&&(H===Zc?i.cullFace(i.BACK):H===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),L=H}function W(H){H!==F&&(V&&i.lineWidth(H),F=H)}function Y(H,Ie,oe){H?(ae(i.POLYGON_OFFSET_FILL),(D!==Ie||N!==oe)&&(D=Ie,N=oe,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,oe))):we(i.POLYGON_OFFSET_FILL)}function ee(H){H?ae(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function X(H){H===void 0&&(H=i.TEXTURE0+z-1),ie!==H&&(i.activeTexture(H),ie=H)}function R(H,Ie,oe){oe===void 0&&(ie===null?oe=i.TEXTURE0+z-1:oe=ie);let Re=se[oe];Re===void 0&&(Re={type:void 0,texture:void 0},se[oe]=Re),(Re.type!==H||Re.texture!==Ie)&&(ie!==oe&&(i.activeTexture(oe),ie=oe),i.bindTexture(H,Ie||te[H]),Re.type=H,Re.texture=Ie)}function ce(){let H=se[ie];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function x(){try{i.texSubImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function B(){try{i.texSubImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function re(){try{i.texStorage2D(...arguments)}catch(H){it("WebGLState:",H)}}function de(){try{i.texStorage3D(...arguments)}catch(H){it("WebGLState:",H)}}function j(){try{i.texImage2D(...arguments)}catch(H){it("WebGLState:",H)}}function q(){try{i.texImage3D(...arguments)}catch(H){it("WebGLState:",H)}}function he(H){return p[H]!==void 0?p[H]:i.getParameter(H)}function Ee(H,Ie){p[H]!==Ie&&(i.pixelStorei(H,Ie),p[H]=Ie)}function Se(H){ot.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ot.copy(H))}function ge(H){nt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),nt.copy(H))}function Ce(H,Ie){let oe=c.get(Ie);oe===void 0&&(oe=new WeakMap,c.set(Ie,oe));let Re=oe.get(H);Re===void 0&&(Re=i.getUniformBlockIndex(Ie,H.name),oe.set(H,Re))}function Oe(H,Ie){let Re=c.get(Ie).get(H);l.get(Ie)!==Re&&(i.uniformBlockBinding(Ie,Re,H.__bindingPointIndex),l.set(Ie,Re))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ie=null,se={},u={},d=new WeakMap,m=[],b=null,_=!1,f=null,w=null,I=null,v=null,C=null,T=null,M=null,g=new be(0,0,0),S=0,A=!1,P=null,L=null,F=null,D=null,N=null,ot.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:we,bindFramebuffer:$e,drawBuffers:Le,useProgram:tt,setBlending:ue,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:W,setPolygonOffset:Y,setScissorTest:ee,activeTexture:X,bindTexture:R,unbindTexture:ce,compressedTexImage2D:pe,compressedTexImage3D:E,texImage2D:j,texImage3D:q,pixelStorei:Ee,getParameter:he,updateUBOMapping:Ce,uniformBlockBinding:Oe,texStorage2D:re,texStorage3D:de,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:Se,viewport:ge,reset:Qe}}function N_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,p=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,x){return m?new OffscreenCanvas(E,x):Xr("canvas")}function _(E,x,B){let G=1,$=pe(E);if(($.width>B||$.height>B)&&(G=B/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let re=Math.floor(G*$.width),de=Math.floor(G*$.height);u===void 0&&(u=b(re,de));let j=x?b(re,de):u;return j.width=re,j.height=de,j.getContext("2d").drawImage(E,0,0,re,de),je("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+de+")."),j}else return"data"in E&&je("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function f(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function I(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,x,B,G,$,re=!1){if(E!==null){if(i[E]!==void 0)return i[E];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;G&&(de=e.get("EXT_texture_norm16"),de||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8),B===i.UNSIGNED_SHORT&&de&&(j=de.R16_EXT),B===i.SHORT&&de&&(j=de.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),x===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8),B===i.UNSIGNED_SHORT&&de&&(j=de.RG16_EXT),B===i.SHORT&&de&&(j=de.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&de&&(j=de.RGB16_EXT),B===i.SHORT&&de&&(j=de.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let q=re?Wr:ft.getTransfer($);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=q===yt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&de&&(j=de.RGBA16_EXT),B===i.SHORT&&de&&(j=de.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function C(E,x){let B;return E?x===null||x===ii||x===dr?B=i.DEPTH24_STENCIL8:x===Gn?B=i.DEPTH32F_STENCIL8:x===ur&&(B=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ii||x===dr?B=i.DEPTH_COMPONENT24:x===Gn?B=i.DEPTH_COMPONENT32F:x===ur&&(B=i.DEPTH_COMPONENT16),B}function T(E,x){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==sn&&E.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function M(E){let x=E.target;x.removeEventListener("dispose",M),S(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function g(E){let x=E.target;x.removeEventListener("dispose",g),P(x)}function S(E){let x=n.get(E);if(x.__webglInit===void 0)return;let B=E.source,G=d.get(B);if(G){let $=G[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(E),Object.keys(G).length===0&&d.delete(B)}n.remove(E)}function A(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let B=E.source,G=d.get(B);delete G[x.__cacheKey],a.memory.textures--}function P(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let $=0;$<x.__webglFramebuffer[G].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[G][$]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=E.textures;for(let G=0,$=B.length;G<$;G++){let re=n.get(B[G]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(E)}let L=0;function F(){L=0}function D(){return L}function N(E){L=E}function z(){let E=L;return E>=s.maxTextures&&je("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function V(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Q(E,x){let B=n.get(E);if(E.isVideoTexture&&R(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let G=E.image;if(G===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{we(B,E,x);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function k(E,x){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){we(B,E,x);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function ie(E,x){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){we(B,E,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function se(E,x){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){$e(B,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Ue={[hs]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},xe={[sn]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},ot={[ad]:i.NEVER,[ud]:i.ALWAYS,[od]:i.LESS,[Wl]:i.LEQUAL,[ld]:i.EQUAL,[Xl]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function nt(E,x){if(x.type===Gn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===rl||x.magFilter===Ra||x.magFilter===Yi||x.minFilter===ln||x.minFilter===rl||x.minFilter===Ra||x.minFilter===Yi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ue[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ue[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ue[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===sn||x.minFilter!==Ra&&x.minFilter!==Yi||x.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function rt(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",M));let G=x.source,$=d.get(G);$===void 0&&($={},d.set(G,$));let re=V(x);if(re!==E.__cacheKey){$[re]===void 0&&($[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[re].usedTimes++;let de=$[E.__cacheKey];de!==void 0&&($[E.__cacheKey].usedTimes--,de.usedTimes===0&&A(x)),E.__cacheKey=re,E.__webglTexture=$[re].texture}return B}function te(E,x,B){return Math.floor(Math.floor(E/B)/x)}function ae(E,x,B,G){let re=E.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,G,x.data);else{re.sort((Ee,Se)=>Ee.start-Se.start);let de=0;for(let Ee=1;Ee<re.length;Ee++){let Se=re[de],ge=re[Ee],Ce=Se.start+Se.count,Oe=te(ge.start,x.width,4),Qe=te(Se.start,x.width,4);ge.start<=Ce+1&&Oe===Qe&&te(ge.start+ge.count-1,x.width,4)===Oe?Se.count=Math.max(Se.count,ge.start+ge.count-Se.start):(++de,re[de]=ge)}re.length=de+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),q=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,Se=re.length;Ee<Se;Ee++){let ge=re[Ee],Ce=Math.floor(ge.start/4),Oe=Math.ceil(ge.count/4),Qe=Ce%x.width,H=Math.floor(Ce/x.width),Ie=Oe,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,Qe,H,Ie,oe,B,G,x.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,q),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function we(E,x,B){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);let $=rt(E,x),re=x.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+B);let de=n.get(re);if(re.version!==de.__version||$===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let oe=ft.getPrimaries(ft.workingColorSpace),Re=x.colorSpace===Ai?null:ft.getPrimaries(x.colorSpace),Pe=x.colorSpace===Ai||oe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let q=_(x.image,!1,s.maxTextureSize);q=ce(x,q);let he=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),Se=v(x.internalFormat,he,Ee,x.normalized,x.colorSpace,x.isVideoTexture);nt(G,x);let ge,Ce=x.mipmaps,Oe=x.isVideoTexture!==!0,Qe=de.__version===void 0||$===!0,H=re.dataReady,Ie=T(x,q);if(x.isDepthTexture)Se=C(x.format===Zi,x.type),Qe&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Se,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,Se,q.width,q.height,0,he,Ee,null));else if(x.isDataTexture)if(Ce.length>0){Oe&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ie,Se,Ce[0].width,Ce[0].height);for(let oe=0,Re=Ce.length;oe<Re;oe++)ge=Ce[oe],Oe?H&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ge.width,ge.height,he,Ee,ge.data):t.texImage2D(i.TEXTURE_2D,oe,Se,ge.width,ge.height,0,he,Ee,ge.data);x.generateMipmaps=!1}else Oe?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ie,Se,q.width,q.height),H&&ae(x,q,he,Ee)):t.texImage2D(i.TEXTURE_2D,0,Se,q.width,q.height,0,he,Ee,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Se,Ce[0].width,Ce[0].height,q.depth);for(let oe=0,Re=Ce.length;oe<Re;oe++)if(ge=Ce[oe],x.format!==kn)if(he!==null)if(Oe){if(H)if(x.layerUpdates.size>0){let Pe=ph(ge.width,ge.height,x.format,x.type);for(let fe of x.layerUpdates){let We=ge.data.subarray(fe*Pe/ge.data.BYTES_PER_ELEMENT,(fe+1)*Pe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,fe,ge.width,ge.height,1,he,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,q.depth,he,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Se,ge.width,ge.height,q.depth,0,ge.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,q.depth,he,Ee,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Se,ge.width,ge.height,q.depth,0,he,Ee,ge.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Oe&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ie,Se,Ce[0].width,Ce[0].height);for(let oe=0,Re=Ce.length;oe<Re;oe++)ge=Ce[oe],x.format!==kn?he!==null?Oe?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ge.width,ge.height,he,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Se,ge.width,ge.height,0,ge.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?H&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ge.width,ge.height,he,Ee,ge.data):t.texImage2D(i.TEXTURE_2D,oe,Se,ge.width,ge.height,0,he,Ee,ge.data)}else if(x.isDataArrayTexture)if(Oe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Se,q.width,q.height,q.depth),H)if(x.layerUpdates.size>0){let oe=ph(q.width,q.height,x.format,x.type);for(let Re of x.layerUpdates){let Pe=q.data.subarray(Re*oe/q.data.BYTES_PER_ELEMENT,(Re+1)*oe/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,q.width,q.height,1,he,Ee,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,he,Ee,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,q.width,q.height,q.depth,0,he,Ee,q.data);else if(x.isData3DTexture)Oe?(Qe&&t.texStorage3D(i.TEXTURE_3D,Ie,Se,q.width,q.height,q.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,he,Ee,q.data)):t.texImage3D(i.TEXTURE_3D,0,Se,q.width,q.height,q.depth,0,he,Ee,q.data);else if(x.isFramebufferTexture){if(Qe)if(Oe)t.texStorage2D(i.TEXTURE_2D,Ie,Se,q.width,q.height);else{let oe=q.width,Re=q.height;for(let Pe=0;Pe<Ie;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Se,oe,Re,0,he,Ee,null),oe>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),q.parentNode!==oe){oe.appendChild(q),p.add(x),oe.onpaint=Re=>{let Pe=Re.changedElements;for(let fe of p)Pe.includes(fe.image)&&(fe.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{let Pe=i.RGBA,fe=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,fe,We,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Oe&&Qe){let oe=pe(Ce[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Se,oe.width,oe.height)}for(let oe=0,Re=Ce.length;oe<Re;oe++)ge=Ce[oe],Oe?H&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,he,Ee,ge):t.texImage2D(i.TEXTURE_2D,oe,Se,he,Ee,ge);x.generateMipmaps=!1}else if(Oe){if(Qe){let oe=pe(q);t.texStorage2D(i.TEXTURE_2D,Ie,Se,oe.width,oe.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ee,q)}else t.texImage2D(i.TEXTURE_2D,0,Se,he,Ee,q);f(x)&&w(G),de.__version=re.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function $e(E,x,B){if(x.image.length!==6)return;let G=rt(E,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let re=n.get($);if($.version!==re.__version||G===!0){t.activeTexture(i.TEXTURE0+B);let de=ft.getPrimaries(ft.workingColorSpace),j=x.colorSpace===Ai?null:ft.getPrimaries(x.colorSpace),q=x.colorSpace===Ai||de===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let he=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,Se=[];for(let fe=0;fe<6;fe++)!he&&!Ee?Se[fe]=_(x.image[fe],!0,s.maxCubemapSize):Se[fe]=Ee?x.image[fe].image:x.image[fe],Se[fe]=ce(x,Se[fe]);let ge=Se[0],Ce=r.convert(x.format,x.colorSpace),Oe=r.convert(x.type),Qe=v(x.internalFormat,Ce,Oe,x.normalized,x.colorSpace),H=x.isVideoTexture!==!0,Ie=re.__version===void 0||G===!0,oe=$.dataReady,Re=T(x,ge);nt(i.TEXTURE_CUBE_MAP,x);let Pe;if(he){H&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,ge.width,ge.height);for(let fe=0;fe<6;fe++){Pe=Se[fe].mipmaps;for(let We=0;We<Pe.length;We++){let ze=Pe[We];x.format!==kn?Ce!==null?H?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,Qe,ze.width,ze.height,0,ze.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,0,0,ze.width,ze.height,Ce,Oe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,Qe,ze.width,ze.height,0,Ce,Oe,ze.data)}}}else{if(Pe=x.mipmaps,H&&Ie){Pe.length>0&&Re++;let fe=pe(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Se[fe].width,Se[fe].height,Ce,Oe,Se[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,Se[fe].width,Se[fe].height,0,Ce,Oe,Se[fe].data);for(let We=0;We<Pe.length;We++){let lt=Pe[We].image[fe].image;H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,0,0,lt.width,lt.height,Ce,Oe,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,Qe,lt.width,lt.height,0,Ce,Oe,lt.data)}}else{H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ce,Oe,Se[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,Ce,Oe,Se[fe]);for(let We=0;We<Pe.length;We++){let ze=Pe[We];H?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,0,0,Ce,Oe,ze.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,Qe,Ce,Oe,ze.image[fe])}}}f(x)&&w(i.TEXTURE_CUBE_MAP),re.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Le(E,x,B,G,$,re){let de=r.convert(B.format,B.colorSpace),j=r.convert(B.type),q=v(B.internalFormat,de,j,B.normalized,B.colorSpace),he=n.get(x),Ee=n.get(B);if(Ee.__renderTarget=x,!he.__hasExternalTextures){let Se=Math.max(1,x.width>>re),ge=Math.max(1,x.height>>re);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,re,q,Se,ge,x.depth,0,de,j,null):t.texImage2D($,re,q,Se,ge,0,de,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),X(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,$,Ee.__webglTexture,0,ee(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,$,Ee.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(E,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let G=x.depthTexture,$=G&&G.isDepthTexture?G.type:null,re=C(x.stencilBuffer,$),de=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;X(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(x),re,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(x),re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,E)}else{let G=x.textures;for(let $=0;$<G.length;$++){let re=G[$],de=r.convert(re.format,re.colorSpace),j=r.convert(re.type),q=v(re.internalFormat,de,j,re.normalized,re.colorSpace);X(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(x),q,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(E,x,B){let G=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",M)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),nt(i.TEXTURE_CUBE_MAP,x.depthTexture);let he=r.convert(x.depthTexture.format),Ee=r.convert(x.depthTexture.type),Se;x.depthTexture.format===hi?Se=i.DEPTH_COMPONENT24:x.depthTexture.format===Zi&&(Se=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Se,x.width,x.height,0,he,Ee,null)}}else Q(x.depthTexture,0);let re=$.__webglTexture,de=ee(x),j=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,q=x.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===hi)X(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,re,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,q,j,re,0);else if(x.depthTexture.format===Zi)X(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,re,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,q,j,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(E){let x=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=G}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)mt(x.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?mt(x.__webglFramebuffer[0],E,0):mt(x.__webglFramebuffer,E,0)}else if(B){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),tt(x.__webglDepthbuffer[G],E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),tt(x.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(E,x,B){let G=n.get(E);x!==void 0&&Le(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&le(E)}function _e(E){let x=E.texture,B=n.get(E),G=n.get(x);E.addEventListener("dispose",g);let $=E.textures,re=E.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let q=0;q<x.mipmaps.length;q++)B.__webglFramebuffer[j][q]=i.createFramebuffer()}else B.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)B.__webglFramebuffer[j]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(de)for(let j=0,q=$.length;j<q;j++){let he=n.get($[j]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&X(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let q=$[j];B.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[j]);let he=r.convert(q.format,q.colorSpace),Ee=r.convert(q.type),Se=v(q.internalFormat,he,Ee,q.normalized,q.colorSpace,E.isXRRenderTarget===!0),ge=ee(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,B.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),nt(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)Le(B.__webglFramebuffer[j][q],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,q);else Le(B.__webglFramebuffer[j],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(x)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let j=0,q=$.length;j<q;j++){let he=$[j],Ee=n.get(he),Se=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Ee.__webglTexture),nt(Se,he),Le(B.__webglFramebuffer,E,he,i.COLOR_ATTACHMENT0+j,Se,0),f(he)&&w(Se)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,G.__webglTexture),nt(j,x),x.mipmaps&&x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)Le(B.__webglFramebuffer[q],E,x,i.COLOR_ATTACHMENT0,j,q);else Le(B.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,j,0);f(x)&&w(j),t.unbindTexture()}E.depthBuffer&&le(E)}function ve(E){let x=E.textures;for(let B=0,G=x.length;B<G;B++){let $=x[B];if(f($)){let re=I(E),de=n.get($).__webglTexture;t.bindTexture(re,de),w(re),t.unbindTexture()}}}let ye=[],W=[];function Y(E){if(E.samples>0){if(X(E)===!1){let x=E.textures,B=E.width,G=E.height,$=i.COLOR_BUFFER_BIT,re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),j=x.length>1;if(j)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let q=E.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<x.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);let Ee=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,$,i.NEAREST),l===!0&&(ye.length=0,W.length=0,ye.push(i.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ye.push(re),W.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);let Ee=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ee(E){return Math.min(s.maxSamples,E.samples)}function X(E){let x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function R(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function ce(E,x){let B=E.colorSpace,G=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==kr&&B!==Ai&&(ft.getTransfer(B)===yt?(G!==kn||$!==Tn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",B)),x}function pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=ie,this.setTextureCube=se,this.rebindTextures=ue,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=X,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function F_(i,e){function t(n,s=Ai){let r,a=ft.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===th)return i.BYTE;if(n===nh)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===ah)return i.RGB;if(n===kn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===Ca||n===Ia||n===Pa||n===La)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===_l||n===vl||n===yl||n===Ml||n===Da||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===_l)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===Ol||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hl||n===Vl||n===Ua||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:B_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,m=null,b=typeof XRWebGLBinding<"u",_=new Dh,f={},w=t.getContextAttributes(),I=null,v=null,C=[],T=[],M=new me,g=null,S=null,A=new Jt;A.viewport=new Ct;let P=new Jt;P.viewport=new Ct;let L=[A,P],F=new el,D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=C[te];return ae===void 0&&(ae=new Ks,C[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=C[te];return ae===void 0&&(ae=new Ks,C[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=C[te];return ae===void 0&&(ae=new Ks,C[te]=ae),ae.getHandSpace()};function z(te){let ae=T.indexOf(te.inputSource);if(ae===-1)return;let we=C[ae];we!==void 0&&(we.update(te.inputSource,te.frame,c||a),we.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let te=0;te<C.length;te++){let ae=T[te];ae!==null&&(T[te]=null,C[te].disconnect(ae))}D=null,N=null,_.reset();for(let te in f)delete f[te];if(e.setRenderTarget(I),d=null,u=null,p=null,s=null,v=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(M.width,M.height,!1),S!==null){let te=S.camera;te.fov=S.fov,te.zoom=S.zoom,te.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),w.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(M),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,$e=null,Le=null;w.depth&&(Le=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=w.stencil?Zi:hi,$e=w.stencil?dr:ii);let tt={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(tt),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Gt(u.textureWidth,u.textureHeight,{format:kn,type:Tn,depthTexture:new Bi(u.textureWidth,u.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Gt(d.framebufferWidth,d.framebufferHeight,{format:kn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(te){for(let ae=0;ae<te.removed.length;ae++){let we=te.removed[ae],$e=T.indexOf(we);$e>=0&&(T[$e]=null,C[$e].disconnect(we))}for(let ae=0;ae<te.added.length;ae++){let we=te.added[ae],$e=T.indexOf(we);if($e===-1){for(let tt=0;tt<C.length;tt++)if(tt>=T.length){T.push(we),$e=tt;break}else if(T[tt]===null){T[tt]=we,$e=tt;break}if($e===-1)break}let Le=C[$e];Le&&Le.connect(we)}}let k=new U,ie=new U;function se(te,ae,we){k.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(we.matrixWorld);let $e=k.distanceTo(ie),Le=ae.projectionMatrix.elements,tt=we.projectionMatrix.elements,mt=Le[14]/(Le[10]-1),le=Le[14]/(Le[10]+1),ue=(Le[9]+1)/Le[5],_e=(Le[9]-1)/Le[5],ve=(Le[8]-1)/Le[0],ye=(tt[8]+1)/tt[0],W=mt*ve,Y=mt*ye,ee=$e/(-ve+ye),X=ee*-ve;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(X),te.translateZ(ee),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Le[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let R=mt+ee,ce=le+ee,pe=W-X,E=Y+($e-X),x=ue*le/ce*R,B=_e*le/ce*R;te.projectionMatrix.makePerspective(pe,E,x,B,R,ce),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Ue(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ae=te.near,we=te.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(we=_.depthFar)),F.near=P.near=A.near=ae,F.far=P.far=A.far=we,(D!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,N=F.far),F.layers.mask=te.layers.mask|6,A.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let $e=te.parent,Le=F.cameras;Ue(F,$e);for(let tt=0;tt<Le.length;tt++)Ue(Le[tt],$e);Le.length===2?se(F,A,P):F.projectionMatrix.copy(A.projectionMatrix),S===null&&te.isPerspectiveCamera&&(S={camera:te,fov:te.fov,zoom:te.zoom}),xe(te,F,$e)};function xe(te,ae,we){we===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Zs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(te){l=te,u!==null&&(u.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(te){return f[te]};let ot=null;function nt(te,ae){if(h=ae.getViewerPose(c||a),m=ae,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let $e=!1;we.length!==F.cameras.length&&(F.cameras.length=0,$e=!0);for(let le=0;le<we.length;le++){let ue=we[le],_e=null;if(d!==null)_e=d.getViewport(ue);else{let ye=p.getViewSubImage(u,ue);_e=ye.viewport,le===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let ve=L[le];ve===void 0&&(ve=new Jt,ve.layers.enable(le),ve.viewport=new Ct,L[le]=ve),ve.matrix.fromArray(ue.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ue.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(_e.x,_e.y,_e.width,_e.height),le===0&&(F.matrix.copy(ve.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),$e===!0&&F.cameras.push(ve)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let le=p.getDepthInformation(we[0]);le&&le.isValid&&le.texture&&_.init(le,s.renderState)}if(Le&&Le.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let le=0;le<we.length;le++){let ue=we[le].camera;if(ue){let _e=f[ue];_e||(_e=new jr,f[ue]=_e);let ve=p.getCameraImage(ue);_e.sourceTexture=ve}}}}for(let we=0;we<C.length;we++){let $e=T[we],Le=C[we];$e!==null&&Le!==void 0&&Le.update($e,ae,c||a)}ot&&ot(te,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}let rt=new Xd;rt.setAnimationLoop(nt),this.setAnimationLoop=function(te){ot=te},this.dispose=function(){}}},z_=new xt,Kd=new at;Kd.set(-1,0,0,0,1,0,0,0,1);function H_(i,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,uh(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,w,I,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(_,f):f.isMeshLambertMaterial?(r(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(_,f),p(_,f)):f.isMeshPhongMaterial?(r(_,f),h(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(_,f),u(_,f),f.isMeshPhysicalMaterial&&d(_,f,v)):f.isMeshMatcapMaterial?(r(_,f),m(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),b(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?l(_,f,w,I):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Kt&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Kt&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);let w=e.get(f),I=w.envMap,v=w.envMapRotation;I&&(_.envMap.value=I,_.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(v)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Kd),_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,w,I){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*w,_.scale.value=I*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function p(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function u(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function d(_,f,w){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.retroreflectivity>0&&(_.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,f){f.matcap&&(_.matcap.value=f.matcap)}function b(_,f){let w=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,C){let T=C.program;n.uniformBlockBinding(v,T)}function c(v,C){let T=s[v.id];T===void 0&&(_(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",w));let M=C.program;n.updateUBOMapping(v,M);let g=e.render.frame;r[v.id]!==g&&(u(v),r[v.id]=g)}function h(v){let C=p();v.__bindingPointIndex=C;let T=i.createBuffer(),M=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,M,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,T),T}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let C=s[v.id],T=v.uniforms,M=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let g=0,S=T.length;g<S;g++){let A=T[g];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)d(A[P],g,P,M);else d(A,g,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,C,T,M){if(b(v,C,T,M)===!0){let g=v.__offset,S=v.value;if(Array.isArray(S)){let A=0;for(let P=0;P<S.length;P++){let L=S[P],F=f(L);m(L,v.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function m(v,C,T){typeof v=="number"||typeof v=="boolean"?C[0]=v:v.isMatrix3?(C[0]=v.elements[0],C[1]=v.elements[1],C[2]=v.elements[2],C[3]=0,C[4]=v.elements[3],C[5]=v.elements[4],C[6]=v.elements[5],C[7]=0,C[8]=v.elements[6],C[9]=v.elements[7],C[10]=v.elements[8],C[11]=0):ArrayBuffer.isView(v)?C.set(new v.constructor(v.buffer,v.byteOffset,C.length)):v.toArray(C,T)}function b(v,C,T,M){let g=v.value,S=C+"_"+T;if(M[S]===void 0)return typeof g=="number"||typeof g=="boolean"?M[S]=g:ArrayBuffer.isView(g)?M[S]=g.slice():M[S]=g.clone(),!0;{let A=M[S];if(typeof g=="number"||typeof g=="boolean"){if(A!==g)return M[S]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(A.equals(g)===!1)return A.copy(g),!0}}return!1}function _(v){let C=v.uniforms,T=0,M=16;for(let S=0,A=C.length;S<A;S++){let P=Array.isArray(C[S])?C[S]:[C[S]];for(let L=0,F=P.length;L<F;L++){let D=P[L],N=Array.isArray(D.value)?D.value:[D.value];for(let z=0,V=N.length;z<V;z++){let Q=N[z],k=f(Q),ie=T%M,se=ie%k.boundary,Ue=ie+se;T+=se,Ue!==0&&M-Ue<k.storage&&(T+=M-Ue),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=k.storage}}}let g=T%M;return g>0&&(T+=M-g),v.__size=T,v.__cache={},this}function f(v){let C={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(C.boundary=4,C.storage=4):v.isVector2?(C.boundary=8,C.storage=8):v.isVector3||v.isColor?(C.boundary=16,C.storage=12):v.isVector4?(C.boundary=16,C.storage=16):v.isMatrix3?(C.boundary=48,C.storage=48):v.isMatrix4?(C.boundary=64,C.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(C.boundary=16,C.storage=v.byteLength):je("WebGLRenderer: Unsupported uniform value type.",v),C}function w(v){let C=v.target;C.removeEventListener("dispose",w);let T=a.indexOf(C.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function I(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:I}}var G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function k_(){return xi===null&&(xi=new $r(G_,16,16,Ji,Qt),xi.name="DFG_LUT",xi.minFilter=ln,xi.magFilter=ln,xi.wrapS=ci,xi.wrapT=ci,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var Jl=class{constructor(e={}){let{canvas:t=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Tn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=d,_=new Set([dl,ul,hl]),f=new Set([Tn,ii,ur,dr,ol,ll]),w=new Uint32Array(4),I=new Int32Array(4),v=new U,C=null,T=null,M=[],g=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,F=null,D=null,N=null;this._outputColorSpace=on;let z=0,V=0,Q=null,k=-1,ie=null,se=new Ct,Ue=new Ct,xe=null,ot=new be(0),nt=0,rt=t.width,te=t.height,ae=1,we=null,$e=null,Le=new Ct(0,0,rt,te),tt=new Ct(0,0,rt,te),mt=!1,le=new er,ue=!1,_e=!1,ve=new xt,ye=new U,W=new Ct,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function X(){return Q===null?ae:1}let R=n;function ce(y,O){return t.getContext(y,O)}let pe,E,x,B,G,$,re,de,j,q,he,Ee,Se,ge,Ce,Oe,Qe,H,Ie,oe,Re,Pe,fe;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),R===null){let O="webgl2";if(R=ce(O,y),R===null)throw ce(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(y){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),it("WebGLRenderer: "+y.message),y}function We(){pe=new $0(R),pe.init(),Re=new F_(R,pe),E=new H0(R,pe,e,Re),x=new U_(R,pe),E.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),F=R.createFramebuffer(),D=R.createFramebuffer(),N=R.createFramebuffer(),B=new j0(R),G=new y_,$=new N_(R,pe,x,G,E,Re,B),re=new J0(A),de=new tm(R),Pe=new O0(R,de),j=new K0(R,de,B,Pe),q=new tx(R,j,de,Pe,B),H=new ex(R,E,$),Ce=new V0(G),he=new v_(A,re,pe,E,Pe,Ce),Ee=new H_(A,G),Se=new S_,ge=new R_(pe),Qe=new B0(A,re,x,q,m,l),Oe=new D_(A,q,E),fe=new V_(R,B,E,x),Ie=new z0(R,pe,B),oe=new Q0(R,pe,B),B.programs=he.programs,A.capabilities=E,A.extensions=pe,A.properties=G,A.renderLists=Se,A.shadowMap=Oe,A.state=x,A.info=B}b!==Tn&&(S=new ix(b,t.width,t.height,o,s,r));let ze=new Uh(A,R);this.xr=ze,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let y=pe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=pe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(y){y!==void 0&&(ae=y,this.setSize(rt,te,!1))},this.getSize=function(y){return y.set(rt,te)},this.setSize=function(y,O,K=!0){if(ze.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=y,te=O,t.width=Math.floor(y*ae),t.height=Math.floor(O*ae),K===!0&&(t.style.width=y+"px",t.style.height=O+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(rt*ae,te*ae).floor()},this.setDrawingBufferSize=function(y,O,K){rt=y,te=O,ae=K,t.width=Math.floor(y*K),t.height=Math.floor(O*K),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(b===Tn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(se)},this.getViewport=function(y){return y.copy(Le)},this.setViewport=function(y,O,K,Z){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,O,K,Z),x.viewport(se.copy(Le).multiplyScalar(ae).round())},this.getScissor=function(y){return y.copy(tt)},this.setScissor=function(y,O,K,Z){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,O,K,Z),x.scissor(Ue.copy(tt).multiplyScalar(ae).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){x.setScissorTest(mt=y)},this.setOpaqueSort=function(y){we=y},this.setTransparentSort=function(y){$e=y},this.getClearColor=function(y){return y.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,K=!0){let Z=0;if(y){let J=!1;if(Q!==null){let Ne=Q.texture.format;J=_.has(Ne)}if(J){let Ne=Q.texture.type,Ge=f.has(Ne),Fe=Qe.getClearColor(),Ye=Qe.getClearAlpha(),Je=Fe.r,ht=Fe.g,gt=Fe.b;Ge?(w[0]=Je,w[1]=ht,w[2]=gt,w[3]=Ye,R.clearBufferuiv(R.COLOR,0,w)):(I[0]=Je,I[1]=ht,I[2]=gt,I[3]=Ye,R.clearBufferiv(R.COLOR,0,I))}else Z|=R.COLOR_BUFFER_BIT}O&&(Z|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),L=y},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),Qe.dispose(),Se.dispose(),ge.dispose(),G.dispose(),re.dispose(),q.dispose(),Pe.dispose(),fe.dispose(),he.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Be),ze.removeEventListener("sessionend",He),qe.stop()};function lt(y){y.preventDefault(),lh("WebGLRenderer: Context Lost."),P=!0}function ct(){lh("WebGLRenderer: Context Restored."),P=!1;let y=B.autoReset,O=Oe.enabled,K=Oe.autoUpdate,Z=Oe.needsUpdate,J=Oe.type;We(),B.autoReset=y,Oe.enabled=O,Oe.autoUpdate=K,Oe.needsUpdate=Z,Oe.type=J}function Ke(y){it("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ot(y){let O=y.target;O.removeEventListener("dispose",Ot),An(O)}function An(y){is(y),G.remove(y)}function is(y){let O=G.get(y).programs;O!==void 0&&(O.forEach(function(K){he.releaseProgram(K)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,K,Z,J,Ne){O===null&&(O=Y);let Ge=J.isMesh&&J.matrixWorld.determinantAffine()<0,Fe=ai(y,O,K,Z,J);x.setMaterial(Z,Ge);let Ye=K.index,Je=1;if(Z.wireframe===!0){if(Ye=j.getWireframeAttribute(K),Ye===void 0)return;Je=2}let ht=K.drawRange,gt=K.attributes.position,Ze=ht.start*Je,Et=(ht.start+ht.count)*Je;Ne!==null&&(Ze=Math.max(Ze,Ne.start*Je),Et=Math.min(Et,(Ne.start+Ne.count)*Je)),Ye!==null?(Ze=Math.max(Ze,0),Et=Math.min(Et,Ye.count)):gt!=null&&(Ze=Math.max(Ze,0),Et=Math.min(Et,gt.count));let Yt=Et-Ze;if(Yt<0||Yt===1/0)return;Pe.setup(J,Z,Fe,K,Ye);let Nt,Rt=Ie;if(Ye!==null&&(Nt=de.get(Ye),Rt=oe,Rt.setIndex(Nt)),J.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*X()),Rt.setMode(R.LINES)):Rt.setMode(R.TRIANGLES);else if(J.isLine){let un=Z.linewidth;un===void 0&&(un=1),x.setLineWidth(un*X()),J.isLineSegments?Rt.setMode(R.LINES):J.isLineLoop?Rt.setMode(R.LINE_LOOP):Rt.setMode(R.LINE_STRIP)}else J.isPoints?Rt.setMode(R.POINTS):J.isSprite&&Rt.setMode(R.TRIANGLES);if(J.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let un=J._multiDrawStarts,Ve=J._multiDrawCounts,gn=J._multiDrawCount,_t=Ye?de.get(Ye).bytesPerElement:1,On=G.get(Z).currentProgram.getUniforms();for(let oi=0;oi<gn;oi++)On.setValue(R,"_gl_DrawID",oi),Rt.render(un[oi]/_t,Ve[oi])}else if(J.isInstancedMesh)Rt.renderInstances(Ze,Yt,J.count);else if(K.isInstancedBufferGeometry){let un=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ve=Math.min(K.instanceCount,un);Rt.renderInstances(Ze,Yt,Ve)}else Rt.render(Ze,Yt)};function Zn(y,O,K,Z){L!==null&&y.isNodeMaterial&&L.setObject(Z,y),ue===!0&&Ce.setState(y,K,!1),y.transparent===!0&&y.side===Bt&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,an(y,O,Z),y.side=gi,y.needsUpdate=!0,an(y,O,Z),y.side=Bt):an(y,O,Z)}this.compile=function(y,O,K=null){K===null&&(K=y),L!==null&&L.renderStart(y,O,K),T=ge.get(K),T.init(O),g.push(T),K.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),y!==K&&y.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),_e=this.localClippingEnabled,ue=Ce.init(this.clippingPlanes,_e),ue===!0&&Ce.setGlobalState(this.clippingPlanes,O),L!==null&&Oe.render(T.state.shadowsArray,K,O);let Z=new Set;return y.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){let Fe=Ne[Ge];Zn(Fe,K,O,J),Z.add(Fe)}else Zn(Ne,K,O,J),Z.add(Ne)}),T=g.pop(),L!==null&&L.renderEnd(),Z},this.compileAsync=function(y,O,K=null){let Z=this.compile(y,O,K);return new Promise(J=>{function Ne(){if(Z.forEach(function(Ge){let Ye=G.get(Ge).currentProgram;(Ye===void 0||Ye.isReady())&&Z.delete(Ge)}),Z.size===0){J(y);return}setTimeout(Ne,10)}pe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ne=null;function Me(y){ne&&ne(y)}function Be(){qe.stop()}function He(){qe.start()}let qe=new Xd;qe.setAnimationLoop(Me),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(y){ne=y,ze.setAnimationLoop(y),y===null?qe.stop():qe.start()},ze.addEventListener("sessionstart",Be),ze.addEventListener("sessionend",He),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(y,O);let K=ze.enabled===!0&&ze.isPresenting===!0,Z=S!==null&&(Q===null||K)&&S.begin(A,Q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(O),O=ze.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,O,Q),T=ge.get(y,g.length),T.init(O),T.state.textureUnits=$.getTextureUnits(),g.push(T),ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),le.setFromProjectionMatrix(ve,jn,O.reversedDepth),_e=this.localClippingEnabled,ue=Ce.init(this.clippingPlanes,_e),C=Se.get(y,M.length),C.init(),M.push(C),ze.enabled===!0&&ze.isPresenting===!0){let Ge=A.xr.getDepthSensingMesh();Ge!==null&&dt(Ge,O,-1/0,A.sortObjects)}dt(y,O,0,A.sortObjects),C.finish(),L!==null&&L.updateLights(T.state.lightsArray),A.sortObjects===!0&&C.sort(we,$e),ee=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,ee&&Qe.addToRenderList(C,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Ce.beginShadows();let J=T.state.shadowsArray;if(Oe.render(J,y,O),ue===!0&&Ce.endShadows(),(Z&&S.hasRenderPass())===!1){let Ge=C.opaque,Fe=C.transmissive;if(T.setupLights(),O.isArrayCamera){let Ye=O.cameras;if(Fe.length>0)for(let Je=0,ht=Ye.length;Je<ht;Je++){let gt=Ye[Je];bt(Ge,Fe,y,gt)}ee&&Qe.render(y);for(let Je=0,ht=Ye.length;Je<ht;Je++){let gt=Ye[Je];St(C,y,gt,gt.viewport)}}else Fe.length>0&&bt(Ge,Fe,y,O),ee&&Qe.render(y),St(C,y,O)}Q!==null&&V===0&&($.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q)),Z&&S.end(A),y.isScene===!0&&y.onAfterRender(A,y,O),Pe.resetDefaultState(),k=-1,ie=null,g.pop(),g.length>0?(T=g[g.length-1],$.setTextureUnits(T.state.textureUnits),ue===!0&&Ce.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,M.pop(),M.length>0?C=M[M.length-1]:C=null,L!==null&&L.renderEnd()};function dt(y,O,K,Z){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(le)){Z&&W.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);let Ge=q.update(y),Fe=y.material;Fe.visible&&C.push(y,Ge,Fe,K,W.z,null,O)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(le))){let Ge=q.update(y),Fe=y.material;if(Z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),W.copy(y.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),W.copy(Ge.boundingSphere.center)),W.applyMatrix4(y.matrixWorld).applyMatrix4(ve)),Array.isArray(Fe)){let Ye=Ge.groups;for(let Je=0,ht=Ye.length;Je<ht;Je++){let gt=Ye[Je],Ze=Fe[gt.materialIndex];Ze&&Ze.visible&&C.push(y,Ge,Ze,K,W.z,gt,O)}}else Fe.visible&&C.push(y,Ge,Fe,K,W.z,null,O)}}let Ne=y.children;for(let Ge=0,Fe=Ne.length;Ge<Fe;Ge++)dt(Ne[Ge],O,K,Z)}function St(y,O,K,Z){let{opaque:J,transmissive:Ne,transparent:Ge}=y;T.setupLightsView(K),ue===!0&&Ce.setGlobalState(A.clippingPlanes,K),Z&&x.viewport(se.copy(Z)),J.length>0&&Wt(J,O,K),Ne.length>0&&Wt(Ne,O,K),Ge.length>0&&Wt(Ge,O,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function bt(y,O,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let Ze=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new Gt(1,1,{generateMipmaps:!0,type:Ze?Qt:Tn,minFilter:Yi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Ne=T.state.transmissionRenderTarget[Z.id],Ge=Z.viewport||se;Ne.setSize(Ge.z*A.transmissionResolutionScale,Ge.w*A.transmissionResolutionScale);let Fe=A.getRenderTarget(),Ye=A.getActiveCubeFace(),Je=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(ot),nt=A.getClearAlpha(),nt<1&&A.setClearColor(16777215,.5),A.clear(),ee&&Qe.render(K);let ht=A.toneMapping;A.toneMapping=ni;let gt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),ue===!0&&Ce.setGlobalState(A.clippingPlanes,Z),Wt(y,K,Z),$.updateMultisampleRenderTarget(Ne),$.updateRenderTargetMipmap(Ne),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Et=0,Yt=O.length;Et<Yt;Et++){let Nt=O[Et],{object:Rt,geometry:un,material:Ve,group:gn}=Nt;if(Ve.side===Bt&&Rt.layers.test(Z.layers)){let _t=Ve.side;Ve.side=Kt,Ve.needsUpdate=!0,Rn(Rt,K,Z,un,Ve,gn),Ve.side=_t,Ve.needsUpdate=!0,Ze=!0}}Ze===!0&&($.updateMultisampleRenderTarget(Ne),$.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Fe,Ye,Je),A.setClearColor(ot,nt),gt!==void 0&&(Z.viewport=gt),A.toneMapping=ht}function Wt(y,O,K){let Z=O.isScene===!0?O.overrideMaterial:null;for(let J=0,Ne=y.length;J<Ne;J++){let Ge=y[J],{object:Fe,geometry:Ye,group:Je}=Ge,ht=Ge.material;ht.allowOverride===!0&&Z!==null&&(ht=Z),Fe.layers.test(K.layers)&&Rn(Fe,O,K,Ye,ht,Je)}}function Rn(y,O,K,Z,J,Ne){L!==null&&J.isNodeMaterial&&L.setObject(y,J),y.onBeforeRender(A,O,K,Z,J,Ne),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),J.onBeforeRender(A,O,K,Z,y,Ne),J.transparent===!0&&J.side===Bt&&J.forceSinglePass===!1?(J.side=Kt,J.needsUpdate=!0,A.renderBufferDirect(K,O,Z,J,y,Ne),J.side=gi,J.needsUpdate=!0,A.renderBufferDirect(K,O,Z,J,y,Ne),J.side=Bt):A.renderBufferDirect(K,O,Z,J,y,Ne),y.onAfterRender(A,O,K,Z,J,Ne)}function an(y,O,K){O.isScene!==!0&&(O=Y);let Z=G.get(y),J=T.state.lights,Ne=T.state.shadowsArray,Ge=J.state.version,Fe=he.getParameters(y,J.state,Ne,O,K,T.state.lightProbeGridArray),Ye=he.getProgramCacheKey(Fe),Je=Z.programs;Z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;let ht=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Z.envMap=re.get(y.envMap||Z.environment,ht),Z.envMapRotation=Z.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Je===void 0&&(y.addEventListener("dispose",Ot),Je=new Map,Z.programs=Je);let gt=Je.get(Ye);if(gt!==void 0){if(Z.currentProgram===gt&&Z.lightsStateVersion===Ge)return Jn(y,Fe),gt}else Fe.uniforms=he.getUniforms(y),L!==null&&y.isNodeMaterial&&L.build(y,K,Fe),y.onBeforeCompile(Fe,A),gt=he.acquireProgram(Fe,Ye),Je.set(Ye,gt),Z.uniforms=Fe.uniforms;let Ze=Z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ze.clippingPlanes=Ce.uniform),Jn(y,Fe),Z.needsLights=Xe(y),Z.lightsStateVersion=Ge,Z.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.sunLights.value=J.state.sun,Ze.sunLightShadows.value=J.state.sunShadow,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.sunShadowMatrix.value=J.state.sunShadowMatrix,Ze.sunShadowCascade.value=J.state.sunShadowCascade,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=T.state.lightProbeGridArray.length>0,Z.currentProgram=gt,Z.uniformsList=null,gt}function bn(y){if(y.uniformsList===null){let O=y.currentProgram.getUniforms();y.uniformsList=mr.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Jn(y,O){let K=G.get(y);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function ri(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let K=0,Z=y.length;K<Z;K++){let J=y[K];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function ai(y,O,K,Z,J){O.isScene!==!0&&(O=Y),$.resetTextureUnits();let Ne=O.fog,Ge=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,Fe=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ft.workingColorSpace,Ye=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Je=re.get(Z.envMap||Ge,Ye),ht=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,gt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ze=!!K.morphAttributes.position,Et=!!K.morphAttributes.normal,Yt=!!K.morphAttributes.color,Nt=ni;Z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Nt=A.toneMapping);let Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,un=Rt!==void 0?Rt.length:0,Ve=G.get(Z),gn=T.state.lights;if(ue===!0&&(_e===!0||y!==ie)){let Lt=y===ie&&Z.id===k;Ce.setState(Z,y,Lt)}let _t=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==gn.state.version||Ve.outputColorSpace!==Fe||J.isBatchedMesh&&Ve.batching===!1||!J.isBatchedMesh&&Ve.batching===!0||J.isBatchedMesh&&Ve.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ve.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ve.instancing===!1||!J.isInstancedMesh&&Ve.instancing===!0||J.isSkinnedMesh&&Ve.skinning===!1||!J.isSkinnedMesh&&Ve.skinning===!0||J.isInstancedMesh&&Ve.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ve.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ve.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ve.instancingMorph===!1&&J.morphTexture!==null||Ve.envMap!==Je||Z.fog===!0&&Ve.fog!==Ne||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ce.numPlanes||Ve.numIntersection!==Ce.numIntersection)||Ve.vertexAlphas!==ht||Ve.vertexTangents!==gt||Ve.morphTargets!==Ze||Ve.morphNormals!==Et||Ve.morphColors!==Yt||Ve.toneMapping!==Nt||Ve.morphTargetsCount!==un||!!Ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ve.__version=Z.version);let On=Ve.currentProgram;_t===!0&&(On=an(Z,O,J),L&&Z.isNodeMaterial&&L.onUpdateProgram(Z,On,Ve));let oi=!1,Ri=!1,As=!1,At=On.getUniforms(),qt=Ve.uniforms;if(x.useProgram(On.program)&&(oi=!0,Ri=!0,As=!0),Z.id!==k&&(k=Z.id,Ri=!0),Ve.needsLights){let Lt=ri(T.state.lightProbeGridArray,J);Ve.lightProbeGrid!==Lt&&(Ve.lightProbeGrid=Lt,Ri=!0)}if(oi||ie!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),At.setValue(R,"projectionMatrix",y.projectionMatrix),At.setValue(R,"viewMatrix",y.matrixWorldInverse);let Ii=At.map.cameraPosition;Ii!==void 0&&Ii.setValue(R,ye.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&At.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&At.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),ie!==y&&(ie=y,Ri=!0,As=!0)}if(Ve.needsLights&&(gn.state.sunShadowMap.length>0&&At.setValue(R,"sunShadowMap",gn.state.sunShadowMap,$),gn.state.directionalShadowMap.length>0&&At.setValue(R,"directionalShadowMap",gn.state.directionalShadowMap,$),gn.state.spotShadowMap.length>0&&At.setValue(R,"spotShadowMap",gn.state.spotShadowMap,$),gn.state.pointShadowMap.length>0&&At.setValue(R,"pointShadowMap",gn.state.pointShadowMap,$)),J.isSkinnedMesh){At.setOptional(R,J,"bindMatrix"),At.setOptional(R,J,"bindMatrixInverse");let Lt=J.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),At.setValue(R,"boneTexture",Lt.boneTexture,$))}J.isBatchedMesh&&(At.setOptional(R,J,"batchingTexture"),At.setValue(R,"batchingTexture",J._matricesTexture,$),At.setOptional(R,J,"batchingIdTexture"),At.setValue(R,"batchingIdTexture",J._indirectTexture,$),At.setOptional(R,J,"batchingColorTexture"),J._colorsTexture!==null&&At.setValue(R,"batchingColorTexture",J._colorsTexture,$));let Ci=K.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&H.update(J,K,On),(Ri||Ve.receiveShadow!==J.receiveShadow)&&(Ve.receiveShadow=J.receiveShadow,At.setValue(R,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(qt.envMapIntensity.value=O.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=k_()),Ri){if(At.setValue(R,"toneMappingExposure",A.toneMappingExposure),Ve.needsLights&&Te(qt,As),Ne&&Z.fog===!0&&Ee.refreshFogUniforms(qt,Ne),Ee.refreshMaterialUniforms(qt,Z,ae,te,T.state.transmissionRenderTarget[y.id]),Ve.needsLights&&Ve.lightProbeGrid){let Lt=Ve.lightProbeGrid;qt.probesSH.value=Lt.texture,qt.probesMin.value.copy(Lt.boundingBox.min),qt.probesMax.value.copy(Lt.boundingBox.max),qt.probesResolution.value.copy(Lt.resolution)}mr.upload(R,bn(Ve),qt,$)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(mr.upload(R,bn(Ve),qt,$),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&At.setValue(R,"center",J.center),At.setValue(R,"modelViewMatrix",J.modelViewMatrix),At.setValue(R,"normalMatrix",J.normalMatrix),At.setValue(R,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Lt=Z.uniformsGroups;for(let Ii=0,Rs=Lt.length;Ii<Rs;Ii++){let Jh=Lt[Ii];fe.update(Jh,On),fe.bind(Jh,On)}}return On}function Te(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.sunLights.needsUpdate=O,y.sunLightShadows.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Xe(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(y,O,K){let Z=G.get(y);Z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),G.get(y.texture).__webglTexture=O,G.get(y.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){let K=G.get(y);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,K=0){Q=y,z=O,V=K;let Z=null,J=!1,Ne=!1;if(y){let Fe=G.get(y);if(Fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(R.FRAMEBUFFER,Fe.__webglFramebuffer),se.copy(y.viewport),Ue.copy(y.scissor),xe=y.scissorTest,x.viewport(se),x.scissor(Ue),x.setScissorTest(xe),k=-1;return}else if(Fe.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(Fe.__hasExternalTextures)$.rebindTextures(y,G.get(y.texture).__webglTexture,G.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ht=y.depthTexture;if(Fe.__boundDepthTexture!==ht){if(ht!==null&&G.has(ht)&&(y.width!==ht.image.width||y.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}let Ye=y.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ne=!0);let Je=G.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Je[O])?Z=Je[O][K]:Z=Je[O],J=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?Z=G.get(y).__webglMultisampledFramebuffer:Array.isArray(Je)?Z=Je[K]:Z=Je,se.copy(y.viewport),Ue.copy(y.scissor),xe=y.scissorTest}else se.copy(Le).multiplyScalar(ae).floor(),Ue.copy(tt).multiplyScalar(ae).floor(),xe=mt;if(K!==0&&(Z=F),x.bindFramebuffer(R.FRAMEBUFFER,Z)&&x.drawBuffers(y,Z),x.viewport(se),x.scissor(Ue),x.setScissorTest(xe),J){let Fe=G.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,K)}else if(Ne){let Fe=O;for(let Ye=0;Ye<y.textures.length;Ye++){let Je=G.get(y.textures[Ye]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ye,Je.__webglTexture,K,Fe)}}else if(y!==null&&K!==0){let Fe=G.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fe.__webglTexture,K)}k=-1};function Xt(y){let O=G.get(y);return(O.__readFormat!==y.format||O.__readType!==y.type)&&(O.__readFormat=y.format,O.__readType=y.type,O.__formatReadable=E.textureFormatReadable(y.format),O.__typeReadable=E.textureTypeReadable(y.type)),O}this.readRenderTargetPixels=function(y,O,K,Z,J,Ne,Ge,Fe=0){if(!(y&&y.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=G.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye){x.bindFramebuffer(R.FRAMEBUFFER,Ye);try{let Je=y.textures[Fe],ht=Je.format,gt=Je.type;y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe);let Ze=Xt(Je);if(Ze.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-Z&&K>=0&&K<=y.height-J&&R.readPixels(O,K,Z,J,Re.convert(ht),Re.convert(gt),Ne)}finally{let Je=Q!==null?G.get(Q).__webglFramebuffer:null;x.bindFramebuffer(R.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(y,O,K,Z,J,Ne,Ge,Fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=G.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye)if(O>=0&&O<=y.width-Z&&K>=0&&K<=y.height-J){x.bindFramebuffer(R.FRAMEBUFFER,Ye);let Je=y.textures[Fe],ht=Je.format,gt=Je.type;y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe);let Ze=Xt(Je);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Et),R.bufferData(R.PIXEL_PACK_BUFFER,Ne.byteLength,R.STREAM_READ),R.readPixels(O,K,Z,J,Re.convert(ht),Re.convert(gt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Yt=Q!==null?G.get(Q).__webglFramebuffer:null;x.bindFramebuffer(R.FRAMEBUFFER,Yt);let Nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await md(R,Nt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Et),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ne),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(Et),R.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,K=0){let Z=Math.pow(2,-K),J=Math.floor(y.image.width*Z),Ne=Math.floor(y.image.height*Z),Ge=O!==null?O.x:0,Fe=O!==null?O.y:0;$.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,K,0,0,Ge,Fe,J,Ne),x.unbindTexture()},this.copyTextureToTexture=function(y,O,K=null,Z=null,J=0,Ne=0){let Ge,Fe,Ye,Je,ht,gt,Ze,Et,Yt,Nt=y.isCompressedTexture?y.mipmaps[Ne]:y.image;if(K!==null)Ge=K.max.x-K.min.x,Fe=K.max.y-K.min.y,Ye=K.isBox3?K.max.z-K.min.z:1,Je=K.min.x,ht=K.min.y,gt=K.isBox3?K.min.z:0;else{let qt=Math.pow(2,-J);Ge=Math.floor(Nt.width*qt),Fe=Math.floor(Nt.height*qt),y.isDataArrayTexture?Ye=Nt.depth:y.isData3DTexture?Ye=Math.floor(Nt.depth*qt):Ye=1,Je=0,ht=0,gt=0}Z!==null?(Ze=Z.x,Et=Z.y,Yt=Z.z):(Ze=0,Et=0,Yt=0);let Rt=Re.convert(O.format),un=Re.convert(O.type),Ve;O.isData3DTexture?($.setTexture3D(O,0),Ve=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),Ve=R.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),Ve=R.TEXTURE_2D),x.activeTexture(R.TEXTURE0),x.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);let gn=x.getParameter(R.UNPACK_ROW_LENGTH),_t=x.getParameter(R.UNPACK_IMAGE_HEIGHT),On=x.getParameter(R.UNPACK_SKIP_PIXELS),oi=x.getParameter(R.UNPACK_SKIP_ROWS),Ri=x.getParameter(R.UNPACK_SKIP_IMAGES);x.pixelStorei(R.UNPACK_ROW_LENGTH,Nt.width),x.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Nt.height),x.pixelStorei(R.UNPACK_SKIP_PIXELS,Je),x.pixelStorei(R.UNPACK_SKIP_ROWS,ht),x.pixelStorei(R.UNPACK_SKIP_IMAGES,gt);let As=y.isDataArrayTexture||y.isData3DTexture,At=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){let qt=G.get(y),Ci=G.get(O),Lt=G.get(qt.__renderTarget),Ii=G.get(Ci.__renderTarget);x.bindFramebuffer(R.READ_FRAMEBUFFER,Lt.__webglFramebuffer),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Rs=0;Rs<Ye;Rs++)As&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,G.get(y).__webglTexture,J,gt+Rs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,G.get(O).__webglTexture,Ne,Yt+Rs)),R.blitFramebuffer(Je,ht,Ge,Fe,Ze,Et,Ge,Fe,R.DEPTH_BUFFER_BIT,R.NEAREST);x.bindFramebuffer(R.READ_FRAMEBUFFER,null),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(J!==0||y.isRenderTargetTexture||G.has(y)){let qt=G.get(y),Ci=G.get(O);x.bindFramebuffer(R.READ_FRAMEBUFFER,D),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,N);for(let Lt=0;Lt<Ye;Lt++)As?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qt.__webglTexture,J,gt+Lt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qt.__webglTexture,J),At?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ci.__webglTexture,Ne,Yt+Lt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ci.__webglTexture,Ne),J!==0?R.blitFramebuffer(Je,ht,Ge,Fe,Ze,Et,Ge,Fe,R.COLOR_BUFFER_BIT,R.NEAREST):At?R.copyTexSubImage3D(Ve,Ne,Ze,Et,Yt+Lt,Je,ht,Ge,Fe):R.copyTexSubImage2D(Ve,Ne,Ze,Et,Je,ht,Ge,Fe);x.bindFramebuffer(R.READ_FRAMEBUFFER,null),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else At?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Ve,Ne,Ze,Et,Yt,Ge,Fe,Ye,Rt,un,Nt.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Ve,Ne,Ze,Et,Yt,Ge,Fe,Ye,Rt,Nt.data):R.texSubImage3D(Ve,Ne,Ze,Et,Yt,Ge,Fe,Ye,Rt,un,Nt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ne,Ze,Et,Ge,Fe,Rt,un,Nt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ne,Ze,Et,Nt.width,Nt.height,Rt,Nt.data):R.texSubImage2D(R.TEXTURE_2D,Ne,Ze,Et,Ge,Fe,Rt,un,Nt);x.pixelStorei(R.UNPACK_ROW_LENGTH,gn),x.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t),x.pixelStorei(R.UNPACK_SKIP_PIXELS,On),x.pixelStorei(R.UNPACK_SKIP_ROWS,oi),x.pixelStorei(R.UNPACK_SKIP_IMAGES,Ri),Ne===0&&O.generateMipmaps&&R.generateMipmap(Ve),x.unbindTexture()},this.initRenderTarget=function(y){G.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){z=0,V=0,Q=null,x.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var _r=class i extends Ae{constructor(){let e=i.SkyShader,t=new Tt({name:e.name,uniforms:cn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Kt,depthWrite:!1});super(new wt(1,1,1),t),this.isSky=!0}};_r.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Ql=class extends Ae{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new U(.70707,.70707,0),p=new be(t.sunColor!==void 0?t.sunColor:16777215),u=new be(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new U(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,b=t.side!==void 0?t.side:gi,_=t.fog!==void 0?t.fog:!1,f=new Pn,w=new U,I=new U,v=new U,C=new xt,T=new U(0,0,-1),M=new Ct,g=new U,S=new U,A=new Ct,P=new xt,L=new Jt,F=new Gt(s,r,{type:Qt}),D={name:"MirrorShader",uniforms:cn.merge([De.fog,De.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new xt},sunColor:{value:new be(8355711)},sunDirection:{value:new U(.70707,.70707,0)},eye:{value:new U},waterColor:{value:new be(5592405)}}]),vertexShader:`
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
				}`},N=new Tt({name:D.name,uniforms:cn.clone(D.uniforms),vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,lights:!0,side:b,fog:_});N.uniforms.mirrorSampler.value=F.texture,N.uniforms.textureMatrix.value=P,N.uniforms.alpha.value=o,N.uniforms.time.value=l,N.uniforms.normalSampler.value=c,N.uniforms.sunColor.value=p,N.uniforms.waterColor.value=u,N.uniforms.sunDirection.value=h,N.uniforms.distortionScale.value=m,N.uniforms.eye.value=d,n.material=N,n.onBeforeRender=function(z,V,Q){if(I.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(Q.matrixWorld),C.extractRotation(n.matrixWorld),w.set(0,0,1),w.applyMatrix4(C),g.subVectors(I,v),g.dot(w)>0)return;g.reflect(w).negate(),g.add(I),C.extractRotation(Q.matrixWorld),T.set(0,0,-1),T.applyMatrix4(C),T.add(v),S.subVectors(I,T),S.reflect(w).negate(),S.add(I),L.position.copy(g),L.up.set(0,1,0),L.up.applyMatrix4(C),L.up.reflect(w),L.lookAt(S),L.far=Q.far,L.updateMatrixWorld(),L.projectionMatrix.copy(Q.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(L.projectionMatrix),P.multiply(L.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(w,I),f.applyMatrix4(L.matrixWorldInverse),M.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let k=L.projectionMatrix;A.x=(Math.sign(M.x)+k.elements[8])/k.elements[0],A.y=(Math.sign(M.y)+k.elements[9])/k.elements[5],A.z=-1,A.w=(1+k.elements[10])/k.elements[14],M.multiplyScalar(2/M.dot(A)),k.elements[2]=M.x,k.elements[6]=M.y,k.elements[10]=M.z+1-a,k.elements[14]=M.w,d.setFromMatrixPosition(Q.matrixWorld);let ie=z.getRenderTarget(),se=z.xr.enabled,Ue=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(F),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(V,L),n.visible=!0,z.xr.enabled=se,z.shadowMap.autoUpdate=Ue,z.setRenderTarget(ie);let xe=Q.viewport;xe!==void 0&&z.state.viewport(xe)}}};var vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},W_=new Wi(-1,1,1,-1,0,1),Fh=class extends vt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},X_=new Fh,$i=class{constructor(e){this._mesh=new Ae(X_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,W_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vs=class extends Fn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cn.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $i(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Oa=class extends Fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},jl=class extends Fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ec=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vs(vr),this.copyPass.material.blending=Vn,this.timer=new _a}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Oa!==void 0&&(a instanceof Oa?n=!0:a instanceof jl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tc=class extends Fn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Qd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class i extends Fn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(r,a,{type:Qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Gt(r,a,{type:Qt,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let u=new Gt(r,a,{type:Qt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Qd;this.highPassUniforms=cn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cn.clone(vr.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,premultipliedAlpha:!0,blending:rn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new Ut,this._fsQuad=new $i(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Tt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};yr.BlurDirectionX=new me(1,0);yr.BlurDirectionY=new me(0,1);var za={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var nc=class extends Fn{constructor(){super(),this.isOutputPass=!0,this.uniforms=cn.clone(za.uniforms),this.material=new or({name:za.name,uniforms:this.uniforms,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader}),this._fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ma?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ea&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Va=Nn.degToRad,Mr=new U(0,2.8,-9.5);function Ha(i,e){let t=Va(i),n=Va(e);return new U(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n))}var jd=`float h3(vec3 p){p=fract(p*vec3(443.897,441.423,437.195));p+=dot(p,p.yzx+19.19);return fract((p.x+p.y)*p.z);}
float n3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<6;i++){s+=a*n3(p);p=p*2.03+vec3(1.7,9.2,3.1);a*=.5;}return s;}`;function ef({S:i,HQ:e,mobile:t,canvasTex:n,T:s}){let r={targets:[],moonDir:new U},a=0,o=n(128,128,ne=>{let Me=ne.createRadialGradient(64,64,0,64,64,64);Me.addColorStop(0,"rgba(255,255,255,1)"),Me.addColorStop(.15,"rgba(255,255,255,.55)"),Me.addColorStop(.45,"rgba(255,255,255,.12)"),Me.addColorStop(1,"rgba(255,255,255,0)"),ne.fillStyle=Me,ne.fillRect(0,0,128,128)}),l=ne=>(i.add(ne),ne),c=(ne,Me)=>new Ut({map:o,color:new be(ne).multiplyScalar(Me),transparent:!0,depthWrite:!1,blending:rn,fog:!1}),h=new Tt({side:Kt,depthWrite:!1,transparent:!0,blending:rn,fog:!1,uniforms:{n:{value:0},t:s},vertexShader:"varying vec3 v;void main(){v=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float n,t;varying vec3 v;${jd}
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
  c*=smoothstep(-.03,.03,v.y);gl_FragColor=vec4(c*n,1.);}`}),p=l(new Ae(new kt(4e3,64,32),h));p.renderOrder=-1;let u=new vt;u.setAttribute("position",new st(new Float32Array(36),3)),u.setAttribute("color",new st(new Float32Array(36),3));let d=l(new Kr(u,new tr({vertexColors:!0,transparent:!0,blending:rn,depthWrite:!1,fog:!1})));d.frustumCulled=!1;let m=[0,1].map(()=>({life:0,next:2+Math.random()*4})),b=n(512,512,(ne,Me)=>{let Be=ne.createRadialGradient(220,220,20,256,256,256);Be.addColorStop(0,"#fffdf6"),Be.addColorStop(.85,"#e9e5dc"),Be.addColorStop(1,"#c9c3b8"),ne.fillStyle=Be,ne.beginPath(),ne.arc(256,256,254,0,7),ne.fill(),ne.save(),ne.clip(),[[180,190,90],[300,170,70],[250,300,110],[330,330,60],[150,320,55]].forEach(([qe,dt,St])=>{let bt=ne.createRadialGradient(qe,dt,0,qe,dt,St);bt.addColorStop(0,"rgba(120,118,125,.45)"),bt.addColorStop(1,"rgba(120,118,125,0)"),ne.fillStyle=bt,ne.fillRect(0,0,Me,Me)});for(let qe=0;qe<160;qe++){let dt=Math.random()*Me,St=Math.random()*Me,bt=Math.pow(Math.random(),3)*28+2;ne.fillStyle="rgba(90,88,95,.28)",ne.beginPath(),ne.arc(dt,St,bt,0,7),ne.fill(),ne.strokeStyle="rgba(255,255,250,.35)",ne.lineWidth=1.2,ne.beginPath(),ne.arc(dt-bt*.15,St-bt*.15,bt,2.4,5.5),ne.stroke()}ne.restore();let He=ne.createLinearGradient(0,0,Me,Me);He.addColorStop(0,"rgba(0,0,0,0)"),He.addColorStop(.7,"rgba(0,0,0,0)"),He.addColorStop(1,"rgba(0,0,10,.35)"),ne.fillStyle=He,ne.fillRect(0,0,Me,Me)}),_=()=>Ha(t?-6:-12,t?14:8.5).multiplyScalar(2600),f=l(new Ae(new ea(38,64),new Ut({map:b,transparent:!0,fog:!1,color:new be(1,1,1).multiplyScalar(5)}))),w=l(new Ae(new Mt(1,1),c(12570879,.9))),I=l(new Ae(new Mt(1,1),c(9085183,.35))),v=new Dt,C=new Dt;v.add(C);let T=480,M=300,g=t?28:e?56:40,S=t?16:e?32:24,A=1,P=n(512,256,(ne,Me,Be)=>{ne.fillStyle="#141c33",ne.fillRect(0,0,Me,Be);for(let He=6;He<Me;He+=42){ne.fillStyle="#070b17",ne.fillRect(He,14,36,Be-28),ne.fillStyle="#243050";for(let qe=20;qe<Be-18;qe+=9)ne.fillRect(He+3,qe,30,6)}ne.fillStyle="#3a4870",ne.fillRect(0,0,Me,8),ne.fillRect(0,Be-8,Me,8)},!0),L=n(256,128,(ne,Me,Be)=>{ne.fillStyle="#000",ne.fillRect(0,0,Me,Be);let He=["#36f0d0","#5aa8ff","#36f0d0","#ff5ac8","#9dff6a"];for(let qe=3;qe<Me;qe+=21){ne.fillStyle=He[(qe/21|0)%He.length],ne.globalAlpha=.85,ne.fillRect(qe+2,16,2,Be-32),ne.fillRect(qe+15,16,2,Be-32),ne.globalAlpha=1;for(let dt=18;dt<Be-18;dt+=6)Math.random()<.35&&(ne.fillStyle="#fff",ne.fillRect(qe+6+(Math.random()*3|0)*3,dt,2,2))}ne.fillStyle="#ffc98a",ne.fillRect(0,5,Me,3),ne.fillRect(0,Be-8,Me,3)},!0),F={value:0},D={value:new U(0,-1,0)},N=(ne,Me)=>(ne.onBeforeCompile=Be=>{Be.uniforms.rimK=F,Be.uniforms.rimD=D,Be.uniforms.t=s,Be.fragmentShader=Be.fragmentShader.replace("#include <common>",`#include <common>
uniform float rimK,t;uniform vec3 rimD;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
  {vec2 cq=floor(vEmissiveMapUv*vec2(12.,4.));float ph=fract(sin(dot(cq,vec2(12.9898,78.233)))*43758.5);totalEmissiveRadiance*=.45+.9*smoothstep(.2,.9,sin(t*(.6+ph*1.4)+ph*40.)*.5+.5);}
  #endif
  {float fr=pow(1.-abs(dot(normal,normalize(vViewPosition))),2.2);float lit=max(0.,dot(normal,rimD));totalEmissiveRadiance+=vec3(${Me})*pow(fr,3.)*smoothstep(.0,.35,lit)*rimK*2.;}`)},ne),z=N(new et({color:3291733,map:P,metalness:.55,roughness:.42,emissive:16777215,emissiveMap:L,emissiveIntensity:1.6,fog:!1}),"2.4,1.1,.5"),V=N(new et({color:2896712,metalness:.8,roughness:.35,emissive:726064,fog:!1}),"1.6,.75,.38"),Q=V,k=n(256,256,(ne,Me,Be)=>{ne.fillStyle="#0a1638",ne.fillRect(0,0,Me,Be);for(let He=0;He<Be;He+=16)for(let qe=0;qe<Me;qe+=16)ne.fillStyle=`hsl(${222+Math.random()*10},70%,${18+Math.random()*12}%)`,ne.fillRect(qe+1,He+1,14,14);ne.strokeStyle="#8fb0ff",ne.lineWidth=3,ne.strokeRect(0,0,Me,Be)},!0),ie=N(new et({map:k,metalness:.6,roughness:.25,emissive:2113696,emissiveMap:k,emissiveIntensity:.7,side:Bt,fog:!1}),"1.2,.6,.35"),se=n(64,256,(ne,Me,Be)=>{let He=ne.createLinearGradient(0,0,0,Be);He.addColorStop(0,"#fff2d0"),He.addColorStop(.25,"#ffb060"),He.addColorStop(1,"#ff4a10"),ne.fillStyle=He,ne.fillRect(0,0,Me,Be),ne.fillStyle="rgba(40,20,10,.55)";for(let qe=6;qe<Be;qe+=9)ne.fillRect(0,qe,Me,2)}),Ue=new Ut({map:se,color:new be(1,1,1).multiplyScalar(1.6),side:Bt,fog:!1,transparent:!0,depthWrite:!1,blending:rn}),xe=new It,ot=new wt(1,1,1),nt=new $t(ot,z,g*2+S),rt=0;for(let[ne,Me,Be,He,qe]of[[T,g,2*Math.PI*T/g*.86,30,62],[M,S,2*Math.PI*M/S*.82,22,44]])for(let dt=0;dt<Me;dt++){let St=dt/Me*Math.PI*2,bt=ne===T?[[0,1]]:[[0,1]];for(let[Wt]of bt)xe.position.set(Math.cos(St)*ne,Math.sin(St)*ne,Wt),xe.rotation.set(0,0,St+Math.PI/2),xe.scale.set(Be,He*(1+dt*7%3*.12),qe),xe.updateMatrix(),nt.setMatrixAt(rt++,xe.matrix)}for(let ne=0;ne<g;ne++){let Me=(ne+.5)/g*Math.PI*2;xe.position.set(Math.cos(Me)*(T+26),Math.sin(Me)*(T+26),0),xe.rotation.set(0,0,Me+Math.PI/2),xe.scale.set(2*Math.PI*T/g*.6,18,40),xe.updateMatrix(),nt.setMatrixAt(rt++,xe.matrix)}nt.count=rt,C.add(nt);let te=e?14:t?5:8,ae=(g+S)*te,we=new Mt(4,1.4),$e=new Ut({color:16777215,fog:!1,side:Bt});$e.onBeforeCompile=ne=>{ne.uniforms.t=s,ne.uniforms.boost={value:1},$e.userData.sh=ne,ne.vertexShader=ne.vertexShader.replace("#include <common>",`#include <common>
varying float vPh;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPh=float(gl_InstanceID);`),ne.fragmentShader=ne.fragmentShader.replace("#include <common>",`#include <common>
uniform float t,boost;varying float vPh;`).replace("#include <color_fragment>",`#include <color_fragment>
float ph=fract(sin(vPh*12.9898)*43758.5);float on=step(.3,fract(t*(.3+ph*1.7)+ph*7.));diffuseColor.rgb*=(.15+on*4.)*boost;`)};let Le=new $t(we,$e,ae),tt=[3600592,5941503,16734920,3600592,10354538],mt=new be;rt=0;for(let[ne,Me,Be]of[[T,g,62],[M,S,44]])for(let He=0;He<Me;He++){let qe=He/Me*Math.PI*2,dt=2*Math.PI*ne/Me*.8;for(let St=0;St<te;St++){let bt=(St/(te-1)-.5)*dt,Wt=ne+(St*5%7-3)*3;xe.position.set(Math.cos(qe)*Wt-Math.sin(qe)*bt,Math.sin(qe)*Wt+Math.cos(qe)*bt,Be/2+.6),xe.rotation.set(0,0,qe),xe.updateMatrix(),Le.setMatrixAt(rt,xe.matrix),mt.set(tt[(He+St)%5]),Le.setColorAt(rt++,mt)}}C.add(Le),Le.visible=!1;let le=new Mt(34,150);le.translate(0,75,0);let ue=t?8:16,_e=new $t(le,Ue,ue);for(let ne=0;ne<ue;ne++){let Me=(ne+.25)/ue*Math.PI*2;xe.position.set(Math.cos(Me)*(T+30),Math.sin(Me)*(T+30),0),xe.rotation.set(0,0,Me-Math.PI/2),xe.scale.set(1,1,1),xe.updateMatrix(),_e.setMatrixAt(ne,xe.matrix)}C.add(_e);let ve=new Ut({color:new be(1,.82,.55).multiplyScalar(2.6),fog:!1}),ye=t?4:8;for(let ne=0;ne<ye;ne++){let Me=ne/ye*Math.PI*2,Be=T-70,He=new Ae(new En(7,7,Be,10),V);He.position.set(Math.cos(Me)*(70+Be/2),Math.sin(Me)*(70+Be/2),0),He.rotation.z=Me-Math.PI/2,C.add(He);let qe=new Ae(new wt(2.2,Be*.96,1),ve);if(qe.position.copy(He.position),qe.position.z=7.2,qe.rotation.z=Me-Math.PI/2,C.add(qe),ne%2===0&&!t)for(let dt of[-1,1]){let St=new Ae(new Mt(Be*.42,58),ie),bt=70+Be*.62,Wt=Me+dt*.16;St.position.set(Math.cos(Wt)*bt,Math.sin(Wt)*bt,-6),St.rotation.z=Wt,C.add(St)}}let W=new Ut({color:new be(3600592).multiplyScalar(2.4),fog:!1});for(let[ne,Me]of[[T-16,32],[T+16,32],[M-12,23],[M+12,23]]){let Be=new Ae(new Hi(ne,1.1,4,180),W);Be.position.z=Me,C.add(Be)}let Y=new Dt;v.add(Y);let ee=new Ae(new En(62,62,120,32),z);ee.rotation.x=Math.PI/2,v.add(ee);for(let ne of[-62,62]){let Me=new Ae(new Hi(64,2.4,6,64),new Ut({color:new be(16765562).multiplyScalar(4),fog:!1}));Me.position.z=ne,v.add(Me)}let X=new vt,R=[];for(let ne=0;ne<72;ne++){let Me=ne/72*Math.PI*2;R.push(Math.cos(Me)*(T+48),Math.sin(Me)*(T+48),20)}X.setAttribute("position",new st(R,3));let ce=new ei({map:o,size:e?16:20,color:new be(1,.35,.3).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:rn,fog:!1}),pe=new mi(X,ce);C.add(pe);let E=t?10:24,x=new vt;x.setAttribute("position",new st(new Float32Array(E*3),3));let B=new ei({map:o,size:14,color:new be(1,.95,.8).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:rn,fog:!1}),G=new mi(x,B);G.frustumCulled=!1,v.add(G);let $=new Ae(new Mt(1,1),c(4881663,.16));v.add($),$.scale.setScalar(T*3),$.position.z=-60;let re=new Ae(new kt(T*1.15,12,8),new Ut({visible:!1}));v.add(re),v.userData={game:1,hit:re,hover:0,label:"Rackstar"},l(v),r.targets.push(v);let de=new Xi(16751194,0);i.add(de),i.add(de.target);let j=new Xi(6982911,0);i.add(j),i.add(j.target);let q=new Dt,he=36,Ee=new Tt({transparent:!0,depthWrite:!1,blending:rn,fog:!1,uniforms:{t:s,o:{value:0},hov:{value:0}},vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float t,o,hov;varying vec2 p;${jd}
 float st(vec2 q,float sc,float th){vec2 c=floor(q*sc);float r=h3(vec3(c,7.));if(r<th)return 0.;vec2 off=vec2(h3(vec3(c,1.)),h3(vec3(c,2.)))*.6+.2;float d=length(fract(q*sc)-off);return smoothstep(.14,0.,d)*(r-th)/(1.-th)*3.;}
 void main(){float r=length(p);float R=${he}.;if(r>R)discard;float rn=r/R;
  // gravitational lensing: warp background starfield toward einstein ring
  float re=5.5;vec2 q=p*(1.-re*re/max(r*r,.5));float lens=st(q*.02+.3,40.,.9)+st(q*.02+.7,90.,.94)*.6;
  float ring=exp(-pow((r-re)/.9,2.))*1.6;
  // accretion swirl
  float ang=atan(p.y,p.x);float sw=fbm(vec3(cos(ang*2.+t*.35-rn*6.)*2.,sin(ang*2.+t*.35-rn*6.)*2.,rn*6.-t*.2));float disk=smoothstep(.5,.12,rn)*smoothstep(.04,.12,rn)*pow(sw,2.)*1.4;
  vec3 c=vec3(.85,.9,1.)*lens*smoothstep(1.,.6,rn)+vec3(1.,.85,.6)*ring+mix(vec3(1.,.55,.25),vec3(.75,1.,.45),rn*1.6)*disk;
  // field rings like the game UI
  float fr=0.;for(int i=1;i<4;i++){float rr=float(i)*8.5;fr+=smoothstep(.22,0.,abs(r-rr))*step(.5,fract(ang*float(i)*5./6.2832+t*.05*float(i)));}c+=vec3(.6,1.,.45)*fr*.25;
  c+=vec3(1.,.95,.8)*exp(-r*r/6.)*3.;c*=(1.+hov*.8);gl_FragColor=vec4(c*o*smoothstep(1.,.85,rn),1.);}`}),Se=new Ae(new Mt(he*2,he*2),Ee);q.add(Se);let ge=new Ae(new Mt(1,1),c(16773312,1.6));ge.scale.setScalar(14),ge.position.z=.2,q.add(ge);let Ce=new Ae(new Mt(1,1),c(14286698,.6));Ce.scale.setScalar(60),Ce.position.z=-.2,q.add(Ce);function Oe(ne,Me){let Be=[];for(let qe=0;qe<ne.length;qe++){let dt=ne[qe],St=ne[(qe+1)%ne.length],bt=St[0]-dt[0],Wt=St[1]-dt[1],Rn=Math.hypot(bt,Wt),an=-Wt/Rn*Me,bn=bt/Rn*Me,Jn=dt[0]-bt/Rn*Me*.5,ri=dt[1]-Wt/Rn*Me*.5,ai=St[0]+bt/Rn*Me*.5,Te=St[1]+Wt/Rn*Me*.5;Be.push(Jn+an,ri+bn,0,Jn-an,ri-bn,0,ai+an,Te+bn,0,Jn-an,ri-bn,0,ai-an,Te-bn,0,ai+an,Te+bn,0)}let He=new vt;return He.setAttribute("position",new st(Be,3)),He}let Qe=[[1,0],[.35,.075],[-.55,.075],[-.78,.2],[-.68,0],[-.78,-.2],[-.55,-.075],[.35,-.075]],H=[[.55,0],[-.45,.42],[-.2,0],[-.45,-.42]],Ie=new be(14286698),oe=[Qe,H].map((ne,Me)=>{let Be=new Dt,He=new Ut({color:Ie.clone().multiplyScalar(6),side:2,transparent:!0,depthWrite:!1,fog:!1}),qe=new Ut({color:Ie.clone().multiplyScalar(1.3),side:2,transparent:!0,depthWrite:!1,blending:rn,fog:!1});Be.add(new Ae(Oe(ne,.05),qe),new Ae(Oe(ne,.018),He));let dt=new Ae(new Mt(1,1),c(16752704,3));return dt.position.x=Me?-.4:-.85,Be.add(dt),Be.scale.setScalar(Me?3.2:4.4),Be.position.z=.5,q.add(Be),{g:Be,m:He,gm:qe,fl:dt,p:new me,v:new me,hd:0,trail:[],thr:0,dead:0}}),Re=110,Pe=new vt;Pe.setAttribute("position",new st(new Float32Array(2*Re*3),3)),Pe.setAttribute("color",new st(new Float32Array(2*Re*3),3));let fe=new mi(Pe,new ei({map:o,size:.9,vertexColors:!0,transparent:!0,depthWrite:!1,blending:rn,fog:!1}));fe.frustumCulled=!1,q.add(fe);let We=new vt;We.setAttribute("position",new st(new Float32Array(48),3));let ze=new mi(We,new ei({map:o,size:1.6,color:new be(1,.8,.5).multiplyScalar(5),transparent:!0,depthWrite:!1,blending:rn,fog:!1}));ze.frustumCulled=!1,q.add(ze);let lt=new Ae(new Mt(1,1),c(16769184,6));lt.position.z=.6,lt.visible=!1,q.add(lt);let ct=0,Ke=[],Ot=1400;function An(ne,Me){let Be=Math.random()*6.283,He=24+Math.random()*7;ne.p.set(Math.cos(Be)*He,Math.sin(Be)*He);let qe=Math.sqrt(Ot/He)*(.75+Math.random()*.3);ne.v.set(-Math.sin(Be),Math.cos(Be)).multiplyScalar(qe*(Me?-1:1)*(Math.random()<.5?1:-1)),ne.trail.length=0}oe.forEach(An);let is=new Ae(new kt(he,12,8),new Ut({visible:!1}));q.add(is),q.userData={game:0,hit:is,hover:0,label:"Needle vs Wedge"},l(q),r.targets.push(q);let Zn={};return r.layout=ne=>{Zn=ne<1?{well:[-12,52,190],st:[4,30,3e3],sts:1.05}:{well:[-36,24,190],st:[16,27,3e3],sts:1.5},q.position.copy(Mr).addScaledVector(Ha(Zn.well[0],Zn.well[1]),Zn.well[2]),q.lookAt(Mr),v.position.copy(Mr).addScaledVector(Ha(Zn.st[0],Zn.st[1]),Zn.st[2]),v.scale.setScalar(Zn.sts),v.lookAt(Mr),v.rotateX(Va(58)),v.rotateY(Va(-38)),v.rotateZ(Va(12));let Be=_();f.position.copy(Be),f.lookAt(0,0,0),w.position.copy(Be).multiplyScalar(.999),w.lookAt(0,0,0),w.scale.setScalar(380),I.position.copy(Be).multiplyScalar(.998),I.lookAt(0,0,0),I.scale.setScalar(1100),r.moonDir.copy(Be).normalize()},r.focus=ne=>ne==="station"?v.position:q.position,r.setNight=(ne,Me)=>{a=ne;let Be=Nn.smoothstep(ne,.35,1);h.uniforms.n.value=Be;let He=Nn.smoothstep(ne,.3,.75);[f,w,I].forEach(dt=>{dt.visible=He>.01,dt.material.opacity=He});let qe=Nn.smoothstep(ne,.45,.85);v.visible=q.visible=qe>.01,r.vis=qe,de.intensity=qe*.5,de.position.copy(v.position).addScaledVector(Me,-900).add(new U(0,-1400,0)),de.target.position.copy(v.position),j.intensity=qe*.6,j.position.copy(v.position).add(r.moonDir.clone().multiplyScalar(800)),j.target.position.copy(v.position)},r.update=(ne,Me,Be)=>{let He=r.vis||0,qe=u.attributes.position.array,dt=u.attributes.color.array;if(m.forEach((Te,Xe)=>{if(h.uniforms.n.value<.5){dt.fill(0,Xe*6,Xe*6+6);return}if(Te.next-=Me,Te.life<=0&&Te.next<=0&&(Te.life=.9,Te.next=4+Math.random()*7,Te.a=Ha(Math.random()*70-35,25+Math.random()*30),Te.b=Ha(Math.random()*70-35,10+Math.random()*12)),Te.life>0){Te.life-=Me;let Xt=1-Te.life/.9,y=Te.a.clone().lerp(Te.b,Xt).normalize().multiplyScalar(3e3),O=Te.a.clone().lerp(Te.b,Math.max(0,Xt-.18)).normalize().multiplyScalar(3e3);y.add(Mr),O.add(Mr),qe.set([y.x,y.y,y.z,O.x,O.y,O.z],Xe*6);let K=Math.sin(Math.min(1,Xt)*Math.PI)*6;dt.set([K,K,K*.9,0,0,0],Xe*6)}else dt.fill(0,Xe*6,Xe*6+6)}),u.attributes.position.needsUpdate=u.attributes.color.needsUpdate=!0,!He)return;C.rotation.z+=Me*.012,v.userData.hover+=((Be===v?1:0)-v.userData.hover)*.12,$e.userData.sh&&($e.userData.sh.uniforms.boost.value=(1+v.userData.hover*1.5)*He),z.emissiveIntensity=1.6+v.userData.hover*2.5,F.value=He*(3+v.userData.hover);{let Te=new U(0,-1,.25).normalize(),Xe=r._cam;Xe&&Te.transformDirection(Xe.matrixWorldInverse),D.value.copy(Te)}[z,V,ie].forEach(Te=>{Te.transparent=He<1,Te.opacity=He}),ce.opacity=He*(ne%1.6<.25?1:.25),$.material.opacity=He*(.7+v.userData.hover*.6);let St=x.attributes.position.array;for(let Te=0;Te<E;Te++){let Xe=(ne*(.02+Te%5*.006)+Te/E)%1,Xt=Te*2.399,y,O,K;if(Te%3===0){let Z=T*2.4*(1-Xe)+70*Xe;y=Math.cos(Xt)*Z*.3,O=Math.sin(Xt)*Z*.3,K=(Te%2?1:-1)*(80+Z*.9)}else{let Z=M+(T-M)*(.5+.5*Math.sin(Xe*6.283)),J=Xt+Xe*(Te%2?1:-1)*1.2;y=Math.cos(J)*Z,O=Math.sin(J)*Z,K=40+Te%4*8}St[Te*3]=y,St[Te*3+1]=O,St[Te*3+2]=K}x.attributes.position.needsUpdate=!0,B.opacity=He;let bt=q.userData;bt.hover+=((Be===q?1:0)-bt.hover)*.12,Ee.uniforms.o.value=He,Ee.uniforms.hov.value=bt.hover,ge.material.opacity=He,Ce.material.opacity=He*(.6+bt.hover*.6);let Wt=4,Rn=Math.min(Me,.05)/Wt,an=oe[0],bn=oe[1];for(let Te=0;Te<Wt;Te++)oe.forEach((Xe,Xt)=>{if(Xe.dead>0)return;let y=Xe.p.lengthSq(),O=Math.sqrt(y),K=Xe.p.clone().multiplyScalar(-Ot/(y*O)),J=(Xt?an:bn).p.clone().sub(Xe.p);Xe.thr=Math.max(0,Xe.thr-Rn),Math.random()<.004&&(Xe.thr=.6+Math.random()*.8,Xe.td=Xt?new me(-Xe.v.y,Xe.v.x).normalize().multiplyScalar(Math.random()<.5?1:-1):J.normalize()),O>32&&K.addScaledVector(Xe.p,-.6/O*10),Xe.thr>0&&Xe.td&&K.addScaledVector(Xe.td,22),Xe.v.addScaledVector(K,Rn),Xe.v.length()>60&&Xe.v.setLength(60),Xe.p.addScaledVector(Xe.v,Rn);{let Ne=Xe.p.length();Ne<9&&!Xe.near?(Xe.near=1,r.onSling&&r.onSling(Xe.p.x/30)):Ne>13&&(Xe.near=0)}Xe.p.length()<3.4&&(Xe.dead=1.4,lt.visible=!0,ct=0,lt.position.set(Xe.p.x,Xe.p.y,.6))});oe.forEach((Te,Xe)=>{if(Te.dead>0){Te.dead-=Me,Te.g.visible=!1,Te.dead<=0&&(An(Te,Xe),Te.g.visible=!0);return}let y=Math.atan2((Te.thr>0&&Te.td?Te.td:Te.v).y,(Te.thr>0&&Te.td?Te.td:Te.v).x)-Te.hd;y=Math.atan2(Math.sin(y),Math.cos(y)),Te.hd+=y*Math.min(1,Me*6),Te.g.position.set(Te.p.x,Te.p.y,.5),Te.g.rotation.z=Te.hd,Te.m.opacity=He,Te.gm.opacity=He*(.5+bt.hover*.5),Te.fl.material.opacity=He*(Te.thr>0?1:.25),Te.fl.scale.set(Te.thr>0?1.1+Math.random()*.5:.4,.35,1),Te.trail.unshift(Te.p.clone()),Te.trail.length>Re&&Te.trail.pop()});let Jn=Pe.attributes.position.array,ri=Pe.attributes.color.array;if(Jn.fill(0),ri.fill(0),oe.forEach((Te,Xe)=>Te.trail.forEach((Xt,y)=>{let O=(Xe*Re+y)*3;Jn[O]=Xt.x,Jn[O+1]=Xt.y,Jn[O+2]=.3;let K=(1-y/Re)*He*(y%2?.45:1);ri[O]=.85*K,ri[O+1]=1*K,ri[O+2]=.42*K})),Pe.attributes.position.needsUpdate=Pe.attributes.color.needsUpdate=!0,Math.random()<Me*.7&&an.dead<=0&&bn.dead<=0){let Te=Math.random()<.6?an:bn,Xe=Te===an?bn:an;Ke.push({p:Te.p.clone(),v:Xe.p.clone().sub(Te.p).normalize().multiplyScalar(40).add(Te.v.clone().multiplyScalar(.5)),l:1.8})}let ai=We.attributes.position.array;ai.fill(9999);for(let Te=Ke.length-1;Te>=0;Te--){let Xe=Ke[Te];Xe.l-=Me;let Xt=Xe.p.lengthSq();Xe.v.addScaledVector(Xe.p,-Ot/(Xt*Math.sqrt(Xt))*Me),Xe.p.addScaledVector(Xe.v,Me),(Xe.l<=0||Xt<9)&&Ke.splice(Te,1)}Ke.slice(0,16).forEach((Te,Xe)=>{ai[Xe*3]=Te.p.x,ai[Xe*3+1]=Te.p.y,ai[Xe*3+2]=.4}),We.attributes.position.needsUpdate=!0,ze.material.opacity=He,lt.visible&&(ct+=Me,lt.scale.setScalar(4+ct*30),lt.material.opacity=Math.max(0,1-ct/.7)*He,ct>.7&&(lt.visible=!1))},r}function mn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new vt,c=0;for(let h=0;h<i.length;++h){let p=i[h],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in p.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(p.morphAttributes[d])}if(e){let d;if(t)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,p=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let m=0;m<d.count;++m)p.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(p)}for(let h in r){let p=tf(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<p;++u){let d=[];for(let b=0;b<a[h].length;++b)d.push(a[h][b][u]);let m=tf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function tf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new nn(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let b=h.getComponent(u,m);o.setComponent(u+p,m,b)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function nf({S:i,HQ:e,H:t,T:n,rr:s,fbm:r,woodTex:a,PZ0:o,PZ1:l,PY:c,HAM:h,windMat:p,canvasTex:u}){let d=(W,Y,ee)=>new U(W,Y,ee),m=new It,b=new be,_=(W,Y,ee=!0)=>{let X=new Ae(W,Y);return X.castShadow=ee&&e,X.receiveShadow=e,i.add(X),X},f=(W,Y,ee,X,R,ce,pe=0,E=0,x=0)=>{let B=new wt(W,Y,ee);return B.rotateZ(x),B.rotateX(E),B.rotateY(pe),B.translate(X,R,ce),B},w={lampPos:[],glass:null,update:null},I=new et({map:a,roughness:.88,color:13351074}),v=new et({map:a,roughness:.92,color:10259580}),C=1.6;{let W=Math.floor((o-l)/.16),Y=new $t(new wt(C,.04,.14),I,W+400),ee=0;for(let X=0;X<W;X++){m.position.set(s(-.01,.01),c+s(-.006,.006),o-X*.16),m.rotation.set(0,s(-.008,.008),s(-.006,.006)),m.scale.set(1,1,1),m.updateMatrix(),Y.setMatrixAt(ee,m.matrix);let R=s(.7,1.05);b.setRGB(R,R*s(.94,1),R*s(.86,.97)),Y.setColorAt(ee++,b)}for(let X=0;X<40;X++){m.position.set(1,c,l-.08-X*.16),m.rotation.set(0,s(-.005,.005),0),m.scale.set(6.4/C,1,1),m.updateMatrix(),Y.setMatrixAt(ee,m.matrix);let R=s(.7,1.02);b.setRGB(R,R*.96,R*.9),Y.setColorAt(ee++,b)}Y.count=ee,Y.castShadow=Y.receiveShadow=e,i.add(Y)}let T=[];for(let W of[-C/2+.05,C/2-.05])T.push(f(.06,.25,o-l,W,c-.15,(o+l)/2));for(let W=o;W>=l;W-=2.4)T.push(f(C+.3,.22,.1,0,c-.36,W));for(let W of[-C/2-.04,C/2+.04]){for(let Y=o;Y>=l;Y-=2.4)T.push(f(.09,1.05,.09,W,c+.5,Y));T.push(f(.06,.05,o-l,W,c+1.02,(o+l)/2),f(.14,.04,o-l,W,c+1.06,(o+l)/2),f(.04,.09,o-l,W,c+.5,(o+l)/2))}let M=l,g=l-6.4;for(let[W,Y,ee,X]of[[4.2,(M+g)/2,.06,6.4],[1.8,g,4.8,.06],[-2.2,M-1.2,.06,2.4]])T.push(f(ee,.05,X,W,c+1.02,Y),f(Math.max(ee,.14),.04,Math.max(X,.14),W,c+1.06,Y));for(let[W,Y]of[[4.2,M],[4.2,M-2.1],[4.2,M-4.3],[4.2,g],[2.1,g],[-.6,g],[-2.2,M],[-2.2,M-2.4],[3,M],[-.8,M]])T.push(f(.1,1.05,.1,W,c+.5,Y));T.push(f(.42,.05,4.6,3.9,c+.45,M-3.2),f(.06,.4,4.6,4.12,c+.75,M-3.2));for(let W of[M-1.1,M-3.2,M-5.3])T.push(f(.4,.45,.06,3.9,c+.22,W));let S=1.4,A=4.3,P=M-.6,L=g+.1,F=c+2.55;for(let W of[S,A])for(let Y of[P,L])T.push(f(.14,F-c,.14,W,(F+c)/2,Y));T.push(f(A-S+.2,.18,.12,(S+A)/2,F,P),f(A-S+.2,.18,.12,(S+A)/2,F,L),f(.12,.18,P-L,S,F,(P+L)/2),f(.12,.18,P-L,A,F,(P+L)/2)),_(mn(T.map(W=>W.toNonIndexed())),I);{let W=new et({color:8226434,metalness:.75,roughness:.38}),Y=(S+A)/2,ee=(P+L)/2,X=(A-S)/2+.45,R=(P-L)/2+.45,ce=new ti(1,1,4,1,!0);ce.rotateY(Math.PI/4),ce.scale(X*1.414,1.1,R*1.414),ce.translate(Y,F+.1+.55,ee);let pe=_(ce,W);pe.material.side=Bt;let E=[];for(let x=-6;x<=6;x++){let B=d(Y+x/6*X,F+.1,ee+R),G=d(Y+x/6*X*.02,F+1.2,ee);E.push(new vn(new zi(B,G),1,.012,3));let $=d(Y+x/6*X,F+.1,ee-R);E.push(new vn(new zi($,G),1,.012,3))}_(mn(E),W,!1),w.roofTop=d(Y,F+1.2,ee)}{let W=new et({map:a,color:11048320,roughness:.9});W.onBeforeCompile=R=>{R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vW=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vW;float hs(vec2 p){return fract(sin(dot(p,vec2(12.9,78.2)))*43758.5);}`).replace("#include <color_fragment>",`#include <color_fragment>
  float wet=1.-smoothstep(.35,.95,vW.y);diffuseColor.rgb*=mix(1.,.3,wet);float bar=step(.74,hs(floor(vW.xz*40.)+floor(vec2(vW.y*40.,atan(vW.x,vW.z)*20.))))*smoothstep(.9,.4,vW.y)*smoothstep(-.8,-.1,vW.y);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.72,.7,.63),bar*.85);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.28,wet);`)};let Y=[];for(let R=o;R>=l;R-=2.4)for(let ce of[-C/2-.04,C/2+.04])Y.push([ce,R,.11,c+1.05]);for(let R of[-2.2,-.6,1,2.6,4.2])for(let ce of[M,M-2.1,M-4.3,g])Y.push([R,ce,.13,c-.05]);Y.push([-4.6,g-1.4,.14,2.6],[-4.6,g-6.4,.14,2.6],[-1.4,g-6.4,.14,2.6]);let ee=new En(1,1.08,1,9);ee.translate(0,.5,0);let X=new $t(ee,W,Y.length);Y.forEach(([R,ce,pe,E],x)=>{let B=Math.min(t(R,ce),0)-2;m.position.set(R,B,ce),m.rotation.set(s(-.012,.012),s(0,6),s(-.012,.012)),m.scale.set(pe,E-B,pe),m.updateMatrix(),X.setMatrixAt(x,m.matrix)}),X.castShadow=X.receiveShadow=e,i.add(X)}{let W=[],Y=d(-1.4,c,M-1.2-0),ee=M-.4,X=g-1.6,R=.32,ce=d(-2.2,c,M-1.2),pe=d(-4.4,R+.12,M-1.2),E=ce.distanceTo(pe),x=Math.atan2(ce.y-pe.y,ce.x-pe.x),B=new Dt;B.position.copy(ce).lerp(pe,.5),B.rotation.z=x,i.add(B);let G=[f(E,.05,1,0,0,0)];for(let Ke=0;Ke<14;Ke++)G.push(f(.04,.03,.95,-E/2+Ke*E/13,.04,0));for(let Ke of[-.5,.5])G.push(f(E,.05,.04,0,.95,Ke),f(E,.2,.05,0,.05,Ke));for(let Ke=0;Ke<4;Ke++)for(let Ot of[-.5,.5])G.push(f(.05,.95,.05,-E/2+.2+Ke*(E-.4)/3,.48,Ot));let $=new Ae(mn(G.map(Ke=>Ke.toNonIndexed())),new et({color:10133664,metalness:.7,roughness:.45}));$.castShadow=e,B.add($);let re=-3,de=g-3.9,j=[];for(let Ke=0;Ke<36;Ke++)j.push(f(3,.04,.15,re,R,de+3-Ke*.168));j.push(f(3.1,.18,.12,re,R-.1,de+3.05),f(3.1,.18,.12,re,R-.1,de-3.05),f(.12,.18,6.1,re-1.55,R-.1,de),f(.12,.18,6.1,re+1.55,R-.1,de));let q=_(mn(j.map(Ke=>Ke.toNonIndexed())),I),he=_(f(2.9,.35,5.9,re,R-.36,de),new et({color:2763304,roughness:.6}),!1),Ee=new et({color:12106940,metalness:.9,roughness:.3}),Se=[];for(let[Ke,Ot]of[[re-1.45,de+2.2],[re-1.45,de-2.2],[re+1.45,de-2.6],[1.8,g+.15]]){let An=Ke>0?c+.04:R+.04;Se.push(f(.28,.04,.06,Ke,An+.06,Ot,Math.PI/2),f(.06,.06,.06,Ke,An+.02,Ot))}_(mn(Se.map(Ke=>Ke.toNonIndexed())),Ee);let ge=new sr;ge.moveTo(-.75,0),ge.lineTo(.75,0),ge.lineTo(.9,.5),ge.lineTo(-.9,.5),ge.lineTo(-.75,0);let Ce=new ua(ge,{depth:4.2,bevelEnabled:!1});Ce.translate(0,0,-2.1);let Oe=Ce.attributes.position;for(let Ke=0;Ke<Oe.count;Ke++){let Ot=Oe.getZ(Ke);if(Ot<-1.6){let An=(-1.6-Ot)/.5;Oe.setY(Ke,Oe.getY(Ke)+An*.25*(1-Oe.getY(Ke)/.5)+(Oe.getY(Ke)<.01?An*.18:0))}}Ce.computeVertexNormals();let Qe=new et({color:5004874,metalness:.55,roughness:.5,side:Bt}),H=new Dt,Ie=new Ae(Ce,Qe);Ie.castShadow=e,H.add(Ie);let oe=new et({color:9075298,roughness:.8});for(let Ke of[-1,.3,1.5])H.add(new Ae(new wt(1.6,.05,.3),oe).translateY(.38).translateZ(Ke));let Re=new Ae(new wt(.3,.5,.35),new et({color:1710618,roughness:.4,metalness:.3}));Re.position.set(0,.7,2.25),H.add(Re),H.position.set(re-2.6,-.12,de),H.rotation.y=.04,i.add(H),w.boat=H;let Pe=new et({color:14207400,roughness:1}),fe=[];for(let[Ke,Ot]of[[de+2.2,de+1.6],[de-2.2,de-1.7]]){let An=d(re-1.45,R+.08,Ke),is=d(re-2.6+.85,.38,Ot);fe.push(new vn(new Hn(An,An.clone().lerp(is,.5).add(d(0,-.12,0)),is),6,.015,4))}_(mn(fe),Pe,!1);let We=new Ut({color:1911322,wireframe:!0}),ze=new Ae(new wt(.6,.6,.6,6,6,6),We);ze.position.set(-1.4,c+.32,g+.6),ze.rotation.y=.3,i.add(ze);let lt=new Ae(new wt(.58,.04,.58),new et({color:13215290,roughness:.7}));lt.position.set(-1.4,c+.03,g+.6),lt.rotation.y=.3,i.add(lt);let ct=new Ae(new Hi(.18,.03,5,16),Pe);ct.rotation.x=Math.PI/2,ct.position.set(-.8,c+.04,g+.4),i.add(ct)}{let W=new et({color:15525594,roughness:.7}),Y=[],ee=(X,R,ce)=>{let pe=[f(.5,.05,.48,0,.45,0),f(.5,.6,.04,0,.82,.24,0,-.18),f(.04,.04,.5,-.26,.65,0),f(.04,.04,.5,.26,.65,0)];for(let x of[-.24,.24]){pe.push(f(.04,.45,.04,x,.23,-.2),f(.04,.45,.04,x,.23,.2));let B=new vn(new Hn(d(x,.02,-.38),d(x,-.06,0),d(x,.05,.42)),6,.02,4);pe.push(B)}let E=mn(pe.map(x=>x.index?x.toNonIndexed():x));E.rotateY(ce),E.translate(X,c+.02,R),Y.push(E)};ee(2.3,M-2.2,-.5),ee(2.6,M-4,-1.1),_(mn(Y),W)}w.glass=new et({color:16760944,emissive:16752704,emissiveIntensity:1.6});let D=new et({color:1906193,roughness:.6,metalness:.6});[[S+.12,c+2.1,P],[S+.12,c+2.1,L],[-C/2-.04,c+1.3,o-14.4],[C/2+.04,c+1.3,o-38]].forEach(([W,Y,ee])=>{let X=new Dt,R=new Ae(new wt(.14,.2,.14),w.glass),ce=new Ae(new ti(.13,.1,4),D);ce.position.y=.15,ce.rotation.y=Math.PI/4,X.add(R,ce),X.position.set(W+(W>0?.12:-.12),Y,ee),i.add(X),w.lampPos.push(d(W+(W>0?.12:-.12),Y,ee))});let N=(W,Y)=>t(W,Y)>.75;{let E=function(q,he,Ee,Se,ge){let Ce=q.clone().addScaledVector(he,Ee),Oe=q.clone().lerp(Ce,.5).add(d(s(-.2,.2),s(.05,.3),s(-.2,.2)).multiplyScalar(Ee));if(R.push(new vn(new Hn(q,Oe,Ce),5,Se,6)),ge>0)for(let Qe=0;Qe<3;Qe++){let H=he.clone().add(d(s(-1,1),s(-.25,.3),s(-1,1))).setY(Math.max(.05,he.y*.5+s(-.1,.3))).normalize();E(Ce,H,Ee*s(.6,.8),Se*.6,ge-1)}else ce.push(Ce)},W=new et({color:4076848,roughness:1}),Y=new et({color:3424298,roughness:.95}),ee=u(64,256,(q,he,Ee)=>{q.clearRect(0,0,he,Ee);for(let Se=0;Se<70;Se++){let ge=Math.random()*he,Ce=Ee*(.3+Math.random()*.7);q.strokeStyle=`rgba(200,205,185,${.4+Math.random()*.5})`,q.lineWidth=1+Math.random()*1.5,q.beginPath(),q.moveTo(ge,0),q.bezierCurveTo(ge+(Math.random()-.5)*14,Ce*.4,ge+(Math.random()-.5)*14,Ce*.7,ge+(Math.random()-.5)*6,Ce),q.stroke()}}),X=new et({map:ee,color:11120280,alphaTest:.3,side:Bt,roughness:1,transparent:!1}),R=[],ce=[],pe=[],x=[];for(let[q,he,Ee]of h)for(let Se=0;Se<Math.round(Ee/3.5);Se++){let ge=s(0,6.28),Ce=s(0,Ee*.45),Oe=q+Math.cos(ge)*Ce,Qe=he+Math.sin(ge)*Ce;N(Oe,Qe)&&Math.hypot(Oe-h[4][0]+1,Qe-h[4][1]-5)>10&&x.push([Oe,Qe,s(.8,1.25)])}for(let q=0;q<26;q++){let he=s(-260,-60),Ee=s(-260,-120);x.push([he,Ee,s(1.4,2)])}for(let[q,he,Ee]of x){let Se=d(q,t(q,he)-.2,he),ge=d(q,Se.y+2.2*Ee,he);R.push(new vn(new zi(Se,ge),2,.45*Ee,7));for(let Ce=0;Ce<4;Ce++){let Oe=Ce*1.57+s(-.4,.4);E(ge,d(Math.cos(Oe),s(.25,.5),Math.sin(Oe)).normalize(),3.2*Ee,.3*Ee,2)}}_(mn(R),W);let B=new ar(1,1),G=B.attributes.position;for(let q=0;q<G.count;q++){let he=d(G.getX(q),G.getY(q),G.getZ(q)),Ee=.8+r(he.x*2+5,he.z*2+he.y)*.5;G.setXYZ(q,he.x*Ee,he.y*Ee*.55,he.z*Ee)}B.computeVertexNormals();let $=new $t(B,Y,ce.length*3),re=0;for(let q of ce)for(let he=0;he<3;he++)m.position.copy(q).add(d(s(-.9,.9),s(.1,.6),s(-.9,.9))),m.rotation.set(0,s(0,6),0),m.scale.setScalar(s(1.3,2.1)),m.updateMatrix(),$.setMatrixAt(re,m.matrix),b.setHSL(s(.2,.27),s(.18,.3),s(.17,.26)),$.setColorAt(re++,b),he===0&&q.y>2&&pe.push(q.clone());$.castShadow=$.receiveShadow=e,i.add($);let de=new Mt(.7,1.8);de.translate(0,-.9,0);let j=new $t(de,X,pe.length*3);re=0;for(let q of pe)for(let he=0;he<3;he++)m.position.copy(q).add(d(s(-1.2,1.2),s(-.5,-.1),s(-1.2,1.2))),m.rotation.set(0,s(0,6),0),m.scale.set(s(.8,1.4),s(.7,1.6),1),m.updateMatrix(),j.setMatrixAt(re++,m.matrix);i.add(j)}{let W=new ar(1,1),Y=W.attributes.position;for(let pe=0;pe<Y.count;pe++){let E=.8+Math.sin(Y.getX(pe)*5+Y.getZ(pe)*3)*.12;Y.setXYZ(pe,Y.getX(pe)*E,Y.getY(pe)*E*.7,Y.getZ(pe)*E)}W.computeVertexNormals();let ee=e?420:180,X=new $t(W,new et({color:6123070,roughness:.9}),ee),R=0,ce=0;for(;R<ee&&ce<ee*40;){ce++;let pe=s(-90,120),E=s(-140,40),x=t(pe,E);x<.55||x>2.6||h.some(([B,G,$])=>Math.hypot(pe-B,E-G)<$*1.05)&&(m.position.set(pe,x+.3,E),m.rotation.y=s(0,6),m.scale.setScalar(s(.7,1.6)),m.updateMatrix(),X.setMatrixAt(R,m.matrix),b.setHSL(s(.2,.26),s(.25,.4),s(.22,.32)),X.setColorAt(R++,b))}X.count=R,X.castShadow=e,i.add(X)}{let[W,Y]=[h[4][0]-1,h[4][1]+5],ee=t(W,Y)+2.4,X=new Dt;X.position.set(W,0,Y),X.rotation.y=-.44,X.scale.setScalar(.8),i.add(X);let R=new et({color:15328470,roughness:.85}),ce=new et({color:16184298,roughness:.7}),pe=new et({color:7305848,metalness:.6,roughness:.45,side:Bt}),E=w.win=new et({color:2240568,emissive:16756832,emissiveIntensity:0,roughness:.2}),x=(re,de,j,q,he)=>{let Ee=new Ae(re,de);return Ee.position.set(j,q,he),Ee.castShadow=e,Ee.receiveShadow=e,X.add(Ee),Ee};x(new wt(11,4.2,8),R,0,ee+2.1,0);for(let re=-4;re<=4;re+=2)for(let de of[-3.5,0,3.5])x(new wt(.35,ee,.35),ce,re*1.2,ee/2,de);x(new wt(13,.25,3),ce,0,ee,5.4);for(let re=-6;re<=6;re+=2)x(new wt(.18,3.6,.18),ce,re,ee+1.8,6.7);x(new wt(13,.1,.1),ce,0,ee+1,6.7);let B=new ti(1,1,4,1,!0);B.rotateY(Math.PI/4),B.scale(8.4,3,6.5),x(B,pe,0,ee+4.2+1.5,0);let G=new wt(13.4,.12,3.2);G.rotateX(-.22),x(G,pe,0,ee+3.7,5.6);for(let re=-4;re<=4;re+=2.6)x(new wt(1,1.7,.05),E,re,ee+2.1,4.03);let $=new wt(1.6,.12,.4);for(let re=0;re<10;re++)x($,ce,0,ee*(re/10),7+(10-re)*.35)}let z=new et({color:16052714,roughness:.75}),V=new et({color:1381653,roughness:.7}),Q=new et({color:14725168,roughness:.5}),k=new et({color:14704698,roughness:.5}),ie=(W,Y,ee)=>new Ae(new vn(new Oi(W),10,Y,5),ee);function se({body:W,leg:Y,bill:ee,billCurve:X,neckS:R,s:ce}){let pe=new Dt,E=new Ae(new kt(.2,10,8),W);E.scale.set(.75,.8,1.8),E.position.y=1,E.rotation.x=-.35,pe.add(E);for(let re of[-.05,.05]){let de=new Ae(new En(.012,.012,.95),Y);de.position.set(re,.48,0),pe.add(de)}let x=new Dt;x.position.set(0,1.1,-.25),pe.add(x),x.add(ie(R?[d(0,0,0),d(0,.25,.05),d(0,.42,-.08),d(0,.6,-.1)]:[d(0,0,0),d(0,.15,-.05),d(0,.28,-.12)],.035,W));let B=new Ae(new kt(.055,8,6),W),G=R?d(0,.6,-.12):d(0,.3,-.14);B.position.copy(G),x.add(B);let $=X?ie([G.clone().add(d(0,0,-.04)),G.clone().add(d(0,-.06,-.18)),G.clone().add(d(0,-.16,-.27))],.012,ee):new Ae(new ti(.022,.28,5),ee);return X||($.position.copy(G).add(d(0,-.01,-.17)),$.rotation.x=-Math.PI/2-.1),x.add($),pe.scale.setScalar(ce),pe.userData.head=x,pe.traverse(re=>re.castShadow=e),pe}let Ue=[],xe=(W,Y,ee,X,R=0,ce=.1)=>{for(let pe=0;pe<200;pe++){let E=s(W,Y),x=s(ee,X),B=t(E,x);if(B>R&&B<ce)return[E,B,x]}return null},ot=(W,Y,ee)=>{Y&&(W.position.set(Y[0],Y[1]-.02,Y[2]),W.rotation.y=ee,i.add(W),W.userData.ph=s(0,6),W.userData.p0=W.position.clone(),Ue.push(W))};for(let W=0;W<5;W++)ot(se({body:z,leg:V,bill:Q,neckS:!0,s:s(.95,1.05)}),W<2?xe(16,26,-36,-14,.05,.14):xe(-40,30,-40,-12),s(0,6));let nt=xe(12,20,-34,-16,.05,.14)||[14,0,-22];for(let W=0;W<7;W++){let Y=se({body:z,leg:k,bill:k,billCurve:!0,s:.62});Y.userData.ibis=!0,ot(Y,[nt[0]+s(-2.5,2.5),t(nt[0],nt[2]),nt[2]+s(-1.5,1.5)],s(0,6))}{let W=new et({color:8227740,roughness:.8}),Y=se({body:W,leg:new et({color:4866102}),bill:Q,neckS:!0,s:1.35});Y.userData.heron=!0,ot(Y,xe(3,7,-34,-16,.05,.14)||[9,0,-20],2.2)}let rt=[];{let W=mn([new kt(.025,6,4).scale(1.3,.5,1),new wt(.04,.018,.02).translate(.045,0,-.02)]),Y=new et({color:9067066,roughness:.6}),ee=e?120:50,X=new $t(W,Y,ee);for(let R=0;R<ee;R++){let ce=xe(-6,6,4,16,-.2,.14)||xe(-20,20,-30,10,-.2,.12)||[0,0,0];rt.push({p:d(ce[0],ce[1]+.012,ce[2]),ph:s(0,100),d:s(0,6.28)}),b.setHSL(s(.04,.08),s(.4,.6),s(.25,.4)),X.setColorAt(R,b)}i.add(X),w.crabs=X}let te=[];for(let W=0;W<5;W++){let Y=new Dt,ee=new Ae(new kt(.12,8,6),z);ee.scale.set(1,1,3);let X=new Ae(new En(.03,.03,.35),z);X.position.set(0,.02,-.4),X.rotation.x=1.4;let R=new Ae(new En(.01,.01,.6),V);R.rotation.x=1.5,R.position.z=.55;let ce=new Mt(.85,.32);ce.translate(.42,0,0);let pe=new Ae(ce,z),E=new Ae(ce,z);E.scale.x=-1,pe.rotation.x=E.rotation.x=-Math.PI/2,pe.material=E.material=new et({color:16052714,side:Bt}),Y.add(ee,X,R,pe,E),Y.userData={l:pe,r:E,ph:s(0,6),rad:s(40,70),h:s(6,14),sp:s(.025,.04),cz:-45+s(-10,10)},i.add(Y),te.push(Y)}let ae=[];{let W=new et({color:6049860,roughness:.85,side:Bt}),Y=new et({color:14273974,roughness:.8});for(let ee=0;ee<6;ee++){let X=new Dt,R=new Ae(new kt(.2,8,6),W);R.scale.set(1,.9,3.2);let ce=new Ae(new kt(.09,6,5),Y);ce.position.set(0,.12,-.62);let pe=new Ae(new ti(.05,.55,5),new et({color:9072725}));pe.rotation.x=-Math.PI/2-.35,pe.position.set(0,.02,-.92);let E=new Mt(1.15,.42,4,1),x=E.attributes.position;for(let $=0;$<x.count;$++){let re=x.getX($);x.setY($,x.getY($)+(re>0,0)),x.setZ($,-Math.sin(re*2.4)*.06)}E.translate(.58,0,0);let B=new Ae(E,W),G=new Ae(E,W);G.scale.x=-1,B.rotation.x=G.rotation.x=-Math.PI/2,X.add(R,ce,pe,B,G),X.userData={l:B,r:G,i:ee},i.add(X),ae.push(X)}}let we=new Dt;{let W=new et({color:4865072,side:Bt}),Y=new et({color:15262422,side:Bt}),ee=new Ae(new kt(.15,8,6),Y);ee.scale.set(1,1,3.2),we.add(ee);for(let X of[1,-1]){let R=new Dt,ce=new Ae(new Mt(.8,.4).translate(.4,0,0),Y),pe=new Ae(new Mt(.75,.32).translate(.37,0,0),W);pe.position.x=.78,pe.rotation.y=-.35,ce.add(pe),R.add(ce),R.rotation.x=-Math.PI/2,R.scale.x=X,R.rotation.z=X*.18,we.add(R)}i.add(we)}let $e=[];{let W=new et({color:5989227,roughness:.35,metalness:.05});for(let Y=0;Y<2;Y++){let ee=new Dt,X=new Ae(new kt(.3,14,10),W);X.scale.set(.85,.8,4.6),ee.add(X);let R=new Ae(new ti(.18,.42,3),W);R.scale.set(.25,1,1),R.position.set(0,.36,.1),R.rotation.x=.45,ee.add(R);let ce=new Ae(new wt(.7,.03,.22),W);ce.position.z=1.45,ee.add(ce),i.add(ee),$e.push({g:ee,ph:Y*2.3,off:Y*1.3})}}let Le=new Ae(new kt(.08,8,6).scale(1,.9,3.2),new et({color:13159632,metalness:.8,roughness:.25}));i.add(Le);let tt=new Ut({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),mt=[];for(let W=0;W<4;W++){let Y=new Ae(new da(.9,1,40),tt.clone());Y.rotation.x=-Math.PI/2,Y.position.y=.03,i.add(Y),mt.push({m:Y,t:9})}let le=(W,Y,ee=1)=>{let X=mt.find(R=>R.t>2.5)||mt[0];X.t=0,X.s=ee,X.m.position.x=W,X.m.position.z=Y},ue=new Dt;{let W=new et({color:2761501,roughness:1}),Y=new Ae(new kt(.14,8,6),W);Y.scale.set(1,1.5,.9);let ee=new Ae(new kt(.1,8,6),W);ee.position.y=.24,ue.add(Y,ee);for(let X of[-1,1]){let R=new Ae(new ti(.03,.09,4),W);R.position.set(X*.06,.34,0),ue.add(R);let ce=new Ae(new kt(.018,6,4),new Ut({color:16760896}));ce.position.set(X*.04,.25,-.085),ue.add(ce)}ue.scale.setScalar(.75),ue.position.copy(w.roofTop).add(d(0,.16,0)),ue.rotation.y=Math.PI*.15,ue.visible=!1,i.add(ue)}let _e=W=>-30+Math.sin(W*.035)*7+Math.sin(W*.011+1)*10,ve=3,ye=null;return w.update=(W,Y,ee)=>{for(let X of Ue){let R=X.userData,ce=R.head;if(R.ibis)ce.rotation.x=.9+Math.sin(W*2.2+R.ph)*.5,X.position.x=R.p0.x+Math.sin(W*.12+R.ph)*.6,X.rotation.y=R.ph+Math.sin(W*.12+R.ph)*.8;else{let pe=Math.max(0,Math.sin(W*.4+R.ph)-.92)*12;ce.rotation.x=pe*.9+Math.sin(W*.7+R.ph)*.05}}if(w.crabs){let X=w.crabs;rt.forEach((R,ce)=>{let pe=Math.sin(W*.6+R.ph)>.3?1:0;R.d+=Math.sin(W*.3+R.ph)*.01;let E=pe*Y*.15;R.p.x+=Math.cos(R.d)*E,R.p.z+=Math.sin(R.d)*E,m.position.copy(R.p),m.rotation.set(0,-R.d+Math.PI/2,0),m.scale.setScalar(1),m.updateMatrix(),X.setMatrixAt(ce,m.matrix)}),X.instanceMatrix.needsUpdate=!0,X.visible=ee<.8}te.forEach(X=>{let R=X.userData,ce=W*R.sp+R.ph;X.visible=ee<.75,X.position.set(Math.cos(ce)*R.rad,R.h+Math.sin(ce*3)*.8,R.cz+Math.sin(ce)*R.rad*.4),X.rotation.y=-ce;let pe=Math.sin(W*3.2+R.ph)*.55;R.l.rotation.z=pe,R.r.rotation.z=-pe});{let X=W*.035%1;ae.forEach(R=>{let ce=R.userData,E=-160+(X-ce.i*.012)*320;R.position.set(E,2.4+Math.sin(W*.6+ce.i)*.15,_e(E)-3+ce.i*.9),R.rotation.y=-Math.PI/2,R.rotation.z=Math.sin(W*.5+ce.i)*.05;let x=Math.sin(W*.9+ce.i*.7)>.85?Math.sin(W*6)*.4:.06;ce.l.rotation.z=x,ce.r.rotation.z=-x,R.visible=ee<.75})}{let X=W*.08;we.position.set(-10+Math.cos(X)*35,26+Math.sin(X*2)*2,-60+Math.sin(X)*22),we.rotation.set(0,-X+Math.PI,Math.sin(X)*0+.3),we.visible=ee<.7}if($e.forEach(X=>{let ce=(W+X.ph)%9/9,E=-30+(Math.floor((W+X.ph)/9)*23+X.off*11)%50,x=_e(E)+(X.off-.6)*2,B=Math.min(1,ce/.22),G=ce<.22?-1.1+Math.sin(B*Math.PI)*1.25:-3;X.g.position.set(E+B*3.2,G,x),X.g.rotation.set(-Math.cos(B*Math.PI)*.55,-Math.PI/2,0),ce<.22&&Math.abs(ce-.03)<Y/9&&le(E+.3,x,.8),Math.abs(ce-.2)<Y/9&&le(E+3,x,.7),X.g.visible=ce<.22}),ve-=Y,ve<0){let X=s(-25,25);ye={x:X,z:_e(X)+s(-3,3),t:0,d:s(0,6)},le(ye.x,ye.z,.35),ve=s(4,9)}if(ye){ye.t+=Y;let X=ye.t/.7;Le.visible=X<1,X<1?(Le.position.set(ye.x+Math.cos(ye.d)*X*.9,Math.sin(X*Math.PI)*.75,ye.z+Math.sin(ye.d)*X*.9),Le.rotation.set(-Math.cos(X*Math.PI)*.9,-ye.d+Math.PI/2,0)):(le(Le.position.x,Le.position.z,.3),ye=null)}else Le.visible=!1;mt.forEach(X=>{X.t+=Y;let R=X.t/2.2;X.m.visible=R<1;let ce=(.15+R*1.4)*(X.s||1);X.m.scale.setScalar(ce),X.m.material.opacity=(1-R)*.35*(1-ee*.5)}),ue.visible=ee>.5,ue.rotation.y=Math.PI*.15+Math.sin(W*.3)*.6*(Math.sin(W*.13)>.6?1:0),w.win&&(w.win.emissiveIntensity=ee*2.2)},w.wildFocus=()=>{let W=Ue.find(Y=>Y.userData.ibis)||Ue[0];return W?W.position.clone().add(d(0,.4,0)):d(0,0,-15)},w}var vi=i=>document.querySelector(i),sf=matchMedia("(prefers-reduced-motion: reduce)").matches,ns=new URLSearchParams(location.search),ff=vi("#load"),q_=vi("#bar"),Wn=i=>(q_.style.transform=`scaleX(${i})`,new Promise(e=>requestAnimationFrame(()=>e())));function pf(){document.body.classList.add("nogl"),ff.classList.add("done")}var Sn;try{let i=vi("#gl");Sn=new Jl({canvas:i,antialias:!1,powerPreference:"high-performance"})}catch(i){throw pf(),i}var mf=matchMedia("(pointer:coarse)").matches||innerWidth<760,zt=ns.get("q")?ns.get("q")==="high":!mf;Sn.setPixelRatio(Math.min(devicePixelRatio,zt?1.5:1.25));Sn.toneMapping=ps;Sn.toneMappingExposure=zt?.32:.4;Sn.outputColorSpace=on;Sn.shadowMap.enabled=zt;Sn.shadowMap.type=nl;var Pt=new Qs,hn=new Jt(52,1,.1,2e4),ji={value:0},rf=11,Y_=()=>(rf=rf*16807%2147483647)/2147483647,ke=(i,e)=>i+Y_()*(e-i);function ic(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ka(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=ic(t,n),c=ic(t+1,n),h=ic(t,n+1),p=ic(t+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+p)*a*o}var ts=(i,e)=>ka(i,e)*.5+ka(i*2.1,e*2.1)*.25+ka(i*4.3,e*4.3)*.125+ka(i*8.7,e*8.7)*.0625,Ht=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Mn=(i,e,t)=>i+(e-i)*t;function ys(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new nr(s);return r.colorSpace=on,r.anisotropy=4,n&&(r.wrapS=r.wrapT=hs),r}var ws=new me(14,-46),si=new me(1,-.32).normalize(),Ar=new me(-si.y,si.x).multiplyScalar(-1),Tr=(i,e)=>{let t=i-ws.x,n=e-ws.y,s=t*si.x+n*si.y;return t*Ar.x+n*Ar.y-Ht(-5,-35,s)*80},Gh=[[-62,-22,15],[34,12,9],[-30,-62,17],[56,-10,8],[26,-38,11]],Bh=i=>-30+Math.sin(i*.035)*7+Math.sin(i*.011+1)*10;function Ki(i,e){let t=Tr(i,e),n=.22+(ts(i*.08,e*.08)-.5)*.1;n=Mn(n,.02,(1-Ht(3,7,Math.hypot((i-1)*.8,e-10)))*.9);let s=Math.abs(e-Bh(i));n=Mn(n,.1,1-Ht(8,13,s)),n=Mn(n,-1.9,1-Ht(4.5,9,s));let r=Math.abs(i+16-Math.sin(e*.09)*4);n=Mn(n,-.5,(1-Ht(1,2.4,r))*Ht(Bh(i)-2,Bh(i)+4,e)*(1-Ht(8,30,e))),n=Mn(n,-3.2,Ht(-62,-98,e-i*.35));for(let[c,h,p]of Gh){let u=Math.hypot(i-c,e-h)/p;n=Mn(n,.9+ts(i*.2,e*.2)*.7,1-Ht(.25,1,u))}let a=t<0?t*.12:Math.min(.9,t*.06);t>10&&(a+=Ht(10,20,t)*(2.4+ts(i*.07,e*.07)*4.2)),a+=(ts(i*.5,e*.5)-.5)*.08;let o=(i-ws.x)*si.x+(e-ws.y)*si.y,l=Ht(-14,-2,t)*Ht(-25,10,o);return n=Mn(n,a,l),n}var cc=new _r;cc.scale.setScalar(1e4);Pt.add(cc);var Cr=cc.material.uniforms;Cr.turbidity.value=4.5;Cr.rayleigh.value=3.6;Cr.mieCoefficient.value=.005;Cr.mieDirectionalG.value=.86;var Yh=new U().setFromSphericalCoords(1,Nn.degToRad(90-3.2),Nn.degToRad(206));Cr.sunPosition.value.copy(Yh);var Z_=new be(15310970);Pt.fog=new Yr(Z_,zt?.0042:.0048);var J_=new gr(Sn),rc=new pa(16762784,5914680,1.7);Pt.add(rc);var qn=new Xi(16754784,3.2);qn.position.copy(Yh).multiplyScalar(80);qn.target.position.set(0,0,-6);Pt.add(qn,qn.target);if(zt){qn.castShadow=!0,qn.shadow.mapSize.set(2048,2048);let i=qn.shadow.camera;i.left=-30,i.right=30,i.top=30,i.bottom=-30,i.near=1,i.far=200,qn.shadow.bias=-4e-4,qn.shadow.normalBias=.03}var $_=24,K_=-14,ac=2.4,Ss,Ms,gf,xf;var _f=[],vf=[];var wn,Es;async function Q_(){await Wn(.08);let i=420,e=zt?300:180,t=new Mt(i,i,e,e);t.rotateX(-Math.PI/2),t.translate(40,0,-60);let n=t.attributes.position,s=new Float32Array(n.count*3),r=new be,a=new be(3811871),o=new be(7033920),l=new be(5921328),c=new be(15916208),h=new be(11045482),p=new be(14270612);for(let M=0;M<n.count;M++){let g=n.getX(M),S=n.getZ(M),A=Ki(g,S);n.setY(M,A);let P=Tr(g,S),L=Ht(-6,1,P);r.copy(a).lerp(o,Ht(-.05,.14,A)*.6).lerp(l,Ht(.12,.2,A)*.8).lerp(new be(3815972),Ht(.6,1.1,A));let F=r.clone().copy(h).lerp(c,Ht(.08,.5,A)).lerp(p,Ht(1.2,2.5,A));r.lerp(F,L);let D=.9+ts(g*1.3,S*1.3)*.2;s[M*3]=r.r*D,s[M*3+1]=r.g*D,s[M*3+2]=r.b*D}t.setAttribute("color",new nn(s,3)),t.computeVertexNormals();let u=new et({vertexColors:!0,roughness:.9});u.onBeforeCompile=M=>{M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying float vY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vY=position.y;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
varying float vY;`).replace("#include <roughnessmap_fragment>","float roughnessFactor=mix(.12,.92,smoothstep(-.02,.16,vY));").replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(.55,1.,smoothstep(-.1,.25,vY));`)};let d=new Ae(t,u);d.receiveShadow=!0,Pt.add(d),await Wn(.2);let m=(()=>{let g=document.createElement("canvas");g.width=g.height=256;let S=g.getContext("2d"),A=S.createImageData(256,256),P=new Float32Array(256*256),L=[];for(let D=0;D<26;D++)L.push([1+(Math.random()*9|0),(Math.random()*9|0)-4,Math.random()*6.28,1/(1+D*.35)]);for(let D=0;D<256;D++)for(let N=0;N<256;N++){let z=0;for(let[V,Q,k,ie]of L)z+=Math.sin((V*N+Q*D)/256*6.283+k)*ie;P[D*256+N]=z}for(let D=0;D<256;D++)for(let N=0;N<256;N++){let z=P[D*256+(N+1)%256]-P[D*256+(N-1+256)%256],V=P[(D+1)%256*256+N]-P[(D-1+256)%256*256+N],Q=new U(-z*.6,-V*.6,1).normalize(),k=(D*256+N)*4;A.data[k]=(Q.x*.5+.5)*255,A.data[k+1]=(Q.y*.5+.5)*255,A.data[k+2]=(Q.z*.5+.5)*255,A.data[k+3]=255}S.putImageData(A,0,0);let F=new nr(g);return F.wrapS=F.wrapT=hs,F})();Ss=new Ql(new Mt(1e4,1e4),{textureWidth:zt?1024:384,textureHeight:zt?1024:384,waterNormals:m,sunDirection:Yh.clone(),sunColor:16765600,waterColor:3814436,distortionScale:.7,fog:!0}),Ss.rotation.x=-Math.PI/2,Ss.position.y=0,Ss.material.uniforms.size.value=24,Pt.add(Ss),await Wn(.3);{let g=new Mt(360,26,200,1);g.rotateX(-Math.PI/2);let S=new Tt({transparent:!0,depthWrite:!1,fog:!0,uniforms:Object.assign(cn.merge([De.fog]),{t:ji,uA:{value:ws},uN:{value:Ar},uD:{value:si}}),vertexShader:`varying vec2 vUv;varying vec3 wp;#include <fog_pars_vertex>
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
`)});xf=S,S.uniforms.glow={value:0};let A=new Ae(g,S),P=Math.atan2(si.y,si.x);A.rotation.y=-P;let L=ws.clone().addScaledVector(si,360*.35);A.position.set(L.x-Ar.x*13,.04,L.y-Ar.y*13),A.rotation.y=-P+Math.PI,Pt.add(A)}await Wn(.36);let b=ys(512,128,(M,g,S)=>{M.fillStyle="#8f6a4a",M.fillRect(0,0,g,S);for(let A=0;A<220;A++){let P=Math.random()*S;M.strokeStyle=`rgba(${40+Math.random()*40|0},${25+Math.random()*25|0},15,${.08+Math.random()*.25})`,M.lineWidth=Math.random()*2.5,M.beginPath(),M.moveTo(0,P);for(let L=0;L<=g;L+=32)M.lineTo(L,P+Math.sin(L*.02+A)*2);M.stroke()}for(let A=0;A<5;A++)M.fillStyle="rgba(50,30,20,.35)",M.beginPath(),M.ellipse(Math.random()*g,Math.random()*S,8,4,0,0,7),M.fill();M.fillStyle="rgba(200,190,175,.15)",M.fillRect(0,0,g,S)},!0),_=ys(256,256,(M,g,S)=>{M.fillStyle="#4f3b2b",M.fillRect(0,0,g,S);for(let A=0;A<8;A++)for(let P=0;P<8;P++){let L=P*32+A%2*16,F=A*32;M.fillStyle=`rgb(${100+Math.random()*30|0},${78+Math.random()*20|0},${55+Math.random()*15|0})`,M.beginPath(),M.moveTo(L,F+30),M.lineTo(L+16,F-2),M.lineTo(L+32,F+30),M.lineTo(L+16,F+22),M.fill(),M.strokeStyle="#2a1d14",M.lineWidth=2,M.stroke()}},!0),f=ys(256,256,(M,g,S)=>{M.clearRect(0,0,g,S);let A=g/2,P=S-6;M.lineCap="round";for(let L=0;L<34;L++){let F=-Math.PI*.92+L*(Math.PI*.84/33),D=S*.92*(.8+.2*Math.sin(L*1.3)),N=A+Math.cos(F)*D*.5,z=P+Math.sin(F)*D,V=M.createLinearGradient(A,P,N,z);V.addColorStop(0,"#4d6a34"),V.addColorStop(1,L%5?"#7c8a46":"#8f8a4a"),M.strokeStyle=V,M.lineWidth=7,M.beginPath(),M.moveTo(A,P-S*.12),M.quadraticCurveTo(A+(N-A)*.5,P-S*.12+(z-P)*.5,N,z),M.stroke(),M.strokeStyle="rgba(30,40,20,.5)",M.lineWidth=1,M.beginPath(),M.moveTo(A,P-S*.12),M.lineTo(N,z),M.stroke()}M.fillStyle="#4a5a2e",M.beginPath(),M.moveTo(A-5,P),M.lineTo(A,P-S*.16),M.lineTo(A+5,P),M.fill()});f.colorSpace=on,await Wn(.42);function w(M,g,{tip:S=0,alpha:A=null,side:P=Bt}={}){let L=new et({color:M,roughness:.75,side:P,map:A,alphaTest:A?.45:0});return L.onBeforeCompile=F=>{F.uniforms.t=ji,F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
uniform float t;varying float vH;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vH=clamp(position.y/1.0,0.,1.);vec3 ip=vec3(0.);
 #ifdef USE_INSTANCING
 ip=instanceMatrix[3].xyz;
 #endif
 float wv=sin(t*1.4+ip.x*.25+ip.z*.18)*.6+sin(t*2.9+ip.x*.9-ip.z*.4)*.25+sin(t*.5+ip.z*.05)*.5;
 float k=${g.toFixed(3)}*pow(max(position.y,0.),1.6);transformed.x+=wv*k;transformed.z+=wv*k*.4;`),F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb*=mix(.35,1.15,smoothstep(0.,.9,vH));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance+=vec3(1.,.55,.22)*pow(vH,3.)*${S.toFixed(2)};`)},L}{let M=[];for(let N=0;N<7;N++){let z=new Mt(.045,1,1,5);z.translate(0,.5,0);let V=z.attributes.position,Q=ke(-.3,.3),k=ke(.6,1.1),ie=ke(0,6.28);for(let se=0;se<V.count;se++){let Ue=V.getY(se);V.setX(se,V.getX(se)*(1-Ue*.9)),V.setY(se,Ue*k),V.setZ(se,Q*Ue*Ue*k)}z.rotateY(ie),z.translate(ke(-.12,.12),0,ke(-.12,.12)),M.push(z)}let g=mn(M);g.computeVertexNormals();let S=zt?26e3:7e3,A=new $t(g,w(13088106,.09,{tip:.35}),S),P=new It,L=new be,F=0,D=0;for(;F<S&&D<S*30;){D++;let N=ke(-110,80),z=ke(-95,40),V=Ki(N,z);if(V<.17||V>.6||Tr(N,z)>-5||Math.abs(N)<1.1&&z>-14)continue;P.position.set(N,V-.05,z);let Q=Ht(.13,.2,V),k=ke(.75,1.25)*(.6+Q*.5);P.scale.set(k,k*ke(.8,1.3),k),P.rotation.y=ke(0,6.28),P.updateMatrix(),A.setMatrixAt(F,P.matrix),L.setHSL(ke(.13,.21)-Q*.02,ke(.3,.5),ke(.33,.5)),A.setColorAt(F,L),F++}A.count=F,A.receiveShadow=zt,A.frustumCulled=!1,Pt.add(A)}await Wn(.55);{let M=[];for(let N=0;N<3;N++){let z=new En(.006,.012,1.4,3);z.translate(0,.7,0);let V=ke(-.15,.15);z.rotateZ(V),M.push(z);for(let Q=0;Q<6;Q++){let k=new kt(.035,4,3);k.scale(.6,1.6,.3),k.translate(Math.sin(V)*-1.3+(Q%2?.05:-.05),1.25+Q*.03,0),M.push(k)}for(let Q=0;Q<2;Q++){let k=new Mt(.03,.9,1,3);k.translate(0,.45,0),k.rotateZ(ke(-.6,.6)),k.rotateY(ke(0,6)),M.push(k)}}let g=mn(M.map(N=>N.index?N.toNonIndexed():N).map(N=>(N.deleteAttribute("uv"),N)));g.computeVertexNormals();let S=zt?2600:900,A=new $t(g,w(13480058,.12,{tip:.25}),S),P=new It,L=new be,F=0,D=0;for(;F<S&&D<S*40;){D++;let N=ke(0,200),z=ke(-150,-20),V=Tr(N,z);if(V<13||V>70)continue;let Q=Ki(N,z);P.position.set(N,Q-.05,z),P.rotation.y=ke(0,6.28);let k=ke(.9,1.5);P.scale.setScalar(k),P.updateMatrix(),A.setMatrixAt(F,P.matrix),L.setHSL(ke(.09,.13),ke(.3,.5),ke(.5,.65)),A.setColorAt(F,L),F++}A.count=F,A.frustumCulled=!1,Pt.add(A)}await Wn(.62);let I=[],v=(M,g,S,A)=>I.push([M,g,S,A]);for(let[M,g,S]of Gh)for(let A=0;A<Math.round(S*.7);A++){let P=ke(0,6.28),L=ke(0,S*.55),F=M+Math.cos(P)*L,D=g+Math.sin(P)*L;Ki(F,D)<.85||Math.hypot(F-25,D+33)<9||v(F,D,ke(6,11),ke(-.18,.18))}for(let M=0;M<70;M++){let g=ke(20,220),S=ke(-170,-40),A=Tr(g,S);A<26||A>90||v(g,S,ke(6,12),ke(-.2,.2))}{let M=[],g=[];for(let[V,Q,k,ie]of I){let se=Ki(V,Q)-.2,Ue=ie*k,xe=ke(-.15,.15)*k,ot=new Oi([new U(V,se,Q),new U(V+Ue*.25,se+k*.4,Q+xe*.2),new U(V+Ue*.7,se+k*.8,Q+xe*.6),new U(V+Ue,se+k,Q+xe)]),nt=new vn(ot,10,.2,7),rt=nt.attributes.uv;for(let ae=0;ae<rt.count;ae++)rt.setXY(ae,rt.getX(ae)*k*1.2,rt.getY(ae)*2);M.push(nt);let te=ot.getPoint(1);for(let ae=0;ae<22;ae++){let we=ae>=17;g.push({p:te,yaw:ae/17*6.283+ke(-.2,.2)+(we?ke(0,6):0),pitch:we?ke(-1.25,-1):ke(-.45,.75)+(ae%3===0?.35:0),s:we?ke(.9,1.1):ke(1.05,1.45),dead:we})}}let S=new et({map:_,roughness:1,color:12296330}),A=new Ae(mn(M),S);A.castShadow=zt,A.receiveShadow=zt,Pt.add(A);let P=new Mt(2.4,2.4,8,8),L=P.attributes.position;for(let V=0;V<L.count;V++){let Q=L.getX(V),k=L.getY(V)+1.2,ie=k/2.4;L.setXYZ(V,Q*(.15+.85*ie),-ie*ie*.9+Math.abs(Q)*.25*ie,-k)}P.computeVertexNormals();let F=w(16777215,0,{tip:.05,alpha:f});F.onBeforeCompile=(V=>{let Q=F.onBeforeCompile;return k=>{k.uniforms.t=ji,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
uniform float t;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vec3 ip=instanceMatrix[3].xyz;float d=clamp(-position.z/2.4,0.,1.);float wv=sin(t*1.7+ip.x*.4+ip.z*.3+float(gl_InstanceID)*.7)*.5+sin(t*3.1+float(gl_InstanceID))*.2;transformed.y+=wv*d*d*.35;transformed.x+=wv*d*.12;`)}})();let D=new $t(P,F,g.length),N=new It,z=new be;g.forEach((V,Q)=>{N.position.copy(V.p),N.rotation.set(0,0,0),N.rotateY(V.yaw),N.rotateX(V.pitch),N.scale.setScalar(V.s),N.updateMatrix(),D.setMatrixAt(Q,N.matrix),V.dead?z.setRGB(.55,.38,.22):z.setHSL(ke(.18,.25),ke(.25,.45),ke(.42,.6)),D.setColorAt(Q,z)}),D.castShadow=zt,D.frustumCulled=!1,Pt.add(D)}await Wn(.72);{let M=new na(.09,0);M.scale(1.6,.35,.9);let g=zt?5e3:1500,S=new $t(M,new et({color:10130058,roughness:.55}),g),A=new It,P=new be,L=0,F=0;for(;L<g&&F<g*60;){F++;let D=ke(-60,60),N=ke(-55,30),z=Ki(D,N);if(z<-.3||z>.05||Tr(D,N)>-8||ts(D*.2,N*.2)<.5)continue;A.position.set(D,z+.02,N),A.rotation.set(ke(-.5,.5),ke(0,6),ke(-.5,.5)),A.scale.setScalar(ke(.6,1.5)),A.updateMatrix(),S.setMatrixAt(L,A.matrix);let V=ke(.5,1);P.setRGB(V,V*.97,V*.92),S.setColorAt(L++,P)}S.count=L,Pt.add(S)}{let g=function(A,P,L,F,D){let N=A.clone().addScaledVector(P,L),z=A.clone().lerp(N,.5).add(new U(ke(-.2,.2),ke(-.1,.1),ke(-.2,.2)).multiplyScalar(L));if(M.push(new vn(new Hn(A,z,N),4,F,5)),D>0)for(let V=0;V<(D>2?2:3);V++){let Q=P.clone().add(new U(ke(-.9,.9),ke(-.1,.6),ke(-.9,.9))).normalize();g(N,Q,L*ke(.55,.75),F*.62,D-1)}},M=[];[[0,30,.2],[3,52,-.4],[-1,80,.5]].forEach(([A,P,L])=>{let F=ws.clone().addScaledVector(si,P).addScaledVector(Ar,-A),D=F.x,N=F.y,z=new U(D,Ki(D,N)-.1,N);g(z,new U(Math.sin(L),1,.2).normalize(),ke(2.2,3),.22,4);for(let V=0;V<4;V++){let Q=ke(0,6.28);M.push(new vn(new Hn(z.clone().add(new U(0,.3,0)),z.clone().add(new U(Math.cos(Q)*.6,.05,Math.sin(Q)*.6)),z.clone().add(new U(Math.cos(Q)*1.4,-.1,Math.sin(Q)*1.4))),4,.09,4))}});let S=new Ae(mn(M),new et({color:13616052,roughness:.85}));S.castShadow=zt,Pt.add(S)}await Wn(.84);{let M=new Mt(1400,40,280,1),g=M.attributes.position;for(let L=0;L<g.count;L++)if(g.getY(L)>0){let F=g.getX(L);g.setY(L,6+ts(F*.02,1)*14+Math.max(0,Math.sin(F*.9)*ka(F*.13,3)*9))}else g.setY(L,-2);let S=new Ut({color:3811894,fog:!0}),A=new Ae(M,S);A.position.set(-350,0,-420),A.rotation.y=.55,Pt.add(A);let P=A.clone();P.position.set(-620,0,-80),P.rotation.y=1.35,Pt.add(P)}{let M=ys(512,256,(S,A,P)=>{for(let L=0;L<60;L++){let F=A*.15+Math.random()*A*.7,D=P*.45+Math.random()*P*.25,N=20+Math.random()*60,z=S.createRadialGradient(F,D,0,F,D,N);z.addColorStop(0,"rgba(255,255,255,.35)"),z.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=z,S.fillRect(F-N,D-N,N*2,N*2)}}),g=[16757658,16751242,16762784,15239840,16098170];for(let S=0;S<14;S++){let A=new Ut({map:M,transparent:!0,depthWrite:!1,fog:!1,color:g[S%5],opacity:ke(.5,.9)});vf.push(A);let P=new Ae(new Mt(1,.5),A),L=Nn.degToRad(206+ke(-70,70)),F=Nn.degToRad(ke(4,18));P.position.setFromSphericalCoords(2500,Math.PI/2-F,L),P.scale.setScalar(ke(700,1500)),P.scale.y*=ke(.4,.7),P.lookAt(0,0,0),Pt.add(P)}}Ms=(()=>{let M=zt?220:80,g=new vt,S=new Float32Array(M*3);for(let F=0;F<M;F++)S[F*3]=ke(-20,20),S[F*3+1]=ke(.4,3),S[F*3+2]=ke(-25,25);g.setAttribute("position",new nn(S,3));let A=ys(64,64,(F,D)=>{let N=F.createRadialGradient(32,32,0,32,32,32);N.addColorStop(0,"rgba(255,250,200,1)"),N.addColorStop(.2,"rgba(255,220,120,.6)"),N.addColorStop(1,"rgba(255,200,80,0)"),F.fillStyle=N,F.fillRect(0,0,64,64)}),P=new ei({map:A,size:.35,transparent:!0,depthWrite:!1,blending:rn,color:16773280}),L=new mi(g,P);return Pt.add(L),{pts:L,p:S,g,base:S.slice()}})(),await Wn(.9),Es=nf({S:Pt,HQ:zt,H:Ki,T:ji,rr:ke,fbm:ts,woodTex:b,PZ0:$_,PZ1:K_,PY:ac,HAM:Gh,windMat:w,canvasTex:ys}),gf=Es.glass;for(let M of Es.lampPos.slice(0,zt?4:2)){let g=new xa(16754768,3,8,1.6);g.position.copy(M),Pt.add(g),_f.push(g)}wn=ef({S:Pt,HQ:zt,mobile:mf,canvasTex:ys,T:ji}),wn._cam=hn,await Wn(.95);let C=new Qs,T=new _r;T.scale.setScalar(1e3),Object.assign(T.material.uniforms,cn.clone(cc.material.uniforms)),C.add(T),Pt.environment=J_.fromScene(C).texture,Pt.environmentIntensity=.6}var Xn=null,Wa=null;function j_(){zt&&(Xn=new ec(Sn),Xn.addPass(new tc(Pt,hn)),Wa=new vs({uniforms:{tDiffuse:{value:null},sunUv:{value:new me(.5,.5)},amt:{value:.5}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 sunUv;uniform float amt;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);vec2 d=(vUv-sunUv)/48.;vec2 uv=vUv;float decay=1.;vec3 acc=vec3(0.);
 for(int i=0;i<48;i++){uv-=d;vec3 s=texture2D(tDiffuse,uv).rgb;float l=clamp(dot(s,vec3(.3,.5,.2))-6.,0.,20.);acc+=vec3(1.,.72,.45)*l*decay;decay*=.95;}gl_FragColor=vec4(c.rgb+acc*amt/48.,1.);}`}),Xn.addPass(Wa),Xn.addPass(new yr(new me(innerWidth/2,innerHeight/2),.28,.4,5.5)),Xn.addPass(new nc),Xn.addPass(new vs({uniforms:{tDiffuse:{value:null},t:ji},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float t;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float v=smoothstep(1.15,.35,length((vUv-.5)*vec2(1.25,1.)));c*=mix(.62,1.,v);
 c+=(h(vUv*1000.+fract(t)*91.)-.5)*.045;c=mix(c,c*vec3(1.04,.99,.93),.6);gl_FragColor=vec4(c,1.);}`})))}var Oh=0,zh=0,oc=0,lc=0,bs=null,Zh=!1,Xa=Sn.domElement;Xa.addEventListener("pointerdown",i=>{bs=[i.clientX,i.clientY,oc,lc],Zh=!1});addEventListener("pointerup",()=>bs=null);var af=new va,of=new me,wr=vi("#clabel"),es=null,Qi=!0,ev=0,tv=()=>Qi?wn?wn.targets.filter(i=>i.visible&&(wn.vis||0)>.4):[]:[];function yf(i,e){of.set(i/innerWidth*2-1,-e/innerHeight*2+1),af.setFromCamera(of,hn);for(let t of tv())if(af.intersectObject(t.userData.hit,!1).length)return t;return null}addEventListener("pointermove",i=>{if(bs){let e=i.clientX-bs[0],t=i.clientY-bs[1];Math.abs(e)+Math.abs(t)>6&&(Zh=!0),oc=bs[2]-e*.004,lc=Math.max(-.35,Math.min(.35,bs[3]-t*.003))}else matchMedia("(pointer:fine)").matches&&(oc=-(i.clientX/innerWidth-.5)*.2,lc=-(i.clientY/innerHeight-.5)*.06);if(i.target!==Xa){es=null,wr.classList.remove("on");return}es=yf(i.clientX,i.clientY),Xa.style.cursor=es?"pointer":"",es?(wr.textContent=es.userData.label+"  \xB7  open",wr.style.transform=`translate(${i.clientX+18}px,${i.clientY+14}px)`,wr.classList.add("on")):wr.classList.remove("on")});Xa.addEventListener("click",i=>{if(Zh)return;let e=yf(i.clientX,i.clientY);e&&window.openCard(e.userData.game)});function kh(){let i=innerWidth,e=innerHeight;Sn.setSize(i,e,!1),hn.aspect=i/e,hn.fov=Rr==="wild"?42:Rr?Rr==="station"?24:16:i<e?70:52,hn.updateProjectionMatrix(),wn&&wn.layout(hn.aspect),Xn&&Xn.setSize(i,e)}var Sr=new U,lf=0,Hh=0,Ga=0,cf=!1;window.__fps=0;var Wh=ns.has("p")?parseFloat(ns.get("p")):null;Wh!==null&&document.body.classList.add("endshot");var Xh=new U(0,.4,-1),Rr=ns.get("focus"),hf={sky:[new be(16762784),new be(3820154)],gnd:[new be(5914680),new be(1053727)],dl:[new be(16754784),new be(10466559)],fog:[new be(15310970),new be(1186352)],wsun:[new be(16765600),new be(13688063)],wcol:[new be(3814436),new be(725536)]},br=(i,e,t)=>i.copy(hf[e][0]).lerp(hf[e][1],t),Er=new U,Mf=new U(0,Math.sin(.72),-Math.cos(.72)),nv=new U(0,Math.cos(.72),Math.sin(.72)),iv=new U(1,0,0),JS=new U(0,ac+1.55,-9.5).addScaledVector(Mf,95),$S=new Ln().setFromRotationMatrix(new xt().makeBasis(iv,nv,Mf.clone().negate())),KS=new Ln,QS=new U(0,0,1);var uf=-1,Yn=null,yn=null,Bn=!1,qh=null,Vh=null,Ts=vi("#snd"),sc=vi("#svol"),Sf=()=>+(localStorage.getItem("pluffVol")??.7);async function df(){yn||(yn=new(window.AudioContext||window.webkitAudioContext));try{await yn.resume()}catch{}if(!Yn){Vh=Vh||import("./audio-KHYKCN2U.js");let{createEngine:i}=await Vh,e=yn.createDynamicsCompressor();e.connect(yn.destination),Yn=i(yn,e)}Bn=!0,Yn.setVolume(Sf()*.9),clearInterval(qh),qh=setInterval(()=>{Bn&&yn.state==="running"&&Yn.schedule(yn.currentTime,yn.currentTime+1.2)},400),bf()}function sv(){Bn=!1,Yn&&Yn.setVolume(0),clearInterval(qh),setTimeout(()=>{!Bn&&yn&&yn.suspend()},600),bf()}function bf(){Ts&&(Ts.setAttribute("aria-pressed",Bn),Ts.querySelector("span").textContent=Bn?"Sound on":"Sound off",document.body.classList.toggle("snd-on",Bn))}if(Ts&&(Ts.addEventListener("click",()=>{let i=!Bn;localStorage.setItem("pluffSound",i?"1":"0"),Ts.classList.remove("armed"),i?df():sv()}),sc.value=Sf(),sc.addEventListener("input",()=>{localStorage.setItem("pluffVol",sc.value),Yn&&Bn&&Yn.setVolume(+sc.value*.9)}),localStorage.getItem("pluffSound")==="1")){let i=()=>{removeEventListener("pointerdown",i,!0),removeEventListener("keydown",i,!0),Bn||df()};addEventListener("pointerdown",i,!0),addEventListener("keydown",i,!0),Ts.classList.add("armed")}document.addEventListener("visibilitychange",()=>{yn&&(document.hidden?yn.suspend():Bn&&yn.resume())});function Ef(i){if(requestAnimationFrame(Ef),document.hidden||!Qi&&++ev%2)return;let e=Math.min(.1,(i-lf)/1e3||.016);lf=i,sf||(ji.value+=e);let t=ji.value;Hh++,Ga||(Ga=i),i-Ga>=1e3&&(window.__fps=Hh*1e3/(i-Ga),Hh=0,Ga=i,window.__fps<24&&zt&&!ns.get("q")&&(cf?Xn&&window.__fps<20&&(Xn=null):(cf=!0,Sn.setPixelRatio(1),kh()))),Ss.material.uniforms.time.value=t*.6;let n=vi(".sheet").offsetTop||innerHeight,s=Wh??Math.min(1,scrollY/Math.max(1,n-innerHeight*.95)),r=Ht(.12,.9,s),a=Ht(.55,1,s);document.body.style.setProperty("--n",r.toFixed(3));let o=vi(".sheet").getBoundingClientRect().top,l=innerHeight;Qi=o>l*.5;let h=(vi(".sheet h2")||vi(".sheet")).getBoundingClientRect().top>l*1.02;if(document.body.classList.toggle("lookup",a>.6&&Qi&&h),document.body.classList.toggle("offscene",!Qi),!Qi&&es&&(es=null,wr.classList.remove("on"),Xa.style.cursor=""),Math.abs(r-uf)>.001){uf=r,Er.setFromSphericalCoords(1,Nn.degToRad(90-Mn(3.2,-10,r)),Nn.degToRad(206)),Cr.sunPosition.value.copy(Er),Sn.toneMappingExposure=Mn(zt?.32:.4,zt?.85:.95,r),br(rc.color,"sky",r),br(rc.groundColor,"gnd",r),rc.intensity=Mn(1.7,.55,r),br(qn.color,"dl",r),qn.intensity=Mn(3.2,.5,r),qn.position.copy(r<.5?Er:Xh).multiplyScalar(80),br(Pt.fog.color,"fog",r),Pt.environmentIntensity=Mn(.6,.12,r);let m=Ss.material.uniforms;m.sunDirection.value.copy(Er).lerp(Xh,Ht(.3,.7,r)).normalize(),br(m.sunColor.value,"wsun",r),br(m.waterColor.value,"wcol",r),gf.emissiveIntensity=Mn(1.5,4.5,r),_f.forEach(b=>b.intensity=Mn(1.5,2,r)),xf.uniforms.glow.value=r*.35,vf.forEach(b=>{var _;(_=b.userData).o??(_.o=b.opacity),b.opacity=b.userData.o*Math.pow(1-r,2)}),wn.setNight(r,Er)}Ms.pts.material.opacity=(.15+r*.85)*(.6+.4*Math.sin(t*2)),Ms.pts.material.size=.3;let p=Mn(19,-1,Ht(0,.8,s)),u=sf?0:Math.sin(t*1.1)*.03+Math.sin(t*.37)*.05;{let m=Wh!==null?1:.06;Oh+=(oc-.12*(1-a)-.42*Ht(.2,.55,s)*(1-a)-Oh)*m,zh+=(lc+a*(hn.aspect<1?.46:.345)-zh)*m}hn.position.set(Math.sin(t*.2)*.08,ac+1.55+u,p),hn.rotation.set(zh-.02,Oh,Math.sin(t*.5)*.004,"YXZ"),Rr==="wild"&&Es?(hn.position.set(3,ac+1.7,-20.5),hn.lookAt(Es.wildFocus())):Rr&&wn&&hn.lookAt(wn.focus(Rr)),Es&&Es.update(t,e,r);let d=Ms.p;for(let m=0;m<d.length;m+=3)d[m]=Ms.base[m]+Math.sin(t*.4+m)*.8,d[m+1]=Ms.base[m+1]+Math.sin(t*.7+m*.3)*.4;Ms.g.attributes.position.needsUpdate=!0,wn.update(t,e,es),Yn&&Bn&&(wn.onSling||(wn.onSling=m=>{Bn&&Qi&&Yn.whoosh(yn.currentTime+.05,-.5+m*.5)}),Yn.setNight(r),Yn.setLook(Qi?a:0)),Wa&&(Sr.copy(Er).multiplyScalar(1e3).add(hn.position).project(hn),Wa.uniforms.sunUv.value.set(Sr.x*.5+.5,Sr.y*.5+.5),Wa.uniforms.amt.value=(Sr.z<1?.25*Math.max(0,1-Math.hypot(Sr.x,Sr.y)/2.2):0)*(1-r)),Xn?Xn.render():Sn.render(Pt,hn)}(async()=>{try{await Q_(),Xh=wn.moonDir,j_(),kh(),addEventListener("resize",kh),Sn.compile(Pt,hn),await Wn(1),requestAnimationFrame(Ef),setTimeout(()=>{ff.classList.add("done"),document.body.classList.add("ready"),ns.has("card")&&window.openCard(+ns.get("card"))},350)}catch(i){console.error(i),pf()}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
