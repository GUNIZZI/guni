import { useMemo, useState } from 'react';

import { useAuth } from '@/entitie/auth';
import { BoardCommentProps } from '@/entitie/comment';
import { NAV_PATH } from '@/shared/config/navPath';
import { timestampConversion } from '@/shared/util';

interface OwnProps {
    data: BoardCommentProps;
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
const getRndColor = (name: string) => {
    if (name === 'ADMIN') return '#fff';
    const randomColor = arrColors[Math.floor(Math.random() * arrColors.length)];
    const rgb = hexToRgb(randomColor);
    return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : 'rgba(0, 0, 0, 1)'; // 기본값 설정
};

const ListItem = ({ data }: OwnProps) => {
    const { user } = useAuth();
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
    const isMyComment = useMemo(() => user?.email === data.authorId, [user]);

    // console.log(data);
    console.log(data, user?.role !== 'ADMIN');

    return (
        <div className="comment">
            <div className="iconWrap">
                <span
                    className={`icon ${data.authorId === import.meta.env.VITE_FB_ADMIN_ID && 'isAdmin'}`}
                    style={{
                        color: getRndColor(data.authorName),
                        borderColor: `${data.authorName === 'ADMIN' && '#fff'}`,
                    }}
                >
                    {data.authorName}
                </span>
                <span className="date">{timestampConversion(data.date)}</span>
            </div>
            <div className="content">{data.content}</div>
            {isMyComment && (
                // 작성자만 보이도록 작업
                <div className="btns">
                    가능
                    {/* <button onClick={() => setEditingCommentId(data.id)}>수정</button> */}
                    {/* <button onClick={() => handleDelete(data.id)}>삭제</button> */}
                </div>
            )}
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
        </div>
    );
};

export { ListItem };
