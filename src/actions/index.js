import Axios from 'axios';

import {FETCH_PRODUCTS} from './types';

export function fetchProducts(){
  let request = Axios.get('/products')

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
};
