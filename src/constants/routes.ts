export enum ROUTES {
    // Public Routes
    HOME = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    ABOUT = '/about',
    CONTACT = '/contact',
    NOT_FOUND = '*',
    
    CATEGORY="/category",
    // Product Pages
    PRODUCT_LIST = '/products',
    PRODUCT_DETAIL = '/products/:id',
    PRODUCTS_BY_CATEGORY = '/products/category/:category',
  
    // Cart & Checkout
    CART = '/cart',
    CHECKOUT = '/checkout',
    ORDER_SUCCESS = '/order-success',
  
    // User Account
    PROFILE = '/profile',
    ORDERS = '/profile/orders',
    ADDRESS_BOOK = '/profile/addresses',
    WISHLIST = '/wishlist',
  
    // Admin Routes (if applicable)
    ADMIN_DASHBOARD = '/admin',
    ADMIN_PRODUCTS = '/admin/products',
    ADMIN_ORDERS = '/admin/orders',
    ADMIN_USERS = '/admin/users',
  }
  