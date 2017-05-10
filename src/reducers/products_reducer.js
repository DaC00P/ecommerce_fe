import { FETCH_PRODUCTS } from '../actions/types'

const INITIAL_STATE = {products: {}};

export default function (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_PRODUCTS:
      //this will have to use the spread operator to combine and return a new product state on an API call
      console.log('state', {...state, products: action.payload.data.products});
      return {...state, products: action.payload.data.products}
    default:
      return state;
  }
}
