import { useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group';

import { WidgetLnb } from '@/widgets/lnb';

import { containerStyle } from './Default.css';

import { Container } from '@mui/material';

import '@/features/transition/ui/transition.css';

const LayoutDefault = () => {
    const location = useLocation();
    const currentOutlet = useOutlet();

    return (
        <Container sx={containerStyle}>
            <WidgetLnb />
            <TransitionGroup>
                {/* <SwitchTransition mode="out-in"> */}
                <CSSTransition key={location.pathname} classNames="fade" timeout={800} in>
                    {currentOutlet}
                </CSSTransition>
                {/* </SwitchTransition> */}
            </TransitionGroup>
        </Container>
    );
};

export { LayoutDefault };
