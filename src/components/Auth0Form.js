import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Auth0Form extends Component {
  render() {
      console.log("auth0 form props ", this.props)
      const {history: {push}} = this.props;
    return (
      <div>
        <LoginForm push={push}/>
      </div>
    );
  }
}

export default Auth0Form;
