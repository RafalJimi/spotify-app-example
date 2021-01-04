import React from "react";
import { Header } from "./components/Header/index";
import { LoginPageContainer } from "./layout.styled";
import { Buttons } from "./components/Buttons/index";
import { LoginForm } from "./components/LoginForm/index";
import { RegisterReference } from "./components/RegisterReference/index";

export const LoginPageLayout = () => (
  <LoginPageContainer>
    <Header />
    <Buttons />
    <LoginForm />
    <RegisterReference />
  </LoginPageContainer>
);
