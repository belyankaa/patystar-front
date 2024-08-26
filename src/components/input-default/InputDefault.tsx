'use client'

import './InputDefault.scss';

const InputDefault = ({placeholder ,value , onChange, type = 'text', error = false}) => {


    return (
        <div className="Input-default">
            <input className="input" type={type} placeholder=" " value={value} style={{borderColor: error ? '#F43463' : ''}}
                   onChange={(e) => onChange(e.target.value)}/>
            <label className="label">{placeholder}</label>
        </div>
    );
};

export default InputDefault;