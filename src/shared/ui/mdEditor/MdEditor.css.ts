import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    position: relative;
    min-height: 200px;

    .tooltipDummy {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .w-md-editor {
        position: relative;
        height: 100% !important;
        --color-border-default: ${theme.palette.divider} !important;
        background: none !important;

        .w-md-editor-toolbar {
            background: none !important;
        }

        .w-md-editor-text-input {
            height: 100%;
        }

        .w-md-editor-text {
            height: 100%;
            min-height: unset !important;
        }
    }

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

export { style as mdEditorStyle };
