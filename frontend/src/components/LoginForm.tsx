import React, { MouseEvent } from "react";
import styled from "styled-components";

import RoundedInput from "./RoundedInput";
import PrimaryHeading from "./PrimaryHeading";
import FormSection from "./FormSection";
import FormLabel from "./FormLabel";
import GradientButton from "./GradientButton";
import MailIcon from "./MailIcon";
import PasswordIcon from "./PasswordIcon";
import TogglePasswordVisibilityButton from "./TogglePasswordVisibilityButton";

const FormWrapper = styled.form`
  margin: 0 auto;
  align-self: flex-start;
  margin-top: 100px;
`;

const FormHeading = styled(PrimaryHeading)`
  margin-bottom: 28px;
`;

const PasswordInput = styled(RoundedInput).attrs({
  "aria-describedby": "password-constraints",
})``;

const WrapperFormControls = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ForgotPasswordLink = styled.a`
  margin-top: 50px;
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-decoration: none;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.secondaryAccentColor};
  }
`;

interface IProps {
  isPasswordVisible: boolean;
  onPasswordVisibilityToggle: (e: MouseEvent) => void;
}

export default class LoginForm extends React.Component<IProps> {
  render() {
    return (
      <FormWrapper action="#" method="post">
        <FormHeading>Sign in</FormHeading>

        <FormSection>
          <FormLabel htmlFor="email">Email</FormLabel>
          <MailIcon />
          <RoundedInput
            id="email"
            name="email"
            type="email"
            placeholder=" "
            autoComplete="email"
            required
            autoFocus
          />
        </FormSection>

        <FormSection>
          <FormLabel htmlFor="current-password">Password</FormLabel>
          <PasswordIcon />
          <PasswordInput
            id="current-password"
            name="current-password"
            type={this.props.isPasswordVisible ? "text" : "password"}
            autoComplete="current-password"
            required
          />
          <TogglePasswordVisibilityButton
            isCurrentlyVisible={this.props.isPasswordVisible}
            onClick={this.props.onPasswordVisibilityToggle}
          />
          {/* <div id="password-constraints">
          Eight or more characters, with at least one&nbsp;lowercase and one
          uppercase letter.
        </div> */}
        </FormSection>

        <WrapperFormControls>
          <GradientButton id="signin">Sign in</GradientButton>
          <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
        </WrapperFormControls>
      </FormWrapper>
    );
  }
}
