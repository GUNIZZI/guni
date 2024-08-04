import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { UserLoginCredential } from '@/entitie/user';
import { fbAuth } from '@/shared/api/firebase';
import { handleError } from '@/shared/error/errorMiddleware';

const login = async ({ id, pw }: UserLoginCredential) => {
    try {
        const result = await signInWithEmailAndPassword(fbAuth, id, pw);
        console.log('로그인 비지니스', result);
        return result;
    } catch (error) {
        handleError(error);
        throw Error(error as string);
    }
};

const logout = async () => {
    try {
        const result = await signOut(fbAuth);
        console.log('로그아웃 비지니스', result);
        return result;
    } catch (error) {
        handleError(error);
        throw Error(error as string);
    }
};

export { login, logout };
