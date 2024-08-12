import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    .btns {
        position: fixed;
        bottom: 2rem;
        right: 2rem;

        > * {
            margin: 0 0.3rem;

            &.isConfirm {
                width: 3em;
            }
        }
    }
`;

export { style as writeStyle };
