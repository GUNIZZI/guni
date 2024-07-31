import { css } from '@emotion/react';

import { NAV_PATH } from '@/shared/config/navPath';

const getColor = () => {
    return NAV_PATH.find(item => item.path === window.location.pathname)?.color || '#fff';
};

const loaderStyle = () => {
    const rndColor = getColor();

    return css`
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%;
        max-width: 6rem;

        &:before,
        &:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            animation: pulsOut 2s ease-in-out infinite;
            filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.3));
        }
        &:before {
            width: 100%;
            padding-bottom: 100%;
            box-shadow: inset 0 0 0 1rem ${rndColor};
            animation-name: pulsIn;
        }
        &:after {
            width: calc(100% - 2rem);
            padding-bottom: calc(100% - 2rem);
            box-shadow: 0 0 0 0 ${rndColor};
        }

        @keyframes pulsIn {
            0% {
                box-shadow: inset 0 0 0 1rem ${rndColor};
                opacity: 1;
            }
            50%,
            100% {
                box-shadow: inset 0 0 0 0 ${rndColor};
                opacity: 0;
            }
        }

        @keyframes pulsOut {
            0%,
            50% {
                box-shadow: 0 0 0 0 ${rndColor};
                opacity: 0;
            }
            100% {
                box-shadow: 0 0 0 1rem ${rndColor};
                opacity: 1;
            }
        }
    `;
};

export { loaderStyle };
