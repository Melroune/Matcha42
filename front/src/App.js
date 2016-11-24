import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';


import './css/App.css';

class App extends Component {
  render() {
    return (

  <div className="App">
<Header />
  <div className="main-content">
      {this.props.children}
  </div>
<Footer />
  </div>
    );
  }
}

export default App;
