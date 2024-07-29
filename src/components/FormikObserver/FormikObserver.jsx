import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const FormikObserver = ({ value, onChange }) => {
  useEffect(() => {
    onChange(value);
  }, [Object.values(value).join(', '), onChange]);

  return null;
};

FormikObserver.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};
