import { useEffect, useMemo, useState } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { AuthUser } from '@/entitie/user/model/type';

export function useAuth() {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loginLoading, setLoginLoading] = useState(true);
    const isLogined = useMemo(() => !!user, [user]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, authUser => {
            if (authUser) {
                setUser({
                    email: authUser?.email,
                    role: authUser?.uid === import.meta.env.VITE_FB_ADMIN_UID ? 'ADMIN' : 'USER',
                } as AuthUser);
                setLoginLoading(false);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return { isLogined, loginLoading, user };
}
