import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { HeaderLayout } from "./layout";

export const Header = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <HeaderLayout handleOnClick={handleOnClick} />;
};
