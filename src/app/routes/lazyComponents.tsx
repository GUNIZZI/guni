import { lazy } from 'react';

const Home = lazy(() => import('@/page/home').then(module => ({ default: module.PageHome })));
const About = lazy(() => import('@/page/about').then(module => ({ default: module.PageAbout })));

const LayoutBoard = lazy(() =>
    import('@/app/layout/board/ui/Board').then(module => ({ default: module.LayoutBoard })),
);
const BoardList = lazy(() =>
    import('@/page/board/ui/List').then(module => ({ default: module.List })),
);
const BoardView = lazy(() =>
    import('@/page/board/ui/View').then(module => ({ default: module.View })),
);
const BoardWrite = lazy(() =>
    import('@/page/board/ui/Write').then(module => ({ default: module.Write })),
);

export {
    Home as LazyHome,
    About as LazyAbout,
    LayoutBoard,
    BoardList as PageBoardList,
    BoardView as PageBoardView,
    BoardWrite as PageBoardWrite,
};
