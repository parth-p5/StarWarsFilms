import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import film from './film';

export default combineReducers({
  routing,
  film,
});