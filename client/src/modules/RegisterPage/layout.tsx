import React from "react";
import { Header } from "./components/Header/index";
import { RegisterPageContainer } from "./layout.styled";
import { RegisterForm } from "./components/RegisterForm/index";
import { LoginReference } from "./components/LoginReference/index";

export const RegisterPageLayout = () => (
  <RegisterPageContainer>
    <Header />
    <RegisterForm />
    <LoginReference />
  </RegisterPageContainer>
);
