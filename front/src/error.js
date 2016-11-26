import React				from 'react';

import './css/error.css';

export default class ErrorGlob extends React.Component {
	render() {
		return(

				<div className="contentError">
					<h2 className="comError">Oups !!</h2>
					<h1 className="comError">404 NOT FOUND</h1>
				</div>

		);
	}
}
