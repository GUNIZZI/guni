import { lazy } from 'react';

const Home = lazy(() => import('@/page/home').then(module => ({ default: module.PageHome })));
const About = lazy(() => import('@/page/about').then(module => ({ default: module.PageAbout })));
const Tech = lazy(() => import('@/page/tech').then(module => ({ default: module.PageTech })));
const Blog = lazy(() => import('@/page/blog').then(module => ({ default: module.PageBlog })));
const Portfolio = lazy(() => import('@/page/pf').then(module => ({ default: module.PagePf })));

export {
    Home as LazyHome,
    About as LazyAbout,
    Tech as LazyTech,
    Blog as LazyBlog,
    Portfolio as LazyPortfolio,
};
