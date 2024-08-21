import { css } from '@emotion/react';

const style = () => css`
    .btns {
        position: fixed;
        bottom: 2rem;
        right: 2rem;

        > * {
            margin: 0 0.3rem;

            &.isConfirm {
                width: 3em;
            }
        }
    }
`;

export { style as writeStyle };
