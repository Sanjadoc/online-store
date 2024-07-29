import { getProductData } from 'services/goodsServices';
import { setProduct, setIsProductLoading } from './actions';

export const fetchProduct = (id) => async (dispatch) => {
  dispatch(setIsProductLoading(true));
  try {
    const productData = await getProductData(id);
    dispatch(setProduct(productData.data));
  } catch (error) {
    dispatch(setProduct(null));
  } finally {
    dispatch(setIsProductLoading(false));
  }
};
