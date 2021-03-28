import React, { forwardRef } from "react";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Playlists } from "./components/Playlists";
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
