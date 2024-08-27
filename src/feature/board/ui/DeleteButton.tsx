import { useAuth } from '@/entitie/auth';
import { useDeleteDocMutation } from '@/entitie/board/hook/useBlog';
import { BoardQueryKey } from '@/entitie/board/model/type';

import { Delete } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const DeleteButton = ({ boardType }: OwnProps) => {
    const { mutate: delDocQuery, isPending } = useDeleteDocMutation(boardType);
    const { isLogined, user } = useAuth();

    const handleDelete = () => {
        delDocQuery();
    };

    if (!isLogined || user?.role !== 'ADMIN') return null;

    return (
        <Button
            className="btnDelete"
            variant="contained"
            title="삭제"
            color="error"
            style={{
                position: 'fixed',
                right: '2rem',
                bottom: '2rem',
                width: '4rem',
                height: '4rem',
                zIndex: 20,
            }}
            onClick={handleDelete}
            disabled={isPending}
        >
            <Delete sx={{ fontSize: '2rem' }} />
            {isPending && (
                <CircularProgress
                    size="3.6em"
                    sx={{
                        position: 'absolute',
                        color: '#fff',
                    }}
                />
            )}
        </Button>
    );
};

export { DeleteButton };
