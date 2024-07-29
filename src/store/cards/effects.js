import { setCards, setIsLoading } from './actions';

import { getGoodsListData } from 'services/goodsServices';

export const fetchCardsList =
  (searchTerm = '') =>
  async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const goodsData = await getGoodsListData(searchTerm);
      dispatch(setCards(goodsData.data.products));
    } catch (error) {
      dispatch(setCards([]));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
