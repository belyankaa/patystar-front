'use client'

import React, {useEffect, useState} from 'react';
import './Login.scss';
import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";
import InputDefault from "@/components/input-default/InputDefault";
import {useRouter} from "next/navigation";
import Link from "next/link";

const Login = () => {
    const [username, usernameChange] = useState('');
    const [password, passwordChange] = useState('');
    const [loginError, loginErrorChange] = useState(false);

    const router = useRouter();

    const {isFetching: loginLoading, refetch: loginRefetch} = useQuery({
        queryKey: ['signIn'],
        queryFn: async (): Promise<any> => await UserService.login({username, password}),
        enabled: false,
        retry: false
    });

    const {isSuccess, refetch: currentUserRefetch} = useQuery({
        queryKey: ['currentUser'],
        queryFn: async (): Promise<any> => await UserService.currentUser(),
        enabled: false,
        retry: false
    });

    useEffect(() => {
        currentUserRefetch().then(res => {
            if (res.isSuccess) router.push('/events');
        })
    }, []);


    function changeUsernameFn(e: string) {
        usernameChange(e);
        loginErrorChange(false);
    }

    function changePasswordFn(e: string) {
        passwordChange(e);
        loginErrorChange(false);
    }

    function submit() {
        if (!username || !password || loginLoading) return;
        loginRefetch().then(res => {
            if (res.isSuccess) {
                if (res.data.error) return loginErrorChange(true);

                loginErrorChange(false);
                UserService.set(res.data.username);
                router.push('/events');
            }
        });
    }

    return (
        <div className="Login">
            <div className="logo">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#1F2833"/>
                    <path
                        d="M46.5909 70.1818L47.1591 54.5568L33.9489 62.9375L30.5398 56.9716L44.4602 49.7273L30.5398 42.483L33.9489 36.517L47.1591 44.8977L46.5909 29.2727H53.4091L52.8409 44.8977L66.0511 36.517L69.4602 42.483L55.5398 49.7273L69.4602 56.9716L66.0511 62.9375L52.8409 54.5568L53.4091 70.1818H46.5909Z"
                        fill="#9E08FD"/>
                </svg>
            </div>
            <div className="form">
                <InputDefault value={username} onChange={(e: any) => changeUsernameFn(e)}
                              placeholder="Имя пользователя"/>
                <InputDefault value={password} onChange={(e: any) => changePasswordFn(e)} type="password"
                              placeholder="Пароль"/>
                <div className="message">
                    <div className="error">
                        <span hidden={!loginError}>Неправильный логин или пароль</span>
                    </div>
                    <div className="forgot-pass">Забыли пароль?</div>
                </div>
                <button disabled={!username || !password} className="button button-brand" onClick={() => submit()}>
                    <span hidden={loginLoading}>Войти</span>
                    <span hidden={!loginLoading}>loading...</span>
                </button>
            </div>
            <div className="not-registred">
                Еще нет аккаунта? <Link href="/auth/sign-up">Зарегистрироваться</Link>
            </div>
        </div>
    );
};

export default Login;