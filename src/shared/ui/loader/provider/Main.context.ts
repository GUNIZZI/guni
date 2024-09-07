import { createContext } from 'react';

// Context에서 관리할 상태의 타입 정의
interface MainLoaderContextType {
    loaderOn: (key: string) => void;
    loaderOff: (key: string) => void;
}

// Context 생성
const MainLoaderContext = createContext<MainLoaderContextType>({
    loaderOn: () => {},
    loaderOff: () => {},
});

export { MainLoaderContext };
