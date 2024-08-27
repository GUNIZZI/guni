export type BoardType = {
    type: 'LIST' | 'CARD' | 'IMAGE';
};

export type BoardQueryKey = {
    type: 'TECH' | 'LIFE' | 'PF';
};

export interface BoardContentProps {
    id: string;
    date: string;
    name?: string;
    title?: string;
    content?: string;
    docType?: string;
    image?: string | null;
    commentCount?: number;
}

export interface BoardAddPostProps {
    title: string;
    content: string;
    docType: string;
}
