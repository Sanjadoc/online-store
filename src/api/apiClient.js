import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL_API;

const apiInstance = axios.create({
  baseURL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export const apiClient = ({ url, method = 'get', data, params = null }) => {
  return apiInstance({
    method,
    url,
    data,
    params
  });
};
