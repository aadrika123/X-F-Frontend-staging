import{j as e,d as K,c as X,p as V,S as k,Q as W,I as ee}from"./index-bjBLJJSs.js";import{u as se,d as re,e as le,f as ne,r as te}from"./router-vn-0iGwJ.js";import{u as ae}from"./formik.esm-ilDmhU_v.js";import{c as oe,a as N}from"./index.esm-19LW8OGO.js";import{P as xe}from"./index-2Q5eF_5p.js";import{O as ce}from"./OverLayLoader-99r8EyDV.js";import{r as Q}from"./tailwind-umh7vczy.js";import{F as ie}from"./FormProvider-jZObsn_L.js";import{T as m}from"./TextField-h6PpXaq4.js";import{S as J}from"./SelectField-6-dWzXjq.js";import"./index-9INnh4Fj.js";import{u as de}from"./usePathWisePermission-_z9uI2HY.js";import{U as me}from"./useSaveLocation-g_W8ujE-.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";import"./module-UYcpCVqk.js";import"./customInputValidation-8tSUGdUh.js";function he({data:s,permissionResult:o}){var f,r,y,v,t,I,c,E,h,u,g,T,_,w,l,x,i,d,b,p,j;return e.jsx(Q.Card,{children:e.jsxs("div",{className:"px-4 py-6",children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Holding No:"}),e.jsx("h1",{className:"text-xs",children:(r=(f=s==null?void 0:s.data)==null?void 0:f.basicDetails)==null?void 0:r.holding_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-xs",children:(v=(y=s==null?void 0:s.data)==null?void 0:y.basicDetails)==null?void 0:v.property_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Owner Name:"}),e.jsx("h1",{className:"text-xs",children:(I=(t=s==null?void 0:s.data)==null?void 0:t.basicDetails)==null?void 0:I.owner_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Owner Name (In Marathi):"}),e.jsx("h1",{className:"text-xs",children:((E=(c=s==null?void 0:s.data)==null?void 0:c.basicDetails)==null?void 0:E.owner_name_marathi)||"N/A"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Applicant Name:"}),e.jsx("h1",{className:"text-xs",children:(u=(h=s==null?void 0:s.data)==null?void 0:h.basicDetails)==null?void 0:u.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-xs",children:(T=(g=s==null?void 0:s.data)==null?void 0:g.basicDetails)==null?void 0:T.prop_address})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Zone:"}),e.jsx("h1",{className:"text-xs",children:(w=(_=s==null?void 0:s.data)==null?void 0:_.basicDetails)==null?void 0:w.zone_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Ward No:"}),e.jsx("h1",{className:"text-xs",children:(x=(l=s==null?void 0:s.data)==null?void 0:l.basicDetails)==null?void 0:x.ward_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Ownership Type:"}),e.jsx("h1",{className:"text-xs",children:(d=(i=s==null?void 0:s.data)==null?void 0:i.basicDetails)==null?void 0:d.ownership_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Property Type:"}),e.jsx("h1",{className:"text-xs",children:(p=(b=s==null?void 0:s.data)==null?void 0:b.basicDetails)==null?void 0:p.property_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Is-Armed-Force:"}),e.jsx("h1",{className:"text-xs",children:(j=s==null?void 0:s.data)!=null&&j.isSingleManArmedForce?"Yes":"No"})]})]}),e.jsx("div",{className:"my-3 border-b-2"})]})})}function be({data:s}){var o,f;return e.jsx(Q.Card,{className:"mt-4 w-full",children:e.jsxs(Q.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Demand List"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Financial Year :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:(f=(o=s==null?void 0:s.data)==null?void 0:o.demandList)==null?void 0:f.map((r,y)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.fyear}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.light_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.total_tax})]},y))})]})})]})})}function pe({data:s}){var o,f,r,y,v,t,I,c,E,h,u,g,T,_,w,l,x,i,d,b,p,j,P,D,A,F,C,q,B,M,R,S,U,O,L,n,H,G;return e.jsx(Q.Card,{className:"mt-4 w-full",children:e.jsxs(Q.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Grand Total Tax"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Interest"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(f=(o=s==null?void 0:s.data)==null?void 0:o.grandTaxes)==null?void 0:f.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(y=(r=s==null?void 0:s.data)==null?void 0:r.grandTaxes)==null?void 0:y.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(t=(v=s==null?void 0:s.data)==null?void 0:v.grandTaxes)==null?void 0:t.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(c=(I=s==null?void 0:s.data)==null?void 0:I.grandTaxes)==null?void 0:c.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(h=(E=s==null?void 0:s.data)==null?void 0:E.grandTaxes)==null?void 0:h.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(g=(u=s==null?void 0:s.data)==null?void 0:u.grandTaxes)==null?void 0:g.cleanliness_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(_=(T=s==null?void 0:s.data)==null?void 0:T.grandTaxes)==null?void 0:_.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(l=(w=s==null?void 0:s.data)==null?void 0:w.grandTaxes)==null?void 0:l.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(i=(x=s==null?void 0:s.data)==null?void 0:x.grandTaxes)==null?void 0:i.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(b=(d=s==null?void 0:s.data)==null?void 0:d.grandTaxes)==null?void 0:b.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(j=(p=s==null?void 0:s.data)==null?void 0:p.grandTaxes)==null?void 0:j.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(D=(P=s==null?void 0:s.data)==null?void 0:P.grandTaxes)==null?void 0:D.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(F=(A=s==null?void 0:s.data)==null?void 0:A.grandTaxes)==null?void 0:F.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(q=(C=s==null?void 0:s.data)==null?void 0:C.grandTaxes)==null?void 0:q.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(M=(B=s==null?void 0:s.data)==null?void 0:B.grandTaxes)==null?void 0:M.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(S=(R=s==null?void 0:s.data)==null?void 0:R.grandTaxes)==null?void 0:S.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(O=(U=s==null?void 0:s.data)==null?void 0:U.grandTaxes)==null?void 0:O.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(n=(L=s==null?void 0:s.data)==null?void 0:L.grandTaxes)==null?void 0:n.monthlyPenalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(G=(H=s==null?void 0:s.data)==null?void 0:H.grandTaxes)==null?void 0:G.total_tax})]})})]})})]})})}const Y=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"},{id:5,label:"NEFT",value:"NEFT"}],je=[{id:1,label:"Full Payment",value:"isFullPayment"},{id:2,label:"Arrear Amount",value:"isArrearPayment"},{id:3,label:"Part Payment",value:"isPartPayment"}];function Ne({data:s,formik:o,calculateActualAmount:f,PayNow:r}){var y,v,t,I,c,E,h,u,g,T,_,w,l,x,i,d,b,p,j,P,D,A,F,C,q,B,M,R,S,U,O,L,n,H,G,$,z;return e.jsx(Q.Card,{className:"mt-4 w-full",children:e.jsxs(Q.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Payment Action"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold ",children:"* Total Arrear Amount -:"})}),e.jsx("div",{children:(y=s==null?void 0:s.data)!=null&&y.isSingleManArmedForce||(v=s==null?void 0:s.data)!=null&&v.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(t=s==null?void 0:s.data)==null?void 0:t.arrear," - ₹",(I=s==null?void 0:s.data)==null?void 0:I.arrear_exempted_general_tax," = ₹"," ",((c=s==null?void 0:s.data)==null?void 0:c.arrear)-((E=s==null?void 0:s.data)==null?void 0:E.arrear_exempted_general_tax)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-red-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(h=s==null?void 0:s.data)==null?void 0:h.arrear]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Current Amount -:"})}),e.jsx("div",{children:(u=s==null?void 0:s.data)!=null&&u.isSingleManArmedForce||(g=s==null?void 0:s.data)!=null&&g.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(T=s==null?void 0:s.data)==null?void 0:T.currentDemand," - ₹",(_=s==null?void 0:s.data)==null?void 0:_.current_exempted_general_tax," = ₹"," ",parseFloat(((w=s==null?void 0:s.data)==null?void 0:w.currentDemand)-((l=s==null?void 0:s.data)==null?void 0:l.current_exempted_general_tax)).toFixed(2)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-cyan-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(x=s==null?void 0:s.data)==null?void 0:x.currentDemand]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Interest Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold ",children:[e.jsxs("span",{className:"text-red-500",children:["₹ ",(i=s==null?void 0:s.data)==null?void 0:i.totalInterestPenalty]})," ",e.jsxs("small",{children:["( Interest on Arrear ₹ ",(d=s==null?void 0:s.data)==null?void 0:d.arrearInterest," + Previous Interest ₹ ",(b=s==null?void 0:s.data)==null?void 0:b.previousInterest,")"]})]})}),e.jsx("div",{className:"my-3 border-b-2 col-span-2"}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Payable Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[(p=s==null?void 0:s.data)!=null&&p.isSingleManArmedForce||(j=s==null?void 0:s.data)!=null&&j.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(P=s==null?void 0:s.data)==null?void 0:P.payableAmt," - ₹",(D=s==null?void 0:s.data)==null?void 0:D.total_exempted_general_tax," = ₹"," ",parseFloat(((A=s==null?void 0:s.data)==null?void 0:A.payableAmt)-((F=s==null?void 0:s.data)==null?void 0:F.total_exempted_general_tax)).toFixed(2)," "]})," "]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(C=s==null?void 0:s.data)==null?void 0:C.payableAmt]})," "]}),e.jsx("small",{children:"(Arrear + Current + Interest)"})," ",e.jsx("div",{children:e.jsxs("h1",{className:"text-[10px] text-yellow-800",children:["( If You Pay Full Amount Before"," ",(B=(q=s==null?void 0:s.data)==null?void 0:q.QuarterlyRebates[0])==null?void 0:B.upto_date,", Then"," ",(R=(M=s==null?void 0:s.data)==null?void 0:M.QuarterlyRebates[0])==null?void 0:R.rebates," % Of General Tax For Current Year Will Be Waived. )"]})}),((S=s==null?void 0:s.data)==null?void 0:S.isSingleManArmedForce)||((U=s==null?void 0:s.data)==null?void 0:U.isMobileTower)&&e.jsxs("small",{className:"text-blue-500",children:[" ","- (",(O=s==null?void 0:s.data)==null?void 0:O.total_exempted_general_tax," General Tax Exemption)"]})]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Advance Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(L=s==null?void 0:s.data)==null?void 0:L.remainAdvance]})," ",e.jsx("small",{className:"text-green-500",children:"(This Is An Adjustable Amount From Total Payment Value.)"})]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(ie,{formik:o,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"mb-4",children:e.jsxs(J,{label:"Payment Mode",name:"paymentMode",formik:o,children:[e.jsx("option",{value:"",children:"select"}),Y==null?void 0:Y.map(a=>e.jsx("option",{value:a==null?void 0:a.value,children:a==null?void 0:a.label},a==null?void 0:a.id))]})}),e.jsx("div",{children:e.jsxs(J,{label:"Payment Option",name:"paymentType",formik:o,type:"select",children:[e.jsx("option",{value:"",children:"select"}),je.map(a=>{var Z;return((Z=s==null?void 0:s.data)==null?void 0:Z.arrear)>0?e.jsx("option",{value:a==null?void 0:a.value,children:a==null?void 0:a.label},a==null?void 0:a.id):a.value!="isArrearPayment"&&e.jsx("option",{value:a==null?void 0:a.value,children:a==null?void 0:a.label},a==null?void 0:a.id)})]})})]}),((n=o.values)==null?void 0:n.paymentMode)==="CHEQUE"?e.jsx(ye,{formik:o}):((H=o.values)==null?void 0:H.paymentMode)==="DD"?e.jsx(fe,{formik:o}):((G=o.values)==null?void 0:G.paymentMode)==="NEFT"?e.jsx(ue,{formik:o}):null,(($=o.values)==null?void 0:$.paymentType)==="isPartPayment"&&e.jsx("div",{className:"",children:e.jsx(m,{label:"Part Payment Amount",name:"paidAmount",type:"number",formik:o,onInput:((z=o.values)==null?void 0:z.paymentType)==="isPartPayment"?a=>{a.target.value=Math.max(0,parseInt(a.target.value)).toString().slice(0,10)}:null})}),e.jsx("div",{className:"flex justify-center mt-2",children:e.jsxs(Q.Button,{type:"submit",color:"indigo",disabled:!o.isValid,children:["Submit ₹ ",r()]})})]})]})})}const ye=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"Cheque No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Cheque Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload Cheque Image",name:"neftImage",type:"file",onChange:o=>{s.setFieldValue("neftImage",o.target.files[0])}})})]}),fe=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"DD No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"DD Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload DD Image",name:"neftImage",type:"file",onChange:o=>{s.setFieldValue("neftImage",o.target.files[0])}})})]}),ue=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"NEFT No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"NEFT Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload NEFT Image",name:"neftImage",type:"file",onChange:o=>{s.setFieldValue("neftImage",o.target.files[0])}})})]}),ge=oe().shape({paymentMode:N().required("Payment Mode is required"),paymentType:N().required("Payment Type is required"),paidAmount:N().when(["paymentType"],{is:s=>s=="isPartPayment",then:()=>N().required("Part Payment Amount is required")}),chequeNo:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Cheque No is required")}),chequeDate:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Cheque Date is required")}),neftImage:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Cheque Upload is required")}),bankName:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Bank Name is required")}),branchName:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Branch Name is required")}),paymentRemark:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Payment Remark is required")})});function Qe(){var g,T,_,w;const s=se(),{saveLocation:o}=me();re.useState(0);const f=K({}),{id:r}=le(),{pathname:y}=ne(),{result:v}=de((T=(g=y==null?void 0:y.split("/"))==null?void 0:g.slice(0,-1))==null?void 0:T.join("/")),{data:t,isLoading:I}=X({api:V.getDemandDetails,config:{propId:r},value:r,options:{enabled:!!r}}),c=ae({enableReinitialize:!0,initialValues:{paymentMode:"",paymentType:"",chequeNo:"",chequeDate:"",bankName:"",branchName:"",paymentRemark:"",neftImage:"",paidAmount:""},validationSchema:ge,onSubmit:async l=>{k.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+u(),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(x=>{x.isConfirmed&&E(l)}).catch(x=>{var i,d;W.error((d=(i=x==null?void 0:x.response)==null?void 0:i.data)==null?void 0:d.message)})}}),E=async l=>{var i,d,b,p,j,P,D,A,F,C,q,B,M,R,S,U,O,L;let x={};if((l==null?void 0:l.paymentMode)==="ONLINE"){x={propId:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,paidAmount:h(),deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/property/payment-history"};const n=await f.mutateAsync({api:V.iciciPayment,data:x});(i=n==null?void 0:n.data)!=null&&i.status?(o({actionType:"PropertyPaymentOnline",refId:(b=(d=n==null?void 0:n.data)==null?void 0:d.data)==null?void 0:b.requestId,moduleId:1}),W.success((p=n==null?void 0:n.data)==null?void 0:p.message),window.location.href=(P=(j=n==null?void 0:n.data)==null?void 0:j.data)==null?void 0:P.encryptUrl,c.resetForm()):W.error((D=n==null?void 0:n.data)==null?void 0:D.message)}else{(l==null?void 0:l.paymentMode)==="CHEQUE"||(l==null?void 0:l.paymentMode)==="DD"||(l==null?void 0:l.paymentMode)==="NEFT"?x={id:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,chequeNo:l==null?void 0:l.chequeNo,chequeDate:l==null?void 0:l.chequeDate,bankName:l==null?void 0:l.bankName,branchName:l==null?void 0:l.branchName,paymentRemark:l==null?void 0:l.paymentRemark,neftImage:l==null?void 0:l.neftImage,paidAmount:h(),deviceType:"android"}:x={id:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,paidAmount:h(),deviceType:"android"};try{const n=await f.mutateAsync({api:V.holdingPayment,data:x});(A=n==null?void 0:n.data)!=null&&A.status?(o({actionType:"successPropertyPayment",refId:(C=(F=n==null?void 0:n.data)==null?void 0:F.data)==null?void 0:C.transactionId,moduleId:1}),W.success((q=n==null?void 0:n.data)==null?void 0:q.message),s("/amc-app/property/payment-response?response=".concat((M=(B=n==null?void 0:n.data)==null?void 0:B.data)==null?void 0:M.transactionId,"&tranNo=").concat((S=(R=n==null?void 0:n.data)==null?void 0:R.data)==null?void 0:S.TransactionNo),{replace:!0}),c.resetForm()):(W.error((U=n==null?void 0:n.data)==null?void 0:U.message),o({actionType:"failedPropertyPayment",refId:r,moduleId:1}))}catch(n){W.error((L=(O=n==null?void 0:n.response)==null?void 0:O.data)==null?void 0:L.message)}}},h=()=>{var x,i,d,b,p,j,P,D,A,F;let l=0;return((x=c.values)==null?void 0:x.paymentType)=="isFullPayment"&&(l=parseFloat((i=t==null?void 0:t.data)==null?void 0:i.payableAmt)-parseFloat((d=t==null?void 0:t.data)==null?void 0:d.remainAdvance)-parseFloat((p=(b=t==null?void 0:t.data)==null?void 0:b.QuarterlyRebates[0])==null?void 0:p.rebates_amt)),((j=c.values)==null?void 0:j.paymentType)=="isArrearPayment"&&(l=parseFloat((P=t==null?void 0:t.data)==null?void 0:P.arrearPayableAmt)-parseFloat((D=t==null?void 0:t.data)==null?void 0:D.remainAdvance)),((A=c.values)==null?void 0:A.paymentType)=="isPartPayment"&&(l=parseFloat((F=c.values)==null?void 0:F.paidAmount)),l},u=()=>{var l,x,i,d,b,p,j;return((l=t==null?void 0:t.data)==null?void 0:l.totalInterestPenalty)>0&&((x=c.values)==null?void 0:x.paymentType)==="isFullPayment"?Math.round(h()-((i=t==null?void 0:t.data)==null?void 0:i.total_exempted_general_tax)||0):((d=c.values)==null?void 0:d.paymentType)=="isArrearPayment"?Math.round(h()-parseFloat((b=t==null?void 0:t.data)==null?void 0:b.arrear_exempted_general_tax)||0):((p=c.values)==null?void 0:p.paymentType)=="isFullPayment"?Math.round(h()-parseFloat((j=t==null?void 0:t.data)==null?void 0:j.total_exempted_general_tax)||0):Math.round(h()||0)};return te.useEffect(()=>{var l;((l=c.values)==null?void 0:l.paymentType)=="paidAmount"&&h()},[(_=c.values)==null?void 0:_.paidAmount]),I?e.jsx(ee,{}):e.jsxs(xe,{title:"Demand Details",children:[f.isLoading&&e.jsx(ce,{}),e.jsx("div",{className:"flex flex-col h-full py-3 px-4",children:e.jsxs("div",{className:"flex flex-col flex-grow",children:[e.jsx(he,{data:t,permissionResult:v}),e.jsx(be,{data:t}),e.jsx(pe,{data:t}),((w=t==null?void 0:t.data)==null?void 0:w.payableAmt)>0?e.jsx(Ne,{formik:c,data:t,calculateActualAmount:h,PayNow:u}):e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("div",{onClick:()=>s("/amc-app/property/search-holding"),className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"Payment Already Done"})})]})})]})}export{Qe as default};