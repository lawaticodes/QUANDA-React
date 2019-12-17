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
          <div className="title">
            <h1>QUANDA.</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
