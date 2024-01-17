import React from "react";
import styles from './feedbackOpt.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        className={styles.btnContainer}>
        {options.map((option) => (
            <button key={option} className={styles.feedBtn} onClick={() => onLeaveFeedback(option)}>
                {option}
            </button>
        ))}
    </div>
    );
}