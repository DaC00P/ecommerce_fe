import axios from 'axios';
import setAuthToken from '../util/set-auth-token';
import jwt from 'jsonwebtoken';

export const CREATE_USER = 'CREATE_USER';
export const SIGN_IN = 'SIGN_IN';
export const SET_CURRENT_USER = "SET_CURRENT_USER";

const ROOT_URL = 'http://localhost:3000/';

export function createUser(data) {
  data = {"user": data};
  const request = axios.post(`${ROOT_URL}users`, data);

  return (dispatch) => {
    return request.then((response) => {
      return dispatch({type: CREATE_USER, payload: response})
    })
  }
}

export function signIn(credentials) {
  let emailPassword = {email: credentials.email, password: credentials.password}
  let request = axios.post(`${ROOT_URL}auth`, {auth: emailPassword});

  return (dispatch) => {
    return request.then((response) => {
      const token = response.data.jwt;
      localStorage.setItem("token", token);
      setAuthToken(token);
      return dispatch(setCurrentUser(jwt.decode(token)));
    });
  }
}

export function signOut() {
  console.log('SIGNOUT')
  localStorage.removeItem('token');
  setAuthToken(false);
  return setCurrentUser();
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}
