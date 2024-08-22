import { useEffect, useState } from 'react';

import { getComments } from '@/entitie/board/model/comment';
import { BoardCommentProps } from '@/entitie/board/model/type';
import { NAV_PATH } from '@/shared/config/navPath';

import { styles } from './List.css';

interface OwnProps {
    postId: string | null;
}

const arrColors = NAV_PATH.map(item => item.color);
const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};
const getRndBackground = () => {
    const randomColor = arrColors[Math.floor(Math.random() * arrColors.length)];
    const rgb = hexToRgb(randomColor);
    return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .6)` : 'rgba(0, 0, 0, .6)'; // 기본값 설정
};

const getFirstName = (name: string) => {
    return name.substring(0, 1);
};

const List = ({ postId }: OwnProps) => {
    const [comments, setComments] = useState<BoardCommentProps[]>([]);
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

    console.log(comments);

    useEffect(() => {
        getComments(postId, setComments);
        // return () => unsubscribe();
    }, [postId]);

    return (
        <ul css={styles}>
            {comments.map(comment => (
                <li key={comment.id} className="comment">
                    {/* <span className="icon" style={{ background: getRndBackground() }}> */}
                    <span className="icon">{getFirstName(comment.authorName)}</span>
                    <div className="content">
                        {comment.content}
                        <span className="date">2024-04-31</span>
                    </div>
                    {/* {editingCommentId === comment.id ? (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                // handleEdit(comment.id, (e.target as HTMLFormElement).comment.value);
                            }}
                        >
                            <input name="comment" defaultValue={comment.content} />
                            <button type="submit">수정</button>
                            <button onClick={() => setEditingCommentId(null)}>취소</button>
                        </form>
                    ) : (
                        <>
                            <p>{comment.content}</p>
                            <small>{comment.authorName}</small>
                            <button onClick={() => setEditingCommentId(comment.id)}>수정</button>
                            <button onClick={() => handleDelete(comment.id)}>삭제</button>
                        </>
                    )} */}
                </li>
            ))}
        </ul>
    );
};

export { List };
