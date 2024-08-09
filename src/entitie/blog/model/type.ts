export interface BlogContentProps {
    id: string;
    date: string;
    name?: string;
    title?: string;
    content?: string;
    image?: string | null;
}

export interface BlogAddPostProps {
    title: string;
    content: string;
    type: string;
}
