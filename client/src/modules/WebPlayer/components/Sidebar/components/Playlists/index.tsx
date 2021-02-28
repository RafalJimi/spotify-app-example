import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserPlaylistsStarted,
  clearPlaylistsState,
} from "../../../../../../store/fetchUserPlaylists/actions";
import { createPlaylistStarted } from "../../../../../../store/createPlaylist/actions";
import { userPlaylistsRX } from '../../../../../../store/fetchUserPlaylists/selectors'
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
