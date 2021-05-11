import { generateReducers } from 'src/helpers/reduxRequestHelper';
import actionTypes from './actionTypes';

export default generateReducers(actionTypes);
