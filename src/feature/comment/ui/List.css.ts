import { css } from '@emotion/react';

const styles = () => css`
    padding: 1em 0;

    > .comment {
        display: flex;
        gap: 1em;
        padding: 1em;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.1);

        > .icon {
            align-content: center;
            width: 3em;
            height: 3em;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            font-size: 1.1em;
            font-weight: 700;
            text-align: center;
        }

        > .content {
            align-content: center;
            font-size: 0.9rem;
            font-weight: 300;

            > .date {
                display: block;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }
`;

export { styles };
