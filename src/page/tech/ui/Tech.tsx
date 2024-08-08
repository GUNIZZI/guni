import { useMemo } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { SuspensePage } from '@/app/layout/default/ui/PageSuspense';
import { TransitionSlide } from '@/shared/ui/transition';

import { listStyle } from './List.css';

import { Paper } from '@mui/material';

const Tech = () => {
    const location = useLocation();
    const loc = useMemo(() => {
        return location.pathname.split('/')[2];
    }, [location.pathname]);
    const currentOutlet = useOutlet(0);

    return (
        <Paper className="page withBlog" css={listStyle as Interpolation<Theme>}>
            <div className="wrap">
                <div className="headers">
                    <h2>Tech Blog.</h2>
                    <p>테크블로그는...</p>
                </div>
                <AnimatePresence>
                    <TransitionSlide key={loc} className="transitionWrap">
                        <SuspensePage>{currentOutlet}</SuspensePage>
                    </TransitionSlide>
                </AnimatePresence>
            </div>
        </Paper>
    );
};

export { Tech };
