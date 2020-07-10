import React, { MouseEvent } from "react";
import styled from "styled-components";

import Wave from "../components/Wave";

const WrapperAuthPage = styled.div`
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

export default class AuthPage extends React.Component<IProps, IState> {
  state: IState = { passwordVisible: false };

  togglePasswordVisibility = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };

  render() {
    return (
      <WrapperAuthPage>
        {this.props.children}
        <Wave />
      </WrapperAuthPage>
    );
  }
}
