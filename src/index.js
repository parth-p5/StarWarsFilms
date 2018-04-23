import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  Router,
  Route,
  IndexRedirect
} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './Root';
import App from './App';
import FilmContainer from './FilmContainer';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const routes = ({ getState, dispatch }) => {
  return (
    <Route path="/" component={Root}>
      <IndexRedirect to="/home"/>
      <Route path="/home" component={App}/>
      <Route path="/film/:title" component={FilmContainer}/>
    </Route>
  )
}

const Starting = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes(store)}
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Starting />, document.getElementById('root'));
registerServiceWorker();
