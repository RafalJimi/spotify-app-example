import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserStarted } from "../../../../../../store/user/logoutUser/actions";
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

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  const handleSignOut = useCallback((e: React.MouseEvent) => {
    dispatch(logoutUserStarted());
  }, []);

  return (
    <UserMenuLayout
      handleMenu={handleMenu}
      isOpen={IsOpen}
      handleOnClick={handleOnClick}
      handleSignOut={handleSignOut}
    />
  );
};
