import React, { Component } from "react";
import requiredAuth from "../HOC/requiredAuth";

class Secret extends Component {
  render() {
    return (
      <div>
        <p>super secret page</p>
      </div>
    );
  }
}

export default requiredAuth(Secret);
