import { Button, Input } from 'antd';
import React from 'react';

import './Forms.css';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.handleLoggedIn()
  }

  render() {
    return(
      <form className="log-in-form">
        <p className="title">LOG IN</p>
        <div>
          <div>
            <label>Username:<Input className="input" placeholder="Please enter your username."/></label>
          </div>
          <div>
            <label>Password:<Input className="input" placeholder="Please enter your password."/></label>
          </div>
        </div>
        <Button className="form-button button" onClick={this.submit}>SUBMIT</Button>
      </form>
    );
  }
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.handleSignedUp()
  }

  render() {
    return(
      <form className="sign-in-form">
        <p className="title">SIGN IN</p>
        <div>
          <div>
            <label>Username:<Input className="input" placeholder="Please enter your username."/></label>
          </div>
          <div>
            <label>Password:<Input className="input" placeholder="Please enter your password."/></label>
          </div>
          <div>
            <label>Re-enter password:<Input className="input" placeholder="Please re-enter your password."/></label>
          </div>
          <div>
            <label>Email:<Input className="input" placeholder="Please enter your email."/></label>
          </div>
        </div>
        <Button className="form-button button" onClick={this.submit}>SUBMIT</Button>
      </form>
    );
  }
}

export { LogInForm, SignUpForm };
