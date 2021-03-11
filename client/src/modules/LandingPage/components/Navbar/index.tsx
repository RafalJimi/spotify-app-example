import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthStarted } from "../../../../store/user/isAuth/actions";
import { isAuthRX } from "../../../../store/user/isAuth/selectors";
import { isLoggedOutRX } from "../../../../store/user/logoutUser/selectors";
import { NavbarLayout } from "./layout";

export const Navbar = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthRX);
  const isLoggedOut = useSelector(isLoggedOutRX);

  useEffect(() => {
    dispatch(isAuthStarted());
  }, []);

  useEffect(() => {
    if (isLoggedOut) dispatch(isAuthStarted());
  }, [isLoggedOut]);

  return <NavbarLayout isAuth={isAuth} />;
};
