import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { LoginReferenceLayout } from "./layout";

export const LoginReference = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <LoginReferenceLayout handleOnClick={handleOnClick} />;
};
