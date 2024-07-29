import { actionCreator } from 'helpers/actionCreator';
import { SET_PRODUCT, CLEAR_PRODUCT, SET_PRODUCT_LOADING } from './types';

export const setProduct = actionCreator(SET_PRODUCT);
export const clearProduct = actionCreator(CLEAR_PRODUCT);
export const setIsProductLoading = actionCreator(SET_PRODUCT_LOADING);
