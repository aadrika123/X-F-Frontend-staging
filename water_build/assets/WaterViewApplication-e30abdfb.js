import{x as R,v as U,z as X,m as Z,W as G,l as i,k as a,o as x,j as t,G as D,M as o,q as H}from"./index-0c13e632.js";function ee(){var g,m,y,N,f,w,A,v,L,u,P,W,V,_,T,j,C,I,$,S,k,E;const{t:l}=R(),{id:c}=U();console.log("param",c),X(`${l("tranWaterViewApplicationPage.waterViewApplicationLabel.label")}`);const b=Z(),{api_getPendingApplicationDetails:q,api_getdocumentscollected:z,header:h}=G(),[e,Y]=i.useState(),[s,J]=i.useState(),[K,n]=i.useState(!1),O=()=>{n(!0),H.post(`${q}`,{applicationId:c},h).then(function(r){console.log("view Water full details ...",r.data.data),Y(r.data.data),n(!1)}).catch(function(r){console.log("==2 details by id error...",r),n(!1)})};i.useEffect(()=>{O()},[c]),console.log(e==null?void 0:e.applicationDetails,"application");const Q=()=>{var r;n(!0),H.post(`${z}`,{applicationId:(r=e==null?void 0:e.applicationDetails)==null?void 0:r.applicationId},h).then(function(d){console.log("documents to be collected ...",d.data.data),J(d.data.data),n(!1)}).catch(function(d){console.log("==2 details by id error...",d),n(!1)})};return i.useEffect(()=>{Q()},[(g=e==null?void 0:e.applicationDetails)==null?void 0:g.applicationId]),console.log("documents to be collected applicationGetData ...",s==null?void 0:s.documentsList),console.log("owner documents list ...",s==null?void 0:s.ownersDocList),a(x,{children:[K&&t(D,{}),t("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:a("div",{className:"col-span-12 rounded-lg p-4",children:[a("div",{className:"flex py-2 justify-center items-center",children:[a("div",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:[" ",l("tranWaterViewApplicationPage.applicationNoLabel.label")," - ",(m=e==null?void 0:e.applicationDetails)==null?void 0:m.application_no]}),a("div",{className:"flex justify-right items-center",children:[t("button",{className:"mr-4 bg-indigo-500  text-white px-4 py-1 shadow-lg hover:scale-105 rounded-sm",children:l("tranWaterViewApplicationPage.applicationDetailsLabel.label")}),t("button",{onClick:()=>b(`/waterApplicationPaymentHistory/${c}`),className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",children:l("tranWaterViewApplicationPage.paymentHistoryLabel.label")})]})]}),a("div",{className:"float-right font-bold text-xl mr-4 ",children:[t("span",{className:"text-base text-gray-600",children:l("tranWaterViewApplicationPage.currentDesignationLabel.label")})," ",t("span",{className:"text-green-600",children:(y=e==null?void 0:e.applicationDetails)==null?void 0:y.current_role_name})]}),a("div",{className:"p-4",children:[a("div",{className:"",children:[a("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[t(o,{className:"inline"})," ",l("tranWaterViewApplicationPage.basicDetailsLabel.label")]}),t("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:a("div",{className:"flex space-x-5 pl-4 ",children:[a("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-lg",children:(N=e==null?void 0:e.applicationDetails)!=null&&N.ward_no?(f=e==null?void 0:e.applicationDetails)==null?void 0:f.ward_no:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:l("tranWaterViewApplicationPage.wardNoLabel.label")})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(w=e==null?void 0:e.applicationDetails)!=null&&w.property_type?(A=e==null?void 0:e.applicationDetails)==null?void 0:A.property_type:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:l("tranWaterViewApplicationPage.propertyTypeLabel.label")})]})]})})]}),a("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[t(o,{className:"inline"})," ",l("tranWaterViewApplicationPage.propertyAddressDetailsLabel.label")]}),a("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[a("div",{className:"flex space-x-10 pl-4 ",children:[a("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:(v=e==null?void 0:e.applicationDetails)!=null&&v.property_no?(L=e==null?void 0:e.applicationDetails)==null?void 0:L.property_no:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:l("tranWaterViewApplicationPage.holdingNoLabel.label")})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:(u=e==null?void 0:e.applicationDetails)!=null&&u.connection_type?(P=e==null?void 0:e.applicationDetails)==null?void 0:P.connection_type:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:l("tranWaterViewApplicationPage.connectionTypeLabel.label")})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(W=e==null?void 0:e.applicationDetails)!=null&&W.category?(V=e==null?void 0:e.applicationDetails)==null?void 0:V.category:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:l("tranWaterViewApplicationPage.categoryLabel.label")})]})]}),t("div",{className:"flex space-x-10  pl-4 mt-4",children:a("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:[(_=e==null?void 0:e.applicationDetails)!=null&&_.address?(T=e==null?void 0:e.applicationDetails)==null?void 0:T.address:"N/A"," , ",(j=e==null?void 0:e.applicationDetails)==null?void 0:j.prop_state]}),t("div",{className:"text-gray-500 text-xs",children:l("tranWaterViewApplicationPage.propertyAddressLabel.label")})]})}),t("div",{})]}),a("div",{className:"mt-10",children:[a("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[t(o,{className:"inline"})," ",l("tranWaterViewApplicationPage.ownerDetailsLabel.label")]}),a("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[t("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:a("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.ownerNameLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.guardianNameLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.mobileNoLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:[" ",l("tranWaterViewApplicationPage.emailLabel.label")]})]})}),t("tbody",{className:"text-sm",children:t(x,{children:(C=e==null?void 0:e.ownerDetails)==null?void 0:C.map((r,d)=>a("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d+1}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.applicant_name?r==null?void 0:r.applicant_name:"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.guardian_name?r==null?void 0:r.guardian_name:"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.mobile_no?r==null?void 0:r.mobile_no:"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.email?r==null?void 0:r.email:"N/A"})]}))})})]})]}),(e==null?void 0:e.calculation)&&a("div",{className:"mt-10",children:[a("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[t(o,{className:"inline"}),l("tranWaterViewApplicationPage.applicationPaymentDetailsLabel.label")]}),a("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[t("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:a("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.chargeCategoryLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.connectionFeeLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.penaltyLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.totalAmountLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.actionLabel.label")})]})}),t("tbody",{className:"text-sm",children:t(x,{children:a("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:1}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(I=e==null?void 0:e.calculation)==null?void 0:I.chargeCatagory}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:($=e==null?void 0:e.calculation)==null?void 0:$.connectionFee}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(S=e==null?void 0:e.calculation)==null?void 0:S.penalty}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(k=e==null?void 0:e.calculation)==null?void 0:k.totalAmount}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t("button",{onClick:()=>b(`/water-application-payment/${c}`),type:"button",className:" px-5 py-2.5 border border-indigo-500 hover:text-indigo-100 font-medium text-xs leading-tight uppercase rounded shadow-xl bg-indigo-700 hover:bg-indigo-800 text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:l("tranWaterViewApplicationPage.payNowLabel.label")})})]})})})]})]}),a("h1",{className:"px-1 font-semibold mt-8 font-serif text-gray-500",children:[t(o,{className:"inline"}),l("tranWaterViewApplicationPage.documentsToBeCollectedLabel.label")]}),t("div",{className:"border bg-white shadow-2xl p-5",children:(s==null?void 0:s.documentsList)&&a("div",{className:"",children:[t("p",{className:"text-xl font-semibold",children:l("tranWaterViewApplicationPage.applicationDocumentLabel.label")}),a("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[t("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-indigo-100",children:a("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.documentNameLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.mandatoryLabel.label")}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterViewApplicationPage.documentTypesLabel.label")})]})}),t("tbody",{className:"text-sm",children:t(x,{children:(E=s==null?void 0:s.documentsList)==null?void 0:E.map((r,d)=>{var M,B;return a("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d+1}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r.refDocName}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r.isMadatory==1?"Yes":"No"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs flex whitespace-nowrap ",children:(B=(M=s==null?void 0:s.documentsList[d])==null?void 0:M.docVal)==null?void 0:B.map(p=>a("div",{className:"flex text-sm mx-1",children:[p==null?void 0:p.dispayName,","]}))})]})})})})]})]})})]})]})}),t("div",{className:"w-full h-60"})]})}export{ee as default};