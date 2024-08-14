import { useEffect, useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import { useScrollRestorationStore } from '../store/scrollRestoration.store';

const useScrollRestoration = () => {
    const location = useLocation();
    const { scrolls, updateScroll } = useScrollRestorationStore();
    const scrollY = useMemo(() => {
        return scrolls ? scrolls[location.pathname] : 0;
    }, [scrolls]);

    useEffect(() => {
        const saveScrollPosition = () => {
            updateScroll(location.pathname, window.scrollY);
        };
        window.addEventListener('scroll', saveScrollPosition);
        return () => window.removeEventListener('scroll', saveScrollPosition);
    }, [location]);

    return { scrollY };
};

export { useScrollRestoration };
