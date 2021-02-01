import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { NavButtonsLayout } from "./layout";

export const NavButtons = () => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push("/");
  }, []);

  return <NavButtonsLayout handleOnClick={handleOnClick} />;
};
