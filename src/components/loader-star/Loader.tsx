'use client'

import styles from './Loader.module.scss';
import React from "react";

const LoaderStar = ({size = 32, fill = '#9E08FD'}) => {
    return (
        <div className={styles.spinner} style={{width: size + 'px', height: size + 'px'}}>
            <svg width={size} height={size} viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.5909 41.1818L17.1591 25.5568L3.94886 33.9375L0.539773 27.9716L14.4602 20.7273L0.539773 13.483L3.94886 7.51704L17.1591 15.8977L16.5909 0.272725H23.4091L22.8409 15.8977L36.0511 7.51704L39.4602 13.483L25.5398 20.7273L39.4602 27.9716L36.0511 33.9375L22.8409 25.5568L23.4091 41.1818H16.5909Z"
                    fill={fill}/>
            </svg>
        </div>
    );
};

export default LoaderStar;