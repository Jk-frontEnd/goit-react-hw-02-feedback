import React from "react";
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    );
}