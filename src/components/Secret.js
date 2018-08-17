import React, { Component } from "react";
import requiredAuth from "../HOC/requiredAuth";
import Auth from "../utils/Auth";
const auth = new Auth();

class Secret extends Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <div>
        <p>super secret page</p>
        <button onClick={() => auth.logout(push)}>Logout</button>
      </div>
    );
  }
}

export default requiredAuth(Secret);
