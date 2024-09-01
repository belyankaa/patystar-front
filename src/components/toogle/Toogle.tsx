'use client'

import styles from './Toogle.module.scss';
import React, {useEffect, useState} from "react";

const Toogle = ({active = false, setActive}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(active);
    }, []);

    function clickAction(status: boolean) {
        setIsActive(!status);
        setActive(!status);
    }

    return (
        <section className={styles.ToogleContainer + ' ' + (isActive ? styles.active : '')}
                 onClick={() => clickAction(isActive)}>
            <div className={styles.toogle}></div>
        </section>
    );
};

export default Toogle;