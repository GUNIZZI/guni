export interface User {
    email: string;
}

export interface UserLoginCredential {
    id: string;
    pw: string;
}

export interface AuthUser extends User {
    role?: string;
}
