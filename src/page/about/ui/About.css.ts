import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    display: flex;
    z-index: 1;

    .animationWrap {
        flex: 1 1 50%;

        > .wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            position: sticky;
            top: 1.25rem;
            height: calc(100vh - 1.25rem);
            max-width: none;
            min-height: 600px;
        }
    }

    .listWrap {
        flex: 1 1 50%;
        display: flex;
        flex-direction: column;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: -5rem;
            left: 0.18rem;
            width: 1px;
            height: 6.1rem;
            background-color: ${theme.palette.divider};
        }

        .item {
            display: flex;
            position: relative;
            padding: 0 0 6rem 3rem;

            &:before {
                content: '';
                position: absolute;
                top: 1.5rem;
                left: 0.18rem;
                width: 1px;
                height: calc(100% - 1.6rem);
                background-color: ${theme.palette.divider};
            }

            &:after {
                content: '';
                position: absolute;
                top: 0.4rem;
                left: 0;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                background-color: #fff;
            }

            > .title {
                flex: 0 0 13rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-size: 2.375rem;
                line-height: 1.4em;
                transition: all 0.24s;

                .yearFirst {
                    font-size: 1.25rem;
                    line-height: 1em;
                }
                .yearLast {
                    font-weight: 600;
                }
                .curComp {
                    padding: 8px 14px;
                    margin-top: 1rem;
                    border-radius: 100px;
                    background: rgba(0, 0, 0, 0.5);
                    font-size: 0.875rem;
                    font-weight: 200;
                    line-height: 1;
                }
            }

            > .compPrjList {
                flex: 1 1;
                transition: all 0.24s;

                > .comp {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    padding: 1.2rem 0 2.8rem;
                    font-size: 1.375rem;
                    font-weight: 600;
                    line-height: 1;

                    > .btns {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;

                        > * {
                            min-width: 0;
                            padding: 0.3rem;
                        }
                    }
                }
                > .prjList {
                    display: flex;
                    max-width: 500px;
                    flex-direction: column;
                    gap: 2rem;

                    .prjItem {
                        display: flex;
                        flex-wrap: wrap;
                        padding: 1rem 2rem;
                        margin: -1rem -2rem;
                        border-radius: 3rem;
                        background: rgba(255, 255, 255, 0);
                        box-shadow: 0 0 8px rgba(0, 0, 0, 0);
                        transition: all 0.12s ease;

                        .prjName {
                            font-weight: 400;
                            line-height: 1.6em;
                        }
                        .date {
                            margin-left: auto;
                            color: rgba(255, 255, 255, 0.5);
                            font-weight: 200;
                        }
                        .part {
                            flex: none;
                            display: flex;
                            gap: 1em;
                            width: 100%;
                            margin-top: 0.5rem;
                            font-size: 0.75rem;
                            line-height: 1;

                            > * {
                                padding: 4px 10px;
                                border-radius: 100px;
                                background: rgba(255, 255, 255, 0.1);
                            }
                        }

                        &:hover {
                            padding: 1rem 3rem;
                            margin: -1rem -3rem;
                            background: rgba(0, 0, 0, 0.4);
                        }
                    }
                }
                > .noneProject {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                    font-weight: 100;
                }
            }

            .isBlur {
                filter: blur(3px);
            }

            // Edit Mode
            > .editItem {
                position: absolute;
                top: 0;
                left: 0;
                width: calc(100% - 4rem);

                .wrap {
                    display: grid;
                    grid-template-columns: 50px 90px 10px 90px 1fr 40px 40px;
                    gap: 4px;
                    padding: 1rem 1.5rem 1rem 1rem;
                    margin: -0.3rem 2rem 0;
                    border-radius: 1rem;
                    background: #ffa700;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
                    text-align: center;

                    > span {
                        align-self: center;
                        color: #000;
                    }

                    > button {
                        padding: 0;
                        min-width: 0;
                    }
                }
            }

            // 소개
            &.analyze {
                display: block;

                &:before {
                    content: '';
                    position: absolute;
                    top: 2.5rem;
                    left: 0.18rem;
                    width: 1px;
                    height: calc(100% - 2.6rem);
                    background-color: ${theme.palette.divider};
                }

                &:after {
                    content: '';
                    position: absolute;
                    top: 1.5rem;
                    left: 0;
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 50%;
                    background-color: #fff;
                }

                .title {
                    margin-bottom: 3rem;
                    font-weight: 600;
                }
                .aboutInfo {
                    display: flex;
                    gap: 2rem;

                    > .img {
                        flex: 0 0 200px;
                        width: 200px;
                        height: 200px;
                        border-radius: 50%;
                        background: rgba(0, 0, 0, 0.3);
                        overflow: hidden;
                    }

                    > .info {
                        flex: 1 1;
                        align-self: center;

                        > .name {
                            font-size: 1.875rem;
                            font-weight: 700;
                        }
                        > .infos {
                            padding: 0.5rem 0 0;

                            > dl {
                                margin: 0.5rem 0;

                                dt {
                                    font-size: 0.75rem;
                                    font-weight: 100;
                                }
                                dd {
                                    padding: 0;
                                    margin: 0;
                                    font-size: 1.125rem;
                                    font-weight: 300;
                                }
                            }
                        }
                    }
                }

                // .img {
                //     height: 300px;
                // }
            }

            // 추가 모드일 경우
            &.isAddMode {
                // display: inline-flex;
                width: 0;
                padding: 3em 0 3rem;
                transition: all 0.24s;

                &:before {
                    top: 45px;
                    height: calc(100% - 48px);
                }

                &:after {
                    content: '+';
                    left: -12px;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    background: #ffa700;
                    color: #000;
                    font-size: 2rem;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;
                    transition: all 0.24s;
                }

                > .editItem {
                    margin-top: -0.5rem;
                }

                &:hover {
                    &:after {
                        background: #000;
                        color: #ffa700;
                    }
                }

                &.isEditMode {
                    width: 100%;

                    &:after {
                        background: #000;
                        color: #ffa700;
                    }
                }
            }
        }
    }

    ${theme.breakpoints.down('md')} {
        .animationWrap {
            display: none;
        }
        .listWrap {
            flex: 1 1;
        }
    }
`;

export { style as aboutStyle };
