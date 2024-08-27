import { useContext, useEffect } from 'react';

import { Interpolation, Theme } from '@emotion/react';

import { useCommentFetchQuery } from '@/entitie/comment';
import { MainLoaderContext } from '@/shared/ui/loader';
import { CommentContext } from '@/widget/comment/provider/Comment';

import { styles } from './List.css';
import { ListItem } from './ListItem';

const List = () => {
    const { boardType, postId } = useContext(CommentContext);
    const { data: comments, isLoading } = useCommentFetchQuery(boardType, postId);
    const { loaderOn, loaderOff } = useContext(MainLoaderContext);

    useEffect(() => {
        if (isLoading) loaderOn();
        else loaderOff();
    }, [isLoading]);

    if (!comments || !comments.length)
        return (
            <div className="noData" css={[styles as Interpolation<Theme>]}>
                등록된 댓글이 없습니다.
            </div>
        );

    return (
        <ul css={[styles as Interpolation<Theme>]}>
            {comments.map(comment => (
                <li key={comment.id} className="comment">
                    <ListItem data={comment} />
                </li>
            ))}
        </ul>
    );
};

export { List };
