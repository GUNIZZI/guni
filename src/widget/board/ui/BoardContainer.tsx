import { useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { SuspensePage } from '@/app/layout/default/ui/PageSuspense';
import { TransitionSlide } from '@/shared/ui/transition';

const BoardContainer = () => {
    const location = useLocation();
    const loc = useMemo(() => location.pathname.split('/')[2] || 'list', [location.pathname]);
    const currentOutlet = useOutlet(0);

    return (
        <AnimatePresence mode="wait">
            <TransitionSlide key={loc} className="transitionWrap">
                <SuspensePage>{currentOutlet}</SuspensePage>
            </TransitionSlide>
        </AnimatePresence>
    );
};

export { BoardContainer };
