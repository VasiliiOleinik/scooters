import axios from 'axios';
import { removeToken } from './authTokenHelper';

export function setAuthToken(token) {
  const requestToken = 'Bearer ' + token;
  axios.defaults.headers.common['Authorization'] = requestToken;

  localStorage.setItem('token', requestToken);
}

export const authTokenSync = () => {
  return dispatch => {
    const token = getAuthToken();

    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }
  };
};

export function getAuthToken() {
  const token = localStorage.token;
  return token;
}

export function removeAuthToken() {
  delete axios.defaults.headers.common['Authorization'];
  removeToken();
}
