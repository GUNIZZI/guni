import { useMemo } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { MainLoaderProvider } from '@/shared/ui/loader';
import { TransitionFade } from '@/shared/ui/transition';
import { WidgetBg } from '@/widget/bg';
import { WidgetHeaderUser } from '@/widget/headerUser';
import { WidgetLnb } from '@/widget/nav';

import { containerStyle } from './Default.css';
import { SuspensePage } from './PageSuspense';

import { Container } from '@mui/material';

const Default = () => {
    const location = useLocation();
    const loc = useMemo(() => {
        return `/${location.pathname.split('/')[1]}` || null;
    }, [location.pathname]);
    const currentOutlet = useOutlet();

    return (
        <Container css={containerStyle as Interpolation<Theme>}>
            <MainLoaderProvider>
                {/* <ScrollRestoration /> */}
                <WidgetBg />
                <WidgetHeaderUser />
                <WidgetLnb />

                <AnimatePresence mode="wait">
                    <TransitionFade key={loc} className="transitionWrap" duration={0.4}>
                        <SuspensePage>{currentOutlet}</SuspensePage>
                    </TransitionFade>
                </AnimatePresence>
            </MainLoaderProvider>
        </Container>
    );
};

export { Default };
