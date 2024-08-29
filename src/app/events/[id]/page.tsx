'use client'

import './Event.scss';
import {EventsService} from "@/services/events.service";
import {useEffect, useState} from "react";

const Main = () => {
    const [event, eventChange] = useState([]);

    const {mutateAsync: getEvent, isPending: isEventLoading} = EventsService.useGetOneMutation();

    function getOneEvent() {
        const path = location.pathname.split('/');
        getEvent(+path[path.length - 1]).then(res => eventChange(res));
    }

    useEffect(() => {
        getOneEvent();
    }, []);

    return (
        <div className="MainPage">

        </div>
    );
};

export default Main;