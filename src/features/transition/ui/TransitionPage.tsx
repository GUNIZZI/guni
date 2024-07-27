import { ReactNode, useDeferredValue, useEffect, useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import './transition.css';

interface OwnProps {
    children: ReactNode;
}

const useSuspenseStatus = () => {
    const [isPending, setIsPending] = useState(false);
    const deferredIsPending = useDeferredValue(isPending);

    useEffect(() => {
        if (isPending !== deferredIsPending) {
            setIsPending(true);
        } else {
            setIsPending(false);
        }
    }, [isPending, deferredIsPending]);

    return isPending;
};

const TransitionPage = ({ children }: OwnProps) => {
    const location = useLocation();
    const nodeRef = useRef(null);
    const isSuspensePendding = useSuspenseStatus();

    console.log('isSuspensePendding >>  ', isSuspensePendding);

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={600}
                nodeRef={nodeRef}
            >
                <div ref={nodeRef} className="page">
                    {children}
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
};

export { TransitionPage };
