import{a as t,m as s,c as l,u as p,r as e,b as d,A as c,S as g,P as f}from"./index-gxbjmqFB.js";import{E as r}from"./easeing-CvTn5Zp3.js";const m=({children:i,className:o,duration:a=.3})=>{const n={init:{marginLeft:20,opacity:0},ani:{marginLeft:0,opacity:1,transition:{duration:a,delay:.1,ease:r.EASE_OUT_CUBIC}},exit:{marginLeft:-20,opacity:0,transition:{duration:a,ease:r.EASE_IN_CUBIC}}};return t(s.div,{className:o&&o,variants:n,initial:"init",animate:"ani",exit:"exit",layout:!0,style:{position:"absolute",width:"100%"},children:i})},w=i=>l`
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

                * {
                    transition: all 0.24s;
                }

                &:hover {
                    padding: ${i.spacing(8)} ${i.spacing(3)};
                    background: rgba(255, 255, 255, 0.02);

                    // > *:not(.title) {
                    //     // opacity: 0.3;
                    // }
                    // > .title .type {
                    //     opacity: 0.6;
                    // }
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
`,h=i=>i==="tech"?"isList":i==="blog"?"isCard":"isPf",b=()=>{const i=p(),o=e.useMemo(()=>i.pathname.split("/")[1]||"tech",[i.pathname]),a=e.useMemo(()=>i.pathname.split("/")[2]||"list",[i.pathname]),n=d(0);return t(f,{className:`page ${h(o)}`,css:[w],children:t("div",{className:"wrap",children:t(c,{mode:"wait",children:t(m,{className:"transitionWrap",children:t(g,{children:n})},a)})})})};export{b as LayoutBoard};
