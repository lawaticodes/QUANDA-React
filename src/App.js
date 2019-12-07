import React from 'react';

import './App.css';

import Bundle from './bundle/Bundle.js';
import Forum from './forum/Forum.js';
import Release from './release/Release.js';

class Quanda extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Header">
            <p>This is the header.</p>
        </div>
        <div className="Content">
          <p>Welcome to Quanda.</p>
          <Forum/>
          <Bundle/>
          <Release/>
        </div>
        <div className="Footer">
            <p>This is the footer.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
