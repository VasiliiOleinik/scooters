import { combineReducers } from 'redux';
import { generateReducers } from 'src/helpers/reduxRequestHelper';
import actionTypes from './actionTypes';

export default combineReducers({ request: generateReducers(actionTypes) });
