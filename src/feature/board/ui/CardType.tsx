import { css, Interpolation, Theme as RenderTheme } from '@emotion/react';
import DOMPurify from 'dompurify';
import { find } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { BoardContentProps, getImage } from '@/entitie/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { stripHtml } from '@/shared/util';

import NoneData from './NoneData';

import { ImageNotSupportedOutlined } from '@mui/icons-material';
import { Grid, Theme } from '@mui/material';

interface OwnProps {
    datas: BoardContentProps[] | undefined;
}

const style = (theme: Theme) => css`
    padding-top: 2em;

    .item {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        height: 28rem;
        padding: ${theme.spacing(0)};
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
    }
`;

const CardType = ({ datas }: OwnProps) => {
    const navigate = useNavigate();

    if (!datas?.length) return <NoneData />;

    return (
        <Grid container spacing={8} css={style as Interpolation<RenderTheme>}>
            {datas.map(item => (
                <Grid item xs={24} sm={6} md={6} lg={4} xl={3} key={item.id}>
                    <button
                        type="button"
                        className="item"
                        onClick={() => navigate(`seq=${item.id}`)}
                    >
                        <div
                            className="imgWrap"
                            style={{
                                backgroundImage: `url(${getImage(item.content || '')})`,
                            }}
                        >
                            {item.content && !getImage(item.content) && (
                                <ImageNotSupportedOutlined
                                    className="isNoneImage"
                                    sx={{ fontSize: '6rem' }}
                                />
                            )}
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
