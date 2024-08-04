import { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface OwnProps {
    children: ReactNode;
    className?: string;
    duration?: number;
}

const aniVariants = {
    init: {
        opacity: 0,
    },
    ani: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

const Fade = ({ children, className, duration: time = 0.8 }: OwnProps) => (
    <motion.div
        className={className && className}
        variants={aniVariants}
        initial="init"
        animate="ani"
        exit="exit"
        transition={{ type: 'spring', duration: time }}
    >
        {children}
    </motion.div>
);

export { Fade };
