import React, { Component } from "react";
import Auth from "../utils/Auth";

const auth = new Auth()

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!auth.isAuthenticated()) {
        this.props.history.push("/not_authorized");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};
