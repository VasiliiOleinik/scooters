import { setAuthToken } from 'src/helpers/authToken';
import { generateActions } from 'src/helpers/reduxRequestHelper';
import actionTypes from './actionTypes';
import profileAction from '../../Profile/store/actions';

const registerActions = generateActions(actionTypes, 'change_password');

const changePassword = data => {
  return (dispatch, getState) => {
    registerActions.post(dispatch, data).then(() => {
      const resetPasswordState = getState(),
        { auth } = resetPasswordState,
        requestState = auth.ChangePasswordReducer.request;

      if (requestState.loaded) {
        if (!requestState.hasError) {
          const data = requestState.data;

          setAuthToken(data['token']);
          dispatch(profileAction.getProfileInfo());
          dispatch(
            registerActions.success({
              message:
                'Вы успешно сменили пароль, сейчас Вы будете перенаправлены в личный кабинет'
            })
          );
        } else {
          dispatch(
            registerActions.fail(
              'Не удалось зарегестрироваться, проверьте правильность данных или попробуйте позже'
            )
          );
        }
      }
    });
  };
};

const setErrorMessage = message => {
  return dispatch => {
    dispatch(registerActions.fail(message));
  };
};

export default {
  changePassword,
  setErrorMessage
};
