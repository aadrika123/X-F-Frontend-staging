import{u as g,R as y,l as v,w as D,j as s,r}from"./index-2WqhwaqO.js";import{u as S,T as b}from"./TextField-p6uclutQ.js";import{F as A}from"./FormProvider--kCajMCW.js";import{S as F}from"./SelectField-tMpJWJiG.js";import"./index-9qKltdsq.js";import{P}from"./index-lDTlN50X.js";import{S as _}from"./index-9hz10FZI.js";function E(){var c,i,o,x,m,h,j,p,f,N;const{user:d}=g(),[t,n]=y.useState({fromDate:"",uptoDate:"",wardId:"",userId:d==null?void 0:d.id,zoneId:"",paymentMode:"",page:1,perPage:10}),l=S({enableReinitialize:!0,initialValues:t,onSubmit:async(e,{setSubmitting:u})=>{n(e)}}),a=v({api:D.waterTcCollection,config:t,value:[t.fromDate,t.uptoDate,t.wardId,t.userId,t.zoneId,t.paymentMode,t.page,t.perPage],options:{enabled:!!t.fromDate}});return s.jsx(P,{title:"Collection Report",children:s.jsx("div",{className:"p-4",children:s.jsxs(A,{formik:l,children:[s.jsxs(r.Card,{children:[s.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:s.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Collection Report"})}),s.jsxs(r.CardBody,{children:[s.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"From Date :"})}),s.jsx("div",{children:s.jsx(b,{formik:l,type:"date",name:"fromDate",placeholder:"From Date"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Upto Date :"})}),s.jsx("div",{children:s.jsx(b,{formik:l,type:"date",name:"uptoDate",placeholder:"Upto Date"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Payment Mode :"})}),s.jsx("div",{children:s.jsxs(F,{name:"paymentMode",placeholder:"Payment Mode",formik:l,children:[s.jsx("option",{value:"",children:"All"}),s.jsx("option",{value:"CASH",children:"Cash"}),s.jsx("option",{value:"CHEQUE",children:"Cheque"}),s.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),s.jsx("div",{className:"flex justify-center mt-5",children:s.jsx(r.Button,{color:"blue",size:"sm",ripple:!0,type:"submit",disabled:l.isSubmitting,onClick:l.handleSubmit,children:"Search"})})]})]}),a!=null&&a.isLoading?s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"py-2 mt-6",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"font-semibold text-sm",children:"Collection Report"}),s.jsxs("h1",{className:"font-semibold text-sm text-green-700",children:["Total Amount: ",(i=(c=a==null?void 0:a.data)==null?void 0:c.data)==null?void 0:i.totalAmount]})]}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsx("div",{children:((m=(x=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:x.data)==null?void 0:m.length)>0?s.jsxs(s.Fragment,{children:[(p=(j=(h=a==null?void 0:a.data)==null?void 0:h.data)==null?void 0:j.data)==null?void 0:p.map((e,u)=>s.jsx(r.Card,{className:"mt-2 full",children:s.jsx(r.CardBody,{children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name :"}),s.jsx("h1",{className:"text-sm w-48 truncate",children:e==null?void 0:e.applicant_name})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["SAF No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.saf_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Property No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.property_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Ward No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.ward_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.zone_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),s.jsx("h1",{className:"text-sm w-48 truncate",children:(e==null?void 0:e.address)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:e==null?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Tran No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.tran_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Tran Date:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.tran_date})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mode:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.transaction_mode})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Amount:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.amount})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Collector Name:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.emp_name})]})]})})})},u)),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsx(_,{active:t,noOfPage:(N=(f=a==null?void 0:a.data)==null?void 0:f.data)==null?void 0:N.last_page,setActive:n})]}):s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})})}export{E as default};