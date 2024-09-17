import {
    collection,
    getDocs,
    orderBy,
    query,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
} from 'firebase/firestore';

import { fbDb } from '@/shared/api/firebase';

import { CompModel, CompUpdateRequestModel, ProjectModel } from '../model/type';

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
                projects: subDocsSnapshot.docs.map(docItem => ({
                    id: docItem.id,
                    ...docItem.data(),
                })),
            } as CompModel;
        }),
    );

    return results;
};

export const addComp = async (docData: CompUpdateRequestModel) => {
    const fbCollection = collection(fbDb, 'HISTORY');
    const datas = await addDoc(fbCollection, docData);

    return datas;
};

export const updateComps = async (docData: CompUpdateRequestModel) => {
    if (docData.id === undefined) throw new Error('id is required');

    const docRef = doc(fbDb, 'HISTORY', docData.id);
    const datas = await setDoc(docRef, {
        name: docData.name,
        startYear: docData.startYear,
        endYear: docData.endYear,
        inOffice: docData.inOffice,
    });

    return datas;
};

export const deleteComp = async (docData: CompUpdateRequestModel) => {
    if (docData.id === undefined) throw new Error('id is required');

    const docRef = doc(fbDb, 'HISTORY', docData.id);
    const datas = await deleteDoc(docRef);
    return datas;
};

export const addProject = async (docData: ProjectModel) => {
    const fbCollection = collection(fbDb, `HISTORY/${docData.compId}/projects`);
    const datas = await addDoc(fbCollection, docData);

    return datas;
};
export const updateProject = async (docData: ProjectModel) => {
    if (docData.id === undefined) throw new Error('id is required');

    const docRef = doc(fbDb, `HISTORY/${docData.compId}/projects`, docData.id);
    const datas = await setDoc(docRef, {
        name: docData.name,
        date: docData.date,
        part: docData.part,
    });

    return datas;
};
export const deleteProject = async (docData: ProjectModel) => {
    if (docData.id === undefined) throw new Error('id is required');

    const fbCollection = doc(fbDb, `HISTORY/${docData.compId}/projects`, docData.id);
    const datas = await deleteDoc(fbCollection);
    return datas;
};
