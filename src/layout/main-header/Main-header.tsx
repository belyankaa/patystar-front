import React from 'react';
import './Main-header.scss';

import MessageIcon from "@/components/message-icon/MessageIcon";
import Link from "next/link";


const MainHeader = () => {
    return (
        <header className="Header">
            <div className="logo">
                parti star
            </div>
            <Link href="/public" className="message">
                <MessageIcon/>
            </Link>
        </header>
    );
};

export default MainHeader;