import { CSSProperties } from 'react';

import { loaderStyle2 } from './Circle.css';

import { Backdrop } from '@mui/material';

interface OwnProps {
    size?: string | number;
    color?: string;
    fixed?: boolean;
}

const Circle = ({ size, color, fixed = false }: OwnProps) => {
    const style = {
        ...(size && { '--size': size }),
        ...(color && { '--color': color }),
    } as CSSProperties;

    return (
        <Backdrop open sx={{ position: fixed ? 'fixed' : 'absolute', color: '#000000', zIndex: 1 }}>
            <span css={loaderStyle2} style={style} />
        </Backdrop>
    );
};

export { Circle };
