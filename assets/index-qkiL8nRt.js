import{c as o,N as i,a,j as s,m as n}from"./index-DS1Dk342.js";import{E as r}from"./easeing-DGTIOwVo.js";const c=t=>o`
    > * {
        & div {
            font-size: ${t.typography.h6.fontSize};
        }

        > strong {
            font-size: ${t.typography.h2.fontSize};
        }

        > span {
            font-size: ${t.typography.h3.fontSize};
        }
    }

    .gradientText {
        width: auto;
        background: linear-gradient(
            90deg,
            ${i[0].color} 35%,
            ${i[i.length-1].color} 75%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
    }
`,l={visible:{transition:{staggerChildren:.2}}},e={hidden:{opacity:0,y:"2em"},visible:{opacity:1,y:0,transition:{duration:1,ease:r.EASE_OUT_QUART}},exit:{opacity:0,y:"-1em"}},g=()=>a("div",{className:"page",css:c,children:s(n.div,{variants:l,initial:"hidden",animate:"visible",exit:"exit",children:[a(n.div,{variants:e,children:"텍스트"}),a(n.h1,{variants:e,className:"gradientText",children:"그라디언트 텍스트"})]})});export{g as PageAbout};
