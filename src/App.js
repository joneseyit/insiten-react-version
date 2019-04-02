import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './container/CompanyContainer';
import NavBar from './components/NavBar'
import Home from './components/LandingPage'
import { Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontFamily: 'PT Serif, serif' }}>

          {/*<h1>Achieve (in)Organic Growth Through Acquisitions</h1>*/}
          <NavBar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/dashboard' component={ CompanyContainer } />
          </Switch>
      </div>
    );
  }
}

export default App;
