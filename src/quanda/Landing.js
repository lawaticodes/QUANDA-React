import { Button } from 'antd';
import React from 'react';

import './Landing.css';

class Landing extends React.Component {
	render() {
    return(
      <div className="landing">
        <h1>QUANDA</h1>
        <p>A space for open discussions and communication.</p>
        <div className="landing-buttons flex">
          <Button className="button" onClick={this.props.logIn}>LOG IN</Button>
          <p>or</p>
          <Button className="button" onClick={this.props.signUp}>SIGN UP</Button>
        </div>
      </div>
    );
	}
}

export default Landing;
