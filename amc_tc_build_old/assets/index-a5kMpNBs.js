import{b as ie,a as X,p as j,g as re,S as Z,Q as l,j as e,f as ne}from"./index-KiTF9xkC.js";import{u as oe,d as D,h as ce}from"./router-g9NwwHut.js";import{u as de}from"./formik.esm-MEJnthxH.js";import{c as le,f as me,a as pe}from"./index.esm-lGQm42K_.js";import{F as ue}from"./FormProvider-uRbiLf7F.js";import{T as xe}from"./TextAreaField-anbraLTy.js";import"./index-KJUlVKah.js";import{r as h}from"./tailwind-xMhOhnt0.js";import{P as he}from"./index-m1JQXAJM.js";import{r as fe}from"./resizeImage-L-sS3-T-.js";import{O as ge}from"./OverLayLoader-rvor7SPZ.js";import{M as je}from"./MyPDFViewer-_cpG9IZk.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./customInputValidation-8tSUGdUh.js";import"./module-DXUFcDOI.js";import"./reactPdfViewerCore-9ACLRJuU.js";import"./reactPdfViewerDefaultLayout-kL0TZy5g.js";function Ye(){var v,M,C,B,A,F,S,P,I,_,L,R,T,z,U,O,V,Y,q,$,k,E,K,Q,G,H,J,W;const w=oe(),g=ie({}),[y,b]=D.useState(""),[ee,N]=D.useState(""),{id:u}=ce(),a=X({api:j.staticSafDetail,config:{applicationId:u},value:[u],options:{enabled:!!u}}),x=X({api:(v=re)==null?void 0:v.workFlowInfo,config:{workflowId:(C=(M=a==null?void 0:a.data)==null?void 0:M.data)==null?void 0:C.workflow_id},value:[(A=(B=a==null?void 0:a.data)==null?void 0:B.data)==null?void 0:A.workflow_id],options:{enabled:!!((S=(F=a==null?void 0:a.data)==null?void 0:F.data)!=null&&S.workflow_id)}}),r=de({initialValues:{uploadMeasurement:"",comment:""},validationSchema:le({uploadMeasurement:me().required("Measurement Sheet is required").test("fileSize","Max 10 mb file size",t=>(t==null?void 0:t.size)<=1e7),comment:pe().label("Comment").min(2).max(500)}),onSubmit:async t=>{Z.fire({title:"Are you sure?",text:"\n       You are going to forward the application to the next level.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(s=>{s.isConfirmed&&ae(t)}).catch(s=>{var n,o;l.error((o=(n=s==null?void 0:s.response)==null?void 0:n.data)==null?void 0:o.message)})}}),ae=async t=>{var n,o,p,d,i,f;const s=new FormData;s.append("applicationId",u),s.append("document",t==null?void 0:t.uploadMeasurement);try{const c=await g.mutateAsync({api:j.uploadMeasurementSheetApi,data:s});if((n=c==null?void 0:c.data)!=null&&n.status){const m=await g.mutateAsync({api:j.safLevel,data:{applicationId:u,receiverRoleId1:"",action:"forward",comment:(t==null?void 0:t.comment)||"OK"}});(o=m==null?void 0:m.data)!=null&&o.status?(l.success((p=m==null?void 0:m.data)==null?void 0:p.message),w("/amc-app/property/saf-verification-list",{replace:!0})):l.error((d=m==null?void 0:m.data)==null?void 0:d.message)}else l.error((i=c==null?void 0:c.data)==null?void 0:i.message)}catch(c){l.error((f=c==null?void 0:c.data)==null?void 0:f.message)}},te=async()=>{var t;if(((t=r==null?void 0:r.values)==null?void 0:t.comment)=="")return l.error("Comment is required !");Z.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async s=>{var n,o,p,d;if(s.isConfirmed)try{const i=await g.mutateAsync({api:j.safLevel,data:{applicationId:u,receiverRoleId1:"",action:"backward",comment:((n=r==null?void 0:r.values)==null?void 0:n.comment)||"No Comment"}});(o=i==null?void 0:i.data)!=null&&o.status?(l.success((p=i==null?void 0:i.data)==null?void 0:p.message),w("/amc-app/property/saf-verification-list",{replace:!0})):l.error(((d=i==null?void 0:i.data)==null?void 0:d.message)||"Something went wrong, Please try again")}catch(i){l.error(i==null?void 0:i.message)}}).catch(s=>{var n,o;l.error((o=(n=s==null?void 0:s.response)==null?void 0:n.data)==null?void 0:o.message)})},se=async t=>{var n,o,p;const s=t.target.files[0];if((s==null?void 0:s.type)==="application/pdf"){const d=new FileReader;d.onload=i=>{b(i.target.result),N(s.name.split(".").pop())},d.readAsDataURL(s),r.setFieldValue("uploadMeasurement",s)}else{const d=await fe((n=t==null?void 0:t.target)==null?void 0:n.files[0]),i=new File([d],(p=(o=t==null?void 0:t.target)==null?void 0:o.files[0])==null?void 0:p.name,{type:"image/*"}),f=new FileReader;f.onload=c=>{b(c.target.result),N(i.name.split(".").pop())},f.readAsDataURL(i),r.setFieldValue("uploadMeasurement",i)}};return a!=null&&a.isLoading?e.jsx(ne,{}):e.jsxs(he,{title:"Measurement",children:[g.isLoading&&e.jsx(ge,{}),e.jsx(ue,{formik:r,children:e.jsxs("div",{className:"p-4 ",children:[e.jsx(h.Card,{className:"w-full",children:e.jsxs(h.CardBody,{children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"font-semibold",children:"Measurement Sheet"})}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[e.jsx("h1",{className:"font-semibold text-sm",children:"Application No : "}),e.jsx("h1",{className:"text-sm",children:(I=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:I.saf_no}),e.jsx("h1",{className:"font-semibold text-sm",children:"Application Type : "}),e.jsx("h1",{className:"text-sm",children:(L=(_=a==null?void 0:a.data)==null?void 0:_.data)==null?void 0:L.assessment_type}),e.jsx("h1",{className:"font-semibold text-sm",children:"Apply Date : "}),e.jsx("h1",{className:"text-sm",children:(T=(R=a==null?void 0:a.data)==null?void 0:R.data)==null?void 0:T.application_date}),e.jsx("h1",{className:"font-semibold text-sm",children:"Owner Name : "}),e.jsx("h1",{className:"text-sm",children:(U=(z=a==null?void 0:a.data)==null?void 0:z.data)==null?void 0:U.applicant_name}),e.jsx("h1",{className:"font-semibold text-sm",children:"Mobile No : "}),e.jsx("h1",{className:"text-sm w-40 truncate",children:(q=(Y=(V=(O=a==null?void 0:a.data)==null?void 0:O.data)==null?void 0:V.owners)==null?void 0:Y.map(t=>t==null?void 0:t.mobile_no))==null?void 0:q.join(", ")})]})]})}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(h.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Upload Measurement Sheet"})}),y&&(ee==="pdf"?e.jsx(je,{fileUrl:y}):e.jsx("div",{className:"flex justify-center px-4 py-2",children:e.jsx("img",{src:y,alt:"preview",loading:"lazy"})})),e.jsx(h.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-1 justify-center gap-5",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-1",children:e.jsx("h1",{className:"font-semibold text-xs",children:"Upload Measurement Sheet"})}),e.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"uploadMeasurement",onChange:se,className:"border border-gray-300 p-2 w-full rounded-lg"}),e.jsx("small",{className:"text-red-500",children:(($=r==null?void 0:r.errors)==null?void 0:$.uploadMeasurement)&&((k=r==null?void 0:r.touched)==null?void 0:k.uploadMeasurement)&&((E=r==null?void 0:r.errors)==null?void 0:E.uploadMeasurement)})]}),e.jsx("div",{children:e.jsx(xe,{label:"Comment",name:"comment",formik:r,placeholder:"Comment"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex justify-center items-center mt-4 gap-3",children:[((G=(Q=(K=x==null?void 0:x.data)==null?void 0:K.data)==null?void 0:Q.permissions)==null?void 0:G.can_backward)&&e.jsx(h.Button,{onClick:te,size:"sm",className:"bg-red-500 text-white",children:e.jsx("small",{children:"Back To Back Office"})}),((W=(J=(H=x==null?void 0:x.data)==null?void 0:H.data)==null?void 0:J.permissions)==null?void 0:W.can_forward)&&e.jsx(h.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Forward"})})]})})]})})]})}export{Ye as default};