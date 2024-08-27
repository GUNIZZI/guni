import { ReactNode, useMemo, createContext } from 'react';

import { useLocation } from 'react-router-dom';

interface OwnProps {
    boardType: string;
    children: ReactNode;
}
// Context에서 관리할 상태의 타입 정의
interface CommentContextType {
    boardType: string;
    postId: string;
}

// Context 생성
const CommentContext = createContext<CommentContextType>({
    boardType: '',
    postId: '',
});

const CommentProvider = ({ boardType, children }: OwnProps) => {
    const location = useLocation();
    const postId = location.pathname.split('seq=')[1];

    const contextValue = useMemo(() => ({ boardType, postId }), [postId]);

    return <CommentContext.Provider value={contextValue}>{children}</CommentContext.Provider>;
};

export { CommentProvider, CommentContext };
