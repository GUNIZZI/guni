import React from 'react';

import { Button, SvgIcon, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const XIcon: React.FC<SvgIconProps> = props => (
    <SvgIcon {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </SvgIcon>
);

const XButton = styled(Button)(({ theme }) => ({
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

interface XLoginButtonProps {
    onClick: () => void;
}

const XIconButton: React.FC<XLoginButtonProps> = ({ onClick }) => {
    return <XButton title="X 로그인" variant="contained" startIcon={<XIcon />} onClick={onClick} />;
};

export { XIconButton };
