import { ReactNode, Suspense, useContext, useEffect, useTransition } from 'react';

import { MainLoaderContext } from '@/shared/ui/loader';
import { TransitionFade } from '@/shared/ui/transition';

interface OwnProps {
    children: ReactNode;
}

const SuspensePage = ({ children }: OwnProps) => {
    const [isPending, startTransition] = useTransition();
    const { loaderOn, loaderOff } = useContext(MainLoaderContext);

    useEffect(() => {
        startTransition(() => loaderOn());
    }, []);

    useEffect(() => {
        if (!isPending) loaderOff();
    }, [isPending]);

    return (
        <Suspense>
            <TransitionFade className="transitionWrap">{children}</TransitionFade>
        </Suspense>
    );
};

export { SuspensePage };
