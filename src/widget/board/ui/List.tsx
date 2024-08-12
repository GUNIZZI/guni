import { useState } from 'react';

import { useFetchQuery } from '@/entitie/board/hook/useBlog';
import { BoardContentProps, BoardQueryKey } from '@/entitie/board/model/type';
import { FeatureBoardListType, FeatureBoardCardType, FeatureBoardAddButton } from '@/feature/board';
import { BOARD_CONTENT_TYPES, BOARD_QUERY_KEY } from '@/shared/config/constants';
import { LoaderCircle } from '@/shared/ui/loader';

import { Backdrop, Tab, Tabs } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

interface BoardListType {
    boardType: BoardQueryKey['type'];
    posts: BoardContentProps[] | undefined;
}

const CurrentBoard = ({ boardType, posts }: BoardListType) => {
    switch (boardType) {
        case BOARD_QUERY_KEY.TECH:
            return <FeatureBoardListType datas={posts} />;
        case BOARD_QUERY_KEY.LIFE:
            return <FeatureBoardCardType datas={posts} />;
        case BOARD_QUERY_KEY.PF:
            return <FeatureBoardListType datas={posts} />;
        default:
            return null;
    }
};

const List = ({ boardType }: OwnProps) => {
    const { data: posts, isLoading } = useFetchQuery(boardType);
    const [tab, setTab] = useState(BOARD_CONTENT_TYPES[boardType][0].code);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log('탭 바꿔요', event, newValue);
    };

    console.log();

    return (
        <>
            {/* 추가 버튼 */}
            <FeatureBoardAddButton />

            <Tabs
                value={tab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                {BOARD_CONTENT_TYPES[boardType].map(item => (
                    <Tab key={item.code} value={item.code} label={item.name} />
                ))}
            </Tabs>

            {/* 게시판 */}
            <CurrentBoard boardType={boardType} posts={posts} />

            {/* 로더 */}
            <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
                <LoaderCircle size="3em" color="#000" />
            </Backdrop>
        </>
    );
};

export { List };
