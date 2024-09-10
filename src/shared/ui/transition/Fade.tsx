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
            // onAnimationStart={() => {
            //     // 애니메이션 시작 시 스크롤 위치 유지
            //     const savedPosition = window.scrollY;
            //     // window.scrollTo(0, savedPosition);
            //     console.log('animation start', savedPosition);
            // }}
            // onAnimationComplete={() => {
            //     // 애니메이션 종료 후 스크롤 위치 복원
            //     const savedPosition = window.scrollY;
            //     // window.scrollTo(0, savedPosition);
            //     console.log('animation complete', savedPosition);
            // }}
        >
            {children}
        </motion.div>
    );
};

export { Fade };
