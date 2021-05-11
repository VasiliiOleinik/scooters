import { generateActions } from 'src/helpers/reduxRequestHelper';
import actionTypes from './actionTypes';

const profileRequest = generateActions(actionTypes, 'user');

const getProfileInfo = () => {
  return dispatch => profileRequest.get(dispatch);
};

export default { getProfileInfo, request: profileRequest };
