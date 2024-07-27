import { useOutlet } from 'react-router-dom';

import { TransitionPage } from '@/features/transition';
import { WidgetLnb } from '@/widgets/lnb';

import { containerStyle } from './Default.css';

import { Container } from '@mui/material';

const LayoutDefault = () => {
    const currentOutlet = useOutlet();

    return (
        <Container sx={containerStyle}>
            <WidgetLnb />
            <TransitionPage>{currentOutlet}</TransitionPage>
        </Container>
    );
};

export { LayoutDefault };
