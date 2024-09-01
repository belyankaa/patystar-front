'use client'

import styles from './Events.module.scss';
import Event from "@/components/event/Event";
import Topbar from "@/layout/topbar/Topbar";
import {EventsService} from "@/services/events.service";
import {useEffect, useState} from "react";

const Main = () => {
    const [events, eventsChange] = useState([]);

    const {mutateAsync: getEvents, isPending: isEventsLoading} = EventsService.useGetAllMutation();

    function getAllEvents() {
        getEvents(null).then(res => eventsChange(res));
    }

    useEffect(() => {
        getAllEvents();
    }, []);

    return (
        <div>
            <Topbar/>
            <div className={styles.events}>
                {events && events.map((event, index) =>
                    <div className={styles.event} key={index}>
                        <Event event={event}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;