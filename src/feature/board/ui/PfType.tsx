import { useMemo } from 'react';

import { css, Interpolation, Theme as RenderTheme } from '@emotion/react';
import { find } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { getImage } from '@/entitie/board';
import { BoardContentPfProps } from '@/entitie/board/model/type';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { LazyImage } from '@/shared/ui/image';

import NoneData from './NoneData';

import { Grid, Theme, useMediaQuery, useTheme } from '@mui/material';

interface OwnProps {
    datas: BoardContentPfProps[] | undefined;
}

const style = (theme: Theme) => css`
    padding-top: 2em;

    .col {
        &:nth-of-type(even) {
            .item {
                .imgWrap {
                    border-radius: 0 4em 0 1.5rem;
                }

                .infos {
                    flex-direction: column-reverse;
                    padding: 2em 1em 1em 2em;

                    > .title {
                        border-radius: 0 2rem 0 0;
                    }

                    .content {
                        margin-top: 0;
                        margin-bottom: auto;
                    }
                }

                &:hover {
                    .infos {
                        > .title {
                            border-bottom-left-radius: 0.8em;
                        }
                    }
                }
            }
        }
    }

    .item {
        display: flex;
        align-items: stretch;
        width: 100%;
        position: relative;
        height: 25rem;
        padding: ${theme.spacing(0)};
        border: none;
        background: none;
        box-sizing: border-box;
        text-align: left;
        cursor: pointer;

        .imgWrap {
            flex: 0 0 200px;
            position: relative;
            border-radius: 1.5rem 0 4em 0;
            background: #000;
            overflow: hidden;

            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
            }

            .wrap {
                position: relative;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                transition: all 0.6s ease-in-out;
            }

            .isNoneImage {
                position: absolute;
                top: 40%;
                left: 50%;
                color: #fff;
                transform: translateX(-50%) translateY(-20%);
                opacity: 0.1;
                transition: all 0.6s ease-in-out;
            }
        }

        .infos {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 1em 1em 2em 2em;
            color: #fff;

            > .title {
                position: relative;
                padding: 1em 1em 1em 0;
                margin-left: -5em;
                border-radius: 0 0 2rem 0;
                background: rgba(0, 0, 0, 0.7);
                overflow: hidden;
                font-family: 'Noto Sans KR';
                font-size: 2em;
                font-weight: 600;
                line-height: 1.2em;
                word-break: keep-all;
                transition: all 0.3s ease-in-out;

                > * {
                    position: relative;
                    margin-left: 2.4rem;
                    transition: all 0.6s ease-in-out;
                }

                > .type {
                    display: block;
                    top: 0.5em;
                    left: 0.5em;
                    padding-bottom: 8px;
                    font-size: 13px;
                    font-weight: 200;
                    line-height: 1em;
                    opacity: 0.6;
                    transition: all 0.5s ease-in-out;
                }
            }

            .content {
                margin-top: auto;
                font-family: 'Noto Sans KR';
                font-size: 12px;
                font-weight: 100;
                opacity: 0.8;
                line-height: 1em;
                transition: all 0.3s ease-in-out;

                > ul {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    gap: 1.6em;

                    li {
                        display: grid;
                        grid-template-columns: auto 1fr;
                        flex-wrap: nowrap;
                        position: relative;
                        gap: 0 1em;

                        .title {
                            font-size: 11px;
                            font-weight: 100;
                            opacity: 0.4;

                            &:after {
                                content: '.';
                            }
                        }

                        .text {
                            text-align: right;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .percentage {
                            flex: none;
                            display: block;
                            position: absolute;
                            bottom: -8px;
                            width: 100%;
                            height: 1px;
                            margin-top: 0.3em;
                            background: rgba(255, 255, 255, 0.1);
                            // overflow: hidden;

                            .gage {
                                display: block;
                                position: relative;
                                height: 100%;
                                text-align: left;
                                text-indent: -9999px;
                                background: rgba(255, 255, 255, 0.4);

                                &:after {
                                    content: '';
                                    position: absolute;
                                    top: 50%;
                                    right: 0;
                                    transform: translateY(-50%);
                                    width: 1px;
                                    height: 0.5em;
                                    background: rgba(255, 255, 255, 0.7);
                                }
                            }
                        }
                    }
                }
            }
        }

        &:hover {
            ${theme.breakpoints.up('sm')} {
                .imgWrap {
                    > * {
                        opacity: 0.3;
                    }
                }
                .infos {
                    > .title {
                        margin-left: -8em;
                        border-top-left-radius: 0.8em;

                        > * {
                            margin-left: 1rem;
                        }
                    }
                }
            }
        }

        ${theme.breakpoints.down('sm')} {
            flex-wrap: wrap;
            gap: 1em;
            height: 30vh;

            .imgWrap {
                flex: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 0.5em !important;
                min-height: 160px;
            }

            .infos {
                flex-direction: column !important;
                justify-content: flex-end !important;
                padding: 0.5em !important;
                text-align: center;

                > .title {
                    padding: 0.5em;
                    margin: 0 !important;
                    border-radius: 0.5em !important;
                    background: rgba(0, 0, 0, 0.7);
                    overflow: hidden;
                    font-family: 'Noto Sans KR';
                    font-size: 2em;
                    font-weight: 600;
                    line-height: 1.2em;
                    word-break: keep-all;
                    transition: all 0.3s ease-in-out;

                    > * {
                        margin: 0 !important;
                    }
                }

                .content {
                    display: none;
                }
            }
        }
    }

    ${theme.breakpoints.down('sm')} {
        padding-top: 1.5em;
    }
`;

const PfType = ({ datas }: OwnProps) => {
    const navigate = useNavigate();
    const parseDatas = useMemo(() => {
        return datas?.map(item => {
            return {
                ...item,
                info: {
                    pl: item.pl || null,
                    design: item.design || null,
                    dev: item.dev || null,
                    publish: item.publish || null,
                    prjDate: item.prjDate || null,
                    prjRange: item.prjRange || null,
                    url: item.url || null,
                },
            };
        });
    }, [datas]);

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    let spacing = 15;
    if (isTablet) spacing = 11;
    if (isMobile) spacing = 7;

    if (!parseDatas?.length) return <NoneData />;

    return (
        <Grid container spacing={spacing} css={style as Interpolation<RenderTheme>}>
            {parseDatas.map(item => (
                <Grid item className="col" xs={24} sm={6} md={6} lg={4} xl={3} key={item.id}>
                    <button
                        type="button"
                        className="item"
                        onClick={() => navigate(`seq=${item.id}`)}
                    >
                        <div className="imgWrap">
                            <LazyImage
                                className="wrap"
                                style={{
                                    backgroundImage: `url(${getImage(item.content || '')})`,
                                }}
                            />
                        </div>
                        <div className="infos">
                            <div className="title">
                                <span className="type">
                                    [{find(BOARD_CONTENT_TYPES.PF, { code: item.docType })?.name}]
                                </span>
                                <span>{item.title}</span>
                            </div>
                            <div className="content">
                                <ul>
                                    {Object.entries(item.info).map(([title, text]) => {
                                        if (text === null) return null;
                                        return (
                                            <li key={text}>
                                                <span className="title">{title}</span>
                                                <span className="text">
                                                    <span>{text}</span>
                                                </span>
                                                {title !== 'prjDate' &&
                                                    title !== 'prjRange' &&
                                                    title !== 'url' && (
                                                        <span className="percentage">
                                                            <span
                                                                className="gage"
                                                                style={{ width: `${text}%` }}
                                                            >
                                                                {`${text}%`}
                                                            </span>
                                                        </span>
                                                    )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </button>
                </Grid>
            ))}
        </Grid>
    );
};

export { PfType };
