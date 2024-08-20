import { Interpolation, Theme } from '@emotion/react';
import { motion, transform } from 'framer-motion';
import { delay } from 'lodash';

import { EASE } from '@/shared/ui/transition/easeing';

import { homeStyle } from './Home.css';

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.2,
            when: 'beforeChildren',
        },
    },
};

const motionSubTitle = {
    hidden: { opacity: 0, y: '1em' },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: EASE.EASE_OUT_QUART,
        },
    },
};

const motionG = {
    hidden: { opacity: 0, transform: 'scale(1.1)' },
    visible: {
        opacity: 1,
        transform: 'scale(1)',
        transition: {
            duration: 2,
            ease: EASE.EASE_OUT_QUART,
        },
    },
};

const motionUNI = {
    hidden: { opacity: 0, x: '0.3em' },
    visible: () => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: EASE.EASE_OUT_QUART,
        },
    }),
};

const Home = () => {
    return (
        <div className="page" css={homeStyle as Interpolation<Theme>}>
            <span className="bg" />
            <motion.div
                className="wrap"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="subtitle" variants={motionSubTitle}>
                    PUBLISH <span>&amp;</span> FRONT END Dev.
                </motion.div>
                <div className="grpG">
                    <motion.div className="g" variants={motionG}>
                        G
                    </motion.div>
                    <div className="uni">
                        <motion.div variants={motionUNI}>U</motion.div>
                        <motion.div variants={motionUNI}>N</motion.div>
                        <motion.div variants={motionUNI}>I</motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export { Home };
