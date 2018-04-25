import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App column">
        <Header/>
        <NavBar/>
        <Body/>
        <Footer/>
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
            <h1 className="App-title">Case Tracker</h1>
          </div>
          <div className="dev">
          </div>
        </header>
    );
  }
}

class NavBar extends Component {
  render() {
    const navItems = ["Home","Page2","Page3"]
    return(
      <div className="App-navbar row">
        {navItems.map((item) => <NavItem title={item}/>)}
      </div> 
    );
  }
}

class Body extends Component {
  render() {
    return(
      <footer className="App-body dev">
        <h1>Body</h1>
      </footer> 
    );
  }
}

class Footer extends Component {
  render() {
    return(
      <footer className="App-footer dev">
        <h1>Footer</h1>
      </footer> 
    );
  }
}

class NavItem extends Component {
  render() {
    return(
      <div>{this.props.title}</div>
    );
  }
}

export default App;

