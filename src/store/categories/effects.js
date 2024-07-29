import { getProductCategories } from 'services/goodsServices';
import { setAllCategories, setCategoriesLoading } from './actions';

export const fetchCategoriesList = () => async (dispatch) => {
  dispatch(setCategoriesLoading(true));
  try {
    const categoriesResponse = await getProductCategories();
    dispatch(setAllCategories(categoriesResponse.data));
  } catch (error) {
    dispatch(setAllCategories([]));
  } finally {
    dispatch(setCategoriesLoading(false));
  }
};
