import { Interpolation, Theme } from '@emotion/react';
// import { motion } from 'framer-motion';

// import { EASE } from '@/shared/ui/transition/easeing';

import { aboutStyle } from './About.css';

// const containerVariants = {
//     visible: {
//         transition: {
//             staggerChildren: 0.2,
//         },
//     },
// };

// const itemVariants = {
//     hidden: { opacity: 0, y: '2em' },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//             ease: EASE.EASE_OUT_QUART,
//         },
//     },
//     exit: { opacity: 0, y: '-1em' },
// };

const About = () => {
    return (
        <div className="page" css={aboutStyle as Interpolation<Theme>}>
            {/* <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                <motion.div variants={itemVariants}>텍스트</motion.div>
                <motion.h1 variants={itemVariants} className="gradientText">
                    그라디언트 텍스트
                </motion.h1>
            </motion.div> */}
            <div className="leftWrap">
                <div className="rotateTxt">
                    <div>Analyze</div>
                </div>
            </div>
            <div className="rightWrap">
                <div className="skills">
                    <div className="item">
                        <span>asdasd</span>
                    </div>
                    <div className="item">
                        <span>asdasd</span>
                    </div>
                    <div className="item">
                        <span>asdasd</span>
                    </div>
                    <div className="item">
                        <span>asdasd</span>
                    </div>
                </div>
                <div>asdasd</div>
            </div>
        </div>
    );
};

export { About };
