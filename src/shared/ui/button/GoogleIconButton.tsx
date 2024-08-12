import React from 'react';

import { Button, SvgIcon, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const GoogleIcon: React.FC<SvgIconProps> = props => (
    <SvgIcon {...props}>
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </SvgIcon>
);

const GoogleButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    width: '2rem',
    minWidth: 0,
    height: '2rem',
    padding: 0,
    textTransform: 'none',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
    color: theme.palette.text.primary,
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    '& .MuiButton-startIcon': {
        marginRight: theme.spacing(2),
    },
    '> .MuiButton-icon': {
        margin: 0,
    },
    '> .MuiTouchRipple-root': {
        width: '100%',
        height: '100%',
    },
}));

interface GoogleLoginButtonProps {
    onClick: () => void;
}

const GoogleIconButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
    return (
        <GoogleButton
            title="Google 로그인"
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={onClick}
        />
    );
};

export { GoogleIconButton };
