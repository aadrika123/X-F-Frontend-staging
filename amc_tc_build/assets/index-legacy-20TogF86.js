System.register(["./index-legacy-4CIleCsy.js","./index-legacy-kQTvXYgH.js","./router-legacy-_t8Mc_yw.js","./tailwind-legacy-Afc9ICbc.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js"],(function(e,t){"use strict";var s,l,n,c,a,i,r,d;return{setters:[function(e){s=e.c,l=e.p,n=e.j,c=e.h},function(e){a=e.P},function(e){i=e.e,r=e.u},function(e){d=e.r},null,null,null,null],execute:function(){e("default",(function(){var e,t=i().id,u=r(),o=s({api:l.surveyNewAppDetail,config:{safId:t},options:{enabled:!!t}}),x=o.data;return o.isLoading,n.jsx(a,{title:"Survey",children:n.jsx("div",{className:"p-6",children:n.jsxs("div",{className:"mt-28",children:[n.jsx("div",{className:"flex justify-center item-center",children:n.jsx(c,{src:"/assets/verified.svg",alt:"saf-logo",className:"w-24 h-24"})}),n.jsxs("div",{children:[n.jsx("h1",{className:"text-xl font-semibold text-center mt-4 text-green-800",children:"SAF Generated Successfully"}),n.jsx("h1",{className:"text-center  text-green-800 font-bold",children:null==x||null===(e=x.data)||void 0===e||null===(e=e.BasicDetail)||void 0===e?void 0:e.saf_no}),n.jsx("h1",{className:"text-sm text-center mt-4 text-gray-500",children:"Your SAF has been generated successfully. You can view the details by clicking the button below."}),n.jsx("div",{className:"flex justify-center mt-5",children:n.jsx(d.Button,{color:"green",size:"sm",onClick:function(){return u("/amc-app/property/saf-property-details/".concat(t))},children:n.jsx("small",{children:"View SAF"})})})]})]})})})}))}}}));