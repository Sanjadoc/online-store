import { actionCreator } from 'helpers/actionCreator';
import { SET_CATEGORIES, SET_CATEGORIES_LOADING } from './types';

export const setAllCategories = actionCreator(SET_CATEGORIES);
export const setCategoriesLoading = actionCreator(SET_CATEGORIES_LOADING);
