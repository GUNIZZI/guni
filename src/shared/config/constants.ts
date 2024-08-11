import { BoardQueryKey } from '@/entitie/board/model/type';

import { Opt } from '../type/common';

// 파이어베이스(컬렉션) 종류
const BOARD_QUERY_KEY: Record<BoardQueryKey['type'], BoardQueryKey['type']> = {
    TECH: 'TECH',
    LIFE: 'LIFE',
    PF: 'PF',
};

// 게시판 별 컨텐츠 타입
const BOARD_CONTENT_TYPES: Record<BoardQueryKey['type'], Opt[]> = {
    TECH: [
        { code: '0', name: 'React' },
        { code: '1', name: 'Vue' },
        { code: '2', name: 'Html/Css' },
        { code: '3', name: 'JS' },
        { code: '4', name: 'Other' },
    ],
    LIFE: [
        { code: '0', name: '일상' },
        { code: '1', name: '여행' },
        { code: '2', name: '소중한것들' },
    ],
    PF: [
        { code: '0', name: 'Web' },
        { code: '1', name: 'Mobile' },
        { code: '2', name: 'Admin' },
        { code: '3', name: 'UI' },
    ],
};

export { BOARD_QUERY_KEY, BOARD_CONTENT_TYPES };
