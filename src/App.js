import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {


  render() {
  return (
    <div>
      <Header/>
      <div className="card-columns">
      <Card/>
      </div>
      
  
    </div>
    );
  }
}

export default App;
