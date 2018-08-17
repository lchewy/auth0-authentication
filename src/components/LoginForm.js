import React, { Component } from "react";
import { connect } from "react-redux";
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
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} className="form_style">
          <input
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleEmailChange(e)}
          />
          <input
            placeholder="password"
            value={this.state.password}
            onChange={e => this.handlePWChange(e)}
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
