import { ReactNode, useCallback, useMemo, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { MainLoaderContext } from './Main.context';

import { LoaderCircle } from '..';
import { TransitionFade } from '../../transition';

interface OwnProps {
    children: ReactNode;
}

const MainLoaderProvider = ({ children }: OwnProps) => {
    // 로딩을 카운트로 관리
    // const [loaderCnt, setLoaderCnt] = useState(0);
    const [loaderStack, setLoaderStack] = useState<string[]>([]);

    // 로딩 활성 요청
    const loaderOn = useCallback((key: string) => {
        if (!loaderStack.includes(key)) {
            setLoaderStack(prev => [...prev, key]);
        }
    }, []);

    // 로딩 제거 요청
    const loaderOff = useCallback((key: string) => {
        setLoaderStack(prev => prev.filter(k => k !== key));
    }, []);

    const contextValue = useMemo(() => ({ loaderOn, loaderOff }), [loaderStack]);

    return (
        <MainLoaderContext.Provider value={contextValue}>
            {children}

            <AnimatePresence>
                {loaderStack.length !== 0 && (
                    <TransitionFade className="transitionWrap">
                        <LoaderCircle color="#000" fixed />
                    </TransitionFade>
                )}
            </AnimatePresence>
        </MainLoaderContext.Provider>
    );
};

export { MainLoaderProvider };
