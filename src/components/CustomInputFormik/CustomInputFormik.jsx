import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import { Button } from 'components/Button';

import styles from './CustomInputFormik.module.scss';

export const CustomInputFormik = ({ label, clearable = false, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleClearClick = () => {
    helpers.setValue('');
  };

  return (
    <div className={styles.fieldContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.inputError : styles.input}
      />
      {meta.touched && meta.error && <div className={styles.fieldError}>{meta.error}</div>}
      {clearable && (
        <Button className={styles.button} onClick={handleClearClick}>
          x
        </Button>
      )}
    </div>
  );
};

CustomInputFormik.propTypes = {
  label: PropTypes.string,
  clearable: PropTypes.bool
};
