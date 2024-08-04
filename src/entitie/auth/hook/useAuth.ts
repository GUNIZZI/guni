import { useEffect, useMemo, useState } from 'react';

import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const isLogined = useMemo(() => {
        return !!user;
    }, [user]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, authUser => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    return { isLogined };
}
