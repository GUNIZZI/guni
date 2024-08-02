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

type UserContextType = {
    loginFormActive: boolean;
    setLoginFormActive: Dispatch<SetStateAction<boolean>>;
    handleLoginForm: () => void;
};

const UserContext = createContext<UserContextType>({
    loginFormActive: false,
    setLoginFormActive: () => {},
    handleLoginForm: () => {},
});

const UserProvider = ({ children }: OwnProps) => {
    const [loginFormActive, setLoginFormActive] = useState(false);

    const handleLoginForm = useCallback(() => {
        setLoginFormActive(prev => !prev);
    }, []);

    const value = useMemo(
        (): UserContextType => ({
            loginFormActive,
            setLoginFormActive,
            handleLoginForm,
        }),
        [loginFormActive, setLoginFormActive, handleLoginForm],
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
