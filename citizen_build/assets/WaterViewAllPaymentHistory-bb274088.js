import{v as I,r,aN as k,a as C,A as D,j as e,ag as _,c3 as P,b_ as R}from"./index-53235423.js";const F=()=>{var x,h,p,b;const{t}=I(),[g,l]=r.useState(!1),[s,m]=r.useState(""),[d,u]=r.useState(1),[c,y]=r.useState(5),[o,j]=r.useState(""),{api_waterCitizenPaymentHistory:N,header:w}=k(),i=C();r.useEffect(()=>{v()},[d,c]);const v=()=>{l(!0),D.post(N,{pages:c,page:d},w).then(a=>{a.data.status?(console.log("Water Citizen payment history date",a.data.data),m(a.data.data),l(!1)):(console.log("Water Citizen payment history date",a.data.data),l(!1))}).catch(a=>{console.log("Exception while getting water payment history",a),l(!1)})},f=(a,n)=>{if(console.log("transId",a,n),n==1)return i(`/waterUserReceipt/${a}`);if(n==2)return i(`/waterConnReceipt/${a}`)},L=a=>a=="&laquo; Previous"?"<< Prev":a=="Next &raquo;"?">> Next":a,W=a=>o===""?!0:a.tran_no.toLowerCase().includes(o.toLowerCase());if(g)return e.jsx(_,{});if(((x=s==null?void 0:s.data)==null?void 0:x.length)<1)return e.jsx(P,{message:"No Payment History Found."});if(((h=s==null?void 0:s.data)==null?void 0:h.length)>=1)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"my-3 font-semibold text-center text-lg text-gray-700",children:["  ",t("tranWaterDashboardIndex.waterPaymentTransactionsLabel.label")]}),e.jsxs("div",{className:"relative overflow-x-auto sm:rounded-lg border shadow-md",children:[e.jsxs("div",{className:"flex justify-between my-3 mx-5",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("p",{children:t("tranWaterDashboardIndex.showLabel.label")}),e.jsxs("select",{onChange:a=>y(a.target.value),name:"",id:"",className:"border rounded shadow w-24",children:[e.jsx("option",{value:"5",children:t("tranWaterDashboardIndex.fiveRecordsLabel.label")}),e.jsx("option",{value:"10",children:t("tranWaterDashboardIndex.tenRecordsLabel.label")}),e.jsx("option",{value:"20",children:t("tranWaterDashboardIndex.twentyRecordsLabel.label")}),e.jsx("option",{value:"30",children:t("tranWaterDashboardIndex.thirtyRecordsLabel.label")})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("p",{children:t("tranWaterDashboardIndex.searchLabel.label")}),e.jsx("input",{type:"text",name:"search",value:o,onChange:a=>j(a.target.value),className:"border rounded shadow w-40"})]})]}),e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 ",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50",children:e.jsxs("tr",{children:[e.jsxs("th",{scope:"col",className:"p-4",children:[" ",e.jsx("div",{className:"flex items-center",children:t("tranWaterDashboardIndex.slLabel.label")})," "]}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterDashboardIndex.transactionNoLabel.label")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterDashboardIndex.paymentModeLabel.label")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterDashboardIndex.amountLabel.label")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterDashboardIndex.paidForLabel.label")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterDashboardIndex.transactionDateLabel.label")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterDashboardIndex.actionLabel.label")})]})}),e.jsx("tbody",{children:s&&((p=s==null?void 0:s.data)==null?void 0:p.filter(W).map((a,n)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("td",{className:"w-4 p-4",children:e.jsx("div",{className:"flex items-center",children:n+1})}),e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:a.tran_no}),e.jsx("td",{className:"px-6 py-4",children:a.payment_mode}),e.jsx("td",{className:"px-6 py-4",children:a.amount}),e.jsx("td",{className:"px-6 py-4",children:a.tran_type}),e.jsx("td",{className:"px-6 py-4",children:R(a==null?void 0:a.tran_date).format("DD-MMM-yy")}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("p",{onClick:()=>f(a.tran_no,a.tran_type_id),className:"font-medium text-blue-600 border-indigo-600 cursor-pointer hover:bg-indigo-600 hover:text-white shadow-md rounded border px-2 py-1 text-center whitespace-nowrap",children:t("tranWaterDashboardIndex.viewReceiptLabel.label")})})]})))})]}),e.jsxs("nav",{className:"block md:flex items-center md:justify-between text-center md:pt-4 m-5","aria-label":"Table navigation",children:[e.jsxs("span",{className:"text-sm font-normal text-gray-500",children:[t("tranWaterDashboardIndex.showingLabel.label")," ",e.jsxs("span",{className:"font-semibold text-gray-900 dark:text-white",children:[s==null?void 0:s.from,"-",s==null?void 0:s.to]})," ",t("tranWaterDashboardIndex.ofLabel.label")," ",e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:s==null?void 0:s.total})]}),e.jsx("ul",{className:"inline-flex items-center -space-x-px",children:(b=s==null?void 0:s.links)==null?void 0:b.map(a=>e.jsx("li",{children:e.jsx("p",{onClick:()=>{u(a==null?void 0:a.url.slice(-1))},className:` ${(a==null?void 0:a.active)==!0?"bg-indigo-500 text-white":"bg-white text-gray-500"} px-3 py-2 leading-tight  border border-gray-300 hover:bg-indigo-100 hover:text-gray-700 cursor-pointer whitespace-nowrap`,children:L(a.label)})}))})]})]})]})};export{F as default};