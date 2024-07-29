import { actionCreator } from 'helpers/actionCreator';
import { SET_CARDS, SET_LOADING, UPDATE_FILTERS, CLEAR_FILTERS } from './types';

export const setCards = actionCreator(SET_CARDS);
export const setIsLoading = actionCreator(SET_LOADING);

export const updateFilters = actionCreator(UPDATE_FILTERS);
export const clearFilters = actionCreator(CLEAR_FILTERS);
