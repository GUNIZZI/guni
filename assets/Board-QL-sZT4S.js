import{a as t,m as p,c as l,u as g,r as a,b as c,A as f,S as m,P as h}from"./index-AcLjnihf.js";import{E as r}from"./easeing-Z0y1a3f_.js";const w=({children:i,className:e,duration:o=.3})=>{const n={init:{marginLeft:20,opacity:0},ani:{marginLeft:0,opacity:1,transition:{duration:o,delay:.1,ease:r.EASE_OUT_CUBIC}},exit:{marginLeft:-20,opacity:0,transition:{duration:o,ease:r.EASE_IN_CUBIC}}};return t(p.div,{className:e&&e,variants:n,initial:"init",animate:"ani",exit:"exit",style:{position:"absolute",width:"100%"},children:i})},b=i=>l`
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
                    background: rgba(0, 0, 0, 0.4);
                }

                > * {
                    width: 100%;
                    margin: ${i.spacing(.2)} 0;
                }

                > .title {
                    display: block;
                    padding: ${i.spacing(2)} 0 0;
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
                > .content {
                    display: block;
                    max-height: 300px;
                    padding: 1em;
                    margin: 1em 0 2rem;
                    border-radius: 10px;
                    background: rgba(0, 0, 0, 0.4);
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 300;
                    overflow: hidden;
                    opacity: 0.4;
                    pointer-events: none;
                }
                > .infos {
                    display: flex;
                    gap: 1.8em;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9em;
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
            padding: 0.5rem 1.5rem;
            font-size: 3.5rem;
            font-weight: 500;
        }

        > .infos {
            display: flex;
            gap: 1.8em;
            padding: 1em 2em;
            border-radius: 100px;
            background: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9em;
            font-weight: 200;

            > *:first-of-type {
                margin-right: auto;
            }
        }

        > .content {
            padding: 3rem 0 0;
            margin-bottom: 4rem;
        }
    }

    .noData {
        padding: 8rem 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1em;
        font-weight: 100;
        text-align: center;
    }
`,u=i=>i==="tech"?"isList":i==="blog"?"isCard":i==="pf"?"isPf":"",v=()=>{const i=g(),e=a.useMemo(()=>i.pathname.split("/")[1]||"tech",[i.pathname]),o=a.useMemo(()=>i.pathname.split("/")[2]||"list",[i.pathname]),n=c(0),[s,d]=a.useState("");return a.useEffect(()=>{d(u(e))},[]),t(h,{className:`page ${s}`,css:[b],children:t("div",{className:"wrap",children:t(f,{mode:"wait",children:t(w,{className:"transitionWrap",children:t(m,{children:n})},o)})})})};export{v as LayoutBoard};
