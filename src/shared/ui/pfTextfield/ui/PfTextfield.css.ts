import { css, Theme } from '@mui/material';

const style = (theme: Theme) => css`
    display: inline-flex;

    input {
        width: auto;
        min-width: auto;
        max-width: auto;
        padding: 0.5em 1em;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: none;
        color: #fff;
        line-height: 2em;

        &:focus {
            outline: none;
            border-color: none;
        }

        &:first-of-type {
            width: 120px;
            border-right: none;
            border-radius: 1em 0 0 1em;
        }
        &:last-of-type {
            width: 60px;
            border-left-style: dashed;
            border-radius: 0 1em 1em 0;
        }
        &:only-child {
            width: 120px;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            border-radius: 1em !important;
        }

        ${theme.breakpoints.down('lg')} {
            &:first-of-type {
                width: 70%;
            }
            &:last-of-type {
                width: 30%;
            }
            &:only-child {
                width: 100%;
            }
        }
    }
`;

export { style };
