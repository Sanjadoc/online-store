import { filterByCategory, sortByPrice } from 'helpers/filters';

import { createSelector } from 'reselect';

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
