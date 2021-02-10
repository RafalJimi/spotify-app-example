import React, { useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ArtistLayout } from "./layout";

export const Artist = () => {
  const history = useHistory();
  const artistName = useParams();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <ArtistLayout handleOnClick={handleOnClick} />;
};
