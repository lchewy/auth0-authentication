import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../actions";
import reducers from "../reducers";

class SignupForm extends Component {
  render() {
    return <div>Leslie</div>;
  }
}

// export default connect(
//   null,
//   actions
// )(reduxForm({form:""})(Signup));

export default connect(
  null,
  actions
)(reduxForm({ form: "signupForm" })(SignupForm));
