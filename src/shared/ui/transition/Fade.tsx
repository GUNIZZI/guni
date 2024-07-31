import { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface OwnProps {
    children: ReactNode;
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

const Fade = ({ children, duration: time = 0.4 }: OwnProps) => (
    <motion.div
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
