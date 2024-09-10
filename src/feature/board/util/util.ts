import imageCompression from 'browser-image-compression';

import { uploadFile } from '@/entitie/board';
import { BoardAddPostProps } from '@/entitie/board/model/type';
import { base64ToFile } from '@/shared/util';

/**
 * 에디터 데이터에서 img태그를 찾아 blob으로 되어 잇으면 firebase에 업로드 후 path로 변경 후 전달
 * @param data 태그 문자열 데이터
 * @returns 태그 문자열 데이터
 */
interface UploadPromise {
    success: boolean;
    imgBlock: HTMLImageElement;
    result?: {
        fileName: string;
        downloadURL: string;
    } | null;
    e?: unknown;
}
const getImageSrcTransfer = async (data: BoardAddPostProps) => {
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = data.content.trim();
    const imgBlocks = Array.from(tmpDiv.querySelectorAll('img'));
    const uploadPromises: Promise<UploadPromise>[] = imgBlocks.map(
        async (imgBlock): Promise<UploadPromise> => {
            if (imgBlock.src.startsWith('data:image/')) {
                const options = {
                    maxSizeMB: 1, // 최대 파일 크기를 1MB로 설정
                    maxWidthOrHeight: 1440, // 최대 너비 또는 높이를 1024px로 설정
                    useWebWorker: true, // 웹 워커 사용
                };

                try {
                    const imgFile = base64ToFile(
                        imgBlock.src,
                        `img_${new Date().getTime()}_${Math.round(Math.random() * 99999999999)}`,
                    );
                    const compressedFile = await imageCompression(imgFile, options);
                    const result = await uploadFile(compressedFile);
                    if (result) imgBlock.setAttribute('src', result.downloadURL);
                    return { success: true, imgBlock, result };
                } catch (e) {
                    // 에러
                    console.log(e);
                    return { success: false, imgBlock, e };
                }
            }
            return { success: true, imgBlock };
        },
    );
    await Promise.all(uploadPromises);
    return tmpDiv.innerHTML;
};

/**
 * 포트폴리오 컨텐츠 지정 데이터 -> 보기 편한 값으로 변경
 */
interface PortfolioItemType {
    title?: string;
    text?: string;
    percentage?: string; // value를 객체 형태로 구조화
}
interface PortfolioItemProps {
    Pl?: PortfolioItemType;
    Des?: PortfolioItemType;
    Dev?: PortfolioItemType;
    Pub?: PortfolioItemType;
    Pd?: PortfolioItemType;
    Range?: PortfolioItemType;
    URL?: PortfolioItemType;
}
const getKeyTitle = (key: string) => {
    const map: Record<string, string> = {
        pl: 'PL',
        des: 'Design',
        dev: 'Dev',
        pub: 'Publish',
        pd: 'Date',
        range: 'Range',
        url: 'URL',
    };
    return map[key] || '';
};
const extractInfo = (text: string): PortfolioItemProps => {
    const regex =
        /(Pl\.|Des\.|Dev\.|Pub\.|Pd\.|Range\.|URL\.)\s*(.*?)(?=(Pl\.|Des\.|Dev\.|Pub\.|Pd\.|Range\.|URL\.)|$)/g;

    const result: PortfolioItemProps = {};
    let match: RegExpExecArray | null = regex.exec(text);

    while (match !== null) {
        const rawKey = match[1].replace('.', '').toLowerCase(); // 소문자로 변환
        const key = (rawKey.charAt(0).toUpperCase() + rawKey.slice(1)) as keyof PortfolioItemProps; // 대문자로 시작하는 형식으로 변환
        const value = match[2].trim();

        // 퍼센트 값을 추출하는 정규식 (괄호 제외)
        const percentageMatch = value.match(/(\d+)%/g) || []; // 퍼센트 값들만 추출
        const cleanedPercentages = percentageMatch.map(p => p.replace(/[()]/g, '').trim())[0] || ''; // 괄호 제거 및 트림
        const cleanedText = value.replace(/\(\d+%\)/g, '').trim(); // 텍스트에서 "(숫자%)" 형태 제거 후 추출

        // 객체 형태로 저장
        result[key] = {
            title: getKeyTitle(rawKey),
            text: cleanedText, // 퍼센트 값을 제거한 텍스트
            percentage: cleanedPercentages, // 괄호가 제거된 퍼센트 값
        };

        match = regex.exec(text);
    }

    return result;
};

export { getImageSrcTransfer, extractInfo };
