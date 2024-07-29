import { CLEAR_FILTERS, SET_CARDS, SET_LOADING, UPDATE_FILTERS } from './types';

import { PRICE_LOW_TO_HIGH } from 'constants';

export const initialFiltersState = {
  searchTerm: '',
  sortPrice: PRICE_LOW_TO_HIGH,
  categoryFilter: ''
};

const initialState = {
  cards: [],
  isLoading: false,
  filters: initialFiltersState
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        isLoading: false,
        cards: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case CLEAR_FILTERS:
      return { ...state, filters: initialState.filters };

    default: {
      return state;
    }
  }
};
