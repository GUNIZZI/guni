import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { TransitionFade } from '@/shared/ui/transition';
import { WidgetLnb } from '@/widgets/lnb';

import { containerStyle } from './Default.css';
import { SuspensePage } from './PageSuspense';

import { Container } from '@mui/material';

const Default = () => {
    const currentOutlet = useOutlet();
    const location = useLocation();

    return (
        <Container sx={containerStyle}>
            <WidgetLnb />
            <AnimatePresence mode="wait">
                <TransitionFade key={location.pathname}>
                    <SuspensePage>{currentOutlet}</SuspensePage>
                </TransitionFade>
            </AnimatePresence>
        </Container>
    );
};

export { Default };
