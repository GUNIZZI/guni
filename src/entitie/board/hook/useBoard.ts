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
const useBoardFetchQuery = (boardType: string): UseQueryResult<BoardContentProps[], Error> => {
    return useQuery<BoardContentProps[], Error>({
        queryKey: ['boardList', boardType],
        queryFn: () => fetchDatas(boardType),
    });
};

/**
 * 게시판 상세 패칭 리액트쿼리
 * @param boardType 리액트쿼리용 게시판 boardType
 * @returns
 */
const useBoardFetchDocQuery = (boardType: string): UseQueryResult<BoardContentProps, Error> => {
    const { seq } = useParams() as { seq: string };
    const splitSeq = seq.split('seq=')[1];
    return useQuery<BoardContentProps, Error>({
        queryKey: ['boardView', boardType, splitSeq],
        queryFn: () => fetchDoc(boardType, splitSeq),
    });
};

/**
 * 게시판 글 등록
 * @param boardType 리액트쿼리용 게시판 타입
 * @returns
 */
const useBoardAddDocMutation = (boardType: string) => {
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
            console.log(error);
            throw error;
        },
    });
};

/**
 * 게시글 삭제
 * @param boardType 리액트쿼리용 게시판 타입
 * @returns
 */
const useBoardDeleteDocMutation = (boardType: string) => {
    const queryClient = useQueryClient();
    const { seq } = useParams() as { seq: string };
    const splitSeq = seq.split('seq=')[1];
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => deletePost(boardType, splitSeq),
        onSuccess: res => {
            navigate('../');
            queryClient.removeQueries({
                queryKey: ['boardView', boardType, splitSeq],
                exact: true,
            });
            return res;
        },
        onError: error => {
            throw error;
        },
    });
};

export {
    useBoardFetchQuery,
    useBoardFetchDocQuery,
    useBoardAddDocMutation,
    useBoardDeleteDocMutation,
};
