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
    let userInput = {
      username: document.getElementById("username").value,
      password1: document.getElementById("password1").value,
      password2: document.getElementById("password2").value,
      email: document.getElementById("email").value
    };
    axios.post(
      "http://127.0.0.1:8000/signup/create_user/", null, {params: userInput}
    ).then(function(response) {
      console.log(response);
    });
    this.props.handleSignedUp();
  }

  render() {
    return(
      <form className="sign-in-form flex">
        <p className="title">SIGN UP</p>
        <div>
          <div>
            <label>Username:<Input className="input" id="username" placeholder="Please enter your username."/></label>
          </div>
          <div>
            <label>Password:<Input className="input" id="password1" placeholder="Please enter your password."/></label>
          </div>
          <div>
            <label>Re-enter password:<Input className="input" id="password2" placeholder="Please re-enter your password."/></label>
          </div>
          <div>
            <label>Email:<Input className="input" id="email" placeholder="Please enter your email."/></label>
          </div>
        </div>
        <Button className="button" onClick={this.submit}>SUBMIT</Button>
      </form>
    );
  }
}

export { LogInForm, SignUpForm };
