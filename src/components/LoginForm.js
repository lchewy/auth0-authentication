import React, { Component } from "react";
import { connect } from "react-redux";
// import {reduxForm, Field} from "redux-form"
import Auth from "../utils/Auth";
import * as actions from "../actions";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePWChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { push } = this.props;
    const auth = new Auth();
    return auth.login(this.state.email, this.state.password, push);
  };

  render() {
    // const {
    // email,
    // password,
    // auth0Login,
    // onLoginEmailChange,
    // onLoginPwChange,
    // push
    // } = this.props;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} className="form_style">
          <input
            placeholder="email"
            value={this.state.email}
            // value={email}
            onChange={e => this.handleEmailChange(e)}
            // onChange={e => onLoginEmailChange(e)}
          />
          <input
            placeholder="password"
            value={this.state.password}
            // value={password}
            onChange={e => this.handlePWChange(e)}
            // onChange={e => onLoginPwChange(e)}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

const mstp = ({ auth: { email, password } }) => ({ email, password });

export default connect(
  mstp,
  actions
)(LoginForm);
