import { Button, Input } from 'antd';
import axios from 'axios';
import React from 'react';

import './Forms.css';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.handleLoggedIn();
    axios.get("http://127.0.0.1:8000/login/");
  }

  render() {
    return(
      <form className="log-in-form flex">
        <p className="title">LOG IN</p>
        <div>
          <div>
            <label>Username:<Input className="input" placeholder="Please enter your username."/></label>
          </div>
          <div>
            <label>Password:<Input className="input" placeholder="Please enter your password."/></label>
          </div>
        </div>
        <Button className="button" onClick={this.submit}>SUBMIT</Button>
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
    this.props.handleSignedUp();
    axios.get("http://127.0.0.1:8000/signup/");
  }

  render() {
    return(
      <form className="sign-in-form flex">
        <p className="title">SIGN UP</p>
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
        <Button className="button" onClick={this.submit}>SUBMIT</Button>
      </form>
    );
  }
}

export { LogInForm, SignUpForm };
