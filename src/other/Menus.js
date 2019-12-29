import React from 'react';

import './Menus.css';

class LandingMenu extends React.Component {
  render() {
    return(
      <div className="landing-menu">
        <div className="options">
          <h3>MENU</h3>
          <p>1. DEMO</p>
          <p>2. ABOUT</p>
        </div>
      </div>
    );
  }
}

export default LandingMenu;
