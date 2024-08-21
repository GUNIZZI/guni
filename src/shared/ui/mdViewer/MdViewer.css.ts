import { css } from '@emotion/react';

const style = () => css`
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
`;

export { style as mdViewerStyle };
