import React, { Component } from "react";
import Auth from "../utils/Auth";

export default class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }
  render() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
