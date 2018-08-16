import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
// import Auth from "../utils/Auth";
import "./App.css";
import Auth0Form from "./Auth0Form";
import Header from "./Header";
import Main from "./Main";
// import axios from "axios";
// import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/auth0_form" component={Auth0Form} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
