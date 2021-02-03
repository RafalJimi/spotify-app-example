import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { SearchLayout } from "./layout";

export const Search = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <SearchLayout handleOnClick={handleOnClick} />;
};
