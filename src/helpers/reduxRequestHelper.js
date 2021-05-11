import history from 'src/utils/history';
import loginActions from 'src/pages/Auth/Login/store/actions';
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest
} from './axiosHelper';
import { UNAUTHORIZED_CODE } from '../constants';

export function generateActionTypes(namespace) {
  return {
    REQUEST: `${namespace}/REQUEST`,
    SUCCESS: `${namespace}/SUCCESS`,
    FAIL: `${namespace}/FAIL`,
    CLEAR: `${namespace}/CLEAR`,
    SET_LOADING: `${namespace}/SET_LOADING`
  };
}

export function generateActions(actionTypes, urlMask, config) {
  const request = () => ({ type: actionTypes.REQUEST });
  const fail = (errorMessage = '') => ({
    type: actionTypes.FAIL,
    errorMessage
  });
  const success = (data = []) => ({
    type: actionTypes.SUCCESS,
    data
  });
  const post = (dispatch, data = {}) => {
    dispatch(request());

    return postRequest(urlMask, data, config)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        console.log('error', error);
        const responseData = error.response,
          errorObject = responseData.data,
          error_type = errorObject.data ? errorObject.data.error_type : null,
          errorMessage =
            errorObject.message || error_type || responseData.status.toString(),
          unauthorizedRequest = isUnauthorized(responseData);

        if (unauthorizedRequest) {
          dispatch(fail(errorMessage));
          return clearUserData(dispatch);
        }

        if (errorMessage) {
          return dispatch(fail(errorMessage));
        }

        if (Object.keys(errorObject).length) {
          dispatch(fail(errorObject));
        }
      });
  };

  const put = (dispatch, data = {}) => {
    dispatch(request());

    return putRequest(urlMask, data, config)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        const responseData = error.response,
          errorObject = responseData.data,
          errorMessage = errorObject.message,
          unauthorizedRequest = isUnauthorized(responseData);

        if (unauthorizedRequest) {
          return clearUserData(dispatch);
        }

        if (errorMessage) {
          return dispatch(fail(errorMessage));
        }

        dispatch(fail(errorObject));
      });
  };

  const get = (dispatch, data = {}) => {
    dispatch(request());

    return getRequest(urlMask, data, config)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        const responseData = error.response,
          errorMessage = responseData ? responseData.data.message : '',
          unauthorizedRequest = responseData ? isUnauthorized(responseData) : 0;

        if (unauthorizedRequest) {
          return clearUserData(dispatch);
        }

        dispatch(fail(errorMessage));
      });
  };

  const _delete = (dispatch, data = {}) => {
    dispatch(request());

    return deleteRequest(urlMask, data, config)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        const responseData = error.response,
          errorMessage = responseData.data.message,
          unauthorizedRequest = isUnauthorized(responseData);

        if (unauthorizedRequest) {
          return clearUserData(dispatch);
        }

        dispatch(fail(errorMessage));
      });
  };

  const setLoading = data => ({
    type: actionTypes.SET_LOADING,
    data
  });

  const clear = () => ({
    type: actionTypes.CLEAR
  });

  const isUnauthorized = responseData => {
    return responseData.status === UNAUTHORIZED_CODE;
  };

  return { clear, post, put, get, _delete, request, fail, success, setLoading };
}

const clearUserData = dispatch => {
  history.push('/login');
  dispatch(
    loginActions.request.fail(
      'Срок действия сессии истек, пожалуйста войдите заново'
    )
  );
};

export const initialState = {
  data: [],
  isLoading: false,
  loaded: false,
  hasError: false,
  errorMessage: ''
};

export function generateReducers(actionTypes, handleData) {
  return (state = initialState, action) => {
    let data = action.data;
    switch (action.type) {
      case actionTypes.SET_LOADING:
        return {
          ...state,
          isLoading: action.data
        };
      case actionTypes.REQUEST:
        return {
          ...state,
          loaded: false,
          isLoading: true
        };
      case actionTypes.SUCCESS:
        if (handleData) {
          data = handleData(data);
        }
        return {
          ...state,
          isLoading: false,
          loaded: true,
          hasError: false,
          errorMessage: '',
          data
        };
      case actionTypes.FAIL:
        return {
          ...state,
          isLoading: false,
          loaded: true,
          hasError: true,
          errorMessage: action.errorMessage
        };
      case actionTypes.CLEAR:
        return {
          ...initialState
        };
      default:
        return state;
    }
  };
}
