/**
 * Hex -> RGB 컬러 변환
 * @param hex
 * @returns
 */
const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : {
              r: 0,
              g: 0,
              b: 0,
          };
};

/**
 * rgba형태의 css 문자열로 변환해서 반환
 * @param r
 * @param g
 * @param b
 * @param a
 * @returns
 */
const rgbToStr = (r: number, g: number, b: number, a: number = 1) => {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export { hexToRgb, rgbToStr };
