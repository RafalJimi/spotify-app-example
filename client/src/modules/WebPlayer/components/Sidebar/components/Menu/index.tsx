import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenuLayout } from "./layout";

export const Menu = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <MenuLayout handleOnClick={handleOnClick} />;
};
