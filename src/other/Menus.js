import React from 'react';

import './Menus.css';

class LandingMenu extends React.Component {
  render() {
    return(
      <div className="content">
        <div className="menu landing-menu">
          <div className="options">
            <h3>MENU</h3>
            <p>1. ABOUT</p>
            <p>2. DEMO</p>
            <p className="link" onClick={this.props.handleMenuClick}>3. CLOSE</p>
          </div>
        </div>
      </div>
    );
  }
}

class MainMenu extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="menu main-menu">
          <div className="options">
            <h3>MENU</h3>
            <p>1. FORUM</p>
            <p>2. BUNDLE</p>
            <p>3. RELEASE</p>
            <p>4. ABOUT</p>
            <p className="link" onClick={this.props.handleMenuClick}>5. CLOSE</p>
          </div>
        </div>
      </div>
    );
  }
}

export { LandingMenu, MainMenu };
