import React, { Component } from 'react';

import ProductList from './product_list';

export default class App extends Component {
  render() {
    return (
      <div>
        WELCOME TO CRAIGSLIST-REDUX Y'ALL!
        <ProductList />
      </div>
    );
  }
}
