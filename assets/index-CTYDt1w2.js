import{c as r,N as i,a,j as o,m as n}from"./index-Dv5VmVNw.js";import{E as s}from"./easeing-ikc3D7PZ.js";const c="/guni/assets/bg2-Ch0aaDQq.jpg",g=t=>r`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${c});
    background-size: cover;
    background-position: center;

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
`,d={visible:{transition:{staggerChildren:.2}}},e={hidden:{opacity:0,y:"2em"},visible:{opacity:1,y:0,transition:{duration:1,ease:s.EASE_OUT_QUART}},exit:{opacity:0,y:"-1em"}},b=()=>a("div",{className:"page",css:g,children:o(n.div,{variants:d,initial:"hidden",animate:"visible",exit:"exit",children:[a(n.div,{variants:e,children:"텍스트"}),a(n.h1,{variants:e,className:"gradientText",children:"그라디언트 텍스트"})]})});export{b as PageAbout};