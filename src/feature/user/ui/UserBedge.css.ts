import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 10;

    > button {
        min-width: 40px;
        height: 40px;
        padding: 0 1em;
        border-radius: 100px;
    }

    .userName {
        padding-left: 0.4em;
        font-size: 11px;
    }

    ${theme.breakpoints.down('sm')} {
        top: 2rem;
    }
`;

export { style };