import { lazy } from 'react';

import { BoardList, BoardView, BoardWrite } from '@/page/board';

const Home = lazy(() => import('@/page/home').then(module => ({ default: module.PageHome })));
const About = lazy(() => import('@/page/about').then(module => ({ default: module.PageAbout })));

const LayoutBoard = lazy(() =>
    import('@/app/layout/board/ui/Board').then(module => ({ default: module.LayoutBoard })),
);

export {
    Home as LazyHome,
    About as LazyAbout,
    LayoutBoard,
    BoardList as PageBoardList,
    BoardView as PageBoardView,
    BoardWrite as PageBoardWrite,
};
