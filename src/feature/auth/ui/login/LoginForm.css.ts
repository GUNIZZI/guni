import { NAV_PATH } from '@/shared/config/navPath';

import { Dialog, styled } from '@mui/material';

const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: '0 0 2em 2em',
        padding: theme.spacing(2, 3),
        margin: 0,
        background: '#000 !important',
        boxShadow: '0 0 80px rgba(255,255,255, 0.15)',
        overflow: 'visible',

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: `linear-gradient(90deg, ${NAV_PATH[0].color}, ${NAV_PATH[NAV_PATH.length - 1].color})`,
            borderRadius: '0 0 3em 3em',
        },

        '& .MuiFormControl-root': {
            marginLeft: 0,
            marginRight: 0,
        },
    },
}));

export { CustomDialog };
