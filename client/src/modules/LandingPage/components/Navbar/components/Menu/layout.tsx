import React from "react";
import { MenuContainer } from "./layout.styled";

type MenuLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const MenuLayout = ({ handleOnClick }: MenuLayoutProps) => (
  <MenuContainer>
    <span onClick={handleOnClick("/signup")}>Register</span>
    <span onClick={handleOnClick("/login")}>Sign in</span>
  </MenuContainer>
);
