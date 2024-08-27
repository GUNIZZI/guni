import React from 'react';

import DOMPurify from 'isomorphic-dompurify';
import { find } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { BoardContentProps } from '@/entitie/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { DraftViewer } from '@/shared/ui/draftEditor/DraftViewer';
import { MdViewer } from '@/shared/ui/mdViewer/MdViewer';

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
                        {/* <MdViewer
                            content={DOMPurify.sanitize(item.content || '')}
                            className="content"
                        /> */}
                        <DraftViewer initialContent={item.content || ''} className="content" />
                        <div className="infos">
                            <span>{item.date}</span>
                            <span>2개의 댓글</span>
                            <span>찜: 26</span>
                        </div>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>
    );
};

export { ListType };
