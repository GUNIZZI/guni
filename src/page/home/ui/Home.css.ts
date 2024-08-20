import { css } from '@emotion/react';

import bg1 from '@/shared/assets/images/bg1.jpg';
import { NAV_PATH } from '@/shared/config/navPath';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    // background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg1});
    // background-size: cover;
    // background-position: center;

    background: radial-gradient(
        circle at 20% 20%,
        rgb(255 135 212 / 20%) 0%,
        rgba(50, 50, 100, 0.2) 50%,
        rgba(10, 10, 10, 1) 100%
    );

    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 48px);

        .subtitle {
            padding: 0 0 2rem 0;
            font-size: 1em;
            font-weight: 200;

            > span {
                padding: 0 0.5em;
                font-size: 0.75em;
            }
        }

        .grpG {
            display: flex;
            align-items: center;
            font-size: 1.4em;
            text-align: center;

            .g {
                line-height: 1;
                font-size: 10em;
                font-weight: 400;
                background: linear-gradient(
                    135deg,
                    #ff018e 20%,
                    ${NAV_PATH[0].color} 70%,
                    #fff 90%
                );
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
            }

            .uni {
                display: flex;
                margin: 1.5em 0 0 -0.8em;

                > * {
                    font-size: 2em;
                    font-weight: 500;
                    line-height: 1;
                }
            }

            // background: linear-gradient(
            //     135deg,
            //     ${NAV_PATH[0].color} 0%,
            //     ${NAV_PATH[1].color} 20%,
            //     ${NAV_PATH[2].color} 40%,
            //     ${NAV_PATH[3].color} 60%,
            //     ${NAV_PATH[4].color} 80%
            // );
            // color: transparent;
            // -webkit-background-clip: text;
            // background-clip: text;
            // -webkit-text-fill-color: transparent;
            // text-shadow: 0 0 60px rgba(255, 255, 255, 0.5);
        }
    }

    .bg {
        font-family: sans-serif;
        // background: linear-gradient(95deg, ${NAV_PATH[0].color} 0%, rgba(0, 0, 0, 0) 55%);

        &:before {
            content: 'G';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(-30deg);
            font-size: 150vw;
            font-weight: 300;
            line-height: 1;
            opacity: 0.01;
        }
        // &:after {
        //     content: 'G';
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translateX(-50%) translateY(-50%) rotate(-45deg);
        //     font-size: 250vh;
        //     font-weight: 100;
        //     line-height: 1;
        //     opacity: 0.01;
        // }
    }

    > * {
        & div {
            font-size: ${theme.typography.h6.fontSize};
        }

        > strong {
            font-size: ${theme.typography.h2.fontSize};
        }

        > span {
            font-size: ${theme.typography.h3.fontSize};
        }
    }

    .gradientText {
        background: linear-gradient(
            90deg,
            ${NAV_PATH[0].color} 35%,
            ${NAV_PATH[NAV_PATH.length - 1].color} 75%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
    }
`;

export { style as homeStyle };
