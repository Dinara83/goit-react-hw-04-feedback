import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <div className={css.blockStatistics}>
      <p className={css.statisticValue}>Good: {good}</p>
      <p className={css.statisticValue}>Neutral: {neutral}</p>
      <p className={css.statisticValue}>Bad: {bad}</p>
    </div>
    <div>
      <p className={css.statisticValue}>Total: {total}</p>
      <p className={css.statisticValue}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  </>
);

export default Statistics;

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
