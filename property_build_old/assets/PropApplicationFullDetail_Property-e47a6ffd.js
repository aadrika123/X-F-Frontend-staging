import{Y as T,r as o,e as R,u as L,j as e,a5 as W,T as q,A as S,b as C,K,a as Z,B as Q,S as J,n as l,aQ as X,x as w,ab as h,ah as M,P as D,g as F}from"./index-a34664f8.js";import{T as ee}from"./TopTabs-f5af0d37.js";import{C as se}from"./CitizenApplyApiList-bb93688c.js";function te(d){var p;const{t:a}=T(),[O,z]=o.useState(null),[B,s]=o.useState(!1),[_,P]=o.useState(!1),n=R(),{id:i}=L(),{checkFormStatus:I}=se(),H=(r,g)=>{z(g),s(r)},y=(r,g)=>{if(!["Re Assessment","Mutation","Bifurcation","Concession","Harvesting","Objection"].includes(r)){n(`${g}/${i}`);return}let m;r=="Re Assessment"&&(m={type:"Reassesment",propertyId:i}),r=="Mutation"&&(m={type:"Mutation",propertyId:i}),r=="Bifurcation"&&(m={type:"Bifurcation",propertyId:i}),r=="Concession"&&(m={type:"Concession",propertyId:i}),r=="Harvesting"&&(m={type:"Harvesting",propertyId:i}),r=="Objection"&&(m={type:"Objection",propertyId:i}),P(!0),S.post(I,m,C()).then(c=>{var k,A,j,u;console.log("form status => ",c),(A=(k=c==null?void 0:c.data)==null?void 0:k.data)!=null&&A.inWorkflow?H(!0,(u=(j=c==null?void 0:c.data)==null?void 0:j.data)==null?void 0:u.message):n(`${g}/${i}`)}).catch(c=>{console.log("error getting form status => ",c)}).finally(()=>P(!1))},N=r=>{if(!["Re Assessment","Mutation","Bifurcation","Concession","Harvesting","Objection","View Saf","Comparitive Demand","Demand Receipt"].includes(r))return null;if(r=="Re Assessment")return a("mainHoldingPage.holdingReAssessment.label");if(r=="Mutation")return a("mainHoldingPage.holdingMutation.label");if(r=="Bifurcation")return a("mainHoldingPage.holdingBifurcation.label");if(r=="Concession")return a("mainHoldingPage.holdingConcession.label");if(r=="Harvesting")return a("mainHoldingPage.holdingHarvesting.label");if(r=="View Saf")return a("mainHoldingPage.holdingViewSaf.label");if(r=="Comparitive Demand")return a("mainHoldingPage.holdingComparitiveDemand.label");if(r=="Demand Receipt")return a("mainHoldingPage.holdingDemandReceipt.label");if(r=="Objection")return a("mainHoldingPage.holdingObjection.label")};return o.useEffect(()=>{N()},[window.localStorage.lang]),e.jsxs(e.Fragment,{children:[B&&e.jsx(W,{activateBottomErrorCard:H,errorTitle:O}),_&&e.jsx(q,{color:"#818cf8"}),!_&&e.jsx("div",{className:"flex gap-y-4 flex-wrap justify-center flex-row md:py-2 w-full items-center sm:justify-end",children:(p=d==null?void 0:d.permissionData)==null?void 0:p.map((r,g)=>e.jsx("button",{className:`cypress_button${g} mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base hover:bg-indigo-500 hover:text-white`,onClick:()=>{(r==null?void 0:r.action_name)=="View Saf"?n(`${r==null?void 0:r.endpoint}/${d==null?void 0:d.safId}`):y(r==null?void 0:r.action_name,r==null?void 0:r.endpoint)},children:N(r==null?void 0:r.lebel)}))})]})}function xe(){var $,E;const{t:d}=T(),{id:a}=L();console.log("param",a),R(),K(),console.log("last url.......",window.history.back);const{api_getPropHoldingDetailsById:O,api_updateMobileNo:z}=D(),{api_getPermissionByUser:B}=F(),[s,_]=o.useState(),[P,n]=o.useState(!1),[i,I]=o.useState(null),[H,y]=o.useState(!1),[N,p]=o.useState(null),[r,g]=o.useState(null),[v,m]=o.useState(""),[c,k]=o.useState(""),[A,j]=o.useState(!1);Z("Holding Details");const u=t=>/^[0-9]{10}$/.test(t),V=()=>{y(!1),n(!0),S.post(O,{propertyId:a},C()).then(function(t){var x,f,b;console.log("view prop prop full details at property ...",(x=t==null?void 0:t.data)==null?void 0:x.data),(f=t==null?void 0:t.data)!=null&&f.status?(_((b=t==null?void 0:t.data)==null?void 0:b.data),n(!1)):y(!0)}).catch(function(t){console.log("==2 details by id error...",t),y(!0),n(!1)})},U=()=>{const t={module:1};console.log("before permission fetch...",t),S.post(B,t,C()).then(function(x){var f,b;console.log("after permission response ...",(f=x==null?void 0:x.data)==null?void 0:f.data),I((b=x==null?void 0:x.data)==null?void 0:b.data)}).catch(function(x){console.log("after permission error...",x)})};if(o.useEffect(()=>{V(),U()},[]),P)return e.jsx(e.Fragment,{children:e.jsx(Q,{})});if(H)return e.jsx(J,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const Y=(t,x,f,b)=>{p(t),g(x),m(f),k(b),j(!0)},G=async()=>{if(!u(v)){alert("Invalid mobile number");return}n(!0);const t={propertyId:a,ownerId:N,mobileNo:v};console.log("before permission fetch...",t),S.post(z,t,C()).then(function(x){var f;console.log("after permission response ...",(f=x==null?void 0:x.data)==null?void 0:f.data),j(!1),n(!1)}).catch(function(x){console.log("after permission error...",x),n(!1)})};return console.log("appliocation full detail to view",N),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full overflow-x-auto",children:e.jsxs("div",{className:"col-span-12 rounded-lg p-4",children:[(s==null?void 0:s.active_status)==1&&e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:`${d("mainHoldingPage.holdingHeadingText.label")} - ${l(s==null?void 0:s.holding_no)} `,type:"holding",id:a,safNo:"",active:"property"}),e.jsx("div",{className:"mt-2 sm:text-right",children:e.jsx(te,{permissionData:i,safId:s==null?void 0:s.saf_id})})]}),(s==null?void 0:s.active_status)==0&&e.jsx("div",{className:"pl-4",children:e.jsxs("span",{className:"bg-red-500 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:[e.jsx(X,{className:"inline"})," ",d("mainHoldingPage.holdingDisableText.label")]})}),e.jsxs("div",{className:"p-2 md:p-4",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingBasicSubHeadingText.label")," "]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.property_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.holding_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.zone_name)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[d("mainHoldingPage.propertyZone.label")," "]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingOldWardNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.land_occupation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainNewAssessmentPage.dateOfPurchase.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingOwnershipType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingPropertyType.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between mt-1",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingResidentialType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.assessment_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Assessment Type"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.categoryType)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Category"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_name)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingApartmentNm.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_code)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingApartmentCode.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingPropertySubHeadingText.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.khata_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainNewAssessmentPage.KhataNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyPlotNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.village_mauja_name)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyVillageMaujaName.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.area_of_plot)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyPlotArea.label")})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.prop_address)," , ",l(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertAddress.label")})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.corr_address)=="NA"&&l((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address)=="NA"&&l(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address),", ",l(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyCorrespondingAddress.label")})]})}),e.jsx("div",{})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-6",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingOwnerSubHeadingText.label")]}),e.jsx("div",{className:"  mt-2 bg-white rounded-lg shadow-xl p-4 overflow-x-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white p-4 overflow-x-auto",children:[e.jsx("thead",{className:"font-bold text-left text-sm border-b text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerName.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainNewAssessmentPage.ownerNameMarathi.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerGender.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerDOB.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerRelation.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerMobileNum.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerAadharNumber.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerPan.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerEmail.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerArmedDetail.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerPhysicalHealth.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:"Action"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:($=s==null?void 0:s.owners)==null?void 0:$.map(t=>e.jsxs("tr",{className:"bg-white   border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.owner_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:h(t==null?void 0:t.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.relation_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.is_specially_abled)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e.jsx("button",{className:"bg-blue-500 text-white px-2 hover:bg-blue-700 py-1 rounded-md cursor-pointer",onClick:()=>Y(t==null?void 0:t.id,t==null?void 0:t.propertyId,t==null?void 0:t.mobile_no,t==null?void 0:t.gender),children:"Edit"})})]}))})})]})}),A&&e.jsx("div",{className:"modal fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50",children:e.jsxs("div",{className:"modal-content bg-white w-1/2 p-4 rounded-md shadow-md border-4 border-blue-600 ",children:[e.jsx("span",{className:"absolute -mt-14 right-1/4 bg-red-500 text-white cursor-pointer w-auto h-auto px-2 text-center py-0 text-xl rounded-full",onClick:()=>j(!1),children:"×"}),e.jsx("label",{className:"text-lg font-semibold mb-2",children:"Update Mobile No."}),e.jsx("input",{type:"text",value:v,onChange:t=>m(t.target.value),className:`border-blue-400 border p-2 w-full mb-4 ${u(v)?"border-green-500":"border-red-500"}`}),e.jsx("button",{className:"bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600",onClick:G,children:"Save Changes"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingElectrictySubHeadingText.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.electricityConnectionNum.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_acc_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.elstricityAccountNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_bind_book_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.electricityBindNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.electricityConsumerCateogry.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingBuildingHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.building_plan_approval_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.buildingApprovalNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:h(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.buildingApprovalDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingWaterSubHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.water_conn_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[d("mainHoldingPage.waterConsumerNum.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:h(s==null?void 0:s.water_conn_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.waterConsumerDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-6 ",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingFloorDetailSubHeadingText.label")]}),e.jsx("div",{className:"  mt-2 bg-white rounded-lg shadow-xl p-4 overflow-x-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white  ",children:[e.jsx("thead",{className:"font-bold text-left   text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[d("mainHoldingPage.holdingFloor.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorUsageType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorOccupancyType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorConstTyp.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorBuiltArea.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorFromDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorUptoDate.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(E=s==null?void 0:s.floors)==null?void 0:E.map((t,x)=>e.jsxs("tr",{className:"bg-white   border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:h(t==null?void 0:t.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:h(t==null?void 0:t.date_upto)})]}))})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(w,{className:"inline"})," ",d("mainHoldingPage.holdingAdditionalDetailsSubHeading.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_mobile_tower?"Yes":"No"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",d("mainHoldingPage.propertyMobileTower.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[s!=null&&s.is_hoarding_board?"Yes":"No"," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:s!=null&&s.is_petrol_pump?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_water_harvesting?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyRainwaterHarvest.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&M(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${d("mainHoldingPage.mobileTowerArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&M(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${d("mainHoldingPage.hoardingArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&M(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${d("mainHoldingPage.petrolPumpArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&h(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&`${d("mainHoldingPage.rainwaterHarvestingConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&h(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${d("mainHoldingPage.mobileTowerInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&h(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${d("mainHoldingPage.hoardingInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&h(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${d("mainHoldingPage.petrolPumpConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsx("div",{className:"w-full h-60"})]})}export{xe as default};