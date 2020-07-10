import React, { MouseEvent } from "react";

import SignInForm from "../components/SignInForm";
import AuthPage from "./AuthPage";

export default class SignInPage extends React.Component {
  render() {
    return (
      <AuthPage>
        <SignInForm />
      </AuthPage>
    );
  }
}
