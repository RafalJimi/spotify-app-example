import React from "react";
import { BurgerButtonContainer, BurgerButton } from "./layout.styled";

type BurgerMenuButtonLayoutProps = {
  handleBurgerMenuButton: (e: React.MouseEvent) => void;
  burgerMenuIsOpen: boolean;
};

export const BurgerMenuButtonLayout = ({
  handleBurgerMenuButton,
  burgerMenuIsOpen,
}: BurgerMenuButtonLayoutProps) => (
  <BurgerButtonContainer>
    <BurgerButton isOpen={burgerMenuIsOpen} onClick={handleBurgerMenuButton}>
      <div />
      <div />
      <div />
    </BurgerButton>
  </BurgerButtonContainer>
);
