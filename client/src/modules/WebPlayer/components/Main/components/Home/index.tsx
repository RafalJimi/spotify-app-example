import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { HomeLayout } from "./layout";

export const Home = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <HomeLayout handleOnClick={handleOnClick} />;
};
