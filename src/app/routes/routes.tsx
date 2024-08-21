import { AppLayoutDefault } from '@/app/layout';
import { Error } from '@/page/error';
import { BOARD_QUERY_KEY } from '@/shared/config/constants';

import {
    LazyHome,
    LazyAbout,
    // LayoutTech,
    // LayoutBlog,
    // LayoutPortfolio,
    LayoutBoard,
    PageBoardList,
    PageBoardView,
    PageBoardWrite,
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
                element: <LayoutBoard />,
                children: [
                    {
                        index: true,
                        element: <PageBoardList boardType={BOARD_QUERY_KEY.LIFE} />,
                    },
                    {
                        path: ':seq',
                        element: <PageBoardView boardType={BOARD_QUERY_KEY.LIFE} />,
                    },
                    {
                        element: <ProtectedGuard />,
                        children: [
                            {
                                path: 'write',
                                element: <PageBoardWrite boardType={BOARD_QUERY_KEY.LIFE} />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'tech',
                element: <LayoutBoard />,
                children: [
                    {
                        index: true,
                        element: <PageBoardList boardType={BOARD_QUERY_KEY.TECH} />,
                    },
                    {
                        path: ':seq',
                        element: <PageBoardView boardType={BOARD_QUERY_KEY.TECH} />,
                    },
                    {
                        element: <ProtectedGuard />,
                        children: [
                            {
                                path: 'write',
                                element: <PageBoardWrite boardType={BOARD_QUERY_KEY.TECH} />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'pf',
                element: <LayoutBoard />,
                children: [
                    {
                        index: true,
                        element: <PageBoardList boardType={BOARD_QUERY_KEY.PF} />,
                    },
                    {
                        path: ':seq',
                        element: <PageBoardView boardType={BOARD_QUERY_KEY.PF} />,
                    },
                    {
                        element: <ProtectedGuard />,
                        children: [
                            {
                                path: 'write',
                                element: <PageBoardWrite boardType={BOARD_QUERY_KEY.PF} />,
                            },
                        ],
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
