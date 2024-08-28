import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    height: 80vh;

    .ql-toolbar,
    .ql-container {
        background-color: #2c2c2c;
        color: #fff;
        border-color: #444;
    }

    .ql-toolbar button,
    .ql-toolbar button svg {
        color: #fff;
        fill: #fff;
    }

    .ql-editor {
        color: #fff;
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
`;

export { style };
