import { AppState } from "../../reducers";
import { AlbumsByArtistResults } from "./reducer";

export const albumsByArtistResultRX = (
  state: AppState
): AlbumsByArtistResults => state.albumsByArtist.albums;

export const albumsByArtistIsLoadingRX = (state: AppState): boolean =>
  state.albumsByArtist.isLoading;

export const albumsByArtistIsErrorRX = (state: AppState): boolean =>
  state.albumsByArtist.isError;
