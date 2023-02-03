import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Notification = ({ message }) => {
  return <p className={css.statisticValue}>{message}</p>;
};

export default Notification;

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
