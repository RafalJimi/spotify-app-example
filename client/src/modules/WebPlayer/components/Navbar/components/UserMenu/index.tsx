import React, { useState, useCallback, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAuthRX } from "../../../../../../store/user/isAuth/selectors";
import { isAuthStarted } from "../../../../../../store/user/isAuth/actions";
import { signOut } from "../../../../../../helpers/auth";
import { toast } from "react-toastify";
import { useClickOutside } from "../../../../../../hooks/useClickOutside";
import { UserMenuLayout } from "./layout";
import { logoutUserStarted } from "../../../../../../store/user/logoutUser/actions";


export const UserMenu = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleMenu = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(!IsOpen);
    },
    [IsOpen]
  );

  const handleMenuItem = useCallback((e: React.MouseEvent) => {
      toast.dark("Work is now underway on account page.");
    },
    []
  );

  const handleSignOut = useCallback((e: React.MouseEvent) => {
    dispatch(logoutUserStarted());
    history.push("/")
  }, []);

  useEffect(() => {
    dispatch(isAuthStarted());
  }, [history.location.pathname]);
  
  const isAuth = useSelector(isAuthRX);
  
  useEffect(() => {
    if (isAuth == "isNotAuth") {
      signOut();
      toast.dark("Your session expired, please log in again.");
      setTimeout(() => history.push("/"), 5000);
    } else console.log("You are authenticated");
  }, [isAuth]);
  
  const ref = useRef<HTMLElement>(null);
  
  const handleClickOutside = useCallback(
    (event) => {
      setIsOpen(false);
    },
    [IsOpen]
  );
  
  useClickOutside(ref, handleClickOutside);
  
  return (
    <UserMenuLayout
      handleMenu={handleMenu}
      isOpen={IsOpen}
      handleMenuItem={handleMenuItem}
      handleSignOut={handleSignOut}
      ref={ref}
    />
  );
};
