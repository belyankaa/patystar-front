'use client'

import './Events.scss';
import Event from "@/components/event/Event";
import MainHeader from "@/layout/main-header/Main-header";

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