import React, { forwardRef } from "react";
import Logo from "../../assets/spotify-logo.png";
import { BurgerMenuButton } from "../LandingPage/components/BurgerMenuButton";
import { Container, Menu, MenuItem, LogoContainer } from "./layout.styled";

const Fade = require("react-reveal/Fade");

type BurgerMenuLayoutProps = {
  isOpen: boolean;
  isAuth: string;
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
  handleSignOut: (e: React.MouseEvent) => void;
};

export const BurgerMenuLayout = forwardRef<HTMLElement, BurgerMenuLayoutProps>(
  (
    { isOpen, isAuth, handleOnClick, handleSignOut }: BurgerMenuLayoutProps,
    ref: any
  ) => {
    const isAuthMenu = (
      <Menu>
        <MenuItem>Account</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        <LogoContainer>
          <img src={Logo} alt="" />
        </LogoContainer>
      </Menu>
    );

    const isNotAuthMenu = (
      <Menu >
        <Fade when={isOpen} right cascade>
          <MenuItem onClick={handleOnClick("/signup")}>Register</MenuItem>
          <MenuItem onClick={handleOnClick("/login")}>Sign in</MenuItem>
        </Fade>
        <LogoContainer>
          <img src={Logo} alt="" />
        </LogoContainer>
      </Menu>
    );

    return (
      <Container ref={ref} isOpen={isOpen}>
        <BurgerMenuButton />
        {isAuth === "isAuth" ? isAuthMenu : isNotAuthMenu}
      </Container>
    );
  }
);
