import { createSelector } from 'reselect';

const getCategoriesState = (state) => state.categories;

export const selectorAllCategories = createSelector(
  [getCategoriesState],
  (categoriesState) => categoriesState.categories
);

export const selectorCategoriesLoading = ({ categories }) => categories.isLoading;
