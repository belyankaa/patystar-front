'use client'

import styles from './Input.module.scss';
import {useEffect, useState} from "react";

const Input = ({
                   placeholder,
                   value,
                   onChange,
                   type = 'text',
                   error = false,
                   errorMessage,
                   counter = false,
                   maxLetters,
    areaHeight = 100
               }) => {
    const [letterCount, setLetterCount] = useState(0);
    const [input, setInput] = useState('');

    useEffect(() => {
        setLetterCount(value ? value.length : 0);
        setInput(value ?? '');
    }, []);

    function inputChange(inputValue: string) {
        if (counter && inputValue.length >= maxLetters) {
            setInput(inputValue.substring(0, maxLetters));
            console.log(inputValue.substring(0, maxLetters))
            onChange(inputValue.substring(0, maxLetters));
            setLetterCount(maxLetters);
            return;
        }

        setInput(inputValue);
        onChange(inputValue);
        setLetterCount(inputValue.length);
    }

    return (
        <div className={styles.InputDefault}>
            {(type === 'text' || type === 'password') &&
                <input className={'input ' + styles.defaultInput} type={type} placeholder=" "
                       value={input} style={{borderColor: error ? '#F43463' : ''}}
                       onChange={(e) => inputChange(e.target.value)}/>}
            {type === 'area' &&
                <textarea className={'input ' + styles.defaultInput}
                          placeholder=" " value={input}
                          style={{minHeight: areaHeight + 'px',borderColor: error ? '#F43463' : ''}}
                          onChange={(e) => inputChange(e.target.value)}/>}
            <label className={styles.defaultInputLabel}>{placeholder}</label>
            {error && <div className={styles.defaultInputError}>{errorMessage}</div>}
            {counter && <div className={styles.defaultInputCounter}>{letterCount}/{maxLetters}</div>}
        </div>
    );
};

export default Input;