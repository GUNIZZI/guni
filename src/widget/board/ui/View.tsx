import { useCallback, useContext, useEffect, useRef } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import DOMPurify from 'isomorphic-dompurify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useBoardFetchDocQuery } from '@/entitie/board';
import { BoardQueryKey } from '@/entitie/board/model/type';
import { FeatureBoardDeleteButton, FeatureBoardBackButton } from '@/feature/board';
import { MainLoaderContext } from '@/shared/ui/loader';
import { QuillEditorStyle } from '@/shared/ui/quillEditor';

import 'quill/dist/quill.snow.css';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const NotContent = () => {
    return <div>데이터 불러오는 중...</div>;
};

const View = ({ boardType }: OwnProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { seq } = useParams() as { seq: string };
    const postId = seq.split('seq=')[1];
    const { data: posts, isLoading, error } = useBoardFetchDocQuery(boardType);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleBack = useCallback(() => {
        return location.state?.from === 'write' ? navigate('../') : navigate(-1);
    }, [location, navigate]);

    const { loaderOn, loaderOff } = useContext(MainLoaderContext);
    useEffect(() => {
        if (boardType && postId) {
            if (isLoading) loaderOn(`${boardType}-View-${postId}`);
            else loaderOff(`${boardType}-View-${postId}`);
        }
    }, [isLoading]);

    useEffect(() => {
        if (contentRef.current) {
            const codeBlocks = contentRef.current.querySelectorAll('.ql-code-block');
            codeBlocks.forEach(block => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).hljs.highlightBlock(block as HTMLElement);
            });
        }
    }, [posts?.content]);

    // 모듈 제거
    useEffect(() => {
        return () => {
            loaderOff(`${boardType}-View-${postId}`);
        };
    }, []);

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
                    <div
                        ref={contentRef}
                        className="ql-snow isView"
                        css={QuillEditorStyle as Interpolation<Theme>}
                    >
                        <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(posts.content || ''),
                            }}
                        />
                    </div>
                </>
            ) : (
                <NotContent />
            )}
        </div>
    );
};

export { View };
