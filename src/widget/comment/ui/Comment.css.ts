import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    flex: 1;
    position: relative;
    padding: 3rem 2rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: calc(100vw - 20px);
        height: 100%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.3);
    }

    ${theme.breakpoints.down('sm')} {
        padding: 1em 0;

        &:before {
            width: calc(100% + 1.5rem);
        }
    }
    ${theme.breakpoints.down('md')} {
        &:before {
            width: calc(100% + 1.5rem);
        }
    }
`;

export { style };
