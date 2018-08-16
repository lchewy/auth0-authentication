import React, { Component } from "react";
// import { Route } from "react-router-dom";
import Auth from "../utils/Auth";
// import axios from "axios";
// import Signup from "./Signup";

class App extends Component {
  componentDidMount = async () => {
    // console.log("before");
    // const login = await axios.get(
    //   `https://srlc.auth0.com/authorize?response_type=code|token&client_id=dc8Mvbk6uA9qb1i9sxvzeEJYEKVWdw0F&redirect_uri=http://localhost:3000/callback`
    // );

    // console.log("component did mount ", login);
  };

  handleSubmit = e => {
    const auth = new Auth();
    e.preventDefault();
    return auth.login();
  };

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
