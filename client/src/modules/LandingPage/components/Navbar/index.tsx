import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthStarted } from "../../../../store/user/isAuth/actions";
import { isAuthRX } from "../../../../store/user/isAuth/selectors";
import { NavbarLayout } from "./layout";

export const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuthStarted());
  }, []);

  const isAuth = useSelector(isAuthRX);

  return <NavbarLayout isAuth={isAuth} />;
};
