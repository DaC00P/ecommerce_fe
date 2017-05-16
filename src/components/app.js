import React, { Component } from 'react';

import ProductList from './product_list';
import ShoppingCart from './shopping_cart';

export default class App extends Component {
  render() {
    return (
      <div>
        WELCOME TO CRAIGSLIST-REDUX Y'ALL!
        <ProductList />
        <ShoppingCart />
      </div>
    );
  }
}
