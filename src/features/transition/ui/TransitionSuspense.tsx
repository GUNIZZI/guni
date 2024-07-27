import { ReactNode, useRef } from 'react';

import { useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group';

import './transition.css';

interface OwnProps {
    children: ReactNode;
}

const TransitionSuspense = ({ children }: OwnProps) => {
    const location = useLocation();
    const nodeRef = useRef(null);

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={600}
                // nodeRef={nodeRef}
            >
                {/* <div ref={nodeRef} className="page"> */}
                {children}
                {/* </div> */}
            </CSSTransition>
        </TransitionGroup>
    );
};

export { TransitionSuspense };
