import { axiosInstance } from './axiosInstance';
import './interceptors';

export const apiClient = axiosInstance;


// useCase
// // src/services/api/productService.ts
// import { apiClient } from '@/services/axios/apiClient';

// export const getAllProducts = () => {
//   return apiClient.get('/products');
// };
