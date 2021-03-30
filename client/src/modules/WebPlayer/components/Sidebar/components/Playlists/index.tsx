import React, { memo, useCallback, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserPlaylistsStarted,
  clearPlaylistsState,
} from "../../../../../../store/playlist/fetchUserPlaylists/actions";
import { createPlaylistStarted } from "../../../../../../store/playlist/createPlaylist/actions";
import {
  userPlaylistsRX,
  isLoadingRX,
} from "../../../../../../store/playlist/fetchUserPlaylists/selectors";
import { PlaylistsLayout } from "./layout";


export const Playlists = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

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
  const isLoading = useSelector(isLoadingRX);
  
  const handleRedirect = useCallback(
    (path: string) => (e: React.MouseEvent) => {
      history.push(path)
    },
    [],
  )
  
  return (
    <PlaylistsLayout
      handleCreatePlaylist={handleCreatePlaylist}
      userPlaylists={userPlaylists}
      handleRedirect={handleRedirect}
      isLoading={isLoading}
    />
  );
});
