import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlaylistStarted } from "../../../../../../store/playlist/fetchUserPlaylist/actions";
import {
  playlistDataRX,
  isLoadingRX,
} from "../../../../../../store/playlist/fetchUserPlaylist/selectors";
import { usePlaylistsContext } from "../../../../../../contexts/Playlists.context";
import { PlaylistLayout } from "./layout";

export const Playlist = () => {
  let { playlistID } = useParams<{ playlistID: string }>();
  const dispatch = useDispatch();
  
  const { setPlaylistComponentIsMounted } = usePlaylistsContext();

  useEffect(() => {
    dispatch(fetchPlaylistStarted(playlistID));
    setPlaylistComponentIsMounted(true);
    return () => {
      setPlaylistComponentIsMounted(false);
    };
  }, [playlistID]);

  const isLoading = useSelector(isLoadingRX);
  const playlistData = useSelector(playlistDataRX);
  
  
  return <PlaylistLayout isLoading={isLoading} playlistData={playlistData} />;
};;