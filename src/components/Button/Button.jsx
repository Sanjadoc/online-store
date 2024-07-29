import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = ({
  title,
  type = 'button',
  onClick,
  disabled = false,
  className,
  children
}) => {
  const buttonClass = `${styles.btn} ${className || ''}`;

  return (
    <button type={type} disabled={disabled} className={buttonClass} onClick={onClick}>
      {title || children}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};
