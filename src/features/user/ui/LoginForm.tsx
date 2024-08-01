import React, { useContext, useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { fbAuth } from '@/shared/api/firebase';
import { GradientButton } from '@/shared/ui/button/GradientButton';

import { CustomDialog } from './LoginForm.css';
import { LoginContext } from './LoginFormProvider';

import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Typography,
    IconButton,
    InputAdornment,
} from '@mui/material';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { loginFormActive, setLoginFormActive } = useContext(LoginContext);

    const handleLogin = () => {
        signInWithEmailAndPassword(fbAuth, email, pw)
            .then(user => {
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {});
    };

    return (
        <CustomDialog
            open={loginFormActive}
            onClose={() => setLoginFormActive(false)}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    handleLogin();
                    // const formData = new FormData(event.currentTarget);
                    // const formJson = Object.fromEntries((formData as any).entries());
                    // const { email } = formJson;
                    // console.log(email);
                    // handleClose();
                    console.log('asdasdasd');
                },
            }}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="filled"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="Password"
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    variant="filled"
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Typography variant="caption" display="block" color="secondary" sx={{ my: 2 }}>
                    Guest는 GuestLogin을 이용하세요.
                </Typography>
            </DialogContent>
            <DialogActions sx={{ flexDirection: 'column' }}>
                <GradientButton type="submit" variant="contained" size="large">
                    Admin Login
                </GradientButton>
                <Button size="small" sx={{ mt: 2 }} /* onClick={() => setLoginFormActive(false)} */>
                    Guest Login
                </Button>
            </DialogActions>
        </CustomDialog>
    );
};

export { LoginForm };

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
