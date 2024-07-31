import React, { Suspense } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { TransitionPage } from '@/features/transition';
import { LoaderCircle } from '@/shared/ui/loader';
import { WidgetLnb } from '@/widgets/lnb';

import { containerStyle } from './Default.css';

import { Container } from '@mui/material';

const FadingComponent = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

const CustomSuspense = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense
            fallback={
                <FadingComponent>
                    <LoaderCircle />
                </FadingComponent>
            }
        >
            <FadingComponent>{children}</FadingComponent>
        </Suspense>
    );
};

const Default = () => {
    const currentOutlet = useOutlet();
    const location = useLocation();

    return (
        <Container sx={containerStyle}>
            <WidgetLnb />
            <AnimatePresence mode="wait">
                <TransitionPage key={location.pathname}>
                    {/* <Suspense fallback={<div>Loading...</div>}>{currentOutlet}</Suspense> */}
                    <CustomSuspense>{currentOutlet}</CustomSuspense>
                </TransitionPage>
            </AnimatePresence>
        </Container>
    );
};

export { Default };
