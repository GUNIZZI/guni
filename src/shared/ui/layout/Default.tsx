import { Outlet } from 'react-router-dom';

import { WidgetLnb } from '@/widgets/lnb';

import { containerStyle } from './default.style';

import { Container } from '@mui/material';

const LayoutDefault = () => {
    return (
        <Container sx={containerStyle}>
            <WidgetLnb />
            <Outlet />
        </Container>
    );
};

export { LayoutDefault };
