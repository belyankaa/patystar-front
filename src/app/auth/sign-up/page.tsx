'use client'

import React from 'react';
import SignUpPage from "@/components/sign-up-pages/Sign-up-page";
import {UserService} from "@/services/user.service";
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";

const SignUp = () => {
    const router = useRouter();

    const {isSuccess} = useQuery({
        queryKey: ['currentUser'],
        queryFn: async (): Promise<any> => await UserService.currentUser(),
        retry: false
    });

    if (isSuccess) router.push('/events');

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

    return (
        <div className="Sign-up">
            <SignUpPage onSubmit={(e) => signUp(e)} isLoginProcessing={isUserCreating || isLoginProcessing}/>
        </div>
    );
};

export default SignUp;