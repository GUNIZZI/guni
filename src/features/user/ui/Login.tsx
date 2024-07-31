import { LoginForm } from './LoginForm';
import { useLogin } from '../hook/useLogin';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Button } from '@mui/material';

const Login = () => {
    const { loginFormActive, handleLoginForm } = useLogin();

    console.log('loginFormActive', loginFormActive);

    if (!loginFormActive)
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
            >
                <LockOpenIcon sx={{ fontSize: '18px' }} />
            </Button>
        );

    return <LoginForm />;
};

export { Login };

// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { fbAuth } from '@/shared/api/firebase';
// const dummy = {
//     id: 'h2dlhs@nate.com',
//     pw: 'evezzi2235',
// };
// signInWithEmailAndPassword(fbAuth, dummy.id, dummy.pw)
// .then(user => {
//     console.log(user);
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() => {
// });
