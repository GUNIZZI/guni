import { BoardQueryKey } from '@/entitie/board/model/type';
import { FeatureCommentAdd, FeatureCommentList } from '@/feature/comment';

import { style } from './Comment.css';
import { CommentProvider } from '../provider/Comment';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const Comment = ({ boardType }: OwnProps) => {
    return (
        <CommentProvider boardType={boardType}>
            <div css={style}>
                <FeatureCommentAdd />
                <FeatureCommentList />
            </div>
        </CommentProvider>
    );
};

export { Comment };
