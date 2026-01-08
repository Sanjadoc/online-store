import { setCards, setLoading } from './cardsSlice';

import { getGoodsListData } from 'services/goodsServices';

export const fetchCardsList =
  (searchTerm = '') =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const goodsData = await getGoodsListData(searchTerm);
      dispatch(setCards(goodsData.data.products));
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      dispatch(setCards([]));
    } finally {
      dispatch(setLoading(false));
    }
  };
