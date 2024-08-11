import { useContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';

import { entitieAuthLoginAsync } from '@/entitie/auth';
import { fbAuth } from '@/shared/api/firebase';
import { setGlobalErrorHandler } from '@/shared/error/errorMiddleware';
import { GoogleIconButton } from '@/shared/ui/button/GoogleIconButton';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { LoaderCircle } from '@/shared/ui/loader';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';

import { CustomDialog } from './LoginForm.css';
import { LoginContext } from './LoginProvider';

import type { UserLoginCredential } from '@/entitie/user';

import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    IconButton,
    InputAdornment,
    Snackbar,
    Alert,
    Backdrop,
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
    const [isSnackbarMsg, setIsSnackbarMsg] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async ({ id, pw }: UserLoginCredential) => {
        setIsLoading(true);
        try {
            await entitieAuthLoginAsync({ id, pw });
            setLoginFormActive(false);
        } catch (e) {
            // 비지니스(login)에서 처리
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit: SubmitHandler<UserLoginCredential> = data => {
        handleLogin(data);
    };

    const handleGuestLogin = async () => {
        handleLogin({
            id: import.meta.env.VITE_FB_GUEST_ID,
            pw: import.meta.env.VITE_FB_GUEST_PW,
        });
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(fbAuth, provider);
            console.log('result', result);
            //   setUser(result.user);
        } catch (error) {
            console.error('Error signing in with Google', error);
        }
    };

    useEffect(() => {
        setGlobalErrorHandler(error => {
            if (error.code === 'auth/invalid-credential') {
                setIsSnackbarMsg('ID가 없거나, 비밀번호가 틀렸습니다.');
            } else if (error.code === 'auth/too-many-requests') {
                setIsSnackbarMsg(
                    '로그인 시도가 많아 계정이 잠시 잠겼습니다. 잠시 후 다시 로그인 하세요.',
                );
            }
            //     enqueueSnackbar('사용자를 찾을 수 없습니다.', { variant: 'error' });
            // } else {
            //     enqueueSnackbar('로그인 중 오류가 발생했습니다.', { variant: 'error' });
            // }
        });

        return () => setGlobalErrorHandler(null); // 컴포넌트 언마운트 시 핸들러 제거
    }, []);

    return (
        <>
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
                <DialogActions sx={{ flexDirection: 'column' }}>
                    <GoogleIconButton onClick={handleGoogleLogin} />
                </DialogActions>
                <Backdrop sx={{ position: 'absolute', color: '#fff', zIndex: 1 }} open={isLoading}>
                    <LoaderCircle size="3em" color="#000" />
                </Backdrop>
            </CustomDialog>
            {/* <Snackbar
                open={!!isSnackbarMsg}
                autoHideDuration={3000}
                onClose={() => setIsSnackbarMsg(null)}
                message={isSnackbarMsg}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{ color: 'red' }}
                // action={action}
            > */}
            <Snackbar
                open={!!isSnackbarMsg}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setIsSnackbarMsg(null)}
            >
                <Alert
                    // onClose={handleCloseSnackbar}
                    // severity={snackbar.severity}
                    sx={{
                        width: '100%',
                        '& .MuiAlert-message': {
                            color: 'red',
                        },
                    }}
                >
                    {isSnackbarMsg}
                </Alert>
            </Snackbar>
        </>
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
