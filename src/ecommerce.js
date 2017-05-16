import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import { Router, browserHistory } from 'react-router';
import jwt from 'jsonwebtoken';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import rootReducer from './reducers/root_reducer';
import Root from './root';
import setAuthToken from './util/set-auth-token';
import { setCurrentUser } from './actions/auth-actions';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
)

const historyStoreSync = syncHistoryWithStore(browserHistory, store);

if(localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={historyStoreSync} routes={Root} />
    </Provider>,
     document.querySelector('.container'));
});
