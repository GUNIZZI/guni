import { Link } from 'react-router-dom';

import { useAuth } from '@/entitie/auth';
import { useFetchQuery } from '@/entitie/board/hook/useBlog';
import { BoardContentProps, BoardQueryKey } from '@/entitie/board/model/type';
import { AuthUser } from '@/entitie/user/model/type';
import { BOARD_QUERY_KEY } from '@/shared/config/constants';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { LoaderCircle } from '@/shared/ui/loader';

import { BoardCard } from './listType/Card';
import { BoardList } from './listType/List';

import { Add } from '@mui/icons-material';
import { Backdrop } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

interface BoardListType {
    boardType: BoardQueryKey['type'];
    posts: BoardContentProps[] | undefined;
}

const getAddBtn = (isLogined: boolean, user: AuthUser | null) => {
    if (isLogined && user?.role === 'ADMIN')
        return (
            <div className="btns">
                <GradientButton
                    className="isConfirm"
                    component={Link}
                    to="./write"
                    style={{ width: '6rem', color: '#fff' }}
                    title="추가"
                >
                    <Add sx={{ fontSize: '4rem' }} />
                </GradientButton>
            </div>
        );
    return null;
};

const getListType = ({ boardType, posts }: BoardListType) => {
    switch (boardType) {
        case BOARD_QUERY_KEY.TECH:
            return <BoardList datas={posts} />;
        case BOARD_QUERY_KEY.LIFE:
            return <BoardCard datas={posts} />;
        case BOARD_QUERY_KEY.PF:
            return <BoardList datas={posts} />;
        default:
            return null;
    }
};

const List = ({ boardType }: OwnProps) => {
    const { data: posts, isLoading } = useFetchQuery(boardType);
    const { isLogined, user } = useAuth();

    return (
        <>
            {
                // 추가 버튼 활성 여부
                getAddBtn(isLogined, user)
            }
            {
                // 형태에 따른 게시판 반환
                getListType({ boardType, posts })
            }
            <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
                <LoaderCircle size="3em" color="#000" />
            </Backdrop>
        </>
    );
};

export { List };
