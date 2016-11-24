import React 	from 'react';
import {router, Link, Redirect, replace}	from 'react-router';

// import Signin from './Signin';
import './css/Login.css';

const element = (
	<div className="globApp">
			<div className="logo"><img src="logo.png" alt="logo celiparents" className="logoLog"/>
			<p className="logoSub">#<span className="logoSub1">EnlargeYourFamily</span></p>
			</div>
			<div className="auth">
					<div className="content">
							<form className="log-in-form">
									<p className="comLog">
											Unissez vos familles
									</p>
									<span className="entetLog"> Adresse email </span>
									<input type="email" className="Username" title="Username" autoComplete="off" min="5" max="30" placeholder=" Ex: jhon@gmail.com"size="60"></input>
									<span className="entetLog"> Mot de passe </span>
									<input type="password" className="password" title="password" autoComplete="off" min="8" max="30" placeholder=" Password"></input>
							</form>
							<div className="buttons-login">
							<span className="mdpOublier"> <Link  className="mdpOublier1" to="/Signin">Mot de passe oublié ?</Link></span>
									<Link  className="login" to="/login"><button className="buttonLog">CONNEXION</button></Link>
									<div className="buttons-sign">
										<span className="sign">Pas encore membre ? <Link  className="sign-in" to="/Signin">Inscrivez-vous gratuitement !</Link></span>
									</div>
							</div>
					</div>


			</div>
		</div>
	);
export default class Login extends React.Component{

/*	state = {
		ace : 0
	}
	componentDidMount = () => {
		console.log(this.state.ace);
		if(this.state.ace === 0){
			window.location.href = 'Signin'
		}
	}*/
	render() {
		return(
			element
		);
	}
}
