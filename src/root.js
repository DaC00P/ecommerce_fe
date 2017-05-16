import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/app';
import ProductItem from './components/product_item';
import ShoppingCart from './components/shopping_cart';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/items" component={ProductItem} />
        <Route path="/cart" component={ShoppingCart} />
      </Route>
    </Router>
  </Provider>
);

export default Root;