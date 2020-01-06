import { Icon } from 'antd';
import React from 'react';

import './Homepage.css';

class Homepage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="menu-icon-wrapper link">
          <Icon type="menu" className="menu-icon" onClick={this.handleMenuClick}/>
        </div>
        <div className="content">
          <div className="profile">
            <img className="avatar" src="insert_image_here.jpg"/>
            <p>TINA LIMBU</p>
          </div>
          <div className="notifications">
            <div className="bundle-notifications">
              <p>BUNDLE:</p>
              <p>0 unread notifications</p>
            </div>
            <div className="forum-notifications">
              <p>FORUM:</p>
              <p>0 unread notifications</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
