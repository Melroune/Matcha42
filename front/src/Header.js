import React from 'react';
// import logo from './logo.svg';
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

          <button className="button button1">inscription</button>
      </div>
    );
  }
}
