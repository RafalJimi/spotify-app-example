import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useBurgerMenuContext } from "../../../../../../contexts/BurgerMenu.context";
import { MenuLayout } from "./layout";

export const Menu = () => {
  const history = useHistory();

  const { setIsOpen } = useBurgerMenuContext();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
      setIsOpen(false);
    },
    []
  );

  return <MenuLayout handleOnClick={handleOnClick} />;
};
