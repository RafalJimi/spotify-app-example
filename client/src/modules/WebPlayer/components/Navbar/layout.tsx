import React from "react";
import { NavButtons } from "./components/NavButtons/index";
import { UserMenu } from "./components/UserMenu/index";
import { NavbarContainer } from "./layout.styled";

type NavbarLayoutProps = {
  background: string;
};

export const NavbarLayout = ({ background }: NavbarLayoutProps) => (
  <NavbarContainer background={background}>
    <NavButtons />
    <UserMenu />
  </NavbarContainer>
);
