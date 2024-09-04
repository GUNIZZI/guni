import { css } from '@emotion/react';

import { NAV_PATH } from '@/shared/config/navPath';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    // > * {
    //     & div {
    //         font-size: ${theme.typography.h6.fontSize};
    //     }

    //     > strong {
    //         font-size: ${theme.typography.h2.fontSize};
    //     }

    //     > span {
    //         font-size: ${theme.typography.h3.fontSize};
    //     }
    // }

    // .gradientText {
    //     width: auto;
    //     background: linear-gradient(
    //         90deg,
    //         ${NAV_PATH[0].color} 35%,
    //         ${NAV_PATH[NAV_PATH.length - 1].color} 75%
    //     );
    //     -webkit-background-clip: text;
    //     background-clip: text;
    //     -webkit-text-fill-color: transparent;
    //     text-fill-color: transparent;
    // }

    display: flex;

    .leftWrap {
        flex: 1 1 20%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: relative;
        overflow: hidden;

        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 1px;
            height: 80vh;
            background: rgba(255, 255, 255, 0.4);
        }

        .rotateTxt {
            transform: rotate(270deg) translateX(40%) translateY(-0.58em);
            white-space: nowrap;
            font-size: 10vw;
            line-height: 1;

            > *:first-of-type {
                position: relative;
                font-weight: 100;
            }
        }
    }

    .rightWrap {
        flex: 1 1 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .skills {
            display: flex;
            padding: 4rem 0;
            font-size: 10rem;

            .item {
                width: 10rem;
                height: 10rem;
                border: 10px solid #fff;
                text-align: center;

                :not(:first-of-type) {
                    margin-left: -10px;
                }

                &:nth-child(2n + 1) {
                    margin-top: -0.23em;
                    border-bottom: none;
                    border-radius: 50% 50% 0 0;
                }
                &:nth-child(2n) {
                    margin-top: 0.23em;
                    border-top: none;
                    border-radius: 0 0 50% 50%;
                }

                > * {
                    align-self: center;
                    font-size: 1rem;
                }
            }
        }
    }
`;

export { style as aboutStyle };
