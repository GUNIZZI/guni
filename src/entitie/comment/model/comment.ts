import {
    collection,
    addDoc,
    Timestamp,
    query,
    onSnapshot,
    QuerySnapshot,
    doc,
    deleteDoc,
    orderBy,
    runTransaction,
} from 'firebase/firestore';

import { BoardCommentProps } from '@/entitie/comment';
import { fbDb } from '@/shared/api/firebase';

export const addComment = async (postId: string, comment: Omit<BoardCommentProps, 'date'>) => {
    const postRef = doc(fbDb, 'TECH', postId);
    console.log(postRef);

    try {
        // const commentsRef = collection(fbDb, 'TECH', postId, 'comments');
        // await addDoc(commentsRef, {
        //     ...comment,
        //     date: Timestamp.now(),
        // });
        await runTransaction(fbDb, async transaction => {
            // 댓글 추가
            // const commentRef = doc(db, 'posts', postId, 'comments', commentData.id);
            // transaction.set(commentRef, commentData);

            const commentRef = doc(fbDb, 'TECH', postId, 'comments', comment.id);

            // 포스트의 댓글 수 증가
            transaction.update(postRef, {
                commentCount: increment(1),
            });
        });
    } catch (error) {
        console.error('Error adding comment: ', error);
        throw error;
    }
};

export const getComments = (
    postId: string | null,
    callback: (comments: BoardCommentProps[]) => void,
) => {
    if (!postId) return null;
    const commentsRef = collection(fbDb, 'TECH', postId, 'comments');
    const q = query(commentsRef, orderBy('date', 'desc'));

    return onSnapshot(q, (querySnapshot: QuerySnapshot) => {
        const comments = querySnapshot.docs.map(
            docItem =>
                ({
                    id: docItem.id,
                    ...docItem.data(),
                }) as BoardCommentProps,
        );
        callback(comments);
    });
};

export const deleteComment = async (postId: string, commentId: string) => {
    try {
        const commentRef = doc(fbDb, 'TECH', postId, 'comments', commentId);
        await deleteDoc(commentRef);
    } catch (error) {
        console.error('Error deleting comment: ', error);
        throw error;
    }
};
