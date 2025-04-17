// src/constants/apiPaths.ts

export enum API_PATHS {
    BASE_URL = 'https://fakestoreapi.com',
  
    // Product endpoints
    PRODUCTS = '/products',
    SINGLE_PRODUCT = '/products/:id',
  
    // Category endpoints
    CATEGORIES = '/products/categories',
    PRODUCTS_BY_CATEGORY = '/products/category/:category',
  
    // Cart endpoints
    CARTS = '/carts',
    SINGLE_CART = '/carts/:id',
    CARTS_BY_USER = '/carts/user/:userId',
  
    // User endpoints
    USERS = '/users',
    SINGLE_USER = '/users/:id',
    LOGIN = '/auth/login',
  }
  