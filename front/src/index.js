import React from 'react';

import ReactDOM from 'react-dom';
import { Router, Route, browserHistory , IndexRoute} from 'react-router'

import App from './App';
import Login from './auth/login';
import Signin from './auth/Signin';
import ForgotPassword from './auth/Forgot_password'
import ErrorGlob from './error';

import './index.css';

const validate = (nextState, replace, callback) => {
  let connexion = "y";
  // const { store } = this.props;
  // const { getState, dispatch } = store;
  if(connexion !==   "y")
  {
      browserHistory.push('/auth/Signin');
      // replace('/Signin');
  }else {
      // browserHistory.push('/login');
      // callback();
      console.log('test');
      // console.log(store);
  }

}
// <IndexRoute component={true? Signin:Login}/>

const routeGlob = (

  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
            <Route path="/login" component={Login} onReader={validate()} />
            <Route path="/Signin" component={Signin} />
            <Route path="/Forgot_password" component={ForgotPassword} />
    </Route>
    <Route path="*" component={ErrorGlob} />
  </Router>

);

ReactDOM.render((
  routeGlob
), document.getElementById('root'));
