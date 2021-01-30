import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { PlaylistsLayout } from "./layout";

export const Playlists = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <PlaylistsLayout handleOnClick={handleOnClick} />;
};
