import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './container/CompanyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to (i)OG</h1>
        <CompanyContainer />
      </div>
    );
  }
}

export default App;
