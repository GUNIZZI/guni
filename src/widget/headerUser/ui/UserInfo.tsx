import { useContext } from 'react';

import { entitieAuthLogoutAsync, useAuth } from '@/entitie/auth';
import { FeatureLoginContext } from '@/feature/auth';
import { LoaderCircle } from '@/shared/ui/loader';

import { userInfoStyle } from './UserInfo.css';

import { LockOutlined, LockPerson } from '@mui/icons-material';
import { Backdrop, Button } from '@mui/material';

const getUserName = (email: string | null): string => {
    switch (email) {
        case 'guest@gunizzi.com':
            return 'GUEST';
        default:
            return 'ADMIN';
    }
};

const UserInfo = () => {
    const { isLogined, loginLoading, user } = useAuth();
    const { handleLoginForm } = useContext(FeatureLoginContext);

    return (
        <div css={userInfoStyle}>
            <div style={{ position: 'relative' }}>
                <Button
                    color="secondary"
                    onClick={!isLogined ? handleLoginForm : entitieAuthLogoutAsync}
                    title={!isLogined ? '로그인' : '로그아웃'}
                >
                    {isLogined ? (
                        <LockPerson sx={{ fontSize: '18px' }} />
                    ) : (
                        <LockOutlined sx={{ fontSize: '18px' }} />
                    )}
                    {user?.email && <span className="userName">{getUserName(user.email)}</span>}
                </Button>
                <Backdrop
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100$',
                        color: '#fff',
                        zIndex: 1,
                    }}
                    open={loginLoading}
                >
                    <LoaderCircle size="1.5em" color="#000" />
                </Backdrop>
            </div>
        </div>
    );
};

export { UserInfo };
