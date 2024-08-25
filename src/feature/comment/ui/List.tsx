import { useEffect, useState } from 'react';

import { Interpolation, Theme } from '@emotion/react';

import { BoardCommentProps } from '@/entitie/comment';
import { getComments } from '@/entitie/comment/model/comment';

import { styles } from './List.css';
import { ListItem } from './ListItem';

interface OwnProps {
    postId: string;
}
const List = ({ postId }: OwnProps) => {
    const [comments, setComments] = useState<BoardCommentProps[]>([]);

    console.log(comments);

    useEffect(() => {
        getComments(postId, setComments);
        // return () => unsubscribe();
    }, [postId]);

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
                    <ListItem postId={postId} data={comment} />
                </li>
            ))}
        </ul>
    );
};

export { List };
