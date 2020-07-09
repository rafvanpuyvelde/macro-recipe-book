import React from "react";
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

interface IState {
  passwordVisible: boolean;
}

export default class LoginPage extends React.Component<IState> {
  state: IState = {
    passwordVisible: false,
  };

  togglePasswordVisibility = () =>
    this.setState({ passwordVisible: !this.state.passwordVisible });

  render() {
    return (
      <WrapperLoginPage>
        <LoginForm isPasswordVisible={this.state.passwordVisible} />
        <Wave />
      </WrapperLoginPage>
    );
  }
}
