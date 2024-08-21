import { uploadFile } from './uploadFile';

interface ClipboardEvent {
    clipboardData?: DataTransfer | null;
}

const clipboardImagePaste = async (event: ClipboardEvent): Promise<string | null> => {
    const items = event.clipboardData?.items;
    if (!items || items.length === 0) return null;

    const lastItem = items[items.length - 1];
    if (lastItem.kind === 'file') {
        const file = lastItem.getAsFile();
        if (!file) return null;

        try {
            const uploadResult = await uploadFile(file);
            if (uploadResult) {
                const imageMarkdown = `![${uploadResult.fileName}](${uploadResult.downloadURL})\n`;
                return imageMarkdown;
            }
        } catch (e) {
            console.error('Error uploading file:', e);
            throw e;
        }
    }

    return null;
};

export { clipboardImagePaste };
