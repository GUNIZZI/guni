import { lazy } from 'react';

const Home = lazy(() => import('@/page/home').then(module => ({ default: module.PageHome })));
const About = lazy(() => import('@/page/about').then(module => ({ default: module.PageAbout })));
const Tech = lazy(() => import('@/page/tech/ui/Tech').then(module => ({ default: module.Tech })));
const TechList = lazy(() =>
    import('@/page/tech/ui/List').then(module => ({ default: module.List })),
);
const TechView = lazy(() =>
    import('@/page/tech/ui/View').then(module => ({ default: module.View })),
);
const Blog = lazy(() => import('@/page/blog').then(module => ({ default: module.PageBlog })));
const Portfolio = lazy(() => import('@/page/pf').then(module => ({ default: module.PagePf })));

export {
    Home as LazyHome,
    About as LazyAbout,
    Tech as LazyTech,
    TechList as LazyTechList,
    TechView as LazyTechView,
    Blog as LazyBlog,
    Portfolio as LazyPortfolio,
};
