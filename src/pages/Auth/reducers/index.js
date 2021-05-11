import { combineReducers } from 'redux';

import LoginReducer from '../Login/store/reducers';
import ProfileReducer from '../Profile/store/reducers';
import ResetPasswordReducer from '../ResetPassword/store/reducers';
import ChangePasswordReducer from '../ChangePassword/store/reducers';

export default combineReducers({
  LoginReducer,
  ProfileReducer,
  ResetPasswordReducer,
  ChangePasswordReducer
});
