'use client'

import React, {useState} from 'react';
import styles from './Login.module.scss';
import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";
import Input from "@/components/input/Input";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Button from "@/components/button/Button";

const LoginPage = () => {
    const router = useRouter();

    const {isSuccess} = useQuery({
        queryKey: ['currentUser'],
        queryFn: async (): Promise<any> => await UserService.currentUser(),
        retry: false
    });

    if (isSuccess) router.push('/events');

    const [username, usernameChange] = useState('');
    const [password, passwordChange] = useState('');
    const [loginError, loginErrorChange] = useState(false);

    const {mutateAsync: login, isPending: isLoginPending} = UserService.useLoginMutation();

    function changeUsernameFn(e: string) {
        usernameChange(e);
        loginErrorChange(false);
    }

    function changePasswordFn(e: string) {
        passwordChange(e);
        loginErrorChange(false);
    }

    function submit() {
        if (!username || !password || isLoginPending) return;
        login({username, password}).then(res => {
            if (res.error) return loginErrorChange(true);

            loginErrorChange(false);
            UserService.set(res);
            router.push('/events');
        });
    }

    return (
        <div className={styles.Login}>
            <div className={styles.logo}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#101012"/>
                    <path
                        d="M46.5909 70.1818L47.1591 54.5568L33.9489 62.9375L30.5398 56.9716L44.4602 49.7273L30.5398 42.483L33.9489 36.517L47.1591 44.8977L46.5909 29.2727H53.4091L52.8409 44.8977L66.0511 36.517L69.4602 42.483L55.5398 49.7273L69.4602 56.9716L66.0511 62.9375L52.8409 54.5568L53.4091 70.1818H46.5909Z"
                        fill="#9E08FD"/>
                </svg>
            </div>
            <div className={styles.form}>
                <div className={styles.input}>
                    <Input value={username} onChange={(e: any) => changeUsernameFn(e)}
                                  error={loginError}
                                  placeholder="Имя пользователя"/>
                </div>
                <div className={styles.input}>
                    <Input value={password} onChange={(e: any) => changePasswordFn(e)} type="password"
                                  errorMessage="Неправильный логин или пароль" error={loginError}
                                  placeholder="Пароль"/>
                </div>
                <div className={styles.message}>
                    <div className={styles.forgotPass}>Забыли пароль?</div>
                </div>
                <div className={styles.button}>
                    <Button onClick={() => submit()} text="Войти" disabled={!username || !password || isLoginPending}
                            isPending={isLoginPending}/>
                </div>
            </div>
            <div className={styles.notRegistred}>
                Еще нет аккаунта? <Link href="/auth/sign-up">Зарегистрироваться</Link>
            </div>
        </div>
    );
};

export default LoginPage;