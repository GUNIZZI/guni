import { motion, MotionProps } from 'framer-motion';

interface BoxMotionProps extends MotionProps {
    whileHover: { scale: number };
    whileTap: { scale: number };
    drag: 'x' | 'y' | boolean;
    dragConstraints: { left: number; right: number };
}
const uiAnimation: BoxMotionProps = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 1.1 },
    drag: 'x',
    dragConstraints: { left: -100, right: 100 },
};

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <motion.div
                {...uiAnimation}
                style={{
                    width: '100px',
                    height: '100px',
                    background: 'red',
                }}
            />
        </div>
    );
};

export { Home };
