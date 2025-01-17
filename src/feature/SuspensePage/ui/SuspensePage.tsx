import { ReactNode, Suspense, useContext, useEffect, useState, useTransition } from 'react';

import { MainLoaderContext } from '@/shared/ui/loader';
import { TransitionFade } from '@/shared/ui/transition';

interface OwnProps {
    children: ReactNode;
}

const SuspensePage = ({ children }: OwnProps) => {
    const [isPending, startTransition] = useTransition();
    const [isAniStart, setIsAniStart] = useState(false);
    const { loaderOn, loaderOff } = useContext(MainLoaderContext);

    useEffect(() => {
        startTransition(() => {
            setIsAniStart(true);
            loaderOn('suspensePage');
        });
    }, []);

    useEffect(() => {
        if (isAniStart && !isPending) {
            loaderOff('suspensePage');
        }
    }, [isPending, isAniStart]);

    return (
        <Suspense>
            <TransitionFade className="transitionWrap boardTransitionWrap">
                {children}
            </TransitionFade>
        </Suspense>
    );
};

export { SuspensePage };
