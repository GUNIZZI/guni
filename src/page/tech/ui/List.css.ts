import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    h2 {
        font-size: 4em;
        font-weight: 100;
    }

    .itemWrap {
        .item {
            flex-direction: column;
            align-items: flex-start;
            padding: ${theme.spacing(8)} ${theme.spacing(3)};
            margin: 0;
            word-break: break-word;
            transition: all 0.18s;

            &:hover {
                background: rgba(255, 255, 255, 0.05);
            }

            > * {
                margin: ${theme.spacing(0.6)} 0;
            }

            .title {
                display: block;
                padding: ${theme.spacing(2)} 0;
                font-size: 2.6em;
                font-weight: 200;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                &:first-of-type {
                    padding-top: 0;
                }

                &:link,
                &:visited {
                    color: inherit !important;
                    text-decoration: none !important;
                }
            }
            .content {
                display: block;
                max-height: 100px;
                font-weight: 300;
                overflow: hidden;
            }
            .infos {
                display: flex;
                gap: 1.8em;
                color: rgba(255, 255, 255, 0.4);
                font-size: 0%.75;
                font-weight: 200;
            }
        }
    }

    .MuiDivider-root {
        margin: 0;
    }

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

export { style as listStyle };
