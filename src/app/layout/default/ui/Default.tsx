import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { TransitionFade } from '@/shared/ui/transition';
import { WidgetHeaderUser } from '@/widgets/headerUser';
import { WidgetLnb } from '@/widgets/nav';

import { containerStyle } from './Default.css';
import { SuspensePage } from './PageSuspense';

import { Container } from '@mui/material';

const Default = () => {
    const currentOutlet = useOutlet();
    const location = useLocation();

    return (
        <Container sx={containerStyle}>
            <WidgetHeaderUser />
            <WidgetLnb />
            <AnimatePresence mode="wait">
                <TransitionFade key={location.pathname} className="transitionWrap">
                    <SuspensePage>{currentOutlet}</SuspensePage>
                </TransitionFade>
            </AnimatePresence>
        </Container>
    );
};

export { Default };
