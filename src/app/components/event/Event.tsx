import React from 'react';
import './Event.scss';

const Event = () => {
    return (
        <div className="Event">
            <div className="photo"></div>
            <div className="title">Жескач тусовка</div>
            <div className="place-people">
                <div className="place">Рубцовск</div>
                <div className="people">
                    <div className="participate"></div>
                    <div className="count">15</div>
                    <div className="people-icon"></div>
                </div>
            </div>
            <div className="author-date">
                <div className="author">
                    <div className="image"></div>
                    <div className="name">belyankaa</div>
                </div>
                <div className="date">8 июня</div>
            </div>
        </div>
    );
};

export default Event;