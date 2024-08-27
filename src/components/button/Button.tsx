'use client'

import styles from './Button.module.scss';
import React from "react";
import LoaderStar from "@/components/loader-star/Loader";

const Button = ({isPending, disabled, onClick, text}) => {
    return (
        <button disabled={disabled} className={styles.customButton + ' button button-brand'}
                onClick={() => onClick()}>
            {!isPending && <span>{text}</span>}
            {isPending && <div className={styles.loader}>
                <LoaderStar size={28} fill="#F2F2F2"/>
            </div>}
        </button>
    );
};

export default Button;