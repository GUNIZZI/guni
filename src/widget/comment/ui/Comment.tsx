import { Interpolation, Theme } from '@emotion/react';

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
            <div className="comment" css={style as Interpolation<Theme>}>
                <FeatureCommentAdd />
                <FeatureCommentList />
            </div>
        </CommentProvider>
    );
};

export { Comment };
