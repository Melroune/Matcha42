import React, { Component } from 'react';

import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './login';
class App extends Component {
  render() {
    return (

  <div className="App">
<Header />
  <div className="main-content">
      <Login />
      {this.props.children}
  </div>
<Footer />
  </div>
    );
  }
}

export default App;
