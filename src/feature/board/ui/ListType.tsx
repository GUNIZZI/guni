import React from 'react';

import { Interpolation, Theme } from '@emotion/react';
import DOMPurify from 'isomorphic-dompurify';
import { find } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { BoardContentProps } from '@/entitie/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { QuillEditorStyle } from '@/shared/ui/quillEditor';
import { stripHtml } from '@/shared/util';

import { List, ListItem, Divider } from '@mui/material';

interface OwnProps {
    datas: BoardContentProps[] | undefined;
}

const ListType = ({ datas }: OwnProps) => {
    const navigate = useNavigate();

    if (!datas?.length) return <div className="noData">게시글이 없습니다.</div>;

    return (
        <List className="itemWrap">
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
                            css={QuillEditorStyle as Interpolation<Theme>}
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
