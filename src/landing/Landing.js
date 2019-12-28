import React from 'react';
import { Button, Icon } from 'antd';

import './Landing.css';

class Landing extends React.Component {
	render() {
		return (
      <React.Fragment>
        <div className="landing">
          <h1>QUANDA</h1>
          <p>A space for open discussions and communication.</p>
          <div className="landing-buttons">
            <Button className="button">LOG IN</Button>
            <p>or</p>
            <Button className="button">SIGN UP</Button>
          </div>
        </div>
      </React.Fragment>
		);
	}
}

export default Landing;
