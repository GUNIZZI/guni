import { lazy } from 'react';

const delay = (ms: number) =>
    new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });

const Home = lazy(() =>
    import('@/pages/home')
        .then(module => delay(2000).then(() => module))
        .then(module => ({ default: module.PageHome })),
);
const About = lazy(() =>
    import('@/pages/about')
        .then(module => delay(2000).then(() => module))
        .then(module => ({ default: module.PageAbout })),
);
const Tech = lazy(() =>
    import('@/pages/tech')
        .then(module => delay(2000).then(() => module))
        .then(module => ({ default: module.PageTech })),
);
const Blog = lazy(() =>
    import('@/pages/blog')
        .then(module => delay(2000).then(() => module))
        .then(module => ({ default: module.PageBlog })),
);
const Portfolio = lazy(() =>
    import('@/pages/pf')
        .then(module => delay(2000).then(() => module))
        .then(module => ({ default: module.PagePf })),
);

export {
    Home as LazyHome,
    About as LazyAbout,
    Tech as LazyTech,
    Blog as LazyBlog,
    Portfolio as LazyPortfolio,
};
