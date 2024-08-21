export interface User {
    email: string;
    name?: string;
    uid?: string;
}

export interface UserLoginCredential {
    id: string;
    pw: string;
}

export interface AuthUser extends User {
    role?: string;
}
