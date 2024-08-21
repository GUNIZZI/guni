import {
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

import { UserLoginCredential } from '@/entitie/user';
import { fbAuth } from '@/shared/api/firebase';
import { handleError } from '@/shared/error/errorMiddleware';

const login = async ({ id, pw }: UserLoginCredential) => {
    try {
        const result = await signInWithEmailAndPassword(fbAuth, id, pw);
        return result;
    } catch (error) {
        handleError(error);
        throw Error(error as string);
    }
};

const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        signInWithPopup(fbAuth, provider);
    } catch (error) {
        handleError(error);
        throw Error(error as string);
    }
};

const loginWithGithub = async () => {
    try {
        const provider = new GithubAuthProvider();
        signInWithPopup(fbAuth, provider);
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

export { login, loginWithGoogle, loginWithGithub, logout };
