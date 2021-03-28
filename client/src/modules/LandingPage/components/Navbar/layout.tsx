import React from "react";
import { Container, NavbarContent } from "./layout.styled";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu/index";
import { UserMenu } from "./components/UserMenu/index";

type NavbarLayoutProps = {
  isAuth: boolean;
};

export const NavbarLayout = ({ isAuth }: NavbarLayoutProps) => (
  <Container>
    <NavbarContent>
      <Logo />
      {isAuth ? <UserMenu /> : <Menu />}
    </NavbarContent>
  </Container>
);
