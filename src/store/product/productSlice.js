import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  isLoading: false
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
      state.isLoading = false;
    },
    clearProduct(state) {
      state.product = null;
      state.isLoading = false;
    },
    setProductLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});

export const { setProduct, clearProduct, setProductLoading } = productSlice.actions;

export default productSlice;

export const selectorProduct = ({ product }) => product;

export const selectorProductLoading = ({ product }) => product.isLoading;
