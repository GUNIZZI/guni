import { css } from '@emotion/react';

import { NAV_PATH } from '@/shared/config/navPath';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    > * {
        & div {
            font-size: ${theme.typography.h6.fontSize};
        }

        > strong {
            font-size: ${theme.typography.h2.fontSize};
        }

        > span {
            font-size: ${theme.typography.h3.fontSize};
        }
    }

    .gradientText {
        width: auto;
        background: linear-gradient(
            90deg,
            ${NAV_PATH[0].color} 35%,
            ${NAV_PATH[NAV_PATH.length - 1].color} 75%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
    }
`;

export { style as aboutStyle };
