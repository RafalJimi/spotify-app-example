import React from "react";
import Logo from "../../assets/spotify-logo.png";
import {
  BurgerMenuContainer,
  Menu,
  MenuItem,
  LogoContainer,
  Close,
} from "./layout.styled";

const Fade = require("react-reveal/Fade");

type BurgerMenuLayoutProps = {
  burgerMenuIsOpen: boolean;
  isAuth: boolean;
  handleCloseMenu: (e: React.MouseEvent) => void;
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
  handleSignOut: (e: React.MouseEvent) => void;
};

export const BurgerMenuLayout = ({
  burgerMenuIsOpen,
  isAuth,
  handleCloseMenu,
  handleOnClick,
  handleSignOut,
}: BurgerMenuLayoutProps) => {
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
    <Menu>
      <Fade when={burgerMenuIsOpen} right cascade>
        <MenuItem onClick={handleOnClick("/signup")}>Register</MenuItem>
        <MenuItem onClick={handleOnClick("/login")}>Sign in</MenuItem>
      </Fade>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
    </Menu>
  );

  return (
    <BurgerMenuContainer isOpen={burgerMenuIsOpen}>
      <Close onClick={handleCloseMenu} />
      {isAuth ? isAuthMenu : isNotAuthMenu}
    </BurgerMenuContainer>
  );
};
