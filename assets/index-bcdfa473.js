(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bs="150",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dl=0,to=1,pl=2,Aa=1,ml=2,Xi=3,Dn=0,We=1,Ln=2,Rn=0,Ei=1,eo=2,no=3,io=4,gl=5,Si=100,_l=101,xl=102,ro=103,so=104,vl=200,yl=201,bl=202,Sl=203,Ca=204,La=205,Ml=206,wl=207,El=208,Tl=209,Al=210,Cl=0,Ll=1,Pl=2,Cs=3,Rl=4,Dl=5,Il=6,Nl=7,Pa=0,Fl=1,Ol=2,Sn=0,zl=1,kl=2,Ul=3,Bl=4,Gl=5,Ra=300,Li=301,Pi=302,Ls=303,Ps=304,Or=306,Rs=1e3,nn=1001,Ds=1002,Ie=1003,oo=1004,Xr=1005,Ke=1006,Vl=1007,$i=1008,Qn=1009,Hl=1010,Wl=1011,Da=1012,ql=1013,Jn=1014,$n=1015,Ki=1016,Xl=1017,Yl=1018,Ti=1020,Zl=1021,rn=1023,Jl=1024,$l=1025,Kn=1026,Ri=1027,Kl=1028,jl=1029,Ql=1030,tc=1031,ec=1033,Yr=33776,Zr=33777,Jr=33778,$r=33779,ao=35840,lo=35841,co=35842,uo=35843,nc=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,xo=37812,vo=37813,yo=37814,bo=37815,So=37816,Mo=37817,wo=37818,Eo=37819,To=37820,Ao=37821,Kr=36492,ic=36283,Co=36284,Lo=36285,Po=36286,ti=3e3,ae=3001,rc=3200,sc=3201,oc=0,ac=1,cn="srgb",ji="srgb-linear",Ia="display-p3",jr=7680,lc=519,Ro=35044,Do="300 es",Is=1035;class ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Io=180/Math.PI;function Ii(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[r&255]+Ee[r>>8&255]+Ee[r>>16&255]+Ee[r>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Ce(r,t,e){return Math.max(t,Math.min(e,r))}function cc(r,t){return(r%t+t)%t}function ts(r,t,e){return(1-e)*r+e*t}function No(r){return(r&r-1)===0&&r!==0}function uc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function rr(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Be(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=i[0],d=i[3],x=i[6],E=i[1],_=i[4],b=i[7],w=i[2],L=i[5],F=i[8];return s[0]=o*p+a*E+c*w,s[3]=o*d+a*_+c*L,s[6]=o*x+a*b+c*F,s[1]=l*p+u*E+h*w,s[4]=l*d+u*_+h*L,s[7]=l*x+u*b+h*F,s[2]=f*p+m*E+g*w,s[5]=f*d+m*_+g*L,s[8]=f*x+m*b+g*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=h*p,t[1]=(i*l-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=f*p,t[4]=(u*e-i*c)*p,t[5]=(i*s-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(es.makeScale(t,e)),this}rotate(t){return this.premultiply(es.makeRotation(-t)),this}translate(t,e){return this.premultiply(es.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const es=new Ne;function Na(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class In{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(h!==p||c!==f||l!==m||u!==g){let d=1-a;const x=c*f+l*m+u*g+h*p,E=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const w=Math.sqrt(_),L=Math.atan2(w,x*E);d=Math.sin(d*L)/w,a=Math.sin(a*L)/w}const b=a*E;if(c=c*d+f*b,l=l*d+m*b,u=u*d+g*b,h=h*d+p*b,d===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-a*m,t[e+2]=l*g+u*m+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-s*i,h=c*i+s*n-o*e,f=-s*e-o*n-a*i;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ns.copy(this).projectOnVector(t),this.sub(ns)}reflect(t){return this.sub(ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ns=new I,Fo=new In;function Ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const hc=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fc=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Pn=new I;function dc(r){return r.convertSRGBToLinear(),Pn.set(r.r,r.g,r.b).applyMatrix3(fc),r.setRGB(Pn.x,Pn.y,Pn.z)}function pc(r){return Pn.set(r.r,r.g,r.b).applyMatrix3(hc),r.setRGB(Pn.x,Pn.y,Pn.z).convertLinearToSRGB()}const mc={[ji]:r=>r,[cn]:r=>r.convertSRGBToLinear(),[Ia]:dc},gc={[ji]:r=>r,[cn]:r=>r.convertLinearToSRGB(),[Ia]:pc},Re={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ji},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=mc[t],i=gc[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let ai;class Fa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=Ir("canvas")),ai.width=t.width,ai.height=t.height;const n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Oa{constructor(t=null){this.isSource=!0,this.uuid=Ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(rs(i[o].image)):s.push(rs(i[o]))}else s=rs(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function rs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _c=0;class qe extends ri{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=nn,i=nn,s=Ke,o=$i,a=rn,c=Qn,l=qe.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Ii(),this.name="",this.source=new Oa(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ra)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case Ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case Ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Ra;qe.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],p=c[2],d=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,b=(m+1)/2,w=(x+1)/2,L=(u+f)/4,F=(h+p)/4,y=(g+d)/4;return _>b&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=L/n,s=F/n):b>w?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=L/i,s=y/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=F/s,i=y/s),this.set(n,i,s,e),this}let E=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(h-p)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ei extends ri{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Oa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class za extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xc extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)kn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(kn)}else n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox),ss.applyMatrix4(t.matrixWorld),this.union(ss);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),sr.subVectors(this.max,Oi),li.subVectors(t.a,Oi),ci.subVectors(t.b,Oi),ui.subVectors(t.c,Oi),wn.subVectors(ci,li),En.subVectors(ui,ci),Un.subVectors(li,ui);let e=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Un.z,Un.y,wn.z,0,-wn.x,En.z,0,-En.x,Un.z,0,-Un.x,-wn.y,wn.x,0,-En.y,En.x,0,-Un.y,Un.x,0];return!os(e,li,ci,ui,sr)||(e=[1,0,0,0,1,0,0,0,1],!os(e,li,ci,ui,sr))?!1:(or.crossVectors(wn,En),e=[or.x,or.y,or.z],os(e,li,ci,ui,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,ss=new nr,li=new I,ci=new I,ui=new I,wn=new I,En=new I,Un=new I,Oi=new I,sr=new I,or=new I,Bn=new I;function os(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bn.fromArray(r,s);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),l=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const vc=new nr,zi=new I,as=new I;class Gs{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(as.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(as)),this.expandByPoint(zi.copy(t.center).sub(as))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new I,ls=new I,ar=new I,Tn=new I,cs=new I,lr=new I,us=new I;class yc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ls.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(ls);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=Tn.dot(this.direction),c=-Tn.dot(ar),l=Tn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ls).addScaledVector(ar,f),m}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,i,s){cs.subVectors(e,t),lr.subVectors(n,t),us.crossVectors(cs,lr);let o=this.direction.dot(us),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,t);const c=a*this.direction.dot(lr.crossVectors(Tn,lr));if(c<0)return null;const l=a*this.direction.dot(cs.cross(Tn));if(l<0||c+l>o)return null;const u=-a*Tn.dot(us);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,c,l,u,h,f,m,g,p,d){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hi.setFromMatrixColumn(t,0).length(),s=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-p*l,e[9]=-a*c,e[2]=p-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,p=l*h;e[0]=f+p*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=p+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,p=l*h;e[0]=f-p*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=p-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+p,e[1]=c*h,e[5]=p*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=p-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-p*h}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+p,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=p*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bc,t,Sc)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),An.crossVectors(n,Ge),An.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),An.crossVectors(n,Ge)),An.normalize(),cr.crossVectors(Ge,An),i[0]=An.x,i[4]=cr.x,i[8]=Ge.x,i[1]=An.y,i[5]=cr.y,i[9]=Ge.y,i[2]=An.z,i[6]=cr.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],x=n[14],E=n[3],_=n[7],b=n[11],w=n[15],L=i[0],F=i[4],y=i[8],T=i[12],O=i[1],J=i[5],tt=i[9],V=i[13],z=i[2],X=i[6],j=i[10],rt=i[14],$=i[3],st=i[7],et=i[11],Et=i[15];return s[0]=o*L+a*O+c*z+l*$,s[4]=o*F+a*J+c*X+l*st,s[8]=o*y+a*tt+c*j+l*et,s[12]=o*T+a*V+c*rt+l*Et,s[1]=u*L+h*O+f*z+m*$,s[5]=u*F+h*J+f*X+m*st,s[9]=u*y+h*tt+f*j+m*et,s[13]=u*T+h*V+f*rt+m*Et,s[2]=g*L+p*O+d*z+x*$,s[6]=g*F+p*J+d*X+x*st,s[10]=g*y+p*tt+d*j+x*et,s[14]=g*T+p*V+d*rt+x*Et,s[3]=E*L+_*O+b*z+w*$,s[7]=E*F+_*J+b*X+w*st,s[11]=E*y+_*tt+b*j+w*et,s[15]=E*T+_*V+b*rt+w*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],x=t[15];return g*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*m-n*c*m)+p*(+e*c*m-e*l*f+s*o*f-i*o*m+i*l*u-s*c*u)+d*(+e*l*h-e*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+x*(-i*a*u-e*c*h+e*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],x=t[15],E=h*d*l-p*f*l+p*c*m-a*d*m-h*c*x+a*f*x,_=g*f*l-u*d*l-g*c*m+o*d*m+u*c*x-o*f*x,b=u*p*l-g*h*l+g*a*m-o*p*m-u*a*x+o*h*x,w=g*h*c-u*p*c-g*a*f+o*p*f+u*a*d-o*h*d,L=e*E+n*_+i*b+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return t[0]=E*F,t[1]=(p*f*s-h*d*s-p*i*m+n*d*m+h*i*x-n*f*x)*F,t[2]=(a*d*s-p*c*s+p*i*l-n*d*l-a*i*x+n*c*x)*F,t[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*m-n*c*m)*F,t[4]=_*F,t[5]=(u*d*s-g*f*s+g*i*m-e*d*m-u*i*x+e*f*x)*F,t[6]=(g*c*s-o*d*s-g*i*l+e*d*l+o*i*x-e*c*x)*F,t[7]=(o*f*s-u*c*s+u*i*l-e*f*l-o*i*m+e*c*m)*F,t[8]=b*F,t[9]=(g*h*s-u*p*s-g*n*m+e*p*m+u*n*x-e*h*x)*F,t[10]=(o*p*s-g*a*s+g*n*l-e*p*l-o*n*x+e*a*x)*F,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*m-e*a*m)*F,t[12]=w*F,t[13]=(u*p*i-g*h*i+g*n*f-e*p*f-u*n*d+e*h*d)*F,t[14]=(g*a*i-o*p*i-g*n*c+e*p*c+o*n*d-e*a*d)*F,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*f+e*a*f)*F,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,m=s*u,g=s*h,p=o*u,d=o*h,x=a*h,E=c*l,_=c*u,b=c*h,w=n.x,L=n.y,F=n.z;return i[0]=(1-(p+x))*w,i[1]=(m+b)*w,i[2]=(g-_)*w,i[3]=0,i[4]=(m-b)*L,i[5]=(1-(f+x))*L,i[6]=(d+E)*L,i[7]=0,i[8]=(g+_)*F,i[9]=(d-E)*F,i[10]=(1-(f+p))*F,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=hi.set(i[0],i[1],i[2]).length();const o=hi.set(i[4],i[5],i[6]).length(),a=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);const l=1/s,u=1/o,h=1/a;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=h,Qe.elements[9]*=h,Qe.elements[10]*=h,e.setFromRotationMatrix(Qe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-s),h=(e+t)*c,f=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new I,Qe=new Me,bc=new I(0,0,0),Sc=new I(1,1,1),An=new I,cr=new I,Ge=new I,Oo=new Me,zo=new In;class zr{constructor(t=0,e=0,n=0,i=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zo.setFromEuler(this),this.setFromQuaternion(zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mc=0;const ko=new I,fi=new In,_n=new Me,ur=new I,ki=new I,wc=new I,Ec=new In,Uo=new I(1,0,0),Bo=new I(0,1,0),Go=new I(0,0,1),Tc={type:"added"},Vo={type:"removed"};class Fe extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new I,e=new zr,n=new In,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new Ne}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(Go,t)}translateOnAxis(t,e){return ko.copy(t).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(Go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ki,ur,this.up):_n.lookAt(ur,ki,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(_n),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Tc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Vo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Ec,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new I,xn=new I,hs=new I,vn=new I,di=new I,pi=new I,Ho=new I,fs=new I,ds=new I,ps=new I;class bn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){tn.subVectors(i,e),xn.subVectors(n,e),hs.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(xn),c=tn.dot(hs),l=xn.dot(xn),u=xn.dot(hs),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,vn),c.set(0,0),c.addScaledVector(s,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(a,vn.z),c}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),xn.subVectors(t,e),tn.cross(xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return bn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;di.subVectors(i,n),pi.subVectors(s,n),fs.subVectors(t,n);const c=di.dot(fs),l=pi.dot(fs);if(c<=0&&l<=0)return e.copy(n);ds.subVectors(t,i);const u=di.dot(ds),h=pi.dot(ds);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(di,o);ps.subVectors(t,s);const m=di.dot(ps),g=pi.dot(ps);if(g>=0&&m<=g)return e.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(pi,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Ho.subVectors(s,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Ho,a);const x=1/(d+p+f);return o=p*x,a=f*x,e.copy(n).addScaledVector(di,o).addScaledVector(pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ac=0;class kr extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Ei,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ca,this.blendDst=La,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},hr={h:0,s:0,l:0};function ms(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Re.workingColorSpace){if(t=cc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ms(o,s,t+1/3),this.g=ms(o,s,t),this.b=ms(o,s,t-1/3)}return Re.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Re.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Re.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Re.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Re.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Ua[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Re.fromWorkingColorSpace(Te.copy(this),t),Ce(Te.r*255,0,255)<<16^Ce(Te.g*255,0,255)<<8^Ce(Te.b*255,0,255)<<0}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,s=Te.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Re.workingColorSpace){return Re.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=cn){Re.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(hr);const n=ts(en.h,hr.h,e),i=ts(en.s,hr.s,e),s=ts(en.l,hr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new se;se.NAMES=Ua;class Nr extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new I,fr=new mt;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ro,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ro&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ba extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ga extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Mn extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cc=0;const Ye=new Me,gs=new Fe,mi=new I,Ve=new nr,Ui=new nr,Se=new I;class Nn extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Na(t)?Ga:Ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return gs.lookAt(t),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ve.min,Ui.min),Ve.expandByPoint(Se),Se.addVectors(Ve.max,Ui.max),Ve.expandByPoint(Se)):(Ve.expandByPoint(Ui.min),Ve.expandByPoint(Ui.max))}Ve.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Se.fromBufferAttribute(a,l),c&&(mi.fromBufferAttribute(t,l),Se.add(mi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let O=0;O<a;O++)l[O]=new I,u[O]=new I;const h=new I,f=new I,m=new I,g=new mt,p=new mt,d=new mt,x=new I,E=new I;function _(O,J,tt){h.fromArray(i,O*3),f.fromArray(i,J*3),m.fromArray(i,tt*3),g.fromArray(o,O*2),p.fromArray(o,J*2),d.fromArray(o,tt*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const V=1/(p.x*d.y-d.x*p.y);isFinite(V)&&(x.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(V),E.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(V),l[O].add(x),l[J].add(x),l[tt].add(x),u[O].add(E),u[J].add(E),u[tt].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let O=0,J=b.length;O<J;++O){const tt=b[O],V=tt.start,z=tt.count;for(let X=V,j=V+z;X<j;X+=3)_(n[X+0],n[X+1],n[X+2])}const w=new I,L=new I,F=new I,y=new I;function T(O){F.fromArray(s,O*3),y.copy(F);const J=l[O];w.copy(J),w.sub(F.multiplyScalar(F.dot(J))).normalize(),L.crossVectors(y,J);const V=L.dot(u[O])<0?-1:1;c[O*4]=w.x,c[O*4+1]=w.y,c[O*4+2]=w.z,c[O*4+3]=V}for(let O=0,J=b.length;O<J;++O){const tt=b[O],V=tt.start,z=tt.count;for(let X=V,j=V+z;X<j;X+=3)T(n[X+0]),T(n[X+1]),T(n[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let x=0;x<u;x++)f[g++]=l[m++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Nn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new Me,ln=new yc,dr=new Gs,qo=new I,Bi=new I,Gi=new I,Vi=new I,_s=new I,pr=new I,mr=new mt,gr=new mt,_r=new mt,xs=new I,xr=new I;class He extends Fe{constructor(t=new Nn,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){pr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(_s.fromBufferAttribute(h,t),o?pr.addScaledVector(_s,u):pr.addScaledVector(_s.sub(e),u))}e.add(pr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),ln.copy(t.ray).recast(t.near),dr.containsPoint(ln.origin)===!1&&(ln.intersectSphere(dr,qo)===null||ln.origin.distanceToSquared(qo)>(t.far-t.near)**2))||(Wo.copy(s).invert(),ln.copy(t.ray).applyMatrix4(Wo),n.boundingBox!==null&&ln.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],d=i[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=x,b=E;_<b;_+=3){const w=a.getX(_),L=a.getX(_+1),F=a.getX(_+2);o=vr(this,d,t,ln,l,u,w,L,F),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=m,d=g;p<d;p+=3){const x=a.getX(p),E=a.getX(p+1),_=a.getX(p+2);o=vr(this,i,t,ln,l,u,x,E,_),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],d=i[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=x,b=E;_<b;_+=3){const w=_,L=_+1,F=_+2;o=vr(this,d,t,ln,l,u,w,L,F),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=m,d=g;p<d;p+=3){const x=p,E=p+1,_=p+2;o=vr(this,i,t,ln,l,u,x,E,_),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function Lc(r,t,e,n,i,s,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Dn,a),c===null)return null;xr.copy(a),xr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:r}}function vr(r,t,e,n,i,s,o,a,c){r.getVertexPosition(o,Bi),r.getVertexPosition(a,Gi),r.getVertexPosition(c,Vi);const l=Lc(r,t,e,n,Bi,Gi,Vi,xs);if(l){i&&(mr.fromBufferAttribute(i,o),gr.fromBufferAttribute(i,a),_r.fromBufferAttribute(i,c),l.uv=bn.getUV(xs,Bi,Gi,Vi,mr,gr,_r,new mt)),s&&(mr.fromBufferAttribute(s,o),gr.fromBufferAttribute(s,a),_r.fromBufferAttribute(s,c),l.uv2=bn.getUV(xs,Bi,Gi,Vi,mr,gr,_r,new mt));const u={a:o,b:a,c,normal:new I,materialIndex:0};bn.getNormal(Bi,Gi,Vi,u.normal),l.face=u}return l}class ir extends Nn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Mn(l,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(h,2));function g(p,d,x,E,_,b,w,L,F,y,T){const O=b/F,J=w/y,tt=b/2,V=w/2,z=L/2,X=F+1,j=y+1;let rt=0,$=0;const st=new I;for(let et=0;et<j;et++){const Et=et*J-V;for(let H=0;H<X;H++){const nt=H*O-tt;st[p]=nt*E,st[d]=Et*_,st[x]=z,l.push(st.x,st.y,st.z),st[p]=0,st[d]=0,st[x]=L>0?1:-1,u.push(st.x,st.y,st.z),h.push(H/F),h.push(1-et/y),rt+=1}}for(let et=0;et<y;et++)for(let Et=0;Et<F;Et++){const H=f+Et+X*et,nt=f+Et+X*(et+1),ht=f+(Et+1)+X*(et+1),B=f+(Et+1)+X*et;c.push(H,nt,B),c.push(nt,ht,B),$+=6}a.addGroup(m,$,T),m+=$,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(r){const t={};for(let e=0;e<r.length;e++){const n=Di(r[e]);for(const i in n)t[i]=n[i]}return t}function Pc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Va(r){return r.getRenderTarget()===null&&r.outputEncoding===ae?cn:ji}const Rc={clone:Di,merge:De};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Pc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ha extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends Ha{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class Nc extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new je(gi,_i,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new je(gi,_i,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new je(gi,_i,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new je(gi,_i,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new je(gi,_i,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new je(gi,_i,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Sn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Wa extends qe{constructor(t,e,n,i,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fc extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ir(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Rn});s.uniforms.tEquirect.value=e;const o=new He(i,s),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Ke),new Nc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const vs=new I,Oc=new I,zc=new Ne;class Xn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vs.subVectors(n,e).cross(Oc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zc.getNormalMatrix(t),i=this.coplanarPoint(vs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Gs,yr=new I;class qa{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,s=new Xn,o=new Xn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],x=n[13],E=n[14],_=n[15];return e[0].setComponents(a-i,h-c,p-f,_-d).normalize(),e[1].setComponents(a+i,h+c,p+f,_+d).normalize(),e[2].setComponents(a+s,h+l,p+m,_+x).normalize(),e[3].setComponents(a-s,h-l,p-m,_-x).normalize(),e[4].setComponents(a-o,h-u,p-g,_-E).normalize(),e[5].setComponents(a+o,h+u,p+g,_+E).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(yr.x=i.normal.x>0?t.max.x:t.min.x,yr.y=i.normal.y>0?t.max.y:t.min.y,yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xa(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function kc(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,f):(e?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Ur extends Nn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,m=[],g=[],p=[],d=[];for(let x=0;x<u;x++){const E=x*f-o;for(let _=0;_<l;_++){const b=_*h-s;g.push(b,-E,0),p.push(0,0,1),d.push(_/a),d.push(1-x/c)}}for(let x=0;x<c;x++)for(let E=0;E<a;E++){const _=E+l*x,b=E+l*(x+1),w=E+1+l*(x+1),L=E+1+l*x;m.push(_,b,L),m.push(b,w,L)}this.setIndex(m),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(p,3)),this.setAttribute("uv",new Mn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qc="vec3 transformed = vec3( position );",Xc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Zc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Jc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,su=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
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
}`,Mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Cu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$u=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,oh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mh=`#ifdef USE_SKINNING
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
#endif`,wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Th=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ch=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Lh=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ph=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ih=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Nh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kh=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Wh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Xh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$h=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,tf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,nf=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,of=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ht={alphamap_fragment:Uc,alphamap_pars_fragment:Bc,alphatest_fragment:Gc,alphatest_pars_fragment:Vc,aomap_fragment:Hc,aomap_pars_fragment:Wc,begin_vertex:qc,beginnormal_vertex:Xc,bsdfs:Yc,iridescence_fragment:Zc,bumpmap_pars_fragment:Jc,clipping_planes_fragment:$c,clipping_planes_pars_fragment:Kc,clipping_planes_pars_vertex:jc,clipping_planes_vertex:Qc,color_fragment:tu,color_pars_fragment:eu,color_pars_vertex:nu,color_vertex:iu,common:ru,cube_uv_reflection_fragment:su,defaultnormal_vertex:ou,displacementmap_pars_vertex:au,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:uu,encodings_fragment:hu,encodings_pars_fragment:fu,envmap_fragment:du,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Cu,envmap_vertex:_u,fog_vertex:xu,fog_pars_vertex:vu,fog_fragment:yu,fog_pars_fragment:bu,gradientmap_pars_fragment:Su,lightmap_fragment:Mu,lightmap_pars_fragment:wu,lights_lambert_fragment:Eu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Au,lights_toon_fragment:Lu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Ru,lights_phong_pars_fragment:Du,lights_physical_fragment:Iu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:zu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Uu,logdepthbuf_pars_vertex:Bu,logdepthbuf_vertex:Gu,map_fragment:Vu,map_pars_fragment:Hu,map_particle_fragment:Wu,map_particle_pars_fragment:qu,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:Yu,morphcolor_vertex:Zu,morphnormal_vertex:Ju,morphtarget_pars_vertex:$u,morphtarget_vertex:Ku,normal_fragment_begin:ju,normal_fragment_maps:Qu,normal_pars_fragment:th,normal_pars_vertex:eh,normal_vertex:nh,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:rh,clearcoat_normal_fragment_maps:sh,clearcoat_pars_fragment:oh,iridescence_pars_fragment:ah,output_fragment:lh,packing:ch,premultiplied_alpha_fragment:uh,project_vertex:hh,dithering_fragment:fh,dithering_pars_fragment:dh,roughnessmap_fragment:ph,roughnessmap_pars_fragment:mh,shadowmap_pars_fragment:gh,shadowmap_pars_vertex:_h,shadowmap_vertex:xh,shadowmask_pars_fragment:vh,skinbase_vertex:yh,skinning_pars_vertex:bh,skinning_vertex:Sh,skinnormal_vertex:Mh,specularmap_fragment:wh,specularmap_pars_fragment:Eh,tonemapping_fragment:Th,tonemapping_pars_fragment:Ah,transmission_fragment:Ch,transmission_pars_fragment:Lh,uv_pars_fragment:Ph,uv_pars_vertex:Rh,uv_vertex:Dh,uv2_pars_fragment:Ih,uv2_pars_vertex:Nh,uv2_vertex:Fh,worldpos_vertex:Oh,background_vert:zh,background_frag:kh,backgroundCube_vert:Uh,backgroundCube_frag:Bh,cube_vert:Gh,cube_frag:Vh,depth_vert:Hh,depth_frag:Wh,distanceRGBA_vert:qh,distanceRGBA_frag:Xh,equirect_vert:Yh,equirect_frag:Zh,linedashed_vert:Jh,linedashed_frag:$h,meshbasic_vert:Kh,meshbasic_frag:jh,meshlambert_vert:Qh,meshlambert_frag:tf,meshmatcap_vert:ef,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:sf,meshphong_vert:of,meshphong_frag:af,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:uf,meshtoon_frag:hf,points_vert:ff,points_frag:df,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},ft={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ne},uv2Transform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}}},un={basic:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new se(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:De([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:De([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new se(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:De([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:De([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:De([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:De([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:De([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:De([ft.lights,ft.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};un.physical={uniforms:De([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new mt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const br={r:0,b:0,g:0};function xf(r,t,e,n,i,s,o){const a=new se(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function g(d,x){let E=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_));const b=r.xr,w=b.getSession&&b.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?p(a,c):_&&_.isColor&&(p(_,1),E=!0),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Or)?(u===void 0&&(u=new He(new ir(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Di(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,F,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_.encoding!==ae,(h!==_||f!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new He(new Ur(2,2),new ni({name:"BackgroundMaterial",uniforms:Di(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_.encoding!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,x){d.getRGB(br,Va(r)),n.buffers.color.setClear(br.r,br.g,br.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(d,x=1){a.set(d),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:g}}function vf(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,u=!1;function h(z,X,j,rt,$){let st=!1;if(o){const et=p(rt,j,X);l!==et&&(l=et,m(l.object)),st=x(z,rt,j,$),st&&E(z,rt,j,$)}else{const et=X.wireframe===!0;(l.geometry!==rt.id||l.program!==j.id||l.wireframe!==et)&&(l.geometry=rt.id,l.program=j.id,l.wireframe=et,st=!0)}$!==null&&e.update($,34963),(st||u)&&(u=!1,y(z,X,j,rt),$!==null&&r.bindBuffer(34963,e.get($).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,X,j){const rt=j.wireframe===!0;let $=a[z.id];$===void 0&&($={},a[z.id]=$);let st=$[X.id];st===void 0&&(st={},$[X.id]=st);let et=st[rt];return et===void 0&&(et=d(f()),st[rt]=et),et}function d(z){const X=[],j=[],rt=[];for(let $=0;$<i;$++)X[$]=0,j[$]=0,rt[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:rt,object:z,attributes:{},index:null}}function x(z,X,j,rt){const $=l.attributes,st=X.attributes;let et=0;const Et=j.getAttributes();for(const H in Et)if(Et[H].location>=0){const ht=$[H];let B=st[H];if(B===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(B=z.instanceColor)),ht===void 0||ht.attribute!==B||B&&ht.data!==B.data)return!0;et++}return l.attributesNum!==et||l.index!==rt}function E(z,X,j,rt){const $={},st=X.attributes;let et=0;const Et=j.getAttributes();for(const H in Et)if(Et[H].location>=0){let ht=st[H];ht===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(ht=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(ht=z.instanceColor));const B={};B.attribute=ht,ht&&ht.data&&(B.data=ht.data),$[H]=B,et++}l.attributes=$,l.attributesNum=et,l.index=rt}function _(){const z=l.newAttributes;for(let X=0,j=z.length;X<j;X++)z[X]=0}function b(z){w(z,0)}function w(z,X){const j=l.newAttributes,rt=l.enabledAttributes,$=l.attributeDivisors;j[z]=1,rt[z]===0&&(r.enableVertexAttribArray(z),rt[z]=1),$[z]!==X&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,X),$[z]=X)}function L(){const z=l.newAttributes,X=l.enabledAttributes;for(let j=0,rt=X.length;j<rt;j++)X[j]!==z[j]&&(r.disableVertexAttribArray(j),X[j]=0)}function F(z,X,j,rt,$,st){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(z,X,j,$,st):r.vertexAttribPointer(z,X,j,rt,$,st)}function y(z,X,j,rt){if(n.isWebGL2===!1&&(z.isInstancedMesh||rt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const $=rt.attributes,st=j.getAttributes(),et=X.defaultAttributeValues;for(const Et in st){const H=st[Et];if(H.location>=0){let nt=$[Et];if(nt===void 0&&(Et==="instanceMatrix"&&z.instanceMatrix&&(nt=z.instanceMatrix),Et==="instanceColor"&&z.instanceColor&&(nt=z.instanceColor)),nt!==void 0){const ht=nt.normalized,B=nt.itemSize,St=e.get(nt);if(St===void 0)continue;const xt=St.buffer,Mt=St.type,wt=St.bytesPerElement;if(nt.isInterleavedBufferAttribute){const At=nt.data,zt=At.stride,K=nt.offset;if(At.isInstancedInterleavedBuffer){for(let Q=0;Q<H.locationSize;Q++)w(H.location+Q,At.meshPerAttribute);z.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Q=0;Q<H.locationSize;Q++)b(H.location+Q);r.bindBuffer(34962,xt);for(let Q=0;Q<H.locationSize;Q++)F(H.location+Q,B/H.locationSize,Mt,ht,zt*wt,(K+B/H.locationSize*Q)*wt)}else{if(nt.isInstancedBufferAttribute){for(let At=0;At<H.locationSize;At++)w(H.location+At,nt.meshPerAttribute);z.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let At=0;At<H.locationSize;At++)b(H.location+At);r.bindBuffer(34962,xt);for(let At=0;At<H.locationSize;At++)F(H.location+At,B/H.locationSize,Mt,ht,B*wt,B/H.locationSize*At*wt)}}else if(et!==void 0){const ht=et[Et];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(H.location,ht);break;case 3:r.vertexAttrib3fv(H.location,ht);break;case 4:r.vertexAttrib4fv(H.location,ht);break;default:r.vertexAttrib1fv(H.location,ht)}}}}L()}function T(){tt();for(const z in a){const X=a[z];for(const j in X){const rt=X[j];for(const $ in rt)g(rt[$].object),delete rt[$];delete X[j]}delete a[z]}}function O(z){if(a[z.id]===void 0)return;const X=a[z.id];for(const j in X){const rt=X[j];for(const $ in rt)g(rt[$].object),delete rt[$];delete X[j]}delete a[z.id]}function J(z){for(const X in a){const j=a[X];if(j[z.id]===void 0)continue;const rt=j[z.id];for(const $ in rt)g(rt[$].object),delete rt[$];delete j[z.id]}}function tt(){V(),u=!0,l!==c&&(l=c,m(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:tt,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:O,releaseStatesOfProgram:J,initAttributes:_,enableAttribute:b,disableUnusedAttributes:L}}function yf(r,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function bf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),x=r.getParameter(36348),E=r.getParameter(36349),_=f>0,b=o||t.has("OES_texture_float"),w=_&&b,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:L}}function Sf(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Xn,a=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!d)s?u(null):l();else{const E=s?0:n,_=E*4;let b=x.clippingState||null;c.value=b,b=u(g,f,_,m);for(let w=0;w!==_;++w)b[w]=e[w];x.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const x=m+p*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<x)&&(d=new Float32Array(x));for(let _=0,b=m;_!==p;++_,b+=4)o.copy(h[_]).applyMatrix4(E,a),o.normal.toArray(d,b),d[b+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function Mf(r){let t=new WeakMap;function e(o,a){return a===Ls?o.mapping=Li:a===Ps&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ls||a===Ps)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fc(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class wf extends Ha{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,Xo=[.125,.215,.35,.446,.526,.582],Zn=20,ys=new wf,Yo=new se;let bs=null;const Yn=(1+Math.sqrt(5))/2,vi=1/Yn,Zo=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Yn,vi),new I(0,Yn,-vi),new I(vi,0,Yn),new I(-vi,0,Yn),new I(Yn,vi,0),new I(-Yn,vi,0)];class Jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){bs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bs),t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ki,format:rn,encoding:ti,depthBuffer:!1},i=$o(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ef(s)),this._blurMaterial=Tf(s,t,e)}return i}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,ys)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Yo),u.toneMapping=Sn,u.autoClear=!1;const m=new Nr({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new He(new ir,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(Yo),p=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):E===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const _=this._cubeSize;Sr(i,E*_,x>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Li||t.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ys)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zo[(i-1)%Zo.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new He(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Zn;d>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Zn}`);const x=[];let E=0;for(let F=0;F<Zn;++F){const y=F/p,T=Math.exp(-y*y/2);x.push(T),F===0?E+=T:F<d&&(E+=2*T)}for(let F=0;F<x.length;F++)x[F]=x[F]/E;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const b=this._sizeLods[i],w=3*b*(i>_-Mi?i-_+Mi:0),L=4*(this._cubeSize-b);Sr(e,w,L,3*b,2*b),c.setRenderTarget(e),c.render(h,ys)}}function Ef(r){const t=[],e=[],n=[];let i=r;const s=r-Mi+1+Xo.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Mi?c=Xo[o-r+Mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,x=1,E=new Float32Array(p*g*m),_=new Float32Array(d*g*m),b=new Float32Array(x*g*m);for(let L=0;L<m;L++){const F=L%3*2/3-1,y=L>2?0:-1,T=[F,y,0,F+2/3,y,0,F+2/3,y+1,0,F,y,0,F+2/3,y+1,0,F,y+1,0];E.set(T,p*g*L),_.set(f,d*g*L);const O=[L,L,L,L,L,L];b.set(O,x*g*L)}const w=new Nn;w.setAttribute("position",new hn(E,p)),w.setAttribute("uv",new hn(_,d)),w.setAttribute("faceIndex",new hn(b,x)),t.push(w),i>Mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $o(r,t,e){const n=new ei(r,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Tf(r,t,e){const n=new Float32Array(Zn),i=new I(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ko(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function jo(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Af(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ls||c===Ps,u=c===Li||c===Pi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Jo(r)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Jo(r));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cf(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lf(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,x=p.length;d<x;d++)t.update(p[d],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let _=0,b=E.length;_<b;_+=3){const w=E[_+0],L=E[_+1],F=E[_+2];f.push(w,L,L,F,F,w)}}else{const E=g.array;p=g.version;for(let _=0,b=E.length/3-1;_<b;_+=3){const w=_+0,L=_+1,F=_+2;f.push(w,L,L,F,F,w)}}const d=new(Na(f)?Ga:Ba)(f,1);d.version=p;const x=s.get(h);x&&t.remove(x),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Pf(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*c),e.update(m,s,1)}function h(f,m,g){if(g===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Rf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Df(r,t){return r[0]-t[0]}function If(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Nf(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new we,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let X=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var m=X;d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let T=0;_===!0&&(T=1),b===!0&&(T=2),w===!0&&(T=3);let O=u.attributes.position.count*T,J=1;O>t.maxTextureSize&&(J=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const tt=new Float32Array(O*J*4*p),V=new za(tt,O,J,p);V.type=$n,V.needsUpdate=!0;const z=T*4;for(let j=0;j<p;j++){const rt=L[j],$=F[j],st=y[j],et=O*J*4*j;for(let Et=0;Et<rt.count;Et++){const H=Et*z;_===!0&&(o.fromBufferAttribute(rt,Et),tt[et+H+0]=o.x,tt[et+H+1]=o.y,tt[et+H+2]=o.z,tt[et+H+3]=0),b===!0&&(o.fromBufferAttribute($,Et),tt[et+H+4]=o.x,tt[et+H+5]=o.y,tt[et+H+6]=o.z,tt[et+H+7]=0),w===!0&&(o.fromBufferAttribute(st,Et),tt[et+H+8]=o.x,tt[et+H+9]=o.y,tt[et+H+10]=o.z,tt[et+H+11]=st.itemSize===4?o.w:1)}}d={count:p,texture:V,size:new mt(O,J)},s.set(u,d),u.addEventListener("dispose",X)}let x=0;for(let _=0;_<f.length;_++)x+=f[_];const E=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];n[u.id]=p}for(let b=0;b<g;b++){const w=p[b];w[0]=b,w[1]=f[b]}p.sort(If);for(let b=0;b<8;b++)b<g&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Df);const d=u.morphAttributes.position,x=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const w=a[b],L=w[0],F=w[1];L!==Number.MAX_SAFE_INTEGER&&F?(d&&u.getAttribute("morphTarget"+b)!==d[L]&&u.setAttribute("morphTarget"+b,d[L]),x&&u.getAttribute("morphNormal"+b)!==x[L]&&u.setAttribute("morphNormal"+b,x[L]),i[b]=F,E+=F):(d&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),x&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const _=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",_),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Ff(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Ya=new qe,Za=new za,Ja=new xc,$a=new Wa,Qo=[],ta=[],ea=new Float32Array(16),na=new Float32Array(9),ia=new Float32Array(4);function Ni(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Qo[i];if(s===void 0&&(s=new Float32Array(i),Qo[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Br(r,t){let e=ta[t];e===void 0&&(e=new Int32Array(t),ta[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Of(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function zf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),ve(e,t)}}function kf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),ve(e,t)}}function Uf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),ve(e,t)}}function Bf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;ia.set(n),r.uniformMatrix2fv(this.addr,!1,ia),ve(e,n)}}function Gf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;na.set(n),r.uniformMatrix3fv(this.addr,!1,na),ve(e,n)}}function Vf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;ea.set(n),r.uniformMatrix4fv(this.addr,!1,ea),ve(e,n)}}function Hf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Wf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2iv(this.addr,t),ve(e,t)}}function qf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3iv(this.addr,t),ve(e,t)}}function Xf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4iv(this.addr,t),ve(e,t)}}function Yf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Zf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2uiv(this.addr,t),ve(e,t)}}function Jf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3uiv(this.addr,t),ve(e,t)}}function $f(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4uiv(this.addr,t),ve(e,t)}}function Kf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ya,i)}function jf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ja,i)}function Qf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$a,i)}function td(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Za,i)}function ed(r){switch(r){case 5126:return Of;case 35664:return zf;case 35665:return kf;case 35666:return Uf;case 35674:return Bf;case 35675:return Gf;case 35676:return Vf;case 5124:case 35670:return Hf;case 35667:case 35671:return Wf;case 35668:case 35672:return qf;case 35669:case 35673:return Xf;case 5125:return Yf;case 36294:return Zf;case 36295:return Jf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return td}}function nd(r,t){r.uniform1fv(this.addr,t)}function id(r,t){const e=Ni(t,this.size,2);r.uniform2fv(this.addr,e)}function rd(r,t){const e=Ni(t,this.size,3);r.uniform3fv(this.addr,e)}function sd(r,t){const e=Ni(t,this.size,4);r.uniform4fv(this.addr,e)}function od(r,t){const e=Ni(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ad(r,t){const e=Ni(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ld(r,t){const e=Ni(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function cd(r,t){r.uniform1iv(this.addr,t)}function ud(r,t){r.uniform2iv(this.addr,t)}function hd(r,t){r.uniform3iv(this.addr,t)}function fd(r,t){r.uniform4iv(this.addr,t)}function dd(r,t){r.uniform1uiv(this.addr,t)}function pd(r,t){r.uniform2uiv(this.addr,t)}function md(r,t){r.uniform3uiv(this.addr,t)}function gd(r,t){r.uniform4uiv(this.addr,t)}function _d(r,t,e){const n=this.cache,i=t.length,s=Br(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ya,s[o])}function xd(r,t,e){const n=this.cache,i=t.length,s=Br(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ja,s[o])}function vd(r,t,e){const n=this.cache,i=t.length,s=Br(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$a,s[o])}function yd(r,t,e){const n=this.cache,i=t.length,s=Br(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Za,s[o])}function bd(r){switch(r){case 5126:return nd;case 35664:return id;case 35665:return rd;case 35666:return sd;case 35674:return od;case 35675:return ad;case 35676:return ld;case 5124:case 35670:return cd;case 35667:case 35671:return ud;case 35668:case 35672:return hd;case 35669:case 35673:return fd;case 5125:return dd;case 36294:return pd;case 36295:return md;case 36296:return gd;case 35678:case 36198:case 36298:case 36306:case 35682:return _d;case 35679:case 36299:case 36307:return xd;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return yd}}class Sd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ed(e.type)}}class Md{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=bd(e.type)}}class wd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function ra(r,t){r.seq.push(t),r.map[t.id]=t}function Ed(r,t,e){const n=r.name,i=n.length;for(Ss.lastIndex=0;;){const s=Ss.exec(n),o=Ss.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ra(e,l===void 0?new Sd(a,r,t):new Md(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new wd(a),ra(e,h)),e=h}}}class Lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ed(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function sa(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Td=0;function Ad(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Cd(r){switch(r){case ti:return["Linear","( value )"];case ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function oa(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ad(r.getShaderSource(t),o)}else return i}function Ld(r,t){const e=Cd(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Pd(r,t){let e;switch(t){case zl:e="Linear";break;case kl:e="Reinhard";break;case Ul:e="OptimizedCineon";break;case Bl:e="ACESFilmic";break;case Gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function Dd(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Id(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Yi(r){return r!==""}function aa(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function la(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ns(r){return r.replace(Nd,Fd)}function Fd(r,t){const e=Ht[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ns(e)}const Od=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ca(r){return r.replace(Od,zd)}function zd(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ua(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kd(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Aa?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ud(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Li:case Pi:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bd(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Gd(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pa:t="ENVMAP_BLENDING_MULTIPLY";break;case Fl:t="ENVMAP_BLENDING_MIX";break;case Ol:t="ENVMAP_BLENDING_ADD";break}return t}function Vd(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hd(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=kd(e),l=Ud(e),u=Bd(e),h=Gd(e),f=Vd(e),m=e.isWebGL2?"":Rd(e),g=Dd(s),p=i.createProgram();let d,x,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(Yi).join(`
`),d.length>0&&(d+=`
`),x=[m,g].filter(Yi).join(`
`),x.length>0&&(x+=`
`)):(d=[ua(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),x=[m,ua(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Pd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.encodings_pars_fragment,Ld("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),o=Ns(o),o=aa(o,e),o=la(o,e),a=Ns(a),a=aa(a,e),a=la(a,e),o=ca(o),a=ca(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=E+d+o,b=E+x+a,w=sa(i,35633,_),L=sa(i,35632,b);if(i.attachShader(p,w),i.attachShader(p,L),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),O=i.getShaderInfoLog(w).trim(),J=i.getShaderInfoLog(L).trim();let tt=!0,V=!0;if(i.getProgramParameter(p,35714)===!1){tt=!1;const z=oa(i,w,"vertex"),X=oa(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+z+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(O===""||J==="")&&(V=!1);V&&(this.diagnostics={runnable:tt,programLog:T,vertexShader:{log:O,prefix:d},fragmentShader:{log:J,prefix:x}})}i.deleteShader(w),i.deleteShader(L);let F;this.getUniforms=function(){return F===void 0&&(F=new Lr(i,p)),F};let y;return this.getAttributes=function(){return y===void 0&&(y=Id(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Td++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=L,this}let Wd=0;class qd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xd(t),e.set(t,n)),n}}class Xd{constructor(t){this.id=Wd++,this.code=t,this.usedTimes=0}}function Yd(r,t,e,n,i,s,o){const a=new ka,c=new qd,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,T,O,J,tt){const V=J.fog,z=tt.geometry,X=y.isMeshStandardMaterial?J.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),rt=j&&j.mapping===Or?j.image.height:null,$=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=st!==void 0?st.length:0;let Et=0;z.morphAttributes.position!==void 0&&(Et=1),z.morphAttributes.normal!==void 0&&(Et=2),z.morphAttributes.color!==void 0&&(Et=3);let H,nt,ht,B;if($){const zt=un[$];H=zt.vertexShader,nt=zt.fragmentShader}else H=y.vertexShader,nt=y.fragmentShader,c.update(y),ht=c.getVertexShaderID(y),B=c.getFragmentShaderID(y);const St=r.getRenderTarget(),xt=y.alphaTest>0,Mt=y.clearcoat>0,wt=y.iridescence>0;return{isWebGL2:u,shaderID:$,shaderName:y.type,vertexShader:H,fragmentShader:nt,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:tt.isInstancedMesh===!0,instancingColor:tt.isInstancedMesh===!0&&tt.instanceColor!==null,supportsVertexTextures:f,outputEncoding:St===null?r.outputEncoding:St.isXRRenderTarget===!0?St.texture.encoding:ti,map:!!y.map,matcap:!!y.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:rt,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===ac,tangentSpaceNormalMap:y.normalMapType===oc,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ae,clearcoat:Mt,clearcoatMap:Mt&&!!y.clearcoatMap,clearcoatRoughnessMap:Mt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Mt&&!!y.clearcoatNormalMap,iridescence:wt,iridescenceMap:wt&&!!y.iridescenceMap,iridescenceThicknessMap:wt&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ei,alphaMap:!!y.alphaMap,alphaTest:xt,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!V,useFog:y.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:tt.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:Sn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ln,flipSided:y.side===We,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)T.push(O),T.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(x(T,y),E(T,y),T.push(r.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function _(y){const T=g[y.type];let O;if(T){const J=un[T];O=Rc.clone(J.uniforms)}else O=y.uniforms;return O}function b(y,T){let O;for(let J=0,tt=l.length;J<tt;J++){const V=l[J];if(V.cacheKey===T){O=V,++O.usedTimes;break}}return O===void 0&&(O=new Hd(r,T,y,s),l.push(O)),O}function w(y){if(--y.usedTimes===0){const T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function L(y){c.remove(y)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:b,releaseProgram:w,releaseShaderCache:L,programs:l,dispose:F}}function Zd(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ha(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fa(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,m,g,p,d){let x=r[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},r[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=d),t++,x}function a(h,f,m,g,p,d){const x=o(h,f,m,g,p,d);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function c(h,f,m,g,p,d){const x=o(h,f,m,g,p,d);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function l(h,f){e.length>1&&e.sort(h||Jd),n.length>1&&n.sort(f||ha),i.length>1&&i.sort(f||ha)}function u(){for(let h=t,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function $d(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new fa,r.set(n,[o])):i>=s.length?(o=new fa,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Kd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new se};break;case"SpotLight":e={position:new I,direction:new I,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function jd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Qd=0;function tp(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ep(r,t){const e=new Kd,n=jd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Me,a=new Me;function c(u,h){let f=0,m=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let p=0,d=0,x=0,E=0,_=0,b=0,w=0,L=0,F=0,y=0;u.sort(tp);const T=h===!0?Math.PI:1;for(let J=0,tt=u.length;J<tt;J++){const V=u[J],z=V.color,X=V.intensity,j=V.distance,rt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)f+=z.r*X*T,m+=z.g*X*T,g+=z.b*X*T;else if(V.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(V.sh.coefficients[$],X);else if(V.isDirectionalLight){const $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity*T),V.castShadow){const st=V.shadow,et=n.get(V);et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,i.directionalShadow[p]=et,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=V.shadow.matrix,b++}i.directional[p]=$,p++}else if(V.isSpotLight){const $=e.get(V);$.position.setFromMatrixPosition(V.matrixWorld),$.color.copy(z).multiplyScalar(X*T),$.distance=j,$.coneCos=Math.cos(V.angle),$.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),$.decay=V.decay,i.spot[x]=$;const st=V.shadow;if(V.map&&(i.spotLightMap[F]=V.map,F++,st.updateMatrices(V),V.castShadow&&y++),i.spotLightMatrix[x]=st.matrix,V.castShadow){const et=n.get(V);et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,i.spotShadow[x]=et,i.spotShadowMap[x]=rt,L++}x++}else if(V.isRectAreaLight){const $=e.get(V);$.color.copy(z).multiplyScalar(X),$.halfWidth.set(V.width*.5,0,0),$.halfHeight.set(0,V.height*.5,0),i.rectArea[E]=$,E++}else if(V.isPointLight){const $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity*T),$.distance=V.distance,$.decay=V.decay,V.castShadow){const st=V.shadow,et=n.get(V);et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,et.shadowCameraNear=st.camera.near,et.shadowCameraFar=st.camera.far,i.pointShadow[d]=et,i.pointShadowMap[d]=rt,i.pointShadowMatrix[d]=V.shadow.matrix,w++}i.point[d]=$,d++}else if(V.isHemisphereLight){const $=e.get(V);$.skyColor.copy(V.color).multiplyScalar(X*T),$.groundColor.copy(V.groundColor).multiplyScalar(X*T),i.hemi[_]=$,_++}}E>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==p||O.pointLength!==d||O.spotLength!==x||O.rectAreaLength!==E||O.hemiLength!==_||O.numDirectionalShadows!==b||O.numPointShadows!==w||O.numSpotShadows!==L||O.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=E,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+F-y,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=y,O.directionalLength=p,O.pointLength=d,O.spotLength=x,O.rectAreaLength=E,O.hemiLength=_,O.numDirectionalShadows=b,O.numPointShadows=w,O.numSpotShadows=L,O.numSpotMaps=F,i.version=Qd++)}function l(u,h){let f=0,m=0,g=0,p=0,d=0;const x=h.matrixWorldInverse;for(let E=0,_=u.length;E<_;E++){const b=u[E];if(b.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),f++}else if(b.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),g++}else if(b.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(x),a.identity(),o.copy(b.matrixWorld),o.premultiply(x),a.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){const w=i.hemi[d];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(x),d++}}}return{setup:c,setupView:l,state:i}}function da(r,t){const e=new ep(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function np(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new da(r,t),e.set(s,[c])):o>=a.length?(c=new da(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class ip extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rp extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,op=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ap(r,t,e){let n=new qa;const i=new mt,s=new mt,o=new we,a=new ip({depthPacking:sc}),c=new rp,l={},u=e.maxTextureSize,h={[Dn]:We,[We]:Dn,[Ln]:Ln},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:sp,fragmentShader:op}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new He(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa,this.render=function(b,w,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const F=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Rn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let J=0,tt=b.length;J<tt;J++){const V=b[J],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null){const rt=this.type!==Xi?{minFilter:Ie,magFilter:Ie}:{};z.map=new ei(i.x,i.y,rt),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const j=z.getViewportCount();for(let rt=0;rt<j;rt++){const $=z.getViewport(rt);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),O.viewport(o),z.updateMatrices(V,rt),n=z.getFrustum(),_(w,L,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Xi&&x(z,L),z.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(F,y,T)};function x(b,w){const L=t.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ei(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,L,f,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,L,m,p,null)}function E(b,w,L,F,y,T){let O=null;const J=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(J!==void 0)O=J;else if(O=L.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const tt=O.uuid,V=w.uuid;let z=l[tt];z===void 0&&(z={},l[tt]=z);let X=z[V];X===void 0&&(X=O.clone(),z[V]=X),O=X}return O.visible=w.visible,O.wireframe=w.wireframe,T===Xi?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:h[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaTest,O.map=w.map,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(L.matrixWorld),O.nearDistance=F,O.farDistance=y),O}function _(b,w,L,F,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Xi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const J=t.update(b),tt=b.material;if(Array.isArray(tt)){const V=J.groups;for(let z=0,X=V.length;z<X;z++){const j=V[z],rt=tt[j.materialIndex];if(rt&&rt.visible){const $=E(b,rt,F,L.near,L.far,y);r.renderBufferDirect(L,null,J,$,b,j)}}}else if(tt.visible){const V=E(b,tt,F,L.near,L.far,y);r.renderBufferDirect(L,null,J,V,b,null)}}const O=b.children;for(let J=0,tt=O.length;J<tt;J++)_(O[J],w,L,F,y)}}function lp(r,t,e){const n=e.isWebGL2;function i(){let R=!1;const Y=new we;let it=null;const bt=new we(0,0,0,0);return{setMask:function(Lt){it!==Lt&&!R&&(r.colorMask(Lt,Lt,Lt,Lt),it=Lt)},setLocked:function(Lt){R=Lt},setClear:function(Lt,oe,ye,Le,on){on===!0&&(Lt*=Le,oe*=Le,ye*=Le),Y.set(Lt,oe,ye,Le),bt.equals(Y)===!1&&(r.clearColor(Lt,oe,ye,Le),bt.copy(Y))},reset:function(){R=!1,it=null,bt.set(-1,0,0,0)}}}function s(){let R=!1,Y=null,it=null,bt=null;return{setTest:function(Lt){Lt?xt(2929):Mt(2929)},setMask:function(Lt){Y!==Lt&&!R&&(r.depthMask(Lt),Y=Lt)},setFunc:function(Lt){if(it!==Lt){switch(Lt){case Cl:r.depthFunc(512);break;case Ll:r.depthFunc(519);break;case Pl:r.depthFunc(513);break;case Cs:r.depthFunc(515);break;case Rl:r.depthFunc(514);break;case Dl:r.depthFunc(518);break;case Il:r.depthFunc(516);break;case Nl:r.depthFunc(517);break;default:r.depthFunc(515)}it=Lt}},setLocked:function(Lt){R=Lt},setClear:function(Lt){bt!==Lt&&(r.clearDepth(Lt),bt=Lt)},reset:function(){R=!1,Y=null,it=null,bt=null}}}function o(){let R=!1,Y=null,it=null,bt=null,Lt=null,oe=null,ye=null,Le=null,on=null;return{setTest:function(ue){R||(ue?xt(2960):Mt(2960))},setMask:function(ue){Y!==ue&&!R&&(r.stencilMask(ue),Y=ue)},setFunc:function(ue,Xe,an){(it!==ue||bt!==Xe||Lt!==an)&&(r.stencilFunc(ue,Xe,an),it=ue,bt=Xe,Lt=an)},setOp:function(ue,Xe,an){(oe!==ue||ye!==Xe||Le!==an)&&(r.stencilOp(ue,Xe,an),oe=ue,ye=Xe,Le=an)},setLocked:function(ue){R=ue},setClear:function(ue){on!==ue&&(r.clearStencil(ue),on=ue)},reset:function(){R=!1,Y=null,it=null,bt=null,Lt=null,oe=null,ye=null,Le=null,on=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,x=!1,E=null,_=null,b=null,w=null,L=null,F=null,y=null,T=!1,O=null,J=null,tt=null,V=null,z=null;const X=r.getParameter(35661);let j=!1,rt=0;const $=r.getParameter(7938);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),j=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=rt>=2);let st=null,et={};const Et=r.getParameter(3088),H=r.getParameter(2978),nt=new we().fromArray(Et),ht=new we().fromArray(H);function B(R,Y,it){const bt=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(R,Lt),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let oe=0;oe<it;oe++)r.texImage2D(Y+oe,0,6408,1,1,0,6408,5121,bt);return Lt}const St={};St[3553]=B(3553,3553,1),St[34067]=B(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),xt(2929),c.setFunc(Cs),dt(!1),kt(to),xt(2884),lt(Rn);function xt(R){f[R]!==!0&&(r.enable(R),f[R]=!0)}function Mt(R){f[R]!==!1&&(r.disable(R),f[R]=!1)}function wt(R,Y){return m[R]!==Y?(r.bindFramebuffer(R,Y),m[R]=Y,n&&(R===36009&&(m[36160]=Y),R===36160&&(m[36009]=Y)),!0):!1}function At(R,Y){let it=p,bt=!1;if(R)if(it=g.get(Y),it===void 0&&(it=[],g.set(Y,it)),R.isWebGLMultipleRenderTargets){const Lt=R.texture;if(it.length!==Lt.length||it[0]!==36064){for(let oe=0,ye=Lt.length;oe<ye;oe++)it[oe]=36064+oe;it.length=Lt.length,bt=!0}}else it[0]!==36064&&(it[0]=36064,bt=!0);else it[0]!==1029&&(it[0]=1029,bt=!0);bt&&(e.isWebGL2?r.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function zt(R){return d!==R?(r.useProgram(R),d=R,!0):!1}const K={[Si]:32774,[_l]:32778,[xl]:32779};if(n)K[ro]=32775,K[so]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(K[ro]=R.MIN_EXT,K[so]=R.MAX_EXT)}const Q={[vl]:0,[yl]:1,[bl]:768,[Ca]:770,[Al]:776,[El]:774,[Ml]:772,[Sl]:769,[La]:771,[Tl]:775,[wl]:773};function lt(R,Y,it,bt,Lt,oe,ye,Le){if(R===Rn){x===!0&&(Mt(3042),x=!1);return}if(x===!1&&(xt(3042),x=!0),R!==gl){if(R!==E||Le!==T){if((_!==Si||L!==Si)&&(r.blendEquation(32774),_=Si,L=Si),Le)switch(R){case Ei:r.blendFuncSeparate(1,771,1,771);break;case eo:r.blendFunc(1,1);break;case no:r.blendFuncSeparate(0,769,0,1);break;case io:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ei:r.blendFuncSeparate(770,771,1,771);break;case eo:r.blendFunc(770,1);break;case no:r.blendFuncSeparate(0,769,0,1);break;case io:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,w=null,F=null,y=null,E=R,T=Le}return}Lt=Lt||Y,oe=oe||it,ye=ye||bt,(Y!==_||Lt!==L)&&(r.blendEquationSeparate(K[Y],K[Lt]),_=Y,L=Lt),(it!==b||bt!==w||oe!==F||ye!==y)&&(r.blendFuncSeparate(Q[it],Q[bt],Q[oe],Q[ye]),b=it,w=bt,F=oe,y=ye),E=R,T=!1}function Ct(R,Y){R.side===Ln?Mt(2884):xt(2884);let it=R.side===We;Y&&(it=!it),dt(it),R.blending===Ei&&R.transparent===!1?lt(Rn):lt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const bt=R.stencilWrite;l.setTest(bt),bt&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ut(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xt(32926):Mt(32926)}function dt(R){O!==R&&(R?r.frontFace(2304):r.frontFace(2305),O=R)}function kt(R){R!==dl?(xt(2884),R!==J&&(R===to?r.cullFace(1029):R===pl?r.cullFace(1028):r.cullFace(1032))):Mt(2884),J=R}function Ft(R){R!==tt&&(j&&r.lineWidth(R),tt=R)}function Ut(R,Y,it){R?(xt(32823),(V!==Y||z!==it)&&(r.polygonOffset(Y,it),V=Y,z=it)):Mt(32823)}function ie(R){R?xt(3089):Mt(3089)}function jt(R){R===void 0&&(R=33984+X-1),st!==R&&(r.activeTexture(R),st=R)}function M(R,Y,it){it===void 0&&(st===null?it=33984+X-1:it=st);let bt=et[it];bt===void 0&&(bt={type:void 0,texture:void 0},et[it]=bt),(bt.type!==R||bt.texture!==Y)&&(st!==it&&(r.activeTexture(it),st=it),r.bindTexture(R,Y||St[R]),bt.type=R,bt.texture=Y)}function v(){const R=et[st];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function It(R){nt.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),nt.copy(R))}function Dt(R){ht.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),ht.copy(R))}function Zt(R,Y){let it=h.get(Y);it===void 0&&(it=new WeakMap,h.set(Y,it));let bt=it.get(R);bt===void 0&&(bt=r.getUniformBlockIndex(Y,R.name),it.set(R,bt))}function Qt(R,Y){const bt=h.get(Y).get(R);u.get(Y)!==bt&&(r.uniformBlockBinding(Y,bt,R.__bindingPointIndex),u.set(Y,bt))}function re(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},st=null,et={},m={},g=new WeakMap,p=[],d=null,x=!1,E=null,_=null,b=null,w=null,L=null,F=null,y=null,T=!1,O=null,J=null,tt=null,V=null,z=null,nt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:xt,disable:Mt,bindFramebuffer:wt,drawBuffers:At,useProgram:zt,setBlending:lt,setMaterial:Ct,setFlipSided:dt,setCullFace:kt,setLineWidth:Ft,setPolygonOffset:Ut,setScissorTest:ie,activeTexture:jt,bindTexture:M,unbindTexture:v,compressedTexImage2D:W,compressedTexImage3D:ot,texImage2D:pt,texImage3D:Pt,updateUBOMapping:Zt,uniformBlockBinding:Qt,texStorage2D:k,texStorage3D:vt,texSubImage2D:at,texSubImage3D:gt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:A,scissor:It,viewport:Dt,reset:re}}function cp(r,t,e,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,v){return x?new OffscreenCanvas(M,v):Ir("canvas")}function _(M,v,W,ot){let at=1;if((M.width>ot||M.height>ot)&&(at=ot/Math.max(M.width,M.height)),at<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const gt=v?uc:Math.floor,Rt=gt(at*M.width),A=gt(at*M.height);p===void 0&&(p=E(Rt,A));const k=W?E(Rt,A):p;return k.width=Rt,k.height=A,k.getContext("2d").drawImage(M,0,0,Rt,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Rt+"x"+A+")."),k}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return No(M.width)&&No(M.height)}function w(M){return a?!1:M.wrapS!==nn||M.wrapT!==nn||M.minFilter!==Ie&&M.minFilter!==Ke}function L(M,v){return M.generateMipmaps&&v&&M.minFilter!==Ie&&M.minFilter!==Ke}function F(M){r.generateMipmap(M)}function y(M,v,W,ot,at=!1){if(a===!1)return v;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let gt=v;return v===6403&&(W===5126&&(gt=33326),W===5131&&(gt=33325),W===5121&&(gt=33321)),v===33319&&(W===5126&&(gt=33328),W===5131&&(gt=33327),W===5121&&(gt=33323)),v===6408&&(W===5126&&(gt=34836),W===5131&&(gt=34842),W===5121&&(gt=ot===ae&&at===!1?35907:32856),W===32819&&(gt=32854),W===32820&&(gt=32855)),(gt===33325||gt===33326||gt===33327||gt===33328||gt===34842||gt===34836)&&t.get("EXT_color_buffer_float"),gt}function T(M,v,W){return L(M,W)===!0||M.isFramebufferTexture&&M.minFilter!==Ie&&M.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function O(M){return M===Ie||M===oo||M===Xr?9728:9729}function J(M){const v=M.target;v.removeEventListener("dispose",J),V(v),v.isVideoTexture&&g.delete(v)}function tt(M){const v=M.target;v.removeEventListener("dispose",tt),X(v)}function V(M){const v=n.get(M);if(v.__webglInit===void 0)return;const W=M.source,ot=d.get(W);if(ot){const at=ot[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&z(M),Object.keys(ot).length===0&&d.delete(W)}n.remove(M)}function z(M){const v=n.get(M);r.deleteTexture(v.__webglTexture);const W=M.source,ot=d.get(W);delete ot[v.__cacheKey],o.memory.textures--}function X(M){const v=M.texture,W=n.get(M),ot=n.get(v);if(ot.__webglTexture!==void 0&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let at=0;at<6;at++)r.deleteFramebuffer(W.__webglFramebuffer[at]),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[at]);else{if(r.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let at=0;at<W.__webglColorRenderbuffer.length;at++)W.__webglColorRenderbuffer[at]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[at]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let at=0,gt=v.length;at<gt;at++){const Rt=n.get(v[at]);Rt.__webglTexture&&(r.deleteTexture(Rt.__webglTexture),o.memory.textures--),n.remove(v[at])}n.remove(v),n.remove(M)}let j=0;function rt(){j=0}function $(){const M=j;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),j+=1,M}function st(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.encoding),v.join()}function et(M,v){const W=n.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.version>0&&W.__version!==M.version){const ot=M.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(W,M,v);return}}e.bindTexture(3553,W.__webglTexture,33984+v)}function Et(M,v){const W=n.get(M);if(M.version>0&&W.__version!==M.version){Mt(W,M,v);return}e.bindTexture(35866,W.__webglTexture,33984+v)}function H(M,v){const W=n.get(M);if(M.version>0&&W.__version!==M.version){Mt(W,M,v);return}e.bindTexture(32879,W.__webglTexture,33984+v)}function nt(M,v){const W=n.get(M);if(M.version>0&&W.__version!==M.version){wt(W,M,v);return}e.bindTexture(34067,W.__webglTexture,33984+v)}const ht={[Rs]:10497,[nn]:33071,[Ds]:33648},B={[Ie]:9728,[oo]:9984,[Xr]:9986,[Ke]:9729,[Vl]:9985,[$i]:9987};function St(M,v,W){if(W?(r.texParameteri(M,10242,ht[v.wrapS]),r.texParameteri(M,10243,ht[v.wrapT]),(M===32879||M===35866)&&r.texParameteri(M,32882,ht[v.wrapR]),r.texParameteri(M,10240,B[v.magFilter]),r.texParameteri(M,10241,B[v.minFilter])):(r.texParameteri(M,10242,33071),r.texParameteri(M,10243,33071),(M===32879||M===35866)&&r.texParameteri(M,32882,33071),(v.wrapS!==nn||v.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,10240,O(v.magFilter)),r.texParameteri(M,10241,O(v.minFilter)),v.minFilter!==Ie&&v.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ie||v.minFilter!==Xr&&v.minFilter!==$i||v.type===$n&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ki&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(M,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function xt(M,v){let W=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",J));const ot=v.source;let at=d.get(ot);at===void 0&&(at={},d.set(ot,at));const gt=st(v);if(gt!==M.__cacheKey){at[gt]===void 0&&(at[gt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[gt].usedTimes++;const Rt=at[M.__cacheKey];Rt!==void 0&&(at[M.__cacheKey].usedTimes--,Rt.usedTimes===0&&z(v)),M.__cacheKey=gt,M.__webglTexture=at[gt].texture}return W}function Mt(M,v,W){let ot=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ot=35866),v.isData3DTexture&&(ot=32879);const at=xt(M,v),gt=v.source;e.bindTexture(ot,M.__webglTexture,33984+W);const Rt=n.get(gt);if(gt.version!==Rt.__version||at===!0){e.activeTexture(33984+W),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const A=w(v)&&b(v.image)===!1;let k=_(v.image,A,!1,u);k=jt(v,k);const vt=b(k)||a,pt=s.convert(v.format,v.encoding);let Pt=s.convert(v.type),It=y(v.internalFormat,pt,Pt,v.encoding,v.isVideoTexture);St(ot,v,vt);let Dt;const Zt=v.mipmaps,Qt=a&&v.isVideoTexture!==!0,re=Rt.__version===void 0||at===!0,R=T(v,k,vt);if(v.isDepthTexture)It=6402,a?v.type===$n?It=36012:v.type===Jn?It=33190:v.type===Ti?It=35056:It=33189:v.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Kn&&It===6402&&v.type!==Da&&v.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Jn,Pt=s.convert(v.type)),v.format===Ri&&It===6402&&(It=34041,v.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ti,Pt=s.convert(v.type))),re&&(Qt?e.texStorage2D(3553,1,It,k.width,k.height):e.texImage2D(3553,0,It,k.width,k.height,0,pt,Pt,null));else if(v.isDataTexture)if(Zt.length>0&&vt){Qt&&re&&e.texStorage2D(3553,R,It,Zt[0].width,Zt[0].height);for(let Y=0,it=Zt.length;Y<it;Y++)Dt=Zt[Y],Qt?e.texSubImage2D(3553,Y,0,0,Dt.width,Dt.height,pt,Pt,Dt.data):e.texImage2D(3553,Y,It,Dt.width,Dt.height,0,pt,Pt,Dt.data);v.generateMipmaps=!1}else Qt?(re&&e.texStorage2D(3553,R,It,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,pt,Pt,k.data)):e.texImage2D(3553,0,It,k.width,k.height,0,pt,Pt,k.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qt&&re&&e.texStorage3D(35866,R,It,Zt[0].width,Zt[0].height,k.depth);for(let Y=0,it=Zt.length;Y<it;Y++)Dt=Zt[Y],v.format!==rn?pt!==null?Qt?e.compressedTexSubImage3D(35866,Y,0,0,0,Dt.width,Dt.height,k.depth,pt,Dt.data,0,0):e.compressedTexImage3D(35866,Y,It,Dt.width,Dt.height,k.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(35866,Y,0,0,0,Dt.width,Dt.height,k.depth,pt,Pt,Dt.data):e.texImage3D(35866,Y,It,Dt.width,Dt.height,k.depth,0,pt,Pt,Dt.data)}else{Qt&&re&&e.texStorage2D(3553,R,It,Zt[0].width,Zt[0].height);for(let Y=0,it=Zt.length;Y<it;Y++)Dt=Zt[Y],v.format!==rn?pt!==null?Qt?e.compressedTexSubImage2D(3553,Y,0,0,Dt.width,Dt.height,pt,Dt.data):e.compressedTexImage2D(3553,Y,It,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(3553,Y,0,0,Dt.width,Dt.height,pt,Pt,Dt.data):e.texImage2D(3553,Y,It,Dt.width,Dt.height,0,pt,Pt,Dt.data)}else if(v.isDataArrayTexture)Qt?(re&&e.texStorage3D(35866,R,It,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,pt,Pt,k.data)):e.texImage3D(35866,0,It,k.width,k.height,k.depth,0,pt,Pt,k.data);else if(v.isData3DTexture)Qt?(re&&e.texStorage3D(32879,R,It,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,pt,Pt,k.data)):e.texImage3D(32879,0,It,k.width,k.height,k.depth,0,pt,Pt,k.data);else if(v.isFramebufferTexture){if(re)if(Qt)e.texStorage2D(3553,R,It,k.width,k.height);else{let Y=k.width,it=k.height;for(let bt=0;bt<R;bt++)e.texImage2D(3553,bt,It,Y,it,0,pt,Pt,null),Y>>=1,it>>=1}}else if(Zt.length>0&&vt){Qt&&re&&e.texStorage2D(3553,R,It,Zt[0].width,Zt[0].height);for(let Y=0,it=Zt.length;Y<it;Y++)Dt=Zt[Y],Qt?e.texSubImage2D(3553,Y,0,0,pt,Pt,Dt):e.texImage2D(3553,Y,It,pt,Pt,Dt);v.generateMipmaps=!1}else Qt?(re&&e.texStorage2D(3553,R,It,k.width,k.height),e.texSubImage2D(3553,0,0,0,pt,Pt,k)):e.texImage2D(3553,0,It,pt,Pt,k);L(v,vt)&&F(ot),Rt.__version=gt.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function wt(M,v,W){if(v.image.length!==6)return;const ot=xt(M,v),at=v.source;e.bindTexture(34067,M.__webglTexture,33984+W);const gt=n.get(at);if(at.version!==gt.__version||ot===!0){e.activeTexture(33984+W),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,k=[];for(let Y=0;Y<6;Y++)!Rt&&!A?k[Y]=_(v.image[Y],!1,!0,l):k[Y]=A?v.image[Y].image:v.image[Y],k[Y]=jt(v,k[Y]);const vt=k[0],pt=b(vt)||a,Pt=s.convert(v.format,v.encoding),It=s.convert(v.type),Dt=y(v.internalFormat,Pt,It,v.encoding),Zt=a&&v.isVideoTexture!==!0,Qt=gt.__version===void 0||ot===!0;let re=T(v,vt,pt);St(34067,v,pt);let R;if(Rt){Zt&&Qt&&e.texStorage2D(34067,re,Dt,vt.width,vt.height);for(let Y=0;Y<6;Y++){R=k[Y].mipmaps;for(let it=0;it<R.length;it++){const bt=R[it];v.format!==rn?Pt!==null?Zt?e.compressedTexSubImage2D(34069+Y,it,0,0,bt.width,bt.height,Pt,bt.data):e.compressedTexImage2D(34069+Y,it,Dt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?e.texSubImage2D(34069+Y,it,0,0,bt.width,bt.height,Pt,It,bt.data):e.texImage2D(34069+Y,it,Dt,bt.width,bt.height,0,Pt,It,bt.data)}}}else{R=v.mipmaps,Zt&&Qt&&(R.length>0&&re++,e.texStorage2D(34067,re,Dt,k[0].width,k[0].height));for(let Y=0;Y<6;Y++)if(A){Zt?e.texSubImage2D(34069+Y,0,0,0,k[Y].width,k[Y].height,Pt,It,k[Y].data):e.texImage2D(34069+Y,0,Dt,k[Y].width,k[Y].height,0,Pt,It,k[Y].data);for(let it=0;it<R.length;it++){const Lt=R[it].image[Y].image;Zt?e.texSubImage2D(34069+Y,it+1,0,0,Lt.width,Lt.height,Pt,It,Lt.data):e.texImage2D(34069+Y,it+1,Dt,Lt.width,Lt.height,0,Pt,It,Lt.data)}}else{Zt?e.texSubImage2D(34069+Y,0,0,0,Pt,It,k[Y]):e.texImage2D(34069+Y,0,Dt,Pt,It,k[Y]);for(let it=0;it<R.length;it++){const bt=R[it];Zt?e.texSubImage2D(34069+Y,it+1,0,0,Pt,It,bt.image[Y]):e.texImage2D(34069+Y,it+1,Dt,Pt,It,bt.image[Y])}}}L(v,pt)&&F(34067),gt.__version=at.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function At(M,v,W,ot,at){const gt=s.convert(W.format,W.encoding),Rt=s.convert(W.type),A=y(W.internalFormat,gt,Rt,W.encoding);n.get(v).__hasExternalTextures||(at===32879||at===35866?e.texImage3D(at,0,A,v.width,v.height,v.depth,0,gt,Rt,null):e.texImage2D(at,0,A,v.width,v.height,0,gt,Rt,null)),e.bindFramebuffer(36160,M),Ut(v)?f.framebufferTexture2DMultisampleEXT(36160,ot,at,n.get(W).__webglTexture,0,Ft(v)):(at===3553||at>=34069&&at<=34074)&&r.framebufferTexture2D(36160,ot,at,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(M,v,W){if(r.bindRenderbuffer(36161,M),v.depthBuffer&&!v.stencilBuffer){let ot=33189;if(W||Ut(v)){const at=v.depthTexture;at&&at.isDepthTexture&&(at.type===$n?ot=36012:at.type===Jn&&(ot=33190));const gt=Ft(v);Ut(v)?f.renderbufferStorageMultisampleEXT(36161,gt,ot,v.width,v.height):r.renderbufferStorageMultisample(36161,gt,ot,v.width,v.height)}else r.renderbufferStorage(36161,ot,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,M)}else if(v.depthBuffer&&v.stencilBuffer){const ot=Ft(v);W&&Ut(v)===!1?r.renderbufferStorageMultisample(36161,ot,35056,v.width,v.height):Ut(v)?f.renderbufferStorageMultisampleEXT(36161,ot,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,M)}else{const ot=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let at=0;at<ot.length;at++){const gt=ot[at],Rt=s.convert(gt.format,gt.encoding),A=s.convert(gt.type),k=y(gt.internalFormat,Rt,A,gt.encoding),vt=Ft(v);W&&Ut(v)===!1?r.renderbufferStorageMultisample(36161,vt,k,v.width,v.height):Ut(v)?f.renderbufferStorageMultisampleEXT(36161,vt,k,v.width,v.height):r.renderbufferStorage(36161,k,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function K(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et(v.depthTexture,0);const ot=n.get(v.depthTexture).__webglTexture,at=Ft(v);if(v.depthTexture.format===Kn)Ut(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ot,0,at):r.framebufferTexture2D(36160,36096,3553,ot,0);else if(v.depthTexture.format===Ri)Ut(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ot,0,at):r.framebufferTexture2D(36160,33306,3553,ot,0);else throw new Error("Unknown depthTexture format")}function Q(M){const v=n.get(M),W=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");K(v.__webglFramebuffer,M)}else if(W){v.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(36160,v.__webglFramebuffer[ot]),v.__webglDepthbuffer[ot]=r.createRenderbuffer(),zt(v.__webglDepthbuffer[ot],M,!1)}else e.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),zt(v.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function lt(M,v,W){const ot=n.get(M);v!==void 0&&At(ot.__webglFramebuffer,M,M.texture,36064,3553),W!==void 0&&Q(M)}function Ct(M){const v=M.texture,W=n.get(M),ot=n.get(v);M.addEventListener("dispose",tt),M.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=v.version,o.memory.textures++);const at=M.isWebGLCubeRenderTarget===!0,gt=M.isWebGLMultipleRenderTargets===!0,Rt=b(M)||a;if(at){W.__webglFramebuffer=[];for(let A=0;A<6;A++)W.__webglFramebuffer[A]=r.createFramebuffer()}else{if(W.__webglFramebuffer=r.createFramebuffer(),gt)if(i.drawBuffers){const A=M.texture;for(let k=0,vt=A.length;k<vt;k++){const pt=n.get(A[k]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Ut(M)===!1){const A=gt?v:[v];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let k=0;k<A.length;k++){const vt=A[k];W.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(36161,W.__webglColorRenderbuffer[k]);const pt=s.convert(vt.format,vt.encoding),Pt=s.convert(vt.type),It=y(vt.internalFormat,pt,Pt,vt.encoding,M.isXRRenderTarget===!0),Dt=Ft(M);r.renderbufferStorageMultisample(36161,Dt,It,M.width,M.height),r.framebufferRenderbuffer(36160,36064+k,36161,W.__webglColorRenderbuffer[k])}r.bindRenderbuffer(36161,null),M.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),zt(W.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}}if(at){e.bindTexture(34067,ot.__webglTexture),St(34067,v,Rt);for(let A=0;A<6;A++)At(W.__webglFramebuffer[A],M,v,36064,34069+A);L(v,Rt)&&F(34067),e.unbindTexture()}else if(gt){const A=M.texture;for(let k=0,vt=A.length;k<vt;k++){const pt=A[k],Pt=n.get(pt);e.bindTexture(3553,Pt.__webglTexture),St(3553,pt,Rt),At(W.__webglFramebuffer,M,pt,36064+k,3553),L(pt,Rt)&&F(3553)}e.unbindTexture()}else{let A=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?A=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(A,ot.__webglTexture),St(A,v,Rt),At(W.__webglFramebuffer,M,v,36064,A),L(v,Rt)&&F(A),e.unbindTexture()}M.depthBuffer&&Q(M)}function dt(M){const v=b(M)||a,W=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ot=0,at=W.length;ot<at;ot++){const gt=W[ot];if(L(gt,v)){const Rt=M.isWebGLCubeRenderTarget?34067:3553,A=n.get(gt).__webglTexture;e.bindTexture(Rt,A),F(Rt),e.unbindTexture()}}}function kt(M){if(a&&M.samples>0&&Ut(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],W=M.width,ot=M.height;let at=16384;const gt=[],Rt=M.stencilBuffer?33306:36096,A=n.get(M),k=M.isWebGLMultipleRenderTargets===!0;if(k)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+vt,36161,null),e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+vt,3553,null,0);e.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,A.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){gt.push(36064+vt),M.depthBuffer&&gt.push(Rt);const pt=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(pt===!1&&(M.depthBuffer&&(at|=256),M.stencilBuffer&&(at|=1024)),k&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[vt]),pt===!0&&(r.invalidateFramebuffer(36008,[Rt]),r.invalidateFramebuffer(36009,[Rt])),k){const Pt=n.get(v[vt]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Pt,0)}r.blitFramebuffer(0,0,W,ot,0,0,W,ot,at,9728),m&&r.invalidateFramebuffer(36008,gt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),k)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+vt,36161,A.__webglColorRenderbuffer[vt]);const pt=n.get(v[vt]).__webglTexture;e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+vt,3553,pt,0)}e.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Ft(M){return Math.min(h,M.samples)}function Ut(M){const v=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(M){const v=o.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function jt(M,v){const W=M.encoding,ot=M.format,at=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Is||W!==ti&&(W===ae?a===!1?t.has("EXT_sRGB")===!0&&ot===rn?(M.format=Is,M.minFilter=Ke,M.generateMipmaps=!1):v=Fa.sRGBToLinear(v):(ot!==rn||at!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),v}this.allocateTextureUnit=$,this.resetTextureUnits=rt,this.setTexture2D=et,this.setTexture2DArray=Et,this.setTexture3D=H,this.setTextureCube=nt,this.rebindTextures=lt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ut}function up(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===Qn)return 5121;if(s===Xl)return 32819;if(s===Yl)return 32820;if(s===Hl)return 5120;if(s===Wl)return 5122;if(s===Da)return 5123;if(s===ql)return 5124;if(s===Jn)return 5125;if(s===$n)return 5126;if(s===Ki)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zl)return 6406;if(s===rn)return 6408;if(s===Jl)return 6409;if(s===$l)return 6410;if(s===Kn)return 6402;if(s===Ri)return 34041;if(s===Is)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Kl)return 6403;if(s===jl)return 36244;if(s===Ql)return 33319;if(s===tc)return 33320;if(s===ec)return 36249;if(s===Yr||s===Zr||s===Jr||s===$r)if(o===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ao||s===lo||s===co||s===uo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ho||s===fo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ho)return o===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===fo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===po||s===mo||s===go||s===_o||s===xo||s===vo||s===yo||s===bo||s===So||s===Mo||s===wo||s===Eo||s===To||s===Ao)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===po)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===go)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_o)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===So)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===To)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ao)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Kr)return o===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ic||s===Co||s===Lo||s===Po)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class hp extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mr extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fp={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n),x=this._getHandJoint(l,p);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class dp extends qe{constructor(t,e,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Kn,u!==Kn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Kn&&(n=Jn),n===void 0&&u===Ri&&(n=Ti),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1}}class pp extends ri{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null;const p=e.getContextAttributes();let d=null,x=null;const E=[],_=[],b=new Set,w=new Map,L=new je;L.layers.enable(1),L.viewport=new we;const F=new je;F.layers.enable(2),F.viewport=new we;const y=[L,F],T=new hp;T.layers.enable(1),T.layers.enable(2);let O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let nt=E[H];return nt===void 0&&(nt=new Ms,E[H]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(H){let nt=E[H];return nt===void 0&&(nt=new Ms,E[H]=nt),nt.getGripSpace()},this.getHand=function(H){let nt=E[H];return nt===void 0&&(nt=new Ms,E[H]=nt),nt.getHandSpace()};function tt(H){const nt=_.indexOf(H.inputSource);if(nt===-1)return;const ht=E[nt];ht!==void 0&&ht.dispatchEvent({type:H.type,data:H.inputSource})}function V(){i.removeEventListener("select",tt),i.removeEventListener("selectstart",tt),i.removeEventListener("selectend",tt),i.removeEventListener("squeeze",tt),i.removeEventListener("squeezestart",tt),i.removeEventListener("squeezeend",tt),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",z);for(let H=0;H<E.length;H++){const nt=_[H];nt!==null&&(_[H]=null,E[H].disconnect(nt))}O=null,J=null,t.setRenderTarget(d),m=null,f=null,h=null,i=null,x=null,Et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",tt),i.addEventListener("selectstart",tt),i.addEventListener("selectend",tt),i.addEventListener("squeeze",tt),i.addEventListener("squeezestart",tt),i.addEventListener("squeezeend",tt),i.addEventListener("end",V),i.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:m}),x=new ei(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Qn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let nt=null,ht=null,B=null;p.depth&&(B=p.stencil?35056:33190,nt=p.stencil?Ri:Kn,ht=p.stencil?Ti:Jn);const St={colorFormat:32856,depthFormat:B,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(St),i.updateRenderState({layers:[f]}),x=new ei(f.textureWidth,f.textureHeight,{format:rn,type:Qn,depthTexture:new dp(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const xt=t.properties.get(x);xt.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(H){for(let nt=0;nt<H.removed.length;nt++){const ht=H.removed[nt],B=_.indexOf(ht);B>=0&&(_[B]=null,E[B].disconnect(ht))}for(let nt=0;nt<H.added.length;nt++){const ht=H.added[nt];let B=_.indexOf(ht);if(B===-1){for(let xt=0;xt<E.length;xt++)if(xt>=_.length){_.push(ht),B=xt;break}else if(_[xt]===null){_[xt]=ht,B=xt;break}if(B===-1)break}const St=E[B];St&&St.connect(ht)}}const X=new I,j=new I;function rt(H,nt,ht){X.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(ht.matrixWorld);const B=X.distanceTo(j),St=nt.projectionMatrix.elements,xt=ht.projectionMatrix.elements,Mt=St[14]/(St[10]-1),wt=St[14]/(St[10]+1),At=(St[9]+1)/St[5],zt=(St[9]-1)/St[5],K=(St[8]-1)/St[0],Q=(xt[8]+1)/xt[0],lt=Mt*K,Ct=Mt*Q,dt=B/(-K+Q),kt=dt*-K;nt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(kt),H.translateZ(dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Ft=Mt+dt,Ut=wt+dt,ie=lt-kt,jt=Ct+(B-kt),M=At*wt/Ut*Ft,v=zt*wt/Ut*Ft;H.projectionMatrix.makePerspective(ie,jt,M,v,Ft,Ut)}function $(H,nt){nt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(nt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;T.near=F.near=L.near=H.near,T.far=F.far=L.far=H.far,(O!==T.near||J!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,J=T.far);const nt=H.parent,ht=T.cameras;$(T,nt);for(let St=0;St<ht.length;St++)$(ht[St],nt);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),H.matrix.copy(T.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const B=H.children;for(let St=0,xt=B.length;St<xt;St++)B[St].updateMatrixWorld(!0);ht.length===2?rt(T,L,F):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.getPlanes=function(){return b};let st=null;function et(H,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let B=!1;ht.length!==T.cameras.length&&(T.cameras.length=0,B=!0);for(let St=0;St<ht.length;St++){const xt=ht[St];let Mt=null;if(m!==null)Mt=m.getViewport(xt);else{const At=h.getViewSubImage(f,xt);Mt=At.viewport,St===0&&(t.setRenderTargetTextures(x,At.colorTexture,f.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(x))}let wt=y[St];wt===void 0&&(wt=new je,wt.layers.enable(St),wt.viewport=new we,y[St]=wt),wt.matrix.fromArray(xt.transform.matrix),wt.projectionMatrix.fromArray(xt.projectionMatrix),wt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),St===0&&T.matrix.copy(wt.matrix),B===!0&&T.cameras.push(wt)}}for(let ht=0;ht<E.length;ht++){const B=_[ht],St=E[ht];B!==null&&St!==void 0&&St.update(B,nt,l||o)}if(st&&st(H,nt),nt.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:nt.detectedPlanes});let ht=null;for(const B of b)nt.detectedPlanes.has(B)||(ht===null&&(ht=[]),ht.push(B));if(ht!==null)for(const B of ht)b.delete(B),w.delete(B),n.dispatchEvent({type:"planeremoved",data:B});for(const B of nt.detectedPlanes)if(!b.has(B))b.add(B),w.set(B,nt.lastChangedTime),n.dispatchEvent({type:"planeadded",data:B});else{const St=w.get(B);B.lastChangedTime>St&&(w.set(B,B.lastChangedTime),n.dispatchEvent({type:"planechanged",data:B}))}}g=null}const Et=new Xa;Et.setAnimationLoop(et),this.setAnimationLoop=function(H){st=H},this.dispose=function(){}}}function mp(r,t){function e(p,d){d.color.getRGB(p.fogColor.value,Va(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,x,E,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,_)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,x,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===We&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===We&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,x,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=E*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===We&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function gp(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function c(E,_){const b=_.program;n.uniformBlockBinding(E,b)}function l(E,_){let b=i[E.id];b===void 0&&(g(E),b=u(E),i[E.id]=b,E.addEventListener("dispose",d));const w=_.program;n.updateUBOMapping(E,w);const L=t.render.frame;s[E.id]!==L&&(f(E),s[E.id]=L)}function u(E){const _=h();E.__bindingPointIndex=_;const b=r.createBuffer(),w=E.__size,L=E.usage;return r.bindBuffer(35345,b),r.bufferData(35345,w,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,b),b}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const _=i[E.id],b=E.uniforms,w=E.__cache;r.bindBuffer(35345,_);for(let L=0,F=b.length;L<F;L++){const y=b[L];if(m(y,L,w)===!0){const T=y.__offset,O=Array.isArray(y.value)?y.value:[y.value];let J=0;for(let tt=0;tt<O.length;tt++){const V=O[tt],z=p(V);typeof V=="number"?(y.__data[0]=V,r.bufferSubData(35345,T+J,y.__data)):V.isMatrix3?(y.__data[0]=V.elements[0],y.__data[1]=V.elements[1],y.__data[2]=V.elements[2],y.__data[3]=V.elements[0],y.__data[4]=V.elements[3],y.__data[5]=V.elements[4],y.__data[6]=V.elements[5],y.__data[7]=V.elements[0],y.__data[8]=V.elements[6],y.__data[9]=V.elements[7],y.__data[10]=V.elements[8],y.__data[11]=V.elements[0]):(V.toArray(y.__data,J),J+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,y.__data)}}r.bindBuffer(35345,null)}function m(E,_,b){const w=E.value;if(b[_]===void 0){if(typeof w=="number")b[_]=w;else{const L=Array.isArray(w)?w:[w],F=[];for(let y=0;y<L.length;y++)F.push(L[y].clone());b[_]=F}return!0}else if(typeof w=="number"){if(b[_]!==w)return b[_]=w,!0}else{const L=Array.isArray(b[_])?b[_]:[b[_]],F=Array.isArray(w)?w:[w];for(let y=0;y<L.length;y++){const T=L[y];if(T.equals(F[y])===!1)return T.copy(F[y]),!0}}return!1}function g(E){const _=E.uniforms;let b=0;const w=16;let L=0;for(let F=0,y=_.length;F<y;F++){const T=_[F],O={boundary:0,storage:0},J=Array.isArray(T.value)?T.value:[T.value];for(let tt=0,V=J.length;tt<V;tt++){const z=J[tt],X=p(z);O.boundary+=X.boundary,O.storage+=X.storage}if(T.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,F>0){L=b%w;const tt=w-L;L!==0&&tt-O.boundary<0&&(b+=w-L,T.__offset=b)}b+=O.storage}return L=b%w,L>0&&(b+=w-L),E.__size=b,E.__cache={},this}function p(E){const _={boundary:0,storage:0};return typeof E=="number"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function d(E){const _=E.target;_.removeEventListener("dispose",d);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function x(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:c,update:l,dispose:x}}function _p(){const r=Ir("canvas");return r.style.display="block",r}function Hs(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:_p(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ti,this.useLegacyLights=!0,this.toneMapping=Sn,this.toneMappingExposure=1;const p=this;let d=!1,x=0,E=0,_=null,b=-1,w=null;const L=new we,F=new we;let y=null,T=t.width,O=t.height,J=1,tt=null,V=null;const z=new we(0,0,T,O),X=new we(0,0,T,O);let j=!1;const rt=new qa;let $=!1,st=!1,et=null;const Et=new Me,H=new I,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return _===null?J:1}let B=e;function St(S,G){for(let q=0;q<S.length;q++){const U=S[q],Z=t.getContext(U,G);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bs}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),B===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),B=St(G,S),B===null)throw St(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xt,Mt,wt,At,zt,K,Q,lt,Ct,dt,kt,Ft,Ut,ie,jt,M,v,W,ot,at,gt,Rt,A,k;function vt(){xt=new Cf(B),Mt=new bf(B,xt,r),xt.init(Mt),Rt=new up(B,xt,Mt),wt=new lp(B,xt,Mt),At=new Rf,zt=new Zd,K=new cp(B,xt,wt,zt,Mt,Rt,At),Q=new Mf(p),lt=new Af(p),Ct=new kc(B,Mt),A=new vf(B,xt,Ct,Mt),dt=new Lf(B,Ct,At,A),kt=new Ff(B,dt,Ct,At),ot=new Nf(B,Mt,K),M=new Sf(zt),Ft=new Yd(p,Q,lt,xt,Mt,A,M),Ut=new mp(p,zt),ie=new $d,jt=new np(xt,Mt),W=new xf(p,Q,lt,wt,kt,u,o),v=new ap(p,kt,Mt),k=new gp(B,At,Mt,wt),at=new yf(B,xt,At,Mt),gt=new Pf(B,xt,At,Mt),At.programs=Ft.programs,p.capabilities=Mt,p.extensions=xt,p.properties=zt,p.renderLists=ie,p.shadowMap=v,p.state=wt,p.info=At}vt();const pt=new pp(p,B);this.xr=pt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(T,O,!1))},this.getSize=function(S){return S.set(T,O)},this.setSize=function(S,G,q=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,O=G,t.width=Math.floor(S*J),t.height=Math.floor(G*J),q===!0&&(t.style.width=S+"px",t.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(T*J,O*J).floor()},this.setDrawingBufferSize=function(S,G,q){T=S,O=G,J=q,t.width=Math.floor(S*q),t.height=Math.floor(G*q),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(z)},this.setViewport=function(S,G,q,U){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,G,q,U),wt.viewport(L.copy(z).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(X)},this.setScissor=function(S,G,q,U){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,G,q,U),wt.scissor(F.copy(X).multiplyScalar(J).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(S){wt.setScissorTest(j=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){V=S},this.getClearColor=function(S){return S.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(S=!0,G=!0,q=!0){let U=0;S&&(U|=16384),G&&(U|=256),q&&(U|=1024),B.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),ie.dispose(),jt.dispose(),zt.dispose(),Q.dispose(),lt.dispose(),kt.dispose(),A.dispose(),k.dispose(),Ft.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",it),pt.removeEventListener("sessionend",bt),et&&(et.dispose(),et=null),Lt.stop()};function Pt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const S=At.autoReset,G=v.enabled,q=v.autoUpdate,U=v.needsUpdate,Z=v.type;vt(),At.autoReset=S,v.enabled=G,v.autoUpdate=q,v.needsUpdate=U,v.type=Z}function Dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Zt(S){const G=S.target;G.removeEventListener("dispose",Zt),Qt(G)}function Qt(S){re(S),zt.remove(S)}function re(S){const G=zt.get(S).programs;G!==void 0&&(G.forEach(function(q){Ft.releaseProgram(q)}),S.isShaderMaterial&&Ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,q,U,Z,Ot){G===null&&(G=nt);const Vt=Z.isMesh&&Z.matrixWorld.determinant()<0,Wt=cl(S,G,q,U,Z);wt.setMaterial(U,Vt);let qt=q.index,te=1;U.wireframe===!0&&(qt=dt.getWireframeAttribute(q),te=2);const Jt=q.drawRange,$t=q.attributes.position;let de=Jt.start*te,ke=(Jt.start+Jt.count)*te;Ot!==null&&(de=Math.max(de,Ot.start*te),ke=Math.min(ke,(Ot.start+Ot.count)*te)),qt!==null?(de=Math.max(de,0),ke=Math.min(ke,qt.count)):$t!=null&&(de=Math.max(de,0),ke=Math.min(ke,$t.count));const pn=ke-de;if(pn<0||pn===1/0)return;A.setup(Z,U,Wt,q,qt);let Fn,pe=at;if(qt!==null&&(Fn=Ct.get(qt),pe=gt,pe.setIndex(Fn)),Z.isMesh)U.wireframe===!0?(wt.setLineWidth(U.wireframeLinewidth*ht()),pe.setMode(1)):pe.setMode(4);else if(Z.isLine){let Kt=U.linewidth;Kt===void 0&&(Kt=1),wt.setLineWidth(Kt*ht()),Z.isLineSegments?pe.setMode(1):Z.isLineLoop?pe.setMode(2):pe.setMode(3)}else Z.isPoints?pe.setMode(0):Z.isSprite&&pe.setMode(4);if(Z.isInstancedMesh)pe.renderInstances(de,pn,Z.count);else if(q.isInstancedBufferGeometry){const Kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Vr=Math.min(q.instanceCount,Kt);pe.renderInstances(de,pn,Vr)}else pe.render(de,pn)},this.compile=function(S,G){function q(U,Z,Ot){U.transparent===!0&&U.side===Ln&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,Xe(U,Z,Ot),U.side=Dn,U.needsUpdate=!0,Xe(U,Z,Ot),U.side=Ln):Xe(U,Z,Ot)}f=jt.get(S),f.init(),g.push(f),S.traverseVisible(function(U){U.isLight&&U.layers.test(G.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.useLegacyLights),S.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let Ot=0;Ot<Z.length;Ot++){const Vt=Z[Ot];q(Vt,S,U)}else q(Z,S,U)}),g.pop(),f=null};let R=null;function Y(S){R&&R(S)}function it(){Lt.stop()}function bt(){Lt.start()}const Lt=new Xa;Lt.setAnimationLoop(Y),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(S){R=S,pt.setAnimationLoop(S),S===null?Lt.stop():Lt.start()},pt.addEventListener("sessionstart",it),pt.addEventListener("sessionend",bt),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(G),G=pt.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,G,_),f=jt.get(S,g.length),f.init(),g.push(f),Et.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),rt.setFromProjectionMatrix(Et),st=this.localClippingEnabled,$=M.init(this.clippingPlanes,st),h=ie.get(S,m.length),h.init(),m.push(h),oe(S,G,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(tt,V),$===!0&&M.beginShadows();const q=f.state.shadowsArray;if(v.render(q,S,G),$===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(h,S),f.setupLights(p.useLegacyLights),G.isArrayCamera){const U=G.cameras;for(let Z=0,Ot=U.length;Z<Ot;Z++){const Vt=U[Z];ye(h,S,Vt,Vt.viewport)}}else ye(h,S,G);_!==null&&(K.updateMultisampleRenderTarget(_),K.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(p,S,G),A.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function oe(S,G,q,U){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||rt.intersectsSprite(S)){U&&H.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Et);const Vt=kt.update(S),Wt=S.material;Wt.visible&&h.push(S,Vt,Wt,q,H.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==At.render.frame&&(S.skeleton.update(),S.skeleton.frame=At.render.frame),!S.frustumCulled||rt.intersectsObject(S))){U&&H.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Et);const Vt=kt.update(S),Wt=S.material;if(Array.isArray(Wt)){const qt=Vt.groups;for(let te=0,Jt=qt.length;te<Jt;te++){const $t=qt[te],de=Wt[$t.materialIndex];de&&de.visible&&h.push(S,Vt,de,q,H.z,$t)}}else Wt.visible&&h.push(S,Vt,Wt,q,H.z,null)}}const Ot=S.children;for(let Vt=0,Wt=Ot.length;Vt<Wt;Vt++)oe(Ot[Vt],G,q,U)}function ye(S,G,q,U){const Z=S.opaque,Ot=S.transmissive,Vt=S.transparent;f.setupLightsView(q),$===!0&&M.setGlobalState(p.clippingPlanes,q),Ot.length>0&&Le(Z,G,q),U&&wt.viewport(L.copy(U)),Z.length>0&&on(Z,G,q),Ot.length>0&&on(Ot,G,q),Vt.length>0&&on(Vt,G,q),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Le(S,G,q){const U=Mt.isWebGL2;et===null&&(et=new ei(1024,1024,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Ki:Qn,minFilter:$i,samples:U&&s===!0?4:0}));const Z=p.getRenderTarget();p.setRenderTarget(et),p.clear();const Ot=p.toneMapping;p.toneMapping=Sn,on(S,G,q),p.toneMapping=Ot,K.updateMultisampleRenderTarget(et),K.updateRenderTargetMipmap(et),p.setRenderTarget(Z)}function on(S,G,q){const U=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Ot=S.length;Z<Ot;Z++){const Vt=S[Z],Wt=Vt.object,qt=Vt.geometry,te=U===null?Vt.material:U,Jt=Vt.group;Wt.layers.test(q.layers)&&ue(Wt,G,q,qt,te,Jt)}}function ue(S,G,q,U,Z,Ot){S.onBeforeRender(p,G,q,U,Z,Ot),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(p,G,q,U,S,Ot),Z.transparent===!0&&Z.side===Ln&&Z.forceSinglePass===!1?(Z.side=We,Z.needsUpdate=!0,p.renderBufferDirect(q,G,U,Z,S,Ot),Z.side=Dn,Z.needsUpdate=!0,p.renderBufferDirect(q,G,U,Z,S,Ot),Z.side=Ln):p.renderBufferDirect(q,G,U,Z,S,Ot),S.onAfterRender(p,G,q,U,Z,Ot)}function Xe(S,G,q){G.isScene!==!0&&(G=nt);const U=zt.get(S),Z=f.state.lights,Ot=f.state.shadowsArray,Vt=Z.state.version,Wt=Ft.getParameters(S,Z.state,Ot,G,q),qt=Ft.getProgramCacheKey(Wt);let te=U.programs;U.environment=S.isMeshStandardMaterial?G.environment:null,U.fog=G.fog,U.envMap=(S.isMeshStandardMaterial?lt:Q).get(S.envMap||U.environment),te===void 0&&(S.addEventListener("dispose",Zt),te=new Map,U.programs=te);let Jt=te.get(qt);if(Jt!==void 0){if(U.currentProgram===Jt&&U.lightsStateVersion===Vt)return an(S,Wt),Jt}else Wt.uniforms=Ft.getUniforms(S),S.onBuild(q,Wt,p),S.onBeforeCompile(Wt,p),Jt=Ft.acquireProgram(Wt,qt),te.set(qt,Jt),U.uniforms=Wt.uniforms;const $t=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&($t.clippingPlanes=M.uniform),an(S,Wt),U.needsLights=hl(S),U.lightsStateVersion=Vt,U.needsLights&&($t.ambientLightColor.value=Z.state.ambient,$t.lightProbe.value=Z.state.probe,$t.directionalLights.value=Z.state.directional,$t.directionalLightShadows.value=Z.state.directionalShadow,$t.spotLights.value=Z.state.spot,$t.spotLightShadows.value=Z.state.spotShadow,$t.rectAreaLights.value=Z.state.rectArea,$t.ltc_1.value=Z.state.rectAreaLTC1,$t.ltc_2.value=Z.state.rectAreaLTC2,$t.pointLights.value=Z.state.point,$t.pointLightShadows.value=Z.state.pointShadow,$t.hemisphereLights.value=Z.state.hemi,$t.directionalShadowMap.value=Z.state.directionalShadowMap,$t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$t.spotShadowMap.value=Z.state.spotShadowMap,$t.spotLightMatrix.value=Z.state.spotLightMatrix,$t.spotLightMap.value=Z.state.spotLightMap,$t.pointShadowMap.value=Z.state.pointShadowMap,$t.pointShadowMatrix.value=Z.state.pointShadowMatrix);const de=Jt.getUniforms(),ke=Lr.seqWithValue(de.seq,$t);return U.currentProgram=Jt,U.uniformsList=ke,Jt}function an(S,G){const q=zt.get(S);q.outputEncoding=G.outputEncoding,q.instancing=G.instancing,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function cl(S,G,q,U,Z){G.isScene!==!0&&(G=nt),K.resetTextureUnits();const Ot=G.fog,Vt=U.isMeshStandardMaterial?G.environment:null,Wt=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ti,qt=(U.isMeshStandardMaterial?lt:Q).get(U.envMap||Vt),te=U.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Jt=!!U.normalMap&&!!q.attributes.tangent,$t=!!q.morphAttributes.position,de=!!q.morphAttributes.normal,ke=!!q.morphAttributes.color,pn=U.toneMapped?p.toneMapping:Sn,Fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=Fn!==void 0?Fn.length:0,Kt=zt.get(U),Vr=f.state.lights;if($===!0&&(st===!0||S!==w)){const Ue=S===w&&U.id===b;M.setState(U,S,Ue)}let be=!1;U.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Vr.state.version||Kt.outputEncoding!==Wt||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Kt.envMap!==qt||U.fog===!0&&Kt.fog!==Ot||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==M.numPlanes||Kt.numIntersection!==M.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==Jt||Kt.morphTargets!==$t||Kt.morphNormals!==de||Kt.morphColors!==ke||Kt.toneMapping!==pn||Mt.isWebGL2===!0&&Kt.morphTargetsCount!==pe)&&(be=!0):(be=!0,Kt.__version=U.version);let On=Kt.currentProgram;be===!0&&(On=Xe(U,G,Z));let js=!1,Fi=!1,Hr=!1;const Pe=On.getUniforms(),zn=Kt.uniforms;if(wt.useProgram(On.program)&&(js=!0,Fi=!0,Hr=!0),U.id!==b&&(b=U.id,Fi=!0),js||w!==S){if(Pe.setValue(B,"projectionMatrix",S.projectionMatrix),Mt.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Fi=!0,Hr=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ue=Pe.map.cameraPosition;Ue!==void 0&&Ue.setValue(B,H.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&Pe.setValue(B,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){Pe.setOptional(B,Z,"bindMatrix"),Pe.setOptional(B,Z,"bindMatrixInverse");const Ue=Z.skeleton;Ue&&(Mt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(B,"boneTexture",Ue.boneTexture,K),Pe.setValue(B,"boneTextureSize",Ue.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wr=q.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&Mt.isWebGL2===!0)&&ot.update(Z,q,On),(Fi||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Pe.setValue(B,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(zn.envMap.value=qt,zn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),Fi&&(Pe.setValue(B,"toneMappingExposure",p.toneMappingExposure),Kt.needsLights&&ul(zn,Hr),Ot&&U.fog===!0&&Ut.refreshFogUniforms(zn,Ot),Ut.refreshMaterialUniforms(zn,U,J,O,et),Lr.upload(B,Kt.uniformsList,zn,K)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Lr.upload(B,Kt.uniformsList,zn,K),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Pe.setValue(B,"center",Z.center),Pe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(B,"normalMatrix",Z.normalMatrix),Pe.setValue(B,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ue=U.uniformsGroups;for(let qr=0,fl=Ue.length;qr<fl;qr++)if(Mt.isWebGL2){const Qs=Ue[qr];k.update(Qs,On),k.bind(Qs,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function ul(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function hl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,G,q){zt.get(S.texture).__webglTexture=G,zt.get(S.depthTexture).__webglTexture=q;const U=zt.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=q===void 0,U.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){const q=zt.get(S);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,q=0){_=S,x=G,E=q;let U=!0,Z=null,Ot=!1,Vt=!1;if(S){const qt=zt.get(S);qt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(36160,null),U=!1):qt.__webglFramebuffer===void 0?K.setupRenderTarget(S):qt.__hasExternalTextures&&K.rebindTextures(S,zt.get(S.texture).__webglTexture,zt.get(S.depthTexture).__webglTexture);const te=S.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Vt=!0);const Jt=zt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Jt[G],Ot=!0):Mt.isWebGL2&&S.samples>0&&K.useMultisampledRTT(S)===!1?Z=zt.get(S).__webglMultisampledFramebuffer:Z=Jt,L.copy(S.viewport),F.copy(S.scissor),y=S.scissorTest}else L.copy(z).multiplyScalar(J).floor(),F.copy(X).multiplyScalar(J).floor(),y=j;if(wt.bindFramebuffer(36160,Z)&&Mt.drawBuffers&&U&&wt.drawBuffers(S,Z),wt.viewport(L),wt.scissor(F),wt.setScissorTest(y),Ot){const qt=zt.get(S.texture);B.framebufferTexture2D(36160,36064,34069+G,qt.__webglTexture,q)}else if(Vt){const qt=zt.get(S.texture),te=G||0;B.framebufferTextureLayer(36160,36064,qt.__webglTexture,q||0,te)}b=-1},this.readRenderTargetPixels=function(S,G,q,U,Z,Ot,Vt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=zt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt){wt.bindFramebuffer(36160,Wt);try{const qt=S.texture,te=qt.format,Jt=qt.type;if(te!==rn&&Rt.convert(te)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=Jt===Ki&&(xt.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Jt!==Qn&&Rt.convert(Jt)!==B.getParameter(35738)&&!(Jt===$n&&(Mt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-U&&q>=0&&q<=S.height-Z&&B.readPixels(G,q,U,Z,Rt.convert(te),Rt.convert(Jt),Ot)}finally{const qt=_!==null?zt.get(_).__webglFramebuffer:null;wt.bindFramebuffer(36160,qt)}}},this.copyFramebufferToTexture=function(S,G,q=0){const U=Math.pow(2,-q),Z=Math.floor(G.image.width*U),Ot=Math.floor(G.image.height*U);K.setTexture2D(G,0),B.copyTexSubImage2D(3553,q,0,0,S.x,S.y,Z,Ot),wt.unbindTexture()},this.copyTextureToTexture=function(S,G,q,U=0){const Z=G.image.width,Ot=G.image.height,Vt=Rt.convert(q.format),Wt=Rt.convert(q.type);K.setTexture2D(q,0),B.pixelStorei(37440,q.flipY),B.pixelStorei(37441,q.premultiplyAlpha),B.pixelStorei(3317,q.unpackAlignment),G.isDataTexture?B.texSubImage2D(3553,U,S.x,S.y,Z,Ot,Vt,Wt,G.image.data):G.isCompressedTexture?B.compressedTexSubImage2D(3553,U,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,Vt,G.mipmaps[0].data):B.texSubImage2D(3553,U,S.x,S.y,Vt,Wt,G.image),U===0&&q.generateMipmaps&&B.generateMipmap(3553),wt.unbindTexture()},this.copyTextureToTexture3D=function(S,G,q,U,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ot=S.max.x-S.min.x+1,Vt=S.max.y-S.min.y+1,Wt=S.max.z-S.min.z+1,qt=Rt.convert(U.format),te=Rt.convert(U.type);let Jt;if(U.isData3DTexture)K.setTexture3D(U,0),Jt=32879;else if(U.isDataArrayTexture)K.setTexture2DArray(U,0),Jt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,U.flipY),B.pixelStorei(37441,U.premultiplyAlpha),B.pixelStorei(3317,U.unpackAlignment);const $t=B.getParameter(3314),de=B.getParameter(32878),ke=B.getParameter(3316),pn=B.getParameter(3315),Fn=B.getParameter(32877),pe=q.isCompressedTexture?q.mipmaps[0]:q.image;B.pixelStorei(3314,pe.width),B.pixelStorei(32878,pe.height),B.pixelStorei(3316,S.min.x),B.pixelStorei(3315,S.min.y),B.pixelStorei(32877,S.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(Jt,Z,G.x,G.y,G.z,Ot,Vt,Wt,qt,te,pe.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Jt,Z,G.x,G.y,G.z,Ot,Vt,Wt,qt,pe.data)):B.texSubImage3D(Jt,Z,G.x,G.y,G.z,Ot,Vt,Wt,qt,te,pe),B.pixelStorei(3314,$t),B.pixelStorei(32878,de),B.pixelStorei(3316,ke),B.pixelStorei(3315,pn),B.pixelStorei(32877,Fn),Z===0&&U.generateMipmaps&&B.generateMipmap(Jt),wt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),wt.unbindTexture()},this.resetState=function(){x=0,E=0,_=null,wt.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Hs.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class xp extends Hs{}xp.prototype.isWebGL1Renderer=!0;class vp extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,m=(o-u)/f;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new mt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],s=[],o=[],a=new I,c=new Me;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(Ce(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ws extends dn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new mt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*h+this.aX,l=f*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yp extends Ws{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qs(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,m*=u,i(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const wr=new I,ws=new qs,Es=new qs,Ts=new qs;class bp extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(wr.subVectors(i[0],i[1]).add(i[0]),l=wr);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(wr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),ws.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,p,d),Es.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,p,d),Ts.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,p,d)}else this.curveType==="catmullrom"&&(ws.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Es.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ts.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ws.calc(c),Es.calc(c),Ts.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pa(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Sp(r,t){const e=1-r;return e*e*t}function Mp(r,t){return 2*(1-r)*r*t}function wp(r,t){return r*r*t}function Zi(r,t,e,n){return Sp(r,t)+Mp(r,e)+wp(r,n)}function Ep(r,t){const e=1-r;return e*e*e*t}function Tp(r,t){const e=1-r;return 3*e*e*r*t}function Ap(r,t){return 3*(1-r)*r*r*t}function Cp(r,t){return r*r*r*t}function Ji(r,t,e,n,i){return Ep(r,t)+Tp(r,e)+Ap(r,n)+Cp(r,i)}class Ka extends dn{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,i.x,s.x,o.x,a.x),Ji(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lp extends dn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,i.x,s.x,o.x,a.x),Ji(t,i.y,s.y,o.y,a.y),Ji(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xs extends dn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends dn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ja extends dn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Zi(t,i.x,s.x,o.x),Zi(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rp extends dn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Zi(t,i.x,s.x,o.x),Zi(t,i.y,s.y,o.y),Zi(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qa extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(pa(a,c.x,l.x,u.x,h.x),pa(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:yp,CatmullRomCurve3:bp,CubicBezierCurve:Ka,CubicBezierCurve3:Lp,EllipseCurve:Ws,LineCurve:Xs,LineCurve3:Pp,QuadraticBezierCurve:ja,QuadraticBezierCurve3:Rp,SplineCurve:Qa});class Dp extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Xs(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new tl[i.type]().fromJSON(i))}return this}}class Fs extends Dp{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Xs(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new ja(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Ka(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new Ws(t,e,n,i,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pr extends Fs{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Fs().fromJSON(i))}return this}}const Ip={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=el(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,m;if(n&&(s=kp(r,t,s,e)),r.length>80*e){a=l=r[0],c=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return Qi(s,o,e,a,c,m,0),o}};function el(r,t,e,n,i){let s,o;if(i===Jp(r,t,e,n)>0)for(s=t;s<e;s+=n)o=ma(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=ma(s,r[s],r[s+1],o);return o&&Gr(o,o.next)&&(er(o),o=o.next),o}function ii(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Gr(e,e.next)||ce(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qi(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Hp(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Fp(r,n,i,s):Np(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),er(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Op(ii(r),t,e),Qi(r,t,e,n,i,s,2)):o===2&&zp(r,t,e,n,i,s):Qi(ii(r),t,e,n,i,s,1);break}}}function Np(r){const t=r.prev,e=r,n=r.next;if(ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&wi(i,a,s,c,o,l,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fp(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ce(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,m=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,p=a>c?a>l?a:l:c>l?c:l,d=u>h?u>f?u:f:h>f?h:f,x=Os(m,g,t,e,n),E=Os(p,d,t,e,n);let _=r.prevZ,b=r.nextZ;for(;_&&_.z>=x&&b&&b.z<=E;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&wi(a,u,c,h,l,f,_.x,_.y)&&ce(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=m&&b.x<=p&&b.y>=g&&b.y<=d&&b!==i&&b!==o&&wi(a,u,c,h,l,f,b.x,b.y)&&ce(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=x;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&wi(a,u,c,h,l,f,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=E;){if(b.x>=m&&b.x<=p&&b.y>=g&&b.y<=d&&b!==i&&b!==o&&wi(a,u,c,h,l,f,b.x,b.y)&&ce(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Op(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Gr(i,s)&&nl(i,n,n.next,s)&&tr(i,s)&&tr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),er(n),er(n.next),n=r=s),n=n.next}while(n!==r);return ii(n)}function zp(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xp(o,a)){let c=il(o,a);o=ii(o,o.next),c=ii(c,c.next),Qi(o,t,e,n,i,s,0),Qi(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function kp(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=el(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(qp(l));for(i.sort(Up),s=0;s<i.length;s++)e=Bp(i[s],e);return e}function Up(r,t){return r.x-t.x}function Bp(r,t){const e=Gp(r,t);if(!e)return t;const n=il(e,r);return ii(n,n.next),ii(e,e.next)}function Gp(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&wi(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),tr(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&Vp(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function Vp(r,t){return ce(r.prev,r,t.prev)<0&&ce(t.next,r,r.next)<0}function Hp(r,t,e,n){let i=r;do i.z===0&&(i.z=Os(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Wp(i)}function Wp(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Os(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function qp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function wi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Xp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Yp(r,t)&&(tr(r,t)&&tr(t,r)&&Zp(r,t)&&(ce(r.prev,r,t.prev)||ce(r,t.prev,t))||Gr(r,t)&&ce(r.prev,r,r.next)>0&&ce(t.prev,t,t.next)>0)}function ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Gr(r,t){return r.x===t.x&&r.y===t.y}function nl(r,t,e,n){const i=Tr(ce(r,t,e)),s=Tr(ce(r,t,n)),o=Tr(ce(e,n,r)),a=Tr(ce(e,n,t));return!!(i!==s&&o!==a||i===0&&Er(r,e,t)||s===0&&Er(r,n,t)||o===0&&Er(e,r,n)||a===0&&Er(e,t,n))}function Er(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Tr(r){return r>0?1:r<0?-1:0}function Yp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&nl(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function tr(r,t){return ce(r.prev,r,r.next)<0?ce(r,t,r.next)>=0&&ce(r,r.prev,t)>=0:ce(r,t,r.prev)<0||ce(r,r.next,t)<0}function Zp(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function il(r,t){const e=new zs(r.i,r.x,r.y),n=new zs(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ma(r,t,e,n){const i=new zs(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function er(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zs(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jp(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Ci{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ci.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ga(t),_a(n,t);let o=t.length;e.forEach(ga);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,_a(n,e[c]);const a=Ip.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ga(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function _a(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ys extends Nn{constructor(t=new Pr([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Mn(i,3)),this.setAttribute("uv",new Mn(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:$p;let _,b=!1,w,L,F,y;x&&(_=x.getSpacedPoints(u),b=!0,f=!1,w=x.computeFrenetFrames(u,!1),L=new I,F=new I,y=new I),f||(d=0,m=0,g=0,p=0);const T=a.extractPoints(l);let O=T.shape;const J=T.holes;if(!Ci.isClockWise(O)){O=O.reverse();for(let K=0,Q=J.length;K<Q;K++){const lt=J[K];Ci.isClockWise(lt)&&(J[K]=lt.reverse())}}const V=Ci.triangulateShape(O,J),z=O;for(let K=0,Q=J.length;K<Q;K++){const lt=J[K];O=O.concat(lt)}function X(K,Q,lt){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(Q,lt)}const j=O.length,rt=V.length;function $(K,Q,lt){let Ct,dt,kt;const Ft=K.x-Q.x,Ut=K.y-Q.y,ie=lt.x-K.x,jt=lt.y-K.y,M=Ft*Ft+Ut*Ut,v=Ft*jt-Ut*ie;if(Math.abs(v)>Number.EPSILON){const W=Math.sqrt(M),ot=Math.sqrt(ie*ie+jt*jt),at=Q.x-Ut/W,gt=Q.y+Ft/W,Rt=lt.x-jt/ot,A=lt.y+ie/ot,k=((Rt-at)*jt-(A-gt)*ie)/(Ft*jt-Ut*ie);Ct=at+Ft*k-K.x,dt=gt+Ut*k-K.y;const vt=Ct*Ct+dt*dt;if(vt<=2)return new mt(Ct,dt);kt=Math.sqrt(vt/2)}else{let W=!1;Ft>Number.EPSILON?ie>Number.EPSILON&&(W=!0):Ft<-Number.EPSILON?ie<-Number.EPSILON&&(W=!0):Math.sign(Ut)===Math.sign(jt)&&(W=!0),W?(Ct=-Ut,dt=Ft,kt=Math.sqrt(M)):(Ct=Ft,dt=Ut,kt=Math.sqrt(M/2))}return new mt(Ct/kt,dt/kt)}const st=[];for(let K=0,Q=z.length,lt=Q-1,Ct=K+1;K<Q;K++,lt++,Ct++)lt===Q&&(lt=0),Ct===Q&&(Ct=0),st[K]=$(z[K],z[lt],z[Ct]);const et=[];let Et,H=st.concat();for(let K=0,Q=J.length;K<Q;K++){const lt=J[K];Et=[];for(let Ct=0,dt=lt.length,kt=dt-1,Ft=Ct+1;Ct<dt;Ct++,kt++,Ft++)kt===dt&&(kt=0),Ft===dt&&(Ft=0),Et[Ct]=$(lt[Ct],lt[kt],lt[Ft]);et.push(Et),H=H.concat(Et)}for(let K=0;K<d;K++){const Q=K/d,lt=m*Math.cos(Q*Math.PI/2),Ct=g*Math.sin(Q*Math.PI/2)+p;for(let dt=0,kt=z.length;dt<kt;dt++){const Ft=X(z[dt],st[dt],Ct);xt(Ft.x,Ft.y,-lt)}for(let dt=0,kt=J.length;dt<kt;dt++){const Ft=J[dt];Et=et[dt];for(let Ut=0,ie=Ft.length;Ut<ie;Ut++){const jt=X(Ft[Ut],Et[Ut],Ct);xt(jt.x,jt.y,-lt)}}}const nt=g+p;for(let K=0;K<j;K++){const Q=f?X(O[K],H[K],nt):O[K];b?(F.copy(w.normals[0]).multiplyScalar(Q.x),L.copy(w.binormals[0]).multiplyScalar(Q.y),y.copy(_[0]).add(F).add(L),xt(y.x,y.y,y.z)):xt(Q.x,Q.y,0)}for(let K=1;K<=u;K++)for(let Q=0;Q<j;Q++){const lt=f?X(O[Q],H[Q],nt):O[Q];b?(F.copy(w.normals[K]).multiplyScalar(lt.x),L.copy(w.binormals[K]).multiplyScalar(lt.y),y.copy(_[K]).add(F).add(L),xt(y.x,y.y,y.z)):xt(lt.x,lt.y,h/u*K)}for(let K=d-1;K>=0;K--){const Q=K/d,lt=m*Math.cos(Q*Math.PI/2),Ct=g*Math.sin(Q*Math.PI/2)+p;for(let dt=0,kt=z.length;dt<kt;dt++){const Ft=X(z[dt],st[dt],Ct);xt(Ft.x,Ft.y,h+lt)}for(let dt=0,kt=J.length;dt<kt;dt++){const Ft=J[dt];Et=et[dt];for(let Ut=0,ie=Ft.length;Ut<ie;Ut++){const jt=X(Ft[Ut],Et[Ut],Ct);b?xt(jt.x,jt.y+_[u-1].y,_[u-1].x+lt):xt(jt.x,jt.y,h+lt)}}}ht(),B();function ht(){const K=i.length/3;if(f){let Q=0,lt=j*Q;for(let Ct=0;Ct<rt;Ct++){const dt=V[Ct];Mt(dt[2]+lt,dt[1]+lt,dt[0]+lt)}Q=u+d*2,lt=j*Q;for(let Ct=0;Ct<rt;Ct++){const dt=V[Ct];Mt(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let Q=0;Q<rt;Q++){const lt=V[Q];Mt(lt[2],lt[1],lt[0])}for(let Q=0;Q<rt;Q++){const lt=V[Q];Mt(lt[0]+j*u,lt[1]+j*u,lt[2]+j*u)}}n.addGroup(K,i.length/3-K,0)}function B(){const K=i.length/3;let Q=0;St(z,Q),Q+=z.length;for(let lt=0,Ct=J.length;lt<Ct;lt++){const dt=J[lt];St(dt,Q),Q+=dt.length}n.addGroup(K,i.length/3-K,1)}function St(K,Q){let lt=K.length;for(;--lt>=0;){const Ct=lt;let dt=lt-1;dt<0&&(dt=K.length-1);for(let kt=0,Ft=u+d*2;kt<Ft;kt++){const Ut=j*kt,ie=j*(kt+1),jt=Q+Ct+Ut,M=Q+dt+Ut,v=Q+dt+ie,W=Q+Ct+ie;wt(jt,M,v,W)}}}function xt(K,Q,lt){c.push(K),c.push(Q),c.push(lt)}function Mt(K,Q,lt){At(K),At(Q),At(lt);const Ct=i.length/3,dt=E.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);zt(dt[0]),zt(dt[1]),zt(dt[2])}function wt(K,Q,lt,Ct){At(K),At(Q),At(Ct),At(Q),At(lt),At(Ct);const dt=i.length/3,kt=E.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);zt(kt[0]),zt(kt[1]),zt(kt[3]),zt(kt[1]),zt(kt[2]),zt(kt[3])}function At(K){i.push(c[K*3+0]),i.push(c[K*3+1]),i.push(c[K*3+2])}function zt(K){s.push(K.x),s.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new tl[i.type]().fromJSON(i)),new Ys(n,t.options)}}const $p={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new mt(s,o),new mt(a,c),new mt(l,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],m=t[i*3+1],g=t[i*3+2],p=t[s*3],d=t[s*3+1],x=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-h),new mt(f,1-g),new mt(p,1-x)]:[new mt(a,1-c),new mt(u,1-h),new mt(m,1-g),new mt(d,1-x)]}};function Kp(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}const xa={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class jp{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Qp=new jp;class Zs{constructor(t){this.manager=t!==void 0?t:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const yn={};class tm extends Error{constructor(t,e){super(t),this.response=e}}class rl extends Zs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=xa.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(yn[t]!==void 0){yn[t].push({onLoad:e,onProgress:n,onError:i});return}yn[t]=[],yn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=yn[t],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let p=0;const d=new ReadableStream({start(x){E();function E(){h.read().then(({done:_,value:b})=>{if(_)x.close();else{p+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let L=0,F=u.length;L<F;L++){const y=u[L];y.onProgress&&y.onProgress(w)}x.enqueue(b),E()}})}}});return new Response(d)}else throw new tm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{xa.add(t,l);const u=yn[t];delete yn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=yn[t];if(u===void 0)throw this.manager.itemError(t),l;delete yn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}let Ar;class sl{static getContext(){return Ar===void 0&&(Ar=new(window.AudioContext||window.webkitAudioContext)),Ar}static setContext(t){Ar=t}}class em extends Zs{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new rl(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const c=a.slice(0);sl.getContext().decodeAudioData(c,function(u){e(u)})}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}}class nm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=va(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=va();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function va(){return(typeof performance>"u"?Date:performance).now()}const Gn=new I,ya=new In,im=new I,Vn=new I;class rm extends Fe{constructor(){super(),this.type="AudioListener",this.context=sl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new nm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Gn,ya,im),Vn.set(0,0,-1).applyQuaternion(ya),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Gn.x,i),e.positionY.linearRampToValueAtTime(Gn.y,i),e.positionZ.linearRampToValueAtTime(Gn.z,i),e.forwardX.linearRampToValueAtTime(Vn.x,i),e.forwardY.linearRampToValueAtTime(Vn.y,i),e.forwardZ.linearRampToValueAtTime(Vn.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Gn.x,Gn.y,Gn.z),e.setOrientation(Vn.x,Vn.y,Vn.z,n.x,n.y,n.z)}}class sm extends Fe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class ba{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class om{constructor(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Fs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(x){const E=[];for(let _=0,b=x.length;_<b;_++){const w=x[_],L=new Pr;L.curves=w.curves,E.push(L)}return E}function n(x,E){const _=E.length;let b=!1;for(let w=_-1,L=0;L<_;w=L++){let F=E[w],y=E[L],T=y.x-F.x,O=y.y-F.y;if(Math.abs(O)>Number.EPSILON){if(O<0&&(F=E[L],T=-T,y=E[w],O=-O),x.y<F.y||x.y>y.y)continue;if(x.y===F.y){if(x.x===F.x)return!0}else{const J=O*(x.x-F.x)-T*(x.y-F.y);if(J===0)return!0;if(J<0)continue;b=!b}}else{if(x.y!==F.y)continue;if(y.x<=x.x&&x.x<=F.x||F.x<=x.x&&x.x<=y.x)return!0}}return b}const i=Ci.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Pr,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],g=0,p;f[g]=void 0,m[g]=[];for(let x=0,E=s.length;x<E;x++)a=s[x],p=a.getPoints(),o=i(p),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Pr,p},f[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:p[0]});if(!f[0])return e(s);if(f.length>1){let x=!1,E=0;for(let _=0,b=f.length;_<b;_++)h[_]=[];for(let _=0,b=f.length;_<b;_++){const w=m[_];for(let L=0;L<w.length;L++){const F=w[L];let y=!0;for(let T=0;T<f.length;T++)n(F.p,f[T].p)&&(_!==T&&E++,y?(y=!1,h[T].push(F)):x=!0);y&&h[_].push(F)}}E>0&&x===!1&&(m=h)}let d;for(let x=0,E=f.length;x<E;x++){c=f[x].s,l.push(c),d=m[x];for(let _=0,b=d.length;_<b;_++)c.holes.push(d[_].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bs);const Sa={type:"change"},As={type:"start"},Ma={type:"end"};class am extends ri{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",jt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",jt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Sa),n.update(),s=i.NONE},this.update=function(){const A=new I,k=new In().setFromUnitVectors(t.up,new I(0,1,0)),vt=k.clone().invert(),pt=new I,Pt=new In,It=2*Math.PI;return function(){const Zt=n.object.position;A.copy(Zt).sub(n.target),A.applyQuaternion(k),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&T(F()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Qt=n.minAzimuthAngle,re=n.maxAzimuthAngle;return isFinite(Qt)&&isFinite(re)&&(Qt<-Math.PI?Qt+=It:Qt>Math.PI&&(Qt-=It),re<-Math.PI?re+=It:re>Math.PI&&(re-=It),Qt<=re?a.theta=Math.max(Qt,Math.min(re,a.theta)):a.theta=a.theta>(Qt+re)/2?Math.max(Qt,a.theta):Math.min(re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(vt),Zt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||pt.distanceToSquared(n.object.position)>o||8*(1-Pt.dot(n.object.quaternion))>o?(n.dispatchEvent(Sa),pt.copy(n.object.position),Pt.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",lt),n.domElement.removeEventListener("pointercancel",kt),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",dt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",jt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ba,c=new ba;let l=1;const u=new I;let h=!1;const f=new mt,m=new mt,g=new mt,p=new mt,d=new mt,x=new mt,E=new mt,_=new mt,b=new mt,w=[],L={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function T(A){c.theta-=A}function O(A){c.phi-=A}const J=function(){const A=new I;return function(vt,pt){A.setFromMatrixColumn(pt,0),A.multiplyScalar(-vt),u.add(A)}}(),tt=function(){const A=new I;return function(vt,pt){n.screenSpacePanning===!0?A.setFromMatrixColumn(pt,1):(A.setFromMatrixColumn(pt,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(vt),u.add(A)}}(),V=function(){const A=new I;return function(vt,pt){const Pt=n.domElement;if(n.object.isPerspectiveCamera){const It=n.object.position;A.copy(It).sub(n.target);let Dt=A.length();Dt*=Math.tan(n.object.fov/2*Math.PI/180),J(2*vt*Dt/Pt.clientHeight,n.object.matrix),tt(2*pt*Dt/Pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(vt*(n.object.right-n.object.left)/n.object.zoom/Pt.clientWidth,n.object.matrix),tt(pt*(n.object.top-n.object.bottom)/n.object.zoom/Pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A){f.set(A.clientX,A.clientY)}function rt(A){E.set(A.clientX,A.clientY)}function $(A){p.set(A.clientX,A.clientY)}function st(A){m.set(A.clientX,A.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;T(2*Math.PI*g.x/k.clientHeight),O(2*Math.PI*g.y/k.clientHeight),f.copy(m),n.update()}function et(A){_.set(A.clientX,A.clientY),b.subVectors(_,E),b.y>0?z(y()):b.y<0&&X(y()),E.copy(_),n.update()}function Et(A){d.set(A.clientX,A.clientY),x.subVectors(d,p).multiplyScalar(n.panSpeed),V(x.x,x.y),p.copy(d),n.update()}function H(A){A.deltaY<0?X(y()):A.deltaY>0&&z(y()),n.update()}function nt(A){let k=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),k=!0;break}k&&(A.preventDefault(),n.update())}function ht(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);f.set(A,k)}}function B(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);p.set(A,k)}}function St(){const A=w[0].pageX-w[1].pageX,k=w[0].pageY-w[1].pageY,vt=Math.sqrt(A*A+k*k);E.set(0,vt)}function xt(){n.enableZoom&&St(),n.enablePan&&B()}function Mt(){n.enableZoom&&St(),n.enableRotate&&ht()}function wt(A){if(w.length==1)m.set(A.pageX,A.pageY);else{const vt=Rt(A),pt=.5*(A.pageX+vt.x),Pt=.5*(A.pageY+vt.y);m.set(pt,Pt)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;T(2*Math.PI*g.x/k.clientHeight),O(2*Math.PI*g.y/k.clientHeight),f.copy(m)}function At(A){if(w.length===1)d.set(A.pageX,A.pageY);else{const k=Rt(A),vt=.5*(A.pageX+k.x),pt=.5*(A.pageY+k.y);d.set(vt,pt)}x.subVectors(d,p).multiplyScalar(n.panSpeed),V(x.x,x.y),p.copy(d)}function zt(A){const k=Rt(A),vt=A.pageX-k.x,pt=A.pageY-k.y,Pt=Math.sqrt(vt*vt+pt*pt);_.set(0,Pt),b.set(0,Math.pow(_.y/E.y,n.zoomSpeed)),z(b.y),E.copy(_)}function K(A){n.enableZoom&&zt(A),n.enablePan&&At(A)}function Q(A){n.enableZoom&&zt(A),n.enableRotate&&wt(A)}function lt(A){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Ct),n.domElement.addEventListener("pointerup",dt)),ot(A),A.pointerType==="touch"?M(A):Ft(A))}function Ct(A){n.enabled!==!1&&(A.pointerType==="touch"?v(A):Ut(A))}function dt(A){at(A),w.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",dt)),n.dispatchEvent(Ma),s=i.NONE}function kt(A){at(A)}function Ft(A){let k;switch(A.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case si.DOLLY:if(n.enableZoom===!1)return;rt(A),s=i.DOLLY;break;case si.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;$(A),s=i.PAN}else{if(n.enableRotate===!1)return;j(A),s=i.ROTATE}break;case si.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;j(A),s=i.ROTATE}else{if(n.enablePan===!1)return;$(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(As)}function Ut(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;st(A);break;case i.DOLLY:if(n.enableZoom===!1)return;et(A);break;case i.PAN:if(n.enablePan===!1)return;Et(A);break}}function ie(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(As),H(A),n.dispatchEvent(Ma))}function jt(A){n.enabled===!1||n.enablePan===!1||nt(A)}function M(A){switch(gt(A),w.length){case 1:switch(n.touches.ONE){case oi.ROTATE:if(n.enableRotate===!1)return;ht(),s=i.TOUCH_ROTATE;break;case oi.PAN:if(n.enablePan===!1)return;B(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case oi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xt(),s=i.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(As)}function v(A){switch(gt(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;wt(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;At(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(A),n.update();break;default:s=i.NONE}}function W(A){n.enabled!==!1&&A.preventDefault()}function ot(A){w.push(A)}function at(A){delete L[A.pointerId];for(let k=0;k<w.length;k++)if(w[k].pointerId==A.pointerId){w.splice(k,1);return}}function gt(A){let k=L[A.pointerId];k===void 0&&(k=new mt,L[A.pointerId]=k),k.set(A.pageX,A.pageY)}function Rt(A){const k=A.pointerId===w[0].pointerId?w[1]:w[0];return L[k.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",lt),n.domElement.addEventListener("pointercancel",kt),n.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}const Gt={colors:[{name:"yellow",hex:16776960},{name:"white",hex:16777215},{name:"green",hex:65280},{name:"red",hex:16711680},{name:"orange",hex:16753920},{name:"blue",hex:255}],canvasColor:0,dimensions:3,totalSize:3,borderSize:.025,borderColor:0,initialCameraPosition:{x:0,y:0,z:7},animationSpeed:100},lm={bottom:[[0,0,0],[0,0,0],[0,0,0]],top:[[1,1,1],[1,1,1],[1,1,1]],front:[[2,2,2],[2,2,2],[2,2,2]],right:[[3,3,3],[3,3,3],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[5,5,5],[5,5,5],[5,5,5]]},wa=["u","d","l","r","f","b","m"],he={0:"bottom",1:"top",2:"front",3:"right",4:"left",5:"back"},N=()=>[{move:"u",inverted:!1}],Tt=()=>[{move:"u",inverted:!1},{move:"u",inverted:!1}],D=()=>[{move:"u",inverted:!0}],C=()=>[{move:"r",inverted:!1}],Yt=()=>[{move:"r",inverted:!1},{move:"r",inverted:!1}],P=()=>[{move:"r",inverted:!0}],ut=()=>[{move:"f",inverted:!1}],ol=()=>[{move:"f",inverted:!1},{move:"f",inverted:!1}],_t=()=>[{move:"f",inverted:!0}],yt=()=>[{move:"d",inverted:!1}],ne=()=>[{move:"d",inverted:!1},{move:"d",inverted:!1}],ct=()=>[{move:"d",inverted:!0}],Nt=()=>[{move:"l",inverted:!1}],Js=()=>[{move:"l",inverted:!1},{move:"l",inverted:!1}],Bt=()=>[{move:"l",inverted:!0}],ee=()=>[{move:"b",inverted:!1}],Fr=()=>[{move:"b",inverted:!1},{move:"b",inverted:!1}],le=()=>[{move:"b",inverted:!0}],fn=()=>[{move:"m",inverted:!1}],Oe=()=>[{move:"m",inverted:!1},{move:"m",inverted:!1}],ze=()=>[{move:"m",inverted:!0}],_e=()=>[...C(),...ze()],Hn=()=>[...Yt(),...Oe()],ge=()=>[...P(),...fn()],Hi=()=>[...Nt(),...fn()],Wi=()=>[...Bt(),...ze()],$s=[{name:"Aa",sequence:[P,ut,P,Fr,C,_t,P,Fr,Yt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,3],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,4]],right:[[3,3,5],[3,3,2],[3,3,3]],left:[[4,4,4],[4,4,5],[4,4,5]],back:[[2,2,2],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,2]],left:[[4,4,5],[4,4,3],[4,4,3]],back:[[2,2,4],[2,2,5],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,3]],right:[[3,3,2],[3,3,5],[3,3,4]],left:[[4,4,3],[4,4,2],[4,4,2]],back:[[2,2,5],[2,2,3],[2,2,5]]}]},{name:"Ab",sequence:[P,le,C,D,C,yt,P,N,C,ct,Yt,ee,C],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,2]],right:[[3,3,4],[3,3,2],[3,3,4]],left:[[4,4,2],[4,4,5],[4,4,5]],back:[[2,2,5],[2,2,4],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,3]],back:[[2,2,3],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,3]],left:[[4,4,5],[4,4,2],[4,4,2]],back:[[2,2,2],[2,2,3],[2,2,4]]}]},{name:"F",sequence:[P,D,_t,C,N,P,D,P,ut,Yt,D,P,D,C,N,P,N,C],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,3]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,2],[2,2,2]]}]},{name:"Ga",sequence:[Yt,N,P,N,P,D,C,D,Yt,D,yt,P,N,C,ct],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,2],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,2]],back:[[2,2,2],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,5],[4,4,5]],back:[[2,2,2],[2,2,3],[2,2,2]]}]},{name:"Gb",sequence:[P,D,C,N,ct,Yt,N,P,N,C,D,C,D,Yt,yt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,5],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,3],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,5],[4,4,4]],back:[[2,2,4],[2,2,3],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,2],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,4],[5,5,4]],right:[[3,3,5],[3,3,2],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"Gc",sequence:[Yt,D,C,D,C,N,P,N,Yt,N,ct,C,D,P,yt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,5],[4,4,4]],back:[[2,2,3],[2,2,3],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,2],[4,4,4]],back:[[2,2,4],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,5],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,4],[2,2,2]]}]},{name:"Gd",sequence:[C,N,P,D,yt,Yt,D,C,D,P,N,P,N,Yt,ct],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,4],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,5],[4,4,2]],back:[[2,2,2],[2,2,3],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,2],[4,4,5]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"Ja",sequence:[Bt,D,Nt,ut,Bt,D,Nt,N,Nt,_t,Js,N,Nt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,2]],left:[[4,4,3],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,4],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,5],[4,4,5],[4,4,3]],back:[[2,2,4],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,2]],right:[[3,3,4],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,5],[4,4,5]],back:[[2,2,2],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,5]],back:[[2,2,5],[2,2,5],[2,2,2]]}]},{name:"Jb",sequence:[C,N,P,_t,C,N,P,D,P,ut,Yt,D,P],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,4]],left:[[4,4,2],[4,4,2],[4,4,2]],back:[[2,2,5],[2,2,3],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,2],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,4],[5,5,4]],right:[[3,3,5],[3,3,5],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,3]],back:[[2,2,3],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,2]],right:[[3,3,4],[3,3,5],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,3],[2,2,3],[2,2,3]]}]},{name:"Ra",sequence:[C,D,P,D,C,N,C,yt,P,D,C,ct,P,Tt,P],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,4]],left:[[4,4,2],[4,4,3],[4,4,2]],back:[[2,2,5],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,5],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,2]],back:[[2,2,2],[2,2,3],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,2],[4,4,3]],back:[[2,2,3],[2,2,3],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,5]],left:[[4,4,2],[4,4,2],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,3]]}]},{name:"Rb",sequence:[Yt,ut,C,N,C,D,P,_t,C,Tt,P,Tt,C],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,2],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,5],[4,4,5]],back:[[2,2,5],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,2]],left:[[4,4,3],[4,4,5],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,2]],left:[[4,4,5],[4,4,4],[4,4,3]],back:[[2,2,4],[2,2,5],[2,2,4]]}]},{name:"T",sequence:[C,N,P,D,P,ut,Yt,D,P,D,C,N,P,_t],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,3],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,2]],back:[[2,2,2],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,5]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"E",sequence:[P,D,P,ct,C,D,P,yt,C,N,P,ct,C,N,P,yt,Yt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,4],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,4],[2,2,2],[2,2,3]]}]},{name:"Na",sequence:[C,N,P,N,C,N,P,_t,C,N,P,D,P,ut,Yt,D,P,Tt,C,D,P],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,4]],left:[[4,4,4],[4,4,3],[4,4,3]],back:[[2,2,5],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,3],[5,5,3]],right:[[3,3,2],[3,3,5],[3,3,5]],left:[[4,4,5],[4,4,2],[4,4,2]],back:[[2,2,3],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,4],[5,5,4]],right:[[3,3,5],[3,3,2],[3,3,2]],left:[[4,4,2],[4,4,5],[4,4,5]],back:[[2,2,4],[2,2,3],[2,2,3]]}]},{name:"Nb",sequence:[P,N,C,D,P,_t,D,ut,C,N,P,ut,P,_t,C,D,C],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,4],[3,3,3]],left:[[4,4,3],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,4]],right:[[3,3,5],[3,3,5],[3,3,2]],left:[[4,4,2],[4,4,2],[4,4,5]],back:[[2,2,4],[2,2,4],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,5]],left:[[4,4,5],[4,4,5],[4,4,2]],back:[[2,2,3],[2,2,3],[2,2,4]]}]},{name:"V",sequence:[P,N,P,D,C,ct,P,yt,P,N,ct,Yt,D,Yt,yt,Yt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,2],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,3],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,2],[4,4,3]],back:[[2,2,5],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,5],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,2],[2,2,2]]}]},{name:"Y",sequence:[ut,C,D,P,D,C,N,P,_t,C,N,P,D,P,ut,C,_t],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,2],[4,4,4]],back:[[2,2,2],[2,2,4],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,5],[4,4,3]],back:[[2,2,5],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,2]],right:[[3,3,4],[3,3,5],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,3],[2,2,2]]}]},{name:"H",sequence:[Oe,N,Oe,Tt,Oe,N,Oe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"Ua",sequence:[Oe,N,fn,Tt,ze,N,Oe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,5],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,5],[3,3,2]],left:[[4,4,5],[4,4,3],[4,4,5]],back:[[2,2,4],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,4],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,4]],left:[[4,4,3],[4,4,2],[4,4,3]],back:[[2,2,5],[2,2,5],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,2],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,3],[2,2,3]]}]},{name:"Ub",sequence:[Oe,D,fn,Tt,ze,D,Oe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,2]],left:[[4,4,5],[4,4,2],[4,4,5]],back:[[2,2,4],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,3],[5,5,2]],right:[[3,3,4],[3,3,2],[3,3,4]],left:[[4,4,3],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,5],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,2],[4,4,5],[4,4,2]],back:[[2,2,3],[2,2,3],[2,2,3]]}]},{name:"Z",sequence:[ze,N,Oe,N,Oe,N,ze,Tt,Oe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,2],[4,4,3],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,2],[4,4,3],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,3]]}]}];function cm(r){const t=["front","right","back","left"],e=[[0,2],[1,2],[2,2]];for(let n=0;n<t.length;n++){const i=t[n],s=t[(n+1)%t.length];for(let o=0;o<e.length;o++){const[a,c]=e[o],l=e[(o+1)%e.length];if(r[i][a][c]!==r[s][l[0]][l[1]])return!1}}return!0}function um(r){const t=$s.find(e=>{const n=e.cubeStates;return n?n.some(i=>JSON.stringify(r)===JSON.stringify(i)):!1});return t?t.name:"Unknown"}function hm(r){const t=um(r);return t==="Unknown"?[N]:$s.find(n=>n.name===t).sequence}class fm extends Ys{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}class dm extends Zs{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new rl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const c=s.parse(JSON.parse(a));e&&e(c)},n,i)}parse(t){return new pm(t)}}class pm{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=mm(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function mm(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)a=0,c-=s;else{const h=gm(u,i,a,c,e);a+=h.offsetX,o.push(h.path)}}return o}function gm(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new om;let a,c,l,u,h,f,m,g;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,x=p.length;d<x;)switch(p[d++]){case"m":a=p[d++]*t+e,c=p[d++]*t+n,o.moveTo(a,c);break;case"l":a=p[d++]*t+e,c=p[d++]*t+n,o.lineTo(a,c);break;case"q":l=p[d++]*t+e,u=p[d++]*t+n,h=p[d++]*t+e,f=p[d++]*t+n,o.quadraticCurveTo(h,f,l,u);break;case"b":l=p[d++]*t+e,u=p[d++]*t+n,h=p[d++]*t+e,f=p[d++]*t+n,m=p[d++]*t+e,g=p[d++]*t+n,o.bezierCurveTo(h,f,m,g,l,u);break}}return{offsetX:s.ha*t,path:o}}function _m({location:r,color:t,size:e,rotation:n,i,j:s}){const o=new He(new Ur(e,e),new Nr({color:t}));o.position.set(r.x,r.y,r.z),o.rotation.set(n.x,n.y,n.z);let a=!1;function c(){const l=new dm,u="("+i+" , "+s+")";l.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",h=>{const f=new fm(u,{font:h,size:.2,height:.01}),m=new He(f,new Nr({color:0}));m.translateX(-.335),m.translateY(-.08),o.add(m)})}return window.addEventListener("keydown",l=>{l.key==="t"&&(a=!a,a&&c(),a||o.remove(o.children[0]))}),{elements:[o]}}function xm({id:r,state:t}){const{totalSize:e,dimensions:n,borderSize:i,colors:s}=Gt,o=e/n,a=o-i,c=new He;for(let l=0;l<n;l++)for(let u=0;u<n;u++){const h={x:(l-(Gt.dimensions-1)/2)*o,y:(u-(Gt.dimensions-1)/2)*o,z:e/2+i/2},f=new se(s[t[l][u]].hex);c.add(_m({id:r,location:new I(h.x,h.y,h.z),rotation:new I(0,0,0),color:f,size:a,i:l,j:u}).elements[0])}return{elements:[c]}}const Ks=r=>new Promise(t=>setTimeout(t,r));async function vm(r,t,e){const n={u:{indiciesToRemove:{front:[0,1,3,4,6,7],right:[0,1,3,4,6,7],back:[0,1,3,4,6,7],left:[0,1,3,4,6,7]},axis:"y",direction:-1,rotatedSide:"top"},d:{indiciesToRemove:{front:[1,2,4,5,7,8],right:[1,2,4,5,7,8],back:[1,2,4,5,7,8],left:[1,2,4,5,7,8]},axis:"y",direction:1,rotatedSide:"bottom"},l:{indiciesToRemove:{front:[3,4,5,6,7,8],top:[3,4,5,6,7,8],back:[0,1,2,3,4,5],bottom:[3,4,5,6,7,8]},axis:"x",direction:1,rotatedSide:"left"},r:{indiciesToRemove:{front:[0,1,2,3,4,5],top:[0,1,2,3,4,5],back:[3,4,5,6,7,8],bottom:[0,1,2,3,4,5]},axis:"x",direction:-1,rotatedSide:"right"},f:{indiciesToRemove:{right:[3,4,5,6,7,8],top:[1,2,4,5,7,8],left:[0,1,2,3,4,5],bottom:[0,1,3,4,6,7]},axis:"z",direction:-1,rotatedSide:"front"},b:{indiciesToRemove:{left:[3,4,5,6,7,8],top:[0,1,3,4,6,7],right:[0,1,2,3,4,5],bottom:[1,2,4,5,7,8]},axis:"z",direction:1,rotatedSide:"back"},m:{indiciesToRemove:{front:[0,1,2,6,7,8],top:[0,1,2,6,7,8],back:[0,1,2,6,7,8],bottom:[0,1,2,6,7,8]},axis:"x",direction:1,rotatedSide:"None"}},i={bottom:0,top:1,front:2,right:3,left:4,back:5};let s=new He;const{indiciesToRemove:o}=n[t];Object.keys(o).forEach(f=>{let m=r[i[f]].clone();o[f].map(d=>m.children[0].children[d]).forEach(d=>m.children[0].remove(d)),r[i[f]].children[0].children.filter((d,x)=>!o[f].includes(x)).forEach(d=>r[i[f]].children[0].remove(d)),s.add(m),m=null});const{axis:a,direction:c,rotatedSide:l}=n[t],u=e?c*-1:c,h=l!=="None"?r[i[l]]:null;h&&s.add(h),jn.add(s),await ym(u,{mesh:s,axis:a}),jn.remove(s),s=null}async function ym(r,t){const e=Math.PI/2*r,n=Date.now(),i=n+Gt.animationSpeed;let s=0;for(;Date.now()<i;){const o=Date.now()-n,a=e/Gt.animationSpeed*o-s,{mesh:c,axis:l}=t;c.rotateOnAxis(new I(l==="x"?1:0,l==="y"?1:0,l==="z"?1:0),a),s+=a,await Ks(0)}}function $e(r){return JSON.parse(JSON.stringify(r))}function yi(r,t=!0){const e=$e(r),n=e.length,i=e[0].length,s=[];for(let o=0;o<i;o++)s[o]=new Array(n);if(t)for(let o=0;o<n;o++)for(let a=0;a<i;a++)s[a][n-o-1]=e[o][a];else for(let o=0;o<n;o++)for(let a=0;a<i;a++)s[i-a-1][o]=e[o][a];return s}async function ks(r,t,e=!1){const n=Array.from({length:Gt.dimensions},(o,a)=>a),s={r:e?1:3,l:e?3:1,u:e?3:1,d:e?1:3,f:e?3:1,b:e?3:1,m:e?3:1}[t];for(let o=0;o<s;o++){const a=$e(r.bottom),c=$e(r.right),l=$e(r.left),u=$e(r.back),h=$e(r.top);if(t==="u"||t==="d"){const f=$e(r.front),m=t==="d"?0:Gt.dimensions-1;n.forEach(g=>{r.front[g][m]=c[g][m],r.right[g][m]=u[g][m],r.back[g][m]=l[g][m],r.left[g][m]=f[g][m]}),t==="u"?r.top=yi(r.top):t==="d"&&(r.bottom=yi(r.bottom,!1))}if(t==="l"||t==="r"){const f=$e(r.front),m=t==="l"?0:Gt.dimensions-1,g=m===0?Gt.dimensions-1:0;n.forEach(p=>{const d=Gt.dimensions-1-p;r.front[m][p]=h[m][p],r.top[m][p]=u[g][d],r.back[g][d]=a[m][p],r.bottom[m][p]=f[m][p]}),t==="l"?r.left=yi(r.left):t==="r"&&(r.right=yi(r.right,!1))}if(t==="f"){const f=$e(r.top),m=0,g=Gt.dimensions-1;n.forEach(p=>{const d=Gt.dimensions-1-p;r.top[d][m]=l[g][d],r.left[g][d]=a[p][g],r.bottom[p][g]=c[m][p],r.right[m][p]=f[d][m]}),r.front=yi(r.front)}if(t==="b"){const f=$e(r.top),m=Gt.dimensions-1,g=0;n.forEach(p=>{const d=Gt.dimensions-1-p;r.top[d][m]=c[m][p],r.right[m][p]=a[p][g],r.bottom[p][g]=l[g][d],r.left[g][d]=f[d][m],r.back=yi(r.back,!1)})}if(t==="m"){const f=$e(r.front),m=Math.floor(Gt.dimensions/2);n.forEach(g=>{const p=Gt.dimensions-1-g;r.front[m][g]=h[m][g],r.top[m][g]=u[m][p],r.back[m][p]=a[m][g],r.bottom[m][g]=f[m][g]})}}return r}async function Wn({cubeState:r,moves:t,doAnimation:e,meshes:n,callback:i,playSound:s}){for(let o=0;o<t.length;o++){const{move:a,inverted:c}=t[o],l=e||Dr,u=s||Rr;l?(await vm(n,a,c),await ks(r,a,c)):(await ks(r,a,c),await Ks(Gt.animationSpeed)),u&&bm(),i()}}let Ea="";function bm(){const r=new rm,t=new sm(r),e=new em,n=["click1.mp3","click2.mp3","click3.mp3","click4.mp3","click5.mp3","click6.mp3","click7.mp3","click8.mp3"].filter(o=>o!==Ea),i="./rubiks-cube/../../audio",s=n[Math.floor(Math.random()*n.length)];Ea=s,e.load(`${i}/${s}`,function(o){t.setBuffer(o),t.setLoop(!1),t.setVolume(.2),t.play()})}function Sm(r=24){const t=[];for(let e=0;e<r;e++){const n=wa[Math.floor(Math.random()*wa.length)];if(n==="m"){e--;continue}const i=Math.random()>.5;t.push({move:n,inverted:i})}return t}function sn(r){const{colors:t}=Gt;for(let e=0;e<t.length;e++)if(t[e].name===r)return e;return-1}const Xt={go:{orange:[yt,Nt,ct,Bt,ct,_t,yt,ut],green:[ct,_t,yt,ut,yt,Nt,ct,Bt]},gr:{green:[yt,ut,ct,_t,ct,P,yt,C],red:[ct,P,yt,C,yt,ut,ct,_t]},rb:{red:[yt,C,ct,P,ct,le,yt,ee],blue:[ct,le,yt,ee,yt,C,ct,P]},bo:{blue:[yt,ee,ct,le,ct,Bt,yt,Nt],orange:[ct,Bt,yt,Nt,yt,ee,ct,le]}};function Cn(r,t){return t==="go"?r.left[2][1]===r.left[1][1]&&r.front[0][1]===r.front[1][1]:t==="gr"?r.right[0][1]===r.right[1][1]&&r.front[2][1]===r.front[1][1]:t==="rb"?r.right[2][1]===r.right[1][1]&&r.back[0][1]===r.back[1][1]:t==="bo"?r.left[0][1]===r.left[1][1]&&r.back[2][1]===r.back[1][1]:!1}function Mm(r,t,e,n){if(n==="front"){if(t===1&&e===0)return r.bottom[1][2];if(t===0&&e===1)return r.left[2][1];if(t===2&&e===1)return r.right[0][1]}if(n==="right"){if(t===1&&e===0)return r.bottom[2][1];if(t===0&&e===1)return r.left[2][1];if(t===2&&e===1)return r.back[0][1]}if(n==="back"){if(t===1&&e===0)return r.bottom[1][0];if(t===0&&e===1)return r.right[2][1];if(t===2&&e===1)return r.left[0][1]}if(n==="left"){if(t===1&&e===0)return r.bottom[0][1];if(t===0&&e===1)return r.front[2][1];if(t===2&&e===1)return r.back[0][1]}if(n==="bottom"){if(t===1&&e===0)return r.back[1][0];if(t===0&&e===1)return r.left[1][0];if(t===2&&e===1)return r.right[1][0];if(t===1&&e===2)return r.front[1][0]}return-1}function Cr(r,t,e,n){const i=r[n][t][e],s=Mm(r,t,e,n),o=sn("green"),a=sn("orange"),c=sn("blue"),l=sn("red"),u=[i,s];return u.includes(o)&&u.includes(a)?"go":u.includes(o)&&u.includes(l)?"gr":u.includes(l)&&u.includes(c)?"rb":u.includes(c)&&u.includes(a)?"bo":""}function wm(r){const t=sn("green"),e=sn("orange"),n=sn("red"),i=sn("blue"),s=[[0,1],[2,1],[1,0],[1,2]];if(!Cn(r,"go"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(Cr(r,a,c,"bottom")==="go"){if(a===1&&c===2){if(r.bottom[1][2]===t)return[ct,...Xt.go.green];if(r.bottom[1][2]===e)return[...Xt.go.orange]}if(a===2&&c===1){if(r.bottom[2][1]===t)return[ct,...Xt.go.green];if(r.bottom[2][1]===e)return[ne,...Xt.go.orange]}if(a===1&&c===0){if(r.bottom[1][0]===t)return[yt,...Xt.go.green];if(r.bottom[1][0]===e)return[ne,...Xt.go.orange]}if(a===0&&c===1){if(r.bottom[0][1]===t)return[...Xt.go.green];if(r.bottom[0][1]===e)return[yt,...Xt.go.orange]}}}if(!Cn(r,"gr"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(Cr(r,a,c,"bottom")==="gr"){if(a===1&&c===2){if(r.bottom[1][2]===t)return[yt,...Xt.gr.green];if(r.bottom[1][2]===n)return[...Xt.gr.red]}if(a===2&&c===1){if(r.bottom[2][1]===t)return[...Xt.gr.green];if(r.bottom[2][1]===n)return[ct,...Xt.gr.red]}if(a===1&&c===0){if(r.bottom[1][0]===t)return[ct,...Xt.gr.green];if(r.bottom[1][0]===n)return[ne,...Xt.gr.red]}if(a===0&&c===1){if(r.bottom[0][1]===t)return[ne,...Xt.gr.green];if(r.bottom[0][1]===n)return[yt,...Xt.gr.red]}}}if(!Cn(r,"rb"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(Cr(r,a,c,"bottom")==="rb"){if(a===1&&c===2){if(r.bottom[1][2]===n)return[ne,...Xt.rb.red];if(r.bottom[1][2]===i)return[yt,...Xt.rb.blue]}if(a===2&&c===1){if(r.bottom[2][1]===n)return[yt,...Xt.rb.red];if(r.bottom[2][1]===i)return[...Xt.rb.blue]}if(a===1&&c===0){if(r.bottom[1][0]===n)return[...Xt.rb.red];if(r.bottom[1][0]===i)return[ct,...Xt.rb.blue]}if(a===0&&c===1){if(r.bottom[0][1]===n)return[ct,...Xt.rb.red];if(r.bottom[0][1]===i)return[ne,...Xt.rb.blue]}}}if(!Cn(r,"bo"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(Cr(r,a,c,"bottom")==="bo"){if(a===1&&c===2){if(r.bottom[1][2]===i)return[ct,...Xt.bo.blue];if(r.bottom[1][2]===e)return[ne,...Xt.bo.orange]}if(a===2&&c===1){if(r.bottom[2][1]===i)return[ne,...Xt.bo.blue];if(r.bottom[2][1]===e)return[yt,...Xt.bo.orange]}if(a===1&&c===0){if(r.bottom[1][0]===i)return[yt,...Xt.bo.blue];if(r.bottom[1][0]===e)return[...Xt.bo.orange]}if(a===0&&c===1){if(r.bottom[0][1]===i)return[...Xt.bo.blue];if(r.bottom[0][1]===e)return[ct,...Xt.bo.orange]}}}return Cn(r,"go")?Cn(r,"gr")?Cn(r,"rb")?Cn(r,"bo")?[]:[...Xt.bo.blue]:[...Xt.rb.red]:[...Xt.gr.green]:[...Xt.go.green]}function Em(r){const{dimensions:t}=Gt,e=sn("yellow");for(let n=0;n<t;n++)for(let i=0;i<t;i++)if(r.top[n][i]!==e)return!1;return!0}const Ta={1:{sequence:[C,Tt,Yt,ut,C,_t,Tt,P,ut,C,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,2,2],[3,0,4],[3,5,5]],front:[[5,5,5],[5,5,0],[5,5,2]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,4]]}},2:{sequence:[_e,N,ge,Tt,_e,Tt,P,Tt,C,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,2,3],[3,0,4],[2,5,4]],front:[[5,5,3],[5,5,0],[5,5,4]],right:[[3,3,0],[3,3,0],[3,3,5]],left:[[4,4,5],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,0],[2,2,0]]}},3:{sequence:[ge,Yt,N,P,N,_e,Tt,ge,N,ze],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,2,5],[4,0,3],[2,5,4]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,3],[3,3,0],[3,3,0]],left:[[4,4,4],[4,4,0],[4,4,5]],back:[[2,2,2],[2,2,0],[2,2,0]]}},4:{sequence:[fn,D,_e,Tt,ge,D,C,D,P,ze],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,5,3],[3,0,4],[0,2,5]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,0],[3,3,3]],left:[[4,4,0],[4,4,0],[4,4,4]],back:[[2,2,0],[2,2,0],[2,2,2]]}},5:{sequence:[Wi,Tt,Nt,N,Bt,N,Hi],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[4,0,0],[4,5,5]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,3],[4,4,3],[4,4,0]],back:[[2,2,4],[2,2,2],[2,2,5]]}},6:{sequence:[_e,Tt,P,D,C,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,5],[3,0,0],[2,0,0]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,0],[3,3,4],[3,3,4]],left:[[4,4,0],[4,4,0],[4,4,2]],back:[[2,2,5],[2,2,2],[2,2,3]]}},7:{sequence:[_e,N,P,N,C,Tt,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[4,0,0],[4,5,5]],front:[[5,5,2],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,5],[4,4,3],[4,4,3]],back:[[2,2,4],[2,2,2],[2,2,0]]}},8:{sequence:[Wi,D,Nt,D,Bt,Tt,Hi],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,5],[3,0,0],[0,0,4]],front:[[5,5,0],[5,5,0],[5,5,2]],right:[[3,3,4],[3,3,4],[3,3,5]],left:[[4,4,0],[4,4,0],[4,4,2]],back:[[2,2,0],[2,2,2],[2,2,3]]}},9:{sequence:[C,N,P,D,P,ut,Yt,N,P,D,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,5],[2,0,0],[0,5,3]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,3],[2,2,3]]}},10:{sequence:[C,N,P,N,P,ut,C,_t,C,Tt,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,2],[0,0,2],[5,3,0]],front:[[5,5,5],[5,5,5],[5,5,0]],right:[[3,3,4],[3,3,0],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,0]]}},11:{sequence:[C,ze,N,P,N,P,ut,C,_t,C,Tt,fn,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,2],[5,0,0],[5,3,0]],front:[[5,5,5],[5,5,0],[5,5,0]],right:[[3,3,4],[3,3,0],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,0]],back:[[2,2,4],[2,2,2],[2,2,0]]}},12:{sequence:[ze,P,D,C,D,P,Tt,C,D,C,P,fn],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,5,0],[4,0,0],[4,0,5]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,0],[3,3,3],[3,3,3]],left:[[4,4,2],[4,4,0],[4,4,4]],back:[[2,2,0],[2,2,2],[2,2,3]]}},13:{sequence:[ut,N,C,D,Yt,_t,C,N,C,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,5],[3,0,5],[4,0,2]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,2],[3,3,0]],left:[[4,4,4],[4,4,4],[4,4,5]],back:[[2,2,3],[2,2,0],[2,2,0]]}},14:{sequence:[P,ut,C,N,P,_t,C,ut,D,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,3],[3,0,5],[0,0,4]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,5]],left:[[4,4,0],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,0],[2,2,2]]}},15:{sequence:[Wi,D,Hi,Bt,D,Nt,N,Wi,N,Hi],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[4,0,5],[4,0,5]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,0]],left:[[4,4,3],[4,4,2],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,5]]}},16:{sequence:[_e,N,ge,C,N,P,D,_e,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[3,0,5],[2,0,0]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,0],[3,3,2],[3,3,4]],left:[[4,4,0],[4,4,4],[4,4,2]],back:[[2,2,5],[2,2,0],[2,2,3]]}},17:{sequence:[ut,P,_t,Yt,ge,N,C,D,P,D,ze],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,2,0],[4,0,3],[0,5,3]],front:[[5,5,0],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,4],[4,4,0],[4,4,5]],back:[[2,2,5],[2,2,0],[2,2,2]]}},18:{sequence:[_e,N,P,N,C,Tt,Hn,D,C,D,P,Tt,_e],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,2,0],[3,0,4],[3,5,0]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,3]],left:[[4,4,4],[4,4,0],[4,4,5]],back:[[2,2,2],[2,2,0],[2,2,2]]}},19:{sequence:[ge,C,N,C,N,P,D,ze,P,ut,C,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,5,0],[3,0,4],[3,2,0]],front:[[5,5,4],[5,5,0],[5,5,2]],right:[[3,3,0],[3,3,0],[3,3,5]],left:[[4,4,4],[4,4,0],[4,4,0]],back:[[2,2,3],[2,2,0],[2,2,2]]}},20:{sequence:[_e,N,P,D,Oe,N,C,D,P,D,ze],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,2,0],[4,0,3],[0,5,0]],front:[[5,5,3],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,2]],left:[[4,4,5],[4,4,0],[4,4,5]],back:[[2,2,4],[2,2,0],[2,2,4]]}},21:{sequence:[C,Tt,P,D,C,N,P,D,C,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,0,4],[0,0,0],[3,0,3]],front:[[5,5,0],[5,5,5],[5,5,0]],right:[[3,3,5],[3,3,2],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,5]],back:[[2,2,0],[2,2,4],[2,2,0]]}},22:{sequence:[C,Tt,Yt,D,Yt,D,Yt,Tt,C],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,5],[0,0,0],[4,0,4]],front:[[5,5,3],[5,5,2],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,0],[4,4,5],[4,4,0]],back:[[2,2,0],[2,2,4],[2,2,3]]}},23:{sequence:[Yt,ct,C,Tt,P,yt,C,Tt,C],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[0,0,0],[0,0,2]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,4]],left:[[4,4,5],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,2],[2,2,0]]}},24:{sequence:[_e,N,P,D,ge,ut,C,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[0,0,0],[0,0,0]],front:[[5,5,0],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,4],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,2],[2,2,0]]}},25:{sequence:[_t,_e,N,P,D,ge,ut,C],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,5],[0,0,0],[2,0,0]],front:[[5,5,5],[5,5,5],[5,5,0]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,3]]}},26:{sequence:[C,Tt,P,D,C,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[0,0,0],[2,0,0]],front:[[5,5,0],[5,5,5],[5,5,4]],right:[[3,3,0],[3,3,4],[3,3,4]],left:[[4,4,0],[4,4,2],[4,4,2]],back:[[2,2,5],[2,2,3],[2,2,3]]}},27:{sequence:[C,N,P,N,C,Tt,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[0,0,0],[4,0,5]],front:[[5,5,2],[5,5,5],[5,5,0]],right:[[3,3,2],[3,3,2],[3,3,0]],left:[[4,4,5],[4,4,3],[4,4,3]],back:[[2,2,4],[2,2,4],[2,2,0]]}},28:{sequence:[_e,N,P,D,ge,C,N,C,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[2,0,0],[0,5,0]],front:[[5,5,5],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,0],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,3],[2,2,2]]}},29:{sequence:[C,N,P,D,C,D,P,_t,D,ut,C,N,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,3],[3,0,0],[0,5,0]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,2],[2,2,0]]}},30:{sequence:[ut,P,ut,Yt,D,P,D,C,N,P,ol],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,4],[2,0,0],[0,5,4]],front:[[5,5,3],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,0],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,4],[2,2,5]]}},31:{sequence:[P,D,ut,N,C,D,P,_t,C],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,2,2],[5,0,0],[0,0,0]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,3],[4,4,0],[4,4,5]],back:[[2,2,4],[2,2,4],[2,2,0]]}},32:{sequence:[Nt,N,_t,D,Bt,N,Nt,ut,Bt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[5,0,0],[3,2,2]],front:[[5,5,5],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,4]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,3],[2,2,3]]}},33:{sequence:[C,N,P,D,P,ut,C,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[3,0,5],[0,0,0]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,2]],left:[[4,4,4],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,0],[2,2,0]]}},34:{sequence:[C,N,Yt,D,P,ut,C,N,C,D,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[3,0,5],[0,0,5]],front:[[5,5,4],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,0]],left:[[4,4,0],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,0],[2,2,2]]}},35:{sequence:[C,Tt,Yt,ut,C,_t,C,Tt,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,2,0],[0,0,3],[0,0,3]],front:[[5,5,0],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,0]],left:[[4,4,5],[4,4,0],[4,4,4]],back:[[2,2,5],[2,2,0],[2,2,4]]}},36:{sequence:[Bt,D,Nt,D,Bt,N,Nt,N,Nt,_t,Bt,ut],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,0],[4,0,0],[0,0,4]],front:[[5,5,5],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,5]],left:[[4,4,4],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,3],[2,2,2]]}},37:{sequence:[ut,P,_t,C,N,C,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[2,0,0],[0,5,5]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,0],[3,3,0]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,3],[2,2,3]]}},38:{sequence:[C,N,P,N,C,D,P,D,P,ut,C,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[3,0,0],[4,5,0]],front:[[5,5,4],[5,5,0],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,3]],left:[[4,4,5],[4,4,2],[4,4,2]],back:[[2,2,2],[2,2,4],[2,2,0]]}},39:{sequence:[Nt,_t,Bt,D,Nt,N,ut,D,Bt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,2],[5,0,3],[5,0,0]],front:[[5,5,5],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,2],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,0],[2,2,0]]}},40:{sequence:[P,ut,C,N,P,D,_t,N,C],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,0],[5,0,4],[0,0,2]],front:[[5,5,4],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,2],[4,4,2],[4,4,0]],back:[[2,2,0],[2,2,0],[2,2,3]]}},41:{sequence:[C,N,P,N,C,Tt,P,ut,C,N,P,D,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,5],[3,0,0],[0,5,5]],front:[[5,5,4],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,3]],left:[[4,4,4],[4,4,2],[4,4,2]],back:[[2,2,0],[2,2,4],[2,2,0]]}},42:{sequence:[P,D,C,D,P,Tt,C,ut,C,N,P,D,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[0,0,5],[2,3,0]],front:[[5,5,0],[5,5,4],[5,5,0]],right:[[3,3,3],[3,3,0],[3,3,5]],left:[[4,4,5],[4,4,2],[4,4,4]],back:[[2,2,3],[2,2,0],[2,2,4]]}},43:{sequence:[_t,D,Bt,N,Nt,ut],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,3],[2,0,0],[0,0,0]],front:[[5,5,5],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,4],[2,2,4],[2,2,2]]}},44:{sequence:[ut,N,C,D,P,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[2,0,0],[4,5,4]],front:[[5,5,3],[5,5,0],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,2],[2,2,3],[2,2,3]]}},45:{sequence:[ut,C,N,P,D,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,3],[3,0,5],[0,0,0]],front:[[5,5,5],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,2],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,2]]}},46:{sequence:[P,D,P,ut,C,_t,N,C],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,5,0],[0,0,0],[4,4,4]],front:[[5,5,3],[5,5,3],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,2],[4,4,0],[4,4,5]],back:[[2,2,2],[2,2,2],[2,2,3]]}},47:{sequence:[P,D,P,ut,C,_t,P,ut,C,_t,N,C],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,3,4],[4,0,0],[5,0,2]],front:[[5,5,0],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,5],[3,3,0]],left:[[4,4,2],[4,4,0],[4,4,5]],back:[[2,2,3],[2,2,2],[2,2,0]]}},48:{sequence:[ut,C,N,P,D,C,N,P,D,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,2],[2,0,0],[3,5,3]],front:[[5,5,4],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,0]],back:[[2,2,0],[2,2,3],[2,2,4]]}},49:{sequence:[_e,D,Hn,N,Hn,N,Hn,D,_e],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,2,5],[4,0,0],[4,0,4]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,5],[2,2,3]]}},50:{sequence:[ge,N,Hn,D,Hn,D,Hn,N,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,5,5],[0,0,4],[4,0,4]],front:[[5,5,3],[5,5,2],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,0],[2,2,3]]}},51:{sequence:[ut,N,C,D,P,N,C,D,P,_t],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,0,4],[3,0,5],[5,0,2]],front:[[5,5,0],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,2],[3,3,0]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,3],[2,2,0],[2,2,0]]}},52:{sequence:[C,N,P,N,C,D,ee,D,le,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,4,2],[0,0,0],[4,3,4]],front:[[5,5,0],[5,5,5],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,3],[4,4,0],[4,4,3]],back:[[2,2,2],[2,2,2],[2,2,0]]}},53:{sequence:[Wi,Tt,Nt,N,Bt,D,Nt,N,Bt,N,Hi],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,5,4],[3,0,0],[3,0,3]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,0],[4,4,5]],back:[[2,2,0],[2,2,2],[2,2,0]]}},54:{sequence:[_e,Tt,P,D,C,N,P,D,C,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,0,4],[4,0,0],[3,5,3]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,5]],back:[[2,2,0],[2,2,2],[2,2,0]]}},55:{sequence:[P,ut,C,N,C,D,Yt,_t,Yt,D,P,N,C,N,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,5],[3,0,5],[2,0,2]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,3],[3,3,4],[3,3,4]],left:[[4,4,4],[4,4,2],[4,4,3]],back:[[2,2,0],[2,2,0],[2,2,0]]}},56:{sequence:[ge,D,_e,D,P,N,C,D,P,N,C,ge,N,_e],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,2],[2,0,3],[5,0,2]],front:[[5,5,4],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,5],[3,3,0]],left:[[4,4,0],[4,4,4],[4,4,0]],back:[[2,2,3],[2,2,0],[2,2,4]]}},57:{sequence:[C,N,P,D,ze,N,C,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[3,0,5],[0,0,0]],front:[[5,5,5],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,0],[2,2,2]]}}};function Tm(r){const t=Object.keys(Ta),e=["front","right","left","back"],n=[[0,2],[1,2],[2,2]],{dimensions:i}=Gt,s=sn("yellow");t:for(let o=0;o<t.length;o++){const a=Ta[Number(t[o])];for(let c=0;c<i*i;c++){const l=c%i,u=Math.floor(c/i);if(r.top[l][u]===s&&a.cubeState.top[l][u]!==s||r.top[l][u]!==s&&a.cubeState.top[l][u]===s)continue t}for(let c=0;c<e.length;c++){const l=e[c];for(let u=0;u<n.length;u++){const[h,f]=n[u];if(r[l][h][f]===s&&a.cubeState[l][h][f]!==s||r[l][h][f]!==s&&a.cubeState[l][h][f]===s)continue t}}return a.sequence}}function Am(r,t){const e=Cm(r);return t===0?[Js,Oe,Yt]:e}function Cm(r){const t=Tm(r);return t||[N]}function Lm(r){const{dimensions:t}=Gt,{colors:e}=Gt,n=e.findIndex(s=>s.name==="white");for(let s=0;s<t;s++)for(let o=0;o<t;o++)if(r.top[s][o]!==n)return!1;const i=["left","right","front","back"];for(const s of i)if(r[s][0][2]!==r[s][1][1]||r[s][2][2]!==r[s][1][1])return!1;return!0}function Ze(r){const{colors:t}=Gt,e=t.findIndex(o=>o.name==="red"),n=t.findIndex(o=>o.name==="orange"),i=t.findIndex(o=>o.name==="green"),s=t.findIndex(o=>o.name==="blue");return r.includes(i)&&r.includes(e)?"gr":r.includes(i)&&r.includes(n)?"go":r.includes(e)&&r.includes(s)?"rb":r.includes(s)&&r.includes(n)?"bo":""}function Je(r,t,e,n){if(n==="bottom"){if(t===0&&e===0)return[r.left[0][0],r.back[2][0]];if(t===0&&e===2)return[r.left[2][0],r.front[0][0]];if(t===2&&e===0)return[r.right[2][0],r.back[0][0]];if(t===2&&e===2)return[r.right[0][0],r.front[2][0]]}if(n==="top"){if(t===0&&e===0)return[r.front[0][2],r.left[2][2]];if(t===0&&e===2)return[r.back[2][2],r.left[0][2]];if(t===2&&e===0)return[r.front[2][2],r.right[0][2]];if(t===2&&e===2)return[r.back[0][2],r.right[2][2]]}if(n==="front"){if(t===0&&e===0)return[r.bottom[0][2],r.left[2][0]];if(t===0&&e===2)return[r.top[0][0],r.left[2][2]];if(t===2&&e===0)return[r.bottom[2][2],r.right[0][0]];if(t===2&&e===2)return[r.top[2][0],r.right[0][2]]}if(n==="back"){if(t===0&&e===0)return[r.bottom[2][0],r.right[2][0]];if(t===0&&e===2)return[r.top[2][2],r.right[2][2]];if(t===2&&e===0)return[r.bottom[0][0],r.left[0][0]];if(t===2&&e===2)return[r.top[0][2],r.left[0][2]]}if(n==="left"){if(t===0&&e===0)return[r.bottom[0][0],r.back[2][0]];if(t===0&&e===2)return[r.top[0][2],r.back[2][2]];if(t===2&&e===0)return[r.bottom[0][2],r.front[0][0]];if(t===2&&e===2)return[r.top[0][0],r.front[0][2]]}if(n==="right"){if(t===0&&e===0)return[r.bottom[2][2],r.front[2][0]];if(t===0&&e===2)return[r.top[2][0],r.front[2][2]];if(t===2&&e===0)return[r.bottom[2][0],r.back[0][0]];if(t===2&&e===2)return[r.top[2][2],r.back[0][2]]}return[]}const Ae={gr:[P,ne,C,yt,P,ct,C],go:[_t,ne,ut,yt,_t,ct,ut],rb:[C,ne,P,ct,C,yt,P],bo:[Bt,ne,Nt,yt,Bt,ct,Nt]};function Pm(r){const t=Gt.colors.findIndex(e=>e.name==="white");if(r.bottom[0][0]===t){const e=Je(r,0,0,"bottom"),n=Ze(e);if(n==="gr")return[ne,...Ae[n]];if(n==="go")return[yt,...Ae[n]];if(n==="rb")return[ct,...Ae[n]];if(n==="bo")return[...Ae[n]]}if(r.bottom[0][2]===t){const e=Je(r,0,2,"bottom"),n=Ze(e);if(n==="gr")return[yt,...Ae[n]];if(n==="go")return[...Ae[n]];if(n==="rb")return[ne,...Ae[n]];if(n==="bo")return[ct,...Ae[n]]}if(r.bottom[2][0]===t){const e=Je(r,2,0,"bottom"),n=Ze(e);if(n==="gr")return[ct,...Ae[n]];if(n==="go")return[ne,...Ae[n]];if(n==="rb")return[...Ae[n]];if(n==="bo")return[yt,...Ae[n]]}if(r.bottom[2][2]===t){const e=Je(r,2,2,"bottom"),n=Ze(e);if(n==="gr")return[...Ae[n]];if(n==="go")return[ne,...Ae[n]];if(n==="rb")return[yt,...Ae[n]];if(n==="bo")return[yt,...Ae[n]]}if(r.front[0][0]===t){const e=Je(r,0,0,"front"),n=Ze(e);if(n==="gr")return[yt,P,ct,C];if(n==="go")return[_t,ct,ut];if(n==="rb")return[ct,P,ct,C];if(n==="bo")return[ee,ct,le]}if(r.front[2][0]===t){const e=Je(r,2,0,"front"),n=Ze(e);if(n==="gr")return[ct,P,yt,C];if(n==="go")return[ne,_t,yt,ut];if(n==="rb")return[le,yt,ee];if(n==="bo")return[yt,Bt,yt,Nt]}if(r.right[0][0]===t){const e=Je(r,0,0,"right"),n=Ze(e);if(n==="gr")return[P,ct,C];if(n==="go")return[Nt,ct,Bt];if(n==="rb")return[ne,C,ct,P];if(n==="bo")return[ee,ne,le]}if(r.right[2][0]===t){const e=Je(r,2,0,"right"),n=Ze(e);if(n==="gr")return[ne,P,yt,C];if(n==="go")return[ne,Nt,yt,Bt];if(n==="rb")return[ct,le,yt,ee];if(n==="bo")return[Bt,yt,Nt]}if(r.back[0][0]===t){const e=Je(r,0,0,"back"),n=Ze(e);if(n==="gr")return[ut,ct,_t];if(n==="go")return[Nt,ne,Bt];if(n==="rb")return[yt,C,ct,P];if(n==="bo")return[ne,ee,ct,le]}if(r.back[2][0]===t){const e=Je(r,2,0,"back"),n=Ze(e);if(n==="gr")return[P,ne,C];if(n==="go")return[_t,yt,ut];if(n==="rb")return[ct,C,yt,P];if(n==="bo")return[ct,Nt,yt,Bt]}if(r.left[0][0]===t){const e=Je(r,0,0,"left"),n=Ze(e);if(n==="gr")return[ne,P,ct,C];if(n==="go")return[yt,_t,ct,ut];if(n==="rb")return[C,ct,P];if(n==="bo")return[Bt,ct,Nt]}if(r.left[2][0]===t){const e=Je(r,2,0,"left"),n=Ze(e);if(n==="gr")return[P,yt,C];if(n==="go")return[ct,_t,yt,ut];if(n==="rb")return[le,ne,ee];if(n==="bo")return[ne,Bt,yt,Nt]}return r.front[0][2]===t?[_t,ct,ut]:r.front[2][2]===t?[P,ct,C]:r.right[0][2]===t?[P,ct,C]:r.right[2][2]===t?[le,ct,ee]:r.back[0][2]===t?[le,ct,ee]:r.back[2][2]===t?[Bt,ct,Nt]:r.left[0][2]===t?[Bt,ct,Nt]:r.left[2][2]===t?[_t,ct,ut]:r.top[0][0]===t?[Nt,ct,Bt]:r.top[2][0]===t?[P,ct,C]:r.top[0][2]===t?[Bt,ct,Nt]:r.top[2][2]===t?[C,ct,P]:[]}function fe(r,t,e,n){const i={color:-1,side:""};return n==="bottom"&&(t===0&&e===1&&(i.color=r.left[1][0],i.side="left"),t===1&&e===2&&(i.color=r.front[1][0],i.side="front"),t===2&&e===1&&(i.color=r.right[1][0],i.side="right"),t===1&&e===0&&(i.color=r.back[1][0],i.side="back")),n==="top"&&(t===1&&e===0&&(i.color=r.front[1][2],i.side="front"),t===2&&e===1&&(i.color=r.right[1][2],i.side="right"),t===1&&e===2&&(i.color=r.back[1][2],i.side="back"),t===0&&e===1&&(i.color=r.left[1][2],i.side="left")),n==="left"&&(t===0&&e===1&&(i.color=r.back[2][1],i.side="back"),t===1&&e===0&&(i.color=r.bottom[0][1],i.side="bottom"),t===2&&e===1&&(i.color=r.front[0][1],i.side="front"),t===1&&e===2&&(i.color=r.top[0][1],i.side="top")),n==="right"&&(t===0&&e===1&&(i.color=r.front[2][1],i.side="front"),t===1&&e===0&&(i.color=r.bottom[2][1],i.side="bottom"),t===2&&e===1&&(i.color=r.back[0][1],i.side="back"),t===1&&e===2&&(i.color=r.top[2][1],i.side="top")),n==="front"&&(t===0&&e===1&&(i.color=r.left[2][1],i.side="left"),t===1&&e===0&&(i.color=r.bottom[1][2],i.side="bottom"),t===2&&e===1&&(i.color=r.right[0][1],i.side="right"),t===1&&e===2&&(i.color=r.top[1][0],i.side="top")),n==="back"&&(t===0&&e===1&&(i.color=r.right[2][1],i.side="right"),t===1&&e===0&&(i.color=r.bottom[1][0],i.side="bottom"),t===2&&e===1&&(i.color=r.left[0][1],i.side="left"),t===1&&e===2&&(i.color=r.top[1][2],i.side="top")),i}function Rm(r){const t=r.top,{colors:e}=Gt,n=e.findIndex(i=>i.name==="white");return!(t[0][1]!==n||t[1][2]!==n||t[2][1]!==n||t[1][0]!==n||r.front[1][2]!==r.front[1][1]||r.right[1][2]!==r.right[1][1]||r.back[1][2]!==r.back[1][1]||r.left[1][2]!==r.left[1][1])}function Dm(r){const t=[],{dimensions:e,colors:n}=Gt,i=n.findIndex(s=>s.name==="white");for(let s=0;s<e;s++)for(let o=0;o<e;o++)if(!Om(s,o)&&r.bottom[s][o]===i){const a=fe(r,s,o,"bottom"),c=he[a.color];if(c==="left"&&(a.side==="front"&&t.push(ct),a.side==="back"&&t.push(yt),a.side==="right"&&t.push(ne)),c==="front"&&(a.side==="left"&&t.push(yt),a.side==="back"&&t.push(ne),a.side==="right"&&t.push(ct)),c==="right"&&(a.side==="left"&&t.push(ne),a.side==="back"&&t.push(ct),a.side==="front"&&t.push(yt)),c==="back"&&(a.side==="left"&&t.push(ct),a.side==="right"&&t.push(yt),a.side==="front"&&t.push(ne)),c==="back"&&t.push(Fr),c==="left"&&t.push(Js),c==="front"&&t.push(ol),c==="right"&&t.push(Yt),t.length)return t}if(r.front[1][0]===i){const s=fe(r,1,0,"front"),o=he[s.color];if(o==="front"&&t.push(ut,N,Bt,D),o==="left"&&t.push(ct,Bt,D,ut,N),o==="back"&&t.push(yt,N,P,D,ee),o==="right"&&t.push(N,_t,D,C),t.length)return t}if(r.right[1][0]===i){const s=fe(r,1,0,"right"),o=he[s.color];if(o==="right"&&t.push(C,N,_t,D),o==="front"&&t.push(ct,_t,D,C,N),o==="back"&&t.push(D,P,N,ee),o==="left"&&t.push(ct,D,ut,N,Nt),t.length)return t}if(r.left[1][0]===i){const s=fe(r,1,0,"left"),o=he[s.color];if(o==="left"&&t.push(Nt,D,ut,D),o==="front"&&t.push(N,Bt,D,ut),o==="right"&&t.push(yt,ut,C,_t),o==="back"&&t.push(Nt,le,Bt),t.length)return t}if(r.back[1][0]===i){const s=fe(r,1,0,"back"),o=he[s.color];if(o==="back"&&t.push(ee,N,P,D),o==="right"&&t.push(N,Fr,D),o==="left"&&t.push(le,Nt,ee),o==="front"&&t.push(ct,C,_t,P),t.length)return t}if(r.front[0][1]===i){const s=fe(r,0,1,"front"),o=he[s.color];if(o==="front"&&t.push(N,Bt,D),o==="left"&&t.push(Bt),o==="back"&&t.push(D,Bt,N),o==="right"&&t.push(Tt,Bt,Tt),t.length)return t}if(r.front[2][1]===i){const s=fe(r,2,1,"front"),o=he[s.color];if(o==="front"&&t.push(D,C,N),o==="right"&&t.push(C),o==="back"&&t.push(N,C,D),o==="left"&&t.push(Tt,C,Tt),t.length)return t}if(r.right[0][1]===i){const s=fe(r,0,1,"right"),o=he[s.color];if(o==="right"&&t.push(N,_t,D),o==="front"&&t.push(_t),o==="back"&&t.push(Tt,_t,Tt),o==="left"&&t.push(D,_t,N),t.length)return t}if(r.right[2][1]===i){const s=fe(r,2,1,"right"),o=he[s.color];if(o==="right"&&t.push(D,ee,N),o==="back"&&t.push(ee),o==="left"&&t.push(N,ee,D),o==="front"&&t.push(Tt,ee,Tt),t.length)return t}if(r.left[0][1]===i){const s=fe(r,0,1,"left"),o=he[s.color];if(o==="left"&&t.push(N,le,D),o==="back"&&t.push(le),o==="front"&&t.push(Tt,le,Tt),o==="right"&&t.push(D,le,N),t.length)return t}if(r.left[2][1]===i){const s=fe(r,2,1,"left"),o=he[s.color];if(o==="left"&&t.push(D,ut,N),o==="front"&&t.push(ut),o==="back"&&t.push(Tt,ut,Tt),o==="right"&&t.push(N,ut,D),t.length)return t}if(r.back[0][1]===i){const s=fe(r,0,1,"back"),o=he[s.color];if(o==="back"&&t.push(N,P,D),o==="right"&&t.push(P),o==="left"&&t.push(Tt,P,Tt),o==="front"&&t.push(D,P,N),t.length)return t}if(r.back[2][1]===i){const s=fe(r,2,1,"back"),o=he[s.color];if(o==="back"&&t.push(D,Nt,N),o==="left"&&t.push(Nt),o==="right"&&t.push(Tt,Nt,Tt),o==="front"&&t.push(N,Nt,D),t.length)return t}if(r.top[1][0]===i){const s=fe(r,1,0,"top"),o=he[s.color];if(o==="left"&&t.push(ut,D,_t,N),o==="back"&&t.push(ut,Tt,_t,Tt),o==="right"&&t.push(ut,N,_t,D),t.length)return t}if(r.top[2][1]===i){const s=fe(r,2,1,"top"),o=he[s.color];if(o==="front"&&t.push(P,D,C,N),o==="back"&&t.push(P,N,C,D),o==="left"&&t.push(C,Tt,P,Tt),t.length)return t}if(r.top[1][2]===i){const s=fe(r,1,2,"top"),o=he[s.color];if(o==="right"&&t.push(ee,D,le,N),o==="front"&&t.push(ee,Tt,le,Tt),o==="left"&&t.push(ee,N,le,D),t.length)return t}if(r.top[0][1]===i){const s=fe(r,0,1,"top"),o=he[s.color];if(o==="back"&&t.push(Bt,D,Nt,N),o==="front"&&t.push(Bt,N,Nt,D),o==="right"&&t.push(Nt,Tt,Bt,Tt),t.length)return t}if(r.front[1][2]===i){const s=fe(r,1,2,"front"),o=he[s.color];if(o==="right"&&t.push(ut,C),o==="back"&&t.push(ut,N,C,D),o==="left"&&t.push(_t,Bt),o==="front"&&t.push(ut,D,C,N),t.length)return t}if(r.right[1][2]===i){const s=fe(r,1,2,"right"),o=he[s.color];if(o==="back"&&t.push(C,ee),o==="left"&&t.push(C,N,ee,D),o==="front"&&t.push(P,_t),o==="right"&&t.push(C,D,ee,N),t.length)return t}if(r.back[1][2]===i){const s=fe(r,1,2,"back"),o=he[s.color];if(o==="left"&&t.push(ee,Nt),o==="front"&&t.push(ee,N,Nt,D),o==="right"&&t.push(le,P),o==="back"&&t.push(ee,D,Nt,N),t.length)return t}if(r.left[1][2]===i){const s=fe(r,1,2,"left"),o=he[s.color];if(o==="front"&&t.push(Nt,ut),o==="right"&&t.push(Nt,N,ut,D),o==="back"&&t.push(Bt,le),o==="left"&&t.push(Nt,D,ut,N),t.length)return t}return[]}function Us(r){const t=[];return r.forEach(e=>{e&&t.push(...e())}),t}async function Im(r,t){const e=$e(r),n=Us(t);for(let i=0;i<n.length;i++){const{move:s,inverted:o}=n[i];await ks(e,s,o)}return e}async function Nm(r){const t=[];let e=r;return e=await bi(e,Rm,Dm,t,"White Cross"),e=await bi(e,Lm,Pm,t,"White Corners"),e=await bi(e,()=>!1,wm,t,"F2L"),e=await bi(e,Em,Am,t,"OLL"),e=await bi(e,cm,hm,t,"PLL"),e=await bi(e,Fm,()=>[N],t,"Last Layer"),t}async function bi(r,t,e,n,i){console.log("Solving: "+i);let s=0;for(;!t(r);){const o=e(r,s);if(!o.length||(n.push(...o),r=await Im(r,o),s++,s>10))break}return r}function Fm(r){const t=["front","back","left","right","top","bottom"];for(const e of t)for(let n=0;n<Gt.dimensions;n++)for(let i=0;i<Gt.dimensions;i++)if(r[e][n][i]!==r[e][1][1])return!1;return!0}function Om(r,t){const{dimensions:e}=Gt;return r===0&&t===0||r===0&&t===e-1||r===e-1&&t===0||r===e-1&&t===e-1}function zm(r){const t=[];for(let e=r.length-1;e>=0;e--){const{move:n,inverted:i}=r[e];t.push({move:n,inverted:!i})}return t}let Rr=!0,Dr=!0;function km(){let r=lm;const t=[];function e(l=!1){l||(jn.remove(...t),t.length=0),Object.values(r).forEach((u,h)=>{const f=new He,m=xm({id:h,state:u});f.add(m.elements[0]);const g={x:h===0?Math.PI/2:h===1?-Math.PI/2:0,y:h===3?Math.PI/2:h===4?-Math.PI/2:h===5?Math.PI:0,z:0};f.rotation.set(g.x,g.y,g.z),t.push(f)}),l||jn.add(...t)}let n=null,i=null;function s(l,u=2e3){const h=document.getElementById("app");i&&clearTimeout(i),n&&(n.innerHTML=l,h.removeChild(n)),n=document.createElement("div"),n.style.position="absolute",n.style.top="50px",n.style.left="50%",n.style.transform="translateX(-50%)",n.style.fontSize="2rem",n.style.color="white",n.style.textAlign="center",n.style.zIndex="100",n.style.userSelect="none",n.innerHTML=l,h.appendChild(n),i=setTimeout(()=>{h.removeChild(n),n=null},u)}const o={scrambling:!1,solving:!1,solved:!0};async function a(l){if(l.key===" "){if(o.scrambling||o.solving)return;o.scrambling=!0,o.solved=!1;const u=Sm(),h=sn("yellow");r.top[1][1]===h&&(u.push(Nt()[0]),u.push(Nt()[0]),u.push(fn()[0]),u.push(fn()[0]),u.push(C()[0]),u.push(C()[0])),s("Scrambling..."),await Wn({cubeState:r,moves:u,meshes:t,callback:e}),o.scrambling=!1}if(l.key==="Enter"){if(o.solving){s("Already solving");return}if(o.solved){s("Already solved");return}if(o.scrambling){s("Cannot solve while scrambling");return}o.solving=!0,s("Solving...");const u=Date.now(),h=Us(await Nm(r));console.log("Solve time: "+(Date.now()-u)+"ms"),console.log("Solve length: "+h.length+" moves"),await Wn({cubeState:r,moves:h,meshes:t,callback:e}),o.solving=!1,o.solved=!0}if(l.key==="m"&&(Rr=!Rr,s(Rr?"Audio on":"Audio off")),l.key==="a"&&(Dr=!Dr,s(Dr?"Animation on":"Animation off")),l.key==="p"){const u=[];for(let h=0;h<4;h++){for(let m=0;m<2;m++)Wn({cubeState:r,moves:[...C()],doAnimation:!1,meshes:t,callback:e,playSound:!0}),Wn({cubeState:r,moves:[...fn()],doAnimation:!1,meshes:t,callback:e,playSound:!0}),Wn({cubeState:r,moves:[...Nt()],doAnimation:!1,meshes:t,callback:e,playSound:!0});for(let m=0;m<h;m++)Wn({cubeState:r,moves:[...N()],doAnimation:!1,meshes:t,callback:e,playSound:!0});const f=zm(Us($s[19].sequence));await Wn({cubeState:r,moves:f,doAnimation:!0,meshes:t,callback:e,playSound:!0}),u.push(JSON.stringify(r)),r={bottom:[[0,0,0],[0,0,0],[0,0,0]],top:[[1,1,1],[1,1,1],[1,1,1]],front:[[2,2,2],[2,2,2],[2,2,2]],right:[[3,3,3],[3,3,3],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[5,5,5],[5,5,5],[5,5,5]]},await Ks(1e3)}console.log("cubeStates: ["+u+"]")}l.key==="ArrowUp"&&(l.ctrlKey?Gt.animationSpeed+=10:Gt.animationSpeed+=5,Gt.animationSpeed>1e3&&(Gt.animationSpeed=1e3),Gt.animationSpeed===6&&(Gt.animationSpeed=5),Gt.animationSpeed===11&&(Gt.animationSpeed=10),s("Animation time: "+Gt.animationSpeed+"ms")),l.key==="ArrowDown"&&(l.ctrlKey?Gt.animationSpeed-=10:Gt.animationSpeed-=5,Gt.animationSpeed<=0&&(Gt.animationSpeed=1),s("Animation time: "+Gt.animationSpeed+"ms"))}return window.addEventListener("keydown",a),e(!0),{elements:[{elements:t}]}}const{scene:jn,camera:qn,renderer:qi}=Um();function Um(){const r=new vp,t=new je(90,window.innerWidth/window.innerHeight,.1,1e3),e=new Hs({antialias:!0});return{scene:r,camera:t,renderer:e}}const al=[];function Bm(){al.push(km()),Gm()}function Gm(){const r=[];Vm(jn,al,r),new am(qn,qi.domElement),jn.background=new se(Gt.canvasColor);const{initialCameraPosition:t}=Gt;qn.position.z=t.z,qn.position.y=t.y,qn.position.x=t.x,qi.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(qi.domElement),document.addEventListener("mousedown",()=>document.body.style.cursor="none"),document.addEventListener("mouseup",()=>document.body.style.cursor="auto");function e(){qn.aspect=window.innerWidth/window.innerHeight,qn.updateProjectionMatrix(),qi.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",e);function n(){requestAnimationFrame(n),qi.render(jn,qn),r.forEach(i=>i())}n()}function Vm(r,t,e){t.forEach(n=>ll(r,n,e))}function ll(r,t,e){t.elements.forEach(n=>{n.elements?ll(r,n,e):r.add(n),n.animate&&e.push(n.animate)})}Bm();
