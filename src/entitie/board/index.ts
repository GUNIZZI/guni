export type { BoardContentProps } from './model/type';

export { getFilterData } from './util/filterData';

export { getImage, fetchDatas, fetchDoc, addPost, uploadFile } from './model/board';

export {
    useBoardFetchQuery,
    useBoardFetchDocQuery,
    useBoardAddDocMutation,
    useBoardDeleteDocMutation,
} from './hook/useBoard';
