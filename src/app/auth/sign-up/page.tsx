'use client'

import React, {useEffect, useState} from 'react';
import {UserService} from "@/services/user.service";
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import styles from "./SignUp.module.scss";
import InputDefault from "@/components/input-default/InputDefault";
import Button from "@/components/button/Button";
import Stepper from "@/components/stepper/Stepper";

const SignUp = () => {
    const router = useRouter();

    const {isSuccess} = useQuery({
        queryKey: ['currentUser'],
        queryFn: async (): Promise<any> => await UserService.currentUser(),
        retry: false
    });

    if (isSuccess) router.push('/events');


    const passRegExp = /^(?=.*[A-Z]).{6,}$/;

    const [username, usernameChange] = useState('');
    const [firstName, firstNameChange] = useState('');
    const [lastName, lastNameChange] = useState('');
    const [birthDay, birthDayChange] = useState('');
    const [password, passwordChange] = useState('');
    const [rePass, rePassChange] = useState('');
    const [currentPage, currentPageChange] = useState(1);
    const [currentPageText, currentPageTextChange] = useState('');
    const [currentPageDescr, currentPageDescrChange] = useState('');
    const [usernameError, usernameErrorChange] = useState(false);
    const [notPodhodit, notPodhoditChange] = useState(false);
    const [notCompared, notComparedChange] = useState(false);

    const {mutateAsync: createUser, isPending: isUserCreating} = UserService.useSignUpMutation();
    const {mutateAsync: login, isPending: isLoginProcessing} = UserService.useLoginMutation();

    //todo Доделать дату и сделать показ ошибки.
    function signUp(data: any) {
        const {username, firstName, lastName, birthDay, password} = data;

        createUser({username, password}).then(res => {
            if (res.error) return;

            login({username, password}).then(res => {
                if (res.error) return;

                UserService.set(username);
                router.push('/events');
            })
        })
    }

    useEffect(() => {
        if (currentPage === 1) {
            currentPageTextChange('Имя пользователя');
            currentPageDescrChange('Придумайте имя пользователя для вашего аккаунта. Его можно будет изменить позже.');
        } else if (currentPage === 2) {
            currentPageTextChange('Личные данные');
            currentPageDescrChange('');
        } else if (currentPage === 3) {
            currentPageTextChange('Пароль');
            currentPageDescrChange('Пароль должен состоять минимум из 6 символов и содержать хотя бы одну букву верхнего регистра');
        }
    }, [currentPage]);

    const {mutateAsync: checkUserName, isPending: isUsernameChecking} = UserService.useCheckUserNameMutation();

    function changeUsername(e: string) {
        usernameChange(e);

        if (e.length > 0)
            checkUserName(e).then(res => usernameErrorChange(res.error));
    }

    function changeFirstName(e: string) {
        firstNameChange(e);
    }

    function changeLastName(e: string) {
        lastNameChange(e);
    }

    function changeBirthDay(e: string) {
        birthDayChange(e);
    }

    function changePass(e: string) {
        const isPodhodit = passRegExp.test(e);
        notPodhoditChange(!isPodhodit);
        notComparedChange(rePass !== e);
        passwordChange(e);
    }

    function changeRePass(e: string) {
        notComparedChange(password !== e);
        rePassChange(e);
    }

    function goBack() {
        if (currentPage === 1) {
            router.push('/auth/login');
            return;
        }
        currentPageChange(prev => --prev);
    }

    function goNext() {
        if (currentPage === 3) {
            signUp({username, firstName, lastName, birthDay, password});
            return;
        }
        currentPageChange(prev => ++prev);
    }

    return (
        <div className={styles.signUpPages}>
            <div className={styles.title}>
                {currentPage === 1 && <div className={styles.action} onClick={() => goBack()}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_26_14)">
                            <rect x="2.12134" y="0.00012207" width="12.3238" height="3" rx="1.5"
                                  transform="rotate(45 2.12134 0.00012207)" fill="#F2F2F2"/>
                            <rect x="13.6279" y="11.5068" width="12.0114" height="3" rx="1.5"
                                  transform="rotate(45 13.6279 11.5068)" fill="#F2F2F2"/>
                            <rect x="0.121338" y="20" width="28.2842" height="3" rx="1.5"
                                  transform="rotate(-45 0.121338 20)" fill="#F2F2F2"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_26_14">
                                <rect width="22.2426" height="22.1214" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>}
                {(currentPage === 2 || currentPage === 3) && <div className={styles.action} onClick={() => goBack()}>
                    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_26_27)">
                            <path
                                d="M1.06066 9.54589C0.474874 8.9601 0.474874 8.01036 1.06066 7.42457L7.42462 1.06061C8.01041 0.474822 8.96016 0.474822 9.54594 1.06061C10.1317 1.64639 10.1317 2.59614 9.54594 3.18193L3.18198 9.54589C2.59619 10.1317 1.64645 10.1317 1.06066 9.54589Z"
                                fill="#F2F2F2"/>
                            <rect x="2.12134" y="10" width="12" height="3" rx="1.5"
                                  transform="rotate(45 2.12134 10)" fill="#F2F2F2"/>
                            <path
                                d="M5 10.5C5 9.67157 5.67157 9 6.5 9L26.5 9C27.3284 9 28 9.67157 28 10.5C28 11.3284 27.3284 12 26.5 12L6.5 12C5.67157 12 5 11.3284 5 10.5Z"
                                fill="#F2F2F2"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_26_27">
                                <rect width="28" height="20.6066" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>}
                <div className={styles.mainText}>{currentPageText}</div>
                <div className={styles.descr}>{currentPageDescr}</div>
            </div>

            {currentPage === 1 && <div className={styles.inputs}>
                <div className={styles.input}>
                    <InputDefault placeholder="Имя пользователя" error={usernameError}
                                  errorMessage="Имя пользователя уже занято"
                                  value={username} onChange={(e: any) => changeUsername(e)}/>
                </div>

                <div className={styles.button}>
                    <Button disabled={!username || usernameError || isUsernameChecking} isPending={isUsernameChecking}
                            onClick={() => goNext()} text="Дальше"/>
                </div>
            </div>}
            {currentPage === 2 && <div className={styles.inputs}>
                <div className={styles.input}>
                    <InputDefault placeholder="Имя"
                                  value={firstName} onChange={(e: any) => changeFirstName(e)}/>
                </div>
                <div className={styles.input}>
                    <InputDefault placeholder="Фамилия"
                                  value={lastName} onChange={(e: any) => changeLastName(e)}/>
                </div>
                <div className={styles.input}>
                    <InputDefault placeholder="Дата рождения"
                                  value={birthDay} onChange={(e: any) => changeBirthDay(e)}/>
                </div>

                <div className={styles.button}>
                    <Button disabled={!firstName || !lastName || !birthDay} onClick={() => goNext()} text="Дальше"/>
                </div>
            </div>}
            {currentPage === 3 && <div className={styles.inputs}>
                <div className={styles.input}>
                    <InputDefault placeholder="Пароль" type="password" error={notPodhodit}
                                  errorMessage="Пароль не подходит по требованиям"
                                  value={password} onChange={(e: any) => changePass(e)}/>
                </div>
                <div className={styles.input}>
                    <InputDefault placeholder="Повторите пароль" type="password" error={notCompared && !notPodhodit}
                                  errorMessage="Пароли не совпадают"
                                  value={rePass} onChange={(e: any) => changeRePass(e)}/>
                </div>

                <div className={styles.button}>
                    <Button disabled={!password || !rePass || notPodhodit || notCompared || isUserCreating || isLoginProcessing}
                            onClick={() => goNext()} text="Зарегистрироваться" isPending={isUserCreating || isLoginProcessing}/>
                </div>
            </div>}

            <div className={styles.stepperBlock}>
                <Stepper steps={3} currentStep={currentPage}/>
            </div>
        </div>
    )
};

export default SignUp;