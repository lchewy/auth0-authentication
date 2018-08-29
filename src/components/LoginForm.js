import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "grid-styled";
import Auth from "../utils/Auth";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: false
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
    return auth.login(this.state.email, this.state.password, push, this.loginFailed, this.loginSuccess);
  };

  loginFailed = () => this.setState({ error: true });

  loginSuccess = () => this.setState({ error: false });

  render() {
    return (
      <LoginFormContainer marginLeft>
        <InnerFormContainer>
          {this.state.error && <div>email or password don't match</div>}
          <FormStyle onSubmit={e => this.handleSubmit(e)}>
            <label>Email</label>
            <TextInput
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.handleEmailChange(e)}
            />
            <label>Password</label>
            <TextInput
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.handlePWChange(e)}
              type="password"
            />
            <SigninBtn type="submit">Sign In</SigninBtn>
          </FormStyle>
        </InnerFormContainer>
      </LoginFormContainer>
    );
  }
}

const LoginFormContainer = styled(
  ({ flex, table, marginLeft, float, ...props }) => <Box {...props} />
)`
  width: 26%;
  height: 45.7%;
  border-radius: 8px;
  background-color: #e7e7e9;
  top: 28%;
  left: 4.9%;
  position: absolute;
 
  // margin-left:${({ marginLeft }) => (marginLeft ? "100px" : "0")};
`;

const InnerFormContainer = styled.div`
  margin-top: 72px;
  margin-left: 25px;
`;

const TextInput = styled.input`
  border: none;
  width: 80%;
  border-bottom: 1px solid #c30026;
  background-color: #e7e7e9;
  color: #c30026;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #e0bcc6;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

const SigninBtn = styled.button`
  border: none;
  background-color: #c30026;
  width: 83px;
  height: 35px;
  border-radius: 4px;
  color: #fbeff1;
  margin-top: 38px;
`;

export default LoginForm;
