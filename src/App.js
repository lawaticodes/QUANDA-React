import React from 'react';
import { Icon } from 'antd';

import Landing from './landing/Landing.js';

import './App.css';

class Quanda extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu">
          <Icon type="menu"/>
        </div>
        <div className="content">
          <Landing/>
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
