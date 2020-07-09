import React, { MouseEvent } from "react";
import styled from "styled-components";

import SignInForm from "../components/SignInForm";
import Wave from "../components/Wave";

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

export default class SignInPage extends React.Component<IProps, IState> {
  state: IState = { passwordVisible: false };

  togglePasswordVisibility = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };

  render() {
    return (
      <WrapperLoginPage>
        <SignInForm
          isPasswordVisible={this.state.passwordVisible}
          onPasswordVisibilityToggle={this.togglePasswordVisibility}
        />
        <Wave />
      </WrapperLoginPage>
    );
  }
}
