import { useCallback } from 'react';

import DOMPurify from 'isomorphic-dompurify';
import { useLocation, useNavigate } from 'react-router-dom';

import { BoardQueryKey } from '@/entitie/board/model/type';
import { useFetchDocQuery } from '@/entitie/board/hook/useBlog';
import { BackButton } from '@/shared/ui/button/BackButton';
import { LoaderCircle } from '@/shared/ui/loader';
import { MdViewer } from '@/shared/ui/mdViewer/MdViewer';

import { Backdrop } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const ViewNotContent = () => {
    return <div>데이터 불러오는 중...</div>;
};

const View = ({ boardType }: OwnProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data: posts, isLoading, error } = useFetchDocQuery(boardType);

    const handleBack = useCallback(() => {
        return location.state?.from === 'write' ? navigate('../') : navigate(-1);
    }, [location, navigate]);

    if (error) return <div>없는 컨텐츠 입니다.</div>;

    return (
        <>
            <div className="viewWrap">
                <BackButton onClick={handleBack} />
                {posts ? (
                    <>
                        <h2>{posts.title}</h2>
                        <div>
                            <span>{posts.date}</span>
                            <span>댓글 0개</span>
                            <span>찜 0회</span>
                        </div>
                        <MdViewer
                            content={DOMPurify.sanitize(posts.content || '')}
                            className="content"
                        />
                    </>
                ) : (
                    <ViewNotContent />
                )}
            </div>
            <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
                <LoaderCircle color="#000" />
            </Backdrop>
        </>
    );
};

export { View };
