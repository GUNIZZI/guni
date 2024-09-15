import{a as m,u as l,r as t,d as p,b as i,S as c,P as d}from"./index-BKnJBwPp.js";const h=e=>m`
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
`,g=e=>e==="tech"?"isList":e==="blog"?"isCard":e==="pf"?"isPf":"",u=()=>{const e=l(),n=t.useMemo(()=>e.pathname.split("/")[1]||"tech",[e.pathname]),r=t.useMemo(()=>e.pathname.split("/")[2]||"list",[e.pathname]),s=p(0),[a,o]=t.useState("");return t.useEffect(()=>{o(g(n))},[]),i(d,{className:`page ${a} ${r!=="list"&&r!=="write"?"isView":""}`,css:[h],children:i("div",{className:"wrap",children:i(c,{children:s})})})};export{u as LayoutBoard};
