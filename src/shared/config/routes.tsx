import { Suspense } from 'react';

import { LayoutDefault } from '@/shared/ui/layout/Default';

import { LazyHome, LazyAbout, LazyTech, LazyBlog, LazyPortfolio } from './lazyComponents';
import { LazyLoad } from '../util/LazyLoad';

const routes = {
    path: '/',
    element: <LayoutDefault />,
    children: [
        {
            index: true,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyHome />
                </Suspense>
            ),
        },
        {
            path: 'about',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyAbout />
                </Suspense>
            ),
        },
        {
            path: 'blog',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyBlog />
                </Suspense>
            ),
        },
        {
            path: 'tech',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyTech />
                </Suspense>
            ),
        },
        {
            path: 'pf',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyPortfolio />
                </Suspense>
            ),
        },
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
        // {
        //     index: true,
        //     element: LazyLoad({
        //         importFunction: import('@/pages/home'),
        //         componentName: 'PageHome',
        //     }),
        // },
        // {
        //     path: 'about',
        //     element: LazyLoad({
        //         importFunction: import('@/pages/about'),
        //         componentName: 'PageAbout',
        //     }),
        // },
        // {
        //     path: 'tech',
        //     element: LazyLoad({
        //         importFunction: import('@/pages/tech'),
        //         componentName: 'PageTech',
        //     }),
        // },
        // {
        //     path: 'blog',
        //     element: LazyLoad({
        //         importFunction: import('@/pages/blog'),
        //         componentName: 'PageBlog',
        //     }),
        // },
        // {
        //     path: 'pf',
        //     element: LazyLoad({
        //         importFunction: import('@/pages/pf'),
        //         componentName: 'PagePf',
        //     }),
        // },
    ],
};

export { routes };
