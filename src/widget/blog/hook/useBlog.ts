import { UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { BlogContentProps, addPost, fetchDatas, fetchDoc } from '@/entitie/blog';
import { BlogAddPostProps } from '@/entitie/blog/model/type';

/**
 * 게시판 패칭 리액트쿼리
 * @param id 리액트쿼리용 게시판 ID
 * @returns
 */
const useFetchQuery = (id: string): UseQueryResult<BlogContentProps[], Error> => {
    return useQuery<BlogContentProps[], Error, BlogContentProps[], [string]>({
        queryKey: [`${id}_list`],
        queryFn: () => fetchDatas(id),
    });
};

/**
 * 게시판 상세 패칭 리액트쿼리
 * @param id 리액트쿼리용 게시판 ID
 * @returns
 */
const useFetchDocQuery = (id: string): UseQueryResult<BlogContentProps, Error> => {
    const { seq } = useParams() as { seq: string };
    return useQuery<BlogContentProps, Error, BlogContentProps, [string]>({
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
            docData: BlogAddPostProps;
        }) => addPost(collectionName, docData),
        onSuccess: res => {
            navigate(`../seq=${res.id}`);
            return res;
        },
        onError: error => {
            throw error;
        },
    });
};

export { useFetchQuery, useFetchDocQuery, useAddDocMutation };
