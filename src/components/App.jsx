import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification"; 

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleLeaveFeedback = (option) => {
        this.setState((prevState) => ({
            ...prevState,
            [option]: prevState[option] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;

        if (total === 0) {
            return 0;
        }

        const percentage = (good / total) * 100;
        const roundedPercentage = percentage.toFixed(2);

        return roundedPercentage;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
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
    }
}