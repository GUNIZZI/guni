import { lazy } from 'react';

const delay = (ms: number = 1000) =>
    new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });

const Home = lazy(() =>
    delay().then(() => import('@/pages/home').then(module => ({ default: module.PageHome }))),
);
const About = lazy(() =>
    delay().then(() => import('@/pages/about').then(module => ({ default: module.PageAbout }))),
);
const Tech = lazy(() =>
    delay().then(() => import('@/pages/tech').then(module => ({ default: module.PageTech }))),
);
const Blog = lazy(() =>
    delay().then(() => import('@/pages/blog').then(module => ({ default: module.PageBlog }))),
);
const Portfolio = lazy(() =>
    delay().then(() => import('@/pages/pf').then(module => ({ default: module.PagePf }))),
);

export {
    Home as LazyHome,
    About as LazyAbout,
    Tech as LazyTech,
    Blog as LazyBlog,
    Portfolio as LazyPortfolio,
};
