import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPlaylistStarted } from "../../../../../../store/createPlaylist/actions";
import { PlaylistsLayout } from "./layout";


export const Playlists = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  const handleCreatePlaylist = useCallback((e: React.MouseEvent) => {
    dispatch(createPlaylistStarted());
  }, []);

  return (
    <PlaylistsLayout
      handleOnClick={handleOnClick}
      handleCreatePlaylist={handleCreatePlaylist}
    />
  );
};
