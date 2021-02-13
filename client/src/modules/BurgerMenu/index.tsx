import React, { useCallback, useRef } from "react";
import { useBurgerMenuContext } from "../../contexts/BurgerMenu.context";
import { useClickOutside } from '../../hooks/useClickOutside'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isAuthRX } from "../../store/isAuth/selectors";
import { logoutUserStarted } from "../../store/logoutUser/actions";
import { BurgerMenuLayout } from "./layout";

export const BurgerMenu = () => {
  const divRef = useRef<HTMLElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const { isOpen, setIsOpen } = useBurgerMenuContext();
  
  const isAuth = useSelector(isAuthRX);

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      setIsOpen(false);
      history.push(location);
    },
    []
  );
  
  const handleSignOut = useCallback((e: React.MouseEvent) => {
    dispatch(logoutUserStarted());
    setIsOpen(false);
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      setIsOpen(false);
    },
    [isOpen]
  );
  
  useClickOutside(divRef, handleClickOutside);
  
  return (
    <BurgerMenuLayout
      ref={divRef}
      isOpen={isOpen}
      isAuth={isAuth}
      handleOnClick={handleOnClick}
      handleSignOut={handleSignOut}
    />
  );
};
