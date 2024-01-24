import React from "react";
import styles from './Notification.module.css';

export const Notification = ({message}) => {
    return (
        <div>
            <p className={styles.message}>{message}</p>
        </div>
    );
}