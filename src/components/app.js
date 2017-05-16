import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from './product_list';
import ShoppingCart from './shopping_cart';
import LandingPage from '../components/landing-page';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('APP PROPS', this.props);
    console.log('APPSTATE IN APP', this.props.state);
    return (
      <div>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      isAuthenticated: state.auth,
      state: state
  }
}

export default connect(mapStateToProps)(App);
