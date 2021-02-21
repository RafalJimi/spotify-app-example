import { AppState } from "../reducers";
import { AlbumsByArtistResults } from "./reducer";

export const albumsByArtistResult = (state: AppState): AlbumsByArtistResults =>
  state.albumsByArtist.albums;

export const albumsByArtistIsLoading = (state: AppState): boolean =>
  state.albumsByArtist.isLoading;

export const albumsByArtistIsError = (state: AppState): boolean =>
  state.albumsByArtist.isError;
