import React, { useCallback, useEffect, useState, useRef, memo } from "react";
import { useHistory, useParams } from "react-router-dom";
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
import { useEditDetailsContext } from "../../../../../../contexts/EditDetails.context";
import { useClickOutside } from "../../../../../../hooks/useClickOutside";
import { deletePlaylistStarted } from "../../../../../../store/playlist/deletePlaylist/actions";

export const Playlist = memo(() => {
  const [MenuIsOpen, setMenuIsOpen ] = useState(false)
  let { playlistID } = useParams<{ playlistID: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  
  const { setPlaylistComponentIsMounted } = usePlaylistsContext();
  const { setIsOpen } = useEditDetailsContext();

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
  
  const handleMenuButton = useCallback(
    (e: React.MouseEvent) => {
      setMenuIsOpen(!MenuIsOpen);
    },
    [MenuIsOpen]
  );
  
  const handleEditDetails = useCallback(
    (e: React.MouseEvent) => {
      setMenuIsOpen(false);
      setIsOpen(true);
    },
    [MenuIsOpen]
  );
  
  const ref = useRef<HTMLElement>(null);
  
  const handleClickOutside = useCallback(
    (event) => {
      setMenuIsOpen(false);
    },
    [MenuIsOpen]
  );
  
  useClickOutside(ref, handleClickOutside);
  
  const handleDeletePlaylist = useCallback(
    (e: React.MouseEvent) => {
      dispatch(deletePlaylistStarted({ playlistID }));
      history.push('/player/library')
    },
    []
  );

  return (
    <PlaylistLayout
      isOpen={MenuIsOpen}
      isLoading={isLoading}
      playlistData={playlistData}
      isError={isError}
      handleMenuButton={handleMenuButton}
      handleEditDetails={handleEditDetails}
      ref={ref}
      handleDeletePlaylist={handleDeletePlaylist}
    />
  );
});

