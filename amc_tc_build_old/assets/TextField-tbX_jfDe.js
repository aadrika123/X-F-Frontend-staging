import{j as t}from"./index-KiTF9xkC.js";import{g as d}from"./formik.esm-MEJnthxH.js";import{c as g}from"./customInputValidation-8tSUGdUh.js";function o({label:r,name:s,formik:e,isDynamic:l,isRequiredLabel:p=!1,className:c,inputValidation:a,...x}){return t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{htmlFor:s,className:"block text-gray-600 text-sm mb-1",children:r}),t.jsx("input",{type:"text",name:s,id:s,...e&&(e==null?void 0:e.getFieldProps(s)),className:"".concat(c," w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"),placeholder:r,onInput:u=>{a&&g(u,a)},...x}),t.jsx("span",{className:"text-red-600  text-xs",children:l?d(e==null?void 0:e.touched,s)&&d(e==null?void 0:e.errors,s):(e==null?void 0:e.touched[s])&&(e==null?void 0:e.errors[s])})]})}export{o as T};