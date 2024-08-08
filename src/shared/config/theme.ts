import { NAV_PATH } from './navPath';

import { createTheme } from '@mui/material/styles';

// 커스텀 컬러 적용을 위한 타입 확장
declare module '@mui/material/styles' {
    interface Palette {
        colors: string[];
    }
    interface PaletteOptions {
        colors?: string[];
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'Noto Sans KR', 'sans-serif'].join(','),
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#999999',
        },
        colors: NAV_PATH.map(item => item.color),
    },
    // 여기에 추가적인 테마 커스터마이징을 할 수 있습니다.
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#111',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                    '*': {
                        '&::-webkit-scrollbar': {
                            width: '8px',
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(155, 155, 155, 0.5)',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: 'rgba(155, 155, 155, 0.7)',
                        },
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent',
                    },
                },
                ul: {
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                },
                'h1, h2, h3, h4, h5, h6': {
                    margin: 0,
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '100% !important',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: 'transparent !important',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiFilledInput-underline:before': {
                        borderBottom: 'none !important', // 기본 밑줄 제거
                    },
                    '& .MuiFilledInput-underline:after': {
                        borderBottom: 'none', // 포커스 시 밑줄 제거
                    },
                    '& .MuiFilledInput-underline:hover:before': {
                        borderBottom: 'none', // 호버 시 밑줄 제거
                    },
                    '& .MuiFilledInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.06)', // filled 배경색 설정
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.09)', // 호버 시 배경색
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'rgba(255, 255, 255, 0.12)', // 포커스 시 배경색
                        },
                    },
                },
            },
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    '&.isError': {
                        // border: '1px solid red',
                        // background: '#fff',
                        // color: 'red',
                    },
                },
            },
        },
    },
});
