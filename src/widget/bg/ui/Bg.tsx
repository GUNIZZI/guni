import { useEffect, useMemo } from 'react';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { NAV_PATH } from '@/shared/config/navPath';
import { hexToRgb } from '@/shared/util';

import { style } from './Bg.css';

const Bg = () => {
    const location = useLocation();
    const curBgColor = useMemo<string>(
        () =>
            NAV_PATH.find(item => item.path === `/${location.pathname.split('/')[1]}`)?.color ||
            '#000000',
        [location],
    );

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const r = useMotionValue(0);
    const g = useMotionValue(0);
    const b = useMotionValue(0);

    const springConfig = { stiffness: 40, damping: 20, mass: 2 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const springR = useSpring(r, springConfig);
    const springG = useSpring(g, springConfig);
    const springB = useSpring(b, springConfig);

    useEffect(() => {
        const newX = Math.random() * 100;
        const newY = Math.random() * 100;
        x.set(newX);
        y.set(newY);

        const { r: newR, g: newG, b: newB } = hexToRgb(curBgColor);
        r.set(newR);
        g.set(newG);
        b.set(newB);
    }, [curBgColor]);

    const background = useTransform(
        [springX, springY, springR, springG, springB],
        ([latestX, latestY, latestR, latestG, latestB]) => {
            const startColor = `rgb(${latestR} ${latestG} ${latestB} / 20%)`;
            const middleColor = `rgba(${Math.max((latestR as number) - 205, 0)}, ${Math.max((latestG as number) - 205, 0)}, ${Math.max((latestB as number) - 155, 0)}, 0.2)`;
            const endColor = 'rgba(10, 10, 10, 1)';

            return `radial-gradient(circle at ${latestX}% ${latestY}%, ${startColor} 0%, ${middleColor} 50%, ${endColor} 100%)`;
        },
    );

    return (
        <motion.div css={style} style={{ background }}>
            Background
        </motion.div>
    );
};

export { Bg };
