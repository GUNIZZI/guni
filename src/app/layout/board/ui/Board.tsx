import { useEffect, useMemo, useState } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { TransitionSlide } from '@/shared/ui/transition';
// import { WidgetBoardContainer } from '@/widget/board';

import { SuspensePage } from '../../default/ui/PageSuspense';

import { Paper } from '@mui/material';

import { boardStyle } from '@/widget/board/ui/Board.css';

/**
 * 도메인 서브 경로로 게시판 클래스명 반환
 * @param {string} pathname 도메인 서브 경로이름(tech | blog | pf)
 * @returns {string} 클래스명 (isList | isCard | isPf)
 */
const getClass = (pathname: string) => {
    if (pathname === 'tech') return 'isList';
    if (pathname === 'blog') return 'isCard';
    if (pathname === 'pf') return 'isPf';
    return '';
};

const Board = () => {
    const location = useLocation();
    const pathname = useMemo(() => location.pathname.split('/')[1] || 'tech', [location.pathname]);
    const loc = useMemo(() => location.pathname.split('/')[2] || 'list', [location.pathname]);
    const currentOutlet = useOutlet(0);
    const [typeClassName, setTypeClassName] = useState('');
    useEffect(() => {
        setTypeClassName(getClass(pathname));
    }, []);

    return (
        <Paper className={`page ${typeClassName}`} css={[boardStyle as Interpolation<Theme>]}>
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
