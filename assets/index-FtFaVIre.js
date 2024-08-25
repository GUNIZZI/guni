import{c as s,N as t,j as n,a as e,m as i}from"./index-AcLjnihf.js";import{E as r}from"./easeing-Z0y1a3f_.js";const l=a=>s`
    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 48px);

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
            font-size: ${a.typography.h6.fontSize};
        }

        > strong {
            font-size: ${a.typography.h2.fontSize};
        }

        > span {
            font-size: ${a.typography.h3.fontSize};
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
`,c={visible:{transition:{staggerChildren:.2,when:"beforeChildren"}}},d={hidden:{opacity:0,y:"1em"},visible:{opacity:1,y:0,transition:{duration:1,ease:r.EASE_OUT_QUART}}},p={hidden:{opacity:0,transform:"scale(1.2)"},visible:{opacity:1,transform:"scale(1)",transition:{duration:3,ease:r.EASE_OUT_QUART}}},o={hidden:{opacity:0,x:"0.4em"},visible:()=>({opacity:1,x:0,transition:{duration:1.2,ease:r.EASE_OUT_QUART}})},h=()=>n("div",{className:"page",css:l,children:[e("span",{className:"bg"}),n(i.div,{className:"wrap",variants:c,initial:"hidden",animate:"visible",children:[n(i.div,{className:"subtitle",variants:d,children:["Publisher ",e("span",{children:"&"})," Front End Developer."]}),n("div",{className:"grpG",children:[e(i.div,{className:"g",variants:p,children:"G"}),n("div",{className:"uni",children:[e(i.div,{variants:o,children:"U"}),e(i.div,{variants:o,children:"N"}),e(i.div,{variants:o,children:"I"})]})]})]})]});export{h as PageHome};
