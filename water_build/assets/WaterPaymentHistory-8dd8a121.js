import{l as s,v as P,m as R,z as T,W,k as r,o as S,j as t,K as k,G as I,q as y}from"./index-d11d4d8d.js";const O=()=>{var h,d,g,u,a,b;const[i,N]=s.useState(),[o,f]=s.useState(""),[w,n]=s.useState(!1);s.useState();const[x,v]=s.useState(!1),{id:c}=P(),l=R();T("Water Payment History");const{api_waterConsumerPaymentHistory:_,api_waterApprovedApplicationDetails:A,header:m}=W(),C=()=>{n(!0),y.post(A,{applicationId:c},m).then(function(e){console.log("water Approved Application Details",e.data.data),N(e.data.data),n(!1)}).catch(function(e){console.log("Error : water Approved Application Details",e),n(!1)})},E=()=>{n(!0),y.post(_,{consumerId:c},m).then(function(e){e.data.status?(console.log("water payment history",e.data.data),f(e.data.data),n(!1)):(console.log("No Data Found..",e),v(e.data.message))}).catch(function(e){console.log("Error : water payment history",e),n(!1)})};return s.useEffect(()=>{C(),E()},[c]),console.log("readyMadeListData11",o),console.log("readyMadeListData?.connection",o==null?void 0:o.connection),r(S,{children:[t(k,{active:"payment",consumerNo:i==null?void 0:i.consumer_no}),t("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:r("div",{className:"col-span-12 rounded-lg p-4",children:[w&&t(I,{})," ",x&&t("div",{className:"text-center mt-10",children:r("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl capitalize",children:[" ",x]})}),((h=o==null?void 0:o.Consumer)==null?void 0:h.length)<=0&&((d=o==null?void 0:o.connection)==null?void 0:d.length)<=0?t("div",{className:"text-center mt-10",children:t("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl capitalize",children:" No Payments Found Yet"})}):(o==null?void 0:o.length)!=0&&t("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:r("table",{className:"min-w-full leading-normal mt-2",children:[t("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:r("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transaction No"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payment Mode"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Date"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Type"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),r("tbody",{className:"text-sm",children:[((g=o==null?void 0:o.Consumer)==null?void 0:g.length)>0&&((u=o==null?void 0:o.Consumer)==null?void 0:u.map((e,p)=>r("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-sm text-left",children:p+1}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_no}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.payment_mode}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_date}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_type}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.amount}),t("td",{className:"px-2 py-2 text-sm text-left",children:(e==null?void 0:e.tran_type)==="Demand Collection"?t("button",{onClick:()=>l(`/water-demand-payment-receipt/${e==null?void 0:e.id}`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"}):(e==null?void 0:e.tran_type)==="NEW_CONNECTION"?t("button",{onClick:()=>l(`/water-payment-receipt/${e==null?void 0:e.id}`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"}):(e==null?void 0:e.tran_type)==="WATER RECONNENCTION"?t("button",{onClick:()=>l(`/water-paymentreconnect-receipt/${e==null?void 0:e.tran_no}/consumer`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"}):null})]}))),((a=o==null?void 0:o.connection)==null?void 0:a.length)>0&&((b=o==null?void 0:o.connection)==null?void 0:b.map((e,p)=>r("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-sm text-left",children:p+1}),r("td",{className:"px-2 py-2 text-sm text-left",children:[e==null?void 0:e.tran_no,t("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"Application"})]}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.payment_mode}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_date}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_type}),t("td",{className:"px-2 py-2 text-sm text-left",children:"Application"}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.amount}),t("td",{className:"px-2 py-2 text-sm text-left",children:t("button",{onClick:()=>l(`/water-payment-receipt/${e==null?void 0:e.tran_no}/application`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})))]})]})}),t("div",{className:"w-full h-40"})]})})]})};export{O as default};