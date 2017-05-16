import { FETCH_PRODUCT } from '../actions/actions';

const INITIAL_STATE = {product: {}};

const productReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_PRODUCT:
      return {...state, product: action.payload.product}
    default:
      return state;
  }
}

export default productReducer;