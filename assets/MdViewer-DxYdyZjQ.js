import{c as o,a as s}from"./index-AcLjnihf.js";import{E as t}from"./scrollRestoration.store-DEnUZNAA.js";const l=()=>o`
    .wmde-markdown {
        background: none;

        ul,
        ol {
            list-style-type: inherit;

            ul,
            ol {
                list-style-type: circle;

                ul,
                ol {
                    list-style-type: square;
                }
            }
        }
    }

    pre[class^='language'] {
        background: rgba(255, 255, 255, 0.05);
    }
`,c=({content:e,className:r})=>s("div",{"data-color-mode":"dark",css:l,className:r,children:s(t.Markdown,{style:{padding:10},source:e})});export{c as M};
