import { useMemo } from 'react';

import { css, Interpolation, Theme as RenderTheme } from '@emotion/react';
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

interface PortfolioItemType {
    title?: string;
    text?: string;
    percentage?: string; // value를 객체 형태로 구조화
}

interface PortfolioItemProps {
    Pl?: PortfolioItemType;
    Des?: PortfolioItemType;
    Dev?: PortfolioItemType;
    Pub?: PortfolioItemType;
    Pd?: PortfolioItemType;
    Range?: PortfolioItemType;
    URL?: PortfolioItemType;
}

const style = (theme: Theme) => css`
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
            flex: 1;
            position: relative;
            // border-right: 1px solid rgb(0, 217, 255);
            // border-radius: 1.5rem 0 0 1.5rem;
            background: #000;

            &:before {
                content: '';
                position: absolute;
                top: -1em;
                left: -1em;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
            }

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
            flex: 0 0 40%;
            display: flex;
            flex-direction: column;
            padding: 2em 1em;
            border-radius: 2rem 0 0 0;
            color: #fff;

            > .title {
                font-size: 1.8em;
                line-height: 1.2em;
                word-break: keep-all;

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
                margin-top: auto;
                font-family: 'Noto Sans KR';
                font-size: 12px;
                font-weight: 100;
                opacity: 0.8;
                line-height: 1em;
                transition: all 0.3s ease-in-out;

                > ul {
                    display: flex;
                    flex-direction: column;
                    gap: 1em;

                    li {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.4em 0.8em;

                        .title {
                            font-size: 11px;
                            font-weight: 100;
                            opacity: 0.4;

                            &:after {
                                content: '.';
                            }
                        }

                        .text {
                            margin-left: auto;
                        }

                        .percentage {
                            flex: none;
                            display: block;
                            width: 100%;
                            height: 1px;
                            margin-top: 0.3em;
                            background: rgba(255, 255, 255, 0.1);
                            overflow: hidden;

                            .gage {
                                display: block;
                                height: 100%;
                                text-align: left;
                                text-indent: -9999px;
                                background: rgb(0, 217, 255);
                                background: #fff;
                            }
                        }
                    }
                }
            }
        }

        &:hover {
        }

        ${theme.breakpoints.down('sm')} {
            flex-wrap: wrap;
            gap: 1em;
            height: auto;

            .imgWrap {
                flex: none;
                width: 100%;
                height: 20vh;
                min-height: 160px;
            }

            .infos {
                flex: none;
                width: 100%;
                padding: 0 0.5em;
                text-align: center;

                .content {
                    margin: 0 3em;
                }
            }
        }
    }
`;

const getKeyTitle = (key: string) => {
    const map: Record<string, string> = {
        pl: 'PL',
        des: 'Design',
        dev: 'Dev',
        pub: 'Publish',
        pd: 'Date',
        range: 'Range',
        url: 'URL',
    };
    return map[key] || '';
};

const extractInfo = (text: string): PortfolioItemProps => {
    const regex =
        /(Pl\.|Des\.|Dev\.|Pub\.|Pd\.|Range\.|URL\.)\s*(.*?)(?=(Pl\.|Des\.|Dev\.|Pub\.|Pd\.|Range\.|URL\.)|$)/g;

    const result: PortfolioItemProps = {};
    let match: RegExpExecArray | null = regex.exec(text);

    while (match !== null) {
        const rawKey = match[1].replace('.', '').toLowerCase(); // 소문자로 변환
        const key = (rawKey.charAt(0).toUpperCase() + rawKey.slice(1)) as keyof PortfolioItemProps; // 대문자로 시작하는 형식으로 변환
        const value = match[2].trim();

        // 퍼센트 값을 추출하는 정규식 (괄호 제외)
        const percentageMatch = value.match(/(\d+)%/g) || []; // 퍼센트 값들만 추출
        const cleanedPercentages = percentageMatch.map(p => p.replace(/[()]/g, '').trim())[0] || ''; // 괄호 제거 및 트림
        const cleanedText = value.replace(/\(\d+%\)/g, '').trim(); // 텍스트에서 "(숫자%)" 형태 제거 후 추출

        // 객체 형태로 저장
        result[key] = {
            title: getKeyTitle(rawKey),
            text: cleanedText, // 퍼센트 값을 제거한 텍스트
            percentage: cleanedPercentages, // 괄호가 제거된 퍼센트 값
        };

        match = regex.exec(text);
    }

    return result;
};

const PfType = ({ datas }: OwnProps) => {
    const navigate = useNavigate();
    const parseDatas = useMemo(() => {
        return datas?.map(item => {
            console.log(stripHtml(item.content || ''));
            return {
                ...item,
                info: extractInfo(stripHtml(item.content || '')),
            };
        });
    }, [datas]);

    if (!parseDatas?.length) return <NoneData />;

    return (
        <Grid container spacing={8} css={style as Interpolation<RenderTheme>}>
            {parseDatas.map(item => (
                <Grid item xs={24} sm={6} md={6} lg={4} xl={4} key={item.id}>
                    <button
                        type="button"
                        className="item"
                        onClick={() => navigate(`seq=${item.id}`)}
                    >
                        <div className="imgWrap">
                            <div
                                className="wrap"
                                style={{
                                    backgroundImage: `url(${getImage(item.content || '')})`,
                                }}
                            />
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
                                    [{find(BOARD_CONTENT_TYPES.PF, { code: item.docType })?.name}]
                                </span>
                                {item.title}
                            </div>
                            <div className="content">
                                <ul>
                                    {Object.values(item.info).map(({ title, text, percentage }) => (
                                        <li key={text}>
                                            <span className="title">{title}</span>
                                            <span className="text">{text}</span>
                                            {percentage && (
                                                <span className="percentage">
                                                    <span
                                                        className="gage"
                                                        style={{ width: percentage }}
                                                    >
                                                        {percentage}
                                                    </span>
                                                </span>
                                            )}
                                        </li>
                                    ))}
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
