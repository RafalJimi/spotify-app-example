import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { fetchSongsByAlbum } from "../../../../../../store/iTunesAPI/fetchSongsByAlbum/actions";
import { fetchAlbumsByArtist } from "../../../../../../store/iTunesAPI/fetchAlbumsByArtist/actions";
import { AlbumLayout } from "./layout";
import {
  songsByAlbumResultRX,
  songsByAlbumIsLoadingRX,
  songsByAlbumIsErrorRX,
} from "../../../../../../store/iTunesAPI/fetchSongsByAlbum/selectors";
import {
  albumsByArtistResultRX,
  albumsByArtistIsLoadingRX,
  albumsByArtistIsErrorRX,
} from "../../../../../../store/iTunesAPI/fetchAlbumsByArtist/selectors";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";

export const Album = () => {
  let { albumName } = useParams<{ albumName: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const queries = queryString.parse(history.location.search);
    const { artist, limit } = queries;
    dispatch(fetchSongsByAlbum(albumName, limit));
    dispatch(fetchAlbumsByArtist(artist));
  }, [albumName]);

  const songsByAlbumResult = useSelector(songsByAlbumResultRX);
  const albumsByArtistResult = useSelector(albumsByArtistResultRX);

  const songsByAlbumIsLoading = useSelector(songsByAlbumIsLoadingRX);
  const albumsByArtistIsLoading = useSelector(albumsByArtistIsLoadingRX);

  const songsByAlbumIsError = useSelector(songsByAlbumIsErrorRX);
  const albumsByArtistIsError = useSelector(albumsByArtistIsErrorRX);

  const { setFetchedSongsArr } = useReactPlayerContext();

  useEffect(() => {
    if (songsByAlbumResult.resultCount > 0)
      setFetchedSongsArr(songsByAlbumResult.results);
  }, [songsByAlbumResult.results]);
  
  return (
    <AlbumLayout
      songsByAlbumResult={songsByAlbumResult}
      albumsByArtistResult={albumsByArtistResult}
      songsByAlbumIsLoading={songsByAlbumIsLoading}
      albumsByArtistIsLoading={albumsByArtistIsLoading}
      songsByAlbumIsError={songsByAlbumIsError}
      albumsByArtistIsError={albumsByArtistIsError}
      albumName={albumName}
    />
  );
};
