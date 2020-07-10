import React from "react";

import SignUpForm from "../components/SignUpForm";
import AuthPage from "./AuthPage";

export default class SignUpPage extends React.Component {
  render() {
    return (
      <AuthPage>
        <SignUpForm />
      </AuthPage>
    );
  }
}
