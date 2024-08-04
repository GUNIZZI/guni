import { css } from '@emotion/react';

const containerStyle = () => css`
    width: 100vw;
    min-height: 100vh;

    .transitionWrap {
        min-height: 100vh;
        box-sizing: border-box;

        > .page {
            min-height: 100vh;
            box-sizing: border-box;

            > .wrap {
                padding: 5em;
            }
        }
    }
`;

export { containerStyle };
