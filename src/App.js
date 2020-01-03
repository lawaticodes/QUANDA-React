import { Icon } from 'antd';
import React from 'react';

import { LogInForm, SignUpForm } from './other/Forms.js';
import Landing from './other/Landing.js';
import LandingMenu from './other/Menus.js';

import './App.css';

class Quanda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
      menuOpen: false,
      signingUp: false
    };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleSignedUp = this.handleSignedUp.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLoggedIn() {
    this.setState({loggingIn: false});
  }

  handleLogIn() {
    this.setState({loggingIn: true});
  }

  handleMenuClick() {
    if (this.state.menuOpen) {
      this.setState({menuOpen: false});
    } else {
      this.setState({menuOpen: true});
    }
  }

  handleSignedUp() {
    this.setState({signingUp: false});
  }

  handleSignUp() {
    this.setState({signingUp: true});
  }

  render() {
    let content;

    if (this.state.menuOpen) {
      content = <LandingMenu handleMenuClick={this.handleMenuClick}/>
    } else if (this.state.loggingIn) {
      content = <LogInForm handleLoggedIn={this.handleLoggedIn}/>
    } else if (this.state.signingUp) {
      content = <SignUpForm handleSignedUp={this.handleSignedUp}/>
    } else {
      content = <Landing handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp}/>
    }

    return (
      <React.Fragment>
        <div className="menu-icon-wrapper link">
          <Icon type="menu" className="menu-icon" onClick={this.handleMenuClick}/>
        </div>
        <div className="content">
          {content}
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
