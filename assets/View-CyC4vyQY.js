import{g as I,e as L,$ as j,s as y,z as m,h as l,c as w,r as _,f as V,_ as F,i as h,k as U,l as W,C as A,O as E,j as c,a as s,a0 as H,J as K,u as O,Y as C,W as Q,X as G}from"./index-gxbjmqFB.js";import{b as J,c as X,D as Y}from"./scrollRestoration.store-BFU_QZ3E.js";import{M as Z}from"./MdViewer-DKg2GZeP.js";import{B as q}from"./BackButton-BGmO0wC0.js";function T(e){return I("MuiCircularProgress",e)}L("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ee=["className","color","disableShrink","size","style","thickness","value","variant"];let f=e=>e,S,$,N,z;const a=44,re=j(S||(S=f`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),se=j($||($=f`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),te=e=>{const{classes:r,variant:t,color:o,disableShrink:i}=e,n={root:["root",t,`color${m(o)}`],svg:["svg"],circle:["circle",`circle${m(t)}`,i&&"circleDisableShrink"]};return W(n,T,r)},oe=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${m(t.color)}`]]}})(({ownerState:e,theme:r})=>l({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&w(N||(N=f`
      animation: ${0} 1.4s linear infinite;
    `),re)),ae=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),ie=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${m(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>l({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&w(z||(z=f`
      animation: ${0} 1.4s ease-in-out infinite;
    `),se)),ne=_.forwardRef(function(r,t){const o=V({props:r,name:"MuiCircularProgress"}),{className:i,color:n="primary",disableShrink:p=!1,size:v=40,style:B,thickness:d=3.6,value:g=0,variant:D="indeterminate"}=o,R=F(o,ee),u=l({},o,{color:n,disableShrink:p,size:v,thickness:d,value:g,variant:D}),k=te(u),x={},P={},b={};if(D==="determinate"){const M=2*Math.PI*((a-d)/2);x.strokeDasharray=M.toFixed(3),b["aria-valuenow"]=Math.round(g),x.strokeDashoffset=`${((100-g)/100*M).toFixed(3)}px`,P.transform="rotate(-90deg)"}return h.jsx(oe,l({className:U(k.root,i),style:l({width:v,height:v},P,B),ownerState:u,ref:t,role:"progressbar"},b,R,{children:h.jsx(ae,{className:k.svg,ownerState:u,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:h.jsx(ie,{className:k.circle,style:x,ownerState:u,cx:a,cy:a,r:(a-d)/2,fill:"none",strokeWidth:d})})}))}),ce=A(h.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),le=({boardType:e})=>{const{mutate:r,isPending:t}=J(e),{isLogined:o,user:i}=E(),n=()=>{r()};return!o||i?.role!=="ADMIN"?null:c(H,{className:"btnDelete",variant:"contained",title:"삭제",color:"error",style:{position:"fixed",right:"2rem",bottom:"2rem",width:"4rem",height:"4rem"},onClick:n,disabled:t,children:[s(ce,{sx:{fontSize:"2rem"}}),t&&s(ne,{size:"3.6em",sx:{position:"absolute",color:"#fff"}})]})},de=()=>s("div",{children:"데이터 불러오는 중..."}),ue=({boardType:e})=>{const r=K(),t=O(),{data:o,isLoading:i,error:n}=X(e),p=_.useCallback(()=>t.state?.from==="write"?r("../"):r(-1),[t,r]);return n?s("div",{children:"없는 컨텐츠 입니다."}):c(C,{children:[c("div",{className:"viewWrap",children:[s(q,{onClick:p}),s(le,{boardType:e}),o?c(C,{children:[s("h2",{children:o.title}),c("div",{children:[s("span",{children:o.date}),s("span",{children:"댓글 0개"}),s("span",{children:"찜 0회"})]}),s(Z,{content:Y.sanitize(o.content||""),className:"content"})]}):s(de,{})]}),s(G,{sx:{color:"#fff",zIndex:1},open:i,children:s(Q,{color:"#000"})})]})},he=()=>s("div",{children:"코멘트 작성"}),me=()=>s("div",{children:"코멘트 목록"}),fe=()=>c("div",{children:[s(he,{}),s(me,{})]}),xe=({boardType:e})=>c(C,{children:[s(ue,{boardType:e}),s(fe,{})]});export{xe as View};
