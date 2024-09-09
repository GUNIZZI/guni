/**
 * HTML을 순수 텍스트로 변환하는 함수
 * @param html
 * @returns
 */
const stripHtml = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
};

export { stripHtml };
