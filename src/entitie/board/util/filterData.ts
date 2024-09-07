import { BoardContentProps } from '../model/type';

interface OwnProps {
    posts: BoardContentProps[] | undefined;
    tab: string | number;
}

const getFilterData = ({ posts, tab }: OwnProps): BoardContentProps[] | undefined => {
    if (!posts) return posts;
    // if (tab === '') return posts;
    // return posts.filter(item => item.docType === tab);
    return posts.filter(item => (tab as string).split(',').includes(item.docType as string));
};

export { getFilterData };
