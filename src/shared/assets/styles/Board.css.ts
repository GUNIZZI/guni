import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const boardStyle = (theme: Theme) => css`
    .header {
        display: flex;
        align-items: flex-end;
        gap: 1em;
        padding: 0 0 2rem 0;

        > h2 {
            font-size: 3rem;
            font-weight: 100;

            > strong {
                color: var(--color);
                font-size: 2em;
                font-weight: 400;
            }
        }

        > p {
            padding-bottom: 1.4rem;
            color: #999;
            font-weight: 300;
            font-size: 12px;
        }
    }

    &.isList {
        .itemWrap {
            .item {
                flex-direction: column;
                align-items: flex-start;
                padding: ${theme.spacing(6)} ${theme.spacing(3)};
                margin: 0;
                word-break: break-word;
                cursor: pointer;
                transition: all 0.24s;

                * {
                    transition: all 0.24s;
                }

                &:hover {
                    padding: ${theme.spacing(8)} ${theme.spacing(3)};
                    background: rgba(255, 255, 255, 0.02);

                    // > *:not(.title) {
                    //     // opacity: 0.3;
                    // }
                    // > .title .type {
                    //     opacity: 0.6;
                    // }
                }

                > * {
                    margin: ${theme.spacing(0.2)} 0;
                }

                .title {
                    display: block;
                    padding: ${theme.spacing(2)} 0;
                    font-size: 2em;
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

                    > .type {
                        font-size: 0.45em;
                    }
                }
                .content {
                    display: block;
                    max-height: 100px;
                    color: rgba(255, 255, 255, 0.8);
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
    }

    &.isCard {
        .itemWrap {
            .item {
                flex-direction: column;
                align-items: flex-start;
                padding: ${theme.spacing(4)} ${theme.spacing(3)};
                margin: 0;
                word-break: break-word;
                transition: all 0.18s;

                &:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                > * {
                    margin: ${theme.spacing(0.2)} 0;
                }

                .title {
                    display: block;
                    padding: ${theme.spacing(2)} 0;
                    font-size: 2em;
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

                    > .type {
                        font-size: 0.45em;
                    }
                }
                .content {
                    display: block;
                    max-height: 100px;
                    color: rgba(255, 255, 255, 0.8);
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
    }

    &.isPf {
        .itemWrap {
            .item {
                flex-direction: column;
                align-items: flex-start;
                padding: ${theme.spacing(4)} ${theme.spacing(3)};
                margin: 0;
                word-break: break-word;
                transition: all 0.18s;

                &:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                > * {
                    margin: ${theme.spacing(0.2)} 0;
                }

                .title {
                    display: block;
                    padding: ${theme.spacing(2)} 0;
                    font-size: 2em;
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

                    > .type {
                        font-size: 0.45em;
                    }
                }
                .content {
                    display: block;
                    max-height: 100px;
                    color: rgba(255, 255, 255, 0.8);
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
    }
`;

export { boardStyle };
