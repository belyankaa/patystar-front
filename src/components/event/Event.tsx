import React from 'react';
import styles from './Event.module.scss';
import Link from "next/link";
import {Http} from "@/utils/httpUtils";

const Event = ({event}) => {
    return (
        <section className={styles.EventContainer}>
            <Link href={`users/${event.userId}`} className={styles.author}>
                <div className={styles.image} style={{backgroundImage: `url(${Http.staticPath}${event.userImage})`}}></div>
                <div>{event.username}</div>
            </Link>
            <Link href={`events/${event.id}`} className={styles.Event}>
                <div className={styles.photo} style={{backgroundImage: `url(${Http.eventPreview}/${event.photo})`}}></div>
                <div className={styles.title}>{event.title}</div>
                <div className={styles.placePeople}>
                    <div>{event.place}</div>
                    <div className={styles.people}>
                        <div className={styles.participate}></div>
                        <div className={styles.count}>{event.crowd}</div>
                        <div className={styles.peopleIcon}></div>
                    </div>
                </div>
                <div className={styles.date}>{event.date}</div>
            </Link>
        </section>
    );
};

export default Event;