import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { EASE } from './easeing';

interface OwnProps {
    children: ReactNode;
    className?: string;
    duration?: number;
}

const Slide = ({ children, className, duration: time = 0.3 }: OwnProps) => {
    const aniVariants = {
        init: {
            marginLeft: 20,
            opacity: 0,
        },
        ani: {
            marginLeft: 0,
            opacity: 1,
            transition: {
                duration: time,
                delay: 0.1,
                ease: EASE.EASE_OUT_CUBIC,
            },
        },
        exit: {
            marginLeft: -20,
            opacity: 0,
            transition: {
                duration: time,
                ease: EASE.EASE_IN_CUBIC,
            },
        },
    };

    return (
        <motion.div
            className={className && className}
            variants={aniVariants}
            initial="init"
            animate="ani"
            exit="exit"
            style={{
                position: 'absolute',
                width: '100%',
            }}
        >
            {children}
        </motion.div>
    );
};

export { Slide };
