import { SET_PRODUCT, CLEAR_PRODUCT, SET_PRODUCT_LOADING } from './types';

const initialState = {
  product: null,
  isLoading: false
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        isLoading: false,
        product: action.payload
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        isLoading: false,
        product: initialState.product
      };
    case SET_PRODUCT_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
