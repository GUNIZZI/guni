import React from 'react';

import { useNavigate } from 'react-router-dom';

import { BlogContentProps } from '@/entitie/blog';

import { List, ListItem, Divider } from '@mui/material';

interface OwnProps {
    datas: BlogContentProps[] | undefined;
}

const TechList = ({ datas }: OwnProps) => {
    const navigate = useNavigate();

    if (!datas?.length) return <div>데이터 없음</div>;

    return (
        <List className="itemWrap">
            {datas.map(item => (
                <React.Fragment key={item.id}>
                    <ListItem className="item" onClick={() => navigate(`./seq=${item.id}`)}>
                        <div className="title">{item.title}</div>
                        <div className="content">{item.content}</div>
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

export { TechList };
