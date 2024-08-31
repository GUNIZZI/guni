import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { fbDb, fbStorage } from '@/shared/api/firebase';
import { timestampConversion } from '@/shared/util';

import { BoardAddPostProps, BoardContentProps } from './type';

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
    const postsQuery = query(postsCollection, orderBy('date', 'desc'));
    const datas = await getDocs(postsQuery);

    return datas.docs.map(item => {
        const data = item.data();
        return {
            id: item.id,
            ...data,
            date: timestampConversion(data.date),
            title: data.title.trim(),
            content: data.content?.trim() || null,
            image: getImage(data.content || ''),
        } as BoardContentProps;
    }) as BoardContentProps[];
};

/**
 * 게시판 상세내용 패칭
 * @param brd firebase ID
 * @returns
 */
const fetchDoc = async (collectionName: string, seq: string) => {
    const docRef = doc(fbDb, collectionName, seq);
    const docData = await getDoc(docRef);
    const data = docData.data();
    if (data) {
        return {
            ...data,
            date: timestampConversion(data.date),
            title: data.title.trim(),
            content: data.content?.trim() || null,
            image: getImage(data.content || ''),
        } as BoardContentProps;
    }
    throw new Error('Document not found');
};

/**
 * 게시판 컨텐츠 등록
 * @param collectionName Firebase Collection 이름
 * @param docData 게시판 등록 내용
 * @returns
 */
const addPost = async (collectionName: string, docData: BoardAddPostProps) => {
    const postsCollection = collection(fbDb, collectionName);
    const docRef = await addDoc(postsCollection, {
        ...docData,
        date: serverTimestamp(),
    });
    return docRef;
};

/**
 * 게시판 컨텐츠 삭제
 * @param postId 게시판
 */
const deletePost = async (collectionName: string, seq: string) => {
    const docRef = doc(fbDb, collectionName, seq);
    await deleteDoc(docRef);
};

/**
 * 이미지 업로드
 */
interface UploadResult {
    fileName: string;
    downloadURL: string;
}

const uploadFile = async (file: File): Promise<UploadResult | null> => {
    try {
        const fileName = `${Date.now()}_${file.name}`;
        const fileRef = ref(fbStorage, `uploads/boardImg/${fileName}`);

        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);

        return { fileName, downloadURL };
    } catch (e) {
        console.error('Error uploading file:', e);
        return null;
    }
};

export { fetchDatas, fetchDoc, addPost, deletePost, uploadFile };
