import{v as L,r as l,h as S,a as C,u as $,c as A,d as i,o as F,b as M,j as e,q as k,R as q,A as V,w as D,a2 as I,n as O,f as R}from"./index-481363ea.js";import{l as T}from"./login-341c8dbe.js";/* empty css              */const Z=z=>{const{t:a}=L(),[m,n]=l.useState(!1),{api_changePassword:h,api_forgotPassword:g}=R();l.useContext(S);const x=C(),[b,B]=l.useState(),[f,P]=l.useState(!1),[N,y]=l.useState(null),{type:d,mobileNo:p}=$(),j=A().shape({oldPassword:i().when([],{is:()=>d=="change",then:()=>i().required(`${a("tranEditProfilePage.enterOldPasswordLabel2.label")}`)}),newPassword:i().min(6,"Minimum six character !").max(50,"Too Long!").required(`${a("tranEditProfilePage.enterNewPasswordLabel2.label")}`).matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Password Must Contains (Capital, Smail, Number, Special) eg - Abc123#."),matchNewPassword:i().required(`${a("tranEditProfilePage.confirmNewPasswordLabel2.label")}`).oneOf([F("newPassword"),null],`${a("tranEditProfilePage.passwordNotMatchLabel.label")}`)}),s=M({initialValues:{oldPassword:"",newPassword:"",matchNewPassword:""},onSubmit:(t,o)=>{console.log("post data",t),v(t)},validationSchema:j}),v=t=>{let o={password:t.oldPassword,newPassword:t.newPassword};p!=="null"&&(o.mobileNo=p),console.log("request body before hit api => ",o),n(!0),V.post(d=="change"?h:g,o,D()).then(r=>{var w,u;((w=r==null?void 0:r.data)==null?void 0:w.status)==!0&&(console.log("successfully changed => ",r),I.success("Password changed successfully !!!"),d=="change"?x("/landingDashboard"):x("/login")),((u=r==null?void 0:r.data)==null?void 0:u.status)==!1&&c(!0,"Error occured. Please try again later."),n(!1)}).catch(r=>{c(!0,"Error occured. Please try again later."),n(!1)})},E=t=>{let o=t.target.name,r=t.target.value;o=="mobile"&&s.setFieldValue("mobile",O(r,s.values.mobile,10))},c=(t,o)=>{y(o),P(t)};return e.jsxs(e.Fragment,{children:[f&&e.jsx(k,{activateBottomErrorCard:c,errorTitle:N}),e.jsx("div",{className:"w-full text-center mx-auto h-max relative",children:e.jsx("div",{className:"w-full h-max mx-auto rounded-lg ",children:e.jsx("form",{onChange:E,children:e.jsxs("div",{className:"grid grid-cols-12 px-4 md:px-0 shadow-none md:shadow-lg ",children:[e.jsx("div",{className:"col-span-6 hidden md:block bg-white py-10",children:e.jsx("img",{className:"w-3/4",src:T})}),e.jsx("div",{className:"w-full md:px-10 col-span-12 md:col-span-6 shadow-lg md:shadow-none bg-white py-10",children:e.jsxs("div",{className:"px-6 py-6 mt-10 text-gray-700 md:px-14",children:[e.jsx("h1",{className:"text-center font-semibold my-1 flex justify-center",children:e.jsx("span",{className:"px-1 text-indigo-500 text-semibold text-2xl poppins uppercase",children:a("tranEditProfilePage.changePasswordLabel.label")})}),d=="change"&&e.jsxs("div",{className:"my-3 relative text-sm",children:[e.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:a("tranEditProfilePage.oldPasswordLabel.label")}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[e.jsx("input",{type:"password",...s.getFieldProps("oldPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:a("tranEditProfilePage.enterOldPasswordLabel.label")}),e.jsx("div",{className:"w-full text-start",children:e.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:s.touched.oldPassword&&s.errors.oldPassword?s.errors.oldPassword:null})})," "]})]}),e.jsxs("div",{className:"my-3 relative text-sm",children:[e.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:a("tranEditProfilePage.newPasswordLabel.label")}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[e.jsx("input",{type:"password",...s.getFieldProps("newPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:a("tranEditProfilePage.enterNewPasswordLabel.label")}),e.jsx("div",{className:"w-full text-start",children:e.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:s.touched.newPassword&&s.errors.newPassword?s.errors.newPassword:null})})," "]})]}),e.jsxs("div",{className:"my-3 relative text-sm",children:[e.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:a("tranEditProfilePage.confirmNewPasswordLabel.label")}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[e.jsx("input",{type:"password",...s.getFieldProps("matchNewPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:a("tranEditProfilePage.confirmNewPasswordDescriptionLabel.label")}),e.jsx("div",{className:"w-full text-start",children:e.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:s.touched.matchNewPassword&&s.errors.matchNewPassword?s.errors.matchNewPassword:null})})," "]})]}),e.jsx("div",{className:" my-10"}),e.jsx("div",{className:"text-center mt-3 text-xs"}),e.jsxs("div",{className:"my-5   relative",children:[e.jsxs("div",{className:"text-red-600 text-sm font-semibold my-3 ",children:[" ",e.jsxs("span",{className:"",children:[" ",b]})]}),m?e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(q,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):e.jsx("button",{type:"submit",onClick:s.handleSubmit,disabled:m,className:" bg-indigo-500 hover:bg-indigo-700 px-5 shadow-xl py-2 w-[16rem]  rounded-md text-white text-md font-semibold",children:a("tranEditProfilePage.submitLabel.label")})]})]})})]})})})})]})};export{Z as default};