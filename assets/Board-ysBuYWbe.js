import{a as m,u as d,r as t,d as p,b as i,S as g,P as l}from"./index-WAx86IL6.js";const c=e=>m`
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
`,h=e=>e==="tech"?"isList":e==="blog"?"isCard":e==="pf"?"isPf":"",u=()=>{const e=d(),n=t.useMemo(()=>e.pathname.split("/")[1]||"tech",[e.pathname]),r=t.useMemo(()=>e.pathname.split("/")[2]||"list",[e.pathname]),o=p(0),[a,s]=t.useState("");return t.useEffect(()=>{s(h(n))},[]),i(l,{className:`page ${a} ${r!=="list"&&r!=="write"?"isView":""}`,css:[c],children:i("div",{className:"wrap",children:i(g,{children:o})})})};export{u as LayoutBoard};