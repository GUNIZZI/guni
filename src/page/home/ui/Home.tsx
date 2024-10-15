import { Interpolation, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

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
    hidden: { opacity: 0, transform: 'scale(1.2)' },
    visible: {
        opacity: 1,
        transform: 'scale(1)',
        transition: {
            duration: 3,
            ease: EASE.EASE_OUT_QUART,
        },
    },
};

const motionUNI = {
    hidden: { opacity: 0, x: '0.4em' },
    visible: () => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
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
                    Publisher <span>&amp;</span> Front End Developer.
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

                {/* <div className="postit">메시지1</div>
                <div className="postit">메시지2 </div> */}
            </motion.div>
        </div>
    );
};

export { Home };
