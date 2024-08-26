import { css } from '@emotion/react';

const style = () => css`
    padding: 16px;

    &.isEditMode {
        height: calc(100vh - 9rem);
        min-height: 500px;
        background: rgba(255, 255, 255, 0.06);
        box-sizing: border-box;
        cursor: text;
        transition: all 0.18s;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        &.isFocus {
            background: rgba(255, 255, 255, 0.14);
        }
    }

    .DraftEditor-root {
        padding: 1em 0;
    }

    .editor :global(.public-DraftEditor-content) {
        min-height: 140px;
        margin: 1em 0;
    }

    // Button Styles
    .buttonWrapper {
        display: inline-block;
    }

    .button {
        background: #333;
        color: #ddd;
        font-size: 18px;
        border: 0;
        padding-top: 5px;
        vertical-align: bottom;
        height: 34px;
        width: 36px;
        border-radius: 4px;
    }

    .button svg {
        fill: #ddd;
    }

    .button:hover,
    .button:focus {
        background: #444;
        outline: 0; /* reset for :focus */
    }

    .active {
        color: #6a9cc9;
    }

    .active svg {
        fill: #6a9cc9;
    }

    // Toolbar
    .toolbar {
        padding: 0.4em;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.1);
        // filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 1));
        box-sizing: border-box;
        z-index: 2;

        > * {
            display: flex;
            gap: 2px;

            .btn {
                padding: 0;
                width: 36px;
                height: 36px;
                border: none;
                border-radius: 4px;
                background: rgba(255, 255, 255, 0.8);
                font-size: 0.5em;
                transition: all 0.18s;
                cursor: pointer;

                &:hover {
                    background: rgba(255, 255, 255, 1);
                }

                svg {
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }
`;

export { style };
