export type { BoardContentProps } from './model/type';

export { getFilterData } from './util/filterData';

export { fetchDatas, fetchDoc, addPost } from './model/board';

export {
    useBoardFetchQuery,
    useBoardFetchDocQuery,
    useBoardAddDocMutation,
    useBoardDeleteDocMutation,
} from './hook/useBoard';
