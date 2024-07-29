import PropTypes from 'prop-types';
import React from 'react';
import styles from './CustomDropdownFormik.module.scss';
import { useField } from 'formik';

export const CustomDropdownFormik = ({ defaultOption, ...props }) => {
  const [field] = useField(props.name);

  return (
    <select
      {...field}
      {...props}
      className={props.className || styles.dropdown}
      disabled={props.disabled}>
      {props.disabled ? (
        <option>Loading...</option>
      ) : (
        <>
          {defaultOption && <option value="">{defaultOption}</option>}
          {props.options?.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </>
      )}
    </select>
  );
};

CustomDropdownFormik.propTypes = {
  defaultOption: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }))
  ]).isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string
};
