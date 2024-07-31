import { useCallback, useState } from 'react';

const useLogin = () => {
    const [loginFormActive, setloginFormActive] = useState(false);
    const handleLoginForm = useCallback(() => {
        setloginFormActive(prev => !prev);
    }, []);
    return { loginFormActive, setloginFormActive, handleLoginForm };
};

export { useLogin };
