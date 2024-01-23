import React from "react";
import styles from './FeedbackOpt.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={styles.btnContainer}>
            {options.map((option) => (
                <button key={option} className={styles.feedBtn} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};
