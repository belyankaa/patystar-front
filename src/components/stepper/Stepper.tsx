'use client'

import styles from './Stepper.module.scss';
import React, {useEffect, useState} from "react";

const Stepper = ({steps, currentStep}) => {
    const [stepsArray, stepsArrayChange] = useState([]);

    useEffect(() => {
        let newArray = [];
        for (let i = 0; i < steps; i++) {
            if (currentStep >= i+1) newArray.push(1);
            else newArray.push(0);
        }
        stepsArrayChange(newArray);
    }, [steps, currentStep]);

    return (
        <div className={styles.stepper}>
            {stepsArray.map((item, index) =>
                <div className={styles.steps + ' ' + (item === 1 ? styles.activeStep : '')} key={index}></div>
            )}
        </div>
    );
};

export default Stepper;