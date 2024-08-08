import { AppLayoutDefault } from '@/app/layout';
import { Error } from '@/page/error';

import {
    LazyHome,
    LazyAbout,
    LazyTech,
    LazyTechList,
    LazyTechView,
    LazyTechWrite,
    LazyBlog,
    LazyPortfolio,
} from './lazyComponents';
import ProtectedGuard from '../guard/ProtectedGuard';

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
                        element: <ProtectedGuard />,
                        children: [
                            {
                                path: 'write',
                                element: <LazyTechWrite />,
                            },
                        ],
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
    // {
    //     path: '*',
    //     element: <Navigate to="/error/404" />,
    // },
    {
        path: '/error/:errorStatus',
        element: <Error />,
    },
];

export { AppRoutes };
