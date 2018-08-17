import React, { Component } from "react";
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import Auth from "../utils/Auth";
import "./LoginForm.css";


const LoginFormContainer = styled( ({flex, table, marginLeft, float, ...props}) => <Box {...props} ></Box>)`
  width: 26%;
  height: 45.7%;
  border-radius: 8px;
  background-color: #e7e7e9;
  top: 28%;
  left: 4.9%;
  position: absolute;
  // margin-left:${({marginLeft}) => marginLeft ? '100px' : '0'};
`

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
      <LoginFormContainer marginLeft>
        <div className="innerFormContainer">
          <form onSubmit={e => this.handleSubmit(e)} className="form_style">
            <label>Email</label>
            <input
              className="textInput emailInput"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.handleEmailChange(e)}
            />
            <label>Password</label>
            <input
              className="textInput"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.handlePWChange(e)}
            />
            <button type="submit" className="signInBtn">
              Sign In
            </button>
          </form>
        </div>
      </LoginFormContainer>
    );
  }
}

export default LoginForm

