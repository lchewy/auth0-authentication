
import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Logo from "../images/logo.png";

class Auth0Form extends Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <div className="signin_form">
        <img src={Logo} />
        <LoginForm push={push} />
      </div>
    );
  }
}

export default Auth0Form;
