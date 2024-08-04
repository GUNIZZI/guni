import { useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

export function useUser() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, authUser => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    return { user };
}
