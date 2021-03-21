import React, { memo, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import {
  fetchSongsByAlbum,
  clearSongsByAlbumState,
} from "../../../../../../store/iTunesAPI/fetchSongsByAlbum/actions";
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
import { Song } from "../../../../../../store/types/song";

export const Album = memo(() => {
  const [SongsFromAlbum, setSongsFromAlbum] = useState<Song[]>([]);;

  let { albumName } = useParams<{ albumName: string }>();
  const dispatch = useDispatch();
  const history = useHistory();
  
  const {
    Play,
    setFetchedSongsArr,
    PlayTheseSongs,
    setPlayTheseSongs,
    setPlay,
    setIndex,
    setUrl,
    setCurrentSongsArr,
  } = useReactPlayerContext();

  useEffect(() => {
    const queries = queryString.parse(history.location.search);
    const { artist, limit } = queries;
    setFetchedSongsArr([]);
    dispatch(fetchSongsByAlbum(albumName, limit));
    dispatch(fetchAlbumsByArtist(artist));
  }, [albumName]);

  const songsByAlbumResult = useSelector(songsByAlbumResultRX);
  const albumsByArtistResult = useSelector(albumsByArtistResultRX);

  const songsByAlbumIsLoading = useSelector(songsByAlbumIsLoadingRX);
  const albumsByArtistIsLoading = useSelector(albumsByArtistIsLoadingRX);

  const songsByAlbumIsError = useSelector(songsByAlbumIsErrorRX);
  const albumsByArtistIsError = useSelector(albumsByArtistIsErrorRX);

  useEffect(() => {
    let songsArr: Song[] = [];
    songsByAlbumResult.results.filter((songFromAlbum) =>
      songFromAlbum.artworkUrl100 ===
      songsByAlbumResult.results[0].artworkUrl100
        ? songsArr.push(songFromAlbum)
        : null
    );
    setSongsFromAlbum(songsArr);
  }, [songsByAlbumResult.results]);

  useEffect(() => {
    if (SongsFromAlbum.length > 0 && !PlayTheseSongs) {
      setFetchedSongsArr(SongsFromAlbum);
    } else if (SongsFromAlbum.length > 0 && PlayTheseSongs) {
      setFetchedSongsArr(SongsFromAlbum);
      setUrl(SongsFromAlbum[0].previewUrl);
      setIndex(0);
      setPlay(true);
      setPlayTheseSongs(false);
      setCurrentSongsArr(SongsFromAlbum);
    }
  }, [SongsFromAlbum.length])
  
  useEffect(() => {
    return () => {
      dispatch(clearSongsByAlbumState());
      setFetchedSongsArr([]);
    };
  }, []);

  return (
    <AlbumLayout
      songsByAlbumResult={songsByAlbumResult}
      albumsByArtistResult={albumsByArtistResult}
      songsByAlbumIsLoading={songsByAlbumIsLoading}
      albumsByArtistIsLoading={albumsByArtistIsLoading}
      songsByAlbumIsError={songsByAlbumIsError}
      albumsByArtistIsError={albumsByArtistIsError}
      albumName={albumName}
      songsFromAlbum={SongsFromAlbum}
    />
  );
});
