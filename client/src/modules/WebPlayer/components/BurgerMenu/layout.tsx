import React, { forwardRef } from "react";
import { Logo } from "./components/Logo/index";
import { Menu } from "./components/Menu/index";
import { Playlists } from "./components/Playlists/index";
import { Container, BurgerMenuContainer } from "./layout.styled";

type BurgerMenuLayoutProps = {
  isOpen: boolean;
};

export const BurgerMenuLayout = forwardRef<HTMLElement, BurgerMenuLayoutProps>(
  ({ isOpen }: BurgerMenuLayoutProps, ref: any) => (
    <Container isOpen={isOpen}>
      <BurgerMenuContainer isOpen={isOpen} ref={ref}>
        <Logo />
        <Menu />
        <Playlists />
      </BurgerMenuContainer>
    </Container>
  )
);
