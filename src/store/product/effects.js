import { setProduct, setProductLoading } from './productSlice';

import { getProductData } from 'services/goodsServices';

export const fetchProduct = (id) => async (dispatch) => {
  dispatch(setProductLoading(true));
  try {
    const productData = await getProductData(id);
    dispatch(setProduct(productData.data));
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    dispatch(setProduct(null));
  } finally {
    dispatch(setProductLoading(false));
  }
};
