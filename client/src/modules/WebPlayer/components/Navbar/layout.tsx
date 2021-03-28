import React from "react";
import { NavButtons } from "./components/NavButtons/index";
import { UserMenu } from "./components/UserMenu/index";
import { Container } from "./layout.styled";

type NavbarLayoutProps = {
  background: string;
};

export const NavbarLayout = ({ background }: NavbarLayoutProps) => (
  <Container background={background}>
    <NavButtons />
    <UserMenu />
  </Container>
);
