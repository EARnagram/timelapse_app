import { combineReducers } from 'redux';
import timelapseReducer from './timelapseReducer';

export default combineReducers({
  timelapses: timelapseReducer
});