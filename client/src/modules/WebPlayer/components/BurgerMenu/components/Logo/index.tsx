import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useBurgerMenuContext } from "../../../../../../contexts/BurgerMenu.context";
import { LogoLayout } from "./layout";

export const Logo = () => {
  const history = useHistory();

  const { setIsOpen } = useBurgerMenuContext();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push("/player/home");
    setIsOpen(false);
  }, []);

  const handleCloseButton = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LogoLayout
      handleOnClick={handleOnClick}
      handleCloseButton={handleCloseButton}
    />
  );
};
