import { useState } from 'react';

import { useAuth } from '@/entitie/auth';
import { addComment } from '@/entitie/comment/model/comment';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';

interface OwnProps {
    postId: string | null;
}

const Add = ({ postId }: OwnProps) => {
    const { user } = useAuth();
    const [newComment, setNewComment] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !postId || !user) return;

        try {
            await addComment(postId, {
                content: newComment,
                authorId: user.email,
                authorName:
                    user.uid === import.meta.env.VITE_FB_ADMIN_UID ? 'ADMIN' : user.name || '-',
            });
            setNewComment('');
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="댓글을 입력하세요"
            />
            <button type="submit">댓글 작성</button>
            {/* <CustomTextField id="replyTA" label="asd" /> */}

            {/* multiline */}
        </form>
    );
};

export { Add };
