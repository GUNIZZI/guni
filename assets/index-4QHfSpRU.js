import{c as s,N as t,j as a,a as e,m as i}from"./index-BdROR_eR.js";import{E as r}from"./easeing-JJ5Xl32e.js";const l=n=>s`
    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 48px);

        ${n.breakpoints.down("md")} {
            height: calc(100vh - 8rem);
        }

        .subtitle {
            padding: 0 0 2rem 0;
            font-size: 1em;
            font-weight: 200;

            > span {
                padding: 0 0.5em;
                font-size: 0.75em;
            }
        }

        .grpG {
            display: flex;
            align-items: center;
            font-size: 1.4em;
            text-align: center;

            .g {
                line-height: 1;
                font-size: 10em;
                font-weight: 400;
                background: linear-gradient(
                    135deg,
                    #ff018e 20%,
                    ${t[0].color} 70%,
                    #fff 90%
                );
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
            }

            .uni {
                display: flex;
                margin: 1.5em 0 0 -0.8em;

                > * {
                    font-size: 2em;
                    font-weight: 500;
                    line-height: 1;
                }
            }

            // background: linear-gradient(
            //     135deg,
            //     ${t[0].color} 0%,
            //     ${t[1].color} 20%,
            //     ${t[2].color} 40%,
            //     ${t[3].color} 60%,
            //     ${t[4].color} 80%
            // );
            // color: transparent;
            // -webkit-background-clip: text;
            // background-clip: text;
            // -webkit-text-fill-color: transparent;
            // text-shadow: 0 0 60px rgba(255, 255, 255, 0.5);
        }
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-family: sans-serif;
        overflow: hidden;

        &:before {
            content: 'G';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(-30deg);
            font-size: 150vw;
            font-weight: 300;
            line-height: 1;
            opacity: 0.01;
        }
        // &:after {
        //     content: 'G';
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translateX(-50%) translateY(-50%) rotate(-45deg);
        //     font-size: 250vh;
        //     font-weight: 100;
        //     line-height: 1;
        //     opacity: 0.01;
        // }
    }

    > * {
        & div {
            font-size: ${n.typography.h6.fontSize};
        }

        > strong {
            font-size: ${n.typography.h2.fontSize};
        }

        > span {
            font-size: ${n.typography.h3.fontSize};
        }
    }

    .gradientText {
        background: linear-gradient(
            90deg,
            ${t[0].color} 35%,
            ${t[t.length-1].color} 75%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
    }

    .postit {
        width: auto; /* 포스트잇의 너비 */
        height: 200px; /* 포스트잇의 높이 */
        background-color: #ffeb3b; /* 포스트잇의 노란색 배경 */
        padding: 1em 2em;
        color: #333;
        font-size: 16px;
        font-family: 'Arial', sans-serif;
        border: 1px solid #f0c30f; /* 테두리 색상 */
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.8); /* 그림자 효과 */
        position: relative;
        transform-origin: top; /* 상단을 기준으로 회전 */
        animation: flutter 3s infinite ease-in-out; /* 나풀거리는 애니메이션 */
    }

    @keyframes flutter {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(2deg); /* 시계 방향으로 회전 */
        }
        50% {
            transform: rotate(-2deg); /* 반시계 방향으로 회전 */
        }
        75% {
            transform: rotate(1deg); /* 다시 시계 방향으로 회전 */
        }
        100% {
            transform: rotate(0deg); /* 원래 위치로 돌아옴 */
        }
    }
`,c={visible:{transition:{staggerChildren:.2,when:"beforeChildren"}}},d={hidden:{opacity:0,y:"1em"},visible:{opacity:1,y:0,transition:{duration:1,ease:r.EASE_OUT_QUART}}},f={hidden:{opacity:0,transform:"scale(1.2)"},visible:{opacity:1,transform:"scale(1)",transition:{duration:3,ease:r.EASE_OUT_QUART}}},o={hidden:{opacity:0,x:"0.4em"},visible:()=>({opacity:1,x:0,transition:{duration:1.2,ease:r.EASE_OUT_QUART}})},h=()=>a("div",{className:"page",css:l,children:[e("span",{className:"bg"}),a(i.div,{className:"wrap",variants:c,initial:"hidden",animate:"visible",children:[a(i.div,{className:"subtitle",variants:d,children:["Publisher ",e("span",{children:"&"})," Front End Developer."]}),a("div",{className:"grpG",children:[e(i.div,{className:"g",variants:f,children:"G"}),a("div",{className:"uni",children:[e(i.div,{variants:o,children:"U"}),e(i.div,{variants:o,children:"N"}),e(i.div,{variants:o,children:"I"})]})]}),e("div",{className:"postit",children:"메시지1"}),e("div",{className:"postit",children:"메시지2 "})]})]});export{h as PageHome};
