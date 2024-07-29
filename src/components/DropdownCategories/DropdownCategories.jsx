import { selectorAllCategories, selectorCategoriesLoading } from 'store/categories/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { CustomDropdownFormik } from 'components/CustomDropdownFormik';
import PropTypes from 'prop-types';
import { fetchCategoriesList } from 'store/categories/effects';
import { useEffect } from 'react';

export const DropdownCategories = ({ name }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectorAllCategories);
  const isCategoriesLoading = useSelector(selectorCategoriesLoading);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategoriesList());
    }
  }, [categories.length, dispatch]);

  const categoryOptions = categories.map((category) => ({
    value: category.slug,
    label: category.name
  }));

  return (
    <CustomDropdownFormik
      name={name}
      defaultOption="All categories"
      options={categoryOptions}
      disabled={isCategoriesLoading}
    />
  );
};

DropdownCategories.propTypes = {
  name: PropTypes.string.isRequired
};
