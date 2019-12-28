import React from 'react';
import { Icon } from 'antd';

import Landing from './landing/Landing.js';
import LandingMenu from './menus/Menus.js';

import './App.css';

class Quanda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    if (this.state.menuOpen) {
      this.setState({menuOpen: false});
    } else {
      this.setState({menuOpen: true});
    }
  }

  render() {
    const menuOpen = this.state.menuOpen;

    return (
      <React.Fragment>
        <div className="menu">
          <Icon type="menu" className="menu-icon" onClick={this.handleMenuClick}/>
        </div>
        <div className="content">
          {menuOpen ? <LandingMenu/> : <Landing/>}
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
