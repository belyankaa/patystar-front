'use client'

import React from 'react';
import './SignUp.scss';
import SignUpPage from "@/components/sign-up-pages/sign-up-page";

const SignUp = () => {
    function signUp(data: any) {
        const {username, firstName, lastName, birthDay, password} = data;
        console.log({username, firstName, lastName, birthDay, password});
    }

    return (
        <div className="Sign-up">
            <SignUpPage onSubmit={(e) => signUp(e)}/>
        </div>
    );
};

export default SignUp;