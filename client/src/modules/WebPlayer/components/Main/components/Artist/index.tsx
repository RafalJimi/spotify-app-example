import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSongsByArtist,
  clearSongsByArtistState,
} from "../../../../../../store/fetchSongsByArtist/actions";
import {
  fetchAlbumsByArtist,
  clearAlbumsByArtistState,
} from "../../../../../../store/fetchAlbumsByArtist/actions";
import { songsByArtistResult, songsByArtistIsLoading } from "../../../../../../store/fetchSongsByArtist/selectors";
import {
  albumsByArtistResult,
  albumsByArtistIsLoading,
} from "../../../../../../store/fetchAlbumsByArtist/selectors";
import { useReactPlayerContext } from '../../../../../../contexts/ReactPlayer.context'
import { ArtistLayout } from "./layout";

export const Artist = memo(() => {
  let { artistName } = useParams<{ artistName: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsByArtist(artistName, 5));
    dispatch(fetchAlbumsByArtist(artistName));
    return () => {
      dispatch(clearSongsByArtistState());
      dispatch(clearAlbumsByArtistState());
    };
  }, [artistName]);

  const songs = useSelector(songsByArtistResult);
  const songsAreLoading = useSelector(songsByArtistIsLoading);
  
  const albums = useSelector(albumsByArtistResult);
  const albumsAreLoading = useSelector(albumsByArtistIsLoading);
  
  const { setFetchedSongsArr } = useReactPlayerContext();
  
  useEffect(() => {
    if (setFetchedSongsArr.length !== 0) setFetchedSongsArr(songs.results);
  }, [songs.results]);

  return (
    <ArtistLayout
      songs={songs}
      albums={albums}
      songsAreLoading={songsAreLoading}
      albumsAreLoading={albumsAreLoading}
    />
  );
});
