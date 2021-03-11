import { AppState } from "../../reducers";
import { ArtistsResult, AlbumsResult, PlaylistsResult } from "./reducer";

export const fetchDataArtistsResultRX = (state: AppState): ArtistsResult =>
  state.fetchSearchData.artists;

export const fetchDataAlbumsResultRX = (state: AppState): AlbumsResult =>
  state.fetchSearchData.albums;

export const fetchDataPlaylistsResultRX = (state: AppState): PlaylistsResult =>
  state.fetchSearchData.playlists;

export const fetchSearchDataIsLoadingRX = (state: AppState): boolean =>
  state.fetchSearchData.isLoading;

export const fetchSearchDataIsErrorRX = (state: AppState): boolean =>
  state.fetchSearchData.isError;
