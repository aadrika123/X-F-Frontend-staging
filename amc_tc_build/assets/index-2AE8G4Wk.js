import{a as Ne,g as be,m as fe,l as f,S as ge,Q as h,w as j,e as pe,j as e,r as u}from"./index-2WqhwaqO.js";import{u as Pe,T as m}from"./TextField-p6uclutQ.js";import{h as we}from"./moment-UBOc2Xni.js";import{F as Fe}from"./FormProvider--kCajMCW.js";import{S as g}from"./SelectField-tMpJWJiG.js";import"./index-9qKltdsq.js";import{c as De,a as p,f as ye,g as je}from"./index.esm-S2UgmJxK.js";import{P as qe}from"./index-lDTlN50X.js";import{O as ve}from"./OverLayLoader-ByKu8tqn.js";import"./module-UQPlNzLM.js";function Ye(){var P,w,F,D,q,v,T,C,A,M,E,U,R,B,O,I,V,S,_,Y,L,$,z,W,G,Q,H,J,K,X,Z,k,ee;const n=Ne(),o=be({}),{id:y}=fe(),i=f({api:j.waterGetDetails,config:{applicationId:y},value:[y],options:{enabled:!!y}}),N=f({api:j.waterListDemand,config:{ConsumerId:y},value:[y],options:{enabled:!!y}}),t=Pe({enableReinitialize:!0,initialValues:{consumerId:y,demandFrom:"",demandUpto:"",amount:"",paymentMode:"",remarks:"",paymentType:"isFullPayment",chequeDate:"",bankName:"",branchName:"",chequeNo:"",document:""},validationSchema:De().shape({demandUpto:p().required("Required"),paymentMode:p().required("Required"),chequeDate:p().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>p().required("Required")}),bankName:p().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>p().required("Required")}),branchName:p().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>p().required("Required")}),chequeNo:p().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>p().required("Required")}),document:ye().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>ye().required("Required")}),paymentType:p().required("Required"),amount:je().when("paymentType",{is:a=>a=="isPartPayment",then:()=>je().required("Required")})}),onSubmit:async a=>{console.log(a),ge.fire({title:"Are you sure?",text:"You want to proceed with payment",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(r=>{r.isConfirmed&&ue(a)}).catch(r=>{var c,x;h.error((x=(c=r==null?void 0:r.response)==null?void 0:c.data)==null?void 0:x.message)})}}),ue=async a=>{var r,c,x,b,ae,te,se,de,ne,re,me,le,ie,oe,ce,xe,he;if(a.paymentType=="isPartPayment"&&a.amount>((c=(r=d==null?void 0:d.data)==null?void 0:r.data)==null?void 0:c.totalPayAmount)){h.error("Part payment amount is greater than total amount");return}if(a.paymentMode=="Cheque"||a.paymentMode=="DD"||a.paymentMode=="NEFT"){const s=new FormData;s.append("consumerId",a.consumerId),s.append("demandFrom",a.demandFrom),s.append("demandUpto",a.demandUpto),s.append("amount",a.amount),s.append("paymentMode",a.paymentMode),s.append("remarks",a.remarks),s.append("paymentType",a.paymentType),s.append("chequeDate",a.chequeDate),s.append("bankName",a.bankName),s.append("branchName",a.branchName),s.append("chequeNo",a.chequeNo),s.append("document",a.document);try{const l=await o.mutateAsync({api:(a==null?void 0:a.paymentType)=="isPartPayment"?j.waterPartPayment:j.waterOfflinePayment,data:s});(x=l==null?void 0:l.data)!=null&&x.status?(n("/amc-app/water/water-payment-response?response=".concat((ae=(b=l==null?void 0:l.data)==null?void 0:b.data)==null?void 0:ae.tranNo),{replace:!0}),h.success((te=l==null?void 0:l.data)==null?void 0:te.message)):h.error((se=l==null?void 0:l.data)==null?void 0:se.message)}catch(l){h.error(l==null?void 0:l.message)}return}if(a.paymentMode=="Cash"){try{const s=await o.mutateAsync({api:(a==null?void 0:a.paymentType)=="isPartPayment"?j.waterPartPayment:j.waterOfflinePayment,data:{consumerId:a.consumerId,demandFrom:a.demandFrom,demandUpto:a.demandUpto,amount:a.amount,paymentMode:a.paymentMode,remarks:a.remarks,paymentType:a.paymentType}});(de=s==null?void 0:s.data)!=null&&de.status?(n("/amc-app/water/water-payment-response?response=".concat((re=(ne=s==null?void 0:s.data)==null?void 0:ne.data)==null?void 0:re.tranNo),{replace:!0}),h.success((me=s==null?void 0:s.data)==null?void 0:me.message)):h.error((le=s==null?void 0:s.data)==null?void 0:le.message)}catch(s){h.error(s==null?void 0:s.message)}return}if(a.paymentMode=="Online"){try{const s=await o.mutateAsync({api:j.waterOnlinePayment,data:{consumerId:a.consumerId,amount:a.amount,paymentMode:a.paymentMode,remarks:a.remarks,paymentType:a.paymentType,demandUpto:a.demandUpto,demandFrom:a.demandFrom,callbackUrl:"https://smartulb.co.in/amc-app/water/water-payment-history"}});(ie=s==null?void 0:s.data)!=null&&ie.status?(h.success((oe=s==null?void 0:s.data)==null?void 0:oe.message),window.location.href=(xe=(ce=s==null?void 0:s.data)==null?void 0:ce.data)==null?void 0:xe.refUrl):h.error((he=s==null?void 0:s.data)==null?void 0:he.message)}catch(s){h.error(s==null?void 0:s.message)}return}},d=f({api:j.calculatePriceWater,config:{consumerId:y,demandUpto:t.values.demandUpto},value:[t.values.demandUpto,y],options:{enabled:!!t.values.demandUpto&&!!y,initialData:{data:{totalDemand:0,totalPenalty:0,totalAdvance:0,totalRebate:0,remaningAdvanceAmount:0,totalPayAmount:0}}}});return pe.useEffect(()=>{var a,r,c,x;(r=(a=d==null?void 0:d.data)==null?void 0:a.data)!=null&&r.totalPayAmount&&t.values.paymentType=="isFullPayment"?t.setFieldValue("amount",(x=(c=d==null?void 0:d.data)==null?void 0:c.data)==null?void 0:x.totalPayAmount):t.setFieldValue("amount","")},[(w=(P=d==null?void 0:d.data)==null?void 0:P.data)==null?void 0:w.totalPayAmount,t.values.paymentType]),pe.useEffect(()=>{var a,r,c,x,b;(((a=t==null?void 0:t.values)==null?void 0:a.paymentMode)=="Cash"||((r=t==null?void 0:t.values)==null?void 0:r.paymentMode)=="Online"||((c=t==null?void 0:t.values)==null?void 0:c.paymentMode)=="NEFT"||((x=t==null?void 0:t.values)==null?void 0:x.paymentMode)=="DD"||((b=t==null?void 0:t.values)==null?void 0:b.paymentMode)=="Cheque")&&(t.setFieldValue("chequeDate",""),t.setFieldValue("bankName",""),t.setFieldValue("branchName",""),t.setFieldValue("chequeNo",""),t.setFieldValue("document",""))},[(F=t==null?void 0:t.values)==null?void 0:F.paymentMode]),e.jsxs(qe,{title:"Pay Now",children:[o.isLoading&&e.jsx(ve,{}),e.jsxs("div",{className:"p-4",children:[e.jsx(u.Card,{children:e.jsxs(u.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-base font-semibold",children:"# Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Applicant name:"}),e.jsx("h1",{className:"text-sm",children:(q=(D=i==null?void 0:i.data)==null?void 0:D.data)==null?void 0:q.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-sm",children:(T=(v=i==null?void 0:i.data)==null?void 0:v.data)==null?void 0:T.folio_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Consumer No:"}),e.jsx("h1",{className:"text-sm",children:(A=(C=i==null?void 0:i.data)==null?void 0:C.data)==null?void 0:A.consumer_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),e.jsx("h1",{className:"text-sm",children:((E=(M=i==null?void 0:i.data)==null?void 0:M.data)==null?void 0:E.reading_date)||"--"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-sm w-36 truncate",children:((R=(U=i==null?void 0:i.data)==null?void 0:U.data)==null?void 0:R.address)||"--"})]})]})]})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(u.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Demand List"})}),e.jsx(u.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"# Sno."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND FROM"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND UPTO"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND AMOUNT"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PENALTY"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"CONNECTION TYPE"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PAYABLE AMOUNT"})]})}),e.jsx("tbody",{children:(I=(O=(B=N==null?void 0:N.data)==null?void 0:B.data)==null?void 0:O.consumerDemands)==null?void 0:I.map((a,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.demand_from}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.demand_upto}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.balance_amount}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.penalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.connection_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.amount})]},r))})]})})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Fe,{formik:t,children:e.jsxs(u.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payment Details"})}),e.jsxs(u.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsxs(g,{label:"Month Upto",name:"demandUpto",formik:t,children:[e.jsx("option",{value:"",children:"Select Payment Mode"}),(_=(S=(V=N==null?void 0:N.data)==null?void 0:V.data)==null?void 0:S.consumerDemands)==null?void 0:_.map((a,r)=>e.jsx("option",{value:a.demand_upto,children:we(a.demand_upto).format("DD-MM-YYYY")},r))]})}),e.jsx("div",{children:e.jsxs(g,{label:"Payment Mode",name:"paymentMode",formik:t,children:[e.jsx("option",{value:"",children:"Select Payment Mode"}),e.jsx("option",{value:"Cash",children:"Cash"}),e.jsx("option",{value:"Cheque",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),((Y=t==null?void 0:t.values)==null?void 0:Y.paymentType)=="isFullPayment"&&e.jsx("option",{value:"Online",children:"Online"})]})}),e.jsx("div",{className:"col-span-2",children:e.jsxs(g,{label:"Payment Type",name:"paymentType",formik:t,children:[e.jsx("option",{value:"",children:"Select Payment Type"}),e.jsx("option",{value:"isFullPayment",children:"Full Payment"})]})}),t.values.paymentType=="isPartPayment"&&e.jsx("div",{className:"col-span-2",children:e.jsx(m,{label:"Amount",name:"amount",type:"number",formik:t})})]}),t.values.paymentMode=="Cheque"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Te,{formik:t})]}),t.values.paymentMode=="DD"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Ce,{formik:t})]}),t.values.paymentMode=="NEFT"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Ae,{formik:t})]}),e.jsx("div",{className:"col-span-2 mt-3",children:e.jsx(m,{label:"Remarks",name:"remarks",type:"text",formik:t})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 ",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Total Demand:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round(($=(L=d==null?void 0:d.data)==null?void 0:L.data)==null?void 0:$.totalDemand).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Penalty:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((W=(z=d==null?void 0:d.data)==null?void 0:z.data)==null?void 0:W.totalPenalty).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Advance:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((Q=(G=d==null?void 0:d.data)==null?void 0:G.data)==null?void 0:Q.totalAdvance).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Rebate:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((J=(H=d==null?void 0:d.data)==null?void 0:H.data)==null?void 0:J.totalRebate).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Remaining Advance:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((X=(K=d==null?void 0:d.data)==null?void 0:K.data)==null?void 0:X.remaningAdvanceAmount).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Total Pay Amount:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((k=(Z=d==null?void 0:d.data)==null?void 0:Z.data)==null?void 0:k.totalPayAmount).toFixed(2)]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(u.Button,{type:"submit",color:"blue",size:"sm",loading:o.isLoading,children:["Pay Now ",(ee=t==null?void 0:t.values)==null?void 0:ee.amount]})})]})]})})]})]})}const Te=({formik:n})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"Cheque No",name:"chequeNo",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"Cheque Date",name:"chequeDate",type:"date",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),e.jsx("div",{className:"col-span-2",children:e.jsx(m,{label:"Upload Cheque Image",name:"document",type:"file",onChange:o=>{n.setFieldValue("document",o.target.files[0])}})})]}),Ce=({formik:n})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"DD No",name:"chequeNo",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"DD Date",name:"chequeDate",type:"date",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),e.jsx("div",{className:"col-span-2",children:e.jsx(m,{label:"Upload DD Image",name:"document",type:"file",onChange:o=>{n.setFieldValue("document",o.target.files[0])}})})]}),Ae=({formik:n})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"NEFT No",name:"chequeNo",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"NEFT Date",name:"chequeDate",type:"date",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),e.jsx("div",{className:"col-span-2",children:e.jsx(m,{label:"Upload NEFT Image",name:"document",type:"file",onChange:o=>{n.setFieldValue("document",o.target.files[0])}})})]});export{Ye as default};