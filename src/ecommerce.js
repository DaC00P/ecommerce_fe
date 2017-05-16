import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import promise from 'redux-promise';
import Root from './root';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={store} />, document.querySelector('.container'));
});


window.store = store;