import{a as e,m as p,c as m,u as l,r as n,b as g,A as c,S as f,P as h}from"./index-Drf1TZI7.js";import{E as a}from"./easeing-CRGebnFA.js";const b=({children:i,className:o,duration:t=.3})=>{const r={init:{marginLeft:20,opacity:0},ani:{marginLeft:0,opacity:1,transition:{duration:t,delay:.1,ease:a.EASE_OUT_CUBIC}},exit:{marginLeft:-20,opacity:0,transition:{duration:t,ease:a.EASE_IN_CUBIC}}};return e(p.div,{className:o&&o,variants:r,initial:"init",animate:"ani",exit:"exit",style:{position:"absolute",width:"100%"},children:i})},w=i=>m`
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

        ${i.breakpoints.down("sm")} {
            align-items: flex-start;
            flex-direction: column;
            gap: 0;
            padding: 0 0 0.5rem 0;

            > h2 {
                font-size: 2rem;
                line-height: 1;
            }

            > p {
                padding-bottom: 0;
            }
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
                    // max-height: 400px;
                    padding: 1em;
                    margin: 1em 0 2rem;
                    border-radius: 10px;
                    background: rgba(0, 0, 0, 0.4);
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 300;
                    overflow: hidden;
                    opacity: 0.4;
                    pointer-events: none;

                    > .DraftEditor-root {
                        padding: 0;
                    }

                    ${i.breakpoints.down("sm")} {
                        padding: 0.5em 0;
                        margin: 0 0 1em 0;
                    }
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
        .item {
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: flex-end;
            position: relative;
            height: 28rem;
            padding: 0;
            border: none;
            border-radius: 1.5rem;
            background: #000;
            overflow: hidden;
            text-align: left;
            cursor: pointer;

            > * {
                position: relative;
            }

            .imgWrap {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: top center;

                > * {
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    color: #fff;
                    transform: translateX(-50%) translateY(-50%);
                    opacity: 0.2;
                }
            }

            .infos {
                padding: 1em;
                border-radius: 2rem 0 0 0;
                background: rgba(255, 255, 255, 0.7);
                background: rgba(0, 0, 0, 0.9);
                color: #fff;

                &:before {
                    content: '';
                    position: absolute;
                    top: -2rem;
                    right: -2rem;
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    box-shadow: inset -2rem -2rem rgba(0, 0, 0, 0.9);
                }

                .title {
                    font-size: 1.8em;
                    line-height: 1.2em;

                    > .type {
                        display: block;
                        font-size: 13px;
                        font-weight: 200;
                        opacity: 0.6;
                    }
                    > .date {
                        display: block;
                        font-size: 12px;
                        font-weight: 200;
                        opacity: 0.4;
                    }
                }

                .content {
                    max-height: 0;
                    margin: 0;
                    overflow: hidden;
                    font-size: 1rem;
                    font-weight: 100;
                    opacity: 0.8;
                    transition: all 0.3s ease-in-out;
                }
            }

            &:hover {
                .infos {
                    .content {
                        max-height: 4.8rem;
                        margin: 1em 0;
                    }
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

    &.isView {
        .transitionWrap {
            .transitionWrap {
                display: flex;
                flex-direction: column;
                min-height: calc(100vh - 1.25rem);

                > .comment {
                    flex: 1 1;
                }
            }
        }
    }

    .btnConfirm {
        ${i.breakpoints.down("sm")} {
            right: 1rem !important;
            bottom: 1rem !important;
            width: 3rem !important;
            height: 3rem !important;
            min-width: 0;
        }
    }

    .viewWrap {
        > h2 {
            padding: 0.5rem 1.5rem;
            font-size: 3.5rem;
            font-weight: 500;

            ${i.breakpoints.down("sm")} {
                padding: 0.5rem 0.5rem;
                font-size: 2em;
            }
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

            ${i.breakpoints.down("sm")} {
                padding: 0.5em 1em;
            }
        }

        > .content {
            padding: 3rem 0 0;
            margin-bottom: 4rem;
        }

        .btnDelete {
            ${i.breakpoints.down("sm")} {
                right: 1rem !important;
                bottom: 1rem !important;
                width: 3rem !important;
                height: 3rem !important;
                min-width: 0;
            }
        }
    }

    .noData {
        padding: 8rem 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1em;
        font-weight: 100;
        text-align: center;
    }
`,u=i=>i==="tech"?"isList":i==="blog"?"isCard":i==="pf"?"isPf":"",k=()=>{const i=l(),o=n.useMemo(()=>i.pathname.split("/")[1]||"tech",[i.pathname]),t=n.useMemo(()=>i.pathname.split("/")[2]||"list",[i.pathname]),r=g(0),[s,d]=n.useState("");return n.useEffect(()=>{d(u(o))},[]),e(h,{className:`page ${s} ${t!=="list"&&t!=="write"?"isView":""}`,css:[w],children:e("div",{className:"wrap",children:e(c,{mode:"wait",children:e(b,{className:"transitionWrap",children:e(f,{children:r})},t)})})})};export{k as LayoutBoard};
