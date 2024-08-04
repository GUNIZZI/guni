import { useContext } from 'react';

import { entitieAuthLogoutAsync, entitieAuthUseAuth } from '@/entitie/auth';
import { useUser } from '@/entitie/user/hook/useUser';
import { FeatureLoginContext } from '@/feature/auth';

import { userInfoStyle } from './UserInfo.css';

import { LockOutlined, LockPerson } from '@mui/icons-material';
import { Button } from '@mui/material';

const getUserName = (email: string | null): string => {
    switch (email) {
        case 'guest@gunizzi.com':
            return 'GUEST';
        default:
            return 'ADMIN';
    }
};

const UserInfo = () => {
    const { isLogined } = entitieAuthUseAuth();
    const { user } = useUser();
    const { handleLoginForm } = useContext(FeatureLoginContext);

    return (
        <div css={userInfoStyle}>
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
                {user && <span className="userName">{getUserName(user.email)}</span>}
            </Button>
        </div>
    );
};

export { UserInfo };
