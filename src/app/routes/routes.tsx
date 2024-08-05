import { AppLayoutDefault } from '@/app/layout';

import {
    LazyHome,
    LazyAbout,
    LazyTech,
    LazyTechList,
    LazyTechView,
    LazyBlog,
    LazyPortfolio,
} from './lazyComponents';

const AppRoutes = [
    {
        path: '/',
        element: <AppLayoutDefault />,
        children: [
            {
                index: true,
                element: <LazyHome />,
            },
            {
                path: 'about',
                element: <LazyAbout />,
            },
            {
                path: 'blog',
                element: <LazyBlog />,
                children: [
                    {
                        index: true,
                        element: <div>목록</div>,
                    },
                    {
                        path: ':seq',
                        element: <div>상세</div>,
                    },
                ],
            },
            {
                path: 'tech',
                element: <LazyTech />,
                children: [
                    {
                        index: true,
                        element: <LazyTechList />,
                    },
                    {
                        path: ':seq',
                        element: <LazyTechView />,
                    },
                ],
            },
            {
                path: 'pf',
                element: <LazyPortfolio />,
                children: [
                    {
                        index: true,
                        element: <div>목록</div>,
                    },
                    {
                        path: ':seq',
                        element: <div>상세</div>,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <div>404</div>,
    },
];

export { AppRoutes };
