import {
    collection,
    addDoc,
    Timestamp,
    doc,
    increment,
    runTransaction,
    getDocs,
    orderBy,
    query,
} from 'firebase/firestore';

import { BoardCommentProps } from '@/entitie/comment';
import { fbDb } from '@/shared/api/firebase';

export const addComment = async (
    collectionName: string,
    postId: string,
    comment: Omit<BoardCommentProps, 'id' | 'date'>,
) => {
    const postRef = doc(fbDb, collectionName, postId);
    const commentsRef = collection(fbDb, collectionName, postId, 'comments');

    try {
        const newCommentRef = await runTransaction(fbDb, async transaction => {
            // 새 댓글 문서 생성 (자동 생성 ID 사용)
            const commentRef = await addDoc(commentsRef, { ...comment, date: Timestamp.now() });

            // 포스트의 댓글 수 증가
            transaction.update(postRef, {
                commentCount: increment(1),
            });

            return commentRef;
        });
        return newCommentRef.id;
    } catch (error) {
        console.error('Error adding comment: ', error);
        throw error;
    }
};

export const fetchComments = async (collectionName: string, postId: string) => {
    const commentsRef = collection(fbDb, collectionName, postId, 'comments');
    const postsQuery = query(commentsRef, orderBy('date', 'desc'));
    const snapshot = await getDocs(postsQuery);
    return snapshot.docs.map(
        docItem => ({ id: docItem.id, ...docItem.data() }) as BoardCommentProps,
    );
};

export const deleteComment = async (collectionName: string, postId: string, commentId: string) => {
    const postRef = doc(fbDb, collectionName, postId);
    const commentRef = doc(fbDb, collectionName, postId, 'comments', commentId);

    try {
        await runTransaction(fbDb, async transaction => {
            // 댓글 삭제
            transaction.delete(commentRef);

            // 포스트의 댓글 수 감소
            transaction.update(postRef, {
                commentCount: increment(-1),
            });
        });
    } catch (error) {
        console.error('Error deleting comment: ', error);
        throw error;
    }
};
