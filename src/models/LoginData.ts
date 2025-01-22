import { FormEvent } from 'react';

interface LoginData {
    email: string;
    setEmail: (email: string) => void;

    password: string;
    setPassword: (password: string) => void;

    // TODO: Probably we could get by without using event.
    // but that would require not using form html tag.
    handleLogin: (event: FormEvent) => void;

    clearAll: () => void;
}

export default LoginData;
