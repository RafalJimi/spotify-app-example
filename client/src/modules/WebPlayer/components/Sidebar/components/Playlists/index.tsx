import React, { memo, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchUserPlaylistsStarted,
  clearPlaylistsState,
} from "../../../../../../store/playlist/fetchUserPlaylists/actions";
import { createPlaylistStarted } from "../../../../../../store/playlist/createPlaylist/actions";
import { userPlaylistsRX } from "../../../../../../store/playlist/fetchUserPlaylists/selectors";
import { PlaylistsLayout } from "./layout";


export const Playlists = memo(() => {
  const dispatch = useDispatch();

  const handleCreatePlaylist = useCallback((e: React.MouseEvent) => {
    dispatch(createPlaylistStarted());
  }, []);
  
  useEffect(() => {
    dispatch(fetchUserPlaylistsStarted());
    return () => {
      dispatch(clearPlaylistsState());
    };
  }, []);

  const userPlaylists = useSelector(userPlaylistsRX);
  
  return (
    <PlaylistsLayout
      handleCreatePlaylist={handleCreatePlaylist}
      userPlaylists={userPlaylists}
    />
  );
});
