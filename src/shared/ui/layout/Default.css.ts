import { css } from '@emotion/react';

const containerStyle = () => css`
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    .page {
        position: absolute;
        width: 100vw;
        height: 20vh;
    }
`;

export { containerStyle };
