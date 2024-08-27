import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addComment, deleteComment, fetchComments } from '../model/comment';
import { BoardCommentProps } from '../model/type';

/**
 * 코멘트 목록
 * @param boardType 리액트쿼리용 게시판 타입
 * @param postId 게시글 ID
 * @returns
 */
const useCommentFetchQuery = (
    boardType: string,
    postId: string,
): UseQueryResult<BoardCommentProps[], Error> => {
    return useQuery<BoardCommentProps[], Error>({
        queryKey: ['comments', boardType, postId],
        queryFn: () => fetchComments(boardType, postId),
    });
};

const useCommentAddDocMutation = (boardType: string, postId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (docData: BoardCommentProps) => addComment(boardType, postId, docData),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['comments', boardType, postId],
            });
            queryClient.invalidateQueries({
                queryKey: ['boardView', boardType, postId],
            });
        },
        onError: error => {
            throw error;
        },
    });
};

/**
 * 코멘트 삭제
 * @param boardType 리액트쿼리용 게시판 타입
 * @param postId 게시글 ID
 * @returns
 */
const useCommentDeleteDocMutation = (boardType: string, postId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        /**
         * @param commentId 코멘트 ID
         * @returns
         */
        mutationFn: (commentId: string) => deleteComment(boardType, postId, commentId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['comments', boardType, postId],
            });
            queryClient.invalidateQueries({
                queryKey: ['boardView', boardType, postId],
            });
        },
        onError: error => {
            throw error;
        },
    });
};

export { useCommentFetchQuery, useCommentAddDocMutation, useCommentDeleteDocMutation };
