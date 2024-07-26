import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'Noto Sans KR', 'sans-serif'].join(','),
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ceff00',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    // 여기에 추가적인 테마 커스터마이징을 할 수 있습니다.
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#111',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                },
                ul: {
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '100% !important',
                    padding: '0 !important',
                },
            },
        },
    },
});
