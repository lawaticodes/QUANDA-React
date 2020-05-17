import { Icon } from 'antd';
import React from 'react';

import { LogInForm, SignUpForm } from './quanda/Forms.js';
import Homepage from './quanda/Homepage.js';
import Landing from './quanda/Landing.js';

import './App.css';

class Quanda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      loggingIn: false,
      loggedIn: false,
      signingUp: false
    };
    this.clickMenu = this.clickMenu.bind(this);
    this.logIn = this.logIn.bind(this);
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleSignedUp = this.handleSignedUp.bind(this);
  }

  clickMenu() {
    if (this.state.menuOpen) {
      this.setState({menuOpen: false});
      document.getElementById("menu-option-one").style.display = "none";
      document.getElementById("menu-option-two").style.display = "none";
    } else {
      this.setState({menuOpen: true});
      document.getElementById("menu-option-one").style.display = "block";
      document.getElementById("menu-option-two").style.display = "block";
    }
  }

  logIn() {
    this.setState({loggingIn: true});
  }

  handleLoggedIn() {
    this.setState({loggingIn: false, loggedIn: true});
  }

  signUp() {
    this.setState({signingUp: true});
  }

  handleSignedUp() {
    this.setState({signingUp: false});
  }

  render() {
    let content;

    if (this.state.loggedIn) {
      content = <Homepage menuOpen={this.state.menuOpen} clickMenu={this.clickMenu}/>
    } else if (this.state.loggingIn) {
      content = <LogInForm handleLoggedIn={this.handleLoggedIn}/>
    } else if (this.state.signingUp) {
      content = <SignUpForm/>
    } else {
      content = <Landing loggedIn={this.state.loggedIn} logIn={this.logIn} signUp={this.signUp}/>
    }

    return (
      <div className="main-container flex">
        <div className="menu-container-outer flex">
          <div className="menu-container-inner">
            <Icon type="menu" className="menu-icon link" onClick={this.clickMenu}/>
            <p className="menu-option" id="menu-option-one" style={{display: "none"}}>ABOUT</p>
            <p className="menu-option" id="menu-option-two" style={{display: "none"}}>DEMO</p>
          </div>
        </div>
        <div className="content flex">
          {content}
        </div>
      </div>
    );
  }
}

export default Quanda;
