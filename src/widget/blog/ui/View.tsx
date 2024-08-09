import { LoaderCircle } from '@/shared/ui/loader';

import { useFetchDocQuery } from '../hook/useBlog';

import { Backdrop } from '@mui/material';

const ViewNotContent = () => {
    return <div>데이터 불러오는 중...</div>;
};

const View = () => {
    const { data: posts, isLoading, error } = useFetchDocQuery('tech');

    if (error) return <div>없는 컨텐츠 입니다.</div>;

    return (
        <>
            {posts ? (
                <>
                    <h2>{posts.title}</h2>
                    <div>
                        <span>{posts.date}</span>
                        <span>댓글 0개</span>
                        <span>찜 0회</span>
                    </div>
                    <div>{posts.content}</div>
                </>
            ) : (
                <ViewNotContent />
            )}
            <Backdrop sx={{ position: 'absolute', color: '#fff', zIndex: 1 }} open={isLoading}>
                <LoaderCircle size="3em" color="#000" />
            </Backdrop>
        </>
    );
};

export { View };
