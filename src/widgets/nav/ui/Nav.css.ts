import { css } from '@emotion/react';

const style = () => css`
    position: fixed;
    top: 50%;
    right: 2em;
    transform: translateY(-50%);
    z-index: 10;

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1em;

        li {
            a {
                display: block;
                position: relative;
                width: 50px;
                height: 40px;
                padding: 10px 15px;
                margin-left: auto;
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.1);
                box-sizing: border-box;
                color: #fff;
                white-space: nowrap;
                transition: all 0.18s ease-in-out;

                &:hover {
                    background: var(--color);

                    color: #000;

                    > span {
                        padding: 10px 50px 10px 30px;
                        background: var(--color);
                        opacity: 1;
                    }
                }
                &.active {
                    background: var(--color);
                    color: #000;
                }

                > .title {
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 10px 40px 10px 0;
                    border-radius: 50px 10px 10px 50px;
                    color: #000;
                    font-size: 0.75em;
                    font-weight: 600;
                    white-space: nowrap;
                    opacity: 0;
                    line-height: 20px;
                    transition: all 0.18s ease-in-out;
                }

                > .icon {
                    position: relative;
                }
            }
        }
    }
`;

export { style as navStyle };
