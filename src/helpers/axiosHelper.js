//import objectToFormData from 'object-to-formdata';
import axios from 'axios';
import { UNAUTHORIZED_CODE } from '../constants';
import { removeToken } from './authTokenHelper';

const { REACT_APP_BACKEND_API } = process.env;

axios.interceptors.response.use(
  response => response,
  error => {
    const status = error.response.status;
    if (status === UNAUTHORIZED_CODE) {
      delete axios.defaults.headers.common['Bearer'];
      removeToken();
    }

    return Promise.reject(error);
  }
);

function prepareUrl(urlMask, data) {
  return urlMask.replace(/{:(.+?)}/g, (match, id) =>
    data[id] === undefined ? 'error' : data[id]
  );
}

function postRequest(urlMask, data, config = {}) {
  const url = prepareUrl(urlMask, data);
  //  formData = objectToFormData(data);
  
  return axios({
    ...config,
    url: `${REACT_APP_BACKEND_API}/${url}`,
    method: 'POST',
    data,
    headers: {
      "device-id": "12",
      "app-version": "222",
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function putRequest(urlMask, data, config = {}) {
  const url = prepareUrl(urlMask, data);
  //  formData = objectToFormData(data);

  return axios({
    ...config,
    url: `${REACT_APP_BACKEND_API}/${url}`,
    method: 'PUT',
    data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function getRequest(urlMask, data, config = {}) {
  const url = prepareUrl(urlMask, data);

  return axios({
    ...config,
    url: `${REACT_APP_BACKEND_API}/${url}`,
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    params: data
  });
}

function deleteRequest(urlMask, data, config = {}) {
  const url = prepareUrl(urlMask, data);
  //  formData = objectToFormData(data);

  return axios({
    ...config,
    url: `${REACT_APP_BACKEND_API}/${url}`,
    method: 'DELETE',
    data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

export { prepareUrl, postRequest, getRequest, putRequest, deleteRequest };
