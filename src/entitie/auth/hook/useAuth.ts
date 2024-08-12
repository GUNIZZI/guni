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
                    name: authUser?.displayName,
                    role:
                        authUser?.uid === import.meta.env.VITE_FB_ADMIN_UID
                            ? 'ADMIN'
                            : authUser?.email === import.meta.env.VITE_FB_GUEST_ID
                              ? 'GUEST'
                              : 'USER',
                } as AuthUser);
            } else {
                setUser(null);
            }
            setLoginLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { isLogined, loginLoading, user };
}
