"use strict";var H=Object.defineProperty;var jt=Object.getOwnPropertyDescriptor;var Qt=Object.getOwnPropertyNames;var _t=Object.prototype.hasOwnProperty;var Gt=(t,e)=>{for(var r in e)H(t,r,{get:e[r],enumerable:!0})},Xt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Qt(e))!_t.call(t,o)&&o!==r&&H(t,o,{get:()=>e[o],enumerable:!(n=jt(e,o))||n.enumerable});return t};var Bt=t=>Xt(H({},"__esModule",{value:!0}),t);var Ee={};Gt(Ee,{default:()=>Rt});module.exports=Bt(Ee);var y=require("@raycast/api");function c(t){let e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function l(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function w(t,e){let r=c(t);return isNaN(e)?l(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function V(t,e){let r=c(t);if(isNaN(e))return l(t,NaN);if(!e)return r;let n=r.getDate(),o=l(t,r.getTime());o.setMonth(r.getMonth()+e+1,0);let a=o.getDate();return n>=a?o:(r.setFullYear(o.getFullYear(),o.getMonth(),n),r)}function U(t,e){let r=+c(t);return l(t,r+e)}var Jt=Math.pow(10,8)*24*60*60*1e3,Ue=-Jt,$=6048e5,z=864e5;var Z=36e5;var Vt=3600;var K=Vt*24,ze=K*7,Ut=K*365.2425,zt=Ut/12,Ze=zt*3;function tt(t,e){return U(t,e*Z)}var Zt={};function k(){return Zt}function x(t,e){let r=k(),n=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,o=c(t),a=o.getDay(),s=(a<n?7:0)+a-n;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function D(t){return x(t,{weekStartsOn:1})}function R(t){let e=c(t),r=e.getFullYear(),n=l(t,0);n.setFullYear(r+1,0,4),n.setHours(0,0,0,0);let o=D(n),a=l(t,0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);let s=D(a);return e.getTime()>=o.getTime()?r+1:e.getTime()>=s.getTime()?r:r-1}function A(t){let e=c(t);return e.setHours(0,0,0,0),e}function L(t){let e=c(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function et(t,e){let r=A(t),n=A(e),o=+r-L(r),a=+n-L(n);return Math.round((o-a)/z)}function rt(t){let e=R(t),r=l(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),D(r)}function nt(t,e){return V(t,e*12)}function ot(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function at(t){if(!ot(t)&&typeof t!="number")return!1;let e=c(t);return!isNaN(Number(e))}function it(t){let e=c(t),r=l(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}var Kt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},st=(t,e,r)=>{let n,o=Kt[t];return typeof o=="string"?n=o:e===1?n=o.one:n=o.other.replace("{{count}}",e.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function E(t){return(e={})=>{let r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var te={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ee={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},re={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ut={date:E({formats:te,defaultWidth:"full"}),time:E({formats:ee,defaultWidth:"full"}),dateTime:E({formats:re,defaultWidth:"full"})};var ne={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ct=(t,e,r,n)=>ne[t];function P(t){return(e,r)=>{let n=r?.context?String(r.context):"standalone",o;if(n==="formatting"&&t.formattingValues){let s=t.defaultFormattingWidth||t.defaultWidth,m=r?.width?String(r.width):s;o=t.formattingValues[m]||t.formattingValues[s]}else{let s=t.defaultWidth,m=r?.width?String(r.width):t.defaultWidth;o=t.values[m]||t.values[s]}let a=t.argumentCallback?t.argumentCallback(e):e;return o[a]}}var oe={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ae={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ie={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},se={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ue={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ce={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},de=(t,e)=>{let r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},dt={ordinalNumber:de,era:P({values:oe,defaultWidth:"wide"}),quarter:P({values:ae,defaultWidth:"wide",argumentCallback:t=>t-1}),month:P({values:ie,defaultWidth:"wide"}),day:P({values:se,defaultWidth:"wide"}),dayPeriod:P({values:ue,defaultWidth:"wide",formattingValues:ce,defaultFormattingWidth:"wide"})};function S(t){return(e,r={})=>{let n=r.width,o=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;let s=a[0],m=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],f=Array.isArray(m)?fe(m,i=>i.test(s)):me(m,i=>i.test(s)),h;h=t.valueCallback?t.valueCallback(f):f,h=r.valueCallback?r.valueCallback(h):h;let d=e.slice(s.length);return{value:h,rest:d}}}function me(t,e){for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function fe(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function mt(t){return(e,r={})=>{let n=e.match(t.matchPattern);if(!n)return null;let o=n[0],a=e.match(t.parsePattern);if(!a)return null;let s=t.valueCallback?t.valueCallback(a[0]):a[0];s=r.valueCallback?r.valueCallback(s):s;let m=e.slice(o.length);return{value:s,rest:m}}}var le=/^(\d+)(th|st|nd|rd)?/i,he=/\d+/i,pe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ye={any:[/^b/i,/^(a|c)/i]},ge={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},we={any:[/1/i,/2/i,/3/i,/4/i]},xe={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},be={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ke={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},De={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Me={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Oe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ft={ordinalNumber:mt({matchPattern:le,parsePattern:he,valueCallback:t=>parseInt(t,10)}),era:S({matchPatterns:pe,defaultMatchWidth:"wide",parsePatterns:ye,defaultParseWidth:"any"}),quarter:S({matchPatterns:ge,defaultMatchWidth:"wide",parsePatterns:we,defaultParseWidth:"any",valueCallback:t=>t+1}),month:S({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:be,defaultParseWidth:"any"}),day:S({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:De,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:Me,defaultMatchWidth:"any",parsePatterns:Oe,defaultParseWidth:"any"})};var j={code:"en-US",formatDistance:st,formatLong:ut,formatRelative:ct,localize:dt,match:ft,options:{weekStartsOn:0,firstWeekContainsDate:1}};function lt(t){let e=c(t);return et(e,it(e))+1}function ht(t){let e=c(t),r=+D(e)-+rt(e);return Math.round(r/$)+1}function q(t,e){let r=c(t),n=r.getFullYear(),o=k(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=l(t,0);s.setFullYear(n+1,0,a),s.setHours(0,0,0,0);let m=x(s,e),f=l(t,0);f.setFullYear(n,0,a),f.setHours(0,0,0,0);let h=x(f,e);return r.getTime()>=m.getTime()?n+1:r.getTime()>=h.getTime()?n:n-1}function pt(t,e){let r=k(),n=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=q(t,e),a=l(t,0);return a.setFullYear(o,0,n),a.setHours(0,0,0,0),x(a,e)}function yt(t,e){let r=c(t),n=+x(r,e)-+pt(r,e);return Math.round(n/$)+1}function u(t,e){let r=t<0?"-":"",n=Math.abs(t).toString().padStart(e,"0");return r+n}var b={y(t,e){let r=t.getFullYear(),n=r>0?r:1-r;return u(e==="yy"?n%100:n,e.length)},M(t,e){let r=t.getMonth();return e==="M"?String(r+1):u(r+1,2)},d(t,e){return u(t.getDate(),e.length)},a(t,e){let r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return u(t.getHours()%12||12,e.length)},H(t,e){return u(t.getHours(),e.length)},m(t,e){return u(t.getMinutes(),e.length)},s(t,e){return u(t.getSeconds(),e.length)},S(t,e){let r=e.length,n=t.getMilliseconds(),o=Math.trunc(n*Math.pow(10,r-3));return u(o,e.length)}};var W={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Q={G:function(t,e,r){let n=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){let n=t.getFullYear(),o=n>0?n:1-n;return r.ordinalNumber(o,{unit:"year"})}return b.y(t,e)},Y:function(t,e,r,n){let o=q(t,n),a=o>0?o:1-o;if(e==="YY"){let s=a%100;return u(s,2)}return e==="Yo"?r.ordinalNumber(a,{unit:"year"}):u(a,e.length)},R:function(t,e){let r=R(t);return u(r,e.length)},u:function(t,e){let r=t.getFullYear();return u(r,e.length)},Q:function(t,e,r){let n=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){let n=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){let n=t.getMonth();switch(e){case"M":case"MM":return b.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){let n=t.getMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){let o=yt(t,n);return e==="wo"?r.ordinalNumber(o,{unit:"week"}):u(o,e.length)},I:function(t,e,r){let n=ht(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):b.d(t,e)},D:function(t,e,r){let n=lt(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):u(n,e.length)},E:function(t,e,r){let n=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){let o=t.getDay(),a=(o-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return u(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){let o=t.getDay(),a=(o-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return u(a,e.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,r){let n=t.getDay(),o=n===0?7:n;switch(e){case"i":return String(o);case"ii":return u(o,e.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){let o=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,r){let n=t.getHours(),o;switch(n===12?o=W.noon:n===0?o=W.midnight:o=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,r){let n=t.getHours(),o;switch(n>=17?o=W.evening:n>=12?o=W.afternoon:n>=4?o=W.morning:o=W.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let n=t.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return b.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):b.H(t,e)},K:function(t,e,r){let n=t.getHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,r){let n=t.getHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):b.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):b.s(t,e)},S:function(t,e){return b.S(t,e)},X:function(t,e,r){let n=t.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return wt(n);case"XXXX":case"XX":return M(n);case"XXXXX":case"XXX":default:return M(n,":")}},x:function(t,e,r){let n=t.getTimezoneOffset();switch(e){case"x":return wt(n);case"xxxx":case"xx":return M(n);case"xxxxx":case"xxx":default:return M(n,":")}},O:function(t,e,r){let n=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+gt(n,":");case"OOOO":default:return"GMT"+M(n,":")}},z:function(t,e,r){let n=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+gt(n,":");case"zzzz":default:return"GMT"+M(n,":")}},t:function(t,e,r){let n=Math.trunc(t.getTime()/1e3);return u(n,e.length)},T:function(t,e,r){let n=t.getTime();return u(n,e.length)}};function gt(t,e=""){let r=t>0?"-":"+",n=Math.abs(t),o=Math.trunc(n/60),a=n%60;return a===0?r+String(o):r+String(o)+e+u(a,2)}function wt(t,e){return t%60===0?(t>0?"-":"+")+u(Math.abs(t)/60,2):M(t,e)}function M(t,e=""){let r=t>0?"-":"+",n=Math.abs(t),o=u(Math.trunc(n/60),2),a=u(n%60,2);return r+o+e+a}var xt=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},bt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ve=(t,e)=>{let r=t.match(/(P+)(p+)?/)||[],n=r[1],o=r[2];if(!o)return xt(t,e);let a;switch(n){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",xt(n,e)).replace("{{time}}",bt(o,e))},kt={p:bt,P:ve};var Pe=/^D+$/,Se=/^Y+$/,We=["D","DD","YY","YYYY"];function Dt(t){return Pe.test(t)}function Mt(t){return Se.test(t)}function Ot(t,e,r){let n=Te(t,e,r);if(console.warn(n),We.includes(t))throw new RangeError(n)}function Te(t,e,r){let n=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Ye=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Fe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ie=/^'([^]*?)'?$/,Ne=/''/g,Ce=/[a-zA-Z]/;function p(t,e,r){let n=k(),o=r?.locale??n.locale??j,a=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,s=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,m=c(t);if(!at(m))throw new RangeError("Invalid time value");let f=e.match(Fe).map(d=>{let i=d[0];if(i==="p"||i==="P"){let g=kt[i];return g(d,o.formatLong)}return d}).join("").match(Ye).map(d=>{if(d==="''")return{isToken:!1,value:"'"};let i=d[0];if(i==="'")return{isToken:!1,value:$e(d)};if(Q[i])return{isToken:!0,value:d};if(i.match(Ce))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return{isToken:!1,value:d}});o.localize.preprocessor&&(f=o.localize.preprocessor(m,f));let h={firstWeekContainsDate:a,weekStartsOn:s,locale:o};return f.map(d=>{if(!d.isToken)return d.value;let i=d.value;(!r?.useAdditionalWeekYearTokens&&Mt(i)||!r?.useAdditionalDayOfYearTokens&&Dt(i))&&Ot(i,e,String(t));let g=Q[i[0]];return g(m,i,o.localize,h)}).join("")}function $e(t){let e=t.match(Ie);return e?e[1].replace(Ne,"'"):t}function vt(t){return c(t).getDay()}function T(t,e){let r=e-vt(t);return r<=0&&(r+=7),w(t,r)}function Pt(t){return T(t,5)}function St(t){return T(t,6)}function Wt(t){return T(t,0)}function F(t,e){return tt(t,-e)}var Tt=require("@raycast/api"),Yt=require("path"),Ft=require("fs/promises"),It=require("child_process");async function Nt(t,...e){let r=(0,Yt.join)(Tt.environment.assetsPath,"compiled_raycast_swift/AppleReminders");return await(0,Ft.chmod)(r,"755"),new Promise((n,o)=>{let a=!1,s=[t];for(let d of e)try{s.push(JSON.stringify(d))}catch(i){o(new I("Failed to serialize input to JSON: "+i.message));return}let m=(0,It.spawn)(r,s),f=[],h=[];m.stdout?.on("data",d=>{f.push(d.toString())}),m.stderr?.on("data",d=>{h.push(d.toString())}),m.on("close",d=>{if(!a)if(d===0)try{let i=f.join("").trim();i.length!=0?n(JSON.parse(i)):n(void 0),a=!0}catch(i){let g=new I("Failed to deserialize result from JSON: "+i.message);g.stdout=f.join("").trim(),g.stderr=h.join("").trim(),o(g),a=!0}else{let i=new I(h.join("").trim()||f.join("").trim()||"Could not get any data");i.stdout=f.join("").trim(),i.stderr=h.join("").trim(),o(i),a=!0}}),m.on("error",d=>{a||(o(d),a=!0)})})}async function Ct(){return await Nt("getReminders")}async function $t(t){return await Nt("createReminder",t)}var I=class extends Error{constructor(e){super(e),this.name="SwiftError"}};async function Rt(t){try{let r=(await Ct()).lists.map(Y=>`${Y.title}:${Y.id}`);(0,y.getPreferenceValues)().shouldCloseMainWindow?await(0,y.closeMainWindow)():await(0,y.showToast)({style:y.Toast.Style.Animated,title:"Adding to-do"});let o=new Date,a=p(o,"yyyy-MM-dd"),s=p(o,"HH:mm"),m=p(w(o,1),"yyyy-MM-dd"),f=p(Pt(o),"yyyy-MM-dd"),h=p(St(o),"yyyy-MM-dd"),d=p(Wt(o),"yyyy-MM-dd"),i=w(o,-3),g=p(i,"MMM"),Et=p(i,"d"),_=p(nt(i,1),"yyyy-MM-dd"),G=w(o,2),O=p(G,"yyyy-MM-dd"),N=p(G,"EEEE"),X=p(w(o,9),"yyyy-MM-dd"),B=p(F(o,1),"haa"),qt=p(w(F(o,1),1),"yyyy-MM-dd'T'HH:00:ss"),C=p(F(o,-1),"haa"),J=p(w(F(o,-1),1),"yyyy-MM-dd'T'HH:00:ss"),Ht=`Act as a NLP parser for tasks. I'll give you a task text and you'll return me only a parsable and minified JSON object.


Here's the JSON Object structure:
{
  "title": <Task title>,
  "description": <Task description. A human-readable description of the task. Use relative dates when appropriate. Include the task name in single quotes. Always include the list (or "default list" if none is specified). Always include the priority level if specified. Always include the recurrence if specified.>,
  "priority": <Task priority. Only pick the value from this list: "low", "medium", "high". Use the "high" priority if the task text specifies a word such as "urgent", "important", or an exclamation mark.>,
  "listId": <Task list ID. Pick it from the following table by finding the list name corresponding to an ID: ${r}. Don't add a listId if the user hasn't specified a list name. Note that the user can prepend the "#" or "@" symbols to list names, for example, "#work" or "@work".>,
  "dueDate": <Task due date. Can either be a full day date (YYYY-MM-DD) or an ISO date if the time is specified (YYYY-MM-DDTHH:mm:ss.sssZ). Use sensible defaults for common timeframes (e.g "8am" for "morning", "1pm" for "afternoon", "6pm" for "evening"). A number with "a" or "p" appended (e.g. "1p" or "8a") should be treated as AM or PM. Never use dates before ${a} unless the specific month/day/year is provided. If the user includes a time before ${s} and no date, assume they mean tomorrow>,
  "recurrence": {
    "frequency": <Recurrence frequency. Only pick the value from this list: "daily", "weekly", "monthly", "yearly".>,
    "interval": <Recurrence interval. An integer greater than 0 that specifies how often a pattern repeats. If a recurrence frequency is "weekly" rule and the interval is 1, then the pattern repeats every week. If a recurrence frequency is "monthly" rule and the interval is 3, then the pattern repeats every 3 months.>,
    "endDate": <Recurrence end date. A full day date (YYYY-MM-DD). If no end date is specified, the recurrence will repeat forever.>
  }
}

Here are the rules you must follow:
- You MUST return a valid, parsable JSON object.
- Any text in quotes should be taken in its entirely as the task's title, and not interpreted for dates, priority, lists, etc.
- The title is made up of all the words you can't parse, in order. NEVER drop words.
- Always capitalize weekday, month, and list names in your output.
- Don't include a time unless specifically indicated by the user.
- Today is ${a} and the current time is ${s}.
- Pay special attention to "this" vs "next" day of the week.
- The weekend begins on Saturday and the week begins on Monday. (e.g. tasks for "next week" would be scheduled for the upcoming Monday.)
- Any recurring task MUST include a dueDate. If no due date is specified, use one that makes the most sense

Here are some examples to help you out:
- Respond to email: {"title":"Respond to email","description":"'Respond to email' to default list"}
- Book flights today: {"title":"Book flights","description":"'Book flights' today to default list","dueDate":"${a}"}
- Collect dry cleaning this evening: {"title":"Collect dry cleaning","description":"'Collect dry cleaning' today at 6pm to default list","dueDate":"${a}T18:00:00.000Z"}
- Ship feature low priority: {"title":"Ship feature","description":"'Ship feature' (low priority) to default list","priority":"low"}
- Pay taxes this weekend important: {"title":"Pay taxes","description":"'Pay taxes' (high priority) on Saturday to default list","priority":"high","dueDate":"${h}"}
- Check for newspaper today!: {"title":"Check for newspaper","description":"'Check for newspaper' (high priority) today to default list","dueDate":"${a}","priority":"high"} 
- Take a walk ${C}: {"title":"Take a walk","description":"'Take a walk' today at ${C} to default list","dueDate":"${J}"}
- Take a walk ${B}: {"title":"Take a walk","description":"'Take a walk' tomorrow at ${B} to default list","dueDate":"${qt}"}
- Eat ${C} nachos: {"title":"Eat nachos","description":"'Eat nachos' today at ${C} to default list","dueDate":"${J}"}
- Get groceries ${N}: {"title":"Get groceries","description":"'Get groceries' on ${O} to default list","dueDate":"${O}"}
- Get groceries next ${N}: {"title":"Get groceries","description":"'Get groceries' on ${X} to default list","dueDate":"${X}"}
- Read a book every day: {"title":"Read a book","description":"'Read a book' daily to default list","dueDate":"${a}","recurrence":{"frequency":"daily","interval":1}, }
- Read every book fri: {"title":"Read every book","description":"'Read every book' on Friday to default list","dueDate":"${f}"}
- Read books every fri: {"title":"Read books","description":"'Read books' weekly on Fridays to default list","dueDate":"${f}","recurrence":{"frequency":"weekly","interval":1}}
- Clean the house every sunday: {"title":"Clean the house","description":"'Clean the house' weekly on Sundays to default list","dueDate":"${d}","recurrence":{"frequency":"weekly","interval":1}
- Call mom monthly on sunday: {"title":"Call mom","description":"'Call mom' monthly starting ${d} to default list","dueDate":"${d}","recurrence":{"frequency":"monthly","interval":1}}
- Dad's birthday on ${g} ${Et}: {"title":"Dad's birthday","description":"'Dad's birthday' on ${_} to default list","dueDate":"${_}"}
- Monthly breakfast with friends Saturday: {"title":"Monthly breakfast with friends","description":"'Monthly breakfast with friends' recurring monthly starting ${h} to default list","dueDate":"${h}","recurrence":{"frequency":"monthly","interval":1}}
- Review budget every 2 months starting from tomorrow: {"title":"Review budget","description":"'Review budget' every 2 months starting ${m} to default list","dueDate":"${m}", "recurrence":{"frequency":"monthly","interval":2}}
- Water the flowers every day from tomorrow until ${N}: {"title":"Water the flowers","description":"'Water the flowers' every day from ${m} until ${O} to default list","dueDate":"${m}","recurrence":{"frequency":"daily","interval":1,"endDate":"${O}"}}
- Cook meals until ${N}: {"title":"Cook meals","description":"'Cook meals' every day until ${O} to default list","dueDate":"${a}","recurrence":{"frequency":"daily","interval":1,"endDate":"${O}"}}

Task text: "${t.fallbackText??t.arguments.text}"`,{description:At,...v}=await Re(Ht);if(t.arguments.notes&&(v.notes=t.arguments.notes),v.dueDate&&v.dueDate.includes("T")){let Y=new Date(v.dueDate),Lt=Y.getTimezoneOffset()*60*1e3;v.dueDate=new Date(Y.getTime()+Lt).toISOString()}await $t(v),await(0,y.showToast)({style:y.Toast.Style.Success,title:"Added reminder: "+At})}catch(e){console.log(e);let r=e instanceof Error?e.message:JSON.stringify(e);await(0,y.showToast)({style:y.Toast.Style.Failure,title:"Unable to add reminder",message:r})}}async function Re(t){for(let r=0;r<3;r++)try{let n=await y.AI.ask(t,{model:"gpt-4"}),o=JSON.parse(n.trim());if(o.recurrence&&!o.dueDate)throw new Error("Recurrence without dueDate");return o}catch{console.log(`Retriying AI call. Retry count: ${r}`)}throw new Error("Max retries reached. Unable to get a valid response from AI.")}