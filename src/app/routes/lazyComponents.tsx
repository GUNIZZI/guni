import { lazy } from 'react';

const Home = lazy(() => import('@/page/home').then(module => ({ default: module.PageHome })));
const About = lazy(() => import('@/page/about').then(module => ({ default: module.PageAbout })));

const LayoutTech = lazy(() =>
    import('@/app/layout/ui/Tech').then(module => ({ default: module.Tech })),
);
const LayoutBlog = lazy(() =>
    import('@/app/layout/ui/Blog').then(module => ({ default: module.Blog })),
);
const LayoutPortfolio = lazy(() =>
    import('@/app/layout/ui/Pf').then(module => ({ default: module.Pf })),
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
    LayoutPortfolio,
    LayoutTech,
    LayoutBlog,
    BoardList as PageBoardList,
    BoardView as PageBoardView,
    BoardWrite as PageBoardWrite,
};
