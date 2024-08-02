import { useContext, useEffect, useState } from 'react';

import { LogedBtn } from './LogedBtn';
import { LoginForm } from './LoginForm';
import { UserContext, UserProvider } from './UserProvider';

const UserArea = () => {
    const { loginFormActive } = useContext(UserContext);
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
            <LogedBtn />
            {isLoginActive && <LoginForm />}
        </>
    );
};

const Login = () => {
    return (
        <UserProvider>
            <UserArea />
        </UserProvider>
    );
};

export { Login };
