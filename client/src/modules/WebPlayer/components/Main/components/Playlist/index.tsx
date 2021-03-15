import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlaylistStarted } from "../../../../../../store/playlist/fetchUserPlaylist/actions";
import {
  playlistDataRX,
  isLoadingRX,
  isErrorRX,
} from "../../../../../../store/playlist/fetchUserPlaylist/selectors";
import { usePlaylistsContext } from "../../../../../../contexts/Playlists.context";
import { PlaylistLayout } from "./layout";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";

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
  const isError = useSelector(isErrorRX);
  
  const { setFetchedSongsArr } = useReactPlayerContext();

  useEffect(() => {
    if (playlistData.songs.length > 0) setFetchedSongsArr(playlistData.songs);
  }, [playlistData.songs]);
  
  return (
    <PlaylistLayout
      isLoading={isLoading}
      playlistData={playlistData}
      isError={isError}
    />
  );
};;