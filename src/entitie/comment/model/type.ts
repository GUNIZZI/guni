import { Timestamp } from 'firebase/firestore';

export interface BoardCommentProps {
    id: string;
    content: string;
    authorId: string;
    authorName: string;
    date: Timestamp;
}
