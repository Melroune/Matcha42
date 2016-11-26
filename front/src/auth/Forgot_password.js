import React 	from 'react';
import {Link}	from 'react-router';

import './css/Forgot_password.css';

const element = (
  <div className="contentFpass">
    <p className="comFpass">
        Mot de passe oublié
    </p>
    <form className="log-in-form">
        <span className="entetLog"> Saisissez l’adresse email de votre compte afin de
          recevoir des instructions pour réinitialiser votre mot de passe. </span>
          <input type="email" className="Username" title="Username" autoComplete="off"
          min="5" max="30" placeholder=" Ex: jhon@gmail.com"size="60"></input>
          <Link  className="sign-in" to="/login">Retour</Link>
    </form>
  </div>
);
  export default class ForgotPassword extends React.Component{

  	render() {
  		return(
  			element
  		);
  	}
  }
