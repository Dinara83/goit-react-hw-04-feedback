import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnBlock}>
      {options.map(name => (
        <button
          key={name}
          className={css.btn}
          type="button"
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
FeedbackOptions.prototype = {
  options: PropTypes.func.isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.string).isRequired,
};
