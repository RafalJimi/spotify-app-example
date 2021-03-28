import React from "react";
import { Container, BurgerButton } from "./layout.styled";

type BurgerMenuButtonLayoutProps = {
  handleBurgerMenuButton: (e: React.MouseEvent) => void;
  burgerMenuIsOpen: boolean;
};

export const BurgerMenuButtonLayout = ({
  handleBurgerMenuButton,
  burgerMenuIsOpen,
}: BurgerMenuButtonLayoutProps) => (
  <Container>
    <BurgerButton isOpen={burgerMenuIsOpen} onClick={handleBurgerMenuButton}>
      <div />
      <div />
      <div />
    </BurgerButton>
  </Container>
);
