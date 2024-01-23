import React from "react";
import styles from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={styles.statistics}>
            <p>Good: <span className={styles.state}>{good}</span></p>
            <p>Neutral: <span className={styles.state}>{neutral}</span></p>
            <p>Bad: <span className={styles.state}>{bad}</span></p>
            <p>Total: <span className={styles.state}>{total}</span></p>
            <p>Positive feedback: <span className={styles.state}>{positivePercentage}</span></p>
        </div>
    );
}
