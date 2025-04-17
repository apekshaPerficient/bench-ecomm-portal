// src/services/axios/interceptors.ts

import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';
import { toast } from 'react-toastify';

// ✅ Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      toast.error('Unauthorized. Please login again.');
    } else if (status === 500) {
      toast.error('Internal server error.');
    } else if (status === 404) {
      toast.warn('Resource not found.');
    } else {
      toast.error(error.message || 'Something went wrong.');
    }

    return Promise.reject(error);
  }
);
