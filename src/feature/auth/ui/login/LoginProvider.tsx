import {
    ReactNode,
    createContext,
    useState,
    useCallback,
    useMemo,
    Dispatch,
    SetStateAction,
} from 'react';

interface OwnProps {
    children: ReactNode;
}

type LoginContextType = {
    loginFormActive: boolean;
    setLoginFormActive: Dispatch<SetStateAction<boolean>>;
    handleLoginForm: () => void;
};

const LoginContext = createContext<LoginContextType>({
    loginFormActive: false,
    setLoginFormActive: () => {},
    handleLoginForm: () => {},
});

const LoginProvider = ({ children }: OwnProps) => {
    const [loginFormActive, setLoginFormActive] = useState(false);

    const handleLoginForm = useCallback(() => {
        setLoginFormActive(prev => !prev);
    }, []);

    const value = useMemo(
        (): LoginContextType => ({
            loginFormActive,
            setLoginFormActive,
            handleLoginForm,
        }),
        [loginFormActive, setLoginFormActive, handleLoginForm],
    );

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

export { LoginContext, LoginProvider };
