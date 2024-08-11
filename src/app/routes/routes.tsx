import { AppLayoutDefault } from '@/app/layout';
import { Error } from '@/page/error';
import { BOARD_QUERY_KEY } from '@/shared/config/constants';

import {
    LazyHome,
    LazyAbout,
    LazyTech,
    LazyBlog,
    LazyPortfolio,
    BoardList,
    BoardView,
    BoardWrite,
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
                        element: <BoardList boardType={BOARD_QUERY_KEY.LIFE} />,
                    },
                    {
                        path: ':seq',
                        element: <BoardView boardType={BOARD_QUERY_KEY.LIFE} />,
                    },
                    {
                        element: <ProtectedGuard />,
                        children: [
                            {
                                path: 'write',
                                element: <BoardWrite boardType={BOARD_QUERY_KEY.LIFE} />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'tech',
                element: <LazyTech />,
                children: [
                    {
                        index: true,
                        element: <BoardList boardType={BOARD_QUERY_KEY.TECH} />,
                    },
                    {
                        path: ':seq',
                        element: <BoardView boardType={BOARD_QUERY_KEY.TECH} />,
                    },
                    {
                        element: <ProtectedGuard />,
                        children: [
                            {
                                path: 'write',
                                element: <BoardWrite boardType={BOARD_QUERY_KEY.TECH} />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'pf',
                element: <LazyPortfolio />,
                children: [
                    {
                        index: true,
                        element: <BoardList boardType={BOARD_QUERY_KEY.PF} />,
                    },
                    {
                        path: ':seq',
                        element: <BoardView boardType={BOARD_QUERY_KEY.PF} />,
                    },
                    {
                        element: <ProtectedGuard />,
                        children: [
                            {
                                path: 'write',
                                element: <BoardWrite boardType={BOARD_QUERY_KEY.PF} />,
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
