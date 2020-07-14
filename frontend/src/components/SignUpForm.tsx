import React, { MouseEvent, ChangeEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RoundedInput from "./RoundedInput";
import PrimaryHeading from "./PrimaryHeading";
import FormSection from "./FormSection";
import FormLabel from "./FormLabel";
import GradientButton from "./GradientButton";
import MailIcon from "./MailIcon";
import PasswordIcon from "./PasswordIcon";
import TogglePasswordVisibilityButton from "./TogglePasswordVisibilityButton";
import FormError from "./FormError";
import FormErrorWrapper from "./FormErrorWrapper";

interface IProps {}

interface IState {
  formPasswordErrors: string[];
  formEmailErrors: string[];
  isPasswordVisible: boolean;
  email: string;
  password: string;
  confirmPassword: string;
}

export default class SignUpForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      formPasswordErrors: [],
      formEmailErrors: [],
      isPasswordVisible: false,
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  togglePasswordVisibility = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible,
    });
  };

  submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.passwordAbidesConstraints && true)
      console.log("Form submitted successfully ...");
    else console.log("Error while submitting form ...");
  };

  updateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState(() => ({
      email: event.target.value,
    }));
  };

  updatePassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState(() => ({
      password: event.target.value,
    }));

    // Check password constraints
    this.passwordAbidesConstraints(
      this.state.password,
      this.state.confirmPassword
    );
  };

  updatePasswordConfirmation = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState(() => ({
      confirmPassword: event.target.value,
    }));
  };

  passwordIsLongEnough = (password: string): boolean => {
    if (!/.{8,}/.test(password)) {
      this.setState((state) => {
        state.formPasswordErrors.push("At least eight characters.");
      });
      return false;
    }
    return true;
  };

  passwordContainsUppercaseCharacter = (password: string): boolean => {
    if (!/.*[A-Z].*/.test(password)) {
      this.setState((state) => {
        state.formPasswordErrors.push("At least one uppercase letter.");
      });
      return false;
    }
    return true;
  };

  passwordContainsLowercaseCharacter = (password: string): boolean => {
    if (!/.*[A-Z].*/.test(password)) {
      this.setState((state) => {
        state.formPasswordErrors.push("At least one lowercase letter.");
      });
      return false;
    }
    return true;
  };

  passwordAbidesConstraints = (
    password: string,
    confirmPassword: string
  ): boolean => {
    let abidesConstraints = true;

    // Reset possible errors
    this.setState(() => ({
      formPasswordErrors: [],
    }));

    // Check contstraints
    abidesConstraints = this.passwordIsLongEnough(password);
    abidesConstraints = this.passwordContainsUppercaseCharacter(password);
    abidesConstraints = this.passwordContainsLowercaseCharacter(password);

    // Check confirmation password
    abidesConstraints = password === confirmPassword;

    return this.state.formPasswordErrors.length > 0 && abidesConstraints;
  };

  render() {
    return (
      <FormWrapper action="#" method="post" onSubmit={this.submitForm}>
        <FormHeading>Sign up</FormHeading>

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
            onChange={this.updateEmail}
          />
        </FormSection>

        <FormSection>
          <PasswordLabelWrapper>
            <FormLabel htmlFor="current-password">Password</FormLabel>
            <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
          </PasswordLabelWrapper>
          <PasswordIcon />
          <PasswordInput
            id="current-password"
            name="current-password"
            type={this.state.isPasswordVisible ? "text" : "password"}
            autoComplete="current-password"
            required
            value={this.state.password}
            onChange={this.updatePassword}
          />
          {this.state.formPasswordErrors.length > 0 && (
            <FormErrorWrapper>
              {this.state.formPasswordErrors.map((error, index) => (
                <FormError key={index}>{error}</FormError>
              ))}
            </FormErrorWrapper>
          )}
          <TogglePasswordVisibilityButton
            isCurrentlyVisible={this.state.isPasswordVisible}
            onClick={this.togglePasswordVisibility}
          />
        </FormSection>

        <FormSection>
          <ConfirmPasswordLabel htmlFor="confirm-password">
            Confirm
          </ConfirmPasswordLabel>
          <PasswordIcon />
          <PasswordInput
            id="confirm-password"
            name="confirm-password"
            type={this.state.isPasswordVisible ? "text" : "password"}
            autoComplete="confirm-password"
            required
            value={this.state.confirmPassword}
            onChange={this.updatePasswordConfirmation}
          />
        </FormSection>

        <WrapperFormControls>
          <SignInLink to="/sign-in">Sign in</SignInLink>
          <GradientButton>Sign up</GradientButton>
        </WrapperFormControls>
      </FormWrapper>
    );
  }
}

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

const PasswordLabelWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
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

const ConfirmPasswordLabel = styled(FormLabel)`
  margin-top: 0px;
`;

const WrapperFormControls = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SignInLink = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.primaryTextColor};
  text-decoration: none;
  margin: 0 26px 0 23px;
`;
