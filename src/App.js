import React from 'react';
import Forum from './forum/Forum.js';
import './App.css';

class Quanda extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Header">
            <p>This is the header.</p>
        </div>
        <div className="Content">
          <p>Welcome to Quanda.</p>
          <Forum />
        </div>
        <div className="Footer">
            <p>This is the footer.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Quanda;
