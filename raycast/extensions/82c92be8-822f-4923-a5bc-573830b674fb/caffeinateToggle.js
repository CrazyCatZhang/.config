"use strict";var s=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var b=(t,e)=>{for(var a in e)s(t,a,{get:e[a],enumerable:!0})},w=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of l(e))!y.call(t,r)&&r!==a&&s(t,r,{get:()=>e[r],enumerable:!(o=m(e,r))||o.enumerable});return t};var g=t=>w(s({},"__esModule",{value:!0}),t);var x={};b(x,{default:()=>h});module.exports=g(x);var p=require("child_process");var n=require("@raycast/api"),i=require("node:child_process");function d(t){let e=(0,n.getPreferenceValues)(),a=[];return e.preventDisplay&&a.push("d"),e.preventDisk&&a.push("m"),e.preventSystem&&a.push("i"),t&&a.push(` ${t}`),a.length>0?`-${a.join("")}`:""}async function u(t,e){if(t.menubar)try{await(0,n.launchCommand)({name:"index",type:n.LaunchType.Background,context:{caffeinated:e}})}catch{}t.status&&await(0,n.launchCommand)({name:"status",type:n.LaunchType.Background,context:{caffeinated:e}})}async function f(t,e){u(t,!1),e&&await(0,n.showHUD)(e),(0,i.exec)("/usr/bin/killall caffeinate")}async function c(t,e,a){await f({menubar:!1,status:!1}),u(t,!0),e&&await(0,n.showHUD)(e),(0,i.exec)(`/usr/bin/caffeinate ${d(a)}`)}var h=async()=>{try{(0,p.execSync)("pgrep caffeinate"),await f({menubar:!0,status:!0},"Your Mac is now decaffeinated")}catch{await c({menubar:!0,status:!0},"Your Mac is now caffeinated")}};
