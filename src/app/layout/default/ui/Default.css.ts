import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const containerStyle = (theme: Theme) => css`
    width: 100vw;
    min-height: 100vh;

    .page {
        min-height: 100vh;
        padding: ${theme.spacing(3)} ${theme.spacing(16)};
        box-sizing: border-box;

        > .wrap {
            position: relative;
            max-width: 1400px;
            margin: 0 auto;
        }
    }
`;

export { containerStyle };
