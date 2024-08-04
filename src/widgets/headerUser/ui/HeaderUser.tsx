import { useContext, useEffect, useState } from 'react';

import { FeatureLoginContext, FeatureLoginProvider, FeatureLoginForm } from '@/feature/auth';

import { UserInfo } from './UserInfo';

const UserWrap = () => {
    const { loginFormActive } = useContext(FeatureLoginContext);
    const [isLoginActive, setIsLoginActive] = useState(false);

    useEffect(() => {
        if (!loginFormActive) {
            setTimeout(() => {
                setIsLoginActive(false);
            }, 500);
        } else {
            setIsLoginActive(true);
        }
    }, [loginFormActive]);

    return (
        <>
            <UserInfo />
            {isLoginActive && <FeatureLoginForm />}
        </>
    );
};

const HeaderUser = () => {
    return (
        <FeatureLoginProvider>
            <UserWrap />
        </FeatureLoginProvider>
    );
};

export { HeaderUser };
