import { css } from '@emotion/react';

const style = () => css`
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 10;

    > button {
        min-width: 40px;
        height: 40px;
        padding: 0 1em;
        border-radius: 100px;
    }

    .userName {
        padding-left: 0.4em;
        font-size: 11px;
    }
`;

export { style as userBedgeStyle };
