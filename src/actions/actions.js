import Axios from 'axios';

import { FETCH_PRODUCTS, FETCH_PRODUCT } from './types';

export function fetchProducts(){
  let request = Axios.get('/products');

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
};

export function fetchProduct(){
  let request = Axios.get('/products/1');

  return {
    type: FETCH_PRODUCT,
    payload: request
  }
};
