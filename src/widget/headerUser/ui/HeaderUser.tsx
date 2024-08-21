import { useContext, useEffect, useState } from 'react';

import { FeatureLoginContext, FeatureLoginProvider, FeatureAuthLoginForm } from '@/feature/auth';
import { FeatureUserBedge } from '@/feature/user';

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
            {/* <UserInfo /> */}
            <FeatureUserBedge />
            {isLoginActive && <FeatureAuthLoginForm />}
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
