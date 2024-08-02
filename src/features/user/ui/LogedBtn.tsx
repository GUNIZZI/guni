import { useContext } from 'react';

import { logout, useAuth } from '@/entities/auth';

import { UserContext } from './UserProvider';

import { LockOutlined, LockPerson } from '@mui/icons-material';
import { Button } from '@mui/material';

const LogedBtn = () => {
    const { isLogined } = useAuth();
    const { handleLoginForm } = useContext(UserContext);

    return (
        <Button
            sx={{
                position: 'fixed',
                top: '1em',
                right: '1em',
                width: '40px',
                minWidth: '0',
                height: '40px',
                padding: '0',
                borderRadius: '100px',
            }}
            color="secondary"
            onClick={!isLogined ? handleLoginForm : logout}
            title={!isLogined ? '로그인' : '로그아웃'}
        >
            {isLogined ? (
                <LockPerson sx={{ fontSize: '18px' }} />
            ) : (
                <LockOutlined sx={{ fontSize: '18px' }} />
            )}
        </Button>
    );
};

export { LogedBtn };
