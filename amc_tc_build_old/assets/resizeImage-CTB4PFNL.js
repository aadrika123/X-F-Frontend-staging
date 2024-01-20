<<<<<<<< HEAD:amc_tc_build/assets/resizeImage-CTB4PFNL.js
import{x as o}from"./index-Fccff64D.js";const a=n=>{const t=n.split(","),e=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),r=t[0].split(":")[1].split(";")[0],i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return new Blob([i],{type:r})},c=async n=>new Promise(e=>{o.imageFileResizer(n,500,500,"JPEG",60,0,r=>{e(r)},"base64")}).then(e=>a(e));export{c as r};
========
import{x as o}from"./index-3al-Z4c_.js";const a=n=>{const t=n.split(","),e=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),r=t[0].split(":")[1].split(";")[0],i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return new Blob([i],{type:r})},c=async n=>new Promise(e=>{o.imageFileResizer(n,500,500,"JPEG",60,0,r=>{e(r)},"base64")}).then(e=>a(e));export{c as r};
>>>>>>>> 9a8f687b6fa788805ee879e179af010f7fe00d03:amc_tc_build/assets/resizeImage-Lr_czWQJ.js
