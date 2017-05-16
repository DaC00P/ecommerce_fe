import { FETCH_PRODUCTS } from '../actions/types';
import { mockProducts } from '../../mock_data';

const INITIAL_STATE = {products: mockProducts};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state;
    default:
      return state;
  }
}
