import{y as Q,j as e,R as X,W as Y,ab as C,ac as B,ad as _,ae as M,af as Z,ag as D,ah as ee,ai as te,u as k,r as s,d as E,e as V,F as p,B as O,f as t,A as I,k as le,aj as ae,M as j,h as se,g as oe,c as re,a as L,b as ie,V as ne,ak as de,l as ce,P as me}from"./index-d95c1711.js";import{L as q}from"./ListTableAdvrt-3ca90c52.js";const U=Q(e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded"),H="/assets/role-9fef35d5.png";function $(){const{notify:a}=X.useContext(Y);return a}C.register(B,_,M);C.register(Z,D,ee,te,_,M);C.register(B,_,M);function ue(){const{t:a}=k(),{api_getdataagency:c}=I(),[l,u]=s.useState(),[n,d]=s.useState(!1);s.useState(!1);const[x,h]=s.useState(!1);console.log("chadnan56",l);const y=[{Header:"#",Cell:({row:m})=>e("div",{className:"pr-2",children:m.index+1})},{Header:"Agency Name",accessor:"agency_name"},{Header:"Agency Code",accessor:"agency_code"},{Header:"Address",accessor:"corresponding_address"},{Header:"Email",accessor:"email"},{Header:"Mobile No",accessor:"mobile"}];s.useEffect(()=>{A()},[]);const A=()=>{d(!0);let m={deviceId:"dashboard"};E.post(`${c}`,m,V()).then(function(o){var v,g,b,w;console.log("application data for landing dashboard ",o.data),o.data.status&&(u((g=(v=o==null?void 0:o.data)==null?void 0:v.data)==null?void 0:g.data),console.log("agencydata",(w=(b=o==null?void 0:o.data)==null?void 0:b.data)==null?void 0:w.data),h(!0),d(!1))}).catch(function(o){d(!1),notify("Network Problem","error"),console.log("errorrr.... ",o)})};return console.log("application list..12",l),console.log("tableStatus",x),n?e(p,{children:e(O,{})}):e(p,{children:e("div",{className:"container bg-white text-gray-600 h-auto mx-auto ",children:e("div",{children:e("div",{className:"grid grid-cols-1 p-2",children:(l==null?void 0:l.length)>0?e(q,{assessmentType:!1,columns:y,dataList:l}):e("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:t("span",{className:"text-red-600 px-4 flex",children:[e(U,{}),e("h1",{className:"ml-2",children:a("dashboardPage.noListAvailable.label")})]})})})})})})}function he(){const{t:a}=k(),{api_advertisementDashboard:c}=I(),[l,u]=s.useState(),[n,d]=s.useState(!1);s.useState(!1);const[x,h]=s.useState(!1),y=[{Header:"#",Cell:({row:m})=>e("div",{className:"pr-2",children:m.index+1})},{Header:"Application No",accessor:"application_no"},{Header:"From",accessor:"from_date"},{Header:"To",accessor:"to_date"},{Header:"Agency Name",accessor:"agency_name"},{Header:"Hoarding No",accessor:"hoarding_no"},{Header:"Hoarding Address",accessor:"address"},{Header:"Rate",accessor:"rate"},{Header:"Status",accessor:"approval_status"}];s.useEffect(()=>{A()},[]);const A=()=>{d(!0);let m={deviceId:"dashboard"};E.post(`${c}`,m,V()).then(function(o){var v,g,b,w;console.log("application data for landing dashboard ",o.data),o.data.status&&(u((g=(v=o==null?void 0:o.data)==null?void 0:v.data)==null?void 0:g.data),console.log("chandan78",(w=(b=o==null?void 0:o.data)==null?void 0:b.data)==null?void 0:w.data),h(!0),d(!1))}).catch(function(o){d(!1),notify("Network Problem","error"),console.log("errorrr.... ",o)})};return console.log("application list..12",l),console.log("tableStatus",x),n?e(p,{children:e(O,{})}):e(p,{children:e("div",{className:"container bg-white text-gray-600 h-auto mx-auto ",children:e("div",{children:e("div",{className:"grid grid-cols-1 p-2",children:(l==null?void 0:l.length)>0?e(q,{assessmentType:!1,columns:y,dataList:l}):e("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:t("span",{className:"text-red-600 px-4 flex",children:[e(U,{}),e("h1",{className:"ml-2",children:a("dashboardPage.noListAvailable.label")})]})})})})})})}function ge(){const{t:a}=k(),[c,l]=s.useState(null);s.useState(null),$();const u=n=>{console.log("target value",n),l(n)};return console.log("applicationTypeValue",c),e(p,{children:e("div",{class:"col-span-12 mt-4",children:t("div",{class:"bg-white shadow-lg",children:[t("div",{children:[e("div",{className:"px-1 font-semibold  text-gray-500 mt-4 ",children:t("div",{className:"flex-initial",children:[e(le,{className:"inline"})," ","Approved & Rejected Applications"]})}),e("div",{className:"mt-4 px-4",children:t("div",{className:"w-full flex",children:[e("button",{value:"Agency",className:"border border-indigo-400 text-indigo-500 mr-4  bg-white  px-2 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",onClick:n=>u(n.target.value),children:a("dashboardPage.agency.label")}),e("button",{value:"Hoarding",className:"border border-indigo-400 text-indigo-500 mr-4 bg-white  px-2 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",onClick:n=>u(n.target.value),children:a("dashboardPage.hoarding.label")})]})})]}),t("div",{className:"container mx-auto mt-2  rounded-lg",children:[c==null&&t("h1",{className:"text-center font-semibold text-red-400 text-xl p-4",children:["***** ",a("dashboardPage.clickToViewList.label")," *****"]}),c=="Agency"&&t(p,{children:[e("h1",{className:"px-4 py-6 text-md font-semibold  text-gray-500 ",children:a("dashboardPage.agencyApprovedApplication.label")}),e("div",{children:e(ue,{})})]}),c=="Hoarding"&&t(p,{children:[e("h1",{className:"px-4 py-6 text-md font-semibold  text-gray-500 ",children:a("dashboardPage.hoardingApprovedApplication.label")}),e("div",{children:e(he,{})})]})]})]})})})}function be(){const{t:a}=k(),{api_advertisementDashboard:c}=I(),[l,u]=s.useState(),[n,d]=s.useState(!1);s.useEffect(()=>{x()},[]);const x=()=>{d(!0),ae.post(`${c}`,{},V()).then(function(h){console.log("dashboard data",h.data.data),u(h.data.data),d(!1)}).catch(function(h){console.log("errorrr.... ",h),d(!1)})};return console.log("dashboard data...",l),t(p,{children:[t("div",{class:"col-span-12 ",children:[e("div",{class:"flex items-center h-10 intro-y"}),t("div",{class:"grid grid-cols-12 gap-6 mt-5",children:[e("div",{class:"transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",children:t("div",{class:"p-5",children:[t("div",{class:"flex justify-between",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"})]}),e("div",{class:"bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs",children:e("span",{class:"flex items-center",children:l==null?void 0:l.date})})]}),e("div",{class:"ml-2 w-full flex-1",children:t("div",{children:[e("div",{class:"flex justify-between border-b mb-2",children:t("div",{className:"flex flex-wrap flex-row space-x-2",children:[e("div",{class:"mt-3 text-2xl font-bold leading-8 ",children:l==null?void 0:l.totalApplications}),e("div",{className:"text-gray-600 text-xs mt-6 ",children:a("dashboardPage.advertisement.label")})]})}),e("div",{class:"mt-1 text-base text-gray-600",children:a("dashboardPage.totalApplications.label")})]})})]})}),e("div",{class:"transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",children:t("div",{class:"p-5",children:[t("div",{class:"flex justify-between",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"})]}),e("div",{class:"bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs",children:e("span",{class:"flex items-center",children:l==null?void 0:l.date})})]}),e("div",{class:" w-full flex-1",children:t("div",{children:[e("div",{class:"flex justify-between border-b mb-2",children:t("div",{className:"flex flex-wrap flex-row space-x-2",children:[e("div",{class:"mt-3 text-2xl font-bold leading-8 ",children:l==null?void 0:l.approvedCount}),e("div",{className:"text-gray-600 text-xs mt-6 ",children:a("dashboardPage.advertisement.label")})]})}),e("div",{class:"mt-1 text-base text-gray-600",children:a("dashboardPage.approvedApplications.label")})]})})]})}),e("div",{class:"transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",children:t("div",{class:"p-5",children:[t("div",{class:"flex justify-between",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"})]}),e("div",{class:"bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs",children:e("span",{class:"flex items-center",children:l==null?void 0:l.date})})]}),e("div",{class:" w-full flex-1",children:t("div",{children:[e("div",{class:"flex justify-between border-b mb-2",children:t("div",{className:"flex flex-wrap flex-row space-x-2",children:[e("div",{class:"mt-3 text-2xl font-bold leading-8 ",children:l==null?void 0:l.rejectedCount}),e("div",{className:"text-gray-600 text-xs mt-6 ",children:a("dashboardPage.advertisement.label")})]})}),t("div",{class:"mt-1 text-base text-gray-600",children:[" ",a("dashboardPage.rejectedApplications.label")]})]})})]})}),e("div",{class:"transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",children:t("div",{class:"p-5",children:[t("div",{class:"flex justify-between",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"})]}),e("div",{class:"bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs",children:e("span",{class:"flex items-center",children:l==null?void 0:l.date})})]}),t("div",{class:" w-full flex-1",children:[e("div",{class:"flex justify-between border-b mb-2",children:t("div",{className:"flex flex-wrap flex-row space-x-2",children:[e("div",{class:"mt-3 text-2xl font-bold leading-8 ",children:l==null?void 0:l.pendingCount}),e("div",{className:"text-gray-600 text-xs mt-6 ",children:a("dashboardPage.advertisement.label")})]})}),e("div",{children:e("div",{class:"mt-1 text-base text-gray-600",children:a("dashboardPage.pendingApplications.label")})})]})]})})]})]}),t("div",{children:[t("h1",{className:"text-xl text-gray-600 font-bold p-4 mt-4 bg-white rounded leading-5 shadow-lg",children:[" ",a("dashboardPage.advertisementApplicationListHeading.label")]}),e(ge,{})]})]})}const T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};j.setAppElement("#root");function xe(){const{t:a}=k();s.useState("");const[c,l]=s.useState(!1),[u,n]=s.useState(!1),[d,x]=s.useState(null),[h,y]=s.useState(H);s.useState(H);const[A,m]=s.useState(!1);s.useState("jsk"),s.useState("property"),s.useState();const o=s.useRef(),{api_editAdminProfile:v}=me(),g=$();function b(){y(H),r.resetForm(),l(!1)}function w(){n(!0)}function P(){n(!1)}se(),oe("Home");const W=re({image:L().required("Select image"),name:L().required("Enter name"),mobileNo:L().required("Eneter mobile no.").max(10,"Enter maximum 10 digits").min(10,"Enter minimum 10 digits"),email:L().required("enter valid email address")}),r=ie({initialValues:{name:"",image:"",mobileNo:"",email:""},onSubmit:(i,N)=>{console.log("admin edit profile ",i),w()},validationSchema:W}),G=i=>{i.target.files[0],y(URL.createObjectURL(i.target.files[0])),x(i.target.files[0])},J=i=>{let N=i.target.name,S=i.target.value;N=="image"&&G(i),N=="mobileNo"&&r.setFieldValue("mobileNo",de(S,r.values.mobileNo,10))},K=()=>{var N,S,z;b(),P(),m(!0);let i=new FormData;i.append("name",(N=r.values)==null?void 0:N.name),i.append("mobileNo",(S=r.values)==null?void 0:S.mobileNo),i.append("email",(z=r.values)==null?void 0:z.email),i.append("photo",d),console.log("before post edit profile",i),E.post(v,i,ce()).then(function(f){var F,R;console.log("edit profile response ....",f.data),(F=f==null?void 0:f.data)!=null&&F.status?g("Profile Updated Successfully !","success"):g((R=f==null?void 0:f.data)==null?void 0:R.message,"error"),m(!1)}).catch(function(f){m(!1),g("Network Problem","error"),console.log("errorrr.... ",f)})};return t(p,{children:[e(be,{}),e(j,{isOpen:c,onRequestClose:b,style:T,contentLabel:"Example Modal",children:t("div",{class:"relative bg-white p-10 rounded-lg shadow-xl border-2 border-gray-50 w-full md:w-96",children:[e("button",{onClick:b,type:"button",class:"absolute top-3 right-2.5 bg-red-500 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center",children:e("svg",{class:"w-5 h-5",fill:"currentColor",children:e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),t("div",{className:"max-w-2xl mx-auto",children:[e("div",{className:"font-semibold text-2xl text-center w-full",children:a("workflowPage.editProfile.label")}),e("div",{className:"w-full h-3"}),e("form",{onSubmit:r.handleSubmit,onChange:J,children:t("div",{className:"grid col-span-12 relative",children:[e("div",{className:"form-group col-span-12 flex justify-center relative mt-5",children:t("div",{className:"w-28 h-28 border rounded-full",children:[e("img",{className:"w-28 h-28 rounded-full border bg-gray-700 shadow-xl",src:h,alt:""}),e("span",{className:"absolute bottom-2 left-0 right-0 text-center ",children:e("span",{onClick:()=>o.current.click(),className:"bg-white text-indigo-500 px-1 border rounded-xl text-xs cursor-pointer font-semibold hover:scale-105",children:a("workflowPage.change.label")})}),e("span",{className:"text-red-600 absolute text-xs -bottom-3 text-center",children:r.touched.image&&r.errors.image?r.errors.image:null})]})}),t("div",{className:"form-group col-span-12 invisible absolute top-0 left-0",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("workflowPage.image.label"),e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e("input",{ref:o,...r.getFieldProps("image"),type:"file",className:"cypress_khata_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),t("div",{className:"form-group mb-4 col-span-12 mt-5",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("workflowPage.mobileNo.label"),e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e("input",{...r.getFieldProps("name"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter mobile no."}),e("span",{className:"text-red-600 absolute text-xs",children:r.touched.name&&r.errors.name?r.errors.name:null})]}),t("div",{className:"form-group mb-4 col-span-12 mt-5",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("workflowPage.mobileNo.label"),e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e("input",{...r.getFieldProps("mobileNo"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter mobile no."}),e("span",{className:"text-red-600 absolute text-xs",children:r.touched.mobileNo&&r.errors.mobileNo?r.errors.mobileNo:null})]}),t("div",{className:"form-group mb-6 col-span-12",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("workflowPage.email.label"),e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e("input",{...r.getFieldProps("email"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter email."}),e("span",{className:"text-red-600 absolute text-xs",children:r.touched.email&&r.errors.email?r.errors.email:null})]}),e("div",{className:"col-span-12 text-center mt-2",children:e("button",{type:"submit",className:"cypress_next2_button text-md w-full px-6 py-2.5 bg-indigo-600 text-white font-medium  leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:a("workflowPage.save.label")})})]})})]})]})}),e(j,{isOpen:u,onRequestClose:P,style:T,contentLabel:"Example Modal",children:t("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e("button",{onClick:P,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e("svg",{class:"w-5 h-5",fill:"currentColor",children:e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),t("div",{class:"p-6 text-center",children:[t("div",{className:"w-full flex h-10",children:[" ",e("span",{className:"mx-auto",children:e(ne,{size:30})})]}),e("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:a("workflowPage.updateMsg.label")}),e("button",{type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:K,children:a("workflowPage.sureMsg.label")})]})]})})]})}export{xe as default};