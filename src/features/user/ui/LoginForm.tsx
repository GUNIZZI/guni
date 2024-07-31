import { useEffect, useRef } from 'react';

import { useLogin } from '../hook/useLogin';

const LoginForm = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const { loginFormActive, setloginFormActive } = useLogin();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setloginFormActive(prev => !prev);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [loginFormActive]);

    return (
        <div
            ref={formRef}
            style={{
                position: 'fixed',
                top: '1em',
                right: '1em',
                padding: '1em',
                background: 'rgba(255,255,255,0.2)',
            }}
        >
            <div>아이디 입력</div>
            <div>비밀번호 입력</div>
            <div>로그인</div>
            <div>게스트 로그인</div>
        </div>
    );
};

export { LoginForm };
