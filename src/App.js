import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container column">
        <Header></Header>
        <NavBar></NavBar>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
        <header className="App-header container dev">
          <div className="dev">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="dev">
            <h1 className="App-title">Welcome to Sgt. Waldon's Detective Case Tracker</h1>
          </div>
          <div className="dev">
          </div>
        </header>
    );
  }
}

class NavBar extends Component {
  render() {
    return(
      <footer className="App-footer dev">
        <h1>"NavBar"</h1>
      </footer> 
    );
  }
}

class Body extends Component {
  render() {
    return(
      <footer className="App-footer dev">
        <h1>"Body"</h1>
      </footer> 
    );
  }
}

class Footer extends Component {
  render() {
    return(
      <footer className="App-footer dev">
        <h1>"Footer"</h1>
      </footer> 
    );
  }
}

export default App;
