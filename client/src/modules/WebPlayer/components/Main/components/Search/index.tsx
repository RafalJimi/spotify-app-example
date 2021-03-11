import React, { memo, useEffect } from "react";
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
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const queries = queryString.parse(history.location.search);
    if (queries.term) {
      dispatch(fetchSearchDataStarted(queries.term));
    }
  }, [history.location.pathname]);

  const artistsResult = useSelector(fetchDataArtistsResultRX);
  const albumsResult = useSelector(fetchDataAlbumsResultRX);
  const playlistsResult = useSelector(fetchDataPlaylistsResultRX);
  const isLoading = useSelector(fetchSearchDataIsLoadingRX)
  const isError = useSelector(fetchSearchDataIsErrorRX)
  
  return (
    <SearchLayout
      artists={artistsResult}
      albums={albumsResult}
      playlists={playlistsResult}
      isLoading={isLoading}
      isError={isError}
    />
  );
});
