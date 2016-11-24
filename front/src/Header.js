import React from 'react';
import {Link}	from 'react-router';
// import logo from './logo.svg';

// import Login from './login';
import './css/Header.css';
// const divStyle = {
//
// };
// function HelloWorldComponent() {
//   return <div style={divStyle}>Hello World!</div>;
// }
export default class Header extends React.Component {

  render() {
    return (
      <div className="header">

          	<Link  className="login" to="/login"><button className="button button1">inscription</button></Link>
      </div>
    );
  }
}
