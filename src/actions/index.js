import Axios from 'axios';

import {FETCH_PRODUCTS} from './types';

export function fetchProducts(){
  let request = Axios.get('localhost:8000/products')
  console.log(request);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
};
