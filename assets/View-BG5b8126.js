import{e as _,f,g as O,h as X,Z as U,s as w,C as v,k as g,c as p,r as h,i as J,_ as K,l as Q,n as Z,O as N,j as i,a as o,$ as D,J as Y,u as H,W as ee,X as L,a0 as W,a1 as te,a2 as re,a3 as oe,a4 as S,a5 as se,a6 as ne,a7 as ae,a8 as ie,a9 as ce,aa as le,N as F}from"./index-BN-XhCyz.js";import{b as de,c as me,d as he,t as ue}from"./DraftEditor-DLIJY0O6.js";import{B as fe}from"./BackButton-q1sLdaq6.js";const ge=_(f.jsx("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4z"}),"AddComment"),q=_(f.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");function pe(t){return O("MuiCircularProgress",t)}X("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const be=["className","color","disableShrink","size","style","thickness","value","variant"];let x=t=>t,R,E,j,A;const d=44,ve=U(R||(R=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),xe=U(E||(E=x`
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
`)),ye=t=>{const{classes:e,variant:r,color:s,disableShrink:n}=t,a={root:["root",r,`color${v(s)}`],svg:["svg"],circle:["circle",`circle${v(r)}`,n&&"circleDisableShrink"]};return Z(a,pe,e)},Ce=w("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`color${v(r.color)}`]]}})(({ownerState:t,theme:e})=>g({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&p(j||(j=x`
      animation: ${0} 1.4s linear infinite;
    `),ve)),ke=w("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),we=w("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.circle,e[`circle${v(r.variant)}`],r.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>g({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&p(A||(A=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),xe)),Ne=h.forwardRef(function(e,r){const s=J({props:e,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:c=!1,size:m=40,style:l,thickness:u=3.6,value:y=0,variant:$="indeterminate"}=s,G=K(s,be),b=g({},s,{color:a,disableShrink:c,size:m,thickness:u,value:y,variant:$}),C=ye(b),k={},M={},P={};if($==="determinate"){const z=2*Math.PI*((d-u)/2);k.strokeDasharray=z.toFixed(3),P["aria-valuenow"]=Math.round(y),k.strokeDashoffset=`${((100-y)/100*z).toFixed(3)}px`,M.transform="rotate(-90deg)"}return f.jsx(Ce,g({className:Q(C.root,n),style:g({width:m,height:m},M,l),ownerState:b,ref:r,role:"progressbar"},P,G,{children:f.jsx(ke,{className:C.svg,ownerState:b,viewBox:`${d/2} ${d/2} ${d} ${d}`,children:f.jsx(we,{className:C.circle,style:k,ownerState:b,cx:d,cy:d,r:(d-u)/2,fill:"none",strokeWidth:u})})}))}),De=({boardType:t})=>{const{mutate:e,isPending:r}=de(t),{isLogined:s,user:n}=N(),a=()=>{e()};return!s||n?.role!=="ADMIN"?null:i(D,{className:"btnDelete",variant:"contained",title:"삭제",color:"error",style:{position:"fixed",right:"2rem",bottom:"2rem",width:"4rem",height:"4rem"},onClick:a,disabled:r,children:[o(q,{sx:{fontSize:"2rem"}}),r&&o(Ne,{size:"3.6em",sx:{position:"absolute",color:"#fff"}})]})},Se=()=>o("div",{children:"데이터 불러오는 중..."}),$e=({boardType:t})=>{const e=Y(),r=H(),{data:s,isLoading:n,error:a}=me(t),c=h.useCallback(()=>r.state?.from==="write"?e("../"):e(-1),[r,e]),{loaderOn:m,loaderOff:l}=h.useContext(ee);return h.useEffect(()=>{n?m():l()},[n]),a?o("div",{children:"없는 컨텐츠 입니다."}):i("div",{className:"viewWrap",children:[o(fe,{onClick:c}),o(De,{boardType:t}),s?i(L,{children:[o("h2",{children:s.title}),i("div",{className:"infos",children:[o("span",{children:s.date}),o("span",{children:"2개의 댓글"}),o("span",{children:"찜: 26"})]}),o(he,{initialContent:s.content||""})]}):o(Se,{})]})},Me=async(t,e)=>{try{const r=W(S,"TECH",t,"comments");await se(r,{...e,date:ne.now()})}catch(r){throw console.error("Error adding comment: ",r),r}},Pe=(t,e)=>{if(!t)return null;const r=W(S,"TECH",t,"comments"),s=te(r,re("date","desc"));return oe(s,n=>{const a=n.docs.map(c=>({id:c.id,...c.data()}));e(a)})},ze=async(t,e)=>{try{const r=ae(S,"TECH",t,"comments",e);await ie(r)}catch(r){throw console.error("Error deleting comment: ",r),r}},I=()=>p`
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
`,Re=({postId:t})=>{const{user:e}=N(),{register:r,handleSubmit:s,formState:{isValid:n,isDirty:a},reset:c}=ce({mode:"onChange"}),m=async({comment:l})=>{if(!(!l.trim()?.length||!t||!e))try{await Me(t,{content:l,authorId:e.email,authorName:e.uid==="5kkx7cnfEgShNerb5jJYbLVyoq52"?"ADMIN":(e.uid==="NhrgwBaxxReUSXtWhnBIv0mfvqz2"?"GUEST":e.name)||"-"}),c()}catch(u){console.error("Failed to add comment:",u)}};return e?i("form",{onSubmit:s(m),css:[I],children:[o(le,{id:"comment",className:"commentTa",label:"댓글작성",register:r,multiline:!0,fullWidth:!0,rows:2,rules:{validate:l=>l?.trim().length>0||"공백 불가."}}),o(D,{variant:"contained",type:"submit",disabled:!n||!a,children:o(ge,{})})]}):o("div",{className:"notUser",css:[I],children:"로그인 후 댓을을 작성할 수 있습니다."})},B=()=>F.find(t=>t.path===`/${window.location.pathname.split("/")[2]}`)?.color??"#ffffff",T=()=>p`
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
                        border-color: ${B()} !important;
                        color: ${B()} !important;
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
                font-weight: 200;
                line-height: 1.8em;
                word-break: keep-all;
            }

            > .btns {
                margin-left: auto;
                display: flex;
                gap: 4px;
                align-items: center;

                > * {
                    width: 1.5rem;
                    height: 1.5rem;
                    min-width: 0;
                    padding: 0;
                }
            }
        }
    }

    &.noData {
        padding: 4rem;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1em;
        font-weight: 100;
        text-align: center;
    }
`,V=F.map(t=>t.color),Ee=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},je=t=>{if(t==="GUEST")return"rgba(255,255,255,0.4)";const e=V[Math.floor(Math.random()*V.length)],r=Ee(e);return r?`rgba(${r.r}, ${r.g}, ${r.b}, 1)`:"rgba(0, 0, 0, 1)"},Ae=({postId:t,data:e})=>{const{user:r}=N(),s=h.useMemo(()=>r?.email===e.authorId,[r]),n=async()=>{console.log("삭제  >>  ",e.id),ze(t,e.id)};return i("div",{className:"comment",children:[i("div",{className:"iconWrap",children:[o("span",{className:`icon ${e.authorId==="h2dlhs@nate.com"&&"isAdmin"}`,style:{color:je(e.authorName),borderColor:`${e.authorName==="ADMIN"&&"#fff"}`},children:e.authorName}),o("span",{className:"date",children:ue(e.date)})]}),o("div",{className:"content",children:e.content}),s&&o("div",{className:"btns",children:o(D,{className:"btnDelete",variant:"contained",title:"삭제",color:"error",onClick:n,children:o(q,{sx:{fontSize:"1rem"}})})})]})},Ie=({postId:t})=>{const[e,r]=h.useState([]);return console.log(e),h.useEffect(()=>{Pe(t,r)},[t]),!e||!e.length?o("div",{className:"noData",css:[T],children:"등록된 댓글이 없습니다."}):o("ul",{css:[T],children:e.map(s=>o("li",{className:"comment",children:o(Ae,{postId:t,data:s})},s.id))})},Be=()=>p`
    position: relative;
    padding: 3rem 2rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: calc(100vw - 25px);
        height: 100%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.3);
    }
`,Te=()=>{const e=H().pathname.split("seq=")[1];return i("div",{css:Be,children:[o(Re,{postId:e}),o(Ie,{postId:e})]})},He=({boardType:t})=>i(L,{children:[o($e,{boardType:t}),o(Te,{})]});export{He as View};
