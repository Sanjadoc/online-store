import { Form, Formik } from 'formik';
import { PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH } from 'constants';

import { Button } from 'components/Button';
import { CustomDropdownFormik } from 'components/CustomDropdownFormik';
import { CustomInputFormik } from 'components/CustomInputFormik';
import { DropdownCategories } from 'components/DropdownCategories';
import { FormikObserver } from 'components/FormikObserver';
import PropTypes from 'prop-types';
import { initialFiltersState } from 'store/cards/reducer';
import styles from './ProductFilters.module.scss';

const priceOptions = [
  { label: 'Price: Low to High', value: PRICE_LOW_TO_HIGH },
  { label: 'Price: High to Low', value: PRICE_HIGH_TO_LOW }
];

export const ProductFilters = ({ storeFiltersValues, onFiltersChange }) => {
  return (
    <Formik initialValues={storeFiltersValues}>
      {({ dirty, values, resetForm }) => {
        const handleClearFilters = () => {
          resetForm({ values: initialFiltersState });
        };
        return (
          <Form className={styles.filterContainer}>
            <CustomInputFormik
              name="searchTerm"
              type="text"
              placeholder="Search..."
              clearable={!!storeFiltersValues.searchTerm}
            />

            <CustomDropdownFormik name="sortPrice" options={priceOptions} />

            <DropdownCategories name="categoryFilter" />

            <Button
              disabled={!dirty}
              type="button"
              className={styles.clearBtn}
              onClick={handleClearFilters}>
              Clear
            </Button>

            <FormikObserver value={values} onChange={onFiltersChange} />
          </Form>
        );
      }}
    </Formik>
  );
};

ProductFilters.propTypes = {
  storeFiltersValues: PropTypes.shape({
    searchTerm: PropTypes.string.isRequired,
    sortPrice: PropTypes.string.isRequired,
    categoryFilter: PropTypes.string.isRequired
  }).isRequired,
  onFiltersChange: PropTypes.func.isRequired
};
