import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig } from 'axios';
import { deleteToken, getToken, setToken } from 'store/backend-api/utils/token.utils';

import { backendUrl } from './api.config';

export const backendApi = axios.create({
  baseURL: backendUrl,
  timeout: 5000,
});

backendApi.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

backendApi.interceptors.response.use(
  (response) => {
    const token: string | undefined = response.headers['x-token'];
    if (token) {
      setToken(token);
    }
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.status === 401) {
      deleteToken();
    }

    return Promise.reject(error);
  },
);
