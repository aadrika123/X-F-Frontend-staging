import{aB as A,aA as J,aC as F,aF as d,r as K,aI as W,j as x,aJ as D,aE as G,aK as H}from"./index-badba5ac.js";import{u as M,a as Q}from"./useFormControl-981b2a1d.js";import{B as T}from"./Typography-19993a5c.js";function V(e){return A("PrivateSwitchBase",e)}J("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y=e=>{const{classes:a,checked:i,disabled:l,edge:o}=e,r={root:["root",i&&"checked",l&&"disabled",o&&`edge${G(o)}`],input:["input"]};return H(r,V,a)},Z=F(T)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ee=F("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),se=K.forwardRef(function(a,i){const{autoFocus:l,checked:o,checkedIcon:r,className:y,defaultChecked:h,disabled:w,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:I,inputProps:P,inputRef:j,name:E,onBlur:f,onChange:m,onFocus:g,readOnly:z,required:N=!1,tabIndex:U,type:c,value:b}=a,q=W(a,X),[B,v]=M({controlled:o,default:!!h,name:"SwitchBase",state:"checked"}),t=Q(),L=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},O=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},_=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;v(C),m&&m(s,C)};let n=w;t&&typeof n>"u"&&(n=t.disabled);const $=c==="checkbox"||c==="radio",u=d({},a,{checked:B,disabled:n,disableFocusRipple:p,edge:S}),k=Y(u);return x.jsxs(Z,d({component:"span",className:D(k.root,y),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:L,onBlur:O,ownerState:u,ref:i},q,{children:[x.jsx(ee,d({autoFocus:l,checked:o,defaultChecked:h,className:k.input,disabled:n,id:$?I:void 0,name:E,onChange:_,readOnly:z,ref:j,required:N,ownerState:u,tabIndex:U,type:c},c==="checkbox"&&b===void 0?{}:{value:b},P)),B?r:R]}))}),ne=se;export{ne as S};