import React from 'react';
import './Main-header.scss';

import {NavLink} from "react-router-dom";
import MessageIcon from "../../../components/message-icon/MessageIcon";


const MainHeader = () => {
    return (
        <header className="Header">
            <div className="logo">
                parti star
            </div>
            <NavLink to="/message" className="message">
                <MessageIcon/>
            </NavLink>
        </header>
    );
};

export default MainHeader;