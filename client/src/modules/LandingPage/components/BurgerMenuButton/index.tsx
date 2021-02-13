import React, { useCallback } from "react";
import { useBurgerMenuContext } from "../../../../contexts/BurgerMenu.context";
import { BurgerMenuButtonLayout } from "./layout";

export const BurgerMenuButton = () => {
  const { isOpen, setIsOpen } = useBurgerMenuContext();

  const handleBurgerMenuButton = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  return (
    <BurgerMenuButtonLayout
      handleBurgerMenuButton={handleBurgerMenuButton}
      burgerMenuIsOpen={isOpen}
    />
  );
};
