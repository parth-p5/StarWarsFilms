import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default (initialState, history) => {
  const middleware = [thunk, routerMiddleware(history), createLogger()];
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
  return store;
}