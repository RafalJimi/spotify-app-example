import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleBurgerMenu } from "../../store/burgerMenu/actions";
import { burgerMenuIsOpenRX } from "../../store/burgerMenu/selectors";
import { isAuthRX } from "../../store/isAuth/selectors";
import { logoutUserStarted } from "../../store/logoutUser/actions";
import { BurgerMenuLayout } from "./layout";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);
  const isAuth = useSelector(isAuthRX);

  const handleCloseMenu = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleBurgerMenu());
    },
    [burgerMenuIsOpen]
  );

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      dispatch(toggleBurgerMenu());
      window.onscroll = function () {};
      history.push(location);
    },
    []
  );

  const handleSignOut = useCallback((e: React.MouseEvent) => {
    dispatch(logoutUserStarted());
    dispatch(toggleBurgerMenu());
  }, []);

  return (
    <BurgerMenuLayout
      burgerMenuIsOpen={burgerMenuIsOpen}
      isAuth={isAuth}
      handleCloseMenu={handleCloseMenu}
      handleOnClick={handleOnClick}
      handleSignOut={handleSignOut}
    />
  );
};
