import { useLocation } from 'react-router-dom';

import { FeatureCommentAdd, FeatureCommentList } from '@/feature/comment';

import { style } from './Comment.css';

const Comment = () => {
    const location = useLocation();
    const postId = location.pathname.split('seq=')[1];

    return (
        <div css={style}>
            <FeatureCommentAdd postId={postId} />
            <FeatureCommentList postId={postId} />
        </div>
    );
};

export { Comment };
