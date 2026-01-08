import { apiClient } from 'api/apiClient';

export const getGoodsListData = (searchTerm) => {
  const endpoint = searchTerm ? `/products/search?q=${searchTerm}` : '/products';
  return apiClient({ url: endpoint })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // eslint-disable-next-line no-undef
      console.error('Error in getGoodsListData:', error);
      throw error;
    });
};

export const getProductData = (id) => apiClient({ url: `/products/${id}` });

export const getProductCategories = () => apiClient({ url: '/products/categories' });
