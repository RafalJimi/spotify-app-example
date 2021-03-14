import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPlaylistsStarted } from "../../../../../../store/playlist/fetchUserPlaylists/actions";
import { userPlaylistsRX, isLoadingRX, isErrorRX } from "../../../../../../store/playlist/fetchUserPlaylists/selectors";
import { LibraryLayout } from "./layout";

export const Library = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUserPlaylistsStarted());
  }, []);

  const userPlaylists = useSelector(userPlaylistsRX);
  const isLoading = useSelector(isLoadingRX);
  
  return <LibraryLayout userPlaylists={userPlaylists} isLoading={isLoading} />;
};
