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

        ${theme.breakpoints.down('sm')} {
            align-items: flex-start;
            flex-direction: column;
            gap: 0;
            padding: 0 0 0.5rem 0;

            > h2 {
                font-size: 2rem;
                line-height: 1;
            }

            > p {
                padding-bottom: 0;
            }
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

                &:hover {
                    background: rgba(0, 0, 0, 0.4);
                }

                > * {
                    width: 100%;
                    margin: ${theme.spacing(0.2)} 0;
                }

                > .title {
                    display: block;
                    padding: ${theme.spacing(2)} 0 0;
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
                > .content {
                    display: block;
                    // max-height: 400px;
                    padding: 1em;
                    margin: 1em 0 2rem;
                    border-radius: 10px;
                    background: rgba(0, 0, 0, 0.4);
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 300;
                    overflow: hidden;
                    opacity: 0.4;
                    pointer-events: none;

                    > .DraftEditor-root {
                        padding: 0;
                    }

                    ${theme.breakpoints.down('sm')} {
                        padding: 0.5em 0;
                        margin: 0 0 1em 0;
                    }
                }
                > .infos {
                    display: flex;
                    gap: 1.8em;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9em;
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
        // .itemWrap {
        //     .item {
        //         flex-direction: column;
        //         align-items: flex-start;
        //         padding: ${theme.spacing(4)} ${theme.spacing(3)};
        //         margin: 0;
        //         word-break: break-word;
        //         transition: all 0.18s;

        //         &:hover {
        //             background: rgba(255, 255, 255, 0.05);
        //         }

        //         > * {
        //             margin: ${theme.spacing(0.2)} 0;
        //         }

        //         .title {
        //             display: block;
        //             padding: ${theme.spacing(2)} 0;
        //             font-size: 2em;
        //             font-weight: 200;
        //             white-space: nowrap;
        //             overflow: hidden;
        //             text-overflow: ellipsis;

        //             &:first-of-type {
        //                 padding-top: 0;
        //             }

        //             &:link,
        //             &:visited {
        //                 color: inherit !important;
        //                 text-decoration: none !important;
        //             }

        //             > .type {
        //                 font-size: 0.45em;
        //             }
        //         }
        //         .content {
        //             display: block;
        //             max-height: 100px;
        //             color: rgba(255, 255, 255, 0.8);
        //             font-weight: 300;
        //             overflow: hidden;
        //         }
        //         .infos {
        //             display: flex;
        //             gap: 1.8em;
        //             color: rgba(255, 255, 255, 0.4);
        //             font-size: 0%.75;
        //             font-weight: 200;
        //         }
        //     }
        // }

        // .MuiDivider-root {
        //     margin: 0;
        // }
    }

    .btnConfirm {
        ${theme.breakpoints.down('sm')} {
            right: 1rem !important;
            bottom: 1rem !important;
            width: 3rem !important;
            height: 3rem !important;
            min-width: 0;
        }
    }

    .viewWrap {
        > h2 {
            padding: 0.5rem 1.5rem;
            font-size: 3.5rem;
            font-weight: 500;

            ${theme.breakpoints.down('sm')} {
                padding: 0.5rem 0.5rem;
                font-size: 2em;
            }
        }

        > .infos {
            display: flex;
            gap: 1.8em;
            padding: 1em 2em;
            border-radius: 100px;
            background: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9em;
            font-weight: 200;

            > *:first-of-type {
                margin-right: auto;
            }

            ${theme.breakpoints.down('sm')} {
                padding: 0.5em 1em;
            }
        }

        > .content {
            padding: 3rem 0 0;
            margin-bottom: 4rem;
        }

        .btnDelete {
            ${theme.breakpoints.down('sm')} {
                right: 1rem !important;
                bottom: 1rem !important;
                width: 3rem !important;
                height: 3rem !important;
                min-width: 0;
            }
        }
    }

    .noData {
        padding: 8rem 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1em;
        font-weight: 100;
        text-align: center;
    }
`;

export { boardStyle };
