import{M as we,u as $a,v as Ea,r as l,a as Oa,A as ue,w as ve,c as _a,Y as Aa,d as Ra,b as Ma,j as a,ag as qa,S as za,p as Va,q as Ba,a3 as C,bw as k,E as Se,_ as We,$ as Xe,bx as Ze,f as Ha,a0 as Ga,a2 as Qa,a1 as re}from"./index-7345afc9.js";import{T as Ya}from"./TopTabs-f2b7890b.js";const Ja={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};we.setAppElement("#root");function et(j){var Ve,Be,He,Ge,Qe;const{id:_,btc:Pe}=$a();let d=Pe=="true"||Pe==!0;const{api_uploadSafDocument:Te,api_listSafDocument:Le,api_getAppicationFullDetail:ea,api_sendToOfficer:aa}=Ha(),{t:s}=Ea(),[ie,F]=l.useState(!1),[U,me]=l.useState(null),[Ka,ta]=l.useState(""),[pe,Ue]=l.useState(0),[sa,A]=l.useState(!1),[Ie,la]=l.useState(""),[Ce,na]=l.useState(""),[ke,Fe]=l.useState(1),[ra,ia]=l.useState(0),[ma,oa]=l.useState(),[$e,Ee]=l.useState(""),[Wa,Oe]=l.useState(!0),[_e,ca]=l.useState(!1),[n,ua]=l.useState(),[oe,pa]=l.useState(),[de,da]=l.useState(),[xe,ce]=l.useState(null),[Xa,he]=l.useState(null),[xa,ha]=l.useState(null),[Za,fa]=l.useState(null),[fe,$]=l.useState([]),[ga,Ae]=l.useState(!1),[ba,Re]=l.useState(!1),[ja,R]=l.useState(!1),[Na,Da]=l.useState(!1),[ya,va]=l.useState(null),[Sa,wa]=l.useState(null),ge=l.useRef([]),be=l.useRef([]),I=l.useRef([]),E=l.useRef([]),Pa=()=>Re(!0),Ua=()=>{};Oa();const Ia=(e,t)=>{ka(t),ce(e),ia(ra+1),A(!0),Ae(!0)},M=()=>{ce(null),ca(!1),Ae(!1),A(!1),Re(!1),Fe(ke+1),me(null),ge.current=[],I.current=[],be.current=[],E.current=[],console.log("modal m end => ",sa,_e)};console.log(".............data in full details card in bo doc upload.........",j==null?void 0:j.applicationData2),console.log("id in upload........",j==null?void 0:j.id),l.useEffect(()=>{je()},[pe]),l.useEffect(()=>{F(!0),ue.post(ea,{applicationId:_},ve()).then(function(e){var t,r,i,c;F(!1),console.log("view full details...",(t=e==null?void 0:e.data)==null?void 0:t.data),da((i=(r=e==null?void 0:e.data)==null?void 0:r.data)==null?void 0:i.fullDetailsData),fa((c=e==null?void 0:e.data)==null?void 0:c.data)}).catch(function(e){F(!1),console.log("==2 details by id error...",e)})},[]);const je=()=>{ye(!1),R(!0),console.log("before fetch upload doc"),ue.post(`${Le}`,{applicationId:_},ve()).then(e=>{var t,r;console.log("list of doc to upload at pilotworkflowdocumentupload => ",e==null?void 0:e.data),(t=e==null?void 0:e.data)!=null&&t.status?ua((r=e==null?void 0:e.data)==null?void 0:r.data):ye(!0),R(!1)}).catch(e=>{console.log("data submission error bo doc upload => ",e),ye(!0),A(!1),R(!1)})};console.log("temp doc => ",_e);const Ca=_a({docId:Aa().required("Select document type"),docUpload:Ra().required("Select document")}),O=Ma({initialValues:{docId:"",docUpload:"",docName:""},onSubmit:e=>{console.log("use effect 2"),console.log("values submission => ",e),Ne()},validationSchema:Ca}),Me=(e,t,r)=>{var c,u;let i=e.target.files[0];Ee(e.target.name),oa(URL.createObjectURL(e.target.files[0])),me(e.target.files[0]),t=="owner"?I.current[r]=(c=e.target.files[0])==null?void 0:c.name:E.current[r]=(u=e.target.files[0])==null?void 0:u.name,O.setFieldValue("docUpload",URL.createObjectURL(e.target.files[0])),console.log("use effect change ",O.values.docId,O.values.docUpload),console.log("file on change bo doc upload => ",i,"and doc upload => ",U,"and url => ",ma,"and name => ",i==null?void 0:i.name,"file name => ",$e),(i==null?void 0:i.name).substring((i==null?void 0:i.name).lastIndexOf(".")+1)=="pdf"?Oe(!1):Oe(!0)};console.log("and doc name => ",$e);const Ne=(e,t,r)=>{console.log("use effect 3 => ",I.current[t],`
 index => `,t,`
 module => `,r,e);let i;r==="property"?i=be.current:i=ge.current;const c=i.map((p,f)=>f===t?p.value:"");if(console.log("current select document is....",c),c[t]===null||c[t]==="Select"||c[t]===""){N(!0,`Select document type for ${e}`),ce(null),he(null);return}if(r=="owner"&&(I.current[t]==null||I.current[t]==""||I.current[t]==null)){N(!0,`Select document to upload for ${e}`),I.current[t]=null;return}if(r=="property"&&(E.current[t]==null||E.current[t]==""||E.current[t]==null)){N(!0,`Select document to upload for ${e}`),E.current[t]=null;return}if(U==null){N(!0,`Select document to upload for ${e}`);return}if(!Ga(U)){N(!0,`File is too large for ${e}`),me(null);return}console.log("doc ref name...",e);let u=new FormData;console.log("document  => ",U);let b={applicationId:j==null?void 0:j.id,ownerId:xe,docCode:c[t],document:U};u.append("applicationId",_),xe!=null&&u.append("ownerId",xe),u.append("docCode",c[t]),u.append("document",U),u.append("docCategory",xa),console.log("form data bo doc upload => ",b),U!=""?(M(),F(!0),console.log("before fetch doc to upload...",u),ue.post(`${Te}`,u,Qa()).then(p=>{var f;console.log("data submitted bo doc upload => ",p==null?void 0:p.data),(f=p==null?void 0:p.data)!=null&&f.status?(re.success("Document Uploaded Successfully !!"),A(!1),ta(""),me(null),Ue(pe+1),Ee(""),O.setFieldValue("docUpload",""),Ue(pe+1),ce(null),he(null),je()):(console.log("something went"),N(!0,"Error occurred in uploading document. Please try again later.")),F(!1)}).catch(p=>{N(!0,"Error occurred in uploading document. Please try again later."),console.log("data submission error bo doc upload => ",p),A(!1),F(!1)})):re.error("Select file")},De=(e,t,r)=>{console.log("getting doc name => ",e),e==""&&re.error("File not uploaded !!!"),e!=""&&(la(e),na(t),Pa(),Fe(ke+1),wa(r))},qe=(e,t)=>{he(e.target.value),ha(t)},ka=e=>{let t=n==null?void 0:n.ownerDocs[e];console.log("select row....",t),pa(t)};console.log("filterred modal data......",oe),console.log("owner doc list ===>......",n==null?void 0:n.ownersDocList);const[Fa,ye]=l.useState(!1),N=(e,t)=>{va(t),Da(e)},ze=async()=>{R(!0);const e={applicationId:_};console.log("before permission fetch...",e),ue.post(aa,e,ve()).then(function(t){var r;(r=t==null?void 0:t.data)!=null&&r.status?(re.success("Application has been forwarded successfully "),je()):re("Problem in forwarding the application","error"),setLoaderStatus(!1)}).catch(function(t){console.log("after permission error...",t),R(!1)})};if(ja)return a.jsxs(a.Fragment,{children:[a.jsx(qa,{}),a.jsx("div",{className:"min-h-screen"})]});if(Fa)return a.jsx(za,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const D=e=>fe==null?void 0:fe.some(t=>t==e);return a.jsxs(a.Fragment,{children:[ie&&a.jsx(Va,{}),Na&&a.jsx(Ba,{activateBottomErrorCard:N,errorTitle:ya}),a.jsx("div",{className:"",children:a.jsx(Ya,{title:`${s("mainSafDocumentUploadPage.uploadDocumentsForProperty.label")}`,type:"application",id:_,safNo:"",active:"document"})}),a.jsxs("div",{className:"mx-auto w-full",children:[(n==null?void 0:n.citizenCanSendOfficer)==!0&&d!=!0&&a.jsx("div",{className:"flex",children:a.jsx("button",{className:"bg-green-500 text-white hover:bg-green-700 px-1 py-1 rounded-md",onClick:ze,children:"Send to Next Level"})}),d==!0&&a.jsxs("div",{className:"text-red-500 font-semibold poppins 2xl:text-sm text-xs",children:[" ",s("mainSafDocumentUploadPage.redirectedBackToCitizen.label"),"."]}),a.jsx("div",{className:"text-gray-700 py-6 ",children:a.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4",children:(Be=(Ve=de==null?void 0:de.cardArray)==null?void 0:Ve.data)==null?void 0:Be.map(e=>a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs("div",{className:"px-4 py-2 font-semibold",children:[C(e==null?void 0:e.displayString)," : "]}),a.jsx("div",{className:"px-4 py-2",children:C(e==null?void 0:e.value)})]}))})}),a.jsxs("p",{className:"text-sm",children:[s("mainSafDocumentUploadPage.note.label"),"."]}),a.jsxs("div",{className:"bg-white",children:[(n==null?void 0:n.ownerDocs)&&a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto mt-4 py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",s("mainSafDocumentUploadPage.ownerDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantImage.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.guardianName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.mobile.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(He=n==null?void 0:n.ownerDocs)==null?void 0:He.map((e,t)=>{var r,i,c,u,b,p,f,y,v,S,w;return a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center justify-center",children:[((r=e==null?void 0:e.ownerDetails)==null?void 0:r.uploadedDoc)!=""&&a.jsx("div",{className:"text-center cursor-pointer",onClick:()=>{var g,P;return De(`${(g=e==null?void 0:e.ownerDetails)==null?void 0:g.uploadedDoc}`,"jpg",(P=e==null?void 0:e.ownerDetails)==null?void 0:P.docId)},children:a.jsx("img",{src:D((i=e==null?void 0:e.ownerDetails)==null?void 0:i.docId)?k:`${(c=e==null?void 0:e.ownerDetails)==null?void 0:c.uploadedDoc}`,alt:"",className:"md:w-[3vw] w-[5vw]",srcset:""})}),((u=e==null?void 0:e.ownerDetails)==null?void 0:u.uploadedDoc)==""&&a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]})]})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((b=e==null?void 0:e.ownerDetails)==null?void 0:b.name)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((p=e==null?void 0:e.ownerDetails)==null?void 0:p.guardian)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((f=e==null?void 0:e.ownerDetails)==null?void 0:f.mobile)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsxs("span",{className:`font-medium ${((y=e==null?void 0:e.ownerDetails)==null?void 0:y.reqDocCount)===((v=e==null?void 0:e.ownerDetails)==null?void 0:v.uploadedDocCount)&&!d?"text-green-400":"text-red-500"}`,children:[" ",s("mainSafDocumentUploadPage.uploaded.label")," ",C((S=e==null?void 0:e.ownerDetails)==null?void 0:S.uploadedDocCount)," of ",C((w=e==null?void 0:e.ownerDetails)==null?void 0:w.reqDocCount)]})})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:!ie&&a.jsx("button",{onClick:()=>{var g;return Ia((g=e==null?void 0:e.ownerDetails)==null?void 0:g.ownerId,t)},type:"button",className:Se,children:s("mainSafDocumentUploadPage.view.label")})})})})]})})})]})})]})}),a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",s("mainSafDocumentUploadPage.propertyDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-center",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.upload.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(Ge=n==null?void 0:n.listDocs)==null?void 0:Ge.map((e,t)=>{var r,i,c,u,b,p,f,y,v,S,w,g,P,q,z,V,B,H,G,Q,Y,J,K,W,X,Z,T,L,ee,ae,te,m,x,se;return a.jsxs("tr",{className:"border-b border-gray-200 ",onSubmit:O.handleSubmit,onChange:O.handleChange,children:[a.jsx("td",{className:"py-3 px-6 font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:We,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",value:e==null?void 0:e.docName,children:[e==null?void 0:e.docName,(e==null?void 0:e.docType)!=="O"&&a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:o=>be.current[t]=o,className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:o=>qe(o,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",selected:!0,children:s("mainSafDocumentUploadPage.select.label")}),(r=e==null?void 0:e.masters)==null?void 0:r.map((o,h)=>a.jsx("option",{value:o==null?void 0:o.documentCode,children:o==null?void 0:o.docVal}))]})})})}),a.jsx("td",{className:"py-3 px-6 text-center relative",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var o,h,le,ne,Ye,Je,Ke;return De(`${(o=e==null?void 0:e.uploadedDoc)==null?void 0:o.docPath}`,(Je=(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.docPath)==null?void 0:Je.split(".")[((Ye=(ne=(le=e==null?void 0:e.uploadedDoc)==null?void 0:le.docPath)==null?void 0:ne.split("."))==null?void 0:Ye.length)-1],(Ke=e==null?void 0:e.uploadedDoc)==null?void 0:Ke.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(i=e==null?void 0:e.uploadedDoc)==null?void 0:i.docPath)==null?void 0:p.split(".")[((b=(u=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:u.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(Xe,{})}),((w=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:w.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((g=e==null?void 0:e.uploadedDoc)==null?void 0:g.uploadedDocId)?k:`${(P=e==null?void 0:e.uploadedDoc)==null?void 0:P.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((H=(q=e==null?void 0:e.uploadedDoc)==null?void 0:q.docPath)==null?void 0:H.split(".")[((B=(V=(z=e==null?void 0:e.uploadedDoc)==null?void 0:z.docPath)==null?void 0:V.split("."))==null?void 0:B.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((G=e==null?void 0:e.uploadedDoc)==null?void 0:G.uploadedDocId)?k:`${(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((X=(Y=e==null?void 0:e.uploadedDoc)==null?void 0:Y.docPath)==null?void 0:X.split(".")[((W=(K=(J=e==null?void 0:e.uploadedDoc)==null?void 0:J.docPath)==null?void 0:K.split("."))==null?void 0:W.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.uploadedDocId)?k:`${(T=e==null?void 0:e.uploadedDoc)==null?void 0:T.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsxs("td",{className:"py-3 px-6 text-center font-semibold",children:[((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.documentCode)=="PHOTOGRAPH"&&a.jsx("p",{className:"whitespace-no-wrap"}),(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.verifyStatus)==0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.pending.label")]})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.verifyStatus)==1&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.verified.label")]})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.rejected.label")]})})]})]}),a.jsx("td",{className:"py-3 px-6 text-center",children:((te=e==null?void 0:e.uploadedDoc)==null?void 0:te.remarks)==""||((m=e==null?void 0:e.uploadedDoc)==null?void 0:m.remarks)==null?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.remarks}),a.jsx("td",{className:"py-3 px-6 flex flex-wrap gap-2",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsx("div",{className:"font-semibold text-sm",children:a.jsxs("div",{className:"",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:".pdf,.jpg,.jpeg",type:"file",name:e==null?void 0:e.docName,onChange:o=>Me(o,"property",t),className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 foc}us:outline-none cursor-pointer shadow-md w-36"})}),(((se=e==null?void 0:e.uploadedDoc)==null?void 0:se.verify_status)!=1||(e==null?void 0:e.uploadedDoc)=="")&&a.jsx("div",{className:"mt-2",children:!ie&&a.jsx("button",{onClick:()=>Ne(e==null?void 0:e.docName,t,"property"),type:"submit",className:Se,children:s("mainSafDocumentUploadPage.upload.label")})})]})}):a.jsxs("div",{className:"font-semibold text-sm text-green-500 text-center",children:[" ",s("mainSafDocumentUploadPage.uploaded.label")]})})]})})})]})})]})}),a.jsxs("div",{className:"col-span-5 grid grid-cols-3 px-4",children:[a.jsx("div",{className:"md:pl-0"}),a.jsx("div",{className:"md:px-4 text-center"}),a.jsx("div",{className:"md:pl-10 text-right"})]})]})]}),(n==null?void 0:n.docUploadStatus)==1&&d!=!0&&a.jsx("div",{className:"flex",children:a.jsx("button",{className:"bg-blue-500 text-white hover:bg-blue-700 px-1 py-1 rounded-md",onClick:ze,children:"Send to Next Level"})}),a.jsx(we,{isOpen:ga,onRequestClose:M,style:Ja,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50 animate__animated animate__zoomIn animate__faster",children:[a.jsx("div",{className:"absolute top-5 right-5 bg-red-200 hover:bg-red-300 rounded-full p-2 cursor-pointer text-xs sm:text-base",onClick:M,children:a.jsx(Ze,{})}),a.jsx("div",{className:"flex md:pl-4 bg-white font-sans overflow-x-auto mt-6 sm:w-full w-[100vw] sm:text-base text-sm",children:a.jsxs("div",{className:"w-full lg:w-4/6",children:[a.jsxs("div",{className:"font-semibold w-full flex",children:[a.jsx("div",{className:"flex-1"}),a.jsx("div",{className:"flex-1 text-center",children:a.jsxs("span",{className:"float-none",children:[" ",s("mainSafDocumentUploadPage.uploadOwnerDocuments.label")]})})]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 font-light bg-white text-xs sm:text-sm",children:(Qe=oe==null?void 0:oe.documents)==null?void 0:Qe.map((e,t)=>{var r,i,c,u,b,p,f,y,v,S,w,g,P,q,z,V,B,H,G,Q,Y,J,K,W,X,Z,T,L,ee,ae,te;return a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:We,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:m=>ge.current[t]=m,className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:m=>qe(m,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",children:s("mainSafDocumentUploadPage.select.label")}),(r=e==null?void 0:e.masters)==null?void 0:r.map((m,x)=>a.jsx("option",{value:m==null?void 0:m.documentCode,children:m==null?void 0:m.docVal}))]})})})})}),a.jsx("td",{className:"py-3 px-6 text-center",children:(e==null?void 0:e.uploadedDoc)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var m,x,se,o,h,le,ne;return De(`${(m=e==null?void 0:e.uploadedDoc)==null?void 0:m.docPath}`,(le=(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.docPath)==null?void 0:le.split(".")[((h=(o=(se=e==null?void 0:e.uploadedDoc)==null?void 0:se.docPath)==null?void 0:o.split("."))==null?void 0:h.length)-1],(ne=e==null?void 0:e.uploadedDoc)==null?void 0:ne.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(i=e==null?void 0:e.uploadedDoc)==null?void 0:i.docPath)==null?void 0:p.split(".")[((b=(u=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:u.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(Xe,{})}),((w=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:w.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:D((g=e==null?void 0:e.uploadedDoc)==null?void 0:g.uploadedDocId)?k:`${(P=e==null?void 0:e.uploadedDoc)==null?void 0:P.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((H=(q=e==null?void 0:e.uploadedDoc)==null?void 0:q.docPath)==null?void 0:H.split(".")[((B=(V=(z=e==null?void 0:e.uploadedDoc)==null?void 0:z.docPath)==null?void 0:V.split("."))==null?void 0:B.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:D((G=e==null?void 0:e.uploadedDoc)==null?void 0:G.uploadedDocId)?k:`${(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((X=(Y=e==null?void 0:e.uploadedDoc)==null?void 0:Y.docPath)==null?void 0:X.split(".")[((W=(K=(J=e==null?void 0:e.uploadedDoc)==null?void 0:J.docPath)==null?void 0:K.split("."))==null?void 0:W.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:D((Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.uploadedDocId)?k:`${(T=e==null?void 0:e.uploadedDoc)==null?void 0:T.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]}):a.jsx(a.Fragment,{children:(e==null?void 0:e.docName)=="Photograph"?"":a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.pending.label")})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.verifyStatus)==1&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.verified.label")})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.rejected.label")})})]})})}),a.jsxs("td",{className:"py-3 px-6",children:[((ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.remarks)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):(te=e==null?void 0:e.uploadedDoc)==null?void 0:te.remarks,(e==null?void 0:e.uploadedDoc)==""&&a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")})]}),a.jsx("td",{className:"py-3 px-6",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsxs("div",{className:"font-semibold text-sm",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:t==0?".png,.jpg,.jpeg":".pdf,.png,.jpg,.jpeg",type:"file",onChange:m=>Me(m,"owner",t),className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36"})}),a.jsx("div",{className:"mt-2",children:!ie&&a.jsx("button",{onClick:()=>Ne(e==null?void 0:e.docName,t,"owner"),type:"button",className:Se,children:s("mainSafDocumentUploadPage.upload.label")})})]}):a.jsx("div",{className:"font-semibold text-sm text-green-500 text-center",children:s("mainSafDocumentUploadPage.uploaded.label")})})]})})})})]})})]})})]})}),a.jsx(we,{isOpen:ba,onAfterOpen:Ua,onRequestClose:M,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:a.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[a.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:M,children:a.jsx(Ze,{})}),D(Sa)?a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[a.jsxs("div",{className:"border-r-2 border-gray-200 pr-4",children:["Error",s("mainSafDocumentUploadPage.error.label")]}),a.jsx("div",{className:"pl-4",children:s("mainSafDocumentUploadPage.documentNotVisible.label")})]})}):a.jsxs(a.Fragment,{children:[Ce=="pdf"&&a.jsx(a.Fragment,{children:a.jsx("iframe",{className:"w-full h-full",src:Ie,frameborder:"0"})}),Ce!="pdf"&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:a.jsx("img",{src:Ie,alt:"",srcset:"",className:""})})})]})]})})]})}export{et as default};