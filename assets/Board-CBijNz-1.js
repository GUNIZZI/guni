import{a as m,u as p,r as e,d,b as i,S as l,P as g}from"./index-BLbGp1_9.js";const c=t=>m`
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

        ${t.breakpoints.down("sm")} {
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

    &.isPf {
        // .itemWrap {
        //     .item {
        //         flex-direction: column;
        //         align-items: flex-start;
        //         padding: ${t.spacing(4)} ${t.spacing(3)};
        //         margin: 0;
        //         word-break: break-word;
        //         transition: all 0.18s;

        //         &:hover {
        //             background: rgba(255, 255, 255, 0.05);
        //         }

        //         > * {
        //             margin: ${t.spacing(.2)} 0;
        //         }

        //         .title {
        //             display: block;
        //             padding: ${t.spacing(2)} 0;
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
        ${t.breakpoints.down("sm")} {
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

            ${t.breakpoints.down("sm")} {
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

            ${t.breakpoints.down("sm")} {
                padding: 0.5em 1em;
            }
        }

        > .content {
            padding: 3rem 0 0;
            margin-bottom: 4rem;
        }

        .btnDelete {
            ${t.breakpoints.down("sm")} {
                right: 1rem !important;
                bottom: 1rem !important;
                width: 3rem !important;
                height: 3rem !important;
                min-width: 0;
            }
        }
    }
`,f=t=>t==="tech"?"isList":t==="blog"?"isCard":t==="pf"?"isPf":"",w=()=>{const t=p(),n=e.useMemo(()=>t.pathname.split("/")[1]||"tech",[t.pathname]),o=e.useMemo(()=>t.pathname.split("/")[2]||"list",[t.pathname]),r=d(0),[a,s]=e.useState("");return e.useEffect(()=>{s(f(n))},[]),i(g,{className:`page ${a} ${o!=="list"&&o!=="write"?"isView":""}`,css:[c],children:i("div",{className:"wrap",children:i(l,{children:r})})})};export{w as LayoutBoard};
