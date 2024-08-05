import { useEffect, useMemo, useState } from 'react';

import { throttle } from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';

import { NAV_PATH } from '@/shared/config/navPath';

const useNavMove = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selIdx, setSelIdx] = useState(
        () => NAV_PATH.find(item => item.path === `/${location.pathname.split('/')[1]}`)?.seq || 0,
    );
    const [isFirst, setIsFirst] = useState(true);
    const throttledSetSelIdx = useMemo(
        () =>
            throttle(
                (delta: string) => {
                    if (delta === 'dn') {
                        setSelIdx(prev =>
                            prev < NAV_PATH.length - 1 ? prev + 1 : NAV_PATH.length - 1,
                        );
                    } else {
                        setSelIdx(prev => (prev > 0 ? prev - 1 : 0));
                    }
                },
                1000,
                { leading: true, trailing: false },
            ),
        [],
    );

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            const dir = e.deltaY > 0 ? 'dn' : 'up';
            if ((selIdx > 0 && dir === 'up') || (selIdx < NAV_PATH.length - 1 && dir === 'dn'))
                throttledSetSelIdx(dir);
        };
        window.addEventListener('wheel', handleScroll);

        if (!isFirst) {
            const path = NAV_PATH.find(item => item.seq === selIdx)?.path || '/';
            if (path !== `/${location.pathname.split('/')[1]}`) navigate(path);
        }
        setIsFirst(false);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [selIdx, isFirst, throttledSetSelIdx]);

    useEffect(() => {
        setSelIdx(
            () =>
                NAV_PATH.find(item => item.path === `/${location.pathname.split('/')[1]}`)?.seq ||
                0,
        );
    }, [location]);

    return { selIdx };
};

export { useNavMove };
