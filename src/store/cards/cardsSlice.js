import { createSelector, createSlice } from '@reduxjs/toolkit';
import { filterByCategory, sortByPrice } from 'helpers/filters';

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

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
      state.isLoading = false;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters(state) {
      state.filters = initialFiltersState;
    }
  }
});

export const { setCards, setLoading, updateFilters, clearFilters } = cardsSlice.actions;

export default cardsSlice;

const getCardsState = (state) => state.cards;
export const selectorCardsList = createSelector([getCardsState], (cardsState) => cardsState.cards);

export const selectorCardsLoading = ({ cards }) => cards.isLoading;

export const selectorFilters = createSelector([getCardsState], (cardsState) => cardsState.filters);

export const selectorFilteredCardsList = createSelector(
  [selectorCardsList, selectorFilters],
  (cards, filters) => {
    let filteredCards = [...cards];

    if (filters) {
      if (filters.sortPrice) {
        filteredCards = sortByPrice(filteredCards, filters.sortPrice);
      }

      if (filters.categoryFilter) {
        filteredCards = filterByCategory(filteredCards, filters.categoryFilter);
      }
    }

    return filteredCards;
  }
);
