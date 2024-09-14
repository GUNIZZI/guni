import { css, Theme } from '@mui/material';

const style = (theme: Theme) => css`
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

    > .pfWrap {
        display: flex;
        align-items: center;
        gap: 1em;
        padding: 2em 3em 3rem;

        > * {
            align-items: center;
        }

        > .title {
            flex: 1 1 60%;
            font-size: 6rem;
            font-weight: 600;
            text-align: center;
        }
        > .info {
            flex: 1 1 40%;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 1.5em;

            > .item {
                flex: 0 0 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0 0.4em;

                .title {
                    flex: 0 0 130px;
                    font-weight: 200;
                    font-size: 12px;
                    opacity: 0.7;
                }
                .text {
                    flex: 0 0;
                    font-weight: 300;

                    &.isTag {
                        &:not(:empty) {
                            padding: 0.2em 1em;
                            border-radius: 100px;
                            background: rgba(255, 255, 255, 0.15);
                            font-size: 12px;
                            white-space: nowrap;
                        }
                    }
                }
                .percentage {
                    flex: none;
                    width: 100%;
                    height: 1px;
                    position: relative;
                    margin: 0.5em 0 0;
                    background: rgba(255, 255, 255, 0.1);

                    .gage {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        border-radius: 100px;
                        // background: linear-gradient(to right, #007eff, #00d9ff);
                        background: rgba(255, 255, 255, 0.25);
                    }
                }
            }
        }

        ${theme.breakpoints.down('lg')} {
            padding: 2em 1em 3rem;

            > .title {
                flex: 1 1 50%;
                font-size: 4rem;
            }
            > .info {
                flex: 1 1 50%;
            }
        }
        ${theme.breakpoints.down('md')} {
            display: block;
            padding: 2em 1em 2em;
        }
        ${theme.breakpoints.down('sm')} {
            > .info {
                > .item {
                    display: block;
                    position: relative;

                    .title {
                        flex: none;
                        display: block;
                        padding-bottom: 0.3em;
                    }
                    .text {
                        flex: none;
                        margin: 0 0.2em 0 0;
                    }
                    .percentage {
                        position: absolute;
                        top: 0;
                        left: 110px;
                        max-width: calc(100% - 110px);
                    }
                }
            }
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

    a {
        color: #47ceff !important;
    }
`;

export { style };
