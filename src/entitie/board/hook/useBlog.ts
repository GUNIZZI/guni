import { UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { BoardContentProps, addPost, fetchDatas, fetchDoc } from '@/entitie/board';
import { BoardAddPostProps } from '@/entitie/board/model/type';

import { deletePost } from '../model/board';

/**
 * 게시판 패칭 리액트쿼리
 * @param id 리액트쿼리용 게시판 ID
 * @returns
 */
const useFetchQuery = (id: string): UseQueryResult<BoardContentProps[], Error> => {
    return useQuery<BoardContentProps[], Error, BoardContentProps[], [string]>({
        queryKey: [`${id}_list`],
        queryFn: () => fetchDatas(id),
    });
};

/**
 * 게시판 상세 패칭 리액트쿼리
 * @param id 리액트쿼리용 게시판 ID
 * @returns
 */
const useFetchDocQuery = (id: string): UseQueryResult<BoardContentProps, Error> => {
    const { seq } = useParams() as { seq: string };
    return useQuery<BoardContentProps, Error, BoardContentProps, [string]>({
        queryKey: [`${id}_view`],
        queryFn: () => fetchDoc(id, seq),
    });
};

/**
 * 게시판 글 등록
 * @returns
 */
const useAddDocMutation = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ({
            collectionName,
            docData,
        }: {
            collectionName: string;
            docData: BoardAddPostProps;
        }) => addPost(collectionName, docData),
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
 * @returns
 */
const useDeleteDocMutation = () => {
    const { seq } = useParams() as { seq: string };
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (collectionName: string) => deletePost(collectionName, seq),
        onSuccess: res => {
            navigate('../');
            return res;
        },
        onError: error => {
            throw error;
        },
    });
};

export { useFetchQuery, useFetchDocQuery, useAddDocMutation, useDeleteDocMutation };
