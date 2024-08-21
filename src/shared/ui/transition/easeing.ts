// easing.ts 또는 constants.ts 파일에 정의

import { cubicBezier } from 'framer-motion';

export const EASE = {
    // 기본 이징
    IN: 'easeIn',
    OUT: 'easeOut',
    IN_OUT: 'easeInOut',

    // 선형
    LINEAR: 'linear',

    // Cubic Bezier 곡선
    EASE_IN_SINE: cubicBezier(0.47, 0, 0.745, 0.715),
    EASE_OUT_SINE: cubicBezier(0.39, 0.575, 0.565, 1),
    EASE_IN_OUT_SINE: cubicBezier(0.445, 0.05, 0.55, 0.95),

    EASE_IN_QUAD: cubicBezier(0.55, 0.085, 0.68, 0.53),
    EASE_OUT_QUAD: cubicBezier(0.25, 0.46, 0.45, 0.94),
    EASE_IN_OUT_QUAD: cubicBezier(0.455, 0.03, 0.515, 0.955),

    EASE_IN_CUBIC: cubicBezier(0.55, 0.055, 0.675, 0.19),
    EASE_OUT_CUBIC: cubicBezier(0.215, 0.61, 0.355, 1),
    EASE_IN_OUT_CUBIC: cubicBezier(0.645, 0.045, 0.355, 1),

    EASE_IN_QUART: cubicBezier(0.895, 0.03, 0.685, 0.22),
    EASE_OUT_QUART: cubicBezier(0.165, 0.84, 0.44, 1),
    EASE_IN_OUT_QUART: cubicBezier(0.77, 0, 0.175, 1),

    EASE_IN_QUINT: cubicBezier(0.755, 0.05, 0.855, 0.06),
    EASE_OUT_QUINT: cubicBezier(0.23, 1, 0.32, 1),
    EASE_IN_OUT_QUINT: cubicBezier(0.86, 0, 0.07, 1),

    EASE_IN_EXPO: cubicBezier(0.95, 0.05, 0.795, 0.035),
    EASE_OUT_EXPO: cubicBezier(0.19, 1, 0.22, 1),
    EASE_IN_OUT_EXPO: cubicBezier(1, 0, 0, 1),

    EASE_IN_CIRC: cubicBezier(0.6, 0.04, 0.98, 0.335),
    EASE_OUT_CIRC: cubicBezier(0.075, 0.82, 0.165, 1),
    EASE_IN_OUT_CIRC: cubicBezier(0.785, 0.135, 0.15, 0.86),

    // 바운스 효과
    EASE_IN_BACK: cubicBezier(0.6, -0.28, 0.735, 0.045),
    EASE_OUT_BACK: cubicBezier(0.175, 0.885, 0.32, 1.275),
    EASE_IN_OUT_BACK: cubicBezier(0.68, -0.55, 0.265, 1.55),
};
