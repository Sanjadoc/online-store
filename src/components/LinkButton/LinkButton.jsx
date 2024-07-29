import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './LinkButton.module.scss';

export const LinkButton = ({ title, to }) => (
  <Link to={to} className={styles.submitBtnLink}>
    {title}
  </Link>
);

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};
