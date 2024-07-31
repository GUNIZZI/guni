import { LayoutDefault } from '@/app/layout';

import { LazyHome, LazyAbout, LazyTech, LazyBlog, LazyPortfolio } from './lazyComponents';

const routes = {
    path: '/',
    element: <LayoutDefault />,
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

export { routes };
