import{a as T,w as S,j as r}from"./index-zPDRNrwI.js";import{R as _,h as L,e as z}from"./react-kJeE4wWB.js";import{P as F}from"./index-7M24z6DG.js";var U=Object.defineProperty,M=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,R=(b,i,e)=>i in b?U(b,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):b[i]=e,p=(b,i)=>{for(var e in i||(i={}))v.call(i,e)&&R(b,e,i[e]);if(M)for(var e of M(i))B.call(i,e)&&R(b,e,i[e]);return b},Q=(b,i)=>{var e={};for(var n in b)v.call(b,n)&&i.indexOf(n)<0&&(e[n]=b[n]);if(b!=null&&M)for(var n of M(b))i.indexOf(n)<0&&B.call(b,n)&&(e[n]=b[n]);return e};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var w;(b=>{const i=class{constructor(s,l,o,d){if(this.version=s,this.errorCorrectionLevel=l,this.modules=[],this.isFunction=[],s<i.MIN_VERSION||s>i.MAX_VERSION)throw new RangeError("Version value out of range");if(d<-1||d>7)throw new RangeError("Mask value out of range");this.size=s*4+17;let t=[];for(let c=0;c<this.size;c++)t.push(!1);for(let c=0;c<this.size;c++)this.modules.push(t.slice()),this.isFunction.push(t.slice());this.drawFunctionPatterns();const h=this.addEccAndInterleave(o);if(this.drawCodewords(h),d==-1){let c=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const u=this.getPenaltyScore();u<c&&(d=x,c=u),this.applyMask(x)}}a(0<=d&&d<=7),this.mask=d,this.applyMask(d),this.drawFormatBits(d),this.isFunction=[]}static encodeText(s,l){const o=b.QrSegment.makeSegments(s);return i.encodeSegments(o,l)}static encodeBinary(s,l){const o=b.QrSegment.makeBytes(s);return i.encodeSegments([o],l)}static encodeSegments(s,l,o=1,d=40,t=-1,h=!0){if(!(i.MIN_VERSION<=o&&o<=d&&d<=i.MAX_VERSION)||t<-1||t>7)throw new RangeError("Invalid value");let c,x;for(c=o;;c++){const j=i.getNumDataCodewords(c,l)*8,g=m.getTotalBits(s,c);if(g<=j){x=g;break}if(c>=d)throw new RangeError("Data too long")}for(const j of[i.Ecc.MEDIUM,i.Ecc.QUARTILE,i.Ecc.HIGH])h&&x<=i.getNumDataCodewords(c,j)*8&&(l=j);let u=[];for(const j of s){n(j.mode.modeBits,4,u),n(j.numChars,j.mode.numCharCountBits(c),u);for(const g of j.getData())u.push(g)}a(u.length==x);const E=i.getNumDataCodewords(c,l)*8;a(u.length<=E),n(0,Math.min(4,E-u.length),u),n(0,(8-u.length%8)%8,u),a(u.length%8==0);for(let j=236;u.length<E;j^=253)n(j,8,u);let k=[];for(;k.length*8<u.length;)k.push(0);return u.forEach((j,g)=>k[g>>>3]|=j<<7-(g&7)),new i(c,l,k,t)}getModule(s,l){return 0<=s&&s<this.size&&0<=l&&l<this.size&&this.modules[l][s]}getModules(){return this.modules}drawFunctionPatterns(){for(let o=0;o<this.size;o++)this.setFunctionModule(6,o,o%2==0),this.setFunctionModule(o,6,o%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const s=this.getAlignmentPatternPositions(),l=s.length;for(let o=0;o<l;o++)for(let d=0;d<l;d++)o==0&&d==0||o==0&&d==l-1||o==l-1&&d==0||this.drawAlignmentPattern(s[o],s[d]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(s){const l=this.errorCorrectionLevel.formatBits<<3|s;let o=l;for(let t=0;t<10;t++)o=o<<1^(o>>>9)*1335;const d=(l<<10|o)^21522;a(d>>>15==0);for(let t=0;t<=5;t++)this.setFunctionModule(8,t,N(d,t));this.setFunctionModule(8,7,N(d,6)),this.setFunctionModule(8,8,N(d,7)),this.setFunctionModule(7,8,N(d,8));for(let t=9;t<15;t++)this.setFunctionModule(14-t,8,N(d,t));for(let t=0;t<8;t++)this.setFunctionModule(this.size-1-t,8,N(d,t));for(let t=8;t<15;t++)this.setFunctionModule(8,this.size-15+t,N(d,t));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let s=this.version;for(let o=0;o<12;o++)s=s<<1^(s>>>11)*7973;const l=this.version<<12|s;a(l>>>18==0);for(let o=0;o<18;o++){const d=N(l,o),t=this.size-11+o%3,h=Math.floor(o/3);this.setFunctionModule(t,h,d),this.setFunctionModule(h,t,d)}}drawFinderPattern(s,l){for(let o=-4;o<=4;o++)for(let d=-4;d<=4;d++){const t=Math.max(Math.abs(d),Math.abs(o)),h=s+d,c=l+o;0<=h&&h<this.size&&0<=c&&c<this.size&&this.setFunctionModule(h,c,t!=2&&t!=4)}}drawAlignmentPattern(s,l){for(let o=-2;o<=2;o++)for(let d=-2;d<=2;d++)this.setFunctionModule(s+d,l+o,Math.max(Math.abs(d),Math.abs(o))!=1)}setFunctionModule(s,l,o){this.modules[l][s]=o,this.isFunction[l][s]=!0}addEccAndInterleave(s){const l=this.version,o=this.errorCorrectionLevel;if(s.length!=i.getNumDataCodewords(l,o))throw new RangeError("Invalid argument");const d=i.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][l],t=i.ECC_CODEWORDS_PER_BLOCK[o.ordinal][l],h=Math.floor(i.getNumRawDataModules(l)/8),c=d-h%d,x=Math.floor(h/d);let u=[];const E=i.reedSolomonComputeDivisor(t);for(let j=0,g=0;j<d;j++){let A=s.slice(g,g+x-t+(j<c?0:1));g+=A.length;const O=i.reedSolomonComputeRemainder(A,E);j<c&&A.push(0),u.push(A.concat(O))}let k=[];for(let j=0;j<u[0].length;j++)u.forEach((g,A)=>{(j!=x-t||A>=c)&&k.push(g[j])});return a(k.length==h),k}drawCodewords(s){if(s.length!=Math.floor(i.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let l=0;for(let o=this.size-1;o>=1;o-=2){o==6&&(o=5);for(let d=0;d<this.size;d++)for(let t=0;t<2;t++){const h=o-t,x=(o+1&2)==0?this.size-1-d:d;!this.isFunction[x][h]&&l<s.length*8&&(this.modules[x][h]=N(s[l>>>3],7-(l&7)),l++)}}a(l==s.length*8)}applyMask(s){if(s<0||s>7)throw new RangeError("Mask value out of range");for(let l=0;l<this.size;l++)for(let o=0;o<this.size;o++){let d;switch(s){case 0:d=(o+l)%2==0;break;case 1:d=l%2==0;break;case 2:d=o%3==0;break;case 3:d=(o+l)%3==0;break;case 4:d=(Math.floor(o/3)+Math.floor(l/2))%2==0;break;case 5:d=o*l%2+o*l%3==0;break;case 6:d=(o*l%2+o*l%3)%2==0;break;case 7:d=((o+l)%2+o*l%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[l][o]&&d&&(this.modules[l][o]=!this.modules[l][o])}}getPenaltyScore(){let s=0;for(let t=0;t<this.size;t++){let h=!1,c=0,x=[0,0,0,0,0,0,0];for(let u=0;u<this.size;u++)this.modules[t][u]==h?(c++,c==5?s+=i.PENALTY_N1:c>5&&s++):(this.finderPenaltyAddHistory(c,x),h||(s+=this.finderPenaltyCountPatterns(x)*i.PENALTY_N3),h=this.modules[t][u],c=1);s+=this.finderPenaltyTerminateAndCount(h,c,x)*i.PENALTY_N3}for(let t=0;t<this.size;t++){let h=!1,c=0,x=[0,0,0,0,0,0,0];for(let u=0;u<this.size;u++)this.modules[u][t]==h?(c++,c==5?s+=i.PENALTY_N1:c>5&&s++):(this.finderPenaltyAddHistory(c,x),h||(s+=this.finderPenaltyCountPatterns(x)*i.PENALTY_N3),h=this.modules[u][t],c=1);s+=this.finderPenaltyTerminateAndCount(h,c,x)*i.PENALTY_N3}for(let t=0;t<this.size-1;t++)for(let h=0;h<this.size-1;h++){const c=this.modules[t][h];c==this.modules[t][h+1]&&c==this.modules[t+1][h]&&c==this.modules[t+1][h+1]&&(s+=i.PENALTY_N2)}let l=0;for(const t of this.modules)l=t.reduce((h,c)=>h+(c?1:0),l);const o=this.size*this.size,d=Math.ceil(Math.abs(l*20-o*10)/o)-1;return a(0<=d&&d<=9),s+=d*i.PENALTY_N4,a(0<=s&&s<=2568888),s}getAlignmentPatternPositions(){if(this.version==1)return[];{const s=Math.floor(this.version/7)+2,l=this.version==32?26:Math.ceil((this.version*4+4)/(s*2-2))*2;let o=[6];for(let d=this.size-7;o.length<s;d-=l)o.splice(1,0,d);return o}}static getNumRawDataModules(s){if(s<i.MIN_VERSION||s>i.MAX_VERSION)throw new RangeError("Version number out of range");let l=(16*s+128)*s+64;if(s>=2){const o=Math.floor(s/7)+2;l-=(25*o-10)*o-55,s>=7&&(l-=36)}return a(208<=l&&l<=29648),l}static getNumDataCodewords(s,l){return Math.floor(i.getNumRawDataModules(s)/8)-i.ECC_CODEWORDS_PER_BLOCK[l.ordinal][s]*i.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][s]}static reedSolomonComputeDivisor(s){if(s<1||s>255)throw new RangeError("Degree out of range");let l=[];for(let d=0;d<s-1;d++)l.push(0);l.push(1);let o=1;for(let d=0;d<s;d++){for(let t=0;t<l.length;t++)l[t]=i.reedSolomonMultiply(l[t],o),t+1<l.length&&(l[t]^=l[t+1]);o=i.reedSolomonMultiply(o,2)}return l}static reedSolomonComputeRemainder(s,l){let o=l.map(d=>0);for(const d of s){const t=d^o.shift();o.push(0),l.forEach((h,c)=>o[c]^=i.reedSolomonMultiply(h,t))}return o}static reedSolomonMultiply(s,l){if(s>>>8||l>>>8)throw new RangeError("Byte out of range");let o=0;for(let d=7;d>=0;d--)o=o<<1^(o>>>7)*285,o^=(l>>>d&1)*s;return a(o>>>8==0),o}finderPenaltyCountPatterns(s){const l=s[1];a(l<=this.size*3);const o=l>0&&s[2]==l&&s[3]==l*3&&s[4]==l&&s[5]==l;return(o&&s[0]>=l*4&&s[6]>=l?1:0)+(o&&s[6]>=l*4&&s[0]>=l?1:0)}finderPenaltyTerminateAndCount(s,l,o){return s&&(this.finderPenaltyAddHistory(l,o),l=0),l+=this.size,this.finderPenaltyAddHistory(l,o),this.finderPenaltyCountPatterns(o)}finderPenaltyAddHistory(s,l){l[0]==0&&(s+=this.size),l.pop(),l.unshift(s)}};let e=i;e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],b.QrCode=e;function n(s,l,o){if(l<0||l>31||s>>>l)throw new RangeError("Value out of range");for(let d=l-1;d>=0;d--)o.push(s>>>d&1)}function N(s,l){return(s>>>l&1)!=0}function a(s){if(!s)throw new Error("Assertion error")}const f=class{constructor(s,l,o){if(this.mode=s,this.numChars=l,this.bitData=o,l<0)throw new RangeError("Invalid argument");this.bitData=o.slice()}static makeBytes(s){let l=[];for(const o of s)n(o,8,l);return new f(f.Mode.BYTE,s.length,l)}static makeNumeric(s){if(!f.isNumeric(s))throw new RangeError("String contains non-numeric characters");let l=[];for(let o=0;o<s.length;){const d=Math.min(s.length-o,3);n(parseInt(s.substr(o,d),10),d*3+1,l),o+=d}return new f(f.Mode.NUMERIC,s.length,l)}static makeAlphanumeric(s){if(!f.isAlphanumeric(s))throw new RangeError("String contains unencodable characters in alphanumeric mode");let l=[],o;for(o=0;o+2<=s.length;o+=2){let d=f.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o))*45;d+=f.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o+1)),n(d,11,l)}return o<s.length&&n(f.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o)),6,l),new f(f.Mode.ALPHANUMERIC,s.length,l)}static makeSegments(s){return s==""?[]:f.isNumeric(s)?[f.makeNumeric(s)]:f.isAlphanumeric(s)?[f.makeAlphanumeric(s)]:[f.makeBytes(f.toUtf8ByteArray(s))]}static makeEci(s){let l=[];if(s<0)throw new RangeError("ECI assignment value out of range");if(s<128)n(s,8,l);else if(s<16384)n(2,2,l),n(s,14,l);else if(s<1e6)n(6,3,l),n(s,21,l);else throw new RangeError("ECI assignment value out of range");return new f(f.Mode.ECI,0,l)}static isNumeric(s){return f.NUMERIC_REGEX.test(s)}static isAlphanumeric(s){return f.ALPHANUMERIC_REGEX.test(s)}getData(){return this.bitData.slice()}static getTotalBits(s,l){let o=0;for(const d of s){const t=d.mode.numCharCountBits(l);if(d.numChars>=1<<t)return 1/0;o+=4+t+d.bitData.length}return o}static toUtf8ByteArray(s){s=encodeURI(s);let l=[];for(let o=0;o<s.length;o++)s.charAt(o)!="%"?l.push(s.charCodeAt(o)):(l.push(parseInt(s.substr(o+1,2),16)),o+=2);return l}};let m=f;m.NUMERIC_REGEX=/^[0-9]*$/,m.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,m.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",b.QrSegment=m})(w||(w={}));(b=>{(i=>{const e=class{constructor(N,a){this.ordinal=N,this.formatBits=a}};let n=e;n.LOW=new e(0,1),n.MEDIUM=new e(1,0),n.QUARTILE=new e(2,3),n.HIGH=new e(3,2),i.Ecc=n})(b.QrCode||(b.QrCode={}))})(w||(w={}));(b=>{(i=>{const e=class{constructor(N,a){this.modeBits=N,this.numBitsCharCount=a}numCharCountBits(N){return this.numBitsCharCount[Math.floor((N+7)/17)]}};let n=e;n.NUMERIC=new e(1,[10,12,14]),n.ALPHANUMERIC=new e(2,[9,11,13]),n.BYTE=new e(4,[8,16,16]),n.KANJI=new e(8,[8,10,12]),n.ECI=new e(7,[0,0,0]),i.Mode=n})(b.QrSegment||(b.QrSegment={}))})(w||(w={}));var C=w;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var H={L:C.QrCode.Ecc.LOW,M:C.QrCode.Ecc.MEDIUM,Q:C.QrCode.Ecc.QUARTILE,H:C.QrCode.Ecc.HIGH},Y=128,$="L",G="#FFFFFF",W="#000000",K=!1,I=4,V=.1;function X(b,i=0){const e=[];return b.forEach(function(n,N){let a=null;n.forEach(function(f,m){if(!f&&a!==null){e.push("M".concat(a+i," ").concat(N+i,"h").concat(m-a,"v1H").concat(a+i,"z")),a=null;return}if(m===n.length-1){if(!f)return;a===null?e.push("M".concat(m+i,",").concat(N+i," h1v1H").concat(m+i,"z")):e.push("M".concat(a+i,",").concat(N+i," h").concat(m+1-a,"v1H").concat(a+i,"z"));return}f&&a===null&&(a=m)})}),e.join("")}function Z(b,i){return b.slice().map((e,n)=>n<i.y||n>=i.y+i.h?e:e.map((N,a)=>a<i.x||a>=i.x+i.w?N:!1))}function J(b,i,e,n){if(n==null)return null;const N=e?I:0,a=b.length+N*2,f=Math.floor(i*V),m=a/i,s=(n.width||f)*m,l=(n.height||f)*m,o=n.x==null?b.length/2-s/2:n.x*m,d=n.y==null?b.length/2-l/2:n.y*m;let t=null;if(n.excavate){let h=Math.floor(o),c=Math.floor(d),x=Math.ceil(s+o-h),u=Math.ceil(l+d-c);t={x:h,y:c,w:x,h:u}}return{x:o,y:d,h:l,w:s,excavation:t}}(function(){try{new Path2D().addPath(new Path2D)}catch(b){return!1}return!0})();function P(b){const i=b,{value:e,size:n=Y,level:N=$,bgColor:a=G,fgColor:f=W,includeMargin:m=K,imageSettings:s}=i,l=Q(i,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let o=C.QrCode.encodeText(e,H[N]).getModules();const d=m?I:0,t=o.length+d*2,h=J(o,n,m,s);let c=null;s!=null&&h!=null&&(h.excavation!=null&&(o=Z(o,h.excavation)),c=_.createElement("image",{xlinkHref:s.src,height:h.h,width:h.w,x:h.x+d,y:h.y+d,preserveAspectRatio:"none"}));const x=X(o,d);return _.createElement("svg",p({height:n,width:n,viewBox:"0 0 ".concat(t," ").concat(t)},l),_.createElement("path",{fill:a,d:"M0,0 h".concat(t,"v").concat(t,"H0z"),shapeRendering:"crispEdges"}),_.createElement("path",{fill:f,d:x,shapeRendering:"crispEdges"}),c)}function ee(){var a;const{id:b}=L(),i=T({api:S.waterDemandReceipt,config:{consumerId:b},options:{enabled:!!b}}),e=(a=i==null?void 0:i.data)==null?void 0:a.data,n="  AKOLA MUNICIPAL CORPORATION\nAkola Water Supply (Water Bill)  \n********************************\nConsumer No / ग्राहक क्रमांक: "+(e==null?void 0:e.consumer_no)+"\nFrom /पासून: "+(e==null?void 0:e.currrent_quarter)+"\nTo /पर्यंत: "+(e==null?void 0:e.generation_date)+"\nBill No / बिल क्रमांक: "+(e==null?void 0:e.demand_no)+"\nTax No /कर क्र: "+(e==null?void 0:e.folio_no)+"\nBill Date / बिल तारीख: "+(e==null?void 0:e.billDate)+"\nBill Due Date/बिल देय तारीख:\n"+(e==null?void 0:e.bilDueDate)+"\nConsumer Name/ग्राहक नाव: "+(e==null?void 0:e.applicant_name)+"\nConsumer Address/ ग्राहक पत्ता: "+(e==null?void 0:e.address)+"\nConnection Type जोडणीचा प्रकार: \n"+(e==null?void 0:e.category)+"\nTap size जोडणीचा आकार: "+(e==null?void 0:e.tab_size)+"\nZone झोन: "+(e==null?void 0:e.zone)+"\nOld Property no जुना मालमत्ता क्रमांक: "+(e==null?void 0:e.property_no)+"\nNew Property no नवीन मालमत्ता क्रमांक: "+(e==null?void 0:e.folio_no)+"\nMeter no मीटर क्र: "+(e==null?void 0:e.meter_no)+"\nCurrent Reading वर्तमान वाचन मागील: "+(e==null?void 0:e.finalReading)+"/"+(e==null?void 0:e.generation_date)+"\nPrev Reading मागील वाचन: "+(e==null?void 0:e.initialReading)+"/"+(e==null?void 0:e.arrear_demand_date)+"\nUnit वापरलेली एकूण युनिट: "+(e==null?void 0:e.unitConsumed)+"\nMeter Status मीटर स्थिती: "+(e==null?void 0:e.connection_type)+"\n********************************\nMob No: "+(e==null?void 0:e.mobile_no)+"\nBill No/बिल क्र: "+(e==null?void 0:e.demand_no)+"\nBill Date/ बिल तारीख: "+(e==null?void 0:e.billDate)+"\nBill Due/ बिल देय: "+(e==null?void 0:e.bilDueDate)+"\n\n\nBill Outstanding Details देय रक्कम विवरण: \n********************************\nCur Bill Amount / रक्कम चालू देयक राशी: "+(e==null?void 0:e.curernt_bill)+"\nLast Arrear /शेवटचे वर्षाची थकबाकी: \n"+(e==null?void 0:e.arrear_demands)+"\nAdjustment Bill/समायोजन विधेयक: 0\nTotal Outstanding/समायोजन विधेयक: "+(e==null?void 0:e.total_amount)+"\n********************************\nTc Name: "+(e==null?void 0:e.empName)+"\nGenerated Date: "+(e==null?void 0:e.generation_date)+"\nTc Mobile No: "+(e==null?void 0:e.empMobile)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  https://amcakola.in\n\n\n\n",N=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:n}}))};return r.jsx(F,{title:"Demand Receipt",children:r.jsxs("div",{className:"p-4",children:[r.jsx("div",{className:"flex justify-center",children:r.jsx(z.Button,{size:"sm",color:"blue",onClick:()=>N(),children:"Print Demand"})}),r.jsx("div",{className:"w-full overflow-x-scroll",children:r.jsxs("div",{children:[r.jsx("div",{className:"w-[62rem] mx-auto mt-2 bg-white p-4 border border-black",children:r.jsxs("div",{className:"flex gap-32",children:[r.jsx("div",{children:r.jsx("img",{src:"https://mahabharti.co.in/wp-content/uploads/2020/09/Akola-Municipal-Corporation.png",alt:"akola",className:"w-28 h-28"})}),r.jsxs("div",{className:"pt-2 text-center",children:[r.jsx("h1",{className:"text-2xl font-bold  rounded-md",children:"AKOLA MUNICIPAL CORPORATION"}),r.jsx("p",{className:"text-1xl mt-2 font-semibold whitespace-nowrap",children:"Akola Water Supply (Water Bill)"})]}),r.jsx("div",{className:"ml-16",children:r.jsx(P,{value:"https://modernulb.com/citizen/search-water-direct"})})]})}),r.jsxs("div",{className:" w-[62rem] mx-auto bg-white p-4 border border-black ",children:[r.jsxs("div",{className:"w-full  text-center ",children:[r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsxs("th",{className:"border border-black font-semibold",children:["Consumer No / ग्राहक क्रमांक ",r.jsx("br",{}),r.jsxs("span",{className:"font-bold",children:[" ",e==null?void 0:e.consumer_no]})," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:["From / पासून"," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:["To / पर्यंत"," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:[" ","Bill No / बिल क्रमांक"," "]}),r.jsxs("th",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.demand_no," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("td",{className:"border border-black",children:"Tax No /कर क्र"}),r.jsx("td",{className:"border-r border-black font-bold",children:e==null?void 0:e.currrent_quarter}),r.jsx("td",{className:"font-bold",children:e==null?void 0:e.generation_date}),r.jsxs("td",{className:"border border-black",children:[" ","Bill Date / बिल तारीख"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.billDate," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.folio_no," "]}),r.jsx("td",{className:"border-r border-black ",children:" "}),r.jsx("td",{className:"",children:" "}),r.jsxs("td",{className:"border border-black",children:[" ","Bill Due Date / बिल देय तारीख"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.bilDueDate," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:[" ","Consumer Name / ग्राहक नाव"," "]}),r.jsxs("td",{className:"border border-black font-bold",colSpan:"3",children:[e==null?void 0:e.applicant_name," "]}),r.jsxs("td",{className:"border border-black ",children:[" ","Mobile No / मोबाईल क्र."," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:[" ","Consumer Address/ ग्राहक पत्ता"]}),r.jsxs("td",{className:"border border-black font-bold",colSpan:"3",children:[" ",e==null?void 0:e.address]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.mobile_no)||"N/A"," "]})]})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsx("th",{className:"border border-black",children:"जोडणी दिनांक "}),r.jsx("th",{className:"border border-black",children:"जोडणीचा प्रकार "}),r.jsx("th",{className:"border border-black",children:"जोडणीचा आकार "}),r.jsx("th",{className:"border border-black",children:"झोन"}),r.jsxs("th",{className:"border border-black",children:["जुना मालमत्ता क्रमांक"," "]}),r.jsxs("th",{className:"border border-black",children:[" ","नवीन मालमत्ता क्रमांक"," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsxs("th",{className:"border border-black  font-semibold",children:["Connection Date"," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"Connection Type"}),r.jsx("th",{className:"border border-black font-semibold",children:"Tap size"}),r.jsx("th",{className:"border border-black font-semibold",children:"Zone"}),r.jsx("th",{className:"border border-black font-semibold",children:"Old Property No."}),r.jsx("th",{className:"border border-black font-semibold",children:"New Property No."})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("td",{className:"border border-black font-bold",children:(e==null?void 0:e.connection_date)||"--"}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.category)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.tab_size)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.zone)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.property_no)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.folio_no)||"N/A"," "]})]})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("th",{className:"border border-black font-semibold",children:["मीटर क्र."," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:["वर्तमान वाचन मागील"," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"मागील वाचन"}),r.jsxs("th",{className:"border border-black font-semibold",children:["वापरलेली एकूण युनिट"," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:[" ","मीटर स्थिती"," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("th",{className:"border border-black font-semibold",children:["Meter No."," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"Current Reading"}),r.jsx("th",{className:"border border-black font-semibold",children:"Previous Reading"}),r.jsxs("th",{className:"border border-black font-semibold",children:["Total Unit Used"," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"Meter Status"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("td",{className:"border border-black font-bold",children:(e==null?void 0:e.meter_no)||"N/A"}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.finalReading,"/",e==null?void 0:e.generation_date," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.initialReading,"/",(e==null?void 0:e.previos_reading_date)||"N/A"," "]}),r.jsx("td",{className:"border border-black font-bold",children:e==null?void 0:e.unitConsumed}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.connection_type," "]})]})})]})]}),r.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[r.jsx("div",{className:"w-1/3 text-center",children:r.jsxs("div",{className:"w-full h-full border border-black overflow-hidden",children:[r.jsxs("h1",{className:"border-b border-black",children:["Meter Photo / मीटरचा फोटो"," "]}),r.jsx("img",{src:decodeURIComponent(e==null?void 0:e.meterImg),alt:"Meter Image ",className:"w-full h-64"}),r.jsxs("h1",{className:"bg-gray-200 font-bold",children:[e==null?void 0:e.user_name," "]}),r.jsxs("h1",{className:"bg-gray-200 font-bold",children:[e==null?void 0:e.mobile_no," "]}),r.jsx("h1",{className:"bg-gray-200 font-bold",children:e==null?void 0:e.generation_date})]})}),r.jsx("div",{className:"w-[35%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsx("tr",{className:"",children:r.jsxs("th",{className:"border border-black",colSpan:"3",children:["Previous Reading Details / मागील वापराचा तपशील"," "]})})}),r.jsx("tbody",{children:r.jsxs("tr",{className:" ",children:[r.jsx("th",{className:"border border-black",children:"Bill from "}),r.jsx("th",{className:"border border-black",children:"Bill Upto"}),r.jsx("th",{className:"border border-black",children:"Unit Used"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0 "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0 "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0 "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0"}),r.jsx("td",{className:"border border-black",children:"0 "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",style:{height:"40px"},children:"Bill Info"}),r.jsxs("td",{className:"border border-black",children:[" ","Adjustment Alert"," "]}),r.jsx("td",{className:"border border-black",children:"Spl. ALERT "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsxs("td",{className:"border border-black",style:{height:"40px"},children:["N/A"," "]}),r.jsx("td",{className:"border border-black",children:"LDt 00.00.00"}),r.jsx("td",{className:"border border-black",children:"LA "})]})})]})})}),r.jsx("div",{className:"w-[35%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsx("tr",{style:{height:"28px"},children:r.jsxs("th",{className:"border border-black",colSpan:"2",children:["Bill Outstanding Details / देय रक्कम विवरण"," "]})})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("th",{className:"border border-black font-semibold",children:["Current Bill Amount / ",r.jsx("br",{})," रक्कम चालू देयक राशी"," "]}),r.jsx("th",{className:"border border-black font-bold",children:(e==null?void 0:e.curernt_bill)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Last Arrear /",r.jsx("br",{})," शेवटचे वर्षाची थकबाकी"]}),r.jsx("td",{className:"border border-black font-bold",children:(e==null?void 0:e.arrear_demands)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Adjustment Bill /",r.jsx("br",{})," समायोजन विधेयक"]}),r.jsx("td",{className:"border border-black font-bold",children:0})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Total Outstanding /",r.jsx("br",{})," समायोजन विधेयक"]}),r.jsx("td",{className:"border border-black font-bold",children:e==null?void 0:e.total_amount})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Before Due Date Amt /",r.jsx("br",{}),"देय होण्यापूर्वी दि"," "]}),r.jsx("td",{className:"border border-black font-bold",children:e==null?void 0:e.total_amount})]})})]})})})]}),r.jsx("table",{className:"table-auto w-full text-sm font-semibold",children:r.jsx("thead",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsx("th",{className:"border border-black uppercase",colSpan:"1",children:"Special Message / विशेष संदेश / Alert No. Applied / सूचना लागू नाही"}),r.jsxs("th",{className:"border border-black uppercase",colSpan:"1",children:["Executive Engineer / कार्यकारी अभियंता"," "]})]})})}),r.jsx("h1",{children:"-----------------------------------------------------------------------------------------------------------------------------------------------------"}),r.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[r.jsx("div",{className:"w-[80%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black ",children:["Consumer No. / ग्राहक क्र. ",r.jsx("br",{}),r.jsx("span",{className:"font-bold",children:e==null?void 0:e.consumer_no})," "]}),r.jsxs("td",{className:"border border-black",children:["Mobile No. ",r.jsx("br",{}),r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.mobile_no)||"N/A"})," "]}),r.jsxs("td",{className:"border border-black",children:["Bill No. / बिल क्र. ",r.jsx("br",{})," ",r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.demand_no)||"N/A"})]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black ",children:["Consumer Name / ग्राहकाचे नाव"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.applicant_name)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Bill Date / बिल तारीख ",r.jsx("br",{})," ",r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.billDate)||"N/A"})]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Consumer Address / ग्राहकाचा पत्ता"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.address)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Bill Due/ बिल देय ",r.jsx("br",{})," ",r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.bilDueDate)||"N/A"})]})]})})]})})}),r.jsx("div",{className:"w-[20%] text-center",children:r.jsx("div",{className:"ml-10 mt-2",children:r.jsx(P,{value:"https://modernulb.com/citizen/search-water-direct"})})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold text-center",children:[r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Meter No. / मीटर क्रमांक."," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.meter_no)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Current Bill Amount / रक्कम चालू देयक राशी"," "]}),r.jsx("td",{className:"border border-black font-bold",children:e==null?void 0:e.curernt_bill})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Meter Status / मीटर स्थिती"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.connection_type)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Current Year Arrear / चालू वर्षांतील थकबाकी"," "]}),r.jsx("td",{className:"border border-black font-bold",children:(e==null?void 0:e.current_demands)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Connection Type / जोडणीचा प्रकार"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.category)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Last Year Arrear / गेल्या वर्षीची थकबाकी"," "]}),r.jsx("td",{className:"border border-black font-bold",children:(e==null?void 0:e.arrear_demands)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Tap Size / जोडणीचा आकार"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.tab_size)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Total Outstanding / एकुण थकीत रक्कम"," "]}),r.jsx("td",{className:"border border-black font-bold",children:e==null?void 0:e.total_amount})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Current Reading / चालू रिडींग"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.finalReading," "]}),r.jsxs("td",{className:"border border-black",children:["Before due Date Amount / मुदती पुर्व देय रक्कम"," "]}),r.jsx("td",{className:"border border-black font-bold",children:(e==null?void 0:e.total_amount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Previous Reading / मागील रिडींग"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.initialReading," "]}),r.jsxs("td",{className:"border border-black",children:["Adjustment Of Bill / देयक दुरुस्ती"," "]}),r.jsx("td",{className:"border border-black font-bold ",children:(e==null?void 0:e.adjust)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Total Used / Build Unit / एकूण वापर"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.unitConsumed," "]}),r.jsxs("td",{className:"border border-black",children:["Before Due Date Amount / मुदती पुर्व देय रक्कम"," "]}),r.jsx("td",{className:"border border-black font-bold",children:(e==null?void 0:e.total_amount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Bill Period day / बिल कालावधी दिवस"," "]}),r.jsx("td",{className:"border border-black",children:"N/A "}),r.jsxs("td",{className:"border border-black",children:["After Due Date Amount /देयक दुरुस्ती"," "]}),r.jsx("td",{className:"border border-black",children:"-"})]})})]})]})]})})]})})}export{ee as default};