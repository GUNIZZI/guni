import { useContext, useEffect, useState } from 'react';

import { delay } from 'lodash';

import LoginBtn from './LoginBtn';
import { LoginForm } from './LoginForm';
import { LoginContext, LoginProvider } from './LoginFormProvider';

const LoginContent = () => {
    const { loginFormActive } = useContext(LoginContext);
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
            <LoginBtn />
            {isLoginActive && <LoginForm />}
        </>
    );
};

const Login = () => {
    return (
        <LoginProvider>
            <LoginContent />
        </LoginProvider>
    );
};

export { Login };
