import React from "react";
import { Header } from "./components/Header";
import { Container } from "./layout.styled";
import { Buttons } from "./components/Buttons";
import { LoginForm } from "./components/LoginForm";
import { RegisterReference } from "./components/RegisterReference";

export const LoginPageLayout = () => (
  <Container>
    <Header />
    <Buttons />
    <LoginForm />
    <RegisterReference />
  </Container>
);
