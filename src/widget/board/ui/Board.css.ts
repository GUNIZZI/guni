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
            letter-spacing: -0.03em;

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

        ${theme.breakpoints.down('md')} {
            flex-direction: column;
            align-items: center;
            gap: 0;
            padding: 1rem 0 0.5rem 0;

            h2 {
                line-height: 1;
            }
        }

        ${theme.breakpoints.down('sm')} {
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
        .header {
            > h2 {
                > strong {
                    margin-right: -0.15em;
                }
            }
        }

        .MuiDivider-root {
            margin-left: 0;
        }
    }

    &.isPf {
        .header {
            > h2 {
                > strong {
                    margin-right: -0.17em;
                }
            }
        }
    }

    &.isView {
        .transitionWrap {
            .transitionWrap {
                display: flex;
                flex-direction: column;
                min-height: calc(100vh - 1.25rem);

                > .comment {
                    flex: 1 1;
                }
            }
        }
    }

    .boardTransitionWrap {
        display: flex;
        flex-direction: column;
        height: 100%;
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
`;

export { boardStyle };
