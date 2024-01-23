import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Stats/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notifiction/Notification"; 

export const App = () => {
    const [feedbackState, setFeedbackState] = React.useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleLeaveFeedback = (option) => {
        setFeedbackState((prevState) => ({
            ...prevState,
            [option]: prevState[option] + 1,
        }));
    };

    const countTotalFeedback = () => {
        const { good, neutral, bad } = feedbackState;
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        const { good } = feedbackState;

        if (total === 0) {
            return 0;
        }

        const percentage = (good / total) * 100;
        const roundedPercentage = percentage.toFixed(2);

        return roundedPercentage;
    };

    const { good, neutral, bad } = feedbackState;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const options = Object.keys(feedbackState);

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
            </Section>

            {total > 0 ? (
                <Section title="Statistics">
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
                </Section>
            ) : (
                <Notification message="There is no feedback" />
            )}
        </div>
    );
};
