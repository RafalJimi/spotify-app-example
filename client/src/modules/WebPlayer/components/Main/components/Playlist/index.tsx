import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlaylistStarted } from "../../../../../../store/fetchUserPlaylist/actions";
import { playlistDataRX } from "../../../../../../store/fetchUserPlaylist/selectors";
import { PlaylistLayout } from "./layout";

export const Playlist = () => {
  let { playlistID } = useParams<{ playlistID: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylistStarted(playlistID));
  }, [playlistID]);

  const playlistData = useSelector(playlistDataRX);
  
  return <PlaylistLayout playlistData={playlistData} />;
};;