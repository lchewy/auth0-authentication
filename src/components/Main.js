import React, { Component } from "react";
import Welcome from "./Welcome";
import Secret from "./Secret";
import Auth from "../utils/Auth";

class Main extends Component {
  // renderScreen = () => {
  //   const auth = new Auth();
  //   return auth.isAuthenticated() ? <Secret /> : <Welcome />;
  // };

  render() {
    return (
      <div>
        Welcome screen <p>please log in to see secret</p>
      </div>
    );
  }
}

export default Main;
