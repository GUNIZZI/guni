import { useEffect, useRef } from 'react';

import { useLocation, useNavigationType } from 'react-router-dom';

// 히스토리 메뉴얼 설정
window.history.scrollRestoration = 'manual';

const useScrollRestoration = (delay: number = 300) => {
    const location = useLocation();
    const scrollPositions = useRef<Map<string, number>>(new Map());
    const navigationType = useNavigationType();

    useEffect(() => {
        const handleScroll = () => {
            scrollPositions.current.set(location.key, window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    useEffect(() => {
        // 딜레이 후 스크롤 위치 복원
        const savedPosition = scrollPositions.current.get(location.key);
        if (navigationType === 'POP') {
            setTimeout(() => {
                window.scrollTo(0, savedPosition || 0);
            }, delay);
        } else {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, delay);
        }
    }, [location, delay]);
};

export { useScrollRestoration };
