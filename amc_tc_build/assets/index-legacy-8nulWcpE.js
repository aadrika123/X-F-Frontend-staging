!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(n){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),l=new k(r||[]);return a(o,"_invoke",{value:S(e,n,l)}),o}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var g="suspendedStart",v="suspendedYield",m="executing",p="completed",y={};function x(){}function b(){}function j(){}var w={};d(w,u,(function(){return this}));var N=Object.getPrototypeOf,T=N&&N(N(I([])));T&&T!==i&&o.call(T,u)&&(w=T);var L=j.prototype=x.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function P(t,n){function r(i,a,l,u){var s=h(t[i],t,a);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,u)}),(function(e){r("throw",e,l,u)})):n.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return r("throw",e,l,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(o,o):o()}})}function S(e,t,r){var i=g;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===p){if("throw"===o)throw a;return{value:n,done:!0}}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var u=O(l,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===g)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var s=h(e,t,r);if("normal"===s.type){if(i=r.done?p:v,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=p,r.method="throw",r.arg=s.arg)}}}function O(e,t){var r=t.method,i=e.iterator[r];if(i===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=h(i,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(o.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,a(L,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},E(P.prototype),d(P.prototype,s,(function(){return this})),r.AsyncIterator=P,r.async=function(e,t,n,i,o){void 0===o&&(o=Promise);var a=new P(f(e,t,n,i),o);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(L),d(L,c,"Generator"),d(L,u,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=I,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return l.type="throw",l.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(e,t,n,r,i,o,a){try{var l=e[o](a),u=l.value}catch(s){return void n(s)}l.done?t(u):Promise.resolve(u).then(r,i)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function l(e){n(a,i,o,l,u,"next",e)}function u(e){n(a,i,o,l,u,"throw",e)}l(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-ePqLPOOv.js","./react-legacy-B2uxfrw8.js","./index.esm-legacy-lBCJLnzP.js","./formik.esm-legacy-4K34LA0X.js","./FormProvider-legacy-a02GT_Ca.js","./TextField-legacy-ubd2up73.js","./index-legacy-NuuOs5Ko.js","./index-legacy-dQWjPxiq.js","./resizeImage-legacy-EpiJHxna.js","./useErrorFocusFields-legacy-Ff64DWyM.js","./OverLayLoader-legacy-N6-L0-8Q.js","./usePathWisePermission-legacy-hES20-Xt.js","./module-legacy-_uU1n-KG.js"],(function(e,n){"use strict";var o,a,l,u,s,c,d,f,h,g,v,m,p,y,x,b,j,w,N,T,L,E,P,S,O,_,F;return{setters:[function(e){o=e.u,a=e.b,l=e.g,u=e.a,s=e.p,c=e.S,d=e.Q,f=e.j},function(e){h=e.R,g=e.u,v=e.h,m=e.f,p=e.r,y=e.e},function(e){x=e.c,b=e.e,j=e.a,w=e.f},function(e){N=e.u,T=e.F},function(e){L=e.F},function(e){E=e.T},null,function(e){P=e.P},function(e){S=e.r},function(e){O=e.u},function(e){_=e.O},function(e){F=e.u},null],execute:function(){e("default",(function(){var e,n,k,I,A,G,R;o();var C=i(h.useState(""),2),q=C[0],V=C[1],B=O().AutoFocusErrorField,M=i(h.useState([]),2),D=M[0],W=M[1],H=g(),Y=a({}),z=i(h.useState(null),2),U=(z[0],z[1]),J=v().id,K=m().pathname;F(null==K||null===(e=K.split("/"))||void 0===e||null===(e=e.slice(0,-1))||void 0===e?void 0:e.join("/"));var $=l(),Q=$.coords,X=$.isGeolocationEnabled,Z=u({api:s.staticSafDetail,config:{applicationId:J},value:[J],options:{enabled:!!J,onSuccess:function(e){var t,n;null!=e&&null!==(t=e.data)&&void 0!==t&&t.status?(V(!1),null!=e&&null!==(n=e.data)&&void 0!==n&&n.is_geo_tagged&&H("/amc-app/property/measurement-sheet/".concat(J),{replace:!0})):V(!0)}}}),ee=N({enableReinitialize:!0,initialValues:{geoTagged:null==D?void 0:D.map((function(e){return{latitude:"",longitude:"",altitude:"",accuracy:"",imagePath:"",directionType:"",rainWaterHarvesting:""}}))},validationSchema:x().shape({geoTagged:b().of(x().shape({latitude:j().required("Latitude is required"),longitude:j().required("Longitude is required"),directionType:j().required("Direction is required"),imagePath:w().required("Image is required")}))}),onSubmit:(le=r(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.fire({title:"Are you sure?",text:"\n        You are going to submit the Geo Tagging. Once submitted, you can't edit the Geo Tagging?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&te(n)})).catch((function(e){var t;d.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return le.apply(this,arguments)})}),te=function(){var e=r(t().mark((function e(n){var r,i,o,a,l,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("safId",J),null==n||n.geoTagged.forEach((function(e,t){r.append("latitude[".concat(t,"]"),null==e?void 0:e.latitude),r.append("longitude[".concat(t,"]"),null==e?void 0:e.longitude),r.append("directionType[".concat(t,"]"),null==e?void 0:e.directionType),r.append("imagePath[".concat(t,"]"),null==e?void 0:e.imagePath)})),e.prev=3,e.next=6,Y.mutateAsync({api:s.geoTagging,data:r});case 6:null!=(o=e.sent)&&null!==(i=o.data)&&void 0!==i&&i.status?(d.success(null==o||null===(a=o.data)||void 0===a?void 0:a.message),H("/amc-app/property/measurement-sheet/".concat(J),{replace:!0})):d.error(null==o||null===(l=o.data)||void 0===l?void 0:l.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),d.error(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),ne=ee.submitCount,re=ee.isSubmitting,ie=ee.errors,oe=ee.isValid,ae=function(){var e=r(t().mark((function e(n,r,i){var o,a,l,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(o=window)||void 0===o||null===(o=o.ReactNativeWebView)||void 0===o?void 0:o.postMessage(JSON.stringify({Key:"OPEN_CAMERA"}));case 2:return e.next=4,S(n.target.files[0]);case 4:l=e.sent,u=new File([l],null===(a=n.target.files[0])||void 0===a?void 0:a.name,{type:"image/*"}),ee.setFieldValue("geoTagged.".concat(r,".latitude"),null==Q?void 0:Q.latitude),ee.setFieldValue("geoTagged.".concat(r,".longitude"),null==Q?void 0:Q.longitude),ee.setFieldValue("geoTagged.".concat(r,".directionType"),null==i?void 0:i.directionType),ee.setFieldValue("geoTagged.".concat(r,".imagePath"),u),U(u);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var le;p.useEffect((function(){var e,t;null!=Z&&null!==(e=Z.data)&&void 0!==e&&e.data&&W(null!=Z&&null!==(t=Z.data)&&void 0!==t&&null!==(t=t.data)&&void 0!==t&&t.is_water_harvesting?[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"},{id:4,title:"Rain Water Harvesting Image",directionType:"waterHarvesting",isRainWaterHarvesting:!0}]:[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"}])}),[null==Z||null===(n=Z.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.saf_no]),h.useEffect((function(){B({submitCount:ne,isSubmitting:re,errors:ie,isValid:oe})}),[ie,ne,re]),X||alert("Geolocation is not enabled! Please enable to use this app");if(q)return f.jsx("div",{className:"p-16 flex text-center text-red-500 font-semibold h-screen justify-center items-center",children:"Network Error"});return f.jsxs(P,{title:"Geo Tagging",children:[Y.isLoading&&f.jsx(_,{}),f.jsxs("div",{className:"p-4 ",children:[f.jsx(y.Card,{className:"w-full",children:f.jsxs(y.CardBody,{children:[f.jsx("div",{className:"flex justify-between items-center",children:f.jsx("h1",{className:"font-semibold",children:"Geo Tagging"})}),f.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),f.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[f.jsx("h1",{className:"font-semibold text-sm",children:"Application No : "}),f.jsx("h1",{className:"text-sm",children:null==Z||null===(k=Z.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.saf_no}),f.jsx("h1",{className:"font-semibold text-sm",children:"Application Type : "}),f.jsx("h1",{className:"text-sm",children:null==Z||null===(I=Z.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.assessment_type}),f.jsx("h1",{className:"font-semibold text-sm",children:"Apply Date : "}),f.jsx("h1",{className:"text-sm",children:null==Z||null===(A=Z.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.application_date}),f.jsx("h1",{className:"font-semibold text-sm",children:"Owner Name : "}),f.jsx("h1",{className:"text-sm",children:null==Z||null===(G=Z.data)||void 0===G||null===(G=G.data)||void 0===G?void 0:G.applicant_name}),f.jsx("h1",{className:"font-semibold text-sm",children:"Mobile No : "}),f.jsx("h1",{className:"text-sm w-40 truncate",children:null==Z||null===(R=Z.data)||void 0===R||null===(R=R.data)||void 0===R||null===(R=R.owners)||void 0===R||null===(R=R.map((function(e){return null==e?void 0:e.mobile_no})))||void 0===R?void 0:R.join(", ")})]})]})}),f.jsx("div",{className:"my-4 border-b-2"}),f.jsxs(L,{formik:ee,children:[f.jsx(T,{name:"geoTagged",children:function(e){return D.map((function(e,t){var n,r,i,o,a,l,u;return f.jsxs(h.Fragment,{children:[f.jsxs(y.Card,{className:"w-full",children:[f.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:f.jsx("h1",{className:"text-base font-semibold text-gray-100",children:null==e?void 0:e.title})}),f.jsxs(y.CardBody,{children:[f.jsxs("div",{className:"grid grid-cols-2 gap-3 items-center",children:[f.jsx("h1",{className:"font-semibold text-sm",children:"Latitude : "}),f.jsx(E,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(t,".latitude"),formik:ee}),f.jsxs("h1",{className:"font-semibold text-sm",children:["Longitude :"," "]}),f.jsx(E,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(t,".longitude"),formik:ee})]}),f.jsxs("div",{className:"grid grid-cols-1 gap-3 mt-4",children:[f.jsx("div",{children:(null==ee||null===(n=ee.values)||void 0===n||null===(n=n.geoTagged[t])||void 0===n?void 0:n.imagePath)&&f.jsx("img",{className:"w-full h-64",src:null!=ee&&null!==(r=ee.values)&&void 0!==r&&null!==(r=r.geoTagged[t])&&void 0!==r&&r.imagePath?URL.createObjectURL(null==ee||null===(i=ee.values)||void 0===i||null===(i=i.geoTagged[t])||void 0===i?void 0:i.imagePath):null,alt:null==ee||null===(o=ee.values)||void 0===o||null===(o=o.geoTagged[t])||void 0===o||null===(o=o.imagePath)||void 0===o?void 0:o.name})}),f.jsxs("div",{children:[f.jsx("input",{type:"file",name:"imagePath",accept:"image/*",onChange:function(n){return ae(n,t,e)}}),f.jsx("span",{className:"text-sm text-red-500",children:null==ee||null===(a=ee.errors)||void 0===a||null===(a=a.geoTagged)||void 0===a||null===(a=a[t])||void 0===a?void 0:a.imagePath})]}),f.jsx("div",{children:f.jsx("h1",{className:"text-sm text-red-900",children:(null==ee||null===(l=ee.values)||void 0===l||null===(l=l.geoTagged[t])||void 0===l?void 0:l.imagePath)&&Math.round((null==ee||null===(u=ee.values)||void 0===u||null===(u=u.geoTagged[t])||void 0===u||null===(u=u.imagePath)||void 0===u?void 0:u.size)/1024/1024*100)/100+"MB"})})]})]})]}),f.jsx("div",{className:"my-4 border-b-2"})]},t)}))}}),f.jsx("div",{className:"flex justify-center items-center mt-4",children:f.jsx("button",{type:"submit",className:"bg-blue-600 px-4 py-2 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out",children:"Save & Next"})})]})]})]})}))}}}))}();