import{c as t,a as l,N as e,j as n,b as i,m as a}from"./index-CzWQylme.js";const s={IN:"easeIn",OUT:"easeOut",IN_OUT:"easeInOut",LINEAR:"linear",EASE_IN_SINE:t(.47,0,.745,.715),EASE_OUT_SINE:t(.39,.575,.565,1),EASE_IN_OUT_SINE:t(.445,.05,.55,.95),EASE_IN_QUAD:t(.55,.085,.68,.53),EASE_OUT_QUAD:t(.25,.46,.45,.94),EASE_IN_OUT_QUAD:t(.455,.03,.515,.955),EASE_IN_CUBIC:t(.55,.055,.675,.19),EASE_OUT_CUBIC:t(.215,.61,.355,1),EASE_IN_OUT_CUBIC:t(.645,.045,.355,1),EASE_IN_QUART:t(.895,.03,.685,.22),EASE_OUT_QUART:t(.165,.84,.44,1),EASE_IN_OUT_QUART:t(.77,0,.175,1),EASE_IN_QUINT:t(.755,.05,.855,.06),EASE_OUT_QUINT:t(.23,1,.32,1),EASE_IN_OUT_QUINT:t(.86,0,.07,1),EASE_IN_EXPO:t(.95,.05,.795,.035),EASE_OUT_EXPO:t(.19,1,.22,1),EASE_IN_OUT_EXPO:t(1,0,0,1),EASE_IN_CIRC:t(.6,.04,.98,.335),EASE_OUT_CIRC:t(.075,.82,.165,1),EASE_IN_OUT_CIRC:t(.785,.135,.15,.86),EASE_IN_BACK:t(.6,-.28,.735,.045),EASE_OUT_BACK:t(.175,.885,.32,1.275),EASE_IN_OUT_BACK:t(.68,-.55,.265,1.55)},c=o=>l`
    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 48px);

        ${o.breakpoints.down("md")} {
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
                    ${e[0].color} 70%,
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
            //     ${e[0].color} 0%,
            //     ${e[1].color} 20%,
            //     ${e[2].color} 40%,
            //     ${e[3].color} 60%,
            //     ${e[4].color} 80%
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
            font-size: ${o.typography.h6.fontSize};
        }

        > strong {
            font-size: ${o.typography.h2.fontSize};
        }

        > span {
            font-size: ${o.typography.h3.fontSize};
        }
    }

    .gradientText {
        background: linear-gradient(
            90deg,
            ${e[0].color} 35%,
            ${e[e.length-1].color} 75%
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
`,d={visible:{transition:{staggerChildren:.2,when:"beforeChildren"}}},f={hidden:{opacity:0,y:"1em"},visible:{opacity:1,y:0,transition:{duration:1,ease:s.EASE_OUT_QUART}}},E={hidden:{opacity:0,transform:"scale(1.2)"},visible:{opacity:1,transform:"scale(1)",transition:{duration:3,ease:s.EASE_OUT_QUART}}},r={hidden:{opacity:0,x:"0.4em"},visible:()=>({opacity:1,x:0,transition:{duration:1.2,ease:s.EASE_OUT_QUART}})},g=()=>n("div",{className:"page",css:c,children:[i("span",{className:"bg"}),n(a.div,{className:"wrap",variants:d,initial:"hidden",animate:"visible",children:[n(a.div,{className:"subtitle",variants:f,children:["Publisher ",i("span",{children:"&"})," Front End Developer."]}),n("div",{className:"grpG",children:[i(a.div,{className:"g",variants:E,children:"G"}),n("div",{className:"uni",children:[i(a.div,{variants:r,children:"U"}),i(a.div,{variants:r,children:"N"}),i(a.div,{variants:r,children:"I"})]})]}),i("div",{className:"postit",children:"메시지1"}),i("div",{className:"postit",children:"메시지2 "})]})]});export{g as PageHome};
