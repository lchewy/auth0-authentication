import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Signup extends Component {
  render() {
    console.log("signup props ", this.props);
    return <div>Leslie</div>;
  }
}

export default connect(
  null,
  actions
)(Signup);
