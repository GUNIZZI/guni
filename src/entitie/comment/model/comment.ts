import {
    collection,
    addDoc,
    Timestamp,
    query,
    onSnapshot,
    QuerySnapshot,
    doc,
    updateDoc,
    deleteDoc,
    orderBy,
} from 'firebase/firestore';

import { BoardCommentProps } from '@/entitie/comment';
import { fbDb } from '@/shared/api/firebase';

export const addComment = async (
    postId: string,
    comment: Omit<BoardCommentProps, 'id' | 'date'>,
) => {
    try {
        const commentsRef = collection(fbDb, 'TECH', postId, 'comments');
        await addDoc(commentsRef, {
            ...comment,
            date: Timestamp.now(),
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

export const updateComment = async (postId: string, commentId: string, content: string) => {
    try {
        const commentRef = doc(fbDb, 'TECH', postId, 'comments', commentId);
        await updateDoc(commentRef, { content });
    } catch (error) {
        console.error('Error updating comment: ', error);
        throw error;
    }
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
