import React from 'react';

import './App.css';

import Bundle from './bundle/Bundle.js';
import Forum from './forum/Forum.js';
import Release from './release/Release.js';

class Quanda extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu-icon">
          <p>MENU</p>
        </div>
        <div className="content">
          <p>QUANDA</p>
          <Forum/>
          <Bundle/>
          <Release/>
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
