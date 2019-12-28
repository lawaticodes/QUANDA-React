import React from 'react';
import { Button, Icon } from 'antd';

import Bundle from './bundle/Bundle.js';
import Forum from './forum/Forum.js';
import Release from './release/Release.js';

import './App.css';

class Quanda extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu">
        <h2>MENU</h2>
          <Icon type="menu" className="menu-icon"/>
        </div>
        <div className="content">
          <div className="landing-text">
            <h1>QUANDA,</h1>
            <p>a space for open discussions and communication.</p>
            <div className="landing-buttons">
              <Button className="button">LOG IN</Button>
              <p>or</p>
              <Button className="button">SIGN UP</Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
