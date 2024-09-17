import { useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';

import { useAboutCompQuery } from '@/entitie/about/hook/useAboutAsync';
import { useAuth } from '@/entitie/auth';
import { LoaderCircle } from '@/shared/ui/loader';
import { TransitionFade } from '@/shared/ui/transition';

import { Comp } from './Comp';

const CompList = () => {
    const { user } = useAuth();
    const { data, isFetching } = useAboutCompQuery();
    const isAdmin = useMemo(() => user?.role === 'ADMIN', [user]);

    const getTransitionKey = useMemo(() => (isFetching ? 'loader' : 'content'), [isFetching]);

    return (
        <AnimatePresence mode="wait">
            <TransitionFade key={getTransitionKey}>
                {isFetching ? (
                    <LoaderCircle size="50px" />
                ) : (
                    <>
                        {isAdmin && <Comp key="compAdd" />}
                        {data?.map(comp => <Comp key={comp.id} compData={comp} />)}
                    </>
                )}
            </TransitionFade>
        </AnimatePresence>
    );
};

export { CompList };
