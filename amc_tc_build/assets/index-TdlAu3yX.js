import{d as D,j as i,e as $,b as y,c as j,Q as b}from"./index-OWADCy_5.js";import{R,u as z}from"./react-rKuUt_as.js";import{u as S}from"./formik.esm-GYaH6P80.js";import{c as N,a as P,b as A}from"./index.esm-ZNAGMSQQ.js";import{F as T}from"./FormProvider-oxZZ8-sQ.js";import{T as q}from"./TextField-WlASk4Fd.js";import{L as O}from"./LoaderButton-JGfZUmC1.js";import"./index-7JGA4NxA.js";import{u as k,P as C}from"./useCountDown-uXP4wvxz.js";const E=[{id:0,label:"Mobile"},{id:1,label:"Email"}];function M(){const{state:c,actions:a}=D({updateAction:$});return i.jsx("div",{className:"w-full",children:i.jsx("div",{className:"relative right-0",children:i.jsx("ul",{className:"relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60","data-tabs":"tabs",role:"list",children:E==null?void 0:E.map(s=>i.jsx("li",{className:"z-30 flex-auto text-center",onClick:()=>a==null?void 0:a.updateAction({loginTabs:s==null?void 0:s.id}),children:i.jsx("a",{className:"z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ".concat(c.loginTabs===(s==null?void 0:s.id)?"border-b-2 border-blue-500 text-blue-500":""),"data-tab-target":"",role:"tab","aria-selected":"true",children:i.jsx("span",{className:"ml-1",children:s==null?void 0:s.label})})},s==null?void 0:s.id))})})})}const L=N().shape({mobile:P().required("Mobile is required").min(10).max(10)});function B({next:c,data:a,setData:s}){const{mutateAsync:h}=y({}),t=S({enableReinitialize:!0,initialValues:{mobile:a.mobile||""},validationSchema:L,onSubmit:async(r,{})=>{var x,n,d;try{const e=await h({api:j.forgotPassword,data:{mobile:r.mobile}});(x=e==null?void 0:e.data)!=null&&x.status?(c({...a,mobile:r.mobile}),b.success((n=e==null?void 0:e.data)==null?void 0:n.message)):b.error((d=e==null?void 0:e.data)==null?void 0:d.message)}catch(e){b.error(e==null?void 0:e.message)}}});return i.jsxs(T,{formik:t,children:[i.jsx("h2",{className:" font-semibold mt-8 mb-4",children:"Send OTP"}),i.jsx(q,{label:"Mobile",name:"mobile",type:"number",formik:t,placeholder:"Enter your register mobile no"}),i.jsx(O,{type:t.isSubmitting?"button":"submit",disabled:t.isSubmitting,loading:t.isSubmitting,children:"SEND OTP"})]})}const Q=N().shape({otp:P().required("OTP is required")});function W({next:c,data:a,setData:s,prev:h,state:t}){const{minutes:r,seconds:x,togglerTimer:n,runTimer:d}=k(.5),{mutateAsync:e,isLoading:f}=y({}),o=S({enableReinitialize:!0,initialValues:{mobile:a.mobile||"",email:a.email||"",otp:a.otp||""},validationSchema:Q,onSubmit:async(g,{})=>{var p,w,l,F,V;try{const m=await e({api:j.otpVerify,data:(t==null?void 0:t.loginTabs)==0?{mobile:g.mobile,Otp:g==null?void 0:g.otp}:{email:g.email,Otp:g==null?void 0:g.otp}});(p=m==null?void 0:m.data)!=null&&p.status?(c({...a,otp:g.otp,token:(l=(w=m==null?void 0:m.data)==null?void 0:w.data)==null?void 0:l.token}),b.success((F=m==null?void 0:m.data)==null?void 0:F.message)):b.error((V=m==null?void 0:m.data)==null?void 0:V.message)}catch(m){b.error(m==null?void 0:m.message)}}});R.useEffect(()=>(n(),()=>{n()}),[]);const u=async()=>{var g,p,w;try{const l=await e({api:j.forgotPassword,data:(t==null?void 0:t.loginTabs)==0?{mobile:a.mobile}:{email:a.email}});(g=l==null?void 0:l.data)!=null&&g.status?(b.success((p=l==null?void 0:l.data)==null?void 0:p.message),s({...a,otp:""}),o.setFieldValue("otp",""),n()):b.error((w=l==null?void 0:l.data)==null?void 0:w.message)}catch(l){b.error(l==null?void 0:l.message)}};return i.jsxs(T,{formik:o,children:[i.jsxs("h1",{className:"text-sm mt-8 mb-4",children:["Please enter the 6-digit verification code sent to"," ",t.loginTabs==0?" your phone number":"your email-:  ",t.loginTabs==0?"+"+(o==null?void 0:o.values.mobile):o==null?void 0:o.values.email," ",i.jsx("span",{className:"text-sm text-blue-700",onClick:()=>h(t.loginTabs==0?{mobile:o==null?void 0:o.values.mobile,otp:""}:{email:o==null?void 0:o.values.email,otp:""}),children:"Edit"})]}),i.jsx(q,{label:"Verify OTP",name:"otp",type:"text",formik:o}),i.jsx(O,{type:o.isSubmitting?"button":"submit",disabled:o.isSubmitting,loading:o.isSubmitting,children:"Verify OTP"}),i.jsxs("div",{className:"text-center mt-12 text-sm",children:["Didn't receive the code?"," ",f?i.jsx("small",{className:"text-gray-700 text-sm",children:"Please wait..."}):i.jsx(i.Fragment,{children:d?i.jsxs("span",{className:"text-gray-700 cursor-pointer",children:["Resend in ",r,":",x]}):i.jsx("span",{className:"text-blue-700 cursor-pointer",onClick:u,children:"Resend OTP"})})]})]})}const G=N().shape({newPassword:P().required("New Password is required"),confirmPassword:P().required("Confirm Password is required").oneOf([A("newPassword"),null],"Passwords must match")});function H({next:c,data:a,setData:s,prev:h,state:t}){k(5);const r=z(),{mutateAsync:x}=y({}),n=S({enableReinitialize:!0,initialValues:{newPassword:"",confirmPassword:""},validationSchema:G,onSubmit:async(d,{})=>{var e,f,o;try{const u=await x({api:j.resetPassword,data:{token:a==null?void 0:a.token,password:d==null?void 0:d.newPassword}});(e=u==null?void 0:u.data)!=null&&e.status?(c(d,!0),b.success((f=u==null?void 0:u.data)==null?void 0:f.message),r("/auth/login")):b.error((o=u==null?void 0:u.data)==null?void 0:o.message)}catch(u){b.error(u==null?void 0:u.message)}}});return i.jsxs(T,{formik:n,children:[i.jsx("h1",{className:"text-lg mt-5 mb-4 font-semibold",children:"Create New Password"}),i.jsx(C,{label:"New Password",name:"newPassword",formik:n}),i.jsx(C,{label:"Confirm Password",name:"confirmPassword",formik:n}),i.jsx(O,{type:n.isSubmitting?"button":"submit",disabled:n.isSubmitting,loading:n.isSubmitting,children:"RESET PASSWORD"})]})}const I=N().shape({email:P().required("Email is required").email()});function J({next:c,data:a,setData:s}){const{mutateAsync:h}=y({}),t=S({enableReinitialize:!0,initialValues:{email:a.email||""},validationSchema:I,onSubmit:async(r,{})=>{var x,n,d;try{const e=await h({api:j.forgotPassword,data:{email:r==null?void 0:r.email}});(x=e==null?void 0:e.data)!=null&&x.status?(c({...a,email:r==null?void 0:r.email}),b.success((n=e==null?void 0:e.data)==null?void 0:n.message)):b.error((d=e==null?void 0:e.data)==null?void 0:d.message)}catch(e){b.error(e==null?void 0:e.message)}}});return i.jsxs(T,{formik:t,children:[i.jsx("h2",{className:" font-semibold mt-8 mb-4",children:"Send OTP"}),i.jsx(q,{label:"Email *",name:"email",type:"email",formik:t,placeholder:"Enter your register email id"}),i.jsx(O,{type:t.isSubmitting?"button":"submit",disabled:t.isSubmitting,loading:t.isSubmitting,children:"SEND OTP"})]})}function te(){const{state:c,actions:a}=D({updateAction:$}),[s,h]=R.useState(0),[t,r]=R.useState({mobile:"",email:"",otp:"",newPassword:"",confirmPassword:"",token:""}),x=e=>{console.log(e)},n=(e,f=!1)=>{if(r({...t,...e}),f){x(e);return}h(s+1)},d=e=>{r({...t,...e}),h(s-1)};return i.jsxs(i.Fragment,{children:[s===0&&i.jsx(M,{}),i.jsx("div",{children:{0:c.loginTabs==0?i.jsx(B,{state:c,next:n,data:t,setData:r}):i.jsx(J,{state:c,next:n,data:t,setData:r}),1:i.jsx(W,{state:c,next:n,prev:d,data:t,setData:r}),2:i.jsx(H,{state:c,next:n,prev:d,data:t,setData:r})}[s]})]})}export{te as default};