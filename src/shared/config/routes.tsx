import { LayoutDefault } from '../ui/layout/Default';

const routes = {
    path: '/',
    element: <LayoutDefault />,
    children: [
        {
            index: true,
            element: <div style={{ minHeight: '100vh', background: 'red' }}>home</div>,
        },
        {
            path: 'about',
            element: <div style={{ minHeight: '100vh', background: 'yellow' }}>about</div>,
        },
        {
            path: 'blog',
            element: <div style={{ minHeight: '100vh', background: 'green' }}>blog</div>,
        },
        {
            path: 'tech',
            element: <div style={{ minHeight: '100vh', background: 'blue' }}>tech</div>,
        },
        {
            path: 'pf',
            element: <div style={{ minHeight: '100vh', background: 'orange' }}>pf</div>,
        },
    ],
};

export { routes };
