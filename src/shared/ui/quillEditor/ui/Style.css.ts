import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(0)};

    &.isView {
        .ql-editor {
            min-height: auto;
            background: none !important;

            .ql-code-block-container {
                > select {
                    display: none;
                }
            }

            a {
                word-break: break-all;
            }

            ${theme.breakpoints.down('md')} {
                padding: 0;
            }
        }

        ${theme.breakpoints.down('sm')} {
            padding: 1.2em 0.5em;
        }
    }

    .ql-toolbar,
    .ql-container {
        height: auto;
        border: none;
        box-sizing: border-box;
        font-family: inherit;
        cursor: text;
        transition: all 0.24s;

        * {
            font-family: inherit;
        }

        &.ql-toolbar {
            background: rgba(255, 255, 255, 0.06);
        }

        &:hover {
            .ql-editor {
                background: rgba(255, 255, 255, 0.08);
            }
        }
    }

    .ql-container {
        flex: 1 1;
        background: none;
    }

    .ql-toolbar {
        position: sticky;
        top: 0;
        background: rgba(255, 255, 255, 0.1) !important;
        z-index: 1;
    }

    .ql-toolbar button,
    .ql-toolbar button svg {
        color: #fff;
        fill: #fff;
    }

    .ql-editor {
        min-height: calc(100vh - 10rem);
        padding: 2em;
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        transition: all 0.24s;
        background: rgba(255, 255, 255, 0.06);

        &:focus {
            background: rgba(255, 255, 255, 0.12) !important;
        }

        &[data-placeholder]:before {
            color: rgba(255, 255, 255, 0.5);
            font-style: normal !important;
        }
    }

    .ql-picker {
        color: #fff;
    }

    .ql-stroke {
        stroke: #fff;
    }

    .ql-fill {
        fill: #fff;
    }

    .ql-picker-options {
        background-color: #2c2c2c;
    }

    .ql-tooltip {
        background-color: #444;
        color: #fff;
    }

    button,
    .ql-picker-label {
        border-radius: 0.4em;
        transition: background 0.24s;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    }

    button:hover .ql-stroke,
    .ql-picker-label:hover .ql-stroke {
        fill: none;
        stroke: #fff !important;
    }

    .ql-active .ql-stroke {
        fill: none;
        stroke: #fff !important;
    }

    .ql-picker-label:hover {
        color: #fff !important;
    }

    button:hover .ql-fill,
    .ql-picker-label:hover .ql-fill {
        fill: #fff !important;
        stroke: none;
    }

    .ql-active .ql-fill {
        fill: #fff !important;
        stroke: none;
    }

    .ql-code-block-container {
        padding: 3em !important;
        border-radius: 1em !important;
        // background: rgba(255, 255, 255, 0.1) !important;
        background: rgba(0, 0, 0, 0.8) !important;

        .ql-code-block {
            background: none;
        }

        ${theme.breakpoints.down('sm')} {
            padding: 1.5em !important;
        }
    }
`;

export { style };
