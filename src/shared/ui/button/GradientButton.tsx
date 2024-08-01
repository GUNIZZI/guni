import styled from '@emotion/styled';

import { NAV_PATH } from '@/shared/config/navPath';

import { Button, ButtonProps } from '@mui/material';

interface OwnProps extends ButtonProps {
    colors?: string | [];
}
const GradientButton = styled(Button, {
    shouldForwardProp: prop => prop !== 'customColor',
})<OwnProps>(({ theme, colors }) => ({
    background: colors
        ? `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`
        : `linear-gradient(45deg, ${NAV_PATH[0].color}, ${NAV_PATH[NAV_PATH.length - 1].color})`,
    color: '#000',
    fontWeight: 600,
    transition: 'all 0.18s cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    '&:hover': {
        borderRadius: '100px',
        color: '#fff',
        wordSpacing: '2em',
    },
}));

export { GradientButton };
