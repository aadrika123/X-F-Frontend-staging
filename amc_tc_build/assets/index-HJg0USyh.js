import{u as h,j as e,r as m,g as P,h as k,Q as x,R as p}from"./index-0hR0G667.js";import{P as C}from"./index-L-mZC7VR.js";import{u as b,T as n}from"./TextField-gSqx3lum.js";import{c as v,a as o,b as q}from"./index.esm-gXHfdd6E.js";import{F as y}from"./FormProvider-UefJvtU_.js";import{T as O}from"./TextAreaField-S0JB78mD.js";import"./index-D0ONhqYM.js";const z=v().shape({name:o().required("Name is required"),mobile:o().required("Mobile is required"),dateOfBirth:o().required("Date of Birth is required"),address:o().required("Address is required")});function B({open:d,setOpen:c}){const r=()=>c(!d),{user:a}=h(),s=b({enableReinitialize:!0,initialValues:{name:(a==null?void 0:a.name)||"",mobile:(a==null?void 0:a.mobile)||"",dateOfBirth:(a==null?void 0:a.dateOfBirth)||"",address:(a==null?void 0:a.address)||""},validationSchema:z,onSubmit:(l,{resetForm:i})=>{console.log(l),i(),r()}});return e.jsxs(y,{formik:s,children:[d&&e.jsx("div",{onClick:r,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(d?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Update Profile"}),e.jsxs("button",{onClick:r,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(n,{name:"name",label:"Full Name",formik:s})}),e.jsx("div",{className:"-mt-3",children:e.jsx(n,{name:"email",label:"Email",value:a==null?void 0:a.email,disabled:!0})}),e.jsx("div",{className:"-mt-3",children:e.jsx(n,{name:"mobile",label:"Mobile",formik:s,type:"number"})}),e.jsx("div",{className:"-mt-3",children:e.jsx(n,{name:"dateOfBirth",label:"Date of Birth",formik:s,type:"date"})}),e.jsx("div",{className:"-mt-3",children:e.jsx(O,{name:"address",label:"Address",formik:s})})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(m.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:r,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(m.Button,{type:"submit",size:"sm",children:e.jsx("span",{children:"UPDATE"})})]})]})]})})})]})}const A=v().shape({password:o().required("Password is required"),newPassword:o().required("New Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,"Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),confirmPassword:o().required("Confirm Password is required").oneOf([q("newPassword"),null],"New Password must match")});function M({open:d,setOpen:c}){const r=()=>c(!d),{mutateAsync:a}=P({}),{logoutChangePassword:s}=h(),l=b({enableReinitialize:!0,initialValues:{password:"",newPassword:"",confirmPassword:""},validationSchema:A,onSubmit:async(i,{resetForm:N})=>{var u,g,j,w,f;try{const t=await a({api:k.changePassword,data:{password:i==null?void 0:i.password,newPassword:i==null?void 0:i.newPassword}});(u=t==null?void 0:t.data)!=null&&u.status?(x.success((g=t==null?void 0:t.data)==null?void 0:g.message),s()):x.error((j=t==null?void 0:t.data)==null?void 0:j.message)}catch(t){x.error((f=(w=t==null?void 0:t.response)==null?void 0:w.data)==null?void 0:f.message)}N(),r()}});return e.jsxs(y,{formik:l,children:[d&&e.jsx("div",{onClick:r,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(d?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Change Password"}),e.jsxs("button",{onClick:r,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{children:e.jsx(n,{name:"password",label:"Old Password",type:"password",formik:l})}),e.jsx("div",{children:e.jsx(n,{name:"newPassword",label:"New Password",type:"password",formik:l})}),e.jsx("div",{children:e.jsx(n,{name:"confirmPassword",label:"Confirm Password",type:"password",formik:l})})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(m.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:r,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(m.Button,{type:"submit",size:"sm",loading:l.isSubmitting,children:e.jsx("span",{children:"UPDATE"})})]})]})]})})})]})}function D(){const[d,c]=p.useState(!1),[r,a]=p.useState(!1),{user:s}=h(),l=()=>{c(!0)},i=()=>{a(!0)};return e.jsxs(C,{title:"Profile",children:[e.jsx(B,{open:d,setOpen:c}),e.jsx(M,{open:r,setOpen:a}),e.jsx("div",{className:"px-4",children:e.jsxs("div",{className:"p-8 bg-white shadow mt-20 rounded-2xl",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3",children:[e.jsxs("div",{className:"grid grid-cols-2 text-center order-last md:order-first mt-10 md:mt-0",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-700 text-xl",children:"2"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Alloted Zone"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-700 text-xl",children:"10"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Alloted Ward"})]})]}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:"w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-24 w-24",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})})}),e.jsxs("div",{className:"space-x-4 flex justify-between mt-20 md:mt-0 md:justify-center",children:[e.jsx("button",{onClick:i,className:"text-white w-full text-sm py-1 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5",children:e.jsx("small",{children:"Change Password"})}),e.jsx("button",{onClick:l,className:"text-white w-full text-sm py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5",children:e.jsx("small",{children:"Edit Profile"})})]})]}),e.jsxs("div",{className:"mt-8 text-center border-b pb-12",children:[e.jsx("h1",{className:"text-2xl font-medium text-gray-700",children:s==null?void 0:s.name}),e.jsx("p",{className:"font-light text-gray-600 mt-2",children:s==null?void 0:s.email}),e.jsx("p",{className:"mt-1 text-gray-500",children:s==null?void 0:s.mobile}),e.jsx("p",{className:"mt-1 text-gray-500",children:(s==null?void 0:s.role[0])||"Role not found"})]}),e.jsx("div",{className:"mt-12 flex flex-col justify-center",children:e.jsx("p",{className:"text-gray-600 text-center font-light lg:px-16",children:s==null?void 0:s.address})})]})})]})}export{D as default};