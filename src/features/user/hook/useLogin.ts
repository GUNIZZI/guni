import { signInWithEmailAndPassword } from 'firebase/auth';

import { UserLoginCredential } from '@/entities/user/model/User';
import { fbAuth } from '@/shared/api/firebase';
import { handleError } from '@/shared/error/errorMiddleware';

const useLogin = () => {
    const login = async ({ id, pw }: UserLoginCredential) => {
        try {
            const result = await signInWithEmailAndPassword(fbAuth, id, pw);
            return result;
        } catch (error) {
            handleError(error);
            throw Error(error as string);
        }
        // await signInWithEmailAndPassword(fbAuth, id, pw)
        //     .then(user => {
        //         console.log(user);
        //         return user;
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         throw Error(error);
        //     });
    };

    return { login };
};

export { useLogin };
