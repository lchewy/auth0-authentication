import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Logo from "../images/logo.png";
import "./Main.css";

class Main extends Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <div className="signin_form">
        <div className="logo_container">
          <img src={Logo} className="logo" alt="logo"/>
        </div>
        <LoginForm push={push} />
      </div>
    );
  }
}

export default Main;