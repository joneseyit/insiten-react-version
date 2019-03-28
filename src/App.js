import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './container/CompanyContainer';
import NavBar from './components/NavBar'
import { Container } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontFamily: 'PT Serif, serif' }}>
        <Container>
          <h1>inOrganic Growth Through Acquisitions</h1>
          <NavBar />
          <CompanyContainer />
        </Container>
        
      </div>
    );
  }
}

export default App;
