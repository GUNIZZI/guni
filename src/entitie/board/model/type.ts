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

export interface BoardContentPfProps extends BoardContentProps {
    pl?: number | null;
    design?: number | null;
    dev?: number | null;
    publish?: number | null;
    prjDate?: string | null;
    prjRange?: number | null;
    url?: string | null;
}

export interface BoardAddPostProps {
    title: string;
    content: string;
    docType: string;
    pl?: number;
    design?: number;
    dev?: number;
    publish?: number;
    prjDate?: string;
    prjRange?: number;
    url?: string;
}
