import{w as $,r as c,u as k,a as M,ai as O,j as e,aj as R,S as U,$ as W,a5 as s,b0 as Y,aN as G,A as J,a3 as K,f as V}from"./index-47b523be.js";import{b as X}from"./brief-77d733cf.js";function ee(){var b,g,m,p,j,f,N,y,u,v,w,L,S,P,H,z,_,T,A,F;const{t:l}=$(),[a,d]=c.useState(),[i,n]=c.useState(),[B,x]=c.useState(!1),[C,o]=c.useState(!1),{id:h}=k(),{api_getDirectHoldingDemandById:E}=V(),I=M();O("Property Demand");const Q=()=>{o(!1),x(!0);let r={propId:h};J.post(`${E}`,r,{timeout:6e4}).then(function(t){var q;console.log("view demand direct..",t==null?void 0:t.data),(q=t==null?void 0:t.data)!=null&&q.status,d(t==null?void 0:t.data.data),n(t==null?void 0:t.data),x(!1)}).catch(function(t){o(!0),x(!1),K.error("Something went wrong !")})};return c.useEffect(()=>{Q()},[]),B?e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx("div",{className:"min-h-screen"})]}):C?e.jsx(U,{title:"Server is busy",desc:l("tranSearchHoldingPage.serverTooBusyLabel.label"),buttonText:l("tranSearchHoldingPage.viewDashboardLabel.label"),buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(W,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:"w-full px-2 md:px-10 mx-auto mt-10",children:e.jsxs("div",{className:"flex flex-row flex-wrap justify-center",children:[e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s((b=a==null?void 0:a.basicDetails)==null?void 0:b.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.holdingNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s((g=a==null?void 0:a.basicDetails)==null?void 0:g.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.wardNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:s((m=a==null?void 0:a.basicDetails)==null?void 0:m.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.newWardNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s((p=a==null?void 0:a.basicDetails)==null?void 0:p.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.ownershipTypeLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s((j=a==null?void 0:a.basicDetails)==null?void 0:j.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.propertyTypeLabel.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s((f=a==null?void 0:a.basicDetails)==null?void 0:f.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.zoneLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s((N=a==null?void 0:a.basicDetails)==null?void 0:N.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.propertyHasMobileTowerLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[s((y=a==null?void 0:a.basicDetails)==null?void 0:y.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.propertyHasHoardingBoardLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s((u=a==null?void 0:a.basicDetails)==null?void 0:u.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.isPropertyPetrolPumpLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s((v=a==null?void 0:a.basicDetails)==null?void 0:v.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:l("tranSearchHoldingPage.rainwaterHarvestingLabel.label")})]})]})]})}),(i==null?void 0:i.status)&&e.jsx("div",{class:" pt-4 w-full",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-row flex-wrap",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl text-left",children:[e.jsx("img",{src:Y,alt:"pin",className:"w-5 inline"})," ",l("tranSearchHoldingPage.taxDetailsLabel.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("tranSearchHoldingPage.rebateLabel.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[l("tranSearchHoldingPage.penaltyLabel.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("tranSearchHoldingPage.totalTaxLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("tranSearchHoldingPage.payableAmountLabel.label")})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s((w=a==null?void 0:a.duesList)==null?void 0:w.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s((L=a==null?void 0:a.duesList)==null?void 0:L.onePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s((S=a==null?void 0:a.duesList)==null?void 0:S.totalDues)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s((P=a==null?void 0:a.duesList)==null?void 0:P.payableAmount)})]})})})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-4",children:[l("tranSearchHoldingPage.totalDuesLabel.label"),": ",e.jsx("span",{className:"font-semibold text-lg",children:s((H=a==null?void 0:a.duesList)==null?void 0:H.totalDues)})," "]}),e.jsxs("div",{className:"col-span-4",children:[" ",l("tranSearchHoldingPage.duesFromLabel.label"),": ",e.jsx("span",{className:"font-semibold text-lg",children:s((z=a==null?void 0:a.duesList)==null?void 0:z.duesFrom)})," "]}),e.jsxs("div",{className:"col-span-4",children:[" ",l("tranSearchHoldingPage.duesToLabel.label"),": ",e.jsx("span",{className:"font-semibold text-lg",children:s((_=a==null?void 0:a.duesList)==null?void 0:_.duesTo)})," "]}),e.jsxs("div",{className:"col-span-4 mt-5",children:[l("tranSearchHoldingPage.totalQuartersLabel.label"),": ",e.jsx("span",{className:"font-semibold text-lg",children:s((T=a==null?void 0:a.duesList)==null?void 0:T.totalQuarters)})," "]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl mt-10",children:[e.jsx("img",{src:X,alt:"pin",className:"w-5 inline"})," ",l("tranSearchHoldingPage.demandOverviewLabel.label")]}),e.jsxs("table",{className:"min-w-full leading-normal bg-white rounded-lg shadow-lg mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:l("tranSearchHoldingPage.arvLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:l("tranSearchHoldingPage.quarterLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:l("tranSearchHoldingPage.quarterYearLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:l("tranSearchHoldingPage.additionalTaxLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:l("tranSearchHoldingPage.quarterlyTaxLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:l("tranSearchHoldingPage.payableAmountLabel.label")})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(A=a==null?void 0:a.demandList)==null?void 0:A.map((r,t)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(r==null?void 0:r.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(r==null?void 0:r.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(r==null?void 0:r.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(r==null?void 0:r.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(r==null?void 0:r.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(r==null?void 0:r.balance)})]}))})})]}),e.jsx("div",{className:"mt-10 flex",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold text-gray-600 text-xl",children:[l("tranSearchHoldingPage.totalPayableAmountLabel.label")," "]}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:G((F=a==null?void 0:a.duesList)==null?void 0:F.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsx("button",{onClick:()=>I(`/property-payment/${h}/direct`),type:"submit",className:" px-6 py-2 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:l("tranSearchHoldingPage.payNowLabel.label")})})]})})]})]})}),(i==null?void 0:i.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[i==null?void 0:i.message," "]})})]})}),e.jsx("div",{className:"w-full mt-20 h-60"})]})}export{ee as default};