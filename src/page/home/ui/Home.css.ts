import { css } from '@emotion/react';

import { NAV_PATH } from '@/shared/config/navPath';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 48px);

        ${theme.breakpoints.down('md')} {
            height: calc(100vh - 8rem);
        }

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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-family: sans-serif;
        overflow: hidden;

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

    .postit {
        width: auto; /* 포스트잇의 너비 */
        height: 200px; /* 포스트잇의 높이 */
        background-color: #ffeb3b; /* 포스트잇의 노란색 배경 */
        padding: 1em 2em;
        color: #333;
        font-size: 16px;
        font-family: 'Arial', sans-serif;
        border: 1px solid #f0c30f; /* 테두리 색상 */
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.8); /* 그림자 효과 */
        position: relative;
        transform-origin: top; /* 상단을 기준으로 회전 */
        animation: flutter 3s infinite ease-in-out; /* 나풀거리는 애니메이션 */
    }

    @keyframes flutter {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(2deg); /* 시계 방향으로 회전 */
        }
        50% {
            transform: rotate(-2deg); /* 반시계 방향으로 회전 */
        }
        75% {
            transform: rotate(1deg); /* 다시 시계 방향으로 회전 */
        }
        100% {
            transform: rotate(0deg); /* 원래 위치로 돌아옴 */
        }
    }
`;

export { style as homeStyle };
