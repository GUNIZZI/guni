import React from 'react';

import { Button, SvgIcon, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const FacebookIcon: React.FC<SvgIconProps> = props => (
    <SvgIcon {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </SvgIcon>
);

const FacebookButton = styled(Button)(({ theme }) => ({
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

interface FacebookLoginButtonProps {
    onClick: () => void;
}

const FacebookIconButton: React.FC<FacebookLoginButtonProps> = ({ onClick }) => {
    return (
        <FacebookButton
            title="Facebook 로그인"
            variant="contained"
            startIcon={<FacebookIcon />}
            onClick={onClick}
        />
    );
};

export { FacebookIconButton };
