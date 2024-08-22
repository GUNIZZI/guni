import { css } from '@emotion/react';

import { NAV_PATH } from '@/shared/config/navPath';

const getColor = () => {
    return (
        NAV_PATH.find(item => item.path === `/${window.location.pathname.split('/')[2]}`)?.color ??
        '#ffffff'
    );
};

const styles = () => css`
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
                    width: 110px;
                    padding: 0.3em 0.8em;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 100px;
                    background: rgba(255, 255, 255, 0.05);
                    font-size: 0.75em;
                    font-weight: 300;
                    text-align: center;

                    &.isAdmin {
                        border-color: ${getColor()} !important;
                        color: ${getColor()} !important;
                        font-weight: 800;
                    }
                }

                > .date {
                    display: block;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75em;
                }
            }

            > .content {
                align-content: center;
                font-size: 0.9rem;
                font-weight: 100;
            }

            > .btns {
                align-content: center;
                margin-left: auto;
            }
        }
    }

    &.noData {
        padding: 3em;
        color: rgba(255, 255, 255, 0.3);
        font-size: 1.2;
        font-weight: 100;
        text-align: center;
    }
`;

export { styles };
