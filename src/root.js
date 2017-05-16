import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/app';
import LandingPage from './components/landing-page';
import SignInForm from './components/login-form';
import SignUpForm from './components/sign-up-form';
import AuthWrapper from './components/auth-wrapper';
import ProductList from './components/product_list';
import ProductItem from './components/product_item';
import ShoppingCart from './components/shopping_cart';


const Root = (
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}></IndexRoute>
      <Route path="/sign-in" component={SignInForm}></Route>
      <Route path="/sign-up" component={SignUpForm}></Route>
      <Route path="/sign-out" component={LandingPage}></Route>
      <Route path="/products" component={AuthWrapper(ProductList)} />
      <Route path="/items" component={AuthWrapper(ProductItem)} />
      <Route path="/cart" component={AuthWrapper(ShoppingCart)} />
    </Route>
);

export default Root;
