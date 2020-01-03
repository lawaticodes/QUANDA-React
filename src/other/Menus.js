import React from 'react';

import './Menus.css';

class LandingMenu extends React.Component {
  render() {
    return(
      <div className="landing-menu">
        <div className="options">
          <h3>MENU</h3>
          <p>1. ABOUT</p>
          <p>2. DEMO</p>
          <p className="link" onClick={this.props.handleMenuClick}>3. BACK</p>
        </div>
      </div>
    );
  }
}

export default LandingMenu;
