import { FETCH_PRODUCT } from '../actions/actions';
import { mockSingleProduct } from '../../mock_data';

const INITIAL_STATE = {product: mockSingleProduct};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return state;
    default:
      return state;
  }
}

export default productReducer;
