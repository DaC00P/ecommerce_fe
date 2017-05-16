import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import setAuthToken from '../util/set-auth-token';

import ProductsReducer from './products_reducer';
import ProductRecuder from './products_reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  product: ProductRecuder,
  auth: AuthReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
