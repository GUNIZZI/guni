import styled from '@emotion/styled';

import { NAV_PATH } from '@/shared/config/navPath';

import { Button, ButtonProps } from '@mui/material';

interface OwnProps extends ButtonProps {
    colors?: string | [];
    to?: string;
}
const GradientButton = styled(Button)<OwnProps>(({ theme, colors }) => ({
    background: colors
        ? `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`
        : `linear-gradient(45deg, ${NAV_PATH[0].color}, ${NAV_PATH[NAV_PATH.length - 1].color})`,
    color: '#000',
    fontWeight: 600,
    transition: 'all 0.18s cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    '&:hover': {
        opacity: 0.8,
        color: '#fff',
        wordSpacing: '2em',
    },
    '&:disabled': {
        opacity: 0.6,
        textDecoration: 'line-through',
    },
}));

export { GradientButton };
