import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./Main";
import NonAuthorizedScreen from "./NonAuthorizedScreen";
import Secret from "./Secret";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <Route path="/" exact component={Main} />
          <Route path="/not_authorized" component={NonAuthorizedScreen} />
          <Route path="/secret" component={Secret} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
