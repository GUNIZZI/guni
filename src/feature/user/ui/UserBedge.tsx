import { useContext } from 'react';

import { Interpolation, Theme } from '@emotion/react';

import { LogoutAsync, useAuth } from '@/entitie/auth';
import { getUserName } from '@/entitie/user';
import { FeatureLoginContext } from '@/feature/auth';
import { LoaderCircle } from '@/shared/ui/loader';

import { style } from './UserBedge.css';

import { LockOutlined, LockPerson } from '@mui/icons-material';
import { Backdrop, Button } from '@mui/material';

const UserBedge = () => {
    const { isLogined, loginLoading, user } = useAuth();
    const { handleLoginForm } = useContext(FeatureLoginContext);

    return (
        <div css={style as Interpolation<Theme>}>
            <div style={{ position: 'relative' }}>
                <Button
                    color="secondary"
                    onClick={!isLogined ? handleLoginForm : LogoutAsync}
                    title={!isLogined ? '로그인' : '로그아웃'}
                >
                    {isLogined ? (
                        <LockPerson sx={{ fontSize: '18px' }} />
                    ) : (
                        <LockOutlined sx={{ fontSize: '18px' }} />
                    )}
                    {user?.email && <span className="userName">{getUserName(user)}</span>}
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

export { UserBedge };
