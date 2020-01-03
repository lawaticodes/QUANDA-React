import { Button, Icon } from 'antd';
import React from 'react';

import Homepage from './Homepage.js';

import './Landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
    const initialLanding = (
      <div className="landing">
        <h1>QUANDA</h1>
        <p>A space for open discussions and communication.</p>
        <div className="landing-buttons">
          <Button className="button" onClick={this.props.handleLogIn}>LOG IN</Button>
          <p>or</p>
          <Button className="button" onClick={this.props.handleSignUp}>SIGN UP</Button>
        </div>
      </div>
    );

    if (this.props.loggedIn) {
      return(<Homepage/>);
    } else {
      return(initialLanding);
    }
	}
}

export default Landing;
