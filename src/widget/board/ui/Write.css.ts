import { css, Theme } from '@mui/material';

const style = (theme: Theme) => css`
    .btns {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 1;

        > * {
            margin: 0 0.3rem;

            &.isConfirm {
                width: 3em;
            }
        }

        ${theme.breakpoints.down('sm')} {
            bottom: 1rem;
            right: 1rem;

            > * {
                width: 3rem !important;
                height: 3rem !important;
                min-width: 0;
            }
        }
    }

    .inputHeader {
        display: flex;
        flex-direction: row;
        gap: 1em;

        &.inputPrjInfos {
            gap: 0.5em;
        }

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
