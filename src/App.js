import { Icon } from 'antd';
import React from 'react';

import { LogInForm, SignUpForm } from './other/Forms.js';
import Homepage from './other/Homepage.js';
import Landing from './other/Landing.js';
import { LandingMenu } from './other/Menus.js';

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
    } else {
      this.setState({menuOpen: true});
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
    if (this.state.loggedIn) {
      return(<Homepage menuOpen={this.state.menuOpen} clickMenu={this.clickMenu}/>);
    }

    let content;
    if (this.state.menuOpen) {
      content = <LandingMenu clickMenu={this.clickMenu}/>
    } else if (this.state.loggingIn) {
      content = <LogInForm handleLoggedIn={this.handleLoggedIn}/>
    } else if (this.state.signingUp) {
      content = <SignUpForm handleSignedUp={this.handleSignedUp}/>
    } else {
      content = <Landing loggedIn={this.state.loggedIn} logIn={this.logIn} signUp={this.signUp}/>
    }

    return (
      <React.Fragment>
        <div className="menu-icon-wrapper link">
          <Icon type="menu" className="menu-icon" onClick={this.clickMenu}/>
        </div>
        <div className="content">
          {content}
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
