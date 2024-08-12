import { lazy } from 'react';

const Home = lazy(() => import('@/page/home').then(module => ({ default: module.PageHome })));
const About = lazy(() => import('@/page/about').then(module => ({ default: module.PageAbout })));
const Tech = lazy(() => import('@/page/tech/ui/Tech').then(module => ({ default: module.Tech })));
const Blog = lazy(() => import('@/page/blog').then(module => ({ default: module.PageBlog })));
const Portfolio = lazy(() => import('@/page/pf').then(module => ({ default: module.PagePf })));

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
    Tech as LazyTech,
    Blog as LazyBlog,
    Portfolio as LazyPortfolio,
    BoardList,
    BoardView,
    BoardWrite,
};
