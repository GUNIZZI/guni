import { LayoutDefault } from '../ui/layout/Default';

const routes = {
    path: '/',
    element: <LayoutDefault />,
    children: [
        {
            index: true,
            element: <div>home</div>,
        },
        {
            path: 'about',
            element: <div>about</div>,
        },
        {
            path: 'blog',
            element: <div>blog</div>,
        },
        {
            path: 'tech',
            element: <div>tech</div>,
        },
        {
            path: 'pf',
            element: <div>pf</div>,
        },
    ],
};

export { routes };
