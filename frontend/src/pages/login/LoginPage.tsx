import React, { MouseEvent } from "react";
import styled from "styled-components";

import LoginForm from "../../components/LoginForm";
import Wave from "../../components/Wave";

const WrapperLoginPage = styled.div`
  display: flex;
  flex-flow: column-nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  min-height: 100vh;
`;

interface IProps {}

interface IState {
  passwordVisible: boolean;
}

export default class LoginPage extends React.Component<IProps, IState> {
  state: IState = { passwordVisible: false };

  togglePasswordVisibility = (e: MouseEvent) => {
    console.log("test");
    e.preventDefault();
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };

  render() {
    return (
      <WrapperLoginPage>
        <LoginForm
          isPasswordVisible={this.state.passwordVisible}
          onPasswordVisibilityToggle={this.togglePasswordVisibility}
        />
        <Wave />
      </WrapperLoginPage>
    );
  }
}
