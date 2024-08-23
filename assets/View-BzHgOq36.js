import{e as E,f,g as O,h as J,Z as B,s as N,C as b,k as g,c as v,r as h,i as K,_ as Q,l as Z,n as G,O as D,j as i,a as s,$ as L,J as X,u as F,W as Y,X as H,a0 as T,a1 as ee,a2 as te,a3 as re,a4 as W,a5 as se,a6 as oe,a7 as ne,a8 as ae,N as U}from"./index-Dv5VmVNw.js";import{b as ie,c as ce,D as le,t as de}from"./scrollRestoration.store-CDbNPUD3.js";import{M as me}from"./MdViewer-B5NebxGn.js";import{B as he}from"./BackButton-BqlUeFHE.js";const ue=E(f.jsx("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4z"}),"AddComment"),fe=E(f.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");function ge(e){return O("MuiCircularProgress",e)}J("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const pe=["className","color","disableShrink","size","style","thickness","value","variant"];let x=e=>e,P,z,A,I;const d=44,be=B(P||(P=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ve=B(z||(z=x`
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
`)),xe=e=>{const{classes:t,variant:r,color:o,disableShrink:n}=e,a={root:["root",r,`color${b(o)}`],svg:["svg"],circle:["circle",`circle${b(r)}`,n&&"circleDisableShrink"]};return G(a,ge,t)},ye=N("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${b(r.color)}`]]}})(({ownerState:e,theme:t})=>g({display:"inline-block"},e.variant==="determinate"&&{transition:t.transitions.create("transform")},e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&v(A||(A=x`
      animation: ${0} 1.4s linear infinite;
    `),be)),Ce=N("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),ke=N("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${b(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>g({stroke:"currentColor"},e.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&v(I||(I=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ve)),Ne=h.forwardRef(function(t,r){const o=K({props:t,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:c=!1,size:m=40,style:l,thickness:u=3.6,value:y=0,variant:w="indeterminate"}=o,q=Q(o,pe),p=g({},o,{color:a,disableShrink:c,size:m,thickness:u,value:y,variant:w}),C=xe(p),k={},M={},$={};if(w==="determinate"){const S=2*Math.PI*((d-u)/2);k.strokeDasharray=S.toFixed(3),$["aria-valuenow"]=Math.round(y),k.strokeDashoffset=`${((100-y)/100*S).toFixed(3)}px`,M.transform="rotate(-90deg)"}return f.jsx(ye,g({className:Z(C.root,n),style:g({width:m,height:m},M,l),ownerState:p,ref:r,role:"progressbar"},$,q,{children:f.jsx(Ce,{className:C.svg,ownerState:p,viewBox:`${d/2} ${d/2} ${d} ${d}`,children:f.jsx(ke,{className:C.circle,style:k,ownerState:p,cx:d,cy:d,r:(d-u)/2,fill:"none",strokeWidth:u})})}))}),De=({boardType:e})=>{const{mutate:t,isPending:r}=ie(e),{isLogined:o,user:n}=D(),a=()=>{t()};return!o||n?.role!=="ADMIN"?null:i(L,{className:"btnDelete",variant:"contained",title:"삭제",color:"error",style:{position:"fixed",right:"2rem",bottom:"2rem",width:"4rem",height:"4rem"},onClick:a,disabled:r,children:[s(fe,{sx:{fontSize:"2rem"}}),r&&s(Ne,{size:"3.6em",sx:{position:"absolute",color:"#fff"}})]})},we=()=>s("div",{children:"데이터 불러오는 중..."}),Me=({boardType:e})=>{const t=X(),r=F(),{data:o,isLoading:n,error:a}=ce(e),c=h.useCallback(()=>r.state?.from==="write"?t("../"):t(-1),[r,t]),{loaderOn:m,loaderOff:l}=h.useContext(Y);return h.useEffect(()=>{n?m():l()},[n]),a?s("div",{children:"없는 컨텐츠 입니다."}):i("div",{className:"viewWrap",children:[s(he,{onClick:c}),s(De,{boardType:e}),o?i(H,{children:[s("h2",{children:o.title}),i("div",{className:"infos",children:[s("span",{children:o.date}),s("span",{children:"2개의 댓글"}),s("span",{children:"찜: 26"})]}),s(me,{content:le.sanitize(o.content||""),className:"content"})]}):s(we,{})]})},$e=async(e,t)=>{try{const r=T(W,"TECH",e,"comments");await se(r,{...t,date:oe.now()})}catch(r){throw console.error("Error adding comment: ",r),r}},Se=(e,t)=>{if(!e)return null;const r=T(W,"TECH",e,"comments"),o=ee(r,te("date","desc"));return re(o,n=>{const a=n.docs.map(c=>({id:c.id,...c.data()}));t(a)})},j=()=>v`
    display: flex;

    .commentTa {
        background: rgba(255, 255, 255, 0.03);
        fieldset {
            border: none;
        }
    }

    &.notUser {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        background: rgba(255, 255, 255, 0.03);
        color: #999;
        font-size: 0.9em;
        font-weight: 300;
    }
`,Pe=({postId:e})=>{const{user:t}=D(),{register:r,handleSubmit:o,formState:{isValid:n,isDirty:a},reset:c}=ne({mode:"onChange"}),m=async({comment:l})=>{if(!(!l.trim().length||!e||!t))try{await $e(e,{content:l,authorId:t.email,authorName:t.uid==="5kkx7cnfEgShNerb5jJYbLVyoq52"?"ADMIN":t.name||"-"}),c()}catch(u){console.error("Failed to add comment:",u)}};return t?i("form",{onSubmit:o(m),css:[j],children:[s(ae,{id:"comment",className:"commentTa",label:"댓글작성",register:r,multiline:!0,fullWidth:!0,rows:2,rules:{validate:l=>l.trim().length>0||"공백 불가."}}),s(L,{variant:"contained",type:"submit",disabled:!n||!a,children:s(ue,{})})]}):s("div",{className:"notUser",css:[j],children:"로그인 후 댓을을 작성할 수 있습니다."})},R=()=>U.find(e=>e.path===`/${window.location.pathname.split("/")[2]}`)?.color??"#ffffff",V=()=>v`
    padding: 1em 0;

    > li {
        &:not(:last-child) {
            border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
        }

        .comment {
            display: flex;
            gap: 1em;
            padding: 1em;

            > .iconWrap {
                flex: 0 0;
                align-content: center;
                display: flex;
                flex-direction: column;
                gap: 0.5em;
                align-items: center;

                > .icon {
                    display: block;
                    width: 90px;
                    padding: 0.3em 0.8em;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 100px;
                    background: rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 0.75em;
                    font-weight: 300;
                    text-align: center;
                    text-overflow: ellipsis;

                    &.isAdmin {
                        border-color: ${R()} !important;
                        color: ${R()} !important;
                        font-weight: 800;
                        opacity: 0.7;
                    }
                }

                > .date {
                    display: block;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 12px;
                    font-weight: 100;
                }
            }

            > .content {
                align-content: center;
                font-size: 0.9rem;
                font-weight: 100;
            }

            > .btns {
                align-content: center;
                margin-left: auto;
            }
        }
    }

    &.noData {
        padding: 3em;
        color: rgba(255, 255, 255, 0.3);
        font-size: 1.2;
        font-weight: 100;
        text-align: center;
    }
`,_=U.map(e=>e.color),ze=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},Ae=e=>{if(e==="ADMIN")return"#fff";const t=_[Math.floor(Math.random()*_.length)],r=ze(t);return r?`rgba(${r.r}, ${r.g}, ${r.b}, 1)`:"rgba(0, 0, 0, 1)"},Ie=({data:e})=>{const{user:t}=D(),r=h.useMemo(()=>t?.email===e.authorId,[t]);return console.log(e,t?.role!=="ADMIN"),i("div",{className:"comment",children:[i("div",{className:"iconWrap",children:[s("span",{className:`icon ${e.authorId==="h2dlhs@nate.com"&&"isAdmin"}`,style:{color:Ae(e.authorName),borderColor:`${e.authorName==="ADMIN"&&"#fff"}`},children:e.authorName}),s("span",{className:"date",children:de(e.date)})]}),s("div",{className:"content",children:e.content}),r&&s("div",{className:"btns",children:"가능"})]})},je=({postId:e})=>{const[t,r]=h.useState([]);return console.log(t),h.useEffect(()=>{Se(e,r)},[e]),!t||!t.length?s("div",{className:"noData",css:[V],children:"등록된 댓글이 없습니다."}):s("ul",{css:[V],children:t.map(o=>s("li",{className:"comment",children:s(Ie,{data:o})},o.id))})},Re=()=>{const t=F().pathname.split("seq=")[1];return i("div",{children:[s(Pe,{postId:t}),s(je,{postId:t})]})},Le=({boardType:e})=>i(H,{children:[s(Me,{boardType:e}),s(Re,{})]});export{Le as View};
