import { LayoutDefault } from '@/shared/ui/layout/Default';
import { LazyLoad } from '@/shared/util/LazyLoad';

// const Home = lazy(() => import('@/pages/home').then(module => ({ default: module.PageHome })));
// const About = lazy(() => import('@/pages/about').then(module => ({ default: module.PageAbout })));
// const Tech = lazy(() => import('@/pages/tech').then(module => ({ default: module.PageTech })));
// const Blog = lazy(() => import('@/pages/blog').then(module => ({ default: module.PageBlog })));
// const Portfolio = lazy(() => import('@/pages/pf').then(module => ({ default: module.PagePf })));

const routes = {
    path: '/',
    element: <LayoutDefault />,
    children: [
        // {
        //     index: true,
        //     element: LazyLoad(() => import('@/pages/home'), 'PageHome', 'LazyPageHome'),
        // },
        // {
        //     path: 'about',
        //     element: LazyLoad(() => import('@/pages/about'), 'PageAbout', 'LazyPageAbout'),
        // },
        // {
        //     path: 'blog',
        //     element: LazyLoad(() => import('@/pages/tech'), 'PageTech', 'LazyPageTech'),
        // },
        // {
        //     path: 'tech',
        //     element: LazyLoad(() => import('@/pages/blog'), 'PageBlog', 'LazyPageBlog'),
        // },
        // {
        //     path: 'pf',
        //     element: LazyLoad(() => import('@/pages/pf'), 'PagePf', 'LazyPagePortfolio'),
        // },
        {
            index: true,
            element: LazyLoad({
                importFunction: import('@/pages/home'),
                componentName: 'PageHome',
            }),
        },
        {
            path: 'about',
            element: LazyLoad({
                importFunction: import('@/pages/about'),
                componentName: 'PageAbout',
            }),
        },
        {
            path: 'tech',
            element: LazyLoad({
                importFunction: import('@/pages/tech'),
                componentName: 'PageTech',
            }),
        },
        {
            path: 'blog',
            element: LazyLoad({
                importFunction: import('@/pages/blog'),
                componentName: 'PageBlog',
            }),
        },
        {
            path: 'pf',
            element: LazyLoad({
                importFunction: import('@/pages/pf'),
                componentName: 'PagePf',
            }),
        },
    ],
};

export { routes };
