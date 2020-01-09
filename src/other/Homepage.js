import { Icon } from 'antd';
import React from 'react';

import { MainMenu } from './Menus.js';

import './Homepage.css';

class Homepage extends React.Component {
  render() {
    if (this.props.menuOpen) {
      return(<MainMenu clickMenu={this.props.clickMenu}/>);
    }

    return(
      <div className="main-container flex">
        <div className="menu-container flex">
          <Icon type="menu" className="menu-icon link" onClick={this.props.clickMenu}/>
        </div>
        <div className="content flex">
          <div className="profile">
            <img className="avatar" src="insert_image_here.jpg"/>
            <p>TINA LIMBU</p>
          </div>
          <div className="notifications flex">
            <div className="forum-notifications">
              <p>FORUM:</p>
              <p>0 unread notifications</p>
            </div>
            <div className="bundle-notifications">
              <p>BUNDLE:</p>
              <p>0 unread notifications</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
