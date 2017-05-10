import { combineReducers } from 'redux';

import ProductsReducer from './products_reducer';
import productRecuder from './products_reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  product: productRecuder
});

export default rootReducer;
