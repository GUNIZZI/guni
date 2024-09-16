import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { EASE } from './easeing';

interface OwnProps {
    children: ReactNode;
    className?: string;
    duration?: number;
}

const aniVariants = {
    init: {
        opacity: 0,
        scale: 0.95,
    },
    ani: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 1.05,
    },
};

const FadeScale = ({ children, className, duration: time = 0.8 }: OwnProps) => {
    return (
        <motion.div
            className={className}
            variants={aniVariants}
            initial="init"
            animate="ani"
            exit="exit"
            transition={{ duration: time, ease: EASE.EASE_IN_OUT_EXPO }}
        >
            {children}
        </motion.div>
    );
};

export { FadeScale };
