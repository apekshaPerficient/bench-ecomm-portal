// src/services/axios/axiosInstance.ts

import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
