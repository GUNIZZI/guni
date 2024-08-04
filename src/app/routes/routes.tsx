import { AppLayoutDefault } from '@/app/layout';

import { LazyHome, LazyAbout, LazyTech, LazyBlog, LazyPortfolio } from './lazyComponents';

const AppRoutes = {
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
        },
        {
            path: 'tech',
            element: <LazyTech />,
        },
        {
            path: 'pf',
            element: <LazyPortfolio />,
        },
    ],
};

export { AppRoutes };
