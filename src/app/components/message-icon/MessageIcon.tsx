import React from 'react';
import './MessageIcon.scss';

const MessageIcon = () => {
    return (
        <div className="Message-icon">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M36.2669 32.731C33.9927 34.4435 29.7782 35.6548 24.8151 35.9671C20.5396 36.2362 15.8451 35.8287
                    11.6058 34.5947C12.6915 33.7018 13.3613 32.6554 13.594 31.4445C13.9238 29.729 13.3166 27.9545 12.3477
                    26.2567C11.0439 22.8099 10.9406 17.2134 15.121 12.0677C17.9518 9.47787 21.9873 8.08067 26.025 8.09355C30.0837
                    8.1065 34.0346 9.54188 36.7051 12.4748C42.1371 18.4405 41.8885 27.4963 36.2669 32.731Z"
                    stroke="#F2F2F2" strokeWidth="2"/>
                <ellipse cx="19.2851" cy="21.7459" rx="1.72964" ry="1.74301" fill="#F2F2F2"/>
                <ellipse cx="25.3385" cy="21.7459" rx="1.72964" ry="1.74301" fill="#F2F2F2"/>
                <ellipse cx="31.3947" cy="21.7459" rx="1.72964" ry="1.74301" fill="#F2F2F2"/>
            </svg>
        </div>
    );
};

export default MessageIcon;