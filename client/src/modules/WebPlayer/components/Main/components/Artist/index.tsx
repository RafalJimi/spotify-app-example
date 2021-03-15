import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSongsByArtist,
  clearSongsByArtistState,
} from "../../../../../../store/iTunesAPI/fetchSongsByArtist/actions";
import {
  fetchAlbumsByArtist,
  clearAlbumsByArtistState,
} from "../../../../../../store/iTunesAPI/fetchAlbumsByArtist/actions";
import {
  songsByArtistResultRX,
  songsByArtistIsLoadingRX,
  songsByArtistIsErrorRX,
} from "../../../../../../store/iTunesAPI/fetchSongsByArtist/selectors";
import {
  albumsByArtistResultRX,
  albumsByArtistIsLoadingRX,
  albumsByArtistIsErrorRX,
} from "../../../../../../store/iTunesAPI/fetchAlbumsByArtist/selectors";
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

  const songs = useSelector(songsByArtistResultRX);
  const songsAreLoading = useSelector(songsByArtistIsLoadingRX);

  const albums = useSelector(albumsByArtistResultRX);
  const albumsAreLoading = useSelector(albumsByArtistIsLoadingRX);

  const songsByArtistIsError = useSelector(songsByArtistIsErrorRX);
  const albumsByArtistIsError = useSelector(albumsByArtistIsErrorRX);
  
  const { setFetchedSongsArr } = useReactPlayerContext();
  
  useEffect(() => {
    if (songs.resultCount > 0) setFetchedSongsArr(songs.results);
  }, [songs.results]);

  return (
    <ArtistLayout
      songs={songs}
      albums={albums}
      songsAreLoading={songsAreLoading}
      albumsAreLoading={albumsAreLoading}
      songsByArtistIsError={songsByArtistIsError}
      albumsByArtistIsError={albumsByArtistIsError}
      artistName={artistName}
    />
  );
});
