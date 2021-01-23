import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { NavbarLayout } from "./layout";

export const Navbar = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <NavbarLayout handleOnClick={handleOnClick} />;
};
