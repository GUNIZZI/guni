import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    position: relative;
    padding: 3rem 2rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: calc(100vw - 25px);
        height: 100%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.3);
    }

    ${theme.breakpoints.down('sm')} {
        padding: 1em 0;
    }
`;

export { style };
