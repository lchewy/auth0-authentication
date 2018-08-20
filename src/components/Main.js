import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Logo from "../images/logo.png";
import styled from "styled-components";
import backgroundImg from "../images/background.png";

class Main extends Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <SigninForm>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <LoginForm push={push} />
      </SigninForm>
    );
  }
}

const SigninForm = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const LogoContainer = styled.div`
  position: relative;
  top: 10%;
  left: 5%;
`;


export default Main;
