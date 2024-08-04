import { Interpolation, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import { EASE } from '@/shared/ui/transition/easeing';

import { homeStyle } from './Home.css';

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

const Home = () => {
    return (
        <div className="page" css={homeStyle as Interpolation<Theme>}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                <motion.div variants={itemVariants}>재미가 있는걸 만들고 싶고,</motion.div>
                <motion.div variants={itemVariants}>재미가 있는걸 만들고 싶고,</motion.div>
                <motion.div variants={itemVariants}>재미가 있어야 즐거울 거고,</motion.div>
                <motion.div variants={itemVariants}>즐거워야 잘 만들수 있지 않을까?</motion.div>
                <motion.div variants={itemVariants}>그게 다 좋은 프론트 개발자</motion.div>
                <motion.h1 variants={itemVariants} className="gradientText">
                    GUNI
                </motion.h1>
            </motion.div>
        </div>
    );
};

export { Home };
