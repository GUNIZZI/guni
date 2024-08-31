/**
 * HTML을 순수 텍스트로 변환하는 함수
 * @param html
 * @returns
 */
const stripHtml = (html: string): string => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
};

export { stripHtml };
