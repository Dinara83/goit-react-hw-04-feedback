import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Statistics/Notification';

import './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    setFeedback(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = feedback;
    const result = ((good / total) * 100).toFixed(2);
    return Number(result);
  };

  const options = Object.keys(feedback);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={`Statistics`}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={`There is no feedback`} />
        )}
      </Section>
    </>
  );
};

export default App;
