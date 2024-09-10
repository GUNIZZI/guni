import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    position: fixed;
    top: 1rem;
    left: 1rem;
    margin: ${theme.spacing(0)};
    z-index: 20;

    ${theme.breakpoints.down('lg')} {
        top: 0;
        left: 0;
    }

    ${theme.breakpoints.down('sm')} {
        top: 0em;
        left: 0em;
        background: rgba(255, 255, 255, 0.3) !important;
    }
`;

export { style };
