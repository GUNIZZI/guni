import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { fbDb } from '@/shared/api/firebase';

import { CompModel } from '../model/type';

export const fetchComps = async (): Promise<CompModel[]> => {
    const postsCollection = collection(fbDb, 'HISTORY');
    const postsQuery = query(postsCollection, orderBy('endYear', 'desc'));
    const datas = await getDocs(postsQuery);

    const results = await Promise.all(
        datas.docs.map(async parentDoc => {
            const subCollectionRef = collection(fbDb, 'HISTORY', parentDoc.id, 'projects');
            const subDocsSnapshot = await getDocs(subCollectionRef);

            // 상위 문서와 하위 컬렉션 문서를 결합
            return {
                id: parentDoc.id,
                ...parentDoc.data(),
                projects: subDocsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
            } as CompModel;
        }),
    );

    return results;
};
