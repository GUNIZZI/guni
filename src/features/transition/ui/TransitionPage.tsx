import { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface OwnProps {
    children: ReactNode;
}

const pageAni = {
    init: {
        opacity: 0,
        transition: { type: 'spring', duration: 0 },
    },
    ani: {
        opacity: 1,
        transition: { type: 'spring', duration: 0.6 },
    },
    exit: {
        opacity: 0,
        transition: { type: 'spring', duration: 0.6 },
    },
};

const TransitionPage = ({ children }: OwnProps) => {
    return (
        <motion.div className="page" variants={pageAni} initial="init" animate="ani" exit="exit">
            {children}
        </motion.div>
    );
};

export { TransitionPage };
