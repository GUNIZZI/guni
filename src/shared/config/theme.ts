import { NAV_PATH } from './navPath';

// import { VoiceOverOffOutlined } from '@mui/icons-material';
import { Theme as MuiTheme } from '@mui/material';
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
    breakpoints: {
        values: {
            xs: 0,
            sm: 720,
            md: 960, // 요 아래로 모바일
            lg: 1280,
            xl: 1920,
        },
    },
    spacing: (factor: number) => `${0.25 * factor}rem`,
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
            // eslint-disable-next-line no-shadow
            styleOverrides: (theme: MuiTheme) => ({
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
                'h1, h2, h3, h4, h5, h6': {
                    margin: 0,
                },
                '#root': {
                    display: 'flex',
                    minHeight: '100vh',
                },
                '.page': {
                    flex: '1 1',
                    minHeight: '100%',
                    padding: `${theme.spacing(0)} ${theme.spacing(16)}`,
                    boxSizing: 'border-box',

                    '.wrap': {
                        position: 'relative',
                        maxWidth: '1890px',
                        height: '100%',
                        margin: '0 auto',
                    },

                    [theme.breakpoints.up('xs')]: {
                        minHeight: `calc(100% - 8rem)`,
                        padding: `0 ${theme.spacing(3)} 0`,
                    },
                    [theme.breakpoints.up('sm')]: {
                        minHeight: `calc(100% - 8rem)`,
                        padding: `0 ${theme.spacing(5)} 0`,
                    },
                    [theme.breakpoints.up('md')]: {
                        padding: `${theme.spacing(5)} ${theme.spacing(25)} 0`,
                    },
                    [theme.breakpoints.up('lg')]: {
                        padding: `${theme.spacing(5)} ${theme.spacing(35)} 0`,
                    },
                    [theme.breakpoints.up('xl')]: {
                        padding: `${theme.spacing(5)} ${theme.spacing(40)} 0`,
                    },
                },
            }),
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    flex: '1 1',
                    flexDirection: 'column',
                    width: 'auto',
                    minHeight: '100vh',
                    maxWidth: '100% !important',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                    margin: 0,

                    '> .transitionWrap': {
                        display: 'flex',
                        flex: '1 1',

                        '> .transitionWrap': {
                            flex: '1 1',
                            display: 'flex',
                        },
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent', // 배경을 투명하게 설정
                    boxShadow: 'none', // 그림자 효과 제거
                    '&.MuiPaper-outlined': {
                        border: 'none', // outlined 변형의 경우 테두리 제거
                    },
                },
            },
            defaultProps: {
                elevation: 0, // 기본 elevation을 0으로 설정하여 그림자 효과 제거
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
        MuiSelect: {
            styleOverrides: {
                root: {
                    '&.MuiFilledInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.09)',
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        },
                    },
                    '&:before': {
                        borderBottom: 'none !important',
                    },
                    '&:after': {
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: 'none',
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.09)',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    },
                    '&:before': {
                        borderBottom: 'none !important',
                    },
                    '&:after': {
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: 'none',
                    },
                },
            },
        },
        MuiDialog: {
            defaultProps: {
                disableScrollLock: true,
            },
        },
        MuiModal: {
            defaultProps: {
                disableScrollLock: true,
            },
        },
        MuiPopover: {
            defaultProps: {
                disableScrollLock: true,
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#000',
                },
            },
            defaultProps: {
                disableScrollLock: true,
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.09)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        },
                    },
                },
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
        // MuiTabs: {
        //     styleOverrides: {
        //         indicator: {
        //             backgroundColor: '#ff0000', // 선택된 탭 아래의 indicator 색상
        //         },
        //     },
        // },
        // MuiTab: {
        //     styleOverrides: {
        //         root: {
        //             color: '#000', // 기본 탭 텍스트 색상
        //             '&.Mui-selected': {
        //                 color: '#ff0000', // 선택된 탭 텍스트 색상
        //             },
        //         },
        //     },
        // },
    },
});
