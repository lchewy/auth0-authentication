import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
// import Auth0Form from "./Auth0Form";
// import Header from "./Header";
import Main from "./Main";
import NonAuthorizedScreen from "./NonAuthorizedScreen";
import Secret from "./Secret";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          {/* <Header />
          <Route path="/" exact component={Main} />
          <Route path="/auth0_form" component={Auth0Form} /> */}
          <Route path="/" exact component={Main} />
          <Route path="/not_authorized" component={NonAuthorizedScreen} />
          <Route path="/secret" component={Secret} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
