import { useContext } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '@/entitie/auth';
import { BoardCommentProps, useCommentAddDocMutation } from '@/entitie/comment';
import { AuthUser } from '@/entitie/user/model/type';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';
import { CommentContext } from '@/widget/comment/provider/Comment';

import { styles } from './Add.css';

import { AddComment } from '@mui/icons-material';
import { Button } from '@mui/material';

interface CommentInputType {
    comment: string;
}

const getAuthorName = (user: AuthUser) => {
    switch (user.uid) {
        case import.meta.env.VITE_FB_ADMIN_UID:
            return 'ADMIN';
        case import.meta.env.VITE_FB_EVE_UID:
            return 'EVE';
        case import.meta.env.VITE_FB_GUEST_UID:
            return 'GUEST';
        default:
            return user.name || '-';
    }
};

const Add = () => {
    const { boardType, postId } = useContext(CommentContext);
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { isValid, isDirty },
        reset,
    } = useForm<CommentInputType>({
        mode: 'onChange',
    });
    const { mutate: addDocQuery } = useCommentAddDocMutation(boardType, postId);

    const onSubmit: SubmitHandler<CommentInputType> = ({ comment }: CommentInputType) => {
        if (!comment.trim()?.length || !postId || !user) return;

        try {
            addDocQuery({
                content: comment,
                authorId: user.email,
                authorName: getAuthorName(user),
            } as BoardCommentProps);
            reset();
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    if (!user)
        return (
            <div className="notUser" css={[styles as Interpolation<Theme>]}>
                로그인 후 댓을을 작성할 수 있습니다.
            </div>
        );

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={[styles as Interpolation<Theme>]}>
            <CustomTextField
                id="comment"
                className="commentTa"
                label="댓글작성"
                register={register}
                multiline
                fullWidth
                rows={2}
                rules={{
                    validate: value => value?.trim().length > 0 || '공백 불가.',
                }}
            />
            <Button variant="contained" type="submit" disabled={!isValid || !isDirty}>
                <AddComment />
            </Button>
        </form>
    );
};

export { Add };
