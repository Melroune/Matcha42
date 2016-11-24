import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory , IndexRoute, Redirect} from 'react-router'

import App from './App';
import Login from './login';
import Signin from './Signin';
import './css/index.css';

const validate = (nextState, replace, callback) => {
  let connexion = "y";
  if(connexion != "y")
  {
    browserHistory.push('/Signin');
  }else {
    browserHistory.push('/login')
  }
}
// <IndexRoute component={true? Signin:Login}/>

const element = (

  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Login} onReader={validate()}/>
            <Route path="/login" component={Login}></Route>
            <Route path="/Signin" component={Signin}></Route>
    </Route>
  </Router>

);

ReactDOM.render((
element
  ), document.getElementById('root'));
