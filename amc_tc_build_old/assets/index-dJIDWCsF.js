import{a as be,e as ge,i as fe,b as f,S as we,Q as y,w as u,c as ye,j as e,r as N}from"./index-ZKPC99vf.js";import{u as Pe}from"./formik.esm-cgRYB5or.js";import{h as qe}from"./moment-UBOc2Xni.js";import{F as Fe}from"./FormProvider-ghVijPrZ.js";import{T as i}from"./TextField-0EDUL-CF.js";import{S as w}from"./SelectField-rj_28Upi.js";import"./index-ntdqGHBn.js";import{c as De,a as h,f as je,g as ue}from"./index.esm-YWhi1h0e.js";import{P as ve}from"./index-KlXviWlo.js";import{O as Te}from"./OverLayLoader-V9-Id6aZ.js";import{r as Ce}from"./resizeImage-zd1R1BxE.js";import"./module-be213lGu.js";function We(){var P,q,F,D,v,T,C,A,M,E,U,R,B,I,O,S,_,V,Y,L,$,z,W,G,Q,H,J,K,X,Z,k,ee,ae;const n=be(),p=ge({}),{id:l}=fe(),r=f({api:u.waterGetDetails,config:{applicationId:l},value:[l],options:{enabled:!!l}}),b=f({api:u.waterListDemand,config:{ConsumerId:l},value:[l],options:{enabled:!!l}}),t=Pe({enableReinitialize:!0,initialValues:{consumerId:l,demandFrom:"",demandUpto:"",amount:"",paymentMode:"",remarks:"",paymentType:"isFullPayment",chequeDate:"",bankName:"",branchName:"",chequeNo:"",document:""},validationSchema:De().shape({demandUpto:h().required("Required"),paymentMode:h().required("Required"),chequeDate:h().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>h().required("Required")}),bankName:h().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>h().required("Required")}),branchName:h().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>h().required("Required")}),chequeNo:h().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>h().required("Required")}),document:je().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>je().required("Required")}),paymentType:h().required("Required"),amount:ue().when("paymentType",{is:a=>a=="isPartPayment",then:()=>ue().required("Required")}),remarks:h().required("Required")}),onSubmit:async a=>{we.fire({title:"Are you sure?",text:"You want to proceed with payment",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(m=>{m.isConfirmed&&Ne(a)}).catch(m=>{var x,c;y.error((c=(x=m==null?void 0:m.response)==null?void 0:x.data)==null?void 0:c.message)})}}),Ne=async a=>{var m,x,c,j,te,se,de,ne,re,me,le,ie,oe,ce,xe,he,pe;if(a.paymentType=="isPartPayment"&&a.amount>((x=(m=d==null?void 0:d.data)==null?void 0:m.data)==null?void 0:x.totalPayAmount)){y.error("Part payment amount is greater than total amount");return}if(a.paymentMode=="Cheque"||a.paymentMode=="DD"||a.paymentMode=="NEFT"){const s=new FormData;s.append("consumerId",a.consumerId),s.append("demandFrom",a.demandFrom),s.append("demandUpto",a.demandUpto),s.append("amount",a.amount),s.append("paymentMode",a.paymentMode),s.append("remarks",a.remarks),s.append("paymentType",a.paymentType),s.append("chequeDate",a.chequeDate),s.append("bankName",a.bankName),s.append("branchName",a.branchName),s.append("chequeNo",a.chequeNo),s.append("document",a.document);try{const o=await p.mutateAsync({api:(a==null?void 0:a.paymentType)=="isPartPayment"?u.waterPartPayment:u.waterOfflinePayment,data:s});(c=o==null?void 0:o.data)!=null&&c.status?(n("/amc-app/water/water-payment-response?response=".concat((te=(j=o==null?void 0:o.data)==null?void 0:j.data)==null?void 0:te.tranNo),{replace:!0}),y.success((se=o==null?void 0:o.data)==null?void 0:se.message)):y.error((de=o==null?void 0:o.data)==null?void 0:de.message)}catch(o){y.error(o==null?void 0:o.message)}return}if(a.paymentMode=="Cash"){try{const s=await p.mutateAsync({api:(a==null?void 0:a.paymentType)=="isPartPayment"?u.waterPartPayment:u.waterOfflinePayment,data:{consumerId:a.consumerId,demandFrom:a.demandFrom,demandUpto:a.demandUpto,amount:a.amount,paymentMode:a.paymentMode,remarks:a.remarks,paymentType:a.paymentType}});(ne=s==null?void 0:s.data)!=null&&ne.status?(n("/amc-app/water/water-payment-response?response=".concat((me=(re=s==null?void 0:s.data)==null?void 0:re.data)==null?void 0:me.tranNo),{replace:!0}),y.success((le=s==null?void 0:s.data)==null?void 0:le.message)):y.error((ie=s==null?void 0:s.data)==null?void 0:ie.message)}catch(s){y.error(s==null?void 0:s.message)}return}if(a.paymentMode=="Online"){try{const s=await p.mutateAsync({api:u.waterOnlinePayment,data:{consumerId:a.consumerId,amount:a.amount,paymentMode:a.paymentMode,remarks:a.remarks,paymentType:a.paymentType,demandUpto:a.demandUpto,demandFrom:a.demandFrom,callbackUrl:"https://modernulb.com/amc-app/water/water-payment-history"}});(oe=s==null?void 0:s.data)!=null&&oe.status?(y.success((ce=s==null?void 0:s.data)==null?void 0:ce.message),window.location.href=(he=(xe=s==null?void 0:s.data)==null?void 0:xe.data)==null?void 0:he.refUrl):y.error((pe=s==null?void 0:s.data)==null?void 0:pe.message)}catch(s){y.error(s==null?void 0:s.message)}return}},d=f({api:u.calculatePriceWater,config:{consumerId:l,demandUpto:t.values.demandUpto},value:[t.values.demandUpto,l],options:{enabled:!!t.values.demandUpto&&!!l,initialData:{data:{totalDemand:0,totalPenalty:0,totalAdvance:0,totalRebate:0,remaningAdvanceAmount:0,totalPayAmount:0}}}});ye.useEffect(()=>{var a,m,x,c;(m=(a=d==null?void 0:d.data)==null?void 0:a.data)!=null&&m.totalPayAmount&&t.values.paymentType=="isFullPayment"?t.setFieldValue("amount",(c=(x=d==null?void 0:d.data)==null?void 0:x.data)==null?void 0:c.totalPayAmount):t.setFieldValue("amount","")},[(q=(P=d==null?void 0:d.data)==null?void 0:P.data)==null?void 0:q.totalPayAmount,t.values.paymentType]),ye.useEffect(()=>{var a,m,x,c,j;(((a=t==null?void 0:t.values)==null?void 0:a.paymentMode)=="Cash"||((m=t==null?void 0:t.values)==null?void 0:m.paymentMode)=="Online"||((x=t==null?void 0:t.values)==null?void 0:x.paymentMode)=="NEFT"||((c=t==null?void 0:t.values)==null?void 0:c.paymentMode)=="DD"||((j=t==null?void 0:t.values)==null?void 0:j.paymentMode)=="Cheque")&&(t.setFieldValue("chequeDate",""),t.setFieldValue("bankName",""),t.setFieldValue("branchName",""),t.setFieldValue("chequeNo",""),t.setFieldValue("document",""))},[(F=t==null?void 0:t.values)==null?void 0:F.paymentMode]);const g=async a=>{var c,j;const m=await Ce(a.target.files[0]),x=new File([m],(j=(c=a==null?void 0:a.target)==null?void 0:c.files[0])==null?void 0:j.name,{type:"image/*"});t.setFieldValue("document",x)};return e.jsxs(ve,{title:"Pay Now",children:[p.isLoading&&e.jsx(Te,{}),e.jsxs("div",{className:"p-4",children:[e.jsx(N.Card,{children:e.jsxs(N.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-base font-semibold",children:"# Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Applicant name:"}),e.jsx("h1",{className:"text-sm",children:(v=(D=r==null?void 0:r.data)==null?void 0:D.data)==null?void 0:v.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-sm",children:(C=(T=r==null?void 0:r.data)==null?void 0:T.data)==null?void 0:C.folio_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Consumer No:"}),e.jsx("h1",{className:"text-sm",children:(M=(A=r==null?void 0:r.data)==null?void 0:A.data)==null?void 0:M.consumer_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),e.jsx("h1",{className:"text-sm",children:((U=(E=r==null?void 0:r.data)==null?void 0:E.data)==null?void 0:U.reading_date)||"--"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-sm w-36 truncate",children:((B=(R=r==null?void 0:r.data)==null?void 0:R.data)==null?void 0:B.address)||"--"})]})]})]})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(N.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Demand List"})}),e.jsx(N.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"# Sno."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND FROM"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND UPTO"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND AMOUNT"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PENALTY"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"CONNECTION TYPE"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PAYABLE AMOUNT"})]})}),e.jsx("tbody",{children:(S=(O=(I=b==null?void 0:b.data)==null?void 0:I.data)==null?void 0:O.consumerDemands)==null?void 0:S.map((a,m)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:m+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.demand_from}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.demand_upto}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.balance_amount}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.penalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.connection_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a.amount})]},m))})]})})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Fe,{formik:t,children:e.jsxs(N.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payment Details"})}),e.jsxs(N.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsxs(w,{label:"Month Upto",name:"demandUpto",formik:t,children:[e.jsx("option",{value:"",children:"Select Payment Mode"}),(Y=(V=(_=b==null?void 0:b.data)==null?void 0:_.data)==null?void 0:V.consumerDemands)==null?void 0:Y.map((a,m)=>e.jsx("option",{value:a.demand_upto,children:qe(a.demand_upto).format("DD-MM-YYYY")},m))]})}),e.jsx("div",{children:e.jsxs(w,{label:"Payment Mode",name:"paymentMode",formik:t,children:[e.jsx("option",{value:"",children:"Select Payment Mode"}),e.jsx("option",{value:"Cash",children:"Cash"}),e.jsx("option",{value:"Cheque",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),((L=t==null?void 0:t.values)==null?void 0:L.paymentType)=="isFullPayment"&&e.jsx("option",{value:"Online",children:"Online"})]})}),e.jsx("div",{className:"col-span-2",children:e.jsxs(w,{label:"Payment Type",name:"paymentType",formik:t,children:[e.jsx("option",{value:"",children:"Select Payment Type"}),e.jsx("option",{value:"isFullPayment",children:"Full Payment"})]})}),t.values.paymentType=="isPartPayment"&&e.jsx("div",{className:"col-span-2",children:e.jsx(i,{label:"Amount",name:"amount",type:"number",formik:t})})]}),t.values.paymentMode=="Cheque"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Ae,{formik:t,handleSelectImg:g})]}),t.values.paymentMode=="DD"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Me,{formik:t,handleSelectImg:g})]}),t.values.paymentMode=="NEFT"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Ee,{formik:t,handleSelectImg:g})]}),e.jsx("div",{className:"col-span-2 mt-3",children:e.jsx(i,{label:"Remarks",name:"remarks",type:"text",formik:t})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 ",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Total Demand:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((z=($=d==null?void 0:d.data)==null?void 0:$.data)==null?void 0:z.totalDemand).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Penalty:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((G=(W=d==null?void 0:d.data)==null?void 0:W.data)==null?void 0:G.totalPenalty).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Advance:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((H=(Q=d==null?void 0:d.data)==null?void 0:Q.data)==null?void 0:H.totalAdvance).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Rebate:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((K=(J=d==null?void 0:d.data)==null?void 0:J.data)==null?void 0:K.totalRebate).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Remaining Advance:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((Z=(X=d==null?void 0:d.data)==null?void 0:X.data)==null?void 0:Z.remaningAdvanceAmount).toFixed(2)]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Total Pay Amount:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",Math==null?void 0:Math.round((ee=(k=d==null?void 0:d.data)==null?void 0:k.data)==null?void 0:ee.totalPayAmount).toFixed(2)]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(N.Button,{type:"submit",color:"blue",size:"sm",loading:p.isLoading,children:["Pay Now ",(ae=t==null?void 0:t.values)==null?void 0:ae.amount]})})]})]})})]})]})}const Ae=({formik:n,handleSelectImg:p})=>{var l;return e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(i,{label:"Cheque No",name:"chequeNo",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"Cheque Date",name:"chequeDate",type:"date",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(i,{label:"Upload Cheque Image",name:"document",type:"file",onChange:r=>p(r)}),e.jsx("small",{className:"text-red-500 -mt-6",children:(l=n==null?void 0:n.errors)==null?void 0:l.document})]})]})},Me=({formik:n,handleSelectImg:p})=>{var l;return e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(i,{label:"DD No",name:"chequeNo",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"DD Date",name:"chequeDate",type:"date",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(i,{label:"Upload DD Image",name:"document",type:"file",onChange:r=>p(r)}),e.jsx("small",{className:"text-red-500 -mt-6",children:(l=n==null?void 0:n.errors)==null?void 0:l.document})]})]})},Ee=({formik:n,handleSelectImg:p})=>{var l;return e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(i,{label:"NEFT No",name:"chequeNo",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"NEFT Date",name:"chequeDate",type:"date",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"Bank Name",name:"bankName",type:"text",formik:n})}),e.jsx("div",{children:e.jsx(i,{label:"Branch Name",name:"branchName",type:"text",formik:n})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(i,{label:"Upload NEFT Image",name:"document",type:"file",onChange:r=>p(r)}),e.jsx("small",{className:"text-red-500 -mt-6",children:(l=n==null?void 0:n.errors)==null?void 0:l.document})]})]})};export{We as default};