!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,l=a.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",d=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(n){u=function(e,t,n){return e[t]=n}}function m(e,t,n,r){var a=t&&t.prototype instanceof b?t:b,l=Object.create(a.prototype),i=new M(r||[]);return o(l,"_invoke",{value:q(e,n,i)}),l}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=m;var v="suspendedStart",f="suspendedYield",p="executing",x="completed",y={};function b(){}function j(){}function N(){}var g={};u(g,s,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(C([])));k&&k!==a&&l.call(k,s)&&(g=k);var D=N.prototype=b.prototype=Object.create(g);function T(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function P(t,n){function r(a,o,i,s){var d=h(t[a],t,o);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==e(u)&&l.call(u,"__await")?n.resolve(u.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):n.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,s)}))}s(d.arg)}var a;o(this,"_invoke",{value:function(e,t){function l(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(l,l):l()}})}function q(e,t,r){var a=v;return function(l,o){if(a===p)throw new Error("Generator is already running");if(a===x){if("throw"===l)throw o;return{value:n,done:!0}}for(r.method=l,r.arg=o;;){var i=r.delegate;if(i){var s=F(i,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===v)throw a=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=p;var d=h(e,t,r);if("normal"===d.type){if(a=r.done?x:f,d.arg===y)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(a=x,r.method="throw",r.arg=d.arg)}}}function F(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,F(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=h(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,y;var o=l.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(l.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=N,o(D,"constructor",{value:N,configurable:!0}),o(N,"constructor",{value:j,configurable:!0}),j.displayName=u(N,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,u(e,c,"GeneratorFunction")),e.prototype=Object.create(D),e},r.awrap=function(e){return{__await:e}},T(P.prototype),u(P.prototype,d,(function(){return this})),r.AsyncIterator=P,r.async=function(e,t,n,a,l){void 0===l&&(l=Promise);var o=new P(m(e,t,n,a),l);return r.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},T(D),u(D,c,"Generator"),u(D,s,(function(){return this})),u(D,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=C,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=l.call(o,"catchLoc"),d=l.call(o,"finallyLoc");if(s&&d){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(e,t,n,r,a,l,o){try{var i=e[l](o),s=i.value}catch(d){return void n(d)}i.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,l){var o=e.apply(t,r);function i(e){n(o,a,l,i,s,"next",e)}function s(e){n(o,a,l,i,s,"throw",e)}i(void 0)}))}}System.register(["./index-legacy-hERkHqCJ.js","./react-legacy-cmOuVUdh.js","./formik.esm-legacy-RG1cH4yA.js","./FormProvider-legacy-ySL2jln4.js","./TextField-legacy-tyFR2S3c.js","./SelectField-legacy-FdU_-oZz.js","./TextAreaField-legacy-1kx-huWQ.js","./index-legacy-AZ8LWmyi.js","./index.esm-legacy-F4Zou-Y1.js","./index-legacy-esRcGXkv.js","./OverLayLoader-legacy-iUjWDeZs.js","./resizeImage-legacy-oWe1ux20.js","./usePathWisePermission-legacy-EKnM_QcZ.js","./module-legacy-C0g-R1f-.js"],(function(e,n){"use strict";var a,l,o,i,s,d,c,u,m,h,v,f,p,x,y,b,j,N,g,w,k,D,T;return{setters:[function(e){a=e.b,l=e.a,o=e.w,i=e.S,s=e.Q,d=e.j},function(e){c=e.u,u=e.h,m=e.r,h=e.e},function(e){v=e.u},function(e){f=e.F},function(e){p=e.T},function(e){x=e.S},function(e){y=e.T},null,function(e){b=e.c,j=e.a,N=e.f,g=e.g},function(e){w=e.P},function(e){k=e.O},function(e){D=e.r},function(e){T=e.u},null],execute:function(){e("default",(function(){var e,F,E,L,M,C,S,O,I,_,A,B,R,U,G,V=c(),Y=a({}),z=u().id,Q=T("/amc-app/water/water-payment").result,H=l({api:o.waterGetDetails,config:{applicationId:z},value:[z],options:{enabled:!!z}}),J=l({api:o.waterListDemand,config:{ConsumerId:z},value:[z],options:{enabled:!!z}}),K=v({enableReinitialize:!0,initialValues:{consumerId:z,demandFrom:"",demandUpto:"",amount:"",paymentMode:"",remarks:"",paymentType:"isFullPayment",chequeDate:"",bankName:"",branchName:"",chequeNo:"",document:""},validationSchema:b().shape({paymentMode:j().required("Required"),chequeDate:j().when("paymentMode",{is:function(e){return"Cheque"==e||"DD"==e||"NEFT"==e},then:function(){return j().required("Required")}}),bankName:j().when("paymentMode",{is:function(e){return"Cheque"==e||"DD"==e||"NEFT"==e},then:function(){return j().required("Required")}}),branchName:j().when("paymentMode",{is:function(e){return"Cheque"==e||"DD"==e||"NEFT"==e},then:function(){return j().required("Required")}}),chequeNo:j().when("paymentMode",{is:function(e){return"Cheque"==e||"DD"==e||"NEFT"==e},then:function(){return j().required("Required")}}),document:N().when("paymentMode",{is:function(e){return"Cheque"==e||"DD"==e||"NEFT"==e},then:function(){return N().required("Required")}}),paymentType:j().required("Required"),amount:g().when("paymentType",{is:function(e){return"isPartPayment"==e},then:function(){return g().required("Required")}}),remarks:j().required("Required")}),onSubmit:(X=r(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+$(),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&W(n)})).catch((function(e){var t;s.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return X.apply(this,arguments)})}),W=function(){var e=r(t().mark((function e(n){var r,a,l,i,d,c,u,m,h,v,f,p,x,y,b,j,N,g,w,k;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!($()<=0)){e.next=3;break}return s.error("Please enter valid amount"),e.abrupt("return");case 3:if(r={consumerId:null==n?void 0:n.consumerId,demandFrom:null==n?void 0:n.demandFrom,demandUpto:null==n?void 0:n.demandUpto,amount:"isPartPayment"==(null==n?void 0:n.paymentType)?$():"",paymentMode:null==n?void 0:n.paymentMode,remarks:null==n?void 0:n.remarks,paymentType:null==n?void 0:n.paymentType,deviceType:"android",chequeDate:null==n?void 0:n.chequeDate,bankName:null==n?void 0:n.bankName,branchName:null==n?void 0:n.branchName,chequeNo:null==n?void 0:n.chequeNo,document:null==n?void 0:n.document},"Cheque"!=(null==n?void 0:n.paymentMode)&&"DD"!=(null==n?void 0:n.paymentMode)&&"NEFT"!=(null==n?void 0:n.paymentMode)){e.next=16;break}return e.prev=5,e.next=8,Y.mutateAsync({api:null===(a=o)||void 0===a?void 0:a.waterDemandPayment,data:r});case 8:null!=(i=e.sent)&&null!==(l=i.data)&&void 0!==l&&l.status?(V("/amc-app/water/water-payment-response?response=".concat(null==i||null===(d=i.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.TransactionNo,"&id=").concat(null==i||null===(c=i.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.transactionId),{replace:!0}),s.success(null==i||null===(u=i.data)||void 0===u?void 0:u.message)):s.error(null==i||null===(m=i.data)||void 0===m?void 0:m.message),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),s.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 15:return e.abrupt("return");case 16:if("Cash"!=(null==n?void 0:n.paymentMode)){e.next=28;break}return e.prev=17,e.next=20,Y.mutateAsync({api:null===(h=o)||void 0===h?void 0:h.waterDemandPayment,data:r});case 20:null!=(f=e.sent)&&null!==(v=f.data)&&void 0!==v&&v.status?(V("/amc-app/water/water-payment-response?response=".concat(null==f||null===(p=f.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.TransactionNo,"&id=").concat(null==f||null===(x=f.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.transactionId),{replace:!0}),s.success(null==f||null===(y=f.data)||void 0===y?void 0:y.message)):s.error(null==f||null===(b=f.data)||void 0===b?void 0:b.message),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(17),s.error(null===e.t1||void 0===e.t1?void 0:e.t1.message);case 27:return e.abrupt("return");case 28:if("Online"!=(null==n?void 0:n.paymentMode)){e.next=40;break}return e.prev=29,e.next=32,Y.mutateAsync({api:o.waterOnlinePayment,data:{consumerId:null==n?void 0:n.consumerId,amount:null==n?void 0:n.amount,paymentMode:null==n?void 0:n.paymentMode,remarks:null==n?void 0:n.remarks,paymentType:null==n?void 0:n.paymentType,demandUpto:null==n?void 0:n.demandUpto,demandFrom:null==n?void 0:n.demandFrom,deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/water/water-payment-history"}});case 32:null!=(N=e.sent)&&null!==(j=N.data)&&void 0!==j&&j.status?(s.success(null==N||null===(g=N.data)||void 0===g?void 0:g.message),window.location.href=null==N||null===(w=N.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.refUrl):s.error(null==N||null===(k=N.data)||void 0===k?void 0:k.message),e.next=39;break;case 36:e.prev=36,e.t2=e.catch(29),s.error(null===e.t2||void 0===e.t2?void 0:e.t2.message);case 39:return e.abrupt("return");case 40:case"end":return e.stop()}}),e,null,[[5,12],[17,24],[29,36]])})));return function(t){return e.apply(this,arguments)}}();var X;m.useEffect((function(){var e,t,n,r,a;"Cash"!=(null==K||null===(e=K.values)||void 0===e?void 0:e.paymentMode)&&"Online"!=(null==K||null===(t=K.values)||void 0===t?void 0:t.paymentMode)&&"NEFT"!=(null==K||null===(n=K.values)||void 0===n?void 0:n.paymentMode)&&"DD"!=(null==K||null===(r=K.values)||void 0===r?void 0:r.paymentMode)&&"Cheque"!=(null==K||null===(a=K.values)||void 0===a?void 0:a.paymentMode)||(K.setFieldValue("chequeDate",""),K.setFieldValue("bankName",""),K.setFieldValue("branchName",""),K.setFieldValue("chequeNo",""),K.setFieldValue("document",""))}),[null==K||null===(e=K.values)||void 0===e?void 0:e.paymentMode]);var Z=function(){var e=r(t().mark((function e(n){var r,a,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n.target.files[0]);case 2:a=e.sent,l=new File([a],null==n||null===(r=n.target)||void 0===r||null===(r=r.files[0])||void 0===r?void 0:r.name,{type:"image/*"}),K.setFieldValue("document",l);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e,t,n,r,a,l=0;"isFullPayment"==(null===(e=K.values)||void 0===e?void 0:e.paymentType)&&(l=parseFloat(null==J||null===(n=J.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.totalSumDemand)-parseFloat(null==J||null===(r=J.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.remainAdvance));"isPartPayment"==(null===(t=K.values)||void 0===t?void 0:t.paymentType)&&(l=parseFloat(null===(a=K.values)||void 0===a?void 0:a.amount));return l};return m.useEffect((function(){$()}),[null===(F=K.values)||void 0===F?void 0:F.amount]),d.jsxs(w,{title:"Pay Now",children:[Y.isLoading&&d.jsx(k,{}),d.jsxs("div",{className:"p-4",children:[d.jsx(h.Card,{children:d.jsxs(h.CardBody,{children:[d.jsx("div",{className:"flex flex-row justify-between mb-3",children:d.jsx("h1",{className:"text-base font-semibold",children:"# Basic Details"})}),d.jsx("div",{className:"my-3 border-b-2"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[d.jsx("h1",{className:"text-sm font-semibold",children:"Applicant name:"}),d.jsx("h1",{className:"text-sm",children:null==H||null===(E=H.data)||void 0===E||null===(E=E.data)||void 0===E?void 0:E.applicant_name})]}),d.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[d.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),d.jsx("h1",{className:"text-sm",children:null==H||null===(L=H.data)||void 0===L||null===(L=L.data)||void 0===L?void 0:L.folio_no})]}),d.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[d.jsx("h1",{className:"text-sm font-semibold",children:"Consumer No:"}),d.jsx("h1",{className:"text-sm",children:null==H||null===(M=H.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.consumer_no})]}),d.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[d.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),d.jsx("h1",{className:"text-sm",children:(null==H||null===(C=H.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.reading_date)||"--"})]}),d.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[d.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),d.jsx("h1",{className:"text-sm w-36 truncate",children:(null==H||null===(S=H.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.address)||"--"})]})]})]})}),d.jsx("div",{className:"my-3 border-b-2"}),d.jsxs(h.Card,{className:"mt-4 w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Demand List"})}),d.jsx(h.CardBody,{children:d.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"# Sno."}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND FROM"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND UPTO"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND AMOUNT"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PENALTY"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"CONNECTION TYPE"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PAYABLE AMOUNT"})]})}),d.jsx("tbody",{children:null==J||null===(O=J.data)||void 0===O||null===(O=O.data)||void 0===O||null===(O=O.consumerDemands)||void 0===O?void 0:O.map((function(e,t){return d.jsxs("tr",{children:[d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t+1}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.demand_from}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.demand_upto}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.balance_amount}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.penalty}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.connection_type}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.due_balance_amount})]},t)}))})]})})})]}),d.jsx("div",{className:"my-3 border-b-2"}),d.jsx(f,{formik:K,children:d.jsxs(h.Card,{className:"mt-4 w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payment Details"})}),d.jsxs(h.CardBody,{children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsx("div",{children:d.jsxs(x,{label:"Payment Mode",name:"paymentMode",formik:K,children:[d.jsx("option",{value:"",children:"Select Payment Mode"}),d.jsx("option",{value:"Cash",children:"Cash"}),d.jsx("option",{value:"Cheque",children:"Cheque"}),d.jsx("option",{value:"DD",children:"DD"})]})}),d.jsx("div",{children:d.jsxs(x,{label:"Payment Type",name:"paymentType",formik:K,children:[d.jsx("option",{value:"",children:"Select Payment Type"}),d.jsx("option",{value:"isFullPayment",children:"Full Payment"}),(null==Q?void 0:Q.read)&&d.jsx("option",{value:"isPartPayment",children:"Part Payment"})]})})]}),"isPartPayment"==(null===(I=K.values)||void 0===I?void 0:I.paymentType)&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"my-3 border-b-2"}),d.jsx("div",{className:"col-span-2",children:d.jsx(p,{label:"Amount",name:"amount",type:"number",formik:K})})]}),"Cheque"==(null===(_=K.values)||void 0===_?void 0:_.paymentMode)&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"my-3 border-b-2"}),d.jsx(n,{formik:K,handleSelectImg:Z})]}),"DD"==(null===(A=K.values)||void 0===A?void 0:A.paymentMode)&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"my-3 border-b-2"}),d.jsx(P,{formik:K,handleSelectImg:Z})]}),"NEFT"==(null===(B=K.values)||void 0===B?void 0:B.paymentMode)&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"my-3 border-b-2"}),d.jsx(q,{formik:K,handleSelectImg:Z})]}),d.jsx("div",{className:"col-span-2 mt-3",children:d.jsx(y,{label:"Remarks",name:"remarks",type:"text",formik:K})}),d.jsx("div",{className:"my-3 border-b-2"}),d.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 ",children:[d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Total Demand:"})}),d.jsx("div",{className:"text-end",children:d.jsxs("h1",{className:"text-sm",children:["₹"," ",(null==J||null===(R=J.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.totalSumDemand)||0]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Penalty:"})}),d.jsx("div",{className:"text-end",children:d.jsxs("h1",{className:"text-sm text-red-600",children:["₹"," ",null==J||null===(U=J.data)||void 0===U||null===(U=U.data)||void 0===U?void 0:U.totalPenalty]})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Advance:",d.jsx("small",{className:"text-[10px] text-blue-800",children:"( If your have any advance amount, it will be deducted from total demand amount. )"})]})}),d.jsx("div",{className:"text-end",children:d.jsxs("h1",{className:"text-sm",children:["₹"," ",null==J||null===(G=J.data)||void 0===G||null===(G=G.data)||void 0===G?void 0:G.remainAdvance]})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-sm font-semibold text-green-600",children:"Total Pay Amount:"}),d.jsx("small",{className:"text-[10px] text-blue-800",children:"( Total Demand - Advance Amount)"})]}),d.jsx("div",{className:"text-end",children:d.jsxs("h1",{className:"text-sm text-green-600 font-semibold",children:["₹"," ",$()>0?$():0]})})]}),d.jsx("div",{className:"my-3 border-b-2"}),d.jsx("div",{className:"flex justify-center",children:d.jsxs(h.Button,{type:"submit",color:"blue",size:"sm",loading:Y.isLoading,children:["Pay Now ",$()>0&&"₹ ".concat($())]})})]})]})})]})]})}));var n=function(e){var t,n=e.formik,r=e.handleSelectImg;return d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsx(p,{label:"Cheque No",name:"chequeNo",type:"text",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"Cheque Date",name:"chequeDate",type:"date",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),d.jsxs("div",{className:"col-span-2",children:[d.jsx(p,{label:"Upload Cheque Image",name:"document",type:"file",onChange:function(e){return r(e)}}),d.jsx("small",{className:"text-red-500",children:null==n||null===(t=n.errors)||void 0===t?void 0:t.document})]})]})},P=function(e){var t,n=e.formik,r=e.handleSelectImg;return d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsx(p,{label:"DD No",name:"chequeNo",type:"text",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"DD Date",name:"chequeDate",type:"date",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),d.jsxs("div",{className:"col-span-2",children:[d.jsx(p,{label:"Upload DD Image",name:"document",type:"file",onChange:function(e){return r(e)}}),d.jsx("small",{className:"text-red-500 -mt-6",children:null==n||null===(t=n.errors)||void 0===t?void 0:t.document})]})]})},q=function(e){var t,n=e.formik,r=e.handleSelectImg;return d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsx(p,{label:"NEFT No",name:"chequeNo",type:"text",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"NEFT Date",name:"chequeDate",type:"date",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),d.jsx("div",{children:d.jsx(p,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),d.jsxs("div",{className:"col-span-2",children:[d.jsx(p,{label:"Upload NEFT Image",name:"document",type:"file",onChange:function(e){return r(e)}}),d.jsx("small",{className:"text-red-500 -mt-6",children:null==n||null===(t=n.errors)||void 0===t?void 0:t.document})]})]})}}}}))}();