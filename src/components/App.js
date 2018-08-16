import React, { Component } from "react";
import { Route } from "react-router-dom";
import Auth from "../utils/Auth"
// import Signup from "./Signup";

class App extends Component {

  handleSubmit = e =>{
    const auth = new Auth()
    e.preventDefault();
    return auth.login()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input />

          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default App;

