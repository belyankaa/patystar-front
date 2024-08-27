'use client'

import styles from './InputDefault.module.scss';

const InputDefault = ({placeholder ,value , onChange, type = 'text', error = false, errorMessage}) => {


    return (
        <div className={styles.InputDefault}>
            <input className={'input ' + styles.defaultInput} type={type} placeholder=" " value={value} style={{borderColor: error ? '#F43463' : ''}}
                   onChange={(e) => onChange(e.target.value)}/>
            <label className={styles.defaultInputLabel}>{placeholder}</label>
            {error && <div className={styles.defaultInputError}>{errorMessage}</div>}
        </div>
    );
};

export default InputDefault;