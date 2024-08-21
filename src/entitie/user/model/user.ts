import { AuthUser } from './type';

const getUserName = ({ email, name, role }: AuthUser) => {
    if (role === 'ADMIN') return role;
    if (email === import.meta.env.VITE_FB_GUEST_ID) return 'GUEST';
    return name;
};

export { getUserName };
