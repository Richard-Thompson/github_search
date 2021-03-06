import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createLogger} from 'redux-logger';

import './css/index.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';


import App from './components/App';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage';
import reducer from './reducer/reducer';

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path='/' component={App}>
                      <IndexRoute component={ProfilePage}/>
                      <Route path='/search/repositories/:searchTerm' component={SearchPage}/>
                    </Route>
                  </Router>
                </Provider>
               , document.getElementById('root'));