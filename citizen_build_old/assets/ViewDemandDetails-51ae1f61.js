import{M as Pa,r as c,v as Ea,u as Ca,a as Fa,j as a,ai as Ma,S as Ba,aK as Ia,a4 as t,a_ as Oa,ad as Ta,bh as Ra,A as Ua,w as Va,f as Wa}from"./index-82348bae.js";import{T as qa}from"./TopTabs-b906c93a.js";const za={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};Pa.setAppElement("#root");function Ya(Ha){var b,m,h,p,j,N,g,y,T,P,f,u,w,S,L,k,A,v,_,E,C,F,M,B,I,O,R,U,V,W,q,z,H,G,K,Y,Z,J,Q,X,$,D,aa,ea,sa,la,ra,ta,ca,da,ia,na,xa,oa,ba,ma;const[e,fa]=c.useState(),[ua,wa]=c.useState(""),[Sa,d]=c.useState(!1),[La,n]=c.useState(!1),[ka,x]=c.useState(!1),{t:r}=Ea(),{id:o}=Ca(),{api_getsafDemandById:Aa}=Wa();Fa();function i(){x(!1)}const va=()=>{n(!1),d(!0),Ua.post(Aa,{id:o},Va()).then(function(s){var l,ha,pa,ja,Na,ga,ya;console.log("view demand for my saf..",s==null?void 0:s.data),console.log(" rohan ==>",e==null?void 0:e.data.floorsTaxes),(l=s==null?void 0:s.data)!=null&&l.status&&(wa((ha=s==null?void 0:s.data)==null?void 0:ha.safNo),fa(s==null?void 0:s.data),_a((ja=(pa=s==null?void 0:s.data)==null?void 0:pa.data)==null?void 0:ja.paymentStatus,(ya=(ga=(Na=s==null?void 0:s.data)==null?void 0:Na.data)==null?void 0:ga.basicDetails)==null?void 0:ya.doc_upload_status)),d(!1)}).catch(function(s){console.log("==at saf separate error...",s),n(!0),d(!1)})},_a=(s,l)=>{s==0&&l==0&&(console.log("inside useffect"),x(!0))};return c.useEffect(()=>{va()},[]),Sa?a.jsxs(a.Fragment,{children:[a.jsx(Ma,{}),a.jsx("div",{className:"min-h-screen"})]}):La?a.jsx(Ba,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log((b=e==null?void 0:e.data)==null?void 0:b.basicDetails),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"w-full mx-auto",children:[a.jsxs("div",{className:"mt-8",children:[a.jsx(qa,{payButton:(e==null?void 0:e.paymentStatus)==0&&((m=e==null?void 0:e.basicDetails)==null?void 0:m.doc_upload_status)==1,payableAmount:(h=e==null?void 0:e.amounts)==null?void 0:h.payableAmount,title:"Demand Details",type:"application",applicationFullData:(p=e==null?void 0:e.data)==null?void 0:p.basicDetails,id:o,safNo:ua,active:"demand"}),(e==null?void 0:e.paymentStatus)===1&&a.jsx("div",{className:"",children:a.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:"All Demand Paid"})})]}),(e==null?void 0:e.paymentStatus)==0&&((j=e==null?void 0:e.basicDetails)==null?void 0:j.doc_upload_status)==0&&a.jsx("div",{className:"",children:a.jsxs("div",{className:"items-center text-yellow-600",children:[a.jsx(Ia,{className:"inline mr-2"}),"Upload all your property related documents first then pay your property tax to send your application for verification"]})}),a.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:a.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[a.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((g=(N=e==null?void 0:e.data)==null?void 0:N.basicDetails)==null?void 0:g.saf_no)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((T=(y=e==null?void 0:e.data)==null?void 0:y.basicDetails)==null?void 0:T.ward_no)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-semibold text-md",children:t((f=(P=e==null?void 0:e.data)==null?void 0:P.basicDetails)==null?void 0:f.ownership_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((w=(u=e==null?void 0:e.data)==null?void 0:u.basicDetails)==null?void 0:w.property_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),a.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((L=(S=e==null?void 0:e.data)==null?void 0:S.basicDetails)==null?void 0:L.holding_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((A=(k=e==null?void 0:e.data)==null?void 0:k.basicDetails)==null?void 0:A.is_mobile_tower)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"font-semibold text-md",children:[t((_=(v=e==null?void 0:e.data)==null?void 0:v.basicDetails)==null?void 0:_.is_hoarding_board)," "]}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-semibold text-md",children:t((C=(E=e==null?void 0:e.data)==null?void 0:E.basicDetails)==null?void 0:C.is_petrol_pump)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((M=(F=e==null?void 0:e.data)==null?void 0:F.basicDetails)==null?void 0:M.is_water_harvesting)}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),a.jsx("div",{className:"",children:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mt-10",children:[a.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[a.jsx("img",{src:Oa,alt:"pin",className:"w-5 inline"})," Tax Details"]}),(e==null?void 0:e.status)&&a.jsxs("div",{className:"",children:[a.jsxs("h1",{className:"px-1 flex  font-serif underline mt-4 -ml-3",children:[a.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),a.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),a.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[a.jsxs("div",{className:" border-gray-200 p-2",children:[a.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:a.jsx("h1",{className:"p-2",children:"Floor Wise Tax Bifurcation "})}),a.jsx("div",{className:"w-full overflow-auto",children:a.jsxs("table",{className:"table-auto w-full ",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.builtUpAreaLabel.label")," (in Sqmt.) "]}),a.jsx("th",{className:"border border-collapse  p-2",children:"Rate "}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.alvLabel.label"),"  "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.maintenanceLabel.label"),"  "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.valueAfterMaintenanceLabel.label")," "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.agingAmountLabel.label")," "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.taxValueLabel.label")," "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.generalTaxLabel.label")," ",a.jsx("small",{className:"block",children:" (30%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.roadTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" (3%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.educationTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.sewageTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.treeTaxLabel.label"),a.jsx("small",{className:"block",children:" (1%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.professionalTaxLabel.label"),a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",a.jsx("small",{className:"block"})]})]})}),a.jsx("tbody",{children:(I=(B=e==null?void 0:e.data)==null?void 0:B.floorsTaxes)==null?void 0:I.map(s=>a.jsxs("tr",{className:"text-xs font-semibold text-center",children:[a.jsx("td",{className:"border border-collapse p-2",children:Ta(s==null?void 0:s.buildupAreaInSqmt)}),a.jsx("td",{className:"border border-collapse p-2",children:Ta(s==null?void 0:s.rate)}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.alv}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.maintantance10Perc,"(",s==null?void 0:s.maintancePerc,"%)"]}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.valueAfterMaintance}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.agingAmt,"(",s==null?void 0:s.agingPerc,"%) "]}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.taxValue}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.generalTax,"  "]}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.roadTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.firefightingTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.educationTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.waterTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.cleanlinessTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.sewerageTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.treeTax}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.professionalTax,"(",s==null?void 0:s.professionalTaxPerc,"%)"]}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.stateEducationTax,"(",s==null?void 0:s.stateEducationTaxPerc,"%)"]})]}))})]})})]}),a.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[a.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:a.jsx("h1",{className:"p-2",children:"Financial Year Wise Tax Bifurcation "})}),a.jsx("div",{className:"w-full overflow-auto",children:a.jsxs("table",{className:"table-auto w-full ",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.generalTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.roadTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.educationTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterTaxLabel.label"),"  ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.cleanlinessTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.treeTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:["Tax 1 ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.openPlotTax.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),a.jsx("tbody",{children:(R=Object.entries((O=e==null?void 0:e.data)==null?void 0:O.fyearWiseTaxes))==null?void 0:R.map(([s,l])=>a.jsxs(a.Fragment,{children:[a.jsx("tr",{children:a.jsx("td",{colSpan:17,children:a.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",s]})})}),a.jsxs("tr",{className:"font-semibold text-xs text-center",children:[a.jsxs("td",{className:"border border-collapse p-2",children:[l==null?void 0:l.generalTax,"  "]}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.roadTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.firefightingTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.educationTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.waterTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.cleanlinessTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.sewerageTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.treeTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.tax1}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.professionalTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.stateEducationTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.openPloatTax}),a.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.totalTax})]})]}))})]})})]}),a.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[a.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:a.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation "})}),a.jsx("div",{className:"w-full overflow-auto",children:a.jsxs("table",{className:"table-auto w-full ",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.generalTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.roadTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.educationTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),"  ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.treeTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:["Tax 1 ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.professionalTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.openPlotTax.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),a.jsx("tbody",{children:a.jsxs("tr",{className:"font-semibold text-xs",children:[a.jsxs("td",{className:"border border-collapse p-2",children:[(V=(U=e==null?void 0:e.data)==null?void 0:U.grandTaxes)==null?void 0:V.generalTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(q=(W=e==null?void 0:e.data)==null?void 0:W.grandTaxes)==null?void 0:q.roadTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(z=e==null?void 0:e.data)==null?void 0:z.grandTaxes.firefightingTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(G=(H=e==null?void 0:e.data)==null?void 0:H.grandTaxes)==null?void 0:G.educationTax,"  "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(Y=(K=e==null?void 0:e.data)==null?void 0:K.grandTaxes)==null?void 0:Y.waterTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(J=(Z=e==null?void 0:e.data)==null?void 0:Z.grandTaxes)==null?void 0:J.cleanlinessTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(X=(Q=e==null?void 0:e.data)==null?void 0:Q.grandTaxes)==null?void 0:X.sewerageTax,"  "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(D=($=e==null?void 0:e.data)==null?void 0:$.grandTaxes)==null?void 0:D.treeTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(ea=(aa=e==null?void 0:e.data)==null?void 0:aa.grandTaxes)==null?void 0:ea.tax1," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(la=(sa=e==null?void 0:e.data)==null?void 0:sa.grandTaxes)==null?void 0:la.professionalTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(ta=(ra=e==null?void 0:e.data)==null?void 0:ra.grandTaxes)==null?void 0:ta.stateEducationTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(da=(ca=e==null?void 0:e.data)==null?void 0:ca.grandTaxes)==null?void 0:da.openPloatTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(na=(ia=e==null?void 0:e.data)==null?void 0:ia.grandTaxes)==null?void 0:na.totalTax," "]})]})})]})}),a.jsxs("div",{className:"bg-white py-4",children:[a.jsxs("h1",{className:"font-semibold p-1",children:["* Grand Total - ",(oa=(xa=e==null?void 0:e.data)==null?void 0:xa.grandTaxes)==null?void 0:oa.totalTax," "]}),a.jsxs("h1",{className:"font-semibold p-1",children:["* Reabte Amount - ",(ba=e==null?void 0:e.data)==null?void 0:ba.rebateAmt," "]}),a.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount - ",(ma=e==null?void 0:e.data)==null?void 0:ma.payableAmt," "]})]})]})]})]})]}),a.jsxs("div",{className:"mt-10",children:[(e==null?void 0:e.details)&&{},a.jsx("div",{className:"h-20 w-full"})]})]})})]}),a.jsx(Pa,{isOpen:ka,onRequestClose:i,style:za,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[a.jsx("button",{onClick:i,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:a.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:a.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),a.jsxs("div",{class:"p-6 text-center",children:[a.jsxs("div",{className:"w-full flex h-10",children:[" ",a.jsx("span",{className:"mx-auto",children:a.jsx(Ra,{className:"",size:30})})]}),a.jsx("h3",{class:"mb-5 text-lg font-normal  text-gray-500",children:"Upload document first then pay tax"}),a.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-10 py-2.5 text-center mr-2",onClick:i,children:"OK"})]})]})})]}))}export{Ya as default};