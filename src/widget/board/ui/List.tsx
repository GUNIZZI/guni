import { useContext, useEffect, useMemo, useState } from 'react';

import { getFilterData, useBoardFetchQuery } from '@/entitie/board';
import { BoardContentProps, BoardQueryKey } from '@/entitie/board/model/type';
import {
    FeatureBoardListType,
    FeatureBoardCardType,
    FeatureBoardPfType,
    FeatureBoardAddButton,
    FeatureBoardFilterTab,
} from '@/feature/board';
import { BOARD_CONTENT_TYPES, BOARD_QUERY_KEY } from '@/shared/config/constants';
import { NAV_PATH } from '@/shared/config/navPath';
import { MainLoaderContext } from '@/shared/ui/loader';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

interface BoardListType {
    boardType: BoardQueryKey['type'];
    posts: BoardContentProps[] | undefined;
}

/**
 * borderType에 따른 현재 게시판 Header 컴포넌트 반환
 * @param param0
 * @returns
 */
const CurrentHeader = ({ boardType }: Omit<BoardListType, 'posts'>) => {
    switch (boardType) {
        case BOARD_QUERY_KEY.TECH:
            return (
                <>
                    <h2>
                        <strong style={{ color: NAV_PATH[2].color }}>T</strong>ech Blog.
                    </h2>
                    <p>
                        오늘도 새롭게 알게된 지식, 쓸만한 라이브러리, 언젠가 한번은 써먹어 볼만한
                        것들...
                    </p>
                </>
            );
        case BOARD_QUERY_KEY.LIFE:
            return (
                <>
                    <h2>
                        <strong style={{ color: NAV_PATH[3].color }}>L</strong>ife.
                    </h2>
                    <p>내꺼 하나하나 남기다 보면, 볼때마다 웃음 지을수 있을거야!</p>
                </>
            );
        case BOARD_QUERY_KEY.PF:
            return (
                <>
                    <h2>
                        <strong style={{ color: NAV_PATH[4].color }}>P</strong>ortfolio.
                    </h2>
                    <p>지금까지 만든 것들 하나씩 정리해</p>
                </>
            );
        default:
            return null;
    }
};

/**
 * borderType에 따른 현재 게시판 컴포넌트 반환
 * @param {BoardQueryKey['type']} boardType 게시판 목록 타입 "TECH" | "LIFE" | "PF"
 * @param {BoardContentProps[] | undefined} posts 게시판 목록 데이터
 * @returns {Component} 조건에 맞는 게시판 목록
 */
const CurrentBoard = ({ boardType, posts }: BoardListType) => {
    switch (boardType) {
        case BOARD_QUERY_KEY.TECH:
            return <FeatureBoardListType datas={posts} />;
        case BOARD_QUERY_KEY.LIFE:
            return <FeatureBoardCardType datas={posts} />;
        case BOARD_QUERY_KEY.PF:
            return <FeatureBoardPfType datas={posts} />;
        default:
            return null;
    }
};

const List = ({ boardType }: OwnProps) => {
    const { loaderOn, loaderOff } = useContext(MainLoaderContext);
    const { data: posts, isLoading } = useBoardFetchQuery(boardType);
    const [tab, setTab] = useState(BOARD_CONTENT_TYPES[boardType][0].code);
    const filterData = useMemo(() => getFilterData({ posts, tab }), [posts, tab]);

    useEffect(() => {
        if (boardType) {
            if (isLoading) loaderOn(`${boardType}-List`);
            else loaderOff(`${boardType}-List`);
        }
    }, [isLoading]);

    // 모듈 제거
    useEffect(() => {
        return () => {
            loaderOff(`${boardType}-List`);
        };
    }, []);

    return (
        <>
            {/* 추가 버튼 */}
            <FeatureBoardAddButton />

            {/* 게시판 목록 헤더 */}
            <div className="header">
                <CurrentHeader boardType={boardType} />
            </div>

            {/* 필터링 */}
            <FeatureBoardFilterTab
                value={tab}
                opts={BOARD_CONTENT_TYPES[boardType]}
                onChange={setTab}
            />

            {/* 게시판 */}
            <CurrentBoard boardType={boardType} posts={filterData} />
        </>
    );
};

export { List };
