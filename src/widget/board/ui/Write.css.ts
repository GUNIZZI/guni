import { css, Theme } from '@mui/material';

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

    .inputHeader {
        display: flex;
        flex-direction: row;
        gap: 1em;

        ${theme.breakpoints.down('lg')} {
            flex-direction: column;
            gap: 0.1em;

            > * {
                flex: 0 0 auto !important;
            }
        }
    }
`;

export { style as writeStyle };
