'use client'

import styles from './Topbar.module.scss';

import Link from "next/link";
import MessageIcon from "@/components/message-icon/MessageIcon";
import React from "react";


const Topbar = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.logo}>
            </div>
            <Link href="/public" className={styles.message}>
                <MessageIcon/>
            </Link>
        </header>
    );
};

export default Topbar;