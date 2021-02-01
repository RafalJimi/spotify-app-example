import React from "react";
import { NavButtons } from "./components/NavButtons/index";
import { UserMenu } from "./components/UserMenu/index";
import { NavbarContainer } from "./layout.styled";

export const NavbarLayout = () => (
  <NavbarContainer>
    <NavButtons />
    <UserMenu />
  </NavbarContainer>
);
