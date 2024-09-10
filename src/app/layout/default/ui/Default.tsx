import { Interpolation, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { SuspensePage } from '@/feature/SuspensePage';
import { MainLoaderProvider } from '@/shared/ui/loader';
import { TransitionFade } from '@/shared/ui/transition';
// import { ScrollRestoration } from '@/shared/util/ScrollRestoration';
import { useScrollRestoration } from '@/shared/util/useScrollRestoration';
import { WidgetBg } from '@/widget/bg';
import { WidgetHeaderUser } from '@/widget/headerUser';
import { WidgetLnb } from '@/widget/nav';

import { containerStyle } from './Default.css';

import { Container } from '@mui/material';

const Default = () => {
    const location = useLocation();
    const currentOutlet = useOutlet();

    useScrollRestoration(700);

    return (
        <Container css={containerStyle as Interpolation<Theme>}>
            <MainLoaderProvider>
                {/* <ScrollRestoration /> */}
                <WidgetBg />
                <WidgetHeaderUser />
                <WidgetLnb />
                <AnimatePresence mode="wait">
                    <TransitionFade
                        key={location.pathname}
                        className="transitionWrap"
                        duration={0.4}
                    >
                        <SuspensePage>{currentOutlet}</SuspensePage>
                    </TransitionFade>
                </AnimatePresence>
            </MainLoaderProvider>
        </Container>
    );
};

export { Default };
