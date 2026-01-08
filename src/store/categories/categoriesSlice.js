import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: false
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCategoriesLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});

export const { setCategories, setCategoriesLoading } = categoriesSlice.actions;

export default categoriesSlice;

const getCategoriesState = (state) => state.categories;

export const selectorAllCategories = createSelector(
  [getCategoriesState],
  (categoriesState) => categoriesState.categories
);

export const selectorCategoriesLoading = ({ categories }) => categories.isLoading;
