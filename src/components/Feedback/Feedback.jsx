import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from './Notification';
import style from './Feedback.module.css';

export function FeedBack() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;

  const handleBtn = event => {
    const { name } = event.target;
    setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return good === 0 ? 0 : Math.floor((good / total) * 100);
  };

  return (
    <div className={style.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={state}
          onLeaveFeedback={handleBtn}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
