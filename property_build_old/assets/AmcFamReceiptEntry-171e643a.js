import{ar as ve,j as e,as as $e,Y as Ze,r as t,u as Ge,e as Je,A as Ke,b as p,n as d,at as Qe,am as Xe,ac as fe}from"./index-eb82147c.js";import"./AmcFamReceipt-da19380f.js";const Ee=ve(e.jsx("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),De=ve(e.jsx("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");function ea(l){return e.jsx(e.Fragment,{children:(l==null?void 0:l.isLoading)&&e.jsx($e,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}function aa(){var y,T,S,w,L,k,A,_,W,f,E,D,v,u,C,M,B,O,F,I,H,q,R,U,Y,z,V,$,Z,G,J,K,Q,X,ee,ae,se,le,re,de,ce,te,ie,ne,me,xe,be,oe,he,pe,je,Ne,ge,Pe,ye,Te,Se,we,Le,ke,Ae,_e;const{t:l}=Ze(),[sa,j]=t.useState(!1),[ue,n]=t.useState(!1),{propId:x}=Ge(),{propertyGenerateHoldingOrderId:la,api_postSafPaymentOffline:ra,api_getHoldingDues:da,api_getsafDemandById:Ce,api_paysafoffline_Mode:Me,api_Online_Payment:Be}=Xe(),Oe=Je(),[ca,b]=t.useState(!1),[a,N]=t.useState(null),[ta,o]=t.useState(!1);t.useState(!0);const[m,g]=t.useState(null),[h,Fe]=t.useState(""),[Ie,He]=t.useState(!1);t.useState({id:x,paymentMode:"",payment_status:1});const qe=()=>{Oe(`/amc-fam-receipt/${x}`)};t.useEffect(()=>{Re()},[]);const Re=()=>{b(!0),o(!1),n(!0);let s=Ce,r={id:x,paymentMode:"CASH"};Ke.post(s,r,p()).then(function(i){var c;(c=i==null?void 0:i.data)!=null&&c.status?(N(i.data.data),n(!1)):(j(!1),activateBottomErrorCard(!0,"Error occured in submitting form. Please try again later."))}).catch(function(i){n(!1)})},Ue=s=>{o(!1),b(!0);let r,i;r=Be,i={id:90,paymentMode:"Online"},fe.post(r,i,p()).then(c=>{c.data.status&&window.open(`${c.data.data}`)}).catch(c=>{})},Ye=s=>{o(!1),b(!0);let r,i;r=Me,i={id:90,paymentMode:"CASH"},fe.post(r,i,p()).then(function(c){var We;(We=c==null?void 0:c.data)!=null&&We.status?(N(c.data.data),n(!1)):(j(!1),activateBottomErrorCard(!0,"Error occured in submitting form. Please try again later."),n(!1))}).catch(function(c){n(!1)})},ze=s=>{Fe(s.target.value),He(!0)},Ve=()=>{h=="1"?Ue():h=="2"?Ye():alert("Please select a payment mode.")},P=s=>{s==m?g(null):g(s)};return e.jsxs("div",{children:[ue&&e.jsx(ea,{}),e.jsxs("div",{className:"font-bold md:text-xl pt-8 py-4",children:["Amc Fam Payment Details",((y=a==null?void 0:a.basicDetails)==null?void 0:y.payment_status)==1?e.jsx(e.Fragment,{children:e.jsx("h3",{class:"md:text-2xl text-base font-bold text-green-600   text-right flex-1",children:"You have already Paid!"})}):""]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((T=a==null?void 0:a.basicDetails)==null?void 0:T.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Saf No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((S=a==null?void 0:a.basicDetails)==null?void 0:S.prop_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Address"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:d((w=a==null?void 0:a.basicDetails)==null?void 0:w.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower's ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((L=a==null?void 0:a.basicDetails)==null?void 0:L.is_hoarding_board)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board's ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((k=a==null?void 0:a.basicDetails)==null?void 0:k.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property has a Petrol Pump?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((A=a==null?void 0:a.basicDetails)==null?void 0:A.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((_=a==null?void 0:a.basicDetails)==null?void 0:_.zone)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[d((W=a==null?void 0:a.basicDetails)==null?void 0:W.holding_no)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((f=a==null?void 0:a.basicDetails)==null?void 0:f.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((E=a==null?void 0:a.basicDetails)==null?void 0:E.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((D=a==null?void 0:a.basicDetails)==null?void 0:D.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((v=a==null?void 0:a.basicDetails)==null?void 0:v.doc_upload_status)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Document Upload Status"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((u=a==null?void 0:a.basicDetails)==null?void 0:u.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((C=a==null?void 0:a.basicDetails)==null?void 0:C.payment_status)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Payment Status"})]})]})]})}),a!=null&&e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between px-1 flex  font-serif underline mt-4 bg-blue-300 py-3",children:[e.jsxs("h1",{className:"flex gap-2",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Initial Tax Description"]}),e.jsxs("button",{onClick:()=>P(1),children:[m==1?e.jsx(Ee,{}):e.jsx(De,{}),"  "]})]}),e.jsxs("div",{className:`${m==1?"":"hidden"} w-full h-auto bg-white  rounded shadow-lg text-sm p-4`,children:[e.jsx("div",{className:"hover:outline hover:out-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2",children:[e.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.floorWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.builtUpAreaLabel.label")," (in Sqmt.) "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.alvLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.maintenanceLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.valueAfterMaintenanceLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.agingAmountLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.taxValueLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (30%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" (3%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label"),e.jsx("small",{className:"block",children:" (1%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]})]})}),e.jsx("tbody",{children:(M=a==null?void 0:a.floorsTaxes)==null?void 0:M.map(s=>e.jsxs("tr",{className:"text-xs font-semibold text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:Qe(s==null?void 0:s.buildupAreaInSqmt)}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.alv}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.maintantance10Perc,"(",s==null?void 0:s.maintancePerc,"%)"]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.valueAfterMaintance}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.agingAmt,"(",s==null?void 0:s.agingPerc,"%) "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.taxValue}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.treeTax}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.professionalTax,"(",s==null?void 0:s.professionalTaxPerc,"%)"]}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.stateEducationTax,"(",s==null?void 0:s.stateEducationTaxPerc,"%)"]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.financialYearWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:a!=null&&((B=Object.entries(a==null?void 0:a.fyearWiseTaxes))==null?void 0:B.map(([s,r])=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[l("mainSafPaymentDetailPage.financialYearLabel.label")," : ",s]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[r==null?void 0:r.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.treeTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.professionalTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.stateEducationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.totalTax})]})]})))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(O=a==null?void 0:a.grandTaxes)==null?void 0:O.generalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(F=a==null?void 0:a.grandTaxes)==null?void 0:F.roadTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.grandTaxes.firefightingTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(I=a==null?void 0:a.grandTaxes)==null?void 0:I.educationTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(H=a==null?void 0:a.grandTaxes)==null?void 0:H.waterTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(q=a==null?void 0:a.grandTaxes)==null?void 0:q.cleanlinessTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(R=a==null?void 0:a.grandTaxes)==null?void 0:R.sewerageTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(U=a==null?void 0:a.grandTaxes)==null?void 0:U.treeTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(Y=a==null?void 0:a.grandTaxes)==null?void 0:Y.professionalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(z=a==null?void 0:a.grandTaxes)==null?void 0:z.stateEducationTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(V=a==null?void 0:a.grandTaxes)==null?void 0:V.totalTax," "]})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.grandTotalLabel.label")," - ",($=a==null?void 0:a.grandTaxes)==null?void 0:$.totalTax," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.rebateAmountLabel.label")," - ",a==null?void 0:a.rebateAmt," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.totalPayableAmountLabel.label")," - ",a==null?void 0:a.payableAmt," "]})]})]})]}),e.jsxs("div",{className:"flex justify-between px-1 flex  font-serif underline mt-4 bg-blue-300 py-3",children:[e.jsxs("h1",{className:"flex gap-2",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Ulbwise Tax Description"]}),e.jsxs("button",{onClick:()=>P(2),children:[m==2?e.jsx(Ee,{}):e.jsx(De,{}),"  "]})]}),e.jsxs("div",{className:`${m==2?"":"hidden"}`,children:[e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2",children:[e.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.floorWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.builtUpAreaLabel.label")," (in Sqmt.) "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.alvLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.maintenanceLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.valueAfterMaintenanceLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.agingAmountLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.taxValueLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (30%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" (3%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label"),e.jsx("small",{className:"block",children:" (1%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]})]})}),e.jsx("tbody",{children:a!=null&&((G=(Z=a==null?void 0:a.ulbWiseTax)==null?void 0:Z.floorsTaxes)==null?void 0:G.map(s=>e.jsxs("tr",{className:"text-xs font-semibold text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.buildupAreaInSqmt}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.alv}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.maintantance10Perc,"(",s==null?void 0:s.maintancePerc,"%)"]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.valueAfterMaintance}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.agingAmt,"(",s==null?void 0:s.agingPerc,"%) "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.taxValue}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.treeTax}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.professionalTax,"(",s==null?void 0:s.professionalTaxPerc,"%)"]}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.stateEducationTax,"(",s==null?void 0:s.stateEducationTaxPerc,"%)"]})]})))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.financialYearWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:((J=a==null?void 0:a.ulbWiseTax)==null?void 0:J.length)>0&&((Q=Object.entries((K=a==null?void 0:a.ulbWiseTax)==null?void 0:K.fyearWiseTaxes))==null?void 0:Q.map(([s,r])=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",s]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[r==null?void 0:r.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.treeTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.professionalTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.stateEducationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.totalTax})]})]})))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(ee=(X=a==null?void 0:a.ulbWiseTax)==null?void 0:X.grandTaxes)==null?void 0:ee.generalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(se=(ae=a==null?void 0:a.ulbWiseTax)==null?void 0:ae.grandTaxes)==null?void 0:se.roadTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(re=(le=a==null?void 0:a.ulbWiseTax)==null?void 0:le.grandTaxes)==null?void 0:re.firefightingTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ce=(de=a==null?void 0:a.ulbWiseTax)==null?void 0:de.grandTaxes)==null?void 0:ce.educationTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ie=(te=a==null?void 0:a.ulbWiseTax)==null?void 0:te.grandTaxes)==null?void 0:ie.waterTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(me=(ne=a==null?void 0:a.ulbWiseTax)==null?void 0:ne.grandTaxes)==null?void 0:me.cleanlinessTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(be=(xe=a==null?void 0:a.ulbWiseTax)==null?void 0:xe.grandTaxes)==null?void 0:be.sewerageTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(he=(oe=a==null?void 0:a.ulbWiseTax)==null?void 0:oe.grandTaxes)==null?void 0:he.treeTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(je=(pe=a==null?void 0:a.ulbWiseTax)==null?void 0:pe.grandTaxes)==null?void 0:je.professionalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ge=(Ne=a==null?void 0:a.ulbWiseTax)==null?void 0:Ne.grandTaxes)==null?void 0:ge.stateEducationTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ye=(Pe=a==null?void 0:a.ulbWiseTax)==null?void 0:Pe.grandTaxes)==null?void 0:ye.totalTax," "]})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.grandTotalLabel.label")," - ",(Se=(Te=a==null?void 0:a.ulbWiseTax)==null?void 0:Te.grandTaxes)==null?void 0:Se.totalTax," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.rebateAmountLabel.label")," - ",(we=a==null?void 0:a.ulbWiseTax)==null?void 0:we.rebateAmt," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.totalPayableAmountLabel.label")," - ",(Le=a==null?void 0:a.ulbWiseTax)==null?void 0:Le.payableAmt," "]})]})]})]})]})]}),((ke=a==null?void 0:a.basicDetails)==null?void 0:ke.payment_status)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:px-10  text-right pt-4  text-lg font-semibold",children:[l("mainSafPaymentDetailPage.totalPayableAmountLabel.label")," ₹ ",(Ae=a==null?void 0:a.ulbWiseTax)==null?void 0:Ae.payableAmt,"    "]}),e.jsxs("div",{className:"md:px-10 text-right pt-2 flex-1 ",children:[e.jsx("span",{className:"mb-2 mx-3 font-semibold",children:"Choose Payment Mode"}),e.jsxs("select",{className:"text-center rounded-md p-1",onChange:ze,value:h,children:[e.jsx("option",{value:"0",className:"text-center",children:"Select"}),e.jsx("option",{value:"1",className:"text-center",children:"Online Payment"}),e.jsx("option",{value:"2",className:"text-center",children:"Offline Payment"})]})]}),Ie&&e.jsx("div",{className:"md:px-10 text-right flex-1 text-lg font-semibold",children:e.jsx("button",{onClick:Ve,type:"submit",className:"px-6 py-2 mt-6 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:"Pay Now"})})]}):"",((_e=a==null?void 0:a.basicDetails)==null?void 0:_e.payment_status)==1?e.jsx(e.Fragment,{children:e.jsx("div",{class:"bg-white p-6 shadow-xl md:mx-auto",children:e.jsx("div",{class:"py-10 text-center  justify-center flex items-center ",children:e.jsx("div",{className:"px-6 py-2 mt-6 shadow-xl bg-indigo-600  rounded hover:bg-indigo-500 cursor-pointer text-white font-semibold",onClick:qe,children:l("mainPropertyPaymentPage.viewReceipt.label")})})})}):""]})}function ma(){return t.useRef(),e.jsx("div",{className:"container",children:e.jsx("div",{className:"w-full   m-2 p-2",children:e.jsx(aa,{})})})}export{ma as default};