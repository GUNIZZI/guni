import { useRef, useMemo } from 'react';

import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

import { WidgetLnb } from '@/widgets/lnb';

import { containerStyle } from './default.style';

import { Container } from '@mui/material';

import './transition.css';

const navItems = [
    { seq: 0, path: '/', name: 'Home' },
    { seq: 1, path: '/about', name: 'About G' },
    { seq: 2, path: '/tech', name: 'Tech Blog' },
    { seq: 3, path: '/blog', name: 'Life Blog' },
    { seq: 4, path: '/pf', name: 'Portfolio' },
];

const LayoutDefault = () => {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const nodeRef = useRef(null);
    // const prevLocationRef = useRef(location);

    // 라우터 이동 기록
    // const { from, to } = useMemo(() => {
    //     // const prev = navItems.find(item => item.path === prevLocationRef.current.pathname)?.seq;

    //     // console.log(prev);
    //     return {
    //         // from: prevLocationRef.current.pathname,
    //         // to: location.pathname,
    //         from: null,
    //         to: null,
    //     };
    // }, [location]);

    return (
        <Container sx={containerStyle}>
            <WidgetLnb />
            <TransitionGroup>
                {/* <SwitchTransition mode="out-in"> */}
                <CSSTransition
                    key={location.pathname}
                    classNames="slide2"
                    timeout={800}
                    // nodeRef={nodeRef}
                >
                    {/* <Outlet /> */}
                    {/* <div ref={nodeRef} className="page"> */}
                    {currentOutlet}
                    {/* </div> */}
                </CSSTransition>
                {/* </SwitchTransition> */}
            </TransitionGroup>
        </Container>
    );
};

export { LayoutDefault };
