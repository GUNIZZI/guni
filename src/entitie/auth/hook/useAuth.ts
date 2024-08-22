import { useEffect, useMemo, useState } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { AuthUser } from '@/entitie/user/model/type';

// guni - board;

export function useAuth() {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loginLoading, setLoginLoading] = useState(true);
    const isLogined = useMemo(() => !!user, [user]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async authUser => {
            if (authUser) {
                let userRole;
                if (authUser?.uid === import.meta.env.VITE_FB_ADMIN_UID) userRole = 'ADMIN';
                else if (authUser?.uid === import.meta.env.VITE_FB_GUEST_UID) userRole = 'GUEST';
                else userRole = 'USER';

                setUser({
                    uid: authUser.uid,
                    email: authUser?.email,
                    name: authUser?.displayName,
                    role: userRole,
                } as AuthUser);
            } else {
                setUser(null);
            }
            setLoginLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // useEffect(() => {

    // }, [user])

    return { isLogined, loginLoading, user };
}
