import React from 'react';
import './Main.scss';
import Event from "../../../components/event/Event";
import {NavLink} from "react-router-dom";
import MessageIcon from "../../../components/message-icon/MessageIcon";
import MainHeader from "../../layout/main-header/Main-header";

const Main = () => {

    const objectCount = [1, 2, 4, 5];

    return (
        <div className="MainPage">
            <MainHeader/>
            {objectCount.map((item, index) =>
                <div className="event" key={index}>
                    <Event/>
                </div>
            )}
        </div>
    );
};

export default Main;