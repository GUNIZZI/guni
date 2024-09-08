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

const Fade = ({ children, className, duration: time = 0.5 }: OwnProps) => {
    return (
        <motion.div
            className={className}
            variants={aniVariants}
            initial="init"
            animate="ani"
            exit="exit"
            transition={{ duration: time }}
        >
            {children}
        </motion.div>
    );
};

export { Fade };
