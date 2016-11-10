import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Login from './login';

import './css/index.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/login" component={Login}></Route>
    {  /* </Route> */}
    </Router>
  ), document.getElementById('root'));
