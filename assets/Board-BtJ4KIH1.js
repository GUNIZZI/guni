import{a as t,m as p,c as d,u as c,r as a,b as g,A as f,S as m,P as w}from"./index-Dv5VmVNw.js";import{E as r}from"./easeing-ikc3D7PZ.js";const h=({children:i,className:o,duration:e=.3})=>{const n={init:{marginLeft:20,opacity:0},ani:{marginLeft:0,opacity:1,transition:{duration:e,delay:.1,ease:r.EASE_OUT_CUBIC}},exit:{marginLeft:-20,opacity:0,transition:{duration:e,ease:r.EASE_IN_CUBIC}}};return t(p.div,{className:o&&o,variants:n,initial:"init",animate:"ani",exit:"exit",style:{position:"absolute",width:"100%"},children:i})},b=i=>d`
    .header {
        display: flex;
        align-items: flex-end;
        gap: 1em;
        padding: 0 0 2rem 0;

        > h2 {
            font-size: 3rem;
            font-weight: 100;

            > strong {
                color: var(--color);
                font-size: 2em;
                font-weight: 400;
            }
        }

        > p {
            padding-bottom: 1.4rem;
            color: #999;
            font-weight: 300;
            font-size: 12px;
        }
    }

    &.isList {
        .itemWrap {
            .item {
                flex-direction: column;
                align-items: flex-start;
                padding: ${i.spacing(6)} ${i.spacing(3)};
                margin: 0;
                word-break: break-word;
                cursor: pointer;
                transition: all 0.24s;

                &:hover {
                    padding: ${i.spacing(8)} ${i.spacing(3)};
                    background: rgba(255, 255, 255, 0.02);
                }

                > * {
                    margin: ${i.spacing(.2)} 0;
                }

                .title {
                    display: block;
                    padding: ${i.spacing(2)} 0;
                    font-size: 2em;
                    font-weight: 200;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    &:first-of-type {
                        padding-top: 0;
                    }

                    &:link,
                    &:visited {
                        color: inherit !important;
                        text-decoration: none !important;
                    }

                    > .type {
                        font-size: 0.45em;
                    }
                }
                .content {
                    display: block;
                    max-height: 100px;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 300;
                    overflow: hidden;
                }
                .infos {
                    display: flex;
                    gap: 1.8em;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0%.75;
                    font-weight: 200;
                }
            }
        }

        .MuiDivider-root {
            margin: 0;
        }
    }

    &.isCard {
        .itemWrap {
            .item {
                flex-direction: column;
                align-items: flex-start;
                padding: ${i.spacing(4)} ${i.spacing(3)};
                margin: 0;
                word-break: break-word;
                transition: all 0.18s;

                &:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                > * {
                    margin: ${i.spacing(.2)} 0;
                }

                .title {
                    display: block;
                    padding: ${i.spacing(2)} 0;
                    font-size: 2em;
                    font-weight: 200;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    &:first-of-type {
                        padding-top: 0;
                    }

                    &:link,
                    &:visited {
                        color: inherit !important;
                        text-decoration: none !important;
                    }

                    > .type {
                        font-size: 0.45em;
                    }
                }
                .content {
                    display: block;
                    max-height: 100px;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 300;
                    overflow: hidden;
                }
                .infos {
                    display: flex;
                    gap: 1.8em;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0%.75;
                    font-weight: 200;
                }
            }
        }

        .MuiDivider-root {
            margin: 0;
        }
    }

    &.isPf {
        // .itemWrap {
        //     .item {
        //         flex-direction: column;
        //         align-items: flex-start;
        //         padding: ${i.spacing(4)} ${i.spacing(3)};
        //         margin: 0;
        //         word-break: break-word;
        //         transition: all 0.18s;

        //         &:hover {
        //             background: rgba(255, 255, 255, 0.05);
        //         }

        //         > * {
        //             margin: ${i.spacing(.2)} 0;
        //         }

        //         .title {
        //             display: block;
        //             padding: ${i.spacing(2)} 0;
        //             font-size: 2em;
        //             font-weight: 200;
        //             white-space: nowrap;
        //             overflow: hidden;
        //             text-overflow: ellipsis;

        //             &:first-of-type {
        //                 padding-top: 0;
        //             }

        //             &:link,
        //             &:visited {
        //                 color: inherit !important;
        //                 text-decoration: none !important;
        //             }

        //             > .type {
        //                 font-size: 0.45em;
        //             }
        //         }
        //         .content {
        //             display: block;
        //             max-height: 100px;
        //             color: rgba(255, 255, 255, 0.8);
        //             font-weight: 300;
        //             overflow: hidden;
        //         }
        //         .infos {
        //             display: flex;
        //             gap: 1.8em;
        //             color: rgba(255, 255, 255, 0.4);
        //             font-size: 0%.75;
        //             font-weight: 200;
        //         }
        //     }
        // }

        // .MuiDivider-root {
        //     margin: 0;
        // }
    }

    .viewWrap {
        > h2 {
            padding: 0 0 0.6em 0;
            font-size: 3rem;
            font-weight: 400;
        }

        > .infos {
            display: flex;
            gap: 1.8em;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9em;
            font-weight: 200;
        }

        > .content {
            padding: 2rem 0 3rem;
            margin-bottom: 4rem;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }
    }
`,u=i=>i==="tech"?"isList":i==="blog"?"isCard":i==="pf"?"isPf":"",v=()=>{const i=c(),o=a.useMemo(()=>i.pathname.split("/")[1]||"tech",[i.pathname]),e=a.useMemo(()=>i.pathname.split("/")[2]||"list",[i.pathname]),n=g(0),[s,l]=a.useState("");return a.useEffect(()=>{l(u(o))},[]),t(w,{className:`page ${s}`,css:[b],children:t("div",{className:"wrap",children:t(f,{mode:"wait",children:t(h,{className:"transitionWrap",children:t(m,{children:n})},e)})})})};export{v as LayoutBoard};
