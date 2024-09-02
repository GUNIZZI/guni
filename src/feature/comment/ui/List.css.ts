import { css } from '@emotion/react';

import { NAV_PATH } from '@/shared/config/navPath';

import { Theme } from '@mui/material';

const getColor = () => {
    return (
        NAV_PATH.find(item => item.path === `/${window.location.pathname.split('/')[2]}`)?.color ??
        '#ffffff'
    );
};

const styles = (theme: Theme) => css`
    padding: 1em 0;

    > li {
        &:not(:last-child) {
            border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
        }

        .comment {
            display: flex;
            gap: 1em;
            padding: 1em;

            > .iconWrap {
                flex: 0 0;
                align-content: center;
                display: flex;
                flex-direction: column;
                gap: 0.5em;
                align-items: center;

                > .icon {
                    display: block;
                    width: 90px;
                    padding: 0.3em 0.8em;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 100px;
                    background: rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 0.75em;
                    font-weight: 300;
                    text-align: center;
                    text-overflow: ellipsis;

                    &.isAdmin {
                        border-color: ${getColor()} !important;
                        color: ${getColor()} !important;
                        font-weight: 800;
                        opacity: 0.7;
                    }
                }

                > .date {
                    display: block;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 12px;
                    font-weight: 100;
                }
            }

            > .content {
                align-content: center;
                font-weight: 200;
                line-height: 1.8em;
                word-break: keep-all;
            }

            > .btns {
                margin-left: auto;
                display: flex;
                gap: 4px;
                align-items: center;

                > * {
                    width: 1.5rem;
                    height: 1.5rem;
                    min-width: 0;
                    padding: 0;
                }
            }

            ${theme.breakpoints.down('sm')} {
                flex-direction: column;
                gap: 0.6em;
                position: relative;
                padding: 1em 0.5em;

                > .iconWrap {
                    flex-direction: row;
                    gap: 1em;

                    > .icon {
                        width: 70px;
                        padding: 0.1em 0.3em;
                        font-size: 11px;
                        font-weight: 600 !important;
                    }
                }

                > .content {
                    font-size: 14px;
                    line-height: 1.6em;
                }

                > .btns {
                    position: absolute;
                    top: 1em;
                    right: 0;
                }
            }
        }
    }

    &.noData {
        padding: 4rem;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1em;
        font-weight: 100;
        text-align: center;
    }
`;

export { styles };
