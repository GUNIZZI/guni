import { ReactNode, Suspense } from 'react';

import { LoaderCircle } from '@/shared/ui/loader';
import { TransitionFade } from '@/shared/ui/transition';

interface OwnProps {
    children: ReactNode;
}

const SuspensePage = ({ children }: OwnProps) => {
    return (
        <Suspense
            fallback={
                <TransitionFade>
                    <LoaderCircle />
                </TransitionFade>
            }
        >
            <TransitionFade className="transitionWrap">{children}</TransitionFade>
        </Suspense>
    );
};

export { SuspensePage };
