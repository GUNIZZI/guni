import { useState } from 'react';

import { useAuth } from '@/entitie/auth';
import { addComment } from '@/entitie/board/model/comment';

interface OwnProps {
    postId: string | null;
}

const Add = ({ postId }: OwnProps) => {
    const { user } = useAuth();
    const [newComment, setNewComment] = useState('');

    console.log('user', user);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !postId || !user) return;

        try {
            await addComment(postId, {
                content: newComment,
                authorId: user.email, // 실제 사용자 ID로 대체
                authorName: user.name || 'N', // 실제 사용자 이름으로 대체
            });
            setNewComment('');
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="댓글을 입력하세요"
            />
            <button type="submit">댓글 작성</button>
        </form>
    );
};

export { Add };
