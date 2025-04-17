export const resolvePath = (path: string, params: Record<string, string | number>) => {
    return Object.entries(params).reduce(
      (resolved, [key, value]) => resolved.replace(`:${key}`, String(value)),
      path
    );
  };
  

//   usecase
//   import { API_PATHS } from '@/constants/apiPaths';
// import { resolvePath } from '@/utils/resolvePath';

// // Product detail endpoint
// const productUrl = `${API_PATHS.BASE_URL}${resolvePath(API_PATHS.SINGLE_PRODUCT, { id: 101 })}`;
// // => https://fakestoreapi.com/products/101
