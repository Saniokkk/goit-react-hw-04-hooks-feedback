import PropTypes from 'prop-types';
import style from './Button.module.css';
import classNames from 'classnames';

export const Button = ({ name, handleBtn }) => {
  return (
    <button
      className={classNames(style.btn, style[name])}
      name={name}
      onClick={handleBtn}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleBtn: PropTypes.func.isRequired,
};
