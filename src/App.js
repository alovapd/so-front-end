import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import FlexView from 'react-flexview';
import 'react-flexview/lib/flexView.css'

class App extends Component {
  render() {
    return (
      <FlexView column children>
        <Header/>
        <NavBar/>
        <Body/>
        <Footer/>
      </FlexView>
    );
  }
}

class Header extends Component {
  render() {
    return (
        <FlexView marginBottom="auto" className="App-header container dev dnn_headerr">
          <div className="App-wrapper row">
            <div className="dev">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="dev">
              <h1 className="App-title">Case Tracker</h1>
            </div>
            <div className="dev">
            </div>
          </div>
        </FlexView>
    );
  }
}

class NavBar extends Component {
  render() {
    const navItems = ["Home","Page2","Page3"]
    return(
      <FlexView vAlignContent='center' basis={'50'} className="App-navbar ">
        <div className='dev'>
        {navItems.map((item) => <NavItem title={item}/>)}
        </div>
      </FlexView> 
    );
  }
}

class NavItem extends Component {
  render() {
    return(
      <div className="App-navitem">{this.props.title}</div>
    );
  }
}


class Body extends Component {
  render() {
    return(
      <FlexView grow >
        <h1>Body</h1>
      </FlexView> 
    );
  }
}

class Footer extends Component {
  render() {
    return(
      <FlexView marginTop="auto" className="App-footer">
        <h1>Footer</h1>
      </FlexView> 
    );
  }
}

export default App;
