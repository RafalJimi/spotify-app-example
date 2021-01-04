import React, { ChangeEvent } from "react";
import {
  LoginFormContainer,
  InputTitle,
  Input,
  InputError,
  ForgotPasswordReference,
  ButtonsContainer,
  Border,
} from "./layout.styled";

type LoginFormLayoutProps = {
  handleValues: (input: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  values: { login: string; password: string };
  errors: { login: string; password: string };
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRedirect: (location: string) => (e: React.MouseEvent) => void;
};

export const LoginFormLayout = ({
  handleValues,
  values,
  errors,
  handleCheckbox,
  isChecked,
  handleOnSubmit,
  handleRedirect,
}: LoginFormLayoutProps) => (
  <LoginFormContainer onSubmit={handleOnSubmit}>
    <InputTitle>E-mail address or username</InputTitle>
    <Input
      type={"text"}
      placeholder="E-mail address or username"
      onChange={handleValues("login")}
      value={values.login}
    />
    <InputError>{errors.login}</InputError>
    <InputTitle>Password</InputTitle>
    <Input
      type={"password"}
      placeholder="Password"
      onChange={handleValues("password")}
      value={values.password}
    />
    <InputError>{errors.password}</InputError>
    <ForgotPasswordReference onClick={handleRedirect("/forgotPassword")}>
      Do you not remember your password?
    </ForgotPasswordReference>
    <ButtonsContainer>
      <label>
        <input
          name="rules"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        <span>Remember me</span>
      </label>

      <button type="submit">SIGN IN</button>
    </ButtonsContainer>
    <Border />
  </LoginFormContainer>
);
