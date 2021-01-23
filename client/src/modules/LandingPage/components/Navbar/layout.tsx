import React from "react";
import {
  NavbarContainer,
  NavbarContent,
  LogoContainer,
  Menu,
} from "./layout.styled";
import logo from "../../../../assets/spotify-logo.png";

type NavbarLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const NavbarLayout = ({ handleOnClick }: NavbarLayoutProps) => (
  <NavbarContainer>
    <NavbarContent>
      <LogoContainer onClick={handleOnClick("/")}>
        <img src={logo} alt="" />
      </LogoContainer>
      <Menu>
        <span onClick={handleOnClick("/signup")}>Register</span>
        <span onClick={handleOnClick("/login")}>Sign in</span>
      </Menu>
    </NavbarContent>
  </NavbarContainer>
);
