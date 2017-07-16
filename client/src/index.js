import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger({ collapsed: true })

import App from './components/app';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Home from './components/home';
import Games from './components/games';
import Game from './components/game';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if (localStorage.getItem('token')) {
  store.dispatch({ type: 'auth_user' })
}

const requireAuth = (nextState, replace) => {
  if (!store.getState().auth.authenticated) {
    replace({ pathname: '/' })
  }
}

const clearMessages = (nextState) => {
  store.dispatch({ type: 'clear_messages' })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} onLeave={clearMessages} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} onLeave={clearMessages} />
        <Route path="home" component={Home} onEnter={requireAuth} />
        <Route path="games" component={RequireAuth(Games)} />
        <Route path="game" component={RequireAuth(Game)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
