import React from 'react';
import './Footer.scss';

import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="Footer">
            <NavLink to="/" caseSensitive className="link base">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.6847 18.8333L10.4833 28H4V16.4142L10.6134 9.80086L16 4.41421L21.7929 10.2071L28 16.4142V28H20.7042L16.5028 18.8333L15.5938 16.8499L14.6847 18.8333Z"
                        fill="#1F2833" stroke="#586F8D" stroke-width="2"/>
                </svg>
            </NavLink>
            <NavLink to="/search" caseSensitive className="link base">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="28.3136" y1="28.7279" x2="16.2928" y2="16.7071" stroke="#586F8D" stroke-width="2"/>
                    <circle cx="12.5" cy="12.5" r="8.5" fill="#1F2833" stroke="#586F8D" stroke-width="2"/>
                </svg>
            </NavLink>
            <NavLink to="/add-post" caseSensitive className="link accurate">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="24" height="24" rx="3" stroke="#586F8D" stroke-width="2"/>
                    <rect x="15" y="9" width="2" height="14" fill="#586F8D"/>
                    <rect x="9" y="17" width="2" height="14" transform="rotate(-90 9 17)" fill="#586F8D"/>
                </svg>
            </NavLink>
            <NavLink to="/participating-events" caseSensitive className="link base">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.09124 14.9056C4.67115 14.0129 5.05433 12.9486 5.94709 12.5285L21.633 5.14753C22.5918 4.69635 23.7349 5.10789 24.186 6.06673L24.5942 6.93413C24.6481 7.04869 24.6338 7.18372 24.557 7.2844C23.4092 8.7902 24.4324 10.9646 26.3243 11.0401C26.4508 11.0452 26.564 11.1202 26.6179 11.2348L27.026 12.1022C27.4772 13.061 27.0657 14.2041 26.1068 14.6553L10.4209 22.0362C9.52817 22.4563 8.46389 22.0731 8.0438 21.1804L7.61865 20.2768C7.56163 20.1557 7.58477 20.0119 7.67693 19.9148C9.13456 18.378 7.94574 15.8515 5.83251 15.995C5.6989 16.0041 5.57341 15.9303 5.51639 15.8091L5.09124 14.9056Z"
                        fill="#1F2833" stroke="#586F8D" stroke-width="2"/>
                    <path
                        d="M4.62964 18.8781C4.62964 17.8409 5.4705 17 6.50776 17H25.6296C26.7342 17 27.6296 17.8954 27.6296 19V20.0161C27.6296 20.1631 27.5465 20.2975 27.4149 20.363C25.6513 21.2419 25.6513 23.7581 27.4149 24.637C27.5465 24.7025 27.6296 24.8369 27.6296 24.9839V26C27.6296 27.1046 26.7342 28 25.6296 28H6.50776C5.4705 28 4.62964 27.1591 4.62964 26.1219V25.0808C4.62964 24.9232 4.72745 24.7823 4.87502 24.7271C6.93527 23.9571 6.93527 21.0429 4.87502 20.2729C4.72745 20.2177 4.62964 20.0768 4.62964 19.9192V18.8781Z"
                        fill="#1F2833" stroke="#586F8D" stroke-width="2"/>
                </svg>
            </NavLink>
            <NavLink to="/profile" caseSensitive className="link base">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="9" r="4" fill="#1F2833" stroke="#586F8D" stroke-width="2"/>
                    <path
                        d="M26 27.1779C26 27.7058 25.8263 27.9884 25.5364 28.2054C25.1815 28.471 24.5763 28.6869 23.6358 28.8222C22.209 29.0274 20.3751 29.0089 18.2236 28.9871C17.5157 28.9799 16.7735 28.9724 16 28.9724C15.2265 28.9724 14.4843 28.9799 13.7764 28.9871C11.6249 29.0089 9.79104 29.0274 8.36422 28.8222C7.42366 28.6869 6.81854 28.471 6.46361 28.2054C6.17372 27.9884 6 27.7058 6 27.1779C6 21.5416 10.4922 17 16 17C21.5078 17 26 21.5416 26 27.1779Z"
                        fill="#1F2833" stroke="#586F8D" stroke-width="2"/>
                </svg>
            </NavLink>
        </footer>
    );
};

export default Footer;