import React, { Component } from "react";
import Welcome from "./Welcome";
import Secret from "./Secret";
import Auth from "../utils/Auth";

class Main extends Component {
  renderScreen = () => {
    const auth = new Auth();
    return auth.isAuthenticated() ? <Secret /> : <Welcome />;
  };

  render() {
    return <div>{this.renderScreen()}</div>;
  }
}

export default Main;
