import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    position: fixed;
    top: 50%;
    right: 2em;
    transform: translateY(-50%);
    z-index: 9;

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

    ${theme.breakpoints.down('md')} {
        position: relative;
        top: 0;
        height: 6rem;
        right: auto;
        transform: none;
        padding: ${theme.spacing(5)};
        box-sizing: border-box;

        ul {
            flex-direction: row;
            justify-content: center;
            gap: 2em;

            li {
                a {
                    height: 50px;
                    padding: 15px 15px;
                    border-radius: 1em;

                    > .title {
                        display: none;
                    }
                }
            }
        }
    }

    ${theme.breakpoints.down('sm')} {
        ul {
            gap: 0.5em;
        }
    }
`;

export { style as navStyle };
