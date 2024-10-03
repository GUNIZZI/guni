import React from 'react';

import { css, Interpolation, Theme as RenderTheme } from '@emotion/react';
import DOMPurify from 'isomorphic-dompurify';
import { find } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { BoardContentProps } from '@/entitie/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { QuillEditorStyle } from '@/shared/ui/quillEditor';
import { stripHtml } from '@/shared/util';

import NoneData from './NoneData';

import { List, ListItem, Divider, Theme } from '@mui/material';

interface OwnProps {
    datas: BoardContentProps[] | undefined;
}

const style = (theme: Theme) => css`
    .item {
        flex-direction: column;
        align-items: flex-start;
        padding: ${theme.spacing(6)} ${theme.spacing(3)};
        margin: 0;
        word-break: break-word;
        cursor: pointer;
        transition: all 0.24s;

        &:hover {
            background: rgba(0, 0, 0, 0.4);
        }

        > * {
            width: 100%;
            margin: ${theme.spacing(0.2)} 0;
        }

        > .title {
            display: block;
            padding: ${theme.spacing(2)} 0 0;
            font-size: 2em;
            font-weight: 200;
            overflow: hidden;
            line-height: 1.2em;
            text-overflow: ellipsis;

            &:first-of-type {
                padding-top: 0;
            }

            &:link,
            &:visited {
                color: inherit !important;
                text-decoration: none !important;
            }

            > .type {
                font-size: 0.45em;
            }
        }
        > .content {
            display: block;
            // max-height: 400px;
            padding: 1em;
            margin: 1em 0 2rem;
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.4);
            color: rgba(255, 255, 255, 0.8);
            font-weight: 300;
            overflow: hidden;
            opacity: 0.4;
            pointer-events: none;

            > .DraftEditor-root {
                padding: 0;
            }

            ${theme.breakpoints.down('sm')} {
                padding: 0.5em 0;
                margin: 0 0 1em 0;
            }
        }
        > .infos {
            display: flex;
            gap: 1.8em;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9em;
            font-weight: 200;
        }
    }
`;

const ListType = ({ datas }: OwnProps) => {
    const navigate = useNavigate();

    if (!datas?.length) return <NoneData />;

    return (
        <List className="itemWrap" css={style as Interpolation<RenderTheme>}>
            {datas.map(item => (
                <React.Fragment key={item.id}>
                    <ListItem className="item" onClick={() => navigate(`seq=${item.id}`)}>
                        <div className="title">
                            <div className="type">
                                [{find(BOARD_CONTENT_TYPES.TECH, { code: item.docType })?.name}]{' '}
                            </div>
                            {item.title}
                        </div>
                        <div
                            className="ql-snow isView content"
                            css={QuillEditorStyle as Interpolation<RenderTheme>}
                        >
                            <div
                                className="ql-editor"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                        stripHtml(item.content || '').substring(0, 500),
                                    ),
                                }}
                            />
                        </div>
                        <div className="infos">
                            <span>{item.date}</span>
                            <span>{item.commentCount || 0}개의 댓글</span>
                        </div>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>
    );
};

export { ListType };
