import{M as k,r as c,g as B,h as E,d as u,e as M,f as s,F as j,j as e,B as T,n,i as f,A as P}from"./index-671ff4bc.js";import{u as _}from"./useSetTitle-587f3a4f.js";import{P as O}from"./PilotWorkflowDocumentRow-ea7890e5.js";k.setAppElement("#root");function H(){var p,g,h,x;const{api_LodgeApplicationFullDetailById:y,api_LodgeViewDocuments:N}=P();_("Agency Details");const[r,b]=c.useState();c.useState(!1),c.useState(),B();const{id:i}=E(),[o,A]=c.useState(),[m,d]=c.useState(!1),[R,w]=c.useState(!1),[U,v]=c.useState(""),D=()=>w(!0);c.useEffect(()=>{S()},[]);const S=()=>{console.log("before document fetch ",i);let l={applicationId:i};u.post(N,l,M()).then(a=>{var t;console.log("document list at saf application details ",a),b((t=a==null?void 0:a.data)==null?void 0:t.data)}).catch(a=>{console.log("error at saf application details ",a)})},I=l=>{console.log("incoming doc url modal => ",l),v(l),D()},L=()=>{d(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};u.post(y,{applicationId:i,type:"Active"},a).then(function(t){console.log("agency application details",t.data.data),A(t.data.data),d(!1)}).catch(function(t){console.log("agency application details error...",t),d(!1)})};return c.useEffect(()=>{L()},[]),s(j,{children:[m&&e(T,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:n((g=(p=o==null?void 0:o.fullDetailsData)==null?void 0:p.cardArray)==null?void 0:g.headerTitle)}),s("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:["Application No. -",n((o==null?void 0:o.application_no)||"")]}),s("div",{className:"p-4",children:[s("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(f,{className:"inline"})," Basic Details"]}),(x=(h=o==null?void 0:o.fullDetailsData)==null?void 0:h.dataArray)==null?void 0:x.map(l=>{var a;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(a=l==null?void 0:l.data)==null?void 0:a.map(t=>s("div",{className:"pl-4 p-2",children:[s("h1",{className:"font-bold text-sm",children:[n((t==null?void 0:t.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:n(t==null?void 0:t.displayString)})]}))})})]})]})}),s("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[s("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(f,{className:"inline"})," Document List"]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:s("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:s("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),s("tbody",{children:[(r==null?void 0:r.length)==0&&!m&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:e("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),r==null?void 0:r.map((l,a)=>e(O,{openModal:I,docList:l,index:a}))]})]})})})})]})]})}export{H as default};