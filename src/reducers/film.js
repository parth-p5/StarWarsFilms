import initialState from './initialState';
import _ from 'lodash';

export default function film (state = initialState.film, action) {
  switch(action.type) {
    case 'GET_FILM':
      return _.assign({},state,{data: action.data});
    default:
     return state;
  }
}