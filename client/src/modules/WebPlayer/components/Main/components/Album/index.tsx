import React, { useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AlbumLayout } from "./layout";

export const Album = () => {
  const history = useHistory();
  const albumName = useParams();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <AlbumLayout handleOnClick={handleOnClick} />;
};
