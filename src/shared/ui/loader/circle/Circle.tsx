import { CSSProperties } from 'react';

import { loaderStyle2 } from './Circle.css';

interface OwnProps {
    size?: string | number;
    color?: string;
}

const Circle = ({ size, color }: OwnProps) => {
    const style = {
        ...(size && { '--size': size }),
        ...(color && { '--color': color }),
    } as CSSProperties;

    return <span css={loaderStyle2} style={style} />;
};

export { Circle };
