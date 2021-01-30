import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { LogoLayout } from "./layout";

export const Logo = () => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push("/player");
  }, []);

  return <LogoLayout handleOnClick={handleOnClick} />;
};
