import { css } from '@emotion/react';

const style = () => css`
    padding: 16px;
    border-radius: 4px;

    &.isEditMode {
        min-height: calc(100vh - 9rem);
        margin-bottom: 2em;
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

    // Toolbar
    .toolbarContainer {
        display: flex;
        gap: 2px;
        padding: 1em;
        margin: -16px -16px 0;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        z-index: 2;

        > * {
            flex: 0 0;
            display: flex;
            gap: 2px;
        }

        hr {
            flex: 0 0 1px;
            align-self: center;
            width: 1px;
            height: 30px;
            padding: 0;
            margin: 0 10px;
            border: none;
            background: rgba(255, 255, 255, 0.2);
        }

        .toolbar {
            margin-right: auto;

            > * {
                display: flex;
                gap: 2px;
            }
        }

        button {
            padding: 9px 0;
            width: 36px;
            height: 36px;
            border: none;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.8);
            color: #000;
            font-size: 18px;
            transition: all 0.18s;
            cursor: pointer;

            &:hover {
                background: rgba(255, 255, 255, 1);
            }

            &:disabled {
                background: rgba(255, 255, 255, 0.3);
                cursor: default;
            }

            svg {
                width: 18px;
                height: 18px;
            }
        }
    }

    .editorImg {
        display: block;
        max-width: 100%;
        margin: 0 auto;
    }

    .linkyLink {
        &:link {
            color: #0dd9ff;
        }
        &:visited {
            color: #ce57ff;
        }
    }

    .code-block {
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
    }
`;

export { style };
