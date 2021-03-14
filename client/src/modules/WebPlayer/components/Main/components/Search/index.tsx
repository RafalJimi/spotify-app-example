import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { SearchLayout } from "./layout";
import { fetchSearchDataStarted } from "../../../../../../store/iTunesAPI/fetchSearchData/actions";
import {
  fetchDataArtistsResultRX,
  fetchDataAlbumsResultRX,
  fetchDataPlaylistsResultRX,
  fetchSearchDataIsLoadingRX,
  fetchSearchDataIsErrorRX,
} from "../../../../../../store/iTunesAPI/fetchSearchData/selectors";

export const Search = memo(() => {
  const [IsTerm, setIsTerm] = useState(false);;

  const history = useHistory();
  const dispatch = useDispatch();
  
  const queries = queryString.parse(history.location.search);
  const searchTerm = queries.term

  useEffect(() => {
    if (searchTerm) {
      setIsTerm(true);
      dispatch(fetchSearchDataStarted(searchTerm));
    } else {
      setIsTerm(false);
    }
  }, [searchTerm]);

  const artistsResult = useSelector(fetchDataArtistsResultRX);
  const albumsResult = useSelector(fetchDataAlbumsResultRX);
  const playlistsResult = useSelector(fetchDataPlaylistsResultRX);
  const isLoading = useSelector(fetchSearchDataIsLoadingRX);
  const isError = useSelector(fetchSearchDataIsErrorRX);

  return (
    <SearchLayout
      isTerm={IsTerm}
      artists={artistsResult}
      albums={albumsResult}
      playlists={playlistsResult}
      isLoading={isLoading}
      isError={isError}
    />
  );
});
