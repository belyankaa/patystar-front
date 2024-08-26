'use client'

import './Sign-up-page.scss';
import InputDefault from "@/components/input-default/InputDefault";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";

const SignUpPage = ({onSubmit}) => {
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

    const router = useRouter();

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


    const {refetch: checkUsername} = useQuery({
        queryKey: ['signIn'],
        queryFn: async (): Promise<any> => await UserService.checkUserName({username}),
        enabled: false,
        retry: false
    });

    function changeUsername(e: string) {
        checkUsername().then(res => console.log(res));
        usernameChange(e);
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
        // notPodhoditChange(true);
        passwordChange(e);
    }

    function changeRePass(e: string) {
        // notComparedChange(true);
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
            onSubmit({username, firstName, lastName, birthDay, password});
            return;
        }
        currentPageChange(prev => ++prev);
    }

    return (
        <div className="page">
            <div className="title">
                {currentPage === 1 && <div className="action" onClick={() => goBack()}>
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
                {(currentPage === 2 || currentPage === 3) && <div className="action" onClick={() => goBack()}>
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
                <div className="main-text">{currentPageText}</div>
                <div className="descr">{currentPageDescr}</div>
            </div>

            {currentPage === 1 && <div className="inputs">
                <div>
                    <InputDefault placeholder="Имя пользователя"
                                  value={username} onChange={(e: any) => changeUsername(e)}/>
                </div>

                <button className="button button-brand" disabled={!username || usernameError} onClick={() => goNext()}>Дальше</button>
            </div>}
            {currentPage === 2 && <div className="inputs">
                <div>
                    <InputDefault placeholder="Имя"
                                  value={firstName} onChange={(e: any) => changeFirstName(e)}/>
                </div>
                <div>
                    <InputDefault placeholder="Фамилия"
                                  value={lastName} onChange={(e: any) => changeLastName(e)}/>
                </div>
                <div>
                    <InputDefault placeholder="Дата рождения"
                                  value={birthDay} onChange={(e: any) => changeBirthDay(e)}/>
                </div>

                <button className="button button-brand" disabled={!firstName || !lastName || !birthDay} onClick={() => goNext()}>Дальше</button>
            </div>}
            {currentPage === 3 && <div className="inputs">
                <div>
                    <InputDefault placeholder="Пароль" type="password" error={notPodhodit}
                                  value={password} onChange={(e: any) => changePass(e)}/>
                    {notPodhodit && <div className="error">Пароль не подходит по требованиям</div>}
                </div>
                <div>
                    <InputDefault placeholder="Повторите пароль" type="password" error={notCompared && !notPodhodit}
                                  value={rePass} onChange={(e: any) => changeRePass(e)}/>
                    {notCompared && !notPodhodit && <div className="error">Пароли не совпадают</div>}
                </div>

                <button className="button button-brand" disabled={!password || !rePass || notPodhodit || notCompared} onClick={() => goNext()}>Зарегистрироваться</button>
            </div>}
        </div>
    )
};

export default SignUpPage;