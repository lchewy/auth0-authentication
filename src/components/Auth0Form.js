import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Auth0Form extends Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <div>
        <LoginForm push={push} />
      </div>
    );
  }
}

export default Auth0Form;
