import { format } from 'date-fns';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { BlogContentProps } from '@/entitie/blog';
import { fbDb } from '@/shared/api/firebase';

/**
 * content(본문) 내용내에 img태그중 첫번째 요소의 src주소 반환
 * @param content
 * @returns
 */
const getImage = (content: string) => {
    if (!content) return null;
    const regex: RegExp = /<img\s+[^>]*src="([^"]*)"[^>]*>/i;
    const match: RegExpMatchArray | null = content.match(regex);
    return match ? match[1] : null;
};

/**
 * 게시판 패칭
 * @returns
 */
const fetchDatas = async (collectionName: string) => {
    const postsCollection = collection(fbDb, collectionName);
    const datas = await getDocs(postsCollection);

    return datas.docs.map(item => {
        const data = item.data();
        return {
            id: item.id,
            ...data,
            date: format(data.date.toDate(), 'yyyy-MM-dd'),
            title: data.title.trim(),
            content: data.content?.trim() || null,
            image: getImage(data.content || ''),
        } as BlogContentProps;
    }) as BlogContentProps[];
};

/**
 * 게시판 상세내용 패칭
 * @param brd firebase ID
 * @returns
 */
const fetchDoc = async (collectionName: string, seq: string) => {
    const useSeq = seq.split('seq=')[1];
    const docRef = doc(fbDb, collectionName, useSeq);
    const docData = await getDoc(docRef);
    const data = docData.data();
    if (data) {
        return {
            ...data,
            date: format(data.date.toDate(), 'yyyy-MM-dd'),
            title: data.title.trim(),
            content: data.content?.trim() || null,
            image: getImage(data.content || ''),
        } as BlogContentProps;
    }
    throw new Error('Document not found');
};

export { fetchDatas, fetchDoc };
