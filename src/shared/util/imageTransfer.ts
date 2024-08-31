// MIME 타입 추출 함수
const getMimeType = (base64String: string): string => {
    const match = base64String.match(/^data:([^;]+);/);
    return match ? match[1] : 'application/octet-stream';
};

const base64ToFile = (base64String: string, filename: string): File => {
    // Base64 문자열에서 실제 데이터 부분 추출
    const [, dataString] = base64String.split(',');

    // Base64를 디코딩
    const binaryString = window.atob(dataString);

    // 바이너리 데이터를 Uint8Array로 변환
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i += 1) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    // Blob 생성
    const blob = new Blob([bytes], { type: getMimeType(base64String) });

    // File 객체 생성 및 반환
    return new File([blob], filename, { type: blob.type });
};

export { base64ToFile };
