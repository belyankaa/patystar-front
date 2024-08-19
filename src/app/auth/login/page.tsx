'use client'

import React, {useState} from 'react';
import './Login.scss';

const Login = () => {
    const [login, loginChange] = useState('');
    const [password, passwordChange] = useState('');

    function setLoginValue(e: any) {
        loginChange(e.target.value);
    }
    function setPasswordValue(e: any) {
        passwordChange(e.target.value);
    }

    return (
        <div className="Login">
            {login}
            {password}
            <div className="logo">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#1F2833"/>
                    <path d="M46.5909 70.1818L47.1591 54.5568L33.9489 62.9375L30.5398 56.9716L44.4602 49.7273L30.5398 42.483L33.9489 36.517L47.1591 44.8977L46.5909 29.2727H53.4091L52.8409 44.8977L66.0511 36.517L69.4602 42.483L55.5398 49.7273L69.4602 56.9716L66.0511 62.9375L52.8409 54.5568L53.4091 70.1818H46.5909Z" fill="#9E08FD"/>
                </svg>
            </div>
            <div className="login__form">
                <input className="input" type="text" value={(login)} onChange={(e: any) => setLoginValue(e)}/>
                <input className="input" type="text" value={(password)} onChange={(e: any) => setPasswordValue(e)}/>
                <button>Войти</button>
            </div>
        </div>
    );
};

export default Login;