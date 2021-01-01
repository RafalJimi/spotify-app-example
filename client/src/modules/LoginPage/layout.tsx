import React from "react";
import { Header } from "./components/Header/index";
import { LoginPageContainer } from "./layout.styled";
import { Buttons } from "./components/Buttons/index";

export const LoginPageLayout = () => (
  <LoginPageContainer>
    <Header />
    <Buttons />
  </LoginPageContainer>
);
