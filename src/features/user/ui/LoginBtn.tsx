import { useContext } from 'react';

import { LoginContext } from './LoginFormProvider';

import { Lock, LockOpen } from '@mui/icons-material';
import { Button } from '@mui/material';

const LoginBtn = () => {
    const { handleLoginForm } = useContext(LoginContext);

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
            onClick={handleLoginForm}
            title="Login"
        >
            <Lock sx={{ fontSize: '18px' }} />
        </Button>
    );
};

export default LoginBtn;
