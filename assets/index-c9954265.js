(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="150",ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nl=0,Hs=1,il=2,ma=1,rl=2,Vi=3,Pn=0,He=1,An=2,Ln=0,yi=1,Ws=2,qs=3,Xs=4,sl=5,xi=100,ol=101,al=102,Ys=103,Zs=104,ll=200,cl=201,ul=202,hl=203,ga=204,_a=205,fl=206,dl=207,pl=208,ml=209,gl=210,_l=0,xl=1,vl=2,ys=3,bl=4,yl=5,Sl=6,Ml=7,xa=0,wl=1,El=2,yn=0,Tl=1,Al=2,Cl=3,Ll=4,Pl=5,va=300,Ei=301,Ti=302,Ss=303,Ms=304,Lr=306,ws=1e3,nn=1001,Es=1002,Ie=1003,Js=1004,kr=1005,$e=1006,Rl=1007,Xi=1008,Zn=1009,Dl=1010,Il=1011,ba=1012,Nl=1013,Hn=1014,Wn=1015,Yi=1016,Fl=1017,Ol=1018,Si=1020,zl=1021,rn=1023,Ul=1024,kl=1025,qn=1026,Ai=1027,Bl=1028,Gl=1029,Vl=1030,Hl=1031,Wl=1033,Br=33776,Gr=33777,Vr=33778,Hr=33779,Ks=35840,$s=35841,js=35842,Qs=35843,ql=36196,to=37492,eo=37496,no=37808,io=37809,ro=37810,so=37811,oo=37812,ao=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,Wr=36492,Xl=36283,_o=36284,xo=36285,vo=36286,Jn=3e3,ae=3001,Yl=3200,Zl=3201,Jl=0,Kl=1,ln="srgb",Zi="srgb-linear",ya="display-p3",qr=7680,$l=519,bo=35044,yo="300 es",Ts=1035;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,So=180/Math.PI;function Li(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[r&255]+Ee[r>>8&255]+Ee[r>>16&255]+Ee[r>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Ce(r,t,e){return Math.max(t,Math.min(e,r))}function jl(r,t){return(r%t+t)%t}function Yr(r,t,e){return(1-e)*r+e*t}function Mo(r){return(r&r-1)===0&&r!==0}function Ql(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tr(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],p=i[0],d=i[3],x=i[6],E=i[1],_=i[4],y=i[7],w=i[2],C=i[5],F=i[8];return s[0]=o*p+a*E+c*w,s[3]=o*d+a*_+c*C,s[6]=o*x+a*y+c*F,s[1]=l*p+u*E+f*w,s[4]=l*d+u*_+f*C,s[7]=l*x+u*y+f*F,s[2]=h*p+m*E+g*w,s[5]=h*d+m*_+g*C,s[8]=h*x+m*y+g*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=e*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=f*p,t[1]=(i*l-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=h*p,t[4]=(u*e-i*c)*p,t[5]=(i*s-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new Ne;function Sa(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class Kn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(f!==p||c!==h||l!==m||u!==g){let d=1-a;const x=c*h+l*m+u*g+f*p,E=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const w=Math.sqrt(_),C=Math.atan2(w,x*E);d=Math.sin(d*C)/w,a=Math.sin(a*C)/w}const y=a*E;if(c=c*d+h*y,l=l*d+m*y,u=u*d+g*y,f=f*d+p*y,d===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*m-l*h,t[e+1]=c*g+u*h+l*f-a*m,t[e+2]=l*g+u*m+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),h=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"YZX":this._x=h*u*f+l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f-h*m*g;break;case"XZY":this._x=h*u*f-l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-s*i,f=c*i+s*n-o*e,h=-s*e-o*n-a*i;return this.x=l*c+h*-s+u*-a-f*-o,this.y=u*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new N,wo=new Kn;function Mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const tc=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ec=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Cn=new N;function nc(r){return r.convertSRGBToLinear(),Cn.set(r.r,r.g,r.b).applyMatrix3(ec),r.setRGB(Cn.x,Cn.y,Cn.z)}function ic(r){return Cn.set(r.r,r.g,r.b).applyMatrix3(tc),r.setRGB(Cn.x,Cn.y,Cn.z).convertLinearToSRGB()}const rc={[Zi]:r=>r,[ln]:r=>r.convertSRGBToLinear(),[ya]:nc},sc={[Zi]:r=>r,[ln]:r=>r.convertLinearToSRGB(),[ya]:ic},Re={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Zi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=rc[t],i=sc[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let ii;class Ma{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Ar("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class wa{constructor(t=null){this.isSource=!0,this.uuid=Li(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push($r(i[o].image)):s.push($r(i[o]))}else s=$r(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function $r(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ma.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oc=0;class We extends ti{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=nn,i=nn,s=$e,o=Xi,a=rn,c=Zn,l=We.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=Li(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==va)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case Es:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case Es:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=va;We.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],g=c[9],p=c[2],d=c[6],x=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(m+1)/2,w=(x+1)/2,C=(u+h)/4,F=(f+p)/4,b=(g+d)/4;return _>y&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=C/n,s=F/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=F/s,i=b/s),this.set(n,i,s,e),this}let E=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(f-p)/E,this.z=(h-u)/E,this.w=Math.acos((l+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $n extends ti{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$e,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ea extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],f=t[c+1],h=t[c+2];u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),f=t.getY(c),h=t.getZ(c);u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Fn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Fn)}else n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox),jr.applyMatrix4(t.matrixWorld),this.union(jr);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),er.subVectors(this.max,Di),ri.subVectors(t.a,Di),si.subVectors(t.b,Di),oi.subVectors(t.c,Di),Mn.subVectors(si,ri),wn.subVectors(oi,si),On.subVectors(ri,oi);let e=[0,-Mn.z,Mn.y,0,-wn.z,wn.y,0,-On.z,On.y,Mn.z,0,-Mn.x,wn.z,0,-wn.x,On.z,0,-On.x,-Mn.y,Mn.x,0,-wn.y,wn.x,0,-On.y,On.x,0];return!Qr(e,ri,si,oi,er)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,ri,si,oi,er))?!1:(nr.crossVectors(Mn,wn),e=[nr.x,nr.y,nr.z],Qr(e,ri,si,oi,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new N,new N,new N,new N,new N,new N,new N,new N],Fn=new N,jr=new ji,ri=new N,si=new N,oi=new N,Mn=new N,wn=new N,On=new N,Di=new N,er=new N,nr=new N,zn=new N;function Qr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){zn.fromArray(r,s);const a=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=t.dot(zn),l=e.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const lc=new ji,Ii=new N,ts=new N;class Is{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ts.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(ts)),this.expandByPoint(Ii.copy(t.center).sub(ts))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,es=new N,ir=new N,En=new N,ns=new N,rr=new N,is=new N;class cc{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){es.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),En.copy(this.origin).sub(es);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ir),a=En.dot(this.direction),c=-En.dot(ir),l=En.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(es).addScaledVector(ir,h),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,s){ns.subVectors(e,t),rr.subVectors(n,t),is.crossVectors(ns,rr);let o=this.direction.dot(is),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const c=a*this.direction.dot(rr.crossVectors(En,rr));if(c<0)return null;const l=a*this.direction.dot(ns.cross(En));if(l<0||c+l>o)return null;const u=-a*En.dot(is);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,c,l,u,f,h,m,g,p,d){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=f,x[14]=h,x[3]=m,x[7]=g,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),s=1/ai.setFromMatrixColumn(t,1).length(),o=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,m=o*f,g=a*u,p=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=h-p*l,e[9]=-a*c,e[2]=p-h*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,m=c*f,g=l*u,p=l*f;e[0]=h+p*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=p+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,m=c*f,g=l*u,p=l*f;e[0]=h-p*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=p-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,m=o*f,g=a*u,p=a*f;e[0]=c*u,e[4]=g*l-m,e[8]=h*l+p,e[1]=c*f,e[5]=p*l+h,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=p-h*f,e[8]=g*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*f+g,e[10]=h-p*f}else if(t.order==="XZY"){const h=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+p,e[5]=o*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*u,e[10]=p*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uc,t,hc)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Tn.crossVectors(n,Be),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Tn.crossVectors(n,Be)),Tn.normalize(),sr.crossVectors(Be,Tn),i[0]=Tn.x,i[4]=sr.x,i[8]=Be.x,i[1]=Tn.y,i[5]=sr.y,i[9]=Be.y,i[2]=Tn.z,i[6]=sr.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],p=n[6],d=n[10],x=n[14],E=n[3],_=n[7],y=n[11],w=n[15],C=i[0],F=i[4],b=i[8],T=i[12],O=i[1],J=i[5],tt=i[9],V=i[13],z=i[2],X=i[6],j=i[10],rt=i[14],K=i[3],st=i[7],et=i[11],Et=i[15];return s[0]=o*C+a*O+c*z+l*K,s[4]=o*F+a*J+c*X+l*st,s[8]=o*b+a*tt+c*j+l*et,s[12]=o*T+a*V+c*rt+l*Et,s[1]=u*C+f*O+h*z+m*K,s[5]=u*F+f*J+h*X+m*st,s[9]=u*b+f*tt+h*j+m*et,s[13]=u*T+f*V+h*rt+m*Et,s[2]=g*C+p*O+d*z+x*K,s[6]=g*F+p*J+d*X+x*st,s[10]=g*b+p*tt+d*j+x*et,s[14]=g*T+p*V+d*rt+x*Et,s[3]=E*C+_*O+y*z+w*K,s[7]=E*F+_*J+y*X+w*st,s[11]=E*b+_*tt+y*j+w*et,s[15]=E*T+_*V+y*rt+w*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],m=t[14],g=t[3],p=t[7],d=t[11],x=t[15];return g*(+s*c*f-i*l*f-s*a*h+n*l*h+i*a*m-n*c*m)+p*(+e*c*m-e*l*h+s*o*h-i*o*m+i*l*u-s*c*u)+d*(+e*l*f-e*a*m-s*o*f+n*o*m+s*a*u-n*l*u)+x*(-i*a*u-e*c*f+e*a*h+i*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],m=t[11],g=t[12],p=t[13],d=t[14],x=t[15],E=f*d*l-p*h*l+p*c*m-a*d*m-f*c*x+a*h*x,_=g*h*l-u*d*l-g*c*m+o*d*m+u*c*x-o*h*x,y=u*p*l-g*f*l+g*a*m-o*p*m-u*a*x+o*f*x,w=g*f*c-u*p*c-g*a*h+o*p*h+u*a*d-o*f*d,C=e*E+n*_+i*y+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return t[0]=E*F,t[1]=(p*h*s-f*d*s-p*i*m+n*d*m+f*i*x-n*h*x)*F,t[2]=(a*d*s-p*c*s+p*i*l-n*d*l-a*i*x+n*c*x)*F,t[3]=(f*c*s-a*h*s-f*i*l+n*h*l+a*i*m-n*c*m)*F,t[4]=_*F,t[5]=(u*d*s-g*h*s+g*i*m-e*d*m-u*i*x+e*h*x)*F,t[6]=(g*c*s-o*d*s-g*i*l+e*d*l+o*i*x-e*c*x)*F,t[7]=(o*h*s-u*c*s+u*i*l-e*h*l-o*i*m+e*c*m)*F,t[8]=y*F,t[9]=(g*f*s-u*p*s-g*n*m+e*p*m+u*n*x-e*f*x)*F,t[10]=(o*p*s-g*a*s+g*n*l-e*p*l-o*n*x+e*a*x)*F,t[11]=(u*a*s-o*f*s-u*n*l+e*f*l+o*n*m-e*a*m)*F,t[12]=w*F,t[13]=(u*p*i-g*f*i+g*n*h-e*p*h-u*n*d+e*f*d)*F,t[14]=(g*a*i-o*p*i-g*n*c+e*p*c+o*n*d-e*a*d)*F,t[15]=(o*f*i-u*a*i+u*n*c-e*f*c-o*n*h+e*a*h)*F,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,h=s*l,m=s*u,g=s*f,p=o*u,d=o*f,x=a*f,E=c*l,_=c*u,y=c*f,w=n.x,C=n.y,F=n.z;return i[0]=(1-(p+x))*w,i[1]=(m+y)*w,i[2]=(g-_)*w,i[3]=0,i[4]=(m-y)*C,i[5]=(1-(h+x))*C,i[6]=(d+E)*C,i[7]=0,i[8]=(g+_)*F,i[9]=(d-E)*F,i[10]=(1-(h+p))*F,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ai.set(i[0],i[1],i[2]).length();const o=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);const l=1/s,u=1/o,f=1/a;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=f,Qe.elements[9]*=f,Qe.elements[10]*=f,e.setFromRotationMatrix(Qe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-s),f=(e+t)*c,h=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new N,Qe=new Me,uc=new N(0,0,0),hc=new N(1,1,1),Tn=new N,sr=new N,Be=new N,Eo=new Me,To=new Kn;class Pr{constructor(t=0,e=0,n=0,i=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return To.setFromEuler(this),this.setFromQuaternion(To,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fc=0;const Ao=new N,li=new Kn,gn=new Me,or=new N,Ni=new N,dc=new N,pc=new Kn,Co=new N(1,0,0),Lo=new N(0,1,0),Po=new N(0,0,1),mc={type:"added"},Ro={type:"removed"};class qe extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new N,e=new Pr,n=new Kn,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new Ne}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(Co,t)}rotateY(t){return this.rotateOnAxis(Lo,t)}rotateZ(t){return this.rotateOnAxis(Po,t)}translateOnAxis(t,e){return Ao.copy(t).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Co,t)}translateY(t){return this.translateOnAxis(Lo,t)}translateZ(t){return this.translateOnAxis(Po,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ni,or,this.up):gn.lookAt(or,Ni,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(gn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(mc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ro)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ro)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,dc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,pc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new N(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new N,_n=new N,rs=new N,xn=new N,ci=new N,ui=new N,Do=new N,ss=new N,os=new N,as=new N;class bn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){tn.subVectors(i,e),_n.subVectors(n,e),rs.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(_n),c=tn.dot(rs),l=_n.dot(_n),u=_n.dot(rs),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,xn),c.set(0,0),c.addScaledVector(s,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),_n.subVectors(t,e),tn.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return bn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ci.subVectors(i,n),ui.subVectors(s,n),ss.subVectors(t,n);const c=ci.dot(ss),l=ui.dot(ss);if(c<=0&&l<=0)return e.copy(n);os.subVectors(t,i);const u=ci.dot(os),f=ui.dot(os);if(u>=0&&f<=u)return e.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ci,o);as.subVectors(t,s);const m=ci.dot(as),g=ui.dot(as);if(g>=0&&m<=g)return e.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ui,a);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Do.subVectors(s,i),a=(f-u)/(f-u+(m-g)),e.copy(i).addScaledVector(Do,a);const x=1/(d+p+h);return o=p*x,a=h*x,e.copy(n).addScaledVector(ci,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let gc=0;class Rr extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=yi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Aa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},ar={h:0,s:0,l:0};function ls(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Re.workingColorSpace){if(t=jl(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ls(o,s,t+1/3),this.g=ls(o,s,t),this.b=ls(o,s,t-1/3)}return Re.toWorkingColorSpace(this,i),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Re.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Re.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Re.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Re.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=Aa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Re.fromWorkingColorSpace(Te.copy(this),t),Ce(Te.r*255,0,255)<<16^Ce(Te.g*255,0,255)<<8^Ce(Te.b*255,0,255)<<0}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,s=Te.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Re.workingColorSpace){return Re.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=ln){Re.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(ar);const n=Yr(en.h,ar.h,e),i=Yr(en.s,ar.s,e),s=Yr(en.l,ar.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new se;se.NAMES=Aa;class Cr extends Rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new N,lr=new mt;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ca extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class La extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Sn extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _c=0;const Ye=new Me,cs=new qe,hi=new N,Ge=new ji,Fi=new ji,Se=new N;class Rn extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sa(t)?La:Ca)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return cs.lookAt(t),cs.updateMatrix(),this.applyMatrix4(cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ge.min,Fi.min),Ge.expandByPoint(Se),Se.addVectors(Ge.max,Fi.max),Ge.expandByPoint(Se)):(Ge.expandByPoint(Fi.min),Ge.expandByPoint(Fi.max))}Ge.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Se.fromBufferAttribute(a,l),c&&(hi.fromBufferAttribute(t,l),Se.add(hi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let O=0;O<a;O++)l[O]=new N,u[O]=new N;const f=new N,h=new N,m=new N,g=new mt,p=new mt,d=new mt,x=new N,E=new N;function _(O,J,tt){f.fromArray(i,O*3),h.fromArray(i,J*3),m.fromArray(i,tt*3),g.fromArray(o,O*2),p.fromArray(o,J*2),d.fromArray(o,tt*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const V=1/(p.x*d.y-d.x*p.y);isFinite(V)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(V),E.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(V),l[O].add(x),l[J].add(x),l[tt].add(x),u[O].add(E),u[J].add(E),u[tt].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let O=0,J=y.length;O<J;++O){const tt=y[O],V=tt.start,z=tt.count;for(let X=V,j=V+z;X<j;X+=3)_(n[X+0],n[X+1],n[X+2])}const w=new N,C=new N,F=new N,b=new N;function T(O){F.fromArray(s,O*3),b.copy(F);const J=l[O];w.copy(J),w.sub(F.multiplyScalar(F.dot(J))).normalize(),C.crossVectors(b,J);const V=C.dot(u[O])<0?-1:1;c[O*4]=w.x,c[O*4+1]=w.y,c[O*4+2]=w.z,c[O*4+3]=V}for(let O=0,J=y.length;O<J;++O){const tt=y[O],V=tt.start,z=tt.count;for(let X=V,j=V+z;X<j;X+=3)T(n[X+0]),T(n[X+1]),T(n[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),p=t.getX(h+1),d=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let x=0;x<u;x++)h[g++]=l[m++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Rn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=t(h,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new Me,an=new cc,cr=new Is,No=new N,Oi=new N,zi=new N,Ui=new N,us=new N,ur=new N,hr=new mt,fr=new mt,dr=new mt,hs=new N,pr=new N;class Ve extends qe{constructor(t=new Rn,e=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ur.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(us.fromBufferAttribute(f,t),o?ur.addScaledVector(us,u):ur.addScaledVector(us.sub(e),u))}e.add(ur)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),an.copy(t.ray).recast(t.near),cr.containsPoint(an.origin)===!1&&(an.intersectSphere(cr,No)===null||an.origin.distanceToSquared(No)>(t.far-t.near)**2))||(Io.copy(s).invert(),an.copy(t.ray).applyMatrix4(Io),n.boundingBox!==null&&an.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=i[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let _=x,y=E;_<y;_+=3){const w=a.getX(_),C=a.getX(_+1),F=a.getX(_+2);o=mr(this,d,t,an,l,u,w,C,F),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const x=a.getX(p),E=a.getX(p+1),_=a.getX(p+2);o=mr(this,i,t,an,l,u,x,E,_),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=i[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let _=x,y=E;_<y;_+=3){const w=_,C=_+1,F=_+2;o=mr(this,d,t,an,l,u,w,C,F),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const x=p,E=p+1,_=p+2;o=mr(this,i,t,an,l,u,x,E,_),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function xc(r,t,e,n,i,s,o,a){let c;if(t.side===He?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Pn,a),c===null)return null;pr.copy(a),pr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(pr);return l<e.near||l>e.far?null:{distance:l,point:pr.clone(),object:r}}function mr(r,t,e,n,i,s,o,a,c){r.getVertexPosition(o,Oi),r.getVertexPosition(a,zi),r.getVertexPosition(c,Ui);const l=xc(r,t,e,n,Oi,zi,Ui,hs);if(l){i&&(hr.fromBufferAttribute(i,o),fr.fromBufferAttribute(i,a),dr.fromBufferAttribute(i,c),l.uv=bn.getUV(hs,Oi,zi,Ui,hr,fr,dr,new mt)),s&&(hr.fromBufferAttribute(s,o),fr.fromBufferAttribute(s,a),dr.fromBufferAttribute(s,c),l.uv2=bn.getUV(hs,Oi,zi,Ui,hr,fr,dr,new mt));const u={a:o,b:a,c,normal:new N,materialIndex:0};bn.getNormal(Oi,zi,Ui,u.normal),l.face=u}return l}class Qi extends Rn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(f,2));function g(p,d,x,E,_,y,w,C,F,b,T){const O=y/F,J=w/b,tt=y/2,V=w/2,z=C/2,X=F+1,j=b+1;let rt=0,K=0;const st=new N;for(let et=0;et<j;et++){const Et=et*J-V;for(let H=0;H<X;H++){const nt=H*O-tt;st[p]=nt*E,st[d]=Et*_,st[x]=z,l.push(st.x,st.y,st.z),st[p]=0,st[d]=0,st[x]=C>0?1:-1,u.push(st.x,st.y,st.z),f.push(H/F),f.push(1-et/b),rt+=1}}for(let et=0;et<b;et++)for(let Et=0;Et<F;Et++){const H=h+Et+X*et,nt=h+Et+X*(et+1),ht=h+(Et+1)+X*(et+1),B=h+(Et+1)+X*et;c.push(H,nt,B),c.push(nt,ht,B),K+=6}a.addGroup(m,K,T),m+=K,h+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(r){const t={};for(let e=0;e<r.length;e++){const n=Ci(r[e]);for(const i in n)t[i]=n[i]}return t}function vc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Pa(r){return r.getRenderTarget()===null&&r.outputEncoding===ae?ln:Zi}const bc={clone:Ci,merge:De};var yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yc,this.fragmentShader=Sc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=vc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ra extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends Ra{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,di=1;class Mc extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new je(fi,di,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new je(fi,di,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new je(fi,di,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new je(fi,di,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new je(fi,di,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new je(fi,di,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=yn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Da extends We{constructor(t,e,n,i,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wc extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Da(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qi(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Ln});s.uniforms.tEquirect.value=e;const o=new Ve(i,s),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=$e),new Mc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const fs=new N,Ec=new N,Tc=new Ne;class Bn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fs.subVectors(n,e).cross(Ec.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tc.getNormalMatrix(t),i=this.coplanarPoint(fs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Is,gr=new N;class Ia{constructor(t=new Bn,e=new Bn,n=new Bn,i=new Bn,s=new Bn,o=new Bn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],p=n[11],d=n[12],x=n[13],E=n[14],_=n[15];return e[0].setComponents(a-i,f-c,p-h,_-d).normalize(),e[1].setComponents(a+i,f+c,p+h,_+d).normalize(),e[2].setComponents(a+s,f+l,p+m,_+x).normalize(),e[3].setComponents(a-s,f-l,p-m,_-x).normalize(),e[4].setComponents(a-o,f-u,p-g,_-E).normalize(),e[5].setComponents(a+o,f+u,p+g,_+E).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(gr.x=i.normal.x>0?t.max.x:t.min.x,gr.y=i.normal.y>0?t.max.y:t.min.y,gr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Na(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ac(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,m=u.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,h):(e?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Dr extends Rn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=t/a,h=e/c,m=[],g=[],p=[],d=[];for(let x=0;x<u;x++){const E=x*h-o;for(let _=0;_<l;_++){const y=_*f-s;g.push(y,-E,0),p.push(0,0,1),d.push(_/a),d.push(1-x/c)}}for(let x=0;x<c;x++)for(let E=0;E<a;E++){const _=E+l*x,y=E+l*(x+1),w=E+1+l*(x+1),C=E+1+l*x;m.push(_,y,C),m.push(y,w,C)}this.setIndex(m),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(p,3)),this.setAttribute("uv",new Sn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nc="vec3 transformed = vec3( position );",Fc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,zc=`#ifdef USE_IRIDESCENCE
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
#endif`,Uc=`#ifdef USE_BUMPMAP
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
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yc=`#define PI 3.141592653589793
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
}`,Zc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jc=`vec3 transformedNormal = objectNormal;
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
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hu=`#ifdef USE_GRADIENTMAP
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
}`,fu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gu=`uniform bool receiveShadow;
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
#endif`,_u=`#if defined( USE_ENVMAP )
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
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
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
#endif`,Mu=`struct PhysicalMaterial {
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
}`,wu=`
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Au=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
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
#endif`,ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Bu=`#ifdef USE_MORPHTARGETS
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
#endif`,Gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Vu=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,Yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ah=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lh=`float getShadowMask() {
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
}`,ch=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uh=`#ifdef USE_SKINNING
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
#endif`,hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fh=`#ifdef USE_SKINNING
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
#endif`,dh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_h=`#ifdef USE_TRANSMISSION
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
#endif`,xh=`#ifdef USE_TRANSMISSION
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
#endif`,vh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Eh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Th=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ah=`uniform sampler2D t2D;
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
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dh=`#include <common>
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
}`,Ih=`#if DEPTH_PACKING == 3200
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
}`,Nh=`#define DISTANCE
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
}`,Fh=`#define DISTANCE
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
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uh=`uniform float scale;
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
}`,kh=`uniform vec3 diffuse;
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
}`,Bh=`#include <common>
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
}`,Gh=`uniform vec3 diffuse;
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
}`,Vh=`#define LAMBERT
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
}`,Hh=`#define LAMBERT
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
}`,Wh=`#define MATCAP
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
}`,qh=`#define MATCAP
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
}`,Xh=`#define NORMAL
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
}`,Yh=`#define NORMAL
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
}`,Zh=`#define PHONG
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
}`,Jh=`#define PHONG
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
}`,Kh=`#define STANDARD
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
}`,$h=`#define STANDARD
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
}`,jh=`#define TOON
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
}`,Qh=`#define TOON
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
}`,tf=`uniform float size;
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
}`,ef=`uniform vec3 diffuse;
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
}`,nf=`#include <common>
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
}`,rf=`uniform vec3 color;
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
}`,sf=`uniform float rotation;
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
}`,of=`uniform vec3 diffuse;
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
}`,Vt={alphamap_fragment:Cc,alphamap_pars_fragment:Lc,alphatest_fragment:Pc,alphatest_pars_fragment:Rc,aomap_fragment:Dc,aomap_pars_fragment:Ic,begin_vertex:Nc,beginnormal_vertex:Fc,bsdfs:Oc,iridescence_fragment:zc,bumpmap_pars_fragment:Uc,clipping_planes_fragment:kc,clipping_planes_pars_fragment:Bc,clipping_planes_pars_vertex:Gc,clipping_planes_vertex:Vc,color_fragment:Hc,color_pars_fragment:Wc,color_pars_vertex:qc,color_vertex:Xc,common:Yc,cube_uv_reflection_fragment:Zc,defaultnormal_vertex:Jc,displacementmap_pars_vertex:Kc,displacementmap_vertex:$c,emissivemap_fragment:jc,emissivemap_pars_fragment:Qc,encodings_fragment:tu,encodings_pars_fragment:eu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:ru,envmap_pars_vertex:su,envmap_physical_pars_fragment:_u,envmap_vertex:ou,fog_vertex:au,fog_pars_vertex:lu,fog_fragment:cu,fog_pars_fragment:uu,gradientmap_pars_fragment:hu,lightmap_fragment:fu,lightmap_pars_fragment:du,lights_lambert_fragment:pu,lights_lambert_pars_fragment:mu,lights_pars_begin:gu,lights_toon_fragment:xu,lights_toon_pars_fragment:vu,lights_phong_fragment:bu,lights_phong_pars_fragment:yu,lights_physical_fragment:Su,lights_physical_pars_fragment:Mu,lights_fragment_begin:wu,lights_fragment_maps:Eu,lights_fragment_end:Tu,logdepthbuf_fragment:Au,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Lu,logdepthbuf_vertex:Pu,map_fragment:Ru,map_pars_fragment:Du,map_particle_fragment:Iu,map_particle_pars_fragment:Nu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Ou,morphcolor_vertex:zu,morphnormal_vertex:Uu,morphtarget_pars_vertex:ku,morphtarget_vertex:Bu,normal_fragment_begin:Gu,normal_fragment_maps:Vu,normal_pars_fragment:Hu,normal_pars_vertex:Wu,normal_vertex:qu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:Yu,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Ku,output_fragment:$u,packing:ju,premultiplied_alpha_fragment:Qu,project_vertex:th,dithering_fragment:eh,dithering_pars_fragment:nh,roughnessmap_fragment:ih,roughnessmap_pars_fragment:rh,shadowmap_pars_fragment:sh,shadowmap_pars_vertex:oh,shadowmap_vertex:ah,shadowmask_pars_fragment:lh,skinbase_vertex:ch,skinning_pars_vertex:uh,skinning_vertex:hh,skinnormal_vertex:fh,specularmap_fragment:dh,specularmap_pars_fragment:ph,tonemapping_fragment:mh,tonemapping_pars_fragment:gh,transmission_fragment:_h,transmission_pars_fragment:xh,uv_pars_fragment:vh,uv_pars_vertex:bh,uv_vertex:yh,uv2_pars_fragment:Sh,uv2_pars_vertex:Mh,uv2_vertex:wh,worldpos_vertex:Eh,background_vert:Th,background_frag:Ah,backgroundCube_vert:Ch,backgroundCube_frag:Lh,cube_vert:Ph,cube_frag:Rh,depth_vert:Dh,depth_frag:Ih,distanceRGBA_vert:Nh,distanceRGBA_frag:Fh,equirect_vert:Oh,equirect_frag:zh,linedashed_vert:Uh,linedashed_frag:kh,meshbasic_vert:Bh,meshbasic_frag:Gh,meshlambert_vert:Vh,meshlambert_frag:Hh,meshmatcap_vert:Wh,meshmatcap_frag:qh,meshnormal_vert:Xh,meshnormal_frag:Yh,meshphong_vert:Zh,meshphong_frag:Jh,meshphysical_vert:Kh,meshphysical_frag:$h,meshtoon_vert:jh,meshtoon_frag:Qh,points_vert:tf,points_frag:ef,shadow_vert:nf,shadow_frag:rf,sprite_vert:sf,sprite_frag:of},ft={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ne},uv2Transform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}}},cn={basic:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new se(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:De([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:De([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new se(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:De([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:De([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:De([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:De([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:De([ft.common,ft.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:De([ft.lights,ft.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};cn.physical={uniforms:De([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new mt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const _r={r:0,b:0,g:0};function af(r,t,e,n,i,s,o){const a=new se(0);let c=s===!0?0:1,l,u,f=null,h=0,m=null;function g(d,x){let E=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_));const y=r.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?p(a,c):_&&_.isColor&&(p(_,1),E=!0),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Lr)?(u===void 0&&(u=new Ve(new Qi(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Ci(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,F,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_.encoding!==ae,(f!==_||h!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ve(new Dr(2,2),new jn({name:"BackgroundMaterial",uniforms:Ci(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_.encoding!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,x){d.getRGB(_r,Pa(r)),n.buffers.color.setClear(_r.r,_r.g,_r.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(d,x=1){a.set(d),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:g}}function lf(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,u=!1;function f(z,X,j,rt,K){let st=!1;if(o){const et=p(rt,j,X);l!==et&&(l=et,m(l.object)),st=x(z,rt,j,K),st&&E(z,rt,j,K)}else{const et=X.wireframe===!0;(l.geometry!==rt.id||l.program!==j.id||l.wireframe!==et)&&(l.geometry=rt.id,l.program=j.id,l.wireframe=et,st=!0)}K!==null&&e.update(K,34963),(st||u)&&(u=!1,b(z,X,j,rt),K!==null&&r.bindBuffer(34963,e.get(K).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,X,j){const rt=j.wireframe===!0;let K=a[z.id];K===void 0&&(K={},a[z.id]=K);let st=K[X.id];st===void 0&&(st={},K[X.id]=st);let et=st[rt];return et===void 0&&(et=d(h()),st[rt]=et),et}function d(z){const X=[],j=[],rt=[];for(let K=0;K<i;K++)X[K]=0,j[K]=0,rt[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:rt,object:z,attributes:{},index:null}}function x(z,X,j,rt){const K=l.attributes,st=X.attributes;let et=0;const Et=j.getAttributes();for(const H in Et)if(Et[H].location>=0){const ht=K[H];let B=st[H];if(B===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(B=z.instanceColor)),ht===void 0||ht.attribute!==B||B&&ht.data!==B.data)return!0;et++}return l.attributesNum!==et||l.index!==rt}function E(z,X,j,rt){const K={},st=X.attributes;let et=0;const Et=j.getAttributes();for(const H in Et)if(Et[H].location>=0){let ht=st[H];ht===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(ht=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(ht=z.instanceColor));const B={};B.attribute=ht,ht&&ht.data&&(B.data=ht.data),K[H]=B,et++}l.attributes=K,l.attributesNum=et,l.index=rt}function _(){const z=l.newAttributes;for(let X=0,j=z.length;X<j;X++)z[X]=0}function y(z){w(z,0)}function w(z,X){const j=l.newAttributes,rt=l.enabledAttributes,K=l.attributeDivisors;j[z]=1,rt[z]===0&&(r.enableVertexAttribArray(z),rt[z]=1),K[z]!==X&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,X),K[z]=X)}function C(){const z=l.newAttributes,X=l.enabledAttributes;for(let j=0,rt=X.length;j<rt;j++)X[j]!==z[j]&&(r.disableVertexAttribArray(j),X[j]=0)}function F(z,X,j,rt,K,st){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(z,X,j,K,st):r.vertexAttribPointer(z,X,j,rt,K,st)}function b(z,X,j,rt){if(n.isWebGL2===!1&&(z.isInstancedMesh||rt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const K=rt.attributes,st=j.getAttributes(),et=X.defaultAttributeValues;for(const Et in st){const H=st[Et];if(H.location>=0){let nt=K[Et];if(nt===void 0&&(Et==="instanceMatrix"&&z.instanceMatrix&&(nt=z.instanceMatrix),Et==="instanceColor"&&z.instanceColor&&(nt=z.instanceColor)),nt!==void 0){const ht=nt.normalized,B=nt.itemSize,St=e.get(nt);if(St===void 0)continue;const _t=St.buffer,Mt=St.type,wt=St.bytesPerElement;if(nt.isInterleavedBufferAttribute){const At=nt.data,zt=At.stride,$=nt.offset;if(At.isInstancedInterleavedBuffer){for(let Q=0;Q<H.locationSize;Q++)w(H.location+Q,At.meshPerAttribute);z.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Q=0;Q<H.locationSize;Q++)y(H.location+Q);r.bindBuffer(34962,_t);for(let Q=0;Q<H.locationSize;Q++)F(H.location+Q,B/H.locationSize,Mt,ht,zt*wt,($+B/H.locationSize*Q)*wt)}else{if(nt.isInstancedBufferAttribute){for(let At=0;At<H.locationSize;At++)w(H.location+At,nt.meshPerAttribute);z.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let At=0;At<H.locationSize;At++)y(H.location+At);r.bindBuffer(34962,_t);for(let At=0;At<H.locationSize;At++)F(H.location+At,B/H.locationSize,Mt,ht,B*wt,B/H.locationSize*At*wt)}}else if(et!==void 0){const ht=et[Et];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(H.location,ht);break;case 3:r.vertexAttrib3fv(H.location,ht);break;case 4:r.vertexAttrib4fv(H.location,ht);break;default:r.vertexAttrib1fv(H.location,ht)}}}}C()}function T(){tt();for(const z in a){const X=a[z];for(const j in X){const rt=X[j];for(const K in rt)g(rt[K].object),delete rt[K];delete X[j]}delete a[z]}}function O(z){if(a[z.id]===void 0)return;const X=a[z.id];for(const j in X){const rt=X[j];for(const K in rt)g(rt[K].object),delete rt[K];delete X[j]}delete a[z.id]}function J(z){for(const X in a){const j=a[X];if(j[z.id]===void 0)continue;const rt=j[z.id];for(const K in rt)g(rt[K].object),delete rt[K];delete j[z.id]}}function tt(){V(),u=!0,l!==c&&(l=c,m(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:tt,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:O,releaseStatesOfProgram:J,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function cf(r,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,u,f),e.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function uf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),x=r.getParameter(36348),E=r.getParameter(36349),_=h>0,y=o||t.has("OES_texture_float"),w=_&&y,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:C}}function hf(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Bn,a=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,x=r.get(f);if(!i||g===null||g.length===0||s&&!d)s?u(null):l();else{const E=s?0:n,_=E*4;let y=x.clippingState||null;c.value=y,y=u(g,h,_,m);for(let w=0;w!==_;++w)y[w]=e[w];x.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const x=m+p*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<x)&&(d=new Float32Array(x));for(let _=0,y=m;_!==p;++_,y+=4)o.copy(f[_]).applyMatrix4(E,a),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function ff(r){let t=new WeakMap;function e(o,a){return a===Ss?o.mapping=Ei:a===Ms&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ss||a===Ms)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wc(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class df extends Ra{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,Fo=[.125,.215,.35,.446,.526,.582],Vn=20,ds=new df,Oo=new se;let ps=null;const Gn=(1+Math.sqrt(5))/2,mi=1/Gn,zo=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Gn,mi),new N(0,Gn,-mi),new N(mi,0,Gn),new N(-mi,0,Gn),new N(Gn,mi,0),new N(-Gn,mi,0)];class Uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ps=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ps),t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ps=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Yi,format:rn,encoding:Jn,depthBuffer:!1},i=ko(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pf(s)),this._blurMaterial=mf(s,t,e)}return i}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,ds)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Oo),u.toneMapping=yn,u.autoClear=!1;const m=new Cr({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Ve(new Qi,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(Oo),p=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):E===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const _=this._cubeSize;xr(i,E*_,x>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;xr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ds)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=zo[(i-1)%zo.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ve(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Vn;d>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Vn}`);const x=[];let E=0;for(let F=0;F<Vn;++F){const b=F/p,T=Math.exp(-b*b/2);x.push(T),F===0?E+=T:F<d&&(E+=2*T)}for(let F=0;F<x.length;F++)x[F]=x[F]/E;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=x,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const y=this._sizeLods[i],w=3*y*(i>_-vi?i-_+vi:0),C=4*(this._cubeSize-y);xr(e,w,C,3*y,2*y),c.setRenderTarget(e),c.render(f,ds)}}function pf(r){const t=[],e=[],n=[];let i=r;const s=r-vi+1+Fo.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-vi?c=Fo[o-r+vi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,x=1,E=new Float32Array(p*g*m),_=new Float32Array(d*g*m),y=new Float32Array(x*g*m);for(let C=0;C<m;C++){const F=C%3*2/3-1,b=C>2?0:-1,T=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];E.set(T,p*g*C),_.set(h,d*g*C);const O=[C,C,C,C,C,C];y.set(O,x*g*C)}const w=new Rn;w.setAttribute("position",new hn(E,p)),w.setAttribute("uv",new hn(_,d)),w.setAttribute("faceIndex",new hn(y,x)),t.push(w),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ko(r,t,e){const n=new $n(r,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function mf(r,t,e){const n=new Float32Array(Vn),i=new N(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Bo(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Go(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ns(){return`

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
	`}function gf(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ss||c===Ms,u=c===Ei||c===Ti;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Uo(r)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new Uo(r));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function _f(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xf(r,t,e,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,x=p.length;d<x;d++)t.update(p[d],34962)}}function l(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let _=0,y=E.length;_<y;_+=3){const w=E[_+0],C=E[_+1],F=E[_+2];h.push(w,C,C,F,F,w)}}else{const E=g.array;p=g.version;for(let _=0,y=E.length/3-1;_<y;_+=3){const w=_+0,C=_+1,F=_+2;h.push(w,C,C,F,F,w)}}const d=new(Sa(h)?La:Ca)(h,1);d.version=p;const x=s.get(f);x&&t.remove(x),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function vf(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,m){r.drawElements(s,m,a,h*c),e.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function bf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yf(r,t){return r[0]-t[0]}function Sf(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Mf(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new we,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let X=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var m=X;d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;_===!0&&(T=1),y===!0&&(T=2),w===!0&&(T=3);let O=u.attributes.position.count*T,J=1;O>t.maxTextureSize&&(J=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const tt=new Float32Array(O*J*4*p),V=new Ea(tt,O,J,p);V.type=Wn,V.needsUpdate=!0;const z=T*4;for(let j=0;j<p;j++){const rt=C[j],K=F[j],st=b[j],et=O*J*4*j;for(let Et=0;Et<rt.count;Et++){const H=Et*z;_===!0&&(o.fromBufferAttribute(rt,Et),tt[et+H+0]=o.x,tt[et+H+1]=o.y,tt[et+H+2]=o.z,tt[et+H+3]=0),y===!0&&(o.fromBufferAttribute(K,Et),tt[et+H+4]=o.x,tt[et+H+5]=o.y,tt[et+H+6]=o.z,tt[et+H+7]=0),w===!0&&(o.fromBufferAttribute(st,Et),tt[et+H+8]=o.x,tt[et+H+9]=o.y,tt[et+H+10]=o.z,tt[et+H+11]=st.itemSize===4?o.w:1)}}d={count:p,texture:V,size:new mt(O,J)},s.set(u,d),u.addEventListener("dispose",X)}let x=0;for(let _=0;_<h.length;_++)x+=h[_];const E=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const g=h===void 0?0:h.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<g;y++){const w=p[y];w[0]=y,w[1]=h[y]}p.sort(Sf);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(yf);const d=u.morphAttributes.position,x=u.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const w=a[y],C=w[0],F=w[1];C!==Number.MAX_SAFE_INTEGER&&F?(d&&u.getAttribute("morphTarget"+y)!==d[C]&&u.setAttribute("morphTarget"+y,d[C]),x&&u.getAttribute("morphNormal"+y)!==x[C]&&u.setAttribute("morphNormal"+y,x[C]),i[y]=F,E+=F):(d&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),x&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const _=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function wf(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);return i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Fa=new We,Oa=new Ea,za=new ac,Ua=new Da,Vo=[],Ho=[],Wo=new Float32Array(16),qo=new Float32Array(9),Xo=new Float32Array(4);function Pi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Vo[i];if(s===void 0&&(s=new Float32Array(i),Vo[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ir(r,t){let e=Ho[t];e===void 0&&(e=new Int32Array(t),Ho[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ef(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Tf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),ve(e,t)}}function Af(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),ve(e,t)}}function Cf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),ve(e,t)}}function Lf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Xo.set(n),r.uniformMatrix2fv(this.addr,!1,Xo),ve(e,n)}}function Pf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;qo.set(n),r.uniformMatrix3fv(this.addr,!1,qo),ve(e,n)}}function Rf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Wo.set(n),r.uniformMatrix4fv(this.addr,!1,Wo),ve(e,n)}}function Df(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function If(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2iv(this.addr,t),ve(e,t)}}function Nf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3iv(this.addr,t),ve(e,t)}}function Ff(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4iv(this.addr,t),ve(e,t)}}function Of(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function zf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2uiv(this.addr,t),ve(e,t)}}function Uf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3uiv(this.addr,t),ve(e,t)}}function kf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4uiv(this.addr,t),ve(e,t)}}function Bf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Fa,i)}function Gf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||za,i)}function Vf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ua,i)}function Hf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oa,i)}function Wf(r){switch(r){case 5126:return Ef;case 35664:return Tf;case 35665:return Af;case 35666:return Cf;case 35674:return Lf;case 35675:return Pf;case 35676:return Rf;case 5124:case 35670:return Df;case 35667:case 35671:return If;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return Of;case 36294:return zf;case 36295:return Uf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Hf}}function qf(r,t){r.uniform1fv(this.addr,t)}function Xf(r,t){const e=Pi(t,this.size,2);r.uniform2fv(this.addr,e)}function Yf(r,t){const e=Pi(t,this.size,3);r.uniform3fv(this.addr,e)}function Zf(r,t){const e=Pi(t,this.size,4);r.uniform4fv(this.addr,e)}function Jf(r,t){const e=Pi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Kf(r,t){const e=Pi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function $f(r,t){const e=Pi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function jf(r,t){r.uniform1iv(this.addr,t)}function Qf(r,t){r.uniform2iv(this.addr,t)}function td(r,t){r.uniform3iv(this.addr,t)}function ed(r,t){r.uniform4iv(this.addr,t)}function nd(r,t){r.uniform1uiv(this.addr,t)}function id(r,t){r.uniform2uiv(this.addr,t)}function rd(r,t){r.uniform3uiv(this.addr,t)}function sd(r,t){r.uniform4uiv(this.addr,t)}function od(r,t,e){const n=this.cache,i=t.length,s=Ir(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Fa,s[o])}function ad(r,t,e){const n=this.cache,i=t.length,s=Ir(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||za,s[o])}function ld(r,t,e){const n=this.cache,i=t.length,s=Ir(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ua,s[o])}function cd(r,t,e){const n=this.cache,i=t.length,s=Ir(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Oa,s[o])}function ud(r){switch(r){case 5126:return qf;case 35664:return Xf;case 35665:return Yf;case 35666:return Zf;case 35674:return Jf;case 35675:return Kf;case 35676:return $f;case 5124:case 35670:return jf;case 35667:case 35671:return Qf;case 35668:case 35672:return td;case 35669:case 35673:return ed;case 5125:return nd;case 36294:return id;case 36295:return rd;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return ld;case 36289:case 36303:case 36311:case 36292:return cd}}class hd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Wf(e.type)}}class fd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=ud(e.type)}}class dd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ms=/(\w+)(\])?(\[|\.)?/g;function Yo(r,t){r.seq.push(t),r.map[t.id]=t}function pd(r,t,e){const n=r.name,i=n.length;for(ms.lastIndex=0;;){const s=ms.exec(n),o=ms.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yo(e,l===void 0?new hd(a,r,t):new fd(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new dd(a),Yo(e,f)),e=f}}}class Er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);pd(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Zo(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let md=0;function gd(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function _d(r){switch(r){case Jn:return["Linear","( value )"];case ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Jo(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+gd(r.getShaderSource(t),o)}else return i}function xd(r,t){const e=_d(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function vd(r,t){let e;switch(t){case Tl:e="Linear";break;case Al:e="Reinhard";break;case Cl:e="OptimizedCineon";break;case Ll:e="ACESFilmic";break;case Pl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hi).join(`
`)}function yd(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sd(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Hi(r){return r!==""}function Ko(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $o(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Md=/^[ \t]*#include +<([\w\d./]+)>/gm;function As(r){return r.replace(Md,wd)}function wd(r,t){const e=Vt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return As(e)}const Ed=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(r){return r.replace(Ed,Td)}function Td(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qo(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ad(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ma?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function Cd(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ld(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function Pd(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xa:t="ENVMAP_BLENDING_MULTIPLY";break;case wl:t="ENVMAP_BLENDING_MIX";break;case El:t="ENVMAP_BLENDING_ADD";break}return t}function Rd(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dd(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ad(e),l=Cd(e),u=Ld(e),f=Pd(e),h=Rd(e),m=e.isWebGL2?"":bd(e),g=yd(s),p=i.createProgram();let d,x,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(Hi).join(`
`),d.length>0&&(d+=`
`),x=[m,g].filter(Hi).join(`
`),x.length>0&&(x+=`
`)):(d=[Qo(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),x=[m,Qo(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==yn?vd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.encodings_pars_fragment,xd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),o=As(o),o=Ko(o,e),o=$o(o,e),a=As(a),a=Ko(a,e),a=$o(a,e),o=jo(o),a=jo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=E+d+o,y=E+x+a,w=Zo(i,35633,_),C=Zo(i,35632,y);if(i.attachShader(p,w),i.attachShader(p,C),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),O=i.getShaderInfoLog(w).trim(),J=i.getShaderInfoLog(C).trim();let tt=!0,V=!0;if(i.getProgramParameter(p,35714)===!1){tt=!1;const z=Jo(i,w,"vertex"),X=Jo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+z+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(O===""||J==="")&&(V=!1);V&&(this.diagnostics={runnable:tt,programLog:T,vertexShader:{log:O,prefix:d},fragmentShader:{log:J,prefix:x}})}i.deleteShader(w),i.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new Er(i,p)),F};let b;return this.getAttributes=function(){return b===void 0&&(b=Sd(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=md++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=C,this}let Id=0;class Nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fd(t),e.set(t,n)),n}}class Fd{constructor(t){this.id=Id++,this.code=t,this.usedTimes=0}}function Od(r,t,e,n,i,s,o){const a=new Ta,c=new Nd,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,T,O,J,tt){const V=J.fog,z=tt.geometry,X=b.isMeshStandardMaterial?J.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),rt=j&&j.mapping===Lr?j.image.height:null,K=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=st!==void 0?st.length:0;let Et=0;z.morphAttributes.position!==void 0&&(Et=1),z.morphAttributes.normal!==void 0&&(Et=2),z.morphAttributes.color!==void 0&&(Et=3);let H,nt,ht,B;if(K){const zt=cn[K];H=zt.vertexShader,nt=zt.fragmentShader}else H=b.vertexShader,nt=b.fragmentShader,c.update(b),ht=c.getVertexShaderID(b),B=c.getFragmentShaderID(b);const St=r.getRenderTarget(),_t=b.alphaTest>0,Mt=b.clearcoat>0,wt=b.iridescence>0;return{isWebGL2:u,shaderID:K,shaderName:b.type,vertexShader:H,fragmentShader:nt,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:B,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:tt.isInstancedMesh===!0,instancingColor:tt.isInstancedMesh===!0&&tt.instanceColor!==null,supportsVertexTextures:h,outputEncoding:St===null?r.outputEncoding:St.isXRRenderTarget===!0?St.texture.encoding:Jn,map:!!b.map,matcap:!!b.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:rt,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Kl,tangentSpaceNormalMap:b.normalMapType===Jl,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ae,clearcoat:Mt,clearcoatMap:Mt&&!!b.clearcoatMap,clearcoatRoughnessMap:Mt&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Mt&&!!b.clearcoatNormalMap,iridescence:wt,iridescenceMap:wt&&!!b.iridescenceMap,iridescenceThicknessMap:wt&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===yi,alphaMap:!!b.alphaMap,alphaTest:_t,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!z.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!V,useFog:b.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:tt.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:yn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===An,flipSided:b.side===He,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)T.push(O),T.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(x(T,b),E(T,b),T.push(r.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function x(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function E(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function _(b){const T=g[b.type];let O;if(T){const J=cn[T];O=bc.clone(J.uniforms)}else O=b.uniforms;return O}function y(b,T){let O;for(let J=0,tt=l.length;J<tt;J++){const V=l[J];if(V.cacheKey===T){O=V,++O.usedTimes;break}}return O===void 0&&(O=new Dd(r,T,b,s),l.push(O)),O}function w(b){if(--b.usedTimes===0){const T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),b.destroy()}}function C(b){c.remove(b)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:F}}function zd(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ud(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ta(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ea(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,m,g,p,d){let x=r[t];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},r[t]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=p,x.group=d),t++,x}function a(f,h,m,g,p,d){const x=o(f,h,m,g,p,d);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function c(f,h,m,g,p,d){const x=o(f,h,m,g,p,d);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function l(f,h){e.length>1&&e.sort(f||Ud),n.length>1&&n.sort(h||ta),i.length>1&&i.sort(h||ta)}function u(){for(let f=t,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function kd(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ea,r.set(n,[o])):i>=s.length?(o=new ea,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Bd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new se};break;case"SpotLight":e={position:new N,direction:new N,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function Gd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Vd=0;function Hd(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Wd(r,t){const e=new Bd,n=Gd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new Me,a=new Me;function c(u,f){let h=0,m=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let p=0,d=0,x=0,E=0,_=0,y=0,w=0,C=0,F=0,b=0;u.sort(Hd);const T=f===!0?Math.PI:1;for(let J=0,tt=u.length;J<tt;J++){const V=u[J],z=V.color,X=V.intensity,j=V.distance,rt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=z.r*X*T,m+=z.g*X*T,g+=z.b*X*T;else if(V.isLightProbe)for(let K=0;K<9;K++)i.probe[K].addScaledVector(V.sh.coefficients[K],X);else if(V.isDirectionalLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity*T),V.castShadow){const st=V.shadow,et=n.get(V);et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,i.directionalShadow[p]=et,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=V.shadow.matrix,y++}i.directional[p]=K,p++}else if(V.isSpotLight){const K=e.get(V);K.position.setFromMatrixPosition(V.matrixWorld),K.color.copy(z).multiplyScalar(X*T),K.distance=j,K.coneCos=Math.cos(V.angle),K.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),K.decay=V.decay,i.spot[x]=K;const st=V.shadow;if(V.map&&(i.spotLightMap[F]=V.map,F++,st.updateMatrices(V),V.castShadow&&b++),i.spotLightMatrix[x]=st.matrix,V.castShadow){const et=n.get(V);et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,i.spotShadow[x]=et,i.spotShadowMap[x]=rt,C++}x++}else if(V.isRectAreaLight){const K=e.get(V);K.color.copy(z).multiplyScalar(X),K.halfWidth.set(V.width*.5,0,0),K.halfHeight.set(0,V.height*.5,0),i.rectArea[E]=K,E++}else if(V.isPointLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity*T),K.distance=V.distance,K.decay=V.decay,V.castShadow){const st=V.shadow,et=n.get(V);et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,et.shadowCameraNear=st.camera.near,et.shadowCameraFar=st.camera.far,i.pointShadow[d]=et,i.pointShadowMap[d]=rt,i.pointShadowMatrix[d]=V.shadow.matrix,w++}i.point[d]=K,d++}else if(V.isHemisphereLight){const K=e.get(V);K.skyColor.copy(V.color).multiplyScalar(X*T),K.groundColor.copy(V.groundColor).multiplyScalar(X*T),i.hemi[_]=K,_++}}E>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==p||O.pointLength!==d||O.spotLength!==x||O.rectAreaLength!==E||O.hemiLength!==_||O.numDirectionalShadows!==y||O.numPointShadows!==w||O.numSpotShadows!==C||O.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=E,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+F-b,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=b,O.directionalLength=p,O.pointLength=d,O.spotLength=x,O.rectAreaLength=E,O.hemiLength=_,O.numDirectionalShadows=y,O.numPointShadows=w,O.numSpotShadows=C,O.numSpotMaps=F,i.version=Vd++)}function l(u,f){let h=0,m=0,g=0,p=0,d=0;const x=f.matrixWorldInverse;for(let E=0,_=u.length;E<_;E++){const y=u[E];if(y.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),h++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),a.identity(),o.copy(y.matrixWorld),o.premultiply(x),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const w=i.hemi[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),d++}}}return{setup:c,setupView:l,state:i}}function na(r,t){const e=new Wd(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qd(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new na(r,t),e.set(s,[c])):o>=a.length?(c=new na(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Xd extends Rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yd extends Rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jd=`uniform sampler2D shadow_pass;
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
}`;function Kd(r,t,e){let n=new Ia;const i=new mt,s=new mt,o=new we,a=new Xd({depthPacking:Zl}),c=new Yd,l={},u=e.maxTextureSize,f={[Pn]:He,[He]:Pn,[An]:An},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Zd,fragmentShader:Jd}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ve(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma,this.render=function(y,w,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const F=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Ln),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let J=0,tt=y.length;J<tt;J++){const V=y[J],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null){const rt=this.type!==Vi?{minFilter:Ie,magFilter:Ie}:{};z.map=new $n(i.x,i.y,rt),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const j=z.getViewportCount();for(let rt=0;rt<j;rt++){const K=z.getViewport(rt);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),O.viewport(o),z.updateMatrices(V,rt),n=z.getFrustum(),_(w,C,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Vi&&x(z,C),z.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(F,b,T)};function x(y,w){const C=t.update(p);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new $n(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,C,h,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,C,m,p,null)}function E(y,w,C,F,b,T){let O=null;const J=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(J!==void 0)O=J;else if(O=C.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const tt=O.uuid,V=w.uuid;let z=l[tt];z===void 0&&(z={},l[tt]=z);let X=z[V];X===void 0&&(X=O.clone(),z[V]=X),O=X}return O.visible=w.visible,O.wireframe=w.wireframe,T===Vi?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:f[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaTest,O.map=w.map,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,C.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(C.matrixWorld),O.nearDistance=F,O.farDistance=b),O}function _(y,w,C,F,b){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Vi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const J=t.update(y),tt=y.material;if(Array.isArray(tt)){const V=J.groups;for(let z=0,X=V.length;z<X;z++){const j=V[z],rt=tt[j.materialIndex];if(rt&&rt.visible){const K=E(y,rt,F,C.near,C.far,b);r.renderBufferDirect(C,null,J,K,y,j)}}}else if(tt.visible){const V=E(y,tt,F,C.near,C.far,b);r.renderBufferDirect(C,null,J,V,y,null)}}const O=y.children;for(let J=0,tt=O.length;J<tt;J++)_(O[J],w,C,F,b)}}function $d(r,t,e){const n=e.isWebGL2;function i(){let R=!1;const Y=new we;let it=null;const yt=new we(0,0,0,0);return{setMask:function(Lt){it!==Lt&&!R&&(r.colorMask(Lt,Lt,Lt,Lt),it=Lt)},setLocked:function(Lt){R=Lt},setClear:function(Lt,oe,be,Le,sn){sn===!0&&(Lt*=Le,oe*=Le,be*=Le),Y.set(Lt,oe,be,Le),yt.equals(Y)===!1&&(r.clearColor(Lt,oe,be,Le),yt.copy(Y))},reset:function(){R=!1,it=null,yt.set(-1,0,0,0)}}}function s(){let R=!1,Y=null,it=null,yt=null;return{setTest:function(Lt){Lt?_t(2929):Mt(2929)},setMask:function(Lt){Y!==Lt&&!R&&(r.depthMask(Lt),Y=Lt)},setFunc:function(Lt){if(it!==Lt){switch(Lt){case _l:r.depthFunc(512);break;case xl:r.depthFunc(519);break;case vl:r.depthFunc(513);break;case ys:r.depthFunc(515);break;case bl:r.depthFunc(514);break;case yl:r.depthFunc(518);break;case Sl:r.depthFunc(516);break;case Ml:r.depthFunc(517);break;default:r.depthFunc(515)}it=Lt}},setLocked:function(Lt){R=Lt},setClear:function(Lt){yt!==Lt&&(r.clearDepth(Lt),yt=Lt)},reset:function(){R=!1,Y=null,it=null,yt=null}}}function o(){let R=!1,Y=null,it=null,yt=null,Lt=null,oe=null,be=null,Le=null,sn=null;return{setTest:function(ue){R||(ue?_t(2960):Mt(2960))},setMask:function(ue){Y!==ue&&!R&&(r.stencilMask(ue),Y=ue)},setFunc:function(ue,Xe,on){(it!==ue||yt!==Xe||Lt!==on)&&(r.stencilFunc(ue,Xe,on),it=ue,yt=Xe,Lt=on)},setOp:function(ue,Xe,on){(oe!==ue||be!==Xe||Le!==on)&&(r.stencilOp(ue,Xe,on),oe=ue,be=Xe,Le=on)},setLocked:function(ue){R=ue},setClear:function(ue){sn!==ue&&(r.clearStencil(ue),sn=ue)},reset:function(){R=!1,Y=null,it=null,yt=null,Lt=null,oe=null,be=null,Le=null,sn=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,x=!1,E=null,_=null,y=null,w=null,C=null,F=null,b=null,T=!1,O=null,J=null,tt=null,V=null,z=null;const X=r.getParameter(35661);let j=!1,rt=0;const K=r.getParameter(7938);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=rt>=2);let st=null,et={};const Et=r.getParameter(3088),H=r.getParameter(2978),nt=new we().fromArray(Et),ht=new we().fromArray(H);function B(R,Y,it){const yt=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(R,Lt),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let oe=0;oe<it;oe++)r.texImage2D(Y+oe,0,6408,1,1,0,6408,5121,yt);return Lt}const St={};St[3553]=B(3553,3553,1),St[34067]=B(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),_t(2929),c.setFunc(ys),dt(!1),Ut(Hs),_t(2884),ct(Ln);function _t(R){h[R]!==!0&&(r.enable(R),h[R]=!0)}function Mt(R){h[R]!==!1&&(r.disable(R),h[R]=!1)}function wt(R,Y){return m[R]!==Y?(r.bindFramebuffer(R,Y),m[R]=Y,n&&(R===36009&&(m[36160]=Y),R===36160&&(m[36009]=Y)),!0):!1}function At(R,Y){let it=p,yt=!1;if(R)if(it=g.get(Y),it===void 0&&(it=[],g.set(Y,it)),R.isWebGLMultipleRenderTargets){const Lt=R.texture;if(it.length!==Lt.length||it[0]!==36064){for(let oe=0,be=Lt.length;oe<be;oe++)it[oe]=36064+oe;it.length=Lt.length,yt=!0}}else it[0]!==36064&&(it[0]=36064,yt=!0);else it[0]!==1029&&(it[0]=1029,yt=!0);yt&&(e.isWebGL2?r.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function zt(R){return d!==R?(r.useProgram(R),d=R,!0):!1}const $={[xi]:32774,[ol]:32778,[al]:32779};if(n)$[Ys]=32775,$[Zs]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&($[Ys]=R.MIN_EXT,$[Zs]=R.MAX_EXT)}const Q={[ll]:0,[cl]:1,[ul]:768,[ga]:770,[gl]:776,[pl]:774,[fl]:772,[hl]:769,[_a]:771,[ml]:775,[dl]:773};function ct(R,Y,it,yt,Lt,oe,be,Le){if(R===Ln){x===!0&&(Mt(3042),x=!1);return}if(x===!1&&(_t(3042),x=!0),R!==sl){if(R!==E||Le!==T){if((_!==xi||C!==xi)&&(r.blendEquation(32774),_=xi,C=xi),Le)switch(R){case yi:r.blendFuncSeparate(1,771,1,771);break;case Ws:r.blendFunc(1,1);break;case qs:r.blendFuncSeparate(0,769,0,1);break;case Xs:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case yi:r.blendFuncSeparate(770,771,1,771);break;case Ws:r.blendFunc(770,1);break;case qs:r.blendFuncSeparate(0,769,0,1);break;case Xs:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,w=null,F=null,b=null,E=R,T=Le}return}Lt=Lt||Y,oe=oe||it,be=be||yt,(Y!==_||Lt!==C)&&(r.blendEquationSeparate($[Y],$[Lt]),_=Y,C=Lt),(it!==y||yt!==w||oe!==F||be!==b)&&(r.blendFuncSeparate(Q[it],Q[yt],Q[oe],Q[be]),y=it,w=yt,F=oe,b=be),E=R,T=!1}function Ct(R,Y){R.side===An?Mt(2884):_t(2884);let it=R.side===He;Y&&(it=!it),dt(it),R.blending===yi&&R.transparent===!1?ct(Ln):ct(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const yt=R.stencilWrite;l.setTest(yt),yt&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),kt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_t(32926):Mt(32926)}function dt(R){O!==R&&(R?r.frontFace(2304):r.frontFace(2305),O=R)}function Ut(R){R!==nl?(_t(2884),R!==J&&(R===Hs?r.cullFace(1029):R===il?r.cullFace(1028):r.cullFace(1032))):Mt(2884),J=R}function Nt(R){R!==tt&&(j&&r.lineWidth(R),tt=R)}function kt(R,Y,it){R?(_t(32823),(V!==Y||z!==it)&&(r.polygonOffset(Y,it),V=Y,z=it)):Mt(32823)}function ie(R){R?_t(3089):Mt(3089)}function Kt(R){R===void 0&&(R=33984+X-1),st!==R&&(r.activeTexture(R),st=R)}function M(R,Y,it){it===void 0&&(st===null?it=33984+X-1:it=st);let yt=et[it];yt===void 0&&(yt={type:void 0,texture:void 0},et[it]=yt),(yt.type!==R||yt.texture!==Y)&&(st!==it&&(r.activeTexture(it),st=it),r.bindTexture(R,Y||St[R]),yt.type=R,yt.texture=Y)}function v(){const R=et[st];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function U(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function It(R){nt.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),nt.copy(R))}function Dt(R){ht.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),ht.copy(R))}function Xt(R,Y){let it=f.get(Y);it===void 0&&(it=new WeakMap,f.set(Y,it));let yt=it.get(R);yt===void 0&&(yt=r.getUniformBlockIndex(Y,R.name),it.set(R,yt))}function $t(R,Y){const yt=f.get(Y).get(R);u.get(Y)!==yt&&(r.uniformBlockBinding(Y,yt,R.__bindingPointIndex),u.set(Y,yt))}function re(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},st=null,et={},m={},g=new WeakMap,p=[],d=null,x=!1,E=null,_=null,y=null,w=null,C=null,F=null,b=null,T=!1,O=null,J=null,tt=null,V=null,z=null,nt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:_t,disable:Mt,bindFramebuffer:wt,drawBuffers:At,useProgram:zt,setBlending:ct,setMaterial:Ct,setFlipSided:dt,setCullFace:Ut,setLineWidth:Nt,setPolygonOffset:kt,setScissorTest:ie,activeTexture:Kt,bindTexture:M,unbindTexture:v,compressedTexImage2D:W,compressedTexImage3D:ot,texImage2D:pt,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:$t,texStorage2D:U,texStorage3D:bt,texSubImage2D:at,texSubImage3D:gt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:A,scissor:It,viewport:Dt,reset:re}}function jd(r,t,e,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,v){return x?new OffscreenCanvas(M,v):Ar("canvas")}function _(M,v,W,ot){let at=1;if((M.width>ot||M.height>ot)&&(at=ot/Math.max(M.width,M.height)),at<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const gt=v?Ql:Math.floor,Rt=gt(at*M.width),A=gt(at*M.height);p===void 0&&(p=E(Rt,A));const U=W?E(Rt,A):p;return U.width=Rt,U.height=A,U.getContext("2d").drawImage(M,0,0,Rt,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Rt+"x"+A+")."),U}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function y(M){return Mo(M.width)&&Mo(M.height)}function w(M){return a?!1:M.wrapS!==nn||M.wrapT!==nn||M.minFilter!==Ie&&M.minFilter!==$e}function C(M,v){return M.generateMipmaps&&v&&M.minFilter!==Ie&&M.minFilter!==$e}function F(M){r.generateMipmap(M)}function b(M,v,W,ot,at=!1){if(a===!1)return v;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let gt=v;return v===6403&&(W===5126&&(gt=33326),W===5131&&(gt=33325),W===5121&&(gt=33321)),v===33319&&(W===5126&&(gt=33328),W===5131&&(gt=33327),W===5121&&(gt=33323)),v===6408&&(W===5126&&(gt=34836),W===5131&&(gt=34842),W===5121&&(gt=ot===ae&&at===!1?35907:32856),W===32819&&(gt=32854),W===32820&&(gt=32855)),(gt===33325||gt===33326||gt===33327||gt===33328||gt===34842||gt===34836)&&t.get("EXT_color_buffer_float"),gt}function T(M,v,W){return C(M,W)===!0||M.isFramebufferTexture&&M.minFilter!==Ie&&M.minFilter!==$e?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function O(M){return M===Ie||M===Js||M===kr?9728:9729}function J(M){const v=M.target;v.removeEventListener("dispose",J),V(v),v.isVideoTexture&&g.delete(v)}function tt(M){const v=M.target;v.removeEventListener("dispose",tt),X(v)}function V(M){const v=n.get(M);if(v.__webglInit===void 0)return;const W=M.source,ot=d.get(W);if(ot){const at=ot[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&z(M),Object.keys(ot).length===0&&d.delete(W)}n.remove(M)}function z(M){const v=n.get(M);r.deleteTexture(v.__webglTexture);const W=M.source,ot=d.get(W);delete ot[v.__cacheKey],o.memory.textures--}function X(M){const v=M.texture,W=n.get(M),ot=n.get(v);if(ot.__webglTexture!==void 0&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let at=0;at<6;at++)r.deleteFramebuffer(W.__webglFramebuffer[at]),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[at]);else{if(r.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let at=0;at<W.__webglColorRenderbuffer.length;at++)W.__webglColorRenderbuffer[at]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[at]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let at=0,gt=v.length;at<gt;at++){const Rt=n.get(v[at]);Rt.__webglTexture&&(r.deleteTexture(Rt.__webglTexture),o.memory.textures--),n.remove(v[at])}n.remove(v),n.remove(M)}let j=0;function rt(){j=0}function K(){const M=j;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),j+=1,M}function st(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.encoding),v.join()}function et(M,v){const W=n.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.version>0&&W.__version!==M.version){const ot=M.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(W,M,v);return}}e.bindTexture(3553,W.__webglTexture,33984+v)}function Et(M,v){const W=n.get(M);if(M.version>0&&W.__version!==M.version){Mt(W,M,v);return}e.bindTexture(35866,W.__webglTexture,33984+v)}function H(M,v){const W=n.get(M);if(M.version>0&&W.__version!==M.version){Mt(W,M,v);return}e.bindTexture(32879,W.__webglTexture,33984+v)}function nt(M,v){const W=n.get(M);if(M.version>0&&W.__version!==M.version){wt(W,M,v);return}e.bindTexture(34067,W.__webglTexture,33984+v)}const ht={[ws]:10497,[nn]:33071,[Es]:33648},B={[Ie]:9728,[Js]:9984,[kr]:9986,[$e]:9729,[Rl]:9985,[Xi]:9987};function St(M,v,W){if(W?(r.texParameteri(M,10242,ht[v.wrapS]),r.texParameteri(M,10243,ht[v.wrapT]),(M===32879||M===35866)&&r.texParameteri(M,32882,ht[v.wrapR]),r.texParameteri(M,10240,B[v.magFilter]),r.texParameteri(M,10241,B[v.minFilter])):(r.texParameteri(M,10242,33071),r.texParameteri(M,10243,33071),(M===32879||M===35866)&&r.texParameteri(M,32882,33071),(v.wrapS!==nn||v.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,10240,O(v.magFilter)),r.texParameteri(M,10241,O(v.minFilter)),v.minFilter!==Ie&&v.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ie||v.minFilter!==kr&&v.minFilter!==Xi||v.type===Wn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(M,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function _t(M,v){let W=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",J));const ot=v.source;let at=d.get(ot);at===void 0&&(at={},d.set(ot,at));const gt=st(v);if(gt!==M.__cacheKey){at[gt]===void 0&&(at[gt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[gt].usedTimes++;const Rt=at[M.__cacheKey];Rt!==void 0&&(at[M.__cacheKey].usedTimes--,Rt.usedTimes===0&&z(v)),M.__cacheKey=gt,M.__webglTexture=at[gt].texture}return W}function Mt(M,v,W){let ot=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ot=35866),v.isData3DTexture&&(ot=32879);const at=_t(M,v),gt=v.source;e.bindTexture(ot,M.__webglTexture,33984+W);const Rt=n.get(gt);if(gt.version!==Rt.__version||at===!0){e.activeTexture(33984+W),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const A=w(v)&&y(v.image)===!1;let U=_(v.image,A,!1,u);U=Kt(v,U);const bt=y(U)||a,pt=s.convert(v.format,v.encoding);let Pt=s.convert(v.type),It=b(v.internalFormat,pt,Pt,v.encoding,v.isVideoTexture);St(ot,v,bt);let Dt;const Xt=v.mipmaps,$t=a&&v.isVideoTexture!==!0,re=Rt.__version===void 0||at===!0,R=T(v,U,bt);if(v.isDepthTexture)It=6402,a?v.type===Wn?It=36012:v.type===Hn?It=33190:v.type===Si?It=35056:It=33189:v.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===qn&&It===6402&&v.type!==ba&&v.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Hn,Pt=s.convert(v.type)),v.format===Ai&&It===6402&&(It=34041,v.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Si,Pt=s.convert(v.type))),re&&($t?e.texStorage2D(3553,1,It,U.width,U.height):e.texImage2D(3553,0,It,U.width,U.height,0,pt,Pt,null));else if(v.isDataTexture)if(Xt.length>0&&bt){$t&&re&&e.texStorage2D(3553,R,It,Xt[0].width,Xt[0].height);for(let Y=0,it=Xt.length;Y<it;Y++)Dt=Xt[Y],$t?e.texSubImage2D(3553,Y,0,0,Dt.width,Dt.height,pt,Pt,Dt.data):e.texImage2D(3553,Y,It,Dt.width,Dt.height,0,pt,Pt,Dt.data);v.generateMipmaps=!1}else $t?(re&&e.texStorage2D(3553,R,It,U.width,U.height),e.texSubImage2D(3553,0,0,0,U.width,U.height,pt,Pt,U.data)):e.texImage2D(3553,0,It,U.width,U.height,0,pt,Pt,U.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$t&&re&&e.texStorage3D(35866,R,It,Xt[0].width,Xt[0].height,U.depth);for(let Y=0,it=Xt.length;Y<it;Y++)Dt=Xt[Y],v.format!==rn?pt!==null?$t?e.compressedTexSubImage3D(35866,Y,0,0,0,Dt.width,Dt.height,U.depth,pt,Dt.data,0,0):e.compressedTexImage3D(35866,Y,It,Dt.width,Dt.height,U.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(35866,Y,0,0,0,Dt.width,Dt.height,U.depth,pt,Pt,Dt.data):e.texImage3D(35866,Y,It,Dt.width,Dt.height,U.depth,0,pt,Pt,Dt.data)}else{$t&&re&&e.texStorage2D(3553,R,It,Xt[0].width,Xt[0].height);for(let Y=0,it=Xt.length;Y<it;Y++)Dt=Xt[Y],v.format!==rn?pt!==null?$t?e.compressedTexSubImage2D(3553,Y,0,0,Dt.width,Dt.height,pt,Dt.data):e.compressedTexImage2D(3553,Y,It,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(3553,Y,0,0,Dt.width,Dt.height,pt,Pt,Dt.data):e.texImage2D(3553,Y,It,Dt.width,Dt.height,0,pt,Pt,Dt.data)}else if(v.isDataArrayTexture)$t?(re&&e.texStorage3D(35866,R,It,U.width,U.height,U.depth),e.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,pt,Pt,U.data)):e.texImage3D(35866,0,It,U.width,U.height,U.depth,0,pt,Pt,U.data);else if(v.isData3DTexture)$t?(re&&e.texStorage3D(32879,R,It,U.width,U.height,U.depth),e.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,pt,Pt,U.data)):e.texImage3D(32879,0,It,U.width,U.height,U.depth,0,pt,Pt,U.data);else if(v.isFramebufferTexture){if(re)if($t)e.texStorage2D(3553,R,It,U.width,U.height);else{let Y=U.width,it=U.height;for(let yt=0;yt<R;yt++)e.texImage2D(3553,yt,It,Y,it,0,pt,Pt,null),Y>>=1,it>>=1}}else if(Xt.length>0&&bt){$t&&re&&e.texStorage2D(3553,R,It,Xt[0].width,Xt[0].height);for(let Y=0,it=Xt.length;Y<it;Y++)Dt=Xt[Y],$t?e.texSubImage2D(3553,Y,0,0,pt,Pt,Dt):e.texImage2D(3553,Y,It,pt,Pt,Dt);v.generateMipmaps=!1}else $t?(re&&e.texStorage2D(3553,R,It,U.width,U.height),e.texSubImage2D(3553,0,0,0,pt,Pt,U)):e.texImage2D(3553,0,It,pt,Pt,U);C(v,bt)&&F(ot),Rt.__version=gt.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function wt(M,v,W){if(v.image.length!==6)return;const ot=_t(M,v),at=v.source;e.bindTexture(34067,M.__webglTexture,33984+W);const gt=n.get(at);if(at.version!==gt.__version||ot===!0){e.activeTexture(33984+W),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,U=[];for(let Y=0;Y<6;Y++)!Rt&&!A?U[Y]=_(v.image[Y],!1,!0,l):U[Y]=A?v.image[Y].image:v.image[Y],U[Y]=Kt(v,U[Y]);const bt=U[0],pt=y(bt)||a,Pt=s.convert(v.format,v.encoding),It=s.convert(v.type),Dt=b(v.internalFormat,Pt,It,v.encoding),Xt=a&&v.isVideoTexture!==!0,$t=gt.__version===void 0||ot===!0;let re=T(v,bt,pt);St(34067,v,pt);let R;if(Rt){Xt&&$t&&e.texStorage2D(34067,re,Dt,bt.width,bt.height);for(let Y=0;Y<6;Y++){R=U[Y].mipmaps;for(let it=0;it<R.length;it++){const yt=R[it];v.format!==rn?Pt!==null?Xt?e.compressedTexSubImage2D(34069+Y,it,0,0,yt.width,yt.height,Pt,yt.data):e.compressedTexImage2D(34069+Y,it,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?e.texSubImage2D(34069+Y,it,0,0,yt.width,yt.height,Pt,It,yt.data):e.texImage2D(34069+Y,it,Dt,yt.width,yt.height,0,Pt,It,yt.data)}}}else{R=v.mipmaps,Xt&&$t&&(R.length>0&&re++,e.texStorage2D(34067,re,Dt,U[0].width,U[0].height));for(let Y=0;Y<6;Y++)if(A){Xt?e.texSubImage2D(34069+Y,0,0,0,U[Y].width,U[Y].height,Pt,It,U[Y].data):e.texImage2D(34069+Y,0,Dt,U[Y].width,U[Y].height,0,Pt,It,U[Y].data);for(let it=0;it<R.length;it++){const Lt=R[it].image[Y].image;Xt?e.texSubImage2D(34069+Y,it+1,0,0,Lt.width,Lt.height,Pt,It,Lt.data):e.texImage2D(34069+Y,it+1,Dt,Lt.width,Lt.height,0,Pt,It,Lt.data)}}else{Xt?e.texSubImage2D(34069+Y,0,0,0,Pt,It,U[Y]):e.texImage2D(34069+Y,0,Dt,Pt,It,U[Y]);for(let it=0;it<R.length;it++){const yt=R[it];Xt?e.texSubImage2D(34069+Y,it+1,0,0,Pt,It,yt.image[Y]):e.texImage2D(34069+Y,it+1,Dt,Pt,It,yt.image[Y])}}}C(v,pt)&&F(34067),gt.__version=at.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function At(M,v,W,ot,at){const gt=s.convert(W.format,W.encoding),Rt=s.convert(W.type),A=b(W.internalFormat,gt,Rt,W.encoding);n.get(v).__hasExternalTextures||(at===32879||at===35866?e.texImage3D(at,0,A,v.width,v.height,v.depth,0,gt,Rt,null):e.texImage2D(at,0,A,v.width,v.height,0,gt,Rt,null)),e.bindFramebuffer(36160,M),kt(v)?h.framebufferTexture2DMultisampleEXT(36160,ot,at,n.get(W).__webglTexture,0,Nt(v)):(at===3553||at>=34069&&at<=34074)&&r.framebufferTexture2D(36160,ot,at,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(M,v,W){if(r.bindRenderbuffer(36161,M),v.depthBuffer&&!v.stencilBuffer){let ot=33189;if(W||kt(v)){const at=v.depthTexture;at&&at.isDepthTexture&&(at.type===Wn?ot=36012:at.type===Hn&&(ot=33190));const gt=Nt(v);kt(v)?h.renderbufferStorageMultisampleEXT(36161,gt,ot,v.width,v.height):r.renderbufferStorageMultisample(36161,gt,ot,v.width,v.height)}else r.renderbufferStorage(36161,ot,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,M)}else if(v.depthBuffer&&v.stencilBuffer){const ot=Nt(v);W&&kt(v)===!1?r.renderbufferStorageMultisample(36161,ot,35056,v.width,v.height):kt(v)?h.renderbufferStorageMultisampleEXT(36161,ot,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,M)}else{const ot=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let at=0;at<ot.length;at++){const gt=ot[at],Rt=s.convert(gt.format,gt.encoding),A=s.convert(gt.type),U=b(gt.internalFormat,Rt,A,gt.encoding),bt=Nt(v);W&&kt(v)===!1?r.renderbufferStorageMultisample(36161,bt,U,v.width,v.height):kt(v)?h.renderbufferStorageMultisampleEXT(36161,bt,U,v.width,v.height):r.renderbufferStorage(36161,U,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function $(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et(v.depthTexture,0);const ot=n.get(v.depthTexture).__webglTexture,at=Nt(v);if(v.depthTexture.format===qn)kt(v)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ot,0,at):r.framebufferTexture2D(36160,36096,3553,ot,0);else if(v.depthTexture.format===Ai)kt(v)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ot,0,at):r.framebufferTexture2D(36160,33306,3553,ot,0);else throw new Error("Unknown depthTexture format")}function Q(M){const v=n.get(M),W=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$(v.__webglFramebuffer,M)}else if(W){v.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(36160,v.__webglFramebuffer[ot]),v.__webglDepthbuffer[ot]=r.createRenderbuffer(),zt(v.__webglDepthbuffer[ot],M,!1)}else e.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),zt(v.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function ct(M,v,W){const ot=n.get(M);v!==void 0&&At(ot.__webglFramebuffer,M,M.texture,36064,3553),W!==void 0&&Q(M)}function Ct(M){const v=M.texture,W=n.get(M),ot=n.get(v);M.addEventListener("dispose",tt),M.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=v.version,o.memory.textures++);const at=M.isWebGLCubeRenderTarget===!0,gt=M.isWebGLMultipleRenderTargets===!0,Rt=y(M)||a;if(at){W.__webglFramebuffer=[];for(let A=0;A<6;A++)W.__webglFramebuffer[A]=r.createFramebuffer()}else{if(W.__webglFramebuffer=r.createFramebuffer(),gt)if(i.drawBuffers){const A=M.texture;for(let U=0,bt=A.length;U<bt;U++){const pt=n.get(A[U]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&kt(M)===!1){const A=gt?v:[v];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let U=0;U<A.length;U++){const bt=A[U];W.__webglColorRenderbuffer[U]=r.createRenderbuffer(),r.bindRenderbuffer(36161,W.__webglColorRenderbuffer[U]);const pt=s.convert(bt.format,bt.encoding),Pt=s.convert(bt.type),It=b(bt.internalFormat,pt,Pt,bt.encoding,M.isXRRenderTarget===!0),Dt=Nt(M);r.renderbufferStorageMultisample(36161,Dt,It,M.width,M.height),r.framebufferRenderbuffer(36160,36064+U,36161,W.__webglColorRenderbuffer[U])}r.bindRenderbuffer(36161,null),M.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),zt(W.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}}if(at){e.bindTexture(34067,ot.__webglTexture),St(34067,v,Rt);for(let A=0;A<6;A++)At(W.__webglFramebuffer[A],M,v,36064,34069+A);C(v,Rt)&&F(34067),e.unbindTexture()}else if(gt){const A=M.texture;for(let U=0,bt=A.length;U<bt;U++){const pt=A[U],Pt=n.get(pt);e.bindTexture(3553,Pt.__webglTexture),St(3553,pt,Rt),At(W.__webglFramebuffer,M,pt,36064+U,3553),C(pt,Rt)&&F(3553)}e.unbindTexture()}else{let A=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?A=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(A,ot.__webglTexture),St(A,v,Rt),At(W.__webglFramebuffer,M,v,36064,A),C(v,Rt)&&F(A),e.unbindTexture()}M.depthBuffer&&Q(M)}function dt(M){const v=y(M)||a,W=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ot=0,at=W.length;ot<at;ot++){const gt=W[ot];if(C(gt,v)){const Rt=M.isWebGLCubeRenderTarget?34067:3553,A=n.get(gt).__webglTexture;e.bindTexture(Rt,A),F(Rt),e.unbindTexture()}}}function Ut(M){if(a&&M.samples>0&&kt(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],W=M.width,ot=M.height;let at=16384;const gt=[],Rt=M.stencilBuffer?33306:36096,A=n.get(M),U=M.isWebGLMultipleRenderTargets===!0;if(U)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+bt,36161,null),e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+bt,3553,null,0);e.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,A.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){gt.push(36064+bt),M.depthBuffer&&gt.push(Rt);const pt=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(pt===!1&&(M.depthBuffer&&(at|=256),M.stencilBuffer&&(at|=1024)),U&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[bt]),pt===!0&&(r.invalidateFramebuffer(36008,[Rt]),r.invalidateFramebuffer(36009,[Rt])),U){const Pt=n.get(v[bt]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Pt,0)}r.blitFramebuffer(0,0,W,ot,0,0,W,ot,at,9728),m&&r.invalidateFramebuffer(36008,gt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),U)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+bt,36161,A.__webglColorRenderbuffer[bt]);const pt=n.get(v[bt]).__webglTexture;e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+bt,3553,pt,0)}e.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Nt(M){return Math.min(f,M.samples)}function kt(M){const v=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(M){const v=o.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function Kt(M,v){const W=M.encoding,ot=M.format,at=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ts||W!==Jn&&(W===ae?a===!1?t.has("EXT_sRGB")===!0&&ot===rn?(M.format=Ts,M.minFilter=$e,M.generateMipmaps=!1):v=Ma.sRGBToLinear(v):(ot!==rn||at!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),v}this.allocateTextureUnit=K,this.resetTextureUnits=rt,this.setTexture2D=et,this.setTexture2DArray=Et,this.setTexture3D=H,this.setTextureCube=nt,this.rebindTextures=ct,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=At,this.useMultisampledRTT=kt}function Qd(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===Zn)return 5121;if(s===Fl)return 32819;if(s===Ol)return 32820;if(s===Dl)return 5120;if(s===Il)return 5122;if(s===ba)return 5123;if(s===Nl)return 5124;if(s===Hn)return 5125;if(s===Wn)return 5126;if(s===Yi)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zl)return 6406;if(s===rn)return 6408;if(s===Ul)return 6409;if(s===kl)return 6410;if(s===qn)return 6402;if(s===Ai)return 34041;if(s===Ts)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Bl)return 6403;if(s===Gl)return 36244;if(s===Vl)return 33319;if(s===Hl)return 33320;if(s===Wl)return 36249;if(s===Br||s===Gr||s===Vr||s===Hr)if(o===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Br)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Br)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ks||s===$s||s===js||s===Qs)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ks)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$s)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===js)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ql)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===to||s===eo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===to)return o===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===eo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===no||s===io||s===ro||s===so||s===oo||s===ao||s===lo||s===co||s===uo||s===ho||s===fo||s===po||s===mo||s===go)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===no)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===io)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ro)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===so)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ao)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===co)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ho)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===po)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mo)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===go)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Wr)return o===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xl||s===_o||s===xo||s===vo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_o)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Si?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class tp extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vr extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ep={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n),x=this._getHandJoint(l,p);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class np extends We{constructor(t,e,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:qn,u!==qn&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qn&&(n=Hn),n===void 0&&u===Ai&&(n=Si),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1}}class ip extends ti{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,g=null;const p=e.getContextAttributes();let d=null,x=null;const E=[],_=[],y=new Set,w=new Map,C=new je;C.layers.enable(1),C.viewport=new we;const F=new je;F.layers.enable(2),F.viewport=new we;const b=[C,F],T=new tp;T.layers.enable(1),T.layers.enable(2);let O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let nt=E[H];return nt===void 0&&(nt=new gs,E[H]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(H){let nt=E[H];return nt===void 0&&(nt=new gs,E[H]=nt),nt.getGripSpace()},this.getHand=function(H){let nt=E[H];return nt===void 0&&(nt=new gs,E[H]=nt),nt.getHandSpace()};function tt(H){const nt=_.indexOf(H.inputSource);if(nt===-1)return;const ht=E[nt];ht!==void 0&&ht.dispatchEvent({type:H.type,data:H.inputSource})}function V(){i.removeEventListener("select",tt),i.removeEventListener("selectstart",tt),i.removeEventListener("selectend",tt),i.removeEventListener("squeeze",tt),i.removeEventListener("squeezestart",tt),i.removeEventListener("squeezeend",tt),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",z);for(let H=0;H<E.length;H++){const nt=_[H];nt!==null&&(_[H]=null,E[H].disconnect(nt))}O=null,J=null,t.setRenderTarget(d),m=null,h=null,f=null,i=null,x=null,Et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",tt),i.addEventListener("selectstart",tt),i.addEventListener("selectend",tt),i.addEventListener("squeeze",tt),i.addEventListener("squeezestart",tt),i.addEventListener("squeezeend",tt),i.addEventListener("end",V),i.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:m}),x=new $n(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Zn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let nt=null,ht=null,B=null;p.depth&&(B=p.stencil?35056:33190,nt=p.stencil?Ai:qn,ht=p.stencil?Si:Hn);const St={colorFormat:32856,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(St),i.updateRenderState({layers:[h]}),x=new $n(h.textureWidth,h.textureHeight,{format:rn,type:Zn,depthTexture:new np(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const _t=t.properties.get(x);_t.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(H){for(let nt=0;nt<H.removed.length;nt++){const ht=H.removed[nt],B=_.indexOf(ht);B>=0&&(_[B]=null,E[B].disconnect(ht))}for(let nt=0;nt<H.added.length;nt++){const ht=H.added[nt];let B=_.indexOf(ht);if(B===-1){for(let _t=0;_t<E.length;_t++)if(_t>=_.length){_.push(ht),B=_t;break}else if(_[_t]===null){_[_t]=ht,B=_t;break}if(B===-1)break}const St=E[B];St&&St.connect(ht)}}const X=new N,j=new N;function rt(H,nt,ht){X.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(ht.matrixWorld);const B=X.distanceTo(j),St=nt.projectionMatrix.elements,_t=ht.projectionMatrix.elements,Mt=St[14]/(St[10]-1),wt=St[14]/(St[10]+1),At=(St[9]+1)/St[5],zt=(St[9]-1)/St[5],$=(St[8]-1)/St[0],Q=(_t[8]+1)/_t[0],ct=Mt*$,Ct=Mt*Q,dt=B/(-$+Q),Ut=dt*-$;nt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ut),H.translateZ(dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Nt=Mt+dt,kt=wt+dt,ie=ct-Ut,Kt=Ct+(B-Ut),M=At*wt/kt*Nt,v=zt*wt/kt*Nt;H.projectionMatrix.makePerspective(ie,Kt,M,v,Nt,kt)}function K(H,nt){nt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(nt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;T.near=F.near=C.near=H.near,T.far=F.far=C.far=H.far,(O!==T.near||J!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,J=T.far);const nt=H.parent,ht=T.cameras;K(T,nt);for(let St=0;St<ht.length;St++)K(ht[St],nt);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),H.matrix.copy(T.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const B=H.children;for(let St=0,_t=B.length;St<_t;St++)B[St].updateMatrixWorld(!0);ht.length===2?rt(T,C,F):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(H){c=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.getPlanes=function(){return y};let st=null;function et(H,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let B=!1;ht.length!==T.cameras.length&&(T.cameras.length=0,B=!0);for(let St=0;St<ht.length;St++){const _t=ht[St];let Mt=null;if(m!==null)Mt=m.getViewport(_t);else{const At=f.getViewSubImage(h,_t);Mt=At.viewport,St===0&&(t.setRenderTargetTextures(x,At.colorTexture,h.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(x))}let wt=b[St];wt===void 0&&(wt=new je,wt.layers.enable(St),wt.viewport=new we,b[St]=wt),wt.matrix.fromArray(_t.transform.matrix),wt.projectionMatrix.fromArray(_t.projectionMatrix),wt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),St===0&&T.matrix.copy(wt.matrix),B===!0&&T.cameras.push(wt)}}for(let ht=0;ht<E.length;ht++){const B=_[ht],St=E[ht];B!==null&&St!==void 0&&St.update(B,nt,l||o)}if(st&&st(H,nt),nt.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:nt.detectedPlanes});let ht=null;for(const B of y)nt.detectedPlanes.has(B)||(ht===null&&(ht=[]),ht.push(B));if(ht!==null)for(const B of ht)y.delete(B),w.delete(B),n.dispatchEvent({type:"planeremoved",data:B});for(const B of nt.detectedPlanes)if(!y.has(B))y.add(B),w.set(B,nt.lastChangedTime),n.dispatchEvent({type:"planeadded",data:B});else{const St=w.get(B);B.lastChangedTime>St&&(w.set(B,B.lastChangedTime),n.dispatchEvent({type:"planechanged",data:B}))}}g=null}const Et=new Na;Et.setAnimationLoop(et),this.setAnimationLoop=function(H){st=H},this.dispose=function(){}}}function rp(r,t){function e(p,d){d.color.getRGB(p.fogColor.value,Pa(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,x,E,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,_)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,x,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===He&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===He&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,x,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=E*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===He&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function sp(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function c(E,_){const y=_.program;n.uniformBlockBinding(E,y)}function l(E,_){let y=i[E.id];y===void 0&&(g(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",d));const w=_.program;n.updateUBOMapping(E,w);const C=t.render.frame;s[E.id]!==C&&(h(E),s[E.id]=C)}function u(E){const _=f();E.__bindingPointIndex=_;const y=r.createBuffer(),w=E.__size,C=E.usage;return r.bindBuffer(35345,y),r.bufferData(35345,w,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,y),y}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const _=i[E.id],y=E.uniforms,w=E.__cache;r.bindBuffer(35345,_);for(let C=0,F=y.length;C<F;C++){const b=y[C];if(m(b,C,w)===!0){const T=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let J=0;for(let tt=0;tt<O.length;tt++){const V=O[tt],z=p(V);typeof V=="number"?(b.__data[0]=V,r.bufferSubData(35345,T+J,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=V.elements[0],b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=V.elements[0],b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=V.elements[0]):(V.toArray(b.__data,J),J+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,b.__data)}}r.bindBuffer(35345,null)}function m(E,_,y){const w=E.value;if(y[_]===void 0){if(typeof w=="number")y[_]=w;else{const C=Array.isArray(w)?w:[w],F=[];for(let b=0;b<C.length;b++)F.push(C[b].clone());y[_]=F}return!0}else if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const C=Array.isArray(y[_])?y[_]:[y[_]],F=Array.isArray(w)?w:[w];for(let b=0;b<C.length;b++){const T=C[b];if(T.equals(F[b])===!1)return T.copy(F[b]),!0}}return!1}function g(E){const _=E.uniforms;let y=0;const w=16;let C=0;for(let F=0,b=_.length;F<b;F++){const T=_[F],O={boundary:0,storage:0},J=Array.isArray(T.value)?T.value:[T.value];for(let tt=0,V=J.length;tt<V;tt++){const z=J[tt],X=p(z);O.boundary+=X.boundary,O.storage+=X.storage}if(T.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,F>0){C=y%w;const tt=w-C;C!==0&&tt-O.boundary<0&&(y+=w-C,T.__offset=y)}y+=O.storage}return C=y%w,C>0&&(y+=w-C),E.__size=y,E.__cache={},this}function p(E){const _={boundary:0,storage:0};return typeof E=="number"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function d(E){const _=E.target;_.removeEventListener("dispose",d);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function x(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:c,update:l,dispose:x}}function op(){const r=Ar("canvas");return r.style.display="block",r}function Fs(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:op(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jn,this.useLegacyLights=!0,this.toneMapping=yn,this.toneMappingExposure=1;const p=this;let d=!1,x=0,E=0,_=null,y=-1,w=null;const C=new we,F=new we;let b=null,T=t.width,O=t.height,J=1,tt=null,V=null;const z=new we(0,0,T,O),X=new we(0,0,T,O);let j=!1;const rt=new Ia;let K=!1,st=!1,et=null;const Et=new Me,H=new N,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return _===null?J:1}let B=e;function St(S,G){for(let q=0;q<S.length;q++){const k=S[q],Z=t.getContext(k,G);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ds}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),B===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),B=St(G,S),B===null)throw St(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,Mt,wt,At,zt,$,Q,ct,Ct,dt,Ut,Nt,kt,ie,Kt,M,v,W,ot,at,gt,Rt,A,U;function bt(){_t=new _f(B),Mt=new uf(B,_t,r),_t.init(Mt),Rt=new Qd(B,_t,Mt),wt=new $d(B,_t,Mt),At=new bf,zt=new zd,$=new jd(B,_t,wt,zt,Mt,Rt,At),Q=new ff(p),ct=new gf(p),Ct=new Ac(B,Mt),A=new lf(B,_t,Ct,Mt),dt=new xf(B,Ct,At,A),Ut=new wf(B,dt,Ct,At),ot=new Mf(B,Mt,$),M=new hf(zt),Nt=new Od(p,Q,ct,_t,Mt,A,M),kt=new rp(p,zt),ie=new kd,Kt=new qd(_t,Mt),W=new af(p,Q,ct,wt,Ut,u,o),v=new Kd(p,Ut,Mt),U=new sp(B,At,Mt,wt),at=new cf(B,_t,At,Mt),gt=new vf(B,_t,At,Mt),At.programs=Nt.programs,p.capabilities=Mt,p.extensions=_t,p.properties=zt,p.renderLists=ie,p.shadowMap=v,p.state=wt,p.info=At}bt();const pt=new ip(p,B);this.xr=pt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(T,O,!1))},this.getSize=function(S){return S.set(T,O)},this.setSize=function(S,G,q=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,O=G,t.width=Math.floor(S*J),t.height=Math.floor(G*J),q===!0&&(t.style.width=S+"px",t.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(T*J,O*J).floor()},this.setDrawingBufferSize=function(S,G,q){T=S,O=G,J=q,t.width=Math.floor(S*q),t.height=Math.floor(G*q),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(z)},this.setViewport=function(S,G,q,k){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,G,q,k),wt.viewport(C.copy(z).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(X)},this.setScissor=function(S,G,q,k){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,G,q,k),wt.scissor(F.copy(X).multiplyScalar(J).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(S){wt.setScissorTest(j=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){V=S},this.getClearColor=function(S){return S.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(S=!0,G=!0,q=!0){let k=0;S&&(k|=16384),G&&(k|=256),q&&(k|=1024),B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),ie.dispose(),Kt.dispose(),zt.dispose(),Q.dispose(),ct.dispose(),Ut.dispose(),A.dispose(),U.dispose(),Nt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",it),pt.removeEventListener("sessionend",yt),et&&(et.dispose(),et=null),Lt.stop()};function Pt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const S=At.autoReset,G=v.enabled,q=v.autoUpdate,k=v.needsUpdate,Z=v.type;bt(),At.autoReset=S,v.enabled=G,v.autoUpdate=q,v.needsUpdate=k,v.type=Z}function Dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xt(S){const G=S.target;G.removeEventListener("dispose",Xt),$t(G)}function $t(S){re(S),zt.remove(S)}function re(S){const G=zt.get(S).programs;G!==void 0&&(G.forEach(function(q){Nt.releaseProgram(q)}),S.isShaderMaterial&&Nt.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,q,k,Z,Ot){G===null&&(G=nt);const Gt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ht=ja(S,G,q,k,Z);wt.setMaterial(k,Gt);let Wt=q.index,jt=1;k.wireframe===!0&&(Wt=dt.getWireframeAttribute(q),jt=2);const Yt=q.drawRange,Zt=q.attributes.position;let de=Yt.start*jt,ze=(Yt.start+Yt.count)*jt;Ot!==null&&(de=Math.max(de,Ot.start*jt),ze=Math.min(ze,(Ot.start+Ot.count)*jt)),Wt!==null?(de=Math.max(de,0),ze=Math.min(ze,Wt.count)):Zt!=null&&(de=Math.max(de,0),ze=Math.min(ze,Zt.count));const dn=ze-de;if(dn<0||dn===1/0)return;A.setup(Z,k,Ht,q,Wt);let Dn,pe=at;if(Wt!==null&&(Dn=Ct.get(Wt),pe=gt,pe.setIndex(Dn)),Z.isMesh)k.wireframe===!0?(wt.setLineWidth(k.wireframeLinewidth*ht()),pe.setMode(1)):pe.setMode(4);else if(Z.isLine){let Jt=k.linewidth;Jt===void 0&&(Jt=1),wt.setLineWidth(Jt*ht()),Z.isLineSegments?pe.setMode(1):Z.isLineLoop?pe.setMode(2):pe.setMode(3)}else Z.isPoints?pe.setMode(0):Z.isSprite&&pe.setMode(4);if(Z.isInstancedMesh)pe.renderInstances(de,dn,Z.count);else if(q.isInstancedBufferGeometry){const Jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Fr=Math.min(q.instanceCount,Jt);pe.renderInstances(de,dn,Fr)}else pe.render(de,dn)},this.compile=function(S,G){function q(k,Z,Ot){k.transparent===!0&&k.side===An&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,Xe(k,Z,Ot),k.side=Pn,k.needsUpdate=!0,Xe(k,Z,Ot),k.side=An):Xe(k,Z,Ot)}h=Kt.get(S),h.init(),g.push(h),S.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(p.useLegacyLights),S.traverse(function(k){const Z=k.material;if(Z)if(Array.isArray(Z))for(let Ot=0;Ot<Z.length;Ot++){const Gt=Z[Ot];q(Gt,S,k)}else q(Z,S,k)}),g.pop(),h=null};let R=null;function Y(S){R&&R(S)}function it(){Lt.stop()}function yt(){Lt.start()}const Lt=new Na;Lt.setAnimationLoop(Y),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(S){R=S,pt.setAnimationLoop(S),S===null?Lt.stop():Lt.start()},pt.addEventListener("sessionstart",it),pt.addEventListener("sessionend",yt),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(G),G=pt.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,G,_),h=Kt.get(S,g.length),h.init(),g.push(h),Et.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),rt.setFromProjectionMatrix(Et),st=this.localClippingEnabled,K=M.init(this.clippingPlanes,st),f=ie.get(S,m.length),f.init(),m.push(f),oe(S,G,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(tt,V),K===!0&&M.beginShadows();const q=h.state.shadowsArray;if(v.render(q,S,G),K===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(f,S),h.setupLights(p.useLegacyLights),G.isArrayCamera){const k=G.cameras;for(let Z=0,Ot=k.length;Z<Ot;Z++){const Gt=k[Z];be(f,S,Gt,Gt.viewport)}}else be(f,S,G);_!==null&&($.updateMultisampleRenderTarget(_),$.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(p,S,G),A.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function oe(S,G,q,k){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||rt.intersectsSprite(S)){k&&H.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Et);const Gt=Ut.update(S),Ht=S.material;Ht.visible&&f.push(S,Gt,Ht,q,H.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==At.render.frame&&(S.skeleton.update(),S.skeleton.frame=At.render.frame),!S.frustumCulled||rt.intersectsObject(S))){k&&H.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Et);const Gt=Ut.update(S),Ht=S.material;if(Array.isArray(Ht)){const Wt=Gt.groups;for(let jt=0,Yt=Wt.length;jt<Yt;jt++){const Zt=Wt[jt],de=Ht[Zt.materialIndex];de&&de.visible&&f.push(S,Gt,de,q,H.z,Zt)}}else Ht.visible&&f.push(S,Gt,Ht,q,H.z,null)}}const Ot=S.children;for(let Gt=0,Ht=Ot.length;Gt<Ht;Gt++)oe(Ot[Gt],G,q,k)}function be(S,G,q,k){const Z=S.opaque,Ot=S.transmissive,Gt=S.transparent;h.setupLightsView(q),K===!0&&M.setGlobalState(p.clippingPlanes,q),Ot.length>0&&Le(Z,G,q),k&&wt.viewport(C.copy(k)),Z.length>0&&sn(Z,G,q),Ot.length>0&&sn(Ot,G,q),Gt.length>0&&sn(Gt,G,q),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Le(S,G,q){const k=Mt.isWebGL2;et===null&&(et=new $n(1024,1024,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Yi:Zn,minFilter:Xi,samples:k&&s===!0?4:0}));const Z=p.getRenderTarget();p.setRenderTarget(et),p.clear();const Ot=p.toneMapping;p.toneMapping=yn,sn(S,G,q),p.toneMapping=Ot,$.updateMultisampleRenderTarget(et),$.updateRenderTargetMipmap(et),p.setRenderTarget(Z)}function sn(S,G,q){const k=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Ot=S.length;Z<Ot;Z++){const Gt=S[Z],Ht=Gt.object,Wt=Gt.geometry,jt=k===null?Gt.material:k,Yt=Gt.group;Ht.layers.test(q.layers)&&ue(Ht,G,q,Wt,jt,Yt)}}function ue(S,G,q,k,Z,Ot){S.onBeforeRender(p,G,q,k,Z,Ot),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(p,G,q,k,S,Ot),Z.transparent===!0&&Z.side===An&&Z.forceSinglePass===!1?(Z.side=He,Z.needsUpdate=!0,p.renderBufferDirect(q,G,k,Z,S,Ot),Z.side=Pn,Z.needsUpdate=!0,p.renderBufferDirect(q,G,k,Z,S,Ot),Z.side=An):p.renderBufferDirect(q,G,k,Z,S,Ot),S.onAfterRender(p,G,q,k,Z,Ot)}function Xe(S,G,q){G.isScene!==!0&&(G=nt);const k=zt.get(S),Z=h.state.lights,Ot=h.state.shadowsArray,Gt=Z.state.version,Ht=Nt.getParameters(S,Z.state,Ot,G,q),Wt=Nt.getProgramCacheKey(Ht);let jt=k.programs;k.environment=S.isMeshStandardMaterial?G.environment:null,k.fog=G.fog,k.envMap=(S.isMeshStandardMaterial?ct:Q).get(S.envMap||k.environment),jt===void 0&&(S.addEventListener("dispose",Xt),jt=new Map,k.programs=jt);let Yt=jt.get(Wt);if(Yt!==void 0){if(k.currentProgram===Yt&&k.lightsStateVersion===Gt)return on(S,Ht),Yt}else Ht.uniforms=Nt.getUniforms(S),S.onBuild(q,Ht,p),S.onBeforeCompile(Ht,p),Yt=Nt.acquireProgram(Ht,Wt),jt.set(Wt,Yt),k.uniforms=Ht.uniforms;const Zt=k.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Zt.clippingPlanes=M.uniform),on(S,Ht),k.needsLights=tl(S),k.lightsStateVersion=Gt,k.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const de=Yt.getUniforms(),ze=Er.seqWithValue(de.seq,Zt);return k.currentProgram=Yt,k.uniformsList=ze,Yt}function on(S,G){const q=zt.get(S);q.outputEncoding=G.outputEncoding,q.instancing=G.instancing,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function ja(S,G,q,k,Z){G.isScene!==!0&&(G=nt),$.resetTextureUnits();const Ot=G.fog,Gt=k.isMeshStandardMaterial?G.environment:null,Ht=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Jn,Wt=(k.isMeshStandardMaterial?ct:Q).get(k.envMap||Gt),jt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Yt=!!k.normalMap&&!!q.attributes.tangent,Zt=!!q.morphAttributes.position,de=!!q.morphAttributes.normal,ze=!!q.morphAttributes.color,dn=k.toneMapped?p.toneMapping:yn,Dn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=Dn!==void 0?Dn.length:0,Jt=zt.get(k),Fr=h.state.lights;if(K===!0&&(st===!0||S!==w)){const Ue=S===w&&k.id===y;M.setState(k,S,Ue)}let ye=!1;k.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Fr.state.version||Jt.outputEncoding!==Ht||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Jt.envMap!==Wt||k.fog===!0&&Jt.fog!==Ot||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==M.numPlanes||Jt.numIntersection!==M.numIntersection)||Jt.vertexAlphas!==jt||Jt.vertexTangents!==Yt||Jt.morphTargets!==Zt||Jt.morphNormals!==de||Jt.morphColors!==ze||Jt.toneMapping!==dn||Mt.isWebGL2===!0&&Jt.morphTargetsCount!==pe)&&(ye=!0):(ye=!0,Jt.__version=k.version);let In=Jt.currentProgram;ye===!0&&(In=Xe(k,G,Z));let Gs=!1,Ri=!1,Or=!1;const Pe=In.getUniforms(),Nn=Jt.uniforms;if(wt.useProgram(In.program)&&(Gs=!0,Ri=!0,Or=!0),k.id!==y&&(y=k.id,Ri=!0),Gs||w!==S){if(Pe.setValue(B,"projectionMatrix",S.projectionMatrix),Mt.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Ri=!0,Or=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Ue=Pe.map.cameraPosition;Ue!==void 0&&Ue.setValue(B,H.setFromMatrixPosition(S.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Z.isSkinnedMesh)&&Pe.setValue(B,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){Pe.setOptional(B,Z,"bindMatrix"),Pe.setOptional(B,Z,"bindMatrixInverse");const Ue=Z.skeleton;Ue&&(Mt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(B,"boneTexture",Ue.boneTexture,$),Pe.setValue(B,"boneTextureSize",Ue.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zr=q.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&Mt.isWebGL2===!0)&&ot.update(Z,q,In),(Ri||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,Pe.setValue(B,"receiveShadow",Z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Nn.envMap.value=Wt,Nn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),Ri&&(Pe.setValue(B,"toneMappingExposure",p.toneMappingExposure),Jt.needsLights&&Qa(Nn,Or),Ot&&k.fog===!0&&kt.refreshFogUniforms(Nn,Ot),kt.refreshMaterialUniforms(Nn,k,J,O,et),Er.upload(B,Jt.uniformsList,Nn,$)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Er.upload(B,Jt.uniformsList,Nn,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Pe.setValue(B,"center",Z.center),Pe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(B,"normalMatrix",Z.normalMatrix),Pe.setValue(B,"modelMatrix",Z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ue=k.uniformsGroups;for(let Ur=0,el=Ue.length;Ur<el;Ur++)if(Mt.isWebGL2){const Vs=Ue[Ur];U.update(Vs,In),U.bind(Vs,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function Qa(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function tl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,G,q){zt.get(S.texture).__webglTexture=G,zt.get(S.depthTexture).__webglTexture=q;const k=zt.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=q===void 0,k.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){const q=zt.get(S);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,q=0){_=S,x=G,E=q;let k=!0,Z=null,Ot=!1,Gt=!1;if(S){const Wt=zt.get(S);Wt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(36160,null),k=!1):Wt.__webglFramebuffer===void 0?$.setupRenderTarget(S):Wt.__hasExternalTextures&&$.rebindTextures(S,zt.get(S.texture).__webglTexture,zt.get(S.depthTexture).__webglTexture);const jt=S.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Gt=!0);const Yt=zt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Yt[G],Ot=!0):Mt.isWebGL2&&S.samples>0&&$.useMultisampledRTT(S)===!1?Z=zt.get(S).__webglMultisampledFramebuffer:Z=Yt,C.copy(S.viewport),F.copy(S.scissor),b=S.scissorTest}else C.copy(z).multiplyScalar(J).floor(),F.copy(X).multiplyScalar(J).floor(),b=j;if(wt.bindFramebuffer(36160,Z)&&Mt.drawBuffers&&k&&wt.drawBuffers(S,Z),wt.viewport(C),wt.scissor(F),wt.setScissorTest(b),Ot){const Wt=zt.get(S.texture);B.framebufferTexture2D(36160,36064,34069+G,Wt.__webglTexture,q)}else if(Gt){const Wt=zt.get(S.texture),jt=G||0;B.framebufferTextureLayer(36160,36064,Wt.__webglTexture,q||0,jt)}y=-1},this.readRenderTargetPixels=function(S,G,q,k,Z,Ot,Gt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=zt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ht=Ht[Gt]),Ht){wt.bindFramebuffer(36160,Ht);try{const Wt=S.texture,jt=Wt.format,Yt=Wt.type;if(jt!==rn&&Rt.convert(jt)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zt=Yt===Yi&&(_t.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Yt!==Zn&&Rt.convert(Yt)!==B.getParameter(35738)&&!(Yt===Wn&&(Mt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-k&&q>=0&&q<=S.height-Z&&B.readPixels(G,q,k,Z,Rt.convert(jt),Rt.convert(Yt),Ot)}finally{const Wt=_!==null?zt.get(_).__webglFramebuffer:null;wt.bindFramebuffer(36160,Wt)}}},this.copyFramebufferToTexture=function(S,G,q=0){const k=Math.pow(2,-q),Z=Math.floor(G.image.width*k),Ot=Math.floor(G.image.height*k);$.setTexture2D(G,0),B.copyTexSubImage2D(3553,q,0,0,S.x,S.y,Z,Ot),wt.unbindTexture()},this.copyTextureToTexture=function(S,G,q,k=0){const Z=G.image.width,Ot=G.image.height,Gt=Rt.convert(q.format),Ht=Rt.convert(q.type);$.setTexture2D(q,0),B.pixelStorei(37440,q.flipY),B.pixelStorei(37441,q.premultiplyAlpha),B.pixelStorei(3317,q.unpackAlignment),G.isDataTexture?B.texSubImage2D(3553,k,S.x,S.y,Z,Ot,Gt,Ht,G.image.data):G.isCompressedTexture?B.compressedTexSubImage2D(3553,k,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,Gt,G.mipmaps[0].data):B.texSubImage2D(3553,k,S.x,S.y,Gt,Ht,G.image),k===0&&q.generateMipmaps&&B.generateMipmap(3553),wt.unbindTexture()},this.copyTextureToTexture3D=function(S,G,q,k,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ot=S.max.x-S.min.x+1,Gt=S.max.y-S.min.y+1,Ht=S.max.z-S.min.z+1,Wt=Rt.convert(k.format),jt=Rt.convert(k.type);let Yt;if(k.isData3DTexture)$.setTexture3D(k,0),Yt=32879;else if(k.isDataArrayTexture)$.setTexture2DArray(k,0),Yt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,k.flipY),B.pixelStorei(37441,k.premultiplyAlpha),B.pixelStorei(3317,k.unpackAlignment);const Zt=B.getParameter(3314),de=B.getParameter(32878),ze=B.getParameter(3316),dn=B.getParameter(3315),Dn=B.getParameter(32877),pe=q.isCompressedTexture?q.mipmaps[0]:q.image;B.pixelStorei(3314,pe.width),B.pixelStorei(32878,pe.height),B.pixelStorei(3316,S.min.x),B.pixelStorei(3315,S.min.y),B.pixelStorei(32877,S.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(Yt,Z,G.x,G.y,G.z,Ot,Gt,Ht,Wt,jt,pe.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Yt,Z,G.x,G.y,G.z,Ot,Gt,Ht,Wt,pe.data)):B.texSubImage3D(Yt,Z,G.x,G.y,G.z,Ot,Gt,Ht,Wt,jt,pe),B.pixelStorei(3314,Zt),B.pixelStorei(32878,de),B.pixelStorei(3316,ze),B.pixelStorei(3315,dn),B.pixelStorei(32877,Dn),Z===0&&k.generateMipmaps&&B.generateMipmap(Yt),wt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),wt.unbindTexture()},this.resetState=function(){x=0,E=0,_=null,wt.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Fs.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class ap extends Fs{}ap.prototype.isWebGL1Renderer=!0;class lp extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,m=(o-u)/h;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new mt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],s=[],o=[],a=new N,c=new Me;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(Ce(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Os extends fn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new mt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,m=l-this.aY;c=h*u-m*f+this.aX,l=h*f+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cp extends Os{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zs(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,m*=u,i(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const br=new N,_s=new zs,xs=new zs,vs=new zs;class up extends fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(br.subVectors(i[0],i[1]).add(i[0]),l=br);const f=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(br.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=br),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),_s.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,p,d),xs.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,p,d),vs.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,p,d)}else this.curveType==="catmullrom"&&(_s.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),xs.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),vs.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(_s.calc(c),xs.calc(c),vs.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ia(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function hp(r,t){const e=1-r;return e*e*t}function fp(r,t){return 2*(1-r)*r*t}function dp(r,t){return r*r*t}function Wi(r,t,e,n){return hp(r,t)+fp(r,e)+dp(r,n)}function pp(r,t){const e=1-r;return e*e*e*t}function mp(r,t){const e=1-r;return 3*e*e*r*t}function gp(r,t){return 3*(1-r)*r*r*t}function _p(r,t){return r*r*r*t}function qi(r,t,e,n,i){return pp(r,t)+mp(r,e)+gp(r,n)+_p(r,i)}class ka extends fn{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(qi(t,i.x,s.x,o.x,a.x),qi(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xp extends fn{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(qi(t,i.x,s.x,o.x,a.x),qi(t,i.y,s.y,o.y,a.y),qi(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Us extends fn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vp extends fn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ba extends fn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Wi(t,i.x,s.x,o.x),Wi(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends fn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Wi(t,i.x,s.x,o.x),Wi(t,i.y,s.y,o.y),Wi(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ga extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(ia(a,c.x,l.x,u.x,f.x),ia(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:cp,CatmullRomCurve3:up,CubicBezierCurve:ka,CubicBezierCurve3:xp,EllipseCurve:Os,LineCurve:Us,LineCurve3:vp,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:bp,SplineCurve:Ga});class yp extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Us(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Va[i.type]().fromJSON(i))}return this}}class Cs extends yp{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Us(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Ba(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new ka(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new Os(t,e,n,i,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Tr extends Cs{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Cs().fromJSON(i))}return this}}const Sp={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Ha(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,f,h,m;if(n&&(s=Ap(r,t,s,e)),r.length>80*e){a=l=r[0],c=u=r[1];for(let g=e;g<i;g+=e)f=r[g],h=r[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return Ji(s,o,e,a,c,m,0),o}};function Ha(r,t,e,n,i){let s,o;if(i===Up(r,t,e,n)>0)for(s=t;s<e;s+=n)o=ra(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=ra(s,r[s],r[s+1],o);return o&&Nr(o,o.next)&&($i(o),o=o.next),o}function Qn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Nr(e,e.next)||ce(e.prev,e,e.next)===0)){if($i(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ji(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Dp(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?wp(r,n,i,s):Mp(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),$i(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Ep(Qn(r),t,e),Ji(r,t,e,n,i,s,2)):o===2&&Tp(r,t,e,n,i,s):Ji(Qn(r),t,e,n,i,s,1);break}}}function Mp(r){const t=r.prev,e=r,n=r.next;if(ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,f=a<c?a<l?a:l:c<l?c:l,h=i>s?i>o?i:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=m&&bi(i,a,s,c,o,l,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wp(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ce(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,f=s.y,h=o.y,m=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,p=a>c?a>l?a:l:c>l?c:l,d=u>f?u>h?u:h:f>h?f:h,x=Ls(m,g,t,e,n),E=Ls(p,d,t,e,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=x&&y&&y.z<=E;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&bi(a,u,c,f,l,h,_.x,_.y)&&ce(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==i&&y!==o&&bi(a,u,c,f,l,h,y.x,y.y)&&ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=x;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&bi(a,u,c,f,l,h,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=E;){if(y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==i&&y!==o&&bi(a,u,c,f,l,h,y.x,y.y)&&ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ep(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Nr(i,s)&&Wa(i,n,n.next,s)&&Ki(i,s)&&Ki(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),$i(n),$i(n.next),n=r=s),n=n.next}while(n!==r);return Qn(n)}function Tp(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fp(o,a)){let c=qa(o,a);o=Qn(o,o.next),c=Qn(c,c.next),Ji(o,t,e,n,i,s,0),Ji(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ap(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=Ha(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Np(l));for(i.sort(Cp),s=0;s<i.length;s++)e=Lp(i[s],e);return e}function Cp(r,t){return r.x-t.x}function Lp(r,t){const e=Pp(r,t);if(!e)return t;const n=qa(e,r);return Qn(n,n.next),Qn(e,e.next)}function Pp(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>n&&(n=h,i=e.x<e.next.x?e:e.next,h===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,f;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&bi(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(s-e.x),Ki(e,r)&&(f<u||f===u&&(e.x>i.x||e.x===i.x&&Rp(i,e)))&&(i=e,u=f)),e=e.next;while(e!==a);return i}function Rp(r,t){return ce(r.prev,r,t.prev)<0&&ce(t.next,r,r.next)<0}function Dp(r,t,e,n){let i=r;do i.z===0&&(i.z=Ls(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Ip(i)}function Ip(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Ls(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Np(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function bi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Fp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Op(r,t)&&(Ki(r,t)&&Ki(t,r)&&zp(r,t)&&(ce(r.prev,r,t.prev)||ce(r,t.prev,t))||Nr(r,t)&&ce(r.prev,r,r.next)>0&&ce(t.prev,t,t.next)>0)}function ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Nr(r,t){return r.x===t.x&&r.y===t.y}function Wa(r,t,e,n){const i=Sr(ce(r,t,e)),s=Sr(ce(r,t,n)),o=Sr(ce(e,n,r)),a=Sr(ce(e,n,t));return!!(i!==s&&o!==a||i===0&&yr(r,e,t)||s===0&&yr(r,n,t)||o===0&&yr(e,r,n)||a===0&&yr(e,t,n))}function yr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Sr(r){return r>0?1:r<0?-1:0}function Op(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Wa(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ki(r,t){return ce(r.prev,r,r.next)<0?ce(r,t,r.next)>=0&&ce(r,r.prev,t)>=0:ce(r,t,r.prev)<0||ce(r,r.next,t)<0}function zp(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function qa(r,t){const e=new Ps(r.i,r.x,r.y),n=new Ps(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ra(r,t,e,n){const i=new Ps(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $i(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ps(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Up(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class wi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return wi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];sa(t),oa(n,t);let o=t.length;e.forEach(sa);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,oa(n,e[c]);const a=Sp.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function sa(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function oa(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ks extends Rn{constructor(t=new Tr([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Sn(i,3)),this.setAttribute("uv",new Sn(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:kp;let _,y=!1,w,C,F,b;x&&(_=x.getSpacedPoints(u),y=!0,h=!1,w=x.computeFrenetFrames(u,!1),C=new N,F=new N,b=new N),h||(d=0,m=0,g=0,p=0);const T=a.extractPoints(l);let O=T.shape;const J=T.holes;if(!wi.isClockWise(O)){O=O.reverse();for(let $=0,Q=J.length;$<Q;$++){const ct=J[$];wi.isClockWise(ct)&&(J[$]=ct.reverse())}}const V=wi.triangulateShape(O,J),z=O;for(let $=0,Q=J.length;$<Q;$++){const ct=J[$];O=O.concat(ct)}function X($,Q,ct){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(Q,ct)}const j=O.length,rt=V.length;function K($,Q,ct){let Ct,dt,Ut;const Nt=$.x-Q.x,kt=$.y-Q.y,ie=ct.x-$.x,Kt=ct.y-$.y,M=Nt*Nt+kt*kt,v=Nt*Kt-kt*ie;if(Math.abs(v)>Number.EPSILON){const W=Math.sqrt(M),ot=Math.sqrt(ie*ie+Kt*Kt),at=Q.x-kt/W,gt=Q.y+Nt/W,Rt=ct.x-Kt/ot,A=ct.y+ie/ot,U=((Rt-at)*Kt-(A-gt)*ie)/(Nt*Kt-kt*ie);Ct=at+Nt*U-$.x,dt=gt+kt*U-$.y;const bt=Ct*Ct+dt*dt;if(bt<=2)return new mt(Ct,dt);Ut=Math.sqrt(bt/2)}else{let W=!1;Nt>Number.EPSILON?ie>Number.EPSILON&&(W=!0):Nt<-Number.EPSILON?ie<-Number.EPSILON&&(W=!0):Math.sign(kt)===Math.sign(Kt)&&(W=!0),W?(Ct=-kt,dt=Nt,Ut=Math.sqrt(M)):(Ct=Nt,dt=kt,Ut=Math.sqrt(M/2))}return new mt(Ct/Ut,dt/Ut)}const st=[];for(let $=0,Q=z.length,ct=Q-1,Ct=$+1;$<Q;$++,ct++,Ct++)ct===Q&&(ct=0),Ct===Q&&(Ct=0),st[$]=K(z[$],z[ct],z[Ct]);const et=[];let Et,H=st.concat();for(let $=0,Q=J.length;$<Q;$++){const ct=J[$];Et=[];for(let Ct=0,dt=ct.length,Ut=dt-1,Nt=Ct+1;Ct<dt;Ct++,Ut++,Nt++)Ut===dt&&(Ut=0),Nt===dt&&(Nt=0),Et[Ct]=K(ct[Ct],ct[Ut],ct[Nt]);et.push(Et),H=H.concat(Et)}for(let $=0;$<d;$++){const Q=$/d,ct=m*Math.cos(Q*Math.PI/2),Ct=g*Math.sin(Q*Math.PI/2)+p;for(let dt=0,Ut=z.length;dt<Ut;dt++){const Nt=X(z[dt],st[dt],Ct);_t(Nt.x,Nt.y,-ct)}for(let dt=0,Ut=J.length;dt<Ut;dt++){const Nt=J[dt];Et=et[dt];for(let kt=0,ie=Nt.length;kt<ie;kt++){const Kt=X(Nt[kt],Et[kt],Ct);_t(Kt.x,Kt.y,-ct)}}}const nt=g+p;for(let $=0;$<j;$++){const Q=h?X(O[$],H[$],nt):O[$];y?(F.copy(w.normals[0]).multiplyScalar(Q.x),C.copy(w.binormals[0]).multiplyScalar(Q.y),b.copy(_[0]).add(F).add(C),_t(b.x,b.y,b.z)):_t(Q.x,Q.y,0)}for(let $=1;$<=u;$++)for(let Q=0;Q<j;Q++){const ct=h?X(O[Q],H[Q],nt):O[Q];y?(F.copy(w.normals[$]).multiplyScalar(ct.x),C.copy(w.binormals[$]).multiplyScalar(ct.y),b.copy(_[$]).add(F).add(C),_t(b.x,b.y,b.z)):_t(ct.x,ct.y,f/u*$)}for(let $=d-1;$>=0;$--){const Q=$/d,ct=m*Math.cos(Q*Math.PI/2),Ct=g*Math.sin(Q*Math.PI/2)+p;for(let dt=0,Ut=z.length;dt<Ut;dt++){const Nt=X(z[dt],st[dt],Ct);_t(Nt.x,Nt.y,f+ct)}for(let dt=0,Ut=J.length;dt<Ut;dt++){const Nt=J[dt];Et=et[dt];for(let kt=0,ie=Nt.length;kt<ie;kt++){const Kt=X(Nt[kt],Et[kt],Ct);y?_t(Kt.x,Kt.y+_[u-1].y,_[u-1].x+ct):_t(Kt.x,Kt.y,f+ct)}}}ht(),B();function ht(){const $=i.length/3;if(h){let Q=0,ct=j*Q;for(let Ct=0;Ct<rt;Ct++){const dt=V[Ct];Mt(dt[2]+ct,dt[1]+ct,dt[0]+ct)}Q=u+d*2,ct=j*Q;for(let Ct=0;Ct<rt;Ct++){const dt=V[Ct];Mt(dt[0]+ct,dt[1]+ct,dt[2]+ct)}}else{for(let Q=0;Q<rt;Q++){const ct=V[Q];Mt(ct[2],ct[1],ct[0])}for(let Q=0;Q<rt;Q++){const ct=V[Q];Mt(ct[0]+j*u,ct[1]+j*u,ct[2]+j*u)}}n.addGroup($,i.length/3-$,0)}function B(){const $=i.length/3;let Q=0;St(z,Q),Q+=z.length;for(let ct=0,Ct=J.length;ct<Ct;ct++){const dt=J[ct];St(dt,Q),Q+=dt.length}n.addGroup($,i.length/3-$,1)}function St($,Q){let ct=$.length;for(;--ct>=0;){const Ct=ct;let dt=ct-1;dt<0&&(dt=$.length-1);for(let Ut=0,Nt=u+d*2;Ut<Nt;Ut++){const kt=j*Ut,ie=j*(Ut+1),Kt=Q+Ct+kt,M=Q+dt+kt,v=Q+dt+ie,W=Q+Ct+ie;wt(Kt,M,v,W)}}}function _t($,Q,ct){c.push($),c.push(Q),c.push(ct)}function Mt($,Q,ct){At($),At(Q),At(ct);const Ct=i.length/3,dt=E.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);zt(dt[0]),zt(dt[1]),zt(dt[2])}function wt($,Q,ct,Ct){At($),At(Q),At(Ct),At(Q),At(ct),At(Ct);const dt=i.length/3,Ut=E.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);zt(Ut[0]),zt(Ut[1]),zt(Ut[3]),zt(Ut[1]),zt(Ut[2]),zt(Ut[3])}function At($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function zt($){s.push($.x),s.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Va[i.type]().fromJSON(i)),new ks(n,t.options)}}const kp={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new mt(s,o),new mt(a,c),new mt(l,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[i*3],m=t[i*3+1],g=t[i*3+2],p=t[s*3],d=t[s*3+1],x=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-f),new mt(h,1-g),new mt(p,1-x)]:[new mt(a,1-c),new mt(u,1-f),new mt(m,1-g),new mt(d,1-x)]}};function Bp(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}const aa={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Gp{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Vp=new Gp;class Xa{constructor(t){this.manager=t!==void 0?t:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const vn={};class Hp extends Error{constructor(t,e){super(t),this.response=e}}class Wp extends Xa{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=aa.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(vn[t]!==void 0){vn[t].push({onLoad:e,onProgress:n,onError:i});return}vn[t]=[],vn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=vn[t],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(x){E();function E(){f.read().then(({done:_,value:y})=>{if(_)x.close();else{p+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let C=0,F=u.length;C<F;C++){const b=u[C];b.onProgress&&b.onProgress(w)}x.enqueue(y),E()}})}}});return new Response(d)}else throw new Hp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{aa.add(t,l);const u=vn[t];delete vn[t];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=vn[t];if(u===void 0)throw this.manager.itemError(t),l;delete vn[t];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class la{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qp{constructor(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Cs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(x){const E=[];for(let _=0,y=x.length;_<y;_++){const w=x[_],C=new Tr;C.curves=w.curves,E.push(C)}return E}function n(x,E){const _=E.length;let y=!1;for(let w=_-1,C=0;C<_;w=C++){let F=E[w],b=E[C],T=b.x-F.x,O=b.y-F.y;if(Math.abs(O)>Number.EPSILON){if(O<0&&(F=E[C],T=-T,b=E[w],O=-O),x.y<F.y||x.y>b.y)continue;if(x.y===F.y){if(x.x===F.x)return!0}else{const J=O*(x.x-F.x)-T*(x.y-F.y);if(J===0)return!0;if(J<0)continue;y=!y}}else{if(x.y!==F.y)continue;if(b.x<=x.x&&x.x<=F.x||F.x<=x.x&&x.x<=b.x)return!0}}return y}const i=wi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Tr,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=t?!u:u;const f=[],h=[];let m=[],g=0,p;h[g]=void 0,m[g]=[];for(let x=0,E=s.length;x<E;x++)a=s[x],p=a.getPoints(),o=i(p),o=t?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new Tr,p},h[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:p[0]});if(!h[0])return e(s);if(h.length>1){let x=!1,E=0;for(let _=0,y=h.length;_<y;_++)f[_]=[];for(let _=0,y=h.length;_<y;_++){const w=m[_];for(let C=0;C<w.length;C++){const F=w[C];let b=!0;for(let T=0;T<h.length;T++)n(F.p,h[T].p)&&(_!==T&&E++,b?(b=!1,f[T].push(F)):x=!0);b&&f[_].push(F)}}E>0&&x===!1&&(m=f)}let d;for(let x=0,E=h.length;x<E;x++){c=h[x].s,l.push(c),d=m[x];for(let _=0,y=d.length;_<y;_++)c.holes.push(d[_].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ds);const ca={type:"change"},bs={type:"start"},ua={type:"end"};class Xp extends ti{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Kt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Kt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ca),n.update(),s=i.NONE},this.update=function(){const A=new N,U=new Kn().setFromUnitVectors(t.up,new N(0,1,0)),bt=U.clone().invert(),pt=new N,Pt=new Kn,It=2*Math.PI;return function(){const Xt=n.object.position;A.copy(Xt).sub(n.target),A.applyQuaternion(U),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&T(F()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let $t=n.minAzimuthAngle,re=n.maxAzimuthAngle;return isFinite($t)&&isFinite(re)&&($t<-Math.PI?$t+=It:$t>Math.PI&&($t-=It),re<-Math.PI?re+=It:re>Math.PI&&(re-=It),$t<=re?a.theta=Math.max($t,Math.min(re,a.theta)):a.theta=a.theta>($t+re)/2?Math.max($t,a.theta):Math.min(re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(bt),Xt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||pt.distanceToSquared(n.object.position)>o||8*(1-Pt.dot(n.object.quaternion))>o?(n.dispatchEvent(ca),pt.copy(n.object.position),Pt.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",ct),n.domElement.removeEventListener("pointercancel",Ut),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",dt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Kt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new la,c=new la;let l=1;const u=new N;let f=!1;const h=new mt,m=new mt,g=new mt,p=new mt,d=new mt,x=new mt,E=new mt,_=new mt,y=new mt,w=[],C={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function T(A){c.theta-=A}function O(A){c.phi-=A}const J=function(){const A=new N;return function(bt,pt){A.setFromMatrixColumn(pt,0),A.multiplyScalar(-bt),u.add(A)}}(),tt=function(){const A=new N;return function(bt,pt){n.screenSpacePanning===!0?A.setFromMatrixColumn(pt,1):(A.setFromMatrixColumn(pt,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(bt),u.add(A)}}(),V=function(){const A=new N;return function(bt,pt){const Pt=n.domElement;if(n.object.isPerspectiveCamera){const It=n.object.position;A.copy(It).sub(n.target);let Dt=A.length();Dt*=Math.tan(n.object.fov/2*Math.PI/180),J(2*bt*Dt/Pt.clientHeight,n.object.matrix),tt(2*pt*Dt/Pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(bt*(n.object.right-n.object.left)/n.object.zoom/Pt.clientWidth,n.object.matrix),tt(pt*(n.object.top-n.object.bottom)/n.object.zoom/Pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A){h.set(A.clientX,A.clientY)}function rt(A){E.set(A.clientX,A.clientY)}function K(A){p.set(A.clientX,A.clientY)}function st(A){m.set(A.clientX,A.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const U=n.domElement;T(2*Math.PI*g.x/U.clientHeight),O(2*Math.PI*g.y/U.clientHeight),h.copy(m),n.update()}function et(A){_.set(A.clientX,A.clientY),y.subVectors(_,E),y.y>0?z(b()):y.y<0&&X(b()),E.copy(_),n.update()}function Et(A){d.set(A.clientX,A.clientY),x.subVectors(d,p).multiplyScalar(n.panSpeed),V(x.x,x.y),p.copy(d),n.update()}function H(A){A.deltaY<0?X(b()):A.deltaY>0&&z(b()),n.update()}function nt(A){let U=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),U=!0;break}U&&(A.preventDefault(),n.update())}function ht(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),U=.5*(w[0].pageY+w[1].pageY);h.set(A,U)}}function B(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),U=.5*(w[0].pageY+w[1].pageY);p.set(A,U)}}function St(){const A=w[0].pageX-w[1].pageX,U=w[0].pageY-w[1].pageY,bt=Math.sqrt(A*A+U*U);E.set(0,bt)}function _t(){n.enableZoom&&St(),n.enablePan&&B()}function Mt(){n.enableZoom&&St(),n.enableRotate&&ht()}function wt(A){if(w.length==1)m.set(A.pageX,A.pageY);else{const bt=Rt(A),pt=.5*(A.pageX+bt.x),Pt=.5*(A.pageY+bt.y);m.set(pt,Pt)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const U=n.domElement;T(2*Math.PI*g.x/U.clientHeight),O(2*Math.PI*g.y/U.clientHeight),h.copy(m)}function At(A){if(w.length===1)d.set(A.pageX,A.pageY);else{const U=Rt(A),bt=.5*(A.pageX+U.x),pt=.5*(A.pageY+U.y);d.set(bt,pt)}x.subVectors(d,p).multiplyScalar(n.panSpeed),V(x.x,x.y),p.copy(d)}function zt(A){const U=Rt(A),bt=A.pageX-U.x,pt=A.pageY-U.y,Pt=Math.sqrt(bt*bt+pt*pt);_.set(0,Pt),y.set(0,Math.pow(_.y/E.y,n.zoomSpeed)),z(y.y),E.copy(_)}function $(A){n.enableZoom&&zt(A),n.enablePan&&At(A)}function Q(A){n.enableZoom&&zt(A),n.enableRotate&&wt(A)}function ct(A){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Ct),n.domElement.addEventListener("pointerup",dt)),ot(A),A.pointerType==="touch"?M(A):Nt(A))}function Ct(A){n.enabled!==!1&&(A.pointerType==="touch"?v(A):kt(A))}function dt(A){at(A),w.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",dt)),n.dispatchEvent(ua),s=i.NONE}function Ut(A){at(A)}function Nt(A){let U;switch(A.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case ei.DOLLY:if(n.enableZoom===!1)return;rt(A),s=i.DOLLY;break;case ei.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;K(A),s=i.PAN}else{if(n.enableRotate===!1)return;j(A),s=i.ROTATE}break;case ei.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;j(A),s=i.ROTATE}else{if(n.enablePan===!1)return;K(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(bs)}function kt(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;st(A);break;case i.DOLLY:if(n.enableZoom===!1)return;et(A);break;case i.PAN:if(n.enablePan===!1)return;Et(A);break}}function ie(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(bs),H(A),n.dispatchEvent(ua))}function Kt(A){n.enabled===!1||n.enablePan===!1||nt(A)}function M(A){switch(gt(A),w.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;ht(),s=i.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;B(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(),s=i.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(bs)}function v(A){switch(gt(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;wt(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;At(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(A),n.update();break;default:s=i.NONE}}function W(A){n.enabled!==!1&&A.preventDefault()}function ot(A){w.push(A)}function at(A){delete C[A.pointerId];for(let U=0;U<w.length;U++)if(w[U].pointerId==A.pointerId){w.splice(U,1);return}}function gt(A){let U=C[A.pointerId];U===void 0&&(U=new mt,C[A.pointerId]=U),U.set(A.pageX,A.pageY)}function Rt(A){const U=A.pointerId===w[0].pointerId?w[1]:w[0];return C[U.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",ct),n.domElement.addEventListener("pointercancel",Ut),n.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}const ne={colors:[{name:"yellow",hex:16776960},{name:"white",hex:16777215},{name:"green",hex:65280},{name:"red",hex:16711680},{name:"orange",hex:16753920},{name:"blue",hex:255}],canvasColor:0,dimensions:3,totalSize:3,borderSize:.025,borderColor:0,initialCameraPosition:{x:0,y:0,z:7},animationSpeed:100},Yp={bottom:[[0,0,0],[0,0,0],[0,0,0]],top:[[1,1,1],[1,1,1],[1,1,1]],front:[[2,2,2],[2,2,2],[2,2,2]],right:[[3,3,3],[3,3,3],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[5,5,5],[5,5,5],[5,5,5]]},ha=["u","d","l","r","f","b","m"],he={0:"bottom",1:"top",2:"front",3:"right",4:"left",5:"back"};class Zp extends ks{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}class Jp extends Xa{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Wp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const c=s.parse(JSON.parse(a));e&&e(c)},n,i)}parse(t){return new Kp(t)}}class Kp{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=$p(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function $p(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)a=0,c-=s;else{const f=jp(u,i,a,c,e);a+=f.offsetX,o.push(f.path)}}return o}function jp(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new qp;let a,c,l,u,f,h,m,g;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,x=p.length;d<x;)switch(p[d++]){case"m":a=p[d++]*t+e,c=p[d++]*t+n,o.moveTo(a,c);break;case"l":a=p[d++]*t+e,c=p[d++]*t+n,o.lineTo(a,c);break;case"q":l=p[d++]*t+e,u=p[d++]*t+n,f=p[d++]*t+e,h=p[d++]*t+n,o.quadraticCurveTo(f,h,l,u);break;case"b":l=p[d++]*t+e,u=p[d++]*t+n,f=p[d++]*t+e,h=p[d++]*t+n,m=p[d++]*t+e,g=p[d++]*t+n,o.bezierCurveTo(f,h,m,g,l,u);break}}return{offsetX:s.ha*t,path:o}}function Qp({location:r,color:t,size:e,rotation:n,i,j:s}){const o=new Ve(new Dr(e,e),new Cr({color:t}));o.position.set(r.x,r.y,r.z),o.rotation.set(n.x,n.y,n.z);let a=!1;function c(){const l=new Jp,u="("+i+" , "+s+")";l.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",f=>{const h=new Zp(u,{font:f,size:.2,height:.01}),m=new Ve(h,new Cr({color:0}));m.translateX(-.335),m.translateY(-.08),o.add(m)})}return window.addEventListener("keydown",l=>{l.key==="t"&&(a=!a,a&&c(),a||o.remove(o.children[0]))}),{elements:[o]}}function tm({id:r,state:t}){const{totalSize:e,dimensions:n,borderSize:i,colors:s}=ne,o=e/n,a=o-i,c=new Ve;for(let l=0;l<n;l++)for(let u=0;u<n;u++){const f={x:(l-(ne.dimensions-1)/2)*o,y:(u-(ne.dimensions-1)/2)*o,z:e/2+i/2},h=new se(s[t[l][u]].hex);c.add(Qp({id:r,location:new N(f.x,f.y,f.z),rotation:new N(0,0,0),color:h,size:a,i:l,j:u}).elements[0])}return{elements:[c]}}const em=r=>new Promise(t=>setTimeout(t,r));async function fa(r,t,e){const n={u:{indiciesToRemove:{front:[0,1,3,4,6,7],right:[0,1,3,4,6,7],back:[0,1,3,4,6,7],left:[0,1,3,4,6,7]},axis:"y",direction:-1,rotatedSide:"top"},d:{indiciesToRemove:{front:[1,2,4,5,7,8],right:[1,2,4,5,7,8],back:[1,2,4,5,7,8],left:[1,2,4,5,7,8]},axis:"y",direction:1,rotatedSide:"bottom"},l:{indiciesToRemove:{front:[3,4,5,6,7,8],top:[3,4,5,6,7,8],back:[0,1,2,3,4,5],bottom:[3,4,5,6,7,8]},axis:"x",direction:1,rotatedSide:"left"},r:{indiciesToRemove:{front:[0,1,2,3,4,5],top:[0,1,2,3,4,5],back:[3,4,5,6,7,8],bottom:[0,1,2,3,4,5]},axis:"x",direction:-1,rotatedSide:"right"},f:{indiciesToRemove:{right:[3,4,5,6,7,8],top:[1,2,4,5,7,8],left:[0,1,2,3,4,5],bottom:[0,1,3,4,6,7]},axis:"z",direction:-1,rotatedSide:"front"},b:{indiciesToRemove:{left:[3,4,5,6,7,8],top:[0,1,3,4,6,7],right:[0,1,2,3,4,5],bottom:[1,2,4,5,7,8]},axis:"z",direction:1,rotatedSide:"back"},m:{indiciesToRemove:{front:[0,1,2,6,7,8],top:[0,1,2,6,7,8],back:[0,1,2,6,7,8],bottom:[0,1,2,6,7,8]},axis:"x",direction:1,rotatedSide:"None"}},i={bottom:0,top:1,front:2,right:3,left:4,back:5},s=new Ve,{indiciesToRemove:o}=n[t];Object.keys(o).forEach(h=>{const m=r[i[h]].clone();o[h].map(d=>m.children[0].children[d]).forEach(d=>m.children[0].remove(d)),r[i[h]].children[0].children.filter((d,x)=>!o[h].includes(x)).forEach(d=>r[i[h]].children[0].remove(d)),s.add(m)});const{axis:a,direction:c,rotatedSide:l}=n[t],u=e?c*-1:c,f=l!=="None"?r[i[l]]:null;f&&s.add(f),Yn.add(s),await nm(u,{mesh:s,axis:a}),Yn.remove(s)}async function nm(r,t){const e=Math.PI/2*r,n=Date.now(),i=n+ne.animationSpeed;let s=0;for(;Date.now()<i;){const o=Date.now()-n,a=e/ne.animationSpeed*o-s,{mesh:c,axis:l}=t;c.rotateOnAxis(new N(l==="x"?1:0,l==="y"?1:0,l==="z"?1:0),a),s+=a,await em(0)}}function im(r=24){const t=[];for(let e=0;e<r;e++){const n=ha[Math.floor(Math.random()*ha.length)];if(n==="m"){e--;continue}const i=Math.random()>.5;t.push({move:n,inverted:i})}return t}function un(r){const{colors:t}=ne;for(let e=0;e<t.length;e++)if(t[e].name===r)return e;return-1}const I=()=>[{move:"u",inverted:!1}],Tt=()=>[{move:"u",inverted:!1},{move:"u",inverted:!1}],D=()=>[{move:"u",inverted:!0}],L=()=>[{move:"r",inverted:!1}],qt=()=>[{move:"r",inverted:!1},{move:"r",inverted:!1}],P=()=>[{move:"r",inverted:!0}],ut=()=>[{move:"f",inverted:!1}],Ya=()=>[{move:"f",inverted:!1},{move:"f",inverted:!1}],xt=()=>[{move:"f",inverted:!0}],vt=()=>[{move:"d",inverted:!1}],ee=()=>[{move:"d",inverted:!1},{move:"d",inverted:!1}],lt=()=>[{move:"d",inverted:!0}],Ft=()=>[{move:"l",inverted:!1}],Bs=()=>[{move:"l",inverted:!1},{move:"l",inverted:!1}],Bt=()=>[{move:"l",inverted:!0}],te=()=>[{move:"b",inverted:!1}],da=()=>[{move:"b",inverted:!1},{move:"b",inverted:!1}],le=()=>[{move:"b",inverted:!0}],Xn=()=>[{move:"m",inverted:!1}],Fe=()=>[{move:"m",inverted:!1},{move:"m",inverted:!1}],Oe=()=>[{move:"m",inverted:!0}],_e=()=>[...L(),...Oe()],Un=()=>[...qt(),...Fe()],ge=()=>[...P(),...Xn()],ki=()=>[...Ft(),...Xn()],Bi=()=>[...Bt(),...Oe()],Qt={go:{orange:[vt,Ft,lt,Bt,lt,xt,vt,ut],green:[lt,xt,vt,ut,vt,Ft,lt,Bt]},gr:{green:[vt,ut,lt,xt,lt,P,vt,L],red:[lt,P,vt,L,vt,ut,lt,xt]},rb:{red:[vt,L,lt,P,lt,le,vt,te],blue:[lt,le,vt,te,vt,L,lt,P]},bo:{blue:[vt,te,lt,le,lt,Bt,vt,Ft],orange:[lt,Bt,vt,Ft,vt,te,lt,le]}};function Mr(r,t){return t==="go"?r.left[2][1]===r.left[1][1]&&r.front[0][1]===r.front[1][1]:t==="gr"?r.right[0][1]===r.right[1][1]&&r.front[2][1]===r.front[1][1]:t==="rb"?r.right[2][1]===r.right[1][1]&&r.back[0][1]===r.back[1][1]:t==="bo"?r.left[0][1]===r.left[1][1]&&r.back[2][1]===r.back[1][1]:!1}function rm(r,t,e,n){if(n==="front"){if(t===1&&e===0)return r.bottom[1][2];if(t===0&&e===1)return r.left[2][1];if(t===2&&e===1)return r.right[0][1]}if(n==="right"){if(t===1&&e===0)return r.bottom[2][1];if(t===0&&e===1)return r.left[2][1];if(t===2&&e===1)return r.back[0][1]}if(n==="back"){if(t===1&&e===0)return r.bottom[1][0];if(t===0&&e===1)return r.right[2][1];if(t===2&&e===1)return r.left[0][1]}if(n==="left"){if(t===1&&e===0)return r.bottom[0][1];if(t===0&&e===1)return r.front[2][1];if(t===2&&e===1)return r.back[0][1]}if(n==="bottom"){if(t===1&&e===0)return r.back[1][0];if(t===0&&e===1)return r.left[1][0];if(t===2&&e===1)return r.right[1][0];if(t===1&&e===2)return r.front[1][0]}return-1}function wr(r,t,e,n){const i=r[n][t][e],s=rm(r,t,e,n),o=un("green"),a=un("orange"),c=un("blue"),l=un("red"),u=[i,s];return u.includes(o)&&u.includes(a)?"go":u.includes(o)&&u.includes(l)?"gr":u.includes(l)&&u.includes(c)?"rb":u.includes(c)&&u.includes(a)?"bo":""}function sm(r){const t=un("green"),e=un("orange"),n=un("red"),i=un("blue"),s=[[0,1],[2,1],[1,0],[1,2]];if(!Mr(r,"go"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(wr(r,a,c,"bottom")==="go"){if(a===1&&c===2){if(r.bottom[1][2]===t)return[lt,...Qt.go.green];if(r.bottom[1][2]===e)return[...Qt.go.orange]}if(a===2&&c===1){if(r.bottom[2][1]===t)return[lt,...Qt.go.green];if(r.bottom[2][1]===e)return[ee,...Qt.go.orange]}if(a===1&&c===0){if(r.bottom[1][0]===t)return[vt,...Qt.go.green];if(r.bottom[1][0]===e)return[ee,...Qt.go.orange]}if(a===0&&c===1){if(r.bottom[0][1]===t)return[...Qt.go.green];if(r.bottom[0][1]===e)return[vt,...Qt.go.orange]}}}if(!Mr(r,"gr"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(wr(r,a,c,"bottom")==="gr"){if(a===1&&c===2){if(r.bottom[1][2]===t)return[vt,...Qt.gr.green];if(r.bottom[1][2]===n)return[...Qt.gr.red]}if(a===2&&c===1){if(r.bottom[2][1]===t)return[...Qt.gr.green];if(r.bottom[2][1]===n)return[lt,...Qt.gr.red]}if(a===1&&c===0){if(r.bottom[1][0]===t)return[lt,...Qt.gr.green];if(r.bottom[1][0]===n)return[ee,...Qt.gr.red]}if(a===0&&c===1){if(r.bottom[0][1]===t)return[ee,...Qt.gr.green];if(r.bottom[0][1]===n)return[vt,...Qt.gr.red]}}}if(!Mr(r,"rb"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(wr(r,a,c,"bottom")==="rb"){if(a===1&&c===2){if(r.bottom[1][2]===n)return[ee,...Qt.rb.red];if(r.bottom[1][2]===i)return[vt,...Qt.rb.blue]}if(a===2&&c===1){if(r.bottom[2][1]===n)return[vt,...Qt.rb.red];if(r.bottom[2][1]===i)return[...Qt.rb.blue]}if(a===1&&c===0){if(r.bottom[1][0]===n)return[...Qt.rb.red];if(r.bottom[1][0]===i)return[lt,...Qt.rb.blue]}if(a===0&&c===1){if(r.bottom[0][1]===n)return[lt,...Qt.rb.red];if(r.bottom[0][1]===i)return[ee,...Qt.rb.blue]}}}if(!Mr(r,"bo"))for(let o=0;o<s.length;o++){const[a,c]=s[o];if(wr(r,a,c,"bottom")==="bo"){if(a===1&&c===2){if(r.bottom[1][2]===i)return[lt,...Qt.bo.blue];if(r.bottom[1][2]===e)return[ee,...Qt.bo.orange]}if(a===2&&c===1){if(r.bottom[2][1]===i)return[ee,...Qt.bo.blue];if(r.bottom[2][1]===e)return[vt,...Qt.bo.orange]}if(a===1&&c===0){if(r.bottom[1][0]===i)return[vt,...Qt.bo.blue];if(r.bottom[1][0]===e)return[...Qt.bo.orange]}if(a===0&&c===1){if(r.bottom[0][1]===i)return[...Qt.bo.blue];if(r.bottom[0][1]===e)return[lt,...Qt.bo.orange]}}}return[]}function om(r){const{dimensions:t}=ne,e=un("yellow");for(let n=0;n<t;n++)for(let i=0;i<t;i++)if(r.top[n][i]!==e)return!1;return!0}const pa={1:{sequence:[L,Tt,qt,ut,L,xt,Tt,P,ut,L,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,2,2],[3,0,4],[3,5,5]],front:[[5,5,5],[5,5,0],[5,5,2]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,4]]}},2:{sequence:[_e,I,ge,Tt,_e,Tt,P,Tt,L,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,2,3],[3,0,4],[2,5,4]],front:[[5,5,3],[5,5,0],[5,5,4]],right:[[3,3,0],[3,3,0],[3,3,5]],left:[[4,4,5],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,0],[2,2,0]]}},3:{sequence:[ge,qt,I,P,I,_e,Tt,ge,I,Oe],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,2,5],[4,0,3],[2,5,4]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,3],[3,3,0],[3,3,0]],left:[[4,4,4],[4,4,0],[4,4,5]],back:[[2,2,2],[2,2,0],[2,2,0]]}},4:{sequence:[Xn,D,_e,Tt,ge,D,L,D,P,Oe],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,5,3],[3,0,4],[0,2,5]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,0],[3,3,3]],left:[[4,4,0],[4,4,0],[4,4,4]],back:[[2,2,0],[2,2,0],[2,2,2]]}},5:{sequence:[Bi,Tt,Ft,I,Bt,I,ki],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[4,0,0],[4,5,5]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,3],[4,4,3],[4,4,0]],back:[[2,2,4],[2,2,2],[2,2,5]]}},6:{sequence:[_e,Tt,P,D,L,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,5],[3,0,0],[2,0,0]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,0],[3,3,4],[3,3,4]],left:[[4,4,0],[4,4,0],[4,4,2]],back:[[2,2,5],[2,2,2],[2,2,3]]}},7:{sequence:[_e,I,P,I,L,Tt,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[4,0,0],[4,5,5]],front:[[5,5,2],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,5],[4,4,3],[4,4,3]],back:[[2,2,4],[2,2,2],[2,2,0]]}},8:{sequence:[Bi,D,Ft,D,Bt,Tt,ki],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,5],[3,0,0],[0,0,4]],front:[[5,5,0],[5,5,0],[5,5,2]],right:[[3,3,4],[3,3,4],[3,3,5]],left:[[4,4,0],[4,4,0],[4,4,2]],back:[[2,2,0],[2,2,2],[2,2,3]]}},9:{sequence:[L,I,P,D,P,ut,qt,I,P,D,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,5],[2,0,0],[0,5,3]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,3],[2,2,3]]}},10:{sequence:[L,I,P,I,P,ut,L,xt,L,Tt,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,2],[0,0,2],[5,3,0]],front:[[5,5,5],[5,5,5],[5,5,0]],right:[[3,3,4],[3,3,0],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,0]]}},11:{sequence:[L,Oe,I,P,I,P,ut,L,xt,L,Tt,Xn,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,2],[5,0,0],[5,3,0]],front:[[5,5,5],[5,5,0],[5,5,0]],right:[[3,3,4],[3,3,0],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,0]],back:[[2,2,4],[2,2,2],[2,2,0]]}},12:{sequence:[Oe,P,D,L,D,P,Tt,L,D,L,P,Xn],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,5,0],[4,0,0],[4,0,5]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,0],[3,3,3],[3,3,3]],left:[[4,4,2],[4,4,0],[4,4,4]],back:[[2,2,0],[2,2,2],[2,2,3]]}},13:{sequence:[ut,I,L,D,qt,xt,L,I,L,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,5],[3,0,5],[4,0,2]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,2],[3,3,0]],left:[[4,4,4],[4,4,4],[4,4,5]],back:[[2,2,3],[2,2,0],[2,2,0]]}},14:{sequence:[P,ut,L,I,P,xt,L,ut,D,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,3],[3,0,5],[0,0,4]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,5]],left:[[4,4,0],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,0],[2,2,2]]}},15:{sequence:[Bi,D,ki,Bt,D,Ft,I,Bi,I,ki],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[4,0,5],[4,0,5]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,0]],left:[[4,4,3],[4,4,2],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,5]]}},16:{sequence:[_e,I,ge,L,I,P,D,_e,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[3,0,5],[2,0,0]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,0],[3,3,2],[3,3,4]],left:[[4,4,0],[4,4,4],[4,4,2]],back:[[2,2,5],[2,2,0],[2,2,3]]}},17:{sequence:[ut,P,xt,qt,ge,I,L,D,P,D,Oe],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,2,0],[4,0,3],[0,5,3]],front:[[5,5,0],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,4],[4,4,0],[4,4,5]],back:[[2,2,5],[2,2,0],[2,2,2]]}},18:{sequence:[_e,I,P,I,L,Tt,Un,D,L,D,P,Tt,_e],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,2,0],[3,0,4],[3,5,0]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,3]],left:[[4,4,4],[4,4,0],[4,4,5]],back:[[2,2,2],[2,2,0],[2,2,2]]}},19:{sequence:[ge,L,I,L,I,P,D,Oe,P,ut,L,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,5,0],[3,0,4],[3,2,0]],front:[[5,5,4],[5,5,0],[5,5,2]],right:[[3,3,0],[3,3,0],[3,3,5]],left:[[4,4,4],[4,4,0],[4,4,0]],back:[[2,2,3],[2,2,0],[2,2,2]]}},20:{sequence:[_e,I,P,D,Fe,I,L,D,P,D,Oe],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,2,0],[4,0,3],[0,5,0]],front:[[5,5,3],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,2]],left:[[4,4,5],[4,4,0],[4,4,5]],back:[[2,2,4],[2,2,0],[2,2,4]]}},21:{sequence:[L,Tt,P,D,L,I,P,D,L,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,0,4],[0,0,0],[3,0,3]],front:[[5,5,0],[5,5,5],[5,5,0]],right:[[3,3,5],[3,3,2],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,5]],back:[[2,2,0],[2,2,4],[2,2,0]]}},22:{sequence:[L,Tt,qt,D,qt,D,qt,Tt,L],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,5],[0,0,0],[4,0,4]],front:[[5,5,3],[5,5,2],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,0],[4,4,5],[4,4,0]],back:[[2,2,0],[2,2,4],[2,2,3]]}},23:{sequence:[qt,lt,L,Tt,P,vt,L,Tt,L],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[0,0,0],[0,0,2]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,4]],left:[[4,4,5],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,2],[2,2,0]]}},24:{sequence:[_e,I,P,D,ge,ut,L,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[0,0,0],[0,0,0]],front:[[5,5,0],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,4],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,2],[2,2,0]]}},25:{sequence:[xt,_e,I,P,D,ge,ut,L],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,5],[0,0,0],[2,0,0]],front:[[5,5,5],[5,5,5],[5,5,0]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,3]]}},26:{sequence:[L,Tt,P,D,L,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[0,0,0],[2,0,0]],front:[[5,5,0],[5,5,5],[5,5,4]],right:[[3,3,0],[3,3,4],[3,3,4]],left:[[4,4,0],[4,4,2],[4,4,2]],back:[[2,2,5],[2,2,3],[2,2,3]]}},27:{sequence:[L,I,P,I,L,Tt,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[0,0,0],[4,0,5]],front:[[5,5,2],[5,5,5],[5,5,0]],right:[[3,3,2],[3,3,2],[3,3,0]],left:[[4,4,5],[4,4,3],[4,4,3]],back:[[2,2,4],[2,2,4],[2,2,0]]}},28:{sequence:[_e,I,P,D,ge,L,I,L,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[2,0,0],[0,5,0]],front:[[5,5,5],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,0],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,3],[2,2,2]]}},29:{sequence:[L,I,P,D,L,D,P,xt,D,ut,L,I,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,3],[3,0,0],[0,5,0]],front:[[5,5,0],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,2],[2,2,0]]}},30:{sequence:[ut,P,ut,qt,D,P,D,L,I,P,Ya],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,4],[2,0,0],[0,5,4]],front:[[5,5,3],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,0]],left:[[4,4,0],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,4],[2,2,5]]}},31:{sequence:[P,D,ut,I,L,D,P,xt,L],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,2,2],[5,0,0],[0,0,0]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,3],[4,4,0],[4,4,5]],back:[[2,2,4],[2,2,4],[2,2,0]]}},32:{sequence:[Ft,I,xt,D,Bt,I,Ft,ut,Bt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[5,0,0],[3,2,2]],front:[[5,5,5],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,4]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,0],[2,2,3],[2,2,3]]}},33:{sequence:[L,I,P,D,P,ut,L,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,5],[3,0,5],[0,0,0]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,2]],left:[[4,4,4],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,0],[2,2,0]]}},34:{sequence:[L,I,qt,D,P,ut,L,I,L,D,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[3,0,5],[0,0,5]],front:[[5,5,4],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,0]],left:[[4,4,0],[4,4,4],[4,4,2]],back:[[2,2,4],[2,2,0],[2,2,2]]}},35:{sequence:[L,Tt,qt,ut,L,xt,L,Tt,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,2,0],[0,0,3],[0,0,3]],front:[[5,5,0],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,0]],left:[[4,4,5],[4,4,0],[4,4,4]],back:[[2,2,5],[2,2,0],[2,2,4]]}},36:{sequence:[Bt,D,Ft,D,Bt,I,Ft,I,Ft,xt,Bt,ut],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,0],[4,0,0],[0,0,4]],front:[[5,5,5],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,5]],left:[[4,4,4],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,3],[2,2,2]]}},37:{sequence:[ut,P,xt,L,I,L,D,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[2,0,0],[0,5,5]],front:[[5,5,0],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,0],[3,3,0]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,3],[2,2,3]]}},38:{sequence:[L,I,P,I,L,D,P,D,P,ut,L,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,3],[3,0,0],[4,5,0]],front:[[5,5,4],[5,5,0],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,3]],left:[[4,4,5],[4,4,2],[4,4,2]],back:[[2,2,2],[2,2,4],[2,2,0]]}},39:{sequence:[Ft,xt,Bt,D,Ft,I,ut,D,Bt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,2],[5,0,3],[5,0,0]],front:[[5,5,5],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,2],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,0],[2,2,0]]}},40:{sequence:[P,ut,L,I,P,D,xt,I,L],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,0],[5,0,4],[0,0,2]],front:[[5,5,4],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,2],[4,4,2],[4,4,0]],back:[[2,2,0],[2,2,0],[2,2,3]]}},41:{sequence:[L,I,P,I,L,Tt,P,ut,L,I,P,D,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,5],[3,0,0],[0,5,5]],front:[[5,5,4],[5,5,0],[5,5,3]],right:[[3,3,2],[3,3,0],[3,3,3]],left:[[4,4,4],[4,4,2],[4,4,2]],back:[[2,2,0],[2,2,4],[2,2,0]]}},42:{sequence:[P,D,L,D,P,Tt,L,ut,L,I,P,D,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,0,0],[0,0,5],[2,3,0]],front:[[5,5,0],[5,5,4],[5,5,0]],right:[[3,3,3],[3,3,0],[3,3,5]],left:[[4,4,5],[4,4,2],[4,4,4]],back:[[2,2,3],[2,2,0],[2,2,4]]}},43:{sequence:[xt,D,Bt,I,Ft,ut],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,5,3],[2,0,0],[0,0,0]],front:[[5,5,5],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,4],[2,2,4],[2,2,2]]}},44:{sequence:[ut,I,L,D,P,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[2,0,0],[4,5,4]],front:[[5,5,3],[5,5,0],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,2],[2,2,3],[2,2,3]]}},45:{sequence:[ut,L,I,P,D,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[3,0,3],[3,0,5],[0,0,0]],front:[[5,5,5],[5,5,0],[5,5,4]],right:[[3,3,5],[3,3,2],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,0]],back:[[2,2,4],[2,2,0],[2,2,2]]}},46:{sequence:[P,D,P,ut,L,xt,I,L],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,5,0],[0,0,0],[4,4,4]],front:[[5,5,3],[5,5,3],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,2],[4,4,0],[4,4,5]],back:[[2,2,2],[2,2,2],[2,2,3]]}},47:{sequence:[P,D,P,ut,L,xt,P,ut,L,xt,I,L],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,3,4],[4,0,0],[5,0,2]],front:[[5,5,0],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,5],[3,3,0]],left:[[4,4,2],[4,4,0],[4,4,5]],back:[[2,2,3],[2,2,2],[2,2,0]]}},48:{sequence:[ut,L,I,P,D,L,I,P,D,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,2],[2,0,0],[3,5,3]],front:[[5,5,4],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,0],[4,4,4],[4,4,0]],back:[[2,2,0],[2,2,3],[2,2,4]]}},49:{sequence:[_e,D,Un,I,Un,I,Un,D,_e],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,2,5],[4,0,0],[4,0,4]],front:[[5,5,3],[5,5,0],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,5],[2,2,3]]}},50:{sequence:[ge,I,Un,D,Un,D,Un,I,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[2,5,5],[0,0,4],[4,0,4]],front:[[5,5,3],[5,5,2],[5,5,0]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,0],[4,4,0],[4,4,0]],back:[[2,2,0],[2,2,0],[2,2,3]]}},51:{sequence:[ut,I,L,D,P,I,L,D,P,xt],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,0,4],[3,0,5],[5,0,2]],front:[[5,5,0],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,2],[3,3,0]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,3],[2,2,0],[2,2,0]]}},52:{sequence:[L,I,P,I,L,D,te,D,le,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,4,2],[0,0,0],[4,3,4]],front:[[5,5,0],[5,5,5],[5,5,5]],right:[[3,3,0],[3,3,0],[3,3,0]],left:[[4,4,3],[4,4,0],[4,4,3]],back:[[2,2,2],[2,2,2],[2,2,0]]}},53:{sequence:[Bi,Tt,Ft,I,Bt,D,Ft,I,Bt,I,ki],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,5,4],[3,0,0],[3,0,3]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,0],[4,4,5]],back:[[2,2,0],[2,2,2],[2,2,0]]}},54:{sequence:[_e,Tt,P,D,L,I,P,D,L,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[4,0,4],[4,0,0],[3,5,3]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,5],[3,3,0],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,5]],back:[[2,2,0],[2,2,2],[2,2,0]]}},55:{sequence:[P,ut,L,I,L,D,qt,xt,qt,D,P,I,L,I,P],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,5],[3,0,5],[2,0,2]],front:[[5,5,0],[5,5,0],[5,5,0]],right:[[3,3,3],[3,3,4],[3,3,4]],left:[[4,4,4],[4,4,2],[4,4,3]],back:[[2,2,0],[2,2,0],[2,2,0]]}},56:{sequence:[ge,D,_e,D,P,I,L,D,P,I,L,ge,I,_e],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[5,0,2],[2,0,3],[5,0,2]],front:[[5,5,4],[5,5,0],[5,5,3]],right:[[3,3,0],[3,3,5],[3,3,0]],left:[[4,4,0],[4,4,4],[4,4,0]],back:[[2,2,3],[2,2,0],[2,2,4]]}},57:{sequence:[L,I,P,D,Oe,I,L,D,ge],cubeState:{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[3,0,5],[0,0,0]],front:[[5,5,5],[5,5,0],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,0],[2,2,2]]}}};function am(r){const t=Object.keys(pa),e=["front","right","left","back"],n=[[0,2],[1,2],[2,2]],{dimensions:i}=ne,s=un("yellow");t:for(let o=0;o<t.length;o++){const a=pa[Number(t[o])];for(let c=0;c<i*i;c++){const l=c%i,u=Math.floor(c/i);if(r.top[l][u]===s&&a.cubeState.top[l][u]!==s||r.top[l][u]!==s&&a.cubeState.top[l][u]===s)continue t}for(let c=0;c<e.length;c++){const l=e[c];for(let u=0;u<n.length;u++){const[f,h]=n[u];if(r[l][f][h]===s&&a.cubeState[l][f][h]!==s||r[l][f][h]!==s&&a.cubeState[l][f][h]===s)continue t}}return a.sequence}}function lm(r,t){const e=cm(r);return t===0?[Bs,Fe,qt]:e}function cm(r){const t=am(r);return t||[I]}const Za=[{name:"Aa",sequence:[P,D,P,lt,L,D,P,vt,L,I,P,lt,L,I,P,vt,qt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,4],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,4],[2,2,2],[2,2,3]]}]},{name:"Ab",sequence:[P,le,L,D,L,vt,P,I,L,lt,qt,te,L],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,2]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,5],[4,4,4],[4,4,3]],back:[[2,2,4],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,5],[4,4,4],[4,4,5]],back:[[2,2,2],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,5]],back:[[2,2,5],[2,2,2],[2,2,2]]}]},{name:"F",sequence:[P,D,xt,L,I,P,D,P,ut,qt,D,P,D,L,I,P,I,L],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,3]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,2],[2,2,2]]}]},{name:"Ga",sequence:[qt,I,P,I,P,D,L,D,qt,D,vt,P,I,L,lt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,2],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,2]],back:[[2,2,2],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,5],[4,4,5]],back:[[2,2,2],[2,2,3],[2,2,2]]}]},{name:"Gb",sequence:[P,D,L,I,lt,qt,I,P,I,L,D,L,D,qt,vt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,5],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,3],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,5],[4,4,4]],back:[[2,2,4],[2,2,3],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,2],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,4],[5,5,4]],right:[[3,3,5],[3,3,2],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"Gc",sequence:[qt,D,L,D,L,I,P,I,qt,I,lt,L,D,P,vt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,5],[4,4,4]],back:[[2,2,3],[2,2,3],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,2]],left:[[4,4,2],[4,4,2],[4,4,4]],back:[[2,2,4],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,5],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,4],[2,2,2]]}]},{name:"Gd",sequence:[L,I,P,D,vt,qt,D,L,D,P,I,P,I,qt,lt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,2]],left:[[4,4,2],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,4],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,5],[4,4,2]],back:[[2,2,2],[2,2,3],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,2],[4,4,5]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"Ja",sequence:[Bt,D,Ft,ut,Bt,D,Ft,I,Ft,xt,Bs,I,Ft],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,2]],left:[[4,4,3],[4,4,3],[4,4,4]],back:[[2,2,4],[2,2,4],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,5],[4,4,5],[4,4,3]],back:[[2,2,4],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,2]],right:[[3,3,4],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,5],[4,4,5]],back:[[2,2,2],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,3],[5,5,3]],right:[[3,3,2],[3,3,2],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,5]],back:[[2,2,5],[2,2,5],[2,2,2]]}]},{name:"Jb",sequence:[L,I,P,xt,L,I,P,D,P,ut,qt,D,P],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,4]],left:[[4,4,2],[4,4,2],[4,4,2]],back:[[2,2,5],[2,2,3],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,2],[4,4,2]],back:[[2,2,2],[2,2,5],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,4],[5,5,4]],right:[[3,3,5],[3,3,5],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,3]],back:[[2,2,3],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,2]],right:[[3,3,4],[3,3,5],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,3],[2,2,3],[2,2,3]]}]},{name:"Ra",sequence:[L,D,P,D,L,I,L,vt,P,D,L,lt,P,Tt,P],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,4]],left:[[4,4,2],[4,4,3],[4,4,2]],back:[[2,2,5],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,5],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,2]],back:[[2,2,2],[2,2,3],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,2],[4,4,3]],back:[[2,2,3],[2,2,3],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,5]],left:[[4,4,2],[4,4,2],[4,4,4]],back:[[2,2,3],[2,2,5],[2,2,3]]}]},{name:"Rb",sequence:[qt,ut,L,I,L,D,P,xt,L,Tt,P,Tt,L],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,2],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,5]],back:[[2,2,2],[2,2,4],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,5],[4,4,5]],back:[[2,2,5],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,2]],left:[[4,4,3],[4,4,5],[4,4,4]],back:[[2,2,4],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,2]],left:[[4,4,5],[4,4,4],[4,4,3]],back:[[2,2,4],[2,2,5],[2,2,4]]}]},{name:"T",sequence:[L,I,P,D,P,ut,qt,D,P,D,L,I,P,xt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,4],[3,3,5]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,3],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,4]],back:[[2,2,4],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,5],[4,4,3],[4,4,2]],back:[[2,2,2],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,5]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"E",sequence:[P,D,P,lt,L,D,P,vt,L,I,P,lt,L,I,P,vt,qt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,4],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,3]],right:[[3,3,2],[3,3,3],[3,3,5]],left:[[4,4,5],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,4]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,3],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,2]],left:[[4,4,2],[4,4,4],[4,4,5]],back:[[2,2,4],[2,2,2],[2,2,3]]}]},{name:"Na",sequence:[L,I,P,I,L,I,P,xt,L,I,P,D,P,ut,qt,D,P,Tt,L,D,P],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,4]],left:[[4,4,4],[4,4,3],[4,4,3]],back:[[2,2,5],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,4]],left:[[4,4,4],[4,4,3],[4,4,3]],back:[[2,2,5],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,5]]}]},{name:"Nb",sequence:[P,I,L,D,P,xt,D,ut,L,I,P,ut,P,xt,L,D,L],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,4],[3,3,3]],left:[[4,4,3],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,4],[3,3,3]],left:[[4,4,3],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,5],[2,2,2]]}]},{name:"V",sequence:[P,I,P,D,L,lt,P,vt,P,I,lt,qt,D,qt,vt,qt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,2],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,3],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,2],[4,4,3]],back:[[2,2,5],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,5],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,2],[2,2,2]]}]},{name:"Y",sequence:[ut,L,D,P,D,L,I,P,xt,L,I,P,D,P,ut,L,xt],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,2]],right:[[3,3,4],[3,3,3],[3,3,3]],left:[[4,4,3],[4,4,2],[4,4,4]],back:[[2,2,2],[2,2,4],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,4]],left:[[4,4,4],[4,4,5],[4,4,3]],back:[[2,2,5],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,2]],right:[[3,3,4],[3,3,5],[3,3,3]],left:[[4,4,3],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,5]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,2],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,4]],left:[[4,4,4],[4,4,4],[4,4,3]],back:[[2,2,5],[2,2,3],[2,2,2]]}]},{name:"H",sequence:[Fe,I,Fe,Tt,Fe,I,Fe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"Ua",sequence:[Fe,I,Xn,Tt,Oe,I,Fe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,5],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,3],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,2],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,4],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,3]],left:[[4,4,4],[4,4,5],[4,4,4]],back:[[2,2,2],[2,2,4],[2,2,2]]}]},{name:"Ub",sequence:[Fe,D,,Xn,Tt,Oe,D,Fe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,3]],left:[[4,4,4],[4,4,3],[4,4,4]],back:[[2,2,2],[2,2,2],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,2],[5,5,5]],right:[[3,3,3],[3,3,5],[3,3,3]],left:[[4,4,4],[4,4,4],[4,4,4]],back:[[2,2,2],[2,2,3],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,5],[5,5,5]],right:[[3,3,3],[3,3,4],[3,3,3]],left:[[4,4,4],[4,4,2],[4,4,4]],back:[[2,2,2],[2,2,3],[2,2,2]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,5],[5,5,4],[5,5,5]],right:[[3,3,3],[3,3,3],[3,3,3]],left:[[4,4,4],[4,4,2],[4,4,4]],back:[[2,2,2],[2,2,5],[2,2,2]]}]},{name:"Z",sequence:[Oe,I,Fe,I,Fe,I,Oe,Tt,Fe],cubeStates:[{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,2],[4,4,3],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,2],[5,5,4]],right:[[3,3,5],[3,3,3],[3,3,5]],left:[[4,4,2],[4,4,4],[4,4,2]],back:[[2,2,3],[2,2,5],[2,2,3]]},{bottom:[[1,1,1],[1,1,1],[1,1,1]],top:[[0,0,0],[0,0,0],[0,0,0]],front:[[5,5,4],[5,5,5],[5,5,4]],right:[[3,3,5],[3,3,4],[3,3,5]],left:[[4,4,2],[4,4,3],[4,4,2]],back:[[2,2,3],[2,2,2],[2,2,3]]}]}];function um(r){const t=["front","right","back","left"],e=[[0,2],[1,2],[2,2]];for(let n=0;n<t.length;n++){const i=t[n],s=t[(n+1)%t.length];for(let o=0;o<e.length;o++){const[a,c]=e[o],l=e[(o+1)%e.length];if(r[i][a][c]!==r[s][l[0]][l[1]])return!1}}return!0}function hm(r){const t=Za.find(e=>{const n=e.cubeStates;return n?n.some(i=>JSON.stringify(r)===JSON.stringify(i)):!1});return t?t.name:"Unknown"}function fm(r){const t=hm(r);return t==="Unknown"?[I]:Za.find(n=>n.name===t).sequence}function dm(r){const{dimensions:t}=ne,{colors:e}=ne,n=e.findIndex(s=>s.name==="white");for(let s=0;s<t;s++)for(let o=0;o<t;o++)if(r.top[s][o]!==n)return!1;const i=["left","right","front","back"];for(const s of i)if(r[s][0][2]!==r[s][1][1]||r[s][2][2]!==r[s][1][1])return!1;return!0}function Ze(r){const{colors:t}=ne,e=t.findIndex(o=>o.name==="red"),n=t.findIndex(o=>o.name==="orange"),i=t.findIndex(o=>o.name==="green"),s=t.findIndex(o=>o.name==="blue");return r.includes(i)&&r.includes(e)?"gr":r.includes(i)&&r.includes(n)?"go":r.includes(e)&&r.includes(s)?"rb":r.includes(s)&&r.includes(n)?"bo":""}function Je(r,t,e,n){if(n==="bottom"){if(t===0&&e===0)return[r.left[0][0],r.back[2][0]];if(t===0&&e===2)return[r.left[2][0],r.front[0][0]];if(t===2&&e===0)return[r.right[2][0],r.back[0][0]];if(t===2&&e===2)return[r.right[0][0],r.front[2][0]]}if(n==="top"){if(t===0&&e===0)return[r.front[0][2],r.left[2][2]];if(t===0&&e===2)return[r.back[2][2],r.left[0][2]];if(t===2&&e===0)return[r.front[2][2],r.right[0][2]];if(t===2&&e===2)return[r.back[0][2],r.right[2][2]]}if(n==="front"){if(t===0&&e===0)return[r.bottom[0][2],r.left[2][0]];if(t===0&&e===2)return[r.top[0][0],r.left[2][2]];if(t===2&&e===0)return[r.bottom[2][2],r.right[0][0]];if(t===2&&e===2)return[r.top[2][0],r.right[0][2]]}if(n==="back"){if(t===0&&e===0)return[r.bottom[2][0],r.right[2][0]];if(t===0&&e===2)return[r.top[2][2],r.right[2][2]];if(t===2&&e===0)return[r.bottom[0][0],r.left[0][0]];if(t===2&&e===2)return[r.top[0][2],r.left[0][2]]}if(n==="left"){if(t===0&&e===0)return[r.bottom[0][0],r.back[2][0]];if(t===0&&e===2)return[r.top[0][2],r.back[2][2]];if(t===2&&e===0)return[r.bottom[0][2],r.front[0][0]];if(t===2&&e===2)return[r.top[0][0],r.front[0][2]]}if(n==="right"){if(t===0&&e===0)return[r.bottom[2][2],r.front[2][0]];if(t===0&&e===2)return[r.top[2][0],r.front[2][2]];if(t===2&&e===0)return[r.bottom[2][0],r.back[0][0]];if(t===2&&e===2)return[r.top[2][2],r.back[0][2]]}return[]}const Ae={gr:[P,ee,L,vt,P,lt,L],go:[xt,ee,ut,vt,xt,lt,ut],rb:[L,ee,P,lt,L,vt,P],bo:[Bt,ee,Ft,vt,Bt,lt,Ft]};function pm(r){const t=ne.colors.findIndex(e=>e.name==="white");if(r.bottom[0][0]===t){const e=Je(r,0,0,"bottom"),n=Ze(e);if(n==="gr")return[ee,...Ae[n]];if(n==="go")return[vt,...Ae[n]];if(n==="rb")return[lt,...Ae[n]];if(n==="bo")return[...Ae[n]]}if(r.bottom[0][2]===t){const e=Je(r,0,2,"bottom"),n=Ze(e);if(n==="gr")return[vt,...Ae[n]];if(n==="go")return[...Ae[n]];if(n==="rb")return[ee,...Ae[n]];if(n==="bo")return[lt,...Ae[n]]}if(r.bottom[2][0]===t){const e=Je(r,2,0,"bottom"),n=Ze(e);if(n==="gr")return[lt,...Ae[n]];if(n==="go")return[ee,...Ae[n]];if(n==="rb")return[...Ae[n]];if(n==="bo")return[vt,...Ae[n]]}if(r.bottom[2][2]===t){const e=Je(r,2,2,"bottom"),n=Ze(e);if(n==="gr")return[...Ae[n]];if(n==="go")return[ee,...Ae[n]];if(n==="rb")return[vt,...Ae[n]];if(n==="bo")return[vt,...Ae[n]]}if(r.front[0][0]===t){const e=Je(r,0,0,"front"),n=Ze(e);if(n==="gr")return[vt,P,lt,L];if(n==="go")return[xt,lt,ut];if(n==="rb")return[lt,P,lt,L];if(n==="bo")return[te,lt,le]}if(r.front[2][0]===t){const e=Je(r,2,0,"front"),n=Ze(e);if(n==="gr")return[lt,P,vt,L];if(n==="go")return[ee,xt,vt,ut];if(n==="rb")return[le,vt,te];if(n==="bo")return[vt,Bt,vt,Ft]}if(r.right[0][0]===t){const e=Je(r,0,0,"right"),n=Ze(e);if(n==="gr")return[P,lt,L];if(n==="go")return[Ft,lt,Bt];if(n==="rb")return[ee,L,lt,P];if(n==="bo")return[te,ee,le]}if(r.right[2][0]===t){const e=Je(r,2,0,"right"),n=Ze(e);if(n==="gr")return[ee,P,vt,L];if(n==="go")return[ee,Ft,vt,Bt];if(n==="rb")return[lt,le,vt,te];if(n==="bo")return[Bt,vt,Ft]}if(r.back[0][0]===t){const e=Je(r,0,0,"back"),n=Ze(e);if(n==="gr")return[ut,lt,xt];if(n==="go")return[Ft,ee,Bt];if(n==="rb")return[vt,L,lt,P];if(n==="bo")return[ee,te,lt,le]}if(r.back[2][0]===t){const e=Je(r,2,0,"back"),n=Ze(e);if(n==="gr")return[P,ee,L];if(n==="go")return[xt,vt,ut];if(n==="rb")return[lt,L,vt,P];if(n==="bo")return[lt,Ft,vt,Bt]}if(r.left[0][0]===t){const e=Je(r,0,0,"left"),n=Ze(e);if(n==="gr")return[ee,P,lt,L];if(n==="go")return[vt,xt,lt,ut];if(n==="rb")return[L,lt,P];if(n==="bo")return[Bt,lt,Ft]}if(r.left[2][0]===t){const e=Je(r,2,0,"left"),n=Ze(e);if(n==="gr")return[P,vt,L];if(n==="go")return[lt,xt,vt,ut];if(n==="rb")return[le,ee,te];if(n==="bo")return[ee,Bt,vt,Ft]}return r.front[0][2]===t?[xt,lt,ut]:r.front[2][2]===t?[P,lt,L]:r.right[0][2]===t?[P,lt,L]:r.right[2][2]===t?[le,lt,te]:r.back[0][2]===t?[le,lt,te]:r.back[2][2]===t?[Bt,lt,Ft]:r.left[0][2]===t?[Bt,lt,Ft]:r.left[2][2]===t?[xt,lt,ut]:r.top[0][0]===t?[Ft,lt,Bt]:r.top[2][0]===t?[P,lt,L]:r.top[0][2]===t?[Bt,lt,Ft]:r.top[2][2]===t?[L,lt,P]:[]}function fe(r,t,e,n){const i={color:-1,side:""};return n==="bottom"&&(t===0&&e===1&&(i.color=r.left[1][0],i.side="left"),t===1&&e===2&&(i.color=r.front[1][0],i.side="front"),t===2&&e===1&&(i.color=r.right[1][0],i.side="right"),t===1&&e===0&&(i.color=r.back[1][0],i.side="back")),n==="top"&&(t===1&&e===0&&(i.color=r.front[1][2],i.side="front"),t===2&&e===1&&(i.color=r.right[1][2],i.side="right"),t===1&&e===2&&(i.color=r.back[1][2],i.side="back"),t===0&&e===1&&(i.color=r.left[1][2],i.side="left")),n==="left"&&(t===0&&e===1&&(i.color=r.back[2][1],i.side="back"),t===1&&e===0&&(i.color=r.bottom[0][1],i.side="bottom"),t===2&&e===1&&(i.color=r.front[0][1],i.side="front"),t===1&&e===2&&(i.color=r.top[0][1],i.side="top")),n==="right"&&(t===0&&e===1&&(i.color=r.front[2][1],i.side="front"),t===1&&e===0&&(i.color=r.bottom[2][1],i.side="bottom"),t===2&&e===1&&(i.color=r.back[0][1],i.side="back"),t===1&&e===2&&(i.color=r.top[2][1],i.side="top")),n==="front"&&(t===0&&e===1&&(i.color=r.left[2][1],i.side="left"),t===1&&e===0&&(i.color=r.bottom[1][2],i.side="bottom"),t===2&&e===1&&(i.color=r.right[0][1],i.side="right"),t===1&&e===2&&(i.color=r.top[1][0],i.side="top")),n==="back"&&(t===0&&e===1&&(i.color=r.right[2][1],i.side="right"),t===1&&e===0&&(i.color=r.bottom[1][0],i.side="bottom"),t===2&&e===1&&(i.color=r.left[0][1],i.side="left"),t===1&&e===2&&(i.color=r.top[1][2],i.side="top")),i}function mm(r){const t=r.top,{colors:e}=ne,n=e.findIndex(i=>i.name==="white");return!(t[0][1]!==n||t[1][2]!==n||t[2][1]!==n||t[1][0]!==n||r.front[1][2]!==r.front[1][1]||r.right[1][2]!==r.right[1][1]||r.back[1][2]!==r.back[1][1]||r.left[1][2]!==r.left[1][1])}function gm(r){const t=[],{dimensions:e,colors:n}=ne,i=n.findIndex(s=>s.name==="white");for(let s=0;s<e;s++)for(let o=0;o<e;o++)if(!bm(s,o)&&r.bottom[s][o]===i){const a=fe(r,s,o,"bottom"),c=he[a.color];if(c==="left"&&(a.side==="front"&&t.push(lt),a.side==="back"&&t.push(vt),a.side==="right"&&t.push(ee)),c==="front"&&(a.side==="left"&&t.push(vt),a.side==="back"&&t.push(ee),a.side==="right"&&t.push(lt)),c==="right"&&(a.side==="left"&&t.push(ee),a.side==="back"&&t.push(lt),a.side==="front"&&t.push(vt)),c==="back"&&(a.side==="left"&&t.push(lt),a.side==="right"&&t.push(vt),a.side==="front"&&t.push(ee)),c==="back"&&t.push(da),c==="left"&&t.push(Bs),c==="front"&&t.push(Ya),c==="right"&&t.push(qt),t.length)return t}if(r.front[1][0]===i){const s=fe(r,1,0,"front"),o=he[s.color];if(o==="front"&&t.push(ut,I,Bt,D),o==="left"&&t.push(lt,Bt,D,ut,I),o==="back"&&t.push(vt,I,P,D,te),o==="right"&&t.push(I,xt,D,L),t.length)return t}if(r.right[1][0]===i){const s=fe(r,1,0,"right"),o=he[s.color];if(o==="right"&&t.push(L,I,xt,D),o==="front"&&t.push(lt,xt,D,L,I),o==="back"&&t.push(D,P,I,te),o==="left"&&t.push(lt,D,ut,I,Ft),t.length)return t}if(r.left[1][0]===i){const s=fe(r,1,0,"left"),o=he[s.color];if(o==="left"&&t.push(Ft,D,ut,D),o==="front"&&t.push(I,Bt,D,ut),o==="right"&&t.push(vt,ut,L,xt),o==="back"&&t.push(Ft,le,Bt),t.length)return t}if(r.back[1][0]===i){const s=fe(r,1,0,"back"),o=he[s.color];if(o==="back"&&t.push(te,I,P,D),o==="right"&&t.push(I,da,D),o==="left"&&t.push(le,Ft,te),o==="front"&&t.push(lt,L,xt,P),t.length)return t}if(r.front[0][1]===i){const s=fe(r,0,1,"front"),o=he[s.color];if(o==="front"&&t.push(I,Bt,D),o==="left"&&t.push(Bt),o==="back"&&t.push(D,Bt,I),o==="right"&&t.push(Tt,Bt,Tt),t.length)return t}if(r.front[2][1]===i){const s=fe(r,2,1,"front"),o=he[s.color];if(o==="front"&&t.push(D,L,I),o==="right"&&t.push(L),o==="back"&&t.push(I,L,D),o==="left"&&t.push(Tt,L,Tt),t.length)return t}if(r.right[0][1]===i){const s=fe(r,0,1,"right"),o=he[s.color];if(o==="right"&&t.push(I,xt,D),o==="front"&&t.push(xt),o==="back"&&t.push(Tt,xt,Tt),o==="left"&&t.push(D,xt,I),t.length)return t}if(r.right[2][1]===i){const s=fe(r,2,1,"right"),o=he[s.color];if(o==="right"&&t.push(D,te,I),o==="back"&&t.push(te),o==="left"&&t.push(I,te,D),o==="front"&&t.push(Tt,te,Tt),t.length)return t}if(r.left[0][1]===i){const s=fe(r,0,1,"left"),o=he[s.color];if(o==="left"&&t.push(I,le,D),o==="back"&&t.push(le),o==="front"&&t.push(Tt,le,Tt),o==="right"&&t.push(D,le,I),t.length)return t}if(r.left[2][1]===i){const s=fe(r,2,1,"left"),o=he[s.color];if(o==="left"&&t.push(D,ut,I),o==="front"&&t.push(ut),o==="back"&&t.push(Tt,ut,Tt),o==="right"&&t.push(I,ut,D),t.length)return t}if(r.back[0][1]===i){const s=fe(r,0,1,"back"),o=he[s.color];if(o==="back"&&t.push(I,P,D),o==="right"&&t.push(P),o==="left"&&t.push(Tt,P,Tt),o==="front"&&t.push(D,P,I),t.length)return t}if(r.back[2][1]===i){const s=fe(r,2,1,"back"),o=he[s.color];if(o==="back"&&t.push(D,Ft,I),o==="left"&&t.push(Ft),o==="right"&&t.push(Tt,Ft,Tt),o==="front"&&t.push(I,Ft,D),t.length)return t}if(r.top[1][0]===i){const s=fe(r,1,0,"top"),o=he[s.color];if(o==="left"&&t.push(ut,D,xt,I),o==="back"&&t.push(ut,Tt,xt,Tt),o==="right"&&t.push(ut,I,xt,D),t.length)return t}if(r.top[2][1]===i){const s=fe(r,2,1,"top"),o=he[s.color];if(o==="front"&&t.push(P,D,L,I),o==="back"&&t.push(P,I,L,D),o==="left"&&t.push(L,Tt,P,Tt),t.length)return t}if(r.top[1][2]===i){const s=fe(r,1,2,"top"),o=he[s.color];if(o==="right"&&t.push(te,D,le,I),o==="front"&&t.push(te,Tt,le,Tt),o==="left"&&t.push(te,I,le,D),t.length)return t}if(r.top[0][1]===i){const s=fe(r,0,1,"top"),o=he[s.color];if(o==="back"&&t.push(Bt,D,Ft,I),o==="front"&&t.push(Bt,I,Ft,D),o==="right"&&t.push(Ft,Tt,Bt,Tt),t.length)return t}if(r.front[1][2]===i){const s=fe(r,1,2,"front"),o=he[s.color];if(o==="right"&&t.push(ut,L),o==="back"&&t.push(ut,I,L,D),o==="left"&&t.push(xt,Bt),o==="front"&&t.push(ut,D,L,I),t.length)return t}if(r.right[1][2]===i){const s=fe(r,1,2,"right"),o=he[s.color];if(o==="back"&&t.push(L,te),o==="left"&&t.push(L,I,te,D),o==="front"&&t.push(P,xt),o==="right"&&t.push(L,D,te,I),t.length)return t}if(r.back[1][2]===i){const s=fe(r,1,2,"back"),o=he[s.color];if(o==="left"&&t.push(te,Ft),o==="front"&&t.push(te,I,Ft,D),o==="right"&&t.push(le,P),o==="back"&&t.push(te,D,Ft,I),t.length)return t}if(r.left[1][2]===i){const s=fe(r,1,2,"left"),o=he[s.color];if(o==="front"&&t.push(Ft,ut),o==="right"&&t.push(Ft,I,ut,D),o==="back"&&t.push(Bt,le),o==="left"&&t.push(Ft,D,ut,I),t.length)return t}return[]}function Ke(r){return JSON.parse(JSON.stringify(r))}function Ja(r){const t=[];return r.forEach(e=>{t.push(...e())}),t}function gi(r,t=!0){const e=Ke(r),n=e.length,i=e[0].length,s=[];for(let o=0;o<i;o++)s[o]=new Array(n);if(t)for(let o=0;o<n;o++)for(let a=0;a<i;a++)s[a][n-o-1]=e[o][a];else for(let o=0;o<n;o++)for(let a=0;a<i;a++)s[i-a-1][o]=e[o][a];return s}async function Rs(r,t,e=!1){const n=Array.from({length:ne.dimensions},(o,a)=>a),s={r:e?1:3,l:e?3:1,u:e?3:1,d:e?1:3,f:e?3:1,b:e?3:1,m:e?3:1}[t];for(let o=0;o<s;o++){const a=Ke(r.bottom),c=Ke(r.right),l=Ke(r.left),u=Ke(r.back),f=Ke(r.top);if(t==="u"||t==="d"){const h=Ke(r.front),m=t==="d"?0:ne.dimensions-1;n.forEach(g=>{r.front[g][m]=c[g][m],r.right[g][m]=u[g][m],r.back[g][m]=l[g][m],r.left[g][m]=h[g][m]}),t==="u"?r.top=gi(r.top):t==="d"&&(r.bottom=gi(r.bottom,!1))}if(t==="l"||t==="r"){const h=Ke(r.front),m=t==="l"?0:ne.dimensions-1,g=m===0?ne.dimensions-1:0;n.forEach(p=>{const d=ne.dimensions-1-p;r.front[m][p]=f[m][p],r.top[m][p]=u[g][d],r.back[g][d]=a[m][p],r.bottom[m][p]=h[m][p]}),t==="l"?r.left=gi(r.left):t==="r"&&(r.right=gi(r.right,!1))}if(t==="f"){const h=Ke(r.top),m=0,g=ne.dimensions-1;n.forEach(p=>{const d=ne.dimensions-1-p;r.top[d][m]=l[g][d],r.left[g][d]=a[p][g],r.bottom[p][g]=c[m][p],r.right[m][p]=h[d][m]}),r.front=gi(r.front)}if(t==="b"){const h=Ke(r.top),m=ne.dimensions-1,g=0;n.forEach(p=>{const d=ne.dimensions-1-p;r.top[d][m]=c[m][p],r.right[m][p]=a[p][g],r.bottom[p][g]=l[g][d],r.left[g][d]=h[d][m],r.back=gi(r.back,!1)})}if(t==="m"){const h=Ke(r.front),m=Math.floor(ne.dimensions/2);n.forEach(g=>{const p=ne.dimensions-1-g;r.front[m][g]=f[m][g],r.top[m][g]=u[m][p],r.back[m][p]=a[m][g],r.bottom[m][g]=h[m][g]})}}return r}async function _m(r,t){const e=Ke(r),n=Ja(t);for(let i=0;i<n.length;i++){const{move:s,inverted:o}=n[i];await Rs(e,s,o)}return e}async function xm(r){const t=[];let e=r;return e=await _i(e,mm,gm,t,"White Cross"),e=await _i(e,dm,pm,t,"White Corners"),e=await _i(e,()=>!1,sm,t,"F2L"),e=await _i(e,om,lm,t,"OLL"),e=await _i(e,um,fm,t,"PLL"),e=await _i(e,vm,()=>[I],t,"Last Layer"),t}async function _i(r,t,e,n,i){console.log("Solving: "+i);let s=0;for(;!t(r);){const o=e(r,s);if(!o.length||(n.push(...o),r=await _m(r,o),s++,s>10))break}return r}function vm(r){const t=["front","back","left","right","top","bottom"];for(const e of t)for(let n=0;n<ne.dimensions;n++)for(let i=0;i<ne.dimensions;i++)if(r[e][n][i]!==r[e][1][1])return!1;return!0}function bm(r,t){const{dimensions:e}=ne;return r===0&&t===0||r===0&&t===e-1||r===e-1&&t===0||r===e-1&&t===e-1}function ym(){let r=Yp;const t=[];function e(s=!1){s||(Yn.remove(...t),t.length=0),Object.values(r).forEach((o,a)=>{const c=new Ve,l=tm({id:a,state:o});c.add(l.elements[0]);const u={x:a===0?Math.PI/2:a===1?-Math.PI/2:0,y:a===3?Math.PI/2:a===4?-Math.PI/2:a===5?Math.PI:0,z:0};c.rotation.set(u.x,u.y,u.z),t.push(c)}),s||Yn.add(...t)}async function n(s){if(s.key===" "){const o=im();for(let a=0;a<o.length;a++){const{move:c,inverted:l}=o[a];await fa(t,c,l),await Rs(r,c,l),e()}}if(s.key==="Enter"){const o=Date.now(),a=Ja(await xm(r));console.log("Solve time: "+(Date.now()-o)+"ms"),console.log("Solve length: "+a.length+" moves");for(let c=0;c<a.length;c++){const{move:l,inverted:u}=a[c];await fa(t,l,u),await Rs(r,l,u),e()}}}return window.addEventListener("keydown",n),e(!0),{elements:[{elements:t}]}}const{scene:Yn,camera:kn,renderer:Gi}=Sm();function Sm(){const r=new lp,t=new je(90,window.innerWidth/window.innerHeight,.1,1e3),e=new Fs({antialias:!0});return{scene:r,camera:t,renderer:e}}const Ka=[];function Mm(){Ka.push(ym()),wm()}function wm(){const r=[];Em(Yn,Ka,r),new Xp(kn,Gi.domElement),Yn.background=new se(ne.canvasColor);const{initialCameraPosition:t}=ne;kn.position.z=t.z,kn.position.y=t.y,kn.position.x=t.x,Gi.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Gi.domElement),document.addEventListener("mousedown",()=>document.body.style.cursor="none"),document.addEventListener("mouseup",()=>document.body.style.cursor="auto");function e(){kn.aspect=window.innerWidth/window.innerHeight,kn.updateProjectionMatrix(),Gi.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",e);function n(){requestAnimationFrame(n),Gi.render(Yn,kn),r.forEach(i=>i())}n()}function Em(r,t,e){t.forEach(n=>$a(r,n,e))}function $a(r,t,e){t.elements.forEach(n=>{n.elements?$a(r,n,e):r.add(n),n.animate&&e.push(n.animate)})}Mm();
