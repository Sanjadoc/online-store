import { setCategories, setCategoriesLoading } from './categoriesSlice';

import { getProductCategories } from 'services/goodsServices';

export const fetchCategoriesList = () => async (dispatch) => {
  dispatch(setCategoriesLoading(true));
  try {
    const categoriesResponse = await getProductCategories();
    dispatch(setCategories(categoriesResponse.data));
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    dispatch(setCategories([]));
  } finally {
    dispatch(setCategoriesLoading(false));
  }
};
