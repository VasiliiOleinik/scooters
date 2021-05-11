import { generateActions } from 'src/helpers/reduxRequestHelper';
import actionTypes from './actionTypes';

const resetPasswordActions = generateActions(actionTypes, 'reset_password');

export default function resetPassword(email) {
  return (dispatch, getState) => {
    resetPasswordActions.post(dispatch, { email }).then(() => {
      const resetPasswordState = getState(),
        { auth } = resetPasswordState,
        requestState = auth.ResetPasswordReducer.request;

      if (requestState.loaded) {
        if (!requestState.hasError) {
          dispatch(
            resetPasswordActions.success({
              message:
                'Пароль сброшен успешно, проверьте почту и следуйте инструкциям указанным в письме'
            })
          );
        } else {
          dispatch(
            resetPasswordActions.fail(
              'Не удалось зарегестрироваться, проверьте правильность данных или попробуйте позже'
            )
          );
        }
      }
    });
  };
}
