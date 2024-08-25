import { css } from '@emotion/react';

const styles = () => css`
    display: flex;

    .commentTa {
        background: rgba(255, 255, 255, 0.03);
        fieldset {
            border: none;
        }
    }

    &.notUser {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        background: rgba(255, 255, 255, 0.03);
        color: #999;
        font-size: 0.9em;
        font-weight: 300;
    }
`;

export { styles };
