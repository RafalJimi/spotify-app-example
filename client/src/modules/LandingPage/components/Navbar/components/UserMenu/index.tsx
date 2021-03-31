import React, { useState, useCallback, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify";
import { useClickOutside } from "../../../../../../hooks/useClickOutside";
import { isLoggedOutRX } from "../../../../../../store/user/logoutUser/selectors";
import {
  logoutUserStarted,
  clearLogoutUserState,
} from "../../../../../../store/user/logoutUser/actions";
import { isAuthRX } from "../../../../../../store/user/isAuth/selectors";
import {
  clearUserNicknameState,
  getUserNicknameStarted,
} from "../../../../../../store/user/getUserNickname/actions";
import { userNicknameRX } from "../../../../../../store/user/getUserNickname/selectors";
import { UserMenuLayout } from "./layout";

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

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    toast.dark("Work is now underway on account page.");
  }, []);

  const handleSignOut = useCallback((e: React.MouseEvent) => {
    dispatch(logoutUserStarted());
  }, []);

  const ref = useRef<HTMLElement>(null);
  
  const handleClickOutside = useCallback(
    (event) => {
      setIsOpen(false);
    },
    [IsOpen]
  );
  
  useClickOutside(ref, handleClickOutside);
  
  const isLoggedOut = useSelector(isLoggedOutRX);
  
  useEffect(() => {
    if (isLoggedOut) {
    dispatch(clearLogoutUserState())
    history.push("/");}
  }, [isLoggedOut]);
  
  const isAuth = useSelector(isAuthRX);

  useEffect(() => {
    if (isAuth === "isAuth") dispatch(getUserNicknameStarted());
    else dispatch(clearUserNicknameState());
  }, [isAuth]);

  const userNickname = useSelector(userNicknameRX);
  
  return (
    <UserMenuLayout
      handleMenu={handleMenu}
      isOpen={IsOpen}
      handleOnClick={handleOnClick}
      handleSignOut={handleSignOut}
      ref={ref}
      userNickname={userNickname}
    />
  );
};
