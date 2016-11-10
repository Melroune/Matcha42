import React 	from 'react';
import {Link}	from 'react-router';
import './css/Login.css';

export default class Login extends React.Component{

	render() {
		return(
			
			<div className="auth">
					<div className="content">
							<form className="log-in-form">
									<p className="comLog">
											Unissez vos familles
									</p>
									<span className="entetLog"> Adresse email </span>
									<input type="email" className="Username" title="Username" autoComplete="off" min="5" max="30" placeholder="Ex: jhon@gmail.com"size="60"></input>
									<span className="entetLog"> Mot de passe </span>
									<input type="password" className="password" title="password" autoComplete="off" min="8" max="30" placeholder="Password"></input>
							</form>
					</div>

					<div className="buttons-login">
							<Link  className="login" to="/login"><button className="buttonLog">CONNEXION</button></Link>
						{	/*<Link  className="sign-in" to="/Signin"><button className="button button1">Sign-in</button></Link>*/}
					</div>
			</div>
		);
	}
}
