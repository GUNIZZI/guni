import { css } from '@emotion/react';

const style = () => css`
    position: relative;
    padding: 3rem 2rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: calc(100vw - 25px);
        height: 100%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.3);
    }
`;

export { style };
