import{a as m,u as p,r as t,d as l,b as i,S as d,P as g}from"./index-Dl_p7cId.js";const f=e=>m`
    .header {
        display: flex;
        align-items: flex-end;
        gap: 1em;
        padding: 0 0 2rem 0;

        > h2 {
            font-size: 3rem;
            font-weight: 100;
            letter-spacing: -0.03em;

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

        ${e.breakpoints.down("md")} {
            flex-direction: column;
            align-items: center;
            gap: 0;
            padding: 1rem 0 0.5rem 0;

            h2 {
                line-height: 1;
            }
        }

        ${e.breakpoints.down("sm")} {
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
        .header {
            > h2 {
                > strong {
                    margin-right: -0.15em;
                }
            }
        }

        .MuiDivider-root {
            margin-left: 0;
        }
    }

    &.isPf {
        .header {
            > h2 {
                > strong {
                    margin-right: -0.17em;
                }
            }
        }
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

    .boardTransitionWrap {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .btnConfirm {
        ${e.breakpoints.down("sm")} {
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

            ${e.breakpoints.down("sm")} {
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

            ${e.breakpoints.down("sm")} {
                padding: 0.5em 1em;
            }
        }

        > .pfWrap {
            display: flex;
            align-items: center;
            gap: 1em;
            padding: 2em 3em 0;

            > * {
                align-items: center;
            }

            > .title {
                flex: 1 1 60%;
                font-size: 5rem;
                font-style: italic;
                text-align: center;
            }
            > .info {
                flex: 1 1 40%;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 1.5em;

                > .item {
                    flex: 0 0 100%;
                    display: flex;
                    flex-wrap: wrap;

                    .title {
                        flex: 0 0 100px;
                        font-weight: 100;
                    }
                    .percentage {
                        flex: 1 1;
                        position: relative;

                        .gage {
                            position: absolute;
                            top: 50%;
                            left: 0;
                            width: 100%;
                            height: 4px;
                            border-radius: 100px;
                            background: linear-gradient(to right, #00d9ff, #007eff);
                        }

                        & + .text {
                            flex: none;
                            width: 100%;
                            padding: 0 0 0 100px;
                            box-sizing: border-box;
                        }
                    }
                    .text {
                        font-weight: 300;
                    }
                }
            }
        }

        > .content {
            padding: 3rem 0 0;
            margin-bottom: 4rem;
        }

        .btnDelete {
            ${e.breakpoints.down("sm")} {
                right: 1rem !important;
                bottom: 1rem !important;
                width: 3rem !important;
                height: 3rem !important;
                min-width: 0;
            }
        }
    }
`,c=e=>e==="tech"?"isList":e==="blog"?"isCard":e==="pf"?"isPf":"",x=()=>{const e=p(),n=t.useMemo(()=>e.pathname.split("/")[1]||"tech",[e.pathname]),r=t.useMemo(()=>e.pathname.split("/")[2]||"list",[e.pathname]),a=l(0),[o,s]=t.useState("");return t.useEffect(()=>{s(c(n))},[]),i(g,{className:`page ${o} ${r!=="list"&&r!=="write"?"isView":""}`,css:[f],children:i("div",{className:"wrap",children:i(d,{children:a})})})};export{x as LayoutBoard};
