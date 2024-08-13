import { useMemo, useState } from 'react';

import { useFetchQuery } from '@/entitie/board/hook/useBlog';
import { BoardContentProps, BoardQueryKey } from '@/entitie/board/model/type';
import { getFilterData } from '@/entitie/board/util/filterData';
import {
    FeatureBoardListType,
    FeatureBoardCardType,
    FeatureBoardAddButton,
    FeatureBoardFilterTab,
} from '@/feature/board';
import { BOARD_CONTENT_TYPES, BOARD_QUERY_KEY } from '@/shared/config/constants';
import { LoaderCircle } from '@/shared/ui/loader';

import { Backdrop } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

interface BoardListType {
    boardType: BoardQueryKey['type'];
    posts: BoardContentProps[] | undefined;
}

/**
 * borderType에 따른 현재 게시판 컴포넌트 반환
 * @boardType 게시판 목록 타입 "TECH" | "LIFE" | "PF"
 * @posts 게시판 목록 데이터
 * @returns 조건에 맞는 게시판 목록
 */
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
    const filterData = useMemo(() => getFilterData({ posts, tab }), [posts, tab]);

    return (
        <>
            {/* 추가 버튼 */}
            <FeatureBoardAddButton />

            {/* 필터링 */}
            <FeatureBoardFilterTab
                value={tab}
                opts={BOARD_CONTENT_TYPES[boardType]}
                onChange={setTab}
            />

            {/* 게시판 */}
            <CurrentBoard boardType={boardType} posts={filterData} />

            {/* 로더 */}
            <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
                <LoaderCircle size="3em" color="#000" />
            </Backdrop>
        </>
    );
};

export { List };
