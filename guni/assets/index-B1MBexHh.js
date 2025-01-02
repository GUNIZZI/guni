import{a as r,N as i,j as a,b as e}from"./index-C3H4IjIc.js";const n=t=>r`
    // > * {
    //     & div {
    //         font-size: ${t.typography.h6.fontSize};
    //     }

    //     > strong {
    //         font-size: ${t.typography.h2.fontSize};
    //     }

    //     > span {
    //         font-size: ${t.typography.h3.fontSize};
    //     }
    // }

    // .gradientText {
    //     width: auto;
    //     background: linear-gradient(
    //         90deg,
    //         ${i[0].color} 35%,
    //         ${i[i.length-1].color} 75%
    //     );
    //     -webkit-background-clip: text;
    //     background-clip: text;
    //     -webkit-text-fill-color: transparent;
    //     text-fill-color: transparent;
    // }

    display: flex;

    .leftWrap {
        flex: 1 1 20%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: relative;
        overflow: hidden;

        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 1px;
            height: 80vh;
            background: rgba(255, 255, 255, 0.4);
        }

        .rotateTxt {
            transform: rotate(270deg) translateX(40%) translateY(-0.58em);
            white-space: nowrap;
            font-size: 10vw;
            line-height: 1;

            > *:first-of-type {
                position: relative;
                font-weight: 100;
            }
        }
    }

    .rightWrap {
        flex: 1 1 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .skills {
            display: flex;
            padding: 4rem 0;
            font-size: 10rem;

            .item {
                width: 10rem;
                height: 10rem;
                border: 10px solid #fff;
                text-align: center;

                :not(:first-of-type) {
                    margin-left: -10px;
                }

                &:nth-child(2n + 1) {
                    margin-top: -0.23em;
                    border-bottom: none;
                    border-radius: 50% 50% 0 0;
                }
                &:nth-child(2n) {
                    margin-top: 0.23em;
                    border-top: none;
                    border-radius: 0 0 50% 50%;
                }

                > * {
                    align-self: center;
                    font-size: 1rem;
                }
            }
        }
    }
`,l=()=>a("div",{className:"page",css:n,children:[e("div",{className:"leftWrap",children:e("div",{className:"rotateTxt",children:e("div",{children:"Analyze"})})}),a("div",{className:"rightWrap",children:[a("div",{className:"skills",children:[e("div",{className:"item",children:e("span",{children:"asdasd"})}),e("div",{className:"item",children:e("span",{children:"asdasd"})}),e("div",{className:"item",children:e("span",{children:"asdasd"})}),e("div",{className:"item",children:e("span",{children:"asdasd"})})]}),e("div",{children:"asdasd"})]})]});export{l as PageAbout};
