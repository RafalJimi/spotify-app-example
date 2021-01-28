import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { BurgerMenuButtonLayout } from "./layout";

export const BurgerMenuButton = () => {
  const dispatch = useDispatch();

  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);

  const handleBurgerMenuButton = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleBurgerMenu());
    },
    [burgerMenuIsOpen]
  );

  return (
    <BurgerMenuButtonLayout
      handleBurgerMenuButton={handleBurgerMenuButton}
      burgerMenuIsOpen={burgerMenuIsOpen}
    />
  );
};
