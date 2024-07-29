import { PRICE_LOW_TO_HIGH } from 'constants';

export const sortByPrice = (cards, priceFilter) =>
  cards.sort((a, b) => (priceFilter === PRICE_LOW_TO_HIGH ? a.price - b.price : b.price - a.price));

export const filterByCategory = (cards, categoryFilter) =>
  cards.filter((card) => card.category === categoryFilter);
