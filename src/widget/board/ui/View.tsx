import { useCallback, useContext, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { useBoardFetchDocQuery } from '@/entitie/board';
import { BoardQueryKey } from '@/entitie/board/model/type';
import { FeatureBoardDeleteButton, FeatureBoardBackButton } from '@/feature/board';
import { MainLoaderContext } from '@/shared/ui/loader';

// import 'draft'

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const NotContent = () => {
    return <div>데이터 불러오는 중...</div>;
};

const View = ({ boardType }: OwnProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data: posts, isLoading, error } = useBoardFetchDocQuery(boardType);

    const handleBack = useCallback(() => {
        return location.state?.from === 'write' ? navigate('../') : navigate(-1);
    }, [location, navigate]);

    const { loaderOn, loaderOff } = useContext(MainLoaderContext);
    useEffect(() => {
        if (isLoading) {
            loaderOn();
        } else {
            loaderOff();
        }
    }, [isLoading]);

    if (error) return <div>없는 컨텐츠 입니다.</div>;

    return (
        <div className="viewWrap">
            {/* 뒤로가기 */}
            <FeatureBoardBackButton onClick={handleBack} />

            {/* 삭제 버튼 */}
            <FeatureBoardDeleteButton boardType={boardType} />
            {posts ? (
                <>
                    <h2>{posts.title}</h2>
                    <div className="infos">
                        <span>{posts.date}</span>
                        <span>{posts.commentCount || 0}개의 댓글</span>
                    </div>
                    {/* <DraftViewer initialContent={posts.content || ''} /> */}
                </>
            ) : (
                <NotContent />
            )}
        </div>
    );
};

export { View };
