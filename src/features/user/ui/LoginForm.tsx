import { useContext, useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { UserLoginCredential } from '@/entities/user/model/User';
import { setGlobalErrorHandler } from '@/shared/error/errorMiddleware';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';

import { CustomDialog } from './LoginForm.css';
import { LoginContext } from './LoginFormProvider';
import { useLogin } from '../hook/useLogin';

import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    IconButton,
    InputAdornment,
} from '@mui/material';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginFormActive, setLoginFormActive } = useContext(LoginContext);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm<UserLoginCredential>({
        mode: 'onChange',
    });
    const { login } = useLogin();

    const onSubmit: SubmitHandler<UserLoginCredential> = data => {
        login(data);

        // 여기에 로그인 로직을 구현하세요
        // setLoginFormActive(false);
    };

    const handleGuestLogin = async () => {
        login({
            id: import.meta.env.VITE_FB_GUEST_ID,
            pw: import.meta.env.VITE_FB_GUEST_PW,
        });
    };

    useEffect(() => {
        setGlobalErrorHandler(error => {
            console.log(error.code);
            if (error.code === 'auth/invalid-credential') {
                console.log('ID가 없거나, 비밀번호가 틀렸습니다.', { variant: 'error' });
            }
            // } else if (error.code === 'auth/user-not-found') {
            //     enqueueSnackbar('사용자를 찾을 수 없습니다.', { variant: 'error' });
            // } else {
            //     enqueueSnackbar('로그인 중 오류가 발생했습니다.', { variant: 'error' });
            // }
        });

        return () => setGlobalErrorHandler(null); // 컴포넌트 언마운트 시 핸들러 제거
    }, []);

    return (
        <CustomDialog
            open={loginFormActive}
            onClose={() => setLoginFormActive(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit(onSubmit),
            }}
        >
            <DialogTitle sx={{ margin: '1.4em 0 1em', fontSize: '2.2em' }}>Login</DialogTitle>
            <DialogContent>
                <CustomTextField<UserLoginCredential>
                    autoFocus
                    id="id"
                    label="ID"
                    type="email"
                    fullWidth
                    variant="filled"
                    register={register}
                    error={errors.id}
                    rules={{
                        required: 'ID는 필수입니다',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'ID는 이메일 형태이며, 입력한 아이디가 유효하지 않습니다.',
                        },
                    }}
                />
                <CustomTextField<UserLoginCredential>
                    margin="normal"
                    id="pw"
                    label="PW"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    variant="filled"
                    register={register}
                    error={errors.pw}
                    rules={{
                        required: '비밀번호는 필수입니다',
                    }}
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
                <GradientButton
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={!isValid || !isDirty}
                >
                    Admin Login
                </GradientButton>
                <Button size="small" sx={{ mt: 2 }} onClick={handleGuestLogin}>
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
