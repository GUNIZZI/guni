import { useEffect } from 'react';

import { useNavigationType } from 'react-router-dom';

import { useScrollRestoration } from './useScrollRestoration';

const useScrollRestorationBoardList = () => {
    const navigationType = useNavigationType();
    const { scrollY } = useScrollRestoration();

    useEffect(() => {
        if (navigationType === 'POP') {
            console.log('뒤로가기로 왓어', navigationType, scrollY);
            window.scrollTo({
                top: scrollY,
                behavior: 'smooth',
            });
        }
        //     // 뒤로 가기로 목록 페이지에 돌아왔을 때만 스크롤 위치 복원
        //     // if (location.pathname === '/list' && navigationType === 'POP') {
        //     //     const savedPosition = scrollPositions.current[location.pathname] || 0;
        //     //     window.scrollTo(0, savedPosition);
        //     // } else if (location.pathname === '/list') {
        //     //     // 목록 버튼을 통해 돌아왔을 때는 스크롤을 최상단으로
        //     //     window.scrollTo(0, 0);
        //     // }
    }, [navigationType]);
};

export { useScrollRestorationBoardList };
