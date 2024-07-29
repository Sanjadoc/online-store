import { createSelector } from 'reselect';

const getProductState = (state) => state.product;
export const selectorProduct = createSelector([getProductState], (productState) => productState);

export const selectorProductLoading = ({ product }) => product.isLoading;
