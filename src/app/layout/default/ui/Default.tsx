import { useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';
import { ScrollRestoration, useLocation, useOutlet } from 'react-router-dom';

import { TransitionFade } from '@/shared/ui/transition';
import { WidgetHeaderUser } from '@/widget/headerUser';
import { WidgetLnb } from '@/widget/nav';

import { containerStyle } from './Default.css';
import { SuspensePage } from './PageSuspense';

import { Container } from '@mui/material';

const Default = () => {
    const currentOutlet = useOutlet();
    const location = useLocation();
    const loc = useMemo(() => {
        return `/${location.pathname.split('/')[1]}`;
    }, [location.pathname]);

    return (
        <Container sx={containerStyle}>
            <WidgetHeaderUser />
            <WidgetLnb />
            <AnimatePresence mode="wait">
                <TransitionFade key={loc} className="transitionWrap">
                    <SuspensePage>{currentOutlet}</SuspensePage>
                </TransitionFade>
            </AnimatePresence>
            {/* <ScrollRestoration
                getKey={(loc, matches) => {
                    // 커스텀 키 생성 로직
                    return loc.pathname;
                }}
            /> */}
        </Container>
    );
};

export { Default };
