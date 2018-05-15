import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import FlexView from 'react-flexview';
import 'react-flexview/lib/flexView.css'

class App extends Component {
  render() {
    return (
      <div >
        <SearchSpace/>
        <Header/>
        <NavBar/>
        <Hero/>
        <HeroLineBottom/>
        {/* <Footer/> */}
      </div>
    );
  }
}

class SearchSpace extends Component {
  render() {
    return(
      <div className="searchspace">
        <div className="login">
          
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
              <h1 >Detective's Case Tracker</h1>
            </div>
          </div>
        </div>
    );
  }
}

class NavBar extends Component {
  render() {
    const navItems = ["Home","Page2","Page3"]
    return(
      <div className="nav-parent">
        <div className="App ">
          <div className='App App-navitem'>
            {navItems.map((item) => <NavItem title={item}/>)}
          </div>
        </div>
      </div> 
    );
  }
}

class NavItem extends Component {
  render() {
    return(
        <div className="App ">{this.props.title}</div>
    );
  }
}

class Hero extends Component {
  render() {
    return(
      <div className="hero-parent">
          <div className="App hero-content">
            <h1>Hero</h1>
          </div> 
      </div>
    );
  }
}

class HeroLineBottom extends Component {
  render() {
    return(
        <div className="line-bottom-hero">
        </div>
    );
  }
}

// class Footer extends Component {
//   render() {
//     return(
//       <FlexView marginTop="auto" className="App-footer">
//         <h1>Footer</h1>
//       </FlexView> 
//     );
//   }
// }

export default App;
