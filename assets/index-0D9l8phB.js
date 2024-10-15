import{b as Sn,d as $t,g as ur,e as fr,s as de,B as Cn,_ as At,r as Pn,f as I,h as cr,u as On,i as Mn,k as dr,l as Vt,n as hr,o as Ui,p as An,q as zn,t as Rn,a as x,m as Dn,v as Ne,w as En,x as In,y as $i,z as Dt,A as pr,C as Ve,D as _r,E as mr,F as Fn,G as he,H as pe,I as gr,j as R,J as qt,T as re,K as Tt,L as xr,M as yr,O as vi,P as We,Q as ve,R as wr,S as Xe,U as Nn,V as Ln,c as Bn}from"./index-DqrXiUc7.js";import{E as Yn}from"./easeing-T7Lpw6Uk.js";const br=Sn($t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");function Un(a){return ur("PrivateSwitchBase",a)}fr("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const $n=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],qn=a=>{const{classes:t,checked:e,disabled:i,edge:r}=a,n={root:["root",e&&"checked",i&&"disabled",r&&`edge${Vt(r)}`],input:["input"]};return hr(n,Un,t)},jn=de(Cn)(({ownerState:a})=>At({padding:9,borderRadius:"50%"},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12})),Vn=de("input",{shouldForwardProp:Pn})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Wn=I.forwardRef(function(t,e){const{autoFocus:i,checked:r,checkedIcon:n,className:s,defaultChecked:o,disabled:u,disableFocusRipple:l=!1,edge:f=!1,icon:d,id:h,inputProps:p,inputRef:_,name:c,onBlur:m,onChange:y,onFocus:w,readOnly:v,required:T=!1,tabIndex:g,type:S,value:b}=t,C=cr(t,$n),[k,O]=On({controlled:r,default:!!o,name:"SwitchBase",state:"checked"}),M=Mn(),A=tt=>{w&&w(tt),M&&M.onFocus&&M.onFocus(tt)},z=tt=>{m&&m(tt),M&&M.onBlur&&M.onBlur(tt)},V=tt=>{if(tt.nativeEvent.defaultPrevented)return;const Ct=tt.target.checked;O(Ct),y&&y(tt,Ct)};let F=u;M&&typeof F>"u"&&(F=M.disabled);const Y=S==="checkbox"||S==="radio",U=At({},t,{checked:k,disabled:F,disableFocusRipple:l,edge:f}),J=qn(U);return $t.jsxs(jn,At({component:"span",className:dr(J.root,s),centerRipple:!0,focusRipple:!l,disabled:F,tabIndex:null,role:void 0,onFocus:A,onBlur:z,ownerState:U,ref:e},C,{children:[$t.jsx(Vn,At({autoFocus:i,checked:r,defaultChecked:o,className:J.input,disabled:F,id:Y?h:void 0,name:c,onChange:V,readOnly:v,ref:_,required:T,ownerState:U,tabIndex:g,type:S},S==="checkbox"&&b===void 0?{}:{value:b},p)),k?n:d]}))});function Xn(a){return ur("MuiSwitch",a)}const H=fr("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Gn=["className","color","edge","size","sx"],Qn=a=>{const{classes:t,edge:e,size:i,color:r,checked:n,disabled:s}=a,o={root:["root",e&&`edge${Vt(e)}`,`size${Vt(i)}`],switchBase:["switchBase",`color${Vt(r)}`,n&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=hr(o,Xn,t);return At({},t,u)},Kn=de("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,e.edge&&t[`edge${Vt(e.edge)}`],t[`size${Vt(e.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}}}]}),Hn=de(Wn,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.switchBase,{[`& .${H.input}`]:t.input},e.color!=="default"&&t[`color${Vt(e.color)}`]]}})(({theme:a})=>({position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:`${a.palette.mode==="light"?a.palette.common.white:a.palette.grey[300]}`,transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:`${a.palette.mode==="light"?a.palette.grey[100]:a.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:a.vars?a.vars.opacity.switchTrackDisabled:`${a.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:a})=>({"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:Ui(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(a.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{color:t},style:{[`&.${H.checked}`]:{color:(a.vars||a).palette[t].main,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:Ui(a.palette[t].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:a.vars?a.vars.palette.Switch[`${t}DisabledColor`]:`${a.palette.mode==="light"?An(a.palette[t].main,.62):zn(a.palette[t].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(a.vars||a).palette[t].main}}}))]})),Zn=de("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(a,t)=>t.track})(({theme:a})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:a.transitions.create(["opacity","background-color"],{duration:a.transitions.duration.shortest}),backgroundColor:a.vars?a.vars.palette.common.onBackground:`${a.palette.mode==="light"?a.palette.common.black:a.palette.common.white}`,opacity:a.vars?a.vars.opacity.switchTrack:`${a.palette.mode==="light"?.38:.3}`})),Jn=de("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(a,t)=>t.thumb})(({theme:a})=>({boxShadow:(a.vars||a).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),ts=I.forwardRef(function(t,e){const i=Rn({props:t,name:"MuiSwitch"}),{className:r,color:n="primary",edge:s=!1,size:o="medium",sx:u}=i,l=cr(i,Gn),f=At({},i,{color:n,edge:s,size:o}),d=Qn(f),h=$t.jsx(Jn,{className:d.thumb,ownerState:f});return $t.jsxs(Kn,{className:dr(d.root,r),sx:u,ownerState:f,children:[$t.jsx(Hn,At({type:"checkbox",icon:h,checkedIcon:h,ref:e,ownerState:f},l,{classes:At({},d,{root:d.switchBase})})),$t.jsx(Zn,{className:d.track,ownerState:f})]})}),es={init:{opacity:0,scale:.95},ani:{opacity:1,scale:1},exit:{opacity:0,scale:1.05}},vr=({children:a,className:t,duration:e=.8})=>x(Dn.div,{className:t,variants:es,initial:"init",animate:"ani",exit:"exit",transition:{duration:e,ease:Yn.EASE_IN_OUT_EXPO},children:a});function bt(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Tr(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ut={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oe={duration:.5,overwrite:!1,delay:0},Ti,Q,N,dt=1e8,E=1/dt,oi=Math.PI*2,is=oi/4,rs=0,kr=Math.sqrt,ns=Math.cos,ss=Math.sin,X=function(t){return typeof t=="string"},$=function(t){return typeof t=="function"},kt=function(t){return typeof t=="number"},ki=function(t){return typeof t>"u"},yt=function(t){return typeof t=="object"},et=function(t){return t!==!1},Si=function(){return typeof window<"u"},Re=function(t){return $(t)||X(t)},Sr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},K=Array.isArray,li=/(?:-?\.?\d|\.)+/gi,Cr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ee=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ze=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pr=/[+-]=-?[.\d]+/,Or=/[^,'"\[\]\s]+/gi,as=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,L,_t,ui,Ci,ft={},Le={},Mr,Ar=function(t){return(Le=Kt(t,ft))&&st},Pi=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Te=function(t,e){return!e&&console.warn(t)},zr=function(t,e){return t&&(ft[t]=e)&&Le&&(Le[t]=e)||ft},ke=function(){return 0},os={suppressEvents:!0,isStart:!0,kill:!1},Ee={suppressEvents:!0,kill:!1},ls={suppressEvents:!0},Oi={},zt=[],fi={},Rr,at={},Je={},qi=30,Ie=[],Mi="",Ai=function(t){var e=t[0],i,r;if(yt(e)||$(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Ie.length;r--&&!Ie[r].targetTest(e););i=Ie[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new rn(t[r],i)))||t.splice(r,1);return t},Wt=function(t){return t._gsap||Ai(ht(t))[0]._gsap},Dr=function(t,e,i){return(i=t[e])&&$(i)?t[e]():ki(i)&&t.getAttribute&&t.getAttribute(e)||i},it=function(t,e){return(t=t.split(",")).forEach(e)||t},q=function(t){return Math.round(t*1e5)/1e5||0},W=function(t){return Math.round(t*1e7)/1e7||0},ne=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},us=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Be=function(){var t=zt.length,e=zt.slice(0),i,r;for(fi={},zt.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Er=function(t,e,i,r){zt.length&&!Q&&Be(),t.render(e,i,Q&&e<0&&(t._initted||t._startAt)),zt.length&&!Q&&Be()},Ir=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Or).length<2?e:X(t)?t.trim():t},Fr=function(t){return t},pt=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},fs=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Kt=function(t,e){for(var i in e)t[i]=e[i];return t},ji=function a(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=yt(e[i])?a(t[i]||(t[i]={}),e[i]):e[i]);return t},Ye=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},ye=function(t){var e=t.parent||L,i=t.keyframes?fs(K(t.keyframes)):pt;if(et(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},cs=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Nr=function(t,e,i,r,n){var s=t[r],o;if(n)for(o=e[n];s&&s[n]>o;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=s,e.parent=e._dp=t,e},Ge=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=e._prev,s=e._next;n?n._next=s:t[i]===e&&(t[i]=s),s?s._prev=n:t[r]===e&&(t[r]=n),e._next=e._prev=e.parent=null},Et=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xt=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},ds=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ci=function(t,e,i,r){return t._startAt&&(Q?t._startAt.revert(Ee):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},hs=function a(t){return!t||t._ts&&a(t.parent)},Vi=function(t){return t._repeat?le(t._tTime,t=t.duration()+t._rDelay)*t:0},le=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Ue=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Qe=function(t){return t._end=W(t._start+(t._tDur/Math.abs(t._ts||t._rts||E)||0))},Ke=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=W(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Qe(t),i._dirty||Xt(i,t)),t},Lr=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Ue(t.rawTime(),e),(!e._dur||ze(0,e.totalDuration(),i)-e._tTime>E)&&e.render(i,!0)),Xt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-E}},mt=function(t,e,i,r){return e.parent&&Et(e),e._start=W((kt(i)?i:i||t!==L?ct(t,i,e):t._time)+e._delay),e._end=W(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Nr(t,e,"_first","_last",t._sort?"_start":0),di(e)||(t._recent=e),r||Lr(t,e),t._ts<0&&Ke(t,t._tTime),t},Br=function(t,e){return(ft.ScrollTrigger||Pi("scrollTrigger",e))&&ft.ScrollTrigger.create(e,t)},Yr=function(t,e,i,r,n){if(Ri(t,e,n),!t._initted)return 1;if(!i&&t._pt&&!Q&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Rr!==ot.frame)return zt.push(t),t._lazy=[n,r],1},ps=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},di=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},_s=function(t,e,i,r){var n=t.ratio,s=e<0||!e&&(!t._start&&ps(t)&&!(!t._initted&&di(t))||(t._ts<0||t._dp._ts<0)&&!di(t))?0:1,o=t._rDelay,u=0,l,f,d;if(o&&t._repeat&&(u=ze(0,t._tDur,e),f=le(u,o),t._yoyo&&f&1&&(s=1-s),f!==le(t._tTime,o)&&(n=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==n||Q||r||t._zTime===E||!e&&t._zTime){if(!t._initted&&Yr(t,e,r,i,u))return;for(d=t._zTime,t._zTime=e||(i?E:0),i||(i=e&&!d),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=u,l=t._pt;l;)l.r(s,l.d),l=l._next;e<0&&ci(t,e,i,!0),t._onUpdate&&!i&&lt(t,"onUpdate"),u&&t._repeat&&!i&&t.parent&&lt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&Et(t,1),!i&&!Q&&(lt(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ms=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ue=function(t,e,i,r){var n=t._repeat,s=W(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=n?n<0?1e10:W(s*(n+1)+t._rDelay*n):s,o>0&&!r&&Ke(t,t._tTime=t._tDur*o),t.parent&&Qe(t),i||Xt(t.parent,t),t},Wi=function(t){return t instanceof Z?Xt(t):ue(t,t._dur)},gs={_start:0,endTime:ke,totalDuration:ke},ct=function a(t,e,i){var r=t.labels,n=t._recent||gs,s=t.duration()>=dt?n.endTime(!1):t._dur,o,u,l;return X(e)&&(isNaN(e)||e in r)?(u=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),u==="<"||u===">"?(o>=0&&(e=e.replace(/=/,"")),(u==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?n:i).totalDuration()/100:1)):o<0?(e in r||(r[e]=s),r[e]):(u=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&i&&(u=u/100*(K(i)?i[0]:i).totalDuration()),o>1?a(t,e.substr(0,o-1),i)+u:s+u)):e==null?s:+e},we=function(t,e,i){var r=kt(e[1]),n=(r?2:1)+(t<2?0:1),s=e[n],o,u;if(r&&(s.duration=e[1]),s.parent=i,t){for(o=s,u=i;u&&!("immediateRender"in o);)o=u.vars.defaults||{},u=et(u.vars.inherit)&&u.parent;s.immediateRender=et(o.immediateRender),t<2?s.runBackwards=1:s.startAt=e[n-1]}return new j(e[0],s,e[n+1])},Ft=function(t,e){return t||t===0?e(t):e},ze=function(t,e,i){return i<t?t:i>e?e:i},G=function(t,e){return!X(t)||!(e=as.exec(t))?"":e[1]},xs=function(t,e,i){return Ft(i,function(r){return ze(t,e,r)})},hi=[].slice,Ur=function(t,e){return t&&yt(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&yt(t[0]))&&!t.nodeType&&t!==_t},ys=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var n;return X(r)&&!e||Ur(r,1)?(n=i).push.apply(n,ht(r)):i.push(r)})||i},ht=function(t,e,i){return N&&!e&&N.selector?N.selector(t):X(t)&&!i&&(ui||!fe())?hi.call((e||Ci).querySelectorAll(t),0):K(t)?ys(t,i):Ur(t)?hi.call(t,0):t?[t]:[]},pi=function(t){return t=ht(t)[0]||Te("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return ht(e,i.querySelectorAll?i:i===t?Te("Invalid scope")||Ci.createElement("div"):t)}},$r=function(t){return t.sort(function(){return .5-Math.random()})},qr=function(t){if($(t))return t;var e=yt(t)?t:{each:t},i=Gt(e.ease),r=e.from||0,n=parseFloat(e.base)||0,s={},o=r>0&&r<1,u=isNaN(r)||o,l=e.axis,f=r,d=r;return X(r)?f=d={center:.5,edges:.5,end:1}[r]||0:!o&&u&&(f=r[0],d=r[1]),function(h,p,_){var c=(_||e).length,m=s[c],y,w,v,T,g,S,b,C,k;if(!m){if(k=e.grid==="auto"?0:(e.grid||[1,dt])[1],!k){for(b=-dt;b<(b=_[k++].getBoundingClientRect().left)&&k<c;);k<c&&k--}for(m=s[c]=[],y=u?Math.min(k,c)*f-.5:r%k,w=k===dt?0:u?c*d/k-.5:r/k|0,b=0,C=dt,S=0;S<c;S++)v=S%k-y,T=w-(S/k|0),m[S]=g=l?Math.abs(l==="y"?T:v):kr(v*v+T*T),g>b&&(b=g),g<C&&(C=g);r==="random"&&$r(m),m.max=b-C,m.min=C,m.v=c=(parseFloat(e.amount)||parseFloat(e.each)*(k>c?c-1:l?l==="y"?c/k:k:Math.max(k,c/k))||0)*(r==="edges"?-1:1),m.b=c<0?n-c:n,m.u=G(e.amount||e.each)||0,i=i&&c<0?Jr(i):i}return c=(m[h]-m.min)/m.max||0,W(m.b+(i?i(c):c)*m.v)+m.u}},_i=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=W(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(kt(i)?0:G(i))}},jr=function(t,e){var i=K(t),r,n;return!i&&yt(t)&&(r=i=t.radius||dt,t.values?(t=ht(t.values),(n=!kt(t[0]))&&(r*=r)):t=_i(t.increment)),Ft(e,i?$(t)?function(s){return n=t(s),Math.abs(n-s)<=r?n:s}:function(s){for(var o=parseFloat(n?s.x:s),u=parseFloat(n?s.y:0),l=dt,f=0,d=t.length,h,p;d--;)n?(h=t[d].x-o,p=t[d].y-u,h=h*h+p*p):h=Math.abs(t[d]-o),h<l&&(l=h,f=d);return f=!r||l<=r?t[f]:s,n||f===s||kt(s)?f:f+G(s)}:_i(t))},Vr=function(t,e,i,r){return Ft(K(t)?!e:i===!0?!!(i=0):!r,function(){return K(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},ws=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(n,s){return s(n)},r)}},bs=function(t,e){return function(i){return t(parseFloat(i))+(e||G(i))}},vs=function(t,e,i){return Xr(t,e,0,1,i)},Wr=function(t,e,i){return Ft(i,function(r){return t[~~e(r)]})},Ts=function a(t,e,i){var r=e-t;return K(t)?Wr(t,a(0,t.length),e):Ft(i,function(n){return(r+(n-t)%r)%r+t})},ks=function a(t,e,i){var r=e-t,n=r*2;return K(t)?Wr(t,a(0,t.length-1),e):Ft(i,function(s){return s=(n+(s-t)%n)%n||0,t+(s>r?n-s:s)})},Se=function(t){for(var e=0,i="",r,n,s,o;~(r=t.indexOf("random(",e));)s=t.indexOf(")",r),o=t.charAt(r+7)==="[",n=t.substr(r+7,s-r-7).match(o?Or:li),i+=t.substr(e,r-e)+Vr(o?n:+n[0],o?0:+n[1],+n[2]||1e-5),e=s+1;return i+t.substr(e,t.length-e)},Xr=function(t,e,i,r,n){var s=e-t,o=r-i;return Ft(n,function(u){return i+((u-t)/s*o||0)})},Ss=function a(t,e,i,r){var n=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!n){var s=X(t),o={},u,l,f,d,h;if(i===!0&&(r=1)&&(i=null),s)t={p:t},e={p:e};else if(K(t)&&!K(e)){for(f=[],d=t.length,h=d-2,l=1;l<d;l++)f.push(a(t[l-1],t[l]));d--,n=function(_){_*=d;var c=Math.min(h,~~_);return f[c](_-c)},i=e}else r||(t=Kt(K(t)?[]:{},t));if(!f){for(u in e)zi.call(o,t,u,"get",e[u]);n=function(_){return Ii(_,o)||(s?t.p:t)}}}return Ft(i,n)},Xi=function(t,e,i){var r=t.labels,n=dt,s,o,u;for(s in r)o=r[s]-e,o<0==!!i&&o&&n>(o=Math.abs(o))&&(u=s,n=o);return u},lt=function(t,e,i){var r=t.vars,n=r[e],s=N,o=t._ctx,u,l,f;if(n)return u=r[e+"Params"],l=r.callbackScope||t,i&&zt.length&&Be(),o&&(N=o),f=u?n.apply(l,u):n.call(l),N=s,f},ge=function(t){return Et(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Q),t.progress()<1&&lt(t,"onInterrupt"),t},ie,Gr=[],Qr=function(t){if(t)if(t=!t.name&&t.default||t,Si()||t.headless){var e=t.name,i=$(t),r=e&&!i&&t.init?function(){this._props=[]}:t,n={init:ke,render:Ii,add:zi,kill:Us,modifier:Ys,rawVars:0},s={targetTest:0,get:0,getSetter:Ei,aliases:{},register:0};if(fe(),t!==r){if(at[e])return;pt(r,pt(Ye(t,n),s)),Kt(r.prototype,Kt(n,Ye(t,s))),at[r.prop=e]=r,t.targetTest&&(Ie.push(r),Oi[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}zr(e,r),t.register&&t.register(st,r,rt)}else Gr.push(t)},D=255,xe={aqua:[0,D,D],lime:[0,D,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,D],navy:[0,0,128],white:[D,D,D],olive:[128,128,0],yellow:[D,D,0],orange:[D,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[D,0,0],pink:[D,192,203],cyan:[0,D,D],transparent:[D,D,D,0]},ti=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*D+.5|0},Kr=function(t,e,i){var r=t?kt(t)?[t>>16,t>>8&D,t&D]:0:xe.black,n,s,o,u,l,f,d,h,p,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),xe[t])r=xe[t];else if(t.charAt(0)==="#"){if(t.length<6&&(n=t.charAt(1),s=t.charAt(2),o=t.charAt(3),t="#"+n+n+s+s+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&D,r&D,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&D,t&D]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(li),!e)u=+r[0]%360/360,l=+r[1]/100,f=+r[2]/100,s=f<=.5?f*(l+1):f+l-f*l,n=f*2-s,r.length>3&&(r[3]*=1),r[0]=ti(u+1/3,n,s),r[1]=ti(u,n,s),r[2]=ti(u-1/3,n,s);else if(~t.indexOf("="))return r=t.match(Cr),i&&r.length<4&&(r[3]=1),r}else r=t.match(li)||xe.transparent;r=r.map(Number)}return e&&!_&&(n=r[0]/D,s=r[1]/D,o=r[2]/D,d=Math.max(n,s,o),h=Math.min(n,s,o),f=(d+h)/2,d===h?u=l=0:(p=d-h,l=f>.5?p/(2-d-h):p/(d+h),u=d===n?(s-o)/p+(s<o?6:0):d===s?(o-n)/p+2:(n-s)/p+4,u*=60),r[0]=~~(u+.5),r[1]=~~(l*100+.5),r[2]=~~(f*100+.5)),i&&r.length<4&&(r[3]=1),r},Hr=function(t){var e=[],i=[],r=-1;return t.split(Rt).forEach(function(n){var s=n.match(ee)||[];e.push.apply(e,s),i.push(r+=s.length+1)}),e.c=i,e},Gi=function(t,e,i){var r="",n=(t+r).match(Rt),s=e?"hsla(":"rgba(",o=0,u,l,f,d;if(!n)return t;if(n=n.map(function(h){return(h=Kr(h,e,1))&&s+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(f=Hr(t),u=i.c,u.join(r)!==f.c.join(r)))for(l=t.replace(Rt,"1").split(ee),d=l.length-1;o<d;o++)r+=l[o]+(~u.indexOf(o)?n.shift()||s+"0,0,0,0)":(f.length?f:n.length?n:i).shift());if(!l)for(l=t.split(Rt),d=l.length-1;o<d;o++)r+=l[o]+n[o];return r+l[d]},Rt=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in xe)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),Cs=/hsl[a]?\(/,Zr=function(t){var e=t.join(" "),i;if(Rt.lastIndex=0,Rt.test(e))return i=Cs.test(e),t[1]=Gi(t[1],i),t[0]=Gi(t[0],i,Hr(t[1])),!0},Ce,ot=function(){var a=Date.now,t=500,e=33,i=a(),r=i,n=1e3/240,s=n,o=[],u,l,f,d,h,p,_=function c(m){var y=a()-r,w=m===!0,v,T,g,S;if((y>t||y<0)&&(i+=y-e),r+=y,g=r-i,v=g-s,(v>0||w)&&(S=++d.frame,h=g-d.time*1e3,d.time=g=g/1e3,s+=v+(v>=n?4:n-v),T=1),w||(u=l(c)),T)for(p=0;p<o.length;p++)o[p](g,h,S,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Mr&&(!ui&&Si()&&(_t=ui=window,Ci=_t.document||{},ft.gsap=st,(_t.gsapVersions||(_t.gsapVersions=[])).push(st.version),Ar(Le||_t.GreenSockGlobals||!_t.gsap&&_t||{}),Gr.forEach(Qr)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&d.sleep(),l=f||function(m){return setTimeout(m,s-d.time*1e3+1|0)},Ce=1,_(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(u),Ce=0,l=ke},lagSmoothing:function(m,y){t=m||1/0,e=Math.min(y||33,t)},fps:function(m){n=1e3/(m||240),s=d.time*1e3+n},add:function(m,y,w){var v=y?function(T,g,S,b){m(T,g,S,b),d.remove(v)}:m;return d.remove(m),o[w?"unshift":"push"](v),fe(),v},remove:function(m,y){~(y=o.indexOf(m))&&o.splice(y,1)&&p>=y&&p--},_listeners:o},d}(),fe=function(){return!Ce&&ot.wake()},P={},Ps=/^[\d.\-M][\d.\-,\s]/,Os=/["']/g,Ms=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],n=1,s=i.length,o,u,l;n<s;n++)u=i[n],o=n!==s-1?u.lastIndexOf(","):u.length,l=u.substr(0,o),e[r]=isNaN(l)?l.replace(Os,"").trim():+l,r=u.substr(o+1).trim();return e},As=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},zs=function(t){var e=(t+"").split("("),i=P[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Ms(e[1])]:As(t).split(",").map(Ir)):P._CE&&Ps.test(t)?P._CE("",t):i},Jr=function(t){return function(e){return 1-t(1-e)}},tn=function a(t,e){for(var i=t._first,r;i;)i instanceof Z?a(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?a(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Gt=function(t,e){return t&&($(t)?t:P[t]||zs(t))||e},Zt=function(t,e,i,r){i===void 0&&(i=function(u){return 1-e(1-u)}),r===void 0&&(r=function(u){return u<.5?e(u*2)/2:1-e((1-u)*2)/2});var n={easeIn:e,easeOut:i,easeInOut:r},s;return it(t,function(o){P[o]=ft[o]=n,P[s=o.toLowerCase()]=i;for(var u in n)P[s+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=P[o+"."+u]=n[u]}),n},en=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ei=function a(t,e,i){var r=e>=1?e:1,n=(i||(t?.3:.45))/(e<1?e:1),s=n/oi*(Math.asin(1/r)||0),o=function(f){return f===1?1:r*Math.pow(2,-10*f)*ss((f-s)*n)+1},u=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:en(o);return n=oi/n,u.config=function(l,f){return a(t,l,f)},u},ii=function a(t,e){e===void 0&&(e=1.70158);var i=function(s){return s?--s*s*((e+1)*s+e)+1:0},r=t==="out"?i:t==="in"?function(n){return 1-i(1-n)}:en(i);return r.config=function(n){return a(t,n)},r};it("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;Zt(a+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});P.Linear.easeNone=P.none=P.Linear.easeIn;Zt("Elastic",ei("in"),ei("out"),ei());(function(a,t){var e=1/t,i=2*e,r=2.5*e,n=function(o){return o<e?a*o*o:o<i?a*Math.pow(o-1.5/t,2)+.75:o<r?a*(o-=2.25/t)*o+.9375:a*Math.pow(o-2.625/t,2)+.984375};Zt("Bounce",function(s){return 1-n(1-s)},n)})(7.5625,2.75);Zt("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Zt("Circ",function(a){return-(kr(1-a*a)-1)});Zt("Sine",function(a){return a===1?1:-ns(a*is)+1});Zt("Back",ii("in"),ii("out"),ii());P.SteppedEase=P.steps=ft.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),n=e?1:0,s=1-E;return function(o){return((r*ze(0,s,o)|0)+n)*i}}};oe.ease=P["quad.out"];it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Mi+=a+","+a+"Params,"});var rn=function(t,e){this.id=rs++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Dr,this.set=e?e.getSetter:Ei},Pe=function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ue(this,+e.duration,1,1),this.data=e.data,N&&(this._ctx=N,N.data.push(this)),Ce||ot.wake()}var t=a.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ue(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(fe(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ke(this,i),!n._dp||n.parent||Lr(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===E||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Er(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Vi(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Vi(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?le(this._tTime,n)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-E?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Ue(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-E?0:this._rts,this.totalTime(ze(-Math.abs(this._delay),this._tDur,n),r!==!1),Qe(this),ds(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fe(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==E&&(this._tTime-=E)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mt(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(et(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ue(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=ls);var r=Q;return Q=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Q=r,this},t.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Wi(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Wi(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(ct(this,i),et(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,et(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-E:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-E,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-E)},t.eventCallback=function(i,r,n){var s=this.vars;return arguments.length>1?(r?(s[i]=r,n&&(s[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]},t.then=function(i){var r=this;return new Promise(function(n){var s=$(i)?i:Fr,o=function(){var l=r.then;r.then=null,$(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=l),n(s),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){ge(this)},a}();pt(Pe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-E,_prom:0,_ps:!1,_rts:1});var Z=function(a){Tr(t,a);function t(i,r){var n;return i===void 0&&(i={}),n=a.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=et(i.sortChildren),L&&mt(i.parent||L,bt(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&Br(bt(n),i.scrollTrigger),n}var e=t.prototype;return e.to=function(r,n,s){return we(0,arguments,this),this},e.from=function(r,n,s){return we(1,arguments,this),this},e.fromTo=function(r,n,s,o){return we(2,arguments,this),this},e.set=function(r,n,s){return n.duration=0,n.parent=this,ye(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new j(r,n,ct(this,s),1),this},e.call=function(r,n,s){return mt(this,j.delayedCall(0,r,n),s)},e.staggerTo=function(r,n,s,o,u,l,f){return s.duration=n,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=f,s.parent=this,new j(r,s,ct(this,u)),this},e.staggerFrom=function(r,n,s,o,u,l,f){return s.runBackwards=1,ye(s).immediateRender=et(s.immediateRender),this.staggerTo(r,n,s,o,u,l,f)},e.staggerFromTo=function(r,n,s,o,u,l,f,d){return o.startAt=s,ye(o).immediateRender=et(o.immediateRender),this.staggerTo(r,n,o,u,l,f,d)},e.render=function(r,n,s){var o=this._time,u=this._dirty?this.totalDuration():this._tDur,l=this._dur,f=r<=0?0:W(r),d=this._zTime<0!=r<0&&(this._initted||!l),h,p,_,c,m,y,w,v,T,g,S,b;if(this!==L&&f>u&&r>=0&&(f=u),f!==this._tTime||s||d){if(o!==this._time&&l&&(f+=this._time-o,r+=this._time-o),h=f,T=this._start,v=this._ts,y=!v,d&&(l||(o=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(S=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,n,s);if(h=W(f%m),f===u?(c=this._repeat,h=l):(c=~~(f/m),c&&c===f/m&&(h=l,c--),h>l&&(h=l)),g=le(this._tTime,m),!o&&this._tTime&&g!==c&&this._tTime-g*m-this._dur<=0&&(g=c),S&&c&1&&(h=l-h,b=1),c!==g&&!this._lock){var C=S&&g&1,k=C===(S&&c&1);if(c<g&&(C=!C),o=C?0:f%l?l:f,this._lock=1,this.render(o||(b?0:W(c*m)),n,!l)._lock=0,this._tTime=f,!n&&this.parent&&lt(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,u=this._tDur,k&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;tn(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=ms(this,W(o),W(h)),w&&(f-=h-(h=w._start))),this._tTime=f,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!n&&!c&&(lt(this,"onStart"),this._tTime!==f))return this;if(h>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(r,n,s);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,n,s),h!==this._time||!this._ts&&!y){w=0,_&&(f+=this._zTime=-E);break}}p=_}else{p=this._last;for(var O=r<0?r:h;p;){if(_=p._prev,(p._act||O<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(r,n,s);if(p.render(p._ts>0?(O-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(O-p._start)*p._ts,n,s||Q&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!y){w=0,_&&(f+=this._zTime=O?-E:E);break}}p=_}}if(w&&!n&&(this.pause(),w.render(h>=o?0:-E)._zTime=h>=o?1:-1,this._ts))return this._start=T,Qe(this),this.render(r,n,s);this._onUpdate&&!n&&lt(this,"onUpdate",!0),(f===u&&this._tTime>=this.totalDuration()||!f&&o)&&(T===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(f===u&&this._ts>0||!f&&this._ts<0)&&Et(this,1),!n&&!(r<0&&!o)&&(f||o||!u)&&(lt(this,f===u&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,n){var s=this;if(kt(n)||(n=ct(this,n,r)),!(r instanceof Pe)){if(K(r))return r.forEach(function(o){return s.add(o,n)}),this;if(X(r))return this.addLabel(r,n);if($(r))r=j.delayedCall(0,r);else return this}return this!==r?mt(this,r,n):this},e.getChildren=function(r,n,s,o){r===void 0&&(r=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=-dt);for(var u=[],l=this._first;l;)l._start>=o&&(l instanceof j?n&&u.push(l):(s&&u.push(l),r&&u.push.apply(u,l.getChildren(!0,n,s)))),l=l._next;return u},e.getById=function(r){for(var n=this.getChildren(1,1,1),s=n.length;s--;)if(n[s].vars.id===r)return n[s]},e.remove=function(r){return X(r)?this.removeLabel(r):$(r)?this.killTweensOf(r):(Ge(this,r),r===this._recent&&(this._recent=this._last),Xt(this))},e.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=W(ot.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),a.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},e.addLabel=function(r,n){return this.labels[r]=ct(this,n),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,n,s){var o=j.delayedCall(0,n||ke,s);return o.data="isPause",this._hasPause=1,mt(this,o,ct(this,r))},e.removePause=function(r){var n=this._first;for(r=ct(this,r);n;)n._start===r&&n.data==="isPause"&&Et(n),n=n._next},e.killTweensOf=function(r,n,s){for(var o=this.getTweensOf(r,s),u=o.length;u--;)Pt!==o[u]&&o[u].kill(r,n);return this},e.getTweensOf=function(r,n){for(var s=[],o=ht(r),u=this._first,l=kt(n),f;u;)u instanceof j?us(u._targets,o)&&(l?(!Pt||u._initted&&u._ts)&&u.globalTime(0)<=n&&u.globalTime(u.totalDuration())>n:!n||u.isActive())&&s.push(u):(f=u.getTweensOf(o,n)).length&&s.push.apply(s,f),u=u._next;return s},e.tweenTo=function(r,n){n=n||{};var s=this,o=ct(s,r),u=n,l=u.startAt,f=u.onStart,d=u.onStartParams,h=u.immediateRender,p,_=j.to(s,pt({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:n.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||E,onStart:function(){if(s.pause(),!p){var m=n.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());_._dur!==m&&ue(_,m,0,1).render(_._time,!0,!0),p=1}f&&f.apply(_,d||[])}},n));return h?_.render(0):_},e.tweenFromTo=function(r,n,s){return this.tweenTo(n,pt({startAt:{time:ct(this,r)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Xi(this,ct(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Xi(this,ct(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+E)},e.shiftChildren=function(r,n,s){s===void 0&&(s=0);for(var o=this._first,u=this.labels,l;o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(n)for(l in u)u[l]>=s&&(u[l]+=r);return Xt(this)},e.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return a.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,s;n;)s=n._next,this.remove(n),n=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Xt(this)},e.totalDuration=function(r){var n=0,s=this,o=s._last,u=dt,l,f,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),f=o._start,f>u&&s._sort&&o._ts&&!s._lock?(s._lock=1,mt(s,o,f-o._delay,1)._lock=0):u=f,f<0&&o._ts&&(n-=f,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=f/s._ts,s._time-=f,s._tTime-=f),s.shiftChildren(-f,!1,-1/0),u=0),o._end>n&&o._ts&&(n=o._end),o=l;ue(s,s===L&&s._time>n?s._time:n,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(r){if(L._ts&&(Er(L,Ue(r,L)),Rr=ot.frame),ot.frame>=qi){qi+=ut.autoSleep||120;var n=L._first;if((!n||!n._ts)&&ut.autoSleep&&ot._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ot.sleep()}}},t}(Pe);pt(Z.prototype,{_lock:0,_hasPause:0,_forcing:0});var Rs=function(t,e,i,r,n,s,o){var u=new rt(this._pt,t,e,0,1,un,null,n),l=0,f=0,d,h,p,_,c,m,y,w;for(u.b=i,u.e=r,i+="",r+="",(y=~r.indexOf("random("))&&(r=Se(r)),s&&(w=[i,r],s(w,t,e),i=w[0],r=w[1]),h=i.match(Ze)||[];d=Ze.exec(r);)_=d[0],c=r.substring(l,d.index),p?p=(p+1)%5:c.substr(-5)==="rgba("&&(p=1),_!==h[f++]&&(m=parseFloat(h[f-1])||0,u._pt={_next:u._pt,p:c||f===1?c:",",s:m,c:_.charAt(1)==="="?ne(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},l=Ze.lastIndex);return u.c=l<r.length?r.substring(l,r.length):"",u.fp=o,(Pr.test(r)||y)&&(u.e=0),this._pt=u,u},zi=function(t,e,i,r,n,s,o,u,l,f){$(r)&&(r=r(n||0,t,s));var d=t[e],h=i!=="get"?i:$(d)?l?t[e.indexOf("set")||!$(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,p=$(d)?l?Ns:on:Di,_;if(X(r)&&(~r.indexOf("random(")&&(r=Se(r)),r.charAt(1)==="="&&(_=ne(h,r)+(G(h)||0),(_||_===0)&&(r=_))),!f||h!==r||mi)return!isNaN(h*r)&&r!==""?(_=new rt(this._pt,t,e,+h||0,r-(h||0),typeof d=="boolean"?Bs:ln,0,p),l&&(_.fp=l),o&&_.modifier(o,this,t),this._pt=_):(!d&&!(e in t)&&Pi(e,r),Rs.call(this,t,e,h,r,p,u||ut.stringFilter,l))},Ds=function(t,e,i,r,n){if($(t)&&(t=be(t,n,e,i,r)),!yt(t)||t.style&&t.nodeType||K(t)||Sr(t))return X(t)?be(t,n,e,i,r):t;var s={},o;for(o in t)s[o]=be(t[o],n,e,i,r);return s},nn=function(t,e,i,r,n,s){var o,u,l,f;if(at[t]&&(o=new at[t]).init(n,o.rawVars?e[t]:Ds(e[t],r,n,s,i),i,r,s)!==!1&&(i._pt=u=new rt(i._pt,n,t,0,1,o.render,o,0,o.priority),i!==ie))for(l=i._ptLookup[i._targets.indexOf(n)],f=o._props.length;f--;)l[o._props[f]]=u;return o},Pt,mi,Ri=function a(t,e,i){var r=t.vars,n=r.ease,s=r.startAt,o=r.immediateRender,u=r.lazy,l=r.onUpdate,f=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=t._dur,c=t._startAt,m=t._targets,y=t.parent,w=y&&y.data==="nested"?y.vars.targets:m,v=t._overwrite==="auto"&&!Ti,T=t.timeline,g,S,b,C,k,O,M,A,z,V,F,Y,U;if(T&&(!h||!n)&&(n="none"),t._ease=Gt(n,oe.ease),t._yEase=d?Jr(Gt(d===!0?n:d,oe.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!T&&!!r.runBackwards,!T||h&&!r.stagger){if(A=m[0]?Wt(m[0]).harness:0,Y=A&&r[A.prop],g=Ye(r,Oi),c&&(c._zTime<0&&c.progress(1),e<0&&f&&o&&!p?c.render(-1,!0):c.revert(f&&_?Ee:os),c._lazy=0),s){if(Et(t._startAt=j.set(m,pt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!c&&et(u),startAt:null,delay:0,onUpdate:l&&function(){return lt(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Q||!o&&!p)&&t._startAt.revert(Ee),o&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&_&&!c){if(e&&(o=!1),b=pt({overwrite:!1,data:"isFromStart",lazy:o&&!c&&et(u),immediateRender:o,stagger:0,parent:y},g),Y&&(b[A.prop]=Y),Et(t._startAt=j.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Q?t._startAt.revert(Ee):t._startAt.render(-1,!0)),t._zTime=e,!o)a(t._startAt,E,E);else if(!e)return}for(t._pt=t._ptCache=0,u=_&&et(u)||u&&!_,S=0;S<m.length;S++){if(k=m[S],M=k._gsap||Ai(m)[S]._gsap,t._ptLookup[S]=V={},fi[M.id]&&zt.length&&Be(),F=w===m?S:w.indexOf(k),A&&(z=new A).init(k,Y||g,t,F,w)!==!1&&(t._pt=C=new rt(t._pt,k,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){V[J]=C}),z.priority&&(O=1)),!A||Y)for(b in g)at[b]&&(z=nn(b,g,t,F,k,w))?z.priority&&(O=1):V[b]=C=zi.call(t,k,b,"get",g[b],F,w,0,r.stringFilter);t._op&&t._op[S]&&t.kill(k,t._op[S]),v&&t._pt&&(Pt=t,L.killTweensOf(k,V,t.globalTime(e)),U=!t.parent,Pt=0),t._pt&&u&&(fi[M.id]=1)}O&&fn(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!U,h&&e<=0&&T.render(dt,!0,!0)},Es=function(t,e,i,r,n,s,o,u){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],f,d,h,p;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,p=t._targets.length;p--;){if(f=h[p][e],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==e&&f.fp!==e;)f=f._next;if(!f)return mi=1,t.vars[e]="+=0",Ri(t,o),mi=0,u?Te(e+" not eligible for reset"):1;l.push(f)}for(p=l.length;p--;)d=l[p],f=d._pt||d,f.s=(r||r===0)&&!n?r:f.s+(r||0)+s*f.c,f.c=i-f.s,d.e&&(d.e=q(i)+G(d.e)),d.b&&(d.b=f.s+G(d.b))},Is=function(t,e){var i=t[0]?Wt(t[0]).harness:0,r=i&&i.aliases,n,s,o,u;if(!r)return e;n=Kt({},e);for(s in r)if(s in n)for(u=r[s].split(","),o=u.length;o--;)n[u[o]]=n[s];return n},Fs=function(t,e,i,r){var n=e.ease||r||"power1.inOut",s,o;if(K(e))o=i[t]||(i[t]=[]),e.forEach(function(u,l){return o.push({t:l/(e.length-1)*100,v:u,e:n})});else for(s in e)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(t),v:e[s],e:n})},be=function(t,e,i,r,n){return $(t)?t.call(e,i,r,n):X(t)&&~t.indexOf("random(")?Se(t):t},sn=Mi+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",an={};it(sn+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return an[a]=1});var j=function(a){Tr(t,a);function t(i,r,n,s){var o;typeof r=="number"&&(n.duration=r,r=n,n=null),o=a.call(this,s?r:ye(r))||this;var u=o.vars,l=u.duration,f=u.delay,d=u.immediateRender,h=u.stagger,p=u.overwrite,_=u.keyframes,c=u.defaults,m=u.scrollTrigger,y=u.yoyoEase,w=r.parent||L,v=(K(i)||Sr(i)?kt(i[0]):"length"in r)?[i]:ht(i),T,g,S,b,C,k,O,M;if(o._targets=v.length?Ai(v):Te("GSAP target "+i+" not found. https://gsap.com",!ut.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||Re(l)||Re(f)){if(r=o.vars,T=o.timeline=new Z({data:"nested",defaults:c||{},targets:w&&w.data==="nested"?w.vars.targets:v}),T.kill(),T.parent=T._dp=bt(o),T._start=0,h||Re(l)||Re(f)){if(b=v.length,O=h&&qr(h),yt(h))for(C in h)~sn.indexOf(C)&&(M||(M={}),M[C]=h[C]);for(g=0;g<b;g++)S=Ye(r,an),S.stagger=0,y&&(S.yoyoEase=y),M&&Kt(S,M),k=v[g],S.duration=+be(l,bt(o),g,k,v),S.delay=(+be(f,bt(o),g,k,v)||0)-o._delay,!h&&b===1&&S.delay&&(o._delay=f=S.delay,o._start+=f,S.delay=0),T.to(k,S,O?O(g,k,v):0),T._ease=P.none;T.duration()?l=f=0:o.timeline=0}else if(_){ye(pt(T.vars.defaults,{ease:"none"})),T._ease=Gt(_.ease||r.ease||"none");var A=0,z,V,F;if(K(_))_.forEach(function(Y){return T.to(v,Y,">")}),T.duration();else{S={};for(C in _)C==="ease"||C==="easeEach"||Fs(C,_[C],S,_.easeEach);for(C in S)for(z=S[C].sort(function(Y,U){return Y.t-U.t}),A=0,g=0;g<z.length;g++)V=z[g],F={ease:V.e,duration:(V.t-(g?z[g-1].t:0))/100*l},F[C]=V.v,T.to(v,F,A),A+=F.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return p===!0&&!Ti&&(Pt=bt(o),L.killTweensOf(v),Pt=0),mt(w,bt(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!l&&!_&&o._start===W(w._time)&&et(d)&&hs(bt(o))&&w.data!=="nested")&&(o._tTime=-E,o.render(Math.max(0,-f)||0)),m&&Br(bt(o),m),o}var e=t.prototype;return e.render=function(r,n,s){var o=this._time,u=this._tDur,l=this._dur,f=r<0,d=r>u-E&&!f?u:r<E?0:r,h,p,_,c,m,y,w,v,T;if(!l)_s(this,r,n,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(h=d,v=this.timeline,this._repeat){if(c=l+this._rDelay,this._repeat<-1&&f)return this.totalTime(c*100+r,n,s);if(h=W(d%c),d===u?(_=this._repeat,h=l):(_=~~(d/c),_&&_===W(d/c)&&(h=l,_--),h>l&&(h=l)),y=this._yoyo&&_&1,y&&(T=this._yEase,h=l-h),m=le(this._tTime,c),h===o&&!s&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(v&&this._yEase&&tn(v,y),this.vars.repeatRefresh&&!y&&!this._lock&&this._time!==c&&this._initted&&(this._lock=s=1,this.render(W(c*_),!0).invalidate()._lock=0))}if(!this._initted){if(Yr(this,f?r:h,s,n,d))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(r,n,s)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(T||this._ease)(h/l),this._from&&(this.ratio=w=1-w),h&&!o&&!n&&!_&&(lt(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),n,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(f&&ci(this,r,n,s),lt(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!n&&this.parent&&lt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(f&&!this._onUpdate&&ci(this,r,!0,!0),(r||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Et(this,1),!n&&!(f&&!o)&&(d||o||y)&&(lt(this,d===u?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),a.prototype.invalidate.call(this,r)},e.resetTo=function(r,n,s,o,u){Ce||ot.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Ri(this,l),f=this._ease(l/this._dur),Es(this,r,n,s,o,f,l,u)?this.resetTo(r,n,s,o,1):(Ke(this,0),this.parent||Nr(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?ge(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,Pt&&Pt.vars.overwrite!==!0)._first||ge(this),this.parent&&s!==this.timeline.totalDuration()&&ue(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,u=r?ht(r):o,l=this._ptLookup,f=this._pt,d,h,p,_,c,m,y;if((!n||n==="all")&&cs(o,u))return n==="all"&&(this._pt=0),ge(this);for(d=this._op=this._op||[],n!=="all"&&(X(n)&&(c={},it(n,function(w){return c[w]=1}),n=c),n=Is(o,n)),y=o.length;y--;)if(~u.indexOf(o[y])){h=l[y],n==="all"?(d[y]=n,_=h,p={}):(p=d[y]=d[y]||{},_=n);for(c in _)m=h&&h[c],m&&((!("kill"in m.d)||m.d.kill(c)===!0)&&Ge(this,m,"_pt"),delete h[c]),p!=="all"&&(p[c]=1)}return this._initted&&!this._pt&&f&&ge(this),this},t.to=function(r,n){return new t(r,n,arguments[2])},t.from=function(r,n){return we(1,arguments)},t.delayedCall=function(r,n,s,o){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},t.fromTo=function(r,n,s){return we(2,arguments)},t.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(r,n)},t.killTweensOf=function(r,n,s){return L.killTweensOf(r,n,s)},t}(Pe);pt(j.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});it("staggerTo,staggerFrom,staggerFromTo",function(a){j[a]=function(){var t=new Z,e=hi.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var Di=function(t,e,i){return t[e]=i},on=function(t,e,i){return t[e](i)},Ns=function(t,e,i,r){return t[e](r.fp,i)},Ls=function(t,e,i){return t.setAttribute(e,i)},Ei=function(t,e){return $(t[e])?on:ki(t[e])&&t.setAttribute?Ls:Di},ln=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Bs=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},un=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Ii=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Ys=function(t,e,i,r){for(var n=this._pt,s;n;)s=n._next,n.p===r&&n.modifier(t,e,i),n=s},Us=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Ge(this,e,"_pt"):e.dep||(i=1),e=r;return!i},$s=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},fn=function(t){for(var e=t._pt,i,r,n,s;e;){for(i=e._next,r=n;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:s)?e._prev._next=e:n=e,(e._next=r)?r._prev=e:s=e,e=i}t._pt=n},rt=function(){function a(e,i,r,n,s,o,u,l,f){this.t=i,this.s=n,this.c=s,this.p=r,this.r=o||ln,this.d=u||this,this.set=l||Di,this.pr=f||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=$s,this.m=i,this.mt=n,this.tween=r},a}();it(Mi+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Oi[a]=1});ft.TweenMax=ft.TweenLite=j;ft.TimelineLite=ft.TimelineMax=Z;L=new Z({sortChildren:!1,defaults:oe,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ut.stringFilter=Zr;var Qt=[],Fe={},qs=[],Qi=0,js=0,ri=function(t){return(Fe[t]||qs).map(function(e){return e()})},gi=function(){var t=Date.now(),e=[];t-Qi>2&&(ri("matchMediaInit"),Qt.forEach(function(i){var r=i.queries,n=i.conditions,s,o,u,l;for(o in r)s=_t.matchMedia(r[o]).matches,s&&(u=1),s!==n[o]&&(n[o]=s,l=1);l&&(i.revert(),u&&e.push(i))}),ri("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Qi=t,ri("matchMedia"))},cn=function(){function a(e,i){this.selector=i&&pi(i),this.data=[],this._r=[],this.isReverted=!1,this.id=js++,e&&this.add(e)}var t=a.prototype;return t.add=function(i,r,n){$(i)&&(n=r,r=i,i=$);var s=this,o=function(){var l=N,f=s.selector,d;return l&&l!==s&&l.data.push(s),n&&(s.selector=pi(n)),N=s,d=r.apply(s,arguments),$(d)&&s._r.push(d),N=l,s.selector=f,s.isReverted=!1,d};return s.last=o,i===$?o(s,function(u){return s.add(null,u)}):i?s[i]=o:o},t.ignore=function(i){var r=N;N=null,i(this),N=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof a?i.push.apply(i,r.getTweens()):r instanceof j&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var n=this;if(i?function(){for(var o=n.getTweens(),u=n.data.length,l;u--;)l=n.data[u],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(f){return o.splice(o.indexOf(f),1)}));for(o.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,d){return d.g-f.g||-1/0}).forEach(function(f){return f.t.revert(i)}),u=n.data.length;u--;)l=n.data[u],l instanceof Z?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof j)&&l.revert&&l.revert(i);n._r.forEach(function(f){return f(i,n)}),n.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=Qt.length;s--;)Qt[s].id===this.id&&Qt.splice(s,1)},t.revert=function(i){this.kill(i||{})},a}(),Vs=function(){function a(e){this.contexts=[],this.scope=e,N&&N.data.push(this)}var t=a.prototype;return t.add=function(i,r,n){yt(i)||(i={matches:i});var s=new cn(0,n||this.scope),o=s.conditions={},u,l,f;N&&!s.selector&&(s.selector=N.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;for(l in i)l==="all"?f=1:(u=_t.matchMedia(i[l]),u&&(Qt.indexOf(s)<0&&Qt.push(s),(o[l]=u.matches)&&(f=1),u.addListener?u.addListener(gi):u.addEventListener("change",gi)));return f&&r(s,function(d){return s.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},a}(),$e={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return Qr(r)})},timeline:function(t){return new Z(t)},getTweensOf:function(t,e){return L.getTweensOf(t,e)},getProperty:function(t,e,i,r){X(t)&&(t=ht(t)[0]);var n=Wt(t||{}).get,s=i?Fr:Ir;return i==="native"&&(i=""),t&&(e?s((at[e]&&at[e].get||n)(t,e,i,r)):function(o,u,l){return s((at[o]&&at[o].get||n)(t,o,u,l))})},quickSetter:function(t,e,i){if(t=ht(t),t.length>1){var r=t.map(function(f){return st.quickSetter(f,e,i)}),n=r.length;return function(f){for(var d=n;d--;)r[d](f)}}t=t[0]||{};var s=at[e],o=Wt(t),u=o.harness&&(o.harness.aliases||{})[e]||e,l=s?function(f){var d=new s;ie._pt=0,d.init(t,i?f+i:f,ie,0,[t]),d.render(1,d),ie._pt&&Ii(1,ie)}:o.set(t,u);return s?l:function(f){return l(t,u,i?f+i:f,o,1)}},quickTo:function(t,e,i){var r,n=st.to(t,Kt((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),s=function(u,l,f){return n.resetTo(e,u,l,f)};return s.tween=n,s},isTweening:function(t){return L.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gt(t.ease,oe.ease)),ji(oe,t||{})},config:function(t){return ji(ut,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,n=t.defaults,s=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!at[o]&&!ft[o]&&Te(e+" effect requires "+o+" plugin.")}),Je[e]=function(o,u,l){return i(ht(o),pt(u||{},n),l)},s&&(Z.prototype[e]=function(o,u,l){return this.add(Je[e](o,yt(u)?u:(l=u)&&{},this),l)})},registerEase:function(t,e){P[t]=Gt(e)},parseEase:function(t,e){return arguments.length?Gt(t,e):P},getById:function(t){return L.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Z(t),r,n;for(i.smoothChildTiming=et(t.smoothChildTiming),L.remove(i),i._dp=0,i._time=i._tTime=L._time,r=L._first;r;)n=r._next,(e||!(!r._dur&&r instanceof j&&r.vars.onComplete===r._targets[0]))&&mt(i,r,r._start-r._delay),r=n;return mt(L,i,0),i},context:function(t,e){return t?new cn(t,e):N},matchMedia:function(t){return new Vs(t)},matchMediaRefresh:function(){return Qt.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||gi()},addEventListener:function(t,e){var i=Fe[t]||(Fe[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Fe[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Ts,wrapYoyo:ks,distribute:qr,random:Vr,snap:jr,normalize:vs,getUnit:G,clamp:xs,splitColor:Kr,toArray:ht,selector:pi,mapRange:Xr,pipe:ws,unitize:bs,interpolate:Ss,shuffle:$r},install:Ar,effects:Je,ticker:ot,updateRoot:Z.updateRoot,plugins:at,globalTimeline:L,core:{PropTween:rt,globals:zr,Tween:j,Timeline:Z,Animation:Pe,getCache:Wt,_removeLinkedListItem:Ge,reverting:function(){return Q},context:function(t){return t&&N&&(N.data.push(t),t._ctx=N),N},suppressOverwrites:function(t){return Ti=t}}};it("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return $e[a]=j[a]});ot.add(Z.updateRoot);ie=$e.to({},{duration:0});var Ws=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Xs=function(t,e){var i=t._targets,r,n,s;for(r in e)for(n=i.length;n--;)s=t._ptLookup[n][r],s&&(s=s.d)&&(s._pt&&(s=Ws(s,r)),s&&s.modifier&&s.modifier(e[r],t,i[n],r))},ni=function(t,e){return{name:t,rawVars:1,init:function(r,n,s){s._onInit=function(o){var u,l;if(X(n)&&(u={},it(n,function(f){return u[f]=1}),n=u),e){u={};for(l in n)u[l]=e(n[l]);n=u}Xs(o,n)}}}},st=$e.registerPlugin({name:"attr",init:function(t,e,i,r,n){var s,o,u;this.tween=i;for(s in e)u=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(u||0)+"",e[s],r,n,0,0,s),o.op=s,o.b=u,this._props.push(s)},render:function(t,e){for(var i=e._pt;i;)Q?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},ni("roundProps",_i),ni("modifiers"),ni("snap",jr))||$e;j.version=Z.version=st.version="3.12.5";Mr=1;Si()&&fe();P.Power0;P.Power1;P.Power2;P.Power3;P.Power4;P.Linear;P.Quad;P.Cubic;P.Quart;P.Quint;P.Strong;P.Elastic;P.Back;P.SteppedEase;P.Bounce;P.Sine;P.Expo;P.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ki,Ot,se,Fi,jt,Hi,Ni,Gs=function(){return typeof window<"u"},St={},Ut=180/Math.PI,ae=Math.PI/180,Jt=Math.atan2,Zi=1e8,Li=/([A-Z])/g,Qs=/(left|right|width|margin|padding|x)/i,Ks=/[\s,\(]\S/,gt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xi=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Hs=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Zs=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Js=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},dn=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},hn=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ta=function(t,e,i){return t.style[e]=i},ea=function(t,e,i){return t.style.setProperty(e,i)},ia=function(t,e,i){return t._gsap[e]=i},ra=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},na=function(t,e,i,r,n){var s=t._gsap;s.scaleX=s.scaleY=i,s.renderTransform(n,s)},sa=function(t,e,i,r,n){var s=t._gsap;s[e]=i,s.renderTransform(n,s)},B="transform",nt=B+"Origin",aa=function a(t,e){var i=this,r=this.target,n=r.style,s=r._gsap;if(t in St&&n){if(this.tfm=this.tfm||{},t!=="transform")t=gt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=vt(r,o)}):this.tfm[t]=s.x?s[t]:vt(r,t),t===nt&&(this.tfm.zOrigin=s.zOrigin);else return gt.transform.split(",").forEach(function(o){return a.call(i,o,e)});if(this.props.indexOf(B)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(nt,e,"")),t=B}(n||e)&&this.props.push(t,e,n[t])},pn=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},oa=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,n,s;for(n=0;n<t.length;n+=3)t[n+1]?e[t[n]]=t[n+2]:t[n+2]?i[t[n]]=t[n+2]:i.removeProperty(t[n].substr(0,2)==="--"?t[n]:t[n].replace(Li,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=Ni(),(!n||!n.isStart)&&!i[B]&&(pn(i),r.zOrigin&&i[nt]&&(i[nt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_n=function(t,e){var i={target:t,props:[],revert:oa,save:aa};return t._gsap||st.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},mn,yi=function(t,e){var i=Ot.createElementNS?Ot.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ot.createElement(t);return i&&i.style?i:Ot.createElement(t)},xt=function a(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Li,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&a(t,ce(e)||e,1)||""},Ji="O,Moz,ms,Ms,Webkit".split(","),ce=function(t,e,i){var r=e||jt,n=r.style,s=5;if(t in n&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(Ji[s]+t in n););return s<0?null:(s===3?"ms":s>=0?Ji[s]:"")+t},wi=function(){Gs()&&window.document&&(Ki=window,Ot=Ki.document,se=Ot.documentElement,jt=yi("div")||{style:{}},yi("div"),B=ce(B),nt=B+"Origin",jt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mn=!!ce("perspective"),Ni=st.core.reverting,Fi=1)},si=function a(t){var e=yi("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,n=this.style.cssText,s;if(se.appendChild(e),e.appendChild(this),this.style.display="block",t)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),se.removeChild(e),this.style.cssText=n,s},tr=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},gn=function(t){var e;try{e=t.getBBox()}catch{e=si.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===si||(e=si.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+tr(t,["x","cx","x1"])||0,y:+tr(t,["y","cy","y1"])||0,width:0,height:0}:e},xn=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gn(t))},Ht=function(t,e){if(e){var i=t.style,r;e in St&&e!==nt&&(e=B),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Li,"-$1").toLowerCase())):i.removeAttribute(e)}},Mt=function(t,e,i,r,n,s){var o=new rt(t._pt,e,i,0,1,s?hn:dn);return t._pt=o,o.b=r,o.e=n,t._props.push(i),o},er={deg:1,rad:1,turn:1},la={grid:1,flex:1},It=function a(t,e,i,r){var n=parseFloat(i)||0,s=(i+"").trim().substr((n+"").length)||"px",o=jt.style,u=Qs.test(e),l=t.tagName.toLowerCase()==="svg",f=(l?"client":"offset")+(u?"Width":"Height"),d=100,h=r==="px",p=r==="%",_,c,m,y;if(r===s||!n||er[r]||er[s])return n;if(s!=="px"&&!h&&(n=a(t,e,i,"px")),y=t.getCTM&&xn(t),(p||s==="%")&&(St[e]||~e.indexOf("adius")))return _=y?t.getBBox()[u?"width":"height"]:t[f],q(p?n/_*d:n/100*_);if(o[u?"width":"height"]=d+(h?s:r),c=~e.indexOf("adius")||r==="em"&&t.appendChild&&!l?t:t.parentNode,y&&(c=(t.ownerSVGElement||{}).parentNode),(!c||c===Ot||!c.appendChild)&&(c=Ot.body),m=c._gsap,m&&p&&m.width&&u&&m.time===ot.time&&!m.uncache)return q(n/m.width*d);if(p&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=d+r,_=t[f],w?t.style[e]=w:Ht(t,e)}else(p||s==="%")&&!la[xt(c,"display")]&&(o.position=xt(t,"position")),c===t&&(o.position="static"),c.appendChild(jt),_=jt[f],c.removeChild(jt),o.position="absolute";return u&&p&&(m=Wt(c),m.time=ot.time,m.width=c[f]),q(h?_*n/d:_&&n?d/_*n:0)},vt=function(t,e,i,r){var n;return Fi||wi(),e in gt&&e!=="transform"&&(e=gt[e],~e.indexOf(",")&&(e=e.split(",")[0])),St[e]&&e!=="transform"?(n=Me(t,r),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:je(xt(t,nt))+" "+n.zOrigin+"px"):(n=t.style[e],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=qe[e]&&qe[e](t,e,i)||xt(t,e)||Dr(t,e)||(e==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?It(t,e,n,i)+i:n},ua=function(t,e,i,r){if(!i||i==="none"){var n=ce(e,t,1),s=n&&xt(t,n,1);s&&s!==i?(e=n,i=s):e==="borderColor"&&(i=xt(t,"borderTopColor"))}var o=new rt(this._pt,t.style,e,0,1,un),u=0,l=0,f,d,h,p,_,c,m,y,w,v,T,g;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(c=t.style[e],t.style[e]=r,r=xt(t,e)||r,c?t.style[e]=c:Ht(t,e)),f=[i,r],Zr(f),i=f[0],r=f[1],h=i.match(ee)||[],g=r.match(ee)||[],g.length){for(;d=ee.exec(r);)m=d[0],w=r.substring(u,d.index),_?_=(_+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(_=1),m!==(c=h[l++]||"")&&(p=parseFloat(c)||0,T=c.substr((p+"").length),m.charAt(1)==="="&&(m=ne(p,m)+T),y=parseFloat(m),v=m.substr((y+"").length),u=ee.lastIndex-v.length,v||(v=v||ut.units[e]||T,u===r.length&&(r+=v,o.e+=v)),T!==v&&(p=It(t,e,c,v)||0),o._pt={_next:o._pt,p:w||l===1?w:",",s:p,c:y-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=u<r.length?r.substring(u,r.length):""}else o.r=e==="display"&&r==="none"?hn:dn;return Pr.test(r)&&(o.e=0),this._pt=o,o},ir={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fa=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=ir[i]||i,e[1]=ir[r]||r,e.join(" ")},ca=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,n=e.u,s=i._gsap,o,u,l;if(n==="all"||n===!0)r.cssText="",u=1;else for(n=n.split(","),l=n.length;--l>-1;)o=n[l],St[o]&&(u=1,o=o==="transformOrigin"?nt:B),Ht(i,o);u&&(Ht(i,B),s&&(s.svg&&i.removeAttribute("transform"),Me(i,1),s.uncache=1,pn(r)))}},qe={clearProps:function(t,e,i,r,n){if(n.data!=="isFromStart"){var s=t._pt=new rt(t._pt,e,i,0,0,ca);return s.u=r,s.pr=-10,s.tween=n,t._props.push(i),1}}},Oe=[1,0,0,1,0,0],yn={},wn=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},rr=function(t){var e=xt(t,B);return wn(e)?Oe:e.substr(7).match(Cr).map(q)},Bi=function(t,e){var i=t._gsap||Wt(t),r=t.style,n=rr(t),s,o,u,l;return i.svg&&t.getAttribute("transform")?(u=t.transform.baseVal.consolidate().matrix,n=[u.a,u.b,u.c,u.d,u.e,u.f],n.join(",")==="1,0,0,1,0,0"?Oe:n):(n===Oe&&!t.offsetParent&&t!==se&&!i.svg&&(u=r.display,r.display="block",s=t.parentNode,(!s||!t.offsetParent)&&(l=1,o=t.nextElementSibling,se.appendChild(t)),n=rr(t),u?r.display=u:Ht(t,"display"),l&&(o?s.insertBefore(t,o):s?s.appendChild(t):se.removeChild(t))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},bi=function(t,e,i,r,n,s){var o=t._gsap,u=n||Bi(t,!0),l=o.xOrigin||0,f=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,p=u[0],_=u[1],c=u[2],m=u[3],y=u[4],w=u[5],v=e.split(" "),T=parseFloat(v[0])||0,g=parseFloat(v[1])||0,S,b,C,k;i?u!==Oe&&(b=p*m-_*c)&&(C=T*(m/b)+g*(-c/b)+(c*w-m*y)/b,k=T*(-_/b)+g*(p/b)-(p*w-_*y)/b,T=C,g=k):(S=gn(t),T=S.x+(~v[0].indexOf("%")?T/100*S.width:T),g=S.y+(~(v[1]||v[0]).indexOf("%")?g/100*S.height:g)),r||r!==!1&&o.smooth?(y=T-l,w=g-f,o.xOffset=d+(y*p+w*c)-y,o.yOffset=h+(y*_+w*m)-w):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=g,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!i,t.style[nt]="0px 0px",s&&(Mt(s,o,"xOrigin",l,T),Mt(s,o,"yOrigin",f,g),Mt(s,o,"xOffset",d,o.xOffset),Mt(s,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",T+" "+g)},Me=function(t,e){var i=t._gsap||new rn(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,n=i.scaleX<0,s="px",o="deg",u=getComputedStyle(t),l=xt(t,nt)||"0",f,d,h,p,_,c,m,y,w,v,T,g,S,b,C,k,O,M,A,z,V,F,Y,U,J,tt,Ct,_e,Nt,Yi,wt,Lt;return f=d=h=c=m=y=w=v=T=0,p=_=1,i.svg=!!(t.getCTM&&xn(t)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(r[B]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[B]!=="none"?u[B]:"")),r.scale=r.rotate=r.translate="none"),b=Bi(t,i.svg),i.svg&&(i.uncache?(J=t.getBBox(),l=i.xOrigin-J.x+"px "+(i.yOrigin-J.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),bi(t,U||l,!!U||i.originIsAbsolute,i.smooth!==!1,b)),g=i.xOrigin||0,S=i.yOrigin||0,b!==Oe&&(M=b[0],A=b[1],z=b[2],V=b[3],f=F=b[4],d=Y=b[5],b.length===6?(p=Math.sqrt(M*M+A*A),_=Math.sqrt(V*V+z*z),c=M||A?Jt(A,M)*Ut:0,w=z||V?Jt(z,V)*Ut+c:0,w&&(_*=Math.abs(Math.cos(w*ae))),i.svg&&(f-=g-(g*M+S*z),d-=S-(g*A+S*V))):(Lt=b[6],Yi=b[7],Ct=b[8],_e=b[9],Nt=b[10],wt=b[11],f=b[12],d=b[13],h=b[14],C=Jt(Lt,Nt),m=C*Ut,C&&(k=Math.cos(-C),O=Math.sin(-C),U=F*k+Ct*O,J=Y*k+_e*O,tt=Lt*k+Nt*O,Ct=F*-O+Ct*k,_e=Y*-O+_e*k,Nt=Lt*-O+Nt*k,wt=Yi*-O+wt*k,F=U,Y=J,Lt=tt),C=Jt(-z,Nt),y=C*Ut,C&&(k=Math.cos(-C),O=Math.sin(-C),U=M*k-Ct*O,J=A*k-_e*O,tt=z*k-Nt*O,wt=V*O+wt*k,M=U,A=J,z=tt),C=Jt(A,M),c=C*Ut,C&&(k=Math.cos(C),O=Math.sin(C),U=M*k+A*O,J=F*k+Y*O,A=A*k-M*O,Y=Y*k-F*O,M=U,F=J),m&&Math.abs(m)+Math.abs(c)>359.9&&(m=c=0,y=180-y),p=q(Math.sqrt(M*M+A*A+z*z)),_=q(Math.sqrt(Y*Y+Lt*Lt)),C=Jt(F,Y),w=Math.abs(C)>2e-4?C*Ut:0,T=wt?1/(wt<0?-wt:wt):0),i.svg&&(U=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!wn(xt(t,B)),U&&t.setAttribute("transform",U))),Math.abs(w)>90&&Math.abs(w)<270&&(n?(p*=-1,w+=c<=0?180:-180,c+=c<=0?180:-180):(_*=-1,w+=w<=0?180:-180)),e=e||i.uncache,i.x=f-((i.xPercent=f&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-f)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+s,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+s,i.z=h+s,i.scaleX=q(p),i.scaleY=q(_),i.rotation=q(c)+o,i.rotationX=q(m)+o,i.rotationY=q(y)+o,i.skewX=w+o,i.skewY=v+o,i.transformPerspective=T+s,(i.zOrigin=parseFloat(l.split(" ")[2])||!e&&i.zOrigin||0)&&(r[nt]=je(l)),i.xOffset=i.yOffset=0,i.force3D=ut.force3D,i.renderTransform=i.svg?ha:mn?bn:da,i.uncache=0,i},je=function(t){return(t=t.split(" "))[0]+" "+t[1]},ai=function(t,e,i){var r=G(e);return q(parseFloat(e)+parseFloat(It(t,"x",i+"px",r)))+r},da=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bn(t,e)},Bt="0deg",me="0px",Yt=") ",bn=function(t,e){var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,o=i.y,u=i.z,l=i.rotation,f=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,c=i.scaleY,m=i.transformPerspective,y=i.force3D,w=i.target,v=i.zOrigin,T="",g=y==="auto"&&t&&t!==1||y===!0;if(v&&(d!==Bt||f!==Bt)){var S=parseFloat(f)*ae,b=Math.sin(S),C=Math.cos(S),k;S=parseFloat(d)*ae,k=Math.cos(S),s=ai(w,s,b*k*-v),o=ai(w,o,-Math.sin(S)*-v),u=ai(w,u,C*k*-v+v)}m!==me&&(T+="perspective("+m+Yt),(r||n)&&(T+="translate("+r+"%, "+n+"%) "),(g||s!==me||o!==me||u!==me)&&(T+=u!==me||g?"translate3d("+s+", "+o+", "+u+") ":"translate("+s+", "+o+Yt),l!==Bt&&(T+="rotate("+l+Yt),f!==Bt&&(T+="rotateY("+f+Yt),d!==Bt&&(T+="rotateX("+d+Yt),(h!==Bt||p!==Bt)&&(T+="skew("+h+", "+p+Yt),(_!==1||c!==1)&&(T+="scale("+_+", "+c+Yt),w.style[B]=T||"translate(0, 0)"},ha=function(t,e){var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,o=i.y,u=i.rotation,l=i.skewX,f=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,c=i.yOrigin,m=i.xOffset,y=i.yOffset,w=i.forceCSS,v=parseFloat(s),T=parseFloat(o),g,S,b,C,k;u=parseFloat(u),l=parseFloat(l),f=parseFloat(f),f&&(f=parseFloat(f),l+=f,u+=f),u||l?(u*=ae,l*=ae,g=Math.cos(u)*d,S=Math.sin(u)*d,b=Math.sin(u-l)*-h,C=Math.cos(u-l)*h,l&&(f*=ae,k=Math.tan(l-f),k=Math.sqrt(1+k*k),b*=k,C*=k,f&&(k=Math.tan(f),k=Math.sqrt(1+k*k),g*=k,S*=k)),g=q(g),S=q(S),b=q(b),C=q(C)):(g=d,C=h,S=b=0),(v&&!~(s+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(v=It(p,"x",s,"px"),T=It(p,"y",o,"px")),(_||c||m||y)&&(v=q(v+_-(_*g+c*b)+m),T=q(T+c-(_*S+c*C)+y)),(r||n)&&(k=p.getBBox(),v=q(v+r/100*k.width),T=q(T+n/100*k.height)),k="matrix("+g+","+S+","+b+","+C+","+v+","+T+")",p.setAttribute("transform",k),w&&(p.style[B]=k)},pa=function(t,e,i,r,n){var s=360,o=X(n),u=parseFloat(n)*(o&&~n.indexOf("rad")?Ut:1),l=u-r,f=r+l+"deg",d,h;return o&&(d=n.split("_")[1],d==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),d==="cw"&&l<0?l=(l+s*Zi)%s-~~(l/s)*s:d==="ccw"&&l>0&&(l=(l-s*Zi)%s-~~(l/s)*s)),t._pt=h=new rt(t._pt,e,i,r,l,Hs),h.e=f,h.u="deg",t._props.push(i),h},nr=function(t,e){for(var i in e)t[i]=e[i];return t},_a=function(t,e,i){var r=nr({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,u,l,f,d,h,p,_;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),s[B]=e,o=Me(i,1),Ht(i,B),i.setAttribute("transform",l)):(l=getComputedStyle(i)[B],s[B]=e,o=Me(i,1),s[B]=l);for(u in St)l=r[u],f=o[u],l!==f&&n.indexOf(u)<0&&(p=G(l),_=G(f),d=p!==_?It(i,u,l,_):parseFloat(l),h=parseFloat(f),t._pt=new rt(t._pt,o,u,d,h-d,xi),t._pt.u=_||0,t._props.push(u));nr(o,r)};it("padding,margin,Width,Radius",function(a,t){var e="Top",i="Right",r="Bottom",n="Left",s=(t<3?[e,i,r,n]:[e+n,e+i,r+i,r+n]).map(function(o){return t<2?a+o:"border"+o+a});qe[t>1?"border"+a:a]=function(o,u,l,f,d){var h,p;if(arguments.length<4)return h=s.map(function(_){return vt(o,_,l)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(f+"").split(" "),p={},s.forEach(function(_,c){return p[_]=h[c]=h[c]||h[(c-1)/2|0]}),o.init(u,p,d)}});var vn={name:"css",register:wi,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,n){var s=this._props,o=t.style,u=i.vars.startAt,l,f,d,h,p,_,c,m,y,w,v,T,g,S,b,C;Fi||wi(),this.styles=this.styles||_n(t),C=this.styles.props,this.tween=i;for(c in e)if(c!=="autoRound"&&(f=e[c],!(at[c]&&nn(c,e,i,r,t,n)))){if(p=typeof f,_=qe[c],p==="function"&&(f=f.call(i,r,t,n),p=typeof f),p==="string"&&~f.indexOf("random(")&&(f=Se(f)),_)_(this,t,c,f,i)&&(b=1);else if(c.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(c)+"").trim(),f+="",Rt.lastIndex=0,Rt.test(l)||(m=G(l),y=G(f)),y?m!==y&&(l=It(t,c,l,y)+y):m&&(f+=m),this.add(o,"setProperty",l,f,r,n,0,0,c),s.push(c),C.push(c,0,o[c]);else if(p!=="undefined"){if(u&&c in u?(l=typeof u[c]=="function"?u[c].call(i,r,t,n):u[c],X(l)&&~l.indexOf("random(")&&(l=Se(l)),G(l+"")||l==="auto"||(l+=ut.units[c]||G(vt(t,c))||""),(l+"").charAt(1)==="="&&(l=vt(t,c))):l=vt(t,c),h=parseFloat(l),w=p==="string"&&f.charAt(1)==="="&&f.substr(0,2),w&&(f=f.substr(2)),d=parseFloat(f),c in gt&&(c==="autoAlpha"&&(h===1&&vt(t,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,o.visibility),Mt(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),c!=="scale"&&c!=="transform"&&(c=gt[c],~c.indexOf(",")&&(c=c.split(",")[0]))),v=c in St,v){if(this.styles.save(c),T||(g=t._gsap,g.renderTransform&&!e.parseTransform||Me(t,e.parseTransform),S=e.smoothOrigin!==!1&&g.smooth,T=this._pt=new rt(this._pt,o,B,0,1,g.renderTransform,g,0,-1),T.dep=1),c==="scale")this._pt=new rt(this._pt,g,"scaleY",g.scaleY,(w?ne(g.scaleY,w+d):d)-g.scaleY||0,xi),this._pt.u=0,s.push("scaleY",c),c+="X";else if(c==="transformOrigin"){C.push(nt,0,o[nt]),f=fa(f),g.svg?bi(t,f,0,S,0,this):(y=parseFloat(f.split(" ")[2])||0,y!==g.zOrigin&&Mt(this,g,"zOrigin",g.zOrigin,y),Mt(this,o,c,je(l),je(f)));continue}else if(c==="svgOrigin"){bi(t,f,1,S,0,this);continue}else if(c in yn){pa(this,g,c,h,w?ne(h,w+f):f);continue}else if(c==="smoothOrigin"){Mt(this,g,"smooth",g.smooth,f);continue}else if(c==="force3D"){g[c]=f;continue}else if(c==="transform"){_a(this,f,t);continue}}else c in o||(c=ce(c)||c);if(v||(d||d===0)&&(h||h===0)&&!Ks.test(f)&&c in o)m=(l+"").substr((h+"").length),d||(d=0),y=G(f)||(c in ut.units?ut.units[c]:m),m!==y&&(h=It(t,c,l,y)),this._pt=new rt(this._pt,v?g:o,c,h,(w?ne(h,w+d):d)-h,!v&&(y==="px"||c==="zIndex")&&e.autoRound!==!1?Js:xi),this._pt.u=y||0,m!==y&&y!=="%"&&(this._pt.b=l,this._pt.r=Zs);else if(c in o)ua.call(this,t,c,l,w?w+f:f);else if(c in t)this.add(t,c,l||t[c],w?w+f:f,r,n);else if(c!=="parseTransform"){Pi(c,f);continue}v||(c in o?C.push(c,0,o[c]):C.push(c,1,l||t[c])),s.push(c)}}b&&fn(this)},render:function(t,e){if(e.tween._time||!Ni())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:vt,aliases:gt,getSetter:function(t,e,i){var r=gt[e];return r&&r.indexOf(",")<0&&(e=r),e in St&&e!==nt&&(t._gsap.x||vt(t,"x"))?i&&Hi===i?e==="scale"?ra:ia:(Hi=i||{})&&(e==="scale"?na:sa):t.style&&!ki(t.style[e])?ta:~e.indexOf("-")?ea:Ei(t,e)},core:{_removeProperty:Ht,_getMatrix:Bi}};st.utils.checkPrefix=ce;st.core.getStyleSaver=_n;(function(a,t,e,i){var r=it(a+","+t+","+e,function(n){St[n]=1});it(t,function(n){ut.units[n]="deg",yn[n]=1}),gt[r[13]]=a+","+t,it(i,function(n){var s=n.split(":");gt[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){ut.units[a]="px"});st.registerPlugin(vn);var Ae=st.registerPlugin(vn)||st;Ae.core.Tween;/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let sr=typeof window<"u"?I.useLayoutEffect:I.useEffect,ar=a=>a&&!Array.isArray(a)&&typeof a=="object",De=[],ma={},Tn=Ae;const He=(a,t=De)=>{let e=ma;ar(a)?(e=a,a=null,t="dependencies"in e?e.dependencies:De):ar(t)&&(e=t,t="dependencies"in e?e.dependencies:De),a&&typeof a!="function"&&console.warn("First parameter must be a function or config object");const{scope:i,revertOnUpdate:r}=e,n=I.useRef(!1),s=I.useRef(Tn.context(()=>{},i)),o=I.useRef(l=>s.current.add(null,l)),u=t&&t.length&&!r;return sr(()=>{if(a&&s.current.add(a,i),!u||!n.current)return()=>s.current.revert()},t),u&&sr(()=>(n.current=!0,()=>s.current.revert()),De),{context:s.current,contextSafe:o.current}};He.register=a=>{Tn=a};He.headless=!0;const ga=async()=>{const a=Ne(Dt,"HISTORY"),t=En(a,In("endYear","desc")),e=await $i(t);return await Promise.all(e.docs.map(async r=>{const n=Ne(Dt,"HISTORY",r.id,"projects"),s=await $i(n);return{id:r.id,...r.data(),projects:s.docs.map(o=>({id:o.id,...o.data()}))}}))},xa=async a=>{const t=Ne(Dt,"HISTORY");return await pr(t,a)},ya=async a=>{if(a.id===void 0)throw new Error("id is required");const t=Ve(Dt,"HISTORY",a.id);return await _r(t,{name:a.name,startYear:a.startYear,endYear:a.endYear,inOffice:a.inOffice})},wa=async a=>{if(a.id===void 0)throw new Error("id is required");const t=Ve(Dt,"HISTORY",a.id);return await mr(t)},ba=async a=>{const t=Ne(Dt,`HISTORY/${a.compId}/projects`);return await pr(t,a)},va=async a=>{if(a.id===void 0)throw new Error("id is required");const t=Ve(Dt,`HISTORY/${a.compId}/projects`,a.id);return await _r(t,{name:a.name,date:a.date,part:a.part})},Ta=async a=>{if(a.id===void 0)throw new Error("id is required");const t=Ve(Dt,`HISTORY/${a.compId}/projects`,a.id);return await mr(t)},ka=()=>Fn({queryKey:["compList"],queryFn:async()=>await ga()}),Sa=()=>{const a=he();return pe({mutationFn:async({docData:t})=>{const e=await xa(t);return a.invalidateQueries({queryKey:["compList"]}),e}})},Ca=()=>{const a=he();return pe({mutationFn:async({docData:t})=>{const e=await ya(t);return a.invalidateQueries({queryKey:["compList"]}),e}})},Pa=()=>{const a=he();return pe({mutationFn:async({docData:t})=>{const e=await wa(t);return a.invalidateQueries({queryKey:["compList"]}),e}})},Oa=()=>{const a=he();return pe({mutationFn:async({docData:t})=>{const e=await ba(t);return a.invalidateQueries({queryKey:["compList"]}),e}})},Ma=()=>{const a=he();return pe({mutationFn:async({docData:t})=>{const e=await va(t);return a.invalidateQueries({queryKey:["compList"]}),e}})},Aa=()=>{const a=he();return pe({mutationFn:async({docData:t})=>{const e=await Ta(t);return a.invalidateQueries({queryKey:["compList"]}),e}})},kn=({setOpen:a,isAddMode:t=!1,addModeCompId:e,projectData:i})=>{const{mutateAsync:r,isPending:n}=Oa(),{mutateAsync:s,isPending:o}=Ma(),{control:u,handleSubmit:l,formState:{errors:f}}=gr({defaultValues:{name:i?.name||"",date:i?.date||"",part:i?.part||""}}),d=I.useCallback(async h=>{t?await r({docData:{compId:e||"",name:h.name,date:h.date,part:h.part}}):await s({docData:{compId:i?.compId||"",id:i?.id,name:h.name,date:h.date,part:h.part}}),a(!1)},[]);return x(vr,{className:"editPrjItem",duration:.24,children:R("form",{onSubmit:l(d),className:"wrap",children:[x(qt,{name:"name",control:u,rules:{required:"프로젝트명이 없음"},render:({field:h})=>x(re,{...h,size:"small",error:!!f.name,placeholder:"프로젝트명",InputProps:{style:{backgroundColor:"#fff",color:"#000"}}})}),x(qt,{name:"date",control:u,rules:{required:"프로젝트 시작일이 없음"},render:({field:h})=>x(re,{...h,size:"small",error:!!f.date,placeholder:"프로젝트 시작년월",InputProps:{style:{width:"90px",backgroundColor:"#fff",color:"#000"}}})}),x(qt,{name:"part",control:u,rules:{required:"작업 파트가 없음"},render:({field:h})=>x(re,{...h,size:"small",error:!!f.part,placeholder:"작업파트",InputProps:{style:{backgroundColor:"#fff",color:"#000"}}})}),x(Tt,{type:"submit",variant:"contained",size:"small",sx:{backgroundColor:"#000",color:"#fff"},children:x(xr,{})}),x(Tt,{variant:"contained",size:"small",onClick:()=>a(!1),children:x(yr,{})}),o||n&&x(vi,{size:"30px"})]})},"compTransition")},za=({projectData:a})=>{const{user:t}=We(),e=I.useMemo(()=>t?.role?.toUpperCase()==="ADMIN",[t]),[i,r]=I.useState(!1),{mutateAsync:n}=Aa(),s=async()=>{await n({docData:a})};return a?R(ve,{children:[R("div",{className:"prjItem",children:[x("strong",{className:"prjName",children:a?.name}),x("span",{className:"date",children:a?.date||"-"}),a?.part&&x("div",{className:"part",children:a?.part?.split(",").map(o=>x("span",{children:o},o))}),e&&R(ve,{children:[x(Tt,{className:"btnEdit",variant:"contained",size:"small",onClick:()=>r(!0),title:"프로젝트 수정",children:x(br,{})}),x(Tt,{className:"btnDelete",variant:"contained",size:"small",color:"error",onClick:s,title:"프로젝트 삭제",children:x(wr,{})})]})]}),x(Xe,{children:i&&x(kn,{setOpen:r,projectData:a})})]}):null},Ra=({compId:a})=>{const[t,e]=I.useState(!1);return R(ve,{children:[x(Tt,{variant:"contained",fullWidth:!0,size:"small",onClick:()=>e(!0),title:"프로젝트 추가",sx:{minWidth:0,padding:"0.2rem",borderRadius:"10rem",backgroundColor:"#ffa700",color:"#000","&:hover":{backgroundColor:"#000",color:"#ffa700"}},children:x(Nn,{})}),x(Xe,{children:t&&x(kn,{setOpen:e,isAddMode:!0,addModeCompId:a})})]})},Da=a=>a.projects?.sort((t,e)=>{if(!t.date||!e.date)return 0;const i=new Date(parseInt(t.date.split(".")[0],10),parseInt(t.date.split(".")[1],10)-1||0),r=new Date(parseInt(e.date.split(".")[0],10),parseInt(e.date.split(".")[1],10)-1||0);return i>r?-1:1}),Ea=({projectDatas:a})=>{const{user:t}=We(),e=I.useMemo(()=>t?.role?.toUpperCase()==="ADMIN",[t]),i=I.useMemo(()=>Da(a),[a]);return i?R("ul",{className:"prjList",children:[e&&x("li",{children:x(Ra,{compId:a.id||""})},"projectAdd"),i?.map(r=>x("li",{children:x(za,{projectData:{...r,compId:a.id||""}})},r.id))]}):null},or=({compData:a})=>{const{user:t}=We(),[e,i]=I.useState(!1),{mutateAsync:r,isPending:n}=Sa(),{mutateAsync:s,isPending:o}=Ca(),{mutateAsync:u}=Pa(),l=a||{inOffice:!1,startYear:"",endYear:"",name:"",projects:[]},f=I.useMemo(()=>l.id===void 0,[l.id]),d=I.useMemo(()=>t?.role?.toUpperCase()==="ADMIN",[t]),{control:h,handleSubmit:p,formState:{errors:_},reset:c}=gr({defaultValues:{inOffice:l.inOffice,startYear:l.startYear,endYear:l.endYear,name:l.name}}),m=I.useCallback(()=>{i(!0)},[]);I.useEffect(()=>{e||c()},[e]);const y=I.useCallback(async b=>{f?await r({docData:{name:b.name,startYear:b.startYear,endYear:b.endYear,inOffice:b.inOffice}}):await s({docData:{id:l.id,name:b.name,startYear:b.startYear,endYear:b.endYear,inOffice:b.inOffice}}),i(!1)},[]),w=()=>{f&&!e&&i(!0)},v=async()=>{await u({docData:{id:l.id,name:l.name,startYear:l.startYear,endYear:l.endYear,inOffice:l.inOffice}})},T=I.useMemo(()=>`item ${f?"isAddMode":""} ${e?"isEditMode":""}`,[f,e]),g=I.useMemo(()=>`title ${e?"isBlur":""}`,[e]),S=I.useMemo(()=>l.inOffice?"Present":l.endYear,[l]);return R("div",{className:T,onClick:()=>w(),children:[!f&&R(ve,{children:[R("div",{className:g,children:[R("span",{className:"yearFirst",children:[l.startYear," -"]}),x("strong",{className:"yearLast",children:S}),l.inOffice&&x("span",{className:"curComp",children:"재직중"})]}),R("div",{className:`compPrjList ${e?"isBlur":""}`,children:[R("div",{className:"comp",children:[l.name,d&&R("div",{className:"btns",children:[x(Tt,{variant:"contained",color:"primary",size:"small",title:"수정",onClick:m,children:x(br,{})}),x(Tt,{variant:"contained",color:"error",size:"small",title:"삭제",onClick:v,children:x(wr,{})})]})]}),l&&x(Ea,{projectDatas:l})]})]}),x(Xe,{children:e&&x(vr,{className:"editItem",duration:.24,children:R("form",{onSubmit:p(y),className:"wrap",children:[x(qt,{name:"inOffice",control:h,render:({field:b})=>x("div",{children:x(ts,{...b,checked:b.value,onChange:C=>b.onChange(C.target.checked)})})}),x(qt,{name:"startYear",control:h,rules:{required:"시작년도에 값이 없음"},render:({field:b})=>x(re,{...b,type:"number",size:"small",error:!!_.startYear,InputProps:{style:{width:"90px",backgroundColor:"#fff",color:"#000"}}})}),x("div",{children:x("span",{children:"~"})}),x(qt,{name:"endYear",control:h,rules:{required:"종료년도에 값이 없음"},render:({field:b})=>x(re,{...b,type:"number",size:"small",error:!!_.endYear,InputProps:{style:{width:"90px",backgroundColor:"#fff",color:"#000"}}})}),x(qt,{name:"name",control:h,rules:{required:"회사이름에 값이 없음"},render:({field:b})=>x(re,{...b,size:"small",error:!!_.name,InputProps:{style:{backgroundColor:"#fff",color:"#000"}}})}),x(Tt,{type:"submit",variant:"contained",size:"small",sx:{backgroundColor:"#000",color:"#fff"},children:x(xr,{})}),x(Tt,{variant:"contained",size:"small",onClick:()=>i(!1),children:x(yr,{})}),o||n&&x(vi,{size:"30px"})]})},"compTransition")})]})},Ia=()=>{const{user:a}=We(),{data:t,isFetching:e}=ka(),i=I.useMemo(()=>a?.role==="ADMIN",[a]),r=I.useMemo(()=>e?"loader":"content",[e]);return x(Xe,{mode:"wait",children:x(Ln,{children:e?x(vi,{size:"50px"}):R(ve,{children:[i&&x(or,{},"compAdd"),t?.map(n=>x(or,{compData:n},n.id))]})},r)})},Fa=a=>Bn`
    display: flex;
    padding: 1.25rem 8.75rem 0 calc(50% - 60px);
    z-index: 1;

    .animationWrap {
        position: fixed !important;
        top: 1.25rem;
        left: 0;
        width: calc(50% - 60px);
        overflow: hidden;
        // flex: 1 1 50%;
        // overflow: hidden;

        > .wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 1.25rem);
            padding: 0 2em;

            > .innerWrap {
                position: relative;
                width: 560px;
                height: 560px;
                margin: 0 auto;

                > iframe {
                    width: 100%;
                }

                > .txtWrap {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                    > * {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        font-size: 16px;
                        font-weight: 400;
                    }

                    > .txt1 {
                        margin: -46% 0 0 -42%;
                    }
                    > .txt2 {
                        margin: -35.6% 0 0 -31.5%;
                    }
                    > .txt3 {
                        margin: -18% 0 0 -13.5%;
                    }
                    > .txt4 {
                        margin: 13.5% 0 0 18%;
                    }
                    > .txt5 {
                        margin: 31.7% 0 0 35.5%;
                    }
                    > .txt6 {
                        margin: 41.4% 0 0 45.6%;
                    }
                    > .main {
                        transform: translateX(-50%) translateY(-50%);
                        font-size: 48px;
                        font-weight: 700;
                        line-height: 1;

                        > div {
                            white-space: nowrap;

                            > * {
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
    }

    .listWrap {
        min-width: 500px;
        display: flex;
        flex-direction: column;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: -5rem;
            left: 0.18rem;
            width: 1px;
            height: 6.1rem;
            background-color: ${a.palette.divider};
        }

        .item {
            display: flex;
            position: relative;
            padding: 0 0 6rem 3rem;

            &:before {
                content: '';
                position: absolute;
                top: 1.5rem;
                left: 0.18rem;
                width: 1px;
                height: calc(100% - 1.6rem);
                background-color: ${a.palette.divider};
            }

            &:after {
                content: '';
                position: absolute;
                top: 0.4rem;
                left: 0;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                background-color: #fff;
            }

            > .title {
                flex: 0 0 13rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-size: 2.375rem;
                line-height: 1.4em;
                transition: all 0.24s;

                .yearFirst {
                    font-size: 1.25rem;
                    line-height: 1em;
                }
                .yearLast {
                    font-weight: 600;
                }
                .curComp {
                    padding: 8px 14px;
                    margin-top: 1rem;
                    border-radius: 100px;
                    background: rgba(0, 0, 0, 0.5);
                    font-size: 0.875rem;
                    font-weight: 200;
                    line-height: 1;
                }
            }

            > .compPrjList {
                flex: 1 1;
                transition: all 0.24s;

                > .comp {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    padding: 1.2rem 0 2.8rem;
                    font-size: 1.375rem;
                    font-weight: 600;
                    line-height: 1;

                    > .btns {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;

                        > * {
                            min-width: 0;
                            padding: 0.2rem;
                            border-radius: 50%;
                        }
                    }
                }
                > .prjList {
                    display: flex;
                    max-width: 500px;
                    flex-direction: column;
                    gap: 2rem;

                    > li {
                        position: relative;

                        > .prjItem {
                            display: flex;
                            flex-wrap: wrap;
                            padding: 1rem 2rem;
                            margin: -1rem -2rem;
                            border-radius: 3rem;
                            background: rgba(255, 255, 255, 0);
                            box-shadow: 0 0 8px rgba(0, 0, 0, 0);
                            transition: all 0.12s ease;

                            .prjName {
                                flex: 1 1;
                                font-weight: 400;
                                line-height: 1.6em;
                            }
                            .date {
                                flex: 0 0;
                                margin-left: auto;
                                color: rgba(255, 255, 255, 0.5);
                                font-weight: 200;
                            }
                            .part {
                                flex: none;
                                display: flex;
                                gap: 1em;
                                width: 100%;
                                margin-top: 0.5rem;
                                font-size: 0.75rem;
                                line-height: 1;

                                > * {
                                    padding: 4px 10px;
                                    border-radius: 100px;
                                    background: rgba(255, 255, 255, 0.1);
                                }
                            }

                            .btnEdit {
                                position: absolute;
                                top: 50%;
                                right: 0.3rem;
                                width: 30px;
                                height: 30px;
                                min-width: 0;
                                margin-top: -15px;
                                border-radius: 50%;
                                opacity: 0;
                                transition: all 0.12s ease;
                            }
                            .btnDelete {
                                position: absolute;
                                top: 50%;
                                right: -2rem;
                                width: 30px;
                                height: 30px;
                                min-width: 0;
                                margin-top: -15px;
                                border-radius: 50%;
                                opacity: 0;
                                transition: all 0.12s ease;
                            }

                            &:hover {
                                padding: 1rem 3rem;
                                margin: -1rem -3rem;
                                background: rgba(0, 0, 0, 0.4);

                                .btnEdit,
                                .btnDelete {
                                    opacity: 1;
                                }
                            }
                        }

                        > .editPrjItem {
                            position: absolute;
                            top: 50%;
                            left: -200px;
                            width: calc(100% + 245px);
                            z-index: 1;

                            > .wrap {
                                display: grid;
                                grid-template-columns: 140px 90px 1fr 40px 40px;
                                gap: 4px;
                                max-width: none;
                                height: auto;
                                padding: 1rem 1.5rem 1rem 1rem;
                                margin-top: -2.3rem;
                                border-radius: 1rem;
                                background: #ffa700;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 1);
                                text-align: center;

                                > button {
                                    padding: 0;
                                    min-width: 0;
                                }
                            }
                        }
                    }
                }
                > .noneProject {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                    font-weight: 100;
                }
            }

            .isBlur {
                filter: blur(3px);
            }

            // Edit Mode
            > .editItem {
                position: absolute;
                top: 0;
                left: 0;
                width: calc(100% - 4rem);

                .wrap {
                    display: grid;
                    grid-template-columns: 50px 90px 10px 90px 1fr 40px 40px;
                    gap: 4px;
                    padding: 1rem 1.5rem 1rem 1rem;
                    margin: -0.3rem 2rem 0;
                    border-radius: 1rem;
                    background: #ffa700;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
                    text-align: center;

                    > span {
                        align-self: center;
                        color: #000;
                    }

                    > button {
                        padding: 0;
                        min-width: 0;
                    }
                }
            }

            // 소개
            &.analyze {
                display: block;

                &:before {
                    content: '';
                    position: absolute;
                    top: 2.5rem;
                    left: 0.18rem;
                    width: 1px;
                    height: calc(100% - 2.6rem);
                    background-color: ${a.palette.divider};
                }

                &:after {
                    content: '';
                    position: absolute;
                    top: 1.5rem;
                    left: 0;
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 50%;
                    background-color: #fff;
                }

                .title {
                    margin-bottom: 3rem;
                    font-weight: 600;
                }
                .aboutInfo {
                    display: flex;
                    gap: 2rem;

                    > .img {
                        flex: 0 0 200px;
                        width: 200px;
                        height: 200px;
                        border-radius: 50%;
                        background: rgba(0, 0, 0, 0.3);
                        overflow: hidden;
                    }

                    > .info {
                        flex: 1 1;
                        align-self: center;

                        > .name {
                            font-size: 1.875rem;
                            font-weight: 700;
                        }
                        > .infos {
                            padding: 0.5rem 0 0;

                            > dl {
                                margin: 0.5rem 0;

                                dt {
                                    font-size: 0.75rem;
                                    font-weight: 100;
                                }
                                dd {
                                    padding: 0;
                                    margin: 0;
                                    font-size: 1.125rem;
                                    font-weight: 300;
                                }
                            }
                        }
                    }
                }

                // .img {
                //     height: 300px;
                // }
            }

            // 추가 모드일 경우
            &.isAddMode {
                // display: inline-flex;
                width: 0;
                padding: 3em 0 3rem;
                transition: all 0.24s;

                &:before {
                    top: 45px;
                    height: calc(100% - 48px);
                }

                &:after {
                    content: '+';
                    left: -12px;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    background: #ffa700;
                    color: #000;
                    font-size: 2rem;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;
                    transition: (background, color) 0.24s;
                }

                > .editItem {
                    margin-top: -0.5rem;
                }

                &:hover {
                    &:after {
                        background: #000;
                        color: #ffa700;
                    }
                }

                &.isEditMode {
                    width: 100%;

                    &:after {
                        background: #000;
                        color: #ffa700;
                    }
                }
            }
        }
    }

    .glow {
        text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #fff,
            0 0 20px #ff00de,
            0 0 35px #ff00de,
            0 0 40px #ff00de,
            0 0 50px #ff00de,
            0 0 75px #ff00de;
    }

    ${a.breakpoints.down("lg")} {
        // .animationWrap {
        //     flex: 1 1 40%;

        //     .innerWrap {
        //         transform: scale(0.8);
        //     }
        // }
        // .listWrap {
        //     flex: 1 1 60%;
        // }
    }

    ${a.breakpoints.down("md")} {
        padding: 1.25rem 3rem 0;

        .animationWrap {
            display: none;
        }
        .listWrap {
            flex: 1 1;
        }
    }

    ${a.breakpoints.down("sm")} {
        padding: 0;

        .listWrap {
            padding-top: 2rem;

            &:before {
                content: none;
            }

            > .item,
            > * > .item {
                display: block;
                padding: 0 10% 4rem;

                &:before,
                &:after {
                    content: none !important;
                }

                > .title {
                    justify-content: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;

                    > .yearFirst {
                        white-space: nowrap;
                        font-weight: 100;
                    }

                    > .yearLast {
                        font-size: 1.3rem;
                        font-weight: 400;
                        margin-left: 3px;
                    }

                    .curComp {
                        padding: 0.5em 1em;
                        margin-top: 0;
                        margin-left: 0.5em;
                        font-size: 11px;
                    }
                }

                > .compPrjList {
                    > .comp {
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 0.4rem 1rem;
                        padding: 0 0 2rem;
                        font-size: 2.2rem;

                        > .btns {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;

                            > * {
                                min-width: 0;
                                padding: 0.2rem;
                                border-radius: 50%;
                            }
                        }
                    }
                    > .prjList {
                        max-width: none;
                        flex-direction: column;
                        gap: 2rem;

                        > li {
                            position: relative;

                            > .prjItem {
                                position: relative;
                                flex-direction: column;
                                padding: 0;
                                margin: 0;

                                .date {
                                    margin-left: 0;
                                }
                                .part {
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 1em;
                                    font-size: 11px;
                                    font-weight: 100;
                                }

                                .btnEdit {
                                    right: 2.2rem;
                                    opacity: 1;
                                }
                                .btnDelete {
                                    right: 0;
                                    opacity: 1;
                                }

                                &:hover {
                                    padding: 0;
                                    margin: 0;
                                    background: none;
                                }
                            }

                            > .editPrjItem {
                                position: absolute;
                                top: 50%;
                                left: -200px;
                                width: calc(100% + 245px);
                                z-index: 1;

                                > .wrap {
                                    display: grid;
                                    grid-template-columns: 140px 90px 1fr 40px 40px;
                                    gap: 4px;
                                    max-width: none;
                                    height: auto;
                                    padding: 1rem 1.5rem 1rem 1rem;
                                    margin-top: -2.3rem;
                                    border-radius: 1rem;
                                    background: #ffa700;
                                    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
                                    text-align: center;

                                    > button {
                                        padding: 0;
                                        min-width: 0;
                                    }
                                }
                            }
                        }
                    }
                    > .noneProject {
                        color: rgba(255, 255, 255, 0.5);
                        font-size: 0.75rem;
                        font-weight: 100;
                    }
                }

                // 추가 모드일 경우
                &.isAddMode {
                    width: auto;
                    padding: 4rem 0;
                    margin: 0 !important;
                    transition: all 0.24s;

                    &:before {
                        top: 45px;
                        height: calc(100% - 48px);
                    }

                    &:after {
                        content: '+' !important;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        width: 1em;
                        height: 1em;
                        font-size: 4rem;
                        line-height: 1;
                    }

                    > .editItem {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        padding: 0 1rem;
                        margin-top: 0;
                        box-sizing: border-box;
                        z-index: 99999;

                        &:before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.5);
                            z-index: -1;
                        }

                        > .wrap {
                            display: flex;
                            gap: 0.5rem 0;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: auto;
                            margin: 0;

                            > div {
                                &:nth-of-type(1) {
                                    flex: none;
                                    width: 100%;
                                }
                                &:nth-of-type(2) {
                                    width: 45%;
                                    > * {
                                        width: 100% !important;
                                    }
                                }
                                &:nth-of-type(3) {
                                    width: 10%;
                                }
                                &:nth-of-type(4) {
                                    width: 45%;
                                    > * {
                                        width: 100% !important;
                                    }
                                }
                                &:nth-of-type(5) {
                                    flex: none;
                                    width: 100%;
                                }
                            }
                            > button {
                                flex: none;
                                width: 4rem;
                                height: 3rem;
                                margin-top: 1rem;

                                &:nth-of-type(1) {
                                    margin-right: 4px;
                                }
                            }
                        }
                    }

                    &:hover {
                        &:after {
                            background: #000;
                            color: #ffa700;
                        }
                    }

                    &.isEditMode {
                        width: 100%;

                        &:after {
                            background: #000;
                            color: #ffa700;
                        }
                    }
                }
            }
            > * > .item {
                &:first-of-type {
                    padding-top: 3rem;
                }
            }

            // 소개
            .analyze {
                padding-bottom: 0;

                > .title {
                    display: none;
                }

                .aboutInfo {
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    text-align: center;
                }
            }

            // 회사 관리
            .editItem {
                top: 0;
                left: 0;
                width: 100% !important;

                > .wrap {
                    display: flex !important;
                    flex-wrap: wrap;
                    gap: 0.5rem 0 !important;
                    justify-content: center !important;
                    align-items: center !important;

                    > div {
                        &:nth-of-type(1) {
                            flex: none;
                            width: 100%;
                        }
                        &:nth-of-type(2) {
                            width: 45%;
                            > * {
                                width: 100% !important;
                            }
                        }
                        &:nth-of-type(3) {
                            width: 10%;
                        }
                        &:nth-of-type(4) {
                            width: 45%;
                            > * {
                                width: 100% !important;
                            }
                        }
                        &:nth-of-type(5) {
                            flex: none;
                            width: 100%;
                        }
                    }
                    > button {
                        flex: none;
                        width: 4rem;
                        height: 3rem;
                        margin-top: 1rem;

                        &:nth-of-type(1) {
                            margin-right: 4px;
                        }
                    }
                }
            }

            // 프로젝트 관리
            .editPrjItem {
                left: 0 !important;
                width: 100% !important;

                > .wrap {
                    display: flex !important;
                    flex-wrap: wrap;
                    gap: 0.5rem 0 !important;
                    justify-content: center !important;
                    align-items: center !important;
                    transform: translateY(-30%);

                    > div {
                        &:nth-of-type(1) {
                            flex: none;
                            width: 100%;
                        }
                        &:nth-of-type(2) {
                            flex: none;
                            width: 100%;
                            > * {
                                width: 100% !important;
                            }
                        }
                        &:nth-of-type(3) {
                            flex: none;
                            width: 100%;
                        }
                    }
                    > button {
                        flex: none;
                        width: 4rem;
                        height: 3rem;
                        margin-top: 1rem;

                        &:nth-of-type(1) {
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
    }
`;Ae.registerPlugin(He);const te={opacity:0,x:-20,duration:.5,ease:"power2.out"},lr={opacity:0,y:20,stagger:.05,duration:1.6,ease:"elastic.out"},Ba=()=>{const a=I.useRef(null);return He(()=>{const t=Ae.timeline();t.from(".txtWrap > .txt1",te),t.from(".txtWrap > .txt2",te,"-=0.2"),t.from(".txtWrap > .txt3",te,"=0.2"),t.from(".txtWrap > .txt4",te,"=1.3"),t.from(".txtWrap > .txt5",te,"=0.2"),t.from(".txtWrap > .txt6",te),t.from(".txtWrap > .main > .firstLine > *",lr),t.from(".txtWrap > .main > .lastLine > *",lr,"-=1.3");const e=Ae.timeline({repeat:-1,repeatDelay:4});e.to(".txtWrap > .main > .firstLine > *",{color:"#ffa700",textShadow:"0 0 5px rgba(255, 181, 84, 0.3)",stagger:.05,duration:.4,ease:"power2.out"}),e.to(".txtWrap > .main > .firstLine > *",{color:"#fff",textShadow:"0 0 0 rgba(255, 181, 84, 0.3)",stagger:.05,duration:.4,ease:"power2.out"},"-=0.3"),e.to(".txtWrap > .main > .lastLine > *",{color:"#ffa700",textShadow:"0 0 5px rgba(255, 181, 84, 0.3)",stagger:.05,duration:.4,ease:"power2.out"},"-=0.8"),e.to(".txtWrap > .main > .lastLine > *",{color:"#fff",textShadow:"0 0 0 rgba(255, 181, 84, 0.3)",stagger:.05,duration:.4,ease:"power2.out"},"-=0.5"),t.add(e)},{scope:a}),R("div",{ref:a,className:"page",css:Fa,children:[x("div",{className:"animationWrap",children:x("div",{className:"wrap",children:R("div",{className:"innerWrap",children:[x("iframe",{src:"/guni/aboutSvgNoRepeat.svg",title:"About SVG",width:"100%",height:"100%",style:{border:"none"}}),R("div",{className:"txtWrap",children:[x("span",{className:"txt1",children:"UI Design"}),x("span",{className:"txt2",children:"MarkUp"}),x("span",{className:"txt3",children:"JS"}),x("span",{className:"txt4",children:"Vue.js"}),x("span",{className:"txt5",children:"React.js"}),x("span",{className:"txt6",children:"TS"}),R("span",{className:"main",children:[R("div",{className:"firstLine",children:[x("span",{children:"F"}),x("span",{children:"r"}),x("span",{children:"o"}),x("span",{children:"n"}),x("span",{children:"t"}),x("span",{children:"-"}),x("span",{children:"e"}),x("span",{children:"n"}),x("span",{children:"d"})]}),R("div",{className:"lastLine",children:[x("span",{children:"D"}),x("span",{children:"e"}),x("span",{children:"v"}),x("span",{children:"e"}),x("span",{children:"l"}),x("span",{children:"o"}),x("span",{children:"p"}),x("span",{children:"e"}),x("span",{children:"r"})]})]})]})]})})}),R("div",{className:"listWrap",children:[R("div",{className:"item analyze",children:[x("div",{className:"title",children:"Analyze"}),R("div",{className:"aboutInfo",children:[x("div",{className:"img"}),R("div",{className:"info",children:[x("strong",{className:"name",children:"GUNI"}),R("div",{className:"infos",children:[R("dl",{children:[x("dt",{children:"E-mail"}),x("dd",{children:"h2dlhs@gmail.com"})]}),R("dl",{children:[x("dt",{children:"Mobile"}),x("dd",{children:"010-7111-5374"})]})]})]})]})]}),x(Ia,{})]})]})};export{Ba as PageAbout};
