import { Button, Input } from 'antd';
import axios from 'axios';
import React from 'react';

import './Forms.css';

function getErrorMessage(error) {
  if (error.response) {
    return error.response.data.message;
  } else if (error.message === "Network Error") {
    return "Encountered a network error. Please check your connection and load the page again.";
  } else {
    return "Encountered an unexpected error. Please load the page again.";
  }
}

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    }
    this.submit = this.submit.bind(this);
  }

  submit = async () => {
    let request_url = "http://127.0.0.1:8000/login/log_in/";
    request_url += `?email=${document.getElementById("email").value}&password=${document.getElementById("password").value}`;

    try {
      const response = await axios.get(request_url);
      if (response.status === 200) {
        this.props.handleLoggedIn();
      }
    } catch (error) {
      this.setState({error: getErrorMessage(error)});
    }
  }

  render() {
    const logInForm = (
      <form className="log-in-form flex">
        <p className="title">LOG IN</p>
        <div>
          <div>
            <label>Email:<Input className="input" id="email" placeholder="Please enter your email."/></label>
          </div>
          <div>
            <label>Password:<Input className="input" id="password" type="password" placeholder="Please enter your password."/></label>
          </div>
        </div>
        <Button className="button" onClick={this.submit}>SUBMIT</Button>
      </form>
    );

    if (this.state.error) {
      return(
        <div className="log-in-message">
          {logInForm}
          <p>{this.state.error}</p>
        </div>
      );
    } else {
      return(<div>{logInForm}</div>);
    }
  }
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      error: ""
    }

    this.submit = this.submit.bind(this);
    this.goToHomePage = this.goToHomePage.bind(this);
  }

  submit = async () => {
    let userInput = {
      name: document.getElementById("name").value,
      password1: document.getElementById("password1").value,
      password2: document.getElementById("password2").value,
      email: document.getElementById("email").value
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/create_user/", null, {params: userInput});
      this.setState({submitted: true});

      if (response.status === 200) {
        this.setState({error: ""});
      }
    } catch (error) {
      this.setState({submitted: true, error: getErrorMessage(error)});
    }
  }

  goToHomePage() {
    window.location.replace("http://127.0.0.1:3000/");
  }

  render() {
    const signUpForm = (
      <form className="sign-in-form flex">
        <p className="title">SIGN UP</p>
        <div>
          <div>
            <label>Name:<Input className="input" id="name" placeholder="Please enter your name."/></label>
          </div>
          <div>
            <label>Password:<Input className="input" id="password1" type="password" placeholder="Please enter your password."/></label>
          </div>
          <div>
            <label>Re-enter password:<Input className="input" id="password2" type="password" placeholder="Please re-enter your password."/></label>
          </div>
          <div>
            <label>Email:<Input className="input" id="email" placeholder="Please enter your email."/></label>
          </div>
        </div>
        <Button className="button" onClick={this.submit}>SUBMIT</Button>
      </form>
    );

    if (this.state.submitted) {
      if (this.state.error) {
        return(
          <div className="sign-up-message">
            {signUpForm}
            <p>{this.state.error}</p>
          </div>
        );
      } else {
        return(
          <div className="flex sign-up-message">
            <p className="sign-up-success">Sign up successful. Please check your email and click on the confirmation link to complete your registration.</p>
            <Button className="button" onClick={this.goToHomePage}>HOME</Button>
          </div>
        );
      }
    } else {
      return(<div>{signUpForm}</div>);
    }
  }
}

export { LogInForm, SignUpForm };
