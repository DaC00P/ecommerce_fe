import {FETCH_PRODUCTS} from './types';

export function fetchProducts(){
  return {
    type: FETCH_PRODUCTS,
    payload: products
  }
};
