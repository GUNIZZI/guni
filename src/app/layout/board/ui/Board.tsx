import { useMemo } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { TransitionSlide } from '@/shared/ui/transition';
// import { WidgetBoardContainer } from '@/widget/board';

import { SuspensePage } from '../../default/ui/PageSuspense';

import { Paper } from '@mui/material';

import { boardStyle } from '@/shared/assets/styles/Board.css';

/**
 * 도메인 서브 경로로 게시판 클래스명 반환
 * @param {string} pathname 도메인 서브 경로이름(tech | blog | pf)
 * @returns {string} 클래스명 (isList | isCard | isPf)
 */
const getClass = (pathname: string) => {
    if (pathname === 'tech') return 'isList';
    if (pathname === 'blog') return 'isCard';
    return 'isPf';
};

const Board = () => {
    const location = useLocation();
    const pathname = useMemo(() => location.pathname.split('/')[1] || 'tech', [location.pathname]);
    const loc = useMemo(() => location.pathname.split('/')[2] || 'list', [location.pathname]);
    const currentOutlet = useOutlet(0);

    return (
        <Paper className={`page ${getClass(pathname)}`} css={[boardStyle as Interpolation<Theme>]}>
            <div className="wrap">
                <AnimatePresence mode="wait">
                    <TransitionSlide key={loc} className="transitionWrap">
                        <SuspensePage>{currentOutlet}</SuspensePage>
                    </TransitionSlide>
                </AnimatePresence>
            </div>
        </Paper>
    );
};

export { Board as LayoutBoard };
