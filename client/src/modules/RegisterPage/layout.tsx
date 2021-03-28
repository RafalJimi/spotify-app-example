import React from "react";
import { Header } from "./components/Header/index";
import { Container } from "./layout.styled";
import { RegisterForm } from "./components/RegisterForm/index";
import { LoginReference } from "./components/LoginReference/index";

export const RegisterPageLayout = () => (
  <Container>
    <Header />
    <RegisterForm />
    <LoginReference />
  </Container>
);
