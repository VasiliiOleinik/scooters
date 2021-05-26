import { removeAuthToken, setAuthToken } from 'src/helpers/authToken';
import { generateActions } from 'src/helpers/reduxRequestHelper';
import history from 'src/utils/history';
import actionTypes from './actionTypes';
import profileAction from '../../Profile/store/actions';

const loginRequest = generateActions(actionTypes, 'login');
const logoutRequest = generateActions(actionTypes, 'logout');

const login = function(credentials, rememberMe = true) {
  const { email, password } = credentials;

  return (dispatch, getState) =>
    loginRequest
      .post(dispatch, {
        email,
        password
      })
      .then(() => {
        const currentState = getState(),
          { auth } = currentState,
          requestState = auth.LoginReducer.request;

        if (requestState.loaded) {
          if (!requestState.hasError) {
            const user = requestState.data;

            setAuthToken(user['token'], rememberMe);
            history.push('/');
            dispatch(profileAction.getProfileInfo());
          } else {
            dispatch(
              loginRequest.fail(
                'Не удалось войти, проверьте правильность данных или зарегистрируйтесь'
              )
            );
          }
        }
      });
};

export function authLogout() {
  return dispatch => {
    logoutRequest.post(dispatch).then(() => {
      dispatch(profileAction.request.clear());
      removeAuthToken();
      history.push('/');
    });
  };
}

export default { request: loginRequest, authLogout, login };
