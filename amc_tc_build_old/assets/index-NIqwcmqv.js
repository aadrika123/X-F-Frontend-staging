import{u as c,b as p,c as x,Q as n,j as t,d as h,e as f}from"./index-c7foKKMh.js";import{L as g}from"./router-g9NwwHut.js";import{u as b}from"./formik.esm-MEJnthxH.js";import{c as s,a as e}from"./index.esm-lGQm42K_.js";import{F as j}from"./FormProvider-4V8AJTox.js";import{T as w}from"./TextField-6-dUF8mB.js";import{L as q}from"./LoaderButton-uM_GRmjZ.js";import{P as L}from"./useCountDown-7rhy_UXD.js";import"./index-KJUlVKah.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./tailwind-xMhOhnt0.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";const P=s().shape({email:e().email("Invalid email").required("Email is required"),password:e().required("Password is required")});function v(){const r=c(),{mutateAsync:l}=p({}),a=b({initialValues:{email:"",password:""},validationSchema:P,onSubmit:async(u,{})=>{var o,m,d;try{const i=await l({api:x.login,data:u});((o=i==null?void 0:i.data)==null?void 0:o.status)===!0?(r==null||r.login(i),n.success((m=i==null?void 0:i.data)==null?void 0:m.message)):n.error((d=i==null?void 0:i.data)==null?void 0:d.message)}catch(i){}}});return t.jsxs("div",{children:[t.jsx("h2",{className:" font-semibold mt-8 mb-4",children:"Login with Email Address"}),t.jsxs(j,{formik:a,children:[t.jsx(w,{label:"Email",name:"email",type:"email",formik:a,placeholder:"Enter your register email id"}),t.jsx(L,{label:"Password",name:"password",formik:a}),t.jsx("div",{className:"text-center mt-8",children:t.jsx(q,{type:a.isSubmitting?"button":"submit",disabled:a.isSubmitting,loading:a.isSubmitting,children:"Login"})}),t.jsx("div",{className:"text-center mt-4",children:t.jsx(g,{to:"/auth/forgot-password",className:"text-[#5846BE]",children:"Forgot Password?"})})]})]})}s().shape({mobile:e().required("Mobile is required").min(10).max(10)});s().shape({otp:e().required("OTP is required")});function R(){return h({updateAction:f}),t.jsx("div",{children:t.jsx(v,{})})}export{R as default};