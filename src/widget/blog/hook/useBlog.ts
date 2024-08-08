import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { BlogContentProps } from '@/entitie/blog';
import { fetchDatas, fetchDoc } from '@/entitie/blog/model/blog';

/**
 * 게시판 패칭 리액트쿼리
 * @param id 리액트쿼리용 게시판 ID
 * @returns
 */
const useFetchQuery = (id: string): UseQueryResult<BlogContentProps[], Error> => {
    return useQuery<BlogContentProps[], Error, BlogContentProps[], [string]>({
        queryKey: [id],
        queryFn: () => fetchDatas('tech'),
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
        queryKey: [id],
        queryFn: () => fetchDoc('tech', seq),
    });
};

export { useFetchQuery, useFetchDocQuery };
