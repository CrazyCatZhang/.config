"use strict";var hn=Object.create;var B=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var gn=Object.getOwnPropertyNames;var yn=Object.getPrototypeOf,xn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),wn=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},Ee=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of gn(t))!xn.call(e,o)&&o!==r&&B(e,o,{get:()=>t[o],enumerable:!(n=Sn(t,o))||n.enumerable});return e};var Ie=(e,t,r)=>(r=e!=null?hn(yn(e)):{},Ee(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),bn=e=>Ee(B({},"__esModule",{value:!0}),e);var Ae=c((yo,Ge)=>{Ge.exports=Ce;Ce.sync=En;var Te=require("fs");function vn(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Pe(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:vn(t,r)}function Ce(e,t,r){Te.stat(e,function(n,o){r(n,n?!1:Pe(o,e,t))})}function En(e,t){return Pe(Te.statSync(e),e,t)}});var Ne=c((xo,ke)=>{ke.exports=Oe;Oe.sync=In;var Re=require("fs");function Oe(e,t,r){Re.stat(e,function(n,o){r(n,n?!1:qe(o,t))})}function In(e,t){return qe(Re.statSync(e),t)}function qe(e,t){return e.isFile()&&Tn(e,t)}function Tn(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,h=r&l||r&u&&o===i||r&a&&n===s||r&f&&s===0;return h}});var $e=c((bo,_e)=>{var wo=require("fs"),M;process.platform==="win32"||global.TESTING_WINDOWS?M=Ae():M=Ne();_e.exports=Z;Z.sync=Pn;function Z(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){Z(e,t||{},function(s,i){s?o(s):n(i)})})}M(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function Pn(e,t){try{return M.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var De=c((vo,Ue)=>{var E=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Le=require("path"),Cn=E?";":":",Be=$e(),Me=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),je=(e,t)=>{let r=t.colon||Cn,n=e.match(/\//)||E&&e.match(/\\/)?[""]:[...E?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=E?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=E?o.split(r):[""];return E&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},Fe=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=je(e,t),i=[],a=l=>new Promise((f,h)=>{if(l===n.length)return t.all&&i.length?f(i):h(Me(e));let m=n[l],S=/^".*"$/.test(m)?m.slice(1,-1):m,g=Le.join(S,e),y=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;f(u(y,l,0))}),u=(l,f,h)=>new Promise((m,S)=>{if(h===o.length)return m(a(f+1));let g=o[h];Be(l+g,{pathExt:s},(y,v)=>{if(!y&&v)if(t.all)i.push(l+g);else return m(l+g);return m(u(l,f,h+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},Gn=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=je(e,t),s=[];for(let i=0;i<r.length;i++){let a=r[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=Le.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<n.length;h++){let m=f+n[h];try{if(Be.sync(m,{pathExt:o}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Me(e)};Ue.exports=Fe;Fe.sync=Gn});var ee=c((Eo,J)=>{"use strict";var He=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};J.exports=He;J.exports.default=He});var ze=c((Io,We)=>{"use strict";var Xe=require("path"),An=De(),Rn=ee();function Ke(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=An.sync(e.command,{path:r[Rn({env:r})],pathExt:t?Xe.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=Xe.resolve(o?e.options.cwd:"",i)),i}function On(e){return Ke(e)||Ke(e,!0)}We.exports=On});var Ve=c((To,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function qn(e){return e=e.replace(te,"^$1"),e}function kn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=qn;ne.exports.argument=kn});var Qe=c((Po,Ye)=>{"use strict";Ye.exports=/^#!(.*)/});var Je=c((Co,Ze)=>{"use strict";var Nn=Qe();Ze.exports=(e="")=>{let t=e.match(Nn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var tt=c((Go,et)=>{"use strict";var re=require("fs"),_n=Je();function $n(e){let r=Buffer.alloc(150),n;try{n=re.openSync(e,"r"),re.readSync(n,r,0,150,0),re.closeSync(n)}catch{}return _n(r.toString())}et.exports=$n});var st=c((Ao,ot)=>{"use strict";var Ln=require("path"),nt=ze(),rt=Ve(),Bn=tt(),Mn=process.platform==="win32",jn=/\.(?:com|exe)$/i,Fn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Un(e){e.file=nt(e);let t=e.file&&Bn(e.file);return t?(e.args.unshift(e.file),e.command=t,nt(e)):e.file}function Dn(e){if(!Mn)return e;let t=Un(e),r=!jn.test(t);if(e.options.forceShell||r){let n=Fn.test(t);e.command=Ln.normalize(e.command),e.command=rt.command(e.command),e.args=e.args.map(s=>rt.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Hn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Dn(n)}ot.exports=Hn});var ct=c((Ro,at)=>{"use strict";var oe=process.platform==="win32";function se(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Xn(e,t){if(!oe)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=it(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function it(e,t){return oe&&e===1&&!t.file?se(t.original,"spawn"):null}function Kn(e,t){return oe&&e===1&&!t.file?se(t.original,"spawnSync"):null}at.exports={hookChildProcess:Xn,verifyENOENT:it,verifyENOENTSync:Kn,notFoundError:se}});var dt=c((Oo,I)=>{"use strict";var ut=require("child_process"),ie=st(),ae=ct();function lt(e,t,r){let n=ie(e,t,r),o=ut.spawn(n.command,n.args,n.options);return ae.hookChildProcess(o,n),o}function Wn(e,t,r){let n=ie(e,t,r),o=ut.spawnSync(n.command,n.args,n.options);return o.error=o.error||ae.verifyENOENTSync(o.status,n),o}I.exports=lt;I.exports.spawn=lt;I.exports.sync=Wn;I.exports._parse=ie;I.exports._enoent=ae});var pt=c((qo,ft)=>{"use strict";ft.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var St=c((ko,q)=>{"use strict";var O=require("path"),mt=ee(),ht=e=>{e={cwd:process.cwd(),path:process.env[mt()],execPath:process.execPath,...e};let t,r=O.resolve(e.cwd),n=[];for(;t!==r;)n.push(O.join(r,"node_modules/.bin")),t=r,r=O.resolve(r,"..");let o=O.resolve(e.cwd,e.execPath,"..");return n.push(o),n.concat(e.path).join(O.delimiter)};q.exports=ht;q.exports.default=ht;q.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=mt({env:t});return e.path=t[r],t[r]=q.exports(e),t}});var yt=c((No,ce)=>{"use strict";var gt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};ce.exports=gt;ce.exports.default=gt});var wt=c((_o,F)=>{"use strict";var zn=yt(),j=new WeakMap,xt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(j.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return zn(s,e),j.set(s,n),s};F.exports=xt;F.exports.default=xt;F.exports.callCount=e=>{if(!j.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return j.get(e)}});var bt=c(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.SIGNALS=void 0;var Vn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];U.SIGNALS=Vn});var ue=c(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.SIGRTMAX=T.getRealtimeSignals=void 0;var Yn=function(){let e=Et-vt+1;return Array.from({length:e},Qn)};T.getRealtimeSignals=Yn;var Qn=function(e,t){return{name:`SIGRT${t+1}`,number:vt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},vt=34,Et=64;T.SIGRTMAX=Et});var It=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.getSignals=void 0;var Zn=require("os"),Jn=bt(),er=ue(),tr=function(){let e=(0,er.getRealtimeSignals)();return[...Jn.SIGNALS,...e].map(nr)};D.getSignals=tr;var nr=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=Zn.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:o,standard:s}}});var Pt=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.signalsByNumber=P.signalsByName=void 0;var rr=require("os"),Tt=It(),or=ue(),sr=function(){return(0,Tt.getSignals)().reduce(ir,{})},ir=function(e,{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}}},ar=sr();P.signalsByName=ar;var cr=function(){let e=(0,Tt.getSignals)(),t=or.SIGRTMAX+1,r=Array.from({length:t},(n,o)=>ur(o,e));return Object.assign({},...r)},ur=function(e,t){let r=lr(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:a,standard:u}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},lr=function(e,t){let r=t.find(({name:n})=>rr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},dr=cr();P.signalsByNumber=dr});var Gt=c((jo,Ct)=>{"use strict";var{signalsByName:fr}=Pt(),pr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",mr=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let m=o===void 0?void 0:fr[o].description,S=n&&n.code,y=`Command ${pr({timedOut:u,timeout:h,errorCode:S,signal:o,signalDescription:m,exitCode:s,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(n)==="[object Error]",$=v?`${y}
${n.message}`:y,L=[$,t,e].filter(Boolean).join(`
`);return v?(n.originalMessage=n.message,n.message=L):n=new Error(L),n.shortMessage=$,n.command=i,n.escapedCommand=a,n.exitCode=s,n.signal=o,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=l,n.killed=f&&!u,n};Ct.exports=mr});var Rt=c((Fo,le)=>{"use strict";var H=["stdin","stdout","stderr"],hr=e=>H.some(t=>e[t]!==void 0),At=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return H.map(n=>e[n]);if(hr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${H.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,H.length);return Array.from({length:r},(n,o)=>t[o])};le.exports=At;le.exports.node=e=>{let t=At(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Ot=c((Uo,X)=>{X.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&X.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&X.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var $t=c((Do,A)=>{var d=global.process,w=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};w(d)?(qt=require("assert"),C=Ot(),kt=/^win/i.test(d.platform),k=require("events"),typeof k!="function"&&(k=k.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new k,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),A.exports=function(e,t){if(!w(global.process))return function(){};qt.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&de();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&K()};return p.on(r,e),n},K=function(){!G||!w(global.process)||(G=!1,C.forEach(function(t){try{d.removeListener(t,W[t])}catch{}}),d.emit=z,d.reallyExit=fe,p.count-=1)},A.exports.unload=K,b=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},W={},C.forEach(function(e){W[e]=function(){if(!!w(global.process)){var r=d.listeners(e);r.length===p.count&&(K(),b("exit",null,e),b("afterexit",null,e),kt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),A.exports.signals=function(){return C},G=!1,de=function(){G||!w(global.process)||(G=!0,p.count+=1,C=C.filter(function(t){try{return d.on(t,W[t]),!0}catch{return!1}}),d.emit=_t,d.reallyExit=Nt)},A.exports.load=de,fe=d.reallyExit,Nt=function(t){!w(global.process)||(d.exitCode=t||0,b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),fe.call(d,d.exitCode))},z=d.emit,_t=function(t,r){if(t==="exit"&&w(global.process)){r!==void 0&&(d.exitCode=r);var n=z.apply(this,arguments);return b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),n}else return z.apply(this,arguments)}):A.exports=function(){return function(){}};var qt,C,kt,k,p,K,b,W,G,de,fe,Nt,z,_t});var Bt=c((Ho,Lt)=>{"use strict";var Sr=require("os"),gr=$t(),yr=1e3*5,xr=(e,t="SIGTERM",r={})=>{let n=e(t);return wr(e,t,r,n),n},wr=(e,t,r,n)=>{if(!br(t,r,n))return;let o=Er(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},br=(e,{forceKillAfterTimeout:t},r)=>vr(e)&&t!==!1&&r,vr=e=>e===Sr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Er=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return yr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Ir=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Tr=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Pr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Tr(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Cr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Gr=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=gr(()=>{e.kill()});return n.finally(()=>{o()})};Lt.exports={spawnedKill:xr,spawnedCancel:Ir,setupTimeout:Pr,validateTimeout:Cr,setExitHandler:Gr}});var jt=c((Xo,Mt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Mt.exports=x});var Ut=c((Ko,Ft)=>{"use strict";var{PassThrough:Ar}=require("stream");Ft.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new Ar({objectMode:o});r&&s.setEncoding(r);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var Dt=c((Wo,N)=>{"use strict";var{constants:Rr}=require("buffer"),Or=require("stream"),{promisify:qr}=require("util"),kr=Ut(),Nr=qr(Or.pipeline),V=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function pe(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=kr(t);return await new Promise((o,s)=>{let i=a=>{a&&n.getBufferedLength()<=Rr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),s(a)};(async()=>{try{await Nr(e,n),o()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new V)})}),n.getBufferedValue()}N.exports=pe;N.exports.buffer=(e,t)=>pe(e,{...t,encoding:"buffer"});N.exports.array=(e,t)=>pe(e,{...t,array:!0});N.exports.MaxBufferError=V});var Xt=c((zo,Ht)=>{"use strict";var{PassThrough:_r}=require("stream");Ht.exports=function(){var e=[],t=new _r({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var Vt=c((Vo,zt)=>{"use strict";var Wt=jt(),Kt=Dt(),$r=Xt(),Lr=(e,t)=>{t===void 0||e.stdin===void 0||(Wt(t)?t.pipe(e.stdin):e.stdin.end(t))},Br=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=$r();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},me=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},he=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Kt(e,{encoding:t,maxBuffer:n}):Kt.buffer(e,{maxBuffer:n})},Mr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let a=he(e,{encoding:n,buffer:o,maxBuffer:s}),u=he(t,{encoding:n,buffer:o,maxBuffer:s}),l=he(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},me(e,a),me(t,u),me(r,l)])}},jr=({input:e})=>{if(Wt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};zt.exports={handleInput:Lr,makeAllStream:Br,getSpawnedResult:Mr,validateInputSync:jr}});var Qt=c((Yo,Yt)=>{"use strict";var Fr=(async()=>{})().constructor.prototype,Ur=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Fr,e)]),Dr=(e,t)=>{for(let[r,n]of Ur){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},Hr=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});Yt.exports={mergePromise:Dr,getSpawnedPromise:Hr}});var en=c((Qo,Jt)=>{"use strict";var Zt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Xr=/^[\w.-]+$/,Kr=/"/g,Wr=e=>typeof e!="string"||Xr.test(e)?e:`"${e.replace(Kr,'\\"')}"`,zr=(e,t)=>Zt(e,t).join(" "),Vr=(e,t)=>Zt(e,t).map(r=>Wr(r)).join(" "),Yr=/ +/g,Qr=e=>{let t=[];for(let r of e.trim().split(Yr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Jt.exports={joinCommand:zr,getEscapedCommand:Vr,parseCommand:Qr}});var cn=c((Zo,R)=>{"use strict";var Zr=require("path"),Se=require("child_process"),Jr=dt(),eo=pt(),to=St(),no=wt(),Y=Gt(),nn=Rt(),{spawnedKill:ro,spawnedCancel:oo,setupTimeout:so,validateTimeout:io,setExitHandler:ao}=Bt(),{handleInput:co,getSpawnedResult:uo,makeAllStream:lo,validateInputSync:fo}=Vt(),{mergePromise:tn,getSpawnedPromise:po}=Qt(),{joinCommand:rn,parseCommand:on,getEscapedCommand:sn}=en(),mo=1e3*1e3*100,ho=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...process.env,...e}:e;return r?to.env({env:s,cwd:n,execPath:o}):s},an=(e,t,r={})=>{let n=Jr._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:mo,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=ho(r),r.stdio=nn(r),process.platform==="win32"&&Zr.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},_=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?eo(t):t,Q=(e,t,r)=>{let n=an(e,t,r),o=rn(e,t),s=sn(e,t);io(n.options);let i;try{i=Se.spawn(n.file,n.args,n.options)}catch(S){let g=new Se.ChildProcess,y=Promise.reject(Y({error:S,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return tn(g,y)}let a=po(i),u=so(i,n.options,a),l=ao(i,n.options,u),f={isCanceled:!1};i.kill=ro.bind(null,i.kill.bind(i)),i.cancel=oo.bind(null,i,f);let m=no(async()=>{let[{error:S,exitCode:g,signal:y,timedOut:v},$,L,mn]=await uo(i,n.options,l),xe=_(n.options,$),we=_(n.options,L),be=_(n.options,mn);if(S||g!==0||y!==null){let ve=Y({error:S,exitCode:g,signal:y,stdout:xe,stderr:we,all:be,command:o,escapedCommand:s,parsed:n,timedOut:v,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return ve;throw ve}return{command:o,escapedCommand:s,exitCode:0,stdout:xe,stderr:we,all:be,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return co(i,n.options.input),i.all=lo(i,n.options),tn(i,m)};R.exports=Q;R.exports.sync=(e,t,r)=>{let n=an(e,t,r),o=rn(e,t),s=sn(e,t);fo(n.options);let i;try{i=Se.spawnSync(n.file,n.args,n.options)}catch(l){throw Y({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=_(n.options,i.stdout,i.error),u=_(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Y({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};R.exports.command=(e,t)=>{let[r,...n]=on(e);return Q(r,n,t)};R.exports.commandSync=(e,t)=>{let[r,...n]=on(e);return Q.sync(r,n,t)};R.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=nn.node(r),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=r;return Q(s,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var So={};wn(So,{default:()=>pn});module.exports=bn(So);var fn=require("@raycast/api");var un=Ie(require("node:process"),1),ln=Ie(cn(),1);async function ge(e){if(un.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,ln.default)("osascript",["-e",e]);return t}var ye=require("@raycast/api");var dn=e=>`
    tell application "Slack"
      if not application "Slack" is running then
        activate
        set _maxOpenWaitTimeInSeconds to 5
        set _openCounter to 0
        repeat until application "Slack" is running
          delay 0.5
          set _openCounter to _openCounter + 0.5
          if _openCounter > _maxOpenWaitTimeInSeconds then exit repeat
        end repeat

        delay 6

        # Exit 'Set yourself to active?' window
        activate
        tell application "System Events"
          key code 53
        end tell
      end if
      activate
      ${e}
    end tell`;async function pn(){return await(0,fn.showHUD)("Open unread messages"),await ge(dn(`
      tell application "System Events" to tell process "Slack" to keystroke "A" using {command down, shift down}
    `)),null}0&&(module.exports={});