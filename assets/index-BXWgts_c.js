import{b as w4,d as b,g as t4,e as C4,s as v,B as x4,_ as w,r as b4,f as d,h as i4,u as H4,i as V4,k as a4,l as V,n as r4,o as G,p as y4,q as E4,t as v4,a as e,m as k4,v as j,w as I4,x as z4,y as J,z as x,A as n4,C as F,D as l4,E as o4,F as S4,G as k,H as I,I as s4,j as l,J as H,T as E,K as M,L as d4,M as c4,O as Q,P as Y,Q as A,R as p4,S as O,U as A4,V as N4,c as P4}from"./index-DADlZQoK.js";import{E as $4}from"./easeing-BSniFuba.js";const h4=w4(b.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");function j4(t){return t4("PrivateSwitchBase",t)}C4("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const F4=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y4=t=>{const{classes:C,checked:i,disabled:a,edge:r}=t,c={root:["root",i&&"checked",a&&"disabled",r&&`edge${V(r)}`],input:["input"]};return r4(c,j4,C)},O4=v(x4)(({ownerState:t})=>w({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),R4=v("input",{shouldForwardProp:b4})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),B4=d.forwardRef(function(C,i){const{autoFocus:a,checked:r,checkedIcon:c,className:f,defaultChecked:h,disabled:m,disableFocusRipple:n=!1,edge:p=!1,icon:u,id:o,inputProps:R,inputRef:z,name:B,onBlur:N,onChange:P,onFocus:$,readOnly:q,required:T=!1,tabIndex:U,type:y,value:s}=C,_=i4(C,F4),[W,m4]=H4({controlled:r,default:!!h,name:"SwitchBase",state:"checked"}),Z=V4(),u4=g=>{$&&$(g),Z&&Z.onFocus&&Z.onFocus(g)},g4=g=>{N&&N(g),Z&&Z.onBlur&&Z.onBlur(g)},M4=g=>{if(g.nativeEvent.defaultPrevented)return;const X=g.target.checked;m4(X),P&&P(g,X)};let S=m;Z&&typeof S>"u"&&(S=Z.disabled);const Z4=y==="checkbox"||y==="radio",D=w({},C,{checked:W,disabled:S,disableFocusRipple:n,edge:p}),K=Y4(D);return b.jsxs(O4,w({component:"span",className:a4(K.root,f),centerRipple:!0,focusRipple:!n,disabled:S,tabIndex:null,role:void 0,onFocus:u4,onBlur:g4,ownerState:D,ref:i},_,{children:[b.jsx(R4,w({autoFocus:a,checked:r,defaultChecked:h,className:K.input,disabled:S,id:Z4?o:void 0,name:B,onChange:M4,readOnly:q,ref:z,required:T,ownerState:D,tabIndex:U,type:y},y==="checkbox"&&s===void 0?{}:{value:s},R)),W?c:u]}))});function q4(t){return t4("MuiSwitch",t)}const L=C4("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),T4=["className","color","edge","size","sx"],U4=t=>{const{classes:C,edge:i,size:a,color:r,checked:c,disabled:f}=t,h={root:["root",i&&`edge${V(i)}`,`size${V(a)}`],switchBase:["switchBase",`color${V(r)}`,c&&"checked",f&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},m=r4(h,q4,C);return w({},C,m)},_4=v("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,C)=>{const{ownerState:i}=t;return[C.root,i.edge&&C[`edge${V(i.edge)}`],C[`size${V(i.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${L.thumb}`]:{width:16,height:16},[`& .${L.switchBase}`]:{padding:4,[`&.${L.checked}`]:{transform:"translateX(16px)"}}}}]}),D4=v(B4,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,C)=>{const{ownerState:i}=t;return[C.switchBase,{[`& .${L.input}`]:C.input},i.color!=="default"&&C[`color${V(i.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${L.checked}`]:{transform:"translateX(20px)"},[`&.${L.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${L.checked} + .${L.track}`]:{opacity:.5},[`&.${L.disabled} + .${L.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${L.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:G(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,C])=>C.main&&C.light).map(([C])=>({props:{color:C},style:{[`&.${L.checked}`]:{color:(t.vars||t).palette[C].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[C].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:G(t.palette[C].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${L.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${C}DisabledColor`]:`${t.palette.mode==="light"?y4(t.palette[C].main,.62):E4(t.palette[C].main,.55)}`}},[`&.${L.checked} + .${L.track}`]:{backgroundColor:(t.vars||t).palette[C].main}}}))]})),Q4=v("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,C)=>C.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),W4=v("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,C)=>C.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),K4=d.forwardRef(function(C,i){const a=v4({props:C,name:"MuiSwitch"}),{className:r,color:c="primary",edge:f=!1,size:h="medium",sx:m}=a,n=i4(a,T4),p=w({},a,{color:c,edge:f,size:h}),u=U4(p),o=b.jsx(W4,{className:u.thumb,ownerState:p});return b.jsxs(_4,{className:a4(u.root,r),sx:m,ownerState:p,children:[b.jsx(D4,w({type:"checkbox",icon:o,checkedIcon:o,ref:i,ownerState:p},n,{classes:w({},u,{root:u.switchBase})})),b.jsx(Q4,{className:u.track,ownerState:p})]})}),X4={init:{opacity:0,scale:.95},ani:{opacity:1,scale:1},exit:{opacity:0,scale:1.05}},L4=({children:t,className:C,duration:i=.8})=>e(k4.div,{className:C,variants:X4,initial:"init",animate:"ani",exit:"exit",transition:{duration:i,ease:$4.EASE_IN_OUT_EXPO},children:t}),G4=async()=>{const t=j(x,"HISTORY"),C=I4(t,z4("endYear","desc")),i=await J(C);return await Promise.all(i.docs.map(async r=>{const c=j(x,"HISTORY",r.id,"projects"),f=await J(c);return{id:r.id,...r.data(),projects:f.docs.map(h=>({id:h.id,...h.data()}))}}))},J4=async t=>{const C=j(x,"HISTORY");return await n4(C,t)},e2=async t=>{if(t.id===void 0)throw new Error("id is required");const C=F(x,"HISTORY",t.id);return await l4(C,{name:t.name,startYear:t.startYear,endYear:t.endYear,inOffice:t.inOffice})},t2=async t=>{if(t.id===void 0)throw new Error("id is required");const C=F(x,"HISTORY",t.id);return await o4(C)},C2=async t=>{const C=j(x,`HISTORY/${t.compId}/projects`);return await n4(C,t)},i2=async t=>{if(t.id===void 0)throw new Error("id is required");const C=F(x,`HISTORY/${t.compId}/projects`,t.id);return await l4(C,{name:t.name,date:t.date,part:t.part})},a2=async t=>{if(t.id===void 0)throw new Error("id is required");const C=F(x,`HISTORY/${t.compId}/projects`,t.id);return await o4(C)},r2=()=>S4({queryKey:["compList"],queryFn:async()=>await G4()}),n2=()=>{const t=k();return I({mutationFn:async({docData:C})=>{const i=await J4(C);return t.invalidateQueries({queryKey:["compList"]}),i}})},l2=()=>{const t=k();return I({mutationFn:async({docData:C})=>{const i=await e2(C);return t.invalidateQueries({queryKey:["compList"]}),i}})},o2=()=>{const t=k();return I({mutationFn:async({docData:C})=>{const i=await t2(C);return t.invalidateQueries({queryKey:["compList"]}),i}})},s2=()=>{const t=k();return I({mutationFn:async({docData:C})=>{const i=await C2(C);return t.invalidateQueries({queryKey:["compList"]}),i}})},d2=()=>{const t=k();return I({mutationFn:async({docData:C})=>{const i=await i2(C);return t.invalidateQueries({queryKey:["compList"]}),i}})},c2=()=>{const t=k();return I({mutationFn:async({docData:C})=>{const i=await a2(C);return t.invalidateQueries({queryKey:["compList"]}),i}})},f4=({setOpen:t,isAddMode:C=!1,addModeCompId:i,projectData:a})=>{const{mutateAsync:r,isPending:c}=s2(),{mutateAsync:f,isPending:h}=d2(),{control:m,handleSubmit:n,formState:{errors:p}}=s4({defaultValues:{name:a?.name||"",date:a?.date||"",part:a?.part||""}}),u=d.useCallback(async o=>{C?await r({docData:{compId:i||"",name:o.name,date:o.date,part:o.part}}):await f({docData:{compId:a?.compId||"",id:a?.id,name:o.name,date:o.date,part:o.part}}),t(!1)},[]);return e(L4,{className:"editPrjItem",duration:.24,children:l("form",{onSubmit:n(u),className:"wrap",children:[e(H,{name:"name",control:m,rules:{required:"프로젝트명이 없음"},render:({field:o})=>e(E,{...o,size:"small",error:!!p.name,placeholder:"프로젝트명",InputProps:{style:{backgroundColor:"#fff",color:"#000"}}})}),e(H,{name:"date",control:m,rules:{required:"프로젝트 시작일이 없음"},render:({field:o})=>e(E,{...o,size:"small",error:!!p.date,placeholder:"프로젝트 시작년월",InputProps:{style:{width:"90px",backgroundColor:"#fff",color:"#000"}}})}),e(H,{name:"part",control:m,rules:{required:"작업 파트가 없음"},render:({field:o})=>e(E,{...o,size:"small",error:!!p.part,placeholder:"작업파트",InputProps:{style:{backgroundColor:"#fff",color:"#000"}}})}),e(M,{type:"submit",variant:"contained",size:"small",sx:{backgroundColor:"#000",color:"#fff"},children:e(d4,{})}),e(M,{variant:"contained",size:"small",onClick:()=>t(!1),children:e(c4,{})}),h||c&&e(Q,{size:"30px"})]})},"compTransition")},p2=({projectData:t})=>{const{user:C}=Y(),i=d.useMemo(()=>C?.role?.toUpperCase()==="ADMIN",[C]),[a,r]=d.useState(!1),{mutateAsync:c}=c2(),f=async()=>{await c({docData:t})};return t?l(A,{children:[l("div",{className:"prjItem",children:[e("strong",{className:"prjName",children:t?.name}),e("span",{className:"date",children:t?.date||"-"}),t?.part&&e("div",{className:"part",children:t?.part?.split(",").map(h=>e("span",{children:h},h))}),i&&l(A,{children:[e(M,{className:"btnEdit",variant:"contained",size:"small",onClick:()=>r(!0),title:"프로젝트 수정",children:e(h4,{})}),e(M,{className:"btnDelete",variant:"contained",size:"small",color:"error",onClick:f,title:"프로젝트 삭제",children:e(p4,{})})]})]}),e(O,{children:a&&e(f4,{setOpen:r,projectData:t})})]}):null},h2=({compId:t})=>{const[C,i]=d.useState(!1);return l(A,{children:[e(M,{variant:"contained",fullWidth:!0,size:"small",onClick:()=>i(!0),title:"프로젝트 추가",sx:{minWidth:0,padding:"0.2rem",borderRadius:"10rem",backgroundColor:"#ffa700",color:"#000","&:hover":{backgroundColor:"#000",color:"#ffa700"}},children:e(A4,{})}),e(O,{children:C&&e(f4,{setOpen:i,isAddMode:!0,addModeCompId:t})})]})},L2=t=>t.projects?.sort((C,i)=>{if(!C.date||!i.date)return 0;const a=new Date(parseInt(C.date.split(".")[0],10),parseInt(C.date.split(".")[1],10)-1||0),r=new Date(parseInt(i.date.split(".")[0],10),parseInt(i.date.split(".")[1],10)-1||0);return a>r?-1:1}),f2=({projectDatas:t})=>{const{user:C}=Y(),i=d.useMemo(()=>C?.role?.toUpperCase()==="ADMIN",[C]),a=d.useMemo(()=>L2(t),[t]);return a?l("ul",{className:"prjList",children:[i&&e("li",{children:e(h2,{compId:t.id||""})},"projectAdd"),a?.map(r=>e("li",{children:e(p2,{projectData:{...r,compId:t.id||""}})},r.id))]}):null},e4=({compData:t})=>{const{user:C}=Y(),[i,a]=d.useState(!1),{mutateAsync:r,isPending:c}=n2(),{mutateAsync:f,isPending:h}=l2(),{mutateAsync:m}=o2(),n=t||{inOffice:!1,startYear:"",endYear:"",name:"",projects:[]},p=d.useMemo(()=>n.id===void 0,[n.id]),u=d.useMemo(()=>C?.role?.toUpperCase()==="ADMIN",[C]),{control:o,handleSubmit:R,formState:{errors:z},reset:B}=s4({defaultValues:{inOffice:n.inOffice,startYear:n.startYear,endYear:n.endYear,name:n.name}}),N=d.useCallback(()=>{a(!0)},[]);d.useEffect(()=>{i||B()},[i]);const P=d.useCallback(async s=>{p?await r({docData:{name:s.name,startYear:s.startYear,endYear:s.endYear,inOffice:s.inOffice}}):await f({docData:{id:n.id,name:s.name,startYear:s.startYear,endYear:s.endYear,inOffice:s.inOffice}}),a(!1)},[]),$=()=>{p&&!i&&a(!0)},q=async()=>{await m({docData:{id:n.id,name:n.name,startYear:n.startYear,endYear:n.endYear,inOffice:n.inOffice}})},T=d.useMemo(()=>`item ${p?"isAddMode":""} ${i?"isEditMode":""}`,[p,i]),U=d.useMemo(()=>`title ${i?"isBlur":""}`,[i]),y=d.useMemo(()=>n.inOffice?"Present":n.endYear,[n]);return l("div",{className:T,onClick:()=>$(),children:[!p&&l(A,{children:[l("div",{className:U,children:[l("span",{className:"yearFirst",children:[n.startYear," -"]}),e("strong",{className:"yearLast",children:y}),n.inOffice&&e("span",{className:"curComp",children:"재직중"})]}),l("div",{className:`compPrjList ${i?"isBlur":""}`,children:[l("div",{className:"comp",children:[n.name,u&&l("div",{className:"btns",children:[e(M,{variant:"contained",color:"primary",size:"small",title:"수정",onClick:N,children:e(h4,{})}),e(M,{variant:"contained",color:"error",size:"small",title:"삭제",onClick:q,children:e(p4,{})})]})]}),n&&e(f2,{projectDatas:n})]})]}),e(O,{children:i&&e(L4,{className:"editItem",duration:.24,children:l("form",{onSubmit:R(P),className:"wrap",children:[e(H,{name:"inOffice",control:o,render:({field:s})=>e("div",{children:e(K4,{...s,checked:s.value,onChange:_=>s.onChange(_.target.checked)})})}),e(H,{name:"startYear",control:o,rules:{required:"시작년도에 값이 없음"},render:({field:s})=>e(E,{...s,type:"number",size:"small",error:!!z.startYear,InputProps:{style:{width:"90px",backgroundColor:"#fff",color:"#000"}}})}),e("div",{children:e("span",{children:"~"})}),e(H,{name:"endYear",control:o,rules:{required:"종료년도에 값이 없음"},render:({field:s})=>e(E,{...s,type:"number",size:"small",error:!!z.endYear,InputProps:{style:{width:"90px",backgroundColor:"#fff",color:"#000"}}})}),e(H,{name:"name",control:o,rules:{required:"회사이름에 값이 없음"},render:({field:s})=>e(E,{...s,size:"small",error:!!z.name,InputProps:{style:{backgroundColor:"#fff",color:"#000"}}})}),e(M,{type:"submit",variant:"contained",size:"small",sx:{backgroundColor:"#000",color:"#fff"},children:e(d4,{})}),e(M,{variant:"contained",size:"small",onClick:()=>a(!1),children:e(c4,{})}),h||c&&e(Q,{size:"30px"})]})},"compTransition")})]})},m2=()=>{const{user:t}=Y(),{data:C,isFetching:i}=r2(),a=d.useMemo(()=>t?.role==="ADMIN",[t]),r=d.useMemo(()=>i?"loader":"content",[i]);return e(O,{mode:"wait",children:e(N4,{children:i?e(Q,{size:"50px"}):l(A,{children:[a&&e(e4,{},"compAdd"),C?.map(c=>e(e4,{compData:c},c.id))]})},r)})},u2=t=>P4`
    display: flex;
    padding: 1.25rem 8.75rem 0 0;
    z-index: 1;

    .animationWrap {
        flex: 1 1 50%;

        > .wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            position: sticky;
            top: 1.25rem;
            height: calc(100vh - 1.25rem);
            max-width: none;
            min-height: 600px;
            padding: 0 1rem;

            > svg {
                max-width: 560px;
                max-height: 560px;
                min-width: 400px;
                min-height: 400px;
                width: 100%;
            }
        }
    }

    .listWrap {
        flex: 1 1 50%;
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
            background-color: ${t.palette.divider};
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
                background-color: ${t.palette.divider};
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
                    background-color: ${t.palette.divider};
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

    ${t.breakpoints.down("lg")} {
        .animationWrap {
            position: relative;
            // flex: 1 1;
            overflow: hidden;

            > .wrap {
                position: absolute;
                top: 50vh;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                width: 400px;
                height: 400px;
            }
        }
    }

    ${t.breakpoints.down("md")} {
        padding: 1.25rem 3rem 0;

        .animationWrap {
            display: none;
        }
        .listWrap {
            flex: 1 1;
        }
    }

    ${t.breakpoints.down("sm")} {
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
`,Z2=()=>l("div",{className:"page",css:u2,children:[e("div",{className:"animationWrap",children:e("div",{className:"wrap",children:l("svg",{width:"560",height:"560",viewBox:"0 0 560 560",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("g",{clipPath:"url(#clip0_419_999)",children:[e("path",{d:"M52.7466 15.7141L55.1907 19.4246C57.0515 18.197 58.9512 17.0305 60.8342 15.9529L58.629 12.098C56.6682 13.2201 54.6908 14.4365 52.7522 15.7085L52.7466 15.7141Z",fill:"#49361E"}),e("path",{d:"M77.648 3.79938L78.9089 8.05977C81.0585 7.42099 83.1915 6.90997 85.2523 6.53225L84.4524 2.16077C82.2417 2.56625 79.9532 3.11616 77.648 3.79382V3.79938Z",fill:"#49361E"}),e("path",{d:"M111.076 57.4853L115.069 59.4349C116.103 57.3242 117.047 55.1912 117.875 53.0971L113.747 51.4585C112.959 53.447 112.059 55.4745 111.076 57.4853Z",fill:"#49361E"}),e("path",{d:"M91.4623 1.34428L91.6734 5.78242C93.8953 5.67689 96.0393 5.75465 98.039 6.00461L98.5945 1.59424C96.3393 1.31096 93.9397 1.22208 91.4623 1.33873V1.34428Z",fill:"#49361E"}),e("path",{d:"M112.137 6.76552C110.198 5.33243 108.015 4.16041 105.643 3.28833L104.105 7.45429C106.082 8.18195 107.893 9.15401 109.493 10.3371L112.137 6.76552Z",fill:"#49361E"}),e("path",{d:"M120.791 18.5414C119.93 16.1641 118.774 13.97 117.358 12.0259L113.764 14.6421C114.936 16.2474 115.892 18.0693 116.608 20.0523L120.785 18.5414H120.791Z",fill:"#49361E"}),e("path",{d:"M115.908 45.2595L120.169 46.5315C120.852 44.2318 121.413 41.9433 121.824 39.7326L117.452 38.9216C117.069 40.9768 116.553 43.1098 115.908 45.2595Z",fill:"#49361E"}),e("path",{d:"M122.44 25.5959L118.03 26.1347C118.197 27.5012 118.28 28.9398 118.28 30.4118C118.28 31.095 118.263 31.8005 118.224 32.5003L122.663 32.7281C122.702 31.9504 122.724 31.1728 122.724 30.4118C122.724 28.7621 122.629 27.1401 122.44 25.5959Z",fill:"#49361E"}),e("path",{d:"M64.7335 8.87076L66.6776 12.8701C68.694 11.8925 70.7214 10.9982 72.7099 10.2094L71.0769 6.07678C68.9828 6.90442 66.8498 7.84315 64.7335 8.87076Z",fill:"#49361E"}),e("path",{d:"M104.493 68.9668L107.687 71.072C108.265 70.5554 108.843 70.0333 109.42 69.5223C110.254 68.2003 111.065 66.8671 111.826 65.5451L107.971 63.3289C106.893 65.2119 105.721 67.106 104.493 68.9668Z",fill:"#49361E"}),e("path",{d:"M490.206 455.578C492.084 454.322 494 453.128 495.9 452.023L493.667 448.184C492.8 448.69 491.928 449.212 491.062 449.751C490.167 450.767 489.262 451.784 488.351 452.8L490.206 455.578Z",fill:"#49361E"}),e("path",{d:"M526.833 437.058L527.072 441.497C529.333 441.374 531.499 441.435 533.527 441.68L534.06 437.27C531.783 436.997 529.355 436.925 526.839 437.058H526.833Z",fill:"#49361E"}),e("path",{d:"M499.827 444.863L501.793 448.845C503.826 447.84 505.876 446.918 507.887 446.112L506.226 441.991C504.109 442.841 501.96 443.807 499.821 444.863H499.827Z",fill:"#49361E"}),e("path",{d:"M512.869 439.641L514.158 443.896C516.335 443.235 518.49 442.702 520.573 442.308L519.746 437.942C517.507 438.364 515.196 438.941 512.869 439.647V439.641Z",fill:"#49361E"}),e("path",{d:"M546.486 493.755L550.468 495.732C551.524 493.605 552.496 491.45 553.351 489.339L549.235 487.667C548.419 489.678 547.497 491.727 546.486 493.755Z",fill:"#49361E"}),e("path",{d:"M558.156 461.527L553.74 462.038C553.89 463.343 553.968 464.715 553.968 466.109C553.968 466.892 553.945 467.692 553.896 468.492L558.334 468.748C558.384 467.865 558.411 466.981 558.411 466.109C558.411 464.537 558.323 462.999 558.156 461.527Z",fill:"#49361E"}),e("path",{d:"M547.791 442.435C545.83 440.991 543.614 439.814 541.203 438.936L539.687 443.113C541.698 443.846 543.536 444.818 545.158 446.012L547.791 442.435Z",fill:"#49361E"}),e("path",{d:"M556.528 454.372C555.667 451.956 554.507 449.734 553.079 447.762L549.48 450.373C550.663 452 551.624 453.85 552.34 455.866L556.528 454.372Z",fill:"#49361E"}),e("path",{d:"M551.463 481.401L555.712 482.701C556.423 480.374 557 478.063 557.434 475.83L553.068 474.986C552.668 477.063 552.124 479.224 551.463 481.396V481.401Z",fill:"#49361E"}),e("path",{d:"M539.737 505.336L543.431 507.808C544.741 505.853 545.991 503.859 547.141 501.887L543.303 499.648C542.197 501.543 540.998 503.453 539.737 505.336Z",fill:"#49361E"}),e("path",{d:"M9.87617 218.743L5.56578 217.671C5.00477 219.915 4.52151 222.142 4.12714 224.287L8.49862 225.092C8.87634 223.037 9.34292 220.904 9.87617 218.743Z",fill:"#49361E"}),e("path",{d:"M30.0283 162.713L33.8221 165.024C34.9441 163.18 36.1161 161.297 37.3048 159.43L33.5554 157.042C32.3501 158.93 31.1614 160.841 30.0227 162.713H30.0283Z",fill:"#49361E"}),e("path",{d:"M26.6235 168.462C25.496 170.412 24.3961 172.373 23.3463 174.295L27.2457 176.422C28.2788 174.533 29.362 172.606 30.4673 170.684L26.618 168.462H26.6235Z",fill:"#49361E"}),e("path",{d:"M27.9398 275.506C30.0894 276.073 32.3946 276.489 34.7886 276.745L35.2607 272.323C33.0889 272.09 31.0059 271.718 29.0673 271.207L27.9398 275.506Z",fill:"#49361E"}),e("path",{d:"M17.2417 186.209L21.2521 188.126C22.1742 186.193 23.1574 184.21 24.1683 182.238L20.2134 180.21C19.1803 182.221 18.1804 184.237 17.2417 186.209Z",fill:"#49361E"}),e("path",{d:"M147.042 223.581L149.764 227.097C150.319 226.664 150.88 226.225 151.441 225.786C152.469 224.653 153.502 223.52 154.535 222.387L152.224 219.499C150.502 220.876 148.758 222.248 147.042 223.581Z",fill:"#49361E"}),e("path",{d:"M15.2809 269.341C17.1084 270.79 19.1358 272.057 21.3188 273.101L23.2407 269.096C21.3576 268.196 19.6079 267.108 18.0471 265.863L15.2809 269.341Z",fill:"#49361E"}),e("path",{d:"M44.8202 140.478L48.4251 143.077C49.6971 141.316 51.008 139.528 52.33 137.761L48.7695 135.101C47.4309 136.884 46.1033 138.695 44.8202 140.478Z",fill:"#49361E"}),e("path",{d:"M162.4 211.089C160.717 212.522 159.018 213.949 157.346 215.332L159.09 217.443C160.601 215.81 162.123 214.183 163.65 212.555L162.4 211.089Z",fill:"#49361E"}),e("path",{d:"M40.9653 145.927C39.6877 147.765 38.4268 149.626 37.2104 151.448L40.9098 153.909C42.1096 152.109 43.3538 150.276 44.6147 148.46L40.9653 145.927Z",fill:"#49361E"}),e("path",{d:"M6.5434 258.198C7.571 260.386 8.82079 262.431 10.2539 264.269L13.7588 261.536C12.5313 259.959 11.4537 258.203 10.5705 256.309L6.54895 258.198H6.5434Z",fill:"#49361E"}),e("path",{d:"M41.6208 272.612L41.6708 277.056C43.8593 277.034 46.1534 276.895 48.4919 276.65L48.0253 272.229C45.8201 272.462 43.6649 272.59 41.6152 272.612H41.6208Z",fill:"#49361E"}),e("path",{d:"M18.5137 194.091L14.4477 192.303C13.5367 194.38 12.6591 196.463 11.8537 198.491L15.9808 200.135C16.7695 198.152 17.6249 196.119 18.5192 194.091H18.5137Z",fill:"#49361E"}),e("path",{d:"M103.116 252.632L105.243 256.531C107.171 255.482 109.137 254.382 111.076 253.26L108.854 249.41C106.943 250.51 105.01 251.593 103.116 252.627V252.632Z",fill:"#49361E"}),e("path",{d:"M114.52 246.055L116.825 249.855C118.702 248.716 120.613 247.527 122.496 246.328L120.108 242.578C118.247 243.761 116.364 244.933 114.514 246.055H114.52Z",fill:"#49361E"}),e("path",{d:"M79.3922 263.875L81.0363 268.002C83.0693 267.196 85.1523 266.324 87.2297 265.413L85.4467 261.342C83.4193 262.231 81.3807 263.08 79.3977 263.869L79.3922 263.875Z",fill:"#49361E"}),e("path",{d:"M125.64 238.984L128.101 242.684C129.934 241.462 131.794 240.201 133.622 238.934L131.089 235.279C129.278 236.535 127.445 237.779 125.634 238.984H125.64Z",fill:"#49361E"}),e("path",{d:"M136.477 231.474L139.077 235.079C140.865 233.791 142.676 232.463 144.459 231.13L141.798 227.569C140.038 228.886 138.249 230.197 136.483 231.469L136.477 231.474Z",fill:"#49361E"}),e("path",{d:"M60.412 127.335L56.9459 124.558C55.5517 126.297 54.1631 128.063 52.8188 129.796L56.3294 132.518C57.6569 130.801 59.0345 129.057 60.412 127.335Z",fill:"#49361E"}),e("path",{d:"M65.4501 114.282C64.0114 115.965 62.5672 117.681 61.1564 119.387L64.578 122.219C65.9722 120.536 67.4053 118.837 68.8273 117.17L65.4501 114.282Z",fill:"#49361E"}),e("path",{d:"M13.6644 206.262L9.47623 204.779C8.71525 206.934 8.00426 209.083 7.36548 211.172L11.6148 212.466C12.2313 210.439 12.9201 208.356 13.6644 206.262Z",fill:"#49361E"}),e("path",{d:"M54.4241 271.307L55.2184 275.678C57.3625 275.29 59.5899 274.812 61.8395 274.256L60.7731 269.94C58.6123 270.474 56.4793 270.935 54.4241 271.307Z",fill:"#49361E"}),e("path",{d:"M7.55432 231.486L3.1384 231.008C2.88844 233.346 2.73847 235.64 2.70514 237.829L7.14883 237.896C7.18216 235.846 7.31547 233.685 7.55432 231.486Z",fill:"#49361E"}),e("path",{d:"M7.40433 244.261L2.98285 244.711C3.22725 247.105 3.62719 249.41 4.18265 251.566L8.48748 250.466C7.98756 248.527 7.62651 246.439 7.40433 244.267V244.261Z",fill:"#49361E"}),e("path",{d:"M67.0554 268.207L68.344 272.462C70.4326 271.829 72.5878 271.124 74.7429 270.363L73.2654 266.174C71.1713 266.913 69.0828 267.596 67.0554 268.213V268.207Z",fill:"#49361E"}),e("path",{d:"M91.4124 258.614L93.3231 262.625C95.3006 261.686 97.3169 260.686 99.3277 259.659L97.3058 255.704C95.3339 256.715 93.3509 257.692 91.4124 258.614Z",fill:"#49361E"}),e("path",{d:"M70.0493 108.988C69.9715 109.072 69.8993 109.16 69.8215 109.244L73.1543 112.182C74.593 110.555 76.0705 108.899 77.5536 107.261L75.4428 105.344L74.2652 104.272C72.8432 105.839 71.4268 107.422 70.0493 108.983V108.988Z",fill:"#49361E"}),e("path",{d:"M352.835 392.899C354.274 391.266 355.757 389.61 357.245 387.977L356.757 387.533C355.157 389.072 353.557 390.599 351.952 392.121L352.835 392.899Z",fill:"#49361E"}),e("path",{d:"M437.032 496.077L439.865 499.498C441.564 498.093 443.286 496.643 444.975 495.199L442.087 491.822C440.415 493.249 438.715 494.683 437.032 496.077Z",fill:"#49361E"}),e("path",{d:"M286.091 539.042C287.118 541.236 288.368 543.28 289.801 545.119L293.306 542.386C292.073 540.809 291.001 539.048 290.112 537.154L286.091 539.042Z",fill:"#49361E"}),e("path",{d:"M371.043 539.425L372.954 543.436C374.937 542.492 376.959 541.492 378.964 540.464L376.936 536.509C374.97 537.515 372.982 538.498 371.037 539.425H371.043Z",fill:"#49361E"}),e("path",{d:"M294.834 550.196C296.661 551.646 298.694 552.912 300.883 553.957L302.804 549.952C300.921 549.052 299.172 547.963 297.6 546.713L294.839 550.196H294.834Z",fill:"#49361E"}),e("path",{d:"M296.833 466.981L300.844 468.898C301.771 466.954 302.754 464.971 303.765 463.004L299.811 460.977C298.783 462.982 297.778 465.004 296.833 466.981Z",fill:"#49361E"}),e("path",{d:"M321.201 553.468L321.257 557.911C323.451 557.884 325.745 557.745 328.089 557.5L327.623 553.079C325.423 553.312 323.262 553.44 321.207 553.468H321.201Z",fill:"#49361E"}),e("path",{d:"M359.017 544.697L360.661 548.824C362.694 548.013 364.783 547.141 366.86 546.23L365.077 542.158C363.044 543.047 361.011 543.903 359.023 544.691L359.017 544.697Z",fill:"#49361E"}),e("path",{d:"M324.462 421.216L328.067 423.816C329.339 422.055 330.655 420.267 331.977 418.495L328.422 415.834C327.084 417.623 325.751 419.433 324.468 421.216H324.462Z",fill:"#49361E"}),e("path",{d:"M298.1 474.869L294.034 473.08C293.117 475.158 292.245 477.241 291.434 479.274L295.561 480.924C296.356 478.941 297.211 476.902 298.105 474.875L298.1 474.869Z",fill:"#49361E"}),e("path",{d:"M289.44 499.548L285.13 498.471C284.569 500.715 284.085 502.942 283.685 505.092L288.057 505.903C288.44 503.842 288.901 501.704 289.44 499.548Z",fill:"#49361E"}),e("path",{d:"M293.239 487.051L289.051 485.562C288.285 487.712 287.574 489.867 286.935 491.961L291.184 493.261C291.806 491.228 292.495 489.139 293.239 487.051Z",fill:"#49361E"}),e("path",{d:"M287.113 512.302L282.697 511.819C282.441 514.157 282.297 516.457 282.264 518.645L286.707 518.718C286.741 516.668 286.879 514.507 287.118 512.302H287.113Z",fill:"#49361E"}),e("path",{d:"M286.957 525.094L282.536 525.539C282.78 527.938 283.18 530.244 283.73 532.399L288.035 531.299C287.54 529.355 287.174 527.266 286.952 525.089L286.957 525.094Z",fill:"#49361E"}),e("path",{d:"M346.669 549.046L347.958 553.301C350.047 552.668 352.202 551.962 354.362 551.196L352.885 547.008C350.785 547.746 348.697 548.435 346.675 549.052L346.669 549.046Z",fill:"#49361E"}),e("path",{d:"M334.027 552.151L334.821 556.523C336.971 556.128 339.198 555.651 341.448 555.095L340.381 550.779C338.221 551.313 336.082 551.774 334.027 552.146V552.151Z",fill:"#49361E"}),e("path",{d:"M340.07 408.057L337.26 405.802C335.988 406.963 334.716 408.119 333.444 409.274C333.122 409.69 332.788 410.107 332.472 410.518L335.982 413.24C337.321 411.512 338.698 409.768 340.076 408.057H340.07Z",fill:"#49361E"}),e("path",{d:"M309.648 443.468L313.442 445.779C314.564 443.935 315.736 442.052 316.93 440.186L313.186 437.797C311.975 439.691 310.786 441.602 309.648 443.474V443.468Z",fill:"#49361E"}),e("path",{d:"M307.509 556.367C309.664 556.934 311.97 557.35 314.364 557.6L314.836 553.179C312.658 552.946 310.575 552.573 308.637 552.062L307.509 556.362V556.367Z",fill:"#49361E"}),e("path",{d:"M320.601 426.666C319.318 428.515 318.052 430.371 316.841 432.193L320.54 434.659C321.74 432.865 322.984 431.026 324.251 429.204L320.601 426.671V426.666Z",fill:"#49361E"}),e("path",{d:"M347.103 396.693C345.475 398.22 343.842 399.742 342.209 401.253L344.247 402.942C345.631 401.275 347.064 399.57 348.502 397.887L347.103 396.693Z",fill:"#49361E"}),e("path",{d:"M426.722 504.337L429.444 507.847C431.188 506.497 432.955 505.109 434.688 503.714L431.911 500.248C430.194 501.626 428.444 502.998 426.722 504.337Z",fill:"#49361E"}),e("path",{d:"M394.178 526.85L396.483 530.649C398.366 529.505 400.277 528.316 402.16 527.116L399.771 523.367C397.916 524.55 396.033 525.722 394.172 526.85H394.178Z",fill:"#49361E"}),e("path",{d:"M382.763 533.432L384.891 537.331C386.824 536.276 388.784 535.176 390.729 534.054L388.507 530.205C386.596 531.31 384.663 532.393 382.763 533.426V533.432Z",fill:"#49361E"}),e("path",{d:"M405.304 519.767L407.765 523.467C409.603 522.245 411.464 520.978 413.291 519.712L410.759 516.063C408.953 517.318 407.115 518.562 405.298 519.773L405.304 519.767Z",fill:"#49361E"}),e("path",{d:"M306.232 449.223C305.115 451.156 304.01 453.122 302.949 455.056L306.848 457.188C307.893 455.283 308.976 453.35 310.081 451.445L306.232 449.218V449.223Z",fill:"#49361E"}),e("path",{d:"M416.152 512.246L418.752 515.851C420.54 514.563 422.351 513.235 424.134 511.896L421.473 508.336C419.707 509.658 417.918 510.969 416.152 512.246Z",fill:"#49361E"}),e("path",{d:"M453.796 485.062L452.007 483.09C450.369 484.579 448.708 486.062 447.08 487.495L449.996 490.805L450.019 490.828C451.663 489.378 453.34 487.884 454.996 486.378L453.801 485.062H453.796Z",fill:"#49361E"}),e("path",{d:"M205.799 170.045L208.22 172.584L208.865 173.261C210.476 171.723 212.086 170.195 213.703 168.673L212.664 167.573L210.653 165.44C209.031 166.968 207.415 168.507 205.793 170.051L205.799 170.045Z",fill:"#49361E"}),e("path",{d:"M376.264 40.8823L378.42 44.765C380.364 43.6874 382.33 42.6098 384.257 41.5711L382.147 37.6606C380.203 38.7105 378.22 39.7936 376.259 40.8823H376.264Z",fill:"#49361E"}),e("path",{d:"M439.454 291.543L442.898 294.353C444.314 292.615 445.719 290.882 447.113 289.149L443.653 286.366C442.264 288.093 440.865 289.821 439.459 291.548L439.454 291.543Z",fill:"#49361E"}),e("path",{d:"M443.503 10.415C441.414 11.1149 439.276 11.8592 437.143 12.6258L438.648 16.8084C440.748 16.053 442.853 15.3198 444.914 14.631L443.503 10.415Z",fill:"#49361E"}),e("path",{d:"M430.955 301.819L434.36 304.674C435.799 302.957 437.232 301.241 438.648 299.53L435.227 296.697C433.816 298.403 432.394 300.113 430.961 301.819H430.955Z",fill:"#49361E"}),e("path",{d:"M447.808 281.15L451.291 283.91C452.685 282.155 454.062 280.4 455.434 278.645L451.929 275.912C450.568 277.656 449.191 279.406 447.808 281.15Z",fill:"#49361E"}),e("path",{d:"M420.129 24.135L418.379 20.0524C416.363 20.9189 414.297 21.8243 412.225 22.7575L414.047 26.8123C416.091 25.8903 418.141 24.996 420.129 24.1406V24.135Z",fill:"#49361E"}),e("path",{d:"M457.578 10.7427L456.39 6.46008C454.273 7.04887 452.096 7.6821 449.919 8.35421L451.224 12.6035C453.362 11.948 455.501 11.3204 457.578 10.7482V10.7427Z",fill:"#49361E"}),e("path",{d:"M496.494 4.4437L496.411 0C494.211 0.044437 491.923 0.149975 489.617 0.327722L489.951 4.76031C492.173 4.59367 494.378 4.48813 496.494 4.4437Z",fill:"#49361E"}),e("path",{d:"M422.318 311.978L425.684 314.878C427.145 313.184 428.6 311.484 430.039 309.79L426.656 306.912C425.223 308.601 423.773 310.29 422.318 311.978Z",fill:"#49361E"}),e("path",{d:"M479.636 238.373L483.285 240.912C484.568 239.068 485.835 237.229 487.09 235.39L483.418 232.885C482.174 234.713 480.913 236.54 479.636 238.373Z",fill:"#49361E"}),e("path",{d:"M413.541 322.021L416.869 324.965C418.352 323.288 419.829 321.61 421.29 319.938L417.941 317.016C416.485 318.688 415.013 320.355 413.536 322.027L413.541 322.021Z",fill:"#49361E"}),e("path",{d:"M487.151 227.369L490.845 229.841C492.095 227.975 493.328 226.114 494.55 224.253L490.834 221.815C489.623 223.659 488.395 225.514 487.151 227.369Z",fill:"#49361E"}),e("path",{d:"M483.413 5.42135L482.857 1.01099C480.669 1.28316 478.414 1.61644 476.153 1.99971L476.897 6.3823C479.097 6.01014 481.285 5.68798 483.413 5.42135Z",fill:"#49361E"}),e("path",{d:"M469.51 3.26062C467.349 3.71054 465.133 4.21601 462.922 4.75481L463.977 9.07075C466.144 8.54306 468.31 8.0487 470.421 7.60989L469.515 3.26062H469.51Z",fill:"#49361E"}),e("path",{d:"M471.937 249.255L475.542 251.854C476.853 250.032 478.153 248.216 479.436 246.4L475.809 243.833C474.531 245.639 473.242 247.444 471.937 249.255Z",fill:"#49361E"}),e("path",{d:"M464.061 260.009L467.627 262.664C468.965 260.864 470.293 259.07 471.609 257.276L468.027 254.648C466.721 256.432 465.399 258.22 464.066 260.009H464.061Z",fill:"#49361E"}),e("path",{d:"M456.012 270.64L459.534 273.351C460.9 271.573 462.255 269.796 463.594 268.024L460.05 265.341C458.717 267.108 457.367 268.874 456.006 270.64H456.012Z",fill:"#49361E"}),e("path",{d:"M432.433 19.1246L430.838 14.9753C428.794 15.7641 426.689 16.5973 424.584 17.4527L426.261 21.5687C428.339 20.7244 430.416 19.9023 432.433 19.1246Z",fill:"#49361E"}),e("path",{d:"M408.009 29.5842L406.12 25.5626C404.121 26.5014 402.082 27.4734 400.06 28.4621L402.01 32.4559C404.015 31.4783 406.032 30.5118 408.009 29.5842Z",fill:"#49361E"}),e("path",{d:"M297.705 92.1242L300.36 95.6903C302.149 94.3572 303.938 93.0407 305.726 91.7298L303.104 88.1415C301.31 89.4524 299.511 90.78 297.711 92.1186L297.705 92.1242Z",fill:"#49361E"}),e("path",{d:"M287.018 100.206L289.723 103.728C291.495 102.367 293.262 101.023 295.028 99.6897L292.351 96.1459C290.579 97.4845 288.801 98.8399 287.024 100.206H287.018Z",fill:"#49361E"}),e("path",{d:"M276.453 108.444L279.214 111.927C280.964 110.543 282.708 109.172 284.458 107.805L281.725 104.3C279.969 105.667 278.214 107.05 276.459 108.438L276.453 108.444Z",fill:"#49361E"}),e("path",{d:"M255.679 125.369L258.534 128.774C260.245 127.341 261.95 125.919 263.661 124.508L260.828 121.081C259.112 122.497 257.395 123.925 255.679 125.363V125.369Z",fill:"#49361E"}),e("path",{d:"M235.383 142.855L238.326 146.182C239.998 144.705 241.665 143.238 243.337 141.783L240.415 138.434C238.738 139.9 237.06 141.372 235.383 142.855Z",fill:"#49361E"}),e("path",{d:"M245.47 134.045L248.369 137.411C250.058 135.956 251.746 134.512 253.435 133.079L250.558 129.691C248.864 131.129 247.164 132.585 245.47 134.045Z",fill:"#49361E"}),e("path",{d:"M266.005 116.837L268.81 120.281C270.538 118.87 272.265 117.476 273.993 116.087L271.21 112.621C269.477 114.015 267.738 115.421 266 116.837H266.005Z",fill:"#49361E"}),e("path",{d:"M353.107 54.4357L355.435 58.224C357.34 57.052 359.234 55.9022 361.128 54.769L358.839 50.9586C356.934 52.1028 355.023 53.2637 353.107 54.4413V54.4357Z",fill:"#49361E"}),e("path",{d:"M364.611 47.5313L366.855 51.364C368.788 50.2309 370.726 49.1088 372.621 48.0312L370.421 44.1708C368.516 45.2595 366.56 46.3871 364.616 47.5258L364.611 47.5313Z",fill:"#49361E"}),e("path",{d:"M396.05 35.4111L394.045 31.4451C392.073 32.4393 390.068 33.4725 388.073 34.5168L390.134 38.455C392.106 37.4218 394.1 36.3998 396.05 35.4111Z",fill:"#49361E"}),e("path",{d:"M308.52 84.2143L311.114 87.8193C312.925 86.514 314.736 85.2253 316.541 83.9477L313.975 80.3206C312.158 81.6037 310.342 82.9035 308.52 84.2143Z",fill:"#49361E"}),e("path",{d:"M341.753 61.5735L344.153 65.3118C346.031 64.1064 347.908 62.9122 349.774 61.7402L347.408 57.9797C345.525 59.1628 343.642 60.3626 341.748 61.5735H341.753Z",fill:"#49361E"}),e("path",{d:"M319.468 76.4767L322.001 80.1261C323.834 78.8541 325.667 77.5932 327.489 76.349L324.984 72.6774C323.151 73.9272 321.307 75.1936 319.463 76.4767H319.468Z",fill:"#49361E"}),e("path",{d:"M330.544 68.9223L333.016 72.6162C334.871 71.3775 336.721 70.1499 338.571 68.939L336.132 65.223C334.277 66.4394 332.411 67.6781 330.544 68.9223Z",fill:"#49361E"}),e("path",{d:"M508.425 193.541L512.258 195.791C513.386 193.875 514.513 191.92 515.619 189.986L511.758 187.781C510.658 189.703 509.536 191.642 508.42 193.541H508.425Z",fill:"#49361E"}),e("path",{d:"M553.957 44.5262L558.306 43.6152C557.823 41.3156 557.234 39.066 556.551 36.933L552.318 38.2883C552.951 40.2769 553.501 42.371 553.951 44.5262H553.957Z",fill:"#49361E"}),e("path",{d:"M554.062 30.4562C553.084 28.3177 551.968 26.2514 550.752 24.3184L546.991 26.6902C548.102 28.4566 549.124 30.3451 550.018 32.3059L554.062 30.4562Z",fill:"#49361E"}),e("path",{d:"M536.087 9.50953C534.165 8.27085 532.11 7.14326 529.977 6.14343L528.094 10.1705C530.044 11.0815 531.927 12.1202 533.677 13.2478L536.082 9.50953H536.087Z",fill:"#49361E"}),e("path",{d:"M533.027 146.366L537.076 148.193C538.004 146.132 538.92 144.06 539.787 142.044L535.704 140.289C534.843 142.283 533.943 144.333 533.021 146.371L533.027 146.366Z",fill:"#49361E"}),e("path",{d:"M538.276 134.162L542.386 135.845C543.242 133.756 544.075 131.657 544.875 129.596L540.731 127.996C539.942 130.029 539.12 132.107 538.276 134.168V134.162Z",fill:"#49361E"}),e("path",{d:"M543.225 21.5687L546.602 18.6803C545.797 17.736 544.941 16.814 544.069 15.9363C543.303 15.1698 542.497 14.4199 541.681 13.7034L538.759 17.0528C539.503 17.7027 540.237 18.3859 540.931 19.0802C541.725 19.8745 542.497 20.7077 543.225 21.5632V21.5687Z",fill:"#49361E"}),e("path",{d:"M553.557 83.5478L557.934 84.3032C558.323 82.048 558.661 79.7929 558.945 77.6044L554.54 77.0378C554.268 79.1652 553.934 81.3537 553.557 83.5478Z",fill:"#49361E"}),e("path",{d:"M555.506 57.4186L559.944 57.2353C559.85 54.9024 559.667 52.6028 559.406 50.4087L554.99 50.9308C555.234 53.0138 555.406 55.2023 555.501 57.4242L555.506 57.4186Z",fill:"#49361E"}),e("path",{d:"M543.058 121.781L547.235 123.297C548.008 121.175 548.752 119.037 549.457 116.943L545.247 115.526C544.553 117.587 543.819 119.692 543.058 121.786V121.781Z",fill:"#49361E"}),e("path",{d:"M555.562 63.9509C555.512 66.0728 555.401 68.278 555.223 70.4998L559.65 70.8498C559.833 68.5446 559.95 66.2617 560 64.0565L555.556 63.9509H555.562Z",fill:"#49361E"}),e("path",{d:"M550.835 96.4624L555.151 97.5289C555.695 95.3126 556.206 93.0963 556.662 90.9411L552.312 90.0246C551.868 92.1298 551.374 94.2961 550.835 96.4624Z",fill:"#49361E"}),e("path",{d:"M547.286 109.21L551.529 110.521C552.201 108.355 552.84 106.178 553.434 104.05L549.152 102.856C548.569 104.939 547.941 107.077 547.286 109.205V109.21Z",fill:"#49361E"}),e("path",{d:"M510.058 0.660993C507.859 0.388817 505.565 0.194405 503.232 0.0888672L503.026 4.52701C505.243 4.63255 507.426 4.81029 509.514 5.07136L510.058 0.660993Z",fill:"#49361E"}),e("path",{d:"M501.56 204.956L505.343 207.284C506.52 205.367 507.687 203.457 508.831 201.557L505.02 199.268C503.887 201.157 502.732 203.057 501.56 204.956Z",fill:"#49361E"}),e("path",{d:"M527.367 158.403L531.36 160.352C532.349 158.336 533.327 156.297 534.265 154.298L530.244 152.404C529.311 154.381 528.344 156.403 527.367 158.397V158.403Z",fill:"#49361E"}),e("path",{d:"M494.467 216.227L498.205 218.632C499.421 216.743 500.621 214.855 501.804 212.977L498.044 210.611C496.866 212.477 495.678 214.355 494.467 216.232V216.227Z",fill:"#49361E"}),e("path",{d:"M515.03 181.982L518.913 184.143C519.985 182.215 521.073 180.238 522.14 178.261L518.229 176.15C517.168 178.111 516.091 180.071 515.03 181.988V181.982Z",fill:"#49361E"}),e("path",{d:"M523.517 3.59938C521.384 2.8995 519.14 2.29404 516.846 1.79968L515.907 6.14339C518.051 6.60443 520.146 7.171 522.134 7.82089L523.517 3.59938Z",fill:"#49361E"}),e("path",{d:"M521.357 170.267L525.295 172.328C526.333 170.345 527.367 168.334 528.372 166.362L524.406 164.352C523.412 166.307 522.39 168.301 521.357 170.267Z",fill:"#49361E"}),e("path",{d:"M226.479 150.526C226.023 150.937 225.573 151.343 225.118 151.754L225.323 151.981L228.1 155.042C229.75 153.542 231.4 152.054 233.055 150.576L230.089 147.266C228.884 148.343 227.678 149.432 226.479 150.526Z",fill:"#49361E"}),e("path",{d:"M404.637 331.947L407.676 334.702L407.931 334.93C408.387 334.43 408.831 333.93 409.287 333.43C410.331 332.275 411.381 331.114 412.419 329.959L409.109 326.993C407.631 328.642 406.137 330.292 404.643 331.942L404.637 331.947Z",fill:"#49361E"}),e("path",{d:"M391.04 346.628C389.518 348.239 387.985 349.856 386.446 351.466L387.079 352.072L389.662 354.538C391.206 352.922 392.745 351.3 394.272 349.678L392.101 347.628L391.04 346.628Z",fill:"#49361E"}),e("path",{d:"M400.133 336.869C398.633 338.502 397.122 340.129 395.6 341.762L397.2 343.257L398.849 344.795C400.377 343.157 401.893 341.518 403.399 339.879L402.382 338.946L400.127 336.869H400.133Z",fill:"#49361E"}),e("path",{d:"M524.508 527.996C526.717 527.996 528.508 526.205 528.508 523.996C528.508 521.787 526.717 519.996 524.508 519.996C522.298 519.996 520.508 521.787 520.508 523.996C520.508 526.205 522.298 527.996 524.508 527.996Z",fill:"white"}),e("path",{d:"M203.985 202.289L203.2 203.074L222.273 222.147L223.058 221.362L203.985 202.289Z",fill:"white",fillOpacity:"0.3"}),e("path",{d:"M340.027 338.249L339.242 339.034L358.562 358.355L359.348 357.569L340.027 338.249Z",fill:"white",fillOpacity:"0.3"}),e("path",{d:"M380.475 378.621L379.69 379.406L459.309 459.026L460.094 458.241L380.475 378.621Z",fill:"white",fillOpacity:"0.3"}),e("path",{d:"M103.977 102.333L103.191 103.119L182.075 182.004L182.861 181.219L103.977 102.333Z",fill:"white",fillOpacity:"0.3"}),e("path",{d:"M45.0363 43.4511L44.2507 44.2367L79.2566 79.2429L80.0421 78.4574L45.0363 43.4511Z",fill:"white",fillOpacity:"0.3"}),e("path",{d:"M481.228 479.346L480.442 480.131L512.708 512.398L513.494 511.612L481.228 479.346Z",fill:"white",fillOpacity:"0.3"}),e("path",{d:"M68.6714 102.378L57.0623 103.406L62.0115 110.466C55.7292 114.115 49.3803 116.915 43.1757 118.725C29.0337 122.852 17.4523 121.336 10.5646 114.448C3.67685 107.561 2.16044 95.9792 6.28752 81.8371C9.24258 71.7222 14.8194 61.2184 22.4181 51.259L19.252 48.0928C11.1367 58.6299 5.17104 69.8058 2.02157 80.5929C-2.5832 96.3625 -0.666861 109.505 7.42066 117.592C12.6253 122.797 19.9241 125.446 28.6671 125.446C33.5107 125.446 38.7987 124.635 44.42 122.991C51.0689 121.047 57.8622 118.037 64.5666 114.109L70.4378 122.48L75.3537 111.915L80.2695 101.351L68.6603 102.378H68.6714Z",fill:"#FFA700"}),e("path",{d:"M359.912 383.745L361.939 377.74L350.513 380.034L339.087 382.328L346.697 390.977C282.519 451.556 215.269 500.093 155.44 528.788C123.746 543.986 95.8339 552.812 72.4656 555.023C48.6918 557.267 30.7504 552.518 19.1301 540.898C7.37654 529.144 2.64956 510.924 5.08249 486.751C7.47097 462.988 16.625 434.614 32.2835 402.414C62.7728 339.718 114.586 269.341 179.031 202.879L175.887 199.735C174.854 200.801 173.826 201.862 172.799 202.929C171.266 204.523 169.732 206.123 168.211 207.723C166.677 209.333 165.156 210.95 163.639 212.566C162.112 214.194 160.59 215.821 159.079 217.454C157.551 219.099 156.04 220.748 154.53 222.398C153.496 223.531 152.463 224.664 151.436 225.798C97.9946 284.705 55.013 345.501 28.2841 400.475C-4.59922 468.104 -8.9707 519.09 15.9862 544.041C26.6566 554.712 42.104 560.011 61.5952 560.011C87.1464 560.011 119.63 550.896 157.362 532.799C212.525 506.342 273.92 463.171 333.438 409.291C334.71 408.141 335.982 406.98 337.254 405.819C338.904 404.308 340.554 402.792 342.203 401.264C343.836 399.753 345.47 398.231 347.097 396.704C347.941 395.909 348.786 395.115 349.63 394.315L354.479 399.825L358.206 388.788L359.534 384.856C359.784 384.617 360.034 384.372 360.284 384.134L359.906 383.756L359.912 383.745Z",fill:"#FFA700"}),e("path",{d:"M270.327 11.4315C256.496 -2.39409 230.223 -1.89972 196.351 12.8313C169.277 24.6072 139.738 44.3818 111.426 69.5167C110.848 70.0333 110.271 70.5499 109.693 71.0665C108.465 72.1663 107.238 73.2772 106.016 74.3993L109.16 77.5432C138.694 50.4753 169.799 29.2176 198.122 16.9028C213.909 10.0373 227.945 6.3323 239.838 5.89904C251.797 5.46022 261.001 8.37642 267.189 14.5643C273.382 20.7578 276.298 29.9674 275.854 41.9433C275.415 53.8525 271.699 67.9003 264.817 83.7089C253.785 109.049 235.605 136.601 212.52 163.268L206.149 157.142L203.361 168.457L200.572 179.771L211.765 176.533L222.957 173.295L215.736 166.351C216.853 165.057 217.969 163.763 219.063 162.469L223.379 157.286C223.452 157.203 223.518 157.114 223.59 157.031L223.685 156.92L223.824 156.742C225.107 155.17 226.373 153.592 227.629 152.015L227.612 151.998L228.712 150.621C228.712 150.621 228.756 150.576 228.784 150.559C229.001 150.282 229.206 150.009 229.423 149.732L229.723 149.36H229.717C246.57 127.724 260.018 105.905 268.911 85.4809C283.68 51.564 284.186 25.2626 270.349 11.4204L270.327 11.4315Z",fill:"#FFA700"}),e("path",{d:"M547.874 292.287C534.332 278.745 508.725 278.956 475.781 292.881C456.39 301.08 435.588 313.528 414.819 329.192C411.458 331.297 403.971 337.524 397.244 343.29L397.211 343.257C395.506 344.695 393.806 346.151 392.112 347.628L392.167 347.678C390.206 349.383 388.468 350.911 387.124 352.094L387.09 352.061C386.14 352.911 385.196 353.772 384.252 354.633L387.396 357.777C417.419 330.386 449.041 309.001 477.519 296.964C508.692 283.788 532.566 283.238 544.741 295.42C550.929 301.608 553.845 310.812 553.407 322.771C552.973 334.664 549.268 348.7 542.403 364.492C531.494 389.572 513.569 416.834 490.817 443.257L485.246 437.903L482.458 449.218L479.669 460.533L490.862 457.294L502.054 454.056L494.028 446.346C517.146 419.528 535.376 391.805 546.48 366.27C561.216 332.386 561.716 306.113 547.885 292.281L547.874 292.287Z",fill:"#FFA700"}),e("path",{d:"M505.198 536.37L493.772 538.664L498.388 543.907C492.539 547.19 486.646 549.734 480.874 551.417C466.732 555.55 455.151 554.028 448.263 547.14C441.376 540.253 439.859 528.671 443.986 514.529C446.941 504.414 452.524 493.91 460.122 483.956L456.951 480.785C455.962 482.073 455.007 483.368 454.079 484.673L454.029 484.751C453.957 484.856 453.879 484.962 453.801 485.067L453.812 485.079L450.08 490.783C450.08 490.783 450.041 490.816 450.024 490.833L450.002 490.811C449.791 491.15 449.596 491.494 449.385 491.838L449.224 492.088H449.241C445.008 499.132 441.764 506.292 439.726 513.29C435.121 529.06 437.037 542.202 445.125 550.29C450.33 555.494 457.628 558.144 466.371 558.144C471.215 558.144 476.503 557.333 482.124 555.689C488.479 553.834 494.972 550.995 501.388 547.318L501.471 547.418L509.17 556.167L512.897 545.13L516.624 534.092L505.198 536.387V536.37Z",fill:"#FFA700"}),e("path",{d:"M159.489 254.52H175.617V260.76H159.489V254.52ZM160.065 273H152.289V239.4H177.681V245.64H160.065V273ZM181.948 273V247.176H189.1V254.472L188.092 252.36C188.86 250.536 190.092 249.16 191.788 248.232C193.484 247.272 195.548 246.792 197.98 246.792V253.704C197.66 253.672 197.372 253.656 197.116 253.656C196.86 253.624 196.588 253.608 196.3 253.608C194.252 253.608 192.588 254.2 191.308 255.384C190.06 256.536 189.436 258.344 189.436 260.808V273H181.948ZM214.533 273.384C211.781 273.384 209.333 272.808 207.189 271.656C205.077 270.504 203.397 268.936 202.149 266.952C200.933 264.936 200.325 262.648 200.325 260.088C200.325 257.496 200.933 255.208 202.149 253.224C203.397 251.208 205.077 249.64 207.189 248.52C209.333 247.368 211.781 246.792 214.533 246.792C217.253 246.792 219.685 247.368 221.829 248.52C223.973 249.64 225.653 251.192 226.869 253.176C228.085 255.16 228.693 257.464 228.693 260.088C228.693 262.648 228.085 264.936 226.869 266.952C225.653 268.936 223.973 270.504 221.829 271.656C219.685 272.808 217.253 273.384 214.533 273.384ZM214.533 267.24C215.781 267.24 216.901 266.952 217.893 266.376C218.885 265.8 219.669 264.984 220.245 263.928C220.821 262.84 221.109 261.56 221.109 260.088C221.109 258.584 220.821 257.304 220.245 256.248C219.669 255.192 218.885 254.376 217.893 253.8C216.901 253.224 215.781 252.936 214.533 252.936C213.285 252.936 212.165 253.224 211.173 253.8C210.181 254.376 209.381 255.192 208.773 256.248C208.197 257.304 207.909 258.584 207.909 260.088C207.909 261.56 208.197 262.84 208.773 263.928C209.381 264.984 210.181 265.8 211.173 266.376C212.165 266.952 213.285 267.24 214.533 267.24ZM249.394 246.792C251.442 246.792 253.266 247.208 254.866 248.04C256.498 248.84 257.778 250.088 258.706 251.784C259.634 253.448 260.098 255.592 260.098 258.216V273H252.61V259.368C252.61 257.288 252.146 255.752 251.218 254.76C250.322 253.768 249.042 253.272 247.378 253.272C246.194 253.272 245.122 253.528 244.162 254.04C243.234 254.52 242.498 255.272 241.954 256.296C241.442 257.32 241.186 258.632 241.186 260.232V273H233.698V247.176H240.85V254.328L239.506 252.168C240.434 250.44 241.762 249.112 243.49 248.184C245.218 247.256 247.186 246.792 249.394 246.792ZM277.446 273.384C274.406 273.384 272.038 272.616 270.342 271.08C268.646 269.512 267.798 267.192 267.798 264.12V241.464H275.286V264.024C275.286 265.112 275.574 265.96 276.15 266.568C276.726 267.144 277.51 267.432 278.502 267.432C279.686 267.432 280.694 267.112 281.526 266.472L283.542 271.752C282.774 272.296 281.846 272.712 280.758 273C279.702 273.256 278.598 273.384 277.446 273.384ZM263.814 253.512V247.752H281.718V253.512H263.814ZM286.316 262.488V256.488H299.9V262.488H286.316ZM319.077 273.384C316.133 273.384 313.541 272.808 311.301 271.656C309.093 270.504 307.381 268.936 306.165 266.952C304.949 264.936 304.341 262.648 304.341 260.088C304.341 257.496 304.933 255.208 306.117 253.224C307.333 251.208 308.981 249.64 311.061 248.52C313.141 247.368 315.493 246.792 318.117 246.792C320.645 246.792 322.917 247.336 324.933 248.424C326.981 249.48 328.597 251.016 329.781 253.032C330.965 255.016 331.557 257.4 331.557 260.184C331.557 260.472 331.541 260.808 331.509 261.192C331.477 261.544 331.445 261.88 331.413 262.2H310.437V257.832H327.477L324.597 259.128C324.597 257.784 324.325 256.616 323.781 255.624C323.237 254.632 322.485 253.864 321.525 253.32C320.565 252.744 319.445 252.456 318.165 252.456C316.885 252.456 315.749 252.744 314.757 253.32C313.797 253.864 313.045 254.648 312.501 255.672C311.957 256.664 311.685 257.848 311.685 259.224V260.376C311.685 261.784 311.989 263.032 312.597 264.12C313.237 265.176 314.117 265.992 315.237 266.568C316.389 267.112 317.733 267.384 319.269 267.384C320.645 267.384 321.845 267.176 322.869 266.76C323.925 266.344 324.885 265.72 325.749 264.888L329.733 269.208C328.549 270.552 327.061 271.592 325.269 272.328C323.477 273.032 321.413 273.384 319.077 273.384ZM352.238 246.792C354.286 246.792 356.11 247.208 357.71 248.04C359.342 248.84 360.622 250.088 361.55 251.784C362.478 253.448 362.942 255.592 362.942 258.216V273H355.454V259.368C355.454 257.288 354.99 255.752 354.062 254.76C353.166 253.768 351.886 253.272 350.222 253.272C349.038 253.272 347.966 253.528 347.006 254.04C346.078 254.52 345.342 255.272 344.798 256.296C344.286 257.32 344.03 258.632 344.03 260.232V273H336.542V247.176H343.694V254.328L342.35 252.168C343.278 250.44 344.606 249.112 346.334 248.184C348.062 247.256 350.03 246.792 352.238 246.792ZM381.005 273.384C378.573 273.384 376.381 272.84 374.429 271.752C372.477 270.632 370.925 269.08 369.773 267.096C368.653 265.112 368.093 262.776 368.093 260.088C368.093 257.368 368.653 255.016 369.773 253.032C370.925 251.048 372.477 249.512 374.429 248.424C376.381 247.336 378.573 246.792 381.005 246.792C383.181 246.792 385.085 247.272 386.717 248.232C388.349 249.192 389.613 250.648 390.509 252.6C391.405 254.552 391.853 257.048 391.853 260.088C391.853 263.096 391.421 265.592 390.557 267.576C389.693 269.528 388.445 270.984 386.813 271.944C385.213 272.904 383.277 273.384 381.005 273.384ZM382.301 267.24C383.517 267.24 384.621 266.952 385.613 266.376C386.605 265.8 387.389 264.984 387.965 263.928C388.573 262.84 388.877 261.56 388.877 260.088C388.877 258.584 388.573 257.304 387.965 256.248C387.389 255.192 386.605 254.376 385.613 253.8C384.621 253.224 383.517 252.936 382.301 252.936C381.053 252.936 379.933 253.224 378.941 253.8C377.949 254.376 377.149 255.192 376.541 256.248C375.965 257.304 375.677 258.584 375.677 260.088C375.677 261.56 375.965 262.84 376.541 263.928C377.149 264.984 377.949 265.8 378.941 266.376C379.933 266.952 381.053 267.24 382.301 267.24ZM389.069 273V267.72L389.213 260.04L388.733 252.408V237.384H396.221V273H389.069ZM149.125 321V287.4H164.389C168.037 287.4 171.253 288.104 174.037 289.512C176.821 290.888 178.997 292.824 180.565 295.32C182.133 297.816 182.917 300.776 182.917 304.2C182.917 307.592 182.133 310.552 180.565 313.08C178.997 315.576 176.821 317.528 174.037 318.936C171.253 320.312 168.037 321 164.389 321H149.125ZM156.901 314.616H164.005C166.245 314.616 168.181 314.2 169.813 313.368C171.477 312.504 172.757 311.288 173.653 309.72C174.581 308.152 175.045 306.312 175.045 304.2C175.045 302.056 174.581 300.216 173.653 298.68C172.757 297.112 171.477 295.912 169.813 295.08C168.181 294.216 166.245 293.784 164.005 293.784H156.901V314.616ZM201.069 321.384C198.125 321.384 195.533 320.808 193.293 319.656C191.085 318.504 189.373 316.936 188.157 314.952C186.941 312.936 186.333 310.648 186.333 308.088C186.333 305.496 186.925 303.208 188.109 301.224C189.325 299.208 190.973 297.64 193.053 296.52C195.133 295.368 197.485 294.792 200.109 294.792C202.637 294.792 204.909 295.336 206.925 296.424C208.973 297.48 210.589 299.016 211.773 301.032C212.957 303.016 213.549 305.4 213.549 308.184C213.549 308.472 213.533 308.808 213.501 309.192C213.469 309.544 213.437 309.88 213.405 310.2H192.429V305.832H209.469L206.589 307.128C206.589 305.784 206.317 304.616 205.773 303.624C205.229 302.632 204.477 301.864 203.517 301.32C202.557 300.744 201.437 300.456 200.157 300.456C198.877 300.456 197.741 300.744 196.749 301.32C195.789 301.864 195.037 302.648 194.493 303.672C193.949 304.664 193.677 305.848 193.677 307.224V308.376C193.677 309.784 193.981 311.032 194.589 312.12C195.229 313.176 196.109 313.992 197.229 314.568C198.381 315.112 199.725 315.384 201.261 315.384C202.637 315.384 203.837 315.176 204.861 314.76C205.917 314.344 206.877 313.72 207.741 312.888L211.725 317.208C210.541 318.552 209.053 319.592 207.261 320.328C205.469 321.032 203.405 321.384 201.069 321.384ZM225.073 321L214.225 295.176H221.953L230.977 317.4H227.137L236.497 295.176H243.697L232.801 321H225.073ZM258.866 321.384C255.922 321.384 253.33 320.808 251.09 319.656C248.882 318.504 247.17 316.936 245.954 314.952C244.738 312.936 244.13 310.648 244.13 308.088C244.13 305.496 244.722 303.208 245.906 301.224C247.122 299.208 248.77 297.64 250.85 296.52C252.93 295.368 255.282 294.792 257.906 294.792C260.434 294.792 262.706 295.336 264.722 296.424C266.77 297.48 268.386 299.016 269.57 301.032C270.754 303.016 271.346 305.4 271.346 308.184C271.346 308.472 271.33 308.808 271.298 309.192C271.266 309.544 271.234 309.88 271.202 310.2H250.226V305.832H267.266L264.386 307.128C264.386 305.784 264.114 304.616 263.57 303.624C263.026 302.632 262.274 301.864 261.314 301.32C260.354 300.744 259.234 300.456 257.954 300.456C256.674 300.456 255.538 300.744 254.546 301.32C253.586 301.864 252.834 302.648 252.29 303.672C251.746 304.664 251.474 305.848 251.474 307.224V308.376C251.474 309.784 251.778 311.032 252.386 312.12C253.026 313.176 253.906 313.992 255.026 314.568C256.178 315.112 257.522 315.384 259.058 315.384C260.434 315.384 261.634 315.176 262.658 314.76C263.714 314.344 264.674 313.72 265.538 312.888L269.522 317.208C268.338 318.552 266.85 319.592 265.058 320.328C263.266 321.032 261.202 321.384 258.866 321.384ZM276.331 321V285.384H283.819V321H276.331ZM303.057 321.384C300.305 321.384 297.857 320.808 295.713 319.656C293.601 318.504 291.921 316.936 290.673 314.952C289.457 312.936 288.849 310.648 288.849 308.088C288.849 305.496 289.457 303.208 290.673 301.224C291.921 299.208 293.601 297.64 295.713 296.52C297.857 295.368 300.305 294.792 303.057 294.792C305.777 294.792 308.209 295.368 310.353 296.52C312.497 297.64 314.177 299.192 315.393 301.176C316.609 303.16 317.217 305.464 317.217 308.088C317.217 310.648 316.609 312.936 315.393 314.952C314.177 316.936 312.497 318.504 310.353 319.656C308.209 320.808 305.777 321.384 303.057 321.384ZM303.057 315.24C304.305 315.24 305.425 314.952 306.417 314.376C307.409 313.8 308.193 312.984 308.769 311.928C309.345 310.84 309.633 309.56 309.633 308.088C309.633 306.584 309.345 305.304 308.769 304.248C308.193 303.192 307.409 302.376 306.417 301.8C305.425 301.224 304.305 300.936 303.057 300.936C301.809 300.936 300.689 301.224 299.697 301.8C298.705 302.376 297.905 303.192 297.297 304.248C296.721 305.304 296.433 306.584 296.433 308.088C296.433 309.56 296.721 310.84 297.297 311.928C297.905 312.984 298.705 313.8 299.697 314.376C300.689 314.952 301.809 315.24 303.057 315.24ZM337.486 321.384C335.31 321.384 333.406 320.904 331.774 319.944C330.142 318.984 328.862 317.528 327.934 315.576C327.038 313.592 326.59 311.096 326.59 308.088C326.59 305.048 327.022 302.552 327.886 300.6C328.75 298.648 329.998 297.192 331.63 296.232C333.262 295.272 335.214 294.792 337.486 294.792C339.918 294.792 342.094 295.352 344.014 296.472C345.966 297.56 347.502 299.096 348.622 301.08C349.774 303.064 350.35 305.4 350.35 308.088C350.35 310.808 349.774 313.16 348.622 315.144C347.502 317.128 345.966 318.664 344.014 319.752C342.094 320.84 339.918 321.384 337.486 321.384ZM322.222 330.312V295.176H329.374V300.456L329.23 308.136L329.71 315.768V330.312H322.222ZM336.19 315.24C337.438 315.24 338.542 314.952 339.502 314.376C340.494 313.8 341.278 312.984 341.854 311.928C342.462 310.84 342.766 309.56 342.766 308.088C342.766 306.584 342.462 305.304 341.854 304.248C341.278 303.192 340.494 302.376 339.502 301.8C338.542 301.224 337.438 300.936 336.19 300.936C334.942 300.936 333.822 301.224 332.83 301.8C331.838 302.376 331.054 303.192 330.478 304.248C329.902 305.304 329.614 306.584 329.614 308.088C329.614 309.56 329.902 310.84 330.478 311.928C331.054 312.984 331.838 313.8 332.83 314.376C333.822 314.952 334.942 315.24 336.19 315.24ZM368.178 321.384C365.234 321.384 362.642 320.808 360.402 319.656C358.194 318.504 356.482 316.936 355.266 314.952C354.05 312.936 353.442 310.648 353.442 308.088C353.442 305.496 354.034 303.208 355.218 301.224C356.434 299.208 358.082 297.64 360.162 296.52C362.242 295.368 364.594 294.792 367.218 294.792C369.746 294.792 372.018 295.336 374.034 296.424C376.082 297.48 377.698 299.016 378.882 301.032C380.066 303.016 380.658 305.4 380.658 308.184C380.658 308.472 380.642 308.808 380.61 309.192C380.578 309.544 380.546 309.88 380.514 310.2H359.538V305.832H376.578L373.698 307.128C373.698 305.784 373.426 304.616 372.882 303.624C372.338 302.632 371.586 301.864 370.626 301.32C369.666 300.744 368.546 300.456 367.266 300.456C365.986 300.456 364.85 300.744 363.858 301.32C362.898 301.864 362.146 302.648 361.602 303.672C361.058 304.664 360.786 305.848 360.786 307.224V308.376C360.786 309.784 361.09 311.032 361.698 312.12C362.338 313.176 363.218 313.992 364.338 314.568C365.49 315.112 366.834 315.384 368.37 315.384C369.746 315.384 370.946 315.176 371.97 314.76C373.026 314.344 373.986 313.72 374.85 312.888L378.834 317.208C377.65 318.552 376.162 319.592 374.37 320.328C372.578 321.032 370.514 321.384 368.178 321.384ZM385.644 321V295.176H392.796V302.472L391.788 300.36C392.556 298.536 393.788 297.16 395.484 296.232C397.18 295.272 399.244 294.792 401.676 294.792V301.704C401.356 301.672 401.068 301.656 400.812 301.656C400.556 301.624 400.284 301.608 399.996 301.608C397.948 301.608 396.284 302.2 395.004 303.384C393.756 304.536 393.132 306.344 393.132 308.808V321H385.644Z",fill:"white"}),e("path",{d:"M93 96C95.2091 96 97 94.2091 97 92C97 89.7909 95.2091 88 93 88C90.7909 88 89 89.7909 89 92C89 94.2091 90.7909 96 93 96Z",fill:"white"}),e("path",{d:"M108.68 98V86.8H109.992L115.016 95.264H114.312L119.272 86.8H120.584L120.6 98H119.064L119.048 89.216H119.416L115 96.64H114.264L109.816 89.216H110.216V98H108.68ZM129.001 98V96.208L128.921 95.872V92.816C128.921 92.1653 128.729 91.664 128.345 91.312C127.972 90.9493 127.407 90.768 126.649 90.768C126.148 90.768 125.657 90.8533 125.177 91.024C124.697 91.184 124.292 91.4027 123.961 91.68L123.321 90.528C123.759 90.176 124.281 89.9093 124.889 89.728C125.508 89.536 126.153 89.44 126.825 89.44C127.988 89.44 128.884 89.7227 129.513 90.288C130.143 90.8533 130.457 91.7173 130.457 92.88V98H129.001ZM126.217 98.096C125.588 98.096 125.033 97.9893 124.553 97.776C124.084 97.5627 123.721 97.2693 123.465 96.896C123.209 96.512 123.081 96.08 123.081 95.6C123.081 95.1413 123.188 94.7253 123.401 94.352C123.625 93.9787 123.983 93.68 124.473 93.456C124.975 93.232 125.647 93.12 126.489 93.12H129.177V94.224H126.553C125.785 94.224 125.268 94.352 125.001 94.608C124.735 94.864 124.601 95.1733 124.601 95.536C124.601 95.952 124.767 96.288 125.097 96.544C125.428 96.7893 125.887 96.912 126.473 96.912C127.049 96.912 127.551 96.784 127.977 96.528C128.415 96.272 128.729 95.8987 128.921 95.408L129.225 96.464C129.023 96.9653 128.665 97.3653 128.153 97.664C127.641 97.952 126.996 98.096 126.217 98.096ZM133.3 98V89.52H134.772V91.824L134.628 91.248C134.862 90.6613 135.257 90.2133 135.812 89.904C136.366 89.5947 137.049 89.44 137.86 89.44V90.928C137.796 90.9173 137.732 90.912 137.668 90.912C137.614 90.912 137.561 90.912 137.508 90.912C136.686 90.912 136.036 91.1573 135.556 91.648C135.076 92.1387 134.836 92.848 134.836 93.776V98H133.3ZM141.001 95.952L141.033 93.984L145.913 89.52H147.769L144.025 93.2L143.193 93.904L141.001 95.952ZM139.753 98V86.128H141.289V98H139.753ZM146.233 98L142.905 93.872L143.897 92.64L148.121 98H146.233ZM153.024 98.096C152.299 98.096 151.659 97.9627 151.104 97.696C150.56 97.4293 150.133 97.024 149.824 96.48C149.525 95.9253 149.376 95.232 149.376 94.4V89.52H150.912V94.224C150.912 95.056 151.109 95.68 151.504 96.096C151.909 96.512 152.475 96.72 153.2 96.72C153.733 96.72 154.197 96.6133 154.592 96.4C154.987 96.176 155.291 95.856 155.504 95.44C155.717 95.0133 155.824 94.5013 155.824 93.904V89.52H157.36V98H155.904V95.712L156.144 96.32C155.867 96.8853 155.451 97.3227 154.896 97.632C154.341 97.9413 153.717 98.096 153.024 98.096ZM164.78 98.096C164.076 98.096 163.431 97.936 162.844 97.616C162.268 97.2853 161.804 96.8 161.452 96.16C161.111 95.52 160.94 94.72 160.94 93.76C160.94 92.8 161.105 92 161.436 91.36C161.777 90.72 162.236 90.24 162.812 89.92C163.399 89.6 164.055 89.44 164.78 89.44C165.612 89.44 166.348 89.6213 166.988 89.984C167.628 90.3467 168.135 90.8533 168.508 91.504C168.881 92.144 169.068 92.896 169.068 93.76C169.068 94.624 168.881 95.3813 168.508 96.032C168.135 96.6827 167.628 97.1893 166.988 97.552C166.348 97.9147 165.612 98.096 164.78 98.096ZM160.284 101.104V89.52H161.756V91.808L161.66 93.776L161.82 95.744V101.104H160.284ZM164.652 96.752C165.196 96.752 165.681 96.6293 166.108 96.384C166.545 96.1387 166.887 95.792 167.132 95.344C167.388 94.8853 167.516 94.3573 167.516 93.76C167.516 93.152 167.388 92.6293 167.132 92.192C166.887 91.744 166.545 91.3973 166.108 91.152C165.681 90.9067 165.196 90.784 164.652 90.784C164.119 90.784 163.633 90.9067 163.196 91.152C162.769 91.3973 162.428 91.744 162.172 92.192C161.927 92.6293 161.804 93.152 161.804 93.76C161.804 94.3573 161.927 94.8853 162.172 95.344C162.428 95.792 162.769 96.1387 163.196 96.384C163.633 96.6293 164.119 96.752 164.652 96.752Z",fill:"white"}),e("path",{d:"M193 195C195.209 195 197 193.209 197 191C197 188.791 195.209 187 193 187C190.791 187 189 188.791 189 191C189 193.209 190.791 195 193 195Z",fill:"white"}),e("path",{d:"M210.12 197.128C209.459 197.128 208.84 196.989 208.264 196.712C207.688 196.435 207.219 196.035 206.856 195.512L207.784 194.424C208.093 194.851 208.44 195.181 208.824 195.416C209.219 195.64 209.651 195.752 210.12 195.752C211.4 195.752 212.04 194.995 212.04 193.48V187.192H207.992V185.8H213.624V193.4C213.624 194.648 213.325 195.581 212.728 196.2C212.141 196.819 211.272 197.128 210.12 197.128ZM221.923 197V195.208L221.843 194.872V191.816C221.843 191.165 221.651 190.664 221.267 190.312C220.894 189.949 220.328 189.768 219.571 189.768C219.07 189.768 218.579 189.853 218.099 190.024C217.619 190.184 217.214 190.403 216.883 190.68L216.243 189.528C216.68 189.176 217.203 188.909 217.811 188.728C218.43 188.536 219.075 188.44 219.747 188.44C220.91 188.44 221.806 188.723 222.435 189.288C223.064 189.853 223.379 190.717 223.379 191.88V197H221.923ZM219.139 197.096C218.51 197.096 217.955 196.989 217.475 196.776C217.006 196.563 216.643 196.269 216.387 195.896C216.131 195.512 216.003 195.08 216.003 194.6C216.003 194.141 216.11 193.725 216.323 193.352C216.547 192.979 216.904 192.68 217.395 192.456C217.896 192.232 218.568 192.12 219.411 192.12H222.099V193.224H219.475C218.707 193.224 218.19 193.352 217.923 193.608C217.656 193.864 217.523 194.173 217.523 194.536C217.523 194.952 217.688 195.288 218.019 195.544C218.35 195.789 218.808 195.912 219.395 195.912C219.971 195.912 220.472 195.784 220.899 195.528C221.336 195.272 221.651 194.899 221.843 194.408L222.147 195.464C221.944 195.965 221.587 196.365 221.075 196.664C220.563 196.952 219.918 197.096 219.139 197.096ZM228.289 197L224.577 188.52H226.177L229.473 196.2H228.705L232.065 188.52H233.569L229.857 197H228.289ZM240.001 197V195.208L239.921 194.872V191.816C239.921 191.165 239.729 190.664 239.345 190.312C238.972 189.949 238.407 189.768 237.649 189.768C237.148 189.768 236.657 189.853 236.177 190.024C235.697 190.184 235.292 190.403 234.961 190.68L234.321 189.528C234.759 189.176 235.281 188.909 235.889 188.728C236.508 188.536 237.153 188.44 237.825 188.44C238.988 188.44 239.884 188.723 240.513 189.288C241.143 189.853 241.457 190.717 241.457 191.88V197H240.001ZM237.217 197.096C236.588 197.096 236.033 196.989 235.553 196.776C235.084 196.563 234.721 196.269 234.465 195.896C234.209 195.512 234.081 195.08 234.081 194.6C234.081 194.141 234.188 193.725 234.401 193.352C234.625 192.979 234.983 192.68 235.473 192.456C235.975 192.232 236.647 192.12 237.489 192.12H240.177V193.224H237.553C236.785 193.224 236.268 193.352 236.001 193.608C235.735 193.864 235.601 194.173 235.601 194.536C235.601 194.952 235.767 195.288 236.097 195.544C236.428 195.789 236.887 195.912 237.473 195.912C238.049 195.912 238.551 195.784 238.977 195.528C239.415 195.272 239.729 194.899 239.921 194.408L240.225 195.464C240.023 195.965 239.665 196.365 239.153 196.664C238.641 196.952 237.996 197.096 237.217 197.096ZM252.085 197.128C251.231 197.128 250.415 197 249.637 196.744C248.858 196.477 248.245 196.136 247.797 195.72L248.389 194.472C248.815 194.845 249.359 195.155 250.021 195.4C250.682 195.645 251.37 195.768 252.085 195.768C252.735 195.768 253.263 195.693 253.669 195.544C254.074 195.395 254.373 195.192 254.565 194.936C254.757 194.669 254.853 194.371 254.853 194.04C254.853 193.656 254.725 193.347 254.469 193.112C254.223 192.877 253.898 192.691 253.493 192.552C253.098 192.403 252.661 192.275 252.181 192.168C251.701 192.061 251.215 191.939 250.725 191.8C250.245 191.651 249.802 191.464 249.397 191.24C249.002 191.016 248.682 190.717 248.437 190.344C248.191 189.96 248.069 189.469 248.069 188.872C248.069 188.296 248.218 187.768 248.517 187.288C248.826 186.797 249.295 186.408 249.925 186.12C250.565 185.821 251.375 185.672 252.357 185.672C253.007 185.672 253.653 185.757 254.293 185.928C254.933 186.099 255.487 186.344 255.957 186.664L255.429 187.944C254.949 187.624 254.442 187.395 253.909 187.256C253.375 187.107 252.858 187.032 252.357 187.032C251.727 187.032 251.21 187.112 250.805 187.272C250.399 187.432 250.101 187.645 249.909 187.912C249.727 188.179 249.637 188.477 249.637 188.808C249.637 189.203 249.759 189.517 250.005 189.752C250.261 189.987 250.586 190.173 250.981 190.312C251.386 190.451 251.829 190.579 252.309 190.696C252.789 190.803 253.269 190.925 253.749 191.064C254.239 191.203 254.682 191.384 255.077 191.608C255.482 191.832 255.807 192.131 256.053 192.504C256.298 192.877 256.421 193.357 256.421 193.944C256.421 194.509 256.266 195.037 255.957 195.528C255.647 196.008 255.167 196.397 254.517 196.696C253.877 196.984 253.066 197.128 252.085 197.128ZM262.23 197.096C261.366 197.096 260.593 196.909 259.91 196.536C259.238 196.163 258.71 195.651 258.326 195C257.942 194.349 257.75 193.603 257.75 192.76C257.75 191.917 257.942 191.171 258.326 190.52C258.71 189.869 259.238 189.363 259.91 189C260.593 188.627 261.366 188.44 262.23 188.44C262.998 188.44 263.681 188.595 264.278 188.904C264.886 189.203 265.355 189.651 265.686 190.248L264.518 191C264.241 190.584 263.899 190.28 263.494 190.088C263.099 189.885 262.673 189.784 262.214 189.784C261.659 189.784 261.163 189.907 260.726 190.152C260.289 190.397 259.942 190.744 259.686 191.192C259.43 191.629 259.302 192.152 259.302 192.76C259.302 193.368 259.43 193.896 259.686 194.344C259.942 194.792 260.289 195.139 260.726 195.384C261.163 195.629 261.659 195.752 262.214 195.752C262.673 195.752 263.099 195.656 263.494 195.464C263.899 195.261 264.241 194.952 264.518 194.536L265.686 195.272C265.355 195.859 264.886 196.312 264.278 196.632C263.681 196.941 262.998 197.096 262.23 197.096ZM267.675 197V188.52H269.147V190.824L269.003 190.248C269.237 189.661 269.632 189.213 270.187 188.904C270.741 188.595 271.424 188.44 272.235 188.44V189.928C272.171 189.917 272.107 189.912 272.043 189.912C271.989 189.912 271.936 189.912 271.883 189.912C271.061 189.912 270.411 190.157 269.931 190.648C269.451 191.139 269.211 191.848 269.211 192.776V197H267.675ZM274.128 197V188.52H275.664V197H274.128ZM274.896 186.888C274.597 186.888 274.347 186.792 274.144 186.6C273.952 186.408 273.856 186.173 273.856 185.896C273.856 185.608 273.952 185.368 274.144 185.176C274.347 184.984 274.597 184.888 274.896 184.888C275.195 184.888 275.44 184.984 275.632 185.176C275.835 185.357 275.936 185.587 275.936 185.864C275.936 186.152 275.84 186.397 275.648 186.6C275.456 186.792 275.205 186.888 274.896 186.888ZM283.093 197.096C282.389 197.096 281.743 196.936 281.157 196.616C280.581 196.285 280.117 195.8 279.765 195.16C279.423 194.52 279.253 193.72 279.253 192.76C279.253 191.8 279.418 191 279.749 190.36C280.09 189.72 280.549 189.24 281.125 188.92C281.711 188.6 282.367 188.44 283.093 188.44C283.925 188.44 284.661 188.621 285.301 188.984C285.941 189.347 286.447 189.853 286.821 190.504C287.194 191.144 287.381 191.896 287.381 192.76C287.381 193.624 287.194 194.381 286.821 195.032C286.447 195.683 285.941 196.189 285.301 196.552C284.661 196.915 283.925 197.096 283.093 197.096ZM278.597 200.104V188.52H280.069V190.808L279.973 192.776L280.133 194.744V200.104H278.597ZM282.965 195.752C283.509 195.752 283.994 195.629 284.421 195.384C284.858 195.139 285.199 194.792 285.445 194.344C285.701 193.885 285.829 193.357 285.829 192.76C285.829 192.152 285.701 191.629 285.445 191.192C285.199 190.744 284.858 190.397 284.421 190.152C283.994 189.907 283.509 189.784 282.965 189.784C282.431 189.784 281.946 189.907 281.509 190.152C281.082 190.397 280.741 190.744 280.485 191.192C280.239 191.629 280.117 192.152 280.117 192.76C280.117 193.357 280.239 193.885 280.485 194.344C280.741 194.792 281.082 195.139 281.509 195.384C281.946 195.629 282.431 195.752 282.965 195.752ZM292.415 197.096C291.562 197.096 290.9 196.867 290.431 196.408C289.962 195.949 289.727 195.293 289.727 194.44V186.664H291.263V194.376C291.263 194.835 291.375 195.187 291.599 195.432C291.834 195.677 292.164 195.8 292.591 195.8C293.071 195.8 293.471 195.667 293.791 195.4L294.271 196.504C294.036 196.707 293.754 196.856 293.423 196.952C293.103 197.048 292.767 197.096 292.415 197.096ZM288.287 189.784V188.52H293.695V189.784H288.287Z",fill:"white"}),e("path",{d:"M371 371C373.209 371 375 369.209 375 367C375 364.791 373.209 363 371 363C368.791 363 367 364.791 367 367C367 369.209 368.791 371 371 371Z",fill:"white"}),e("path",{d:"M389.912 373L384.984 361.8H386.712L391.24 372.136H390.248L394.808 361.8H396.408L391.496 373H389.912ZM400.899 373.096C400.174 373.096 399.534 372.963 398.979 372.696C398.435 372.429 398.008 372.024 397.699 371.48C397.4 370.925 397.251 370.232 397.251 369.4V364.52H398.787V369.224C398.787 370.056 398.984 370.68 399.379 371.096C399.784 371.512 400.35 371.72 401.075 371.72C401.608 371.72 402.072 371.613 402.467 371.4C402.862 371.176 403.166 370.856 403.379 370.44C403.592 370.013 403.699 369.501 403.699 368.904V364.52H405.235V373H403.779V370.712L404.019 371.32C403.742 371.885 403.326 372.323 402.771 372.632C402.216 372.941 401.592 373.096 400.899 373.096ZM411.935 373.096C411.028 373.096 410.228 372.909 409.535 372.536C408.852 372.163 408.319 371.651 407.935 371C407.562 370.349 407.375 369.603 407.375 368.76C407.375 367.917 407.556 367.171 407.919 366.52C408.292 365.869 408.799 365.363 409.439 365C410.09 364.627 410.82 364.44 411.631 364.44C412.452 364.44 413.178 364.621 413.807 364.984C414.436 365.347 414.927 365.859 415.279 366.52C415.642 367.171 415.823 367.933 415.823 368.808C415.823 368.872 415.818 368.947 415.807 369.032C415.807 369.117 415.802 369.197 415.791 369.272H408.575V368.168H414.991L414.367 368.552C414.378 368.008 414.266 367.523 414.031 367.096C413.796 366.669 413.471 366.339 413.055 366.104C412.65 365.859 412.175 365.736 411.631 365.736C411.098 365.736 410.623 365.859 410.207 366.104C409.791 366.339 409.466 366.675 409.231 367.112C408.996 367.539 408.879 368.029 408.879 368.584V368.84C408.879 369.405 409.007 369.912 409.263 370.36C409.53 370.797 409.898 371.139 410.367 371.384C410.836 371.629 411.375 371.752 411.983 371.752C412.484 371.752 412.938 371.667 413.343 371.496C413.759 371.325 414.122 371.069 414.431 370.728L415.279 371.72C414.895 372.168 414.415 372.509 413.839 372.744C413.274 372.979 412.639 373.096 411.935 373.096ZM423.917 373.128C423.256 373.128 422.637 372.989 422.061 372.712C421.485 372.435 421.016 372.035 420.653 371.512L421.581 370.424C421.89 370.851 422.237 371.181 422.621 371.416C423.016 371.64 423.448 371.752 423.917 371.752C425.197 371.752 425.837 370.995 425.837 369.48V363.192H421.789V361.8H427.421V369.4C427.421 370.648 427.122 371.581 426.525 372.2C425.938 372.819 425.069 373.128 423.917 373.128ZM432.888 373.096C432.184 373.096 431.512 373 430.872 372.808C430.243 372.616 429.747 372.381 429.384 372.104L430.024 370.888C430.387 371.133 430.835 371.341 431.368 371.512C431.901 371.683 432.445 371.768 433 371.768C433.715 371.768 434.227 371.667 434.536 371.464C434.856 371.261 435.016 370.979 435.016 370.616C435.016 370.349 434.92 370.141 434.728 369.992C434.536 369.843 434.28 369.731 433.96 369.656C433.651 369.581 433.304 369.517 432.92 369.464C432.536 369.4 432.152 369.325 431.768 369.24C431.384 369.144 431.032 369.016 430.712 368.856C430.392 368.685 430.136 368.456 429.944 368.168C429.752 367.869 429.656 367.475 429.656 366.984C429.656 366.472 429.8 366.024 430.088 365.64C430.376 365.256 430.781 364.963 431.304 364.76C431.837 364.547 432.467 364.44 433.192 364.44C433.747 364.44 434.307 364.509 434.872 364.648C435.448 364.776 435.917 364.963 436.28 365.208L435.624 366.424C435.24 366.168 434.84 365.992 434.424 365.896C434.008 365.8 433.592 365.752 433.176 365.752C432.504 365.752 432.003 365.864 431.672 366.088C431.341 366.301 431.176 366.579 431.176 366.92C431.176 367.208 431.272 367.432 431.464 367.592C431.667 367.741 431.923 367.859 432.232 367.944C432.552 368.029 432.904 368.104 433.288 368.168C433.672 368.221 434.056 368.296 434.44 368.392C434.824 368.477 435.171 368.6 435.48 368.76C435.8 368.92 436.056 369.144 436.248 369.432C436.451 369.72 436.552 370.104 436.552 370.584C436.552 371.096 436.403 371.539 436.104 371.912C435.805 372.285 435.384 372.579 434.84 372.792C434.296 372.995 433.645 373.096 432.888 373.096Z",fill:"white"}),e("path",{d:"M470 474C472.209 474 474 472.209 474 470C474 467.791 472.209 466 470 466C467.791 466 466 467.791 466 470C466 472.209 467.791 474 470 474Z",fill:"white"}),e("path",{d:"M485.68 476V464.8H490.048C491.029 464.8 491.867 464.955 492.56 465.264C493.253 465.573 493.787 466.021 494.16 466.608C494.533 467.195 494.72 467.893 494.72 468.704C494.72 469.515 494.533 470.213 494.16 470.8C493.787 471.376 493.253 471.819 492.56 472.128C491.867 472.437 491.029 472.592 490.048 472.592H486.56L487.28 471.856V476H485.68ZM493.168 476L490.32 471.936H492.032L494.912 476H493.168ZM487.28 472.016L486.56 471.232H490C491.024 471.232 491.797 471.013 492.32 470.576C492.853 470.128 493.12 469.504 493.12 468.704C493.12 467.904 492.853 467.285 492.32 466.848C491.797 466.411 491.024 466.192 490 466.192H486.56L487.28 465.392V472.016ZM500.857 476.096C499.95 476.096 499.15 475.909 498.457 475.536C497.774 475.163 497.241 474.651 496.857 474C496.484 473.349 496.297 472.603 496.297 471.76C496.297 470.917 496.478 470.171 496.841 469.52C497.214 468.869 497.721 468.363 498.361 468C499.012 467.627 499.742 467.44 500.553 467.44C501.374 467.44 502.1 467.621 502.729 467.984C503.358 468.347 503.849 468.859 504.201 469.52C504.564 470.171 504.745 470.933 504.745 471.808C504.745 471.872 504.74 471.947 504.729 472.032C504.729 472.117 504.724 472.197 504.713 472.272H497.497V471.168H503.913L503.289 471.552C503.3 471.008 503.188 470.523 502.953 470.096C502.718 469.669 502.393 469.339 501.977 469.104C501.572 468.859 501.097 468.736 500.553 468.736C500.02 468.736 499.545 468.859 499.129 469.104C498.713 469.339 498.388 469.675 498.153 470.112C497.918 470.539 497.801 471.029 497.801 471.584V471.84C497.801 472.405 497.929 472.912 498.185 473.36C498.452 473.797 498.82 474.139 499.289 474.384C499.758 474.629 500.297 474.752 500.905 474.752C501.406 474.752 501.86 474.667 502.265 474.496C502.681 474.325 503.044 474.069 503.353 473.728L504.201 474.72C503.817 475.168 503.337 475.509 502.761 475.744C502.196 475.979 501.561 476.096 500.857 476.096ZM511.908 476V474.208L511.828 473.872V470.816C511.828 470.165 511.636 469.664 511.252 469.312C510.878 468.949 510.313 468.768 509.556 468.768C509.054 468.768 508.564 468.853 508.084 469.024C507.604 469.184 507.198 469.403 506.868 469.68L506.228 468.528C506.665 468.176 507.188 467.909 507.796 467.728C508.414 467.536 509.06 467.44 509.732 467.44C510.894 467.44 511.79 467.723 512.42 468.288C513.049 468.853 513.364 469.717 513.364 470.88V476H511.908ZM509.124 476.096C508.494 476.096 507.94 475.989 507.46 475.776C506.99 475.563 506.628 475.269 506.372 474.896C506.116 474.512 505.988 474.08 505.988 473.6C505.988 473.141 506.094 472.725 506.308 472.352C506.532 471.979 506.889 471.68 507.38 471.456C507.881 471.232 508.553 471.12 509.396 471.12H512.084V472.224H509.46C508.692 472.224 508.174 472.352 507.908 472.608C507.641 472.864 507.508 473.173 507.508 473.536C507.508 473.952 507.673 474.288 508.004 474.544C508.334 474.789 508.793 474.912 509.38 474.912C509.956 474.912 510.457 474.784 510.884 474.528C511.321 474.272 511.636 473.899 511.828 473.408L512.132 474.464C511.929 474.965 511.572 475.365 511.06 475.664C510.548 475.952 509.902 476.096 509.124 476.096ZM519.902 476.096C519.038 476.096 518.265 475.909 517.582 475.536C516.91 475.163 516.382 474.651 515.998 474C515.614 473.349 515.422 472.603 515.422 471.76C515.422 470.917 515.614 470.171 515.998 469.52C516.382 468.869 516.91 468.363 517.582 468C518.265 467.627 519.038 467.44 519.902 467.44C520.67 467.44 521.353 467.595 521.95 467.904C522.558 468.203 523.027 468.651 523.358 469.248L522.19 470C521.913 469.584 521.571 469.28 521.166 469.088C520.771 468.885 520.345 468.784 519.886 468.784C519.331 468.784 518.835 468.907 518.398 469.152C517.961 469.397 517.614 469.744 517.358 470.192C517.102 470.629 516.974 471.152 516.974 471.76C516.974 472.368 517.102 472.896 517.358 473.344C517.614 473.792 517.961 474.139 518.398 474.384C518.835 474.629 519.331 474.752 519.886 474.752C520.345 474.752 520.771 474.656 521.166 474.464C521.571 474.261 521.913 473.952 522.19 473.536L523.358 474.272C523.027 474.859 522.558 475.312 521.95 475.632C521.353 475.941 520.67 476.096 519.902 476.096ZM528.368 476.096C527.515 476.096 526.853 475.867 526.384 475.408C525.915 474.949 525.68 474.293 525.68 473.44V465.664H527.216V473.376C527.216 473.835 527.328 474.187 527.552 474.432C527.787 474.677 528.117 474.8 528.544 474.8C529.024 474.8 529.424 474.667 529.744 474.4L530.224 475.504C529.989 475.707 529.707 475.856 529.376 475.952C529.056 476.048 528.72 476.096 528.368 476.096ZM524.24 468.784V467.52H529.648V468.784H524.24ZM530.993 479.2C530.641 479.2 530.305 479.157 529.985 479.072C529.654 478.987 529.377 478.859 529.153 478.688L529.649 477.504C529.969 477.771 530.385 477.904 530.897 477.904C531.302 477.904 531.612 477.776 531.825 477.52C532.049 477.275 532.161 476.907 532.161 476.416V467.52H533.697V476.384C533.697 477.248 533.462 477.931 532.993 478.432C532.534 478.944 531.868 479.2 530.993 479.2ZM532.929 465.888C532.63 465.888 532.38 465.792 532.177 465.6C531.985 465.408 531.889 465.173 531.889 464.896C531.889 464.608 531.985 464.368 532.177 464.176C532.38 463.984 532.63 463.888 532.929 463.888C533.228 463.888 533.473 463.984 533.665 464.176C533.868 464.357 533.969 464.587 533.969 464.864C533.969 465.152 533.873 465.397 533.681 465.6C533.489 465.792 533.238 465.888 532.929 465.888ZM539.06 476.096C538.356 476.096 537.684 476 537.044 475.808C536.415 475.616 535.919 475.381 535.556 475.104L536.196 473.888C536.559 474.133 537.007 474.341 537.54 474.512C538.073 474.683 538.617 474.768 539.172 474.768C539.887 474.768 540.399 474.667 540.708 474.464C541.028 474.261 541.188 473.979 541.188 473.616C541.188 473.349 541.092 473.141 540.9 472.992C540.708 472.843 540.452 472.731 540.132 472.656C539.823 472.581 539.476 472.517 539.092 472.464C538.708 472.4 538.324 472.325 537.94 472.24C537.556 472.144 537.204 472.016 536.884 471.856C536.564 471.685 536.308 471.456 536.116 471.168C535.924 470.869 535.828 470.475 535.828 469.984C535.828 469.472 535.972 469.024 536.26 468.64C536.548 468.256 536.953 467.963 537.476 467.76C538.009 467.547 538.639 467.44 539.364 467.44C539.919 467.44 540.479 467.509 541.044 467.648C541.62 467.776 542.089 467.963 542.452 468.208L541.796 469.424C541.412 469.168 541.012 468.992 540.596 468.896C540.18 468.8 539.764 468.752 539.348 468.752C538.676 468.752 538.175 468.864 537.844 469.088C537.513 469.301 537.348 469.579 537.348 469.92C537.348 470.208 537.444 470.432 537.636 470.592C537.839 470.741 538.095 470.859 538.404 470.944C538.724 471.029 539.076 471.104 539.46 471.168C539.844 471.221 540.228 471.296 540.612 471.392C540.996 471.477 541.343 471.6 541.652 471.76C541.972 471.92 542.228 472.144 542.42 472.432C542.623 472.72 542.724 473.104 542.724 473.584C542.724 474.096 542.575 474.539 542.276 474.912C541.977 475.285 541.556 475.579 541.012 475.792C540.468 475.995 539.817 476.096 539.06 476.096Z",fill:"white"}),e("path",{d:"M470 474C472.209 474 474 472.209 474 470C474 467.791 472.209 466 470 466C467.791 466 466 467.791 466 470C466 472.209 467.791 474 470 474Z",fill:"white"}),e("path",{d:"M485.68 476V464.8H490.048C491.029 464.8 491.867 464.955 492.56 465.264C493.253 465.573 493.787 466.021 494.16 466.608C494.533 467.195 494.72 467.893 494.72 468.704C494.72 469.515 494.533 470.213 494.16 470.8C493.787 471.376 493.253 471.819 492.56 472.128C491.867 472.437 491.029 472.592 490.048 472.592H486.56L487.28 471.856V476H485.68ZM493.168 476L490.32 471.936H492.032L494.912 476H493.168ZM487.28 472.016L486.56 471.232H490C491.024 471.232 491.797 471.013 492.32 470.576C492.853 470.128 493.12 469.504 493.12 468.704C493.12 467.904 492.853 467.285 492.32 466.848C491.797 466.411 491.024 466.192 490 466.192H486.56L487.28 465.392V472.016ZM500.857 476.096C499.95 476.096 499.15 475.909 498.457 475.536C497.774 475.163 497.241 474.651 496.857 474C496.484 473.349 496.297 472.603 496.297 471.76C496.297 470.917 496.478 470.171 496.841 469.52C497.214 468.869 497.721 468.363 498.361 468C499.012 467.627 499.742 467.44 500.553 467.44C501.374 467.44 502.1 467.621 502.729 467.984C503.358 468.347 503.849 468.859 504.201 469.52C504.564 470.171 504.745 470.933 504.745 471.808C504.745 471.872 504.74 471.947 504.729 472.032C504.729 472.117 504.724 472.197 504.713 472.272H497.497V471.168H503.913L503.289 471.552C503.3 471.008 503.188 470.523 502.953 470.096C502.718 469.669 502.393 469.339 501.977 469.104C501.572 468.859 501.097 468.736 500.553 468.736C500.02 468.736 499.545 468.859 499.129 469.104C498.713 469.339 498.388 469.675 498.153 470.112C497.918 470.539 497.801 471.029 497.801 471.584V471.84C497.801 472.405 497.929 472.912 498.185 473.36C498.452 473.797 498.82 474.139 499.289 474.384C499.758 474.629 500.297 474.752 500.905 474.752C501.406 474.752 501.86 474.667 502.265 474.496C502.681 474.325 503.044 474.069 503.353 473.728L504.201 474.72C503.817 475.168 503.337 475.509 502.761 475.744C502.196 475.979 501.561 476.096 500.857 476.096ZM511.908 476V474.208L511.828 473.872V470.816C511.828 470.165 511.636 469.664 511.252 469.312C510.878 468.949 510.313 468.768 509.556 468.768C509.054 468.768 508.564 468.853 508.084 469.024C507.604 469.184 507.198 469.403 506.868 469.68L506.228 468.528C506.665 468.176 507.188 467.909 507.796 467.728C508.414 467.536 509.06 467.44 509.732 467.44C510.894 467.44 511.79 467.723 512.42 468.288C513.049 468.853 513.364 469.717 513.364 470.88V476H511.908ZM509.124 476.096C508.494 476.096 507.94 475.989 507.46 475.776C506.99 475.563 506.628 475.269 506.372 474.896C506.116 474.512 505.988 474.08 505.988 473.6C505.988 473.141 506.094 472.725 506.308 472.352C506.532 471.979 506.889 471.68 507.38 471.456C507.881 471.232 508.553 471.12 509.396 471.12H512.084V472.224H509.46C508.692 472.224 508.174 472.352 507.908 472.608C507.641 472.864 507.508 473.173 507.508 473.536C507.508 473.952 507.673 474.288 508.004 474.544C508.334 474.789 508.793 474.912 509.38 474.912C509.956 474.912 510.457 474.784 510.884 474.528C511.321 474.272 511.636 473.899 511.828 473.408L512.132 474.464C511.929 474.965 511.572 475.365 511.06 475.664C510.548 475.952 509.902 476.096 509.124 476.096ZM519.902 476.096C519.038 476.096 518.265 475.909 517.582 475.536C516.91 475.163 516.382 474.651 515.998 474C515.614 473.349 515.422 472.603 515.422 471.76C515.422 470.917 515.614 470.171 515.998 469.52C516.382 468.869 516.91 468.363 517.582 468C518.265 467.627 519.038 467.44 519.902 467.44C520.67 467.44 521.353 467.595 521.95 467.904C522.558 468.203 523.027 468.651 523.358 469.248L522.19 470C521.913 469.584 521.571 469.28 521.166 469.088C520.771 468.885 520.345 468.784 519.886 468.784C519.331 468.784 518.835 468.907 518.398 469.152C517.961 469.397 517.614 469.744 517.358 470.192C517.102 470.629 516.974 471.152 516.974 471.76C516.974 472.368 517.102 472.896 517.358 473.344C517.614 473.792 517.961 474.139 518.398 474.384C518.835 474.629 519.331 474.752 519.886 474.752C520.345 474.752 520.771 474.656 521.166 474.464C521.571 474.261 521.913 473.952 522.19 473.536L523.358 474.272C523.027 474.859 522.558 475.312 521.95 475.632C521.353 475.941 520.67 476.096 519.902 476.096ZM528.368 476.096C527.515 476.096 526.853 475.867 526.384 475.408C525.915 474.949 525.68 474.293 525.68 473.44V465.664H527.216V473.376C527.216 473.835 527.328 474.187 527.552 474.432C527.787 474.677 528.117 474.8 528.544 474.8C529.024 474.8 529.424 474.667 529.744 474.4L530.224 475.504C529.989 475.707 529.707 475.856 529.376 475.952C529.056 476.048 528.72 476.096 528.368 476.096ZM524.24 468.784V467.52H529.648V468.784H524.24ZM530.993 479.2C530.641 479.2 530.305 479.157 529.985 479.072C529.654 478.987 529.377 478.859 529.153 478.688L529.649 477.504C529.969 477.771 530.385 477.904 530.897 477.904C531.302 477.904 531.612 477.776 531.825 477.52C532.049 477.275 532.161 476.907 532.161 476.416V467.52H533.697V476.384C533.697 477.248 533.462 477.931 532.993 478.432C532.534 478.944 531.868 479.2 530.993 479.2ZM532.929 465.888C532.63 465.888 532.38 465.792 532.177 465.6C531.985 465.408 531.889 465.173 531.889 464.896C531.889 464.608 531.985 464.368 532.177 464.176C532.38 463.984 532.63 463.888 532.929 463.888C533.228 463.888 533.473 463.984 533.665 464.176C533.868 464.357 533.969 464.587 533.969 464.864C533.969 465.152 533.873 465.397 533.681 465.6C533.489 465.792 533.238 465.888 532.929 465.888ZM539.06 476.096C538.356 476.096 537.684 476 537.044 475.808C536.415 475.616 535.919 475.381 535.556 475.104L536.196 473.888C536.559 474.133 537.007 474.341 537.54 474.512C538.073 474.683 538.617 474.768 539.172 474.768C539.887 474.768 540.399 474.667 540.708 474.464C541.028 474.261 541.188 473.979 541.188 473.616C541.188 473.349 541.092 473.141 540.9 472.992C540.708 472.843 540.452 472.731 540.132 472.656C539.823 472.581 539.476 472.517 539.092 472.464C538.708 472.4 538.324 472.325 537.94 472.24C537.556 472.144 537.204 472.016 536.884 471.856C536.564 471.685 536.308 471.456 536.116 471.168C535.924 470.869 535.828 470.475 535.828 469.984C535.828 469.472 535.972 469.024 536.26 468.64C536.548 468.256 536.953 467.963 537.476 467.76C538.009 467.547 538.639 467.44 539.364 467.44C539.919 467.44 540.479 467.509 541.044 467.648C541.62 467.776 542.089 467.963 542.452 468.208L541.796 469.424C541.412 469.168 541.012 468.992 540.596 468.896C540.18 468.8 539.764 468.752 539.348 468.752C538.676 468.752 538.175 468.864 537.844 469.088C537.513 469.301 537.348 469.579 537.348 469.92C537.348 470.208 537.444 470.432 537.636 470.592C537.839 470.741 538.095 470.859 538.404 470.944C538.724 471.029 539.076 471.104 539.46 471.168C539.844 471.221 540.228 471.296 540.612 471.392C540.996 471.477 541.343 471.6 541.652 471.76C541.972 471.92 542.228 472.144 542.42 472.432C542.623 472.72 542.724 473.104 542.724 473.584C542.724 474.096 542.575 474.539 542.276 474.912C541.977 475.285 541.556 475.579 541.012 475.792C540.468 475.995 539.817 476.096 539.06 476.096Z",fill:"white"}),e("path",{d:"M35 39C37.2091 39 39 37.2091 39 35C39 32.7909 37.2091 31 35 31C32.7909 31 31 32.7909 31 35C31 37.2091 32.7909 39 35 39Z",fill:"white"}),e("path",{d:"M55.32 41.128C53.848 41.128 52.6907 40.7067 51.848 39.864C51.0053 39.0213 50.584 37.7893 50.584 36.168V29.8H52.184V36.104C52.184 37.352 52.456 38.264 53 38.84C53.5547 39.416 54.3333 39.704 55.336 39.704C56.3493 39.704 57.128 39.416 57.672 38.84C58.2267 38.264 58.504 37.352 58.504 36.104V29.8H60.056V36.168C60.056 37.7893 59.6347 39.0213 58.792 39.864C57.96 40.7067 56.8027 41.128 55.32 41.128ZM63.3363 41V29.8H64.9363V41H63.3363ZM72.5863 41V29.8H77.3063C78.5009 29.8 79.5516 30.0347 80.4583 30.504C81.3756 30.9733 82.0849 31.6293 82.5863 32.472C83.0983 33.3147 83.3543 34.2907 83.3543 35.4C83.3543 36.5093 83.0983 37.4853 82.5863 38.328C82.0849 39.1707 81.3756 39.8267 80.4583 40.296C79.5516 40.7653 78.5009 41 77.3063 41H72.5863ZM74.1863 39.608H77.2103C78.1383 39.608 78.9383 39.432 79.6103 39.08C80.2929 38.728 80.8209 38.2373 81.1943 37.608C81.5676 36.968 81.7543 36.232 81.7543 35.4C81.7543 34.5573 81.5676 33.8213 81.1943 33.192C80.8209 32.5627 80.2929 32.072 79.6103 31.72C78.9383 31.368 78.1383 31.192 77.2103 31.192H74.1863V39.608ZM89.357 41.096C88.4503 41.096 87.6503 40.9093 86.957 40.536C86.2743 40.1627 85.741 39.6507 85.357 39C84.9837 38.3493 84.797 37.6027 84.797 36.76C84.797 35.9173 84.9783 35.1707 85.341 34.52C85.7143 33.8693 86.221 33.3627 86.861 33C87.5117 32.6267 88.2423 32.44 89.053 32.44C89.8743 32.44 90.5997 32.6213 91.229 32.984C91.8583 33.3467 92.349 33.8587 92.701 34.52C93.0637 35.1707 93.245 35.9333 93.245 36.808C93.245 36.872 93.2397 36.9467 93.229 37.032C93.229 37.1173 93.2237 37.1973 93.213 37.272H85.997V36.168H92.413L91.789 36.552C91.7997 36.008 91.6877 35.5227 91.453 35.096C91.2183 34.6693 90.893 34.3387 90.477 34.104C90.0717 33.8587 89.597 33.736 89.053 33.736C88.5197 33.736 88.045 33.8587 87.629 34.104C87.213 34.3387 86.8877 34.6747 86.653 35.112C86.4183 35.5387 86.301 36.0293 86.301 36.584V36.84C86.301 37.4053 86.429 37.912 86.685 38.36C86.9517 38.7973 87.3197 39.1387 87.789 39.384C88.2583 39.6293 88.797 39.752 89.405 39.752C89.9063 39.752 90.3597 39.6667 90.765 39.496C91.181 39.3253 91.5437 39.0693 91.853 38.728L92.701 39.72C92.317 40.168 91.837 40.5093 91.261 40.744C90.6957 40.9787 90.061 41.096 89.357 41.096ZM97.8099 41.096C97.1059 41.096 96.4339 41 95.7939 40.808C95.1645 40.616 94.6685 40.3813 94.3059 40.104L94.9459 38.888C95.3085 39.1333 95.7565 39.3413 96.2899 39.512C96.8232 39.6827 97.3672 39.768 97.9219 39.768C98.6365 39.768 99.1485 39.6667 99.4579 39.464C99.7779 39.2613 99.9379 38.9787 99.9379 38.616C99.9379 38.3493 99.8419 38.1413 99.6499 37.992C99.4579 37.8427 99.2019 37.7307 98.8819 37.656C98.5725 37.5813 98.2259 37.5173 97.8419 37.464C97.4579 37.4 97.0739 37.3253 96.6899 37.24C96.3059 37.144 95.9539 37.016 95.6339 36.856C95.3139 36.6853 95.0579 36.456 94.8659 36.168C94.6739 35.8693 94.5779 35.4747 94.5779 34.984C94.5779 34.472 94.7219 34.024 95.0099 33.64C95.2979 33.256 95.7032 32.9627 96.2259 32.76C96.7592 32.5467 97.3885 32.44 98.1139 32.44C98.6685 32.44 99.2285 32.5093 99.7939 32.648C100.37 32.776 100.839 32.9627 101.202 33.208L100.546 34.424C100.162 34.168 99.7619 33.992 99.3459 33.896C98.9299 33.8 98.5139 33.752 98.0979 33.752C97.4259 33.752 96.9245 33.864 96.5939 34.088C96.2632 34.3013 96.0979 34.5787 96.0979 34.92C96.0979 35.208 96.1939 35.432 96.3859 35.592C96.5885 35.7413 96.8445 35.8587 97.1539 35.944C97.4739 36.0293 97.8259 36.104 98.2099 36.168C98.5939 36.2213 98.9779 36.296 99.3619 36.392C99.7459 36.4773 100.093 36.6 100.402 36.76C100.722 36.92 100.978 37.144 101.17 37.432C101.373 37.72 101.474 38.104 101.474 38.584C101.474 39.096 101.325 39.5387 101.026 39.912C100.727 40.2853 100.306 40.5787 99.7619 40.792C99.2179 40.9947 98.5672 41.096 97.8099 41.096ZM103.394 41V32.52H104.93V41H103.394ZM104.162 30.888C103.863 30.888 103.612 30.792 103.41 30.6C103.218 30.408 103.122 30.1733 103.122 29.896C103.122 29.608 103.218 29.368 103.41 29.176C103.612 28.984 103.863 28.888 104.162 28.888C104.46 28.888 104.706 28.984 104.898 29.176C105.1 29.3573 105.202 29.5867 105.202 29.864C105.202 30.152 105.106 30.3973 104.914 30.6C104.722 30.792 104.471 30.888 104.162 30.888ZM111.574 44.2C110.796 44.2 110.038 44.088 109.302 43.864C108.577 43.6507 107.985 43.3413 107.526 42.936L108.262 41.752C108.657 42.0933 109.142 42.36 109.718 42.552C110.294 42.7547 110.897 42.856 111.526 42.856C112.529 42.856 113.265 42.6213 113.734 42.152C114.204 41.6827 114.438 40.968 114.438 40.008V38.216L114.598 36.536L114.518 34.84V32.52H115.974V39.848C115.974 41.3413 115.601 42.44 114.854 43.144C114.108 43.848 113.014 44.2 111.574 44.2ZM111.382 40.648C110.561 40.648 109.825 40.4773 109.174 40.136C108.534 39.784 108.022 39.2987 107.638 38.68C107.265 38.0613 107.078 37.3467 107.078 36.536C107.078 35.7147 107.265 35 107.638 34.392C108.022 33.7733 108.534 33.2933 109.174 32.952C109.825 32.6107 110.561 32.44 111.382 32.44C112.108 32.44 112.769 32.5893 113.366 32.888C113.964 33.176 114.438 33.624 114.79 34.232C115.153 34.84 115.334 35.608 115.334 36.536C115.334 37.4533 115.153 38.216 114.79 38.824C114.438 39.432 113.964 39.8907 113.366 40.2C112.769 40.4987 112.108 40.648 111.382 40.648ZM111.558 39.304C112.124 39.304 112.625 39.1867 113.062 38.952C113.5 38.7173 113.841 38.392 114.086 37.976C114.342 37.56 114.47 37.08 114.47 36.536C114.47 35.992 114.342 35.512 114.086 35.096C113.841 34.68 113.5 34.36 113.062 34.136C112.625 33.9013 112.124 33.784 111.558 33.784C110.993 33.784 110.486 33.9013 110.038 34.136C109.601 34.36 109.254 34.68 108.998 35.096C108.753 35.512 108.63 35.992 108.63 36.536C108.63 37.08 108.753 37.56 108.998 37.976C109.254 38.392 109.601 38.7173 110.038 38.952C110.486 39.1867 110.993 39.304 111.558 39.304ZM123.437 32.44C124.13 32.44 124.738 32.5733 125.261 32.84C125.794 33.1067 126.21 33.512 126.509 34.056C126.808 34.6 126.957 35.288 126.957 36.12V41H125.421V36.296C125.421 35.4747 125.218 34.856 124.813 34.44C124.418 34.024 123.858 33.816 123.133 33.816C122.589 33.816 122.114 33.9227 121.709 34.136C121.304 34.3493 120.989 34.664 120.765 35.08C120.552 35.496 120.445 36.0133 120.445 36.632V41H118.909V32.52H120.381V34.808L120.141 34.2C120.418 33.6453 120.845 33.2133 121.421 32.904C121.997 32.5947 122.669 32.44 123.437 32.44Z",fill:"white"})]}),e("defs",{children:e("clipPath",{id:"clip0_419_999",children:e("rect",{width:"560",height:"560",fill:"white"})})})]})})}),l("div",{className:"listWrap",children:[l("div",{className:"item analyze",children:[e("div",{className:"title",children:"Analyze"}),l("div",{className:"aboutInfo",children:[e("div",{className:"img"}),l("div",{className:"info",children:[e("strong",{className:"name",children:"GUNI"}),l("div",{className:"infos",children:[l("dl",{children:[e("dt",{children:"E-mail"}),e("dd",{children:"h2dlhs@gmail.com"})]}),l("dl",{children:[e("dt",{children:"Mobile"}),e("dd",{children:"010-7111-5374"})]})]})]})]})]}),e(m2,{})]})]});export{Z2 as PageAbout};
