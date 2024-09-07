import { css, Interpolation, Theme as RenderTheme } from '@emotion/react';
import DOMPurify from 'dompurify';
import { find } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { BoardContentProps, getImage } from '@/entitie/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { LazyImage } from '@/shared/ui/image';
import { stripHtml } from '@/shared/util';

import NoneData from './NoneData';

import { Grid, Theme, useMediaQuery, useTheme } from '@mui/material';

interface OwnProps {
    datas: BoardContentProps[] | undefined;
}

const style = (theme: Theme) => css`
    padding-top: 2em;

    .item {
        display: flex;
        width: 100%;
        align-items: flex-end;
        position: relative;
        height: 28rem;
        // padding: ${theme.spacing(0)};
        border: none;
        border-radius: 1.5rem;
        background: #000;
        overflow: hidden;
        text-align: left;
        cursor: pointer;

        > * {
            position: relative;
        }

        .imgWrap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: top center;
            transition: all 0.6s ease-in-out;

            > .wrap {
                position: relative;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
            }

            .isNoneImage {
                position: absolute;
                top: 40%;
                left: 50%;
                color: #fff;
                transform: translateX(-50%) translateY(-20%);
                opacity: 0.1;
            }
        }

        .infos {
            flex: 1 1;
            padding: 1em;
            border-radius: 2rem 0 0 0;
            background: rgba(255, 255, 255, 0.7);
            background: rgba(0, 0, 0, 0.9);
            color: #fff;

            &:before {
                content: '';
                position: absolute;
                top: -2rem;
                right: -2rem;
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                box-shadow: inset -2rem -2rem rgba(0, 0, 0, 0.9);
            }

            .title {
                font-size: 1.8em;
                line-height: 1.2em;

                > .type {
                    display: block;
                    font-size: 13px;
                    font-weight: 200;
                    opacity: 0.6;
                }
                > .date {
                    display: block;
                    font-size: 12px;
                    font-weight: 200;
                    opacity: 0.4;
                }
            }

            .content {
                max-height: 0;
                margin: 0;
                overflow: hidden;
                font-size: 1rem;
                font-weight: 100;
                opacity: 0.8;
                transition: all 0.3s ease-in-out;
            }
        }

        &:hover {
            .imgWrap {
                opacity: 0.3;
            }
            .infos {
                .content {
                    max-height: 4.8rem;
                    margin: 1em 0;
                }
            }
        }

        ${theme.breakpoints.down('sm')} {
            height: 20rem;
        }
    }

    ${theme.breakpoints.down('sm')} {
        padding-top: 1.5em;
    }
`;

const CardType = ({ datas }: OwnProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    let spacing = 15;
    if (isTablet) spacing = 11;
    if (isMobile) spacing = 7;

    if (!datas?.length) return <NoneData />;

    return (
        <Grid container spacing={spacing} css={style as Interpolation<RenderTheme>}>
            {datas.map(item => (
                <Grid item xs={24} sm={6} md={6} lg={4} xl={3} key={item.id}>
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
                                    [{find(BOARD_CONTENT_TYPES.LIFE, { code: item.docType })?.name}]
                                </span>
                                {item.title}
                                <span className="date">{item.date}</span>
                            </div>
                            <div
                                className="content"
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                        stripHtml(item.content || '').substring(0, 50),
                                    ),
                                }}
                            />
                        </div>
                    </button>
                </Grid>
            ))}
        </Grid>
    );
};

export { CardType };
