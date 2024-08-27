import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    position: fixed;
    top: 1rem;
    left: 1rem;
    margin: ${theme.spacing(0)};
    z-index: 20;

    ${theme.breakpoints.down('lg')} {
        left: 0;
    }
`;

export { style };
