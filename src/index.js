import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createLogger} from 'redux-logger';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import App from './components/App'
import ProfilePage from './components/ProfilePage';
import RepoPage from './components/RepoPage'
import reducer from './reducer/reducer'

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path='/' component={App}>
                      <IndexRoute component={ProfilePage}/>
                      <Route path='/:user/:repo' component={RepoPage}/>
                    </Route>
                  </Router>
                </Provider>
               , document.getElementById('root'));