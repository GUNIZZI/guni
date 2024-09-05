import { ReactNode, useCallback, useMemo, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { MainLoaderContext } from './Main.context';

import { LoaderCircle } from '..';
import { TransitionFade } from '../../transition';

import { Backdrop } from '@mui/material';

interface OwnProps {
    children: ReactNode;
}

const MainLoaderProvider = ({ children }: OwnProps) => {
    // 로딩을 카운트로 관리
    const [loaderCnt, setLoaderCnt] = useState(0);

    // 로딩 활성 요청
    const loaderOn = useCallback(() => {
        setLoaderCnt(prevCount => prevCount + 1);
    }, []);

    // 로딩 제거 요청
    const loaderOff = useCallback(() => {
        setLoaderCnt(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    }, []);

    const contextValue = useMemo(() => ({ loaderOn, loaderOff }), [loaderCnt]);

    return (
        <MainLoaderContext.Provider value={contextValue}>
            {children}

            <AnimatePresence>
                {loaderCnt !== 0 && (
                    <TransitionFade className="transitionWrap">
                        <Backdrop
                            sx={{ position: 'fixed', color: '#ff0000', zIndex: 1 }}
                            open={loaderCnt > 0}
                        >
                            <LoaderCircle color="#000" />
                        </Backdrop>
                    </TransitionFade>
                )}
            </AnimatePresence>
        </MainLoaderContext.Provider>
    );
};

export { MainLoaderProvider };
