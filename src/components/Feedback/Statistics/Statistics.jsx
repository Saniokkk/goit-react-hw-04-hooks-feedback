import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import classNames from 'classnames';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const colorFeedback = () => {
    if (positivePercentage <= 33) {
      return 'bad';
    } else if (positivePercentage <= 66) {
      return 'neutral';
    } else {
      return 'positive';
    }
  };

  return (
    <ul className={style.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li className={classNames(style.result, style[colorFeedback()])}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
