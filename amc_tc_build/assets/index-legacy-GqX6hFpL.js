!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(t,n,l){var i;return i=function(t,n){if("object"!=e(t)||!t)return t;var l=t[Symbol.toPrimitive];if(void 0!==l){var i=l.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(i)?i:String(i))in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}System.register(["./index-legacy-PcWZm4b0.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./ArrowRightIcon-legacy-O7aY2XEJ.js"],(function(e,t){"use strict";var l,i,r,o,a;return{setters:[function(e){l=e.j},function(e){i=e.d},function(e){r=e.r},function(e){o=e.A,a=e.a}],execute:function(){e("S",(function(e){var c,u,s,v,d,f,p;return i.useEffect((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[null==e||null===(c=e.active)||void 0===c?void 0:c.page]),l.jsxs("div",{className:"flex items-center justify-between mt-2 mb-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(r.IconButton,{className:"w-7 h-7",size:"sm",variant:"outlined",onClick:function(){var t,l;if(1===(null==e||null===(t=e.active)||void 0===t?void 0:t.page))return;null==e||e.setActive(n(n({},null==e?void 0:e.active),{},{page:(null==e||null===(l=e.active)||void 0===l?void 0:l.page)-1}))},disabled:1===(null==e||null===(u=e.active)||void 0===u?void 0:u.page)||0===(null==e||null===(s=e.active)||void 0===s?void 0:s.page),children:l.jsx(o,{strokeWidth:2,className:"h-3 w-3"})}),l.jsxs(r.Typography,{color:"gray",className:"font-normal text-sm",children:[l.jsx("strong",{className:"text-gray-900 text-sm",children:null==e||null===(v=e.active)||void 0===v?void 0:v.page})," ","of ",l.jsx("strong",{className:"text-gray-900",children:null==e?void 0:e.noOfPage})]}),l.jsx(r.IconButton,{className:"w-7 h-7",size:"sm",variant:"outlined",onClick:function(){var t,l;if((null==e||null===(t=e.active)||void 0===t?void 0:t.page)===(null==e?void 0:e.noOfPage))return;null==e||e.setActive(n(n({},null==e?void 0:e.active),{},{page:(null==e||null===(l=e.active)||void 0===l?void 0:l.page)+1}))},disabled:(null==e||null===(d=e.active)||void 0===d?void 0:d.page)===(null==e?void 0:e.noOfPage)||0===(null==e||null===(f=e.active)||void 0===f?void 0:f.page),children:l.jsx(a,{strokeWidth:2,className:"h-3 w-3"})})]}),l.jsx("div",{className:"flex items-center gap-1",children:l.jsx("select",{className:"border border-gray-300 rounded-md text-gray-900 text-sm p-1.5",value:null==e||null===(p=e.active)||void 0===p?void 0:p.perPage,onChange:function(t){return null==e?void 0:e.setActive(n(n({},null==e?void 0:e.active),{},{perPage:parseInt(t.target.value)}))},children:null==t?void 0:t.map((function(e){return l.jsx("option",{value:e.value,children:e.label},e.id)}))})})]})}));var t=[{id:0,label:"5",value:5},{id:1,label:"10",value:10},{id:2,label:"20",value:20},{id:3,label:"50",value:50},{id:4,label:"100",value:100}]}}}))}();