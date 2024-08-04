import { Interpolation, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import { EASE } from '@/shared/ui/transition/easeing';

import { aboutStyle } from './About.css';

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: '2em' },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: EASE.EASE_OUT_QUART,
        },
    },
    exit: { opacity: 0, y: '-1em' },
};

const About = () => {
    return (
        <div className="page" css={aboutStyle as Interpolation<Theme>}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                <motion.div variants={itemVariants}>진짜 개발자</motion.div>
                <motion.h1 variants={itemVariants} className="gradientText">
                    GUNI
                </motion.h1>
            </motion.div>
        </div>
    );
};

export { About };
