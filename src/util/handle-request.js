import { openLoader, closeLoader } from '../actions/loader-actions';
import { browserHistory } from 'react-router';
import { signOut } from '../actions/auth-actions';
import setAuthToken from './set-auth-token';

export function handleRequest(dispatch, request, type) {
  dispatch(openLoader());
  return request.then(({data}) => {
    dispatch(closeLoader());
    dispatch({type, payload: data});
  }).catch((err) => {
    dispatch(closeLoader());
    if(err.config) {
      handleError(dispatch, err);
    } else {
      console.error(err);
    }
  })
}

export function handleError(dispatch, {response}, onErrorClose = defaultErrorClose) {
  if(!response) {
    console.info("Please check your connection and try again.");
  } else if (response.data && response.data.length){
    console.info(response.data.join(" | "));
  } else if (response.status == 401) {
    dispatch(signOut());
    console.info("Please sign in to continue.");
  } else {
    console.info("An error has occured. Please try again in a few minutes.");
  }
}

function defaultErrorClose() {
  browserHistory.push('/');
}
