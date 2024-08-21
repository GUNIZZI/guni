import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { fbStorage } from '@/shared/api/firebase';

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

export { uploadFile };
