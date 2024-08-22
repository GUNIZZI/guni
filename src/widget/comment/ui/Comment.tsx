import { useLocation } from 'react-router-dom';

import { FeatureCommentAdd, FeatureCommentList } from '@/feature/comment';

const Comment = () => {
    const location = useLocation();
    const postId = location.pathname.split('seq=')[1];

    return (
        <div>
            <FeatureCommentAdd postId={postId} />
            <FeatureCommentList postId={postId} />
        </div>
    );
};

export { Comment };
