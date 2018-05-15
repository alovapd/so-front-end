import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <SearchSpace/>
        <Header/>
        <NavBar/>
        <Hero/>
        <HeroLineBottom/>
        <Footer/>
      </div>
    );
  }
}

class SearchSpace extends Component {
  render() {
    return(
      <div className="loginspace ">
        <div className="App LoginBox">
          <label className="login-format" for="Login">Login:</label>
          <label className="login-format" for="Pass">Password:</label>
        </div>
      </div> 
    );
  }
}

class Header extends Component {
  render() {
    return (
        <div className="header-parent">
          <div className="App">
            <div className="header-logo ">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="header-title ">
              <h1>Patrol Tools</h1>
            </div>
          </div>
        </div>
    );
  }
}

class NavBar extends Component {
  render() {
    const navItems = ["Home","Login","Detective Case Tracker","Patrol Case Tracker","DT1","EVOC 1","EVOC 2"]
    return(
      <div className="nav-parent">
        <div className="App">
          {navItems.map((item) => <NavItem title={item}/>)}
        </div>
      </div> 
    );
  }
}

class NavItem extends Component {
  render() {
    return(
        <div className="App App-navitem">{this.props.title}</div>
    );
  }
}

class Hero extends Component {
  render() {
    return(
      <div className="hero-parent dev">
          <div className="App hero-content dev">
            <h1>Hero</h1>
          </div> 
      </div>
    );
  }
}

class HeroLineBottom extends Component {
  render() {
    return(
        <div className="line-bottom-hero"></div>
    );
  }
}

class Footer extends Component {
  render() {
    return(
      <div className="footer-parent">
        <div className="App">
          <h1>Footer</h1>
        </div>
      </div> 
    );
  }
}

export default App;
