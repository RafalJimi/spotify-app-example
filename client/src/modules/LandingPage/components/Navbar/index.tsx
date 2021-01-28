import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthStarted } from "../../../../store/isAuth/actions";
import { isAuthRX } from "../../../../store/isAuth/selectors";
import { isLoggedOutRX } from "../../../../store/logoutUser/selectors";
import { NavbarLayout } from "./layout";

export const Navbar = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthRX);
  const isLoggedOut = useSelector(isLoggedOutRX);
  console.log(isAuth);

  useEffect(() => {
    dispatch(isAuthStarted());
  }, []);

  useEffect(() => {
    if (isLoggedOut) dispatch(isAuthStarted());
  }, [isLoggedOut]);

  return <NavbarLayout isAuth={isAuth} />;
};
