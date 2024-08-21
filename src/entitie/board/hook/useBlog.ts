import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { BoardContentProps, addPost, fetchDatas, fetchDoc } from '@/entitie/board';
import { BoardAddPostProps } from '@/entitie/board/model/type';

import { deletePost } from '../model/board';

/**
 * 게시판 패칭 리액트쿼리
 * @param boardType 리액트쿼리용 게시판 타입
 * @returns
 */
const useFetchQuery = (boardType: string): UseQueryResult<BoardContentProps[], Error> => {
    return useQuery<BoardContentProps[], Error, BoardContentProps[], [string]>({
        queryKey: [`${boardType}_list`],
        queryFn: () => fetchDatas(boardType),
    });
};

/**
 * 게시판 상세 패칭 리액트쿼리
 * @param boardType 리액트쿼리용 게시판 boardType
 * @returns
 */
const useFetchDocQuery = (boardType: string): UseQueryResult<BoardContentProps, Error> => {
    const { seq } = useParams() as { seq: string };
    return useQuery<BoardContentProps, Error, BoardContentProps, [string, string]>({
        queryKey: [`${boardType}_view`, seq],
        queryFn: () => fetchDoc(boardType, seq),
    });
};

/**
 * 게시판 글 등록
 * @param boardType 리액트쿼리용 게시판 타입
 * @returns
 */
const useAddDocMutation = (boardType: string) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ({ docData }: { docData: BoardAddPostProps }) => addPost(boardType, docData),
        onSuccess: res => {
            navigate(`../seq=${res.id}`, {
                state: { from: 'write' },
            });
            return res;
        },
        onError: error => {
            throw error;
        },
    });
};

/**
 * 게시글 삭제
 * @param boardType 리액트쿼리용 게시판 타입
 * @returns
 */
const useDeleteDocMutation = (boardType: string) => {
    const queryClient = useQueryClient();
    const { seq } = useParams() as { seq: string };
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => deletePost(boardType, seq),
        onSuccess: res => {
            navigate('../');
            queryClient.removeQueries({
                queryKey: [`${boardType}_view`, seq],
                exact: true,
            });
            return res;
        },
        onError: error => {
            throw error;
        },
    });
};

export { useFetchQuery, useFetchDocQuery, useAddDocMutation, useDeleteDocMutation };
