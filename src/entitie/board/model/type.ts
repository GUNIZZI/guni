export type BoardType = {
    type: 'LIST' | 'CARD' | 'IMAGE';
};

export type BoardQueryKey = {
    type: 'TECH' | 'LIFE' | 'PF';
};

interface PfTextfieldProps {
    text: string;
    percent?: number;
}
interface PfProps {
    pl?: PfTextfieldProps;
    design?: PfTextfieldProps;
    dev?: PfTextfieldProps;
    publish?: PfTextfieldProps;
    prjDate?: PfTextfieldProps;
    prjRange?: PfTextfieldProps;
    url?: PfTextfieldProps;
}
export interface BoardContentProps {
    id: string;
    date: string;
    name?: string;
    title?: string;
    content?: string;
    docType?: string;
    image?: string | null;
    commentCount?: number;
    info?: PfProps;
}
// export interface BoardContentPfProps extends BoardContentProps {}
export interface BoardAddPostProps {
    title: string;
    content: string;
    docType: string;
    info?: PfProps;
}
